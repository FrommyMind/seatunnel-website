"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[32708],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(t),g=r,d=c["".concat(l,".").concat(g)]||c[g]||m[g]||a;return t?o.createElement(d,i(i({ref:n},s),{},{components:t})):o.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},76353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=t(58168),r=(t(96540),t(15680));const a={sidebar_position:4},i="Sink Common Options",p={unversionedId:"connector-v2/sink-common-options",id:"connector-v2/sink-common-options",title:"Sink Common Options",description:"Common parameters of sink connectors",source:"@site/docs/connector-v2/sink-common-options.md",sourceDirName:"connector-v2",slug:"/connector-v2/sink-common-options",permalink:"/docs/connector-v2/sink-common-options",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/sink-common-options.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Source Common Options",permalink:"/docs/connector-v2/source-common-options"},next:{title:"Error Quick Reference Manual",permalink:"/docs/connector-v2/Error-Quick-Reference-Manual"}},l={},u=[{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3}],s={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"sink-common-options"},"Sink Common Options"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Common parameters of sink connectors")),(0,r.yg)("admonition",{title:"warn",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The old configuration name ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is deprecated, please migrate to the new name ",(0,r.yg)("inlineCode",{parentName:"p"},"plugin_input")," as soon as possible.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"plugin_input"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"When ",(0,r.yg)("inlineCode",{parentName:"td"},"plugin_input")," is not specified, the current plug-in processes the data set ",(0,r.yg)("inlineCode",{parentName:"td"},"dataset")," output by the previous plugin in the configuration file ",(0,r.yg)("br",null)," When ",(0,r.yg)("inlineCode",{parentName:"td"},"plugin_input")," is specified, the current plug-in is processing the data set corresponding to this parameter.")))),(0,r.yg)("h1",{id:"important-note"},"Important note"),(0,r.yg)("p",null,"When the job configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"plugin_input")," you must set the ",(0,r.yg)("inlineCode",{parentName:"p"},"plugin_output")," parameter"),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This is the process of passing a data source through two transforms and returning two different pipiles to different sinks")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      parallelism = 2\n      plugin_output = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    Filter {\n      plugin_input = "fake"\n      fields = [name]\n      plugin_output = "fake_name"\n    }\n    Filter {\n      plugin_input = "fake"\n      fields = [age]\n      plugin_output = "fake_age"\n    }\n}\n\nsink {\n    Console {\n      plugin_input = "fake_name"\n    }\n    Console {\n      plugin_input = "fake_age"\n    }\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If the job only have one source and one(or zero) transform and one sink, You do not need to specify ",(0,r.yg)("inlineCode",{parentName:"p"},"plugin_input")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"plugin_output")," for connector.\nIf the number of any operator in source, transform and sink is greater than 1, you must specify the ",(0,r.yg)("inlineCode",{parentName:"p"},"plugin_input")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"plugin_output")," for each connector in the job.")))}m.isMDXComponent=!0}}]);