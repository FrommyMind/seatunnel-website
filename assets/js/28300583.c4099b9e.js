"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[75242],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>c});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(a),y=l,c=s["".concat(p,".").concat(y)]||s[y]||g[y]||r;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},21809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(58168),l=(a(96540),a(15680));const r={},i="Oracle",o={unversionedId:"connector-v2/source/Oracle",id:"version-2.3.9/connector-v2/source/Oracle",title:"Oracle",description:"JDBC Oracle Source Connector",source:"@site/versioned_docs/version-2.3.9/connector-v2/source/Oracle.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Oracle",permalink:"/docs/2.3.9/connector-v2/source/Oracle",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/connector-v2/source/Oracle.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"Oracle CDC",permalink:"/docs/2.3.9/connector-v2/source/Oracle-CDC"},next:{title:"OssFile",permalink:"/docs/2.3.9/connector-v2/source/OssFile"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"decimal_type_narrowing",id:"decimal_type_narrowing",level:3},{value:"Parallel Reader",id:"parallel-reader",level:2},{value:"Options Related To Split",id:"options-related-to-split",level:3},{value:"split.size",id:"splitsize",level:4},{value:"split.even-distribution.factor.lower-bound",id:"spliteven-distributionfactorlower-bound",level:4},{value:"split.even-distribution.factor.upper-bound",id:"spliteven-distributionfactorupper-bound",level:4},{value:"split.sample-sharding.threshold",id:"splitsample-shardingthreshold",level:4},{value:"split.inverse-sampling.rate",id:"splitinverse-samplingrate",level:4},{value:"partition_column string",id:"partition_column-string",level:4},{value:"partition_upper_bound BigDecimal",id:"partition_upper_bound-bigdecimal",level:4},{value:"partition_lower_bound BigDecimal",id:"partition_lower_bound-bigdecimal",level:4},{value:"partition_num int",id:"partition_num-int",level:4},{value:"tips",id:"tips",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"parallel by partition_column",id:"parallel-by-partition_column",level:3},{value:"parallel by Primary Key or Unique Index",id:"parallel-by-primary-key-or-unique-index",level:3},{value:"Parallel Boundary:",id:"parallel-boundary",level:3},{value:"Multiple table read:",id:"multiple-table-read",level:3}],u={toc:d},s="wrapper";function g(e){let{components:t,...a}=e;return(0,l.yg)(s,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"oracle"},"Oracle"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"JDBC Oracle Source Connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Read external data source data through JDBC."),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"key-features"},"Key Features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/2.3.9/concept/connector-v2-features"},"batch")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/2.3.9/concept/connector-v2-features"},"stream")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/2.3.9/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/2.3.9/concept/connector-v2-features"},"column projection")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/2.3.9/concept/connector-v2-features"},"parallelism")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/2.3.9/concept/connector-v2-features"},"support user-defined split"))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"supports query SQL and can achieve projection effect.")),(0,l.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,l.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,l.yg)("th",{parentName:"tr",align:null},"Driver"),(0,l.yg)("th",{parentName:"tr",align:null},"Url"),(0,l.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Oracle"),(0,l.yg)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,l.yg)("td",{parentName:"tr",align:null},"oracle.jdbc.OracleDriver"),(0,l.yg)("td",{parentName:"tr",align:null},"jdbc:oracle:thin:@datasource01:1523:xe"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"},"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"))))),(0,l.yg)("h2",{id:"database-dependency"},"Database Dependency"),(0,l.yg)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,l.yg)("blockquote",null,(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"},"jdbc driver jar package")," has been placed in directory ",(0,l.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."),(0,l.yg)("li",{parentName:"ol"},"To support the i18n character set, copy the ",(0,l.yg)("inlineCode",{parentName:"li"},"orai18n.jar")," to the ",(0,l.yg)("inlineCode",{parentName:"li"},"$SEATUNNEL_HOME/plugins/")," directory."))),(0,l.yg)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,l.yg)("blockquote",null,(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"},"jdbc driver jar package")," has been placed in directory ",(0,l.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."),(0,l.yg)("li",{parentName:"ol"},"To support the i18n character set, copy the ",(0,l.yg)("inlineCode",{parentName:"li"},"orai18n.jar")," to the ",(0,l.yg)("inlineCode",{parentName:"li"},"$SEATUNNEL_HOME/lib/")," directory."))),(0,l.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Oracle Data Type"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INTEGER"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,0)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(38, 18)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMBER(precision <= 9, scale == 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMBER(9 < precision <= 18, scale == 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMBER(18 < precision, scale == 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(38, 0)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMBER(scale != 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(38, 18)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BINARY_DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BINARY_FLOAT",(0,l.yg)("br",null),"REAL"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR",(0,l.yg)("br",null),"NCHAR",(0,l.yg)("br",null),"VARCHAR",(0,l.yg)("br",null),"NVARCHAR2",(0,l.yg)("br",null),"VARCHAR2",(0,l.yg)("br",null),"LONG",(0,l.yg)("br",null),"ROWID",(0,l.yg)("br",null),"NCLOB",(0,l.yg)("br",null),"CLOB",(0,l.yg)("br",null),"XML",(0,l.yg)("br",null)),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,l.yg)("br",null),"TIMESTAMP WITH LOCAL TIME ZONE"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BLOB",(0,l.yg)("br",null),"RAW",(0,l.yg)("br",null),"LONG RAW",(0,l.yg)("br",null),"BFILE"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTES")))),(0,l.yg)("h2",{id:"source-options"},"Source Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"url"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc:oracle:thin:@datasource01:1523:xe")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"driver"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source,",(0,l.yg)("br",null)," if you use Oracle the value is ",(0,l.yg)("inlineCode",{parentName:"td"},"oracle.jdbc.OracleDriver"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Connection instance password")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Query statement")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_column"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The column name for parallelism's partition, only support numeric type,Only support numeric type primary key, and only can config one column.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,l.yg)("td",{parentName:"tr",align:null},"BigDecimal"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The partition_column min value for scan, if not set SeaTunnel will query database get min value.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,l.yg)("td",{parentName:"tr",align:null},"BigDecimal"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The partition_column max value for scan, if not set SeaTunnel will query database get max value.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_num"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"job parallelism"),(0,l.yg)("td",{parentName:"tr",align:null},"The number of partition count, only support positive integer. default value is job parallelism")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fetch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"For queries that return a large number of objects,you can configure",(0,l.yg)("br",null)," the row fetch size used in the query toimprove performance by",(0,l.yg)("br",null)," reducing the number database hits required to satisfy the selection criteria.",(0,l.yg)("br",null)," Zero means use jdbc default value.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"properties"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Additional connection configuration parameters,when properties and URL have the same parameters, the priority is determined by the ",(0,l.yg)("br",null),"specific implementation of the driver. For example, in Oracle, properties take precedence over the URL.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_path"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The path to the full path of table, you can use this configuration instead of ",(0,l.yg)("inlineCode",{parentName:"td"},"query"),". ",(0,l.yg)("br",null),"examples: ",(0,l.yg)("br",null),'mysql: "testdb.table1" ',(0,l.yg)("br",null),'oracle: "test_schema.table1" ',(0,l.yg)("br",null),'sqlserver: "testdb.test_schema.table1" ',(0,l.yg)("br",null),'postgresql: "testdb.test_schema.table1"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_list"),(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The list of tables to be read, you can use this configuration instead of ",(0,l.yg)("inlineCode",{parentName:"td"},"table_path")," example: ",(0,l.yg)("inlineCode",{parentName:"td"},'[{ table_path = "testdb.table1"}, {table_path = "testdb.table2", query = "select * id, name from testdb.table2"}]'))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"where_condition"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Common row filter conditions for all tables/queries, must start with ",(0,l.yg)("inlineCode",{parentName:"td"},"where"),". for example ",(0,l.yg)("inlineCode",{parentName:"td"},"where id > 100"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"split.size"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"8096"),(0,l.yg)("td",{parentName:"tr",align:null},"The split size (number of rows) of table, captured tables are split into multiple splits when read of table.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"split.even-distribution.factor.lower-bound"),(0,l.yg)("td",{parentName:"tr",align:null},"Double"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"0.05"),(0,l.yg)("td",{parentName:"tr",align:null},"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.yg)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 0.05.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"split.even-distribution.factor.upper-bound"),(0,l.yg)("td",{parentName:"tr",align:null},"Double"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.yg)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 100.0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"split.sample-sharding.threshold"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"10000"),(0,l.yg)("td",{parentName:"tr",align:null},"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,l.yg)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"split.inverse-sampling.rate"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"1000"),(0,l.yg)("td",{parentName:"tr",align:null},"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"decimal_type_narrowing"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Decimal type narrowing, if true, the decimal type will be narrowed to the int or long type if without loss of precision. Only support for Oracle at now. Please refer to ",(0,l.yg)("inlineCode",{parentName:"td"},"decimal_type_narrowing")," below")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"td",href:"/docs/2.3.9/connector-v2/source-common-options"},"Source Common Options")," for details")))),(0,l.yg)("h3",{id:"decimal_type_narrowing"},"decimal_type_narrowing"),(0,l.yg)("p",null,"Decimal type narrowing, if true, the decimal type will be narrowed to the int or long type if without loss of precision. Only support for Oracle at now."),(0,l.yg)("p",null,"eg:"),(0,l.yg)("p",null,"decimal_type_narrowing = true"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Oracle"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMBER(1, 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMBER(6, 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMBER(10, 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")))),(0,l.yg)("p",null,"decimal_type_narrowing = false"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Oracle"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMBER(1, 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"Decimal(1, 0)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMBER(6, 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"Decimal(6, 0)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMBER(10, 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"Decimal(10, 0)")))),(0,l.yg)("h2",{id:"parallel-reader"},"Parallel Reader"),(0,l.yg)("p",null,"The JDBC Source connector supports parallel reading of data from tables. SeaTunnel will use certain rules to split the data in the table, which will be handed over to readers for reading. The number of readers is determined by the ",(0,l.yg)("inlineCode",{parentName:"p"},"parallelism")," option."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Split Key Rules:")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"If ",(0,l.yg)("inlineCode",{parentName:"li"},"partition_column")," is not null, It will be used to calculate split. The column must in ",(0,l.yg)("strong",{parentName:"li"},"Supported split data type"),"."),(0,l.yg)("li",{parentName:"ol"},"If ",(0,l.yg)("inlineCode",{parentName:"li"},"partition_column")," is null, seatunnel will read the schema from table and get the Primary Key and Unique Index. If there are more than one column in Primary Key and Unique Index, The first column which in the ",(0,l.yg)("strong",{parentName:"li"},"supported split data type")," will be used to split data. For example, the table have Primary Key(nn guid, name varchar), because ",(0,l.yg)("inlineCode",{parentName:"li"},"guid")," id not in ",(0,l.yg)("strong",{parentName:"li"},"supported split data type"),", so the column ",(0,l.yg)("inlineCode",{parentName:"li"},"name")," will be used to split data.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Supported split data type:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"String"),(0,l.yg)("li",{parentName:"ul"},"Number(int, bigint, decimal, ...)"),(0,l.yg)("li",{parentName:"ul"},"Date")),(0,l.yg)("h3",{id:"options-related-to-split"},"Options Related To Split"),(0,l.yg)("h4",{id:"splitsize"},"split.size"),(0,l.yg)("p",null,"How many rows in one split, captured tables are split into multiple splits when read of table."),(0,l.yg)("h4",{id:"spliteven-distributionfactorlower-bound"},"split.even-distribution.factor.lower-bound"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Not recommended for use")),(0,l.yg)("p",null,"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.yg)("inlineCode",{parentName:"p"},"sample-sharding.threshold"),". The default value is 0.05."),(0,l.yg)("h4",{id:"spliteven-distributionfactorupper-bound"},"split.even-distribution.factor.upper-bound"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Not recommended for use")),(0,l.yg)("p",null,"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.yg)("inlineCode",{parentName:"p"},"sample-sharding.threshold"),". The default value is 100.0."),(0,l.yg)("h4",{id:"splitsample-shardingthreshold"},"split.sample-sharding.threshold"),(0,l.yg)("p",null,"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,l.yg)("inlineCode",{parentName:"p"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards."),(0,l.yg)("h4",{id:"splitinverse-samplingrate"},"split.inverse-sampling.rate"),(0,l.yg)("p",null,"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000."),(0,l.yg)("h4",{id:"partition_column-string"},"partition_column ","[string]"),(0,l.yg)("p",null,"The column name for split data."),(0,l.yg)("h4",{id:"partition_upper_bound-bigdecimal"},"partition_upper_bound ","[BigDecimal]"),(0,l.yg)("p",null,"The partition_column max value for scan, if not set SeaTunnel will query database get max value."),(0,l.yg)("h4",{id:"partition_lower_bound-bigdecimal"},"partition_lower_bound ","[BigDecimal]"),(0,l.yg)("p",null,"The partition_column min value for scan, if not set SeaTunnel will query database get min value."),(0,l.yg)("h4",{id:"partition_num-int"},"partition_num ","[int]"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Not recommended for use, The correct approach is to control the number of split through ",(0,l.yg)("inlineCode",{parentName:"p"},"split.size"))),(0,l.yg)("p",null,"How many splits do we need to split into, only support positive integer. default value is job parallelism."),(0,l.yg)("h2",{id:"tips"},"tips"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"If the table can not be split(for example, table have no Primary Key or Unique Index, and ",(0,l.yg)("inlineCode",{parentName:"p"},"partition_column")," is not set), it will run in single concurrency."),(0,l.yg)("p",{parentName:"blockquote"},"Use ",(0,l.yg)("inlineCode",{parentName:"p"},"table_path")," to replace ",(0,l.yg)("inlineCode",{parentName:"p"},"query")," for single table reading. If you need to read multiple tables, use ",(0,l.yg)("inlineCode",{parentName:"p"},"table_list"),".")),(0,l.yg)("h2",{id:"task-example"},"Task Example"),(0,l.yg)("h3",{id:"simple"},"Simple:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"This example queries type_bin 'table' 16 data in your test \"database\" in single parallel and queries all of its fields. You can also specify which fields to query for final output to the console.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  parallelism = 4\n  job.mode = "BATCH"\n}\nsource{\n    Jdbc {\n        url = "jdbc:oracle:thin:@datasource01:1523:xe"\n        driver = "oracle.jdbc.OracleDriver"\n        user = "root"\n        password = "123456"\n        query = "SELECT * FROM TEST_TABLE"\n    }\n}\n\ntransform {\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/transform-v2/sql\n}\n\nsink {\n    Console {}\n}\n')),(0,l.yg)("h3",{id:"parallel-by-partition_column"},"parallel by partition_column"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Read your query table in parallel with the shard field you configured and the shard data  You can do this if you want to read the whole table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  parallelism = 4\n  job.mode = "BATCH"\n}\nsource {\n    Jdbc {\n        url = "jdbc:oracle:thin:@datasource01:1523:xe"\n        driver = "oracle.jdbc.OracleDriver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        # Define query logic as required\n        query = "SELECT * FROM TEST_TABLE"\n        # Parallel sharding reads fields\n        partition_column = "ID"\n        # Number of fragments\n        partition_num = 10\n        properties {\n        database.oracle.jdbc.timezoneAsRegion = "false"\n        }\n    }\n}\nsink {\n  Console {}\n}\n')),(0,l.yg)("h3",{id:"parallel-by-primary-key-or-unique-index"},"parallel by Primary Key or Unique Index"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Configuring ",(0,l.yg)("inlineCode",{parentName:"p"},"table_path")," will turn on auto split, you can configure ",(0,l.yg)("inlineCode",{parentName:"p"},"split.*")," to adjust the split strategy")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  parallelism = 4\n  job.mode = "BATCH"\n}\nsource {\n    Jdbc {\n        url = "jdbc:oracle:thin:@datasource01:1523:xe"\n        driver = "oracle.jdbc.OracleDriver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        table_path = "DA.SCHEMA1.TABLE1"\n        query = "select * from SCHEMA1.TABLE1"\n        split.size = 10000\n    }\n}\n\nsink {\n  Console {}\n}\n')),(0,l.yg)("h3",{id:"parallel-boundary"},"Parallel Boundary:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"It is more efficient to specify the data within the upper and lower bounds of the query It is more efficient to read your data source according to the upper and lower boundaries you configured")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'source {\n    Jdbc {\n        url = "jdbc:oracle:thin:@datasource01:1523:xe"\n        driver = "oracle.jdbc.OracleDriver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        # Define query logic as required\n        query = "SELECT * FROM TEST_TABLE"\n        partition_column = "ID"\n        # Read start boundary\n        partition_lower_bound = 1\n        # Read end boundary\n        partition_upper_bound = 500\n        partition_num = 10\n    }\n}\n')),(0,l.yg)("h3",{id:"multiple-table-read"},"Multiple table read:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("em",{parentName:"strong"},"Configuring ",(0,l.yg)("inlineCode",{parentName:"em"},"table_list")," will turn on auto split, you can configure `split."),"` to adjust the split strategy*")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n  parallelism = 4\n}\nsource {\n  Jdbc {\n    url = "jdbc:oracle:thin:@datasource01:1523:xe"\n    driver = "oracle.jdbc.OracleDriver"\n    connection_check_timeout_sec = 100\n    user = "root"\n    password = "123456"\n    "table_list"=[\n        {\n            "table_path"="XE.TEST.USER_INFO"\n        },\n        {\n            "table_path"="XE.TEST.YOURTABLENAME"\n        }\n    ]\n    #where_condition= "where id > 100"\n    split.size = 10000\n    #split.even-distribution.factor.upper-bound = 100\n    #split.even-distribution.factor.lower-bound = 0.05\n    #split.sample-sharding.threshold = 1000\n    #split.inverse-sampling.rate = 1000\n  }\n}\n\nsink {\n  Console {}\n}\n')))}g.isMDXComponent=!0}}]);