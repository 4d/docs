"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78446"],{444235:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"commands-legacy/receive-buffer","title":"RECEIVE BUFFER","description":"RECEIVE BUFFER ( varR\xe9ception )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/receive-buffer.md","sourceDirName":"commands-legacy","slug":"/commands/receive-buffer","permalink":"/docs/fr/commands/receive-buffer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-buffer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"receive-buffer","title":"RECEIVE BUFFER","slug":"/commands/receive-buffer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET SERIAL PORT MAPPING","permalink":"/docs/fr/commands/get-serial-port-mapping"},"next":{"title":"RECEIVE PACKET","permalink":"/docs/fr/commands/receive-packet"}}'),t=n("785893"),i=n("250065");let c={id:"receive-buffer",title:"RECEIVE BUFFER",slug:"/commands/receive-buffer",displayed_sidebar:"docs"},o=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"RECEIVE BUFFER"})," ( ",(0,t.jsx)(r.em,{children:"varR\xe9ception"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"varR\xe9ception"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Variable devant recevoir les donn\xe9es"})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["La commande ",(0,t.jsx)(r.strong,{children:"RECEIVE BUFFER"})," lit les donn\xe9es du port s\xe9rie pr\xe9alablement ouvert par la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"}),". Le port s\xe9rie comporte un buffer qui se remplit de caract\xe8res jusqu'\xe0 ce qu'une commande les charge. ",(0,t.jsx)(r.strong,{children:"RECEIVE BUFFER"})," r\xe9cup\xe8re les caract\xe8res pr\xe9sents dans le buffer, les place dans la variable ",(0,t.jsx)(r.em,{children:"varR\xe9ception"})," puis vide le buffer. S'il n'y a pas de caract\xe8res dans le buffer, la variable ",(0,t.jsx)(r.em,{children:"varR\xe9ception"})," est vide."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Sous Windows"}),(0,t.jsx)(r.br,{}),"\nLe buffer du port s\xe9rie sous Windows a une capacit\xe9 limit\xe9e \xe0 10 Ko. Cela signifie que le buffer peut \xeatre satur\xe9. Lorsqu'il est plein et que de nouveaux caract\xe8res sont re\xe7us, ils remplacent les plus anciens caract\xe8res. Les anciens caract\xe8res sont perdus ; par cons\xe9quent, il est important que le buffer soit lu rapidement lorsque des nouvelles donn\xe9es sont re\xe7ues."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Sous Mac OS"}),(0,t.jsx)(r.br,{}),"\nLe buffer du port s\xe9rie sous Mac OS X a une capacit\xe9 en principe illimit\xe9e (elle d\xe9pend de la m\xe9moire disponible). Si le buffer est satur\xe9 et que de nouveaux caract\xe8res sont re\xe7us, ils remplacent les plus anciens caract\xe8res. Les anciens caract\xe8res sont perdus ; par cons\xe9quent, il est important que le buffer soit lu rapidement lorsque des nouvelles donn\xe9es sont re\xe7ues."]}),"\n",(0,t.jsxs)(r.p,{children:["La commande ",(0,t.jsx)(r.strong,{children:"RECEIVE BUFFER"})," est diff\xe9rente de ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"})," dans la mesure o\xf9 elle r\xe9cup\xe8re tout ce qui se trouve dans le buffer et le retourne imm\xe9diatement. ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"}),", pour sa part, attend de r\xe9cup\xe9rer un caract\xe8re sp\xe9cifique ou un certain nombre de caract\xe8res."]}),"\n",(0,t.jsxs)(r.p,{children:["Pendant l'ex\xe9cution d'un ",(0,t.jsx)(r.strong,{children:"RECEIVE BUFFER"}),", l'utilisateur peut interrompre l'op\xe9ration en appuyant sur les touches ",(0,t.jsx)(r.strong,{children:"Ctrl"}),"+",(0,t.jsx)(r.strong,{children:"Alt"}),"+",(0,t.jsx)(r.strong,{children:"Maj"})," (sous Windows) ou ",(0,t.jsx)(r.strong,{children:"Commande"}),"+",(0,t.jsx)(r.strong,{children:"Option"}),"+",(0,t.jsx)(r.strong,{children:"Maj"})," (sous Mac OS). Cette interruption g\xe9n\xe8re une erreur -9994 que vous pouvez intercepter \xe0 l'aide d'une m\xe9thode install\xe9e par la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(r.p,{children:["La m\xe9thode projet ECOUTER PORT S\xc9RIE utilise ",(0,t.jsx)(r.strong,{children:"RECEIVE BUFFER"})," pour r\xe9cup\xe9rer du texte depuis le port s\xe9rie et l'accumuler dans une variable interprocess :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// ECOUTER PORT S\xc9RIE\n\xa0\xa0// Ouvrir le port s\xe9rie\n\xa0SET CHANNEL(201;Speed 9600+Data bits 8+Stop bits one+Parity none)\n\xa0\u25CAIP_Ecouter_Port_S\xe9rie:=True\n\xa0While(\u25CAIP_Ecouter_Port_S\xe9rie)\n\xa0\xa0\xa0\xa0RECEIVE BUFFER($vtBuffer)\n\xa0\xa0\xa0\xa0If((Length($vtBuffer)+Length(\u25CAvtBuffer))>MAXLARGTEXTE)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u25CAvtBuffer:=""\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\u25CAvtBuffer:=\u25CAvtBuffer+$Buffer\n\xa0End while\n'})}),"\n",(0,t.jsxs)(r.p,{children:["A ce stade, tout autre process peut lire la variable interprocess ",(0,t.jsx)(r.em,{children:"\u25CAvtBuffer"})," pour exploiter les donn\xe9es en provenance du port s\xe9rie."]}),"\n",(0,t.jsx)(r.p,{children:"Pour cesser d'\xe9couter le port s\xe9rie, ex\xe9cutez simplement la m\xe9thode suivante :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// Fin de l'\xe9coute du port s\xe9rie\n\xa0\u25CAIP_Ecouter_Port_S\xe9rie:=False\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Notez que l'acc\xe8s \xe0 la variable interprocess ",(0,t.jsx)(r.em,{children:"\u25CAvtBuffer"})," doit \xeatre prot\xe9g\xe9 par un s\xe9maphore, de mani\xe8re \xe0 ce que les process n'entrent pas en conflit (reportez-vous \xe0 la description de la fonction ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/semaphore",children:"Semaphore"})," pour plus d'informations)."]}),"\n",(0,t.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/semaphore",children:"Semaphore"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/use-character-set",children:"USE CHARACTER SET"})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return c}});var s=n(667294);let t={},i=s.createContext(t);function c(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);