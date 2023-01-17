#!/usr/bin/env python3

import time
import stomp
import argparse
import sys
import json
import logging
import ssl
import pymongo 
import dateutil.parser
# Streaming connector using stomp protocol to ingest data from rs databus

# establish basic logging
logging.basicConfig(stream=sys.stdout, level=logging.DEBUG, format='[%(asctime)s] %(levelname)s %(message)s')


def main(args):

    # extract provider arg
    provider = args.provider
    
    # init resource_lookup dictionary where we store service paths to corresponding ids
    resource_lookup = {}

    # Create a listener class to react on each message received from the queue
    class UserActionsListener(stomp.ConnectionListener):
        def __init__(self, conn):
            self.conn = conn
        
        # In case of error log it along with the message
        def on_error(self, frame):
            logging.error('error occured {}'.format(frame.body))

        def on_message(self, frame):
            # process the message
            message = json.loads(json.loads(frame.body))
        
            panel = 'other'
            target_path = ''
            source_path = ''
            target_resource_id = -1
            source_resource_id = -1
            user_id = -1
            if 'user_id' in message:
                user_id = message['user_id']

            if 'source' in message:
                if 'page_id' in message['source']:
                    source_path = message['source']['page_id']
                
                if 'root' in message['source']:
                    if 'type' in message['source']['root']:
                        panel = message['source']['root']['type']
            
            if 'target' in message:
                if 'page_id' in message['target']:
                    target_path = message['target']['page_id']

            # if path exist in resource lookup dictionary, identify the resource id 
            if target_path in resource_lookup:
                target_resource_id = resource_lookup[target_path]

            # if path exist in resource lookup dictionary, identify the resource id 
            if source_path in resource_lookup:
                source_resource_id = resource_lookup[source_path]
            
            record = {
                'timestamp': dateutil.parser.isoparse(message['timestamp']),
                'user_id': user_id,
                'panel': panel,
                'target_path': target_path,
                'source_path': source_path,
                'target_resource_id': target_resource_id,
                'source_resource_id': source_resource_id,
                'reward': 0.0,
                'type': 'service',
                'ingestion': 'stream',
                'provider': provider  
            }

            rsmetrics_db['user_actions'].insert_one(record)

    


    # connect to the datastore
    mongo = pymongo.MongoClient(args.datastore, uuidRepresentation='pythonLegacy')
    rsmetrics_db = mongo[args.datastore.split('/')[-1]]

    username, password = args.auth.split(":")
    host, port = args.queue.split(":")

    # get resources (services for the time being) 
    resources = rsmetrics_db['resources'].find({},{"_id":0,"path":1,"id":1})
    for item in resources:
        resource_lookup[item["path"]] = item["id"]
  

    # create the connection to the queue
    msg_queue = stomp.Connection([(host, port)], heartbeats=(10000, 5000))
    msg_queue.set_ssl(for_hosts=[(host, port)], ssl_version=ssl.PROTOCOL_TLS)
    
    # Check what kind of resource_type is going to be used
    if args.data_type == "user_actions":
        msg_queue.set_listener('', UserActionsListener(msg_queue))
    else:
        logging.error("{} is not a supported ingestion data type".format(args.data_type))
        sys.exit(1)

    msg_queue.connect(username, password, wait=True)
    # subscribe to the topic
    msg_queue.subscribe(destination='/topic/'+ args.data_type, id=1, ack='auto')
    
    while True:
        time.sleep(2)


if __name__ == "__main__":

    parser = argparse.ArgumentParser(description="RS Stream Connector")
    parser.add_argument(
        "-a", "--auth", metavar="STRING", help="authentication in the form username:password", required=True, dest="auth")
    parser.add_argument(
        "-q", "--queue", metavar="STRING", help="queue in the form host:port", required=True, dest="queue")
    parser.add_argument(
        "-t", "--type", metavar="STRING", help="type of data to be ingested (e.g. user_actions, recommendations)", required=True, dest="data_type")
    parser.add_argument(
        "-d", "--datastore", metavar="STRING", help="datastore uri", required=True, dest="datastore")
    parser.add_argument(
        "-p", "--provider", metavar="STRING", help="name of the provider", required=True, dest="provider")
    


    # Pass the arguments to main method
    sys.exit(main(parser.parse_args()))