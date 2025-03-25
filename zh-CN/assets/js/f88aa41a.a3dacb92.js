"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[44581],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,m=u["".concat(s,".").concat(y)]||u[y]||c[y]||l;return n?r.createElement(m,i(i({ref:t},g),{},{components:n})):r.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},18536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={},i=void 0,o={unversionedId:"configuration/filter-plugins/Sql",id:"version-1.x/configuration/filter-plugins/Sql",title:"Sql",description:"Filter plugin : Sql",source:"@site/versioned_docs/version-1.x/configuration/filter-plugins/Sql.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Sql",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Sql",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugins/Sql.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Split",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Split"},next:{title:"Table",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Table"}},s={},p=[{value:"Filter plugin : Sql",id:"filter-plugin--sql",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"sql string",id:"sql-string",level:5},{value:"table_name string",id:"table_name-string",level:5},{value:"Examples",id:"examples",level:3}],g={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"filter-plugin--sql"},"Filter plugin : Sql"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,a.yg)("li",{parentName:"ul"},"Homepage: ",(0,a.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,a.yg)("li",{parentName:"ul"},"Version: 1.0.0")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Processing Rows using SQL, feel free to use ",(0,a.yg)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/api/sql/"},"Spark UDF"),". "),(0,a.yg)("h3",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#sql-string"},"sql")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#table_name-string"},"table_name")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h5",{id:"sql-string"},"sql ","[string]"),(0,a.yg)("p",null,"SQL content."),(0,a.yg)("h5",{id:"table_name-string"},"table_name ","[string]"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"table")," set, the current batch of events will be registered as a table, named by this ",(0,a.yg)("inlineCode",{parentName:"p"},"table")," setting, on which you can execute sql."),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'sql {\n    sql = "select username, address from user_info",\n    table_name = "user_info"\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Select the ",(0,a.yg)("inlineCode",{parentName:"p"},"username")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"address")," fields, the remaining fields will be removed.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'sql {\n    sql = "select substring(telephone, 0, 10) from user_info",\n    table_name = "user_info"\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Use the ",(0,a.yg)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/api/sql/#substring"},"substring function")," to retrieve a substring on the ",(0,a.yg)("inlineCode",{parentName:"p"},"telephone")," field.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'sql {\n    sql = "select avg(age) from user_info",\n    table_name = "user_info"\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get the aggregation of the average of ",(0,a.yg)("inlineCode",{parentName:"p"},"age")," using the ",(0,a.yg)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/api/sql/#avg"},"avg functions"),".")))}c.isMDXComponent=!0}}]);