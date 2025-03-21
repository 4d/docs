"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51300"],{440283:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"REST/lock","title":"$lock","description":"Verrouille et d\xe9verrouille une entit\xe9 en utilisant le m\xe9canisme pessimiste.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/$lock.md","sourceDirName":"REST","slug":"/REST/lock","permalink":"/docs/fr/19/REST/lock","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"lock","title":"$lock"},"sidebar":"docs","previous":{"title":"$imageformat","permalink":"/docs/fr/19/REST/imageformat"},"next":{"title":"$method","permalink":"/docs/fr/19/REST/method"}}'),t=s("785893"),i=s("250065");let l={id:"lock",title:"$lock"},o=void 0,d={},c=[{value:"Syntaxe",id:"syntaxe",level:2},{value:"Description",id:"description",level:3},{value:"R\xe9ponse",id:"r\xe9ponse",level:3},{value:"Exemple",id:"exemple",level:2}];function u(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Verrouille et d\xe9verrouille une entit\xe9 en utilisant le ",(0,t.jsx)(n.a,{href:"/docs/fr/19/ORDA/entities#pessimistic-lock",children:"m\xe9canisme pessimiste"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntaxe",children:"Syntaxe"}),"\n",(0,t.jsx)(n.p,{children:"Pour verrouiller une entit\xe9 pour les autres sessions et process 4D :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/?$lock=true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Pour d\xe9verrouiller l'entit\xe9 pour les autres sessions et processus 4D :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/?$lock=false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,t.jsx)(n.a,{href:"/docs/fr/19/API/EntityClass#lock",children:(0,t.jsx)(n.code,{children:"lockKindText"})}),' est "Locked by session".']}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The locks triggered by the REST API are put at the ",(0,t.jsx)(n.a,{href:"/docs/fr/19/REST/authUsers#opening-sessions",children:"session"})," level."]}),"\n",(0,t.jsxs)(n.p,{children:["Une entit\xe9 verrouill\xe9e est consid\xe9r\xe9e comme ",(0,t.jsx)(n.em,{children:"verrouill\xe9e"})," (c'est-\xe0-dire que les actions de verrouillage / d\xe9verrouillage / mise \xe0 jour / suppression ne sont pas possibles) par :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"d'autres sessions REST"}),"\n",(0,t.jsx)(n.li,{children:"les process 4D (client/serveur, datastore distant, monoposte) ex\xe9cut\xe9s sur le serveur REST."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Une entit\xe9 verrouill\xe9e par l'API REST peut \xeatre d\xe9verrouill\xe9e uniquement :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["par son cadenas, c'est-\xe0-dire un ",(0,t.jsx)(n.code,{children:"/?$lock=false"})," dans la session REST qui d\xe9finit ",(0,t.jsx)(n.code,{children:"/?$lock=true"})]}),"\n",(0,t.jsxs)(n.li,{children:["ou si le ",(0,t.jsx)(n.a,{href:"/docs/fr/19/REST/directory",children:"timeout d'inactivit\xe9"})," de la session est atteint (la session est ferm\xe9e)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"r\xe9ponse",children:"R\xe9ponse"}),"\n",(0,t.jsxs)(n.p,{children:["Une requ\xeate ",(0,t.jsx)(n.code,{children:"?$lock"})," retourne un objet JSON avec ",(0,t.jsx)(n.code,{children:'"result"=true'})," si l'op\xe9ration de verrouillage est r\xe9ussie et ",(0,t.jsx)(n.code,{children:'"result"=false'})," si elle \xe9choue."]}),"\n",(0,t.jsx)(n.p,{children:'L\'objet "__STATUS" retourn\xe9 poss\xe8de les propri\xe9t\xe9s suivantes :'}),"\n",(0,t.jsxs)(n.p,{children:["| Propri\xe9t\xe9    |  | Type    | Description                                                                                                                                           |\n| ------------ |  | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |\n|              |  |         | ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Disponible uniquement en cas de succ\xe8s:"})}),"                                                                                                         |\n| success      |  | boolean | vrai si l'action de verrouillage a \xe9t\xe9 r\xe9ussie (ou si l'entit\xe9 est d\xe9j\xe0 verrouill\xe9e dans la session courante), sinon faux (non retourn\xe9 dans ce cas). |\n|              |  |         | ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Disponible uniquement en cas d'erreur :"})}),'                                                                                                         |\n| status       |  | number  | Code d\'erreur, voir ci-dessous                                                                                                                        |\n| statusText   |  | text    | Description de l\'erreur, voir ci-dessous                                                                                                              |\n| lockKind     |  | number  | Code de verrouillage                                                                                                                                  |\n| lockKindText |  | text    | "Locked by session" en cas de verrouillage par une session REST, "Locked by record" en cas de verrouillage par un process 4D                          |']}),"\n",(0,t.jsxs)(n.p,{children:["Les valeurs suivantes peuvent \xeatre retourn\xe9es dans les propri\xe9t\xe9s ",(0,t.jsx)(n.em,{children:"status"})," et ",(0,t.jsx)(n.em,{children:"statusText"})," de l'objet ",(0,t.jsx)(n.em,{children:"__STATUS"})," en cas d'erreur :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"status"}),(0,t.jsx)(n.th,{children:"statusText"}),(0,t.jsx)(n.th,{children:"Commentaire"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:'"Stamp has changed"'}),(0,t.jsx)(n.td,{children:"La valeur du marqueur interne (stamp) de l'entit\xe9 ne correspond pas \xe0 celle de l'entit\xe9 stock\xe9e dans les donn\xe9es (verrouillage optimiste)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:'"Already locked"'}),(0,t.jsx)(n.td,{children:"L'entit\xe9 est verrouill\xe9e par un verrou pessimiste."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:'"Other error"'}),(0,t.jsx)(n.td,{children:"Une erreur critique peut \xeatre une erreur de bas niveau de la base de donn\xe9es (ex. cl\xe9 dupliqu\xe9e), une erreur mat\xe9rielle, etc."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:'"Entity does not exist anymore"'}),(0,t.jsx)(n.td,{children:"L'entit\xe9 n'existe plus dans les donn\xe9es."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Nous verrouillons une entit\xe9 dans un premier navigateur :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"GET /rest/Customers(1)/?$lock=true\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"R\xe9ponse :"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Dans un second navigateur (autre session), nous envoyons la m\xeame requ\xeate."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"R\xe9ponse :"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n    }\n}\n'})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);