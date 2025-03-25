"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[65684],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>d});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function g(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,d=m["".concat(o,".").concat(c)]||m[c]||y[c]||r;return a?t.createElement(d,i(i({ref:n},u),{},{components:a})):t.createElement(d,i({ref:n},u))}));function d(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var g={};for(var o in n)hasOwnProperty.call(n,o)&&(g[o]=n[o]);g.originalType=e,g[m]="string"==typeof e?e:l,i[1]=g;for(var p=2;p<r;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44210:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>g,toc:()=>p});var t=a(58168),l=(a(96540),a(15680));const r={},i="DynamicCompile",g={unversionedId:"transform-v2/dynamic-compile",id:"version-2.3.9/transform-v2/dynamic-compile",title:"DynamicCompile",description:"\u52a8\u6001\u7f16\u8bd1\u63d2\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/transform-v2/dynamic-compile.md",sourceDirName:"transform-v2",slug:"/transform-v2/dynamic-compile",permalink:"/zh-CN/docs/2.3.9/transform-v2/dynamic-compile",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/transform-v2/dynamic-compile.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"\u590d\u5236",permalink:"/zh-CN/docs/2.3.9/transform-v2/copy"},next:{title:"Embedding",permalink:"/zh-CN/docs/2.3.9/transform-v2/embedding"}},o={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"common options string",id:"common-options-string",level:3},{value:"compile_language Enum",id:"compile_language-enum",level:3},{value:"compile_pattern Enum",id:"compile_pattern-enum",level:3},{value:"absolute_path string",id:"absolute_path-string",level:3},{value:"source_code string",id:"source_code-string",level:3},{value:"\u5173\u4e8esource_code",id:"\u5173\u4e8esource_code",level:4},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:p},m="wrapper";function y(e){let{components:n,...a}=e;return(0,l.yg)(m,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"dynamiccompile"},"DynamicCompile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u52a8\u6001\u7f16\u8bd1\u63d2\u4ef6")),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u7279\u522b\u7533\u660e\n\u60a8\u9700\u8981\u786e\u4fdd\u670d\u52a1\u7684\u5b89\u5168\u6027\uff0c\u5e76\u9632\u6b62\u653b\u51fb\u8005\u4e0a\u4f20\u7834\u574f\u6027\u4ee3\u7801")),(0,l.yg)("p",null,"\u63d0\u4f9b\u4e00\u79cd\u53ef\u7f16\u7a0b\u7684\u65b9\u5f0f\u6765\u5904\u7406\u884c\uff0c\u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u4efb\u4f55\u4e1a\u52a1\u884c\u4e3a\uff0c\u751a\u81f3\u57fa\u4e8e\u73b0\u6709\u884c\u5b57\u6bb5\u4f5c\u4e3a\u53c2\u6570\u7684RPC\u8bf7\u6c42\uff0c\u6216\u8005\u901a\u8fc7\u4ece\u5176\u4ed6\u6570\u636e\u6e90\u68c0\u7d22\u76f8\u5173\u6570\u636e\u6765\u6269\u5c55\u5b57\u6bb5\u3002\u4e3a\u4e86\u533a\u5206\u4e1a\u52a1\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2a\u8f6c\u6362\u8fdb\u884c\u7ec4\u5408\uff0c\n\u5982\u679c\u8f6c\u6362\u8fc7\u4e8e\u590d\u6742\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u6027\u80fd"),(0,l.yg)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"source_code"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compile_language"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compile_pattern"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"SOURCE_CODE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"absolute_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.yg)("p",null,"\u8f6c\u6362\u63d2\u4ef6\u7684\u5e38\u89c1\u53c2\u6570, \u8bf7\u53c2\u8003  ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/transform-v2/common-options"},"Transform Plugin")," \u4e86\u89e3\u8be6\u60c5\u3002"),(0,l.yg)("h3",{id:"compile_language-enum"},"compile_language ","[Enum]"),(0,l.yg)("p",null,"Java\u4e2d\u7684\u67d0\u4e9b\u8bed\u6cd5\u53ef\u80fd\u4e0d\u53d7\u652f\u6301\uff0c\u8bf7\u53c2\u9605",(0,l.yg)("a",{parentName:"p",href:"https://github.com/janino-compiler/janino"},"https://github.com/janino-compiler/janino"),"\nGROOVY\uff0cJAVA"),(0,l.yg)("h3",{id:"compile_pattern-enum"},"compile_pattern ","[Enum]"),(0,l.yg)("p",null,"SOURCE_CODE,ABSOLUTE_PATH\n\u9009\u62e9 SOURCE_CODE\uff0cSOURCE_CODE \u5c5e\u6027\u5fc5\u586b;\u9009\u62e9ABSOLUTE_PATH\uff0cABSOLUTE_PATH\u5c5e\u6027\u5fc5\u586b\u3002"),(0,l.yg)("h3",{id:"absolute_path-string"},"absolute_path ","[string]"),(0,l.yg)("p",null,"\u670d\u52a1\u5668\u4e0aJava\u6216Groovy\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84"),(0,l.yg)("h3",{id:"source_code-string"},"source_code ","[string]"),(0,l.yg)("p",null,"\u6e90\u4ee3\u7801"),(0,l.yg)("h4",{id:"\u5173\u4e8esource_code"},"\u5173\u4e8esource_code"),(0,l.yg)("p",null,"\u5728\u4ee3\u7801\u4e2d\uff0c\u4f60\u5fc5\u987b\u5b9e\u73b0\u4e24\u4e2a\u65b9\u6cd5"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Column[] getInlineOutputColumns(CatalogTable inputCatalogTable)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Object[] getInlineOutputFieldValues(SeaTunnelRowAccessor inputRow)"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"getInlineOutputColumns"),"\u65b9\u6cd5\u4e2d\uff0c\u5165\u53c2\u7c7b\u578b\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"CatalogTable"),"\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"Column[]"),"\u3002\n\u4f60\u53ef\u4ee5\u4ece\u5165\u53c2\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"CatalogTable"),"\u83b7\u53d6\u5f53\u524d\u8868\u7684\u8868\u7ed3\u6784\u3002\n\u5728\u8fd4\u56de\u7ed3\u679c\u4e2d\uff0c\u5982\u679c\u5b57\u6bb5\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u4f1a\u6839\u636e\u8fd4\u56de\u7ed3\u679c\u8fdb\u884c\u8986\u76d6\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u6dfb\u52a0\u5230\u73b0\u6709\u8868\u7ed3\u6784\u4e2d\u3002 "),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"getInlineOutputFieldValues"),"\u65b9\u6cd5\uff0c\u5165\u53c2\u7c7b\u578b\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"SeaTunnelRowAccessor"),"\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"Object[]"),"\n\u4f60\u53ef\u4ee5\u4ece",(0,l.yg)("inlineCode",{parentName:"p"},"SeaTunnelRowAccessor"),"\u83b7\u53d6\u5230\u5f53\u524d\u884c\u7684\u6570\u636e\uff0c\u8fdb\u884c\u81ea\u5df1\u7684\u5b9a\u5236\u5316\u6570\u636e\u5904\u7406\u903b\u8f91\u3002\n\u8fd4\u56de\u7ed3\u679c\u4e2d\uff0c\u6570\u7ec4\u957f\u5ea6\u9700\u8981\u4e0e",(0,l.yg)("inlineCode",{parentName:"p"},"getInlineOutputColumns"),"\u65b9\u6cd5\u8fd4\u56de\u7684\u957f\u5ea6\u4e00\u81f4\uff0c\u5e76\u4e14\u91cc\u9762\u7684\u5b57\u6bb5\u503c\u987a\u5e8f\u4e5f\u9700\u8981\u4fdd\u6301\u4e00\u81f4\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u6709\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5305\uff0c\u8bf7\u5c06\u5b83\u4eec\u653e\u5728${SEATUNNEL_HOME}/lib\u4e2d\uff0c\u5982\u679c\u60a8\u4f7f\u7528spark\u6216flink\uff0c\u5219\u9700\u8981\u5c06\u5176\u653e\u5728\u76f8\u5e94\u670d\u52a1\u7684libs\u4e0b\u3002\n\u4f60\u9700\u8981\u91cd\u542f\u96c6\u7fa4\u670d\u52a1\uff0c\u624d\u80fd\u91cd\u65b0\u52a0\u8f7d\u8fd9\u4e9b\u4f9d\u8d56\u3002"),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("p",null,"\u6e90\u7aef\u6570\u636e\u8bfb\u53d6\u7684\u8868\u683c\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"card"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123")))),(0,l.yg)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"DynamicCompile"),"\u5bf9\u6570\u636e\u8fdb\u884c\u4fee\u6539\uff0c\u6dfb\u52a0\u4e00\u5217",(0,l.yg)("inlineCode",{parentName:"p"},"compile_language"),"\u5b57\u6bb5\uff0c\u5e76\u4e14\u5c06",(0,l.yg)("inlineCode",{parentName:"p"},"age"),"\u5b57\u6bb5\u66f4\u65b0\uff0c\u5f53",(0,l.yg)("inlineCode",{parentName:"p"},"age=20"),"\u65f6\u5c06\u5176\u66f4\u65b0\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"40")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4f7f\u7528groovy")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hacon"},'transform {\n DynamicCompile {\n    plugin_input = "fake"\n    plugin_output = "groovy_out"\n    compile_language="GROOVY"\n    compile_pattern="SOURCE_CODE"\n    source_code="""\n                 import org.apache.seatunnel.api.table.catalog.Column\n                 import org.apache.seatunnel.api.table.type.SeaTunnelRowAccessor\n                 import org.apache.seatunnel.api.table.catalog.CatalogTable\n                 import org.apache.seatunnel.api.table.catalog.PhysicalColumn;\n                 import org.apache.seatunnel.api.table.type.*;\n                 import java.util.ArrayList;\n                 class demo  {\n                    public Column[] getInlineOutputColumns(CatalogTable inputCatalogTable) {\n                        PhysicalColumn col1 =\n                                PhysicalColumn.of(\n                                        "compile_language",\n                                        BasicType.STRING_TYPE,\n                                        10L,\n                                        true,\n                                        "",\n                                        "");\n                        PhysicalColumn col2 =\n                                PhysicalColumn.of(\n                                        "age",\n                                        BasicType.INT_TYPE,\n                                        0L,\n                                        false,\n                                        false,\n                                        ""\n                                );\n                        return new Column[]{\n                                col1, col2\n                        };\n                    }\n                \n                \n                    public Object[] getInlineOutputFieldValues(SeaTunnelRowAccessor inputRow) {\n                        Object[] fieldValues = new Object[2];\n                        // get age \n                        Object ageField = inputRow.getField(1);\n                        fieldValues[0] = "GROOVY";\n                        if (Integer.parseInt(ageField.toString()) == 20) {\n                            fieldValues[1] = 40;\n                        } else {\n                            fieldValues[1] = ageField;\n                        }\n                        return fieldValues;\n                    }\n                 };"""\n\n  }\n}\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4f7f\u7528java")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hacon"},'transform {\n DynamicCompile {\n    plugin_input = "fake"\n    plugin_output = "java_out"\n    compile_language="JAVA"\n    compile_pattern="SOURCE_CODE"\n    source_code="""\n                 import org.apache.seatunnel.api.table.catalog.Column;\n                 import org.apache.seatunnel.api.table.type.SeaTunnelRowAccessor;\n                 import org.apache.seatunnel.api.table.catalog.*;\n                 import org.apache.seatunnel.api.table.type.*;\n                 import java.util.ArrayList;\n                    public Column[] getInlineOutputColumns(CatalogTable inputCatalogTable) {\n                        PhysicalColumn col1 =\n                                PhysicalColumn.of(\n                                        "compile_language",\n                                        BasicType.STRING_TYPE,\n                                        10L,\n                                        true,\n                                        "",\n                                        "");\n                        PhysicalColumn col2 =\n                                PhysicalColumn.of(\n                                        "age",\n                                        BasicType.INT_TYPE,\n                                        0L,\n                                        false,\n                                        false,\n                                        ""\n                                );\n                        return new Column[]{\n                                col1, col2\n                        };\n                    }\n                \n                \n                    public Object[] getInlineOutputFieldValues(SeaTunnelRowAccessor inputRow) {\n                        Object[] fieldValues = new Object[2];\n                        // get age \n                        Object ageField = inputRow.getField(1);\n                        fieldValues[0] = "JAVA";\n                        if (Integer.parseInt(ageField.toString()) == 20) {\n                            fieldValues[1] = 40;\n                        } else {\n                            fieldValues[1] = ageField;\n                        }\n                        return fieldValues;\n                    }\n                """\n\n  }\n } \n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6307\u5b9a\u6e90\u7801\u6587\u4ef6\u8def\u5f84")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hacon"},' transform {\n DynamicCompile {\n    plugin_input = "fake"\n    plugin_output = "groovy_out"\n    compile_language="GROOVY"\n    compile_pattern="ABSOLUTE_PATH"\n    absolute_path="""/tmp/GroovyFile"""\n\n  }\n}\n')),(0,l.yg)("p",null,"\u90a3\u4e48\u7ed3\u679c\u8868 ",(0,l.yg)("inlineCode",{parentName:"p"},"groovy_out")," \u4e2d\u7684\u6570\u636e\u5c06\u4f1a\u66f4\u65b0\u4e3a\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"card"),(0,l.yg)("th",{parentName:"tr",align:null},"compile_language"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"40"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"GROOVY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"40"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"GROOVY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"GROOVY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"GROOVY")))),(0,l.yg)("p",null,"\u90a3\u4e48\u7ed3\u679c\u8868 ",(0,l.yg)("inlineCode",{parentName:"p"},"java_out")," \u4e2d\u7684\u6570\u636e\u5c06\u4f1a\u66f4\u65b0\u4e3a\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"card"),(0,l.yg)("th",{parentName:"tr",align:null},"compile_language"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"40"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"JAVA")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"40"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"JAVA")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"JAVA")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"JAVA")))),(0,l.yg)("p",null,"\u66f4\u591a\u590d\u6742\u4f8b\u5b50\u53ef\u4ee5\u53c2\u8003\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/tree/dev/seatunnel-e2e/seatunnel-transforms-v2-e2e/seatunnel-transforms-v2-e2e-part-2/src/test/resources/dynamic_compile/conf"},"https://github.com/apache/seatunnel/tree/dev/seatunnel-e2e/seatunnel-transforms-v2-e2e/seatunnel-transforms-v2-e2e-part-2/src/test/resources/dynamic_compile/conf")),(0,l.yg)("h2",{id:"changelog"},"Changelog"))}y.isMDXComponent=!0}}]);