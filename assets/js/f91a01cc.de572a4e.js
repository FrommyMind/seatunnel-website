"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7125],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),s=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return a?t.createElement(g,o(o({ref:n},p),{},{components:a})):t.createElement(g,o({ref:n},p))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,n,a)=>{a.d(n,{A:()=>o});var t=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},n)}},11470:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(58168),r=a(96540),l=a(20053),o=a(23104),i=a(56347),u=a(57485),s=a(31682),p=a(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function m(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??c(a);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function d(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:a}=e;const t=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function y(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[u,s]=g({queryString:a,groupId:t}),[c,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,p.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:t}),f=(()=>{const e=u??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),y(e)}),[s,y,l]),tabValues:l}}var f=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),m=e=>{const n=e.currentTarget,a=p.indexOf(n),t=s[a].value;t!==i&&(c(n),u(t))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;n=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;n=p[a]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n)},s.map((e=>{let{value:n,label:a,attributes:o}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===n})}),a??n)})))}function v(e){let{lazy:n,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function N(e){const n=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(h,(0,t.A)({},e,n)),r.createElement(v,(0,t.A)({},e,n)))}function k(e){const n=(0,f.A)();return r.createElement(N,(0,t.A)({key:String(n)},e))}},84078:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=a(58168),r=(a(96540),a(15680)),l=a(11470),o=a(19365);const i={},u="Command usage",s={unversionedId:"command/usage",id:"version-2.2.0-beta/command/usage",title:"Command usage",description:"Command Entrypoint",source:"@site/versioned_docs/version-2.2.0-beta/command/usage.mdx",sourceDirName:"command",slug:"/command/usage",permalink:"/docs/2.2.0-beta/command/usage",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/command/usage.mdx",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"UUID",permalink:"/docs/2.2.0-beta/transform/uuid"},next:{title:"Deployment",permalink:"/docs/2.2.0-beta/deployment"}},p={},c=[{value:"Command Entrypoint",id:"command-entrypoint",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}],m={toc:c},d="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"command-usage"},"Command usage"),(0,r.yg)("h2",{id:"command-entrypoint"},"Command Entrypoint"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark.sh\n"))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh  \n")))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark.sh \\\n    -c config-path \\\n    -m master \\\n    -e deploy-mode \\\n    -i city=beijing\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"-m")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"--master")," to specify the cluster manager")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"-e")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"--deploy-mode")," to specify the deployment mode")))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n    -c config-path \\\n    -i key=value \\\n    -r run-application \\\n    [other params]\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("inlineCode",{parentName:"li"},"-r")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"--run-mode")," to specify the flink job run mode, you can use ",(0,r.yg)("inlineCode",{parentName:"li"},"run-application")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"run")," (default value)")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"-c")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"--config")," to specify the path of the configuration file")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"-i")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"--variable")," to specify the variables in the configuration file, you can configure multiple"))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Yarn client mode\n./bin/start-seatunnel-spark.sh \\\n    --master yarn \\\n    --deploy-mode client \\\n    --config ./config/application.conf\n\n# Yarn cluster mode\n./bin/start-seatunnel-spark.sh \\\n    --master yarn \\\n    --deploy-mode cluster \\\n    --config ./config/application.conf\n"))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n    execution.parallelism = 1\n}\n\nsource {\n    FakeSourceStream {\n        result_table_name = "fake"\n        field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n        sql = "select name,age from fake where name=\'"${my_name}"\'"\n    }\n}\n\nsink {\n    ConsoleSink {}\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Run")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n    -c config-path \\\n    -i my_name=kid-xiong\n")),(0,r.yg)("p",null,"This designation will replace ",(0,r.yg)("inlineCode",{parentName:"p"},'"${my_name}"')," in the configuration file with ",(0,r.yg)("inlineCode",{parentName:"p"},"kid-xiong")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"All the configurations in the ",(0,r.yg)("inlineCode",{parentName:"p"},"env")," section will be applied to Flink dynamic parameters with the format of ",(0,r.yg)("inlineCode",{parentName:"p"},"-D"),", such as ",(0,r.yg)("inlineCode",{parentName:"p"},"-Dexecution.parallelism=1")," .")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For the rest of the parameters, refer to the original flink parameters. Check the flink parameter method: ",(0,r.yg)("inlineCode",{parentName:"p"},"bin/flink run -h")," . The parameters can be added as needed. For example, ",(0,r.yg)("inlineCode",{parentName:"p"},"-m yarn-cluster")," is specified as ",(0,r.yg)("inlineCode",{parentName:"p"},"on yarn")," mode.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/flink run -h\n")),(0,r.yg)("p",null,"For example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-p 2")," specifies that the job parallelism is ",(0,r.yg)("inlineCode",{parentName:"li"},"2"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n    -p 2 \\\n    -c config-path\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Configurable parameters of ",(0,r.yg)("inlineCode",{parentName:"li"},"flink yarn-cluster"))),(0,r.yg)("p",null,"For example: ",(0,r.yg)("inlineCode",{parentName:"p"},"-m yarn-cluster -ynm seatunnel")," specifies that the job is running on ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn"),", and the name of ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn WebUI")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n    -m yarn-cluster \\\n    -ynm seatunnel \\\n    -c config-path\n")))))}g.isMDXComponent=!0}}]);