"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34189"],{295760:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>m,assets:()=>l,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/dom-set-xml-declaration","title":"DOM SET XML DECLARATION","description":"DOM SET XML DECLARATION ( refEl\xe9ment ; encodage {; autonome {; indentation}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-set-xml-declaration.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-declaration","permalink":"/docs/fr/commands/dom-set-xml-declaration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-declaration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-set-xml-declaration","title":"DOM SET XML DECLARATION","slug":"/commands/dom-set-xml-declaration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM SET XML ATTRIBUTE","permalink":"/docs/fr/commands/dom-set-xml-attribute"},"next":{"title":"DOM SET XML ELEMENT NAME","permalink":"/docs/fr/commands/dom-set-xml-element-name"}}'),r=s("785893"),d=s("250065");let i={id:"dom-set-xml-declaration",title:"DOM SET XML DECLARATION",slug:"/commands/dom-set-xml-declaration",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM SET XML DECLARATION"})," ( ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"})," ; ",(0,r.jsx)(n.em,{children:"encodage"})," {; ",(0,r.jsx)(n.em,{children:"autonome"})," {; ",(0,r.jsx)(n.em,{children:"indentation"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refEl\xe9ment"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodage"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Jeu de caract\xe8res du document XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"autonome"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Vrai=le document est autonome Faux (d\xe9faut)=le document n\u2019est pas autonome"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"indentation"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"*** Obsol\xe8te, ne plus utiliser ***"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"DOM SET XML DECLARATION"})," permet de d\xe9finir diverses options qui seront utilis\xe9e pour la cr\xe9ation de l\u2019arbre XML d\xe9sign\xe9 par ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"}),". Ces options concernent l\u2019encodage et l\u2019attribut autonome (standalone) de l\u2019arbre :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"encodage"})," : indique le jeu de caract\xe8res employ\xe9. Par d\xe9faut (si la commande n\u2019est pas appel\xe9e), le jeu de caract\xe8res UTF-8 (Unicode compress\xe9) est utilis\xe9.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Note :"})," Si vous passez un jeu de caract\xe8res non pris en charge par les commandes XML de 4D, l'UTF-8 sera utilis\xe9. Reportez-vous au paragraphe ",(0,r.jsx)(n.em,{children:"Jeux de caract\xe8res"})," pour conna\xeetre la liste des jeux de caract\xe8res pris en charge (l'UTF-8 est toutefois recommand\xe9 dans la plupart des cas)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"autonome"})," : indique si l\u2019arbre est autonome (Vrai) ou s\u2019il d\xe9pend, pour son fonctionnement, de ressources externes (Faux). Par d\xe9faut (si la commande n\u2019est pas appel\xe9e ou si le param\xe8tre est omis), l\u2019arbre n\u2019est pas autonome."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," Le param\xe8tre ",(0,r.jsx)(n.em,{children:"indentation"})," est conserv\xe9 pour des raisons de compatibilit\xe9 avec les versions pr\xe9c\xe9dentes de 4D mais son usage est d\xe9conseill\xe9 \xe0 compter de 4D v12. D\xe9sormais, pour d\xe9finir l\u2019indentation du document, il est recommand\xe9 d\u2019utiliser la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Cet exemple d\xe9finit l\u2019encodage et l\u2019option standalone de l\u2019\xe9l\xe9ment ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0DOM SET XML DECLARATION(refEl\xe9ment;"UTF-16";True)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-create-xml-ref",children:"DOM Create XML Ref"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/xml-set-options",children:"XML SET OPTIONS"})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);