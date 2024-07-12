/*! For license information please see e21fb9c0.580890cd.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15385],{257278:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=s(474848),t=s(28453);const d={id:"lock",title:"$lock"},i=void 0,l={id:"REST/lock",title:"$lock",description:"Verrouille et d\xe9verrouille une entit\xe9 en utilisant le m\xe9canisme pessimiste.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/docs/fr/20/REST/lock",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/docs/fr/20/REST/imageformat"},next:{title:"$method",permalink:"/docs/fr/20/REST/method"}},c={},o=[{value:"Syntaxe",id:"syntaxe",level:2},{value:"Description",id:"description",level:3},{value:"R\xe9ponse",id:"r\xe9ponse",level:3},{value:"Exemple",id:"exemple",level:2}];function x(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Verrouille et d\xe9verrouille une entit\xe9 en utilisant le ",(0,r.jsx)(n.a,{href:"/docs/fr/20/ORDA/entities#pessimistic-lock",children:"m\xe9canisme pessimiste"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"syntaxe",children:"Syntaxe"}),"\n",(0,r.jsx)(n.p,{children:"Pour verrouiller une entit\xe9 pour les autres sessions et process 4D :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/?$lock=true\n"})}),"\n",(0,r.jsx)(n.p,{children:"Pour d\xe9verrouiller l'entit\xe9 pour les autres sessions et processus 4D :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/?$lock=false\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsxs)(n.a,{href:"/docs/fr/20/API/EntityClass#lock",children:[(0,r.jsx)(n.code,{children:"lockKindText"})," property"]}),' is "Locked by session".']}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Les verrouillages d\xe9clench\xe9s par l'API REST sont plac\xe9s au niveau de la ",(0,r.jsx)(n.a,{href:"/docs/fr/20/REST/authUsers#opening-sessions",children:"session"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Une entit\xe9 verrouill\xe9e est consid\xe9r\xe9e comme ",(0,r.jsx)(n.em,{children:"verrouill\xe9e"})," (c'est-\xe0-dire que les actions de verrouillage / d\xe9verrouillage / mise \xe0 jour / suppression ne sont pas possibles) par :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"d'autres sessions REST"}),"\n",(0,r.jsx)(n.li,{children:"les process 4D (client/serveur, datastore distant, monoposte) ex\xe9cut\xe9s sur le serveur REST."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Une entit\xe9 verrouill\xe9e par l'API REST peut \xeatre d\xe9verrouill\xe9e uniquement :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["par son cadenas, c'est-\xe0-dire un ",(0,r.jsx)(n.code,{children:"/?$lock=false"})," dans la session REST qui d\xe9finit ",(0,r.jsx)(n.code,{children:"/?$lock=true"})]}),"\n",(0,r.jsxs)(n.li,{children:["ou si le ",(0,r.jsx)(n.a,{href:"/docs/fr/20/REST/directory",children:"timeout d'inactivit\xe9"})," de la session est atteint (la session est ferm\xe9e)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"r\xe9ponse",children:"R\xe9ponse"}),"\n",(0,r.jsxs)(n.p,{children:["Une requ\xeate ",(0,r.jsx)(n.code,{children:"?$lock"})," retourne un objet JSON avec ",(0,r.jsx)(n.code,{children:'"result"=true'})," si l'op\xe9ration de verrouillage est r\xe9ussie et ",(0,r.jsx)(n.code,{children:'"result"=false'})," si elle \xe9choue."]}),"\n",(0,r.jsx)(n.p,{children:'L\'objet "__STATUS" retourn\xe9 poss\xe8de les propri\xe9t\xe9s suivantes :'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Disponible uniquement en cas de succ\xe8s:"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"vrai si l'action de verrouillage a \xe9t\xe9 r\xe9ussie (ou si l'entit\xe9 est d\xe9j\xe0 verrouill\xe9e dans la session courante), sinon faux (non retourn\xe9 dans ce cas)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Disponible uniquement en cas d'erreur :"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Code d'erreur, voir ci-dessous"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statusText"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Description de l'erreur, voir ci-dessous"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lockKind"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Code de verrouillage"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lockKindText"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"Locked by session" en cas de verrouillage par une session REST, "Locked by record" en cas de verrouillage par un process 4D'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lockInfo"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Information sur l'origine du verrouillage. Les propri\xe9t\xe9s retourn\xe9es d\xe9pendent de l'origine du verrouillage (process 4D ou session REST)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Disponible uniquement pour un verrouillage par process 4D:"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"task_id"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"ID du process"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"user_name"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom d'utilisateur de la session sur la machine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"user4d_alias"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom ou alias de l'utilisateur 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"user4d_id"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Identifiant utilisateur dans le r\xe9pertoire de la base 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"host_name"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la machine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"task_name"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom du process"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"client_version"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Version du client"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Disponible uniquement pour un verrouillage par session REST :"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"host"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"URL d'origine du verrouillage de l'entit\xe9 (ex : \"127.0.0.1:8043\")"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"IPAddr"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Adresse IP d'origine du verrouillage (ex. 127.0.0.1\")"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"recordNumber"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de l'enregistrement verrouill\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"userAgent"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'userAgent de l\'origine du verouillage (ex : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Les valeurs suivantes peuvent \xeatre retourn\xe9es dans les propri\xe9t\xe9s ",(0,r.jsx)(n.em,{children:"status"})," et ",(0,r.jsx)(n.em,{children:"statusText"})," de l'objet ",(0,r.jsx)(n.em,{children:"__STATUS"})," en cas d'erreur :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"status"}),(0,r.jsx)(n.th,{children:"statusText"}),(0,r.jsx)(n.th,{children:"Commentaire"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'"Stamp has changed"'}),(0,r.jsx)(n.td,{children:"La valeur du marqueur interne (stamp) de l'entit\xe9 ne correspond pas \xe0 celle de l'entit\xe9 stock\xe9e dans les donn\xe9es (verrouillage optimiste)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:'"Already locked"'}),(0,r.jsx)(n.td,{children:"L'entit\xe9 est verrouill\xe9e par un verrou pessimiste."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:'"Other error"'}),(0,r.jsx)(n.td,{children:"Une erreur critique peut \xeatre une erreur de bas niveau de la base de donn\xe9es (ex. cl\xe9 dupliqu\xe9e), une erreur mat\xe9rielle, etc."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:'"Entity does not exist anymore"'}),(0,r.jsx)(n.td,{children:"L'entit\xe9 n'existe plus dans les donn\xe9es."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Nous verrouillons une entit\xe9 dans un premier navigateur :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/Customers(1)/?$lock=true\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"R\xe9ponse :"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Dans un second navigateur (autre session), nous envoyons la m\xeame requ\xeate."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"R\xe9ponse :"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n        "lockInfo":{\n            "host":"127.0.0.1:8043",\n            "IPAddr":"127.0.0.1",\n            "recordNumber": 7,\n            "userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."\n        }\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var r,d={},o=null,x=null;for(r in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(x=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:t,type:e,key:o,ref:x,props:d,_owner:l.current}}n.Fragment=d,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(296540);const t={},d=r.createContext(t);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);