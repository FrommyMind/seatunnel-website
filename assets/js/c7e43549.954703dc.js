"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[13159],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),g=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=g(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=g(a),c=r,y=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?t.createElement(y,i(i({ref:n},p),{},{components:a})):t.createElement(y,i({ref:n},p))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},68254:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var t=a(58168),r=(a(96540),a(15680));const l={},i="Json",o={unversionedId:"spark/configuration/transform-plugins/Json",id:"version-2.1.0/spark/configuration/transform-plugins/Json",title:"Json",description:"Transform plugin : Json [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/transform-plugins/Json.md",sourceDirName:"spark/configuration/transform-plugins",slug:"/spark/configuration/transform-plugins/Json",permalink:"/docs/2.1.0/spark/configuration/transform-plugins/Json",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/transform-plugins/Json.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Options",permalink:"/docs/2.1.0/spark/configuration/source-plugins/source-plugin"},next:{title:"Split",permalink:"/docs/2.1.0/spark/configuration/transform-plugins/Split"}},s={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"source_field string",id:"source_field-string",level:3},{value:"target_field string",id:"target_field-string",level:3},{value:"schema_dir string",id:"schema_dir-string",level:3},{value:"schema_file string",id:"schema_file-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Schema Use cases",id:"schema-use-cases",level:2},{value:"Examples",id:"examples",level:2},{value:"Do not use <code>target_field</code>",id:"do-not-use-target_field",level:3},{value:"Use <code>target_field</code>",id:"use-target_field",level:3},{value:"Use <code>schema_file</code>",id:"use-schema_file",level:3}],p={toc:g},u="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"json"},"Json"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Transform plugin : Json ","[Spark]")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Json analysis of the specified fields of the original data set"),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"source_field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"raw_message")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"target_field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"root"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_dir"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_file"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"source_field-string"},"source_field ","[string]"),(0,r.yg)("p",null,"Source field, if not configured, the default is ",(0,r.yg)("inlineCode",{parentName:"p"},"raw_message")),(0,r.yg)("h3",{id:"target_field-string"},"target_field ","[string]"),(0,r.yg)("p",null,"The target field, if it is not configured, the default is ",(0,r.yg)("inlineCode",{parentName:"p"},"__root__")," , and the result of Json parsing will be uniformly placed at the top of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Dataframe")),(0,r.yg)("h3",{id:"schema_dir-string"},"schema_dir ","[string]"),(0,r.yg)("p",null,"Style directory, if not configured, the default is ",(0,r.yg)("inlineCode",{parentName:"p"},"$seatunnelRoot/plugins/json/files/schemas/")),(0,r.yg)("h3",{id:"schema_file-string"},"schema_file ","[string]"),(0,r.yg)("p",null,"The style file name, if it is not configured, the default is empty, that is, the structure is not specified, and the system derives it by itself according to the input of the data source."),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.1.0/spark/configuration/transform-plugins/transform-plugin"},"Transform Plugin")," for details"),(0,r.yg)("h2",{id:"schema-use-cases"},"Schema Use cases"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"json schema")," usage scenarios")),(0,r.yg)("p",null,"The multiple data sources of a single task may contain different styles of json data. For example, the ",(0,r.yg)("inlineCode",{parentName:"p"},"topicA")," style from ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka")," is"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "A": "a_val",\n  "B": "b_val"\n}\n')),(0,r.yg)("p",null,"The style from ",(0,r.yg)("inlineCode",{parentName:"p"},"topicB")," is"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "C": "c_val",\n  "D": "d_val"\n}\n')),(0,r.yg)("p",null,"When running ",(0,r.yg)("inlineCode",{parentName:"p"},"Transform")," , you need to fuse the data of ",(0,r.yg)("inlineCode",{parentName:"p"},"topicA")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"topicB")," into a wide table for calculation. You can specify a ",(0,r.yg)("inlineCode",{parentName:"p"},"schema")," whose content style is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "A": "a_val",\n  "B": "b_val",\n  "C": "c_val",\n  "D": "d_val"\n}\n')),(0,r.yg)("p",null,"Then the fusion output result of ",(0,r.yg)("inlineCode",{parentName:"p"},"topicA")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"topicB")," is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"+-----+-----+-----+-----+\n|A    |B    |C    |D    |\n+-----+-----+-----+-----+\n|a_val|b_val|null |null |\n|null |null |c_val|d_val|\n+-----+-----+-----+-----+\n")),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"do-not-use-target_field"},"Do not use ",(0,r.yg)("inlineCode",{parentName:"h3"},"target_field")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'json {\n    source_field = "message"\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Source")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+\n|message                   |\n+----------------------------+\n|{"name": "ricky", "age": 24}|\n|{"name": "gary", "age": 28} |\n+----------------------------+\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Sink")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+---+-----+\n|message                   |age|name |\n+----------------------------+---+-----+\n|{"name": "gary", "age": 28} |28 |gary |\n|{"name": "ricky", "age": 23}|23 |ricky|\n+----------------------------+---+-----+\n')),(0,r.yg)("h3",{id:"use-target_field"},"Use ",(0,r.yg)("inlineCode",{parentName:"h3"},"target_field")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'json {\n    source_field = "message"\n    target_field = "info"\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Souce")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+\n|message                   |\n+----------------------------+\n|{"name": "ricky", "age": 24}|\n|{"name": "gary", "age": 28} |\n+----------------------------+\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Sink")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+----------+\n|message                   |info      |\n+----------------------------+----------+\n|{"name": "gary", "age": 28} |[28,gary] |\n|{"name": "ricky", "age": 23}|[23,ricky]|\n+----------------------------+----------+\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The results of json processing support ",(0,r.yg)("inlineCode",{parentName:"p"},"select * from where info.age = 23")," such SQL statements")),(0,r.yg)("h3",{id:"use-schema_file"},"Use ",(0,r.yg)("inlineCode",{parentName:"h3"},"schema_file")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'json {\n    source_field = "message"\n    schema_file = "demo.json"\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schema")),(0,r.yg)("p",null,"Place the following content in ",(0,r.yg)("inlineCode",{parentName:"p"},"~/seatunnel/plugins/json/files/schemas/demo.json")," of Driver Node:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "demo",\n   "age": 24,\n   "city": "LA"\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Source")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+\n|message                   |\n+----------------------------+\n|{"name": "ricky", "age": 24}|\n|{"name": "gary", "age": 28} |\n+----------------------------+\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Sink")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+---+-----+-----+\n|message                     |age|name |city |\n+----------------------------+---+-----+-----+\n|{"name": "gary", "age": 28} |28 |gary |null |\n|{"name": "ricky", "age": 23}|23 |ricky|null |\n+----------------------------+---+-----+-----+\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If you use ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster mode")," for deployment, make sure that the ",(0,r.yg)("inlineCode",{parentName:"p"},"json schemas")," directory is packaged in ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins.tar.gz"))))}m.isMDXComponent=!0}}]);