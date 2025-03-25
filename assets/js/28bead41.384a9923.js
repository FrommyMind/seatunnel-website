"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[23852],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},29795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(58168),o=(n(96540),n(15680));const a={},l="Intro To Connector V2 Features",i={unversionedId:"concept/connector-v2-features",id:"version-2.3.9/concept/connector-v2-features",title:"Intro To Connector V2 Features",description:"Differences Between Connector V2 And V1",source:"@site/versioned_docs/version-2.3.9/concept/connector-v2-features.md",sourceDirName:"concept",slug:"/concept/connector-v2-features",permalink:"/docs/2.3.9/concept/connector-v2-features",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/concept/connector-v2-features.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"Intro To Config File",permalink:"/docs/2.3.9/concept/config"},next:{title:"Intro To Schema Feature",permalink:"/docs/2.3.9/concept/schema-feature"}},c={},s=[{value:"Differences Between Connector V2 And V1",id:"differences-between-connector-v2-and-v1",level:2},{value:"Source Connector Features",id:"source-connector-features",level:2},{value:"exactly-once",id:"exactly-once",level:3},{value:"column projection",id:"column-projection",level:3},{value:"batch",id:"batch",level:3},{value:"stream",id:"stream",level:3},{value:"parallelism",id:"parallelism",level:3},{value:"support user-defined split",id:"support-user-defined-split",level:3},{value:"support multiple table read",id:"support-multiple-table-read",level:3},{value:"Sink Connector Features",id:"sink-connector-features",level:2},{value:"exactly-once",id:"exactly-once-1",level:3},{value:"cdc(change data capture)",id:"cdcchange-data-capture",level:3},{value:"support multiple table write",id:"support-multiple-table-write",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"intro-to-connector-v2-features"},"Intro To Connector V2 Features"),(0,o.yg)("h2",{id:"differences-between-connector-v2-and-v1"},"Differences Between Connector V2 And V1"),(0,o.yg)("p",null,"Since ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/issues/1608"},"https://github.com/apache/seatunnel/issues/1608")," We Added Connector V2 Features.\nConnector V2 is a connector defined based on the SeaTunnel Connector API interface. Unlike Connector V1, V2 supports the following features:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Multi Engine Support")," SeaTunnel Connector API is an engine independent API. The connectors developed based on this API can run in multiple engines. Currently, Flink and Spark are supported, and we will support other engines in the future."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Multi Engine Version Support")," Decoupling the connector from the engine through the translation layer solves the problem that most connectors need to modify the code in order to support a new version of the underlying engine."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Unified Batch And Stream")," Connector V2 can perform batch processing or streaming processing. We do not need to develop connectors for batch and stream separately."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Multiplexing JDBC/Log connection.")," Connector V2 supports JDBC resource reuse and sharing database log parsing.")),(0,o.yg)("h2",{id:"source-connector-features"},"Source Connector Features"),(0,o.yg)("p",null,"Source connectors have some common core features, and each source connector supports them to varying degrees."),(0,o.yg)("h3",{id:"exactly-once"},"exactly-once"),(0,o.yg)("p",null,"If each piece of data in the data source will only be sent downstream by the source once, we think this source connector supports exactly once."),(0,o.yg)("p",null,"In SeaTunnel, we can save the read ",(0,o.yg)("strong",{parentName:"p"},"Split")," and its ",(0,o.yg)("strong",{parentName:"p"},"offset")," (The position of the read data in split at that time,\nsuch as line number, byte size, offset, etc.) as ",(0,o.yg)("strong",{parentName:"p"},"StateSnapshot")," when checkpointing. If the task restarted, we will get the last ",(0,o.yg)("strong",{parentName:"p"},"StateSnapshot"),"\nand then locate the ",(0,o.yg)("strong",{parentName:"p"},"Split")," and ",(0,o.yg)("strong",{parentName:"p"},"offset")," read last time and continue to send data downstream."),(0,o.yg)("p",null,"For example ",(0,o.yg)("inlineCode",{parentName:"p"},"File"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Kafka"),"."),(0,o.yg)("h3",{id:"column-projection"},"column projection"),(0,o.yg)("p",null,"If the connector supports reading only specified columns from the data source (Note that if you read all columns first and then filter unnecessary columns through the schema, this method is not a real column projection)"),(0,o.yg)("p",null,"For example ",(0,o.yg)("inlineCode",{parentName:"p"},"JDBCSource")," can use sql to define reading columns."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"KafkaSource")," will read all content from topic and then use ",(0,o.yg)("inlineCode",{parentName:"p"},"schema")," to filter unnecessary columns, This is not ",(0,o.yg)("inlineCode",{parentName:"p"},"column projection"),"."),(0,o.yg)("h3",{id:"batch"},"batch"),(0,o.yg)("p",null,"Batch Job Mode, The data read is bounded and the job will stop after completing all data read."),(0,o.yg)("h3",{id:"stream"},"stream"),(0,o.yg)("p",null,"Streaming Job Mode, The data read is unbounded and the job never stop."),(0,o.yg)("h3",{id:"parallelism"},"parallelism"),(0,o.yg)("p",null,"Parallelism Source Connector support config ",(0,o.yg)("inlineCode",{parentName:"p"},"parallelism"),", every parallelism will create a task to read the data.\nIn the ",(0,o.yg)("strong",{parentName:"p"},"Parallelism Source Connector"),", the source will be split into multiple splits, and then the enumerator will allocate the splits to the SourceReader for processing."),(0,o.yg)("h3",{id:"support-user-defined-split"},"support user-defined split"),(0,o.yg)("p",null,"User can config the split rule."),(0,o.yg)("h3",{id:"support-multiple-table-read"},"support multiple table read"),(0,o.yg)("p",null,"Supports reading multiple tables in one SeaTunnel job"),(0,o.yg)("h2",{id:"sink-connector-features"},"Sink Connector Features"),(0,o.yg)("p",null,"Sink connectors have some common core features, and each sink connector supports them to varying degrees."),(0,o.yg)("h3",{id:"exactly-once-1"},"exactly-once"),(0,o.yg)("p",null,"When any piece of data flows into a distributed system, if the system processes any piece of data accurately only once in the whole processing process and the processing results are correct, it is considered that the system meets the exact once consistency."),(0,o.yg)("p",null,"For sink connector, the sink connector supports exactly-once if any piece of data only write into target once. There are generally two ways to achieve this:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The target database supports key deduplication. For example ",(0,o.yg)("inlineCode",{parentName:"li"},"MySQL"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"Kudu"),"."),(0,o.yg)("li",{parentName:"ul"},"The target support ",(0,o.yg)("strong",{parentName:"li"},"XA Transaction"),"(This transaction can be used across sessions. Even if the program that created the transaction has ended, the newly started program only needs to know the ID of the last transaction to resubmit or roll back the transaction). Then we can use ",(0,o.yg)("strong",{parentName:"li"},"Two-phase Commit")," to ensure ",(0,o.yg)("strong",{parentName:"li"},"exactly-once"),". For example ",(0,o.yg)("inlineCode",{parentName:"li"},"File"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"MySQL"),".")),(0,o.yg)("h3",{id:"cdcchange-data-capture"},"cdc(change data capture)"),(0,o.yg)("p",null,"If a sink connector supports writing row kinds(INSERT/UPDATE_BEFORE/UPDATE_AFTER/DELETE) based on primary key, we think it supports cdc(change data capture)."),(0,o.yg)("h3",{id:"support-multiple-table-write"},"support multiple table write"),(0,o.yg)("p",null,"Supports write multiple tables in one SeaTunnel job, users can dynamically specify the table's identifier by ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.3.9/concept/sink-options-placeholders"},"configuring placeholders"),"."))}d.isMDXComponent=!0}}]);