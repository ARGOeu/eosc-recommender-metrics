"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[782],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,h=m["".concat(c,".").concat(u)]||m[u]||l[u]||s;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},870:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const s={id:"graphs",title:"Graphs",sidebar_position:3},i=void 0,o={unversionedId:"dashboard_views/graphs",id:"dashboard_views/graphs",title:"Graphs",description:"The RS Metrics software designs and exposes information graphs concerning attributes defined in the RS. The current implementation exposes:",source:"@site/docs/dashboard_views/graphs.md",sourceDirName:"dashboard_views",slug:"/dashboard_views/graphs",permalink:"/eosc-recommender-metrics/docs/dashboard_views/graphs",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"graphs",title:"Graphs",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"KPIs",permalink:"/eosc-recommender-metrics/docs/dashboard_views/kpis"},next:{title:"Metrics Descriptions",permalink:"/eosc-recommender-metrics/docs/category/metrics-descriptions"}},c={},d=[{value:"User Actions per day",id:"user-actions-per-day",level:2},{value:"Recommended Items per day",id:"recommended-items-per-day",level:2}],p={toc:d};function l(e){let{components:r,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The RS Metrics software designs and exposes information graphs concerning attributes defined in the RS. The current implementation exposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User Actions per day"),(0,a.kt)("li",{parentName:"ul"},"Recommended Items per day")),(0,a.kt)("h2",{id:"user-actions-per-day"},"User Actions per day"),(0,a.kt)("p",null,"Concerning this graph the x-axis shows the referenced date-time range, whereas the y-axis shows the amount of user actions occurred. The granularity of the information is per day.\n",(0,a.kt)("img",{alt:"User Actions per day Graph",src:t(7397).Z,width:"3200",height:"2400"})),(0,a.kt)("h2",{id:"recommended-items-per-day"},"Recommended Items per day"),(0,a.kt)("p",null,"Concerning this graph the x-axis shows the referenced date-time range, whereas the y-axis shows the amount of recommended items delivered to the users. The granularity of the information is per day.\n",(0,a.kt)("img",{alt:"Recommended Items per day Graph",src:t(1766).Z,width:"3200",height:"2400"})))}l.isMDXComponent=!0},1766:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/graphs_recs-bb51ea29ca628dcd4f06e639484dfdc0.png"},7397:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/graphs_uas-fde9137620e4b0ce6519292951df5e9d.png"}}]);