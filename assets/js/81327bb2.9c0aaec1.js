"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26042],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const o={},i="SeaTunnel 2.1.3 released! Introducing in Assert Sink connector and NullRate, Nulltf Transform",l={permalink:"/blog/2022/09/12/SeaTunnel-2.1.3-released",editUrl:"https://github.com/apache/seatunnel-website/edit/main/blog/2022-09-12-SeaTunnel-2.1.3-released.md",source:"@site/blog/2022-09-12-SeaTunnel-2.1.3-released.md",title:"SeaTunnel 2.1.3 released! Introducing in Assert Sink connector and NullRate, Nulltf Transform",description:"More than a month after the release of Apache SeaTunnel(Incubating) 2.1.2, we have been collecting user and developer feedback to bring you version 2.1.3. The new version introduces the Assert Sink connector, which is an inurgent need in the community, and two Transforms, NullRate and Nulltf. Some usability problems in the previous version have also been fixed, improving stability and efficiency.",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[],readingTime:2.885,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Talk With Overseas contributors | Why do I contribute to SeaTunnel?",permalink:"/blog/2022/09/14/Talk-With-Overseas-contributors-Why-do-I-contribute-to-SeaTunnel"},nextItem:{title:"Upcoming API Connector Development Analysis",permalink:"/blog/Upcoming API Connector Development Analysis"}},s={authorsImageUrls:[]},u=[{value:"Major feature updates",id:"major-feature-updates",level:2},{value:"Introduces Assert Sink connector",id:"introduces-assert-sink-connector",level:3},{value:"Add two Transforms",id:"add-two-transforms",level:3},{value:"ClickhouseFile connector supports Rsync data transfer method now",id:"clickhousefile-connector-supports-rsync-data-transfer-method-now",level:3},{value:"Specific feature updates:",id:"specific-feature-updates",level:3},{value:"Optimization",id:"optimization",level:3},{value:"Bug Fix",id:"bug-fix",level:3},{value:"Acknowledgment",id:"acknowledgment",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*7jtTFNpvwC6nquA-BLfqGg.png",alt:null})),(0,r.yg)("p",null,"More than a month after the release of Apache SeaTunnel(Incubating) 2.1.2, we have been collecting user and developer feedback to bring you version 2.1.3. The new version introduces the Assert Sink connector, which is an inurgent need in the community, and two Transforms, NullRate and Nulltf. Some usability problems in the previous version have also been fixed, improving stability and efficiency."),(0,r.yg)("p",null,"This article will introduce the details of the update of Apache SeaTunnel(Incubating) ",(0,r.yg)("strong",{parentName:"p"},"version 2.1.3"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Release Note: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/blob/2.1.3/release-note.md"},"https://github.com/apache/incubator-seatunnel/blob/2.1.3/release-note.md")),(0,r.yg)("li",{parentName:"ul"},"Download address: ",(0,r.yg)("a",{parentName:"li",href:"https://seatunnel.apache.org/download"},"https://seatunnel.apache.org/download"))),(0,r.yg)("h2",{id:"major-feature-updates"},"Major feature updates"),(0,r.yg)("h3",{id:"introduces-assert-sink-connector"},"Introduces Assert Sink connector"),(0,r.yg)("p",null,"Assert Sink connector is introduced in SeaTunnel version 2.1.3to verify data correctness. Special thanks to Lhyundeadsoul for his contribution."),(0,r.yg)("h3",{id:"add-two-transforms"},"Add two Transforms"),(0,r.yg)("p",null,"In addition, the 2.1.3 version also adds two Transforms, NullRate and Nulltf, which are used to detect data quality and convert null values \u200b\u200bin the data to generate default values. These two Transforms can effectively improve the availability of data and reduce the frequency of abnormal situations. Special thanks to wsyhj and Interest1-wyt for their contributions."),(0,r.yg)("p",null,"At present, SeaTunnel has supported 9 types of Transforms including Common Options, Json, NullRate, Nulltf, Replace, Split, SQL, UDF, and UUID, and the community is welcome to contribute more Transform types."),(0,r.yg)("p",null,"For details of Transform, please refer to the official documentation: ",(0,r.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/2.1.3/category/transform"},"https://seatunnel.apache.org/docs/2.1.3/category/transform")),(0,r.yg)("h3",{id:"clickhousefile-connector-supports-rsync-data-transfer-method-now"},"ClickhouseFile connector supports Rsync data transfer method now"),(0,r.yg)("p",null,"At the same time, SeaTunnel 2.1.3 version brings Rsync data transfer mode support to ClickhouseFile connector, users can now choose SCP and Rsync data transfer modes. Thanks to Emor-nj for contributing to this feature."),(0,r.yg)("h3",{id:"specific-feature-updates"},"Specific feature updates:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Flink Fake data supports BigInteger type ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2118"},"https://github.com/apache/incubator-seatunnel/pull/2118")),(0,r.yg)("li",{parentName:"ul"},"Add Flink Assert Sink connector ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2022"},"https://github.com/apache/incubator-seatunnel/pull/2022")),(0,r.yg)("li",{parentName:"ul"},"Spark ClickhouseFile connector supports Rsync data file transfer method ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2074"},"https://github.com/apache/incubator-seatunnel/pull/2074")),(0,r.yg)("li",{parentName:"ul"},"Add Flink Assert Sink e2e module ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2036"},"https://github.com/apache/incubator-seatunnel/pull/2036")),(0,r.yg)("li",{parentName:"ul"},"Add NullRate Transform for detecting data quality ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/1978"},"https://github.com/apache/incubator-seatunnel/pull/1978")),(0,r.yg)("li",{parentName:"ul"},"Add Nulltf Transform for setting defaults ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/1958"},"https://github.com/apache/incubator-seatunnel/pull/1958"))),(0,r.yg)("h3",{id:"optimization"},"Optimization"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Refactored Spark TiDB-related parameter information"),(0,r.yg)("li",{parentName:"ul"},"Refactor the code to remove redundant code warning information"),(0,r.yg)("li",{parentName:"ul"},"Optimize connector jar package loading logic"),(0,r.yg)("li",{parentName:"ul"},"Add Plugin Discovery module"),(0,r.yg)("li",{parentName:"ul"},"Add documentation for some modules"),(0,r.yg)("li",{parentName:"ul"},"Upgrade common-collection from version 4 to 4.4"),(0,r.yg)("li",{parentName:"ul"},"Upgrade common-codec version to 1.13")),(0,r.yg)("h3",{id:"bug-fix"},"Bug Fix"),(0,r.yg)("p",null,"In addition, in response to the feedback from users of version 2.1.2, we also fixed some usability issues, such as the inability to use the same components of Source and Sink, and further improved the stability."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the problem of Hudi Source loading twice"),(0,r.yg)("li",{parentName:"ul"},"Fix the problem that the field TwoPhaseCommit is not recognized after Doris 0.15"),(0,r.yg)("li",{parentName:"ul"},"Fixed abnormal data output when accessing Hive using Spark JDBC"),(0,r.yg)("li",{parentName:"ul"},"Fix JDBC data loss when partition_column (partition mode) is set"),(0,r.yg)("li",{parentName:"ul"},"Fix KafkaTableStream schema JSON parsing error"),(0,r.yg)("li",{parentName:"ul"},"Fix Shell script getting APP_DIR path error"),(0,r.yg)("li",{parentName:"ul"},"Updated Flink RunMode enumeration to get correct help messages for run modes"),(0,r.yg)("li",{parentName:"ul"},"Fix the same source and sink registered connector cache error"),(0,r.yg)("li",{parentName:"ul"},"Fix command line parameter -t( \u2014 check) conflict with Flink deployment target parameter"),(0,r.yg)("li",{parentName:"ul"},"Fix Jackson type conversion error problem"),(0,r.yg)("li",{parentName:"ul"},"Fix the problem of failure to run scripts in paths other than SeaTunnel_Home")),(0,r.yg)("h3",{id:"acknowledgment"},"Acknowledgment"),(0,r.yg)("p",null,"Thanks to all the contributors (GitHub ID, in no particular order,), it is your efforts that fuel the launch of this version, and we look forward to more contributions to the Apache SeaTunnel(Incubating) community!"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"leo65535, CalvinKirs, mans2singh, ashulin, wanghuan2054, lhyundeadsoul, tobezhou33, Hisoka-X, ic4y, wsyhj, Emor-nj, gleiyu, smallhibiscus, Bingz2, kezhenxu94, youyangkou, immustard, Interest1-wyt, superzhang0929, gaaraG, runwenjun")))}d.isMDXComponent=!0}}]);