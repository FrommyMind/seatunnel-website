"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[65250],{15680:(t,e,a)=>{a.d(e,{xA:()=>p,yg:()=>u});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),y=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},p=function(t){var e=y(t.components);return n.createElement(o.Provider,{value:e},t.children)},i="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),i=y(a),m=r,u=i["".concat(o,".").concat(m)]||i[m]||N[m]||l;return a?n.createElement(u,g(g({ref:e},p),{},{components:a})):n.createElement(u,g({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=m;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[i]="string"==typeof t?t:r,g[1]=d;for(var y=2;y<l;y++)g[y]=a[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4687:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>g,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>y});var n=a(58168),r=(a(96540),a(15680));const l={},g="Connector Release Status",d={unversionedId:"Connector-v2-release-state",id:"version-2.3.4/Connector-v2-release-state",title:"Connector Release Status",description:"SeaTunnel uses a grading system for connectors to help you understand what to expect from a connector:",source:"@site/versioned_docs/version-2.3.4/Connector-v2-release-state.md",sourceDirName:".",slug:"/Connector-v2-release-state",permalink:"/zh-CN/docs/2.3.4/Connector-v2-release-state",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.4/Connector-v2-release-state.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"JobEnvConfig",permalink:"/zh-CN/docs/2.3.4/concept/JobEnvConfig"},next:{title:"Source",permalink:"/zh-CN/docs/2.3.4/category/source-v2"}},o={},y=[{value:"Connector V2 Health",id:"connector-v2-health",level:2}],p={toc:y},i="wrapper";function N(t){let{components:e,...a}=t;return(0,r.yg)(i,(0,n.A)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"connector-release-status"},"Connector Release Status"),(0,r.yg)("p",null,"SeaTunnel uses a grading system for connectors to help you understand what to expect from a connector:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("th",{parentName:"tr",align:null},"Beta"),(0,r.yg)("th",{parentName:"tr",align:null},"General Availability (GA)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Expectations"),(0,r.yg)("td",{parentName:"tr",align:null},"An alpha connector signifies a connector under development and helps SeaTunnel gather early feedback and issues reported by early adopters. We strongly discourage using alpha releases for production use cases"),(0,r.yg)("td",{parentName:"tr",align:null},"A beta connector is considered stable and reliable with no backwards incompatible changes but has not been validated by a broader group of users. We expect to find and fix a few issues and bugs in the release before it\u2019s ready for GA."),(0,r.yg)("td",{parentName:"tr",align:null},"A generally available connector has been deemed ready for use in a production environment and is officially supported by SeaTunnel. Its documentation is considered sufficient to support widespread adoption.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Production Readiness"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")))),(0,r.yg)("h2",{id:"connector-v2-health"},"Connector V2 Health"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Connector Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Status"),(0,r.yg)("th",{parentName:"tr",align:null},"Support Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/AmazonDynamoDB"},"AmazonDynamoDB")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/AmazonDynamoDB"},"AmazonDynamoDB")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Assert"},"Asset")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Cassandra"},"Cassandra")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Cassandra"},"Cassandra")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Clickhouse"},"ClickHouse")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Clickhouse"},"ClickHouse")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/ClickhouseFile"},"ClickHouseFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Console"},"Console")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Datahub"},"DataHub")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Doris"},"Doris")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/DingTalk"},"DingTalk")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Elasticsearch"},"Elasticsearch")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Email"},"Email")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Enterprise-WeChat"},"Enterprise WeChat")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Feishu"},"FeiShu")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/FakeSource"},"Fake")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/FtpFile"},"FtpFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Greenplum"},"Greenplum")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Greenplum"},"Greenplum")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/HdfsFile"},"HdfsFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/HdfsFile"},"HdfsFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Hive"},"Hive")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Hive"},"Hive")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Http"},"Http")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Http"},"Http")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Hudi"},"Hudi")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Iceberg"},"Iceberg")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/InfluxDB"},"InfluxDB")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/InfluxDB"},"InfluxDB")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/IoTDB"},"IoTDB")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/IoTDB"},"IoTDB")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Jdbc"},"Jdbc")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Jdbc"},"Jdbc")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/kafka"},"Kafka")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Kafka"},"Kafka")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Kudu"},"Kudu")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Kudu"},"Kudu")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Lemlist"},"Lemlist")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/LocalFile"},"LocalFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/LocalFile"},"LocalFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Maxcompute"},"Maxcompute")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Maxcompute"},"Maxcompute")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/MongoDB"},"MongoDB")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/MongoDB"},"MongoDB")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/MyHours"},"MyHours")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/MySQL-CDC"},"MySqlCDC")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Neo4j"},"Neo4j")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Notion"},"Notion")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/OneSignal"},"OneSignal")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/OpenMldb"},"OpenMldb")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/OssFile"},"OssFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/OssFile"},"OssFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Phoenix"},"Phoenix")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Phoenix"},"Phoenix")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Pulsar"},"Pulsar")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Rabbitmq"},"RabbitMQ")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Rabbitmq"},"RabbitMQ")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Redis"},"Redis")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Redis"},"Redis")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/S3-Redshift"},"S3Redshift")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/S3File"},"S3File")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/S3File"},"S3File")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"GA"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Sentry"},"Sentry")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/SftpFile"},"SFtpFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/SftpFile"},"SFtpFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Slack"},"Slack")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Socket"},"Socket")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/Socket"},"Socket")),(0,r.yg)("td",{parentName:"tr",align:null},"Source"),(0,r.yg)("td",{parentName:"tr",align:null},"Beta"),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/StarRocks"},"StarRocks")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/Tablestore"},"Tablestore")),(0,r.yg)("td",{parentName:"tr",align:null},"Sink"),(0,r.yg)("td",{parentName:"tr",align:null},"Alpha"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")))))}N.isMDXComponent=!0}}]);