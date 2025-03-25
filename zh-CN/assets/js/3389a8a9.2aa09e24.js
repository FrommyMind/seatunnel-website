"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[69497],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=g(n),u=l,d=y["".concat(p,".").concat(u)]||y[u]||m[u]||r;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:l,i[1]=o;for(var g=2;g<r;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var a=n(58168),l=(n(96540),n(15680));const r={},i="FtpFile",o={unversionedId:"connector-v2/source/FtpFile",id:"version-2.3.1/connector-v2/source/FtpFile",title:"FtpFile",description:"Ftp file source connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/source/FtpFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/FtpFile",permalink:"/zh-CN/docs/2.3.1/connector-v2/source/FtpFile",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/source/FtpFile.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"FakeSource",permalink:"/zh-CN/docs/2.3.1/connector-v2/source/FakeSource"},next:{title:"Github",permalink:"/zh-CN/docs/2.3.1/connector-v2/source/Github"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"path string",id:"path-string",level:3},{value:"delimiter string",id:"delimiter-string",level:3},{value:"parse_partition_from_path boolean",id:"parse_partition_from_path-boolean",level:3},{value:"date_format string",id:"date_format-string",level:3},{value:"datetime_format string",id:"datetime_format-string",level:3},{value:"time_format string",id:"time_format-string",level:3},{value:"skip_header_row_number long",id:"skip_header_row_number-long",level:3},{value:"schema config",id:"schema-config",level:3},{value:"read_columns list",id:"read_columns-list",level:3},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],s={toc:g},y="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(y,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"ftpfile"},"FtpFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Ftp file source connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Read data from ftp file server."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,l.yg)("p",{parentName:"admonition"},"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this.")),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"batch")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"stream")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"column projection")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"parallelism")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"support user-defined split")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json")))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"host"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"port"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"read_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"\\001")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parse_partition_from_path"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"datetime_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"HH:mm:ss")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"skip_header_row_number"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"host-string"},"host ","[string]"),(0,l.yg)("p",null,"The target ftp host is required"),(0,l.yg)("h3",{id:"port-int"},"port ","[int]"),(0,l.yg)("p",null,"The target ftp port is required"),(0,l.yg)("h3",{id:"username-string"},"username ","[string]"),(0,l.yg)("p",null,"The target ftp username is required"),(0,l.yg)("h3",{id:"password-string"},"password ","[string]"),(0,l.yg)("p",null,"The target ftp password is required"),(0,l.yg)("h3",{id:"path-string"},"path ","[string]"),(0,l.yg)("p",null,"The source file path."),(0,l.yg)("h3",{id:"delimiter-string"},"delimiter ","[string]"),(0,l.yg)("p",null,"Field delimiter, used to tell connector how to slice and dice fields when reading text files"),(0,l.yg)("p",null,"default ",(0,l.yg)("inlineCode",{parentName:"p"},"\\001"),", the same as hive's default delimiter"),(0,l.yg)("h3",{id:"parse_partition_from_path-boolean"},"parse_partition_from_path ","[boolean]"),(0,l.yg)("p",null,"Control whether parse the partition keys and values from file path"),(0,l.yg)("p",null,"For example if you read a file from path ",(0,l.yg)("inlineCode",{parentName:"p"},"ftp://hadoop-cluster/tmp/seatunnel/parquet/name=tyrantlucifer/age=26")),(0,l.yg)("p",null,"Every record data from file will be added these two fields:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,l.yg)("td",{parentName:"tr",align:null},"26")))),(0,l.yg)("p",null,"Tips: ",(0,l.yg)("strong",{parentName:"p"},"Do not define partition fields in schema option")),(0,l.yg)("h3",{id:"date_format-string"},"date_format ","[string]"),(0,l.yg)("p",null,"Date type format, used to tell connector how to convert string to date, supported as the following formats:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy/MM/dd")),(0,l.yg)("p",null,"default ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd")),(0,l.yg)("h3",{id:"datetime_format-string"},"datetime_format ","[string]"),(0,l.yg)("p",null,"Datetime type format, used to tell connector how to convert string to datetime, supported as the following formats:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy/MM/dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyyMMddHHmmss")),(0,l.yg)("p",null,"default ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd HH:mm:ss")),(0,l.yg)("h3",{id:"time_format-string"},"time_format ","[string]"),(0,l.yg)("p",null,"Time type format, used to tell connector how to convert string to time, supported as the following formats:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"HH:mm:ss.SSS")),(0,l.yg)("p",null,"default ",(0,l.yg)("inlineCode",{parentName:"p"},"HH:mm:ss")),(0,l.yg)("h3",{id:"skip_header_row_number-long"},"skip_header_row_number ","[long]"),(0,l.yg)("p",null,"Skip the first few lines, but only for the txt and csv."),(0,l.yg)("p",null,"For example, set like following:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"skip_header_row_number = 2")),(0,l.yg)("p",null,"then Seatunnel will skip the first 2 lines from source files"),(0,l.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,l.yg)("p",null,"The schema information of upstream data."),(0,l.yg)("h3",{id:"read_columns-list"},"read_columns ","[list]"),(0,l.yg)("p",null,"The read column list of the data source, user can use it to implement field projection."),(0,l.yg)("p",null,"The file type supported column projection as the following shown:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"text"),(0,l.yg)("li",{parentName:"ul"},"json"),(0,l.yg)("li",{parentName:"ul"},"csv"),(0,l.yg)("li",{parentName:"ul"},"orc"),(0,l.yg)("li",{parentName:"ul"},"parquet")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Tips: If the user wants to use this feature when reading ",(0,l.yg)("inlineCode",{parentName:"strong"},"text")," ",(0,l.yg)("inlineCode",{parentName:"strong"},"json")," ",(0,l.yg)("inlineCode",{parentName:"strong"},"csv")," files, the schema option must be configured")),(0,l.yg)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,l.yg)("p",null,"File type, supported as the following file types:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"p"},"json")),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"json")," , you should also assign schema option to tell connector how to parse data to the row you want."),(0,l.yg)("p",null,"For example:"),(0,l.yg)("p",null,"upstream data is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,l.yg)("p",null,"you should assign schema as the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,l.yg)("p",null,"connector will generate data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"get success"),(0,l.yg)("td",{parentName:"tr",align:null},"true")))),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv"),", you can choose to specify the schema information or not."),(0,l.yg)("p",null,"For example, upstream data is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"\ntyrantlucifer#26#male\n\n")),(0,l.yg)("p",null,"If you do not assign data schema connector will treat the upstream data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"content"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer#26#male")))),(0,l.yg)("p",null,"If you assign data schema, you should also assign the option ",(0,l.yg)("inlineCode",{parentName:"p"},"delimiter")," too except CSV file type"),(0,l.yg)("p",null,"you should assign schema and delimiter as the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\ndelimiter = "#"\nschema {\n    fields {\n        name = string\n        age = int\n        gender = string \n    }\n}\n\n')),(0,l.yg)("p",null,"connector will generate data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"gender"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,l.yg)("td",{parentName:"tr",align:null},"26"),(0,l.yg)("td",{parentName:"tr",align:null},"male")))),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.1/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  FtpFile {\n    path = "/tmp/seatunnel/sink/text"\n    host = "192.168.31.48"\n    port = 21\n    user = tyrantlucifer\n    password = tianchao\n    file_format_type = "text"\n    schema = {\n      name = string\n      age = int\n    }\n    delimiter = "#"\n  }\n\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add Ftp Source Connector")),(0,l.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Fix the bug of incorrect path in windows environment (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2980"},"2980"),")"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support extract partition from SeaTunnelRow fields (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3085"},"3085"),")"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support parse field from file path (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2985"},"2985"),")")))}m.isMDXComponent=!0}}]);