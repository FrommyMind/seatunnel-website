"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5494],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>s});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),m=p(n),y=l,s=m["".concat(o,".").concat(y)]||m[y]||u[y]||r;return n?a.createElement(s,i(i({ref:t},d),{},{components:n})):a.createElement(s,i({ref:t},d))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=y;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[m]="string"==typeof e?e:l,i[1]=g;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},80919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>g,toc:()=>p});var a=n(58168),l=(n(96540),n(15680));const r={},i="IoTDB",g={unversionedId:"connector-v2/sink/IoTDB",id:"version-2.3.9/connector-v2/sink/IoTDB",title:"IoTDB",description:"IoTDB sink connector",source:"@site/versioned_docs/version-2.3.9/connector-v2/sink/IoTDB.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/IoTDB",permalink:"/docs/2.3.9/connector-v2/sink/IoTDB",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/connector-v2/sink/IoTDB.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"InfluxDB",permalink:"/docs/2.3.9/connector-v2/sink/InfluxDB"},next:{title:"JDBC",permalink:"/docs/2.3.9/connector-v2/sink/Jdbc"}},o={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Description",id:"description",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Key Features",id:"key-features",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Examples",id:"examples",level:2},{value:"Case1",id:"case1",level:3},{value:"Case2",id:"case2",level:3},{value:"Case3",id:"case3",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"iotdb"},"IoTDB"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"IoTDB sink connector")),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Used to write data to IoTDB."),(0,l.yg)("h2",{id:"using-dependency"},"Using Dependency"),(0,l.yg)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,l.yg)("blockquote",null,(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.apache.iotdb/iotdb-jdbc"},"jdbc driver jar package")," has been placed in directory ",(0,l.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,l.yg)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,l.yg)("blockquote",null,(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.apache.iotdb/iotdb-jdbc"},"jdbc driver jar package")," has been placed in directory ",(0,l.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,l.yg)("h2",{id:"key-features"},"Key Features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/2.3.9/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("p",null,"IoTDB supports the ",(0,l.yg)("inlineCode",{parentName:"p"},"exactly-once")," feature through idempotent writing. If two pieces of data have\nthe same ",(0,l.yg)("inlineCode",{parentName:"p"},"key")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"timestamp"),", the new data will overwrite the old one."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"There is a conflict of thrift version between IoTDB and Spark.Therefore, you need to execute ",(0,l.yg)("inlineCode",{parentName:"p"},"rm -f $SPARK_HOME/jars/libthrift*")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"cp $IOTDB_HOME/lib/libthrift* $SPARK_HOME/jars/")," to resolve it.")),(0,l.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,l.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,l.yg)("th",{parentName:"tr",align:null},"Url"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"IoTDB"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},">= 0.13.0")),(0,l.yg)("td",{parentName:"tr",align:null},"localhost:6667")))),(0,l.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"IotDB Data Type"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT32"),(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT32"),(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT32"),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT64"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TEXT"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")))),(0,l.yg)("h2",{id:"sink-options"},"Sink Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"node_urls"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB")," cluster address, the format is ",(0,l.yg)("inlineCode",{parentName:"td"},'"host1:port"')," or ",(0,l.yg)("inlineCode",{parentName:"td"},'"host1:port,host2:port"'))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB")," user username")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB")," user password")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"key_device"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Specify field name of the ",(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB")," deviceId in SeaTunnelRow")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"key_timestamp"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"processing time"),(0,l.yg)("td",{parentName:"tr",align:null},"Specify field-name of the ",(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB")," timestamp in SeaTunnelRow. If not specified, use processing-time as timestamp")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"key_measurement_fields"),(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"exclude ",(0,l.yg)("inlineCode",{parentName:"td"},"device")," & ",(0,l.yg)("inlineCode",{parentName:"td"},"timestamp")),(0,l.yg)("td",{parentName:"tr",align:null},"Specify field-name of the ",(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB")," measurement list in SeaTunnelRow. If not specified, include all fields but exclude ",(0,l.yg)("inlineCode",{parentName:"td"},"device")," & ",(0,l.yg)("inlineCode",{parentName:"td"},"timestamp"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"storage_group"),(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Specify device storage group(path prefix) ",(0,l.yg)("br",null),' example: deviceId = ${storage_group} + "." +  ${key_device}')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"1024"),(0,l.yg)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffers reaches the number of ",(0,l.yg)("inlineCode",{parentName:"td"},"batch_size")," or the time reaches ",(0,l.yg)("inlineCode",{parentName:"td"},"batch_interval_ms"),", the data will be flushed into the IoTDB")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The number of retries to flush failed")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Using as a multiplier for generating the next delay for backoff")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retry_backoff_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The amount of time to wait before attempting to retry a request to ",(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"default_thrift_buffer_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Thrift init buffer size in ",(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB")," client")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_thrift_frame_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Thrift max frame size in ",(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB")," client")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"zone_id"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"java.time.ZoneId in ",(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB")," client")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_rpc_compression"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Enable rpc compression in ",(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB")," client")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connection_timeout_in_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum time (in ms) to wait when connecting to ",(0,l.yg)("inlineCode",{parentName:"td"},"IoTDB"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"td",href:"/docs/2.3.9/connector-v2/sink-common-options"},"Sink Common Options")," for details")))),(0,l.yg)("h2",{id:"examples"},"Examples"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 2\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    row.num = 16\n    bigint.template = [1664035200001]\n    schema = {\n      fields {\n        device_name = "string"\n        temperature = "float"\n        moisture = "int"\n        event_ts = "bigint"\n        c_string = "string"\n        c_boolean = "boolean"\n        c_tinyint = "tinyint"\n        c_smallint = "smallint"\n        c_int = "int"\n        c_bigint = "bigint"\n        c_float = "float"\n        c_double = "double"\n      }\n    }\n  }\n}\n')),(0,l.yg)("p",null,"Upstream SeaTunnelRow data format is the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"device_name"),(0,l.yg)("th",{parentName:"tr",align:null},"temperature"),(0,l.yg)("th",{parentName:"tr",align:null},"moisture"),(0,l.yg)("th",{parentName:"tr",align:null},"event_ts"),(0,l.yg)("th",{parentName:"tr",align:null},"c_string"),(0,l.yg)("th",{parentName:"tr",align:null},"c_boolean"),(0,l.yg)("th",{parentName:"tr",align:null},"c_tinyint"),(0,l.yg)("th",{parentName:"tr",align:null},"c_smallint"),(0,l.yg)("th",{parentName:"tr",align:null},"c_int"),(0,l.yg)("th",{parentName:"tr",align:null},"c_bigint"),(0,l.yg)("th",{parentName:"tr",align:null},"c_float"),(0,l.yg)("th",{parentName:"tr",align:null},"c_double"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"root.test_group.device_a"),(0,l.yg)("td",{parentName:"tr",align:null},"36.1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"1664035200001"),(0,l.yg)("td",{parentName:"tr",align:null},"abc1"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"2147483648"),(0,l.yg)("td",{parentName:"tr",align:null},"1.0"),(0,l.yg)("td",{parentName:"tr",align:null},"1.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"root.test_group.device_b"),(0,l.yg)("td",{parentName:"tr",align:null},"36.2"),(0,l.yg)("td",{parentName:"tr",align:null},"101"),(0,l.yg)("td",{parentName:"tr",align:null},"1664035200001"),(0,l.yg)("td",{parentName:"tr",align:null},"abc2"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"2147483649"),(0,l.yg)("td",{parentName:"tr",align:null},"2.0"),(0,l.yg)("td",{parentName:"tr",align:null},"2.0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"root.test_group.device_c"),(0,l.yg)("td",{parentName:"tr",align:null},"36.3"),(0,l.yg)("td",{parentName:"tr",align:null},"102"),(0,l.yg)("td",{parentName:"tr",align:null},"1664035200001"),(0,l.yg)("td",{parentName:"tr",align:null},"abc3"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"2147483649"),(0,l.yg)("td",{parentName:"tr",align:null},"3.0"),(0,l.yg)("td",{parentName:"tr",align:null},"3.0")))),(0,l.yg)("h3",{id:"case1"},"Case1"),(0,l.yg)("p",null,"only fill required config.\nuse current processing time as timestamp. and include all fields but exclude ",(0,l.yg)("inlineCode",{parentName:"p"},"device")," & ",(0,l.yg)("inlineCode",{parentName:"p"},"timestamp")," as measurement fields"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    node_urls = "localhost:6667"\n    username = "root"\n    password = "root"\n    key_device = "device_name" # specify the `deviceId` use device_name field\n  }\n}\n')),(0,l.yg)("p",null,"Output to ",(0,l.yg)("inlineCode",{parentName:"p"},"IoTDB")," data format is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"IoTDB> SELECT * FROM root.test_group.* align by device;\n+------------------------+------------------------+--------------+-----------+--------------+---------+----------+----------+-----------+------+-----------+--------+---------+\n|                    Time|                  Device|   temperature|   moisture|      event_ts| c_string| c_boolean| c_tinyint| c_smallint| c_int|   c_bigint| c_float| c_double|\n+------------------------+------------------------+--------------+-----------+--------------+---------+----------+----------+-----------+------+-----------+--------+---------+\n|2023-09-01T00:00:00.001Z|root.test_group.device_a|          36.1|        100| 1664035200001|     abc1|      true|         1|          1|     1| 2147483648|     1.0|      1.0| \n|2023-09-01T00:00:00.001Z|root.test_group.device_b|          36.2|        101| 1664035200001|     abc2|     false|         2|          2|     2| 2147483649|     2.0|      2.0|\n|2023-09-01T00:00:00.001Z|root.test_group.device_c|          36.3|        102| 1664035200001|     abc2|     false|         3|          3|     3| 2147483649|     3.0|      3.0|\n+------------------------+------------------------+--------------+-----------+--------------+---------+---------+-----------+-----------+------+-----------+--------+---------+\n")),(0,l.yg)("h3",{id:"case2"},"Case2"),(0,l.yg)("p",null,"use source event's time"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    node_urls = "localhost:6667"\n    username = "root"\n    password = "root"\n    key_device = "device_name" # specify the `deviceId` use device_name field\n    key_timestamp = "event_ts" # specify the `timestamp` use event_ts field\n  }\n}\n')),(0,l.yg)("p",null,"Output to ",(0,l.yg)("inlineCode",{parentName:"p"},"IoTDB")," data format is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"IoTDB> SELECT * FROM root.test_group.* align by device;\n+------------------------+------------------------+--------------+-----------+--------------+---------+----------+----------+-----------+------+-----------+--------+---------+\n|                    Time|                  Device|   temperature|   moisture|      event_ts| c_string| c_boolean| c_tinyint| c_smallint| c_int|   c_bigint| c_float| c_double|\n+------------------------+------------------------+--------------+-----------+--------------+---------+----------+----------+-----------+------+-----------+--------+---------+\n|2022-09-25T00:00:00.001Z|root.test_group.device_a|          36.1|        100| 1664035200001|     abc1|      true|         1|          1|     1| 2147483648|     1.0|      1.0| \n|2022-09-25T00:00:00.001Z|root.test_group.device_b|          36.2|        101| 1664035200001|     abc2|     false|         2|          2|     2| 2147483649|     2.0|      2.0|\n|2022-09-25T00:00:00.001Z|root.test_group.device_c|          36.3|        102| 1664035200001|     abc2|     false|         3|          3|     3| 2147483649|     3.0|      3.0|\n+------------------------+------------------------+--------------+-----------+--------------+---------+---------+-----------+-----------+------+-----------+--------+---------+\n")),(0,l.yg)("h3",{id:"case3"},"Case3"),(0,l.yg)("p",null,"use source event's time and limit measurement fields"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    node_urls = "localhost:6667"\n    username = "root"\n    password = "root"\n    key_device = "device_name"\n    key_timestamp = "event_ts"\n    key_measurement_fields = ["temperature", "moisture"]\n  }\n}\n')),(0,l.yg)("p",null,"Output to ",(0,l.yg)("inlineCode",{parentName:"p"},"IoTDB")," data format is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"IoTDB> SELECT * FROM root.test_group.* align by device;\n+------------------------+------------------------+--------------+-----------+\n|                    Time|                  Device|   temperature|   moisture|\n+------------------------+------------------------+--------------+-----------+\n|2022-09-25T00:00:00.001Z|root.test_group.device_a|          36.1|        100|\n|2022-09-25T00:00:00.001Z|root.test_group.device_b|          36.2|        101|\n|2022-09-25T00:00:00.001Z|root.test_group.device_c|          36.3|        102|\n+------------------------+------------------------+--------------+-----------+\n")),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add IoTDB Sink Connector")),(0,l.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Improve IoTDB Sink Connector (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2917"},"2917"),")",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Support align by sql syntax"),(0,l.yg)("li",{parentName:"ul"},"Support sql split ignore case"),(0,l.yg)("li",{parentName:"ul"},"Support restore split offset to at-least-once"),(0,l.yg)("li",{parentName:"ul"},"Support read timestamp from RowRecord"))),(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Fix IoTDB connector sink NPE (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3080"},"3080"),")")))}u.isMDXComponent=!0}}]);