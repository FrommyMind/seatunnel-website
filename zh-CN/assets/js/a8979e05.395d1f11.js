"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2731],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),g=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=g(n),d=l,y=u["".concat(o,".").concat(d)]||u[d]||s[d]||r;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var g=2;g<r;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var a=n(58168),l=(n(96540),n(15680));const r={},i="Hudi",p={unversionedId:"connector-v2/sink/Hudi",id:"version-2.3.7/connector-v2/sink/Hudi",title:"Hudi",description:"Hudi \u63a5\u6536\u5668\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/connector-v2/sink/Hudi.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hudi",permalink:"/zh-CN/docs/2.3.7/connector-v2/sink/Hudi",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/connector-v2/sink/Hudi.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"Http",permalink:"/zh-CN/docs/2.3.7/connector-v2/sink/Http"},next:{title:"Apache Iceberg",permalink:"/zh-CN/docs/2.3.7/connector-v2/sink/Iceberg"}},o={},g=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u70b9",id:"\u4e3b\u8981\u7279\u70b9",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"table_name string",id:"table_name-string",level:3},{value:"table_dfs_path string",id:"table_dfs_path-string",level:3},{value:"table_type enum",id:"table_type-enum",level:3},{value:"conf_files_path string",id:"conf_files_path-string",level:3},{value:"op_type enum",id:"op_type-enum",level:3},{value:"batch_interval_ms Int",id:"batch_interval_ms-int",level:3},{value:"insert_shuffle_parallelism Int",id:"insert_shuffle_parallelism-int",level:3},{value:"upsert_shuffle_parallelism Int",id:"upsert_shuffle_parallelism-int",level:3},{value:"min_commits_to_keep Int",id:"min_commits_to_keep-int",level:3},{value:"max_commits_to_keep Int",id:"max_commits_to_keep-int",level:3},{value:"\u901a\u7528\u9009\u9879",id:"\u901a\u7528\u9009\u9879",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],m={toc:g},u="wrapper";function s(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hudi"},"Hudi"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Hudi \u63a5\u6536\u5668\u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u7528\u4e8e\u5c06\u6570\u636e\u5199\u5165 Hudi\u3002"),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u70b9"},"\u4e3b\u8981\u7279\u70b9"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.7/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.7/concept/connector-v2-features"},"cdc"))),(0,l.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9700"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_dfs_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"conf_files_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"record_key_fields"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_fields"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_type"),(0,l.yg)("td",{parentName:"tr",align:null},"enum"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"copy_on_write")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"op_type"),(0,l.yg)("td",{parentName:"tr",align:null},"enum"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"insert")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"1000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"insert_shuffle_parallelism"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"upsert_shuffle_parallelism"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"min_commits_to_keep"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"20")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_commits_to_keep"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"30")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table_name")," Hudi \u8868\u7684\u540d\u79f0\u3002"),(0,l.yg)("h3",{id:"table_dfs_path-string"},"table_dfs_path ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table_dfs_path"),' Hudi \u8868\u7684 DFS \u6839\u8def\u5f84\uff0c\u4f8b\u5982 "hdfs://nameservice/data/hudi/hudi_table/"\u3002'),(0,l.yg)("h3",{id:"table_type-enum"},"table_type ","[enum]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table_type")," Hudi \u8868\u7684\u7c7b\u578b\u3002"),(0,l.yg)("h3",{id:"conf_files_path-string"},"conf_files_path ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"conf_files_path"),' \u73af\u5883\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u5217\u8868\uff08\u672c\u5730\u8def\u5f84\uff09\uff0c\u7528\u4e8e\u521d\u59cb\u5316 HDFS \u5ba2\u6237\u7aef\u4ee5\u8bfb\u53d6 Hudi \u8868\u6587\u4ef6\u3002\u793a\u4f8b\uff1a"/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml"\u3002'),(0,l.yg)("h3",{id:"op_type-enum"},"op_type ","[enum]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"op_type")," Hudi \u8868\u7684\u64cd\u4f5c\u7c7b\u578b\u3002\u503c\u53ef\u4ee5\u662f 'insert'\u3001'upsert' \u6216 'bulk_insert'\u3002"),(0,l.yg)("h3",{id:"batch_interval_ms-int"},"batch_interval_ms ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"batch_interval_ms")," \u6279\u91cf\u5199\u5165 Hudi \u8868\u7684\u65f6\u95f4\u95f4\u9694\u3002"),(0,l.yg)("h3",{id:"insert_shuffle_parallelism-int"},"insert_shuffle_parallelism ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"insert_shuffle_parallelism")," \u63d2\u5165\u6570\u636e\u5230 Hudi \u8868\u7684\u5e76\u884c\u5ea6\u3002"),(0,l.yg)("h3",{id:"upsert_shuffle_parallelism-int"},"upsert_shuffle_parallelism ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"upsert_shuffle_parallelism")," \u66f4\u65b0\u63d2\u5165\u6570\u636e\u5230 Hudi \u8868\u7684\u5e76\u884c\u5ea6\u3002"),(0,l.yg)("h3",{id:"min_commits_to_keep-int"},"min_commits_to_keep ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"min_commits_to_keep")," Hudi \u8868\u4fdd\u7559\u7684\u6700\u5c11\u63d0\u4ea4\u6570\u3002"),(0,l.yg)("h3",{id:"max_commits_to_keep-int"},"max_commits_to_keep ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"max_commits_to_keep")," Hudi \u8868\u4fdd\u7559\u7684\u6700\u591a\u63d0\u4ea4\u6570\u3002"),(0,l.yg)("h3",{id:"\u901a\u7528\u9009\u9879"},"\u901a\u7528\u9009\u9879"),(0,l.yg)("p",null,"\u6570\u636e\u6e90\u63d2\u4ef6\u7684\u901a\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/connector-v2/sink/common-options"},"Source Common Options")," \u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n  Hudi {\n    table_dfs_path = "hdfs://nameserivce/data/hudi/hudi_table/"\n    table_type = "cow"\n    conf_files_path = "/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml"\n    use.kerberos = true\n    kerberos.principal = "test_user@xxx"\n    kerberos.principal.file = "/home/test/test_user.keytab"\n  }\n\n}\n')))}s.isMDXComponent=!0}}]);