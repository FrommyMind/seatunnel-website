"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[42264,2306],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,d=p["".concat(c,".").concat(u)]||p[u]||g[u]||o;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(58168),r=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"connector-v2/changelog/connector-amazonsqs",id:"connector-v2/changelog/connector-amazonsqs",title:"connector-amazonsqs",description:"Change Log",source:"@site/docs/connector-v2/changelog/connector-amazonsqs.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-amazonsqs",permalink:"/docs/connector-v2/changelog/connector-amazonsqs",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/changelog/connector-amazonsqs.md",tags:[],version:"current",frontMatter:{}},c={},m=[],s={toc:m},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," restruct connector common options (#8634)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f3499a6eeb"},"https://github.com/apache/seatunnel/commit/f3499a6eeb")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[improve]"," amazon sqs connector update (#8602)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c747e02a98"},"https://github.com/apache/seatunnel/commit/c747e02a98")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Kafka]"," Support multi-table source read  (#5992)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/60104602d1"},"https://github.com/apache/seatunnel/commit/60104602d1")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove use ",(0,r.yg)("inlineCode",{parentName:"td"},"SeaTunnelSink::getConsumedType")," method and mark it as deprecated (#5755)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8de7408100"},"https://github.com/apache/seatunnel/commit/8de7408100")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove all useless ",(0,r.yg)("inlineCode",{parentName:"td"},"prepare"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"getProducedType")," method (#5741)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/ed94fffbb9"},"https://github.com/apache/seatunnel/commit/ed94fffbb9")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Change ",(0,r.yg)("inlineCode",{parentName:"td"},"amazonsqs")," to ",(0,r.yg)("inlineCode",{parentName:"td"},"AmazonSqs")," as connector identifier (#5742)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/245705d0f7"},"https://github.com/apache/seatunnel/commit/245705d0f7")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Add connector amazonsqs (#5367)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/7f75a8eafd"},"https://github.com/apache/seatunnel/commit/7f75a8eafd")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4"))))))}g.isMDXComponent=!0},90414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=n(58168),r=(n(96540),n(15680)),o=n(43663);const l={},i="AmazonSqs",c={unversionedId:"connector-v2/source/AmazonSqs",id:"connector-v2/source/AmazonSqs",title:"AmazonSqs",description:"AmazonSqs source connector",source:"@site/docs/connector-v2/source/AmazonSqs.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/AmazonSqs",permalink:"/docs/connector-v2/source/AmazonSqs",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/source/AmazonSqs.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"AmazonDynamoDB",permalink:"/docs/connector-v2/source/AmazonDynamoDB"},next:{title:"Cassandra",permalink:"/docs/connector-v2/source/Cassandra"}},m={},s=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Changelog",id:"changelog",level:2}],p={toc:s},g="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"amazonsqs"},"AmazonSqs"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"AmazonSqs source connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read data from Amazon SQS."),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The Queue URL to read from Amazon SQS.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"region"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The AWS region for the SQS service")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The structure of the data, including field names and field types.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},'Data format. The default format is json. Optional text format, canal-json and debezium-json.If you use json or text format. The default field separator is ", ". If you customize the delimiter, add the "field_delimiter" option.If you use canal format, please refer to ',(0,r.yg)("a",{parentName:"td",href:"/docs/connector-v2/formats/canal-json"},"canal-json")," for details.If you use debezium format, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/connector-v2/formats/debezium-json"},"debezium-json")," for details.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format_error_handle_way"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"fail"),(0,r.yg)("td",{parentName:"tr",align:null},"The processing method of data format error. The default value is fail, and the optional value is (fail, skip). When fail is selected, data format error will block and an exception will be thrown. When skip is selected, data format error will skip this line data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},","),(0,r.yg)("td",{parentName:"tr",align:null},"Customize the field delimiter for data format.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/connector-v2/source-common-options"},"Source Common Options")," for details")))),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n  AmazonSqs {\n    url = "http://127.0.0.1:4566"\n    region = "us-east-1"\n    format = text\n    field_delimiter = "#"\n    schema = {\n      fields {\n        artist = string\n        c_map = "map<string, array<int>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\ntransform {\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/transform-v2/sql\n}\n\nsink {\n    Console {}\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)(o.default,{mdxType:"ChangeLog"}))}u.isMDXComponent=!0}}]);