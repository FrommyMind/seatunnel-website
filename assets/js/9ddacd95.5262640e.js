"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[83910,95678],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,d=p["".concat(m,".").concat(u)]||p[u]||s[u]||l;return n?a.createElement(d,o(o({ref:t},g),{},{components:n})):a.createElement(d,o({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const l={},o=void 0,i={unversionedId:"connector-v2/changelog/connector-rocketmq",id:"connector-v2/changelog/connector-rocketmq",title:"connector-rocketmq",description:"Change Log",source:"@site/docs/connector-v2/changelog/connector-rocketmq.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-rocketmq",permalink:"/docs/connector-v2/changelog/connector-rocketmq",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/changelog/connector-rocketmq.md",tags:[],version:"current",frontMatter:{}},m={},c=[],g={toc:c},p="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," RocketMQ Source add message tag config (#8825)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/5913e8c35f"},"https://github.com/apache/seatunnel/commit/5913e8c35f")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Add optional flag for rocketmq connector to skip parse errors instead of failing (#8737)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/701f17b5d4"},"https://github.com/apache/seatunnel/commit/701f17b5d4")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," RocketMQ Sink add message tag config (#7996)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/97a1b00e48"},"https://github.com/apache/seatunnel/commit/97a1b00e48")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][Connector-V2]"," Fix some throwable error not be caught (#7657)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e19d73282e"},"https://github.com/apache/seatunnel/commit/e19d73282e")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Kafka]"," Support multi-table source read  (#5992)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/60104602d1"},"https://github.com/apache/seatunnel/commit/60104602d1")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][connector-rocketmq]"," commit a correct offset to broker ","&"," reduce ThreadInterruptedException log (#6668)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b7480e1a89"},"https://github.com/apache/seatunnel/commit/b7480e1a89")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[fix][connector-rocketmq]","Fix a NPE problem when checkpoint.interval is set too small(#6624) (#6625)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6e0c81d492"},"https://github.com/apache/seatunnel/commit/6e0c81d492")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Test][E2E]"," Add thread leak check for connector (#5773)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1f2f3fc5f0"},"https://github.com/apache/seatunnel/commit/1f2f3fc5f0")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][Connector]"," Rocketmq source startOffset greater than endOffset error (#6287)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/cd44b5894e"},"https://github.com/apache/seatunnel/commit/cd44b5894e")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove use ",(0,r.yg)("inlineCode",{parentName:"td"},"SeaTunnelSink::getConsumedType")," method and mark it as deprecated (#5755)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8de7408100"},"https://github.com/apache/seatunnel/commit/8de7408100")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][CheckStyle]"," Remove useless ","'","SuppressWarnings","'"," annotation of checkstyle. (#5260)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51c0d709ba"},"https://github.com/apache/seatunnel/commit/51c0d709ba")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][pom]"," Formatting pom (#4761)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1d6d3815ec"},"https://github.com/apache/seatunnel/commit/1d6d3815ec")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][Connector-V2]","[RocketMQ]"," Fix rocketmq spark e2e test cases (#4583)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e711f6ef4c"},"https://github.com/apache/seatunnel/commit/e711f6ef4c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Add rocketmq source and sink (#4007)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e333897552"},"https://github.com/apache/seatunnel/commit/e333897552")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.2"))))))}s.isMDXComponent=!0},6943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),l=n(7966);const o={},i="RocketMQ",m={unversionedId:"connector-v2/sink/RocketMQ",id:"connector-v2/sink/RocketMQ",title:"RocketMQ",description:"RocketMQ sink connector",source:"@site/docs/connector-v2/sink/RocketMQ.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/RocketMQ",permalink:"/docs/connector-v2/sink/RocketMQ",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/sink/RocketMQ.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Redshift",permalink:"/docs/connector-v2/sink/Redshift"},next:{title:"S3Redshift",permalink:"/docs/connector-v2/sink/S3-Redshift"}},c={},g=[{value:"Support Apache RocketMQ Version",id:"support-apache-rocketmq-version",level:2},{value:"Support These Engines",id:"support-these-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"partition.key.fields array",id:"partitionkeyfields-array",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Fake to Rocketmq Simple",id:"fake-to-rocketmq-simple",level:3},{value:"Rocketmq To Rocketmq Simple",id:"rocketmq-to-rocketmq-simple",level:3},{value:"Timestamp consumption write Simple",id:"timestamp-consumption-write-simple",level:3},{value:"Changelog",id:"changelog",level:2}],p={toc:g},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rocketmq"},"RocketMQ"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"RocketMQ sink connector")),(0,r.yg)("h2",{id:"support-apache-rocketmq-version"},"Support Apache RocketMQ Version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"4.9.0 (Or a newer version, for reference)")),(0,r.yg)("h2",{id:"support-these-engines"},"Support These Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,r.yg)("p",null,"By default, we will use 2pc to guarantee the message is sent to RocketMQ exactly once."),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write Rows to a Apache RocketMQ topic."),(0,r.yg)("h2",{id:"sink-options"},"Sink Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RocketMQ topic")," name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name.srv.addr"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RocketMQ")," name server cluster address.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"acl.enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"access.key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"When ACL_ENABLED is true, access key cannot be empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"secret.key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"When ACL_ENABLED is true, secret key cannot be empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"producer.group"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-producer-Group"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-producer-Group")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tag"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RocketMQ")," message tag.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition.key.fields"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},'Data format. The default format is json. Optional text format. The default field separator is ",".If you customize the delimiter, add the "field_delimiter" option.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field.delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},","),(0,r.yg)("td",{parentName:"tr",align:null},"Customize the field delimiter for data format.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"producer.send.sync"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"If true, the message will be sync sent.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/connector-v2/sink-common-options"},"Sink Common Options")," for details.")))),(0,r.yg)("h3",{id:"partitionkeyfields-array"},"partition.key.fields ","[array]"),(0,r.yg)("p",null,"Configure which fields are used as the key of the RocketMQ message."),(0,r.yg)("p",null,"For example, if you want to use value of fields from upstream data as key, you can assign field names to this property."),(0,r.yg)("p",null,"Upstream data is the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"data"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jack"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"data-example1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mary"),(0,r.yg)("td",{parentName:"tr",align:null},"23"),(0,r.yg)("td",{parentName:"tr",align:null},"data-example2")))),(0,r.yg)("p",null,"If name is set as the key, then the hash value of the name column will determine which partition the message is sent to."),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"fake-to-rocketmq-simple"},"Fake to Rocketmq Simple"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The data is randomly generated and asynchronously sent to the test topic")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n  # please go to https://seatunnel.apache.org/docs/category/transform\n}\n\nsink {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topic = "test_topic"\n  }\n}\n\n')),(0,r.yg)("h3",{id:"rocketmq-to-rocketmq-simple"},"Rocketmq To Rocketmq Simple"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Consuming Rocketmq writes to c_int field Hash number of partitions written to different partitions This is the default asynchronous way to write")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n}\n\nsource {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topics = "test_topic"\n    plugin_output = "rocketmq_table"\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\nsink {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topic = "test_topic_sink"\n    partition.key.fields = ["c_int"]\n  }\n}\n')),(0,r.yg)("h3",{id:"timestamp-consumption-write-simple"},"Timestamp consumption write Simple"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This is a stream consumption specified time stamp consumption, when there are new partitions added the program will refresh the perception and consumption at intervals, and write to another topic type")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\nenv {\n  parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topics = "test_topic"\n    plugin_output = "rocketmq_table"\n    start.mode = "CONSUME_FROM_FIRST_OFFSET"\n    batch.size = "400"\n    consumer.group = "test_topic_group"\n    format = "json"\n    format = json\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n  # please go to https://seatunnel.apache.org/docs/category/transform\n}\nsink {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topic = "test_topic"\n    partition.key.fields = ["c_int"]\n    producer.send.sync = true\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)(l.default,{mdxType:"ChangeLog"}))}u.isMDXComponent=!0}}]);