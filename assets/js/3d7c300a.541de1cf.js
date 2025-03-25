"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[60732],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=l,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||o;return t?a.createElement(d,r(r({ref:n},p),{},{components:t})):a.createElement(d,r({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(58168),l=(t(96540),t(15680));const o={},r="Set Up Develop Environment",i={unversionedId:"contribution/setup",id:"version-2.2.0-beta/contribution/setup",title:"Set Up Develop Environment",description:"In this section, we are going to show you how to set up your development environment for SeaTunnel, and then run a simple",source:"@site/versioned_docs/version-2.2.0-beta/contribution/setup.md",sourceDirName:"contribution",slug:"/contribution/setup",permalink:"/docs/2.2.0-beta/contribution/setup",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/contribution/setup.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/2.2.0-beta/deployment"},next:{title:"How To Add New License",permalink:"/docs/2.2.0-beta/contribution/new-license"}},s={},u=[{value:"Prepare",id:"prepare",level:2},{value:"Set Up",id:"set-up",level:2},{value:"Clone the Source Code",id:"clone-the-source-code",level:3},{value:"Install Subproject Locally",id:"install-subproject-locally",level:3},{value:"Building SeaTunnel from source",id:"building-seatunnel-from-source",level:3},{value:"Install JetBrains IDEA Scala Plugin",id:"install-jetbrains-idea-scala-plugin",level:3},{value:"Install JetBrains IDEA Lombok Plugin",id:"install-jetbrains-idea-lombok-plugin",level:3},{value:"Install JetBrains IDEA CheckStyle-IDEA Plugin",id:"install-jetbrains-idea-checkstyle-idea-plugin",level:3},{value:"Run Simple Example",id:"run-simple-example",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],p={toc:u},c="wrapper";function g(e){let{components:n,...o}=e;return(0,l.yg)(c,(0,a.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"set-up-develop-environment"},"Set Up Develop Environment"),(0,l.yg)("p",null,"In this section, we are going to show you how to set up your development environment for SeaTunnel, and then run a simple\nexample in your JetBrains IntelliJ IDEA."),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"You can develop or test SeaTunnel code in any development environment that you like, but here we use\n",(0,l.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"JetBrains IDEA")," as an example to teach you to step by step environment.")),(0,l.yg)("h2",{id:"prepare"},"Prepare"),(0,l.yg)("p",null,"Before we start talking about how to set up the environment, we need to do some preparation work. Make sure you already\nhave installed the following software:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git")," installed."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," ( JDK8/JDK11 are supported by now) installed and ",(0,l.yg)("inlineCode",{parentName:"li"},"JAVA_HOME")," set."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://www.scala-lang.org/download/2.11.12.html"},"Scala")," (only scala 2.11.12 supported by now) installed."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/"},"JetBrains IDEA")," installed.")),(0,l.yg)("h2",{id:"set-up"},"Set Up"),(0,l.yg)("h3",{id:"clone-the-source-code"},"Clone the Source Code"),(0,l.yg)("p",null,"First of all, you need to clone the SeaTunnel source code from ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"GitHub"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/incubator-seatunnel.git\n")),(0,l.yg)("h3",{id:"install-subproject-locally"},"Install Subproject Locally"),(0,l.yg)("p",null,"After cloning the source code, you should run the ",(0,l.yg)("inlineCode",{parentName:"p"},"./mvnw")," command to install the subproject to the maven local repository.\nOtherwise, your code could not start in JetBrains IntelliJ IDEA correctly."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"./mvnw install -Dmaven.test.skip\n")),(0,l.yg)("h3",{id:"building-seatunnel-from-source"},"Building SeaTunnel from source"),(0,l.yg)("p",null,"After you install the maven, you can use the follow command to compile and package."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mvn clean package -pl seatunnel-dist -am -Dmaven.test.skip=true\n")),(0,l.yg)("h3",{id:"install-jetbrains-idea-scala-plugin"},"Install JetBrains IDEA Scala Plugin"),(0,l.yg)("p",null,"Now, you can open your JetBrains IntelliJ IDEA and explore the source code, but allow building Scala code in IDEA,\nyou should also install JetBrains IntelliJ IDEA's ",(0,l.yg)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/1347-scala"},"Scala plugin"),".\nSee ",(0,l.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," if you want to."),(0,l.yg)("h3",{id:"install-jetbrains-idea-lombok-plugin"},"Install JetBrains IDEA Lombok Plugin"),(0,l.yg)("p",null,"Before running the following example, you should also install JetBrains IntelliJ IDEA's ",(0,l.yg)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/6317-lombok"},"Lombok plugin"),".\nSee ",(0,l.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," if you want to."),(0,l.yg)("h3",{id:"install-jetbrains-idea-checkstyle-idea-plugin"},"Install JetBrains IDEA CheckStyle-IDEA Plugin"),(0,l.yg)("p",null,"Before coding, you should also install JetBrains IntelliJ IDEA's ",(0,l.yg)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/1065-checkstyle-idea"},"CheckStyle-IDEA plugin"),".\nSee ",(0,l.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," if you want to.\nNext, you should go to ",(0,l.yg)("inlineCode",{parentName:"p"},"Preferences -> Editor -> Code style -> Scheme -> Import Scheme -> CheckStyle Configration")," and import ",(0,l.yg)("inlineCode",{parentName:"p"},"tools/checkstyle/checkStyle.xml"),"\n",(0,l.yg)("img",{alt:"checkstyle.png",src:t(91683).A,width:"2092",height:"1222"}),"\nIf you want to change to automatically formatting, these configurations are also required."),(0,l.yg)("h2",{id:"run-simple-example"},"Run Simple Example"),(0,l.yg)("p",null,"After all the above things are done, you just finish the environment setup and can run an example we provide to you out\nof box. All examples are in module ",(0,l.yg)("inlineCode",{parentName:"p"},"seatunnel-examples"),", you could pick one you are interested in, ",(0,l.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/run-debug-configuration.html"},"running or debugging\nit in IDEA")," as you wish."),(0,l.yg)("p",null,"Here we use ",(0,l.yg)("inlineCode",{parentName:"p"},"seatunnel-examples/seatunnel-flink-examples/src/main/java/org/apache/seatunnel/example/flink/LocalFlinkExample.java"),"\nas an example, when you run it successfully you could see the output as below:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-log"},"+I[Ricky Huo, 71]\n+I[Gary, 12]\n+I[Ricky Huo, 93]\n...\n...\n+I[Ricky Huo, 83]\n")),(0,l.yg)("h2",{id:"whats-more"},"What's More"),(0,l.yg)("p",null,"All our examples use simple source and sink to make it less dependent and easy to run. You can change the example configuration\nin ",(0,l.yg)("inlineCode",{parentName:"p"},"resources/examples"),". You could change your configuration as below, if you want to use PostgreSQL as the source and\nsink to console. "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-conf"},'env {\n  execution.parallelism = 1\n}\n\nsource {\n  JdbcSource {\n    driver = org.postgresql.Driver\n    url = "jdbc:postgresql://host:port/database"\n    username = postgres\n    query = "select * from test"\n  }\n}\n\nsink {\n  ConsoleSink {}\n}\n')))}g.isMDXComponent=!0},91683:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/checkstyle-452b0e47d24b38fb32d445411da389e5.png"}}]);