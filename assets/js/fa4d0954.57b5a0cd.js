"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[46590,19346],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),m=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(g.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=l,s=u["".concat(g,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(s,i(i({ref:t},p),{},{components:n})):a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(58168),l=(n(96540),n(15680));const r={},i=void 0,o={unversionedId:"connector-v2/changelog/connector-hbase",id:"connector-v2/changelog/connector-hbase",title:"connector-hbase",description:"Change Log",source:"@site/docs/connector-v2/changelog/connector-hbase.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-hbase",permalink:"/docs/connector-v2/changelog/connector-hbase",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/changelog/connector-hbase.md",tags:[],version:"current",frontMatter:{}},g={},m=[],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("details",null,(0,l.yg)("summary",null," Change Log "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Change"),(0,l.yg)("th",{parentName:"tr",align:null},"Commit"),(0,l.yg)("th",{parentName:"tr",align:null},"Version"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve]"," hbase options (#8923)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b6a702b58f"},"https://github.com/apache/seatunnel/commit/b6a702b58f")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve]"," restruct connector common options (#8634)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f3499a6eeb"},"https://github.com/apache/seatunnel/commit/f3499a6eeb")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][dist]","add shade check rule (#8136)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51ef800016"},"https://github.com/apache/seatunnel/commit/51ef800016")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Fix][Connector-V2]"," Fix known directory create and delete ignore issues (#7700)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e2fb679577"},"https://github.com/apache/seatunnel/commit/e2fb679577")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]","[Hbase]"," implement hbase catalog (#7516)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b978792cb1"},"https://github.com/apache/seatunnel/commit/b978792cb1")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Support multi-table sink feature for HBase (#7169)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/025fa3bb88"},"https://github.com/apache/seatunnel/commit/025fa3bb88")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[hotfix][connector-v2-hbase]","fix and  optimize hbase source problem (#7148)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/34a6b8e9f6"},"https://github.com/apache/seatunnel/commit/34a6b8e9f6")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.7")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][hbase]"," The specified column is written to the specified column family (#5234)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/49d397c61d"},"https://github.com/apache/seatunnel/commit/49d397c61d")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[feature][connector-v2-hbase-sink]"," Support Connector v2 HBase sink TTL data writing (#7116)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/adafd80255"},"https://github.com/apache/seatunnel/commit/adafd80255")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[E2E][HBase]","Refactor hbase e2e (#6859)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1da9bd6ce4"},"https://github.com/apache/seatunnel/commit/1da9bd6ce4")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Connector]","Add hbase source connector (#6348)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f108a5e658"},"https://github.com/apache/seatunnel/commit/f108a5e658")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][HbaseSink]","support array data. (#6100)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b592014766"},"https://github.com/apache/seatunnel/commit/b592014766")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove use ",(0,l.yg)("inlineCode",{parentName:"td"},"SeaTunnelSink::getConsumedType")," method and mark it as deprecated (#5755)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8de7408100"},"https://github.com/apache/seatunnel/commit/8de7408100")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Hotfix][Connector-v2]","[HbaseSink]","Fix default timestamp (#4958)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/3d8f3bf902"},"https://github.com/apache/seatunnel/commit/3d8f3bf902")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][build]"," Give the maven module a human readable name (#4114)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d7cd601051"},"https://github.com/apache/seatunnel/commit/d7cd601051")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin. (#4101)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a2ab166561"},"https://github.com/apache/seatunnel/commit/a2ab166561")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]","[Hbase]"," Introduce hbase sink connector (#4049)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/68bda94a4c"},"https://github.com/apache/seatunnel/commit/68bda94a4c")),(0,l.yg)("td",{parentName:"tr",align:null},"2.3.1"))))))}c.isMDXComponent=!0},32128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var a=n(58168),l=(n(96540),n(15680)),r=n(57659);const i={},o="Hbase",g={unversionedId:"connector-v2/sink/Hbase",id:"connector-v2/sink/Hbase",title:"Hbase",description:"Hbase sink connector",source:"@site/docs/connector-v2/sink/Hbase.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hbase",permalink:"/docs/connector-v2/sink/Hbase",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/sink/Hbase.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Greenplum",permalink:"/docs/connector-v2/sink/Greenplum"},next:{title:"HdfsFile",permalink:"/docs/connector-v2/sink/HdfsFile"}},m={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"zookeeper_quorum string",id:"zookeeper_quorum-string",level:3},{value:"table string",id:"table-string",level:3},{value:"rowkey_column list",id:"rowkey_column-list",level:3},{value:"family_name config",id:"family_name-config",level:3},{value:"rowkey_delimiter string",id:"rowkey_delimiter-string",level:3},{value:"version_column string",id:"version_column-string",level:3},{value:"null_mode double",id:"null_mode-double",level:3},{value:"wal_write boolean",id:"wal_write-boolean",level:3},{value:"write_buffer_size int",id:"write_buffer_size-int",level:3},{value:"encoding string",id:"encoding-string",level:3},{value:"hbase_extra_config config",id:"hbase_extra_config-config",level:3},{value:"ttl long",id:"ttl-long",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Multiple Table",id:"multiple-table",level:3},{value:"Writes To The Specified Column Family",id:"writes-to-the-specified-column-family",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hbase"},"Hbase"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Hbase sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Output data to Hbase"),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"zookeeper_quorum"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rowkey_column"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"family_name"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rowkey_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'""')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"version_column"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"skip")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"wal_write"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"write_buffer_size"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"8 ",(0,l.yg)("em",{parentName:"td"}," 1024 ")," 1024")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"encoding"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"utf8")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hbase_extra_config"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ttl"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"zookeeper_quorum-string"},"zookeeper_quorum ","[string]"),(0,l.yg)("p",null,'The zookeeper cluster host of hbase, example: "hadoop001:2181,hadoop002:2181,hadoop003:2181"'),(0,l.yg)("h3",{id:"table-string"},"table ","[string]"),(0,l.yg)("p",null,'The table name you want to write, example: "seatunnel"'),(0,l.yg)("h3",{id:"rowkey_column-list"},"rowkey_column ","[list]"),(0,l.yg)("p",null,"The column name list of row keys, example: ",'["id", "uuid"]'),(0,l.yg)("h3",{id:"family_name-config"},"family_name ","[config]"),(0,l.yg)("p",null,"The family name mapping of fields. For example the row from upstream like the following shown:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"id"),(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,l.yg)("td",{parentName:"tr",align:null},"27")))),(0,l.yg)("p",null,"id as the row key and other fields written to the different families, you can assign"),(0,l.yg)("p",null,'family_name {\nname = "info1"\nage = "info2"\n}'),(0,l.yg)("p",null,"this means that ",(0,l.yg)("inlineCode",{parentName:"p"},"name")," will be written to the family ",(0,l.yg)("inlineCode",{parentName:"p"},"info1")," and the ",(0,l.yg)("inlineCode",{parentName:"p"},"age")," will be written to the family ",(0,l.yg)("inlineCode",{parentName:"p"},"info2")),(0,l.yg)("p",null,"if you want other fields written to the same family, you can assign"),(0,l.yg)("p",null,'family_name {\nall_columns = "info"\n}'),(0,l.yg)("p",null,"this means that all fields will be written to the family ",(0,l.yg)("inlineCode",{parentName:"p"},"info")),(0,l.yg)("h3",{id:"rowkey_delimiter-string"},"rowkey_delimiter ","[string]"),(0,l.yg)("p",null,"The delimiter of joining multi row keys, default ",(0,l.yg)("inlineCode",{parentName:"p"},'""')),(0,l.yg)("h3",{id:"version_column-string"},"version_column ","[string]"),(0,l.yg)("p",null,"The version column name, you can use it to assign timestamp for hbase record"),(0,l.yg)("h3",{id:"null_mode-double"},"null_mode ","[double]"),(0,l.yg)("p",null,"The mode of writing null value, support ","[",(0,l.yg)("inlineCode",{parentName:"p"},"skip"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"empty"),"]",", default ",(0,l.yg)("inlineCode",{parentName:"p"},"skip")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"skip: When the field is null, connector will not write this field to hbase"),(0,l.yg)("li",{parentName:"ul"},"empty: When the field is null, connector will write generate empty value for this field")),(0,l.yg)("h3",{id:"wal_write-boolean"},"wal_write ","[boolean]"),(0,l.yg)("p",null,"The wal log write flag, default ",(0,l.yg)("inlineCode",{parentName:"p"},"false")),(0,l.yg)("h3",{id:"write_buffer_size-int"},"write_buffer_size ","[int]"),(0,l.yg)("p",null,"The write buffer size of hbase client, default ",(0,l.yg)("inlineCode",{parentName:"p"},"8 * 1024 * 1024")),(0,l.yg)("h3",{id:"encoding-string"},"encoding ","[string]"),(0,l.yg)("p",null,"The encoding of string field, support ","[",(0,l.yg)("inlineCode",{parentName:"p"},"utf8"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"gbk"),"]",", default ",(0,l.yg)("inlineCode",{parentName:"p"},"utf8")),(0,l.yg)("h3",{id:"hbase_extra_config-config"},"hbase_extra_config ","[config]"),(0,l.yg)("p",null,"The extra configuration of hbase"),(0,l.yg)("h3",{id:"ttl-long"},"ttl ","[long]"),(0,l.yg)("p",null,"Hbase writes data TTL time, the default is based on the TTL set in the table, unit: milliseconds"),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/connector-v2/sink-common-options"},"Sink Common Options")," for details"),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nHbase {\n  zookeeper_quorum = "hadoop001:2181,hadoop002:2181,hadoop003:2181"\n  table = "seatunnel_test"\n  rowkey_column = ["name"]\n  family_name {\n    all_columns = seatunnel\n  }\n}\n\n')),(0,l.yg)("h3",{id:"multiple-table"},"Multiple Table"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set engine configuration here\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    tables_configs = [\n       {\n        schema = {\n          table = "hbase_sink_1"\n         fields {\n                    name = STRING\n                    c_string = STRING\n                    c_double = DOUBLE\n                    c_bigint = BIGINT\n                    c_float = FLOAT\n                    c_int = INT\n                    c_smallint = SMALLINT\n                    c_boolean = BOOLEAN\n                    time = BIGINT\n           }\n        }\n            rows = [\n              {\n                kind = INSERT\n                fields = ["label_1", "sink_1", 4.3, 200, 2.5, 2, 5, true, 1627529632356]\n              }\n              ]\n       },\n       {\n       schema = {\n         table = "hbase_sink_2"\n              fields {\n                    name = STRING\n                    c_string = STRING\n                    c_double = DOUBLE\n                    c_bigint = BIGINT\n                    c_float = FLOAT\n                    c_int = INT\n                    c_smallint = SMALLINT\n                    c_boolean = BOOLEAN\n                    time = BIGINT\n              }\n       }\n           rows = [\n             {\n               kind = INSERT\n               fields = ["label_2", "sink_2", 4.3, 200, 2.5, 2, 5, true, 1627529632357]\n             }\n             ]\n      }\n    ]\n  }\n}\n\nsink {\n  Hbase {\n    zookeeper_quorum = "hadoop001:2181,hadoop002:2181,hadoop003:2181"\n    table = "${table_name}"\n    rowkey_column = ["name"]\n    family_name {\n      all_columns = info\n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"writes-to-the-specified-column-family"},"Writes To The Specified Column Family"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'Hbase {\n  zookeeper_quorum = "hbase_e2e:2181"\n  table = "assign_cf_table"\n  rowkey_column = ["id"]\n  family_name {\n    c_double = "cf1"\n    c_bigint = "cf2"\n  }\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)(r.default,{mdxType:"ChangeLog"}))}d.isMDXComponent=!0}}]);