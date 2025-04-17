"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1044"],{190587:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/ob-get-type","title":"OB Get type","description":"OB Get type ( objet ; propri\xe9t\xe9 ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-get-type.md","sourceDirName":"commands-legacy","slug":"/commands/ob-get-type","permalink":"/docs/fr/20-R8/commands/ob-get-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-get-type.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-get-type","title":"OB Get type","slug":"/commands/ob-get-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB GET PROPERTY NAMES","permalink":"/docs/fr/20-R8/commands/ob-get-property-names"},"next":{"title":"OB Instance of","permalink":"/docs/fr/20-R8/commands/ob-instance-of"}}'),s=t("785893"),d=t("250065");let i={id:"ob-get-type",title:"OB Get type",slug:"/commands/ob-get-type",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OB Get type"})," ( ",(0,s.jsx)(n.em,{children:"objet"})," ; ",(0,s.jsx)(n.em,{children:"propri\xe9t\xe9"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objet"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objet structur\xe9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom de la propri\xe9t\xe9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Type de valeur de la propri\xe9t\xe9"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"OB Get type"})," retourne le type de la valeur associ\xe9e \xe0 la ",(0,s.jsx)(n.em,{children:"propri\xe9t\xe9"})," de l'",(0,s.jsx)(n.em,{children:"objet"}),".doit avoir \xe9t\xe9 d\xe9fini via la commande ",(0,s.jsx)(n.em,{children:"C_OBJECT"})," ou d\xe9signer un champ objet 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"propri\xe9t\xe9"})," le libell\xe9 de la propri\xe9t\xe9 dont vous souhaitez conna\xeetre le type. Attention, le param\xe8tre ",(0,s.jsx)(n.em,{children:"propri\xe9t\xe9"})," tient compte des majuscules/minuscules."]}),"\n",(0,s.jsxs)(n.p,{children:["La commande retourne un entier long indiquant le type de valeur. Vous pouvez comparer cette valeur aux constantes suivantes du th\xe8me ",(0,s.jsx)(n.em,{children:"Types champs et variables"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is Boolean"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is collection"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is date"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is null"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"255"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is object"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"38"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is real"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is text"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is undefined"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Pour les propri\xe9t\xe9s d'une image, la commande retourne Est un objet."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"On souhaite obtenir le type de valeurs standard :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0OB SET($ref;"nom";"smith";"age";42)\n\xa0$type:=OB Get type($ref;"nom")\xa0//$type retourne 2\n\xa0$type2:=OB Get type($ref;"age")\xa0//$type2 retourne 1\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/ob-get-property-names",children:"OB GET PROPERTY NAMES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/value-type",children:"Value type"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1230"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);