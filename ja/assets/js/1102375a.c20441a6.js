"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"privileges",title:"\u6a29\u9650"},o=void 0,s={unversionedId:"ORDA/privileges",id:"version-19-R8/ORDA/privileges",title:"\u6a29\u9650",description:"\u30c7\u30fc\u30bf\u4fdd\u8b77\u3068\u3001\u627f\u8a8d\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u308b\u8fc5\u901f\u304b\u3064\u5bb9\u6613\u306a\u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9\u3092\u4e21\u7acb\u3059\u308b\u3053\u3068\u306f\u3001Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3068\u3063\u3066\u5927\u304d\u306a\u8ab2\u984c\u3067\u3059\u3002 ORDA \u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc\u306f\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u4e2d\u5fc3\u306b\u5b9f\u88c5\u3055\u308c\u3066\u304a\u308a\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3055\u307e\u3056\u307e\u306a\u30ea\u30bd\u30fc\u30b9 (\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3001\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3001\u95a2\u6570\u306a\u3069) \u306b\u5bfe\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u7279\u5b9a\u306e\u6a29\u9650\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R8/ORDA/privileges.md",sourceDirName:"ORDA",slug:"/ORDA/privileges",permalink:"/docs/ja/ORDA/privileges",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/ORDA/privileges.md",tags:[],version:"19-R8",frontMatter:{id:"privileges",title:"\u6a29\u9650"},sidebar:"docs",previous:{title:"\u30ea\u30e2\u30fc\u30c8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u5229\u7528",permalink:"/docs/ja/ORDA/datastores"},next:{title:"\u7528\u8a9e\u96c6",permalink:"/docs/ja/ORDA/glossary"}},p={},d=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"Resources",id:"resources",level:2},{value:"Permission actions",id:"permission-actions",level:2},{value:"Privileges and Roles",id:"privileges-and-roles",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3},{value:"<code>roles.json</code> file",id:"rolesjson-file",level:2},{value:"<code>Roles_Errors.json</code> file",id:"roles_errorsjson-file",level:3},{value:"Initializing privileges for deployment",id:"initializing-privileges-for-deployment",level:2}],u={toc:d};function m(e){var{components:t}=e,i=l(e,["components"]);return(0,a.kt)("wrapper",r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30c7\u30fc\u30bf\u4fdd\u8b77\u3068\u3001\u627f\u8a8d\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u308b\u8fc5\u901f\u304b\u3064\u5bb9\u6613\u306a\u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9\u3092\u4e21\u7acb\u3059\u308b\u3053\u3068\u306f\u3001Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3068\u3063\u3066\u5927\u304d\u306a\u8ab2\u984c\u3067\u3059\u3002 ORDA \u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc\u306f\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u4e2d\u5fc3\u306b\u5b9f\u88c5\u3055\u308c\u3066\u304a\u308a\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3055\u307e\u3056\u307e\u306a\u30ea\u30bd\u30fc\u30b9 (\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3001\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3001\u95a2\u6570\u306a\u3069) \u306b\u5bfe\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u7279\u5b9a\u306e\u6a29\u9650\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",r({},{id:"\u6982\u8981"}),"\u6982\u8981"),(0,a.kt)("p",null,"ORDA \u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc\u306f\u3001\u6a29\u9650\u3001\u8a31\u8afe\u30a2\u30af\u30b7\u30e7\u30f3 (read\u3001create \u306a\u3069)\u3001\u304a\u3088\u3073\u30ea\u30bd\u30fc\u30b9\u306e\u6982\u5ff5\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u304c\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3068\u3001\u305d\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u306f\u81ea\u52d5\u7684\u306b\u95a2\u9023\u3059\u308b\u6a29\u9650\u304c\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002 \u6a29\u9650\u306f\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/SessionClass#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},"session.setPrivileges()"))," \u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30bb\u30c3\u30b7\u30e7\u30f3\u5185\u3067\u9001\u4fe1\u3055\u308c\u308b\u30e6\u30fc\u30b6\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," \u30d5\u30a1\u30a4\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u6a29\u9650\u306b\u5bfe\u3057\u3066\u8a55\u4fa1\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u6a29\u9650\u5916\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u30e6\u30fc\u30b6\u30fc\u304c\u5b9f\u884c\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001\u6a29\u9650\u30a8\u30e9\u30fc\u304c\u751f\u6210\u3055\u308c\u308b\u304b\u3001\u3042\u308b\u3044\u306f\u8aad\u307f\u53d6\u308a\u6a29\u9650\u304c\u306a\u3044\u5c5e\u6027\u306e\u5834\u5408\u306b\u306f\u305d\u306e\u30c7\u30fc\u30bf\u306f\u9001\u4fe1\u3055\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(71128).Z,width:"960",height:"540"})),(0,a.kt)("h2",r({},{id:"resources"}),"Resources"),(0,a.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u4ee5\u4e0b\u306e\u516c\u958b\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u3001\u8a31\u8afe\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u305d\u308c\u305e\u308c\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"),(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u30af\u30e9\u30b9"),(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027 (\u8a08\u7b97\u5c5e\u6027\u304a\u3088\u3073\u30a8\u30a4\u30ea\u30a2\u30b9\u5c5e\u6027\u3092\u542b\u3080)"),(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u30af\u30e9\u30b9\u95a2\u6570")),(0,a.kt)("p",null,"\u3042\u308b\u30ec\u30d9\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u8a31\u8afe\u30a2\u30af\u30b7\u30e7\u30f3\u306f\u57fa\u672c\u7684\u306b\u4e0b\u4f4d\u30ec\u30d9\u30eb\u306b\u7d99\u627f\u3055\u308c\u307e\u3059\u304c\u3001\u8907\u6570\u306e\u30ec\u30d9\u30eb\u3067\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30ec\u30d9\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u8a31\u8afe\u30a2\u30af\u30b7\u30e7\u30f3\u306f\u3001\u81ea\u52d5\u7684\u306b\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u30ec\u30d9\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u8a31\u8afe\u30a2\u30af\u30b7\u30e7\u30f3\u306f\u3001\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u8a2d\u5b9a\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u307e\u3059 (\u3042\u308c\u3070)\u3002 By default, all attributes of the dataclass inherit from the dataclass permission(s)."),(0,a.kt)("li",{parentName:"ul"},'Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.')),(0,a.kt)("h2",r({},{id:"permission-actions"}),"Permission actions"),(0,a.kt)("p",null,"Available actions are related to target resource."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"datastore"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"dataclass"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"attribute"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"data model function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"create")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Create entity in any dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Create entity in this dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes)."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"read")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Read attributes in any dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Read attributes in this dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Read this attribute content"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"update")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Update attributes in any dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Update attributes in this dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Update this attribute content (ignored for alias attributes)."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"drop")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Delete data in any dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Delete data in this dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Delete a not null value for this attribute (except for alias and computed attribute)."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"execute")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Execute any function on the project (datastore, dataclass, entity selection, entity)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Execute any function on the dataclass. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Execute this function")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"describe")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"All the dataclasses are available in the /rest/$catalog API"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This dataclass is available in the /rest/$catalog API"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This attribute is available in the /rest/$catalog API."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This dataclass function is available in the /rest/$catalog API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"promote")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Associates a given privilege during the execution of the function. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An alias can be read even if there is no permissions on the attributes upon which it is built."),(0,a.kt)("li",{parentName:"ul"},"A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built."),(0,a.kt)("li",{parentName:"ul"},"Default values: in the current implementation, only ",(0,a.kt)("em",{parentName:"li"},"Null")," is available as default value.")),(0,a.kt)("p",null,"Setting permissions requires to be consistent, in particular:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"update")," and ",(0,a.kt)("strong",{parentName:"li"},"drop")," permissions also need ",(0,a.kt)("strong",{parentName:"li"},"read")," permission (but ",(0,a.kt)("strong",{parentName:"li"},"create")," does not need it)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"promote")," permission also need ",(0,a.kt)("strong",{parentName:"li"},"describe")," permission.")),(0,a.kt)("h2",r({},{id:"privileges-and-roles"}),"Privileges and Roles"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"privilege")," is the technical ability to run ",(0,a.kt)("strong",{parentName:"p"},"actions")," on ",(0,a.kt)("strong",{parentName:"p"},"resources"),", while a ",(0,a.kt)("strong",{parentName:"p"},"role"),' is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).'),(0,a.kt)("p",null,'A privilege or a role can be associated to several "action + resource" combinations. Several privileges can be associated to an action. A privilege can include other privileges.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You ",(0,a.kt)("strong",{parentName:"p"},"create")," privileges and/or roles in the ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file (see below). You ",(0,a.kt)("strong",{parentName:"p"},"configure")," their scope by assigning them to permission action(s) applied to resource(s).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You ",(0,a.kt)("strong",{parentName:"p"},"allow")," privileges and/or roles to every user session using the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/SessionClass#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},".setPrivileges()"))," function of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," class."))),(0,a.kt)("h3",r({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,a.kt)("p",null,"To allow a role in a session:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs.UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Your are authenticated as Guest"\n\n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Your are authenticated as "+$user.role\n        End if\n    End if\n\n\n')),(0,a.kt)("h2",r({},{id:"rolesjson-file"}),(0,a.kt)("inlineCode",{parentName:"h2"},"roles.json")," file"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file describes the whole security settings for the project."),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"In a context other than ",(0,a.kt)("em",{parentName:"p"},"Qodly")," (cloud), you have to create this file at the following location: ",(0,a.kt)("inlineCode",{parentName:"p"},"<project folder>/Project/Sources/"),". See ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/Project/architecture#sources"}),"Architecture")," section.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file syntax is the following:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u540d"),(0,a.kt)("th",r({parentName:"tr"},{align:null})),(0,a.kt)("th",r({parentName:"tr"},{align:null})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u5fc5\u9808"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"privileges"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection of ",(0,a.kt)("inlineCode",{parentName:"td"},"privilege")," objects"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of defined privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].privilege"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].includes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String \u306e Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of included privilege names")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"roles"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection of ",(0,a.kt)("inlineCode",{parentName:"td"},"role")," objects"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of defined roles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].role"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Role name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].privileges"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String \u306e Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of included privilege names")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"permissions"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of allowed actions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"allowed"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection of ",(0,a.kt)("inlineCode",{parentName:"td"},"permission")," objects"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of allowed permissions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].applyTo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Targeted ",(0,a.kt)("a",r({parentName:"td"},{href:"#resources"}),"resource")," name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].type"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#resources"}),"Resource"),' type: "datastore", "dataclass", "attribute", "method"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].read"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String \u306e Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].create"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String \u306e Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].update"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String \u306e Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].drop"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String \u306e Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].describe"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String \u306e Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].execute"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String \u306e Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].promote"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String \u306e Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")))),(0,a.kt)("admonition",r({},{title:"Reminder",type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'The "WebAdmin" privilege name is reserved to the application. It is not recommended to use this name for custom privileges.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"privileges")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"roles")," names are case insensitive."))),(0,a.kt)("h3",r({},{id:"roles_errorsjson-file"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Roles_Errors.json")," file"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file is parsed by 4D at startup. You need to restart the application if you want modifications in this file to be taken into account."),(0,a.kt)("p",null,"In case of error(s) when parsing the ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file, 4D loads the project but disables the global access protection - this allows the developer to access the files and to fix the error. An error file named ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," is generated in the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/Project/architecture#logs"}),(0,a.kt)("inlineCode",{parentName:"a"},"Logs")," folder of the project")," and describes the error line(s). This file is automatically deleted when the ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file no longer contains error(s)."),(0,a.kt)("p",null,"It is recommended to check at startup if a ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," file exists in the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/Project/architecture#logs"}),"Logs folder"),", which means that there was a parsing error and that accesses will not limited. You can write for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',title:'"/Sources/DatabaseMethods/onStartup.4dm"'}),'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // you can prevent the project to open\n ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")\n QUIT 4D\nEnd if \n')),(0,a.kt)("h2",r({},{id:"initializing-privileges-for-deployment"}),"Initializing privileges for deployment"),(0,a.kt)("p",null,"By default, if no specific parameters are defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file, accesses are not limited. This configuration allows you to develop the application without having to worry about accesses."),(0,a.kt)("p",null,"However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. To lock all privileges on all resources, put the following ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file in your project folder (it includes examples of methods):"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json",metastring:'title="/Project/Sources/roles.json"',title:'"/Project/Sources/roles.json"'}),'{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [{\n            "applyTo": "ds",\n            "type": "datastore",\n            "read": [\n                "none"\n            ],\n            "create": [\n                "none"\n            ],\n            "update": [\n                "none"\n            ],\n            "drop": [\n                "none"\n            ],\n            "execute": [\n                "none"\n            ],\n            "describe": [\n                "none"\n            ],\n            "promote": [\n                "none"\n            ]\n        },\n        {\n            "applyTo": "ds.loginAs",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.hasPrivilege",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.clearPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.isGuest",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.getPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.setAllPrivileges",\n            "type": "method",\n            "execute": [\n                "guest"\n            ]\n    }\n\n        ]\n    }\n}\n')))}m.isMDXComponent=!0},71128:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"}}]);