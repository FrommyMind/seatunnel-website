"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[79091],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>c});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=d(n),s=i,c=y["".concat(p,".").concat(s)]||y[s]||g[s]||l;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(58168),i=(n(96540),n(15680));const l={},r="Intro to schema feature",o={unversionedId:"concept/schema-feature",id:"version-2.3.4/concept/schema-feature",title:"Intro to schema feature",description:"Why we need schema",source:"@site/versioned_docs/version-2.3.4/concept/schema-feature.md",sourceDirName:"concept",slug:"/concept/schema-feature",permalink:"/docs/2.3.4/concept/schema-feature",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.4/concept/schema-feature.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"Intro To Connector V2 Features",permalink:"/docs/2.3.4/concept/connector-v2-features"},next:{title:"JobEnvConfig",permalink:"/docs/2.3.4/concept/JobEnvConfig"}},p={},d=[{value:"Why we need schema",id:"why-we-need-schema",level:2},{value:"SchemaOptions",id:"schemaoptions",level:2},{value:"table",id:"table",level:3},{value:"schema_first",id:"schema_first",level:3},{value:"comment",id:"comment",level:3},{value:"Columns",id:"columns",level:3},{value:"What type supported at now",id:"what-type-supported-at-now",level:4},{value:"How to declare type supported",id:"how-to-declare-type-supported",level:4},{value:"PrimaryKey",id:"primarykey",level:3},{value:"ConstraintKeys",id:"constraintkeys",level:3},{value:"What constraintType supported at now",id:"what-constrainttype-supported-at-now",level:4},{value:"How to use schema",id:"how-to-use-schema",level:2},{value:"Recommended",id:"recommended",level:3},{value:"Deprecated",id:"deprecated",level:3},{value:"When we should use it or not",id:"when-we-should-use-it-or-not",level:2}],m={toc:d},y="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"intro-to-schema-feature"},"Intro to schema feature"),(0,i.yg)("h2",{id:"why-we-need-schema"},"Why we need schema"),(0,i.yg)("p",null,"Some NoSQL databases or message queue are not strongly limited schema, so the schema cannot be obtained through the api.\nAt this time, a schema needs to be defined to convert to TableSchema and obtain data."),(0,i.yg)("h2",{id:"schemaoptions"},"SchemaOptions"),(0,i.yg)("p",null,"We can use SchemaOptions to define schema, the SchemaOptions contains some config to define the schema. e.g. columns, primaryKey, constraintKeys."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'schema = {\n    table = "database.schema.table"\n    schema_first = false\n    comment = "comment"\n    columns = [\n    ...\n    ]\n    primaryKey {\n    ...\n    }\n    \n    constraintKeys {\n    ...\n    }\n}\n')),(0,i.yg)("h3",{id:"table"},"table"),(0,i.yg)("p",null,"The table full name of the table identifier which the schema belongs to, it contains database, schema, table name. e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"database.schema.table"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"database.table"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"table"),"."),(0,i.yg)("h3",{id:"schema_first"},"schema_first"),(0,i.yg)("p",null,"Default is false."),(0,i.yg)("p",null,"If the schema_first is true, the schema will be used first, this means if we set ",(0,i.yg)("inlineCode",{parentName:"p"},'table = "a.b"'),", ",(0,i.yg)("inlineCode",{parentName:"p"},"a")," will be parsed as schema rather than database, then we can support write ",(0,i.yg)("inlineCode",{parentName:"p"},'table = "schema.table"'),"."),(0,i.yg)("h3",{id:"comment"},"comment"),(0,i.yg)("p",null,"The comment of the CatalogTable which the schema belongs to."),(0,i.yg)("h3",{id:"columns"},"Columns"),(0,i.yg)("p",null,"Columns is a list of config used to define the column in schema, each column can contains name, type, nullable, defaultValue, comment field."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'columns = [\n       {\n          name = id\n          type = bigint\n          nullable = false\n          columnLength = 20\n          defaultValue = 0\n          comment = "primary key id"\n       }\n]\n')),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"name"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.yg)("td",{parentName:"tr",align:"left"},"-"),(0,i.yg)("td",{parentName:"tr",align:null},"The name of the column")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"type"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.yg)("td",{parentName:"tr",align:"left"},"-"),(0,i.yg)("td",{parentName:"tr",align:null},"The data type of the column")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"nullable"),(0,i.yg)("td",{parentName:"tr",align:"left"},"No"),(0,i.yg)("td",{parentName:"tr",align:"left"},"true"),(0,i.yg)("td",{parentName:"tr",align:null},"If the column can be nullable")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"columnLength"),(0,i.yg)("td",{parentName:"tr",align:"left"},"No"),(0,i.yg)("td",{parentName:"tr",align:"left"},"0"),(0,i.yg)("td",{parentName:"tr",align:null},"The length of the column which will be useful when you need to define the length")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"defaultValue"),(0,i.yg)("td",{parentName:"tr",align:"left"},"No"),(0,i.yg)("td",{parentName:"tr",align:"left"},"null"),(0,i.yg)("td",{parentName:"tr",align:null},"The default value of the column")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"comment"),(0,i.yg)("td",{parentName:"tr",align:"left"},"No"),(0,i.yg)("td",{parentName:"tr",align:"left"},"null"),(0,i.yg)("td",{parentName:"tr",align:null},"The comment of the column")))),(0,i.yg)("h4",{id:"what-type-supported-at-now"},"What type supported at now"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Data type"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Value type in Java"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"string"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.lang.String")),(0,i.yg)("td",{parentName:"tr",align:"left"},"string")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.lang.Boolean")),(0,i.yg)("td",{parentName:"tr",align:"left"},"boolean")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"tinyint"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.lang.Byte")),(0,i.yg)("td",{parentName:"tr",align:"left"},"-128 to 127 regular. 0 to 255 unsigned*. Specify the maximum number of digits in parentheses.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"smallint"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.lang.Short")),(0,i.yg)("td",{parentName:"tr",align:"left"},"-32768 to 32767 General. 0 to 65535 unsigned*. Specify the maximum number of digits in parentheses.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"int"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.lang.Integer")),(0,i.yg)("td",{parentName:"tr",align:"left"},"All numbers from -2,147,483,648 to 2,147,483,647 are allowed.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.lang.Long")),(0,i.yg)("td",{parentName:"tr",align:"left"},"All numbers between -9,223,372,036,854,775,808 and 9,223,372,036,854,775,807 are allowed.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"float"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.lang.Float")),(0,i.yg)("td",{parentName:"tr",align:"left"},"Float-precision numeric data from -1.79E+308 to 1.79E+308.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"double"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.lang.Double")),(0,i.yg)("td",{parentName:"tr",align:"left"},"Double precision floating point. Handle most decimals.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"decimal"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.math.BigDecimal")),(0,i.yg)("td",{parentName:"tr",align:"left"},"DOUBLE type stored as a string, allowing a fixed decimal point.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"null"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.lang.Void")),(0,i.yg)("td",{parentName:"tr",align:"left"},"null")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"byte[]")),(0,i.yg)("td",{parentName:"tr",align:"left"},"bytes.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"date"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.time.LocalDate")),(0,i.yg)("td",{parentName:"tr",align:"left"},"Only the date is stored. From January 1, 0001 to December 31, 9999.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"time"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.time.LocalTime")),(0,i.yg)("td",{parentName:"tr",align:"left"},"Only store time. Accuracy is 100 nanoseconds.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"timestamp"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.time.LocalDateTime")),(0,i.yg)("td",{parentName:"tr",align:"left"},"Stores a unique number that is updated whenever a row is created or modified. timestamp is based on the internal clock and does not correspond to real time. There can only be one timestamp variable per table.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"row"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"org.apache.seatunnel.api.table.type.SeaTunnelRow")),(0,i.yg)("td",{parentName:"tr",align:"left"},"Row type,can be nested.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"map"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java.util.Map")),(0,i.yg)("td",{parentName:"tr",align:"left"},"A Map is an object that maps keys to values. The key type includes ",(0,i.yg)("inlineCode",{parentName:"td"},"int")," ",(0,i.yg)("inlineCode",{parentName:"td"},"string")," ",(0,i.yg)("inlineCode",{parentName:"td"},"boolean")," ",(0,i.yg)("inlineCode",{parentName:"td"},"tinyint")," ",(0,i.yg)("inlineCode",{parentName:"td"},"smallint")," ",(0,i.yg)("inlineCode",{parentName:"td"},"bigint")," ",(0,i.yg)("inlineCode",{parentName:"td"},"float")," ",(0,i.yg)("inlineCode",{parentName:"td"},"double")," ",(0,i.yg)("inlineCode",{parentName:"td"},"decimal")," ",(0,i.yg)("inlineCode",{parentName:"td"},"date")," ",(0,i.yg)("inlineCode",{parentName:"td"},"time")," ",(0,i.yg)("inlineCode",{parentName:"td"},"timestamp")," ",(0,i.yg)("inlineCode",{parentName:"td"},"null")," , and the value type includes ",(0,i.yg)("inlineCode",{parentName:"td"},"int")," ",(0,i.yg)("inlineCode",{parentName:"td"},"string")," ",(0,i.yg)("inlineCode",{parentName:"td"},"boolean")," ",(0,i.yg)("inlineCode",{parentName:"td"},"tinyint")," ",(0,i.yg)("inlineCode",{parentName:"td"},"smallint")," ",(0,i.yg)("inlineCode",{parentName:"td"},"bigint")," ",(0,i.yg)("inlineCode",{parentName:"td"},"float")," ",(0,i.yg)("inlineCode",{parentName:"td"},"double")," ",(0,i.yg)("inlineCode",{parentName:"td"},"decimal")," ",(0,i.yg)("inlineCode",{parentName:"td"},"date")," ",(0,i.yg)("inlineCode",{parentName:"td"},"time")," ",(0,i.yg)("inlineCode",{parentName:"td"},"timestamp")," ",(0,i.yg)("inlineCode",{parentName:"td"},"null")," ",(0,i.yg)("inlineCode",{parentName:"td"},"array")," ",(0,i.yg)("inlineCode",{parentName:"td"},"map")," ",(0,i.yg)("inlineCode",{parentName:"td"},"row"),".")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"array"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"ValueType[]")),(0,i.yg)("td",{parentName:"tr",align:"left"},"A array is a data type that represents a collection of elements. The element type includes ",(0,i.yg)("inlineCode",{parentName:"td"},"int")," ",(0,i.yg)("inlineCode",{parentName:"td"},"string")," ",(0,i.yg)("inlineCode",{parentName:"td"},"boolean")," ",(0,i.yg)("inlineCode",{parentName:"td"},"tinyint")," ",(0,i.yg)("inlineCode",{parentName:"td"},"smallint")," ",(0,i.yg)("inlineCode",{parentName:"td"},"bigint")," ",(0,i.yg)("inlineCode",{parentName:"td"},"float")," ",(0,i.yg)("inlineCode",{parentName:"td"},"double"),".")))),(0,i.yg)("h4",{id:"how-to-declare-type-supported"},"How to declare type supported"),(0,i.yg)("p",null,"SeaTunnel provides a simple and direct way to declare basic types. Basic type keywords include ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"tinyint"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"smallint"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"int"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"bigint"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"float"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"double"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"date"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"time"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"timestamp"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"null"),". The keyword names for basic types can be used directly as type declarations, and SeaTunnel is case-insensitive to type keywords. For example, if you need to declare a field with integer type, you can simply define the field as ",(0,i.yg)("inlineCode",{parentName:"p"},"int")," or ",(0,i.yg)("inlineCode",{parentName:"p"},'"int"'),"."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"The null type declaration must be enclosed in double quotes, like ",(0,i.yg)("inlineCode",{parentName:"p"},'"null"'),". This approach helps avoid confusion with ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON"),"'s ",(0,i.yg)("inlineCode",{parentName:"p"},"null")," type which represents undefined object.")),(0,i.yg)("p",null,"When declaring complex types (such as ",(0,i.yg)("strong",{parentName:"p"},"decimal"),", ",(0,i.yg)("strong",{parentName:"p"},"array"),", ",(0,i.yg)("strong",{parentName:"p"},"map"),", and ",(0,i.yg)("strong",{parentName:"p"},"row"),"), pay attention to specific considerations."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When declaring a decimal type, precision and scale settings are required, and the type definition follows the format ",(0,i.yg)("inlineCode",{parentName:"li"},"decimal(precision, scale)"),". It's essential to emphasize that the declaration of the decimal type must be enclosed in ",(0,i.yg)("inlineCode",{parentName:"li"},'"'),"; you cannot use the type name directly, as with basic types. For example, when declaring a decimal field with precision 10 and scale 2, you specify the field type as ",(0,i.yg)("inlineCode",{parentName:"li"},'"decimal(10,2)"'),"."),(0,i.yg)("li",{parentName:"ul"},"When declaring an array type, you need to specify the element type, and the type definition follows the format ",(0,i.yg)("inlineCode",{parentName:"li"},"array<T>"),", where ",(0,i.yg)("inlineCode",{parentName:"li"},"T")," represents the element type. The element type includes ",(0,i.yg)("inlineCode",{parentName:"li"},"int"),",",(0,i.yg)("inlineCode",{parentName:"li"},"string"),",",(0,i.yg)("inlineCode",{parentName:"li"},"boolean"),",",(0,i.yg)("inlineCode",{parentName:"li"},"tinyint"),",",(0,i.yg)("inlineCode",{parentName:"li"},"smallint"),",",(0,i.yg)("inlineCode",{parentName:"li"},"bigint"),",",(0,i.yg)("inlineCode",{parentName:"li"},"float")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"double"),". Similar to the decimal type declaration, it also be enclosed in ",(0,i.yg)("inlineCode",{parentName:"li"},'"'),". For example, when declaring a field with an array of integers, you specify the field type as ",(0,i.yg)("inlineCode",{parentName:"li"},'"array<int>"'),"."),(0,i.yg)("li",{parentName:"ul"},"When declaring a map type, you need to specify the key and value types. The map type definition follows the format ",(0,i.yg)("inlineCode",{parentName:"li"},"map<K,V>"),", where ",(0,i.yg)("inlineCode",{parentName:"li"},"K")," represents the key type and ",(0,i.yg)("inlineCode",{parentName:"li"},"V")," represents the value type. ",(0,i.yg)("inlineCode",{parentName:"li"},"K")," can be any basic type and decimal type, and ",(0,i.yg)("inlineCode",{parentName:"li"},"V")," can be any type supported by SeaTunnel. Similar to previous type declarations, the map type declaration must be enclosed in double quotes. For example, when declaring a field with map type, where the key type is string and the value type is integer, you can declare the field as ",(0,i.yg)("inlineCode",{parentName:"li"},'"map<string, int>"'),"."),(0,i.yg)("li",{parentName:"ul"},"When declaring a row type, you need to define a ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON")," object to describe the fields and their types. The field types can be any type supported by SeaTunnel. For example, when declaring a row type containing an integer field ",(0,i.yg)("inlineCode",{parentName:"li"},"a")," and a string field ",(0,i.yg)("inlineCode",{parentName:"li"},"b"),", you can declare it as ",(0,i.yg)("inlineCode",{parentName:"li"},"{a = int, b = string}"),". Enclosing the definition in ",(0,i.yg)("inlineCode",{parentName:"li"},'"')," as a string is also acceptable, so ",(0,i.yg)("inlineCode",{parentName:"li"},'"{a = int, b = string}"')," is equivalent to ",(0,i.yg)("inlineCode",{parentName:"li"},"{a = int, c = string}"),". Since HOCON is compatible with JSON, ",(0,i.yg)("inlineCode",{parentName:"li"},'"{\\"a\\":\\"int\\", \\"b\\":\\"string\\"}"')," is equivalent to ",(0,i.yg)("inlineCode",{parentName:"li"},'"{a = int, b = string}"'),".")),(0,i.yg)("p",null,"Here is an example of complex type declarations:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hocon"},'schema {\n  fields {\n    c_decimal = "decimal(10, 2)"\n    c_array = "array<int>"\n    c_row = {\n        c_int = int\n        c_string = string\n        c_row = {\n            c_int = int\n        }\n    }\n    # Hocon style declare row type in generic type\n    map0 = "map<string, {c_int = int, c_string = string, c_row = {c_int = int}}>"\n    # Json style declare row type in generic type\n    map1 = "map<string, {\\"c_int\\":\\"int\\", \\"c_string\\":\\"string\\", \\"c_row\\":{\\"c_int\\":\\"int\\"}}>"\n  }\n}\n')),(0,i.yg)("h3",{id:"primarykey"},"PrimaryKey"),(0,i.yg)("p",null,"Primary key is a config used to define the primary key in schema, it contains name, columns field."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"primaryKey {\n    name = id\n    columns = [id]\n}\n")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"name"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.yg)("td",{parentName:"tr",align:"left"},"-"),(0,i.yg)("td",{parentName:"tr",align:null},"The name of the primaryKey")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"columns"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.yg)("td",{parentName:"tr",align:"left"},"-"),(0,i.yg)("td",{parentName:"tr",align:null},"The column list in the primaryKey")))),(0,i.yg)("h3",{id:"constraintkeys"},"ConstraintKeys"),(0,i.yg)("p",null,"Constraint keys is a list of config used to define the constraint keys in schema, it contains constraintName, constraintType, constraintColumns field."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'constraintKeys = [\n      {\n         constraintName = "id_index"\n         constraintType = KEY\n         constraintColumns = [\n            {\n                columnName = "id"\n                sortType = ASC\n            }\n         ]\n      },\n   ]\n')),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"constraintName"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.yg)("td",{parentName:"tr",align:"left"},"-"),(0,i.yg)("td",{parentName:"tr",align:null},"The name of the constraintKey")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"constraintType"),(0,i.yg)("td",{parentName:"tr",align:"left"},"No"),(0,i.yg)("td",{parentName:"tr",align:"left"},"KEY"),(0,i.yg)("td",{parentName:"tr",align:null},"The type of the constraintKey")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"constraintColumns"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.yg)("td",{parentName:"tr",align:"left"},"-"),(0,i.yg)("td",{parentName:"tr",align:null},"The column list in the primaryKey, each column should contains constraintType and sortType, sortType support ASC and DESC, default is ASC")))),(0,i.yg)("h4",{id:"what-constrainttype-supported-at-now"},"What constraintType supported at now"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"ConstraintType"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"INDEX_KEY"),(0,i.yg)("td",{parentName:"tr",align:"left"},"key")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"UNIQUE_KEY"),(0,i.yg)("td",{parentName:"tr",align:"left"},"unique key")))),(0,i.yg)("h2",{id:"how-to-use-schema"},"How to use schema"),(0,i.yg)("h3",{id:"recommended"},"Recommended"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'source {\n  FakeSource {\n    parallelism = 2\n    result_table_name = "fake"\n    row.num = 16\n    schema {\n        table = "FakeDatabase.FakeTable"\n        columns = [\n           {\n              name = id\n              type = bigint\n              nullable = false\n              defaultValue = 0\n              comment = "primary key id"\n           },\n           {\n              name = name\n              type = "string"\n              nullable = true\n              comment = "name"\n           },\n           {\n              name = age\n              type = int\n              nullable = true\n              comment = "age"\n           }\n       ]\n       primaryKey {\n          name = "id"\n          columnNames = [id]\n       }\n       constraintKeys = [\n          {\n             constraintName = "unique_name"\n             constraintType = UNIQUE_KEY\n             constraintColumns = [\n                {\n                    columnName = "name"\n                    sortType = ASC\n                }\n             ]\n          },\n       ]\n      }\n    }\n}\n')),(0,i.yg)("h3",{id:"deprecated"},"Deprecated"),(0,i.yg)("p",null,"If you only need to define the column, you can use fields to define the column, this is a simple way but will be remove in the future."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'source {\n  FakeSource {\n    parallelism = 2\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        id = bigint\n        c_map = "map<string, smallint>"\n        c_array = "array<tinyint>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(2, 1)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n')),(0,i.yg)("h2",{id:"when-we-should-use-it-or-not"},"When we should use it or not"),(0,i.yg)("p",null,"If there is a ",(0,i.yg)("inlineCode",{parentName:"p"},"schema")," configuration project in Options,the connector can then customize the schema. Like ",(0,i.yg)("inlineCode",{parentName:"p"},"Fake")," ",(0,i.yg)("inlineCode",{parentName:"p"},"Pulsar")," ",(0,i.yg)("inlineCode",{parentName:"p"},"Http")," source connector etc."))}g.isMDXComponent=!0}}]);