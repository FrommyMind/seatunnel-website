"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[73027,5796],{15680:(t,e,a)=>{a.d(e,{xA:()=>i,yg:()=>y});var n=a(96540);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},i=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),p=u(a),c=l,y=p["".concat(m,".").concat(c)]||p[c]||d[c]||r;return a?n.createElement(y,g(g({ref:e},i),{},{components:a})):n.createElement(y,g({ref:e},i))}));function y(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,g=new Array(r);g[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[p]="string"==typeof t?t:l,g[1]=o;for(var u=2;u<r;u++)g[u]=a[u];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},71235:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>g,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(58168),l=(a(96540),a(15680));const r={},g=void 0,o={unversionedId:"connector-v2/changelog/connector-kudu",id:"connector-v2/changelog/connector-kudu",title:"connector-kudu",description:"Change Log",source:"@site/docs/connector-v2/changelog/connector-kudu.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-kudu",permalink:"/docs/connector-v2/changelog/connector-kudu",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/changelog/connector-kudu.md",tags:[],version:"current",frontMatter:{}},m={},u=[],i={toc:u},p="wrapper";function d(t){let{components:e,...a}=t;return(0,l.yg)(p,(0,n.A)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("details",null,(0,l.yg)("summary",null," Change Log "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Change"),(0,l.yg)("th",{parentName:"tr",align:null},"Commit"),(0,l.yg)("th",{parentName:"tr",align:null},"Version"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve]"," restruct connector common options (#8634)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f3499a6eeb"},"https://github.com/apache/seatunnel/commit/f3499a6eeb")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Transform]"," Rename sql transform table name from ","'","fake","'"," to ","'","dual","'"," (#8298)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e6169684fb"},"https://github.com/apache/seatunnel/commit/e6169684fb")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][dist]","add shade check rule (#8136)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51ef800016"},"https://github.com/apache/seatunnel/commit/51ef800016")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][API]"," Unified tables_configs and table_list (#8100)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/84c0b8d660"},"https://github.com/apache/seatunnel/commit/84c0b8d660")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Core]"," Rename ",(0,l.yg)("inlineCode",{parentName:"td"},"result_table_name"),"/",(0,l.yg)("inlineCode",{parentName:"td"},"source_table_name")," to ",(0,l.yg)("inlineCode",{parentName:"td"},"plugin_input/plugin_output")," (#8072)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c7bbd322db"},"https://github.com/apache/seatunnel/commit/c7bbd322db")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Connector]"," Add multi-table sink option check (#7360)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/2489f6446b"},"https://github.com/apache/seatunnel/commit/2489f6446b")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.7")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Core]"," Support using upstream table placeholders in sink options and auto replacement (#7131)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c4ca74122c"},"https://github.com/apache/seatunnel/commit/c4ca74122c")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"correct the typo of kudu kerberos config (#6905)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/fcb8554972"},"https://github.com/apache/seatunnel/commit/fcb8554972")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Fix][KuduCatalogFactory]",": Fix KuduCatalogFactory.optionRule() will throw an Exception (#6787)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/45a4e1532d"},"https://github.com/apache/seatunnel/commit/45a4e1532d")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Engine]"," Unify job env parameters (#6003)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/2410ab38f0"},"https://github.com/apache/seatunnel/commit/2410ab38f0")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Support multi-table sink feature for kudu (#5951)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/82460c0bf0"},"https://github.com/apache/seatunnel/commit/82460c0bf0")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature]"," Add unsupported datatype check for all catalog (#5890)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b9791285a0"},"https://github.com/apache/seatunnel/commit/b9791285a0")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Kudu]"," Support multi-table source read (#5878)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8d9a0b7d11"},"https://github.com/apache/seatunnel/commit/8d9a0b7d11")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Support TableSourceFactory/TableSinkFactory on kudu (#5789)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/10e791d60a"},"https://github.com/apache/seatunnel/commit/10e791d60a")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove use ",(0,l.yg)("inlineCode",{parentName:"td"},"SeaTunnelSink::getConsumedType")," method and mark it as deprecated (#5755)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8de7408100"},"https://github.com/apache/seatunnel/commit/8de7408100")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Kudu]"," Refactor Kudu functionality and  Sink support CDC data. (#5437)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/22110eb7b3"},"https://github.com/apache/seatunnel/commit/22110eb7b3")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][build]"," Give the maven module a human readable name (#4114)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d7cd601051"},"https://github.com/apache/seatunnel/commit/d7cd601051")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin. (#4101)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a2ab166561"},"https://github.com/apache/seatunnel/commit/a2ab166561")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Hotfix][Connector-V2]"," Fix connector source snapshot state NPE (#4027)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e39c4988cc"},"https://github.com/apache/seatunnel/commit/e39c4988cc")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector]"," add get source method to all source connector (#3846)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/417178fb84"},"https://github.com/apache/seatunnel/commit/417178fb84")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][API &amp; Connector &amp; Doc]"," add parallelism and column projection interface (#3829)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b9164b8ba1"},"https://github.com/apache/seatunnel/commit/b9164b8ba1")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Hotfix][OptionRule]"," Fix option rule about all connectors (#3592)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/226dc6a119"},"https://github.com/apache/seatunnel/commit/226dc6a119")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Bad smell ToArrayCallWithZeroLengthArrayArgument: (#3577)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/cc448d98c4"},"https://github.com/apache/seatunnel/commit/cc448d98c4")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]","[Kudu]"," Unified exception for kudu source ","&"," sink connector (#3564)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/273418ddc9"},"https://github.com/apache/seatunnel/commit/273418ddc9")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Connector][Dependency]"," Add Miss Dependency Cassandra And Change Kudu Plugin Name (#3432)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6ac6a0a0cd"},"https://github.com/apache/seatunnel/commit/6ac6a0a0cd")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector V2]"," expose configurable options in Kudu (#3365)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c422210e2c"},"https://github.com/apache/seatunnel/commit/c422210e2c")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Core]","[Connector-V2]"," Unified The way of setting JobName (#2908)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/bf2c97484b"},"https://github.com/apache/seatunnel/commit/bf2c97484b")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"remove duplicate ExceptionUtil class (#3037)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c9dc7c50c2"},"https://github.com/apache/seatunnel/commit/c9dc7c50c2")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][all]"," change Log to @Slf4j (#3001)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6016100f12"},"https://github.com/apache/seatunnel/commit/6016100f12")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]","Kudu Sink Connector Support to upsert row"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1ece805ab1"},"https://github.com/apache/seatunnel/commit/1ece805ab1")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[DEV][Api]"," Replace SeaTunnelContext with JobContext and remove singleton pattern (#2706)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/cbf82f755c"},"https://github.com/apache/seatunnel/commit/cbf82f755c")),(0,l.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[#2606]","Dependency management split (#2630)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/fc047be69b"},"https://github.com/apache/seatunnel/commit/fc047be69b")),(0,l.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Connector-V2]"," Add Kudu source and sink connector (#2254)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/0483cbc2df"},"https://github.com/apache/seatunnel/commit/0483cbc2df")),(0,l.yg)("td",{parentName:"tr",align:null},"2.2.0-beta"))))))}d.isMDXComponent=!0},87742:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>g,metadata:()=>m,toc:()=>i});var n=a(58168),l=(a(96540),a(15680)),r=a(71235);const g={},o="Kudu",m={unversionedId:"connector-v2/sink/Kudu",id:"connector-v2/sink/Kudu",title:"Kudu",description:"Kudu sink connector",source:"@site/docs/connector-v2/sink/Kudu.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Kudu",permalink:"/docs/connector-v2/sink/Kudu",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/sink/Kudu.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Kingbase",permalink:"/docs/connector-v2/sink/Kingbase"},next:{title:"LocalFile",permalink:"/docs/connector-v2/sink/LocalFile"}},u={},i=[{value:"Support Kudu Version",id:"support-kudu-version",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Multiple table",id:"multiple-table",level:3},{value:"example1",id:"example1",level:4},{value:"example2",id:"example2",level:4},{value:"Changelog",id:"changelog",level:2}],p={toc:i},d="wrapper";function c(t){let{components:e,...a}=t;return(0,l.yg)(d,(0,n.A)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"kudu"},"Kudu"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Kudu sink connector")),(0,l.yg)("h2",{id:"support-kudu-version"},"Support Kudu Version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"1.11.1/1.12.0/1.13.0/1.14.0/1.15.0")),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"key-features"},"Key Features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"cdc")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support multiple table write"))),(0,l.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Kudu Data Type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT8",(0,l.yg)("br",null),"INT16",(0,l.yg)("br",null),"INT32")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT64")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.yg)("td",{parentName:"tr",align:null},"UNIXTIME_MICROS")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BYTES"),(0,l.yg)("td",{parentName:"tr",align:null},"BINARY")))),(0,l.yg)("h2",{id:"sink-options"},"Sink Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kudu_masters"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu master address. Separated by ',',such as '192.168.88.110:7051'.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_name"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The name of kudu table.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"client_worker_count"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"2 * Runtime.getRuntime().availableProcessors()"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu worker count. Default value is twice the current number of cpu cores.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"client_default_operation_timeout_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Long"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"30000"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu normal operation time out.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"client_default_admin_operation_timeout_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Long"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"30000"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu admin operation time out.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_kerberos"),(0,l.yg)("td",{parentName:"tr",align:null},"Bool"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Kerberos principal enable.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Kerberos principal. Note that all zeta nodes require have this file.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_keytab"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Kerberos keytab. Note that all zeta nodes require have this file.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_krb5conf"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Kerberos krb5 conf. Note that all zeta nodes require have this file.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Storage mode, support ",(0,l.yg)("inlineCode",{parentName:"td"},"overwrite")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"append"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"session_flush_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"AUTO_FLUSH_SYNC"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu flush mode. Default AUTO_FLUSH_SYNC.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"1024"),(0,l.yg)("td",{parentName:"tr",align:null},"The flush max size (includes all append, upsert and delete records), over this number of records, will flush data. The default value is 100")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"buffer_flush_interval"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"10000"),(0,l.yg)("td",{parentName:"tr",align:null},"The flush interval mills, over this time, asynchronous threads will flush data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ignore_not_found"),(0,l.yg)("td",{parentName:"tr",align:null},"Bool"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"If true, ignore all not found rows.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ignore_not_duplicate"),(0,l.yg)("td",{parentName:"tr",align:null},"Bool"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"If true, ignore all dulicate rows.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"td",href:"/docs/connector-v2/sink-common-options"},"Source Common Options")," for details.")))),(0,l.yg)("h2",{id:"task-example"},"Task Example"),(0,l.yg)("h3",{id:"simple"},"Simple:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},'The following example refers to a FakeSource named "kudu" cdc write kudu table "kudu_sink_table"')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n    source {\n      FakeSource {\n       plugin_output = "kudu"\n        schema = {\n          fields {\n                    id = int\n                    val_bool = boolean\n                    val_int8 = tinyint\n                    val_int16 = smallint\n                    val_int32 = int\n                    val_int64 = bigint\n                    val_float = float\n                    val_double = double\n                    val_decimal = "decimal(16, 1)"\n                    val_string = string\n                    val_unixtime_micros = timestamp\n          }\n        }\n        rows = [\n          {\n            kind = INSERT\n            fields = [1, true, 1, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          },\n          {\n            kind = INSERT\n            fields = [2, true, 1, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          },\n          {\n            kind = INSERT\n            fields = [3, true, 1, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          },\n          {\n            kind = UPDATE_BEFORE\n            fields = [1, true, 1, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          },\n          {\n            kind = UPDATE_AFTER\n           fields = [1, true, 2, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          },\n          {\n            kind = DELETE\n            fields = [2, true, 1, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          }\n        ]\n      }\n    }\n\nsink {\n   kudu{\n    plugin_input = "kudu"\n    kudu_masters = "kudu-master-cdc:7051"\n    table_name = "kudu_sink_table"\n    enable_kerberos = true\n    kerberos_principal = "xx@xx.COM"\n    kerberos_keytab = "xx.keytab"\n }\n}\n')),(0,l.yg)("h3",{id:"multiple-table"},"Multiple table"),(0,l.yg)("h4",{id:"example1"},"example1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    \n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  kudu{\n    kudu_masters = "kudu-master-cdc:7051"\n    table_name = "${database_name}_${table_name}_test"\n  }\n}\n')),(0,l.yg)("h4",{id:"example2"},"example2"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Jdbc {\n    driver = oracle.jdbc.driver.OracleDriver\n    url = "jdbc:oracle:thin:@localhost:1521/XE"\n    user = testUser\n    password = testPassword\n\n    table_list = [\n      {\n        table_path = "TESTSCHEMA.TABLE_1"\n      },\n      {\n        table_path = "TESTSCHEMA.TABLE_2"\n      }\n    ]\n  }\n}\n\ntransform {\n}\n\nsink {\n  kudu{\n    kudu_masters = "kudu-master-cdc:7051"\n    table_name = "${schema_name}_${table_name}_test"\n  }\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)(r.default,{mdxType:"ChangeLog"}))}c.isMDXComponent=!0}}]);