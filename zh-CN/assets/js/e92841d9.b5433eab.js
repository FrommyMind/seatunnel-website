"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[40435],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>k});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,k=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(k,c(c({ref:n},u),{},{components:t})):r.createElement(k,c({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[f]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={},c="Kafka source \u517c\u5bb9 kafka-connect-json",s={unversionedId:"connector-v2/formats/kafka-compatible-kafkaconnect-json",id:"connector-v2/formats/kafka-compatible-kafkaconnect-json",title:"Kafka source \u517c\u5bb9 kafka-connect-json",description:"Seatunnel \u7684 Kafka \u8fde\u63a5\u5668\u652f\u6301\u89e3\u6790\u901a\u8fc7 Kafka Connect Source \u62bd\u53d6\u7684\u6570\u636e\uff0c\u7279\u522b\u662f\u4ece Kafka Connect JDBC \u548c Kafka Connect Debezium \u62bd\u53d6\u7684\u6570\u636e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/formats/kafka-compatible-kafkaconnect-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/kafka-compatible-kafkaconnect-json",permalink:"/zh-CN/docs/connector-v2/formats/kafka-compatible-kafkaconnect-json",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/formats/kafka-compatible-kafkaconnect-json.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Debezium \u683c\u5f0f",permalink:"/zh-CN/docs/connector-v2/formats/debezium-json"},next:{title:"MaxWell Format",permalink:"/zh-CN/docs/connector-v2/formats/maxwell-json"}},i={},l=[{value:"Kafka \u6d41\u5165 Mysql",id:"kafka-\u6d41\u5165-mysql",level:2}],u={toc:l},f="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(f,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"kafka-source-\u517c\u5bb9-kafka-connect-json"},"Kafka source \u517c\u5bb9 kafka-connect-json"),(0,a.yg)("p",null,"Seatunnel \u7684 Kafka \u8fde\u63a5\u5668\u652f\u6301\u89e3\u6790\u901a\u8fc7 Kafka Connect Source \u62bd\u53d6\u7684\u6570\u636e\uff0c\u7279\u522b\u662f\u4ece Kafka Connect JDBC \u548c Kafka Connect Debezium \u62bd\u53d6\u7684\u6570\u636e"),(0,a.yg)("h1",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,a.yg)("h2",{id:"kafka-\u6d41\u5165-mysql"},"Kafka \u6d41\u5165 Mysql"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n    parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "localhost:9092"\n    topic = "jdbc_source_record"\n    plugin_output = "kafka_table"\n    start_mode = earliest\n    schema = {\n      fields {\n           id = "int"\n           name = "string"\n           description = "string"\n           weight = "string"\n      }\n    },\n    format = COMPATIBLE_KAFKA_CONNECT_JSON\n  }\n}\n\n\nsink {\n    Jdbc {\n        driver = com.mysql.cj.jdbc.Driver\n        url = "jdbc:mysql://localhost:3306/seatunnel"\n        user = st_user\n        password = seatunnel\n        generate_sink_sql = true\n        database = seatunnel\n        table = jdbc_sink\n        primary_keys = ["id"]\n    }\n}\n')))}p.isMDXComponent=!0}}]);