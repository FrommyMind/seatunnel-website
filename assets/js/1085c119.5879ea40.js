"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[60967],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>d});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(a),u=r,d=g["".concat(i,".").concat(u)]||g[u]||m[u]||o;return a?t.createElement(d,l(l({ref:n},p),{},{components:a})):t.createElement(d,l({ref:n},p))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[g]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70272:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=a(58168),r=(a(96540),a(15680));const o={},l="Canal Format",s={unversionedId:"connector-v2/formats/canal-json",id:"version-2.3.5/connector-v2/formats/canal-json",title:"Canal Format",description:"Changelog-Data-Capture Format Format Deserialization Schema",source:"@site/versioned_docs/version-2.3.5/connector-v2/formats/canal-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/canal-json",permalink:"/docs/2.3.5/connector-v2/formats/canal-json",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.5/connector-v2/formats/canal-json.md",tags:[],version:"2.3.5",frontMatter:{}},i={},c=[{value:"Kafka uses example",id:"kafka-uses-example",level:2}],p={toc:c},g="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"canal-format"},"Canal Format"),(0,r.yg)("p",null,"Changelog-Data-Capture Format Format: Serialization Schema Format: Deserialization Schema"),(0,r.yg)("p",null,"Canal is a CDC (Changelog Data Capture) tool that can stream changes in real-time from MySQL into other systems. Canal provides a unified format schema for changelog and supports to serialize messages using JSON and protobuf (protobuf is the default format for Canal)."),(0,r.yg)("p",null,"SeaTunnel supports to interpret Canal JSON messages as INSERT/UPDATE/DELETE messages into seatunnel system. This is useful in many cases to leverage this feature, such as"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"    synchronizing incremental data from databases to other systems\n    auditing logs\n    real-time materialized views on databases\n    temporal join changing history of a database table and so on.\n")),(0,r.yg)("p",null,"SeaTunnel also supports to encode the INSERT/UPDATE/DELETE messages in SeaTunnel as Canal JSON messages, and emit to storage like Kafka. However, currently SeaTunnel can\u2019t combine UPDATE_BEFORE and UPDATE_AFTER into a single UPDATE message. Therefore, SeaTunnel encodes UPDATE_BEFORE and UPDATE_AFTER as DELETE and INSERT Canal messages."),(0,r.yg)("h1",{id:"format-options"},"Format Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what format to use, here should be 'canal_json'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"canal_json.ignore-parse-errors"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"Skip fields and rows with parse errors instead of failing. Fields are set to null in case of errors.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"canal_json.database.include"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'An optional regular expression to only read the specific databases changelog rows by regular matching the "database" meta field in the Canal record. The pattern string is compatible with Java\'s Pattern.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"canal_json.table.include"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'An optional regular expression to only read the specific tables changelog rows by regular matching the "table" meta field in the Canal record. The pattern string is compatible with Java\'s Pattern.')))),(0,r.yg)("h1",{id:"how-to-use"},"How to use"),(0,r.yg)("h2",{id:"kafka-uses-example"},"Kafka uses example"),(0,r.yg)("p",null,"Canal provides a unified format for changelog, here is a simple example for an update operation captured from a MySQL products table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "data": [\n    {\n      "id": "111",\n      "name": "scooter",\n      "description": "Big 2-wheel scooter",\n      "weight": "5.18"\n    }\n  ],\n  "database": "inventory",\n  "es": 1589373560000,\n  "id": 9,\n  "isDdl": false,\n  "mysqlType": {\n    "id": "INTEGER",\n    "name": "VARCHAR(255)",\n    "description": "VARCHAR(512)",\n    "weight": "FLOAT"\n  },\n  "old": [\n    {\n      "weight": "5.15"\n    }\n  ],\n  "pkNames": [\n    "id"\n  ],\n  "sql": "",\n  "sqlType": {\n    "id": 4,\n    "name": 12,\n    "description": 12,\n    "weight": 7\n  },\n  "table": "products",\n  "ts": 1589373560798,\n  "type": "UPDATE"\n}\n')),(0,r.yg)("p",null,"Note: please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/alibaba/canal/wiki"},"Canal documentation")," about the meaning of each fields."),(0,r.yg)("p",null,"The MySQL products table has 4 columns (id, name, description and weight).\nThe above JSON message is an update change event on the products table where the weight value of the row with id = 111 is changed from 5.15 to 5.18.\nAssuming the messages have been synchronized to Kafka topic products_binlog, then we can use the following SeaTunnel to consume this topic and interpret the change events."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n    parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "kafkaCluster:9092"\n    topic = "products_binlog"\n    result_table_name = "kafka_name"\n    start_mode = earliest\n    schema = {\n      fields {\n           id = "int"\n           name = "string"\n           description = "string"\n           weight = "string"\n      }\n    },\n    format = canal_json\n  }\n\n}\n\ntransform {\n}\n\nsink {\n  Kafka {\n    bootstrap.servers = "localhost:9092"\n    topic = "consume-binlog"\n    format = canal_json\n  }\n}\n')))}m.isMDXComponent=!0}}]);