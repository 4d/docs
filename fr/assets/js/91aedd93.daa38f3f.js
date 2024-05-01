"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57587],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},182183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"upload",title:"$upload"},i=void 0,u={unversionedId:"REST/upload",id:"version-20-R4/REST/upload",title:"$upload",description:"Retourne un ID du fichier t\xe9l\xe9charg\xe9 sur le serveur",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/fr/20-R4/REST/upload",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/fr/20-R4/REST/info"},next:{title:"API (dataClass)",permalink:"/docs/fr/20-R4/category/api-dataclass"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Sc\xe9nario de t\xe9l\xe9chargement",id:"sc\xe9nario-de-t\xe9l\xe9chargement",level:2},{value:"Exemple avec un client 4D HTTP",id:"exemple-avec-un-client-4d-http",level:2}],c={toc:s};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Retourne un ID du fichier t\xe9l\xe9charg\xe9 sur le serveur"),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Publiez cette requ\xeate lorsque vous vous souhaitez t\xe9l\xe9charger un fichier sur le serveur. S'il s'agit d'une image, passez ",(0,r.kt)("inlineCode",{parentName:"p"},"$rawPict=true"),". Pour tous les autres fichiers, passez ",(0,r.kt)("inlineCode",{parentName:"p"},"$binary=true"),"."),(0,r.kt)("p",null,"Vous pouvez modifier le timeout, qui est par d\xe9faut de 120 secondes, en passant une valeur au param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout"),"."),(0,r.kt)("h2",a({},{id:"sc\xe9nario-de-t\xe9l\xe9chargement"}),"Sc\xe9nario de t\xe9l\xe9chargement"),(0,r.kt)("p",null,"Supposons que vous souhaitiez t\xe9l\xe9charger une image pour mettre \xe0 jour l'attribut image d'une entit\xe9."),(0,r.kt)("p",null,"Pour t\xe9l\xe9charger une image (ou tout autre fichier binaire), s\xe9lectionnez d'abord le fichier dans l'application cliente. Le fichier lui-m\xeame doit \xeatre transmis dans le ",(0,r.kt)("strong",{parentName:"p"},"corps")," de la requ\xeate."),(0,r.kt)("p",null,"T\xe9l\xe9chargez ensuite l'image s\xe9lectionn\xe9e vers le serveur 4D \xe0 l'aide d'une requ\xeate telle que :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/$upload?$rawPict=true")),(0,r.kt)("p",null,"Par cons\xe9quent, le serveur retourne un ID qui identifie le fichier :"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }')),(0,r.kt)("p",null,"Utilisez ensuite cet ID pour l'ajouter \xe0 un attribut en utilisant ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/20-R4/REST/method#methodupdate"}),(0,r.kt)("inlineCode",{parentName:"a"},"$method=update"))," pour ajouter l'image \xe0 une entit\xe9. La requ\xeate est la suivante :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/?$method=update")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Donn\xe9es POST")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("p",null,"L'entit\xe9 modifi\xe9e est retourn\xe9e :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n')),(0,r.kt)("h2",a({},{id:"exemple-avec-un-client-4d-http"}),"Exemple avec un client 4D HTTP"),(0,r.kt)("p",null,"L'exemple suivant montre comment t\xe9l\xe9charger un fichier ",(0,r.kt)("em",{parentName:"p"},".pdf")," vers le serveur \xe0 l'aide du client 4D HTTP."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob\n\n\nARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" //pr\xe9parer une requ\xeate the REST\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream"\n\nDOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) //Charger le binaire \n\n //Execute the first POST request to upload the file\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)\n\nIf ($result=200) \n    var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" //seconde requ\xeate pour mettre \xe0 jour l\'entit\xe9\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n    ALERT(String($result)+" Error")\nEnd if\n')))}d.isMDXComponent=!0}}]);