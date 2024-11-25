"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73661"],{891254:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/ob-get-array","title":"OB GET ARRAY","description":"OB GET ARRAY ( objet ; propri\xe9t\xe9 ; tableau )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-get-array.md","sourceDirName":"commands-legacy","slug":"/commands/ob-get-array","permalink":"/docs/fr/commands/ob-get-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-get-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-get-array","title":"OB GET ARRAY","slug":"/commands/ob-get-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Get","permalink":"/docs/fr/commands/ob-get"},"next":{"title":"OB GET PROPERTY NAMES","permalink":"/docs/fr/commands/ob-get-property-names"}}'),s=r("785893"),a=r("250065");let i={id:"ob-get-array",title:"OB GET ARRAY",slug:"/commands/ob-get-array",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OB GET ARRAY"})," ( ",(0,s.jsx)(n.em,{children:"objet"})," ; ",(0,s.jsx)(n.em,{children:"propri\xe9t\xe9"})," ; ",(0,s.jsx)(n.em,{children:"tableau"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objet"}),(0,s.jsx)(n.td,{children:"Object, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objet structur\xe9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom de la propri\xe9t\xe9 \xe0 lire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableau"}),(0,s.jsx)(n.td,{children:"Text array, Real array, Boolean array, Object array, Pointer array, Integer array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Tableau valeur de la propri\xe9t\xe9"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"OB GET ARRAY"})," r\xe9cup\xe8re dans ",(0,s.jsx)(n.em,{children:"tableau"})," le tableau de valeurs stock\xe9 dans la ",(0,s.jsx)(n.em,{children:"propri\xe9t\xe9"})," de l\u2019objet de langage d\xe9sign\xe9 par le param\xe8tre ",(0,s.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"objet"})," doit avoir \xe9t\xe9 d\xe9fini via la commande ",(0,s.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," ou d\xe9signer un champ objet 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"propri\xe9t\xe9"})," le libell\xe9 de la propri\xe9t\xe9 \xe0 lire. Attention, le param\xe8tre ",(0,s.jsx)(n.em,{children:"propri\xe9t\xe9"})," tient compte des majuscules/minuscules."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsxs)(n.p,{children:["Soit le tableau objet d\xe9fini dans l\u2019exemple de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/ob-set-array",children:"OB SET ARRAY"})," :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(723881).Z+"",width:"598",height:"136"})}),"\n",(0,s.jsx)(n.p,{children:"On souhaite r\xe9cup\xe9rer ces valeurs :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY OBJECT($result;0)\n\xa0OB GET ARRAY($Enfants;"Enfants";$result)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(178746).Z+"",width:"309",height:"191"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"On souhaite changer une valeur dans le premier \xe9l\xe9ment du tableau :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0\xa0\xa0\xa0//Changer la valeur de "age" :\n\xa0ARRAY OBJECT($refs)\n\xa0OB GET ARRAY($refEmployees;"__ENTITIES";$refs)\n\xa0OB SET($refs{1};"age";25)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Conversions de type entre les collections et les tableaux 4D"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/ob-set-array",children:"OB SET ARRAY"})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},723881:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict1211436.fr-fc6d58870652302f7a845dc33f15171c.png"},178746:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict1213151.fr-3ceafb1b3b7d26117a89fb9be3eb56ab.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);