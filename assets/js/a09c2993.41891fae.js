"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[899],{1456:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(4848),t=i(8453);const r={id:"introduction",title:"Introduction",sidebar_position:1,slug:"/"},o=void 0,a={id:"introduction",title:"Introduction",description:"Metrics Framework",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/eosc-recommender-metrics/docs/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Dashboard Views",permalink:"/eosc-recommender-metrics/docs/category/dashboard-views"}},c={},d=[{value:"Metrics Framework",id:"metrics-framework",level:2},{value:"Reports",id:"reports",level:3},{value:"Components Functionality",id:"components-functionality",level:2},{value:"Preprocessor",id:"preprocessor",level:3},{value:"RS Metrics",id:"rs-metrics",level:3}];function l(e){const s={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"metrics-framework",children:"Metrics Framework"}),"\n",(0,n.jsx)("p",{align:"justify",children:(0,n.jsxs)(s.p,{children:["The Recommender System (RS) is a novel component of the EOSC Portal meant to improve user experience. It provides EOSC users with recommendations concerning resources that could be of their interest, based on a multi-focal perspective of the users. Measuring the success of such system is crucial to get valuable insights in many aspects that affect user experience. In this approach, an independent metrics framework as a service is being introduced to support the evaluation and adaptation of recommendation mechanisms. The use of additional diagnostic metrics and visualizations offers deeper and sometimes surprising insights into a model\u2019s performance. The evaluation is quantitatively being performed by processing information such as ",(0,n.jsx)("b",{children:"resources"}),", ",(0,n.jsx)("b",{children:"user actions"}),", ",(0,n.jsx)("b",{children:"ratings"}),", and ",(0,n.jsx)("b",{children:"recommendations"})," in order to measure the impact of the AI-enhanced services and user satisfaction as well as to incorporate this feedback and improve the services provided, via a user-friendly API and dashboard UI."]})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Flow",src:i(8014).A+"",width:"1280",height:"720"})}),"\n",(0,n.jsx)(s.h3,{id:"reports",children:"Reports"}),"\n",(0,n.jsx)(s.p,{children:"Presently, we provide daily assessments:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"for the Marketplace RS by utilizing service resources, and"}),"\n",(0,n.jsx)(s.li,{children:"for the Online Engine through training and software resources."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Both evaluations occur on a daily basis, with resource retrieval facilitated by the get_catalog.py Python module. While service data is obtained daily, the acquisition of training and software data is a manual, best-effort process owing to the extensive size of the dataset."}),"\n",(0,n.jsx)(s.h2,{id:"components-functionality",children:"Components Functionality"}),"\n",(0,n.jsx)(s.h3,{id:"preprocessor",children:"Preprocessor"}),"\n",(0,n.jsx)(s.p,{children:"This module is responsible for:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"data retrieval through a connector module that claims and transforms data from various sources"}),"\n",(0,n.jsx)(s.li,{children:"service-associated knowledge correlations"}),"\n",(0,n.jsx)(s.li,{children:"dummy or dissociated data removal"}),"\n",(0,n.jsx)(s.li,{children:"tagging of various associations in the data, i.e. registered or anonymous -related users and services"}),"\n",(0,n.jsx)(s.li,{children:"generation of statistics information."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Preprocessor",src:i(6787).A+"",width:"3151",height:"1840"})}),"\n",(0,n.jsx)(s.h3,{id:"rs-metrics",children:"RS Metrics"}),"\n",(0,n.jsx)(s.p,{children:"This module is responsible for:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"processing the data"}),"\n",(0,n.jsx)(s.li,{children:"computing the designated evaluation metrics"}),"\n",(0,n.jsx)(s.li,{children:"producing the necessary information in a homogenized manner."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"RSMetrics",src:i(1580).A+"",width:"2533",height:"1444"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8014:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/flow-d8d367e05fa974f63dabb58795db8480.png"},6787:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/preprocessor-74b060ed802912028079df44e326b96e.png"},1580:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/rsmetrics-903888a102e75abe883f060d3e77e85b.png"},8453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>a});var n=i(6540);const t={},r=n.createContext(t);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);