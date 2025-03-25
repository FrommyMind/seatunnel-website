"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[23893],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=r.createContext({}),s=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(g.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,c=u["".concat(g,".").concat(y)]||u[y]||d[y]||l;return t?r.createElement(c,i(i({ref:n},p),{},{components:t})):r.createElement(c,i({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},88785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const l={},i="Jdbc",o={unversionedId:"flink/configuration/sink-plugins/Jdbc",id:"version-2.1.0/flink/configuration/sink-plugins/Jdbc",title:"Jdbc",description:"Sink plugin : Jdbc [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/Jdbc.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/Jdbc",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Jdbc",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/Jdbc.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InfluxDB",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/InfluxDb"},next:{title:"Kafka",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Kafka"}},g={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"url string",id:"url-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"query string",id:"query-string",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"parallelism int",id:"parallelism-int",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"jdbc"},"Jdbc"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Sink plugin : Jdbc ","[Flink]")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Write data through jdbc"),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"driver"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"url"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"username"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"query"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"source_table_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"driver-string"},"driver ","[string]"),(0,a.yg)("p",null,"Driver name, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver")," for MySQL."),(0,a.yg)("p",null,"Warn: for license compliance, you have to provide MySQL JDBC driver yourself, e.g. copy ",(0,a.yg)("inlineCode",{parentName:"p"},"mysql-connector-java-xxx.jar")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib")," for Standalone."),(0,a.yg)("h3",{id:"url-string"},"url ","[string]"),(0,a.yg)("p",null,"The URL of the JDBC connection. Such as: ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:3306/test")),(0,a.yg)("h3",{id:"username-string"},"username ","[string]"),(0,a.yg)("p",null,"username"),(0,a.yg)("h3",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"password"),(0,a.yg)("h3",{id:"query-string"},"query ","[string]"),(0,a.yg)("p",null,"Insert statement"),(0,a.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,a.yg)("p",null,"Number of writes per batch"),(0,a.yg)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,a.yg)("p",null,"The parallelism of an individual operator, for JdbcSink."),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.1.0/flink/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'   JdbcSink {\n     source_table_name = fake\n     driver = com.mysql.jdbc.Driver\n     url = "jdbc:mysql://localhost/test"\n     username = root\n     query = "insert into test(name,age) values(?,?)"\n     batch_size = 2\n   }\n')))}d.isMDXComponent=!0}}]);