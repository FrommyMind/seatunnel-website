"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[63752],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(58168),o=(t(96540),t(15680));const r={},s="How to use flink sql module",l={unversionedId:"connector/flink-sql/usage",id:"version-2.2.0-beta/connector/flink-sql/usage",title:"How to use flink sql module",description:"Tutorial of flink sql module",source:"@site/versioned_docs/version-2.2.0-beta/connector/flink-sql/usage.md",sourceDirName:"connector/flink-sql",slug:"/connector/flink-sql/usage",permalink:"/docs/2.2.0-beta/connector/flink-sql/usage",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector/flink-sql/usage.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Flink SQL Kafka Connector",permalink:"/docs/2.2.0-beta/connector/flink-sql/Kafka"},next:{title:"Connector-v2-release-state",permalink:"/docs/2.2.0-beta/Connector-v2-release-state"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"1. Command Entrypoint",id:"1-command-entrypoint",level:3},{value:"2. seatunnel config",id:"2-seatunnel-config",level:3},{value:"3. run job",id:"3-run-job",level:3},{value:"Standalone Cluster",id:"standalone-cluster",level:4},{value:"Yarn Cluster",id:"yarn-cluster",level:4},{value:"Other Options",id:"other-options",level:4},{value:"Example",id:"example",level:2},{value:"First , Need create mysql table in mysql database",id:"first--need-create-mysql-table-in-mysql-database",level:5}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"how-to-use-flink-sql-module"},"How to use flink sql module"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Tutorial of flink sql module")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("h3",{id:"1-command-entrypoint"},"1. Command Entrypoint"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh\n")),(0,o.yg)("h3",{id:"2-seatunnel-config"},"2. seatunnel config"),(0,o.yg)("p",null,"Change the file flink.sql.conf.template in the config/ directory to flink.sql.conf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"mv flink.sql.conf.template flink.sql.conf\n")),(0,o.yg)("p",null,"Prepare a seatunnel config file with the following content:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"SET table.dml-sync = true;\n\nCREATE TABLE events (\n  f_type INT,\n  f_uid INT,\n  ts AS localtimestamp,\n  WATERMARK FOR ts AS ts\n) WITH (\n  'connector' = 'datagen',\n  'rows-per-second'='5',\n  'fields.f_type.min'='1',\n  'fields.f_type.max'='5',\n  'fields.f_uid.min'='1',\n  'fields.f_uid.max'='1000'\n);\n\nCREATE TABLE print_table (\n  type INT,\n  uid INT,\n  lstmt TIMESTAMP\n) WITH (\n  'connector' = 'print',\n  'sink.parallelism' = '1'\n);\n\nINSERT INTO print_table SELECT * FROM events where f_type = 1;\n")),(0,o.yg)("h3",{id:"3-run-job"},"3. run job"),(0,o.yg)("h4",{id:"standalone-cluster"},"Standalone Cluster"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh --config config/flink.sql.conf\n\n# -p 2 specifies that the parallelism of flink job is 2. You can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-p 2 \\\n--config config/flink.sql.conf\n")),(0,o.yg)("h4",{id:"yarn-cluster"},"Yarn Cluster"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh -m yarn-cluster --config config/flink.sql.conf\n\nbin/start-seatunnel-sql.sh -t yarn-per-job --config config/flink.sql.conf\n\n# -p 2 specifies that the parallelism of flink job is 2. You can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-p 2 \\\n-m yarn-cluster \\\n--config config/flink.sql.conf\n")),(0,o.yg)("h4",{id:"other-options"},"Other Options"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-p 2")," specifies that the job parallelism is ",(0,o.yg)("inlineCode",{parentName:"li"},"2"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh -p 2 --config config/flink.sql.conf\n")),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"How to implement flink sql interval join with seatunnel flink-sql module")),(0,o.yg)("p",null,"intervaljoin.sql.conf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},"CREATE TABLE basic (\n  `id` BIGINT,\n  `name` STRING,\n   `ts`  STRING\n) WITH (\n  'connector' = 'kafka',\n  'topic' = 'basic',\n  'properties.bootstrap.servers' = 'XX.XX.XX.XX:9092',\n  'properties.group.id' = 'testGroup',\n  'scan.startup.mode' = 'latest-offset',\n  'format' = 'json'\n);\n\nCREATE TABLE infos (\n  `id` BIGINT,\n  `age` BIGINT,\n   `ts`  STRING\n) WITH (\n  'connector' = 'kafka',\n  'topic' = 'info',\n  'properties.bootstrap.servers' = 'XX.XX.XX.XX:9092',\n  'properties.group.id' = 'testGroup',\n  'scan.startup.mode' = 'latest-offset',\n  'format' = 'json'\n);\n\nCREATE TABLE stream2_join_result (\n  id BIGINT , \n  name STRING,\n  age BIGINT,\n  ts1 STRING , \n  ts2 STRING,\n  PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n  'connector' = 'jdbc',\n  'url' = 'jdbc:mysql://XX.XX.XX.XX:3306/testDB',\n  'username' = 'root',\n  'password' = 'taia@2021',\n  'table-name' = 'stream2_join_result'\n);\n\ninsert into  stream2_join_result select basic.id, basic.name, infos.age,basic.ts,infos.ts \nfrom basic join infos on (basic.id = infos.id) where  TO_TIMESTAMP(basic.ts,'yyyy-MM-dd HH:mm:ss') \nBETWEEN   TO_TIMESTAMP(infos.ts,'yyyy-MM-dd HH:mm:ss')  - INTERVAL '10' SECOND AND  TO_TIMESTAMP(infos.ts,'yyyy-MM-dd HH:mm:ss') + INTERVAL '10' SECOND;\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh -m yarn-cluster --config config/intervaljoin.sql.conf\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"How to implement flink sql dim join (using mysql) with seatunnel flink-sql module")),(0,o.yg)("p",null,"dimjoin.sql.conf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},"CREATE TABLE code_set_street (\n  area_code STRING,\n  area_name STRING,\n  town_code STRING ,\n  town_name STRING ,\n  PRIMARY KEY(town_code) NOT ENFORCED\n) WITH (\n  'connector' = 'jdbc',\n  'url' = 'jdbc:mysql://XX.XX.XX.XX:3306/testDB',\n  'username' = 'root',\n  'password' = '2021',\n  'table-name' = 'code_set_street',\n  'lookup.cache.max-rows' = '5000' ,\n  'lookup.cache.ttl' = '5min'\n);\n\nCREATE TABLE people (\n  `id` STRING,\n  `name` STRING,\n  `ts`  TimeStamp(3) ,\n  proctime AS PROCTIME() \n) WITH (\n  'connector' = 'kafka',\n  'topic' = 'people',\n  'properties.bootstrap.servers' = 'XX.XX.XX.XX:9092',\n  'properties.group.id' = 'testGroup',\n  'scan.startup.mode' = 'latest-offset',\n  'format' = 'json'\n);\n\nCREATE TABLE mysql_dim_join_result (\n  id STRING , \n  name STRING,\n  area_name STRING,\n  town_code STRING , \n  town_name STRING,\n  ts TimeStamp ,\n  PRIMARY KEY(id,town_code) NOT ENFORCED\n) WITH (\n  'connector' = 'jdbc',\n  'url' = 'jdbc:mysql://XX.XX.XX.XX:3306/testDB',\n  'username' = 'root',\n  'password' = '2021',\n  'table-name' = 'mysql_dim_join_result'\n);\n\ninsert into mysql_dim_join_result\nselect people.id , people.name ,code_set_street.area_name ,code_set_street.town_code, code_set_street.town_name , people.ts  \nfrom people inner join code_set_street FOR SYSTEM_TIME AS OF  people.proctime  \non (people.id = code_set_street.town_code);\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh -m yarn-cluster --config config/dimjoin.sql.conf\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"How to implement flink SQL cdc dim join (using mysql-cdc) with seatunnel flink-sql module")),(0,o.yg)("h5",{id:"first--need-create-mysql-table-in-mysql-database"},"First , Need create mysql table in mysql database"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"CREATE TABLE `dim_cdc_join_result` (\n    `id` varchar(255) NOT NULL,\n    `name` varchar(255) DEFAULT NULL,\n    `area_name` varchar(255) NOT NULL,\n    `town_code` varchar(255) NOT NULL,\n    `town_name` varchar(255) DEFAULT NULL,\n    `ts` varchar(255) DEFAULT NULL,\n    PRIMARY KEY (`id`,`town_code`,`ts`) USING BTREE\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;\n")),(0,o.yg)("p",null,"cdcjoin.sql.conf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},"CREATE TABLE code_set_street_cdc (\n  area_code STRING,\n  area_name STRING,\n  town_code STRING ,\n  town_name STRING ,\n  PRIMARY KEY(town_code) NOT ENFORCED\n) WITH (\n  'connector' = 'mysql-cdc',\n  'hostname' = 'XX.XX.XX.XX',\n  'port' = '3306',\n  'username' = 'root',\n  'password' = '2021',\n  'database-name' = 'flink',\n  'table-name' = 'code_set_street'\n);\n     \nCREATE TABLE people (\n  `id` STRING,\n  `name` STRING,\n  `ts`  STRING\n) WITH (\n  'connector' = 'kafka',\n  'topic' = 'people',\n  'properties.bootstrap.servers' = 'XX.XX.XX.XX:9092',\n  'properties.group.id' = 'testGroup',\n  'scan.startup.mode' = 'latest-offset',\n  'format' = 'json'\n);\n\n# create mysql sink table in flink\nCREATE TABLE dim_cdc_join_result (\n  id STRING , \n  name STRING,\n  area_name STRING,\n  town_code STRING , \n  town_name STRING,\n  ts STRING ,\n  PRIMARY KEY(id,town_code) NOT ENFORCED\n) WITH (\n  'connector' = 'jdbc',\n  'url' = 'jdbc:mysql://XX.XX.XX.XX:3306/flink',\n  'username' = 'root',\n  'password' = '2021',\n  'table-name' = 'dim_cdc_join_result'\n);\n \ninsert into dim_cdc_join_result\nselect a.id , a.name ,b.area_name ,b.town_code, b.town_name , a.ts  \nfrom people a inner join code_set_street_cdc b  on (a.id = b.town_code);\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-sql.sh -m yarn-cluster --config config/cdcjoin.sql.conf\n")))}u.isMDXComponent=!0}}]);