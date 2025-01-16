"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66985"],{865246:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"ORDA/datastores","title":"Datastores distants","description":"Un datastore distant est une r\xe9f\xe9rence, dans une application 4D locale (4D ou 4D Server), \xe0 un datastore stock\xe9 dans une autre application 4D.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ORDA/remoteDatastores.md","sourceDirName":"ORDA","slug":"/ORDA/datastores","permalink":"/docs/fr/20-R7/ORDA/datastores","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"datastores","title":"Datastores distants"},"sidebar":"docs","previous":{"title":"Utiliser le marqueur global","permalink":"/docs/fr/20-R7/ORDA/global-stamp"},"next":{"title":"Privil\xe8ges","permalink":"/docs/fr/20-R7/ORDA/privileges"}}'),r=n("785893"),i=n("250065");let a={id:"datastores",title:"Datastores distants"},o=void 0,l={},d=[{value:"Utiliser des sessions web",id:"utiliser-des-sessions-web",level:2},{value:"Visualiser les sessions",id:"visualiser-les-sessions",level:3},{value:"Fermeture des sessions",id:"fermeture-des-sessions",level:2},{value:"Verrouillage et transactions",id:"verrouillage-et-transactions",level:2}];function c(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Un ",(0,r.jsx)(s.strong,{children:"datastore distant"})," est une r\xe9f\xe9rence, dans une application 4D locale (4D ou 4D Server), \xe0 un ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/ORDA/dsmapping#datastore",children:"datastore"})," stock\xe9 dans une autre application 4D."]}),"\n",(0,r.jsxs)(s.p,{children:["The local 4D application connects to and references the remote datastore through a call to the ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/open-datastore",children:(0,r.jsx)(s.code,{children:"Open datastore"})})," command."]}),"\n",(0,r.jsxs)(s.p,{children:["Sur la machine distante, 4D ouvre une ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/sessions",children:"session"})," pour g\xe9rer les requ\xeates de l'application qui a appel\xe9 ",(0,r.jsx)(s.code,{children:"Open datastore"}),". Les requ\xeates utilisent en interne ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/gettingStarted",children:"l'API REST"}),", ce qui signifie qu'elles peuvent avoir besoin de ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/authUsers",children:"licences disponibles"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"utiliser-des-sessions-web",children:"Utiliser des sessions web"}),"\n",(0,r.jsxs)(s.p,{children:["When you work with a remote datastore referenced through calls to the ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/open-datastore",children:(0,r.jsx)(s.code,{children:"Open datastore"})})," command, the connection with the requesting processes is handled via ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/sessions",children:"web sessions"})," on the remote machine."]}),"\n",(0,r.jsxs)(s.p,{children:["La session web cr\xe9\xe9e sur le datastore distant est identifi\xe9e \xe0 l'aide d'un ID de session interne, associ\xe9 au ",(0,r.jsx)(s.code,{children:"localID"})," du c\xf4t\xe9 de l'application 4D. Cette session g\xe8re automatiquement l'acc\xe8s aux donn\xe9es, aux entity selections et aux entit\xe9s."]}),"\n",(0,r.jsxs)(s.p,{children:["Le ",(0,r.jsx)(s.code,{children:"localID"})," est local \xe0 la machine qui se connecte au datastore distant, ce qui signifie que :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Si d'autres process de la m\xeame application doivent acc\xe9der au m\xeame datastore distant, ils peuvent utiliser le m\xeame ",(0,r.jsx)(s.code,{children:"localID"})," et partager alors la m\xeame session."]}),"\n",(0,r.jsxs)(s.li,{children:["Si un autre process de la m\xeame application ouvre le m\xeame datastore distant, mais avec un autre ",(0,r.jsx)(s.code,{children:"localID"}),", il cr\xe9era une nouvelle session sur le datastore distant."]}),"\n",(0,r.jsxs)(s.li,{children:["Si un autre poste se connecte au m\xeame datastore distant avec le m\xeame ",(0,r.jsx)(s.code,{children:"localID"}),", il cr\xe9era une autre session avec un autre cookie."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Ces principes sont illustr\xe9s dans les graphiques suivants :"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(144136).Z+"",width:"962",height:"719"})}),"\n",(0,r.jsx)(s.h3,{id:"visualiser-les-sessions",children:"Visualiser les sessions"}),"\n",(0,r.jsx)(s.p,{children:"Les process qui g\xe8rent les sessions d'acc\xe8s aux datastore apparaissent dans la fen\xeatre d'administration de 4D Server :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'nom : "REST Handler : <nom du process>"'}),"\n",(0,r.jsx)(s.li,{children:"type : type Worker Server HTTP"}),"\n",(0,r.jsxs)(s.li,{children:["session : le nom de session est le nom d'utilisateur pass\xe9 \xe0 la commande ",(0,r.jsx)(s.code,{children:"Open datastore"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Dans l'exemple suivant, deux process sont en cours d'ex\xe9cution pour la m\xeame session :"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(668827).Z+"",width:"1402",height:"708"})}),"\n",(0,r.jsx)(s.h2,{id:"fermeture-des-sessions",children:"Fermeture des sessions"}),"\n",(0,r.jsxs)(s.p,{children:["Comme d\xe9crit dans le paragraphe ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/WebServer/sessions#session-lifetime",children:"dur\xe9e de vie de la session"}),", une session web est automatiquement ferm\xe9e par 4D lorsqu'il n'y a pas eu d'activit\xe9 pendant une dur\xe9e d\xe9termin\xe9e par son timeout. Le timeout par d\xe9faut est de 60 mn mais cette valeur peut \xeatre param\xe9tr\xe9e \xe0 l'aide du param\xe8tre ",(0,r.jsx)(s.em,{children:"connectionInfo"})," de la commande ",(0,r.jsx)(s.code,{children:"Open datastore"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Si une demande est envoy\xe9e au datastore distant apr\xe8s la fermeture de la session, elle est automatiquement recr\xe9\xe9e si possible (licence disponible, serveur non arr\xeat\xe9, etc.). Cependant, gardez \xe0 l'esprit que le contexte de la session concernant les verrous et les transactions est perdu (voir ci-dessous)."}),"\n",(0,r.jsx)(s.h2,{id:"verrouillage-et-transactions",children:"Verrouillage et transactions"}),"\n",(0,r.jsx)(s.p,{children:"Les fonctionnalit\xe9s ORDA relatives au verrouillage d'entit\xe9 et aux transactions sont g\xe9r\xe9es au niveau du process dans les datastore distants, tout comme en mode client/serveur ORDA :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Si un process verrouille une entit\xe9 \xe0 partir d'un datastore distant, l'entit\xe9 est verrouill\xe9e pour tous les autres process, m\xeame lorsque ces process partagent la m\xeame session (voir ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/ORDA/entities#entity-locking",children:"Verrouillage d'entit\xe9s"}),"). Si plusieurs entit\xe9s pointant vers le m\xeame enregistrement ont \xe9t\xe9 verrouill\xe9es dans un process, elles doivent toutes \xeatre d\xe9verrouill\xe9es dans le process pour supprimer le verrou. Si un verrou a \xe9t\xe9 mis sur une entit\xe9, il est supprim\xe9 lorsqu'il n'existe plus de r\xe9f\xe9rence \xe0 cette entit\xe9 en m\xe9moire."]}),"\n",(0,r.jsxs)(s.li,{children:["Les transactions peuvent \xeatre lanc\xe9es, valid\xe9es ou annul\xe9es s\xe9par\xe9ment sur chaque datastore distant \xe0 l'aide des m\xe9thodes ",(0,r.jsx)(s.code,{children:"dataStore.startTransaction( )"}),", ",(0,r.jsx)(s.code,{children:"dataStore.cancelTransaction( )"}),", et ",(0,r.jsx)(s.code,{children:"dataStore.validateTransaction( )"}),". Elles n\u2019ont pas d\u2019incidences sur les autres datastore."]}),"\n",(0,r.jsxs)(s.li,{children:["Classic 4D language commands (",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/start-transaction",children:(0,r.jsx)(s.code,{children:"START TRANSACTION"})}),", ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/validate-transaction",children:(0,r.jsx)(s.code,{children:"VALIDATE TRANSACTION"})}),", ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/cancel-transaction",children:(0,r.jsx)(s.code,{children:"CANCEL TRANSACTION"})}),") only apply to the main datastore (returned by ",(0,r.jsx)(s.code,{children:"ds"}),").\nSi une entit\xe9 d'un datastore distant est verrouill\xe9e par une transaction dans un process, les autres process ne peuvent pas la mettre \xe0 jour, m\xeame si ces process partagent la m\xeame session."]}),"\n",(0,r.jsxs)(s.li,{children:["Les verrous sur les entit\xe9s sont supprim\xe9s et les transactions sont annul\xe9es :\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"lorsque le process est tu\xe9."}),"\n",(0,r.jsx)(s.li,{children:"quand la session est ferm\xe9e sur le serveur"}),"\n",(0,r.jsx)(s.li,{children:"lorsque la session est arr\xeat\xe9e \xe0 partir de la fen\xeatre d\u2019administration du serveur."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},668827:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},144136:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return a}});var t=n(667294);let r={},i=t.createContext(r);function a(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);