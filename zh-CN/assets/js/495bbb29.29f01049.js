"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[61912],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),l=n(20053),o=n(23104),i=n(56347),s=n(57485),u=n(31682),p=n(89466);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:n,groupId:a}),[m,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??m;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(m(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:c},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(h,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function N(e){const t=(0,b.A)();return r.createElement(_,(0,a.A)({key:String(t)},e))}},90595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=n(58168),r=(n(96540),n(15680)),l=n(11470),o=n(19365);const i={},s="Common Options",u={unversionedId:"transform/common-options",id:"version-2.1.1/transform/common-options",title:"Common Options",description:"This transform both supported by engine Spark and Flink.",source:"@site/versioned_docs/version-2.1.1/transform/common-options.mdx",sourceDirName:"transform",slug:"/transform/common-options",permalink:"/zh-CN/docs/2.1.1/transform/common-options",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.1/transform/common-options.mdx",tags:[],version:"2.1.1",frontMatter:{},sidebar:"docs",previous:{title:"Common Options",permalink:"/zh-CN/docs/2.1.1/connector/sink/common-options"},next:{title:"Sql",permalink:"/zh-CN/docs/2.1.1/transform/sql"}},p={},m=[{value:"Transform Plugin common parameters",id:"transform-plugin-common-parameters",level:2},{value:"field_name string",id:"field_name-string",level:3},{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"result_table_name string",id:"result_table_name-string",level:3},{value:"Examples",id:"examples",level:2}],c={toc:m},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"common-options"},"Common Options"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"This transform both supported by engine Spark and Flink.")),(0,r.yg)("h2",{id:"transform-plugin-common-parameters"},"Transform Plugin common parameters"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"source_table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"result_table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"))))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"source_table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"result_table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,r.yg)("p",null,"When the data is obtained from the upper-level plugin, you can specify the name of the obtained field, which is convenient for use in subsequent sql plugins."))),(0,r.yg)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plug-in processes the data set ",(0,r.yg)("inlineCode",{parentName:"p"},"(dataset)")," output by the previous plug-in in the configuration file;"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plugin is processing the data set corresponding to this parameter."),(0,r.yg)("h3",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name")," is not specified, the data processed by this plugin will not be registered as a data set that can be directly accessed by other plugins, or called a temporary table ",(0,r.yg)("inlineCode",{parentName:"p"},"(table)"),";"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plugin will be registered as a data set ",(0,r.yg)("inlineCode",{parentName:"p"},"(dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,r.yg)("inlineCode",{parentName:"p"},"(table)")," . The dataset registered here can be directly accessed by other plugins by specifying ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," ."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'split {\n    source_table_name = "source_view_table"\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n    result_table_name = "result_view_table"\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Split")," plugin will process the data in the temporary table ",(0,r.yg)("inlineCode",{parentName:"p"},"source_view_table")," and register the processing result as a temporary table named ",(0,r.yg)("inlineCode",{parentName:"p"},"result_view_table"),". This temporary table can be used by any subsequent ",(0,r.yg)("inlineCode",{parentName:"p"},"Filter")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Output")," plugin by specifying ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," .")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'split {\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: If ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not configured, output the processing result of the last ",(0,r.yg)("inlineCode",{parentName:"p"},"Transform")," plugin in the configuration file"))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      result_table_name = "fake_1"\n      field_name = "name,age"\n    }\n    FakeSourceStream {\n      result_table_name = "fake_2"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n      source_table_name = "fake_1"\n      sql = "select name from fake_1"\n      result_table_name = "fake_name"\n    }\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the sql plugin will process the data of ",(0,r.yg)("inlineCode",{parentName:"p"},"fake_2")," , and if it is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"fake_1")," , it will process the data of ",(0,r.yg)("inlineCode",{parentName:"p"},"fake_1")," .")))))}g.isMDXComponent=!0}}]);