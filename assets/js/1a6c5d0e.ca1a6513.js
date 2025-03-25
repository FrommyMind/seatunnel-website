"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[11510],{15680:(e,n,t)=>{t.d(n,{xA:()=>f,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=l(t),k=r,m=p["".concat(i,".").concat(k)]||p[k]||u[k]||o;return t?a.createElement(m,c(c({ref:n},f),{},{components:t})):a.createElement(m,c({ref:n},f))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=k;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},24235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(58168),r=(t(96540),t(15680));const o={},c="Kafka source compatible kafka-connect-json",s={unversionedId:"connector-v2/formats/kafka-compatible-kafkaconnect-json",id:"version-2.3.4/connector-v2/formats/kafka-compatible-kafkaconnect-json",title:"Kafka source compatible kafka-connect-json",description:"Seatunnel connector kafka supports parsing data extracted through kafka connect source, especially data extracted from kafka connect jdbc and kafka connect debezium",source:"@site/versioned_docs/version-2.3.4/connector-v2/formats/kafka-compatible-kafkaconnect-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/kafka-compatible-kafkaconnect-json",permalink:"/docs/2.3.4/connector-v2/formats/kafka-compatible-kafkaconnect-json",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/formats/kafka-compatible-kafkaconnect-json.md",tags:[],version:"2.3.4",frontMatter:{}},i={},l=[{value:"Kafka Sink Mysql",id:"kafka-sink-mysql",level:2}],f={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"kafka-source-compatible-kafka-connect-json"},"Kafka source compatible kafka-connect-json"),(0,r.yg)("p",null,"Seatunnel connector kafka supports parsing data extracted through kafka connect source, especially data extracted from kafka connect jdbc and kafka connect debezium"),(0,r.yg)("h1",{id:"how-to-use"},"How To Use"),(0,r.yg)("h2",{id:"kafka-sink-mysql"},"Kafka Sink Mysql"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n    parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "localhost:9092"\n    topic = "jdbc_source_record"\n    result_table_name = "kafka_table"\n    start_mode = earliest\n    schema = {\n      fields {\n           id = "int"\n           name = "string"\n           description = "string"\n           weight = "string"\n      }\n    },\n    format = COMPATIBLE_KAFKA_CONNECT_JSON\n  }\n}\n\n\nsink {\n    Jdbc {\n        driver = com.mysql.cj.jdbc.Driver\n        url = "jdbc:mysql://localhost:3306/seatunnel"\n        user = st_user\n        password = seatunnel\n        generate_sink_sql = true\n        database = seatunnel\n        table = jdbc_sink\n        primary_keys = ["id"]\n    }\n}\n')))}u.isMDXComponent=!0}}]);