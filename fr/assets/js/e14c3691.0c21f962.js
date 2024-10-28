"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44411],{128689:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(474848),t=s(28453);const r={id:"license-info",title:"License info",slug:"/commands/license-info",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/license-info",title:"License info",description:"License info -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/license-info.md",sourceDirName:"commands-legacy",slug:"/commands/license-info",permalink:"/docs/fr/commands/license-info",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flicense-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"license-info",title:"License info",slug:"/commands/license-info",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Is license available",permalink:"/docs/fr/commands/is-license-available"},next:{title:"License usage",permalink:"/docs/fr/commands/license-usage"}},l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(n){const e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"License info"})," -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param\xe8tre"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"R\xe9sultat"}),(0,i.jsx)(e.td,{children:"Object"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"Informations sur la licence active"})]})})]}),"\n",(0,i.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["La commande ",(0,i.jsx)(e.strong,{children:"License info"})," retourne un objet fournissant les informations d\xe9taill\xe9es sur la licence active."]}),"\n",(0,i.jsx)(e.p,{children:"Si la commande est ex\xe9cut\xe9e dans une application 4D qui n'utilise pas localement de licence (comme un 4D distant), la commande retourne un objet nul."}),"\n",(0,i.jsx)(e.p,{children:"L'objet retourn\xe9 contient les propri\xe9t\xe9s suivantes :"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\xa0\xa0\xa0 "name":\xa0string\xa0\xa0\xa0 "licenseNumber":\xa0string\xa0\xa0\xa0 "version":\xa0string\xa0\xa0\xa0 "attributes": optional,\xa0array of strings\xa0\xa0\xa0 "userName":\xa0string\xa0\xa0\xa0 "userMail":\xa0string\xa0\xa0\xa0 "companyName":\xa0string\xa0\xa0\xa0 "platforms":\xa0array of strings\xa0\xa0\xa0 "expirationDate": optional,\xa0object\xa0\xa0\xa0 "renewalFailureCount": optional,\xa0number\xa0\xa0\xa0 "products":[ //for each registered expansion product\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id":\xa0number\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "name":\xa0string\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "usedCount":\xa0number\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "allowedCount":\xa0number\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": [\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "count":\xa0number\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "expirationDate" optional,\xa0object\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ]\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\xa0\xa0\xa0 ]}\n'})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Nom de la propri\xe9t\xe9"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Type"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Description"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Exemples"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"name"}),(0,i.jsx)(e.td,{children:"cha\xeene"}),(0,i.jsx)(e.td,{children:"Nom commercial"}),(0,i.jsx)(e.td,{children:'"4D Developer Professional v16"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"licenseNumber"}),(0,i.jsx)(e.td,{children:"cha\xeene"}),(0,i.jsx)(e.td,{children:"Num\xe9ro de licence"}),(0,i.jsx)(e.td,{children:'"4DDP16XXXXX1123456789"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"version"}),(0,i.jsx)(e.td,{children:"cha\xeene"}),(0,i.jsx)(e.td,{children:"Num\xe9ro de version de produit"}),(0,i.jsx)(e.td,{children:'"16", "16R2"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"attributes"}),(0,i.jsx)(e.td,{children:"collection de cha\xeenes"}),(0,i.jsx)(e.td,{children:"Type(s) de licences lorsque c'est applicable (optionnel)"}),(0,i.jsx)(e.td,{children:'["application","OEM"]'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"userName"}),(0,i.jsx)(e.td,{children:"cha\xeene"}),(0,i.jsx)(e.td,{children:"Nom du compte 4D Store"}),(0,i.jsx)(e.td,{children:'"John Smith"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"userMail"}),(0,i.jsx)(e.td,{children:"cha\xeene"}),(0,i.jsx)(e.td,{children:"Mail du compte 4D Store"}),(0,i.jsxs)(e.td,{children:['"',(0,i.jsx)(e.a,{href:"mailto:john.smith@gmail.com",children:"john.smith@gmail.com"}),'"']})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"companyName"}),(0,i.jsx)(e.td,{children:"cha\xeene"}),(0,i.jsx)(e.td,{children:"Nom de Soci\xe9t\xe9 du compte 4D Store"}),(0,i.jsx)(e.td,{children:'"Alpha Cie"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"platforms"}),(0,i.jsx)(e.td,{children:"collection de cha\xeenes"}),(0,i.jsx)(e.td,{children:"Plateforme(s) de la licence"}),(0,i.jsx)(e.td,{children:'["macOS", "windows"]'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"expirationDate"}),(0,i.jsx)(e.td,{children:"objet"}),(0,i.jsx)(e.td,{children:"Date d'expiration (optionnel)"}),(0,i.jsx)(e.td,{children:'{"day":2, "month":6, "year":2018}'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"renewalFailureCount"}),(0,i.jsx)(e.td,{children:"num\xe9rique"}),(0,i.jsx)(e.td,{children:"Nombre de tentatives de renouvellement automatique de licence produit ayant \xe9chou\xe9 (optionnel)"}),(0,i.jsx)(e.td,{children:"3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"products"}),(0,i.jsx)(e.td,{children:"collection d'objets"}),(0,i.jsx)(e.td,{children:"Description des licences des produits (tableau d'objets, un \xe9l\xe9ment par licence de produit)"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"[ ].id"}),(0,i.jsx)(e.td,{children:"num\xe9rique"}),(0,i.jsx)(e.td,{children:"Identifiant de licence"}),(0,i.jsxs)(e.td,{children:["Pour les valeurs disponibles, voir la commande ",(0,i.jsx)(e.a,{href:"/docs/fr/commands/is-license-available",children:"Is license available"})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"[ ].name"}),(0,i.jsx)(e.td,{children:"cha\xeene"}),(0,i.jsx)(e.td,{children:"Nom de licence"}),(0,i.jsx)(e.td,{children:'"4D Write - 4D Write Pro"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"[ ].usedCount"}),(0,i.jsx)(e.td,{children:"num\xe9rique"}),(0,i.jsx)(e.td,{children:"Nombre de connexions utilis\xe9es"}),(0,i.jsx)(e.td,{children:"8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"[ ].allowedCount"}),(0,i.jsx)(e.td,{children:"num\xe9rique"}),(0,i.jsx)(e.td,{children:"Connexions totales autoris\xe9es pour le produit par rapport \xe0 la date d'expiration"}),(0,i.jsx)(e.td,{children:"15"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"[ ].rights"}),(0,i.jsx)(e.td,{children:"collection d'objets"}),(0,i.jsx)(e.td,{children:"Droits pour le produit (un \xe9l\xe9ment par date d'expiration)"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"[ ].count"}),(0,i.jsx)(e.td,{children:"num\xe9rique"}),(0,i.jsx)(e.td,{children:"Nombre de connexions autoris\xe9es"}),(0,i.jsx)(e.td,{children:"15 (32767 signifie illimit\xe9)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"[ ].expirationDate"}),(0,i.jsx)(e.td,{children:"objet"}),(0,i.jsx)(e.td,{children:"Date d'expiration (optionnel, m\xeame format que ci-dessus)"}),(0,i.jsx)(e.td,{children:'{"day":1, "month":11, "year":2017}'})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(e.p,{children:"Vous souhaitez obtenir des informations sur la licence de votre 4D Server courant :"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:"\xa0var $obj : Object\n\xa0$obj:=License info\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"$obj"})," peut contenir, par exemple :"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "name": "4D Server v16 R3",\n\xa0\xa0\xa0 "licenseNumber": "xxxx",\n\xa0\xa0\xa0 "version": "16R3",\n\xa0\xa0\xa0 "userName": "John DOE",\n\xa0\xa0\xa0 "userMail": "john.doe@alpha.com",\n\xa0\xa0\xa0 "companyName": "Alpha",\n\xa0\xa0\xa0 "platforms": ["macOS", "windows"],\n\xa0\xa0\xa0 "expirationDate": {"day":1, "month":1, "year":2018},\n\xa0\xa0\xa0 "products":[\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "allowedCount": 15,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 808464697,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "name": "4D Write - 4D Write Pro",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "count": 5,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "expirationDate": {"day":1, "month":2, "year":2018}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "count": 10,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "expirationDate": {"day":1, "month":11, "year":2017}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }, {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "count": 10,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "expirationDate": {"day":1, "month":11, "year":2015} //expired, not counted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ],\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "usedCount": 12\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {...}\n\xa0\xa0\xa0 ]\n}\n'})}),"\n",(0,i.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/fr/commands/change-licenses",children:"CHANGE LICENSES"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/fr/commands/is-license-available",children:"Is license available"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/fr/commands/web-get-server-info",children:"WEB Get server info"})]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var i=s(296540);const t={},r=i.createContext(t);function d(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);