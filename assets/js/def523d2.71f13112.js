"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[98358],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),g=r,y=s["".concat(p,".").concat(g)]||s[g]||c[g]||l;return a?n.createElement(y,i(i({ref:t},m),{},{components:a})):n.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},63844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const l={},i="Metadata",o={unversionedId:"transform-v2/metadata",id:"version-2.3.9/transform-v2/metadata",title:"Metadata",description:"Metadata transform plugin",source:"@site/versioned_docs/version-2.3.9/transform-v2/metadata.md",sourceDirName:"transform-v2",slug:"/transform-v2/metadata",permalink:"/docs/2.3.9/transform-v2/metadata",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/transform-v2/metadata.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"LLM",permalink:"/docs/2.3.9/transform-v2/llm"},next:{title:"Replace",permalink:"/docs/2.3.9/transform-v2/replace"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Available Metadata",id:"available-metadata",level:2},{value:"note",id:"note",level:3},{value:"Options",id:"options",level:2},{value:"metadata_fields map",id:"metadata_fields-map",level:3},{value:"Examples",id:"examples",level:2}],m={toc:d},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"metadata"},"Metadata"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Metadata transform plugin")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Metadata transform plugin for adding metadata fields to data"),(0,r.yg)("h2",{id:"available-metadata"},"Available Metadata"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Key"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DataType"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Name of the table that contain the row.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Name of the table that contain the row.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"RowKind"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The type of operation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"EventTime"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Long"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The time at which the connector processed the event.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Delay"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Long"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The difference between data extraction time and database change time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Partition"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Contains the partition field of the corresponding number table of the row, multiple using ",(0,r.yg)("inlineCode",{parentName:"td"},",")," join")))),(0,r.yg)("h3",{id:"note"},"note"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"`Delay` `Partition` only worked on cdc series connectors for now , except TiDB-CDC\n")),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"metadata_fields"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"A mapping metadata input fields and their corresponding output fields.")))),(0,r.yg)("h3",{id:"metadata_fields-map"},"metadata_fields ","[map]"),(0,r.yg)("p",null,"A mapping between metadata fields and their respective output fields. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},"metadata_fields {\n  Database = c_database\n  Table = c_table\n  RowKind = c_rowKind\n  EventTime = c_ts_ms\n  Delay = c_delay\n}\n")),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\nenv {\n    parallelism = 1\n    job.mode = "STREAMING"\n    checkpoint.interval = 5000\n    read_limit.bytes_per_second = 7000000\n    read_limit.rows_per_second = 400\n}\n\nsource {\n    MySQL-CDC {\n        plugin_output = "customers_mysql_cdc"\n        server-id = 5652\n        username = "root"\n        password = "zdyk_Dev@2024"\n        table-names = ["source.user"]\n        base-url = "jdbc:mysql://172.16.17.123:3306/source"\n    }\n}\n\ntransform {\n  Metadata {\n    metadata_fields {\n      Database = database\n      Table = table\n      RowKind = rowKind\n      EventTime = ts_ms\n      Delay = delay\n    }\n    plugin_output = "trans_result"\n  }\n}\n\nsink {\n  Console {\n    plugin_input = "custom_name"\n  }\n}\n\n')))}c.isMDXComponent=!0}}]);