"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[18057],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,s=c["".concat(p,".").concat(d)]||c[d]||y[d]||l;return n?a.createElement(s,o(o({ref:t},g),{},{components:n})):a.createElement(s,o({ref:t},g))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const l={},o="Snowflake",i={unversionedId:"connector-v2/source/Snowflake",id:"version-2.3.3/connector-v2/source/Snowflake",title:"Snowflake",description:"JDBC Snowflake Source Connector",source:"@site/versioned_docs/version-2.3.3/connector-v2/source/Snowflake.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Snowflake",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/Snowflake",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/source/Snowflake.md",tags:[],version:"2.3.3",frontMatter:{},sidebar:"docs",previous:{title:"SftpFile",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/SftpFile"},next:{title:"Socket",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/Socket"}},p={},u=[{value:"Supported DataSource list",id:"supported-datasource-list",level:2},{value:"Database dependency",id:"database-dependency",level:2},{value:"Options",id:"options",level:2},{value:"tips",id:"tips",level:2},{value:"Task Example",id:"task-example",level:2},{value:"simple:",id:"simple",level:3},{value:"parallel:",id:"parallel",level:3},{value:"parallel boundary:",id:"parallel-boundary",level:3}],g={toc:u},c="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"snowflake"},"Snowflake"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC Snowflake Source Connector"),(0,r.yg)("h2",{parentName:"blockquote",id:"support-those-engines"},"Support those engines"),(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null)),(0,r.yg)("h2",{parentName:"blockquote",id:"key-features"},"Key features")),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"supports query SQL and can achieve projection effect."),(0,r.yg)("h2",{parentName:"blockquote",id:"description"},"Description")),(0,r.yg)("p",null,"Read external data source data through JDBC."),(0,r.yg)("h2",{id:"supported-datasource-list"},"Supported DataSource list"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"supported versions"),(0,r.yg)("th",{parentName:"tr",align:null},"driver"),(0,r.yg)("th",{parentName:"tr",align:null},"url"),(0,r.yg)("th",{parentName:"tr",align:null},"maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"snowflake"),(0,r.yg)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,r.yg)("td",{parentName:"tr",align:null},"net.snowflake.client.jdbc.SnowflakeDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc\u2744\ufe0f//<account_name>.snowflakecomputing.com"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/net.snowflake/snowflake-jdbc"},"Download"))))),(0,r.yg)("h2",{id:"database-dependency"},"Database dependency"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,r.yg)("br",null),"\nFor example Snowflake datasource: cp snowflake-connector-java-xxx.jar $SEATNUNNEL_HOME/plugins/jdbc/lib/"),(0,r.yg)("h2",{parentName:"blockquote",id:"data-type-mapping"},"Data Type Mapping")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Snowflake Data type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT",(0,r.yg)("br",null),"SMALLINT",(0,r.yg)("br",null),"BYTEINT",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"SHORT_TYPE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT",(0,r.yg)("br",null),"INTEGER",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"LONG")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL",(0,r.yg)("br",null),"NUMERIC",(0,r.yg)("br",null),"NUMBER",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.>38)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL",(0,r.yg)("br",null),"FLOAT4"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,r.yg)("br",null),"DOUBLE PRECISION",(0,r.yg)("br",null),"FLOAT8",(0,r.yg)("br",null),"FLOAT",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR",(0,r.yg)("br",null),"CHARACTER",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"STRING",(0,r.yg)("br",null),"TEXT",(0,r.yg)("br",null),"VARIANT",(0,r.yg)("br",null),"OBJECT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME",(0,r.yg)("br",null),"TIMESTAMP",(0,r.yg)("br",null),"TIMESTAMP_LTZ",(0,r.yg)("br",null),"TIMESTAMP_NTZ",(0,r.yg)("br",null),"TIMESTAMP_TZ"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY",(0,r.yg)("br",null),"VARBINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GEOGRAPHY (WKB or EWKB)",(0,r.yg)("br",null),"GEOMETRY (WKB or EWKB)"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GEOGRAPHY (GeoJSON, WKT or EWKT)",(0,r.yg)("br",null),"GEOMETRY (GeoJSON, WKB or EWKB)"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc\u2744\ufe0f//<account_name>.snowflakecomputing.com")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source,",(0,r.yg)("br",null)," if you use Snowflake the value is ",(0,r.yg)("inlineCode",{parentName:"td"},"net.snowflake.client.jdbc.SnowflakeDriver"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Query statement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_column"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The column name for parallelism's partition, only support numeric type,Only support numeric type primary key, and only can config one column.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"BigDecimal"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The partition_column min value for scan, if not set SeaTunnel will query database get min value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"BigDecimal"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The partition_column max value for scan, if not set SeaTunnel will query database get max value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_num"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"job parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of partition count, only support positive integer. default value is job parallelism")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fetch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"For queries that return a large number of objects,you can configure",(0,r.yg)("br",null)," the row fetch size used in the query toimprove performance by",(0,r.yg)("br",null)," reducing the number database hits required to satisfy the selection criteria.",(0,r.yg)("br",null)," Zero means use jdbc default value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.3/connector-v2/source/common-options"},"Source Common Options")," for details")))),(0,r.yg)("h2",{id:"tips"},"tips"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed  in parallel according to the concurrency of tasks."),(0,r.yg)("p",{parentName:"blockquote"},"JDBC Driver Connection Parameters are supported in JDBC connection string. E.g, you can add ",(0,r.yg)("inlineCode",{parentName:"p"},"?GEOGRAPHY_OUTPUT_FORMAT='EWKT'")," to specify the Geospatial Data Types. For more information about configurable parameters, and geospatial data types please visit Snowflake official ",(0,r.yg)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/data-types-geospatial"},"document"))),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example queries type_bin 'table' 16 data in your test \"database\" in single parallel and queries all of its fields. You can also specify which fields to query for final output to the console."),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n# You can set flink configuration here\nexecution.parallelism = 2\njob.mode = "BATCH"\n}\nsource{\nJdbc {\nurl = "jdbc:snowflake://<account_name>.snowflakecomputing.com"\ndriver = "net.snowflake.client.jdbc.SnowflakeDriver"\nconnection_check_timeout_sec = 100\nuser = "root"\npassword = "123456"\nquery = "select * from type_bin limit 16"\n}\n}\ntransform {\n# If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n# please go to https://seatunnel.apache.org/docs/transform-v2/sql\n}\nsink {\nConsole {}\n}\n'))),(0,r.yg)("h3",{id:"parallel"},"parallel:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Read your query table in parallel with the shard field you configured and the shard data  You can do this if you want to read the whole table"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre"},'Jdbc {\nurl = "jdbc:snowflake://<account_name>.snowflakecomputing.com"\ndriver = "net.snowflake.client.jdbc.SnowflakeDriver"\nconnection_check_timeout_sec = 100\nuser = "root"\npassword = "123456"\n# Define query logic as required\nquery = "select * from type_bin"\n# Parallel sharding reads fields\npartition_column = "id"\n# Number of fragments\npartition_num = 10\n}\n'))),(0,r.yg)("h3",{id:"parallel-boundary"},"parallel boundary:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"It is more efficient to specify the data within the upper and lower bounds of the query It is more efficient to read your data source according to the upper and lower boundaries you configured"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre"},'Jdbc {\nurl = "jdbc:snowflake://<account_name>.snowflakecomputing.com"\ndriver = "net.snowflake.client.jdbc.SnowflakeDriver"\nconnection_check_timeout_sec = 100\nuser = "root"\npassword = "123456"\n# Define query logic as required\nquery = "select * from type_bin"\npartition_column = "id"\n# Read start boundary\npartition_lower_bound = 1\n# Read end boundary\npartition_upper_bound = 500\npartition_num = 10\n}\n'))))}y.isMDXComponent=!0}}]);