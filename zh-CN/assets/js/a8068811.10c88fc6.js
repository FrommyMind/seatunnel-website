"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[64516],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),d=u(a),o=r,m=d["".concat(p,".").concat(o)]||d[o]||y[o]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=o;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[d]="string"==typeof e?e:r,i[1]=g;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},23711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const l={},i=void 0,g={unversionedId:"configuration/filter-plugins/Kv",id:"version-1.x/configuration/filter-plugins/Kv",title:"Kv",description:"Filter plugin : Kv",source:"@site/versioned_docs/version-1.x/configuration/filter-plugins/Kv.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Kv",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Kv",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugins/Kv.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Json",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Json"},next:{title:"Lowercase",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Lowercase"}},p={},u=[{value:"Filter plugin : Kv",id:"filter-plugin--kv",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"default_values array",id:"default_values-array",level:5},{value:"exclude_fields array",id:"exclude_fields-array",level:5},{value:"field_prefix string",id:"field_prefix-string",level:5},{value:"field_split string",id:"field_split-string",level:5},{value:"include_fields array",id:"include_fields-array",level:5},{value:"source_field string",id:"source_field-string",level:5},{value:"target_field string",id:"target_field-string",level:5},{value:"value_split string",id:"value_split-string",level:5},{value:"Examples",id:"examples",level:3}],s={toc:u},d="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"filter-plugin--kv"},"Filter plugin : Kv"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,r.yg)("li",{parentName:"ul"},"Homepage: ",(0,r.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,r.yg)("li",{parentName:"ul"},"Version: 1.0.0")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Extract all Key-Values of the specified string field with configured ",(0,r.yg)("inlineCode",{parentName:"p"},"field_split"),", which are often used to parse the url parameter."),(0,r.yg)("h3",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#default_values-array"},"default_values")),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"[]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#exclude_fields-array"},"exclude_fields")),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"[]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#field_prefix-string"},"field_prefix")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#field_split-string"},"field_split")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"&")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#include_fields-array"},"include_fields")),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"[]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"raw_message")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#target_field-string"},"target_field")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"_","_","root","_","_")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#value_split-string"},"value_split")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"=")))),(0,r.yg)("h5",{id:"default_values-array"},"default_values ","[array]"),(0,r.yg)("p",null,"Default values can be set by ",(0,r.yg)("inlineCode",{parentName:"p"},"default_values")," by ",(0,r.yg)("inlineCode",{parentName:"p"},"key=defalut_value"),"(key and value are separated by ",(0,r.yg)("inlineCode",{parentName:"p"},"="),")."),(0,r.yg)("p",null,"Multiple default values are specified as follows: ",(0,r.yg)("inlineCode",{parentName:"p"},'default_values = ["mykey1=123", "mykey2=seatunnel"]')),(0,r.yg)("h5",{id:"exclude_fields-array"},"exclude_fields ","[array]"),(0,r.yg)("p",null,"Fields in the ",(0,r.yg)("inlineCode",{parentName:"p"},"exclude_fields")," will be abandoned."),(0,r.yg)("h5",{id:"field_prefix-string"},"field_prefix ","[string]"),(0,r.yg)("p",null,"A string to prepend to all of the extracted keys."),(0,r.yg)("h5",{id:"field_split-string"},"field_split ","[string]"),(0,r.yg)("p",null,"A string of characters to use as single-character field delimiters for parsing key-value pairs."),(0,r.yg)("h5",{id:"include_fields-array"},"include_fields ","[array]"),(0,r.yg)("p",null,"An array specifying the parsed keys which should be added to the event."),(0,r.yg)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,r.yg)("p",null,"Source field."),(0,r.yg)("h5",{id:"target_field-string"},"target_field ","[string]"),(0,r.yg)("p",null,"All extracted fields will be put into ",(0,r.yg)("inlineCode",{parentName:"p"},"target_field"),"."),(0,r.yg)("h5",{id:"value_split-string"},"value_split ","[string]"),(0,r.yg)("p",null,"A non-empty string of characters to use as single-character value delimiters for parsing key-value pairs."),(0,r.yg)("h3",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"With ",(0,r.yg)("inlineCode",{parentName:"p"},"target_field")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'kv {\n    source_field = "message"\n    target_field = "kv_map"\n    field_split = "&"\n    value_split = "="\n}\n')),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Input"))),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"+-----------------+\n|message         |\n+-----------------+\n|name=ricky&age=23|\n|name=gary&age=28 |\n+-----------------+\n")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Output"))),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"+-----------------+-----------------------------+\n|message          |kv_map                    |\n+-----------------+-----------------------------+\n|name=ricky&age=23|Map(name -> ricky, age -> 23)|\n|name=gary&age=28 |Map(name -> gary, age -> 28) |\n+-----------------+-----------------------------+\n")))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Without ",(0,r.yg)("inlineCode",{parentName:"p"},"target_field")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'kv {\n        source_field = "message"\n        field_split = "&"\n        value_split = "="\n    }\n')),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Input"))),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"+-----------------+\n|message         |\n+-----------------+\n|name=ricky&age=23|\n|name=gary&age=28 |\n+-----------------+\n")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Output"))),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"+-----------------+---+-----+\n|message         |age|name |\n+-----------------+---+-----+\n|name=ricky&age=23|23 |ricky|\n|name=gary&age=28 |28 |gary |\n+-----------------+---+-----+\n\n")))))}y.isMDXComponent=!0}}]);