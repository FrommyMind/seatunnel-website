"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[14763],{92571:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"SeaTunnel \u5728\u552f\u54c1\u4f1a\u7684\u5b9e\u8df5","metadata":{"permalink":"/zh-CN/user_cases/SeaTunnel \u5728\u552f\u54c1\u4f1a\u7684\u5b9e\u8df5","source":"@site/i18n/zh-CN/docusaurus-plugin-content-blog-user_cases/2022-2-18-Meetup-vip.md","title":"SeaTunnel \u5728\u552f\u54c1\u4f1a\u7684\u5b9e\u8df5","description":"\u5206\u4eab\u5609\u5bbe\uff1a\u552f\u54c1\u4f1a \u8d44\u6df1\u5927\u6570\u636e\u5de5\u7a0b\u5e08 \u738b\u7389","date":"2022-02-18T00:00:00.000Z","formattedDate":"2022\u5e742\u670818\u65e5","tags":[{"label":"\u552f\u54c1\u4f1a","permalink":"/zh-CN/user_cases/tags/\u552f\u54c1\u4f1a"},{"label":"ClickHouse","permalink":"/zh-CN/user_cases/tags/click-house"}],"readingTime":16.865,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"SeaTunnel \u5728\u552f\u54c1\u4f1a\u7684\u5b9e\u8df5","title":"SeaTunnel \u5728\u552f\u54c1\u4f1a\u7684\u5b9e\u8df5","tags":["\u552f\u54c1\u4f1a","ClickHouse"]}},"content":"\u5206\u4eab\u5609\u5bbe\uff1a\u552f\u54c1\u4f1a \u8d44\u6df1\u5927\u6570\u636e\u5de5\u7a0b\u5e08 \u738b\u7389\\r\\n\u8bb2\u7a3f\u6574\u7406\uff1a\u5f20\u5fb7\u901a\\r\\n\\r\\n\u5bfc\u8bfb: \u552f\u54c1\u4f1a\u65e9\u57281.0\u7248\u672c\u65f6\u5c31\u5f15\u7528\u4e86SeaTunnel\uff0c\u6211\u4eec\u4f7f\u7528SeaTunnel\u8fdb\u884c\u4e00\u4e9bHive\u5230ClickHouse\u4e4b\u95f4\u6570\u636e\u4ea4\u4e92\u7684\u5de5\u4f5c\u3002\\r\\n\u4eca\u5929\u7684\u4ecb\u7ecd\u4f1a\u56f4\u7ed5\u4e0b\u9762\u51e0\u70b9\u5c55\u5f00\uff1a\\r\\n\\r\\n* ClickHouse\u6570\u636e\u5bfc\u5165\u7684\u9700\u6c42\u548c\u75db\u70b9\uff1b\\r\\n* ClickHouse\u51fa\u4ed3\u5165\u4ed3\u5de5\u5177\u9009\u578b\uff1b\\r\\n* Hive to ClickHouse\uff1b\\r\\n* ClickHouse to Hive\uff1b\\r\\n* SeaTunnel\u4e0e\u552f\u54c1\u4f1a\u6570\u636e\u5e73\u53f0\u7684\u96c6\u6210\uff1b\\r\\n* \u672a\u6765\u5c55\u671b\uff1b\\r\\n\\r\\n# ClickHouse\u6570\u636e\u5bfc\u5165\u7684\u9700\u6c42\u548c\u75db\u70b9\\r\\n## 1.\u552f\u54c1\u4f1a\u6570\u636eOLAP\u67b6\u6784\\r\\n\u56fe\u4e2d\u662f\u552f\u54c1\u4f1aOLAP\u67b6\u6784\uff0c\u6211\u4eec\u8d1f\u8d23\u7684\u6a21\u5757\u662f\u56fe\u4e2d\u7684\u6570\u636e\u670d\u52a1\u548c\u8ba1\u7b97\u5f15\u64ce\u4e24\u5927\u90e8\u5206\u3002\u5e95\u5c42\u4f9d\u8d56\u7684\u6570\u636e\u4ed3\u5e93\u5206\u4e3a\u79bb\u7ebf\u6570\u4ed3\u3001\u5b9e\u65f6\u6570\u4ed3\u548c\u6e56\u4ed3\u3002\u8ba1\u7b97\u5f15\u64ce\u65b9\u9762\uff0c\u6211\u4eec\u4f7f\u7528Presto\u3001Kylin\u548cClickhouse\u3002\u867d\u7136Clickhouse\u662f\u4e00\u4e2a\u5b58\u50a8\u4e00\u4f53\u7684OLAP\u6570\u636e\u5e93\uff0c\u6211\u4eec\u4e3a\u4e86\u5229\u7528Clickhouse\u7684\u4f18\u79c0\u8ba1\u7b97\u6027\u80fd\u800c\u5c06\u5b83\u5f52\u5165\u4e86\u8ba1\u7b97\u5f15\u64ce\u90e8\u5206\u3002\u57fa\u4e8eOLAP\u7ec4\u4ef6\u4e4b\u4e0a\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86SQL\u7c7b\u6570\u636e\u670d\u52a1\u548c\u975eSQL\u7684\u552f\u54c1\u4f1a\u81ea\u4e3b\u5206\u6790\uff0c\u4e3a\u4e0d\u540c\u667a\u80fd\u670d\u52a1\u3002\u4f8b\u5982\u975eSQL\u670d\u52a1\u662f\u4e3aBI\u548c\u5546\u52a1\u63d0\u4f9b\u66f4\u8d34\u8fd1\u4e1a\u52a1\u7684\u6570\u636e\u5206\u6790\u7684\u670d\u52a1\u3002\u5728\u6570\u636e\u670d\u52a1\u81f3\u4e0a\u62bd\u8c61\u4e86\u591a\u4e2a\u6570\u636e\u5e94\u7528\u3002\\r\\n![1](/doc/image_zh/2022-2-18-Meetup-vip/1-1.png)\\r\\n\\r\\n## 2.\u9700\u6c42\\r\\n\u6211\u4eec\u901a\u8fc7Presto Connector\u548cSpark\u7ec4\u4ef6\uff0c\u628a\u5e95\u5c42\u7684Hive\u3001Kudu\u3001Alluxio\u7ec4\u4ef6\u6253\u901a\u3002\u5927\u6570\u636e\u7ec4\u4ef6\u4e4b\u95f4\u53ef\u4ee5\u4e92\u76f8\u5bfc\u5165\u5bfc\u51fa\u6570\u636e\uff0c\u53ef\u4ee5\u6839\u636e\u6570\u636e\u5206\u6790\u7684\u9700\u6c42\u548c\u573a\u666f\u4efb\u610f\u5229\u7528\u5408\u9002\u7684\u7ec4\u4ef6\u5206\u6790\u6570\u636e\u3002\u4f46\u6211\u4eec\u5f15\u5165Clickhouse\u65f6\uff0c\u5b83\u662f\u4e00\u4e2a\u6570\u636e\u5b64\u5c9b\uff0c\u6570\u636e\u7684\u5bfc\u5165\u548c\u5bfc\u51fa\u6bd4\u8f83\u56f0\u96be\u3002Hive\u548cClickhouse\u4e4b\u95f4\u9700\u8981\u505a\u5f88\u591a\u5de5\u4f5c\u624d\u80fd\u5b9e\u73b0\u5bfc\u5165\u5bfc\u51fa\u3002\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u6570\u636e\u5bfc\u5165\u5bfc\u51fa\u9700\u6c42\u5c31\u662f\u63d0\u5347\u5bfc\u5165\u5bfc\u51fa\u6548\u7387\uff0c\u628aClickhouse\u7eb3\u5165\u5927\u6570\u636e\u4f53\u7cfb\u4e2d\u3002\\r\\n![2](/doc/image_zh/2022-2-18-Meetup-vip/2.png)\\r\\n\\r\\n\u7b2c\u4e8c\u4e2a\u9700\u6c42\u662fPresto\u8dd1SQL\u6bd4\u8f83\u6162\uff0c\u56fe\u4e2d\u662f\u4e00\u4e2a\u6162SQL\u7684\u4f8b\u5b50\u3002\u56fe\u4e2d\u7684SQL where\u6761\u4ef6\u8bbe\u7f6e\u4e86\u65e5\u671f\u3001\u65f6\u95f4\u8303\u56f4\u548c\u5177\u4f53\u8fc7\u6ee4\u6761\u4ef6\uff0c\u8fd9\u7c7bSQL\u4f7f\u7528\u7531\u4e8ePresto\u4f7f\u7528\u5206\u533a\u7c92\u5ea6\u4e0b\u63a8\uff0c\u8fd0\u884c\u6bd4\u8f83\u6162\u3002\u5373\u4f7f\u7528Hive\u7684Bucket\u8868\u548c\u5206\u6876\u7b49\u5176\u4ed6\u65b9\u5f0f\u4f18\u5316\u540e\u4e5f\u662f\u51e0\u79d2\u7684\u8fd4\u56de\u65f6\u95f4\u3001\u4e0d\u80fd\u6ee1\u8db3\u4e1a\u52a1\u8981\u6c42\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u9700\u8981\u5229\u7528Clickhouse\u505a\u79bb\u7ebf\u7684OLAP\u8ba1\u7b97\u52a0\u901f\u3002\\r\\n![3](/doc/image_zh/2022-2-18-Meetup-vip/3.png)\\r\\n\\r\\n\u6211\u4eec\u7684\u5b9e\u65f6\u6570\u636e\u662f\u901a\u8fc7Kafka\u3001Flink SQL\u65b9\u5f0f\u5199\u5165\u5230Clickhouse\u4e2d\u3002\u4f46\u5206\u6790\u65f6\u53ea\u7528\u5b9e\u65f6\u6570\u636e\u662f\u4e0d\u591f\u7684\uff0c\u9700\u8981\u7528Hive\u7ef4\u5ea6\u8868\u548c\u5df2\u7ecfETL\u8ba1\u7b97\u53f7\u7684T+1\u5b9e\u65f6\u8868\u4e00\u8d77\u5728Clickhouse\u4e2d\u505a\u52a0\u901f\u8fd0\u8f93\u3002\u8fd9\u9700\u8981\u628aHive\u7684\u6570\u636e\u5bfc\u5165\u5230Clickhouse\u4e2d\uff0c\u8fd9\u5c31\u662f\u6211\u4eec\u7684\u7b2c\u4e09\u4e2a\u9700\u6c42\u3002\\r\\n![4](/doc/image_zh/2022-2-18-Meetup-vip/4.png)\\r\\n\\r\\n## 3.\u75db\u70b9\\r\\n\u9996\u5148\uff0c\u6211\u4eec\u5f15\u5165\u4e00\u9879\u6570\u636e\u7ec4\u4ef6\u65f6\u8981\u8003\u8651\u5176\u6027\u80fd\u3002Hive\u8868\u7c92\u5ea6\u662f\u4e94\u5206\u949f\uff0c\u662f\u5426\u6709\u7ec4\u4ef6\u53ef\u4ee5\u652f\u6491\u4e94\u5206\u949f\u5185\u5b8c\u6210\u4e00\u4e2a\u77ed\u5c0fETL\u6d41\u7a0b\u5e76\u628aETL\u7ed3\u679c\u5bfc\u5165\u5230Clickhouse\u4e2d\uff1f\u7b2c\u4e8c\uff0c\u6211\u4eec\u9700\u8981\u4fdd\u8bc1\u6570\u636e\u8d28\u91cf\uff0c\u6570\u636e\u7684\u51c6\u786e\u6027\u9700\u8981\u6709\u4fdd\u969c\u3002Hive\u548cClickhouse\u7684\u6570\u636e\u6761\u6570\u9700\u8981\u4fdd\u969c\u4e00\u81f4\u6027\uff0c\u5982\u679c\u6570\u636e\u8d28\u91cf\u51fa\u95ee\u9898\u80fd\u5426\u901a\u8fc7\u91cd\u8dd1\u7b49\u673a\u5236\u4fee\u590d\u6570\u636e\uff1f\u7b2c\u4e09\uff0c\u6570\u636e\u5bfc\u5165\u9700\u8981\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u662f\u5426\u5b8c\u5907\uff1f\u4e0d\u540c\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u6570\u636e\u7c7b\u578b\u548c\u4e00\u4e9b\u673a\u5236\u4e0d\u540c\uff0c\u6211\u4eec\u6709HiperLogLog\u548cBitMap\u8fd9\u7c7b\u5728\u67d0\u4e00\u5b58\u50a8\u5f15\u64ce\u4e2d\u5229\u7528\u5f97\u6bd4\u8f83\u591a\u5f97\u6570\u636e\u7c7b\u578b\uff0c\u662f\u5426\u53ef\u4ee5\u6b63\u786e\u4f20\u8f93\u548c\u8bc6\u522b\uff0c\u4e14\u53ef\u4ee5\u8f83\u597d\u5730\u4f7f\u7528\u3002\\r\\n\\r\\n# ClickHouse\u548cHive\u51fa\u4ed3\u5165\u4ed3\u5de5\u5177\u7684\u9009\u578b\\r\\n\u57fa\u4e8e\u6570\u636e\u4e1a\u52a1\u4e0a\u7684\u75db\u70b9\uff0c\u6211\u4eec\u5bf9\u6570\u636e\u51fa\u4ed3\u5165\u4ed3\u5de5\u5177\u8fdb\u884c\u4e86\u5bf9\u6bd4\u548c\u9009\u62e9\u3002\u6211\u4eec\u4e3b\u8981\u5728\u5f00\u6e90\u5de5\u5177\u4e2d\u8fdb\u884c\u9009\u62e9\uff0c\u6ca1\u6709\u8003\u8651\u5546\u4e1a\u51fa\u5165\u4ed3\u5de5\u5177\uff0c\u4e3b\u8981\u5bf9\u6bd4DataX\u3001SeaTunnel\u548c\u7f16\u5199Spark\u7a0b\u5e8f\u5e76\u7528jdbc\u63d2\u5165ClickHouse\u8fd9\u4e09\u4e2a\u65b9\u6848\u4e2d\u53d6\u820d\u3002\\r\\nSeaTunnel\u548cSpark\u4f9d\u8d56\u552f\u54c1\u4f1a\u81ea\u5df1\u7684Yarn\u96c6\u7fa4\uff0c\u53ef\u4ee5\u76f4\u63a5\u5b9e\u73b0\u5206\u5e03\u5f0f\u8bfb\u53d6\u548c\u5199\u5165\u3002DataX\u662f\u975e\u5206\u5e03\u5f0f\u7684\uff0c\u4e14Reader\u3001Writer\u4e4b\u95f4\u7684\u542f\u52a8\u8fc7\u7a0b\u8017\u65f6\u65f6\u95f4\u957f\uff0c\u6027\u80fd\u666e\u901a\uff0cSeaTunnel\u548cSpark\u5904\u7406\u6570\u636e\u7684\u6027\u80fd\u53ef\u4ee5\u8fbe\u5230DataX\u7684\u6570\u500d\u3002\\r\\n\u5341\u4ebf\u4ee5\u4e0a\u7684\u6570\u636e\u53ef\u4ee5\u5e73\u7a33\u5730\u5728SeaTunnel\u548cSpark\u4e2d\u8fd0\u884c\uff0cDataX\u5728\u6570\u636e\u91cf\u5927\u4ee5\u540e\u6027\u80fd\u538b\u529b\u5927\uff0c\u5904\u7406\u5341\u4ebf\u4ee5\u4e0a\u6570\u636e\u5403\u529b\u3002\\r\\n\u5728\u8bfb\u5199\u63d2\u4ef6\u6269\u5c55\u6027\u65b9\u9762\uff0cSeaTunnel\u652f\u6301\u4e86\u591a\u79cd\u6570\u636e\u6e90\uff0c\u652f\u6301\u7528\u6237\u5f00\u53d1\u63d2\u4ef6\u3002SeaTunnel\u652f\u6301\u4e86\u6570\u636e\u5bfc\u5165Redis\u3002\\r\\n\u7a33\u5b9a\u6027\u4e0a\uff0cSeaTunnel\u548cDataX\u7531\u4e8e\u662f\u81ea\u6210\u4f53\u7cfb\u7684\u5de5\u5177\uff0c\u7a33\u5b9a\u6027\u4f1a\u66f4\u597d\u3002Spark\u7684\u7a33\u5b9a\u6027\u65b9\u9762\u9700\u8981\u5173\u6ce8\u4ee3\u7801\u8d28\u91cf\u3002\\r\\n![5](/doc/image_zh/2022-2-18-Meetup-vip/5.png)\\r\\n\\r\\n\u6211\u4eec\u7684\u66dd\u5149\u8868\u6570\u636e\u91cf\u6bcf\u5929\u5728\u51e0\u5341\u4ebf\u7ea7\uff0c\u6211\u4eec\u67095min\u5185\u5b8c\u6210\u6570\u636e\u5904\u7406\u7684\u6027\u80fd\u8981\u6c42\uff0c\u6211\u4eec\u6211\u4eec\u5b58\u5728\u6570\u636e\u5bfc\u5165\u5bfc\u51fa\u5230Redis\u7684\u9700\u6c42\uff0c\u6211\u4eec\u9700\u8981\u5bfc\u5165\u5bfc\u51fa\u5de5\u5177\u53ef\u4ee5\u63a5\u5165\u5230\u6570\u636e\u5e73\u53f0\u4e0a\u8fdb\u884c\u4efb\u52a1\u8c03\u5ea6\u3002 \u51fa\u4e8e\u6570\u636e\u91cf\u7ea7\u3001\u6027\u80fd\u3001\u53ef\u6269\u5c55\u6027\u3001\u5e73\u53f0\u517c\u5bb9\u6027\u51e0\u65b9\u9762\u7684\u8003\u8651\uff0c\u6211\u4eec\u9009\u62e9\u4e86SeaTunnel\u4f5c\u4e3a\u6211\u4eec\u7684\u6570\u4ed3\u5bfc\u5165\u5bfc\u51fa\u5de5\u5177\u3002\\r\\n# Hive\u6570\u636e\u5bfc\u5165\u5230ClickHouse\\r\\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u6211\u4eec\u5bf9SeaTunnel\u7684\u4f7f\u7528\u3002\\r\\n\u56fe\u4e2d\u662f\u4e00\u5f20Hive\u8868\uff0c\u5b83\u662f\u6211\u4eec\u4e09\u7ea7\u7684\u5546\u54c1\u7ef4\u5ea6\u8868\uff0c\u5305\u542b\u54c1\u7c7b\u5546\u54c1\u3001\u7ef4\u5ea6\u54c1\u7c7b\u548c\u7528\u6237\u4eba\u7fa4\u4fe1\u606f\u3002\u8868\u7684\u4e3b\u952e\u662f\u4e00\u4e2a\u4e09\u7ea7\u54c1\u7c7bct_third_id\uff0c\u4e0b\u9762\u7684value\u662f\u4e24\u4e2auid\u7684\u4f4d\u56fe\uff0c\u662f\u7528\u6237id\u7684bitmap\u7c7b\u578b\uff0c\u6211\u4eec\u8981\u628a\u8fd9\u4e2aHive\u8868\u5bfc\u5165\u5230Clickhouse\u3002\\r\\n![6](/doc/image_zh/2022-2-18-Meetup-vip/6.png)\\r\\n\\r\\nSeaTunnel\u5b89\u88c5\u7b80\u5355\uff0c\u5b98\u7f51\u6587\u6863\u6709\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5\u3002\u4e0b\u56fe\u4e2d\u662fSeaTunnel\u7684\u914d\u7f6e\uff0c\u914d\u7f6e\u4e2denv\u3001source\u548csink\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002env\u90e8\u5206\uff0c\u56fe\u4e2d\u7684\u4f8b\u5b50\u662fSpark\u914d\u7f6e\uff0c\u914d\u7f6e\u4e86\u5305\u62ec\u5e76\u53d1\u5ea6\u7b49\uff0c\u53ef\u4ee5\u8c03\u6574\u8fd9\u4e9b\u53c2\u6570\u3002source\u90e8\u5206\u662f\u6570\u636e\u6765\u6e90\uff0c\u8fd9\u91cc\u914d\u7f6e\u4e86Hive\u6570\u636e\u6e90\uff0c\u5305\u62ec\u4e00\u6761Hive Select\u8bed\u53e5\uff0cSpark\u8fd0\u884csource\u914d\u7f6e\u4e2d\u7684SQL\u628a\u6570\u636e\u8bfb\u51fa\uff0c\u6b64\u5904\u652f\u6301UDF\u8fdb\u884c\u7b80\u5355ETL\uff1bsink\u90e8\u5206\u914d\u7f6e\u4e86Clickhouse\uff0c\u53ef\u4ee5\u770b\u5230output_type=rowbinary\uff0crowbinary\u662f\u552f\u54c1\u4f1a\u81ea\u7814\u52a0\u901f\u65b9\u6848\uff1bpre_sql\u548ccheck_sql\u662f\u81ea\u7814\u7684\u7528\u4e8e\u6570\u636e\u6821\u9a8c\u7684\u529f\u80fd\uff0c\u540e\u9762\u4e5f\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\uff1bclickhouse.socket_timeout\u548cbulk_size\u90fd\u662f\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\u7684\u3002\\r\\n![7](/doc/image_zh/2022-2-18-Meetup-vip/7.png)\\r\\n\\r\\n\u8fd0\u884cSeaTunnel\uff0c\u6267\u884csh\u811a\u672c\u6587\u4ef6\u3001\u914d\u7f6econf\u6587\u4ef6\u5730\u5740\u548cyarn\u4fe1\u606f\uff0c\u540e\u5373\u53ef\u3002\\r\\n![8](/doc/image_zh/2022-2-18-Meetup-vip/8.png)\\r\\n\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u4ea7\u751fSpark\u65e5\u5fd7\uff0c\u8fd0\u884c\u6210\u529f\u548c\u8fd0\u884c\u4e2d\u9519\u8bef\u90fd\u53ef\u4ee5\u5728\u65e5\u5fd7\u4e2d\u67e5\u770b\u3002\\r\\n![9](/doc/image_zh/2022-2-18-Meetup-vip/9.png)\\r\\n\\r\\n\u4e3a\u4e86\u66f4\u8d34\u5408\u4e1a\u52a1\uff0c\u552f\u54c1\u4f1a\u5bf9SeaTunnel\u505a\u4e86\u4e00\u4e9b\u6539\u8fdb\u3002\u6211\u4eec\u7684ETL\u4efb\u52a1\u90fd\u662f\u9700\u8981\u91cd\u8dd1\u7684\uff0c\u6211\u4eec\u652f\u6301\u4e86pre_sql\u548ccheck_sql\u5b9e\u73b0\u6570\u636e\u7684\u91cd\u8dd1\u548c\u5bf9\u6570\u3002\u4e3b\u8981\u6d41\u7a0b\u662f\u5728\u6570\u636e\u51c6\u5907\u597d\u540e\uff0c\u6267\u884cpre_sql\u8fdb\u884c\u9884\u5904\u7406\uff0c\u5728Clickhouse\u4e2d\u6267\u884c\u5220\u9664\u65e7\u5206\u533a\u6570\u636e\u3001\u5b58\u653e\u5230\u67d0\u4e00\u76ee\u5f55\u4e0b\u5728\u5931\u8d25\u65f6\u6062\u590d\u8be5\u5206\u533a\u3001rename\u8fd9\u7c7b\u64cd\u4f5c\u3002check_sql\u4f1a\u68c0\u9a8c\uff0c\u6821\u9a8c\u901a\u8fc7\u540e\u6574\u4e2a\u6d41\u7a0b\u7ed3\u675f\uff1b\u5982\u679c\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u6839\u636e\u914d\u7f6e\u8fdb\u884c\u91cd\u8dd1\uff0c\u91cd\u8dd1\u4e0d\u901a\u8fc7\u5219\u62a5\u8b66\u5230\u5bf9\u5e94\u8d1f\u8d23\u4eba\u3002\\r\\n![10](/doc/image_zh/2022-2-18-Meetup-vip/10.png)\\r\\n\\r\\n\\r\\n\u552f\u54c1\u4f1a\u57fa\u4e8e1.0\u7248\u672cSeaTunnel\u589e\u52a0\u4e86RowBinary\u505a\u52a0\u901f\uff0c\u4e5f\u8ba9HuperLogLog\u548cBinaryBitmap\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u80fd\u66f4\u5bb9\u6613\u5730\u4eceHive\u5bfc\u5165\u5230Clickhouse\u3002\u6211\u4eec\u5728ClickHouse-jdbc\u3001bulk_size\u3001Hive-source\u51e0\u5904\u8fdb\u884c\u4e86\u4fee\u6539\u3002\u4f7f\u7528CK-jdbc\u7684extended api\uff0c\u4ee5rowbinary\u65b9\u5f0f\u5c06\u6570\u636e\u5199\u5165CK\uff0cbulk_size\u5f15\u5165\u4e86\u4ee5rowbinary\u65b9\u5f0f\u5199\u5165CK\u7684\u63a7\u5236\u903b\u8f91\uff0cHive-source\\r\\nRDD\u4ee5HashPartitioner\u8fdb\u884c\u5206\u533a\u5c06\u6570\u636e\u6253\u6563\uff0c\u9632\u6b62\u6570\u636e\u503e\u659c\u3002\\r\\n\\r\\n\u6211\u4eec\u8fd8\u8ba9SeaTunnel\u652f\u6301\u4e86\u591a\u7c7b\u578b\uff0c\u4e3a\u4e86\u5708\u4eba\u7fa4\u7684\u529f\u80fd\uff0c\u9700\u8981\u5728Clickhouse\u3001Preso\u3001Spark\u4e2d\u5b9e\u73b0\u5bf9\u5e94\u7684\u65b9\u6cd5\u3002\u6211\u4eec\u5728Clickhouse-jdbc\u4e2d\u589e\u52a0\u652f\u6301Batch\u7279\u6027\u7684Callback\u3001HttpEntity\u3001RowBinaryStream\uff0c\u5728Clickhouse-jdbc\u548cClickhouse-sink\u4ee3\u7801\u4e2d\u589e\u52a0\u4e86bitmap\u7c7b\u578b\u6620\u5c04\uff0c\u5728Presto\u548cSpark\u4e2d\u5b9e\u73b0\u4e86Clickhouse\u7684Hyperloglog\u548cBitmap\u7684function\u7684UDF\u3002\\r\\n\u524d\u9762\u7684\u914d\u7f6e\u4e2d\uff0cClickhouse-sink\u90e8\u5206\u53ef\u4ee5\u6307\u5b9a\u8868\u540d\uff0c\u8fd9\u91cc\u6709\u5199\u5165\u672c\u5730\u8868\u548c\u5206\u5e03\u5f0f\u8868\u7684\u5dee\u5f02\u3002\u5199\u5165\u5206\u5e03\u5f0f\u8868\u7684\u6027\u80fd\u6bd4\u5199\u5165\u672c\u5730\u8868\u5dee\u5bf9Clickhouse\u96c6\u7fa4\u7684\u538b\u529b\u4f1a\u66f4\u5927\uff0c\u4f46\u5728\u8ba1\u7b97\u66dd\u5149\u8868\u3001\u6d41\u91cf\u8868\uff0cABTest\u7b49\u573a\u666f\u4e2d\u9700\u8981\u4e24\u8868Join\uff0c\u4e24\u5f20\u8868\u91cf\u7ea7\u5747\u5728\u51e0\u5341\u4ebf\u3002\u8fd9\u65f6\u6211\u4eec\u5e0c\u671bJoin key\u843d\u5728\u672c\u673a\uff0cJoin\u6210\u672c\u66f4\u5c0f\u3002\u6211\u4eec\u5efa\u8868\u65f6\u5728Clickhouse\u7684\u5206\u5e03\u5f0f\u8868\u5206\u5e03\u89c4\u5219\u4e2d\u914d\u7f6emurmurHash64\u89c4\u5219\uff0c\u7136\u540e\u5728Seatunnel\u7684sink\u91cc\u76f4\u63a5\u914d\u7f6e\u5206\u5e03\u5f0f\u8868\uff0c\u628a\u5199\u5165\u89c4\u5219\u4ea4\u7ed9Clickhouse\uff0c\u5229\u7528\u4e86\u5206\u5e03\u5f0f\u8868\u7684\u7279\u6027\u8fdb\u884c\u5199\u5165\u3002\u5199\u5165\u672c\u5730\u8868\u5bf9Clickhouse\u7684\u538b\u529b\u4f1a\u66f4\u5c0f\uff0c\u5199\u5165\u7684\u6027\u80fd\u4e5f\u4f1a\u66f4\u597d\u3002\u6211\u4eec\u5728Seatunnel\u91cc\uff0c\u6839\u636esink\u7684\u672c\u5730\u8868\uff0c\u53bbClickhouse\u7684System.cluster\u8868\u91cc\u83b7\u53d6\u8868\u7684\u5206\u5e03\u4fe1\u606f\u548c\u673a\u5668\u5206\u5e03host\u3002\u7136\u540e\u6839\u636e\u5747\u5206\u89c4\u5219\u5199\u5165\u8fd9\u4e9bhost\u3002\u628a\u6570\u636e\u5206\u5e03\u5f0f\u5199\u5165\u7684\u4e8b\u60c5\u653e\u5230Seatunnel\u91cc\u6765\u505a\u3002\\r\\n\u9488\u5bf9\u672c\u5730\u8868\u548c\u5206\u5e03\u5f0f\u8868\u7684\u5199\u5165\uff0c\u6211\u4eec\u672a\u6765\u7684\u6539\u9020\u65b9\u5411\u662f\u5728Seatunnel\u5b9e\u73b0\u4e00\u81f4\u6027\u54c8\u5e0c\uff0c\u76f4\u63a5\u6309\u7167\u4e00\u5b9a\u89c4\u5219\u5199\u5982Clickhouse\u3001\u4e0d\u4f9d\u8d56Clickhouse\u81ea\u8eab\u505a\u6570\u636e\u5206\u53d1\uff0c\u6539\u5584Clickhouse\u9ad8CPU\u8d1f\u8f7d\u95ee\u9898\u3002\\r\\n\\r\\n# ClickHouse\u6570\u636e\u5bfc\u5165\u5230Hive\\r\\n\u6211\u4eec\u6709\u5708\u4eba\u7fa4\u7684\u9700\u6c42\uff0c\u6bcf\u5929\u552f\u54c1\u4f1a\u4e3a\u4f9b\u5e94\u5546\u570820\u4e07\u4e2a\u4eba\u7fa4\uff0c\u6bd4\u598280\u540e\u3001\u9ad8\u5bcc\u5e05\u3001\u767d\u5bcc\u7f8e\u7684\u4eba\u7fa4\u96c6\u5408\u3002\u8fd9\u4e9b\u5728Clickhouse\u4e2d\u7684Bitmap\u4eba\u7fa4\u4fe1\u606f\u9700\u8981\u5bfc\u51fa\u5230Hive\u8868\uff0c\u5728Hive\u4e2d\u4e0e\u5176\u4ed6ETL\u4efb\u52a1\u8fdb\u884c\u914d\u5408\uff0c\u6700\u540e\u63a8\u5230PIKA\u4ea4\u7ed9\u5916\u90e8\u5a92\u4f53\u4f7f\u7528\u3002\u6211\u4eec\u4f7fSeaTunnel\u5c06Clickhouse Bitmap\u4eba\u7fa4\u6570\u636e\u53cd\u63a8\u5230Hive\u3002\\r\\n![11](/doc/image_zh/2022-2-18-Meetup-vip/11.png)\\r\\n\\r\\n\u56fe\u4e2d\u662fSeaTunnel\u914d\u7f6e\uff0c\u6211\u4eec\u628asource\u914d\u7f6e\u4e3aClickhouse\u3001sink\u914d\u7f6e\u4e3aHive\uff0c\u6570\u636e\u6821\u9a8c\u4e5f\u914d\u7f6e\u5728Hive\u5185\u3002\\r\\n![12](/doc/image_zh/2022-2-18-Meetup-vip/12.png)\\r\\n\\r\\n\u7531\u4e8e\u6211\u4eec\u63a5\u5165SeaTunnel\u8f83\u65e9\uff0c\u6211\u4eec\u5bf9\u4e00\u4e9b\u6a21\u5757\u95f4\u8fdb\u884c\u4e86\u52a0\u5de5\uff0c\u5305\u62ec\u65b0\u589eplugin-spark-sink-hive\u6a21\u5757\u3001plugin-spark-source-ClickHouse\u6a21\u5757\uff0c\u91cd\u5199Spark Row\u76f8\u5173\u65b9\u6cd5\uff0c\u4f7f\u5176\u80fd\u5c01\u88c5\u7ecf\u8fc7Schem\u6620\u5c04\u540e\u7684Clickhouse\u6570\u636e\uff0c\u91cd\u65b0\u6784\u9020StructField\u5e76\u751f\u6210\u6700\u7ec8\u9700\u8981\u843d\u5730Hive\u7684DataFrame\u3002\u6700\u65b0\u7248\u672c\u5df2\u7ecf\u6709\u4e86\u5f88\u591asource\u548csink\u7ec4\u4ef6\uff0c\u5728SeaTunnel\u4f7f\u7528\u4e0a\u66f4\u65b9\u4fbf\u3002\u73b0\u5728\u4e5f\u53ef\u4ee5\u5728SeaTunnel\u4e2d\u76f4\u63a5\u96c6\u6210Flink connector\u3002\\r\\n\\r\\n# SeaTunnel\u4e0e\u552f\u54c1\u4f1a\u6570\u636e\u5e73\u53f0\u7684\u96c6\u6210\\r\\n\u5404\u4e2a\u516c\u53f8\u90fd\u6709\u81ea\u5df1\u7684\u8c03\u5ea6\u7cfb\u7edf\uff0c\u4f8b\u5982\u767d\u9cb8\u3001\u5b99\u65af\u3002\u552f\u54c1\u4f1a\u7684\u8c03\u5ea6\u5de5\u5177\u662f\u6570\u574a\uff0c\u8c03\u5ea6\u5de5\u5177\u4e2d\u96c6\u6210\u4e86\u6570\u636e\u4f20\u8f93\u5de5\u5177\u3002\u4e0b\u9762\u662f\u8c03\u5ea6\u7cfb\u7edf\u67b6\u6784\u56fe\uff0c\u5176\u4e2d\u5305\u542b\u5404\u7c7b\u6570\u636e\u7684\u51fa\u5165\u4ed3\u3002\\r\\n![13](/doc/image_zh/2022-2-18-Meetup-vip/13.png)\\r\\n\\r\\nSeaTunnel\u4efb\u52a1\u7c7b\u578b\u96c6\u6210\u5230\u5e73\u53f0\u4e2d\uff0c\u56fe\u4e2d\u662f\u6570\u574a\u7684\u5b9a\u65f6\u4efb\u52a1\u622a\u56fe\uff0c\u53ef\u4ee5\u770b\u5230\u9009\u4e2d\u7684\u90e8\u5206\uff0c\u662f\u4e00\u4e2a\u914d\u7f6e\u597d\u7684SeaTunnel\u4efb\u52a1\uff0c\u8d1f\u8d23\u4eba\u3001\u6700\u8fd1\u4e00\u6b21\u8017\u65f6\uff0c\u524d\u540e\u4f9d\u8d56\u4efb\u52a1\u7684\u8840\u7f18\u4fe1\u606f\uff0c\u6d88\u8017\u7684\u8d44\u6e90\u4fe1\u606f\u3002\u4e0b\u9762\u5c55\u793a\u4e86\u5386\u53f2\u8fd0\u884c\u5b9e\u4f8b\u4fe1\u606f\u3002\\r\\n![14](/doc/image_zh/2022-2-18-Meetup-vip/14.png)\\r\\n\\r\\n\u6211\u4eec\u628aSeaTunnel\u96c6\u6210\u5230\u4e86\u8c03\u5ea6\u7cfb\u7edf\u4e2d\uff0c\u6570\u574a\u8c03\u5ea6Master\u4f1a\u6839\u636e\u4efb\u52a1\u7c7b\u578b\u628a\u4efb\u52a1\u5206\u914d\u5230\u5bf9\u5e94\u7684Agent\u4e0a\uff0c\u6839\u636eAgent\u8d1f\u8f7d\u60c5\u51b5\u5206\u914d\u5230\u5408\u9002\u7684\u673a\u5668\u4e0a\u8fd0\u884c\uff0c\u7ba1\u63a7\u5668\u628a\u524d\u53f0\u7684\u4efb\u52a1\u8c03\u5ea6\u914d\u7f6e\u548c\u4fe1\u606f\u62c9\u53d6\u5230\u540e\u751f\u6210SeaTunnel cluster\uff0c\u5728\u7c7b\u4f3c\u4e8ek8s pod\u3001cgroup\u9694\u79bb\u7684\u865a\u62df\u73af\u5883\u5185\u8fdb\u884c\u6267\u884c\u3002\u8fd0\u884c\u7ed3\u679c\u4f1a\u7531\u8c03\u5ea6\u5e73\u53f0\u7684\u6570\u636e\u8d28\u91cf\u76d1\u63a7\u5224\u65ad\u4efb\u52a1\u662f\u5426\u5b8c\u6210\u3001\u662f\u5426\u8fd0\u884c\u6210\u529f\uff0c\u5931\u8d25\u65f6\u8fdb\u884c\u91cd\u8dd1\u548c\u544a\u8b66\u3002\\r\\n![15](/doc/image_zh/2022-2-18-Meetup-vip/15.png)\\r\\n\\r\\nSeaTunnel\u672c\u8eab\u662f\u4e00\u4e2a\u5de5\u5177\u5316\u7684\u7ec4\u4ef6\uff0c\u662f\u4e3a\u4e86\u8fdb\u884c\u6570\u636e\u8840\u7f18\uff0c\u6570\u636e\u8d28\u91cf\uff0c\u5386\u53f2\u8bb0\u5f55\uff0c\u9ad8\u8b66\u76d1\u63a7\uff0c\u8fd8\u5305\u62ec\u8d44\u6e90\u5206\u914d\u8fd9\u4e9b\u4fe1\u606f\u7684\u7ba1\u63a7\u3002\u6211\u4eec\u628aSeaTunnel\u96c6\u6210\u5230\u5e73\u53f0\u4e2d\uff0c\u53ef\u4ee5\u5229\u7528\u5e73\u53f0\u4f18\u52bf\u5229\u7528\u597dSeaTunnel\u3002\\r\\n\u5708\u5b58\u4eba\u7fa4\u4e2d\u5229\u7528\u4e86SeaTunnel\u8fdb\u884c\u5904\u7406\u3002\u6211\u4eec\u901a\u8fc7\u6253\u70b9\u6570\u636e\uff0c\u628a\u5708\u5b58\u4eba\u7fa4\u6309\u7167\u8def\u5f84\u548c\u4f7f\u7528\u60c5\u51b5\u5206\u4e3a\u4e0d\u540c\u7684\u4eba\uff0c\u6216\u79f0\u5343\u4eba\u5343\u9762\uff0c\u628a\u7528\u6237\u6253\u4e0a\u6807\u7b7e\uff0c\u5708\u51fa\u7684\u67d0\u4e00\u7c7b\u4eba\u7fa4\u63a8\u9001\u7ed9\u7528\u6237\u3001\u5206\u6790\u5e08\u548c\u4f9b\u5e94\u5546\u3002\\r\\n![16](/doc/image_zh/2022-2-18-Meetup-vip/16.png)\\r\\n\\r\\n\u6d41\u91cf\u8fdb\u5165Kafka\uff0c\u901a\u8fc7Flink\u5165\u4ed3\uff0c\u518d\u901a\u8fc7ETL\u5f62\u6210\u7528\u6237\u6807\u7b7e\u8868\uff0c\u7528\u6237\u6807\u7b7e\u8868\u751f\u6210\u540e\uff0c\u6211\u4eec\u901a\u8fc7Presto\u5b9e\u73b0\u4e86\u7684BitMap\u65b9\u6cd5\uff0c\u628a\u6570\u636e\u6253\u6210Hive\u4e2d\u7684\u5bbd\u8868\u3002\u7528\u6237\u901a\u8fc7\u5728\u4eba\u7fa4\u7cfb\u7edf\u9875\u9762\u4e2d\u6846\u9009\u8bcd\u6761\u521b\u5efa\u4efb\u52a1\uff0c\u63d0\u4ea4\u817e\u7fa4\uff0c\u751f\u6210SQL\u67e5\u8be2Clickhouse BitMap\u3002Clickhouse\u7684BitMap\u67e5\u8be2\u901f\u5ea6\u975e\u5e38\u5feb\uff0c\u7531\u5929\u751f\u4f18\u52bf\uff0c\u6211\u4eec\u9700\u8981\u628aHive\u7684BitMap\u8868\u901a\u8fc7SeaTunnel\u5bfc\u5165\u5230Clickhouse\u4e2d\u3002\u5708\u5b8c\u4eba\u7fa4\u540e\u6211\u4eec\u9700\u8981\u628a\u8868\u843d\u5730\uff0c\u5f62\u6210Clickhouse\u7684\u4e00\u4e2a\u5206\u533a\u6216\u4e00\u6761\u8bb0\u5f55\uff0c\u518d\u628a\u751f\u6210\u7684\u7ed3\u679cBitMap\u8868\u901a\u8fc7SeaTunnel\u5b58\u50a8\u5230Hive\u4e2d\u53bb\u3002\u6700\u540e\u540c\u6b65\u5de5\u5177\u4f1a\u5c06Hive\u7684BitMap\u4eba\u7fa4\u7ed3\u679c\u540c\u6b65\u7ed9\u5916\u90e8\u5a92\u4f53\u4ed3\u5e93Pika\u3002\u6bcf\u5929\u570820w\u4e2a\u4eba\u7fa4\u5de6\u53f3\u3002\\r\\n\u6574\u4e2a\u8fc7\u7a0b\u4e2dSeaTunnel\u8d1f\u8d23\u628a\u6570\u636e\u4eceHive\u5bfc\u51fa\u5230Clickhouse\uff0cClickhouse\u7684ETL\u6d41\u7a0b\u5b8c\u6210\u540eSeaTunnel\u628a\u6570\u636e\u4eceClickhouse\u5bfc\u51fa\u5230Hive\u3002\\r\\n\u4e3a\u4e86\u5b8c\u6210\u8fd9\u6837\u7684\u9700\u6c42\uff0c\u6211\u4eec\u5728Presto\u548cSpark\u7aef\u73b0ClickHouse\u7684Hyperloglog\u548cBitMap\u7684function\u7684UDF\uff1b\u6211\u4eec\u8fd8\u5f00\u53d1Seatunnel\u63a5\u53e3\uff0c\u4f7f\u5f97\u7528\u6237\u5728ClickHouse\u91cc\u4f7f\u7528Bitmap\u65b9\u6cd5\u5708\u51fa\u6765\u7684\u4eba\u7fa4\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7Seatunnel\u5199\u5165Hive\u8868\uff0c\u65e0\u9700\u4e2d\u95f4\u843d\u5730\u6b65\u9aa4\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u5728Hive\u91cc\u901a\u8fc7spark\u5708\u4eba\u7fa4\u6216\u8005\u53cd\u89e3\u4eba\u7fa4bitmap\uff0c\u8c03\u7528SeaTunnel\u63a5\u53e3\uff0c\u4f7f\u6570\u636e\u76f4\u63a5\u4f20\u8f93\u5230ClickHouse\u7684\u7ed3\u679c\u8868\uff0c\u800c\u65e0\u9700\u4e2d\u95f4\u843d\u5730\u3002\\r\\n# \u540e\u7eed\u5de5\u4f5c\\r\\n\u540e\u7eed\u6211\u4eec\u4f1a\u8fdb\u4e00\u6b65\u6539\u5584Clickhouse\u5199\u5165\u6570\u636e\u65f6CPU\u8d1f\u8f7d\u9ad8\u7684\u95ee\u9898\uff0c\u4e0b\u4e00\u6b65\u4f1a\u5728SeaTunnel\u4e2d\u5b9e\u73b0Clickhouse\u6570\u636e\u6e90\u548c\u8bfb\u53d6\u7aef\u7684CK-local\u6a21\u5f0f\uff0c\u8bfb\u5199\u5206\u79bb\uff0c\u51cf\u8f7bClickhouse\u538b\u529b\u3002\u672a\u6765\u6211\u4eec\u4e5f\u4f1a\u589e\u52a0\u66f4\u591asink\u652f\u6301\uff0c\u5982\u6570\u636e\u63a8\u9001\u5230Pika\u548c\u76f8\u5e94\u7684\u6570\u636e\u68c0\u67e5\u3002"}]}')}}]);