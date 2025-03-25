"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[63665],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(r),m=a,d=g["".concat(p,".").concat(m)]||g[m]||c[m]||l;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const l={},i="File",o={unversionedId:"spark/configuration/source-plugins/File",id:"version-2.1.0/spark/configuration/source-plugins/File",title:"File",description:"Source plugin : File [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/source-plugins/File.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/File",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/File",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/source-plugins/File.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FakeStream",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/FakeStream"},next:{title:"HBase",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/Hbase"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"format string",id:"format-string",level:5},{value:"path string",id:"path-string",level:5},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],u={toc:s},g="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"file"},"File"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Source plugin : File ","[Spark]")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"read data from local or hdfs file."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"format"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"json")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"path"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h5",{id:"format-string"},"format ","[string]"),(0,a.yg)("p",null,"Format for reading files, currently supports text, parquet, json, orc, csv."),(0,a.yg)("h5",{id:"path-string"},"path ","[string]"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If read data from hdfs , the file path should start with ",(0,a.yg)("inlineCode",{parentName:"li"},"hdfs://"),"  "),(0,a.yg)("li",{parentName:"ul"},"If read data from local , the file path should start with ",(0,a.yg)("inlineCode",{parentName:"li"},"file://"))),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Source plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'file {\n    path = "hdfs:///var/logs"\n    result_table_name = "access_log"\n}\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'file {\n    path = "file:///var/logs"\n    result_table_name = "access_log"\n}\n')))}c.isMDXComponent=!0}}]);