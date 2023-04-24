"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),u=d(n),s=l,c=u["".concat(o,".").concat(s)]||u[s]||m[s]||r;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>k});n(67294);var a=n(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const i={id:"ZipArchiveClass",title:"ZIPArchive"},p=void 0,o={unversionedId:"API/ZipArchiveClass",id:"version-19-R8/API/ZipArchiveClass",title:"ZIPArchive",description:'4D ZIP \u30a2\u30fc\u30ab\u30a4\u30d6\u306f\u3001\u4e00\u3064\u4ee5\u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u307e\u305f\u306f\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u683c\u7d0d\u3057\u3066\u3044\u308b File \u307e\u305f\u306f Folder \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3001\u5143\u306e\u30b5\u30a4\u30ba\u3088\u308a\u5c0f\u3055\u304f\u306a\u308b\u3088\u3046\u306b\u5727\u7e2e\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3092\u3044\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u306f ".zip" \u62e1\u5f35\u5b50\u3092\u6301\u3064\u3088\u3046\u306b\u4f5c\u6210\u3055\u308c\u3001\u30c7\u30a3\u30b9\u30af\u30b9\u30da\u30fc\u30b9\u306e\u78ba\u4fdd\u3084\u3001\u30b5\u30a4\u30ba\u5236\u9650\u304c\u3042\u308b\u30e1\u30c7\u30a3\u30a2 (\u4f8b: \u30e1\u30fc\u30eb\u307e\u305f\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306a\u3069) \u7d4c\u7531\u306e\u30d5\u30a1\u30a4\u30eb\u8ee2\u9001\u3092\u5bb9\u6613\u306b\u3059\u308b\u7528\u9014\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002',source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R8/API/ZipArchiveClass.md",sourceDirName:"API",slug:"/API/ZipArchiveClass",permalink:"/docs/ja/19-R8/API/ZipArchiveClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipArchiveClass.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"ZipArchiveClass",title:"ZIPArchive"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/ja/19-R8/API/WebServerClass"},next:{title:"ZIPFile",permalink:"/docs/ja/19-R8/API/ZipFileClass"}},d={},k=[{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3},{value:"\u6982\u8981",id:"\u6982\u8981",level:3},{value:"ZIP Create archive",id:"zip-create-archive",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c 1",id:"\u4f8b\u984c-1",level:4},{value:"\u4f8b\u984c 2",id:"\u4f8b\u984c-2",level:4},{value:"\u4f8b\u984c 3",id:"\u4f8b\u984c-3",level:4},{value:"\u4f8b\u984c 4",id:"\u4f8b\u984c-4",level:4},{value:"\u4f8b\u984c 5",id:"\u4f8b\u984c-5",level:4},{value:"ZIP Read archive",id:"zip-read-archive",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-1",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-6",level:4},{value:".root",id:"root",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-2",level:4}],m={toc:k};function u(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D ZIP \u30a2\u30fc\u30ab\u30a4\u30d6\u306f\u3001\u4e00\u3064\u4ee5\u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u307e\u305f\u306f\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u683c\u7d0d\u3057\u3066\u3044\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," \u307e\u305f\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"Folder"),' \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3001\u5143\u306e\u30b5\u30a4\u30ba\u3088\u308a\u5c0f\u3055\u304f\u306a\u308b\u3088\u3046\u306b\u5727\u7e2e\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3092\u3044\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u306f ".zip" \u62e1\u5f35\u5b50\u3092\u6301\u3064\u3088\u3046\u306b\u4f5c\u6210\u3055\u308c\u3001\u30c7\u30a3\u30b9\u30af\u30b9\u30da\u30fc\u30b9\u306e\u78ba\u4fdd\u3084\u3001\u30b5\u30a4\u30ba\u5236\u9650\u304c\u3042\u308b\u30e1\u30c7\u30a3\u30a2 (\u4f8b: \u30e1\u30fc\u30eb\u307e\u305f\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306a\u3069) \u7d4c\u7531\u306e\u30d5\u30a1\u30a4\u30eb\u8ee2\u9001\u3092\u5bb9\u6613\u306b\u3059\u308b\u7528\u9014\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4D ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u306f ",(0,a.kt)("a",l({parentName:"li"},{href:"#zip-create-archive"}),"ZIP Create archive")," \u30b3\u30de\u30f3\u30c9\u3067\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"4D ",(0,a.kt)("a",l({parentName:"li"},{href:"/docs/ja/19-R8/API/ZipFileClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"ZIPFile"))," \u304a\u3088\u3073 ",(0,a.kt)("a",l({parentName:"li"},{href:"/docs/ja/19-R8/API/ZipFolderClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"ZIPFolder"))," \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001",(0,a.kt)("a",l({parentName:"li"},{href:"#zip-read-archive"}),"ZIP Read archive")," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u8fd4\u3055\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e ",(0,a.kt)("a",l({parentName:"li"},{href:"#root"}),(0,a.kt)("inlineCode",{parentName:"a"},"root"))," \u30d7\u30ed\u30d1\u30c6\u30a3 (",(0,a.kt)("inlineCode",{parentName:"li"},"ZIPFolder"),") \u3092\u901a\u3057\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002")),(0,a.kt)("h3",l({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,a.kt)("p",null,"ZIPFile \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3057\u3001\u305d\u306e\u4e2d\u8eab\u3092\u78ba\u8a8d\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $path; $archive : 4D.File\nvar $zipFile : 4D.ZipFile\nvar $zipFolder : 4D.ZipFolder\nvar $txt : Text\n\n$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n$archive:=ZIP Read archive($path)\n$zipFolder:=$archive.root // \u5727\u7e2e\u30d5\u30a1\u30a4\u30eb\u306e\u30eb\u30fc\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4fdd\u5b58\u3057\u307e\u3059\n$zipFile:=$zipFolder.files()[0] // \u6700\u521d\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u53d6\u308a\u307e\u3059\n\nIf($zipFile.extension=".txt")\n $txt:=$zipFile.getText()\nEnd if\n')),(0,a.kt)("h3",l({},{id:"\u6982\u8981"}),"\u6982\u8981"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#root"}),(0,a.kt)("strong",{parentName:"a"},".root")," : 4D.ZipFolder"),"\xa0","\xa0","\xa0","\xa0","ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u30d0\u30fc\u30c1\u30e3\u30eb\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u683c\u7d0d\u3057\u307e\u3059")))),(0,a.kt)("h2",l({},{id:"zip-create-archive"}),"ZIP Create archive"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u5c65\u6b74"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30d0\u30fc\u30b8\u30e7\u30f3"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"v19 R3"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".level")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8ffd\u52a0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"v18"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u8ffd\u52a0"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,a.kt)("em",{parentName:"p"},"fileToZip")," : 4D.File ; ",(0,a.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : Object",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,a.kt)("em",{parentName:"p"},"folderToZip")," : 4D.Folder ; ",(0,a.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File { ; ",(0,a.kt)("em",{parentName:"p"},"options")," : Integer }) : Object",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,a.kt)("em",{parentName:"p"},"zipStructure")," : Object ; ",(0,a.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : Object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"})),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"fileToZip"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"4D.File"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5727\u7e2e\u3059\u308b File \u307e\u305f\u306f Folder \u30aa\u30d6\u30b8\u30a7\u30af\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"folderToZip"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"4D.Folder"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5727\u7e2e\u3059\u308b File \u307e\u305f\u306f Folder \u30aa\u30d6\u30b8\u30a7\u30af\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"zipStructure"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5727\u7e2e\u3059\u308b File \u307e\u305f\u306f Folder \u30aa\u30d6\u30b8\u30a7\u30af\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"destinationFile"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"4D.File"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u4fdd\u5b58\u5148\u30d5\u30a1\u30a4\u30eb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"folderToZip")," \u30aa\u30d7\u30b7\u30e7\u30f3: ",(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Without enclosing folder")," (\u5916\u5074\u306e\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u9664\u5916\u3057\u3066 ZIP\u5727\u7e2e\u3092\u304a\u3053\u306a\u3046)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u623b\u308a\u5024"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u30b9\u30c6\u30fc\u30bf\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",l({},{id:"\u8aac\u660e"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," \u30b3\u30de\u30f3\u30c9\u306f\u3001 \u5727\u7e2e\u3055\u308c\u305f ZIPArchive \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u51e6\u7406\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u7b2c1\u5f15\u6570\u3068\u3057\u3066\u30014D.File\u30014D.Folder\u3001\u3042\u308b\u3044\u306f zipStructure \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"fileToZip"),": \u5727\u7e2e\u3059\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.File")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"folderToZip"),": \u5727\u7e2e\u3059\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Folder")," \u3092\u6e21\u3057\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u4efb\u610f\u306e ",(0,a.kt)("em",{parentName:"p"},"options")," \u5f15\u6570\u3092\u6e21\u3057\u3066\u3001\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u307f\u3092\u5727\u7e2e (\u3064\u307e\u308a\u3001\u5916\u5074\u306e\u30d5\u30a9\u30eb\u30c0\u3092\u9664\u5916) \u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3001\u30d5\u30a9\u30eb\u30c0\u30fc\u3068\u305d\u306e\u4e2d\u8eab\u3092\u5727\u7e2e\u3059\u308b\u306e\u3067\u3001\u5c55\u958b\u51e6\u7406\u3092\u3057\u305f\u3068\u304d\u306b\u306f\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u518d\u4f5c\u6210\u3057\u307e\u3059\u3002 \u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u4e2d\u8eab\u306e\u307f\u3092\u89e3\u51cd\u51e6\u7406\u3067\u5fa9\u5143\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("em",{parentName:"p"},"options")," \u5f15\u6570\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIP Without enclosing folder")," \u5b9a\u6570\u3092\u6e21\u3057\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"zipStructure"),": ZIPArchive \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8868\u3059\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5229\u7528\u3057\u3066\u3001\u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059:"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"compression"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": Deflate\u5727\u7e2e (\u30c7\u30d5\u30a9\u30eb\u30c8)"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": LZMA\u5727\u7e2e"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": XZ\u5727\u7e2e"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Compression none"),": \u5727\u7e2e\u306a\u3057"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"level"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5727\u7e2e\u30ec\u30d9\u30eb\u3002 \u3068\u308a\u3046\u308b\u5024: 1 - 10\u3002 \u4f4e\u3044\u5024\u3067\u306f\u30d5\u30a1\u30a4\u30eb\u304c\u5927\u304d\u304f\u306a\u308a\u3001\u9ad8\u3044\u5024\u3067\u306f\u30d5\u30a1\u30a4\u30eb\u304c\u5c0f\u3055\u304f\u306a\u308a\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u5727\u7e2e\u30ec\u30d9\u30eb\u306f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u5024 (\u7701\u7565\u6642): ",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": 6"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": 4"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": 4"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"encryption"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u305f\u5834\u5408\u306b\u4f7f\u7528\u3059\u308b\u6697\u53f7\u5316\u65b9\u6cd5:",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES128"),": 128-bit \u30ad\u30fc\u3092\u4f7f\u3063\u305f AES \u306b\u3088\u308b\u6697\u53f7\u5316"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES192"),": 192-bit \u30ad\u30fc\u3092\u4f7f\u3063\u305f AES \u306b\u3088\u308b\u6697\u53f7\u5316"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES256"),": 256-bit \u30ad\u30fc\u3092\u4f7f\u3063\u305f AES \u306b\u3088\u308b\u6697\u53f7\u5316 (\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306e\u30c7\u30d5\u30a9\u30eb\u30c8)"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Encryption none"),": \u6697\u53f7\u5316\u306a\u3057 (\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u306a\u3044\u5834\u5408\u306e\u30c7\u30d5\u30a9\u30eb\u30c8)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"password"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u6697\u53f7\u5316\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u4f7f\u7528\u3059\u308b\u30d1\u30b9\u30ef\u30fc\u30c9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"files"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"4D.File")," \u307e\u305f\u306f ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Folder")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("li",null,"\u4ee5\u4e0b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6301\u3063\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3:"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,a.kt)("td",null,"\u30bf\u30a4\u30d7"),(0,a.kt)("td",null,"\u8aac\u660e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"source"),(0,a.kt)("td",null,"4D.File \u307e\u305f\u306f 4D.Folder"),(0,a.kt)("td",null,"File \u307e\u305f\u306f Folder")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"destination"),(0,a.kt)("td",null,"Text"),(0,a.kt)("td",null,"(\u4efb\u610f) - \u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u69cb\u6210\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306e\u76f8\u5bfe\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"option"),(0,a.kt)("td",null,"number"),(0,a.kt)("td",null,"(\u4efb\u610f) - ",(0,a.kt)("inlineCode",{parentName:"td"},"ZIP Ignore invisible files")," \u3067\u975e\u8868\u793a\u30d5\u30a1\u30a4\u30eb\u3092\u7121\u8996\u30010 \u3092\u6e21\u3059\u3068\u5168\u30d5\u30a1\u30a4\u30eb\u3092\u5727\u7e2e"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"4D.Function"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"$1 \u306b\u5727\u7e2e\u306e\u9032\u6357 (0 - 100) \u3092\u53d7\u3051\u53d6\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u30d5\u30a9\u30fc\u30df\u30e5\u30e9")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"destinationFile")," \u306b\u306f\u3001\u4f5c\u6210\u3059\u308b ZIP\u30a2\u30fc\u30ab\u30a4\u30d6 (\u540d\u524d\u3084\u4f4d\u7f6e\u306a\u3069) \u3092\u8a18\u8ff0\u3059\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.File"),' \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3057\u307e\u3059\u3002 \u4f5c\u6210\u3057\u305f ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u304c\u3042\u3089\u3086\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3067\u81ea\u52d5\u7684\u306b\u51e6\u7406\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u3001".zip" \u62e1\u5f35\u5b50\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002'),(0,a.kt)("p",null,"\u30a2\u30fc\u30ab\u30a4\u30d6\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001",(0,a.kt)("a",l({parentName:"p"},{href:"#zip-read-archive"}),"ZIP Read archive")," \u3092\u4f7f\u7528\u3057\u3066\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30b9\u30c6\u30fc\u30bf\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")),(0,a.kt)("p",null,"\u623b\u308a\u5024\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"statusText"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8 (\u3042\u308c\u3070):",(0,a.kt)("li",null,"ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u958b\u3051\u307e\u305b\u3093"),(0,a.kt)("li",null,"ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u4f5c\u6210\u3067\u304d\u307e\u305b\u3093"),(0,a.kt)("li",null,"\u6697\u53f7\u5316\u306b\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u5fc5\u8981\u3067\u3059"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"status"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u30a2\u30fc\u30ab\u30a4\u30d6\u304c\u6b63\u5e38\u306b\u4f5c\u6210\u3055\u308c\u305f\u5834\u5408\u306b\u306f true\u3001\u305d\u308c\u4ee5\u5916\u306f false")))),(0,a.kt)("h4",l({},{id:"\u4f8b\u984c-1"}),"\u4f8b\u984c 1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"4D.File")," \u3092\u5727\u7e2e\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n')),(0,a.kt)("h4",l({},{id:"\u4f8b\u984c-2"}),"\u4f8b\u984c 2"),(0,a.kt)("p",null,"\u30d5\u30a9\u30eb\u30c0\u30fc\u81ea\u4f53\u306f\u5727\u7e2e\u305b\u305a\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Folder")," \u306e\u4e2d\u8eab\u3060\u3051\u3092\u5727\u7e2e\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n')),(0,a.kt)("h4",l({},{id:"\u4f8b\u984c-3"}),"\u4f8b\u984c 3"),(0,a.kt)("p",null,"ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u5727\u7e2e\u306b\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u9032\u6357\u30d0\u30fc\u3092\u4f7f\u3044\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New // 4D Progress \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u3044\u307e\u3059\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"myFormulaCompressingMethod"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n")),(0,a.kt)("h4",l({},{id:"\u4f8b\u984c-4"}),"\u4f8b\u984c 4"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"zipStructure")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u3001\u5727\u7e2e\u3057\u305f\u3044\u30d5\u30a9\u30eb\u30c0\u30fc\u3068\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u305f\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u6e21\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n')),(0,a.kt)("h4",l({},{id:"\u4f8b\u984c-5"}),"\u4f8b\u984c 5"),(0,a.kt)("p",null,"\u9ad8\u3044\u5727\u7e2e\u30ec\u30d9\u30eb\u306e\u4ee3\u66ff\u5727\u7e2e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u4f7f\u7528\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $destination : 4D.File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 // \u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f 4 \u3067\u3059\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n')),(0,a.kt)("h2",l({},{id:"zip-read-archive"}),"ZIP Read archive"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u5c65\u6b74"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30d0\u30fc\u30b8\u30e7\u30f3"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"v18"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u8ffd\u52a0"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ZIP Read archive")," ( ",(0,a.kt)("em",{parentName:"p"},"zipFile")," : 4D.File { ; ",(0,a.kt)("em",{parentName:"p"},"password")," : Text }) : 4D.ZipArchive"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"})),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"zipFile"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"4D.File"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"password"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u30d1\u30b9\u30ef\u30fc\u30c9 (\u5fc5\u8981\u3067\u3042\u308c\u3070)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u623b\u308a\u5024"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"4D.ZipArchive"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u30a2\u30fc\u30ab\u30a4\u30d6\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",l({},{id:"\u8aac\u660e-1"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ZIP Read archive")," \u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,a.kt)("em",{parentName:"p"},"zipFile")," \u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u53d6\u5f97\u3057\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5f62\u5f0f\u3067\u8fd4\u3057\u307e\u3059\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u5c55\u958b\u3059\u308b\u3053\u3068\u306f\u3057\u307e\u305b\u3093\u3002\u305d\u306e\u4e2d\u8eab\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u63d0\u4f9b\u3059\u308b\u306e\u307f\u3067\u3059\u3002 \u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u53d6\u308a\u51fa\u3059\u306b\u306f\u3001",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/ja/19-R8/API/Document#copyto"}),"file.copyTo()")," \u3042\u308b\u3044\u306f ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/ja/19-R8/API/Directory#copyto"}),"folder.copyTo()")," \u306a\u3069\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"zipFile")," \u5f15\u6570\u3068\u3057\u3066\u3001\u5727\u7e2e\u3055\u308c\u305f ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u53c2\u7167\u3057\u3066\u3044\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.File")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3057\u307e\u3059\u3002 \u30bf\u30fc\u30b2\u30c3\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIP Read archive")," \u304c\u5b9f\u884c\u3092\u7d42\u3048\u308b\u307e\u3067 (\u5168\u30b3\u30f3\u30c6\u30f3\u30c4/\u53c2\u7167\u304c\u53d6\u5f97/\u89e3\u653e\u3055\u308c\u308b\u307e\u3067) \u306f\u958b\u3044\u305f\u72b6\u614b\u3068\u306a\u308a\u3001\u305d\u306e\u5f8c\u81ea\u52d5\u7684\u306b\u9589\u3058\u3089\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"zipFile")," \u5f15\u6570\u3067\u6307\u5b9a\u3057\u305f ZIP\u30d5\u30a1\u30a4\u30eb\u304c\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u4fdd\u8b77\u3055\u308c\u3066\u3044\u305f\u5834\u5408\u3001\u4efb\u610f\u306e ",(0,a.kt)("em",{parentName:"p"},"password")," \u5f15\u6570\u3092\u6e21\u3057\u3066\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u5fc5\u8981\u306b\u3082\u95a2\u308f\u3089\u305a\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u8aad\u307f\u51fa\u3057\u6642\u306b\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u63d0\u793a\u3055\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30a2\u30fc\u30ab\u30a4\u30d6\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")),(0,a.kt)("p",null,"\u623b\u308a\u5024\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u5358\u4e00\u306e ",(0,a.kt)("a",l({parentName:"p"},{href:"#root"}),(0,a.kt)("inlineCode",{parentName:"a"},"root"))," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u683c\u7d0d\u3057\u3066\u304a\u308a\u3001\u305d\u306e\u5024\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.ZipFolder")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002 \u3053\u306e\u30d5\u30a9\u30eb\u30c0\u30fc\u306f ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u5168\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u3057\u307e\u3059\u3002"),(0,a.kt)("h4",l({},{id:"\u4f8b\u984c-6"}),"\u4f8b\u984c"),(0,a.kt)("p",null,"ZIPFile \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3057\u3001\u305d\u306e\u4e2d\u8eab\u3092\u78ba\u8a8d\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n')),(0,a.kt)("p",null,"\u30a2\u30fc\u30ab\u30a4\u30d6\u5185\u306e\u30d5\u30a1\u30a4\u30eb\u3068\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n")),(0,a.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u3001root \u30d5\u30a9\u30eb\u30c0\u30fc\u304b\u3089\u53d6\u308a\u51fa\u3059\u3053\u3068\u306a\u304f\u8aad\u307f\u51fa\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n')),(0,a.kt)("p",null,"root \u30d5\u30a9\u30eb\u30c0\u30fc\u304b\u3089\u53d6\u308a\u51fa\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'  // \u7279\u5b9a\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3057\u307e\u3059\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  // \u3059\u3079\u3066\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3057\u307e\u3059\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n')),(0,a.kt)("h2",l({},{id:"root"}),".root"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".root")," : 4D.ZipFolder"),(0,a.kt)("h4",l({},{id:"\u8aac\u660e-2"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".root")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001 ZIP\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u30d0\u30fc\u30c1\u30e3\u30eb\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"root")," \u30d5\u30a9\u30eb\u30c0\u30fc\u3068\u305d\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u3001",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/ja/19-R8/API/ZipFileClass"}),"ZipFile")," \u304a\u3088\u3073 ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/ja/19-R8/API/ZipFolderClass"}),"ZipFolder")," \u306e\u95a2\u6570\u3068\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u64cd\u4f5c\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f ",(0,a.kt)("strong",{parentName:"p"},"\u8aad\u307f\u53d6\u308a\u5c02\u7528")," \u3067\u3059\u3002"))}u.isMDXComponent=!0}}]);