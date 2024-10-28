"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69344],{165038:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=s(474848),o=s(28453);const t={id:"kill-worker",title:"KILL WORKER",slug:"/commands/kill-worker",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/kill-worker",title:"KILL WORKER",description:"KILL WORKER {( process )}",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/kill-worker.md",sourceDirName:"commands-legacy",slug:"/commands/kill-worker",permalink:"/docs/fr/commands/kill-worker",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fkill-worker.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"kill-worker",title:"KILL WORKER",slug:"/commands/kill-worker",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GET PROCESS VARIABLE",permalink:"/docs/fr/commands/get-process-variable"},next:{title:"New signal",permalink:"/docs/fr/commands/new-signal"}},l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function d(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"KILL WORKER"})," {( ",(0,n.jsx)(r.em,{children:"process"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Param\xe8tre"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"process"}),(0,n.jsx)(r.td,{children:"Text, Integer"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Nom ou num\xe9ro du process worker \xe0 tuer (process courant si omis)"})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["La commande ",(0,n.jsx)(r.strong,{children:"KILL WORKER"})," envoie un message au process worker dont vous avez pass\xe9 le nom ou le num\xe9ro dans ",(0,n.jsx)(r.em,{children:"process"}),", lui demandant d'ignorer tous les messages en attente (s'il y a) et de terminer son ex\xe9cution \xe0 l'issue de la t\xe2che en cours."]}),"\n",(0,n.jsxs)(r.p,{children:["Cette commande ne peut \xeatre utilis\xe9e qu'avec des process workers. Pour plus d'informations, reportez-vous \xe0 la section ",(0,n.jsx)(r.em,{children:"A propos des workers"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Dans le param\xe8tre ",(0,n.jsx)(r.em,{children:"process"}),", vous pouvez passer soit le nom soit le num\xe9ro du process worker que vous voulez tuer. Si aucun process worker avec le nom ou le num\xe9ro sp\xe9cifi\xe9 existe, ",(0,n.jsx)(r.strong,{children:"KILL WORKER"})," ne fait rien.",(0,n.jsx)(r.br,{}),"\nLorsque le param\xe8tre ",(0,n.jsx)(r.em,{children:"process"})," est omis, ",(0,n.jsx)(r.strong,{children:"KILL WORKER"})," s'applique au process worker courant et \xe9quivaut donc \xe0 ",(0,n.jsxs)(r.em,{children:[(0,n.jsx)(r.em,{children:"KILL WORKER"}),"(Numero du process courant)"]}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Lorsque la commande est appliqu\xe9e \xe0 un worker qui n\u2019a pas \xe9t\xe9 cr\xe9\xe9 explicitement par la commande ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/call-worker",children:"CALL WORKER"})," (par exemple, le process worker principal de l'application), elle vide uniquement sa bo\xeete aux lettres."]}),"\n",(0,n.jsxs)(r.p,{children:["Si la commande ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/call-worker",children:"CALL WORKER"})," est appel\xe9e pour envoyer un message \xe0 un worker qui vient juste d'\xeatre tu\xe9 par ",(0,n.jsx)(r.strong,{children:"KILL WORKER"}),", un nouveau process est d\xe9marr\xe9. Pour \xeatre s\xfbr qu'il y a un seul process lanc\xe9 \xe0 la fois pour un worker, le nouveau process attendra que que le pr\xe9c\xe9dent soit effectivement termin\xe9. A noter cependant que si la commande ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/call-worker",children:"CALL WORKER"})," est appel\xe9e depuis un worker pour qu'il s'envoie lui-m\xeame un message alors qu'il vient juste d'\xeatre tu\xe9 par ",(0,n.jsx)(r.strong,{children:"KILL WORKER"}),", la commande ne fait rien."]}),"\n",(0,n.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsx)(r.p,{children:"Le code suivant (ex\xe9cut\xe9 depuis un formulaire, par exemple) d\xe9clenche l\u2019arr\xeat d'un process worker :"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0CALL WORKER(vNomWorker;"leWorker";"fin")\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Dans la m\xe9thode du process worker (",(0,n.jsx)(r.em,{children:"leWorker"}),"), vous ajoutez du code pour g\xe9rer cette situation :"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0//m\xe9thode leWorker\n\xa0var $1 : Text\xa0//param\xe8tre\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($1="appel")\xa0//on appelle le worker\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//faire quelque chose\n\xa0\xa0\xa0\xa0:($1="fin")\xa0//on demande au worker de terminer son ex\xe9cution\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0KILL WORKER\n\xa0End case\n'})}),"\n",(0,n.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"A propos des workers"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/fr/commands/call-worker",children:"CALL WORKER"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/fr/commands/current-process-name",children:"Current process name"})]})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var n=s(296540);const o={},t=n.createContext(o);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);