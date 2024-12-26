"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11432"],{611248:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>l,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>t});var d=JSON.parse('{"id":"commands-legacy/delete-index","title":"DELETE INDEX","description":"DELETE INDEX ( ptrChp\xa0|\xa0nomIndex {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-index.md","sourceDirName":"commands-legacy","slug":"/commands/delete-index","permalink":"/docs/fr/commands/delete-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-index.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-index","title":"DELETE INDEX","slug":"/commands/delete-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE INDEX","permalink":"/docs/fr/commands/create-index"},"next":{"title":"EXPORT STRUCTURE","permalink":"/docs/fr/commands/export-structure"}}'),i=s("785893"),r=s("250065");let t={id:"delete-index",title:"DELETE INDEX",slug:"/commands/delete-index",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Note pour le d\xe9ploiement",id:"note-pour-le-d\xe9ploiement",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DELETE INDEX"})," ( ptrChp\xa0|\xa0nomIndex {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ptrChp\xa0|\xa0nomIndex"}),(0,i.jsx)(n.td,{children:"Pointeur, Cha\xeene"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Pointeur vers le champ duquel supprimer les index ou Nom de l\u2019index \xe0 supprimer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si pass\xe9 = op\xe9ration asynchrone"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"DELETE INDEX"})," permet de supprimer un ou plusieurs index existant dans la base. Vous pouvez passer en param\xe8tre soit un pointeur vers un champ, soit un nom d\u2019index :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si vous passez un pointeur vers un champ (",(0,i.jsx)(n.em,{children:"ptrChp"}),"), tous les index associ\xe9s au champ seront supprim\xe9s. Il peut s\u2019agir d\u2019index de mots-cl\xe9s ou d\u2019index standard. En revanche, si le champ est inclus dans un ou plusieurs index composite(s), ils ne sont pas supprim\xe9s (vous devez passer un nom d'index)."]}),"\n",(0,i.jsxs)(n.li,{children:["Si vous passez nom d\u2019index (",(0,i.jsx)(n.em,{children:"nomIndex"}),"), seul l\u2019index d\xe9sign\xe9 sera supprim\xe9. Il peut s\u2019agir d\u2019index de mots-cl\xe9s, d\u2019index standard ou d'index composites."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,i.jsx)(n.em,{children:"*"}),", lorsqu\u2019il est pass\xe9, permet d\u2019effectuer la d\xe9sindexation en mode asynchrone. Dans ce mode, la m\xe9thode d\u2019origine poursuit son ex\xe9cution apr\xe8s l\u2019appel de la commande, que la suppression d\u2019index soit termin\xe9e ou non."]}),"\n",(0,i.jsxs)(n.p,{children:["S\u2019il n\u2019existe pas d\u2019index correspondant \xe0 ",(0,i.jsx)(n.em,{children:"ptrChp"})," ou \xe0 ",(0,i.jsx)(n.em,{children:"nomIndex"}),", la commande ne fait rien."]}),"\n",(0,i.jsx)(n.h4,{id:"note-pour-le-d\xe9ploiement",children:"Note pour le d\xe9ploiement"}),"\n",(0,i.jsx)(n.p,{children:"\xc9tant donn\xe9 que cette commande modifie la structure de la base de donn\xe9es, elle ne peut pas \xeatre utilis\xe9e dans une application packag\xe9e en lecture seule (fichier .4dc install\xe9 dans le dossier Program Files ou fichier .4dz)."}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Cet exemple illustre les deux syntaxes de la commande :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Suppression de tous les index li\xe9s au champ Nom\n\xa0DELETE INDEX(->[Clients]Nom)\n\xa0\xa0//Suppression de l\u2019index nomm\xe9 \u201CCPVille\u201D\n\xa0DELETE INDEX("CPVille")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/create-index",children:"CREATE INDEX"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/pause-indexes",children:"PAUSE INDEXES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-index",children:"SET INDEX"})]}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"967"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var d=s(667294);let i={},r=d.createContext(i);function t(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);