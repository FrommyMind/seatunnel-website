"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[37110],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},17805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={},i="Hive",l={unversionedId:"connector/source/Hive",id:"version-2.1.3/connector/source/Hive",title:"Hive",description:"Description",source:"@site/versioned_docs/version-2.1.3/connector/source/Hive.md",sourceDirName:"connector/source",slug:"/connector/source/Hive",permalink:"/docs/2.1.3/connector/source/Hive",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.3/connector/source/Hive.md",tags:[],version:"2.1.3",frontMatter:{},sidebar:"docs",previous:{title:"HBase",permalink:"/docs/2.1.3/connector/source/Hbase"},next:{title:"Http",permalink:"/docs/2.1.3/connector/source/Http"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"pre_sql string",id:"pre_sql-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2},{value:"Notes",id:"notes",level:2}],c={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hive"},"Hive"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Get data from hive"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,a.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Hive"),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pre_sql"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"pre_sql-string"},"pre_sql ","[string]"),(0,a.yg)("p",null,"For preprocessed ",(0,a.yg)("inlineCode",{parentName:"p"},"sql")," , if preprocessing is not required, you can use ",(0,a.yg)("inlineCode",{parentName:"p"},"select * from hive_db.hive_table")," ."),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Source plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.1.3/connector/source/common-options"},"Source Plugin")," for details"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note: The following configuration must be done to use hive source\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'# In the spark section in the seatunnel configuration file\uff1a\n\nenv {\n  ...\n  spark.sql.catalogImplementation = "hive"\n  ...\n}\n')),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  ...\n  spark.sql.catalogImplementation = "hive"\n  ...\n}\n\nsource {\n  hive {\n    pre_sql = "select * from mydb.mytb"\n    result_table_name = "myTable"\n  }\n}\n\n...\n')),(0,a.yg)("h2",{id:"notes"},"Notes"),(0,a.yg)("p",null,"It must be ensured that the ",(0,a.yg)("inlineCode",{parentName:"p"},"metastore")," of ",(0,a.yg)("inlineCode",{parentName:"p"},"hive")," is in service. Start the command ",(0,a.yg)("inlineCode",{parentName:"p"},"hive --service metastore")," service ",(0,a.yg)("inlineCode",{parentName:"p"},"default port 9083")," ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster")," , ",(0,a.yg)("inlineCode",{parentName:"p"},"client")," , ",(0,a.yg)("inlineCode",{parentName:"p"},"local"),"  mode, ",(0,a.yg)("inlineCode",{parentName:"p"},"hive-site.xml")," must be placed in the ",(0,a.yg)("inlineCode",{parentName:"p"},"$HADOOP_CONF")," directory of the task submission node (or placed under ",(0,a.yg)("inlineCode",{parentName:"p"},"$SPARK_HOME/conf")," ), IDE local Debug put it in the ",(0,a.yg)("inlineCode",{parentName:"p"},"resources")," directory"))}u.isMDXComponent=!0}}]);