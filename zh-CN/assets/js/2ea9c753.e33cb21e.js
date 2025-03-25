"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1676],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(n),d=l,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(58168),l=(n(96540),n(15680));const a={},i="Nulltf",o={unversionedId:"transform/nulltf",id:"version-2.1.3/transform/nulltf",title:"Nulltf",description:"Description",source:"@site/versioned_docs/version-2.1.3/transform/nulltf.md",sourceDirName:"transform",slug:"/transform/nulltf",permalink:"/zh-CN/docs/2.1.3/transform/nulltf",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.3/transform/nulltf.md",tags:[],version:"2.1.3",frontMatter:{},sidebar:"docs",previous:{title:"NullRate",permalink:"/zh-CN/docs/2.1.3/transform/nullRate"},next:{title:"Replace",permalink:"/zh-CN/docs/2.1.3/transform/replace"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"fields list",id:"fields-list",level:3},{value:"Examples",id:"examples",level:2}],p={toc:u},f="wrapper";function c(e){let{components:t,...n}=e;return(0,l.yg)(f,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"nulltf"},"Nulltf"),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"set default value for null field"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"This transform only supported by engine Spark.")),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fields"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"fields-list"},"fields ","[list]"),(0,l.yg)("p",null,'A list of fields whose default value will be set.\nThe default value of the field can be set in the form of "field:value", If no set, the default value will be set according to the field type.'),(0,l.yg)("h2",{id:"examples"},"Examples"),(0,l.yg)("p",null,"the configuration"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'  nulltf {\n      fields {\n          name: "",\n          price: 0,\n          num: 100,\n          flag: false,\n          dt_timestamp: "2022-05-18 13:51:40.603",\n          dt_date: "2022-05-19"\n      }\n  }\n')),(0,l.yg)("p",null,"before use nulltf transform"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"+-----+-----+----+-----+--------------------+----------+\n| name|price| num| flag|        dt_timestamp|   dt_date|\n+-----+-----+----+-----+--------------------+----------+\n|\u540d\u79f01| 22.5| 100|false|2022-05-20 14:34:...|2022-05-20|\n| null| 22.5| 100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01| null| 100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01| 22.5|null|false|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5| 100| null|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5| 100|false|                null|2022-05-20|\n|\u540d\u79f01| 22.5| 100|false|2022-05-20 14:37:...|      null|\n+-----+-----+----+-----+--------------------+----------+\n")),(0,l.yg)("p",null,"after use nulltf transform"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"+-----+-----+----+-----+--------------------+----------+\n| name|price| num| flag|        dt_timestamp|   dt_date|\n+-----+-----+----+-----+--------------------+----------+\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:34:...|2022-05-20|\n|     | 22.5|100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01|  0.0|100|false|2022-05-20 14:35:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:36:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-18 13:51:...|2022-05-20|\n|\u540d\u79f01| 22.5|100|false|2022-05-20 14:37:...|2022-05-19|\n+-----+-----+---+-----+--------------------+----------+\n")))}c.isMDXComponent=!0}}]);