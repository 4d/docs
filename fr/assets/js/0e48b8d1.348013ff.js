"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97495"],{626027:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/dom-get-xml-attribute-by-index","title":"DOM GET XML ATTRIBUTE BY INDEX","description":"DOM GET XML ATTRIBUTE BY INDEX ( refEl\xe9ment ; indexAttribut ; nomAttribut ; valeurAttribut )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-xml-attribute-by-index.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-attribute-by-index","permalink":"/docs/fr/commands/dom-get-xml-attribute-by-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-attribute-by-index.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-attribute-by-index","title":"DOM GET XML ATTRIBUTE BY INDEX","slug":"/commands/dom-get-xml-attribute-by-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get Root XML element","permalink":"/docs/fr/commands/dom-get-root-xml-element"},"next":{"title":"DOM GET XML ATTRIBUTE BY NAME","permalink":"/docs/fr/commands/dom-get-xml-attribute-by-name"}}'),s=n("785893"),d=n("250065");let i={id:"dom-get-xml-attribute-by-index",title:"DOM GET XML ATTRIBUTE BY INDEX",slug:"/commands/dom-get-xml-attribute-by-index",displayed_sidebar:"docs"},l=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"DOM GET XML ATTRIBUTE BY INDEX"})," ( ",(0,s.jsx)(t.em,{children:"refEl\xe9ment"})," ; ",(0,s.jsx)(t.em,{children:"indexAttribut"})," ; ",(0,s.jsx)(t.em,{children:"nomAttribut"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttribut"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"refEl\xe9ment"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"indexAttribut"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Num\xe9ro d\u2019indice de l\u2019attribut"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nomAttribut"}),(0,s.jsx)(t.td,{children:"Variable"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Nom de l\u2019attribut"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"valeurAttribut"}),(0,s.jsx)(t.td,{children:"Variable"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Valeur de l\u2019attribut"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"DOM GET XML ATTRIBUTE BY INDEX"})," permet de conna\xeetre le nom ainsi que la valeur d\u2019un attribut d\xe9sign\xe9 par son num\xe9ro d\u2019indice."]}),"\n",(0,s.jsxs)(t.p,{children:["Passez dans ",(0,s.jsx)(t.em,{children:"refEl\xe9ment"})," la r\xe9f\xe9rence d\u2019un \xe9l\xe9ment XML et dans ",(0,s.jsx)(t.em,{children:"indexAttribut"})," le num\xe9ro d\u2019indice de l\u2019attribut dont vous voulez conna\xeetre le nom. Le nom est retourn\xe9 dans le param\xe8tre ",(0,s.jsx)(t.em,{children:"nomAttribut"})," et sa valeur est retourn\xe9e dans le param\xe8tre ",(0,s.jsx)(t.em,{children:"valeurAttribut"}),". 4D tentera de convertir la valeur obtenue dans le type de la variable pass\xe9e en param\xe8tre. Si le type de la variable n'est pas d\xe9fini, la valeur est retourn\xe9e, par d\xe9faut, en type texte."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note :"})," Le num\xe9ro d\u2019indice ne correspond pas \xe0 l\u2019emplacement de l\u2019attribut dans le fichier XML affich\xe9 sous forme de texte. En XML, l\u2019indice d\u2019un attribut indique sa position parmi les attributs class\xe9s par ordre alphab\xe9tique (en fonction de leur nom). Pour une illustration de ce principe, reportez-vous \xe0 l\u2019exemple de la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/dom-count-xml-attributes",children:"DOM Count XML attributes"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Si la valeur pass\xe9e dans ",(0,s.jsx)(t.em,{children:"indexAttribut"})," est sup\xe9rieure au nombre d\u2019attributs pr\xe9sents dans l\u2019\xe9l\xe9ment XML, une erreur est retourn\xe9e."]}),"\n",(0,s.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(t.p,{children:["Reportez-vous \xe0 l\u2019exemple de la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/dom-count-xml-attributes",children:"DOM Count XML attributes"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,s.jsx)(t.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK prend la valeur 1. Si une erreur se produit, elle prend la valeur 0."}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/commands/dom-get-xml-attribute-by-name",children:"DOM GET XML ATTRIBUTE BY NAME"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"})]}),"\n",(0,s.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(t.td,{children:"729"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifie les variables"}),(0,s.jsx)(t.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var r=n(667294);let s={},d=r.createContext(s);function i(e){let t=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);