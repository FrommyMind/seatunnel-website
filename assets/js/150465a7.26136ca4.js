"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[65638],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,u=m["".concat(g,".").concat(s)]||m[s]||d[s]||l;return n?a.createElement(u,i(i({ref:t},y),{},{components:n})):a.createElement(u,i({ref:t},y))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="Copy",o={unversionedId:"transform-v2/copy",id:"version-2.3.1/transform-v2/copy",title:"Copy",description:"Copy transform plugin",source:"@site/versioned_docs/version-2.3.1/transform-v2/copy.md",sourceDirName:"transform-v2",slug:"/transform-v2/copy",permalink:"/docs/2.3.1/transform-v2/copy",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.1/transform-v2/copy.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"Transform Common Options",permalink:"/docs/2.3.1/transform-v2/common-options"},next:{title:"FieldMapper",permalink:"/docs/2.3.1/transform-v2/field-mapper"}},g={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"src_field string",id:"src_field-string",level:3},{value:"dest_field string",id:"dest_field-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],y={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"copy"},"Copy"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Copy transform plugin")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Copy a field to a new field."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"src_field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dest_field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"src_field-string"},"src_field ","[string]"),(0,r.yg)("p",null,"Src field name you want to copy"),(0,r.yg)("h3",{id:"dest_field-string"},"dest_field ","[string]"),(0,r.yg)("p",null,"This dest field name"),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/transform-v2/common-options"},"Transform Plugin")," for details"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"The data read from source is a table like this:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"card"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")))),(0,r.yg)("p",null,"We want copy field ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," to a new field ",(0,r.yg)("inlineCode",{parentName:"p"},"name1"),", we can add ",(0,r.yg)("inlineCode",{parentName:"p"},"Copy")," Transform like this"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'transform {\n  Copy {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    src_field = "name"\n    dest_field = "name1"\n  }\n}\n')),(0,r.yg)("p",null,"Then the data in result table ",(0,r.yg)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"card"),(0,r.yg)("th",{parentName:"tr",align:null},"name1"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"May Ding")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom")))),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"new-version"},"new version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Copy Transform Connector")))}d.isMDXComponent=!0}}]);