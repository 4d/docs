/*! For license information please see 91aedd93.73caea67.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38215],{374479:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var t=r(474848),s=r(28453);const o={id:"upload",title:"$upload"},i=void 0,a={id:"REST/upload",title:"$upload",description:"Retourne un ID du fichier t\xe9l\xe9charg\xe9 sur le serveur",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/fr/20-R4/REST/upload",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/fr/20-R4/REST/info"},next:{title:"API (dataClass)",permalink:"/docs/fr/20-R4/category/api-dataclass"}},l={},u=[{value:"Description",id:"Description",level:2},{value:"Sc\xe9nario de t\xe9l\xe9chargement",id:"Sc\xe9nario-de-t\xe9l\xe9chargement",level:2},{value:"Exemple avec un client 4D HTTP",id:"Exemple-avec-un-client-4D-HTTP",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Retourne un ID du fichier t\xe9l\xe9charg\xe9 sur le serveur"}),"\n",(0,t.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Publiez cette requ\xeate lorsque vous vous souhaitez t\xe9l\xe9charger un fichier sur le serveur. S'il s'agit d'une image, passez ",(0,t.jsx)(n.code,{children:"$rawPict=true"}),". Pour tous les autres fichiers, passez ",(0,t.jsx)(n.code,{children:"$binary=true"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez modifier le timeout, qui est par d\xe9faut de 120 secondes, en passant une valeur au param\xe8tre ",(0,t.jsx)(n.code,{children:"$timeout"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"Sc\xe9nario-de-t\xe9l\xe9chargement",children:"Sc\xe9nario de t\xe9l\xe9chargement"}),"\n",(0,t.jsx)(n.p,{children:"Supposons que vous souhaitiez t\xe9l\xe9charger une image pour mettre \xe0 jour l'attribut image d'une entit\xe9."}),"\n",(0,t.jsxs)(n.p,{children:["Pour t\xe9l\xe9charger une image (ou tout autre fichier binaire), s\xe9lectionnez d'abord le fichier dans l'application cliente. Le fichier lui-m\xeame doit \xeatre transmis dans le ",(0,t.jsx)(n.strong,{children:"corps"})," de la requ\xeate."]}),"\n",(0,t.jsx)(n.p,{children:"T\xe9l\xe9chargez ensuite l'image s\xe9lectionn\xe9e vers le serveur 4D \xe0 l'aide d'une requ\xeate telle que :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,t.jsx)(n.p,{children:"Par cons\xe9quent, le serveur retourne un ID qui identifie le fichier :"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,t.jsxs)(n.p,{children:["Utilisez ensuite cet ID pour l'ajouter \xe0 un attribut en utilisant ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R4/REST/method#methodupdate",children:(0,t.jsx)(n.code,{children:"$method=update"})})," pour ajouter l'image \xe0 une entit\xe9. La requ\xeate est la suivante :"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Donn\xe9es POST"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,t.jsx)(n.p,{children:"L'entit\xe9 modifi\xe9e est retourn\xe9e :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"Exemple-avec-un-client-4D-HTTP",children:"Exemple avec un client 4D HTTP"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant montre comment t\xe9l\xe9charger un fichier ",(0,t.jsx)(n.em,{children:".pdf"})," vers le serveur \xe0 l'aide du client 4D HTTP."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob\n\n\nARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" //pr\xe9parer une requ\xeate the REST\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream"\n\nDOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) //Charger le binaire \n\n //Execute the first POST request to upload the file\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)\n\nIf ($result=200) \n    var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" //seconde requ\xeate pour mettre \xe0 jour l\'entit\xe9\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n    ALERT(String($result)+" Error")\nEnd if\n'})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,r){var t,o={},u=null,d=null;for(t in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!l.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:u,ref:d,props:o,_owner:a.current}}n.Fragment=o,n.jsx=u,n.jsxs=u},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(296540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);