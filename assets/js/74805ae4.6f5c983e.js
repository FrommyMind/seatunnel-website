"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[96003,36339],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,u=c["".concat(m,".").concat(d)]||c[d]||s[d]||l;return a?n.createElement(u,o(o({ref:t},g),{},{components:a})):n.createElement(u,o({ref:t},g))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={},o=void 0,i={unversionedId:"connector-v2/changelog/connector-paimon",id:"connector-v2/changelog/connector-paimon",title:"connector-paimon",description:"Change Log",source:"@site/docs/connector-v2/changelog/connector-paimon.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-paimon",permalink:"/docs/connector-v2/changelog/connector-paimon",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/changelog/connector-paimon.md",tags:[],version:"current",frontMatter:{}},m={},p=[],g={toc:p},c="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Paimon]"," Customize the hadoop user  (#8888)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/2657626f93"},"https://github.com/apache/seatunnel/commit/2657626f93")),(0,r.yg)("td",{parentName:"tr",align:null},"dev")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-v2]","[Paimon]","PaimonCatalog close error message update (#8640)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/48253da8d6"},"https://github.com/apache/seatunnel/commit/48253da8d6")),(0,r.yg)("td",{parentName:"tr",align:null},"dev")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," restruct connector common options (#8634)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f3499a6eeb"},"https://github.com/apache/seatunnel/commit/f3499a6eeb")),(0,r.yg)("td",{parentName:"tr",align:null},"dev")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-v2]"," Support checkpoint in batch mode for paimon sink (#8333)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f22d4ebd4d"},"https://github.com/apache/seatunnel/commit/f22d4ebd4d")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-v2]"," Support schema evolution for paimon sink (#8211)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/57190e2a3b"},"https://github.com/apache/seatunnel/commit/57190e2a3b")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][dist]","add shade check rule (#8136)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51ef800016"},"https://github.com/apache/seatunnel/commit/51ef800016")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-v2]"," Support S3 filesystem of paimon connector (#8036)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e2a4772933"},"https://github.com/apache/seatunnel/commit/e2a4772933")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][transform]"," transform support explode (#7928)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/132278c06a"},"https://github.com/apache/seatunnel/commit/132278c06a")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Piamon Sink supports changelog-procuder is lookup and full-compaction mode (#7834)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c0f27c2f76"},"https://github.com/apache/seatunnel/commit/c0f27c2f76")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][connector-v2]","Fix Paimon table connector  Error log information. (#7873)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a3b49e6354"},"https://github.com/apache/seatunnel/commit/a3b49e6354")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-v2]"," Use checkpointId as the commit","'","s identifier instead of the hash for streaming write of paimon sink (#7835)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c7a384af2b"},"https://github.com/apache/seatunnel/commit/c7a384af2b")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][Connecotr-V2]"," Fix paimon dynamic bucket tale in primary key is not first (#7728)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/dc7f695537"},"https://github.com/apache/seatunnel/commit/dc7f695537")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-v2]"," Remove useless code and add changelog doc for paimon sink (#7748)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/846d876dc2"},"https://github.com/apache/seatunnel/commit/846d876dc2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][Connector-V2]"," Release resources even the task is crashed for paimon sink (#7726)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/5ddf8d461e"},"https://github.com/apache/seatunnel/commit/5ddf8d461e")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][Connector-V2]"," Fix paimon e2e error (#7721)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/61d1964361"},"https://github.com/apache/seatunnel/commit/61d1964361")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-Paimon]"," Support dynamic bucket splitting improves Paimon writing efficiency (#7335)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/bc0326cba8"},"https://github.com/apache/seatunnel/commit/bc0326cba8")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-v2]"," Support streaming read for paimon (#7681)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/4a2e27291c"},"https://github.com/apache/seatunnel/commit/4a2e27291c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][Seatunnel-common]"," Fix the CommonError msg for paimon sink (#7591)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d1f5db9257"},"https://github.com/apache/seatunnel/commit/d1f5db9257")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][CONNECTORS-V2-Paimon]"," Paimon Sink supported truncate table (#7560)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/4f3df22124"},"https://github.com/apache/seatunnel/commit/4f3df22124")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-v2]"," Improve the exception msg in case-sensitive case for paimon sink (#7549)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/7d31e5668c"},"https://github.com/apache/seatunnel/commit/7d31e5668c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][Connector-V2]"," Fixed lost data precision for decimal data types (#7527)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/df210ea73d"},"https://github.com/apache/seatunnel/commit/df210ea73d")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][API]"," Move catalog open to SaveModeHandler (#7439)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8c2c5c79a1"},"https://github.com/apache/seatunnel/commit/8c2c5c79a1")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector]"," Add multi-table sink option check (#7360)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/2489f6446b"},"https://github.com/apache/seatunnel/commit/2489f6446b")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.7")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"The isNullable attribute is true when the primary key field in the Paimon table converts the Column object. #7231 (#7242)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b0fe432e99"},"https://github.com/apache/seatunnel/commit/b0fe432e99")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Core]"," Support using upstream table placeholders in sink options and auto replacement (#7131)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c4ca74122c"},"https://github.com/apache/seatunnel/commit/c4ca74122c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Paimon]","support projection for paimon source (#6343)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6c1577267f"},"https://github.com/apache/seatunnel/commit/6c1577267f")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Paimon]"," Add check for the base type between source and sink before write. (#6953)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d56d64fc04"},"https://github.com/apache/seatunnel/commit/d56d64fc04")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Improve the paimon source (#6887)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/658643ae53"},"https://github.com/apache/seatunnel/commit/658643ae53")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][Connector-V2]"," Close the tableWrite when task is close (#6897)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/23a744b9b2"},"https://github.com/apache/seatunnel/commit/23a744b9b2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][Connector-V2]"," Field information lost during Paimon DataType and SeaTunnel Column conversion (#6767)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6cf6e41da7"},"https://github.com/apache/seatunnel/commit/6cf6e41da7")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Support hive catalog for paimon sink (#6833)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/4969c91dc4"},"https://github.com/apache/seatunnel/commit/4969c91dc4")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][Connector-V2]"," Fix the batch write with paimon (#6865)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9ec971d942"},"https://github.com/apache/seatunnel/commit/9ec971d942")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Doris]"," Add Doris type converter (#6354)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/5189991843"},"https://github.com/apache/seatunnel/commit/5189991843")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Support hadoop ha and kerberos for paimon sink (#6585)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/20b62f3bf3"},"https://github.com/apache/seatunnel/commit/20b62f3bf3")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Paimon]"," Support specify paimon table write properties, partition keys and primary keys (#6535)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/2b1234c7ae"},"https://github.com/apache/seatunnel/commit/2b1234c7ae")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Support multi-table sink feature for paimon #5652 (#6449)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b0abbd2d89"},"https://github.com/apache/seatunnel/commit/b0abbd2d89")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connectors-v2-Paimon]"," Adaptation Paimon 0.6 Version (#6061)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b32df930e9"},"https://github.com/apache/seatunnel/commit/b32df930e9")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Fix][Connectors-v2-Paimon]"," Flink table store failed to prepare commit (#6057)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c8dcefc3be"},"https://github.com/apache/seatunnel/commit/c8dcefc3be")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove use ",(0,r.yg)("inlineCode",{parentName:"td"},"SeaTunnelSink::getConsumedType")," method and mark it as deprecated (#5755)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8de7408100"},"https://github.com/apache/seatunnel/commit/8de7408100")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][Connector-V2]","[Paimon]"," Bump paimon-bundle version to 0.4.0-incubating (#5219)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/2917542bfa"},"https://github.com/apache/seatunnel/commit/2917542bfa")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," Documentation and partial word optimization. (#4936)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6e8de0e2a6"},"https://github.com/apache/seatunnel/commit/6e8de0e2a6")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Connector-V2][Paimon]"," Introduce paimon connector (#4178)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/da507bbe0e"},"https://github.com/apache/seatunnel/commit/da507bbe0e")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.2"))))))}s.isMDXComponent=!0},10467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),l=a(67412);const o={},i="Paimon",m={unversionedId:"connector-v2/source/Paimon",id:"connector-v2/source/Paimon",title:"Paimon",description:"Paimon source connector",source:"@site/docs/connector-v2/source/Paimon.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Paimon",permalink:"/docs/connector-v2/source/Paimon",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/source/Paimon.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"OssJindoFile",permalink:"/docs/connector-v2/source/OssJindoFile"},next:{title:"Persistiq",permalink:"/docs/connector-v2/source/Persistiq"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"warehouse string",id:"warehouse-string",level:3},{value:"catalog_type string",id:"catalog_type-string",level:3},{value:"catalog_uri string",id:"catalog_uri-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"hdfs_site_path string",id:"hdfs_site_path-string",level:3},{value:"query string",id:"query-string",level:3},{value:"paimon.hadoop.conf string",id:"paimonhadoopconf-string",level:3},{value:"paimon.hadoop.conf-path string",id:"paimonhadoopconf-path-string",level:3},{value:"Filesystems",id:"filesystems",level:2},{value:"Examples",id:"examples",level:2},{value:"Simple example",id:"simple-example",level:3},{value:"Filter example",id:"filter-example",level:3},{value:"S3 example",id:"s3-example",level:3},{value:"Hadoop conf example",id:"hadoop-conf-example",level:3},{value:"Hive catalog example",id:"hive-catalog-example",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Note",id:"note",level:3},{value:"Streaming read example",id:"streaming-read-example",level:3},{value:"Changelog",id:"changelog-1",level:2}],c={toc:g},s="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"paimon"},"Paimon"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Paimon source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read data from Apache Paimon."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"warehouse"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_type"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"filesystem")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_uri"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf-path"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"warehouse-string"},"warehouse ","[string]"),(0,r.yg)("p",null,"Paimon warehouse path"),(0,r.yg)("h3",{id:"catalog_type-string"},"catalog_type ","[string]"),(0,r.yg)("p",null,"Catalog type of Paimon, support filesystem and hive"),(0,r.yg)("h3",{id:"catalog_uri-string"},"catalog_uri ","[string]"),(0,r.yg)("p",null,"Catalog uri of Paimon, only needed when catalog_type is hive"),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"The database you want to access"),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"The table you want to access"),(0,r.yg)("h3",{id:"hdfs_site_path-string"},"hdfs_site_path ","[string]"),(0,r.yg)("p",null,"The file path of ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs-site.xml")),(0,r.yg)("h3",{id:"query-string"},"query ","[string]"),(0,r.yg)("p",null,"The filter condition of the table read. For example: ",(0,r.yg)("inlineCode",{parentName:"p"},"select * from st_test where id > 100"),". If not specified, all rows are read.\nCurrently, where conditions only support <, <=, >, >=, =, !=, or, and,is null, is not null, between...and, and others are not supported.\nThe Having, Group By, Order By clauses are currently unsupported, because these clauses are not supported by Paimon.\nThe projection and limit will be supported in the future."),(0,r.yg)("p",null,"Note: When the field after the where condition is a string or boolean value, its value must be enclosed in single quotes, otherwise an error will be reported. ",(0,r.yg)("inlineCode",{parentName:"p"},"For example: name='abc' or tag='true'"),"\nThe field data types currently supported by where conditions are as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"string"),(0,r.yg)("li",{parentName:"ul"},"boolean"),(0,r.yg)("li",{parentName:"ul"},"tinyint"),(0,r.yg)("li",{parentName:"ul"},"smallint"),(0,r.yg)("li",{parentName:"ul"},"int"),(0,r.yg)("li",{parentName:"ul"},"bigint"),(0,r.yg)("li",{parentName:"ul"},"float"),(0,r.yg)("li",{parentName:"ul"},"double"),(0,r.yg)("li",{parentName:"ul"},"date"),(0,r.yg)("li",{parentName:"ul"},"timestamp"),(0,r.yg)("li",{parentName:"ul"},"time")),(0,r.yg)("h3",{id:"paimonhadoopconf-string"},"paimon.hadoop.conf ","[string]"),(0,r.yg)("p",null,"Properties in hadoop conf"),(0,r.yg)("h3",{id:"paimonhadoopconf-path-string"},"paimon.hadoop.conf-path ","[string]"),(0,r.yg)("p",null,"The specified loading path for the 'core-site.xml', 'hdfs-site.xml', 'hive-site.xml' files"),(0,r.yg)("h2",{id:"filesystems"},"Filesystems"),(0,r.yg)("p",null,"The Paimon connector supports writing data to multiple file systems. Currently, the supported file systems are hdfs and s3.\nIf you use the s3 filesystem. You can configure the ",(0,r.yg)("inlineCode",{parentName:"p"},"fs.s3a.access-key"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"fs.s3a.secret-key"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"fs.s3a.endpoint"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"fs.s3a.path.style.access"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"fs.s3a.aws.credentials.provider")," properties in the ",(0,r.yg)("inlineCode",{parentName:"p"},"paimon.hadoop.conf")," option.\nBesides, the warehouse should start with ",(0,r.yg)("inlineCode",{parentName:"p"},"s3a://"),"."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"simple-example"},"Simple example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n Paimon {\n     warehouse = "/tmp/paimon"\n     database = "default"\n     table = "st_test"\n   }\n}\n')),(0,r.yg)("h3",{id:"filter-example"},"Filter example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Paimon {\n    warehouse = "/tmp/paimon"\n    database = "full_type"\n    table = "st_test"\n    query = "select c_boolean, c_tinyint from st_test where c_boolean= \'true\' and c_tinyint > 116 and c_smallint = 15987 or c_decimal=\'2924137191386439303744.39292213\'"\n  }\n}\n')),(0,r.yg)("h3",{id:"s3-example"},"S3 example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Paimon {\n    warehouse = "s3a://test/"\n    database = "seatunnel_namespace11"\n    table = "st_test"\n    paimon.hadoop.conf = {\n        fs.s3a.access-key=G52pnxg67819khOZ9ezX\n        fs.s3a.secret-key=SHJuAQqHsLrgZWikvMa3lJf5T0NfM5LMFliJh9HF\n        fs.s3a.endpoint="http://minio4:9000"\n        fs.s3a.path.style.access=true\n        fs.s3a.aws.credentials.provider=org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider\n    }\n  }\n}\n\nsink {\n  Console{}\n}\n')),(0,r.yg)("h3",{id:"hadoop-conf-example"},"Hadoop conf example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="hdfs:///tmp/paimon"\n    database="seatunnel_namespace1"\n    table="st_test"\n    query = "select * from st_test where pk_id is not null and pk_id < 3"\n    paimon.hadoop.conf = {\n      hadoop_user_name = "hdfs"\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"hive-catalog-example"},"Hive catalog example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Paimon {\n    catalog_name="seatunnel_test"\n    catalog_type="hive"\n    catalog_uri="thrift://hadoop04:9083"\n    warehouse="hdfs:///tmp/seatunnel"\n    database="seatunnel_test"\n    table="st_test3"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n    }\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("p",null,"If you want to read the changelog of the Paimon table, first set the ",(0,r.yg)("inlineCode",{parentName:"p"},"changelog-producer")," for the Paimon source table and then use the SeaTunnel stream task to read it."),(0,r.yg)("h3",{id:"note"},"Note"),(0,r.yg)("p",null,"Currently, batch reads are always the latest snapshot read, so to read full changelog data, you need to use stream reads and start stream reads before writing data to the Piamon table, and to ensure order, the parallelism of the stream read task should be set to 1."),(0,r.yg)("h3",{id:"streaming-read-example"},"Streaming read example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "Streaming"\n}\n\nsource {\n  Paimon {\n    warehouse = "/tmp/paimon"\n    database = "full_type"\n    table = "st_test"\n  }\n}\n\nsink {\n  Paimon {\n    warehouse = "/tmp/paimon"\n    database = "full_type"\n    table = "st_test_sink"\n    paimon.table.primary-keys = "c_tinyint"\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog-1"},"Changelog"),(0,r.yg)(l.default,{mdxType:"ChangeLog"}))}d.isMDXComponent=!0}}]);