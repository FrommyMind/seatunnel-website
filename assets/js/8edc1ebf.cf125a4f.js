"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[20019],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=s(a),u=r,m=y["".concat(p,".").concat(u)]||y[u]||d[u]||l;return a?n.createElement(m,i(i({ref:t},g),{},{components:a})):n.createElement(m,i({ref:t},g))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const l={},i="Redis",o={unversionedId:"connector-v2/sink/Redis",id:"version-2.2.0-beta/connector-v2/sink/Redis",title:"Redis",description:"Redis sink connector",source:"@site/versioned_docs/version-2.2.0-beta/connector-v2/sink/Redis.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Redis",permalink:"/docs/2.2.0-beta/connector-v2/sink/Redis",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector-v2/sink/Redis.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Phoenix",permalink:"/docs/2.2.0-beta/connector-v2/sink/Phoenix"},next:{title:"Sentry",permalink:"/docs/2.2.0-beta/connector-v2/sink/Sentry"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"key string",id:"key-string",level:3},{value:"data_type string",id:"data_type-string",level:3},{value:"auth String",id:"auth-string",level:3},{value:"format String",id:"format-string",level:3},{value:"Example",id:"example",level:2}],g={toc:s},y="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"redis"},"Redis"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Redis sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to write data to Redis."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"schema projection"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auth"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"json")))),(0,r.yg)("h3",{id:"host-string"},"host ","[string]"),(0,r.yg)("p",null,"Redis host"),(0,r.yg)("h3",{id:"port-int"},"port ","[int]"),(0,r.yg)("p",null,"Redis port"),(0,r.yg)("h3",{id:"key-string"},"key ","[string]"),(0,r.yg)("p",null,"The value of key you want to write to redis. "),(0,r.yg)("p",null,"For example, if you want to use value of a field from upstream data as key, you can assign it to the field name."),(0,r.yg)("p",null,"Upstream data is the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"data"),(0,r.yg)("th",{parentName:"tr",align:null},"success"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"200"),(0,r.yg)("td",{parentName:"tr",align:null},"get success"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"500"),(0,r.yg)("td",{parentName:"tr",align:null},"internal error"),(0,r.yg)("td",{parentName:"tr",align:null},"false")))),(0,r.yg)("p",null,"If you assign field name to ",(0,r.yg)("inlineCode",{parentName:"p"},"code")," and data_type to ",(0,r.yg)("inlineCode",{parentName:"p"},"key"),", two data will be written to redis: "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"200 -> {code: 200, message: true, data: get success}")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"500 -> {code: 500, message: false, data: internal error}"))),(0,r.yg)("p",null,"If you assign field name to ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," and data_type to ",(0,r.yg)("inlineCode",{parentName:"p"},"key"),", only one data will be written to redis because ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," is not existed in upstream data's fields:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"value -> {code: 500, message: false, data: internal error}")," ")),(0,r.yg)("p",null,"Please see the data_type section for specific writing rules."),(0,r.yg)("p",null,"Of course, the format of the data written here I just take json as an example, the specific or user-configured ",(0,r.yg)("inlineCode",{parentName:"p"},"format")," prevails."),(0,r.yg)("h3",{id:"data_type-string"},"data_type ","[string]"),(0,r.yg)("p",null,"Redis data types, support ",(0,r.yg)("inlineCode",{parentName:"p"},"key")," ",(0,r.yg)("inlineCode",{parentName:"p"},"hash")," ",(0,r.yg)("inlineCode",{parentName:"p"},"list")," ",(0,r.yg)("inlineCode",{parentName:"p"},"set")," ",(0,r.yg)("inlineCode",{parentName:"p"},"zset")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"key"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Each data from upstream will be updated to the configured key, which means the later data will overwrite the earlier data, and only the last data will be stored in the key."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"hash"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Each data from upstream will be split according to the field and written to the hash key, also the data after will overwrite the data before."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"list"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Each data from upstream will be added to the configured list key."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"set"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Each data from upstream will be added to the configured set key."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"zset"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Each data from upstream will be added to the configured zset key with a weight of 1. So the order of data in zset is based on the order of data consumption.")))),(0,r.yg)("h3",{id:"auth-string"},"auth ","[String]"),(0,r.yg)("p",null,"Redis authentication password, you need it when you connect to an encrypted cluster"),(0,r.yg)("h3",{id:"format-string"},"format ","[String]"),(0,r.yg)("p",null,"The format of upstream data, now only support ",(0,r.yg)("inlineCode",{parentName:"p"},"json"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"text")," will be supported later, default ",(0,r.yg)("inlineCode",{parentName:"p"},"json"),"."),(0,r.yg)("p",null,"When you assign format is ",(0,r.yg)("inlineCode",{parentName:"p"},"json"),", for example:"),(0,r.yg)("p",null,"Upstream data is the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"data"),(0,r.yg)("th",{parentName:"tr",align:null},"success"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"200"),(0,r.yg)("td",{parentName:"tr",align:null},"get success"),(0,r.yg)("td",{parentName:"tr",align:null},"true")))),(0,r.yg)("p",null,"Connector will generate data as the following and write it to redis:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  "true"}\n\n')),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"simple:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},"  Redis {\n    host = localhost\n    port = 6379\n    key = age\n    data_type = list\n  }\n")))}d.isMDXComponent=!0}}]);