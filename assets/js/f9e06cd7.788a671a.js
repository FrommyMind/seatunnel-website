"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[75673],{15680:(t,e,n)=>{n.d(e,{xA:()=>y,yg:()=>s});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=a.createContext({}),p=function(t){var e=a.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},y=function(t){var e=p(t.components);return a.createElement(g.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,g=t.parentName,y=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,s=d["".concat(g,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(s,i(i({ref:e},y),{},{components:n})):a.createElement(s,i({ref:e},y))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var g in e)hasOwnProperty.call(e,g)&&(o[g]=e[g]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48274:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="Qdrant",o={unversionedId:"connector-v2/sink/Qdrant",id:"version-2.3.8/connector-v2/sink/Qdrant",title:"Qdrant",description:"Qdrant Sink Connector",source:"@site/versioned_docs/version-2.3.8/connector-v2/sink/Qdrant.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Qdrant",permalink:"/docs/2.3.8/connector-v2/sink/Qdrant",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.8/connector-v2/sink/Qdrant.md",tags:[],version:"2.3.8",frontMatter:{},sidebar:"docs",previous:{title:"Pulsar",permalink:"/docs/2.3.8/connector-v2/sink/Pulsar"},next:{title:"Rabbitmq",permalink:"/docs/2.3.8/connector-v2/sink/Rabbitmq"}},g={},p=[{value:"Description",id:"description",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Options",id:"options",level:2},{value:"collection_name string",id:"collection_name-string",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"api_key string",id:"api_key-string",level:3},{value:"use_tls bool",id:"use_tls-bool",level:3},{value:"common options",id:"common-options",level:3}],y={toc:p},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.yg)(d,(0,a.A)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"qdrant"},"Qdrant"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Qdrant Sink Connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://qdrant.tech/"},"Qdrant")," is a high-performance vector search engine and vector database."),(0,r.yg)("p",null,"This connector can be used to write data into a Qdrant collection."),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Qdrant Data Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"LIST")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"DENSE_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"DENSE_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT16_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"DENSE_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BFLOAT16_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"DENSE_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SPARSE_FLOAT_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"SPARSE_VECTOR")))),(0,r.yg)("p",null,"The value of the primary key column will be used as point ID in Qdrant. If no primary key is present, a random UUID will be used."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"collection_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"localhost")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"6334")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"use_tls"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"collection_name-string"},"collection_name ","[string]"),(0,r.yg)("p",null,"The name of the Qdrant collection to read data from."),(0,r.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,r.yg)("p",null,"The batch size of each upsert request to Qdrant."),(0,r.yg)("h3",{id:"host-string"},"host ","[string]"),(0,r.yg)("p",null,'The host name of the Qdrant instance. Defaults to "localhost".'),(0,r.yg)("h3",{id:"port-int"},"port ","[int]"),(0,r.yg)("p",null,"The gRPC port of the Qdrant instance."),(0,r.yg)("h3",{id:"api_key-string"},"api_key ","[string]"),(0,r.yg)("p",null,"The API key to use for authentication if set."),(0,r.yg)("h3",{id:"use_tls-bool"},"use_tls ","[bool]"),(0,r.yg)("p",null,"Whether to use TLS(SSL) connection. Required if using Qdrant cloud(https)."),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.8/connector-v2/sink-common-options"},"Source Common Options")," for details."))}u.isMDXComponent=!0}}]);