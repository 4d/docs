"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1204],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(667294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),b=l,c=m["".concat(p,".").concat(b)]||m[b]||d[b]||r;return n?a.createElement(c,o(o({ref:t},s),{},{components:n})):a.createElement(c,o({ref:t},s))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},370458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});n(667294);var a=n(603905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const o={id:"BlobClass",title:"Blob"},i=void 0,p={unversionedId:"API/BlobClass",id:"version-20/API/BlobClass",title:"Blob",description:"La classe Blob vous permet de cr\xe9er et de manipuler des objets blob (4D.Blob).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/API/BlobClass.md",sourceDirName:"API",slug:"/API/BlobClass",permalink:"/docs/fr/20/API/BlobClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FBlobClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"BlobClass",title:"Blob"},sidebar:"docs",previous:{title:"A propos des fonctions de classes",permalink:"/docs/fr/20/API/overview"},next:{title:"Classe",permalink:"/docs/fr/20/API/ClassClass"}},u={},s=[{value:"Sommaire",id:"sommaire",level:3},{value:"4D.Blob.new()",id:"4dblobnew",level:2},{value:"Description",id:"description",level:4},{value:".size",id:"size",level:2},{value:"Description",id:"description-1",level:4},{value:".slice()",id:"slice",level:2},{value:"Description",id:"description-2",level:4},{value:"Exemple",id:"exemple",level:4}],d={toc:s};function m(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"La classe Blob vous permet de cr\xe9er et de manipuler des ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/fr/20/Concepts/blob#blob-types"}),"objets blob")," (",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),")."),(0,a.kt)("h3",l({},{id:"sommaire"}),"Sommaire"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#4dblobnew"}),(0,a.kt)("strong",{parentName:"a"},"4D.Blob.new()")," : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},"4D.Blob.new"),"( ",(0,a.kt)("em",{parentName:"a"},"blobScal")," : Blob ) : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},"4D.Blob.new"),"( ",(0,a.kt)("em",{parentName:"a"},"blobObj")," : 4D.Blob ) : 4D.Blob"),"\xa0","\xa0","\xa0","\xa0","cr\xe9e un nouvel objet ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob")," encapsulant optionnellement une copie des donn\xe9es d'un autre blob (blob scalaire ou ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#size"}),(0,a.kt)("strong",{parentName:"a"},".size")," : Real"),"\xa0","\xa0","\xa0","\xa0","retourne la taille d'un ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"),", exprim\xe9e en octets.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#slice"}),(0,a.kt)("strong",{parentName:"a"},".slice()")," : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".slice"),"( ",(0,a.kt)("em",{parentName:"a"},"start")," : Real ) : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".slice"),"( ",(0,a.kt)("em",{parentName:"a"},"start")," : Real; ",(0,a.kt)("em",{parentName:"a"},"end")," : Real ) : 4D.Blob"),"\xa0","\xa0","\xa0","\xa0"," cr\xe9e et retourne un ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob")," qui r\xe9f\xe9rence les donn\xe9es d'un sous-ensemble du blob sur lequel il est appel\xe9. Le blob d'origine n'est pas modifi\xe9.")))),(0,a.kt)("h2",l({},{id:"4dblobnew"}),"4D.Blob.new()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"v19 R2"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4D.Blob.new()")," : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"4D.Blob.new"),"( ",(0,a.kt)("em",{parentName:"p"},"blobScal")," : Blob ) : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"4D.Blob.new"),"( ",(0,a.kt)("em",{parentName:"p"},"blobObj")," : 4D.Blob ) : 4D.Blob"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"})),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"blob"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Blob ou 4D.Blob"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Blob pour copie")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"R\xe9sultat"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"4D.Blob"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nouveau 4D.Blob")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",l({},{id:"description"}),"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob.new")," cr\xe9e un nouvel objet ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," encapsulant optionnellement une copie des donn\xe9es d'un autre blob (blob scalaire ou ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),")."),(0,a.kt)("p",null,"Si le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"blob")," est omis, la m\xe9thode retourne un 4D.Blob vide."),(0,a.kt)("h2",l({},{id:"size"}),".size"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".size")," : Real"),(0,a.kt)("h4",l({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".size")," retourne la taille d'un ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),", exprim\xe9e en octets."),(0,a.kt)("h2",l({},{id:"slice"}),".slice()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"v19 R2"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".slice()")," : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".slice"),"( ",(0,a.kt)("em",{parentName:"p"},"start")," : Real ) : 4D.Blob",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".slice"),"( ",(0,a.kt)("em",{parentName:"p"},"start")," : Real; ",(0,a.kt)("em",{parentName:"p"},"end")," : Real ) : 4D.Blob"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"})),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"start"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Real"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"indice du premier octet \xe0 inclure dans le nouveau ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"end"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Real"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"indice du premier octet qui ne sera pas inclus dans le nouveau ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"R\xe9sultat"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"4D.Blob"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nouveau ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"))))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",l({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".slice()"),"  cr\xe9e et retourne un ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," qui r\xe9f\xe9rence les donn\xe9es d'un sous-ensemble du blob sur lequel il est appel\xe9. Le blob d'origine n'est pas modifi\xe9."),(0,a.kt)("p",null,"Le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," est un indice dans le blob, indiquant le premier octet \xe0 inclure dans le nouveau ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),". Si vous indiquez une valeur n\xe9gative, 4D la traite comme un d\xe9calage de la fin du blob vers le d\xe9but. Par exemple, -10 correspondrait \xe0 l'avant-dernier octet du blob. La valeur par d\xe9faut est 0. Si vous indiquez une valeur pour start sup\xe9rieure \xe0 la taille du blob source, la taille du ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," retourn\xe9 est 0, et il ne contient aucune donn\xe9e."),(0,a.kt)("p",null,"Le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"end")," est un indice dans le blob indiquant le premier octet qui ne sera pas inclus dans le nouveau ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," (c'est-\xe0-dire que l'octet situ\xe9 exactement \xe0 cet indice ne sera pas inclus). Si vous indiquez une valeur n\xe9gative, 4D la traite comme un d\xe9calage de la fin du blob vers le d\xe9but. Par exemple, -10 correspondrait \xe0 l'avant-dernier octet du blob. La valeur par d\xe9faut est la taille du blob."),(0,a.kt)("h4",l({},{id:"exemple"}),"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $myBlob : 4D.Blob\n\n// Stocker du texte dans un 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //True\n\n$myString:=Convert to text($myBlob; "UTF-8")\n// $myString contient "Hello, World!"\n\n// Cr\xe9er un nouveau 4D.Blob \xe0 partir de $myBlob\n$myNewBlob:=$myBlob.slice(0; 5)\n\n$myString:=Convert to text($myNewBlob; "UTF-8")\n// $myString contient "Hello"\n')))}m.isMDXComponent=!0}}]);