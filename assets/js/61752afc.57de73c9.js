"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[64962],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>f});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=o,f=c["".concat(s,".").concat(d)]||c[d]||g[d]||r;return a?t.createElement(f,i(i({ref:n},u),{},{components:a})):t.createElement(f,i({ref:n},u))}));function f(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12727:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=a(58168),o=(a(96540),a(15680));const r={},i="FAQs",l={unversionedId:"faq",id:"version-2.3.2/faq",title:"FAQs",description:"I have a question, and I cannot solve it by myself",source:"@site/versioned_docs/version-2.3.2/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/2.3.2/faq",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.2/faq.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"Contribute Transform Guide",permalink:"/docs/2.3.2/contribution/contribute-transform-v2-guide"}},s={},p=[{value:"I have a question, and I cannot solve it by myself",id:"i-have-a-question-and-i-cannot-solve-it-by-myself",level:2},{value:"How do I declare a variable?",id:"how-do-i-declare-a-variable",level:2},{value:"How do I write a configuration item in multi-line text in the configuration file?",id:"how-do-i-write-a-configuration-item-in-multi-line-text-in-the-configuration-file",level:2},{value:"How do I implement variable substitution for multi-line text?",id:"how-do-i-implement-variable-substitution-for-multi-line-text",level:2},{value:"Does SeaTunnel have a case for configuring multiple sources, such as configuring elasticsearch and hdfs in source at the same time?",id:"does-seatunnel-have-a-case-for-configuring-multiple-sources-such-as-configuring-elasticsearch-and-hdfs-in-source-at-the-same-time",level:2},{value:"How do I specify a different JDK version for SeaTunnel on Yarn?",id:"how-do-i-specify-a-different-jdk-version-for-seatunnel-on-yarn",level:2},{value:"What should I do if OOM always appears when running SeaTunnel in Spark local* mode?",id:"what-should-i-do-if-oom-always-appears-when-running-seatunnel-in-spark-local-mode",level:2},{value:"How do I configure logging-related parameters in SeaTunnel-v1(Spark)?",id:"how-do-i-configure-logging-related-parameters-in-seatunnel-v1spark",level:2},{value:"How do I configure logging related parameters in SeaTunnel-v2(Spark, Flink)?",id:"how-do-i-configure-logging-related-parameters-in-seatunnel-v2spark-flink",level:2}],u={toc:p},c="wrapper";function g(e){let{components:n,...a}=e;return(0,o.yg)(c,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"faqs"},"FAQs"),(0,o.yg)("h2",{id:"i-have-a-question-and-i-cannot-solve-it-by-myself"},"I have a question, and I cannot solve it by myself"),(0,o.yg)("p",null,"I have encountered a problem when using SeaTunnel and I cannot solve it by myself. What should I do? First, search in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/issues"},"Issue list")," or ",(0,o.yg)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@seatunnel.apache.org"},"mailing list")," to see if someone has already asked the same question and got an answer. If you cannot find an answer to your question, you can contact community members for help in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel#contact-us"},"these ways"),"."),(0,o.yg)("h2",{id:"how-do-i-declare-a-variable"},"How do I declare a variable?"),(0,o.yg)("p",null,"Do you want to know how to declare a variable in SeaTunnel's configuration, and then dynamically replace the value of the variable at runtime?"),(0,o.yg)("p",null,"Since ",(0,o.yg)("inlineCode",{parentName:"p"},"v1.2.4"),", SeaTunnel supports variable substitution in the configuration. This feature is often used for timing or non-timing offline processing to replace variables such as time and date. The usage is as follows:"),(0,o.yg)("p",null,"Configure the variable name in the configuration. Here is an example of sql transform (actually, anywhere in the configuration file the value in ",(0,o.yg)("inlineCode",{parentName:"p"},"'key = value'")," can use the variable substitution):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'...\ntransform {\n  sql {\n    query = "select * from user_view where city =\'"${city}"\' and dt = \'"${date}"\'"\n  }\n}\n...\n')),(0,o.yg)("p",null,"Taking Spark Local mode as an example, the startup command is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/start-seatunnel-spark.sh \\\n-c ./config/your_app.conf \\\n-e client \\\n-m local[2] \\\n-i city=shanghai \\\n-i date=20190319\n")),(0,o.yg)("p",null,"You can use the parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"-i")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"--variable")," followed by ",(0,o.yg)("inlineCode",{parentName:"p"},"key=value")," to specify the value of the variable, where the key needs to be same as the variable name in the configuration."),(0,o.yg)("h2",{id:"how-do-i-write-a-configuration-item-in-multi-line-text-in-the-configuration-file"},"How do I write a configuration item in multi-line text in the configuration file?"),(0,o.yg)("p",null,"When a configured text is very long and you want to wrap it, you can use three double quotes to indicate its start and end:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'var = """\n whatever you want\n"""\n')),(0,o.yg)("h2",{id:"how-do-i-implement-variable-substitution-for-multi-line-text"},"How do I implement variable substitution for multi-line text?"),(0,o.yg)("p",null,"It is a little troublesome to do variable substitution in multi-line text, because the variable cannot be included in three double quotation marks:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'var = """\nyour string 1\n"""${you_var}""" your string 2"""\n')),(0,o.yg)("p",null,"Refer to: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/issues/456"},"lightbend/config#456"),"."),(0,o.yg)("h2",{id:"does-seatunnel-have-a-case-for-configuring-multiple-sources-such-as-configuring-elasticsearch-and-hdfs-in-source-at-the-same-time"},"Does SeaTunnel have a case for configuring multiple sources, such as configuring elasticsearch and hdfs in source at the same time?"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"env {\n    ...\n}\n\nsource {\n  hdfs { ... }  \n  elasticsearch { ... }\n  jdbc {...}\n}\n\ntransform {\n    ...\n}\n\nsink {\n    elasticsearch { ... }\n}\n")),(0,o.yg)("h2",{id:"how-do-i-specify-a-different-jdk-version-for-seatunnel-on-yarn"},"How do I specify a different JDK version for SeaTunnel on Yarn?"),(0,o.yg)("p",null,"For example, if you want to set the JDK version to JDK8, there are two cases:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The Yarn cluster has deployed JDK8, but the default JDK is not JDK8. Add two configurations to the SeaTunnel config file:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'  env {\n ...\n spark.executorEnv.JAVA_HOME="/your/java_8_home/directory"\n spark.yarn.appMasterEnv.JAVA_HOME="/your/java_8_home/directory"\n ...\n}\n'))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Yarn cluster does not deploy JDK8. At this time, start SeaTunnel attached with JDK8. For detailed operations, see:\n",(0,o.yg)("a",{parentName:"p",href:"https://www.cnblogs.com/jasondan/p/spark-specific-jdk-version.html"},"https://www.cnblogs.com/jasondan/p/spark-specific-jdk-version.html")))),(0,o.yg)("h2",{id:"what-should-i-do-if-oom-always-appears-when-running-seatunnel-in-spark-local-mode"},"What should I do if OOM always appears when running SeaTunnel in Spark local","[*]"," mode?"),(0,o.yg)("p",null,"If you run in local mode, you need to modify the ",(0,o.yg)("inlineCode",{parentName:"p"},"start-seatunnel.sh")," startup script. After ",(0,o.yg)("inlineCode",{parentName:"p"},"spark-submit"),", add a parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"--driver-memory 4g")," . Under normal circumstances, local mode is not used in the production environment. Therefore, this parameter generally does not need to be set during On Yarn. See: ",(0,o.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/configuration.html#application-properties"},"Application Properties")," for details."),(0,o.yg)("h2",{id:"how-do-i-configure-logging-related-parameters-in-seatunnel-v1spark"},"How do I configure logging-related parameters in SeaTunnel-v1(Spark)?"),(0,o.yg)("p",null,"There are three ways to configure logging-related parameters (such as Log Level):"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"[Not recommended]"," Change the default ",(0,o.yg)("inlineCode",{parentName:"p"},"$SPARK_HOME/conf/log4j.properties"),"."),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"This will affect all programs submitted via ",(0,o.yg)("inlineCode",{parentName:"li"},"$SPARK_HOME/bin/spark-submit"),"."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"[Not recommended]"," Modify logging related parameters directly in the Spark code of SeaTunnel."),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"This is equivalent to writing dead, and each change needs to be recompiled."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"[Recommended]"," Use the following methods to change the logging configuration in the SeaTunnel configuration file (The change only takes effect if SeaTunnel >= 1.5.5 ):"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'env {\n    spark.driver.extraJavaOptions = "-Dlog4j.configuration=file:<file path>/log4j.properties"\n    spark.executor.extraJavaOptions = "-Dlog4j.configuration=file:<file path>/log4j.properties"\n}\nsource {\n  ...\n}\ntransform {\n ...\n}\nsink {\n  ...\n}\n')))),(0,o.yg)("p",null,"The contents of the log4j configuration file for reference are as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ cat log4j.properties\nlog4j.rootLogger=ERROR, console\n\n# set the log level for these components\nlog4j.logger.org=ERROR\nlog4j.logger.org.apache.spark=ERROR\nlog4j.logger.org.spark-project=ERROR\nlog4j.logger.org.apache.hadoop=ERROR\nlog4j.logger.io.netty=ERROR\nlog4j.logger.org.apache.zookeeper=ERROR\n\n# add a ConsoleAppender to the logger stdout to write to the console\nlog4j.appender.console=org.apache.log4j.ConsoleAppender\nlog4j.appender.console.layout=org.apache.log4j.PatternLayout\n# use a simple message format\nlog4j.appender.console.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n\n")),(0,o.yg)("h2",{id:"how-do-i-configure-logging-related-parameters-in-seatunnel-v2spark-flink"},"How do I configure logging related parameters in SeaTunnel-v2(Spark, Flink)?"),(0,o.yg)("p",null,"Currently, they cannot be set directly. you need to modify the SeaTunnel startup script. The relevant parameters are specified in the task submission command. For specific parameters, please refer to the official documents:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Spark official documentation: ",(0,o.yg)("a",{parentName:"li",href:"http://spark.apache.org/docs/latest/configuration.html#configuring-logging"},"http://spark.apache.org/docs/latest/configuration.html#configuring-logging")),(0,o.yg)("li",{parentName:"ul"},"Flink official documentation: ",(0,o.yg)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-stable/monitoring/logging.html"},"https://ci.apache.org/projects/flink/flink-docs-stable/monitoring/logging.html"))),(0,o.yg)("p",null,"Reference:"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/27781187/how-to-stop-info-messages-displaying-on-spark-console"},"https://stackoverflow.com/questions/27781187/how-to-stop-info-messages-displaying-on-spark-console")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/configuration.html#configuring-logging"},"http://spark.apache.org/docs/latest/configuration.html#configuring-logging")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://medium.com/@iacomini.riccardo/spark-logging-configuration-in-yarn-faf5ba5fdb01"},"https://medium.com/@iacomini.riccardo/spark-logging-configuration-in-yarn-faf5ba5fdb01")))}g.isMDXComponent=!0}}]);