"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[98119],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(n),d=a,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const l={},i="Filter plugin",o={unversionedId:"configuration/filter-plugin",id:"version-1.x/configuration/filter-plugin",title:"Filter plugin",description:"Filter plugin general parameters",source:"@site/versioned_docs/version-1.x/configuration/filter-plugin.md",sourceDirName:"configuration",slug:"/configuration/filter-plugin",permalink:"/zh-CN/docs/1.x/configuration/filter-plugin",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugin.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Filter-Plugin",permalink:"/zh-CN/docs/1.x/category/filter"},next:{title:"Add",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Add"}},p={},s=[{value:"Filter plugin general parameters",id:"filter-plugin-general-parameters",level:3},{value:"source_table_name string",id:"source_table_name-string",level:5},{value:"result_table_name string",id:"result_table_name-string",level:5},{value:"Usage example",id:"usage-example",level:3}],u={toc:s},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"filter-plugin"},"Filter plugin"),(0,a.yg)("h3",{id:"filter-plugin-general-parameters"},"Filter plugin general parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#source_table_name-string"},"source_table_name")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#result_table_name-string"},"result_table_name")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h5",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plugin processes the dataset output by the previous plugin in the configuration file;"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plugin processes the dataset corresponding to this parameter."),(0,a.yg)("h5",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name is not specified"),", the data processed by this plugin will not be registered as a dataset that can be directly accessed by other plugins, or called a temporary table;"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plugin will be registered as a dataset that can be directly accessed by other plugins, or called a temporary table. The dataset registered here, other plugins can directly access by specifying ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name"),"."),(0,a.yg)("h3",{id:"usage-example"},"Usage example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'split {\n    source_table_name = "view_table_1"\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n    result_table_name = "view_table_2"\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Split")," plugin will process the data in the temporary table ",(0,a.yg)("inlineCode",{parentName:"p"},"view_table_1")," and register the processing result as a temporary table named ",(0,a.yg)("inlineCode",{parentName:"p"},"view_table_2"),", this temporary table can be specified by any subsequent ",(0,a.yg)("inlineCode",{parentName:"p"},"Filter")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"Output")," plugins ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is used.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'split {\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Without ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," configured, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Split")," plugin will read the dataset passed by the previous plugin and pass it to the next plugin.")))}c.isMDXComponent=!0}}]);