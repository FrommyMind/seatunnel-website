"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[87993],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),u=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(g.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,y=p["".concat(g,".").concat(d)]||p[d]||s[d]||l;return a?n.createElement(y,i(i({ref:t},m),{},{components:a})):n.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),l=a(20053),i=a(23104),o=a(56347),g=a(57485),u=a(31682),m=a(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function s(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,g.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function c(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=s(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[g,u]=y({queryString:a,groupId:n}),[p,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),N=(()=>{const e=g??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),c(e)}),[u,c,l]),tabValues:l}}var N=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:o,selectValue:g,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),s=e=>{const t=e.currentTarget,a=m.indexOf(t),n=u[a].value;n!==o&&(p(t),g(n))},d=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:s},i,{className:(0,l.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=c(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(f,(0,n.A)({},e,t)),r.createElement(h,(0,n.A)({},e,t)))}function k(e){const t=(0,N.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},81626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>g,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),l=a(11470),i=a(19365);const o={},g="Fake",u={unversionedId:"connector/source/Fake",id:"version-2.1.2/connector/source/Fake",title:"Fake",description:"Description",source:"@site/versioned_docs/version-2.1.2/connector/source/Fake.mdx",sourceDirName:"connector/source",slug:"/connector/source/Fake",permalink:"/zh-CN/docs/2.1.2/connector/source/Fake",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.2/connector/source/Fake.mdx",tags:[],version:"2.1.2",frontMatter:{},sidebar:"docs",previous:{title:"Elasticsearch",permalink:"/zh-CN/docs/2.1.2/connector/source/Elasticsearch"},next:{title:"Feishu Sheet",permalink:"/zh-CN/docs/2.1.2/connector/source/FeishuSheet"}},m={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"content array",id:"content-array",level:3},{value:"rate number",id:"rate-number",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"mock_data_schema Option  [listcolumn_config]",id:"mock_data_schema-option--listcolumn_config",level:3},{value:"mock_data_size Option int",id:"mock_data_size-option-int",level:3},{value:"mock_data_interval Option int",id:"mock_data_interval-option-int",level:3},{value:"Examples",id:"examples",level:2},{value:"Fake",id:"fake-1",level:3},{value:"FakeStream",id:"fakestream",level:3},{value:"FakeSourceStream",id:"fakesourcestream",level:3},{value:"FakeSource",id:"fakesource",level:3}],s={toc:p},d="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"fake"},"Fake"),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Fake")," is mainly used to conveniently generate user-specified data, which is used as input for functional verification, testing, and performance testing of seatunnel."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Fake, FakeStream"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: FakeSource, FakeSourceStream",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Flink ",(0,r.yg)("inlineCode",{parentName:"li"},"Fake Source")," is mainly used to automatically generate data. The data has only two columns. The first column is of ",(0,r.yg)("inlineCode",{parentName:"li"},"String type")," and the content is a random one from ",(0,r.yg)("inlineCode",{parentName:"li"},'["Gary", "Ricky Huo", "Kid Xiong"]')," . The second column is of ",(0,r.yg)("inlineCode",{parentName:"li"},"Int type")," , which is the current 13-digit timestamp is used as input for functional verification and testing of ",(0,r.yg)("inlineCode",{parentName:"li"},"seatunnel")," ."))))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"These options is for Spark:",(0,r.yg)("inlineCode",{parentName:"p"},"FakeStream"),", and Spark:",(0,r.yg)("inlineCode",{parentName:"p"},"Fake")," do not have any options")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"content"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rate"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"content-array"},"content ","[array]"),(0,r.yg)("p",null,"List of test data strings"),(0,r.yg)("h3",{id:"rate-number"},"rate ","[number]"),(0,r.yg)("p",null,"Number of test cases generated per second")),(0,r.yg)(i.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Int")),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mock_data_schema"),(0,r.yg)("td",{parentName:"tr",align:null},"list ","[column_config]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"see details.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mock_data_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"300")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mock_data_interval"),(0,r.yg)("td",{parentName:"tr",align:null},"int (second)"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1")))),(0,r.yg)("h3",{id:"parallelism-int"},"parallelism ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,r.yg)("p",null,"The parallelism of an individual operator, for Fake Source Stream"))),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.2/connector/source/common-options"},"Source Plugin")," for details"),(0,r.yg)("h3",{id:"mock_data_schema-option--listcolumn_config"},"mock_data_schema Option  [list","[column_config]","]"),(0,r.yg)("p",null,"Config mock data's schema. Each is column_config option."),(0,r.yg)("p",null,"When mock_data_schema is not defined. Data will generate with schema like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'mock_data_schema = [\n  {\n    name = "name",\n    type = "string",\n    mock_config = {\n      string_seed = ["Gary", "Ricky Huo", "Kid Xiong"]\n      size_range = [1,1]\n    }\n  }\n  {\n    name = "age",\n    type = "int",\n    mock_config = {\n      int_range = [1, 100]\n    }\n  }\n]\n')),(0,r.yg)("p",null,"column_config option type."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"),(0,r.yg)("th",{parentName:"tr",align:null},"support values"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"int,integer,byte,boolean,char,",(0,r.yg)("br",null),"character,short,long,float,double,",(0,r.yg)("br",null),"date,timestamp,decimal,bigdecimal,",(0,r.yg)("br",null),"bigint,biginteger,int[],byte[],",(0,r.yg)("br",null),"boolean[],char[],character[],short[],",(0,r.yg)("br",null),"long[],float[],double[],string[],",(0,r.yg)("br",null),"binary,varchar")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mock_config"),(0,r.yg)("td",{parentName:"tr",align:null},"mock_config"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("p",null,"mock_config Option"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"),(0,r.yg)("th",{parentName:"tr",align:null},"sample"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"byte_range"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[byte][size=2]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"[0,127]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean_seed"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[boolean]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"[true, true, false]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char_seed"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[char][size=2]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"['a','b','c']")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date_range"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[string][size=2]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'["1970-01-01", "2100-12-31"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal_scale"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double_range"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[double][size=2]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"[0.0, 10000.0]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float_range"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[flout][size=2]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"[0.0, 10000.0]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int_range"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[int][size=2]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"[0, 100]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"long_range"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[long][size=2]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"[0, 100000]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"number_regex"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'"',"[1-9]","{1}","\\",'d?"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"time_range"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[int][size=6]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"[0,24,0,60,0,60]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"size_range"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[int][size=2]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"[6,10]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string_regex"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'"',"[a-z0-9]","{5}","\\","@","\\","w{3}","\\",".","[a-z]",'{3}"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string_seed"),(0,r.yg)("td",{parentName:"tr",align:null},"list","[string]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'["Gary", "Ricky Huo", "Kid Xiong"]')))),(0,r.yg)("h3",{id:"mock_data_size-option-int"},"mock_data_size Option ","[int]"),(0,r.yg)("p",null,"Config mock data size."),(0,r.yg)("h3",{id:"mock_data_interval-option-int"},"mock_data_interval Option ","[int]"),(0,r.yg)("p",null,"Config the data can mock with interval, The unit is SECOND."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("h3",{id:"fake-1"},"Fake"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'Fake {\n    result_table_name = "my_dataset"\n}\n')),(0,r.yg)("h3",{id:"fakestream"},"FakeStream"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"fakeStream {\n    content = ['name=ricky&age=23', 'name=gary&age=28']\n    rate = 5\n}\n")),(0,r.yg)("p",null,"The generated data is as follows, randomly extract the string from the ",(0,r.yg)("inlineCode",{parentName:"p"},"content")," list"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"+-----------------+\n|raw_message      |\n+-----------------+\n|name=gary&age=28 |\n|name=ricky&age=23|\n+-----------------+\n"))),(0,r.yg)(i.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("h3",{id:"fakesourcestream"},"FakeSourceStream"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n        result_table_name = "fake"\n        field_name = "name,age"\n    }\n}\n')),(0,r.yg)("h3",{id:"fakesource"},"FakeSource"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSource {\n        result_table_name = "fake"\n        field_name = "name,age"\n        mock_data_size = 100 // will generate 100 rows mock data.\n    }\n}\n')))))}y.isMDXComponent=!0}}]);