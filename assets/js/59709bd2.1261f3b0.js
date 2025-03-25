"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[39363],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(r),d=a,y=g["".concat(p,".").concat(d)]||g[d]||c[d]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(58168),a=(r(96540),r(15680));const i={},o=void 0,l={unversionedId:"configuration/output-plugins/Kafka",id:"version-1.x/configuration/output-plugins/Kafka",title:"Kafka",description:"Output plugin : Kafka",source:"@site/versioned_docs/version-1.x/configuration/output-plugins/Kafka.md",sourceDirName:"configuration/output-plugins",slug:"/configuration/output-plugins/Kafka",permalink:"/docs/1.x/configuration/output-plugins/Kafka",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/output-plugins/Kafka.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Jdbc",permalink:"/docs/1.x/configuration/output-plugins/Jdbc"},next:{title:"MySQL",permalink:"/docs/1.x/configuration/output-plugins/MySQL"}},p={},u=[{value:"Output plugin : Kafka",id:"output-plugin--kafka",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"producer.bootstrap.servers string",id:"producerbootstrapservers-string",level:5},{value:"topic string",id:"topic-string",level:5},{value:"producer string",id:"producer-string",level:5},{value:"Examples",id:"examples",level:3}],s={toc:u},g="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"output-plugin--kafka"},"Output plugin : Kafka"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,a.yg)("li",{parentName:"ul"},"Homepage: ",(0,a.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,a.yg)("li",{parentName:"ul"},"Version: 1.0.0")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Write Rows to a Kafka topic."),(0,a.yg)("h3",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"),(0,a.yg)("th",{parentName:"tr",align:null},"engine"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#producerbootstrapservers-string"},"producer.bootstrap.servers")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"all streaming")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#topic-string"},"topic")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"all streaming")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#producer-string"},"producer.*")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"all streaming")))),(0,a.yg)("h5",{id:"producerbootstrapservers-string"},"producer.bootstrap.servers ","[string]"),(0,a.yg)("p",null,"Kafka Brokers List"),(0,a.yg)("h5",{id:"topic-string"},"topic ","[string]"),(0,a.yg)("p",null,"Kafka Topic"),(0,a.yg)("h5",{id:"producer-string"},"producer ","[string]"),(0,a.yg)("p",null,"In addition to the above parameters that must be specified for the producer client, you can also specify multiple kafka's producer parameters described in ",(0,a.yg)("a",{parentName:"p",href:"http://kafka.apache.org/10/documentation.html#producerconfigs"},"producerconfigs")),(0,a.yg)("p",null,'The way to specify parameters is to use the prefix "producer" before the parameter. For example, ',(0,a.yg)("inlineCode",{parentName:"p"},"request.timeout.ms")," is specified as: ",(0,a.yg)("inlineCode",{parentName:"p"},"producer.request.timeout.ms = 60000"),".If you do not specify these parameters, it will be set the default values according to Kafka documentation"),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'kafka {\n    topic = "seatunnel"\n    producer.bootstrap.servers = "localhost:9092"\n}\n')))}c.isMDXComponent=!0}}]);