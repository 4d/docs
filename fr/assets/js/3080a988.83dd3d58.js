"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(c,i(i({ref:t},p),{},{components:n})):r.createElement(c,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"lock",title:"$lock"},o=void 0,u={unversionedId:"REST/lock",id:"version-20-R2/REST/lock",title:"$lock",description:"Verrouille et d\xe9verrouille une entit\xe9 en utilisant le m\xe9canisme pessimiste.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R2/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/docs/fr/20-R2/REST/lock",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/docs/fr/20-R2/REST/imageformat"},next:{title:"$method",permalink:"/docs/fr/20-R2/REST/method"}},s={},p=[{value:"Syntaxe",id:"syntaxe",level:2},{value:"Description",id:"description",level:3},{value:"R\xe9ponse",id:"r\xe9ponse",level:3},{value:"Exemple",id:"exemple",level:2}],d={toc:p};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Verrouille et d\xe9verrouille une entit\xe9 en utilisant le ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/20-R2/ORDA/entities#pessimistic-lock"}),"m\xe9canisme pessimiste"),"."),(0,r.kt)("h2",a({},{id:"syntaxe"}),"Syntaxe"),(0,r.kt)("p",null,"Pour verrouiller une entit\xe9 pour les autres sessions et process 4D :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"/?$lock=true\n")),(0,r.kt)("p",null,"Pour d\xe9verrouiller l'entit\xe9 pour les autres sessions et processus 4D :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"/?$lock=false\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/20-R2/API/EntityClass#lock"}),(0,r.kt)("inlineCode",{parentName:"a"},"lockKindText")," property"),' is "Locked by session".'),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Les verrouillages d\xe9clench\xe9s par l'API REST sont plac\xe9s au niveau de la ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/20-R2/REST/authUsers#opening-sessions"}),"session"),"."),(0,r.kt)("p",null,"Une entit\xe9 verrouill\xe9e est consid\xe9r\xe9e comme ",(0,r.kt)("em",{parentName:"p"},"verrouill\xe9e")," (c'est-\xe0-dire que les actions de verrouillage / d\xe9verrouillage / mise \xe0 jour / suppression ne sont pas possibles) par :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"d'autres sessions REST"),(0,r.kt)("li",{parentName:"ul"},"les process 4D (client/serveur, datastore distant, monoposte) ex\xe9cut\xe9s sur le serveur REST.")),(0,r.kt)("p",null,"Une entit\xe9 verrouill\xe9e par l'API REST peut \xeatre d\xe9verrouill\xe9e uniquement :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"par son cadenas, c'est-\xe0-dire un ",(0,r.kt)("inlineCode",{parentName:"li"},"/?$lock=false")," dans la session REST qui d\xe9finit ",(0,r.kt)("inlineCode",{parentName:"li"},"/?$lock=true")),(0,r.kt)("li",{parentName:"ul"},"ou si le ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/fr/20-R2/REST/directory"}),"timeout d'inactivit\xe9")," de la session est atteint (la session est ferm\xe9e).")),(0,r.kt)("h3",a({},{id:"r\xe9ponse"}),"R\xe9ponse"),(0,r.kt)("p",null,"Une requ\xeate ",(0,r.kt)("inlineCode",{parentName:"p"},"?$lock")," retourne un objet JSON avec ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"=true')," si l'op\xe9ration de verrouillage est r\xe9ussie et ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"=false')," si elle \xe9choue."),(0,r.kt)("p",null,'L\'objet "__STATUS" retourn\xe9 poss\xe8de les propri\xe9t\xe9s suivantes :'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,r.kt)("th",a({parentName:"tr"},{align:null})),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Disponible uniquement en cas de succ\xe8s:")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vrai si l'action de verrouillage a \xe9t\xe9 r\xe9ussie (ou si l'entit\xe9 est d\xe9j\xe0 verrouill\xe9e dans la session courante), sinon faux (non retourn\xe9 dans ce cas).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Disponible uniquement en cas d'erreur :")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"status"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Code d'erreur, voir ci-dessous")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"statusText"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Description de l'erreur, voir ci-dessous")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"lockKind"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Code de verrouillage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"lockKindText"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Locked by session" en cas de verrouillage par une session REST, "Locked by record" en cas de verrouillage par un process 4D')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"lockInfo"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"object"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Information sur l'origine du verrouillage. Les propri\xe9t\xe9s retourn\xe9es d\xe9pendent de l'origine du verrouillage (process 4D ou session REST).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Disponible uniquement pour un verrouillage par process 4D:")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"task_id"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ID du process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"user_name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nom d'utilisateur de la session sur la machine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"user4d_alias"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nom ou alias de l'utilisateur 4D")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"user4d_id"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Identifiant utilisateur dans le r\xe9pertoire de la base 4D")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"host_name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nom de la machine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"task_name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nom du process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"client_version"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Version du client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Disponible uniquement pour un verrouillage par session REST :")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"host"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"URL d'origine du verrouillage de l'entit\xe9 (ex : \"127.0.0.1:8043\")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"IPAddr"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Adresse IP d'origine du verrouillage (ex. 127.0.0.1\")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"recordNumber"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Num\xe9ro de l'enregistrement verrouill\xe9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"userAgent"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'userAgent de l\'origine du verouillage (ex : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")')))),(0,r.kt)("p",null,"Les valeurs suivantes peuvent \xeatre retourn\xe9es dans les propri\xe9t\xe9s ",(0,r.kt)("em",{parentName:"p"},"status")," et ",(0,r.kt)("em",{parentName:"p"},"statusText")," de l'objet ",(0,r.kt)("em",{parentName:"p"},"__STATUS")," en cas d'erreur :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"status"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"statusText"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Commentaire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Stamp has changed"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"La valeur du marqueur interne (stamp) de l'entit\xe9 ne correspond pas \xe0 celle de l'entit\xe9 stock\xe9e dans les donn\xe9es (verrouillage optimiste).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Already locked"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"L'entit\xe9 est verrouill\xe9e par un verrou pessimiste.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Other error"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Une erreur critique peut \xeatre une erreur de bas niveau de la base de donn\xe9es (ex. cl\xe9 dupliqu\xe9e), une erreur mat\xe9rielle, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Entity does not exist anymore"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"L'entit\xe9 n'existe plus dans les donn\xe9es.")))),(0,r.kt)("h2",a({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"Nous verrouillons une entit\xe9 dans un premier navigateur :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"GET /rest/Customers(1)/?$lock=true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse :")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n')),(0,r.kt)("p",null,"Dans un second navigateur (autre session), nous envoyons la m\xeame requ\xeate."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse :")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n        "lockInfo":{\n            "host":"127.0.0.1:8043",\n            "IPAddr":"127.0.0.1",\n            "recordNumber": 7,\n            "userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);