"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6660,86036],{15680:(t,e,n)=>{n.d(e,{xA:()=>m,yg:()=>d});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):g(g({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(n),y=r,d=u["".concat(o,".").concat(y)]||u[y]||c[y]||l;return n?a.createElement(d,g(g({ref:e},m),{},{components:n})):a.createElement(d,g({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,g=new Array(l);g[0]=y;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[u]="string"==typeof t?t:r,g[1]=i;for(var p=2;p<l;p++)g[p]=n[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},42453:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>g,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},g=void 0,i={unversionedId:"connector-v2/changelog/connector-milvus",id:"connector-v2/changelog/connector-milvus",title:"connector-milvus",description:"Change Log",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-milvus.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-milvus",permalink:"/zh-CN/docs/connector-v2/changelog/connector-milvus",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-milvus.md",tags:[],version:"current",frontMatter:{}},o={},p=[],m={toc:p},u="wrapper";function c(t){let{components:e,...n}=t;return(0,r.yg)(u,(0,a.A)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][dist]","add shade check rule (#8136)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51ef800016"},"https://github.com/apache/seatunnel/commit/51ef800016")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Core]"," Refactor common options of column/row (#7911)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d1582afee6"},"https://github.com/apache/seatunnel/commit/d1582afee6")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][connector-milvus]"," update milvus connector to support dynamic schema, failed retry, etc. (#7885)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6a31f91729"},"https://github.com/apache/seatunnel/commit/6a31f91729")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][Connector-V2]"," Fix known directory create and delete ignore issues (#7700)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e2fb679577"},"https://github.com/apache/seatunnel/commit/e2fb679577")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Optimize milvus code (#7691)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1eddb8e1b1"},"https://github.com/apache/seatunnel/commit/1eddb8e1b1")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Optimize milvus-connector config code (#7658)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f831f7a5ec"},"https://github.com/apache/seatunnel/commit/f831f7a5ec")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," update vectorType (#7446)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1bba72385b"},"https://github.com/apache/seatunnel/commit/1bba72385b")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][API]"," Move catalog open to SaveModeHandler (#7439)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8c2c5c79a1"},"https://github.com/apache/seatunnel/commit/8c2c5c79a1")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Fake Source support produce vector data (#7401)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6937d10ac3"},"https://github.com/apache/seatunnel/commit/6937d10ac3")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]","[Milvus]"," Support Milvus source ","&"," sink (#7158)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/0c69b9166e"},"https://github.com/apache/seatunnel/commit/0c69b9166e")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6"))))))}c.isMDXComponent=!0},64426:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>g,metadata:()=>o,toc:()=>m});var a=n(58168),r=(n(96540),n(15680)),l=n(42453);const g={},i="Milvus",o={unversionedId:"connector-v2/sink/Milvus",id:"connector-v2/sink/Milvus",title:"Milvus",description:"Milvus\u6570\u636e\u63a5\u6536\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Milvus.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Milvus",permalink:"/zh-CN/docs/connector-v2/sink/Milvus",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Milvus.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Maxcompute",permalink:"/zh-CN/docs/connector-v2/sink/Maxcompute"},next:{title:"MongoDB",permalink:"/zh-CN/docs/connector-v2/sink/MongoDB"}},p={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"Sink \u9009\u9879",id:"sink-\u9009\u9879",level:2},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2}],u={toc:m},c="wrapper";function y(t){let{components:e,...n}=t;return(0,r.yg)(c,(0,a.A)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"milvus"},"Milvus"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Milvus\u6570\u636e\u63a5\u6536\u5668")),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"Milvus sink\u8fde\u63a5\u5668\u5c06\u6570\u636e\u5199\u5165Milvus\u6216Zilliz Cloud\uff0c\u5b83\u5177\u6709\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u6309\u5206\u533a\u8bfb\u5199\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u4ece\u5143\u6570\u636e\u5217\u5199\u5165\u52a8\u6001\u6a21\u5f0f\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"json\u6570\u636e\u5c06\u8f6c\u6362\u4e3ajson\u5b57\u7b26\u4e32\u8fdb\u884c\u5199\u5165"),(0,r.yg)("li",{parentName:"ul"},"\u81ea\u52a8\u91cd\u8bd5\u4ee5\u7ed5\u8fc7 ratelimit \u9650\u5236 \u548c grpc \u9650\u5236")),(0,r.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"column projection"))),(0,r.yg)("p",null,"##\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Milvus\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u6570\u636e\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT8"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT16"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT32"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT64"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOL"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JSON"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"BINARY_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT16_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT16_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BFLOAT16_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"BFLOAT16_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SPARSE_FLOAT_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"SPARSE_FLOAT_VECTOR")))),(0,r.yg)("h2",{id:"sink-\u9009\u9879"},"Sink \u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u5b57"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u4f20"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5230Milvus\u6216Zilliz Cloud\u7684URL\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"token"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\uff1a\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c06\u6570\u636e\u5199\u5165\u54ea\u4e2a\u6570\u636e\u5e93\uff0c\u9ed8\u8ba4\u4e3a\u6e90\u6570\u636e\u5e93\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"enum"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f53\u8868\u4e0d\u5b58\u5728\u65f6\u81ea\u52a8\u521b\u5efa\u8868\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_auto_id"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e3b\u952e\u5217\u542f\u7528autoId\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_upsert"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528upsert\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_dynamic_field"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u5e26\u52a8\u6001\u5b57\u6bb5\u7684\u521b\u5efa\u8868\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5199\u5165\u6279\u5927\u5c0f\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Milvus\u5206\u533a\u952e\u5b57\u6bb5")))),(0,r.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'sink {\n  Milvus {\n    url = "http://127.0.0.1:19530"\n    token = "username:password"\n    batch_size = 1000\n  }\n}\n')),(0,r.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,r.yg)(l.default,{mdxType:"ChangeLog"}))}y.isMDXComponent=!0}}]);