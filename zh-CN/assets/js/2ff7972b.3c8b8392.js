"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[62670],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,s=u["".concat(m,".").concat(d)]||u[d]||g[d]||l;return n?a.createElement(s,o(o({ref:t},i),{},{components:n})):a.createElement(s,o({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o=void 0,c={unversionedId:"connector-v2/changelog/connector-selectdb-cloud",id:"connector-v2/changelog/connector-selectdb-cloud",title:"connector-selectdb-cloud",description:"Change Log",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-selectdb-cloud.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-selectdb-cloud",permalink:"/zh-CN/docs/connector-v2/changelog/connector-selectdb-cloud",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-selectdb-cloud.md",tags:[],version:"current",frontMatter:{}},m={},p=[],i={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][dist]","add shade check rule (#8136)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51ef800016"},"https://github.com/apache/seatunnel/commit/51ef800016")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," Add disable 2pc in SelectDB cloud sink (#6266)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/aa0b2119a7"},"https://github.com/apache/seatunnel/commit/aa0b2119a7")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature]"," Support nanosecond in SelectDB DateTimeV2 type (#6332)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a0ef5dac93"},"https://github.com/apache/seatunnel/commit/a0ef5dac93")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove use ",(0,r.yg)("inlineCode",{parentName:"td"},"SeaTunnelSink::getConsumedType")," method and mark it as deprecated (#5755)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8de7408100"},"https://github.com/apache/seatunnel/commit/8de7408100")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[improve][SelectDB]"," Add a jobId to the selectDB label to distinguish between tasks (#4864)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/84be0f9fd0"},"https://github.com/apache/seatunnel/commit/84be0f9fd0")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]","[SelectDB Cloud]","Refactor some SelectDB Cloud Sink code as well as support copy into batch and async flush and cdc  (#4312)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/11e94b216f"},"https://github.com/apache/seatunnel/commit/11e94b216f")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][build]"," Give the maven module a human readable name (#4114)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d7cd601051"},"https://github.com/apache/seatunnel/commit/d7cd601051")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin. (#4101)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a2ab166561"},"https://github.com/apache/seatunnel/commit/a2ab166561")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]","[SelectDB Cloud]"," Support SelectDB Cloud Sink Connector (#3958)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/79a134a03b"},"https://github.com/apache/seatunnel/commit/79a134a03b")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1"))))))}g.isMDXComponent=!0}}]);