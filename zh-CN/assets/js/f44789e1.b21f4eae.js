"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[78353],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,c(c({ref:t},s),{},{components:n})):r.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const a={},c="Greenplum",i={unversionedId:"connector-v2/source/Greenplum",id:"version-2.3.4/connector-v2/source/Greenplum",title:"Greenplum",description:"Greenplum source connector",source:"@site/versioned_docs/version-2.3.4/connector-v2/source/Greenplum.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Greenplum",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/Greenplum",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/source/Greenplum.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"GoogleSheets",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/GoogleSheets"},next:{title:"HdfsFile",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/HdfsFile"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"common options",id:"common-options",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"greenplum"},"Greenplum"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Greenplum source connector")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Read Greenplum data through ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.4/connector-v2/source/Jdbc"},"Jdbc connector"),"."),(0,o.yg)("h2",{id:"key-features"},"Key features"),(0,o.yg)("ul",{className:"contains-task-list"},(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"batch")),(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"stream")),(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"exactly-once")),(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"column projection"))),(0,o.yg)("p",null,"supports query SQL and can achieve projection effect."),(0,o.yg)("ul",{className:"contains-task-list"},(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"parallelism")),(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"support user-defined split"))),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Optional jdbc drivers:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"org.postgresql.Driver")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"com.pivotal.jdbc.GreenplumDriver"))),(0,o.yg)("p",{parentName:"admonition"},"Warn: for license compliance, if you use ",(0,o.yg)("inlineCode",{parentName:"p"},"GreenplumDriver")," the have to provide Greenplum JDBC driver yourself, e.g. copy greenplum-xxx.jar to $SEATNUNNEL_HOME/lib for Standalone.")),(0,o.yg)("h2",{id:"options"},"Options"),(0,o.yg)("h3",{id:"common-options"},"common options"),(0,o.yg)("p",null,"Source plugin common parameters, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.4/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add Greenplum Source Connector")))}m.isMDXComponent=!0}}]);