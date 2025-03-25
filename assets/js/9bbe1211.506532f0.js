"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[33290],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(l,".").concat(d)]||p[d]||g[d]||s;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const s={slug:"spark-execute-elasticsearch",title:"How to quickly write data to Elasticsearch using Spark",tags:["Spark","Kafka","Elasticsearch"]},i=void 0,o={permalink:"/blog/spark-execute-elasticsearch",editUrl:"https://github.com/apache/seatunnel-website/edit/main/blog/2021-12-30-spark-execute-elasticsearch.md",source:"@site/blog/2021-12-30-spark-execute-elasticsearch.md",title:"How to quickly write data to Elasticsearch using Spark",description:"When it comes to writing data to Elasticsearch, the first thing that comes to mind must be Logstash. Logstash is accepted by the majority of users because of its simplicity, scalability, and scalability. However, the ruler is shorter and the inch is longer, and Logstash must have application scenarios that it cannot apply to, such as:",date:"2021-12-30T00:00:00.000Z",formattedDate:"December 30, 2021",tags:[{label:"Spark",permalink:"/blog/tags/spark"},{label:"Kafka",permalink:"/blog/tags/kafka"},{label:"Elasticsearch",permalink:"/blog/tags/elasticsearch"}],readingTime:5.725,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"spark-execute-elasticsearch",title:"How to quickly write data to Elasticsearch using Spark",tags:["Spark","Kafka","Elasticsearch"]},prevItem:{title:"How to quickly import data from Hive into ClickHouse",permalink:"/blog/hive-to-clickhouse"},nextItem:{title:"How to use Spark to do OLAP analysis on TiDB",permalink:"/blog/spark-execute-tidb"}},l={authorsImageUrls:[]},c=[{value:"Kafka to Elasticsearch",id:"kafka-to-elasticsearch",level:2},{value:"Log Sample",id:"log-sample",level:3},{value:"Elasticsearch Document",id:"elasticsearch-document",level:3},{value:"Seatunnel with Elasticsearch",id:"seatunnel-with-elasticsearch",level:2},{value:"Seatunnel",id:"seatunnel",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Seatunnel Pipeline",id:"seatunnel-pipeline",level:3},{value:"Spark",id:"spark",level:4},{value:"Input",id:"input",level:4},{value:"Filter",id:"filter",level:4},{value:"Output",id:"output",level:4},{value:"Running Seatunnel",id:"running-seatunnel",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Contract us",id:"contract-us",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...s}=e;return(0,r.yg)(p,(0,n.A)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"When it comes to writing data to Elasticsearch, the first thing that comes to mind must be Logstash. Logstash is accepted by the majority of users because of its simplicity, scalability, and scalability. However, the ruler is shorter and the inch is longer, and Logstash must have application scenarios that it cannot apply to, such as:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Massive data ETL"),(0,r.yg)("li",{parentName:"ul"},"Massive data aggregation"),(0,r.yg)("li",{parentName:"ul"},"Multi-source data processing")),(0,r.yg)("p",null,"In order to meet these scenarios, many students will choose Spark, use Spark operators to process data, and finally write the processing results to Elasticsearch."),(0,r.yg)("p",null,"Our department used Spark to analyze Nginx logs, counted our web service access, aggregated Nginx logs every minute and finally wrote the results to Elasticsearch, and then used Kibana to configure real-time monitoring of the Dashboard. Both Elasticsearch and Kibana are convenient and practical, but with more and more similar requirements, how to quickly write data to Elasticsearch through Spark has become a big problem for us."),(0,r.yg)("p",null,"Today, I would like to recommend a black technology Seatunnel ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"https://github.com/apache/incubator-seatunnel")," that can realize fast data writing. It is very easy to use , a high-performance, real-time data processing product that can deal with massive data. It is built on Spark and is easy to use, flexibly configured, and requires no development."),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(80204).A,width:"818",height:"466"})),(0,r.yg)("h2",{id:"kafka-to-elasticsearch"},"Kafka to Elasticsearch"),(0,r.yg)("p",null,"Like Logstash, Seatunnel also supports multiple types of data input. Here we take the most common Kakfa as the input source as an example to explain how to use Seatunnel to quickly write data to Elasticsearch"),(0,r.yg)("h3",{id:"log-sample"},"Log Sample"),(0,r.yg)("p",null,"The original log format is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'127.0.0.1 elasticsearch.cn 114.250.140.241 0.001s "127.0.0.1:80" [26/Oct/2018:21:54:32 +0800] "GET /article HTTP/1.1" 200 123 "-" - "Dalvik/2.1.0 (Linux; U; Android 7.1.1; OPPO R11 Build/NMF26X)"\n')),(0,r.yg)("h3",{id:"elasticsearch-document"},"Elasticsearch Document"),(0,r.yg)("p",null,"We want to count the visits of each domain name in one minute. The aggregated data has the following fields:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"domain String\nhostname String\nstatus int\ndatetime String\ncount int\n")),(0,r.yg)("h2",{id:"seatunnel-with-elasticsearch"},"Seatunnel with Elasticsearch"),(0,r.yg)("p",null,"Next, I will introduce you in detail, how we read the data in Kafka through Seatunnel, parse and aggregate the data, and finally write the processing results into Elasticsearch."),(0,r.yg)("h3",{id:"seatunnel"},"Seatunnel"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"Seatunnel")," also has a very rich plug-in that supports reading data from Kafka, HDFS, Hive, performing various data processing, and converting the results Write to Elasticsearch, Kudu or Kafka."),(0,r.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,"First of all, we need to install seatunnel, the installation is very simple, no need to configure system environment variables"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Prepare the Spark environment"),(0,r.yg)("li",{parentName:"ol"},"Install Seatunnel"),(0,r.yg)("li",{parentName:"ol"},"Configure Seatunnel")),(0,r.yg)("p",null,"The following are simple steps, the specific installation can refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"cd /usr/local\nwget https://archive.apache.org/dist/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz\ntar -xvf https://archive.apache.org/dist/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz\nwget https://github.com/InterestingLab/seatunnel/releases/download/v1.1.1/seatunnel-1.1.1.zip\nunzip seatunnel-1.1.1.zip\ncd seatunnel-1.1.1\n\nvim config/seatunnel-env.sh\n# Specify the Spark installation path\nSPARK_HOME=${SPARK_HOME:-/usr/local/spark-2.2.0-bin-hadoop2.7}\n")),(0,r.yg)("h3",{id:"seatunnel-pipeline"},"Seatunnel Pipeline"),(0,r.yg)("p",null,"Like Logstash, we only need to write a configuration file of Seatunnel Pipeline to complete the data import. I believe that friends who know Logstash can start Seatunnel configuration soon."),(0,r.yg)("p",null,"The configuration file includes four parts, namely Spark, Input, filter and Output."),(0,r.yg)("h4",{id:"spark"},"Spark"),(0,r.yg)("p",null,"This part is the related configuration of Spark, which mainly configures the resource size required for Spark execution."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  spark.streaming.batchDuration = 5\n}\n')),(0,r.yg)("h4",{id:"input"},"Input"),(0,r.yg)("p",null,"This part defines the data source. The following is a configuration example of reading data from Kafka,"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'kafkaStream {\n    topics = "seatunnel-es"\n    consumer.bootstrap.servers = "localhost:9092"\n    consumer.group.id = "seatunnel_es_group"\n    consumer.rebalance.max.retries = 100\n}\n')),(0,r.yg)("h4",{id:"filter"},"Filter"),(0,r.yg)("p",null,"In the Filter section, here we configure a series of conversions, including regular parsing to split logs, time conversion to convert HTTPDATE to a date format supported by Elasticsearch, type conversion for fields of type Number, and data aggregation through SQL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'filter {\n    # Parse the original log using regex\n    # The initial data is in the raw_message field\n    grok {\n        source_field = "raw_message"\n        pattern = \'%{NOTSPACE:hostname}\\\\s%{NOTSPACE:domain}\\\\s%{IP:remote_addr}\\\\s%{NUMBER:request_time}s\\\\s\\"%{DATA:upstream_ip}\\"\\\\s\\\\[%{HTTPDATE:timestamp}\\\\]\\\\s\\"%{NOTSPACE:method}\\\\s%{DATA:url}\\\\s%{NOTSPACE:http_ver}\\"\\\\s%{NUMBER:status}\\\\s%{NUMBER:body_bytes_send}\\\\s%{DATA:referer}\\\\s%{NOTSPACE:cookie_info}\\\\s\\"%{DATA:user_agent}\'\n   }\n    # Convert data in "dd/MMM/yyyy:HH:mm:ss Z" format to\n    # format supported in Elasticsearch\n    date {\n        source_field = "timestamp"\n        target_field = "datetime"\n        source_time_format = "dd/MMM/yyyy:HH:mm:ss Z"\n        target_time_format = "yyyy-MM-dd\'T\'HH:mm:ss.SSS+08:00"\n    }\n    ## Aggregate data with SQL\n    sql {\n        table_name = "access_log"\n        sql = "select domain, hostname, int(status), datetime, count(*) from access_log group by domain, hostname, status, datetime"\n    }\n }\n')),(0,r.yg)("h4",{id:"output"},"Output"),(0,r.yg)("p",null,"Finally, we write the processed structured data to Elasticsearch."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'output {\n    elasticsearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${now}"\n        es.batch.size.entries = 100000\n        index_time_format = "yyyy.MM.dd"\n    }\n}\n')),(0,r.yg)("h3",{id:"running-seatunnel"},"Running Seatunnel"),(0,r.yg)("p",null,"We combine the above four-part configuration into our configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"config/batch.conf"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"vim config/batch.conf\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  spark.streaming.batchDuration = 5\n}\ninput {\n    kafkaStream {\n        topics = "seatunnel-es"\n        consumer.bootstrap.servers = "localhost:9092"\n        consumer.group.id = "seatunnel_es_group"\n        consumer.rebalance.max.retries = 100\n    }\n}\nfilter {\n    # Parse the original log using regex\n    # The initial data is in the raw_message field\n    grok {\n        source_field = "raw_message"\n        pattern = \'%{IP:hostname}\\\\s%{NOTSPACE:domain}\\\\s%{IP:remote_addr}\\\\s%{NUMBER:request_time}s\\\\s\\"%{DATA:upstream_ip}\\"\\\\s\\\\[%{HTTPDATE:timestamp}\\\\]\\\\s\\"%{NOTSPACE:method}\\\\s%{DATA:url}\\\\s%{NOTSPACE:http_ver}\\"\\\\s%{NUMBER:status}\\\\s%{NUMBER:body_bytes_send}\\\\s%{DATA:referer}\\\\s%{NOTSPACE:cookie_info}\\\\s\\"%{DATA:user_agent}\'\n   }\n    # Convert data in "dd/MMM/yyyy:HH:mm:ss Z" format to\n    # format supported in Elasticsearch\n    date {\n        source_field = "timestamp"\n        target_field = "datetime"\n        source_time_format = "dd/MMM/yyyy:HH:mm:ss Z"\n        target_time_format = "yyyy-MM-dd\'T\'HH:mm:00.SSS+08:00"\n    }\n    ## Aggregate data with SQL\n    sql {\n        table_name = "access_log"\n        sql = "select domain, hostname, status, datetime, count(*) from access_log group by domain, hostname, status, datetime"\n    }\n }\noutput {\n    elasticsearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${now}"\n        es.batch.size.entries = 100000\n        index_time_format = "yyyy.MM.dd"\n    }\n}\n')),(0,r.yg)("p",null,"Execute the command, specify the configuration file, and run Seatunnel to write data to Elasticsearch. Here we take the local mode as an example."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"./bin/start-seatunnel.sh --config config/batch.conf -e client -m 'local[2]'\n")),(0,r.yg)("p",null,"Finally, the data written into Elasticsearch is as follows, and with Kibana, real-time monitoring of web services can be realized ^_^."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"_source": {\n    "domain": "elasticsearch.cn",\n    "hostname": "localhost",\n    "status": "200",\n    "datetime": "2018-11-26T21:54:00.000+08:00",\n    "count": 26\n  }\n')),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"In this post, we introduced how to write data from Kafka to Elasticsearch via Seatunnel. You can quickly run a Spark Application with only one configuration file, complete data processing and writing, and do not need to write any code, which is very simple."),(0,r.yg)("p",null,"When there are scenarios that Logstash cannot support or the performance of Logstah cannot meet expectations during data processing, you can try to use Seatunnel to solve the problem."),(0,r.yg)("p",null,"If you want to know more functions and cases of using Seatunnel in combination with Elasticsearch, Kafka and Hadoop, you can go directly to the official website ",(0,r.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/"},"https://seatunnel.apache.org/")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'We will publish another article "How to Use Spark and Elasticsearch for Interactive Data Analysis" in the near future, so stay tuned.')),(0,r.yg)("h2",{id:"contract-us"},"Contract us"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mailing list : ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"mailto:dev@seatunnel.apache.org"},"dev@seatunnel.apache.org")),". Send anything to ",(0,r.yg)("inlineCode",{parentName:"li"},"dev-subscribe@seatunnel.apache.org")," and subscribe to the mailing list according to the replies."),(0,r.yg)("li",{parentName:"ul"},"Slack: Send a ",(0,r.yg)("inlineCode",{parentName:"li"},"Request to join SeaTunnel slack")," email to the mailing list (",(0,r.yg)("inlineCode",{parentName:"li"},"dev@seatunnel.apache.org"),"), and we will invite you to join (please make sure you are registered with Slack before doing so)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://space.bilibili.com/1542095008"},"bilibili B station video"))))}g.isMDXComponent=!0},80204:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/wd-struct-fd963482dc80fdee6e4930107709bd28.png"}}]);