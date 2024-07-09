/*! For license information please see 972320a3.131849ca.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12860],{535989:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(474848),r=n(28453);const i={id:"datastores",title:"Utiliser un datastore distant"},a=void 0,o={id:"ORDA/datastores",title:"Utiliser un datastore distant",description:"Un datastore expos\xe9 sur une application 4D Server est accessible simultan\xe9ment via diff\xe9rents clients :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/fr/19/ORDA/datastores",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"datastores",title:"Utiliser un datastore distant"},sidebar:"docs",previous:{title:"Travailler avec les donn\xe9es",permalink:"/docs/fr/19/ORDA/entities"},next:{title:"Glossaire",permalink:"/docs/fr/19/ORDA/glossary"}},l={},d=[{value:"Ouverture des sessions",id:"Ouverture-des-sessions",level:2},{value:"Visualiser les sessions",id:"Visualiser-les-sessions",level:2},{value:"Verrouillage et transactions",id:"Verrouillage-et-transactions",level:2},{value:"Fermeture des sessions",id:"Fermeture-des-sessions",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Un ",(0,t.jsx)(s.a,{href:"/docs/fr/19/ORDA/dsmapping#datastore",children:"datastore"})," expos\xe9 sur une application 4D Server est accessible simultan\xe9ment via diff\xe9rents clients :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Les applications 4D distantes utilisant ORDA pour acc\xe9der au datastore principal \xe0 l\u2019aide de la commande ",(0,t.jsx)(s.code,{children:"ds"}),". A noter que l'application 4D distante peut toujours acc\xe9der \xe0 la base de donn\xe9es en mode classique. Ces acc\xe8s sont g\xe9r\xe9s par le ",(0,t.jsx)(s.strong,{children:"serveur d'applications 4D"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["D'autres applications 4D (4D Remote, 4D Server) ouvrant une session sur le datastore distant via la commande ",(0,t.jsx)(s.code,{children:"Open datastore"}),". Ces acc\xe8s sont transmis par le ",(0,t.jsx)(s.strong,{children:"serveur HTTP REST"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Les requ\xeates 4D for iOS pour la mise \xe0 jour des applications iOS. Ces acc\xe8s sont remis par le ",(0,t.jsx)(s.strong,{children:"serveur HTTP"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque vous travaillez avec un datastore distant r\xe9f\xe9renc\xe9 par des appels \xe0 la commande ",(0,t.jsx)(s.code,{children:"Open datastore"}),", la connexion entre les process qui effectuent la requ\xeate et le datastore distant est g\xe9r\xe9e par des sessions."]}),"\n",(0,t.jsx)(s.h2,{id:"Ouverture-des-sessions",children:"Ouverture des sessions"}),"\n",(0,t.jsxs)(s.p,{children:["Lorsqu'une application 4D (c'est-\xe0-dire un process) ouvre un datastore externe \xe0 l'aide de la commande ",(0,t.jsx)(s.code,{children:"Open datastore"}),", une session est cr\xe9\xe9e sur le datastore distant pour g\xe9rer la connexion. Cette session est identifi\xe9e \xe0 l'aide d'un ID de session interne, associ\xe9 au ",(0,t.jsx)(s.code,{children:"localID"})," de l'application 4D. Cette session g\xe8re automatiquement l'acc\xe8s aux donn\xe9es, aux entity selections et aux entit\xe9s."]}),"\n",(0,t.jsxs)(s.p,{children:["Le ",(0,t.jsx)(s.code,{children:"localID"})," est local \xe0 la machine qui se connecte au datastore distant, ce qui signifie :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Que si d'autres process de la m\xeame application doivent acc\xe9der au m\xeame datastore distant, ils peuvent utiliser le m\xeame ",(0,t.jsx)(s.code,{children:"localID"})," et partager alors la m\xeame session."]}),"\n",(0,t.jsxs)(s.li,{children:["Que si un autre process de la m\xeame application ouvre le m\xeame datastore distant, mais avec un autre ",(0,t.jsx)(s.code,{children:"localID"}),", il cr\xe9era une nouvelle session sur le datastore distant."]}),"\n",(0,t.jsxs)(s.li,{children:["Que si un autre poste se connecte au m\xeame datastore distant avec le m\xeame ",(0,t.jsx)(s.code,{children:"localID"}),", il cr\xe9era une autre session avec un autre cookie."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Ces principes sont illustr\xe9s dans les graphiques suivants :"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(291685).A+"",width:"962",height:"719"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Pour les sessions ouvertes par des requ\xeates REST, veuillez consulter la page ",(0,t.jsx)(s.a,{href:"/docs/fr/19/REST/authUsers",children:"Utilisateurs et sessions"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"Visualiser-les-sessions",children:"Visualiser les sessions"}),"\n",(0,t.jsx)(s.p,{children:"Les process qui g\xe8rent les sessions d'acc\xe8s aux datastore apparaissent dans la fen\xeatre d'administration de 4D Server :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'nom : "REST Handler : <nom du process>"'}),"\n",(0,t.jsx)(s.li,{children:"type : type Worker Server HTTP"}),"\n",(0,t.jsx)(s.li,{children:"session : le nom de session est le nom d'utilisateur pass\xe9 \xe0 la commande Open datastore."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Dans l'exemple suivant, deux process sont en cours d'ex\xe9cution pour la m\xeame session :"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(149399).A+"",width:"1402",height:"708"})}),"\n",(0,t.jsx)(s.h2,{id:"Verrouillage-et-transactions",children:"Verrouillage et transactions"}),"\n",(0,t.jsx)(s.p,{children:"Les fonctionnalit\xe9s ORDA relatives au verrouillage d'entit\xe9 et aux transactions sont g\xe9r\xe9es au niveau du process dans les datastore distants, tout comme en mode client/serveur ORDA :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Si un process verrouille une entit\xe9 \xe0 partir d'un datastore distant, l'entit\xe9 est verrouill\xe9e pour tous les autres process, m\xeame lorsque ces process partagent la m\xeame session (voir ",(0,t.jsx)(s.a,{href:"/docs/fr/19/ORDA/entities#entity-locking",children:"Verrouillage d'entit\xe9s"}),"). Si plusieurs entit\xe9s pointant vers le m\xeame enregistrement ont \xe9t\xe9 verrouill\xe9es dans un process, elles doivent toutes \xeatre d\xe9verrouill\xe9es dans le process pour supprimer le verrou. Si un verrou a \xe9t\xe9 mis sur une entit\xe9, il est supprim\xe9 lorsqu'il n'existe plus de r\xe9f\xe9rence \xe0 cette entit\xe9 en m\xe9moire."]}),"\n",(0,t.jsxs)(s.li,{children:["Les transactions peuvent \xeatre lanc\xe9es, valid\xe9es ou annul\xe9es s\xe9par\xe9ment sur chaque datastore distant \xe0 l'aide des m\xe9thodes ",(0,t.jsx)(s.code,{children:"dataStore.startTransaction( )"}),", ",(0,t.jsx)(s.code,{children:"dataStore.cancelTransaction( )"}),", et ",(0,t.jsx)(s.code,{children:"dataStore.validateTransaction( )"}),". Elles n\u2019ont pas d\u2019incidences sur les autres datastore."]}),"\n",(0,t.jsxs)(s.li,{children:["Les commandes classiques du langage 4D (",(0,t.jsx)(s.code,{children:"START TRANSACTION"}),", ",(0,t.jsx)(s.code,{children:"VALIDATE TRANSACTION"}),", ",(0,t.jsx)(s.code,{children:"CANCEL TRANSACTION"}),") s'appliquent uniquement au datastore principal (renvoy\xe9 par ",(0,t.jsx)(s.code,{children:"ds"}),"). Si une entit\xe9 d'un datastore distant est verrouill\xe9e par une transaction dans un process, les autres process ne peuvent pas la mettre \xe0 jour, m\xeame si ces process partagent la m\xeame session."]}),"\n",(0,t.jsxs)(s.li,{children:["Les verrous sur les entit\xe9s sont supprim\xe9s et les transactions sont annul\xe9es :\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"lorsque le process est tu\xe9."}),"\n",(0,t.jsx)(s.li,{children:"quand la session est ferm\xe9e sur le serveur"}),"\n",(0,t.jsx)(s.li,{children:"lorsque la session est arr\xeat\xe9e \xe0 partir de la fen\xeatre d\u2019administration du serveur."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"Fermeture-des-sessions",children:"Fermeture des sessions"}),"\n",(0,t.jsxs)(s.p,{children:["Une session est automatiquement ferm\xe9e par 4D lorsqu'il n'y a pas eu d'activit\xe9 durant son timeout. Le timeout par d\xe9faut est de 60 mn mais cette valeur peut \xeatre param\xe9tr\xe9e \xe0 l'aide du param\xe8tre ",(0,t.jsx)(s.code,{children:"connectionInfo"})," de la commande ",(0,t.jsx)(s.code,{children:"Open datastore"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Si une demande est envoy\xe9e au datastore distant apr\xe8s la fermeture de la session, elle est automatiquement recr\xe9\xe9e si possible (licence disponible, serveur non arr\xeat\xe9, etc.). A noter cependant que le contexte de la session des verrous et des transactions est perdu (voir ci-dessus)."})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var t=n(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var t,i={},d=null,c=null;for(t in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)a.call(s,t)&&!l.hasOwnProperty(t)&&(i[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===i[t]&&(i[t]=s[t]);return{$$typeof:r,type:e,key:d,ref:c,props:i,_owner:o.current}}s.Fragment=i,s.jsx=d,s.jsxs=d},474848:(e,s,n)=>{e.exports=n(221020)},149399:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},291685:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(296540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);