"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[84242,54433],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,y=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(y,o(o({ref:t},m),{},{components:a})):n.createElement(y,o({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var g={};for(var i in t)hasOwnProperty.call(t,i)&&(g[i]=t[i]);g.originalType=e,g[u]="string"==typeof e?e:r,o[1]=g;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={},o=void 0,g={unversionedId:"connector-v2/changelog/connector-iotdb",id:"connector-v2/changelog/connector-iotdb",title:"connector-iotdb",description:"Change Log",source:"@site/docs/connector-v2/changelog/connector-iotdb.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-iotdb",permalink:"/docs/connector-v2/changelog/connector-iotdb",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/changelog/connector-iotdb.md",tags:[],version:"current",frontMatter:{}},i={},p=[],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[improve]"," iotdb options (#8965)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6e073935f4"},"https://github.com/apache/seatunnel/commit/6e073935f4")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," restruct connector common options (#8634)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f3499a6eeb"},"https://github.com/apache/seatunnel/commit/f3499a6eeb")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][dist]","add shade check rule (#8136)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51ef800016"},"https://github.com/apache/seatunnel/commit/51ef800016")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove use ",(0,r.yg)("inlineCode",{parentName:"td"},"SeaTunnelSink::getConsumedType")," method and mark it as deprecated (#5755)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8de7408100"},"https://github.com/apache/seatunnel/commit/8de7408100")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Support config column/primaryKey/constraintKey in schema (#5564)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/eac76b4e50"},"https://github.com/apache/seatunnel/commit/eac76b4e50")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Doc]"," update iotdb document (#5404)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/856aedb3c9"},"https://github.com/apache/seatunnel/commit/856aedb3c9")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Remove scheduler in IoTDB sink (#5270)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/299637868c"},"https://github.com/apache/seatunnel/commit/299637868c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix]"," Fix com.google.common.base.Preconditions to seatunnel shade one (#5284)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/ed5eadcf73"},"https://github.com/apache/seatunnel/commit/ed5eadcf73")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Merge branch ","'","dev","'"," into merge/cdc"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/4324ee1912"},"https://github.com/apache/seatunnel/commit/4324ee1912")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/423b583038"},"https://github.com/apache/seatunnel/commit/423b583038")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[improve][api]"," Refactoring schema parse (#4157)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b2f573a13e"},"https://github.com/apache/seatunnel/commit/b2f573a13e")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][build]"," Give the maven module a human readable name (#4114)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d7cd601051"},"https://github.com/apache/seatunnel/commit/d7cd601051")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin. (#4101)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a2ab166561"},"https://github.com/apache/seatunnel/commit/a2ab166561")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][SourceConnector]"," Unified schema parameter, update IoTDB sou\u2026 (#3896)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a0959c5fd1"},"https://github.com/apache/seatunnel/commit/a0959c5fd1")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector]"," add get source method to all source connector (#3846)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/417178fb84"},"https://github.com/apache/seatunnel/commit/417178fb84")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][API &amp; Connector &amp; Doc]"," add parallelism and column projection interface (#3829)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b9164b8ba1"},"https://github.com/apache/seatunnel/commit/b9164b8ba1")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][OptionRule]"," Fix option rule about all connectors (#3592)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/226dc6a119"},"https://github.com/apache/seatunnel/commit/226dc6a119")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]","[Iotdb]"," Unified exception for iotdb source ","&"," sink connector (#3557)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/7353fed6d6"},"https://github.com/apache/seatunnel/commit/7353fed6d6")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector V2]"," expose configurable options in IoTDB (#3387)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/06359ea76a"},"https://github.com/apache/seatunnel/commit/06359ea76a")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]","[IotDB]","Add IotDB sink parameter check (#3412)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/91240a3dcb"},"https://github.com/apache/seatunnel/commit/91240a3dcb")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Bug][Connector-v2]"," Fix IoTDB connector sink NPE (#3080)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e5edf02433"},"https://github.com/apache/seatunnel/commit/e5edf02433")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Imporve][Connector-V2]"," Imporve iotdb connector (#2917)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/3da11ce19b"},"https://github.com/apache/seatunnel/commit/3da11ce19b")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[DEV][Api]"," Replace SeaTunnelContext with JobContext and remove singleton pattern (#2706)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/cbf82f755c"},"https://github.com/apache/seatunnel/commit/cbf82f755c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[#2606]","Dependency management split (#2630)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/fc047be69b"},"https://github.com/apache/seatunnel/commit/fc047be69b")),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[chore][connector-common]"," Rename SeatunnelSchema to SeaTunnelSchema (#2538)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/7dc2a27388"},"https://github.com/apache/seatunnel/commit/7dc2a27388")),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Connectors-V2]","Support IoTDB Source (#2431)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/7b78d6c922"},"https://github.com/apache/seatunnel/commit/7b78d6c922")),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Support IoTDB sink (#2407)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c1bbbd59d5"},"https://github.com/apache/seatunnel/commit/c1bbbd59d5")),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta"))))))}c.isMDXComponent=!0},4689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(58168),r=(a(96540),a(15680)),l=a(43800);const o={},g="IoTDB",i={unversionedId:"connector-v2/source/IoTDB",id:"connector-v2/source/IoTDB",title:"IoTDB",description:"IoTDB source connector",source:"@site/docs/connector-v2/source/IoTDB.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/IoTDB",permalink:"/docs/connector-v2/source/IoTDB",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/source/IoTDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"InfluxDB",permalink:"/docs/connector-v2/source/InfluxDB"},next:{title:"JDBC",permalink:"/docs/connector-v2/source/Jdbc"}},p={},m=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Description",id:"description",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Key features",id:"key-features",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"split partitions",id:"split-partitions",level:3},{value:"num_partitions int",id:"num_partitions-int",level:4},{value:"upper_bound long",id:"upper_bound-long",level:3},{value:"lower_bound long",id:"lower_bound-long",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:m},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"iotdb"},"IoTDB"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"IoTDB source connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read external data source data through IoTDB."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"There is a conflict of thrift version between IoTDB and Spark.Therefore, you need to execute ",(0,r.yg)("inlineCode",{parentName:"p"},"rm -f $SPARK_HOME/jars/libthrift*")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"cp $IOTDB_HOME/lib/libthrift* $SPARK_HOME/jars/")," to resolve it.")),(0,r.yg)("h2",{id:"using-dependency"},"Using Dependency"),(0,r.yg)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.apache.iotdb/iotdb-jdbc"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,r.yg)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.apache.iotdb/iotdb-jdbc"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection"))),(0,r.yg)("p",null,"supports query SQL and can achieve projection effect."),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Url"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IoTDB"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},">= 0.13.0")),(0,r.yg)("td",{parentName:"tr",align:null},"localhost:6667")))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"IotDB Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT32"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT32"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT32"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT64"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TEXT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_urls"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"IoTDB")," cluster address, the format is ",(0,r.yg)("inlineCode",{parentName:"td"},'"host1:port"')," or ",(0,r.yg)("inlineCode",{parentName:"td"},'"host1:port,host2:port"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"IoTDB")," user username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"IoTDB")," user password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sql"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"execute sql statement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"the data schema")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fetch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"the fetch_size of the IoTDB when you select")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lower_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"the lower_bound of the IoTDB when you select")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"upper_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"the upper_bound of the IoTDB when you select")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"num_partitions"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"the num_partitions of the IoTDB when you select")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"thrift_default_buffer_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"the thrift_default_buffer_size of the IoTDB when you select")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"thrift_max_frame_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"the thrift max frame size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_cache_leader"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"enable_cache_leader of the IoTDB when you select")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"SQL semantic version used by the client, The possible values are: V_0_12, V_0_13")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"split-partitions"},"split partitions"),(0,r.yg)("p",null,"we can split the partitions of the IoTDB and we used time column split"),(0,r.yg)("h4",{id:"num_partitions-int"},"num_partitions ","[int]"),(0,r.yg)("p",null,"split num"),(0,r.yg)("h3",{id:"upper_bound-long"},"upper_bound ","[long]"),(0,r.yg)("p",null,"upper bound of the time column"),(0,r.yg)("h3",{id:"lower_bound-long"},"lower_bound ","[long]"),(0,r.yg)("p",null,"lower bound of the time column"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'     split the time range into numPartitions parts\n     if numPartitions is 1, use the whole time range\n     if numPartitions < (upper_bound - lower_bound), use (upper_bound - lower_bound) partitions\n     \n     eg: lower_bound = 1, upper_bound = 10, numPartitions = 2\n     sql = "select * from test where age > 0 and age < 10"\n     \n     split result\n\n     split 1: select * from test  where (time >= 1 and time < 6)  and (  age > 0 and age < 10 )\n     \n     split 2: select * from test  where (time >= 6 and time < 11) and (  age > 0 and age < 10 )\n\n')),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/connector-v2/source-common-options"},"Source Common Options")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 2\n  job.mode = "BATCH"\n}\n\nsource {\n  IoTDB {\n    node_urls = "localhost:6667"\n    username = "root"\n    password = "root"\n    sql = "SELECT temperature, moisture, c_int, c_bigint, c_float, c_double, c_string, c_boolean FROM root.test_group.* WHERE time < 4102329600000 align by device"\n    schema {\n      fields {\n        ts = timestamp\n        device_name = string\n        temperature = float\n        moisture = bigint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_string = string\n        c_boolean = boolean\n      }\n    }\n  }\n}\n\nsink {\n  Console {\n  }\n}\n')),(0,r.yg)("p",null,"Upstream ",(0,r.yg)("inlineCode",{parentName:"p"},"IoTDB")," data format is the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"IoTDB> SELECT temperature, moisture, c_int, c_bigint, c_float, c_double, c_string, c_boolean FROM root.test_group.* WHERE time < 4102329600000 align by device;\n+------------------------+------------------------+--------------+-----------+--------+--------------+----------+---------+---------+----------+\n|                    Time|                  Device|   temperature|   moisture|   c_int|      c_bigint|   c_float| c_double| c_string| c_boolean|\n+------------------------+------------------------+--------------+-----------+--------+--------------+----------+---------+---------+----------+\n|2022-09-25T00:00:00.001Z|root.test_group.device_a|          36.1|        100|       1|   21474836470|      1.0f|     1.0d|      abc|      true|\n|2022-09-25T00:00:00.001Z|root.test_group.device_b|          36.2|        101|       2|   21474836470|      2.0f|     2.0d|      abc|      true|\n|2022-09-25T00:00:00.001Z|root.test_group.device_c|          36.3|        102|       3|   21474836470|      3.0f|     3.0d|      abc|      true|\n+------------------------+------------------------+--------------+-----------+--------+--------------+----------+---------+---------+----------+\n")),(0,r.yg)("p",null,"Loaded to SeaTunnelRow data format is the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ts"),(0,r.yg)("th",{parentName:"tr",align:null},"device_name"),(0,r.yg)("th",{parentName:"tr",align:null},"temperature"),(0,r.yg)("th",{parentName:"tr",align:null},"moisture"),(0,r.yg)("th",{parentName:"tr",align:null},"c_int"),(0,r.yg)("th",{parentName:"tr",align:null},"c_bigint"),(0,r.yg)("th",{parentName:"tr",align:null},"c_float"),(0,r.yg)("th",{parentName:"tr",align:null},"c_double"),(0,r.yg)("th",{parentName:"tr",align:null},"c_string"),(0,r.yg)("th",{parentName:"tr",align:null},"c_boolean"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1664035200001"),(0,r.yg)("td",{parentName:"tr",align:null},"root.test_group.device_a"),(0,r.yg)("td",{parentName:"tr",align:null},"36.1"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"21474836470"),(0,r.yg)("td",{parentName:"tr",align:null},"1.0f"),(0,r.yg)("td",{parentName:"tr",align:null},"1.0d"),(0,r.yg)("td",{parentName:"tr",align:null},"abc"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1664035200001"),(0,r.yg)("td",{parentName:"tr",align:null},"root.test_group.device_b"),(0,r.yg)("td",{parentName:"tr",align:null},"36.2"),(0,r.yg)("td",{parentName:"tr",align:null},"101"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"21474836470"),(0,r.yg)("td",{parentName:"tr",align:null},"2.0f"),(0,r.yg)("td",{parentName:"tr",align:null},"2.0d"),(0,r.yg)("td",{parentName:"tr",align:null},"abc"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1664035200001"),(0,r.yg)("td",{parentName:"tr",align:null},"root.test_group.device_c"),(0,r.yg)("td",{parentName:"tr",align:null},"36.3"),(0,r.yg)("td",{parentName:"tr",align:null},"102"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"21474836470"),(0,r.yg)("td",{parentName:"tr",align:null},"3.0f"),(0,r.yg)("td",{parentName:"tr",align:null},"3.0d"),(0,r.yg)("td",{parentName:"tr",align:null},"abc"),(0,r.yg)("td",{parentName:"tr",align:null},"true")))),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)(l.default,{mdxType:"ChangeLog"}))}d.isMDXComponent=!0}}]);