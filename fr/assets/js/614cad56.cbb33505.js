"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28182"],{367203:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/is-in-set","title":"Is in set","description":"Is in set ( ensemble ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-in-set.md","sourceDirName":"commands-legacy","slug":"/commands/is-in-set","permalink":"/docs/fr/commands/is-in-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-in-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-in-set","title":"Is in set","slug":"/commands/is-in-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INTERSECTION","permalink":"/docs/fr/commands/intersection"},"next":{"title":"LOAD SET","permalink":"/docs/fr/commands/load-set"}}'),r=s("785893"),i=s("250065");let d={id:"is-in-set",title:"Is in set",slug:"/commands/is-in-set",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Is in set"})," ( ",(0,r.jsx)(n.em,{children:"ensemble"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ensemble"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de l'ensemble \xe0 tester"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"L'enregistrement courant est dans l'ensemble (Vrai) ou l'enregistrement courant n'est pas dans l'ensemble (Faux)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Is in set"})," teste si l'enregistrement courant de la table est inclus dans ",(0,r.jsx)(n.em,{children:"ensemble"}),". La fonction ",(0,r.jsx)(n.strong,{children:"Is in set"})," retourne Vrai si l'enregistrement courant de la table est dans ",(0,r.jsx)(n.em,{children:"ensemble"}),", et retourne Faux si l'enregistrement courant de la table n'est pas dans ",(0,r.jsx)(n.em,{children:"ensemble"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant est la m\xe9thode objet d'un bouton testant si l'enregistrement courant est inclus dans l'ensemble des meilleurs clients :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0If(Is in set("Meilleurs"))\n\xa0\xa0\xa0\xa0ALERT("C\'est un de nos meilleurs clients.")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Ce n\'est pas un de nos meilleurs clients.")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/add-to-set",children:"ADD TO SET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/remove-from-set",children:"REMOVE FROM SET"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"273"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);