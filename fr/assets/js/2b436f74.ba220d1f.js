"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8670],{603905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var r=a(667294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),i=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=i(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),m=i(a),c=n,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return a?r.createElement(k,s(s({ref:e},p),{},{components:a})):r.createElement(k,s({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,s=new Array(l);s[0]=m;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:n,s[1]=u;for(var i=2;i<l;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},324408:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});a(667294);var r=a(603905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const s={id:"REST_requests",title:"A propos des requ\xeates REST"},u=void 0,o={unversionedId:"REST/REST_requests",id:"version-18/REST/REST_requests",title:"A propos des requ\xeates REST",description:"Les structures suivantes sont prises en charge par les requ\xeates REST :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/docs/fr/18/REST/REST_requests",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FREST_requests.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"REST_requests",title:"A propos des requ\xeates REST"},sidebar:"docs",previous:{title:"Manipulation des donn\xe9es",permalink:"/docs/fr/18/REST/manData"},next:{title:"$catalog",permalink:"/docs/fr/18/REST/catalog"}},i={},p=[{value:"Statut et r\xe9ponse REST",id:"statut-et-r\xe9ponse-rest",level:2},{value:"Statut de la requ\xeate",id:"statut-de-la-requ\xeate",level:3},{value:"R\xe9ponse",id:"r\xe9ponse",level:3}],d={toc:p};function m(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Les structures suivantes sont prises en charge par les requ\xeates REST :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"URI"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Ressource"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"{Subresource}"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"{Querystring}"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"http://{servername}:{port}/rest/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"manData.html#selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"manData.html#selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclassmethod"}),"{method}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"entityset.html#entitysetentitysetid"}),"$entityset/{entitySetID}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/fr/18/REST/filter"}),"?$filter"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"manData.html#selecting-attributes-to-get"}),"{attribute}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/fr/18/REST/compute"}),"?$compute"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclasskey"}),"{dataClass}({key})"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"manData.html#selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),"/"),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D%7Battribute%7D_value.html"}),"{dataClass}:{attribute}(value)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/fr/18/REST/catalog"}),"$catalog")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/fr/18/REST/directory"}),"$directory")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/fr/18/REST/info"}),"$info")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,"Si toutes les requ\xeates REST doivent contenir les param\xe8tres URI et Resource, la sous-ressource (qui filtre les donn\xe9es retourn\xe9es) est facultative."),(0,r.kt)("p",null,"Comme pour tous les URI, le premier param\xe8tre est d\xe9limit\xe9 par un \xab?\xbb et tous les param\xe8tres suivants par un \xab&\xbb. Par exemple :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vous pouvez placer toutes les valeurs entre guillemets en cas de doute. Par exemple, dans notre exemple ci-dessus, nous aurions pu saisir la valeur du nom de famille entre guillemets simples \"lastName!='Jones'\".")),(0,r.kt)("p",null,"Les param\xe8tres vous permettent de manipuler des donn\xe9es dans des dataclass de votre projet 4D. Outre la r\xe9cup\xe9ration de donn\xe9es \xe0 l'aide des m\xe9thodes HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", vous pouvez \xe9galement ajouter, mettre \xe0 jour et supprimer des entit\xe9s d'une dataclass \xe0 l'aide des m\xe9thodes HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),"."),(0,r.kt)("p",null,"Si vous souhaitez que les donn\xe9es soient retourn\xe9es dans un tableau au lieu d'un JSON, utilisez le param\xe8tre ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/REST/asArray"}),(0,r.kt)("inlineCode",{parentName:"a"},"$asArray")),"."),(0,r.kt)("h2",n({},{id:"statut-et-r\xe9ponse-rest"}),"Statut et r\xe9ponse REST"),(0,r.kt)("p",null,"\xc0 chaque requ\xeate REST, le serveur retourne l'\xe9tat et une r\xe9ponse (avec ou sans erreur)."),(0,r.kt)("h3",n({},{id:"statut-de-la-requ\xeate"}),"Statut de la requ\xeate"),(0,r.kt)("p",null,"Avec chaque requ\xeate REST, vous obtenez le statut et la r\xe9ponse. Voici quelques exemples de statuts :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Statut"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Requ\xeate non trait\xe9e (le serveur n'est peut-\xeatre pas \xe9t\xe9 lanc\xe9).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"200 OK"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Requ\xeate trait\xe9e sans erreur.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"401 Unauthorized"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Erreur d'autorisation (v\xe9rifiez les autorisations de l'utilisateur).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"402 No session"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Nombre maximal de sessions ayant \xe9t\xe9 atteint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"404 Not Found"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"La data n'est pas accessible via REST ou bien l'ensemble d'entit\xe9s n'existe pas.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"500 Internal Server Error"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Erreur lors du traitement de la requ\xeate REST.")))),(0,r.kt)("h3",n({},{id:"r\xe9ponse"}),"R\xe9ponse"),(0,r.kt)("p",null,"La r\xe9ponse (au format JSON) varie en fonction de la requ\xeate."),(0,r.kt)("p",null,"Si une erreur survient, elle sera envoy\xe9e avec la r\xe9ponse du serveur ou bien ce sera la r\xe9ponse du serveur."))}m.isMDXComponent=!0}}]);