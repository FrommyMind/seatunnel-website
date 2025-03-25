"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[47261],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),y=o,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},28011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const a={},i="Config  File Encryption And Decryption",c={unversionedId:"connector-v2/Config-Encryption-Decryption",id:"version-2.3.5/connector-v2/Config-Encryption-Decryption",title:"Config  File Encryption And Decryption",description:"Introduction",source:"@site/versioned_docs/version-2.3.5/connector-v2/Config-Encryption-Decryption.md",sourceDirName:"connector-v2",slug:"/connector-v2/Config-Encryption-Decryption",permalink:"/docs/2.3.5/connector-v2/Config-Encryption-Decryption",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.5/connector-v2/Config-Encryption-Decryption.md",tags:[],version:"2.3.5",frontMatter:{},sidebar:"docs",previous:{title:"Error Quick Reference Manual",permalink:"/docs/2.3.5/connector-v2/Error-Quick-Reference-Manual"},next:{title:"Transform-V2",permalink:"/docs/2.3.5/category/transform-v2"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"How to implement user-defined encryption and decryption",id:"how-to-implement-user-defined-encryption-and-decryption",level:2}],s={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"config--file-encryption-and-decryption"},"Config  File Encryption And Decryption"),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"In most production environments, sensitive configuration items such as passwords are required to be encrypted and cannot be stored in plain text, SeaTunnel provides a convenient one-stop solution for this."),(0,o.yg)("h2",{id:"how-to-use"},"How to use"),(0,o.yg)("p",null,"SeaTunnel comes with the function of base64 encryption and decryption, but it is not recommended for production use, it is recommended that users implement custom encryption and decryption logic. You can refer to this chapter ","[How to implement user-defined encryption and decryption]","(#How to implement user-defined encryption and decryption) get more details about it."),(0,o.yg)("p",null,"Base64 encryption support encrypt the following parameters:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"username"),(0,o.yg)("li",{parentName:"ul"},"password"),(0,o.yg)("li",{parentName:"ul"},"auth")),(0,o.yg)("p",null,"Next, I'll show how to quickly use SeaTunnel's own ",(0,o.yg)("inlineCode",{parentName:"p"},"base64")," encryption:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"And a new option ",(0,o.yg)("inlineCode",{parentName:"p"},"shade.identifier")," in env block of config file, this option indicate what the encryption method that you want to use, in this example, we should add ",(0,o.yg)("inlineCode",{parentName:"p"},"shade.identifier = base64")," in config as the following shown:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},'#\n# Licensed to the Apache Software Foundation (ASF) under one or more\n# contributor license agreements.  See the NOTICE file distributed with\n# this work for additional information regarding copyright ownership.\n# The ASF licenses this file to You under the Apache License, Version 2.0\n# (the "License"); you may not use this file except in compliance with\n# the License.  You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n#\n\nenv {\n  parallelism = 1\n  shade.identifier = "base64"\n}\n\nsource {\n  MySQL-CDC {\n    result_table_name = "fake"\n    parallelism = 1\n    server-id = 5656\n    port = 56725\n    hostname = "127.0.0.1"\n    username = "seatunnel"\n    password = "seatunnel_password"\n    database-name = "inventory_vwyw0n"\n    table-name = "products"\n    base-url = "jdbc:mysql://localhost:56725"\n  }\n}\n\ntransform {\n}\n\nsink {\n  # choose stdout output plugin to output data to console\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "seatunnel"\n    password = "seatunnel_password"\n\n    # cdc options\n    primary_key = "id"\n    support_upsert = true\n  }\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Using the shell based on different calculate engine to encrypt config file, in this example we use zeta:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"${SEATUNNEL_HOME}/bin/seatunnel.sh --config config/v2.batch.template --encrypt\n")),(0,o.yg)("p",{parentName:"li"},"Then you can see the encrypted configuration file in the terminal:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-log"},'2023-02-20 17:50:58,319 INFO  org.apache.seatunnel.core.starter.command.ConfEncryptCommand - Encrypt config: \n{\n    "env" : {\n        "parallelism" : 1,\n        "shade.identifier" : "base64"\n    },\n    "source" : [\n        {\n            "base-url" : "jdbc:mysql://localhost:56725",\n            "hostname" : "127.0.0.1",\n            "password" : "c2VhdHVubmVsX3Bhc3N3b3Jk",\n            "port" : 56725,\n            "database-name" : "inventory_vwyw0n",\n            "parallelism" : 1,\n            "result_table_name" : "fake",\n            "table-name" : "products",\n            "plugin_name" : "MySQL-CDC",\n            "server-id" : 5656,\n            "username" : "c2VhdHVubmVs"\n        }\n    ],\n    "transform" : [],\n    "sink" : [\n        {\n            "database" : "default",\n            "password" : "c2VhdHVubmVsX3Bhc3N3b3Jk",\n            "support_upsert" : true,\n            "host" : "localhost:8123",\n            "plugin_name" : "Clickhouse",\n            "primary_key" : "id",\n            "table" : "fake_all",\n            "username" : "c2VhdHVubmVs"\n        }\n    ]\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Of course, not only encrypted configuration files are supported, but if the user wants to see the decrypted configuration file, you can execute this command:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"${SEATUNNEL_HOME}/bin/seatunnel.sh --config config/v2.batch.template --decrypt\n")))),(0,o.yg)("h2",{id:"how-to-implement-user-defined-encryption-and-decryption"},"How to implement user-defined encryption and decryption"),(0,o.yg)("p",null,"If you want to customize the encryption method and the configuration of the encryption, this section will help you to solve the problem."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a java maven project")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add ",(0,o.yg)("inlineCode",{parentName:"p"},"seatunnel-api")," module in dependencies like the following shown:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.seatunnel</groupId>\n    <artifactId>seatunnel-api</artifactId>\n    <version>${seatunnel.version}</version>\n</dependency>\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a new class and implement interface ",(0,o.yg)("inlineCode",{parentName:"p"},"ConfigShade"),", this interface has the following methods:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * The interface that provides the ability to encrypt and decrypt {@link\n * org.apache.seatunnel.shade.com.typesafe.config.Config}\n */\npublic interface ConfigShade {\n\n    /**\n     * The unique identifier of the current interface, used it to select the correct {@link\n     * ConfigShade}\n     */\n    String getIdentifier();\n\n    /**\n     * Encrypt the content\n     *\n     * @param content The content to encrypt\n     */\n    String encrypt(String content);\n\n    /**\n     * Decrypt the content\n     *\n     * @param content The content to decrypt\n     */\n    String decrypt(String content);\n\n    /** To expand the options that user want to encrypt */\n    default String[] sensitiveOptions() {\n        return new String[0];\n    }\n}\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.configuration.ConfigShade")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"resources/META-INF/services"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Package it to jar and add jar to ",(0,o.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/lib"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Change the option ",(0,o.yg)("inlineCode",{parentName:"p"},"shade.identifier")," to the value that you defined in ",(0,o.yg)("inlineCode",{parentName:"p"},"ConfigShade#getIdentifier"),"of you config file, please enjoy it \\^_\\^"))))}u.isMDXComponent=!0}}]);