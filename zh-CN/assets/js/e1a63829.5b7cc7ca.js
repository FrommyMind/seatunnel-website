"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[25738,59706],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=g(n),y=r,c=d["".concat(p,".").concat(y)]||d[y]||m[y]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},66385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={},i=void 0,o={unversionedId:"connector-v2/changelog/connector-s3-redshift",id:"connector-v2/changelog/connector-s3-redshift",title:"connector-s3-redshift",description:"Change Log",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-s3-redshift.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-s3-redshift",permalink:"/zh-CN/docs/connector-v2/changelog/connector-s3-redshift",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-s3-redshift.md",tags:[],version:"current",frontMatter:{}},p={},g=[],s={toc:g},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][S3 File]"," Make S3 File Connector support multiple table write (#6698)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8f2049b2f1"},"https://github.com/apache/seatunnel/commit/8f2049b2f1")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Refactor][File Connector]"," Put Multiple Table File API to File Base Module (#6033)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c324d663b4"},"https://github.com/apache/seatunnel/commit/c324d663b4")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Support using multiple hadoop account (#5903)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d69d88d1aa"},"https://github.com/apache/seatunnel/commit/d69d88d1aa")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]","Connector","[File]"," Optimize files commit order (#5045)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1e18a8c530"},"https://github.com/apache/seatunnel/commit/1e18a8c530")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[BugFix]"," Fix S3Redshift connector copy file to redshift but file not found bug (#4282)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/bcac24ebfc"},"https://github.com/apache/seatunnel/commit/bcac24ebfc")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][Bug]"," Fix S3RedShift is not correct with S3 (#4291)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/7b72dd95a2"},"https://github.com/apache/seatunnel/commit/7b72dd95a2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Change file type to file_format_type in file source/sink (#4249)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/973a2fae3c"},"https://github.com/apache/seatunnel/commit/973a2fae3c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][build]"," Give the maven module a human readable name (#4114)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d7cd601051"},"https://github.com/apache/seatunnel/commit/d7cd601051")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin. (#4101)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a2ab166561"},"https://github.com/apache/seatunnel/commit/a2ab166561")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]","[File]"," Optimize filesystem utils (#3749)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/ac4e880fb5"},"https://github.com/apache/seatunnel/commit/ac4e880fb5")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Connector][Sink]","Support load data to S3 then Copy to Redshift (#3736)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8ef080f200"},"https://github.com/apache/seatunnel/commit/8ef080f200")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0"))))))}m.isMDXComponent=!0},97412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(58168),r=(n(96540),n(15680)),l=n(66385);const i={},o="S3Redshift",p={unversionedId:"connector-v2/sink/S3-Redshift",id:"connector-v2/sink/S3-Redshift",title:"S3Redshift",description:"S3Redshift\u7684\u4f5c\u7528\u662f\u5c06\u6570\u636e\u5199\u5165S3\uff0c\u7136\u540e\u4f7f\u7528Redshift\u7684COPY\u547d\u4ee4\u5c06\u6570\u636e\u4eceS3\u5bfc\u5165Redshift\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/S3-Redshift.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/S3-Redshift",permalink:"/zh-CN/docs/connector-v2/sink/S3-Redshift",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/S3-Redshift.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"RocketMQ",permalink:"/zh-CN/docs/connector-v2/sink/RocketMQ"},next:{title:"S3File",permalink:"/zh-CN/docs/connector-v2/sink/S3File"}},g={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"jdbc_url",id:"jdbc_url",level:3},{value:"jdbc_user",id:"jdbc_user",level:3},{value:"jdbc_password",id:"jdbc_password",level:3},{value:"execute_sql",id:"execute_sql",level:3},{value:"path string",id:"path-string",level:3},{value:"bucket string",id:"bucket-string",level:3},{value:"access_key string",id:"access_key-string",level:3},{value:"access_secret string",id:"access_secret-string",level:3},{value:"hadoop_s3_properties map",id:"hadoop_s3_properties-map",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"common options",id:"common-options",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2}],d={toc:s},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"s3redshift"},"S3Redshift"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"S3Redshift\u7684\u4f5c\u7528\u662f\u5c06\u6570\u636e\u5199\u5165S3\uff0c\u7136\u540e\u4f7f\u7528Redshift\u7684COPY\u547d\u4ee4\u5c06\u6570\u636e\u4eceS3\u5bfc\u5165Redshift\u3002")),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u5c06\u6570\u636e\u8f93\u51fa\u5230AWS Redshift\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u63d0\u793a\uff1a")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u57fa\u4e8e","[S3File]","\uff08S3File.md\uff09\u6765\u5b9e\u73b0\u8fd9\u4e2a\u8fde\u63a5\u5668\u3002\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e0eS3File\u76f8\u540c\u7684\u914d\u7f6e\u3002\n\u4e3a\u4e86\u652f\u6301\u66f4\u591a\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u6211\u4eec\u8fdb\u884c\u4e86\u4e00\u4e9b\u6743\u8861\uff0c\u56e0\u6b64\u6211\u4eec\u4f7f\u7528HDFS\u534f\u8bae\u5bf9S3\u8fdb\u884c\u5185\u90e8\u8bbf\u95ee\uff0c\u800c\u8fd9\u4e2a\u8fde\u63a5\u5668\u9700\u8981\u4e00\u4e9bhadoop\u4f9d\u8d56\u3002\n\u5b83\u53ea\u652f\u6301hadoop\u7248\u672c",(0,r.yg)("strong",{parentName:"p"},"2.6.5+"),"\u3002")),(0,r.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21"))),(0,r.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f7f\u75282PC commit\u6765\u786e\u4fdd\u201c\u7cbe\u786e\u4e00\u6b21\u201d`"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6587\u4ef6\u683c\u5f0f\u7c7b\u578b",(0,r.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json")))),(0,r.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jdbc_url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jdbc_user"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jdbc_password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"execute_sql"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bucket"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"access_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"access_secret"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hadoop_s3_properties"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"file_name_expression"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},'"${transactionId}"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},'"text"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filename_time_format"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"'\\001'")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"row_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},'"\\n"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_by"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink_columns"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f53\u6b64\u53c2\u6570\u4e3a\u7a7a\u65f6\uff0c\u6240\u6709\u5b57\u6bb5\u90fd\u662fsink\u5217")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"1000000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"jdbc_url"},"jdbc_url"),(0,r.yg)("p",null,"\u8fde\u63a5\u5230Redshift\u6570\u636e\u5e93\u7684JDBC URL\u3002"),(0,r.yg)("h3",{id:"jdbc_user"},"jdbc_user"),(0,r.yg)("p",null,"\u8fde\u63a5\u5230Redshift\u6570\u636e\u5e93\u7684\u7528\u6237\u540d\u3002"),(0,r.yg)("h3",{id:"jdbc_password"},"jdbc_password"),(0,r.yg)("p",null,"\u8fde\u63a5\u5230Redshift\u6570\u636e\u5e93\u7684\u5bc6\u7801\u3002"),(0,r.yg)("h3",{id:"execute_sql"},"execute_sql"),(0,r.yg)("p",null,"\u6570\u636e\u5199\u5165S3\u540e\u8981\u6267\u884c\u7684SQL\u3002"),(0,r.yg)("p",null,"\u793a\u4f8b:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nCOPY target_table FROM 's3://yourbucket${path}' IAM_ROLE 'arn:XXX' REGION 'your region' format as json 'auto';\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"target_table"),"\u662fRedshift\u4e2d\u7684\u8868\u540d\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"${path}"),"\u662f\u5199\u5165S3\u7684\u6587\u4ef6\u7684\u8def\u5f84\u3002\u8bf7\u786e\u8ba4\u60a8\u7684sql\u5305\u542b\u6b64\u53d8\u91cf\u3002\u5e76\u4e14\u4e0d\u9700\u8981\u66ff\u6362\u5b83\u3002\u6211\u4eec\u5c06\u5728\u6267\u884csql\u65f6\u66ff\u6362\u5b83\u3002\nIAM_ROLE\u662f\u6709\u6743\u8bbf\u95eeS3\u7684\u89d2\u8272\u3002\nformat\u662f\u5199\u5165S3\u7684\u6587\u4ef6\u7684\u683c\u5f0f\u3002\u8bf7\u786e\u8ba4\u6b64\u683c\u5f0f\u4e0e\u60a8\u5728\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u7684\u6587\u4ef6\u683c\u5f0f\u76f8\u540c\u3002"),(0,r.yg)("p",null,"\u8bf7\u53c2\u9605",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html"},"Redshift COPY"),"\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"),(0,r.yg)("p",null,"\u8bf7\u786e\u8ba4\u8be5\u89d2\u8272\u6709\u6743\u8bbf\u95eeS3\u3002"),(0,r.yg)("h3",{id:"path-string"},"path ","[string]"),(0,r.yg)("p",null,"\u76ee\u6807\u76ee\u5f55\u8def\u5f84\u662f\u5fc5\u586b\u9879\u3002"),(0,r.yg)("h3",{id:"bucket-string"},"bucket ","[string]"),(0,r.yg)("p",null,"s3\u6587\u4ef6\u7cfb\u7edf\u7684bucket\u5730\u5740\uff0c\u4f8b\u5982\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"s3n://seatunnel-test"),"\uff0c\u5982\u679c\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"s3a"),"\u534f\u8bae\uff0c\u5219\u6b64\u53c2\u6570\u5e94\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"s3a://seatunnel-test"),"\u3002"),(0,r.yg)("h3",{id:"access_key-string"},"access_key ","[string]"),(0,r.yg)("p",null,"s3\u6587\u4ef6\u7cfb\u7edf\u7684access_key\u3002\u5982\u679c\u672a\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u8bf7\u786e\u8ba4\u51ed\u636e\u63d0\u4f9b\u7a0b\u5e8f\u94fe\u53ef\u4ee5\u6b63\u786e\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u60a8\u53ef\u4ee5\u68c0\u67e5\u8fd9\u4e2a",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop-aws")),(0,r.yg)("h3",{id:"access_secret-string"},"access_secret ","[string]"),(0,r.yg)("p",null,"s3\u6587\u4ef6\u7cfb\u7edf\u7684access_secret\u3002\u5982\u679c\u672a\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u8bf7\u786e\u8ba4\u51ed\u636e\u63d0\u4f9b\u7a0b\u5e8f\u94fe\u53ef\u4ee5\u6b63\u786e\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u60a8\u53ef\u4ee5\u68c0\u67e5\u8fd9\u4e2a",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop-aws")),(0,r.yg)("h3",{id:"hadoop_s3_properties-map"},"hadoop_s3_properties ","[map]"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u6dfb\u52a0\u5176\u4ed6\u9009\u9879\uff0c\u53ef\u4ee5\u5728\u6b64\u5904\u6dfb\u52a0\u5e76\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"Hadoop-AWS")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'hadoop_s3_properties {\n  "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n }\n')),(0,r.yg)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"file_name_expression"),"\u63cf\u8ff0\u4e86\u5c06\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"path"),"\u4e2d\u521b\u5efa\u7684\u6587\u4ef6\u8868\u8fbe\u5f0f\u3002\u6211\u4eec\u53ef\u4ee5\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"file_name_expression"),"\u4e2d\u6dfb\u52a0\u53d8\u91cf",(0,r.yg)("inlineCode",{parentName:"p"},"${now}"),"\u6216",(0,r.yg)("inlineCode",{parentName:"p"},"${uuid}"),"\uff0c\u7c7b\u4f3c\u4e8e",(0,r.yg)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),"\uff0c\n",(0,r.yg)("inlineCode",{parentName:"p"},"${now}"),"\u8868\u793a\u5f53\u524d\u65f6\u95f4\uff0c\u5176\u683c\u5f0f\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u9009\u9879",(0,r.yg)("inlineCode",{parentName:"p"},"filename_time_format"),"\u6765\u5b9a\u4e49\u3002\n\u8bf7\u6ce8\u610f\uff0c\u5982\u679c",(0,r.yg)("inlineCode",{parentName:"p"},"is_enable_transaction"),"\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u6211\u4eec\u5c06\u81ea\u52a8\u6dfb\u52a0",(0,r.yg)("inlineCode",{parentName:"p"},"${transactionId}_"),"\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002"),(0,r.yg)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,r.yg)("p",null,"\u6211\u4eec\u652f\u6301\u4ee5\u4e0b\u6587\u4ef6\u7c7b\u578b\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"text")," ",(0,r.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,r.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,r.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,r.yg)("inlineCode",{parentName:"p"},"json")),(0,r.yg)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6700\u7ec8\u6587\u4ef6\u540d\u5c06\u4ee5file_format_type\u7684\u540e\u7f00\u7ed3\u5c3e\uff0c\u6587\u672c\u6587\u4ef6\u7684\u540e\u7f00\u4e3a\u201ctxt\u201d\u3002"),(0,r.yg)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,r.yg)("p",null,"\u5f53",(0,r.yg)("inlineCode",{parentName:"p"},"file_name_expression"),"\u53c2\u6570\u4e2d\u7684\u683c\u5f0f\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"xxxx-${now}"),"\u65f6\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"filename_time_format"),"\u53ef\u4ee5\u6307\u5b9a\u8def\u5f84\u7684\u65f6\u95f4\u683c\u5f0f\uff0c\u9ed8\u8ba4\u503c\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd"),"\u3002\u5e38\u7528\u7684\u65f6\u95f4\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Symbol"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"y"),(0,r.yg)("td",{parentName:"tr",align:null},"Year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"M"),(0,r.yg)("td",{parentName:"tr",align:null},"Month")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"d"),(0,r.yg)("td",{parentName:"tr",align:null},"Day of month")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"H"),(0,r.yg)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"m"),(0,r.yg)("td",{parentName:"tr",align:null},"Minute in hour")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"s"),(0,r.yg)("td",{parentName:"tr",align:null},"Second in minute")))),(0,r.yg)("p",null,"\u8bf7\u53c2\u9605",(0,r.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat"),"\u4e86\u89e3\u8be6\u7ec6\u7684\u65f6\u95f4\u683c\u5f0f\u8bed\u6cd5\u3002"),(0,r.yg)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,r.yg)("p",null,"\u6570\u636e\u884c\u4e2d\u5217\u4e4b\u95f4\u7684\u5206\u9694\u7b26\u3002\u4ec5\u88ab\u201ctext\u201d\u548c\u201ccsv\u201d\u6587\u4ef6\u683c\u5f0f\u9700\u8981\u3002"),(0,r.yg)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,r.yg)("p",null,"\u6587\u4ef6\u4e2d\u884c\u4e4b\u95f4\u7684\u5206\u9694\u7b26\u3002\u4ec5\u88ab\u201ctext\u201d\u548c\u201ccsv\u201d\u6587\u4ef6\u683c\u5f0f\u9700\u8981\u3002"),(0,r.yg)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,r.yg)("p",null,"\u57fa\u4e8e\u9009\u5b9a\u5b57\u6bb5\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u533a"),(0,r.yg)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,r.yg)("p",null,"\u5982\u679c\u6307\u5b9a\u4e86",(0,r.yg)("inlineCode",{parentName:"p"},"partition_by"),"\uff0c\u6211\u4eec\u5c06\u6839\u636e\u5206\u533a\u4fe1\u606f\u751f\u6210\u76f8\u5e94\u7684\u5206\u533a\u76ee\u5f55\uff0c\u5e76\u5c06\u6700\u7ec8\u6587\u4ef6\u653e\u7f6e\u5728\u5206\u533a\u76ee\u5f55\u4e2d\u3002"),(0,r.yg)("p",null,"\u9ed8\u8ba4\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"partition_dir_expression"),"\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),"\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"k0"),"\u662f\u7b2c\u4e00\u4e2a\u5206\u533a\u5b57\u6bb5\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"v0"),"\u662f\u7b2c\u4e00\u4e2a\u5212\u5206\u5b57\u6bb5\u7684\u503c\u3002"),(0,r.yg)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,r.yg)("p",null,"\u5982\u679c",(0,r.yg)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file"),"\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219\u5206\u533a\u5b57\u6bb5\u53ca\u5176\u503c\u5c06\u5199\u5165\u6570\u636e\u6587\u4ef6\u3002"),(0,r.yg)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u60f3\u5199\u4e00\u4e2aHive\u6570\u636e\u6587\u4ef6\uff0c\u5b83\u7684\u503c\u5e94\u8be5\u662f\u201cfalse\u201d\u3002"),(0,r.yg)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,r.yg)("p",null,"\u54ea\u4e9b\u5217\u9700\u8981\u5199\u5165\u6587\u4ef6\uff0c\u9ed8\u8ba4\u503c\u662f\u4ece\u201cTransform\u201d\u6216\u201cSource\u201d\u83b7\u53d6\u7684\u6240\u6709\u5217\u3002\n\u5b57\u6bb5\u7684\u987a\u5e8f\u51b3\u5b9a\u4e86\u6587\u4ef6\u5b9e\u9645\u5199\u5165\u7684\u987a\u5e8f\u3002"),(0,r.yg)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,r.yg)("p",null,"\u5982\u679c",(0,r.yg)("inlineCode",{parentName:"p"},"is_enable_transaction"),"\u4e3atrue\uff0c\u6211\u4eec\u5c06\u786e\u4fdd\u6570\u636e\u5728\u5199\u5165\u76ee\u6807\u76ee\u5f55\u65f6\u4e0d\u4f1a\u4e22\u5931\u6216\u91cd\u590d\u3002\n\u8bf7\u6ce8\u610f\uff0c\u5982\u679c",(0,r.yg)("inlineCode",{parentName:"p"},"is_enable_transaction"),"\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u6211\u4eec\u5c06\u81ea\u52a8\u6dfb\u52a0",(0,r.yg)("inlineCode",{parentName:"p"},"${transactionId}_"),"\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002\n\u73b0\u5728\u53ea\u652f\u6301\u201ctrue\u201d\u3002"),(0,r.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,r.yg)("p",null,"\u6587\u4ef6\u4e2d\u7684\u6700\u5927\u884c\u6570\u3002\u5bf9\u4e8eSeaTunnel\u5f15\u64ce\uff0c\u6587\u4ef6\u4e2d\u7684\u884c\u6570\u7531\u201cbatch_size\u201d\u548c\u201ccheckpoint.interval\u201d\u5171\u540c\u51b3\u5b9a\u3002\u5982\u679c\u201ccheckpoint.interval\u201d\u7684\u503c\u8db3\u591f\u5927\uff0csink writer\u5c06\u5728\u6587\u4ef6\u4e2d\u5199\u5165\u884c\uff0c\u76f4\u5230\u6587\u4ef6\u4e2d\u7684\u884c\u5927\u4e8e\u201cbatch_size\u201d\u3002\u5982\u679c\u201ccheckpoint.interval\u201d\u8f83\u5c0f\uff0c\u5219\u63a5\u6536\u5668\u5199\u5165\u7a0b\u5e8f\u5c06\u5728\u65b0\u7684\u68c0\u67e5\u70b9\u89e6\u53d1\u65f6\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\u3002"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003","[Sink Common Options]","\uff08../sink-common-options.md\uff09\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("p",null,"\u7528\u4e8e text \u6587\u4ef6\u683c\u5f0f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  S3Redshift {\n    jdbc_url = "jdbc:redshift://xxx.amazonaws.com.cn:5439/xxx"\n    jdbc_user = "xxx"\n    jdbc_password = "xxxx"\n    execute_sql="COPY table_name FROM \'s3://test${path}\' IAM_ROLE \'arn:aws-cn:iam::xxx\' REGION \'cn-north-1\' removequotes emptyasnull blanksasnull maxerror 100 delimiter \'|\' ;"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/text"\n    row_delimiter="\\n"\n    partition_dir_expression="${k0}=${v0}"\n    is_partition_field_write_in_file=true\n    file_name_expression="${transactionId}_${now}"\n    file_format_type = "text"\n    filename_time_format="yyyy.MM.dd"\n    is_enable_transaction=true\n    hadoop_s3_properties {\n       "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    }\n  }\n\n')),(0,r.yg)("p",null,"\u7528\u4e8e parquet \u6587\u4ef6\u683c\u5f0f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  S3Redshift {\n    jdbc_url = "jdbc:redshift://xxx.amazonaws.com.cn:5439/xxx"\n    jdbc_user = "xxx"\n    jdbc_password = "xxxx"\n    execute_sql="COPY table_name FROM \'s3://test${path}\' IAM_ROLE \'arn:aws-cn:iam::xxx\' REGION \'cn-north-1\' format as PARQUET;"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/parquet"\n    row_delimiter="\\n"\n    partition_dir_expression="${k0}=${v0}"\n    is_partition_field_write_in_file=true\n    file_name_expression="${transactionId}_${now}"\n    file_format_type = "parquet"\n    filename_time_format="yyyy.MM.dd"\n    is_enable_transaction=true\n    hadoop_s3_properties {\n       "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    }\n  }\n\n')),(0,r.yg)("p",null,"\u7528\u4e8e orc \u6587\u4ef6\u683c\u5f0f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  S3Redshift {\n    jdbc_url = "jdbc:redshift://xxx.amazonaws.com.cn:5439/xxx"\n    jdbc_user = "xxx"\n    jdbc_password = "xxxx"\n    execute_sql="COPY table_name FROM \'s3://test${path}\' IAM_ROLE \'arn:aws-cn:iam::xxx\' REGION \'cn-north-1\' format as ORC;"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/orc"\n    row_delimiter="\\n"\n    partition_dir_expression="${k0}=${v0}"\n    is_partition_field_write_in_file=true\n    file_name_expression="${transactionId}_${now}"\n    file_format_type = "orc"\n    filename_time_format="yyyy.MM.dd"\n    is_enable_transaction=true\n    hadoop_s3_properties {\n       "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    }\n  }\n\n')),(0,r.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,r.yg)(l.default,{mdxType:"ChangeLog"}))}y.isMDXComponent=!0}}]);