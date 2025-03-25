"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26714],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(58168),i=(t(96540),t(15680));const r={},o="Job Env Config",l={unversionedId:"concept/JobEnvConfig",id:"concept/JobEnvConfig",title:"Job Env Config",description:"This document describes env configuration information. The common parameters can be used in all engines. In order to better distinguish between engine parameters, the additional parameters of other engine need to carry a prefix.",source:"@site/docs/concept/JobEnvConfig.md",sourceDirName:"concept",slug:"/concept/JobEnvConfig",permalink:"/docs/concept/JobEnvConfig",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/concept/JobEnvConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Intro To Schema Feature",permalink:"/docs/concept/schema-feature"},next:{title:"Sink Options Placeholders",permalink:"/docs/concept/sink-options-placeholders"}},p={},c=[{value:"Common Parameter",id:"common-parameter",level:2},{value:"job.name",id:"jobname",level:3},{value:"jars",id:"jars",level:3},{value:"job.mode",id:"jobmode",level:3},{value:"checkpoint.interval",id:"checkpointinterval",level:3},{value:"checkpoint.timeout",id:"checkpointtimeout",level:3},{value:"parallelism",id:"parallelism",level:3},{value:"shade.identifier",id:"shadeidentifier",level:3},{value:"Zeta Engine Parameter",id:"zeta-engine-parameter",level:2},{value:"job.retry.times",id:"jobretrytimes",level:3},{value:"job.retry.interval.seconds",id:"jobretryintervalseconds",level:3},{value:"savemode.execute.location",id:"savemodeexecutelocation",level:3},{value:"Flink Engine Parameter",id:"flink-engine-parameter",level:2},{value:"Spark Engine Parameter",id:"spark-engine-parameter",level:2}],s={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(m,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"job-env-config"},"Job Env Config"),(0,i.yg)("p",null,"This document describes env configuration information. The common parameters can be used in all engines. In order to better distinguish between engine parameters, the additional parameters of other engine need to carry a prefix.\nIn flink engine, we use ",(0,i.yg)("inlineCode",{parentName:"p"},"flink.")," as the prefix. In the spark engine, we do not use any prefixes to modify parameters, because the official spark parameters themselves start with ",(0,i.yg)("inlineCode",{parentName:"p"},"spark.")),(0,i.yg)("h2",{id:"common-parameter"},"Common Parameter"),(0,i.yg)("p",null,"The following configuration parameters are common to all engines."),(0,i.yg)("h3",{id:"jobname"},"job.name"),(0,i.yg)("p",null,"This parameter configures the task name."),(0,i.yg)("h3",{id:"jars"},"jars"),(0,i.yg)("p",null,"Third-party packages can be loaded via ",(0,i.yg)("inlineCode",{parentName:"p"},"jars"),", like ",(0,i.yg)("inlineCode",{parentName:"p"},'jars="file://local/jar1.jar;file://local/jar2.jar"'),"."),(0,i.yg)("h3",{id:"jobmode"},"job.mode"),(0,i.yg)("p",null,"You can configure whether the task is in batch or stream mode through ",(0,i.yg)("inlineCode",{parentName:"p"},"job.mode"),", like ",(0,i.yg)("inlineCode",{parentName:"p"},'job.mode = "BATCH"')," or ",(0,i.yg)("inlineCode",{parentName:"p"},'job.mode = "STREAMING"')),(0,i.yg)("h3",{id:"checkpointinterval"},"checkpoint.interval"),(0,i.yg)("p",null,"Gets the interval (milliseconds) in which checkpoints are periodically scheduled."),(0,i.yg)("p",null,"In ",(0,i.yg)("inlineCode",{parentName:"p"},"STREAMING")," mode, checkpoints is required, if you do not set it, it will be obtained from the application configuration file ",(0,i.yg)("inlineCode",{parentName:"p"},"seatunnel.yaml"),". In ",(0,i.yg)("inlineCode",{parentName:"p"},"BATCH")," mode, you can disable checkpoints by not setting this parameter. In Zeta ",(0,i.yg)("inlineCode",{parentName:"p"},"STREAMING")," mode, the default value is 30000 milliseconds."),(0,i.yg)("h3",{id:"checkpointtimeout"},"checkpoint.timeout"),(0,i.yg)("p",null,"The timeout (in milliseconds) for a checkpoint. If the checkpoint is not completed before the timeout, the job will fail. In Zeta, the default value is 30000 milliseconds."),(0,i.yg)("h3",{id:"parallelism"},"parallelism"),(0,i.yg)("p",null,"This parameter configures the parallelism of source and sink."),(0,i.yg)("h3",{id:"shadeidentifier"},"shade.identifier"),(0,i.yg)("p",null,"Specify the method of encryption, if you didn't have the requirement for encrypting or decrypting config files, this option can be ignored."),(0,i.yg)("p",null,"For more details, you can refer to the documentation ",(0,i.yg)("a",{parentName:"p",href:"/docs/connector-v2/Config-Encryption-Decryption"},"Config Encryption Decryption")),(0,i.yg)("h2",{id:"zeta-engine-parameter"},"Zeta Engine Parameter"),(0,i.yg)("h3",{id:"jobretrytimes"},"job.retry.times"),(0,i.yg)("p",null,"Used to control the default retry times when a job fails. The default value is 3, and it only works in the Zeta engine."),(0,i.yg)("h3",{id:"jobretryintervalseconds"},"job.retry.interval.seconds"),(0,i.yg)("p",null,"Used to control the default retry interval when a job fails. The default value is 3 seconds, and it only works in the Zeta engine."),(0,i.yg)("h3",{id:"savemodeexecutelocation"},"savemode.execute.location"),(0,i.yg)("p",null,"This parameter is used to specify the location of the savemode when the job is executed in the Zeta engine.\nThe default value is ",(0,i.yg)("inlineCode",{parentName:"p"},"CLUSTER"),", which means that the savemode is executed on the cluster. If you want to execute the savemode on the client,\nyou can set it to ",(0,i.yg)("inlineCode",{parentName:"p"},"CLIENT"),". Please use ",(0,i.yg)("inlineCode",{parentName:"p"},"CLUSTER")," mode as much as possible, because when there are no problems with ",(0,i.yg)("inlineCode",{parentName:"p"},"CLUSTER")," mode, we will remove ",(0,i.yg)("inlineCode",{parentName:"p"},"CLIENT")," mode."),(0,i.yg)("h2",{id:"flink-engine-parameter"},"Flink Engine Parameter"),(0,i.yg)("p",null,"Here are some SeaTunnel parameter names corresponding to the names in Flink, not all of them. Please refer to the official ",(0,i.yg)("a",{parentName:"p",href:"https://flink.apache.org/"},"Flink Documentation"),"."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Flink Configuration Name"),(0,i.yg)("th",{parentName:"tr",align:null},"SeaTunnel Configuration Name"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"pipeline.max-parallelism"),(0,i.yg)("td",{parentName:"tr",align:null},"flink.pipeline.max-parallelism")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"execution.checkpointing.mode"),(0,i.yg)("td",{parentName:"tr",align:null},"flink.execution.checkpointing.mode")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"execution.checkpointing.timeout"),(0,i.yg)("td",{parentName:"tr",align:null},"flink.execution.checkpointing.timeout")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"..."),(0,i.yg)("td",{parentName:"tr",align:null},"...")))),(0,i.yg)("h2",{id:"spark-engine-parameter"},"Spark Engine Parameter"),(0,i.yg)("p",null,"Because Spark configuration items have not been modified, they are not listed here, please refer to the official ",(0,i.yg)("a",{parentName:"p",href:"https://spark.apache.org/"},"Spark Documentation"),"."))}d.isMDXComponent=!0}}]);