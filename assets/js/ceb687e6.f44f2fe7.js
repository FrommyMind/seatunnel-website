"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[14005],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return t?o.createElement(g,a(a({ref:n},s),{},{components:t})):o.createElement(g,a({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},95054:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(58168),r=(t(96540),t(15680));const i={},a="Seatunnel Runs On Flink",l={unversionedId:"other-engine/flink",id:"version-2.3.9/other-engine/flink",title:"Seatunnel Runs On Flink",description:"Flink is a powerful high-performance distributed stream processing engine. More information about it you can search for Apache Flink",source:"@site/versioned_docs/version-2.3.9/other-engine/flink.md",sourceDirName:"other-engine",slug:"/other-engine/flink",permalink:"/docs/2.3.9/other-engine/flink",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/other-engine/flink.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"Web UI",permalink:"/docs/2.3.9/seatunnel-engine/web-ui"},next:{title:"SeaTunnel Runs On Spark",permalink:"/docs/2.3.9/other-engine/spark"}},c={},p=[{value:"Set Flink Configuration Information In The Job",id:"set-flink-configuration-information-in-the-job",level:3},{value:"How To Set Up A Simple Flink Job",id:"how-to-set-up-a-simple-flink-job",level:3},{value:"How To Run A Job In A Project",id:"how-to-run-a-job-in-a-project",level:3}],s={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"seatunnel-runs-on-flink"},"Seatunnel Runs On Flink"),(0,r.yg)("p",null,"Flink is a powerful high-performance distributed stream processing engine. More information about it you can search for ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache Flink")),(0,r.yg)("h3",{id:"set-flink-configuration-information-in-the-job"},"Set Flink Configuration Information In The Job"),(0,r.yg)("p",null,"Begin with ",(0,r.yg)("inlineCode",{parentName:"p"},"flink.")),(0,r.yg)("p",null,"Example:\nI set a precise Checkpoint for this job"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"env {\n  parallelism = 1  \n  flink.execution.checkpointing.unaligned.enabled=true\n}\n")),(0,r.yg)("p",null,"Enumeration types are not currently supported, you need to specify them in the Flink conf file ,Only these types of Settings are supported for the time being:",(0,r.yg)("br",null),"\nInteger/Boolean/String/Duration"),(0,r.yg)("h3",{id:"how-to-set-up-a-simple-flink-job"},"How To Set Up A Simple Flink Job"),(0,r.yg)("p",null,"This is a simple job that runs on Flink. Randomly generated data is printed to the console"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  # common parameter\n  parallelism = 1\n  checkpoint.interval = 5000\n\n  # flink special parameter\n  flink.execution.checkpointing.mode = "EXACTLY_ONCE"\n  flink.execution.checkpointing.timeout = 600000\n}\n\nsource {\n  FakeSource {\n    row.num = 16\n    plugin_output = "fake_table"\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_int = int\n        c_bigint = bigint\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(33, 18)"\n        c_timestamp = timestamp\n        c_row = {\n          c_map = "map<string, string>"\n          c_array = "array<int>"\n          c_string = string\n          c_boolean = boolean\n          c_int = int\n          c_bigint = bigint\n          c_double = double\n          c_bytes = bytes\n          c_date = date\n          c_decimal = "decimal(33, 18)"\n          c_timestamp = timestamp\n        }\n      }\n    }\n  }\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n  # please go to https://seatunnel.apache.org/docs/transform-v2/sql\n}\n\nsink{\n   Console{}   \n}\n')),(0,r.yg)("h3",{id:"how-to-run-a-job-in-a-project"},"How To Run A Job In A Project"),(0,r.yg)("p",null,"After you pull the code to the local, go to the ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel-examples/seatunnel-flink-connector-v2-example")," module and find ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.example.flink.v2.SeaTunnelApiExample")," to complete the operation of the job."))}m.isMDXComponent=!0}}]);