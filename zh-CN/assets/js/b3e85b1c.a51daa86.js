"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[40228],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=r.createContext({}),p=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=p(e.components);return r.createElement(g.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,c=u["".concat(g,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(c,i(i({ref:n},y),{},{components:t})):r.createElement(c,i({ref:n},y))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={},i="\u8fc7\u6ee4\u5668",o={unversionedId:"transform-v2/filter",id:"version-2.3.9/transform-v2/filter",title:"\u8fc7\u6ee4\u5668",description:"\u8fc7\u6ee4\u5668\u8f6c\u6362\u63d2\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/transform-v2/filter.md",sourceDirName:"transform-v2",slug:"/transform-v2/filter",permalink:"/zh-CN/docs/2.3.9/transform-v2/filter",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/transform-v2/filter.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"\u884c\u7c7b\u578b\u8fc7\u6ee4",permalink:"/zh-CN/docs/2.3.9/transform-v2/filter-rowkind"},next:{title:"JsonPath",permalink:"/zh-CN/docs/2.3.9/transform-v2/jsonpath"}},g={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"include_fields array",id:"include_fields-array",level:3},{value:"exclude_fields array",id:"exclude_fields-array",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u66f4\u65b0\u65e5\u5fd7",id:"\u66f4\u65b0\u65e5\u5fd7",level:2},{value:"\u65b0\u7248\u672c",id:"\u65b0\u7248\u672c",level:3}],y={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u8fc7\u6ee4\u5668"},"\u8fc7\u6ee4\u5668"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u8fc7\u6ee4\u5668\u8f6c\u6362\u63d2\u4ef6")),(0,a.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"\u8fc7\u6ee4\u5b57\u6bb5"),(0,a.yg)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"include_fields"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"exclude_fields"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("h3",{id:"include_fields-array"},"include_fields ","[array]"),(0,a.yg)("p",null,"\u9700\u8981\u4fdd\u7559\u7684\u5b57\u6bb5\u5217\u8868\u3002\u4e0d\u5728\u5217\u8868\u4e2d\u7684\u5b57\u6bb5\u5c06\u88ab\u5220\u9664\u3002"),(0,a.yg)("h3",{id:"exclude_fields-array"},"exclude_fields ","[array]"),(0,a.yg)("p",null,"\u9700\u8981\u5220\u9664\u7684\u5b57\u6bb5\u5217\u8868\u3002\u4e0d\u5728\u5217\u8868\u4e2d\u7684\u5b57\u6bb5\u5c06\u88ab\u4fdd\u7559\u3002"),(0,a.yg)("p",null,"\u6ce8\u610f\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"include_fields")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"exclude_fields")," \u4e24\u4e2a\u5c5e\u6027\u4e2d\uff0c\u5fc5\u987b\u8bbe\u7f6e\u4e00\u4e2a\u4e14\u53ea\u80fd\u8bbe\u7f6e\u4e00\u4e2a"),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"\u8f6c\u6362\u63d2\u4ef6\u7684\u5e38\u89c1\u53c2\u6570, \u8bf7\u53c2\u8003  ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/transform-v2/common-options"},"Transform Plugin")," \u4e86\u89e3\u8be6\u60c5"),(0,a.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.yg)("p",null,"\u6e90\u7aef\u6570\u636e\u8bfb\u53d6\u7684\u8868\u683c\u5982\u4e0b\uff1a"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"age"),(0,a.yg)("th",{parentName:"tr",align:null},"card"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")))),(0,a.yg)("p",null,"\u6211\u4eec\u60f3\u8981\u4fdd\u7559\u5b57\u6bb5 ",(0,a.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"card"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u8fd9\u6837\u6dfb\u52a0 ",(0,a.yg)("inlineCode",{parentName:"p"},"Filter")," \u8f6c\u6362:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'transform {\n  Filter {\n    plugin_input = "fake"\n    plugin_output = "fake1"\n    include_fields = [name, card]\n  }\n}\n')),(0,a.yg)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5220\u9664\u5b57\u6bb5 ",(0,a.yg)("inlineCode",{parentName:"p"},"age")," \u6765\u5b9e\u73b0\uff0c \u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"Filter")," \u8f6c\u6362\uff0c\u5e76\u8bbe\u7f6eexclude_fields\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'transform {\n  Filter {\n    plugin_input = "fake"\n    plugin_output = "fake1"\n    exclude_fields = [age]\n  }\n}\n')),(0,a.yg)("p",null,"\u90a3\u4e48\u7ed3\u679c\u8868 ",(0,a.yg)("inlineCode",{parentName:"p"},"fake1")," \u4e2d\u7684\u6570\u636e\u5c06\u4f1a\u50cf\u8fd9\u6837\uff1a"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"card"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"123")))),(0,a.yg)("h2",{id:"\u66f4\u65b0\u65e5\u5fd7"},"\u66f4\u65b0\u65e5\u5fd7"),(0,a.yg)("h3",{id:"\u65b0\u7248\u672c"},"\u65b0\u7248\u672c"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6dfb\u52a0\u8fc7\u6ee4\u8f6c\u5668\u6362\u8fde\u63a5\u5668")))}d.isMDXComponent=!0}}]);