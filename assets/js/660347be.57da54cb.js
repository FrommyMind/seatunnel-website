"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[16312,48638],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=g(n),s=l,d=u["".concat(p,".").concat(s)]||u[s]||c[s]||r;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var g=2;g<r;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=n(58168),l=(n(96540),n(15680));const r={},o=void 0,i={unversionedId:"connector-v2/changelog/connector-influxdb",id:"connector-v2/changelog/connector-influxdb",title:"connector-influxdb",description:"Change Log",source:"@site/docs/connector-v2/changelog/connector-influxdb.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-influxdb",permalink:"/docs/connector-v2/changelog/connector-influxdb",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/changelog/connector-influxdb.md",tags:[],version:"current",frontMatter:{}},p={},g=[],m={toc:g},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("details",null,(0,l.yg)("summary",null," Change Log "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Change"),(0,l.yg)("th",{parentName:"tr",align:null},"Commit"),(0,l.yg)("th",{parentName:"tr",align:null},"Version"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve]"," influxdb options (#8966)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9f498b8133"},"https://github.com/apache/seatunnel/commit/9f498b8133")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve]"," restruct connector common options (#8634)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f3499a6eeb"},"https://github.com/apache/seatunnel/commit/f3499a6eeb")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][dist]","add shade check rule (#8136)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51ef800016"},"https://github.com/apache/seatunnel/commit/51ef800016")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve]"," Improve some connectors prepare check error message (#7465)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6930a25edd"},"https://github.com/apache/seatunnel/commit/6930a25edd")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Connector]"," Add multi-table sink option check (#7360)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/2489f6446b"},"https://github.com/apache/seatunnel/commit/2489f6446b")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.7")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Core]"," Support using upstream table placeholders in sink options and auto replacement (#7131)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c4ca74122c"},"https://github.com/apache/seatunnel/commit/c4ca74122c")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Support multi-table sink feature for influxdb (#6278)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/56f13e920d"},"https://github.com/apache/seatunnel/commit/56f13e920d")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Zeta]"," Add classloader cache mode to fix metaspace leak (#6355)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9c3c2f183d"},"https://github.com/apache/seatunnel/commit/9c3c2f183d")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Test][E2E]"," Add thread leak check for connector (#5773)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1f2f3fc5f0"},"https://github.com/apache/seatunnel/commit/1f2f3fc5f0")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[BugFix][InfluxDBSource]"," Resolve invalid SQL in initColumnsIndex method caused by direct QUERY_LIMIT appendage with ","'","tz","'"," function. (#4829)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/deed9c62c3"},"https://github.com/apache/seatunnel/commit/deed9c62c3")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove use ",(0,l.yg)("inlineCode",{parentName:"td"},"SeaTunnelSink::getConsumedType")," method and mark it as deprecated (#5755)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8de7408100"},"https://github.com/apache/seatunnel/commit/8de7408100")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Support config column/primaryKey/constraintKey in schema (#5564)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/eac76b4e50"},"https://github.com/apache/seatunnel/commit/eac76b4e50")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Remove scheduler in InfluxDB sink (#5271)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f459f500cb"},"https://github.com/apache/seatunnel/commit/f459f500cb")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][CheckStyle]"," Remove useless ","'","SuppressWarnings","'"," annotation of checkstyle. (#5260)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51c0d709ba"},"https://github.com/apache/seatunnel/commit/51c0d709ba")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Merge branch ","'","dev","'"," into merge/cdc"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/4324ee1912"},"https://github.com/apache/seatunnel/commit/4324ee1912")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin."),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/423b583038"},"https://github.com/apache/seatunnel/commit/423b583038")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[improve][api]"," Refactoring schema parse (#4157)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b2f573a13e"},"https://github.com/apache/seatunnel/commit/b2f573a13e")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][build]"," Give the maven module a human readable name (#4114)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d7cd601051"},"https://github.com/apache/seatunnel/commit/d7cd601051")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin. (#4101)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a2ab166561"},"https://github.com/apache/seatunnel/commit/a2ab166561")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][SourceConnector]"," Unifie InfluxDB source fields to schema (#3897)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/85a984a64f"},"https://github.com/apache/seatunnel/commit/85a984a64f")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector]"," add get source method to all source connector (#3846)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/417178fb84"},"https://github.com/apache/seatunnel/commit/417178fb84")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][API &amp; Connector &amp; Doc]"," add parallelism and column projection interface (#3829)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b9164b8ba1"},"https://github.com/apache/seatunnel/commit/b9164b8ba1")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Hotfix][OptionRule]"," Fix option rule about all connectors (#3592)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/226dc6a119"},"https://github.com/apache/seatunnel/commit/226dc6a119")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]","[Influxdb]"," Unified exception for influxdb source ","&"," sink connector (#3558)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/4686f35d68"},"https://github.com/apache/seatunnel/commit/4686f35d68")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector]","[influx]"," Expose configurable options in influx db (#3392)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b247ff0aef"},"https://github.com/apache/seatunnel/commit/b247ff0aef")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," influxdb sink connector (#3174)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/630e884791"},"https://github.com/apache/seatunnel/commit/630e884791")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Add influxDB connector source (#2697)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1d70ea3084"},"https://github.com/apache/seatunnel/commit/1d70ea3084")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.0-beta"))))))}c.isMDXComponent=!0},78161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(58168),l=(n(96540),n(15680)),r=n(41970);const o={},i="InfluxDB",p={unversionedId:"connector-v2/source/InfluxDB",id:"connector-v2/source/InfluxDB",title:"InfluxDB",description:"InfluxDB source connector",source:"@site/docs/connector-v2/source/InfluxDB.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/InfluxDB",permalink:"/docs/connector-v2/source/InfluxDB",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/source/InfluxDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Apache Iceberg",permalink:"/docs/connector-v2/source/Iceberg"},next:{title:"IoTDB",permalink:"/docs/connector-v2/source/IoTDB"}},g={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url",id:"url",level:3},{value:"sql string",id:"sql-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"database string",id:"database-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"split_column string",id:"split_column-string",level:3},{value:"upper_bound long",id:"upper_bound-long",level:3},{value:"lower_bound long",id:"lower_bound-long",level:3},{value:"partition_num int",id:"partition_num-int",level:3},{value:"epoch string",id:"epoch-string",level:3},{value:"query_timeout_sec int",id:"query_timeout_sec-int",level:3},{value:"connect_timeout_ms long",id:"connect_timeout_ms-long",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:m},c="wrapper";function s(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"influxdb"},"InfluxDB"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"InfluxDB source connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Read external data source data through InfluxDB."),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection"))),(0,l.yg)("p",null,"supports query SQL and can achieve projection effect."),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"url"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sql"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"lower_bound"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"upper_bound"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_num"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"split_column"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"epoch"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"n")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connect_timeout_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"15000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query_timeout_sec"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"url"},"url"),(0,l.yg)("p",null,"the url to connect to influxDB e.g."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"http://influxdb-host:8086\n")),(0,l.yg)("h3",{id:"sql-string"},"sql ","[string]"),(0,l.yg)("p",null,"The query sql used to search data"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"select name,age from test\n")),(0,l.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,l.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,l.yg)("p",null,"The schema information of upstream data.\ne.g."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"schema {\n    fields {\n        name = string\n        age = int\n    }\n  }\n")),(0,l.yg)("h3",{id:"database-string"},"database ","[string]"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"influxDB")," database"),(0,l.yg)("h3",{id:"username-string"},"username ","[string]"),(0,l.yg)("p",null,"the username of the influxDB when you select"),(0,l.yg)("h3",{id:"password-string"},"password ","[string]"),(0,l.yg)("p",null,"the password of the influxDB when you select"),(0,l.yg)("h3",{id:"split_column-string"},"split_column ","[string]"),(0,l.yg)("p",null,"the ",(0,l.yg)("inlineCode",{parentName:"p"},"split_column")," of the influxDB when you select"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Tips:"),(0,l.yg)("ul",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ul"},"influxDB tags is not supported as a segmented primary key because the type of tags can only be a string"),(0,l.yg)("li",{parentName:"ul"},"influxDB time is not supported as a segmented primary key because the time field cannot participate in mathematical calculation"),(0,l.yg)("li",{parentName:"ul"},"Currently, ",(0,l.yg)("inlineCode",{parentName:"li"},"split_column")," only supports integer data segmentation, and does not support ",(0,l.yg)("inlineCode",{parentName:"li"},"float"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"string"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"date")," and other types."))),(0,l.yg)("h3",{id:"upper_bound-long"},"upper_bound ","[long]"),(0,l.yg)("p",null,"upper bound of the ",(0,l.yg)("inlineCode",{parentName:"p"},"split_column"),"column"),(0,l.yg)("h3",{id:"lower_bound-long"},"lower_bound ","[long]"),(0,l.yg)("p",null,"lower bound of the ",(0,l.yg)("inlineCode",{parentName:"p"},"split_column")," column"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'     split the $split_column range into $partition_num parts\n     if partition_num is 1, use the whole `split_column` range\n     if partition_num < (upper_bound - lower_bound), use (upper_bound - lower_bound) partitions\n     \n     eg: lower_bound = 1, upper_bound = 10, partition_num = 2\n     sql = "select * from test where age > 0 and age < 10"\n     \n     split result\n\n     split 1: select * from test where ($split_column >= 1 and $split_column < 6)  and (  age > 0 and age < 10 )\n     \n     split 2: select * from test where ($split_column >= 6 and $split_column < 11) and (  age > 0 and age < 10 )\n\n')),(0,l.yg)("h3",{id:"partition_num-int"},"partition_num ","[int]"),(0,l.yg)("p",null,"the ",(0,l.yg)("inlineCode",{parentName:"p"},"partition_num")," of the InfluxDB when you select"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Tips: Ensure that ",(0,l.yg)("inlineCode",{parentName:"p"},"upper_bound")," minus ",(0,l.yg)("inlineCode",{parentName:"p"},"lower_bound")," is divided ",(0,l.yg)("inlineCode",{parentName:"p"},"bypartition_num"),", otherwise the query results will overlap")),(0,l.yg)("h3",{id:"epoch-string"},"epoch ","[string]"),(0,l.yg)("p",null,"returned time precision"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Optional values: H, m, s, MS, u, n"),(0,l.yg)("li",{parentName:"ul"},"default value: n")),(0,l.yg)("h3",{id:"query_timeout_sec-int"},"query_timeout_sec ","[int]"),(0,l.yg)("p",null,"the ",(0,l.yg)("inlineCode",{parentName:"p"},"query_timeout")," of the InfluxDB when you select, in seconds"),(0,l.yg)("h3",{id:"connect_timeout_ms-long"},"connect_timeout_ms ","[long]"),(0,l.yg)("p",null,"the timeout for connecting to InfluxDB, in milliseconds"),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/connector-v2/source-common-options"},"Source Common Options")," for details"),(0,l.yg)("h2",{id:"examples"},"Examples"),(0,l.yg)("p",null,"Example of multi parallelism and multi partition scanning"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n    InfluxDB {\n        url = "http://influxdb-host:8086"\n        sql = "select label, value, rt, time from test"\n        database = "test"\n        upper_bound = 100\n        lower_bound = 1\n        partition_num = 4\n        split_column = "value"\n        schema {\n            fields {\n                label = STRING\n                value = INT\n                rt = STRING\n                time = BIGINT\n            }\n    }\n\n}\n\n')),(0,l.yg)("p",null,"Example of not using partition scan"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n    InfluxDB {\n        url = "http://influxdb-host:8086"\n        sql = "select label, value, rt, time from test"\n        database = "test"\n        schema {\n            fields {\n                label = STRING\n                value = INT\n                rt = STRING\n                time = BIGINT\n            }\n    }\n\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)(r.default,{mdxType:"ChangeLog"}))}s.isMDXComponent=!0}}]);