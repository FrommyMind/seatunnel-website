"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[77987],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),g=o,m=s["".concat(i,".").concat(g)]||s[g]||y[g]||a;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},37728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const a={},c="Connector V2 \u529f\u80fd\u7b80\u4ecb",l={unversionedId:"concept/connector-v2-features",id:"version-2.3.7/concept/connector-v2-features",title:"Connector V2 \u529f\u80fd\u7b80\u4ecb",description:"Connector V2 \u548c V1 \u4e4b\u95f4\u7684\u4e0d\u540c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/concept/connector-v2-features.md",sourceDirName:"concept",slug:"/concept/connector-v2-features",permalink:"/zh-CN/docs/2.3.7/concept/connector-v2-features",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/concept/connector-v2-features.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"config",permalink:"/zh-CN/docs/2.3.7/concept/config"},next:{title:"Schema \u7279\u6027\u7b80\u4ecb",permalink:"/zh-CN/docs/2.3.7/concept/schema-feature"}},i={},p=[{value:"Connector V2 \u548c V1 \u4e4b\u95f4\u7684\u4e0d\u540c",id:"connector-v2-\u548c-v1-\u4e4b\u95f4\u7684\u4e0d\u540c",level:2},{value:"Source Connector \u7279\u6027",id:"source-connector-\u7279\u6027",level:2},{value:"\u7cbe\u786e\u4e00\u6b21\uff08exactly-once\uff09",id:"\u7cbe\u786e\u4e00\u6b21exactly-once",level:3},{value:"\u5217\u6295\u5f71\uff08column projection\uff09",id:"\u5217\u6295\u5f71column-projection",level:3},{value:"\u6279\uff08batch\uff09",id:"\u6279batch",level:3},{value:"\u6d41\uff08stream\uff09",id:"\u6d41stream",level:3},{value:"\u5e76\u884c\u6027\uff08parallelism\uff09",id:"\u5e76\u884c\u6027parallelism",level:3},{value:"\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49split",id:"\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49split",level:3},{value:"\u652f\u6301\u591a\u8868\u8bfb\u53d6",id:"\u652f\u6301\u591a\u8868\u8bfb\u53d6",level:3},{value:"Sink Connector \u7684\u7279\u6027",id:"sink-connector-\u7684\u7279\u6027",level:2},{value:"\u7cbe\u786e\u4e00\u6b21\uff08exactly-once\uff09",id:"\u7cbe\u786e\u4e00\u6b21exactly-once-1",level:3},{value:"cdc(\u66f4\u6539\u6570\u636e\u6355\u83b7\uff0cchange data capture)",id:"cdc\u66f4\u6539\u6570\u636e\u6355\u83b7change-data-capture",level:3}],u={toc:p},s="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(s,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"connector-v2-\u529f\u80fd\u7b80\u4ecb"},"Connector V2 \u529f\u80fd\u7b80\u4ecb"),(0,o.yg)("h2",{id:"connector-v2-\u548c-v1-\u4e4b\u95f4\u7684\u4e0d\u540c"},"Connector V2 \u548c V1 \u4e4b\u95f4\u7684\u4e0d\u540c"),(0,o.yg)("p",null,"\u4ece ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/issues/1608"},"https://github.com/apache/seatunnel/issues/1608")," \u6211\u4eec\u6dfb\u52a0\u4e86 Connector V2 \u7279\u6027\u3002\nConnector V2 \u662f\u57fa\u4e8eSeaTunnel Connector API\u63a5\u53e3\u5b9a\u4e49\u7684\u8fde\u63a5\u5668\u3002\u4e0d\u50cfConnector V1\uff0c V2 \u652f\u6301\u5982\u4e0b\u7279\u6027\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"\u591a\u5f15\u64ce\u652f\u6301")," SeaTunnel Connector API \u662f\u5f15\u64ce\u72ec\u7acb\u7684API\u3002\u57fa\u4e8e\u8fd9\u4e2aAPI\u5f00\u53d1\u7684\u8fde\u63a5\u5668\u53ef\u4ee5\u5728\u591a\u4e2a\u5f15\u64ce\u4e0a\u8fd0\u884c\u3002\u76ee\u524d\u652f\u6301Flink\u548cSpark\u5f15\u64ce\uff0c\u540e\u7eed\u6211\u4eec\u4f1a\u652f\u6301\u5176\u5b83\u7684\u5f15\u64ce\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"\u591a\u5f15\u64ce\u7248\u672c\u652f\u6301")," \u901a\u8fc7\u7ffb\u8bd1\u5c42\u5c06\u8fde\u63a5\u5668\u4e0e\u5f15\u64ce\u89e3\u8026\uff0c\u89e3\u51b3\u4e86\u5927\u591a\u6570\u8fde\u63a5\u5668\u9700\u8981\u4fee\u6539\u4ee3\u7801\u624d\u80fd\u652f\u6301\u65b0\u7248\u672c\u5e95\u5c42\u5f15\u64ce\u7684\u95ee\u9898\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"\u6d41\u6279\u4e00\u4f53")," Connector V2 \u53ef\u4ee5\u652f\u6301\u6279\u5904\u7406\u548c\u6d41\u5904\u7406\u3002\u6211\u4eec\u4e0d\u9700\u8981\u4e3a\u6279\u548c\u6d41\u5206\u522b\u5f00\u53d1\u8fde\u63a5\u5668\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"\u591a\u8def\u590d\u7528JDBC/Log\u8fde\u63a5\u3002")," Connector V2\u652f\u6301JDBC\u8d44\u6e90\u590d\u7528\u548c\u5171\u4eab\u6570\u636e\u5e93\u65e5\u5fd7\u89e3\u6790\u3002")),(0,o.yg)("h2",{id:"source-connector-\u7279\u6027"},"Source Connector \u7279\u6027"),(0,o.yg)("p",null,"Source connector\u6709\u4e00\u4e9b\u516c\u5171\u7684\u6838\u5fc3\u7279\u6027\uff0c\u6bcf\u4e2asource connector\u5728\u4e0d\u540c\u7a0b\u5ea6\u4e0a\u652f\u6301\u5b83\u4eec\u3002"),(0,o.yg)("h3",{id:"\u7cbe\u786e\u4e00\u6b21exactly-once"},"\u7cbe\u786e\u4e00\u6b21\uff08exactly-once\uff09"),(0,o.yg)("p",null,"\u5982\u679c\u6570\u636e\u6e90\u4e2d\u7684\u6bcf\u6761\u6570\u636e\u4ec5\u7531\u6e90\u5411\u4e0b\u6e38\u53d1\u9001\u4e00\u6b21\uff0c\u6211\u4eec\u8ba4\u4e3a\u8be5source connector\u652f\u6301\u7cbe\u786e\u4e00\u6b21\uff08exactly-once\uff09\u3002"),(0,o.yg)("p",null,"\u5728SeaTunnel\u4e2d, \u6211\u4eec\u53ef\u4ee5\u4fdd\u5b58\u8bfb\u53d6\u7684 ",(0,o.yg)("strong",{parentName:"p"},"Split")," \u548c\u5b83\u7684 ",(0,o.yg)("strong",{parentName:"p"},"offset"),"(\u5f53\u65f6\u8bfb\u53d6\u7684\u6570\u636e\u88ab\u5206\u5272\u65f6\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\u884c\u53f7, \u5b57\u8282\u5927\u5c0f, \u504f\u79fb\u91cf\u7b49) \u4f5c\u4e3a\u68c0\u67e5\u70b9\u65f6\u7684 ",(0,o.yg)("strong",{parentName:"p"},"StateSnapshot")," \u3002 \u5982\u679c\u4efb\u52a1\u91cd\u65b0\u542f\u52a8, \u6211\u4eec\u4f1a\u5f97\u5230\u6700\u540e\u7684 ",(0,o.yg)("strong",{parentName:"p"},"StateSnapshot"),"\n\u7136\u540e\u5b9a\u4f4d\u5230\u4e0a\u6b21\u8bfb\u53d6\u7684 ",(0,o.yg)("strong",{parentName:"p"},"Split")," \u548c ",(0,o.yg)("strong",{parentName:"p"},"offset"),"\uff0c\u7ee7\u7eed\u5411\u4e0b\u6e38\u53d1\u9001\u6570\u636e\u3002"),(0,o.yg)("p",null,"\u4f8b\u5982 ",(0,o.yg)("inlineCode",{parentName:"p"},"File"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Kafka"),"\u3002"),(0,o.yg)("h3",{id:"\u5217\u6295\u5f71column-projection"},"\u5217\u6295\u5f71\uff08column projection\uff09"),(0,o.yg)("p",null,"\u5982\u679c\u8fde\u63a5\u5668\u652f\u6301\u4ec5\u4ece\u6570\u636e\u6e90\u8bfb\u53d6\u6307\u5b9a\u5217\uff08\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u5148\u8bfb\u53d6\u6240\u6709\u5217\uff0c\u7136\u540e\u901a\u8fc7\u5143\u6570\u636e\uff08schema\uff09\u8fc7\u6ee4\u4e0d\u9700\u8981\u7684\u5217\uff0c\u5219\u6b64\u65b9\u6cd5\u4e0d\u662f\u771f\u6b63\u7684\u5217\u6295\u5f71\uff09"),(0,o.yg)("p",null,"\u4f8b\u5982 ",(0,o.yg)("inlineCode",{parentName:"p"},"JDBCSource")," \u53ef\u4ee5\u4f7f\u7528sql\u5b9a\u4e49\u8bfb\u53d6\u5217\u3002"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"KafkaSource")," \u4ece\u4e3b\u9898\u4e2d\u8bfb\u53d6\u6240\u6709\u5185\u5bb9\u7136\u540e\u4f7f\u7528",(0,o.yg)("inlineCode",{parentName:"p"},"schema"),"\u8fc7\u6ee4\u4e0d\u5fc5\u8981\u7684\u5217, \u8fd9\u4e0d\u662f\u771f\u6b63\u7684",(0,o.yg)("inlineCode",{parentName:"p"},"\u5217\u6295\u5f71"),"\u3002"),(0,o.yg)("h3",{id:"\u6279batch"},"\u6279\uff08batch\uff09"),(0,o.yg)("p",null,"\u6279\u5904\u7406\u4f5c\u4e1a\u6a21\u5f0f\uff0c\u8bfb\u53d6\u7684\u6570\u636e\u662f\u6709\u754c\u7684\uff0c\u5f53\u6240\u6709\u6570\u636e\u8bfb\u53d6\u5b8c\u6210\u540e\u4f5c\u4e1a\u5c06\u505c\u6b62\u3002"),(0,o.yg)("h3",{id:"\u6d41stream"},"\u6d41\uff08stream\uff09"),(0,o.yg)("p",null,"\u6d41\u5f0f\u4f5c\u4e1a\u6a21\u5f0f\uff0c\u6570\u636e\u8bfb\u53d6\u65e0\u754c\uff0c\u4f5c\u4e1a\u6c38\u4e0d\u505c\u6b62\u3002"),(0,o.yg)("h3",{id:"\u5e76\u884c\u6027parallelism"},"\u5e76\u884c\u6027\uff08parallelism\uff09"),(0,o.yg)("p",null,"\u5e76\u884c\u6267\u884c\u7684Source Connector\u652f\u6301\u914d\u7f6e ",(0,o.yg)("inlineCode",{parentName:"p"},"parallelism"),"\uff0c\u6bcf\u4e2a\u5e76\u53d1\u4f1a\u521b\u5efa\u4e00\u4e2a\u4efb\u52a1\u6765\u8bfb\u53d6\u6570\u636e\u3002\n\u5728",(0,o.yg)("strong",{parentName:"p"},"Parallelism Source Connector"),"\u4e2d\uff0csource\u4f1a\u88ab\u5206\u5272\u6210\u591a\u4e2asplit\uff0c\u7136\u540e\u679a\u4e3e\u5668\u4f1a\u5c06 split \u5206\u914d\u7ed9 SourceReader \u8fdb\u884c\u5904\u7406\u3002"),(0,o.yg)("h3",{id:"\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49split"},"\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49split"),(0,o.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u914d\u7f6e\u5206\u5272\u89c4\u5219\u3002"),(0,o.yg)("h3",{id:"\u652f\u6301\u591a\u8868\u8bfb\u53d6"},"\u652f\u6301\u591a\u8868\u8bfb\u53d6"),(0,o.yg)("p",null,"\u652f\u6301\u5728\u4e00\u4e2a SeaTunnel \u4f5c\u4e1a\u4e2d\u8bfb\u53d6\u591a\u4e2a\u8868\u3002"),(0,o.yg)("h2",{id:"sink-connector-\u7684\u7279\u6027"},"Sink Connector \u7684\u7279\u6027"),(0,o.yg)("p",null,"Sink connector\u6709\u4e00\u4e9b\u516c\u5171\u7684\u6838\u5fc3\u7279\u6027\uff0c\u6bcf\u4e2asink connector\u5728\u4e0d\u540c\u7a0b\u5ea6\u4e0a\u652f\u6301\u5b83\u4eec\u3002"),(0,o.yg)("h3",{id:"\u7cbe\u786e\u4e00\u6b21exactly-once-1"},"\u7cbe\u786e\u4e00\u6b21\uff08exactly-once\uff09"),(0,o.yg)("p",null,"\u5f53\u4efb\u610f\u4e00\u6761\u6570\u636e\u6d41\u5165\u5206\u5e03\u5f0f\u7cfb\u7edf\u65f6\uff0c\u5982\u679c\u7cfb\u7edf\u5728\u6574\u4e2a\u5904\u7406\u8fc7\u7a0b\u4e2d\u4ec5\u51c6\u786e\u5904\u7406\u4efb\u610f\u4e00\u6761\u6570\u636e\u4e00\u6b21\uff0c\u4e14\u5904\u7406\u7ed3\u679c\u6b63\u786e\uff0c\u5219\u8ba4\u4e3a\u7cfb\u7edf\u6ee1\u8db3\u7cbe\u786e\u4e00\u6b21\u4e00\u81f4\u6027\u3002"),(0,o.yg)("p",null,"\u5bf9\u4e8esink connector\uff0c\u5982\u679c\u4efb\u4f55\u6570\u636e\u53ea\u5199\u5165\u76ee\u6807\u4e00\u6b21\uff0c\u5219sink connector\u652f\u6301\u7cbe\u786e\u4e00\u6b21\u3002 \u901a\u5e38\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u76ee\u6807\u6570\u636e\u5e93\u652f\u6301key\u53bb\u91cd\u3002\u4f8b\u5982 ",(0,o.yg)("inlineCode",{parentName:"li"},"MySQL"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"Kudu"),"\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u76ee\u6807\u652f\u6301 ",(0,o.yg)("strong",{parentName:"li"},"XA \u4e8b\u52a1"),"(\u4e8b\u52a1\u53ef\u4ee5\u8de8\u4f1a\u8bdd\u4f7f\u7528\uff0c\u5373\u4f7f\u521b\u5efa\u4e8b\u52a1\u7684\u7a0b\u5e8f\u5df2\u7ecf\u7ed3\u675f\uff0c\u65b0\u542f\u52a8\u7684\u7a0b\u5e8f\u4e5f\u53ea\u9700\u8981\u77e5\u9053\u6700\u540e\u4e00\u4e2a\u4e8b\u52a1\u7684ID\u5c31\u53ef\u4ee5\u91cd\u65b0\u63d0\u4ea4\u6216\u56de\u6eda\u4e8b\u52a1\uff09\u3002 \u7136\u540e\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.yg)("strong",{parentName:"li"},"\u4e24\u9636\u6bb5\u63d0\u4ea4")," \u6765\u786e\u4fdd * \u7cbe\u786e\u4e00\u6b21**\u3002 \u4f8b\u5982\uff1a",(0,o.yg)("inlineCode",{parentName:"li"},"File"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"MySQL"),".")),(0,o.yg)("h3",{id:"cdc\u66f4\u6539\u6570\u636e\u6355\u83b7change-data-capture"},"cdc(\u66f4\u6539\u6570\u636e\u6355\u83b7\uff0cchange data capture)"),(0,o.yg)("p",null,"\u5982\u679csink connector\u652f\u6301\u57fa\u4e8e\u4e3b\u952e\u5199\u5165\u884c\u7c7b\u578b\uff08INSERT/UPDATE_BEFORE/UPDATE_AFTER/DELETE\uff09\uff0c\u6211\u4eec\u8ba4\u4e3a\u5b83\u652f\u6301cdc\uff08\u66f4\u6539\u6570\u636e\u6355\u83b7\uff0cchange data capture\uff09\u3002"))}y.isMDXComponent=!0}}]);