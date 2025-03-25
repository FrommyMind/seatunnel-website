"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[55740],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>m});var l=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,l,t=function(e,n){if(null==e)return{};var a,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=l.createContext({}),u=function(e){var n=l.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},g=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},o="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),o=u(a),c=t,m=o["".concat(s,".").concat(c)]||o[c]||y[c]||r;return a?l.createElement(m,p(p({ref:n},g),{},{components:a})):l.createElement(m,p({ref:n},g))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,p=new Array(r);p[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[o]="string"==typeof e?e:t,p[1]=i;for(var u=2;u<r;u++)p[u]=a[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39081:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=a(58168),t=(a(96540),a(15680));const r={sidebar_position:5},p="\u90e8\u7f72 SeaTunnel Engine \u6df7\u5408\u6a21\u5f0f\u96c6\u7fa4",i={unversionedId:"seatunnel-engine/hybrid-cluster-deployment",id:"version-2.3.9/seatunnel-engine/hybrid-cluster-deployment",title:"\u90e8\u7f72 SeaTunnel Engine \u6df7\u5408\u6a21\u5f0f\u96c6\u7fa4",description:"SeaTunnel Engine \u7684Master\u670d\u52a1\u548cWorker\u670d\u52a1\u6df7\u5408\u5728\u540c\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\uff0c\u6240\u6709\u8282\u70b9\u90fd\u53ef\u4ee5\u8fd0\u884c\u4f5c\u4e1a\u5e76\u53c2\u4e0e\u9009\u4e3e\u6210\u4e3amaster\uff0c\u5373master\u8282\u70b9\u4e5f\u5728\u540c\u65f6\u8fd0\u884c\u540c\u6b65\u4efb\u52a1\u3002\u5728\u8be5\u6a21\u5f0f\u4e0b\uff0cImap(\u4fdd\u5b58\u4efb\u52a1\u7684\u72b6\u6001\u4fe1\u606f\u7528\u4e8e\u4e3a\u4efb\u52a1\u7684\u5bb9\u9519\u63d0\u4f9b\u652f\u6301)\u6570\u636e\u4f1a\u5206\u5e03\u5728\u6240\u6709\u8282\u70b9\u4e2d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/seatunnel-engine/hybrid-cluster-deployment.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/hybrid-cluster-deployment",permalink:"/zh-CN/docs/2.3.9/seatunnel-engine/hybrid-cluster-deployment",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/seatunnel-engine/hybrid-cluster-deployment.md",tags:[],version:"2.3.9",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"\u4ee5Local\u6a21\u5f0f\u8fd0\u884c\u4f5c\u4e1a",permalink:"/zh-CN/docs/2.3.9/seatunnel-engine/local-mode-deployment"},next:{title:"\u90e8\u7f72 SeaTunnel Engine \u5206\u79bb\u6a21\u5f0f\u96c6\u7fa4",permalink:"/zh-CN/docs/2.3.9/seatunnel-engine/separated-cluster-deployment"}},s={},u=[{value:"1. \u4e0b\u8f7d",id:"1-\u4e0b\u8f7d",level:2},{value:"2 \u914d\u7f6e SEATUNNEL_HOME",id:"2-\u914d\u7f6e-seatunnel_home",level:2},{value:"3. \u914d\u7f6e SeaTunnel Engine JVM \u9009\u9879",id:"3-\u914d\u7f6e-seatunnel-engine-jvm-\u9009\u9879",level:2},{value:"4. \u914d\u7f6e SeaTunnel Engine",id:"4-\u914d\u7f6e-seatunnel-engine",level:2},{value:"4.1 Imap\u4e2d\u6570\u636e\u7684\u5907\u4efd\u6570\u8bbe\u7f6e",id:"41-imap\u4e2d\u6570\u636e\u7684\u5907\u4efd\u6570\u8bbe\u7f6e",level:3},{value:"4.2 Slot\u914d\u7f6e",id:"42-slot\u914d\u7f6e",level:3},{value:"4.3 \u68c0\u67e5\u70b9\u7ba1\u7406\u5668",id:"43-\u68c0\u67e5\u70b9\u7ba1\u7406\u5668",level:3},{value:"4.4 \u5386\u53f2\u4f5c\u4e1a\u8fc7\u671f\u914d\u7f6e",id:"44-\u5386\u53f2\u4f5c\u4e1a\u8fc7\u671f\u914d\u7f6e",level:3},{value:"4.5 \u7c7b\u52a0\u8f7d\u5668\u7f13\u5b58\u6a21\u5f0f",id:"45-\u7c7b\u52a0\u8f7d\u5668\u7f13\u5b58\u6a21\u5f0f",level:3},{value:"4.6 \u4f5c\u4e1a\u8c03\u5ea6\u7b56\u7565",id:"46-\u4f5c\u4e1a\u8c03\u5ea6\u7b56\u7565",level:3},{value:"4.7 Coordinator Service",id:"47-coordinator-service",level:3},{value:"5. \u914d\u7f6e SeaTunnel Engine \u7f51\u7edc\u670d\u52a1",id:"5-\u914d\u7f6e-seatunnel-engine-\u7f51\u7edc\u670d\u52a1",level:2},{value:"5.1 \u96c6\u7fa4\u540d\u79f0",id:"51-\u96c6\u7fa4\u540d\u79f0",level:3},{value:"5.2 \u7f51\u7edc",id:"52-\u7f51\u7edc",level:3},{value:"TCP",id:"tcp",level:4},{value:"5.3 IMap\u6301\u4e45\u5316\u914d\u7f6e",id:"53-imap\u6301\u4e45\u5316\u914d\u7f6e",level:3},{value:"6. \u914d\u7f6e SeaTunnel Engine \u5ba2\u6237\u7aef",id:"6-\u914d\u7f6e-seatunnel-engine-\u5ba2\u6237\u7aef",level:2},{value:"6.1 cluster-name",id:"61-cluster-name",level:3},{value:"6.2 \u7f51\u7edc",id:"62-\u7f51\u7edc",level:3},{value:"7. \u542f\u52a8 SeaTunnel Engine \u670d\u52a1\u5668\u8282\u70b9",id:"7-\u542f\u52a8-seatunnel-engine-\u670d\u52a1\u5668\u8282\u70b9",level:2},{value:"8. \u63d0\u4ea4\u4f5c\u4e1a\u548c\u7ba1\u7406\u4f5c\u4e1a",id:"8-\u63d0\u4ea4\u4f5c\u4e1a\u548c\u7ba1\u7406\u4f5c\u4e1a",level:2},{value:"8.1 \u4f7f\u7528 SeaTunnel Engine \u5ba2\u6237\u7aef\u63d0\u4ea4\u4f5c\u4e1a",id:"81-\u4f7f\u7528-seatunnel-engine-\u5ba2\u6237\u7aef\u63d0\u4ea4\u4f5c\u4e1a",level:3},{value:"\u5b89\u88c5 SeaTunnel Engine \u5ba2\u6237\u7aef",id:"\u5b89\u88c5-seatunnel-engine-\u5ba2\u6237\u7aef",level:4},{value:"\u63d0\u4ea4\u4f5c\u4e1a\u548c\u7ba1\u7406\u4f5c\u4e1a",id:"\u63d0\u4ea4\u4f5c\u4e1a\u548c\u7ba1\u7406\u4f5c\u4e1a",level:4},{value:"8.2 \u4f7f\u7528 REST API \u63d0\u4ea4\u4f5c\u4e1a",id:"82-\u4f7f\u7528-rest-api-\u63d0\u4ea4\u4f5c\u4e1a",level:3}],g={toc:u},o="wrapper";function y(e){let{components:n,...a}=e;return(0,t.yg)(o,(0,l.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u90e8\u7f72-seatunnel-engine-\u6df7\u5408\u6a21\u5f0f\u96c6\u7fa4"},"\u90e8\u7f72 SeaTunnel Engine \u6df7\u5408\u6a21\u5f0f\u96c6\u7fa4"),(0,t.yg)("p",null,"SeaTunnel Engine \u7684Master\u670d\u52a1\u548cWorker\u670d\u52a1\u6df7\u5408\u5728\u540c\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\uff0c\u6240\u6709\u8282\u70b9\u90fd\u53ef\u4ee5\u8fd0\u884c\u4f5c\u4e1a\u5e76\u53c2\u4e0e\u9009\u4e3e\u6210\u4e3amaster\uff0c\u5373master\u8282\u70b9\u4e5f\u5728\u540c\u65f6\u8fd0\u884c\u540c\u6b65\u4efb\u52a1\u3002\u5728\u8be5\u6a21\u5f0f\u4e0b\uff0cImap(\u4fdd\u5b58\u4efb\u52a1\u7684\u72b6\u6001\u4fe1\u606f\u7528\u4e8e\u4e3a\u4efb\u52a1\u7684\u5bb9\u9519\u63d0\u4f9b\u652f\u6301)\u6570\u636e\u4f1a\u5206\u5e03\u5728\u6240\u6709\u8282\u70b9\u4e2d\u3002"),(0,t.yg)("p",null,"\u4f7f\u7528\u5efa\u8bae\uff1a\u5efa\u8bae\u4f7f\u7528\u5206\u79bb\u96c6\u7fa4\u6a21\u5f0f\u3002\u5728\u6df7\u5408\u96c6\u7fa4\u6a21\u5f0f\u4e0b\uff0cMaster\u8282\u70b9\u8981\u540c\u6b65\u8fd0\u884c\u4efb\u52a1\uff0c\u5f53\u4efb\u52a1\u89c4\u6a21\u8f83\u5927\u65f6\uff0c\u4f1a\u5f71\u54cdMaster\u8282\u70b9\u7684\u7a33\u5b9a\u6027\uff0c\u4e00\u4f46Master\u8282\u70b9\u5b95\u673a\u6216\u5fc3\u8df3\u8d85\u65f6\uff0c\u4f1a\u5bfc\u81f4Master\u8282\u70b9\u5207\u6362\uff0cMaster\u8282\u70b9\u5207\u6362\u4f1a\u5bfc\u81f4\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1\u8fdb\u884c\u5bb9\u9519\uff0c\u4f1a\u8fdb\u4e00\u6b65\u589e\u957f\u96c6\u7fa4\u7684\u8d1f\u8f7d\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u66f4\u5efa\u8bae\u4f7f\u7528",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/seatunnel-engine/separated-cluster-deployment"},"\u5206\u79bb\u96c6\u7fa4\u6a21\u5f0f"),"\u3002"),(0,t.yg)("h2",{id:"1-\u4e0b\u8f7d"},"1. \u4e0b\u8f7d"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/seatunnel-engine/download-seatunnel"},"\u4e0b\u8f7d\u548c\u5236\u4f5cSeaTunnel\u5b89\u88c5\u5305")),(0,t.yg)("h2",{id:"2-\u914d\u7f6e-seatunnel_home"},"2 \u914d\u7f6e SEATUNNEL_HOME"),(0,t.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 ",(0,t.yg)("inlineCode",{parentName:"p"},"/etc/profile.d/seatunnel.sh")," \u6587\u4ef6\u6765\u914d\u7f6e ",(0,t.yg)("inlineCode",{parentName:"p"},"SEATUNNEL_HOME")," \u3002",(0,t.yg)("inlineCode",{parentName:"p"},"/etc/profile.d/seatunnel.sh")," \u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"export SEATUNNEL_HOME=${seatunnel install path}\nexport PATH=$PATH:$SEATUNNEL_HOME/bin\n")),(0,t.yg)("h2",{id:"3-\u914d\u7f6e-seatunnel-engine-jvm-\u9009\u9879"},"3. \u914d\u7f6e SeaTunnel Engine JVM \u9009\u9879"),(0,t.yg)("p",null,"SeaTunnel Engine \u652f\u6301\u4e24\u79cd\u8bbe\u7f6e JVM \u9009\u9879\u7684\u65b9\u6cd5\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5c06 JVM \u9009\u9879\u6dfb\u52a0\u5230 ",(0,t.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/config/jvm_options"),"."),(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539 ",(0,t.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/config/jvm_options")," \u6587\u4ef6\u4e2d\u7684jvm\u53c2\u6570\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5728\u542f\u52a8 SeaTunnel Engine \u65f6\u6dfb\u52a0 JVM \u9009\u9879\u3002\u4f8b\u5982 ",(0,t.yg)("inlineCode",{parentName:"p"},'seatunnel-cluster.sh -DJvmOption="-Xms2G -Xmx2G"')))),(0,t.yg)("h2",{id:"4-\u914d\u7f6e-seatunnel-engine"},"4. \u914d\u7f6e SeaTunnel Engine"),(0,t.yg)("p",null,"SeaTunnel Engine \u63d0\u4f9b\u8bb8\u591a\u529f\u80fd\uff0c\u9700\u8981\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"seatunnel.yaml")," \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002."),(0,t.yg)("h3",{id:"41-imap\u4e2d\u6570\u636e\u7684\u5907\u4efd\u6570\u8bbe\u7f6e"},"4.1 Imap\u4e2d\u6570\u636e\u7684\u5907\u4efd\u6570\u8bbe\u7f6e"),(0,t.yg)("p",null,"SeaTunnel Engine \u57fa\u4e8e ",(0,t.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/"},"Hazelcast IMDG")," \u5b9e\u73b0\u96c6\u7fa4\u7ba1\u7406\u3002\u96c6\u7fa4\u7684\u72b6\u6001\u6570\u636e\uff08\u4f5c\u4e1a\u8fd0\u884c\u72b6\u6001\u3001\u8d44\u6e90\u72b6\u6001\uff09\u5b58\u50a8\u5728 ",(0,t.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/data-structures/map"},"Hazelcast IMap"),"\u3002\n\u5b58\u50a8\u5728 Hazelcast IMap \u4e2d\u7684\u6570\u636e\u5c06\u5728\u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\u4e0a\u5206\u5e03\u548c\u5b58\u50a8\u3002Hazelcast \u4f1a\u5206\u533a\u5b58\u50a8\u5728 Imap \u4e2d\u7684\u6570\u636e\u3002\u6bcf\u4e2a\u5206\u533a\u53ef\u4ee5\u6307\u5b9a\u5907\u4efd\u6570\u91cf\u3002\n\u56e0\u6b64\uff0cSeaTunnel Engine \u53ef\u4ee5\u5b9e\u73b0\u96c6\u7fa4 HA\uff0c\u65e0\u9700\u4f7f\u7528\u5176\u4ed6\u670d\u52a1\uff08\u4f8b\u5982 zookeeper\uff09\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"backup count")," \u662f\u5b9a\u4e49\u540c\u6b65\u5907\u4efd\u6570\u91cf\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a 1\uff0c\u5219\u5206\u533a\u7684\u5907\u4efd\u5c06\u653e\u7f6e\u5728\u4e00\u4e2a\u5176\u4ed6\u6210\u5458\u4e0a\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a 2\uff0c\u5219\u5c06\u653e\u7f6e\u5728\u4e24\u4e2a\u5176\u4ed6\u6210\u5458\u4e0a\u3002"),(0,t.yg)("p",null,"\u6211\u4eec\u5efa\u8bae ",(0,t.yg)("inlineCode",{parentName:"p"},"backup-count")," \u7684\u503c\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"max(1, min(5, N/2))"),"\u3002 ",(0,t.yg)("inlineCode",{parentName:"p"},"N")," \u662f\u96c6\u7fa4\u8282\u70b9\u7684\u6570\u91cf\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        backup-count: 1\n        # \u5176\u4ed6\u914d\u7f6e\n")),(0,t.yg)("h3",{id:"42-slot\u914d\u7f6e"},"4.2 Slot\u914d\u7f6e"),(0,t.yg)("p",null,"Slot\u6570\u91cf\u51b3\u5b9a\u4e86\u96c6\u7fa4\u8282\u70b9\u53ef\u4ee5\u5e76\u884c\u8fd0\u884c\u7684\u4efb\u52a1\u7ec4\u6570\u91cf\u3002\u4e00\u4e2a\u4efb\u52a1\u9700\u8981\u7684Slot\u7684\u4e2a\u6570\u516c\u5f0f\u4e3a N = 2 + P(\u4efb\u52a1\u914d\u7f6e\u7684\u5e76\u884c\u5ea6)\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0bSeaTunnel Engine\u7684slot\u4e2a\u6570\u4e3a\u52a8\u6001\uff0c\u5373\u4e0d\u9650\u5236\u4e2a\u6570\u3002\u6211\u4eec\u5efa\u8baeslot\u7684\u4e2a\u6570\u8bbe\u7f6e\u4e3a\u8282\u70b9CPU\u6838\u5fc3\u6570\u76842\u500d\u3002"),(0,t.yg)("p",null,"\u52a8\u6001slot\u4e2a\u6570\uff08\u9ed8\u8ba4\uff09\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        slot-service:\n            dynamic-slot: true\n        # \u5176\u4ed6\u914d\u7f6e\n")),(0,t.yg)("p",null,"\u9759\u6001slot\u4e2a\u6570\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        slot-service:\n            dynamic-slot: false\n            slot-num: 20\n")),(0,t.yg)("h3",{id:"43-\u68c0\u67e5\u70b9\u7ba1\u7406\u5668"},"4.3 \u68c0\u67e5\u70b9\u7ba1\u7406\u5668"),(0,t.yg)("p",null,"\u4e0e Flink \u4e00\u6837\uff0cSeaTunnel Engine \u652f\u6301 Chandy\u2013Lamport \u7b97\u6cd5\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u5b9e\u73b0\u65e0\u6570\u636e\u4e22\u5931\u548c\u91cd\u590d\u7684\u6570\u636e\u540c\u6b65\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"interval")),(0,t.yg)("p",null,"\u4e24\u4e2a\u68c0\u67e5\u70b9\u4e4b\u95f4\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\u3002\u5982\u679c\u5728\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"env")," \u4e2d\u914d\u7f6e\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," \u53c2\u6570\uff0c\u5c06\u4ee5\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684\u4e3a\u51c6\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"timeout")),(0,t.yg)("p",null,"\u68c0\u67e5\u70b9\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u5982\u679c\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u65e0\u6cd5\u5b8c\u6210\u68c0\u67e5\u70b9\uff0c\u5219\u4f1a\u89e6\u53d1\u68c0\u67e5\u70b9\u5931\u8d25\uff0c\u4f5c\u4e1a\u5931\u8d25\u3002\u5982\u679c\u5728\u4f5c\u4e1a\u7684\u914d\u7f6e\u6587\u4ef6\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"env"),"\u4e2d\u914d\u7f6e\u4e86",(0,t.yg)("inlineCode",{parentName:"p"},"checkpoint.timeout"),"\u53c2\u6570\uff0c\u5c06\u4ee5\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684\u4e3a\u51c6\u3002"),(0,t.yg)("p",null,"\u793a\u4f8b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        backup-count: 1\n        print-execution-info-interval: 10\n        slot-service:\n            dynamic-slot: true\n        checkpoint:\n            interval: 300000\n            timeout: 10000\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"checkpoint storage")),(0,t.yg)("p",null,"\u68c0\u67e5\u70b9\u662f\u4e00\u79cd\u5bb9\u9519\u6062\u590d\u673a\u5236\u3002\u8fd9\u79cd\u673a\u5236\u786e\u4fdd\u7a0b\u5e8f\u5728\u8fd0\u884c\u65f6\uff0c\u5373\u4f7f\u7a81\u7136\u9047\u5230\u5f02\u5e38\uff0c\u4e5f\u80fd\u81ea\u884c\u6062\u590d\u3002\u68c0\u67e5\u70b9\u5b9a\u65f6\u89e6\u53d1\uff0c\u6bcf\u6b21\u68c0\u67e5\u70b9\u8fdb\u884c\u65f6\u6bcf\u4e2aTask\u90fd\u4f1a\u88ab\u8981\u6c42\u5c06\u81ea\u8eab\u7684\u72b6\u6001\u4fe1\u606f\uff08\u6bd4\u5982\u8bfb\u53d6kafka\u65f6\u8bfb\u53d6\u5230\u4e86\u54ea\u4e2aoffset\uff09\u4e0a\u62a5\u7ed9\u68c0\u67e5\u70b9\u7ebf\u7a0b\uff0c\u7531\u8be5\u7ebf\u7a0b\u5199\u5165\u4e00\u4e2a\u5206\u5e03\u5f0f\u5b58\u50a8\uff08\u6216\u5171\u4eab\u5b58\u50a8\uff09\u3002\u5f53\u4efb\u52a1\u5931\u8d25\u7136\u540e\u81ea\u52a8\u5bb9\u9519\u6062\u590d\u65f6\uff0c\u6216\u8005\u901a\u8fc7seatunnel.sh -r \u6307\u4ee4\u6062\u590d\u4e4b\u524d\u88ab\u6682\u505c\u7684\u4efb\u52a1\u65f6\uff0c\u4f1a\u4ece\u68c0\u67e5\u70b9\u5b58\u50a8\u4e2d\u52a0\u8f7d\u5bf9\u5e94\u4f5c\u4e1a\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u5e76\u57fa\u4e8e\u8fd9\u4e9b\u72b6\u6001\u4fe1\u606f\u8fdb\u884c\u4f5c\u4e1a\u7684\u6062\u590d\u3002"),(0,t.yg)("p",null,"\u5982\u679c\u96c6\u7fa4\u7684\u8282\u70b9\u5927\u4e8e1\uff0c\u68c0\u67e5\u70b9\u5b58\u50a8\u5fc5\u987b\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u5b58\u50a8\uff0c\u6216\u8005\u5171\u4eab\u5b58\u50a8\uff0c\u8fd9\u6837\u624d\u80fd\u4fdd\u8bc1\u4efb\u610f\u8282\u70b9\u6302\u6389\u540e\u4f9d\u7136\u53ef\u4ee5\u5728\u53e6\u4e00\u4e2a\u8282\u70b9\u52a0\u8f7d\u5230\u5b58\u50a8\u4e2d\u7684\u4efb\u52a1\u72b6\u6001\u4fe1\u606f\u3002"),(0,t.yg)("p",null,"\u6709\u5173\u68c0\u67e5\u70b9\u5b58\u50a8\u7684\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/seatunnel-engine/checkpoint-storage"},"Checkpoint Storage")),(0,t.yg)("h3",{id:"44-\u5386\u53f2\u4f5c\u4e1a\u8fc7\u671f\u914d\u7f6e"},"4.4 \u5386\u53f2\u4f5c\u4e1a\u8fc7\u671f\u914d\u7f6e"),(0,t.yg)("p",null,"\u6bcf\u4e2a\u5b8c\u6210\u7684\u4f5c\u4e1a\u7684\u4fe1\u606f\uff0c\u5982\u72b6\u6001\u3001\u8ba1\u6570\u5668\u548c\u9519\u8bef\u65e5\u5fd7\uff0c\u90fd\u5b58\u50a8\u5728 IMap \u5bf9\u8c61\u4e2d\u3002\u968f\u7740\u8fd0\u884c\u4f5c\u4e1a\u6570\u91cf\u7684\u589e\u52a0\uff0c\u5185\u5b58\u4f1a\u589e\u52a0\uff0c\u6700\u7ec8\u5185\u5b58\u5c06\u6ea2\u51fa\u3002\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u8c03\u6574 ",(0,t.yg)("inlineCode",{parentName:"p"},"history-job-expire-minutes")," \u53c2\u6570\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u6b64\u53c2\u6570\u7684\u65f6\u95f4\u5355\u4f4d\u662f\u5206\u949f\u3002\u9ed8\u8ba4\u503c\u662f 1440 \u5206\u949f\uff0c\u5373\u4e00\u5929\u3002"),(0,t.yg)("p",null,"\u793a\u4f8b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    history-job-expire-minutes: 1440\n")),(0,t.yg)("h3",{id:"45-\u7c7b\u52a0\u8f7d\u5668\u7f13\u5b58\u6a21\u5f0f"},"4.5 \u7c7b\u52a0\u8f7d\u5668\u7f13\u5b58\u6a21\u5f0f"),(0,t.yg)("p",null,"\u6b64\u914d\u7f6e\u4e3b\u8981\u89e3\u51b3\u4e0d\u65ad\u521b\u5efa\u548c\u5c1d\u8bd5\u9500\u6bc1\u7c7b\u52a0\u8f7d\u5668\u6240\u5bfc\u81f4\u7684\u8d44\u6e90\u6cc4\u6f0f\u95ee\u9898\u3002\n\u5982\u679c\u60a8\u9047\u5230\u4e0emetaspace\u7a7a\u95f4\u6ea2\u51fa\u76f8\u5173\u7684\u5f02\u5e38\uff0c\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u542f\u7528\u6b64\u914d\u7f6e\u3002\n\u4e3a\u4e86\u51cf\u5c11\u521b\u5efa\u7c7b\u52a0\u8f7d\u5668\u7684\u9891\u7387\uff0c\u5728\u542f\u7528\u6b64\u914d\u7f6e\u540e\uff0cSeaTunnel \u5728\u4f5c\u4e1a\u5b8c\u6210\u65f6\u4e0d\u4f1a\u5c1d\u8bd5\u91ca\u653e\u76f8\u5e94\u7684\u7c7b\u52a0\u8f7d\u5668\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u88ab\u540e\u7eed\u4f5c\u4e1a\u4f7f\u7528\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5f53\u8fd0\u884c\u4f5c\u4e1a\u4e2d\u4f7f\u7528\u7684 Source/Sink \u8fde\u63a5\u5668\u7c7b\u578b\u4e0d\u662f\u592a\u591a\u65f6\uff0c\u5b83\u66f4\u6709\u6548\u3002\n\u9ed8\u8ba4\u503c\u662f false\u3002\n\u793a\u4f8b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    classloader-cache-mode: true\n")),(0,t.yg)("h3",{id:"46-\u4f5c\u4e1a\u8c03\u5ea6\u7b56\u7565"},"4.6 \u4f5c\u4e1a\u8c03\u5ea6\u7b56\u7565"),(0,t.yg)("p",null,"\u5f53\u8d44\u6e90\u4e0d\u8db3\u65f6\uff0c\u4f5c\u4e1a\u8c03\u5ea6\u7b56\u7565\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4ee5\u4e0b\u4e24\u79cd\u6a21\u5f0f\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"WAIT"),"\uff1a\u7b49\u5f85\u8d44\u6e90\u53ef\u7528\u3002"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"REJECT"),"\uff1a\u62d2\u7edd\u4f5c\u4e1a\uff0c\u9ed8\u8ba4\u503c\u3002")),(0,t.yg)("p",null,"\u793a\u4f8b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    job-schedule-strategy: WAIT\n")),(0,t.yg)("p",null,"\u5f53",(0,t.yg)("inlineCode",{parentName:"p"},"dynamic-slot: ture"),"\u65f6\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"job-schedule-strategy: WAIT")," \u914d\u7f6e\u4f1a\u5931\u6548\uff0c\u5c06\u88ab\u5f3a\u5236\u4fee\u6539\u4e3a",(0,t.yg)("inlineCode",{parentName:"p"},"job-schedule-strategy: REJECT"),"\uff0c\u56e0\u4e3a\u52a8\u6001Slot\u65f6\u8be5\u53c2\u6570\u6ca1\u6709\u610f\u4e49\uff0c\u53ef\u4ee5\u76f4\u63a5\u63d0\u4ea4\u3002"),(0,t.yg)("h3",{id:"47-coordinator-service"},"4.7 Coordinator Service"),(0,t.yg)("p",null,"CoordinatorService \u63d0\u4f9b\u4e86\u6bcf\u4e2a\u4f5c\u4e1a\u4ece LogicalDag \u5230 ExecutionDag\uff0c\u518d\u5230 PhysicalDag \u7684\u751f\u6210\u6d41\u7a0b\uff0c \u5e76\u6700\u7ec8\u521b\u5efa\u4f5c\u4e1a\u7684 JobMaster \u8fdb\u884c\u4f5c\u4e1a\u7684\u8c03\u5ea6\u6267\u884c\u548c\u72b6\u6001\u76d1\u63a7"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"core-thread-num")),(0,t.yg)("p",null,"\u914d\u7f6e CoordinatorService \u7ebf\u7a0b\u6c60\u6838\u5fc3\u7ebf\u7a0b\u6570\u91cf"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"max-thread-num")),(0,t.yg)("p",null,"\u540c\u65f6\u53ef\u6267\u884c\u7684\u6700\u5927\u4f5c\u4e1a\u6570\u91cf"),(0,t.yg)("p",null,"Example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"coordinator-service:\n   core-thread-num: 30\n   max-thread-num: 1000\n")),(0,t.yg)("h2",{id:"5-\u914d\u7f6e-seatunnel-engine-\u7f51\u7edc\u670d\u52a1"},"5. \u914d\u7f6e SeaTunnel Engine \u7f51\u7edc\u670d\u52a1"),(0,t.yg)("p",null,"\u6240\u6709 SeaTunnel Engine \u7f51\u7edc\u76f8\u5173\u7684\u914d\u7f6e\u90fd\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"hazelcast.yaml")," \u6587\u4ef6\u4e2d."),(0,t.yg)("h3",{id:"51-\u96c6\u7fa4\u540d\u79f0"},"5.1 \u96c6\u7fa4\u540d\u79f0"),(0,t.yg)("p",null,"SeaTunnel Engine \u8282\u70b9\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"cluster-name")," \u6765\u786e\u5b9a\u53e6\u4e00\u4e2a\u8282\u70b9\u662f\u5426\u4e0e\u81ea\u5df1\u5728\u540c\u4e00\u96c6\u7fa4\u4e2d\u3002\u5982\u679c\u4e24\u4e2a\u8282\u70b9\u4e4b\u95f4\u7684\u96c6\u7fa4\u540d\u79f0\u4e0d\u540c\uff0cSeaTunnel \u5f15\u64ce\u5c06\u62d2\u7edd\u670d\u52a1\u8bf7\u6c42\u3002"),(0,t.yg)("h3",{id:"52-\u7f51\u7edc"},"5.2 \u7f51\u7edc"),(0,t.yg)("p",null,"\u57fa\u4e8e ",(0,t.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/clusters/discovery-mechanisms"},"Hazelcast"),", \u4e00\u4e2a SeaTunnel Engine \u96c6\u7fa4\u662f\u7531\u8fd0\u884c SeaTunnel Engine \u670d\u52a1\u5668\u7684\u96c6\u7fa4\u6210\u5458\u7ec4\u6210\u7684\u7f51\u7edc\u3002 \u96c6\u7fa4\u6210\u5458\u81ea\u52a8\u52a0\u5165\u4e00\u8d77\u5f62\u6210\u96c6\u7fa4\u3002\u8fd9\u79cd\u81ea\u52a8\u52a0\u5165\u662f\u901a\u8fc7\u96c6\u7fa4\u6210\u5458\u4f7f\u7528\u7684\u5404\u79cd\u53d1\u73b0\u673a\u5236\u6765\u76f8\u4e92\u53d1\u73b0\u7684\u3002"),(0,t.yg)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u96c6\u7fa4\u5f62\u6210\u540e\uff0c\u96c6\u7fa4\u6210\u5458\u4e4b\u95f4\u7684\u901a\u4fe1\u59cb\u7ec8\u901a\u8fc7 TCP/IP \u8fdb\u884c\uff0c\u65e0\u8bba\u4f7f\u7528\u7684\u53d1\u73b0\u673a\u5236\u5982\u4f55\u3002"),(0,t.yg)("p",null,"SeaTunnel Engine \u4f7f\u7528\u4ee5\u4e0b\u53d1\u73b0\u673a\u5236\u3002"),(0,t.yg)("h4",{id:"tcp"},"TCP"),(0,t.yg)("p",null,"\u60a8\u53ef\u4ee5\u5c06 SeaTunnel Engine \u914d\u7f6e\u4e3a\u5b8c\u6574\u7684 TCP/IP \u96c6\u7fa4\u3002\u6709\u5173\u914d\u7f6e\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/seatunnel-engine/tcp"},"Discovering Members By TCP Section"),"\u3002"),(0,t.yg)("p",null,"\u4e00\u4e2a\u793a\u4f8b\u5982\u4e0b ",(0,t.yg)("inlineCode",{parentName:"p"},"hazelcast.yaml")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"hazelcast:\n  cluster-name: seatunnel\n  network:\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - hostname1\n    port:\n      auto-increment: false\n      port: 5801\n  properties:\n    hazelcast.logging.type: log4j2\n")),(0,t.yg)("p",null,"TCP \u662f\u6211\u4eec\u5efa\u8bae\u5728\u72ec\u7acb SeaTunnel Engine \u96c6\u7fa4\u4e2d\u4f7f\u7528\u7684\u65b9\u5f0f\u3002"),(0,t.yg)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0cHazelcast \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5176\u4ed6\u7684\u670d\u52a1\u53d1\u73b0\u65b9\u6cd5\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605  ",(0,t.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/clusters/setting-up-clusters"},"Hazelcast Network")),(0,t.yg)("h3",{id:"53-imap\u6301\u4e45\u5316\u914d\u7f6e"},"5.3 IMap\u6301\u4e45\u5316\u914d\u7f6e"),(0,t.yg)("p",null,"\u5728SeaTunnel\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528IMap(\u4e00\u79cd\u5206\u5e03\u5f0f\u7684Map\uff0c\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u8de8\u8282\u70b9\u8de8\u8fdb\u7a0b\u7684\u5199\u5165\u7684\u8bfb\u53d6 \u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,t.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.2/data-structures/map"},"hazelcast map"),") \u6765\u5b58\u50a8\u6bcf\u4e2a\u4efb\u52a1\u53ca\u5176task\u7684\u72b6\u6001\uff0c\u4ee5\u4fbf\u5728\u4efb\u52a1\u6240\u5728\u8282\u70b9\u5b95\u673a\u540e\uff0c\u53ef\u4ee5\u5728\u5176\u4ed6\u8282\u70b9\u4e0a\u83b7\u53d6\u5230\u4efb\u52a1\u4e4b\u524d\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u4ece\u800c\u6062\u590d\u4efb\u52a1\u5b9e\u73b0\u4efb\u52a1\u7684\u5bb9\u9519\u3002"),(0,t.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0bImap\u7684\u4fe1\u606f\u53ea\u662f\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6eImap\u6570\u636e\u7684\u590d\u672c\u6570\uff0c\u5177\u4f53\u53ef\u53c2\u8003(4.1 Imap\u4e2d\u6570\u636e\u7684\u5907\u4efd\u6570\u8bbe\u7f6e)\uff0c\u5982\u679c\u590d\u672c\u6570\u662f2\uff0c\u4ee3\u8868\u6bcf\u4e2a\u6570\u636e\u4f1a\u540c\u65f6\u5b58\u50a8\u57282\u4e2a\u4e0d\u540c\u7684\u8282\u70b9\u4e2d\u3002\u4e00\u65e6\u8282\u70b9\u5b95\u673a\uff0cImap\u4e2d\u7684\u6570\u636e\u4f1a\u91cd\u65b0\u5728\u5176\u5b83\u8282\u70b9\u4e0a\u81ea\u52a8\u8865\u5145\u5230\u8bbe\u7f6e\u7684\u590d\u672c\u6570\u3002\u4f46\u662f\u5f53\u6240\u6709\u8282\u70b9\u90fd\u88ab\u505c\u6b62\u540e\uff0cImap\u4e2d\u7684\u6570\u636e\u4f1a\u4e22\u5931\u3002\u5f53\u96c6\u7fa4\u8282\u70b9\u518d\u6b21\u542f\u52a8\u540e\uff0c\u6240\u6709\u4e4b\u524d\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1\u90fd\u4f1a\u88ab\u6807\u8bb0\u4e3a\u5931\u8d25\uff0c\u9700\u8981\u7528\u6237\u624b\u5de5\u901a\u8fc7seatunnel.sh -r \u6307\u4ee4\u6062\u590d\u8fd0\u884c\u3002"),(0,t.yg)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06Imap\u4e2d\u7684\u6570\u636e\u6301\u4e45\u5316\u5230\u5916\u90e8\u5b58\u50a8\u4e2d\uff0c\u5982HDFS\u3001OSS\u7b49\u3002\u8fd9\u6837\u5373\u4f7f\u6240\u6709\u8282\u70b9\u90fd\u88ab\u505c\u6b62\uff0cImap\u4e2d\u7684\u6570\u636e\u4e5f\u4e0d\u4f1a\u4e22\u5931\uff0c\u5f53\u96c6\u7fa4\u8282\u70b9\u518d\u6b21\u542f\u52a8\u540e\uff0c\u6240\u6709\u4e4b\u524d\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1\u90fd\u4f1a\u88ab\u81ea\u52a8\u6062\u590d\u3002"),(0,t.yg)("p",null,"\u4e0b\u9762\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 MapStore \u6301\u4e45\u5316\u914d\u7f6e\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,t.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.2/data-structures/map"},"Hazelcast Map")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"type")),(0,t.yg)("p",null,"imap \u6301\u4e45\u5316\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u4ec5\u652f\u6301 ",(0,t.yg)("inlineCode",{parentName:"p"},"hdfs"),"\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"namespace")),(0,t.yg)("p",null,"\u5b83\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u4e1a\u52a1\u7684\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e\uff0c\u5982 OSS \u5b58\u50a8\u6876\u540d\u79f0\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"clusterName")),(0,t.yg)("p",null,"\u6b64\u53c2\u6570\u4e3b\u8981\u7528\u4e8e\u96c6\u7fa4\u9694\u79bb\uff0c \u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u533a\u5206\u4e0d\u540c\u7684\u96c6\u7fa4\uff0c\u5982 cluster1\u3001cluster2\uff0c\u8fd9\u4e5f\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u4e1a\u52a1\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"fs.defaultFS")),(0,t.yg)("p",null,"\u6211\u4eec\u4f7f\u7528 hdfs api \u8bfb\u5199\u6587\u4ef6\uff0c\u56e0\u6b64\u4f7f\u7528\u6b64\u5b58\u50a8\u9700\u8981\u63d0\u4f9b hdfs \u914d\u7f6e\u3002"),(0,t.yg)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 HDFS\uff0c\u53ef\u4ee5\u50cf\u8fd9\u6837\u914d\u7f6e\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: hdfs\n           fs.defaultFS: hdfs://localhost:9000\n")),(0,t.yg)("p",null,"\u5982\u679c\u6ca1\u6709 HDFS\uff0c\u5e76\u4e14\u60a8\u7684\u96c6\u7fa4\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\uff0c\u60a8\u53ef\u4ee5\u50cf\u8fd9\u6837\u914d\u7f6e\u4f7f\u7528\u672c\u5730\u6587\u4ef6\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: hdfs\n           fs.defaultFS: file:///\n")),(0,t.yg)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 OSS\uff0c\u53ef\u4ee5\u50cf\u8fd9\u6837\u914d\u7f6e\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: oss\n           block.size: block size(bytes)\n           oss.bucket: oss://bucket name/\n           fs.oss.accessKeyId: OSS access key id\n           fs.oss.accessKeySecret: OSS access key secret\n           fs.oss.endpoint: OSS endpoint\n")),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a\u4f7f\u7528OSS \u65f6\uff0c\u786e\u4fdd lib\u76ee\u5f55\u4e0b\u6709\u8fd9\u51e0\u4e2ajar."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"aliyun-sdk-oss-3.13.2.jar\nhadoop-aliyun-3.3.6.jar\njdom2-2.0.6.jar\nnetty-buffer-4.1.89.Final.jar \nnetty-common-4.1.89.Final.jar\nseatunnel-hadoop3-3.1.4-uber.jar\n")),(0,t.yg)("h2",{id:"6-\u914d\u7f6e-seatunnel-engine-\u5ba2\u6237\u7aef"},"6. \u914d\u7f6e SeaTunnel Engine \u5ba2\u6237\u7aef"),(0,t.yg)("p",null,"\u6240\u6709 SeaTunnel Engine \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u90fd\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"hazelcast-client.yaml")," \u91cc\u3002"),(0,t.yg)("h3",{id:"61-cluster-name"},"6.1 cluster-name"),(0,t.yg)("p",null,"\u5ba2\u6237\u7aef\u5fc5\u987b\u4e0e SeaTunnel Engine \u5177\u6709\u76f8\u540c\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"cluster-name"),"\u3002\u5426\u5219\uff0cSeaTunnel Engine \u5c06\u62d2\u7edd\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002"),(0,t.yg)("h3",{id:"62-\u7f51\u7edc"},"6.2 \u7f51\u7edc"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"cluster-members")),(0,t.yg)("p",null,"\u9700\u8981\u5c06\u6240\u6709 SeaTunnel Engine \u670d\u52a1\u5668\u8282\u70b9\u7684\u5730\u5740\u6dfb\u52a0\u5230\u8fd9\u91cc\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"hazelcast-client:\n  cluster-name: seatunnel\n  properties:\n      hazelcast.logging.type: log4j2\n  network:\n    cluster-members:\n      - hostname1:5801\n")),(0,t.yg)("h2",{id:"7-\u542f\u52a8-seatunnel-engine-\u670d\u52a1\u5668\u8282\u70b9"},"7. \u542f\u52a8 SeaTunnel Engine \u670d\u52a1\u5668\u8282\u70b9"),(0,t.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5b88\u62a4\u8fdb\u7a0b\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"-d")," \u53c2\u6570\u542f\u52a8\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $SEATUNNEL_HOME/logs\n./bin/seatunnel-cluster.sh -d\n")),(0,t.yg)("p",null,"\u65e5\u5fd7\u5c06\u5199\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/logs/seatunnel-engine-server.log")),(0,t.yg)("h2",{id:"8-\u63d0\u4ea4\u4f5c\u4e1a\u548c\u7ba1\u7406\u4f5c\u4e1a"},"8. \u63d0\u4ea4\u4f5c\u4e1a\u548c\u7ba1\u7406\u4f5c\u4e1a"),(0,t.yg)("h3",{id:"81-\u4f7f\u7528-seatunnel-engine-\u5ba2\u6237\u7aef\u63d0\u4ea4\u4f5c\u4e1a"},"8.1 \u4f7f\u7528 SeaTunnel Engine \u5ba2\u6237\u7aef\u63d0\u4ea4\u4f5c\u4e1a"),(0,t.yg)("h4",{id:"\u5b89\u88c5-seatunnel-engine-\u5ba2\u6237\u7aef"},"\u5b89\u88c5 SeaTunnel Engine \u5ba2\u6237\u7aef"),(0,t.yg)("p",null,"\u60a8\u53ea\u9700\u5c06 SeaTunnel Engine \u8282\u70b9\u4e0a\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME")," \u76ee\u5f55\u590d\u5236\u5230\u5ba2\u6237\u7aef\u8282\u70b9\uff0c\u5e76\u50cf SeaTunnel Engine \u670d\u52a1\u5668\u8282\u70b9\u4e00\u6837\u914d\u7f6e ",(0,t.yg)("inlineCode",{parentName:"p"},"SEATUNNEL_HOME"),"\u3002"),(0,t.yg)("h4",{id:"\u63d0\u4ea4\u4f5c\u4e1a\u548c\u7ba1\u7406\u4f5c\u4e1a"},"\u63d0\u4ea4\u4f5c\u4e1a\u548c\u7ba1\u7406\u4f5c\u4e1a"),(0,t.yg)("p",null,"\u73b0\u5728\u96c6\u7fa4\u90e8\u7f72\u5b8c\u6210\u4e86\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6559\u7a0b\u5b8c\u6210\u4f5c\u4e1a\u7684\u63d0\u4ea4\u548c\u7ba1\u7406\uff1a",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/seatunnel-engine/user-command"},"\u63d0\u4ea4\u548c\u7ba1\u7406\u4f5c\u4e1a")),(0,t.yg)("h3",{id:"82-\u4f7f\u7528-rest-api-\u63d0\u4ea4\u4f5c\u4e1a"},"8.2 \u4f7f\u7528 REST API \u63d0\u4ea4\u4f5c\u4e1a"),(0,t.yg)("p",null,"SeaTunnel Engine \u63d0\u4f9b\u4e86 REST API \u7528\u4e8e\u63d0\u4ea4\u4f5c\u4e1a\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/seatunnel-engine/rest-api-v2"},"REST API V2")))}y.isMDXComponent=!0}}]);