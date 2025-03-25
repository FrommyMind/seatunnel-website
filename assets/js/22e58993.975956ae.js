"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[14116],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=s(t),p=r,u=m["".concat(c,".").concat(p)]||m[p]||y[p]||l;return t?a.createElement(u,o(o({ref:n},g),{},{components:t})):a.createElement(u,o({ref:n},g))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={},o="AmazonDynamoDB",i={unversionedId:"connector-v2/source/AmazonDynamoDB",id:"version-2.3.8/connector-v2/source/AmazonDynamoDB",title:"AmazonDynamoDB",description:"AmazonDynamoDB source connector",source:"@site/versioned_docs/version-2.3.8/connector-v2/source/AmazonDynamoDB.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/AmazonDynamoDB",permalink:"/docs/2.3.8/connector-v2/source/AmazonDynamoDB",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.8/connector-v2/source/AmazonDynamoDB.md",tags:[],version:"2.3.8",frontMatter:{},sidebar:"docs",previous:{title:"Source",permalink:"/docs/2.3.8/connector-v2/source"},next:{title:"AmazonSqs",permalink:"/docs/2.3.8/connector-v2/source/AmazonSqs"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"region string",id:"region-string",level:3},{value:"accessKeyId string",id:"accesskeyid-string",level:3},{value:"secretAccessKey string",id:"secretaccesskey-string",level:3},{value:"table string",id:"table-string",level:3},{value:"schema Config",id:"schema-config",level:3},{value:"fields config",id:"fields-config",level:4},{value:"common options",id:"common-options",level:3},{value:"scan_item_limit",id:"scan_item_limit",level:3},{value:"parallel_scan_threads",id:"parallel_scan_threads",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],g={toc:s},m="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"amazondynamodb"},"AmazonDynamoDB"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"AmazonDynamoDB source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read data from Amazon DynamoDB."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.8/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"region"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"access_key_id"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"secret_access_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_item_limit"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parallel_scan_threads"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"url-string"},"url ","[string]"),(0,r.yg)("p",null,"The URL to read to Amazon Dynamodb."),(0,r.yg)("h3",{id:"region-string"},"region ","[string]"),(0,r.yg)("p",null,"The region of Amazon Dynamodb."),(0,r.yg)("h3",{id:"accesskeyid-string"},"accessKeyId ","[string]"),(0,r.yg)("p",null,"The access id of Amazon DynamoDB."),(0,r.yg)("h3",{id:"secretaccesskey-string"},"secretAccessKey ","[string]"),(0,r.yg)("p",null,"The access secret of Amazon DynamoDB."),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"The table of Amazon DynamoDB."),(0,r.yg)("h3",{id:"schema-config"},"schema ","[Config]"),(0,r.yg)("h4",{id:"fields-config"},"fields ","[config]"),(0,r.yg)("p",null,"Amazon Dynamodb is a NOSQL database service of support keys-value storage and document data structure,there is no way to get the data type.Therefore, we must configure schema."),(0,r.yg)("p",null,"such as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"schema {\n  fields {\n    id = int\n    key_aa = string\n    key_bb = string\n  }\n}\n")),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Source Plugin common parameters, refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.8/connector-v2/source-common-options"},"Source Plugin")," for details"),(0,r.yg)("h3",{id:"scan_item_limit"},"scan_item_limit"),(0,r.yg)("p",null,"number of item each scan request should return"),(0,r.yg)("h3",{id:"parallel_scan_threads"},"parallel_scan_threads"),(0,r.yg)("p",null,"number of logical segments for parallel scan"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'Amazondynamodb {\n  url = "http://127.0.0.1:8000"\n  region = "us-east-1"\n  accessKeyId = "dummy-key"\n  secretAccessKey = "dummy-secret"\n  table = "TableName"\n  schema = {\n    fields {\n      artist = string\n      c_map = "map<string, array<int>>"\n      c_array = "array<int>"\n      c_string = string\n      c_boolean = boolean\n      c_tinyint = tinyint\n      c_smallint = smallint\n      c_int = int\n      c_bigint = bigint\n      c_float = float\n      c_double = double\n      c_decimal = "decimal(30, 8)"\n      c_null = "null"\n      c_bytes = bytes\n      c_date = date\n      c_timestamp = timestamp\n    }\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Amazon DynamoDB Source Connector"),(0,r.yg)("li",{parentName:"ul"},"Add source  split to Amazondynamodb Connectors")))}y.isMDXComponent=!0}}]);