"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[30009],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,d=m["".concat(s,".").concat(u)]||m[u]||g[u]||l;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o="RocketMQ",i={unversionedId:"connector-v2/sink/RocketMQ",id:"version-2.3.5/connector-v2/sink/RocketMQ",title:"RocketMQ",description:"RocketMQ sink connector",source:"@site/versioned_docs/version-2.3.5/connector-v2/sink/RocketMQ.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/RocketMQ",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/RocketMQ",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.5/connector-v2/sink/RocketMQ.md",tags:[],version:"2.3.5",frontMatter:{},sidebar:"docs",previous:{title:"Redis",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/Redis"},next:{title:"S3Redshift",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/S3-Redshift"}},s={},p=[{value:"Support Apache RocketMQ Version",id:"support-apache-rocketmq-version",level:2},{value:"Support These Engines",id:"support-these-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"partition.key.fields array",id:"partitionkeyfields-array",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Fake to Rocketmq Simple",id:"fake-to-rocketmq-simple",level:3},{value:"Rocketmq To Rocketmq Simple",id:"rocketmq-to-rocketmq-simple",level:3},{value:"Timestamp consumption write Simple",id:"timestamp-consumption-write-simple",level:3}],c={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rocketmq"},"RocketMQ"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"RocketMQ sink connector")),(0,r.yg)("h2",{id:"support-apache-rocketmq-version"},"Support Apache RocketMQ Version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"4.9.0 (Or a newer version, for reference)")),(0,r.yg)("h2",{id:"support-these-engines"},"Support These Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,r.yg)("p",null,"By default, we will use 2pc to guarantee the message is sent to RocketMQ exactly once."),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write Rows to a Apache RocketMQ topic."),(0,r.yg)("h2",{id:"sink-options"},"Sink Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RocketMQ topic")," name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name.srv.addr"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RocketMQ")," name server cluster address.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"acl.enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"access.key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"When ACL_ENABLED is true, access key cannot be empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"secret.key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"When ACL_ENABLED is true, secret key cannot be empty")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"producer.group"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-producer-Group"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-producer-Group")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition.key.fields"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},'Data format. The default format is json. Optional text format. The default field separator is ",".If you customize the delimiter, add the "field_delimiter" option.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field.delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},","),(0,r.yg)("td",{parentName:"tr",align:null},"Customize the field delimiter for data format.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"producer.send.sync"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"If true, the message will be sync sent.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"common-options.md"},"Sink Common Options")," for details.")))),(0,r.yg)("h3",{id:"partitionkeyfields-array"},"partition.key.fields ","[array]"),(0,r.yg)("p",null,"Configure which fields are used as the key of the RocketMQ message."),(0,r.yg)("p",null,"For example, if you want to use value of fields from upstream data as key, you can assign field names to this property."),(0,r.yg)("p",null,"Upstream data is the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"data"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jack"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"data-example1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mary"),(0,r.yg)("td",{parentName:"tr",align:null},"23"),(0,r.yg)("td",{parentName:"tr",align:null},"data-example2")))),(0,r.yg)("p",null,"If name is set as the key, then the hash value of the name column will determine which partition the message is sent to."),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"fake-to-rocketmq-simple"},"Fake to Rocketmq Simple"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The data is randomly generated and asynchronously sent to the test topic")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n  # please go to https://seatunnel.apache.org/docs/category/transform\n}\n\nsink {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topic = "test_topic"\n  }\n}\n\n')),(0,r.yg)("h3",{id:"rocketmq-to-rocketmq-simple"},"Rocketmq To Rocketmq Simple"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Consuming Rocketmq writes to c_int field Hash number of partitions written to different partitions This is the default asynchronous way to write")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n}\n\nsource {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topics = "test_topic"\n    result_table_name = "rocketmq_table"\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\nsink {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topic = "test_topic_sink"\n    partition.key.fields = ["c_int"]\n  }\n}\n')),(0,r.yg)("h3",{id:"timestamp-consumption-write-simple"},"Timestamp consumption write Simple"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This is a stream consumption specified time stamp consumption, when there are new partitions added the program will refresh the perception and consumption at intervals, and write to another topic type")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\nenv {\n  parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topics = "test_topic"\n    result_table_name = "rocketmq_table"\n    start.mode = "CONSUME_FROM_FIRST_OFFSET"\n    batch.size = "400"\n    consumer.group = "test_topic_group"\n    format = "json"\n    format = json\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n  # please go to https://seatunnel.apache.org/docs/category/transform\n}\nsink {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topic = "test_topic"\n    partition.key.fields = ["c_int"]\n    producer.send.sync = true\n  }\n}\n')))}g.isMDXComponent=!0}}]);