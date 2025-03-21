"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96111"],{644005:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/boolean-array-from-set","title":"BOOLEAN ARRAY FROM SET","description":"BOOLEAN ARRAY FROM SET ( tabBool\xe9en {; ensemble} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/boolean-array-from-set.md","sourceDirName":"commands-legacy","slug":"/commands/boolean-array-from-set","permalink":"/docs/fr/20-R7/commands/boolean-array-from-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fboolean-array-from-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"boolean-array-from-set","title":"BOOLEAN ARRAY FROM SET","slug":"/commands/boolean-array-from-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TO SELECTION","permalink":"/docs/fr/20-R7/commands/array-to-selection"},"next":{"title":"COPY ARRAY","permalink":"/docs/fr/20-R7/commands/copy-array"}}'),r=s("785893"),l=s("250065");let a={id:"boolean-array-from-set",title:"BOOLEAN ARRAY FROM SET",slug:"/commands/boolean-array-from-set",displayed_sidebar:"docs"},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BOOLEAN ARRAY FROM SET"})," ( ",(0,r.jsx)(n.em,{children:"tabBool\xe9en"})," {; ",(0,r.jsx)(n.em,{children:"ensemble"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabBool\xe9en"}),(0,r.jsx)(n.td,{children:"Boolean array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tableau d'appartenance des enregistrements \xe0 l\u2019ensemble"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ensemble"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de l\u2019ensemble ou Ensemble UserSet si ce param\xe8tre est omis"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"BOOLEAN ARRAY FROM SET"})," remplit un tableau de bool\xe9ens indiquant si chaque enregistrement de la table \xe0 laquelle appartient ",(0,r.jsx)(n.em,{children:"ensemble"})," fait ou non partie de l\u2019ensemble."]}),"\n",(0,r.jsx)(n.p,{children:"Les \xe9l\xe9ments du tableau sont ordonn\xe9s en fonction de l\u2019ordre de cr\xe9ation des enregistrements dans la table (num\xe9ros absolus). Si N est le nombre d\u2019enregistrements de la table, l\u2019\xe9l\xe9ment 0 du tableau correspond \xe0 l\u2019enregistrement n\xb0 0, l\u2019\xe9l\xe9ment 1 du tableau correspond \xe0 l\u2019enregistrement n\xb0 1, etc."}),"\n",(0,r.jsx)(n.p,{children:"Chaque \xe9l\xe9ment du tableau est mis \xe0 :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Vrai si l\u2019enregistrement correspondant fait partie de l\u2019ensemble,"}),"\n",(0,r.jsx)(n.li,{children:"Faux si l\u2019enregistrement correspondant ne pas partie de l\u2019ensemble."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Attention, le nombre total d\u2019\xe9l\xe9ments du tableau ",(0,r.jsx)(n.em,{children:"tabBool\xe9en"})," n\u2019est pas significatif. En effet, pour des raisons structurelles, il peut \xeatre diff\xe9rent du nombre d\u2019enregistrements effectivement pr\xe9sents dans la table. Les \xe9ventuels \xe9l\xe9ments suppl\xe9mentaires sont mis \xe0 Faux."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,r.jsx)(n.em,{children:"ensemble"}),", la commande utilisera l\u2019ensemble syst\xe8me UserSet du process courant."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/create-set-from-array",children:"CREATE SET FROM ARRAY"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"646"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var t=s(667294);let r={},l=t.createContext(r);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);