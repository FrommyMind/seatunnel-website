"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[80587,12711],{15680:(t,e,n)=>{n.d(e,{xA:()=>m,yg:()=>y});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),g=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=g(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),p=g(n),d=r,y=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return n?a.createElement(y,o(o({ref:e},m),{},{components:n})):a.createElement(y,o({ref:e},m))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:r,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14523:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={},o=void 0,i={unversionedId:"connector-v2/changelog/connector-rocketmq",id:"connector-v2/changelog/connector-rocketmq",title:"connector-rocketmq",description:"Change Log",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-rocketmq.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-rocketmq",permalink:"/zh-CN/docs/connector-v2/changelog/connector-rocketmq",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-rocketmq.md",tags:[],version:"current",frontMatter:{}},c={},g=[],m={toc:g},p="wrapper";function u(t){let{components:e,...n}=t;return(0,r.yg)(p,(0,a.A)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Add optional flag for rocketmq connector to skip parse errors instead of failing (#8737)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/701f17b5d4"},"https://github.com/apache/seatunnel/commit/701f17b5d4")),(0,r.yg)("td",{parentName:"tr",align:null},"dev")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," RocketMQ Sink add message tag config (#7996)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/97a1b00e48"},"https://github.com/apache/seatunnel/commit/97a1b00e48")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][Connector-V2]"," Fix some throwable error not be caught (#7657)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e19d73282e"},"https://github.com/apache/seatunnel/commit/e19d73282e")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Kafka]"," Support multi-table source read  (#5992)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/60104602d1"},"https://github.com/apache/seatunnel/commit/60104602d1")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][connector-rocketmq]"," commit a correct offset to broker ","&"," reduce ThreadInterruptedException log (#6668)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b7480e1a89"},"https://github.com/apache/seatunnel/commit/b7480e1a89")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[fix][connector-rocketmq]","Fix a NPE problem when checkpoint.interval is set too small(#6624) (#6625)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6e0c81d492"},"https://github.com/apache/seatunnel/commit/6e0c81d492")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Test][E2E]"," Add thread leak check for connector (#5773)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1f2f3fc5f0"},"https://github.com/apache/seatunnel/commit/1f2f3fc5f0")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][Connector]"," Rocketmq source startOffset greater than endOffset error (#6287)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/cd44b5894e"},"https://github.com/apache/seatunnel/commit/cd44b5894e")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove use ",(0,r.yg)("inlineCode",{parentName:"td"},"SeaTunnelSink::getConsumedType")," method and mark it as deprecated (#5755)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8de7408100"},"https://github.com/apache/seatunnel/commit/8de7408100")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][CheckStyle]"," Remove useless ","'","SuppressWarnings","'"," annotation of checkstyle. (#5260)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51c0d709ba"},"https://github.com/apache/seatunnel/commit/51c0d709ba")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][pom]"," Formatting pom (#4761)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1d6d3815ec"},"https://github.com/apache/seatunnel/commit/1d6d3815ec")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][Connector-V2]","[RocketMQ]"," Fix rocketmq spark e2e test cases (#4583)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e711f6ef4c"},"https://github.com/apache/seatunnel/commit/e711f6ef4c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Add rocketmq source and sink (#4007)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e333897552"},"https://github.com/apache/seatunnel/commit/e333897552")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.2"))))))}u.isMDXComponent=!0},37732:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=n(58168),r=(n(96540),n(15680)),l=n(14523);const o={},i="RocketMQ",c={unversionedId:"connector-v2/sink/RocketMQ",id:"connector-v2/sink/RocketMQ",title:"RocketMQ",description:"RocketMQ sink \u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/RocketMQ.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/RocketMQ",permalink:"/zh-CN/docs/connector-v2/sink/RocketMQ",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/RocketMQ.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Redshift",permalink:"/zh-CN/docs/connector-v2/sink/Redshift"},next:{title:"S3Redshift",permalink:"/zh-CN/docs/connector-v2/sink/S3-Redshift"}},g={},m=[{value:"\u652f\u6301Apache RocketMQ\u7248\u672c",id:"\u652f\u6301apache-rocketmq\u7248\u672c",level:2},{value:"\u652f\u6301\u8fd9\u4e9b\u5f15\u64ce",id:"\u652f\u6301\u8fd9\u4e9b\u5f15\u64ce",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"Sink \u53c2\u6570",id:"sink-\u53c2\u6570",level:2},{value:"partition.key.fields array",id:"partitionkeyfields-array",level:3},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"Fake \u5230 RocketMQ \u7b80\u5355\u793a\u4f8b",id:"fake-\u5230-rocketmq-\u7b80\u5355\u793a\u4f8b",level:3},{value:"Rocketmq \u5230 Rocketmq \u7b80\u5355\u793a\u4f8b",id:"rocketmq-\u5230-rocketmq-\u7b80\u5355\u793a\u4f8b",level:3},{value:"\u65f6\u95f4\u6233\u6d88\u8d39\u5199\u5165\u793a\u4f8b",id:"\u65f6\u95f4\u6233\u6d88\u8d39\u5199\u5165\u793a\u4f8b",level:3},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2}],p={toc:m},u="wrapper";function d(t){let{components:e,...n}=t;return(0,r.yg)(u,(0,a.A)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rocketmq"},"RocketMQ"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"RocketMQ sink \u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u652f\u6301apache-rocketmq\u7248\u672c"},"\u652f\u6301Apache RocketMQ\u7248\u672c"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"4.9.0 (\u6216\u66f4\u65b0\u7248\u672c\uff0c\u4f9b\u53c2\u8003)")),(0,r.yg)("h2",{id:"\u652f\u6301\u8fd9\u4e9b\u5f15\u64ce"},"\u652f\u6301\u8fd9\u4e9b\u5f15\u64ce"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21"))),(0,r.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c06\u4f7f\u75282pc\u6765\u4fdd\u8bc1\u6d88\u606f\u7cbe\u786e\u4e00\u6b21\u5230RocketMQ\u3002"),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u5c06\u6570\u636e\u884c\u5199\u5165Apache RocketMQ\u4e3b\u9898"),(0,r.yg)("h2",{id:"sink-\u53c2\u6570"},"Sink \u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RocketMQ topic")," \u540d\u79f0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name.srv.addr"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RocketMQ"),"\u540d\u79f0\u670d\u52a1\u5668\u96c6\u7fa4\u5730\u5740\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"acl.enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"access.key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f53ACL_ENABLED\u4e3atrue\u65f6\uff0caccess key\u4e0d\u80fd\u4e3a\u7a7a\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"secret.key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f53ACL_ENABLED\u4e3atrue\u65f6, secret key \u4e0d\u80fd\u4e3a\u7a7a\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"producer.group"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-producer-Group"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-producer-Group")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tag"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RocketMQ"),"\u6d88\u606f\u6807\u7b7e\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition.key.fields"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u683c\u5f0f\u3002\u9ed8\u8ba4\u683c\u5f0f\u4e3ajson\u3002\u53ef\u9009text\u683c\u5f0f\u3002\u9ed8\u8ba4\u5b57\u6bb5\u5206\u9694\u7b26\u4e3a\u201c\uff0c\u201d\u3002\u5982\u679c\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\uff0c\u8bf7\u6dfb\u52a0\u201cfield_delimiter\u201d\u9009\u9879\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field.delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},","),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u6570\u636e\u683c\u5f0f\u7684\u5b57\u6bb5\u5206\u9694\u7b26\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"producer.send.sync"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3a true, \u5219\u6d88\u606f\u5c06\u540c\u6b65\u53d1\u9001\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Sink\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003","[sink common options]","\uff08../Sink-common-Options.md\uff09\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002")))),(0,r.yg)("h3",{id:"partitionkeyfields-array"},"partition.key.fields ","[array]"),(0,r.yg)("p",null,"\u914d\u7f6e\u54ea\u4e9b\u5b57\u6bb5\u7528\u4f5cRocketMQ\u6d88\u606f\u7684\u952e\u3002\n\u4f8b\u5982\uff0c\u5982\u679c\u8981\u4f7f\u7528\u4e0a\u6e38\u6570\u636e\u4e2d\u7684\u5b57\u6bb5\u503c\u4f5c\u4e3a\u952e\uff0c\u53ef\u4ee5\u4e3a\u6b64\u5c5e\u6027\u6307\u5b9a\u5b57\u6bb5\u540d\u3002\n\u4e0a\u6e38\u6570\u636e\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"data"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jack"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"data-example1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mary"),(0,r.yg)("td",{parentName:"tr",align:null},"23"),(0,r.yg)("td",{parentName:"tr",align:null},"data-example2")))),(0,r.yg)("p",null,"\u5982\u679cname\u88ab\u8bbe\u7f6e\u4e3a\u4e3b\u952e\uff0c\u90a3\u4e48name\u5217\u7684\u54c8\u5e0c\u503c\u5c06\u51b3\u5b9a\u6d88\u606f\u88ab\u53d1\u9001\u5230\u54ea\u4e2a\u5206\u533a\u3002"),(0,r.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,r.yg)("h3",{id:"fake-\u5230-rocketmq-\u7b80\u5355\u793a\u4f8b"},"Fake \u5230 RocketMQ \u7b80\u5355\u793a\u4f8b"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6570\u636e\u662f\u968f\u673a\u751f\u6210\u7684\uff0c\u5e76\u5f02\u6b65\u53d1\u9001\u5230\u6d4b\u8bd5\u4e3b\u9898")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\ntransform {\n    #\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6eseatunnel\u7684\u4fe1\u606f\uff0c\u5e76\u67e5\u770b\u8f6c\u6362\u63d2\u4ef6\u7684\u5b8c\u6574\u5217\u8868\uff0c\n    #\u8bf7\u524d\u5f80https://seatunnel.apache.org/docs/category/transform\n}\n\nsink {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topic = "test_topic"\n  }\n}\n\n')),(0,r.yg)("h3",{id:"rocketmq-\u5230-rocketmq-\u7b80\u5355\u793a\u4f8b"},"Rocketmq \u5230 Rocketmq \u7b80\u5355\u793a\u4f8b"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4f7f\u7528RocketMQ\u65f6\uff0c\u4f1a\u5411c_int\u5b57\u6bb5\u5199\u5165\u54c8\u5e0c\u6570\uff0c\u8be5\u54c8\u5e0c\u6570\u8868\u793a\u5199\u5165\u4e0d\u540c\u5206\u533a\u7684\u5206\u533a\u6570\u91cf\u3002\u8fd9\u662f\u9ed8\u8ba4\u7684\u5f02\u6b65\u5199\u5165\u65b9\u5f0f")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n}\n\nsource {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topics = "test_topic"\n    plugin_output = "rocketmq_table"\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\nsink {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topic = "test_topic_sink"\n    partition.key.fields = ["c_int"]\n  }\n}\n')),(0,r.yg)("h3",{id:"\u65f6\u95f4\u6233\u6d88\u8d39\u5199\u5165\u793a\u4f8b"},"\u65f6\u95f4\u6233\u6d88\u8d39\u5199\u5165\u793a\u4f8b"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u8fd9\u662f\u6d41\u6d88\u8d39\u4e2d\u7279\u5b9a\u7684\u65f6\u95f4\u6233\u6d88\u8d39\uff0c\u5f53\u6dfb\u52a0\u65b0\u5206\u533a\u65f6\uff0c\u7a0b\u5e8f\u5c06\u5b9a\u671f\u5237\u65b0\u611f\u77e5\u548c\u6d88\u8d39\uff0c\u5e76\u5199\u5165\u53e6\u4e00\u4e2a\u4e3b\u9898\u7c7b\u578b")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\nenv {\n  parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topics = "test_topic"\n    plugin_output = "rocketmq_table"\n    start.mode = "CONSUME_FROM_FIRST_OFFSET"\n    batch.size = "400"\n    consumer.group = "test_topic_group"\n    format = "json"\n    format = json\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\ntransform {\n    #\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6eseatunnel\u7684\u4fe1\u606f\uff0c\u5e76\u67e5\u770b\u8f6c\u6362\u63d2\u4ef6\u7684\u5b8c\u6574\u5217\u8868\uff0c\n    #\u8bf7\u524d\u5f80https://seatunnel.apache.org/docs/category/transform\n}\nsink {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topic = "test_topic"\n    partition.key.fields = ["c_int"]\n    producer.send.sync = true\n  }\n}\n')),(0,r.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,r.yg)(l.default,{mdxType:"ChangeLog"}))}d.isMDXComponent=!0}}]);