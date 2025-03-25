"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[87877],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=l,y=d["".concat(s,".").concat(c)]||d[c]||g[c]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(58168),l=(n(96540),n(15680));const a={},i="SelectDB Cloud",o={unversionedId:"connector-v2/sink/SelectDB-Cloud",id:"version-2.3.2/connector-v2/sink/SelectDB-Cloud",title:"SelectDB Cloud",description:"SelectDB Cloud sink connector",source:"@site/versioned_docs/version-2.3.2/connector-v2/sink/SelectDB-Cloud.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/SelectDB-Cloud",permalink:"/zh-CN/docs/2.3.2/connector-v2/sink/SelectDB-Cloud",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.2/connector-v2/sink/SelectDB-Cloud.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"S3File",permalink:"/zh-CN/docs/2.3.2/connector-v2/sink/S3File"},next:{title:"Sentry",permalink:"/zh-CN/docs/2.3.2/connector-v2/sink/Sentry"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"load-url string",id:"load-url-string",level:3},{value:"jdbc-url string",id:"jdbc-url-string",level:3},{value:"cluster-name string",id:"cluster-name-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"table.identifier string",id:"tableidentifier-string",level:3},{value:"sink.enable-delete string",id:"sinkenable-delete-string",level:3},{value:"selectdb.config map",id:"selectdbconfig-map",level:3},{value:"sink.buffer-size string",id:"sinkbuffer-size-string",level:3},{value:"sink.buffer-count string",id:"sinkbuffer-count-string",level:3},{value:"sink.max-retries string",id:"sinkmax-retries-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],p={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,l.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"selectdb-cloud"},"SelectDB Cloud"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"SelectDB Cloud sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Used to send data to SelectDB Cloud. Both support streaming and batch mode.\nThe internal implementation of SelectDB Cloud sink connector upload after batch caching and commit the CopyInto sql to load data into the table."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Version Supported"),(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"supported  ",(0,l.yg)("inlineCode",{parentName:"li"},"SelectDB Cloud version is >= 2.2.x")))),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"cdc"))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"load-url"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jdbc-url"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cluster-name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table.identifier"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,l.yg)("td",{parentName:"tr",align:null},"bool"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"selectdb.config"),(0,l.yg)("td",{parentName:"tr",align:null},"map"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"10 ",(0,l.yg)("em",{parentName:"td"}," 1024 ")," 1024 (1MB)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-count"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"10000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"3")))),(0,l.yg)("h3",{id:"load-url-string"},"load-url ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"SelectDB Cloud")," warehouse http address, the format is ",(0,l.yg)("inlineCode",{parentName:"p"},"warehouse_ip:http_port")),(0,l.yg)("h3",{id:"jdbc-url-string"},"jdbc-url ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"SelectDB Cloud")," warehouse jdbc address, the format is ",(0,l.yg)("inlineCode",{parentName:"p"},"warehouse_ip:mysql_port")),(0,l.yg)("h3",{id:"cluster-name-string"},"cluster-name ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"SelectDB Cloud")," cluster name"),(0,l.yg)("h3",{id:"username-string"},"username ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"SelectDB Cloud")," user username"),(0,l.yg)("h3",{id:"password-string"},"password ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"SelectDB Cloud")," user password"),(0,l.yg)("h3",{id:"tableidentifier-string"},"table.identifier ","[string]"),(0,l.yg)("p",null,"The name of ",(0,l.yg)("inlineCode",{parentName:"p"},"SelectDB Cloud")," table, the format is ",(0,l.yg)("inlineCode",{parentName:"p"},"database.table")),(0,l.yg)("h3",{id:"sinkenable-delete-string"},"sink.enable-delete ","[string]"),(0,l.yg)("p",null,"Whether to enable deletion. This option requires SelectDB Cloud table to enable batch delete function, and only supports Unique model."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},'ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE";')),(0,l.yg)("h3",{id:"selectdbconfig-map"},"selectdb.config ","[map]"),(0,l.yg)("p",null,"Write property configuration"),(0,l.yg)("p",null,"CSV Write\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'selectdb.config {\n    file.type="csv"\n    file.column_separator=","\n    file.line_delimiter="\\n"\n}\n')),(0,l.yg)("p",null,"JSON Write:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'selectdb.config {\n    file.type="json"\n}\n')),(0,l.yg)("h3",{id:"sinkbuffer-size-string"},"sink.buffer-size ","[string]"),(0,l.yg)("p",null,"The maximum capacity of the cache, in bytes, that is flushed to the object storage. The default is 10MB. it is not recommended to modify it."),(0,l.yg)("h3",{id:"sinkbuffer-count-string"},"sink.buffer-count ","[string]"),(0,l.yg)("p",null,"Maximum number of entries flushed to the object store. The default value is 10000. it is not recommended to modify."),(0,l.yg)("h3",{id:"sinkmax-retries-string"},"sink.max-retries ","[string]"),(0,l.yg)("p",null,"The maximum number of retries in the Commit phase, the default is 3."),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("p",null,"Use JSON format to import data"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n  SelectDBCloud {\n    load-url="warehouse_ip:http_port"\n    jdbc-url="warehouse_ip:mysql_port"\n    cluster-name="Cluster"\n    table.identifier="test.test"\n    username="admin"\n    password="******"\n    selectdb.config {\n        file.type="json"\n    }\n  }\n}\n')),(0,l.yg)("p",null,"Use CSV format to import data"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n  SelectDBCloud {\n    load-url="warehouse_ip:http_port"\n    jdbc-url="warehouse_ip:mysql_port"\n    cluster-name="Cluster"\n    table.identifier="test.test"\n    username="admin"\n    password="******"\n    selectdb.config {\n        file.type="csv"\n        file.column_separator="," \n        file.line_delimiter="\\n" \n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"next-version"},"next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Feature]"," Support SelectDB Cloud Sink Connector ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3958"},"3958")),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Refactor some SelectDB Cloud Sink code as well as support copy into batch and async flush and cdc ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4312"},"4312"))))}g.isMDXComponent=!0}}]);