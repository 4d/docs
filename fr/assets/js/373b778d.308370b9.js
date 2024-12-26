"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48438"],{97466:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/process-state","title":"Process state","description":"Process state ( process ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/process-state.md","sourceDirName":"commands-legacy","slug":"/commands/process-state","permalink":"/docs/fr/commands/process-state","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprocess-state.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-state","title":"Process state","slug":"/commands/process-state","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process number","permalink":"/docs/fr/commands/process-number"},"next":{"title":"REGISTER CLIENT","permalink":"/docs/fr/commands/register-client"}}'),r=s("785893"),d=s("250065");let c={id:"process-state",title:"Process state",slug:"/commands/process-state",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Process state"})," ( ",(0,r.jsx)(n.em,{children:"process"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro du process"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Statut du process"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Process state"})," retourne le statut du process dont le num\xe9ro est pass\xe9 dans ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Le r\xe9sultat de la fonction peut \xeatre l'une des valeurs des constantes pr\xe9d\xe9finies suivantes (th\xe8me ",(0,r.jsx)(n.em,{children:"Statut du process"}),") :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"_o_Hidden modal dialog"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Compatibilit\xe9:"})," Ce statut du process n'existe plus \xe0 partir de 4D v16. Un statut \xe9quivalent est retourn\xe9 par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/process-info",children:"Process info"})," lorsque ",(0,r.jsx)(n.em,{children:"procStatut"}),"=Waiting for user event et ",(0,r.jsx)(n.em,{children:"procMode"}),"=Faux.",(0,r.jsx)(n.br,{})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Aborted"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Delayed"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Does not exist"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-100"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Executing"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Paused"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Waiting for input output"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Waiting for internal flag"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Waiting for user event"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si le process n'existe pas (ce qui signifie le num\xe9ro que vous avez pass\xe9 est hors de l'intervalle de 1 \xe0 ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/count-tasks",children:"Count tasks"}),"), ",(0,r.jsx)(n.strong,{children:"Process state"})," retourne Does not exist (-100)."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["L'exemple suivant retourne le nom et le num\xe9ro de r\xe9f\xe9rence de chaque process dans les tableaux ",(0,r.jsx)(n.em,{children:"asProcName"})," et ",(0,r.jsx)(n.em,{children:"aiProcNum"}),". La m\xe9thode teste si le process a \xe9t\xe9 d\xe9truit. Dans ce cas, le nom et le num\xe9ro du process ne sont pas ajout\xe9s dans le tableau :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$vlNbTasks:=Count tasks\n\xa0ARRAY TEXT(asProcName;$vlNbTasks)\n\xa0ARRAY INTEGER(aiProcNum;$vlNbTasks)\n\xa0$vlActualCount:=0\n\xa0For($vlProcess;1;$vlNbTasks)\n\xa0\xa0\xa0\xa0If(Process state($vlProcess)>=Executing)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlActualCount:=$vlActualCount+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PROCESS PROPERTIES($vlProcess;asProcName{$vlActualCount};$vlState;$vlTime)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0aiProcNum{$vlActualCount}:=$vlProcess\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0\xa0// Eliminer les \xe9l\xe9ments superflus\n\xa0ARRAY TEXT(asProcName;$vlActualCount)\n\xa0ARRAY INTEGER(aiProcNum;$vlActualCount)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/count-tasks",children:"Count tasks"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/process-info",children:"Process info"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"330"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var t=s(667294);let r={},d=t.createContext(r);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);