"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91519],{413220:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(474848),t=n(28453);const i={id:"post-outside-call",title:"POST OUTSIDE CALL",slug:"/commands/post-outside-call",displayed_sidebar:"docs"},o=void 0,a={id:"commands-legacy/post-outside-call",title:"POST OUTSIDE CALL",description:"POST OUTSIDE CALL ( process )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/post-outside-call.md",sourceDirName:"commands-legacy",slug:"/commands/post-outside-call",permalink:"/docs/fr/commands/post-outside-call",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-outside-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"post-outside-call",title:"POST OUTSIDE CALL",slug:"/commands/post-outside-call",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Outside call",permalink:"/docs/fr/commands/outside-call"},next:{title:"Right click",permalink:"/docs/fr/commands/right-click"}},c={},l=[{value:"Note de compatibilit\xe9",id:"note-de-compatibilit\xe9",level:4},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function d(e){const s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," ( ",(0,r.jsx)(s.em,{children:"process"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"process"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Num\xe9ro du process"})]})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(s.h4,{id:"note-de-compatibilit\xe9",children:"Note de compatibilit\xe9"}),"\n",(0,r.jsxs)(s.p,{children:["Cette commande \xe9tait nomm\xe9e ",(0,r.jsx)(s.strong,{children:"CALL PROCESS"})," dans les versions pr\xe9c\xe9dentes de 4D."]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," appelle le formulaire affich\xe9 dans la fen\xeatre au premier plan de ",(0,r.jsx)(s.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Important :"})," ",(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," ne fonctionne qu'avec des process tournant sur la m\xeame machine."]}),"\n",(0,r.jsx)(s.p,{children:"Si vous appelez un process qui n'existe pas, la commande ne fait rien."}),"\n",(0,r.jsxs)(s.p,{children:["Si ",(0,r.jsx)(s.em,{children:"process"})," (le process appel\xe9) n'a aucune fen\xeatre ou si aucun formulaire n'est affich\xe9, rien ne se passe. Le formulaire affich\xe9 dans le process appel\xe9 re\xe7oit un \xe9v\xe9nement On Outside Call. Cet \xe9v\xe9nement doit avoir \xe9t\xe9 s\xe9lectionn\xe9 pour le formulaire dans la fen\xeatre des ",(0,r.jsx)(s.strong,{children:"propri\xe9t\xe9s de formulaire"})," en mode D\xe9veloppement, et vous devez le traiter dans la m\xe9thode formulaire. Si l'\xe9v\xe9nement n'est pas s\xe9lectionn\xe9 ou g\xe9r\xe9 dans la m\xe9thode formulaire, la commande ne fait rien."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," La r\xe9ception de l'\xe9v\xe9nement On Outside Call dans un formulaire entr\xe9e provoque le changement du contexte de saisie du formulaire. En particulier, si un champ \xe9tait en cours de modification, l'\xe9v\xe9nement formulaire On Data Change est g\xe9n\xe9r\xe9."]}),"\n",(0,r.jsxs)(s.p,{children:["Le process appelant (dans lequel la commande ",(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," est ex\xe9cut\xe9e) n'attend pas : ",(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," a un effet imm\xe9diat. Il est de votre ressort d'\xe9crire, si n\xe9cessaire, une boucle d'attente pour traiter une \xe9ventuelle r\xe9ponse du process appel\xe9 \xe0 l'aide des variables interprocess ou des variables process (r\xe9serv\xe9es \xe0 cette utilisation) pouvant \xeatre lues et \xe9crites entre les deux process avec les commandes ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-process-variable",children:"GET PROCESS VARIABLE"})," et ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-process-variable",children:"SET PROCESS VARIABLE"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Si vous voulez \xe9tablir une communication entre des process qui n'affichent pas de formulaires, utilisez les commandes ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-process-variable",children:"GET PROCESS VARIABLE"})," et ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-process-variable",children:"SET PROCESS VARIABLE"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," accepte la syntaxe alternative ",(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"}),"(-1). Pour ne pas ralentir l'ex\xe9cution d'une m\xe9thode, 4D ne redessine pas les variables interprocess \xe0 chaque fois qu'elles sont modifi\xe9es. Si vous passez -1 au lieu du num\xe9ro du process dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"process"})," de la commande ",(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"}),", toutes les variables interprocess affich\xe9es dans toutes les fen\xeatres de tous les process seront mises \xe0 jour et redessin\xe9es."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(s.p,{children:["Reportez-vous \xe0 l'exemple de la section ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/semaphore",children:"Semaphore"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-process-variable",children:"SET PROCESS VARIABLE"})]})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var r=n(296540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);