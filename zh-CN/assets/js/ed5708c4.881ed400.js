"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[80993],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,y=p["".concat(o,".").concat(d)]||p[d]||g[d]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const i={},l="Web UI",s={unversionedId:"seatunnel-engine/web-ui",id:"seatunnel-engine/web-ui",title:"Web UI",description:"\u8bbf\u95ee",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/web-ui.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/web-ui",permalink:"/zh-CN/docs/seatunnel-engine/web-ui",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/web-ui.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Telemetry",permalink:"/zh-CN/docs/seatunnel-engine/telemetry"},next:{title:"Slot\u5206\u914d\u7b56\u7565",permalink:"/zh-CN/docs/seatunnel-engine/slot-allocation-strategy"}},o={},c=[{value:"\u8bbf\u95ee",id:"\u8bbf\u95ee",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f5c\u4e1a",id:"\u4f5c\u4e1a",level:2},{value:"\u8fd0\u884c\u4e2d\u7684\u4f5c\u4e1a",id:"\u8fd0\u884c\u4e2d\u7684\u4f5c\u4e1a",level:3},{value:"\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a",id:"\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a",level:3},{value:"\u5de5\u4f5c\u8282\u70b9",id:"\u5de5\u4f5c\u8282\u70b9",level:2},{value:"\u5de5\u4f5c\u8282\u70b9\u4fe1\u606f",id:"\u5de5\u4f5c\u8282\u70b9\u4fe1\u606f",level:3},{value:"\u7ba1\u7406\u8282\u70b9",id:"\u7ba1\u7406\u8282\u70b9",level:2},{value:"\u7ba1\u7406\u8282\u70b9\u4fe1\u606f",id:"\u7ba1\u7406\u8282\u70b9\u4fe1\u606f",level:3}],u={toc:c},p="wrapper";function g(e){let{components:n,...i}=e;return(0,a.yg)(p,(0,r.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"web-ui"},"Web UI"),(0,a.yg)("h2",{id:"\u8bbf\u95ee"},"\u8bbf\u95ee"),(0,a.yg)("p",null,"\u5728\u8bbf\u95ee web ui \u4e4b\u524d\u6211\u4eec\u9700\u8981\u5f00\u542f http rest api\u3002\u9996\u5148\u9700\u8981\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel.yaml"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"seatunnel:\n  engine:\n    http:\n      enable-http: true\n      port: 8080\n")),(0,a.yg)("p",null,"\u7136\u540e\u8bbf\u95ee ",(0,a.yg)("inlineCode",{parentName:"p"},"http://ip:8080/#/overview")),(0,a.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.yg)("p",null,"Apache SeaTunnel \u7684 Web UI \u63d0\u4f9b\u4e86\u4e00\u4e2a\u53cb\u597d\u7684\u7528\u6237\u754c\u9762\uff0c\u7528\u4e8e\u76d1\u63a7\u548c\u7ba1\u7406 SeaTunnel \u4f5c\u4e1a\u3002\u901a\u8fc7 Web UI\uff0c\u7528\u6237\u53ef\u4ee5\u5b9e\u65f6\u67e5\u770b\u5f53\u524d\u8fd0\u884c\u7684\u4f5c\u4e1a\u3001\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\uff0c\u4ee5\u53ca\u96c6\u7fa4\u4e2d\u5de5\u4f5c\u8282\u70b9\u548c\u7ba1\u7406\u8282\u70b9\u7684\u72b6\u6001\u3002\u4e3b\u8981\u529f\u80fd\u6a21\u5757\u5305\u62ec Jobs\u3001Workers \u548c Master\uff0c\u6bcf\u4e2a\u6a21\u5757\u90fd\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u72b6\u6001\u4fe1\u606f\u548c\u64cd\u4f5c\u9009\u9879\uff0c\u5e2e\u52a9\u7528\u6237\u9ad8\u6548\u5730\u7ba1\u7406\u548c\u4f18\u5316\u5176\u6570\u636e\u5904\u7406\u6d41\u7a0b\u3002\n",(0,a.yg)("img",{alt:"overview.png",src:t(46090).A,width:"2552",height:"1309"})),(0,a.yg)("h2",{id:"\u4f5c\u4e1a"},"\u4f5c\u4e1a"),(0,a.yg)("h3",{id:"\u8fd0\u884c\u4e2d\u7684\u4f5c\u4e1a"},"\u8fd0\u884c\u4e2d\u7684\u4f5c\u4e1a"),(0,a.yg)("p",null,"\u201c\u8fd0\u884c\u4e2d\u7684\u4f5c\u4e1a\u201d\u6a21\u5757\u5217\u51fa\u4e86\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u6240\u6709 SeaTunnel \u4f5c\u4e1a\u3002\u7528\u6237\u53ef\u4ee5\u67e5\u770b\u6bcf\u4e2a\u4f5c\u4e1a\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5305\u62ec\u4f5c\u4e1a ID\u3001\u63d0\u4ea4\u65f6\u95f4\u3001\u72b6\u6001\u3001\u6267\u884c\u65f6\u95f4\u7b49\u3002\u70b9\u51fb\u5177\u4f53\u4f5c\u4e1a\u53ef\u4ee5\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u5982\u4efb\u52a1\u5206\u5e03\u3001\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u548c\u65e5\u5fd7\u8f93\u51fa\uff0c\u4fbf\u4e8e\u7528\u6237\u5b9e\u65f6\u76d1\u63a7\u4f5c\u4e1a\u8fdb\u5ea6\u5e76\u53ca\u65f6\u5904\u7406\u6f5c\u5728\u95ee\u9898\u3002\n",(0,a.yg)("img",{alt:"running.png",src:t(71590).A,width:"2207",height:"210"}),"\n",(0,a.yg)("img",{alt:"detail.png",src:t(8624).A,width:"2326",height:"940"})),(0,a.yg)("h3",{id:"\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a"},"\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a"),(0,a.yg)("p",null,"\u201c\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\u201d\u6a21\u5757\u5c55\u793a\u4e86\u6240\u6709\u5df2\u6210\u529f\u5b8c\u6210\u6216\u5931\u8d25\u7684 SeaTunnel \u4f5c\u4e1a\u3002\u6b64\u90e8\u5206\u63d0\u4f9b\u4e86\u6bcf\u4e2a\u4f5c\u4e1a\u7684\u6267\u884c\u7ed3\u679c\u3001\u5b8c\u6210\u65f6\u95f4\u3001\u8017\u65f6\u4ee5\u53ca\u5931\u8d25\u539f\u56e0\uff08\u5982\u679c\u6709\uff09\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6b64\u6a21\u5757\u56de\u987e\u8fc7\u53bb\u7684\u4f5c\u4e1a\u8bb0\u5f55\uff0c\u5206\u6790\u4f5c\u4e1a\u6027\u80fd\uff0c\u8fdb\u884c\u6545\u969c\u6392\u67e5\u6216\u91cd\u590d\u6267\u884c\u67d0\u4e9b\u7279\u5b9a\u4f5c\u4e1a\u3002\n",(0,a.yg)("img",{alt:"finished.png",src:t(61321).A,width:"2159",height:"265"})),(0,a.yg)("h2",{id:"\u5de5\u4f5c\u8282\u70b9"},"\u5de5\u4f5c\u8282\u70b9"),(0,a.yg)("h3",{id:"\u5de5\u4f5c\u8282\u70b9\u4fe1\u606f"},"\u5de5\u4f5c\u8282\u70b9\u4fe1\u606f"),(0,a.yg)("p",null,"\u201c\u5de5\u4f5c\u8282\u70b9\u201d\u6a21\u5757\u5c55\u793a\u4e86\u96c6\u7fa4\u4e2d\u6240\u6709\u5de5\u4f5c\u8282\u70b9\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u6bcf\u4e2a\u5de5\u4f5c\u8282\u70b9\u7684\u5730\u5740\u3001\u8fd0\u884c\u72b6\u6001\u3001CPU \u548c\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u3001\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\u6570\u91cf\u7b49\u3002\u901a\u8fc7\u8be5\u6a21\u5757\uff0c\u7528\u6237\u53ef\u4ee5\u76d1\u63a7\u5404\u4e2a\u5de5\u4f5c\u8282\u70b9\u7684\u5065\u5eb7\u72b6\u51b5\uff0c\u53ca\u65f6\u53d1\u73b0\u548c\u5904\u7406\u8d44\u6e90\u74f6\u9888\u6216\u8282\u70b9\u6545\u969c\uff0c\u786e\u4fdd SeaTunnel \u96c6\u7fa4\u7684\u7a33\u5b9a\u8fd0\u884c\u3002\n",(0,a.yg)("img",{alt:"workers.png",src:t(14).A,width:"2552",height:"349"})),(0,a.yg)("h2",{id:"\u7ba1\u7406\u8282\u70b9"},"\u7ba1\u7406\u8282\u70b9"),(0,a.yg)("h3",{id:"\u7ba1\u7406\u8282\u70b9\u4fe1\u606f"},"\u7ba1\u7406\u8282\u70b9\u4fe1\u606f"),(0,a.yg)("p",null,"\u201c\u7ba1\u7406\u8282\u70b9\u201d\u6a21\u5757\u63d0\u4f9b\u4e86 SeaTunnel \u96c6\u7fa4\u4e2d\u4e3b\u8282\u70b9\u7684\u72b6\u6001\u548c\u914d\u7f6e\u4fe1\u606f\u3002\u7528\u6237\u53ef\u4ee5\u67e5\u770b Master \u8282\u70b9\u7684\u5730\u5740\u3001\u8fd0\u884c\u72b6\u6001\u3001\u8d1f\u8d23\u7684\u4f5c\u4e1a\u8c03\u5ea6\u60c5\u51b5\u4ee5\u53ca\u6574\u4f53\u96c6\u7fa4\u7684\u8d44\u6e90\u5206\u914d\u60c5\u51b5\u3002\u8be5\u6a21\u5757\u5e2e\u52a9\u7528\u6237\u5168\u9762\u4e86\u89e3\u96c6\u7fa4\u7684\u6838\u5fc3\u7ba1\u7406\u90e8\u5206\uff0c\u4fbf\u4e8e\u8fdb\u884c\u96c6\u7fa4\u914d\u7f6e\u4f18\u5316\u548c\u6545\u969c\u6392\u67e5\u3002\n",(0,a.yg)("img",{alt:"master.png",src:t(50902).A,width:"2552",height:"360"})))}g.isMDXComponent=!0},8624:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/detail-59c4f1a10b45a55aea5d0ae6b5c51e97.png"},61321:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/finished-6bdb0f8c55f25044dc25e536acd73539.png"},50902:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/master-4961fba8eb20c7b45cd39cd3cdc5969e.png"},46090:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/overview-038cbb8efa057a25425719427077df03.png"},71590:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/running-2c646bac60b33658079bbdc3d48581c7.png"},14:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/workers-6dac8ee6a01e4fd83264bee70f3fdee8.png"}}]);