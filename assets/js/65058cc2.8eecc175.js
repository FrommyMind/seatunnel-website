"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[56925],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=g(n),y=r,d=m["".concat(p,".").concat(y)]||m[y]||s[y]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},35809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={},o="Prometheus",i={unversionedId:"connector-v2/sink/Prometheus",id:"version-2.3.9/connector-v2/sink/Prometheus",title:"Prometheus",description:"Prometheus sink connector",source:"@site/versioned_docs/version-2.3.9/connector-v2/sink/Prometheus.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Prometheus",permalink:"/docs/2.3.9/connector-v2/sink/Prometheus",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/connector-v2/sink/Prometheus.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"PostgreSql",permalink:"/docs/2.3.9/connector-v2/sink/PostgreSql"},next:{title:"Pulsar",permalink:"/docs/2.3.9/connector-v2/sink/Pulsar"}},p={},g=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.8-beta 2024-08-22",id:"238-beta-2024-08-22",level:3}],u={toc:g},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"prometheus"},"Prometheus"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Prometheus sink connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.9/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.9/concept/connector-v2-features"},"cdc")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.9/concept/connector-v2-features"},"support multiple table write"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to launch web hooks using data."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,r.yg)("inlineCode",{parentName:"p"},'label: {"__name__": "test1"}, value: 1.2.3,time:2024-08-15T17:00:00'),"]",", the body content is the following: ",(0,r.yg)("inlineCode",{parentName:"p"},'{"label":{"__name__": "test1"}, "value":"1.23","time":"2024-08-15T17:00:00"}'))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tips: Prometheus sink only support ",(0,r.yg)("inlineCode",{parentName:"strong"},"post json")," webhook and the data from source will be treated as body content in web hook.And does not support passing past data")),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("p",null,"In order to use the Http connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Dependency"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Http"),(0,r.yg)("td",{parentName:"tr",align:null},"universal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/seatunnel-connectors-v2/connector-prometheus"},"Download"))))),(0,r.yg)("h2",{id:"sink-options"},"Sink Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Http request url")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"headers"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Http headers")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The max retry times if request http return to ",(0,r.yg)("inlineCode",{parentName:"td"},"IOException"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"The retry-backoff times(millis) multiplier if request http failed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_max_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum retry-backoff times(millis) if request http failed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect_timeout_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"12000"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection timeout setting, default 12s.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"socket_timeout_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"60000"),(0,r.yg)("td",{parentName:"tr",align:null},"Socket timeout setting, default 60s.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"prometheus timestamp  key .")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_label"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"prometheus label key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_value"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"prometheus value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"prometheus batch size write")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"flush_interval"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"300000L"),(0,r.yg)("td",{parentName:"tr",align:null},"prometheus flush commit interval")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.3.9/connector-v2/sink-common-options"},"Sink Common Options")," for details")))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"simple:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_double = double\n        c_timestamp = timestamp\n      }\n    }\n    plugin_output = "fake"\n    rows = [\n       {\n         kind = INSERT\n         fields = [{"__name__": "test1"},  1.23, "2024-08-15T17:00:00"]\n       },\n       {\n         kind = INSERT\n         fields = [{"__name__": "test2"},  1.23, "2024-08-15T17:00:00"]\n       }\n    ]\n  }\n}\n\n\nsink {\n  Prometheus {\n    url = "http://prometheus:9090/api/v1/write"\n    key_label = "c_map"\n    key_value = "c_double"\n    key_timestamp = "c_timestamp"\n    batch_size = 1\n  }\n}\n\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"238-beta-2024-08-22"},"2.3.8-beta 2024-08-22"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Http Sink Connector")))}s.isMDXComponent=!0}}]);