"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[38851],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=g(n),y=l,m=s["".concat(p,".").concat(y)]||s[y]||u[y]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var g=2;g<r;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},19230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=n(58168),l=(n(96540),n(15680));const r={},o="JsonPath",i={unversionedId:"transform-v2/jsonpath",id:"version-2.3.6/transform-v2/jsonpath",title:"JsonPath",description:"JsonPath transform plugin",source:"@site/versioned_docs/version-2.3.6/transform-v2/jsonpath.md",sourceDirName:"transform-v2",slug:"/transform-v2/jsonpath",permalink:"/docs/2.3.6/transform-v2/jsonpath",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.6/transform-v2/jsonpath.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Filter",permalink:"/docs/2.3.6/transform-v2/filter"},next:{title:"Replace",permalink:"/docs/2.3.6/transform-v2/replace"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"common options string",id:"common-options-string",level:3},{value:"fieldsarray",id:"fieldsarray",level:3},{value:"option",id:"option",level:4},{value:"src_field",id:"src_field",level:4},{value:"dest_field",id:"dest_field",level:4},{value:"dest_type",id:"dest_type",level:4},{value:"path",id:"path",level:4},{value:"Read Json Example",id:"read-json-example",level:2},{value:"Read SeatunnelRow Example",id:"read-seatunnelrow-example",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:g},s="wrapper";function u(e){let{components:t,...n}=e;return(0,l.yg)(s,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"jsonpath"},"JsonPath"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"JsonPath transform plugin")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Support use jsonpath select data")),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Columns"),(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.6/transform-v2/common-options"},"Transform Plugin")," for details"),(0,l.yg)("h3",{id:"fieldsarray"},"fields","[array]"),(0,l.yg)("h4",{id:"option"},"option"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"src_field"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dest_field"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dest_type"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"String")))),(0,l.yg)("h4",{id:"src_field"},"src_field"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"the json source field you want to parse")),(0,l.yg)("p",null,"Support SeatunnelDateType"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"STRING"),(0,l.yg)("li",{parentName:"ul"},"BYTES"),(0,l.yg)("li",{parentName:"ul"},"ARRAY"),(0,l.yg)("li",{parentName:"ul"},"MAP"),(0,l.yg)("li",{parentName:"ul"},"ROW")),(0,l.yg)("h4",{id:"dest_field"},"dest_field"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"after use jsonpath output field")),(0,l.yg)("h4",{id:"dest_type"},"dest_type"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"the type of dest field")),(0,l.yg)("h4",{id:"path"},"path"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Jsonpath")),(0,l.yg)("h2",{id:"read-json-example"},"Read Json Example"),(0,l.yg)("p",null,"The data read from source is a table like this json:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "c_string": "this is a string",\n    "c_boolean": true,\n    "c_integer": 42,\n    "c_float": 3.14,\n    "c_double": 3.14,\n    "c_decimal": 10.55,\n    "c_date": "2023-10-29",\n    "c_datetime": "16:12:43.459",\n    "c_array":["item1", "item2", "item3"]\n  }\n}\n')),(0,l.yg)("p",null,"Assuming we want to use JsonPath to extract properties."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'transform {\n  JsonPath {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    columns = [\n     {\n        "src_field" = "data"\n        "path" = "$.data.c_string"\n        "dest_field" = "c1_string"\n     },\n     {\n        "src_field" = "data"\n        "path" = "$.data.c_boolean"\n        "dest_field" = "c1_boolean"\n        "dest_type" = "boolean"\n     },\n     {\n        "src_field" = "data"\n        "path" = "$.data.c_integer"\n        "dest_field" = "c1_integer"\n        "dest_type" = "int"\n     },\n     {\n        "src_field" = "data"\n        "path" = "$.data.c_float"\n        "dest_field" = "c1_float"\n        "dest_type" = "float"\n     },\n     {\n        "src_field" = "data"\n        "path" = "$.data.c_double"\n        "dest_field" = "c1_double"\n        "dest_type" = "double"\n     },\n      {\n         "src_field" = "data"\n         "path" = "$.data.c_decimal"\n         "dest_field" = "c1_decimal"\n         "dest_type" = "decimal(4,2)"\n      },\n      {\n         "src_field" = "data"\n         "path" = "$.data.c_date"\n         "dest_field" = "c1_date"\n         "dest_type" = "date"\n      },\n      {\n         "src_field" = "data"\n         "path" = "$.data.c_datetime"\n         "dest_field" = "c1_datetime"\n         "dest_type" = "time"\n      },\n            {\n         "src_field" = "data"\n         "path" = "$.data.c_array"\n         "dest_field" = "c1_array"\n         "dest_type" = "array<string>"        \n      }\n    ]\n  }\n}\n')),(0,l.yg)("p",null,"Then the data result table ",(0,l.yg)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_string"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_boolean"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_integer"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_float"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_double"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_decimal"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_date"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_datetime"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_array"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"too much content not to show"),(0,l.yg)("td",{parentName:"tr",align:null},"this is a string"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"42"),(0,l.yg)("td",{parentName:"tr",align:null},"3.14"),(0,l.yg)("td",{parentName:"tr",align:null},"3.14"),(0,l.yg)("td",{parentName:"tr",align:null},"10.55"),(0,l.yg)("td",{parentName:"tr",align:null},"2023-10-29"),(0,l.yg)("td",{parentName:"tr",align:null},"16:12:43.459"),(0,l.yg)("td",{parentName:"tr",align:null},'["item1", "item2", "item3"]')))),(0,l.yg)("h2",{id:"read-seatunnelrow-example"},"Read SeatunnelRow Example"),(0,l.yg)("p",null,"Suppose a column in a row of data is of type SeatunnelRow and that the name of the column is col"),(0,l.yg)("table",null,(0,l.yg)("tr",null,(0,l.yg)("th",{colspan:"2"},"SeatunnelRow(col)"),(0,l.yg)("th",null,"other")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"name"),(0,l.yg)("td",null,"age"),(0,l.yg)("td",null,"....")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"a"),(0,l.yg)("td",null,"18"),(0,l.yg)("td",null,"...."))),(0,l.yg)("p",null,"The JsonPath transform converts the values of seatunnel into an array,"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'transform {\n  JsonPath {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    columns = [\n     {\n        "src_field" = "col"\n        "path" = "$[0]"\n        "dest_field" = "name"\n            "dest_type" = "string"\n     },\n        {\n        "src_field" = "col"\n        "path" = "$[1]"\n        "dest_field" = "age"\n            "dest_type" = "int"\n     }\n    ]\n  }\n}\n')),(0,l.yg)("p",null,"Then the data result table ",(0,l.yg)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"col"),(0,l.yg)("th",{parentName:"tr",align:null},"other"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"a"),(0,l.yg)("td",{parentName:"tr",align:null},"18"),(0,l.yg)("td",{parentName:"tr",align:null},'["a",18]'),(0,l.yg)("td",{parentName:"tr",align:null},"...")))),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add JsonPath Transform")))}u.isMDXComponent=!0}}]);