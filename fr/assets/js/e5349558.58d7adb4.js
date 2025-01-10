"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83218"],{906774:function(e,s,n){n.r(s),n.d(s,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/pause-process","title":"PAUSE PROCESS","description":"PAUSE PROCESS ( process )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/pause-process.md","sourceDirName":"commands-legacy","slug":"/commands/pause-process","permalink":"/docs/fr/commands/pause-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpause-process.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pause-process","title":"PAUSE PROCESS","slug":"/commands/pause-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New process","permalink":"/docs/fr/commands/new-process"},"next":{"title":"Process aborted","permalink":"/docs/fr/commands/process-aborted"}}'),t=n("785893"),c=n("250065");let o={id:"pause-process",title:"PAUSE PROCESS",slug:"/commands/pause-process",displayed_sidebar:"docs"},i=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"PAUSE PROCESS"})," ( ",(0,t.jsx)(s.em,{children:"process"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"process"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de process"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"PAUSE PROCESS"})," suspend l'ex\xe9cution de ",(0,t.jsx)(s.em,{children:"process"})," jusqu'\xe0 ce qu'il soit remis en action par la comande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/resume-process",children:"RESUME PROCESS"}),". Pendant ce temps, ",(0,t.jsx)(s.em,{children:"process"})," n'utilise pas de temps machine. Lorsqu'un process est suspendu, il existe toujours en m\xe9moire."]}),"\n",(0,t.jsxs)(s.p,{children:["Si ",(0,t.jsx)(s.em,{children:"process"})," est d\xe9j\xe0 suspendu, ",(0,t.jsx)(s.strong,{children:"PAUSE PROCESS"})," ne fait rien. Si le process est endormi \xe0 l'aide de ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/delay-process",children:"DELAY PROCESS"}),", le process est suspendu. S'il re\xe7oit l'ordre ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/resume-process",children:"RESUME PROCESS"}),", le process redevient actif imm\xe9diatement."]}),"\n",(0,t.jsxs)(s.p,{children:["Lorsqu'un process est suspendu, les fen\xeatres qui lui appartiennent ne sont pas saisissables. Dans ce cas, si vous ne voulez pas d\xe9router l'utilisateur, il faut auparavant cacher le process. Si ",(0,t.jsx)(s.em,{children:"process"})," n'existe pas, cette commande ne fait rien."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Attention :"})," Utilisez ",(0,t.jsx)(s.strong,{children:"PAUSE PROCESS"})," seulement avec les process que vous avez cr\xe9\xe9s. ",(0,t.jsx)(s.strong,{children:"PAUSE PROCESS"})," n'a aucun effet sur le process principal."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Vous ne pouvez pas utiliser cette commande \xe0 partir d'un poste client pour affecter une proc\xe9dure stock\xe9e sur le poste serveur (",(0,t.jsx)(s.em,{children:"process"}),"<0)."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/abort-process-by-id",children:"ABORT PROCESS BY ID"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/delay-process",children:"DELAY PROCESS"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/hide-process",children:"HIDE PROCESS"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/resume-process",children:"RESUME PROCESS"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"319"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var r=n(667294);let t={},c=r.createContext(t);function o(e){let s=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);