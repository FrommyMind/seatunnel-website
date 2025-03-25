"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[13219],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(y,i(i({ref:t},g),{},{components:a})):n.createElement(y,i({ref:t},g))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const l={},i="JDBC",o={unversionedId:"connector-v2/sink/Jdbc",id:"version-2.3.3/connector-v2/sink/Jdbc",title:"JDBC",description:"JDBC sink connector",source:"@site/versioned_docs/version-2.3.3/connector-v2/sink/Jdbc.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Jdbc",permalink:"/docs/2.3.3/connector-v2/sink/Jdbc",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/sink/Jdbc.md",tags:[],version:"2.3.3",frontMatter:{},sidebar:"docs",previous:{title:"IoTDB",permalink:"/docs/2.3.3/connector-v2/sink/IoTDB"},next:{title:"Kafka",permalink:"/docs/2.3.3/connector-v2/sink/Kafka"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"query string",id:"query-string",level:3},{value:"compatible_mode string",id:"compatible_mode-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"primary_keys array",id:"primary_keys-array",level:3},{value:"support_upsert_by_query_primary_key_exist boolean",id:"support_upsert_by_query_primary_key_exist-boolean",level:3},{value:"connection_check_timeout_sec int",id:"connection_check_timeout_sec-int",level:3},{value:"max_retriesint",id:"max_retriesint",level:3},{value:"batch_sizeint",id:"batch_sizeint",level:3},{value:"is_exactly_onceboolean",id:"is_exactly_onceboolean",level:3},{value:"generate_sink_sqlboolean",id:"generate_sink_sqlboolean",level:3},{value:"xa_data_source_class_namestring",id:"xa_data_source_class_namestring",level:3},{value:"max_commit_attemptsint",id:"max_commit_attemptsint",level:3},{value:"transaction_timeout_secint",id:"transaction_timeout_secint",level:3},{value:"auto_commit boolean",id:"auto_commit-boolean",level:3},{value:"common options",id:"common-options",level:3},{value:"tips",id:"tips",level:2},{value:"appendix",id:"appendix",level:2},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"next version",id:"next-version",level:3}],g={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"jdbc"},"JDBC"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing, support exactly-once\nsemantics (using XA transaction guarantee)."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Warn: for license compliance, you have to provide database driver yourself, copy to ",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATNUNNEL_HOME/lib/")," directory in order to make them work."),(0,r.yg)("p",{parentName:"admonition"},"e.g. If you use MySQL, should download and copy ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql-connector-java-xxx.jar")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATNUNNEL_HOME/lib/"),". For Spark/Flink, you should also copy it to ",(0,r.yg)("inlineCode",{parentName:"p"},"$SPARK_HOME/jars/")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib/"),".")),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.3/concept/connector-v2-features"},"exactly-once"))),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"Xa transactions")," to ensure ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once"),". So only support ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once")," for the database which is\nsupport ",(0,r.yg)("inlineCode",{parentName:"p"},"Xa transactions"),". You can set ",(0,r.yg)("inlineCode",{parentName:"p"},"is_exactly_once=true")," to enable it."),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.3/concept/connector-v2-features"},"cdc"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"compatible_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_exactly_once"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"generate_sink_sql"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auto_commit"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"driver-string"},"driver ","[string]"),(0,r.yg)("p",null,"The jdbc class name used to connect to the remote data source, if you use MySQL the value is ",(0,r.yg)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),"."),(0,r.yg)("h3",{id:"user-string"},"user ","[string]"),(0,r.yg)("p",null,"userName"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,"password"),(0,r.yg)("h3",{id:"url-string"},"url ","[string]"),(0,r.yg)("p",null,"The URL of the JDBC connection. Refer to a case: jdbc:postgresql://localhost/test"),(0,r.yg)("h3",{id:"query-string"},"query ","[string]"),(0,r.yg)("p",null,"Use this sql write upstream input datas to database. e.g ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT ...")),(0,r.yg)("h3",{id:"compatible_mode-string"},"compatible_mode ","[string]"),(0,r.yg)("p",null,"The compatible mode of database, required when the database supports multiple compatible modes. For example, when using OceanBase database, you need to set it to 'mysql' or 'oracle'."),(0,r.yg)("p",null,"Postgres 9.5 version or below,please set it to ",(0,r.yg)("inlineCode",{parentName:"p"},"postgresLow")," to support cdc"),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"Use this ",(0,r.yg)("inlineCode",{parentName:"p"},"database")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"table-name")," auto-generate sql and receive upstream input datas write to database."),(0,r.yg)("p",null,"This option is mutually exclusive with ",(0,r.yg)("inlineCode",{parentName:"p"},"query")," and has a higher priority."),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"database")," and this ",(0,r.yg)("inlineCode",{parentName:"p"},"table-name")," auto-generate sql and receive upstream input datas write to database."),(0,r.yg)("p",null,"This option is mutually exclusive with ",(0,r.yg)("inlineCode",{parentName:"p"},"query")," and has a higher priority."),(0,r.yg)("h3",{id:"primary_keys-array"},"primary_keys ","[array]"),(0,r.yg)("p",null,"This option is used to support operations such as ",(0,r.yg)("inlineCode",{parentName:"p"},"insert"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"delete"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," when automatically generate sql."),(0,r.yg)("h3",{id:"support_upsert_by_query_primary_key_exist-boolean"},"support_upsert_by_query_primary_key_exist ","[boolean]"),(0,r.yg)("p",null,"Choose to use INSERT sql, UPDATE sql to process update events(INSERT, UPDATE_AFTER) based on query primary key exists. This configuration is only used when database unsupported upsert syntax.\n",(0,r.yg)("strong",{parentName:"p"},"Note"),": that this method has low performance"),(0,r.yg)("h3",{id:"connection_check_timeout_sec-int"},"connection_check_timeout_sec ","[int]"),(0,r.yg)("p",null,"The time in seconds to wait for the database operation used to validate the connection to complete."),(0,r.yg)("h3",{id:"max_retriesint"},"max_retries","[int]"),(0,r.yg)("p",null,"The number of retries to submit failed (executeBatch)"),(0,r.yg)("h3",{id:"batch_sizeint"},"batch_size","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffered records reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"checkpoint.interval"),"\n, the data will be flushed into the database"),(0,r.yg)("h3",{id:"is_exactly_onceboolean"},"is_exactly_once","[boolean]"),(0,r.yg)("p",null,"Whether to enable exactly-once semantics, which will use Xa transactions. If on, you need to\nset ",(0,r.yg)("inlineCode",{parentName:"p"},"xa_data_source_class_name"),"."),(0,r.yg)("h3",{id:"generate_sink_sqlboolean"},"generate_sink_sql","[boolean]"),(0,r.yg)("p",null,"Generate sql statements based on the database table you want to write to"),(0,r.yg)("h3",{id:"xa_data_source_class_namestring"},"xa_data_source_class_name","[string]"),(0,r.yg)("p",null,"The xa data source class name of the database Driver, for example, mysql is ",(0,r.yg)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.MysqlXADataSource"),", and\nplease refer to appendix for other data sources"),(0,r.yg)("h3",{id:"max_commit_attemptsint"},"max_commit_attempts","[int]"),(0,r.yg)("p",null,"The number of retries for transaction commit failures"),(0,r.yg)("h3",{id:"transaction_timeout_secint"},"transaction_timeout_sec","[int]"),(0,r.yg)("p",null,"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect\nexactly-once semantics"),(0,r.yg)("h3",{id:"auto_commit-boolean"},"auto_commit ","[boolean]"),(0,r.yg)("p",null,"Automatic transaction commit is enabled by default"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.3/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.yg)("h2",{id:"tips"},"tips"),(0,r.yg)("p",null,'In the case of is_exactly_once = "true", Xa transactions are used. This requires database support, and some databases require some setup :\n1 postgres needs to set ',(0,r.yg)("inlineCode",{parentName:"p"},"max_prepared_transactions > 1")," such as ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER SYSTEM set max_prepared_transactions to 10"),".\n2 mysql version need >= ",(0,r.yg)("inlineCode",{parentName:"p"},"8.0.29")," and Non-root users need to grant ",(0,r.yg)("inlineCode",{parentName:"p"},"XA_RECOVER_ADMIN")," permissions. such as ",(0,r.yg)("inlineCode",{parentName:"p"},"grant XA_RECOVER_ADMIN on test_db.* to 'user1'@'%'"),".\n3 mysql can try to add ",(0,r.yg)("inlineCode",{parentName:"p"},"rewriteBatchedStatements=true")," parameter in url for better performance."),(0,r.yg)("h2",{id:"appendix"},"appendix"),(0,r.yg)("p",null,"there are some reference value for params above."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"driver"),(0,r.yg)("th",{parentName:"tr",align:null},"url"),(0,r.yg)("th",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,r.yg)("th",{parentName:"tr",align:null},"maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MySQL"),(0,r.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,r.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.MysqlXADataSource"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/postgres"),(0,r.yg)("td",{parentName:"tr",align:null},"org.postgresql.xa.PGXADataSource"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"https://mvnrepository.com/artifact/org.postgresql/postgresql"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DM"),(0,r.yg)("td",{parentName:"tr",align:null},"dm.jdbc.driver.DmDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:dm://localhost:5236"),(0,r.yg)("td",{parentName:"tr",align:null},"dm.jdbc.driver.DmdbXADataSource"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"},"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Phoenix"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.phoenix.queryserver.client.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:phoenix:thin:url=http://localhost:8765;serialization=PROTOBUF"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"},"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SQL Server"),(0,r.yg)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver.jdbc.SQLServerDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:sqlserver://localhost:1433"),(0,r.yg)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver.jdbc.SQLServerXADataSource"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Oracle"),(0,r.yg)("td",{parentName:"tr",align:null},"oracle.jdbc.OracleDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:oracle:thin:@localhost:1521/xepdb1"),(0,r.yg)("td",{parentName:"tr",align:null},"oracle.jdbc.xa.OracleXADataSource"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"},"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sqlite"),(0,r.yg)("td",{parentName:"tr",align:null},"org.sqlite.JDBC"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:sqlite:test.db"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc"},"https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GBase8a"),(0,r.yg)("td",{parentName:"tr",align:null},"com.gbase.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:gbase://e2e_gbase8aDb:5258/test"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.gbase8.cn/wp-content/uploads/2020/10/gbase-connector-java-8.3.81.53-build55.5.7-bin_min_mix.jar"},"https://www.gbase8.cn/wp-content/uploads/2020/10/gbase-connector-java-8.3.81.53-build55.5.7-bin_min_mix.jar"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"StarRocks"),(0,r.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"db2"),(0,r.yg)("td",{parentName:"tr",align:null},"com.ibm.db2.jcc.DB2Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:db2://localhost:50000/testdb"),(0,r.yg)("td",{parentName:"tr",align:null},"com.ibm.db2.jcc.DB2XADataSource"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc/db2jcc4"},"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc/db2jcc4"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"saphana"),(0,r.yg)("td",{parentName:"tr",align:null},"com.sap.db.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:sap://localhost:39015"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.sap.cloud.db.jdbc/ngdbc"},"https://mvnrepository.com/artifact/com.sap.cloud.db.jdbc/ngdbc"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Doris"),(0,r.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"teradata"),(0,r.yg)("td",{parentName:"tr",align:null},"com.teradata.jdbc.TeraDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:teradata://localhost/DBS_PORT=1025,DATABASE=test"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.teradata.jdbc/terajdbc"},"https://mvnrepository.com/artifact/com.teradata.jdbc/terajdbc"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Redshift"),(0,r.yg)("td",{parentName:"tr",align:null},"com.amazon.redshift.jdbc42.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:redshift://localhost:5439/testdb"),(0,r.yg)("td",{parentName:"tr",align:null},"com.amazon.redshift.xa.RedshiftXADataSource"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Snowflake"),(0,r.yg)("td",{parentName:"tr",align:null},"net.snowflake.client.jdbc.SnowflakeDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc\u2744\ufe0f//<account_name>.snowflakecomputing.com"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/net.snowflake/snowflake-jdbc"},"https://mvnrepository.com/artifact/net.snowflake/snowflake-jdbc"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Vertica"),(0,r.yg)("td",{parentName:"tr",align:null},"com.vertica.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:vertica://localhost:5433"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/vertica/jdbc/vertica-jdbc/12.0.3-0/vertica-jdbc-12.0.3-0.jar"},"https://repo1.maven.org/maven2/com/vertica/jdbc/vertica-jdbc/12.0.3-0/vertica-jdbc-12.0.3-0.jar"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OceanBase"),(0,r.yg)("td",{parentName:"tr",align:null},"com.oceanbase.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:oceanbase://localhost:2881"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/oceanbase/oceanbase-client/2.4.3/oceanbase-client-2.4.3.jar"},"https://repo1.maven.org/maven2/com/oceanbase/oceanbase-client/2.4.3/oceanbase-client-2.4.3.jar"))))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Simple"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'jdbc {\n    url = "jdbc:mysql://localhost:3306/test"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "root"\n    password = "123456"\n    query = "insert into test_table(name,age) values(?,?)"\n}\n\n')),(0,r.yg)("p",null,"Exactly-once"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'jdbc {\n\n    url = "jdbc:mysql://localhost:3306/test"\n    driver = "com.mysql.cj.jdbc.Driver"\n\n    max_retries = 0\n    user = "root"\n    password = "123456"\n    query = "insert into test_table(name,age) values(?,?)"\n\n    is_exactly_once = "true"\n\n    xa_data_source_class_name = "com.mysql.cj.jdbc.MysqlXADataSource"\n}\n')),(0,r.yg)("p",null,"CDC(Change data capture) event"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:mysql://localhost:3306"\n        driver = "com.mysql.cj.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        \n        database = "sink_database"\n        table = "sink_table"\n        primary_keys = ["key1", "key2", ...]\n    }\n}\n')),(0,r.yg)("p",null,"Postgresql 9.5 version below support CDC(Change data capture) event"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:postgresql://localhost:5432"\n        driver = "org.postgresql.Driver"\n        user = "root"\n        password = "123456"\n        compatible_mode="postgresLow"\n        database = "sink_database"\n        table = "sink_table"\n        support_upsert_by_query_primary_key_exist = true\n        generate_sink_sql = true\n        primary_keys = ["key1", "key2", ...]\n    }\n}\n\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Console Sink Connector")),(0,r.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[BugFix]"," Fix JDBC split exception (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2904"},"2904"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Phoenix JDBC Sink (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2499"},"2499"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support SQL Server JDBC Sink (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2646"},"2646"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Oracle JDBC Sink (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2550"},"2550"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support StarRocks JDBC Sink (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3060"},"3060"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support DB2 JDBC Sink (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2410"},"2410"),")")),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support CDC write DELETE/UPDATE/INSERT events (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/issues/3378"},"3378"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Teradata JDBC\u3000Sink (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3362"},"3362"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Sqlite JDBC Sink (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3089"},"3089"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support CDC write DELETE/UPDATE/INSERT events (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/issues/3378"},"3378"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Doris JDBC Sink"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Redshift JDBC Sink(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3615"},"#3615"),")"),(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Add config item enable upsert by query(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3708"},"#3708"),")"),(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Add database field to sink config(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4199"},"#4199"),")"),(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Add Vertica connector(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4303"},"#4303"),")")))}c.isMDXComponent=!0}}]);