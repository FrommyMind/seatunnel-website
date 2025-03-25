"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26731],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,y=m["".concat(s,".").concat(u)]||m[u]||g[u]||l;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},41489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={},i="StarRocks",o={unversionedId:"connector-v2/sink/StarRocks",id:"version-2.3.7/connector-v2/sink/StarRocks",title:"StarRocks",description:"StarRocks sink connector",source:"@site/versioned_docs/version-2.3.7/connector-v2/sink/StarRocks.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/StarRocks",permalink:"/docs/2.3.7/connector-v2/sink/StarRocks",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.7/connector-v2/sink/StarRocks.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"SQL Server",permalink:"/docs/2.3.7/connector-v2/sink/SqlServer"},next:{title:"TDengine",permalink:"/docs/2.3.7/connector-v2/sink/TDengine"}},s={},p=[{value:"Support These Engines",id:"support-these-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"save_mode_create_template",id:"save_mode_create_template",level:3},{value:"table string",id:"table-string",level:3},{value:"schema_save_modeEnum",id:"schema_save_modeenum",level:3},{value:"data_save_modeEnum",id:"data_save_modeenum",level:3},{value:"custom_sqlString",id:"custom_sqlstring",level:3},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Supported import data formats",id:"supported-import-data-formats",level:4},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Support write cdc changelog event(INSERT/UPDATE/DELETE)",id:"support-write-cdc-changelog-eventinsertupdatedelete",level:3},{value:"Use JSON format to import data",id:"use-json-format-to-import-data",level:3},{value:"Use CSV format to import data",id:"use-csv-format-to-import-data",level:3},{value:"Use save_mode function",id:"use-save_mode-function",level:3},{value:"Multiple table",id:"multiple-table",level:3},{value:"example1",id:"example1",level:4},{value:"example2",id:"example2",level:4},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],d={toc:p},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"starrocks"},"StarRocks"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"StarRocks sink connector")),(0,r.yg)("h2",{id:"support-these-engines"},"Support These Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"cdc")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"support multiple table write"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to send data to StarRocks. Both support streaming and batch mode.\nThe internal implementation of StarRocks sink connector is cached and imported by stream load in batches."),(0,r.yg)("h2",{id:"sink-options"},"Sink Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nodeUrls"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"StarRocks")," cluster address, the format is ",(0,r.yg)("inlineCode",{parentName:"td"},'["fe_ip:fe_http_port", ...]'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"base-url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The JDBC URL like ",(0,r.yg)("inlineCode",{parentName:"td"},"jdbc:mysql://localhost:9030/")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"jdbc:mysql://localhost:9030")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"jdbc:mysql://localhost:9030/db"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"StarRocks")," user username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"StarRocks")," user password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of StarRocks database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of StarRocks table, If not set, the table name will be the name of the upstream table")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"labelPrefix"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The prefix of StarRocks stream load label")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_max_rows"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"td"},"batch_max_rows")," or the byte size of ",(0,r.yg)("inlineCode",{parentName:"td"},"batch_max_bytes")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"td"},"checkpoint.interval"),", the data will be flushed into the StarRocks")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_max_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"5 ",(0,r.yg)("em",{parentName:"td"}," 1024 ")," 1024"),(0,r.yg)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"td"},"batch_max_rows")," or the byte size of ",(0,r.yg)("inlineCode",{parentName:"td"},"batch_max_bytes")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"td"},"checkpoint.interval"),", the data will be flushed into the StarRocks")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of retries to flush failed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Using as a multiplier for generating the next delay for backoff")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retry_backoff_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The amount of time to wait before attempting to retry a request to ",(0,r.yg)("inlineCode",{parentName:"td"},"StarRocks"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_upsert_delete"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable upsert/delete, only supports PrimaryKey model.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"save_mode_create_template"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"see below"),(0,r.yg)("td",{parentName:"tr",align:null},"see below")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"starrocks.config"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The parameter of the stream load ",(0,r.yg)("inlineCode",{parentName:"td"},"data_desc"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"http_socket_timeout_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"180000"),(0,r.yg)("td",{parentName:"tr",align:null},"Set http socket timeout, default is 3 minutes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,r.yg)("td",{parentName:"tr",align:null},"Before the synchronous task is turned on, different treatment schemes are selected for the existing surface structure of the target side.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,r.yg)("td",{parentName:"tr",align:null},"Before the synchronous task is turned on, different processing schemes are selected for data existing data on the target side.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_sql"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"When data_save_mode selects CUSTOM_PROCESSING, you should fill in the CUSTOM_SQL parameter. This parameter usually fills in a SQL that can be executed. SQL will be executed before synchronization tasks.")))),(0,r.yg)("h3",{id:"save_mode_create_template"},"save_mode_create_template"),(0,r.yg)("p",null,"We use templates to automatically create starrocks tables,\nwhich will create corresponding table creation statements based on the type of upstream data and schema type,\nand the default template can be modified according to the situation. Only work on multi-table mode at now."),(0,r.yg)("p",null,"Default template:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS `${database}`.`${table}` (\n${rowtype_primary_key},\n${rowtype_fields}\n) ENGINE=OLAP\nPRIMARY KEY (${rowtype_primary_key})\nDISTRIBUTED BY HASH (${rowtype_primary_key})PROPERTIES (\n"replication_num" = "1"\n)\n')),(0,r.yg)("p",null,"If a custom field is filled in the template, such as adding an ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," field"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS `${database}`.`${table}`\n(   \n    id,\n    ${rowtype_fields}\n) ENGINE = OLAP DISTRIBUTED BY HASH (${rowtype_primary_key})\n    PROPERTIES\n(\n    "replication_num" = "1"\n);\n')),(0,r.yg)("p",null,"The connector will automatically obtain the corresponding type from the upstream to complete the filling,\nand remove the id field from ",(0,r.yg)("inlineCode",{parentName:"p"},"rowtype_fields"),". This method can be used to customize the modification of field types and attributes."),(0,r.yg)("p",null,"You can use the following placeholders"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"database: Used to get the database in the upstream schema"),(0,r.yg)("li",{parentName:"ul"},"table_name: Used to get the table name in the upstream schema"),(0,r.yg)("li",{parentName:"ul"},"rowtype_fields: Used to get all the fields in the upstream schema, we will automatically map to the field\ndescription of StarRocks"),(0,r.yg)("li",{parentName:"ul"},"rowtype_primary_key: Used to get the primary key in the upstream schema (maybe a list)"),(0,r.yg)("li",{parentName:"ul"},"rowtype_unique_key: Used to get the unique key in the upstream schema (maybe a list)")),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"database")," and this ",(0,r.yg)("inlineCode",{parentName:"p"},"table-name")," auto-generate sql and receive upstream input datas write to database."),(0,r.yg)("p",null,"This option is mutually exclusive with ",(0,r.yg)("inlineCode",{parentName:"p"},"query")," and has a higher priority."),(0,r.yg)("p",null,"The table parameter can fill in the name of an unwilling table, which will eventually be used as the table name of the creation table, and supports variables (",(0,r.yg)("inlineCode",{parentName:"p"},"${table_name}"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"${schema_name}"),"). Replacement rules: ",(0,r.yg)("inlineCode",{parentName:"p"},"${schema_name}")," will replace the SCHEMA name passed to the target side, and ",(0,r.yg)("inlineCode",{parentName:"p"},"${table_name}")," will replace the name of the table passed to the table at the target side."),(0,r.yg)("p",null,"for example:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"test",(0,r.yg)("em",{parentName:"li"},"${schema_name}"),"${table_name}_test"),(0,r.yg)("li",{parentName:"ol"},"sink_sinktable"),(0,r.yg)("li",{parentName:"ol"},"ss_${table_name}")),(0,r.yg)("h3",{id:"schema_save_modeenum"},"schema_save_mode","[Enum]"),(0,r.yg)("p",null,"Before the synchronous task is turned on, different treatment schemes are selected for the existing surface structure of the target side.",(0,r.yg)("br",{parentName:"p"}),"\n","Option introduction\uff1a",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"RECREATE_SCHEMA")," \uff1aWill create when the table does not exist, delete and rebuild when the table is saved",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST")," \uff1aWill Created when the table does not exist, skipped when the table is saved",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_SCHEMA_NOT_EXIST")," \uff1aError will be reported when the table does not exist"),(0,r.yg)("h3",{id:"data_save_modeenum"},"data_save_mode","[Enum]"),(0,r.yg)("p",null,"Before the synchronous task is turned on, different processing schemes are selected for data existing data on the target side.",(0,r.yg)("br",{parentName:"p"}),"\n","Option introduction\uff1a",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"DROP_DATA"),"\uff1a Preserve database structure and delete data",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"APPEND_DATA"),"\uff1aPreserve database structure, preserve data",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"CUSTOM_PROCESSING"),"\uff1aUser defined processing",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_DATA_EXISTS"),"\uff1aWhen there is data, an error is reported"),(0,r.yg)("h3",{id:"custom_sqlstring"},"custom_sql","[String]"),(0,r.yg)("p",null,"When data_save_mode selects CUSTOM_PROCESSING, you should fill in the CUSTOM_SQL parameter. This parameter usually fills in a SQL that can be executed. SQL will be executed before synchronization tasks."),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"StarRocks Data type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTES"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")))),(0,r.yg)("h4",{id:"supported-import-data-formats"},"Supported import data formats"),(0,r.yg)("p",null,"The supported formats include CSV and JSON"),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The following example describes writing multiple data types to StarRocks, and users need to create corresponding tables downstream")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval = 10000\n}\n\nsource {\n  FakeSource {\n    row.num = 10\n    map.size = 10\n    array.size = 10\n    bytes.length = 10\n    string.length = 10\n    schema = {\n      fields {\n        c_map = "map<string, array<int>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(16, 1)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n    }\n}\n\nsink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    batch_max_rows = 10\n    starrocks.config = {\n      format = "JSON"\n      strip_outer_array = true\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"support-write-cdc-changelog-eventinsertupdatedelete"},"Support write cdc changelog event(INSERT/UPDATE/DELETE)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    ...\n    \n    // Support upsert/delete event synchronization (enable_upsert_delete=true), only supports PrimaryKey model.\n    enable_upsert_delete = true\n  }\n}\n')),(0,r.yg)("h3",{id:"use-json-format-to-import-data"},"Use JSON format to import data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    batch_max_rows = 10\n    starrocks.config = {\n      format = "JSON"\n      strip_outer_array = true\n    }\n  }\n}\n\n')),(0,r.yg)("h3",{id:"use-csv-format-to-import-data"},"Use CSV format to import data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    batch_max_rows = 10\n    starrocks.config = {\n      format = "CSV"\n      column_separator = "\\\\x01"\n      row_delimiter = "\\\\x02"\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"use-save_mode-function"},"Use save_mode function"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    username = root\n    password = ""\n    database = "test"\n    table = "test_${schema_name}_${table_name}"\n    schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n    data_save_mode="APPEND_DATA"\n    batch_max_rows = 10\n    starrocks.config = {\n      format = "CSV"\n      column_separator = "\\\\x01"\n      row_delimiter = "\\\\x02"\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"multiple-table"},"Multiple table"),(0,r.yg)("h4",{id:"example1"},"example1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    \n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    username = root\n    password = ""\n    database = "${database_name}_test"\n    table = "${table_name}_test"\n    ...\n\n    // Support upsert/delete event synchronization (enable_upsert_delete=true), only supports PrimaryKey model.\n    enable_upsert_delete = true\n  }\n}\n')),(0,r.yg)("h4",{id:"example2"},"example2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Jdbc {\n    driver = oracle.jdbc.driver.OracleDriver\n    url = "jdbc:oracle:thin:@localhost:1521/XE"\n    user = testUser\n    password = testPassword\n\n    table_list = [\n      {\n        table_path = "TESTSCHEMA.TABLE_1"\n      },\n      {\n        table_path = "TESTSCHEMA.TABLE_2"\n      }\n    ]\n  }\n}\n\ntransform {\n}\n\nsink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    username = root\n    password = ""\n    database = "${schema_name}_test"\n    table = "${table_name}_test"\n    ...\n\n    // Support upsert/delete event synchronization (enable_upsert_delete=true), only supports PrimaryKey model.\n    enable_upsert_delete = true\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add StarRocks Sink Connector"),(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Change Connector Custom Config Prefix To Map ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3719"},"3719")),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support write cdc changelog event(INSERT/UPDATE/DELETE) ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3865"},"3865"))))}g.isMDXComponent=!0}}]);