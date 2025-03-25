"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[61527],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>s});var a=t(96540);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function g(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var o=a.createContext({}),d=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=d(n.components);return a.createElement(o.Provider,{value:e},n.children)},y="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,o=n.parentName,p=g(n,["components","mdxType","originalType","parentName"]),y=d(t),m=l,s=y["".concat(o,".").concat(m)]||y[m]||u[m]||r;return t?a.createElement(s,i(i({ref:e},p),{},{components:t})):a.createElement(s,i({ref:e},p))}));function s(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,i=new Array(r);i[0]=m;var g={};for(var o in e)hasOwnProperty.call(e,o)&&(g[o]=e[o]);g.originalType=n,g[y]="string"==typeof n?n:l,i[1]=g;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53494:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>g,toc:()=>d});var a=t(58168),l=(t(96540),t(15680));const r={},i="JsonPath",g={unversionedId:"transform-v2/jsonpath",id:"transform-v2/jsonpath",title:"JsonPath",description:"JSONPath \u8f6c\u6362\u63d2\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/transform-v2/jsonpath.md",sourceDirName:"transform-v2",slug:"/transform-v2/jsonpath",permalink:"/zh-CN/docs/transform-v2/jsonpath",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/transform-v2/jsonpath.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u8fc7\u6ee4\u5668",permalink:"/zh-CN/docs/transform-v2/filter"},next:{title:"LLM",permalink:"/zh-CN/docs/transform-v2/llm"}},o={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"common options string",id:"common-options-string",level:3},{value:"row_error_handle_way Enum",id:"row_error_handle_way-enum",level:3},{value:"columnsarray",id:"columnsarray",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027-1",level:4},{value:"src_field",id:"src_field",level:4},{value:"dest_field",id:"dest_field",level:4},{value:"dest_type",id:"dest_type",level:4},{value:"path",id:"path",level:4},{value:"column_error_handle_way Enum",id:"column_error_handle_way-enum",level:4},{value:"\u8bfb\u53d6 JSON \u793a\u4f8b",id:"\u8bfb\u53d6-json-\u793a\u4f8b",level:2},{value:"\u8bfb\u53d6 SeatunnelRow \u793a\u4f8b",id:"\u8bfb\u53d6-seatunnelrow-\u793a\u4f8b",level:2},{value:"\u914d\u7f6e\u5f02\u5e38\u6570\u636e\u5904\u7406\u7b56\u7565",id:"\u914d\u7f6e\u5f02\u5e38\u6570\u636e\u5904\u7406\u7b56\u7565",level:2},{value:"\u8df3\u8fc7\u5f02\u5e38\u6570\u636e\u884c",id:"\u8df3\u8fc7\u5f02\u5e38\u6570\u636e\u884c",level:3},{value:"\u8df3\u8fc7\u90e8\u5206\u5f02\u5e38\u6570\u636e\u5217",id:"\u8df3\u8fc7\u90e8\u5206\u5f02\u5e38\u6570\u636e\u5217",level:3},{value:"\u90e8\u5206\u5217\u5f02\u5e38\u8df3\u8fc7\u6574\u884c",id:"\u90e8\u5206\u5217\u5f02\u5e38\u8df3\u8fc7\u6574\u884c",level:3},{value:"\u66f4\u65b0\u65e5\u5fd7",id:"\u66f4\u65b0\u65e5\u5fd7",level:2}],p={toc:d},y="wrapper";function u(n){let{components:e,...t}=n;return(0,l.yg)(y,(0,a.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"jsonpath"},"JsonPath"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"JSONPath \u8f6c\u6362\u63d2\u4ef6")),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u652f\u6301\u4f7f\u7528 JSONPath \u9009\u62e9\u6570\u636e")),(0,l.yg)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"columns"),(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"row_error_handle_way"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"FAIL")))),(0,l.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.yg)("p",null,"\u8f6c\u6362\u63d2\u4ef6\u7684\u5e38\u89c1\u53c2\u6570, \u8bf7\u53c2\u8003  ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/transform-v2/common-options"},"Transform Plugin")," \u4e86\u89e3\u8be6\u60c5"),(0,l.yg)("h3",{id:"row_error_handle_way-enum"},"row_error_handle_way ","[Enum]"),(0,l.yg)("p",null,"\u8be5\u9009\u9879\u7528\u4e8e\u6307\u5b9a\u5f53\u8be5\u884c\u53d1\u751f\u9519\u8bef\u65f6\u7684\u5904\u7406\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"FAIL"),"\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"FAIL\uff1a\u9009\u62e9",(0,l.yg)("inlineCode",{parentName:"li"},"FAIL"),"\u65f6\uff0c\u6570\u636e\u683c\u5f0f\u9519\u8bef\u4f1a\u963b\u585e\u5e76\u629b\u51fa\u5f02\u5e38\u3002"),(0,l.yg)("li",{parentName:"ul"},"SKIP\uff1a\u9009\u62e9",(0,l.yg)("inlineCode",{parentName:"li"},"SKIP"),"\u65f6\uff0c\u6570\u636e\u683c\u5f0f\u9519\u8bef\u4f1a\u8df3\u8fc7\u8be5\u884c\u6570\u636e\u3002")),(0,l.yg)("h3",{id:"columnsarray"},"columns","[array]"),(0,l.yg)("h4",{id:"\u5c5e\u6027-1"},"\u5c5e\u6027"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"src_field"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dest_field"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dest_type"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"String")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"column_error_handle_way"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h4",{id:"src_field"},"src_field"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u8981\u89e3\u6790\u7684 JSON \u6e90\u5b57\u6bb5")),(0,l.yg)("p",null,"\u652f\u6301\u7684Seatunnel\u6570\u636e\u7c7b\u578b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"STRING"),(0,l.yg)("li",{parentName:"ul"},"BYTES"),(0,l.yg)("li",{parentName:"ul"},"ARRAY"),(0,l.yg)("li",{parentName:"ul"},"MAP"),(0,l.yg)("li",{parentName:"ul"},"ROW")),(0,l.yg)("h4",{id:"dest_field"},"dest_field"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u4f7f\u7528 JSONPath \u540e\u7684\u8f93\u51fa\u5b57\u6bb5")),(0,l.yg)("h4",{id:"dest_type"},"dest_type"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u76ee\u6807\u5b57\u6bb5\u7684\u7c7b\u578b")),(0,l.yg)("h4",{id:"path"},"path"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Jsonpath")),(0,l.yg)("h4",{id:"column_error_handle_way-enum"},"column_error_handle_way ","[Enum]"),(0,l.yg)("p",null,"\u8be5\u9009\u9879\u7528\u4e8e\u6307\u5b9a\u5f53\u5217\u53d1\u751f\u9519\u8bef\u65f6\u7684\u5904\u7406\u65b9\u5f0f\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"FAIL\uff1a\u9009\u62e9",(0,l.yg)("inlineCode",{parentName:"li"},"FAIL"),"\u65f6\uff0c\u6570\u636e\u683c\u5f0f\u9519\u8bef\u4f1a\u963b\u585e\u5e76\u629b\u51fa\u5f02\u5e38\u3002"),(0,l.yg)("li",{parentName:"ul"},"SKIP\uff1a\u9009\u62e9",(0,l.yg)("inlineCode",{parentName:"li"},"SKIP"),"\u65f6\uff0c\u6570\u636e\u683c\u5f0f\u9519\u8bef\u4f1a\u8df3\u8fc7\u6b64\u5217\u6570\u636e\u3002"),(0,l.yg)("li",{parentName:"ul"},"SKIP_ROW\uff1a\u9009\u62e9",(0,l.yg)("inlineCode",{parentName:"li"},"SKIP_ROW"),"\u65f6\uff0c\u6570\u636e\u683c\u5f0f\u9519\u8bef\u4f1a\u8df3\u8fc7\u6b64\u884c\u6570\u636e\u3002")),(0,l.yg)("h2",{id:"\u8bfb\u53d6-json-\u793a\u4f8b"},"\u8bfb\u53d6 JSON \u793a\u4f8b"),(0,l.yg)("p",null,"\u4ece\u6e90\u8bfb\u53d6\u7684\u6570\u636e\u662f\u50cf\u8fd9\u6837\u7684 JSON"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "c_string": "this is a string",\n    "c_boolean": true,\n    "c_integer": 42,\n    "c_float": 3.14,\n    "c_double": 3.14,\n    "c_decimal": 10.55,\n    "c_date": "2023-10-29",\n    "c_datetime": "16:12:43.459",\n    "c_array":["item1", "item2", "item3"],\n    "c_map_array": [{"c_string_1":"c_string_1","c_string_2":"c_string_2","c_string_3":"c_string_3"},{"c_string_1":"c_string_1","c_string_2":"c_string_2","c_string_3":"c_string_3"}]\n  }\n}\n')),(0,l.yg)("p",null,"\u5047\u8bbe\u6211\u4eec\u60f3\u8981\u4f7f\u7528 JsonPath \u63d0\u53d6\u5c5e\u6027\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'transform {\n  JsonPath {\n    plugin_input = "fake"\n    plugin_output = "fake1"\n    columns = [\n     {\n        "src_field" = "data"\n        "path" = "$.data.c_string"\n        "dest_field" = "c1_string"\n     },\n     {\n        "src_field" = "data"\n        "path" = "$.data.c_boolean"\n        "dest_field" = "c1_boolean"\n        "dest_type" = "boolean"\n     },\n     {\n        "src_field" = "data"\n        "path" = "$.data.c_integer"\n        "dest_field" = "c1_integer"\n        "dest_type" = "int"\n     },\n     {\n        "src_field" = "data"\n        "path" = "$.data.c_float"\n        "dest_field" = "c1_float"\n        "dest_type" = "float"\n     },\n     {\n        "src_field" = "data"\n        "path" = "$.data.c_double"\n        "dest_field" = "c1_double"\n        "dest_type" = "double"\n     },\n      {\n         "src_field" = "data"\n         "path" = "$.data.c_decimal"\n         "dest_field" = "c1_decimal"\n         "dest_type" = "decimal(4,2)"\n      },\n      {\n         "src_field" = "data"\n         "path" = "$.data.c_date"\n         "dest_field" = "c1_date"\n         "dest_type" = "date"\n      },\n      {\n         "src_field" = "data"\n         "path" = "$.data.c_datetime"\n         "dest_field" = "c1_datetime"\n         "dest_type" = "time"\n      },\n      {\n         "src_field" = "data"\n         "path" = "$.data.c_array"\n         "dest_field" = "c1_array"\n         "dest_type" = "array<string>"\n      },\n      {\n        "src_field" = "data"\n        "path" = "$.data.c_map_array"\n        "dest_field" = "c1_map_array"\n        "dest_type" = "array<map<string, string>>"\n      }\n    ]\n  }\n}\n')),(0,l.yg)("p",null,"\u90a3\u4e48\u6570\u636e\u7ed3\u679c\u8868 ",(0,l.yg)("inlineCode",{parentName:"p"},"fake1")," \u5c06\u4f1a\u50cf\u8fd9\u6837"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_string"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_boolean"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_integer"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_float"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_double"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_decimal"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_date"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_datetime"),(0,l.yg)("th",{parentName:"tr",align:null},"c1_array"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"too much content not to show"),(0,l.yg)("td",{parentName:"tr",align:null},"this is a string"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"42"),(0,l.yg)("td",{parentName:"tr",align:null},"3.14"),(0,l.yg)("td",{parentName:"tr",align:null},"3.14"),(0,l.yg)("td",{parentName:"tr",align:null},"10.55"),(0,l.yg)("td",{parentName:"tr",align:null},"2023-10-29"),(0,l.yg)("td",{parentName:"tr",align:null},"16:12:43.459"),(0,l.yg)("td",{parentName:"tr",align:null},'["item1", "item2", "item3"]')))),(0,l.yg)("h2",{id:"\u8bfb\u53d6-seatunnelrow-\u793a\u4f8b"},"\u8bfb\u53d6 SeatunnelRow \u793a\u4f8b"),(0,l.yg)("p",null,"\u5047\u8bbe\u6570\u636e\u884c\u4e2d\u7684\u4e00\u5217\u7684\u7c7b\u578b\u662f SeatunnelRow\uff0c\u5217\u7684\u540d\u79f0\u4e3a col"),(0,l.yg)("table",null,(0,l.yg)("tr",null,(0,l.yg)("th",{colspan:"2"},"SeatunnelRow(col)"),(0,l.yg)("th",null,"other")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"name"),(0,l.yg)("td",null,"age"),(0,l.yg)("td",null,"....")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"a"),(0,l.yg)("td",null,"18"),(0,l.yg)("td",null,"...."))),(0,l.yg)("p",null,"JsonPath \u8f6c\u6362\u5c06 seatunnel \u7684\u503c\u8f6c\u6362\u4e3a\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'transform {\n  JsonPath {\n    plugin_input = "fake"\n    plugin_output = "fake1"\n\n    row_error_handle_way = FAIL\n    columns = [\n     {\n        "src_field" = "col"\n        "path" = "$[0]"\n        "dest_field" = "name"\n        "dest_type" = "string"\n     },\n     {\n        "src_field" = "col"\n        "path" = "$[1]"\n        "dest_field" = "age"\n        "dest_type" = "int"\n     }\n    ]\n  }\n}\n')),(0,l.yg)("p",null,"\u90a3\u4e48\u6570\u636e\u7ed3\u679c\u8868 ",(0,l.yg)("inlineCode",{parentName:"p"},"fake1")," \u5c06\u4f1a\u50cf\u8fd9\u6837:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"col"),(0,l.yg)("th",{parentName:"tr",align:null},"other"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"a"),(0,l.yg)("td",{parentName:"tr",align:null},"18"),(0,l.yg)("td",{parentName:"tr",align:null},'["a",18]'),(0,l.yg)("td",{parentName:"tr",align:null},"...")))),(0,l.yg)("h2",{id:"\u914d\u7f6e\u5f02\u5e38\u6570\u636e\u5904\u7406\u7b56\u7565"},"\u914d\u7f6e\u5f02\u5e38\u6570\u636e\u5904\u7406\u7b56\u7565"),(0,l.yg)("p",null,"\u60a8\u53ef\u4ee5\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"row_error_handle_way")," \u4e0e ",(0,l.yg)("inlineCode",{parentName:"p"},"column_error_handle_way")," \u6765\u5904\u7406\u5f02\u5e38\u6570\u636e\uff0c\u4e24\u8005\u90fd\u662f\u975e\u5fc5\u586b\u9879\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"row_error_handle_way")," \u914d\u7f6e\u5bf9\u884c\u6570\u636e\u5185\u6240\u6709\u6570\u636e\u5f02\u5e38\u8fdb\u884c\u5904\u7406\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"column_error_handle_way")," \u914d\u7f6e\u5bf9\u67d0\u5217\u6570\u636e\u5f02\u5e38\u8fdb\u884c\u5904\u7406\uff0c\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,l.yg)("inlineCode",{parentName:"p"},"row_error_handle_way"),"\u3002"),(0,l.yg)("h3",{id:"\u8df3\u8fc7\u5f02\u5e38\u6570\u636e\u884c"},"\u8df3\u8fc7\u5f02\u5e38\u6570\u636e\u884c"),(0,l.yg)("p",null,"\u914d\u7f6e\u8df3\u8fc7\u4efb\u610f\u5217\u6709\u5f02\u5e38\u7684\u6574\u884c\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'transform {\n  JsonPath {\n\n    row_error_handle_way = SKIP\n    \n    columns = [\n     {\n        "src_field" = "json_data"\n        "path" = "$.f1"\n        "dest_field" = "json_data_f1"\n     },\n     {\n        "src_field" = "json_data"\n        "path" = "$.f2"\n        "dest_field" = "json_data_f2"\n     }\n    ]\n  }\n}\n')),(0,l.yg)("h3",{id:"\u8df3\u8fc7\u90e8\u5206\u5f02\u5e38\u6570\u636e\u5217"},"\u8df3\u8fc7\u90e8\u5206\u5f02\u5e38\u6570\u636e\u5217"),(0,l.yg)("p",null,"\u914d\u7f6e\u4ec5\u5bf9 ",(0,l.yg)("inlineCode",{parentName:"p"},"json_data_f1")," \u5217\u6570\u636e\u5f02\u5e38\u8df3\u8fc7\uff0c\u586b\u5145\u7a7a\u503c\uff0c\u5176\u4ed6\u5217\u6570\u636e\u5f02\u5e38\u7ee7\u7eed\u629b\u51fa\u5f02\u5e38\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'transform {\n  JsonPath {\n\n    row_error_handle_way = FAIL\n    \n    columns = [\n     {\n        "src_field" = "json_data"\n        "path" = "$.f1"\n        "dest_field" = "json_data_f1"\n        \n        "column_error_handle_way" = "SKIP"\n     },\n     {\n        "src_field" = "json_data"\n        "path" = "$.f2"\n        "dest_field" = "json_data_f2"\n     }\n    ]\n  }\n}\n')),(0,l.yg)("h3",{id:"\u90e8\u5206\u5217\u5f02\u5e38\u8df3\u8fc7\u6574\u884c"},"\u90e8\u5206\u5217\u5f02\u5e38\u8df3\u8fc7\u6574\u884c"),(0,l.yg)("p",null,"\u914d\u7f6e\u4ec5\u5bf9 ",(0,l.yg)("inlineCode",{parentName:"p"},"json_data_f1")," \u5217\u6570\u636e\u5f02\u5e38\u8df3\u8fc7\u6574\u884c\u6570\u636e\uff0c\u5176\u4ed6\u5217\u6570\u636e\u5f02\u5e38\u7ee7\u7eed\u629b\u51fa\u5f02\u5e38\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'transform {\n  JsonPath {\n\n    row_error_handle_way = FAIL\n    \n    columns = [\n     {\n        "src_field" = "json_data"\n        "path" = "$.f1"\n        "dest_field" = "json_data_f1"\n        \n        "column_error_handle_way" = "SKIP_ROW"\n     },\n     {\n        "src_field" = "json_data"\n        "path" = "$.f2"\n        "dest_field" = "json_data_f2"\n     }\n    ]\n  }\n}\n')),(0,l.yg)("h2",{id:"\u66f4\u65b0\u65e5\u5fd7"},"\u66f4\u65b0\u65e5\u5fd7"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6dfb\u52a0 JsonPath \u8f6c\u6362")))}u.isMDXComponent=!0}}]);