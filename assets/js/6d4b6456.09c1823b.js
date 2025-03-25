"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[51732],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,y=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const a={},i="How To Add New License",l={unversionedId:"contribution/new-license",id:"version-2.1.3/contribution/new-license",title:"How To Add New License",description:"ASF 3RD PARTY LICENSE POLICY",source:"@site/versioned_docs/version-2.1.3/contribution/new-license.md",sourceDirName:"contribution",slug:"/contribution/new-license",permalink:"/docs/2.1.3/contribution/new-license",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.3/contribution/new-license.md",tags:[],version:"2.1.3",frontMatter:{},sidebar:"docs",previous:{title:"Set Up Develop Environment",permalink:"/docs/2.1.3/contribution/setup"},next:{title:"FAQ",permalink:"/docs/2.1.3/faq"}},s={},c=[{value:"ASF 3RD PARTY LICENSE POLICY",id:"asf-3rd-party-license-policy",level:3},{value:"How to Legally Use 3rd Party Open-source Software in the SeaTunnel",id:"how-to-legally-use-3rd-party-open-source-software-in-the-seatunnel",level:3},{value:"SeaTunnel-License Check Rules",id:"seatunnel-license-check-rules",level:3},{value:"References",id:"references",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"how-to-add-new-license"},"How To Add New License"),(0,o.yg)("h3",{id:"asf-3rd-party-license-policy"},"ASF 3RD PARTY LICENSE POLICY"),(0,o.yg)("p",null,"You have to pay attention to the following open-source software protocols which Apache projects support when you intend to add a new feature to the SeaTunnel (or other Apache projects), which functions refers to other open-source software references."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF 3RD PARTY LICENSE POLICY")),(0,o.yg)("p",null,"If the 3rd party software is not present at the above policy, we could't that accept your code."),(0,o.yg)("h3",{id:"how-to-legally-use-3rd-party-open-source-software-in-the-seatunnel"},"How to Legally Use 3rd Party Open-source Software in the SeaTunnel"),(0,o.yg)("p",null,"Moreover, when we intend to refer a new software ( not limited to 3rd party jar, text, CSS, js, pics, icons, audios etc and modifications based on 3rd party files) to our project, we need to use them legally in addition to the permission of ASF. Refer to the following article:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://apache.org/dev/licensing-howto.html"},'COMMUNITY-LED DEVELOPMENT "THE APACHE WAY"'))),(0,o.yg)("p",null,'For example, we should contain the NOTICE file (most of open-source project has NOTICE file, generally under root directory) of ZooKeeper in our project when we are using ZooKeeper. As the Apache explains, "Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work.'),(0,o.yg)("p",null,"We are not going to dive into every 3rd party open-source license policy in here, you may look up them if interested."),(0,o.yg)("h3",{id:"seatunnel-license-check-rules"},"SeaTunnel-License Check Rules"),(0,o.yg)("p",null,"In general, we would have our License-check scripts to our project. SeaTunnel-License-Check is provided by ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/skywalking"},"SkyWalking")," which differ a bit from other open-source projects. All in all, we are trying to make sure avoiding the license issues at the first time."),(0,o.yg)("p",null,"We need to follow the following steps when we need to add new jars or external resources:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add the name and the version of the jar file in the known-dependencies.txt"),(0,o.yg)("li",{parentName:"ul"},"Add relevant maven repository address under 'seatunnel-dist/release-docs/LICENSE' directory"),(0,o.yg)("li",{parentName:"ul"},"Append relevant NOTICE files under 'seatunnel-dist/release-docs/NOTICE' directory and make sure they are no different to the original repository"),(0,o.yg)("li",{parentName:"ul"},"Add relevant source code protocols under 'seatunnel-dist/release-docs/licenses' directory and the file name should be named as license+filename.txt. Eg: license-zk.txt")),(0,o.yg)("h3",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://apache.org/dev/licensing-howto.html"},'COMMUNITY-LED DEVELOPMENT "THE APACHE WAY"')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://apache.org/legal/resolved.html"},"ASF 3RD PARTY LICENSE POLICY"))))}d.isMDXComponent=!0}}]);