"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[62919],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,g=u["".concat(o,".").concat(y)]||u[y]||m[y]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},49196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={},l="Hive",s={unversionedId:"connector-v2/sink/Hive",id:"version-2.2.0-beta/connector-v2/sink/Hive",title:"Hive",description:"Hive sink connector",source:"@site/versioned_docs/version-2.2.0-beta/connector-v2/sink/Hive.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hive",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/sink/Hive",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector-v2/sink/Hive.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"HdfsFile",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/sink/HdfsFile"},next:{title:"Http",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/sink/Http"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"table_name string",id:"table_name-string",level:3},{value:"metastore_uri string",id:"metastore_uri-string",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"save_mode string",id:"save_mode-string",level:3},{value:"Example",id:"example",level:2},{value:"example 1",id:"example-1",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hive"},"Hive"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Hive sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data to Hive."),(0,r.yg)("p",null,"In order to use this connector, You must ensure your spark/flink cluster already integrated hive. The tested hive version is 2.3.9."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tips: Hive Sink Connector not support array, map and struct datatype now")),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,r.yg)("p",null,"By default, we use 2PC commit to ensure ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once")),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"schema projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,r.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc")))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metastore_uri"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_by"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"required if hive sink table have partitions"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink_columns"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'"append"')))),(0,r.yg)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,r.yg)("p",null,"Target Hive table name eg: db1.table1"),(0,r.yg)("h3",{id:"metastore_uri-string"},"metastore_uri ","[string]"),(0,r.yg)("p",null,"Hive metastore uri"),(0,r.yg)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,r.yg)("p",null,"Partition data based on selected fields"),(0,r.yg)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,r.yg)("p",null,"Which columns need be write to hive, default value is all of the columns get from ",(0,r.yg)("inlineCode",{parentName:"p"},"Transform")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written."),(0,r.yg)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,r.yg)("p",null,"Only support ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," now."),(0,r.yg)("h3",{id:"save_mode-string"},"save_mode ","[string]"),(0,r.yg)("p",null,"Storage mode, we need support ",(0,r.yg)("inlineCode",{parentName:"p"},"overwrite")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"append"),". ",(0,r.yg)("inlineCode",{parentName:"p"},"append")," is now supported."),(0,r.yg)("p",null,"Streaming Job not support ",(0,r.yg)("inlineCode",{parentName:"p"},"overwrite"),"."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'\n  Hive {\n    table_name = "default.seatunnel_orc"\n    metastore_uri = "thrift://namenode001:9083"\n  }\n\n')),(0,r.yg)("h3",{id:"example-1"},"example 1"),(0,r.yg)("p",null,"We have a source table like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"create table test_hive_source(\n     test_tinyint                          TINYINT,\n     test_smallint                       SMALLINT,\n     test_int                                INT,\n     test_bigint                           BIGINT,\n     test_boolean                       BOOLEAN,\n     test_float                             FLOAT,\n     test_double                         DOUBLE,\n     test_string                           STRING,\n     test_binary                          BINARY,\n     test_timestamp                  TIMESTAMP,\n     test_decimal                       DECIMAL(8,2),\n     test_char                             CHAR(64),\n     test_varchar                        VARCHAR(64),\n     test_date                             DATE,\n     test_array                            ARRAY<INT>,\n     test_map                              MAP<STRING, FLOAT>,\n     test_struct                           STRUCT<street:STRING, city:STRING, state:STRING, zip:INT>\n     )\nPARTITIONED BY (test_par1 STRING, test_par2 STRING);\n\n")),(0,r.yg)("p",null,"We need read data from the source table and write to another table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"create table test_hive_sink_text_simple(\n     test_tinyint                          TINYINT,\n     test_smallint                       SMALLINT,\n     test_int                                INT,\n     test_bigint                           BIGINT,\n     test_boolean                       BOOLEAN,\n     test_float                             FLOAT,\n     test_double                         DOUBLE,\n     test_string                           STRING,\n     test_binary                          BINARY,\n     test_timestamp                  TIMESTAMP,\n     test_decimal                       DECIMAL(8,2),\n     test_char                             CHAR(64),\n     test_varchar                        VARCHAR(64),\n     test_date                             DATE\n     )\nPARTITIONED BY (test_par1 STRING, test_par2 STRING);\n\n")),(0,r.yg)("p",null,"The job config file can like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  # You can set flink configuration here\n  execution.parallelism = 3\n  job.name="test_hive_source_to_hive"\n}\n\nsource {\n  Hive {\n    table_name = "test_hive.test_hive_source"\n    metastore_uri = "thrift://ctyun7:9083"\n  }\n}\n\ntransform {\n}\n\nsink {\n  # choose stdout output plugin to output data to console\n\n  Hive {\n    table_name = "test_hive.test_hive_sink_text_simple"\n    metastore_uri = "thrift://ctyun7:9083"\n    partition_by = ["test_par1", "test_par2"]\n    sink_columns = ["test_tinyint", "test_smallint", "test_int", "test_bigint", "test_boolean", "test_float", "test_double", "test_string", "test_binary", "test_timestamp", "test_decimal", "test_char", "test_varchar", "test_date", "test_par1", "test_par2"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);