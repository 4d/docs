"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94055"],{950625:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>o,assets:()=>a,toc:()=>m,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/dom-get-parent-xml-element","title":"DOM Get parent XML element","description":"DOM Get parent XML element ( refEl\xe9ment {; nomEl\xe9mentPar {; valeurEl\xe9mentPar}} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-parent-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-parent-xml-element","permalink":"/docs/fr/commands/dom-get-parent-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-parent-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-parent-xml-element","title":"DOM Get parent XML element","slug":"/commands/dom-get-parent-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get next sibling XML element","permalink":"/docs/fr/commands/dom-get-next-sibling-xml-element"},"next":{"title":"DOM Get previous sibling XML element","permalink":"/docs/fr/commands/dom-get-previous-sibling-xml-element"}}'),s=t("785893"),l=t("250065");let d={id:"dom-get-parent-xml-element",title:"DOM Get parent XML element",slug:"/commands/dom-get-parent-xml-element",displayed_sidebar:"docs"},i=void 0,a={},m=[{value:"Description",id:"description",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Get parent XML element"})," ( ",(0,s.jsx)(n.em,{children:"refEl\xe9ment"})," {; ",(0,s.jsx)(n.em,{children:"nomEl\xe9mentPar"})," {; ",(0,s.jsx)(n.em,{children:"valeurEl\xe9mentPar"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refEl\xe9ment"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomEl\xe9mentPar"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nom de l\u2019\xe9l\xe9ment XML parent"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valeurEl\xe9mentPar"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valeur de l\u2019\xe9l\xe9ment XML parent"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de l\u2019\xe9l\xe9ment XML parent"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"DOM Get parent XML element"})," retourne une r\xe9f\xe9rence XML vers le \u201Cparent\u201D de l\u2019\xe9l\xe9ment XML pass\xe9 en r\xe9f\xe9rence dans ",(0,s.jsx)(n.em,{children:"refEl\xe9ment"}),". Cette r\xe9f\xe9rence pourra \xeatre utilis\xe9e avec les autres commandes d\u2019analyse XML."]}),"\n",(0,s.jsxs)(n.p,{children:["Les param\xe8tres ",(0,s.jsx)(n.em,{children:"nomEl\xe9mentPar"})," et ",(0,s.jsx)(n.em,{children:"valeurEl\xe9mentPar"}),", s\u2019ils sont pass\xe9s, re\xe7oivent respectivement le nom et la valeur de l\u2019\xe9l\xe9ment parent."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous utilisez cette commande en passant un \xe9l\xe9ment racine dans ",(0,s.jsx)(n.em,{children:"refEl\xe9ment"}),', la commande retourne la r\xe9f\xe9rence "#document". Le noeud document est le parent d\'un \xe9l\xe9ment racine.',(0,s.jsx)(n.br,{}),'\nSi vous utilisez cette commande sur un noeud document, la commande retourne une r\xe9f\xe9rence nulle ("0000000000000000") et la variable OK prend la valeur 0.']}),"\n",(0,s.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,s.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK prend la valeur 1. Sinon, elle prend la valeur 0."}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/dom-get-first-child-xml-element",children:"DOM Get first child XML element"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/dom-get-last-child-xml-element",children:"DOM Get last child XML element"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/dom-get-root-xml-element",children:"DOM Get Root XML element"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"923"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let s={},l=r.createContext(s);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);