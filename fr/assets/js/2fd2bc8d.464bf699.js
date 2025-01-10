"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20144"],{634594:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/last-record","title":"LAST RECORD","description":"LAST RECORD {( laTable )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/last-record.md","sourceDirName":"commands-legacy","slug":"/commands/last-record","permalink":"/docs/fr/commands/last-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"last-record","title":"LAST RECORD","slug":"/commands/last-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HIGHLIGHT RECORDS","permalink":"/docs/fr/commands/highlight-records"},"next":{"title":"MODIFY SELECTION","permalink":"/docs/fr/commands/modify-selection"}}'),t=r("785893"),d=r("250065");let i={id:"last-record",title:"LAST RECORD",slug:"/commands/last-record",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LAST RECORD"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table de laquelle vous voulez aller au dernier enregistrement ou Table par d\xe9faut si ce param\xe8tre est omis"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LAST RECORD"})," d\xe9signe le dernier enregistrement de la s\xe9lection de ",(0,t.jsx)(n.em,{children:"laTable"})," comme enregistrement courant et le charge en m\xe9moire. Si la s\xe9lection est vide ou si l'enregistrement courant est d\xe9j\xe0 le dernier de la s\xe9lection, ",(0,t.jsx)(n.strong,{children:"LAST RECORD"})," ne fait rien."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant d\xe9signe le dernier enregistrement de la table [Contacts] comme enregistrement courant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0LAST RECORD([Contacts])\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/before-selection",children:"Before selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/end-selection",children:"End selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/first-record",children:"FIRST RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/next-record",children:"NEXT RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/previous-record",children:"PREVIOUS RECORD"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"200"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,t.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);