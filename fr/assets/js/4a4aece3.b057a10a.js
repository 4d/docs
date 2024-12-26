"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47332"],{143442:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/sax-open-xml-element-arrays","title":"SAX OPEN XML ELEMENT ARRAYS","description":"SAX OPEN XML ELEMENT ARRAYS ( document ; balise {; tabNomsAttributs ; tabValeursAttributs} {; tabNomsAttributs2 ; tabValeursAttributs2 ; ... ; tabNomsAttributsN ; tabValeursAttributsN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-open-xml-element-arrays.md","sourceDirName":"commands-legacy","slug":"/commands/sax-open-xml-element-arrays","permalink":"/docs/fr/commands/sax-open-xml-element-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-open-xml-element-arrays.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-open-xml-element-arrays","title":"SAX OPEN XML ELEMENT ARRAYS","slug":"/commands/sax-open-xml-element-arrays","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX OPEN XML ELEMENT","permalink":"/docs/fr/commands/sax-open-xml-element"},"next":{"title":"SAX SET XML DECLARATION","permalink":"/docs/fr/commands/sax-set-xml-declaration"}}'),r=n("785893"),a=n("250065");let l={id:"sax-open-xml-element-arrays",title:"SAX OPEN XML ELEMENT ARRAYS",slug:"/commands/sax-open-xml-element-arrays",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"SAX OPEN XML ELEMENT ARRAYS"})," ( ",(0,r.jsx)(t.em,{children:"document"})," ; ",(0,r.jsx)(t.em,{children:"balise"})," {; ",(0,r.jsx)(t.em,{children:"tabNomsAttributs"})," ; ",(0,r.jsx)(t.em,{children:"tabValeursAttributs"}),"} {; ",(0,r.jsx)(t.em,{children:"tabNomsAttributs2"})," ; ",(0,r.jsx)(t.em,{children:"tabValeursAttributs2"})," ; ... ; ",(0,r.jsx)(t.em,{children:"tabNomsAttributsN"})," ; ",(0,r.jsx)(t.em,{children:"tabValeursAttributsN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"document"}),(0,r.jsx)(t.td,{children:"Time"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"R\xe9f\xe9rence du document ouvert"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"balise"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Nom de l\u2019\xe9l\xe9ment \xe0 ouvrir"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tabNomsAttributs"}),(0,r.jsx)(t.td,{children:"Text array"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Tableau de noms d\u2019attributs"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tabValeursAttributs"}),(0,r.jsx)(t.td,{children:"Text array, Integer array, Date array, Real array, Picture array, Boolean array"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Tableau de valeurs d\u2019attributs"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"SAX OPEN XML ELEMENT ARRAYS"})," permet d\u2019ajouter un nouvel \xe9l\xe9ment dans le document XML r\xe9f\xe9renc\xe9 par ",(0,r.jsx)(t.em,{children:"document"})," ainsi que, facultativement, des attributs et leurs valeurs sous forme de tableaux."]}),"\n",(0,r.jsxs)(t.p,{children:["Hormis la prise en charge de tableaux (cf. ci-dessous), cette commande est identique \xe0 ",(0,r.jsx)(t.a,{href:"/docs/fr/commands/sax-open-xml-element",children:"SAX OPEN XML ELEMENT"}),". Reportez-vous \xe0 la description de cette commande pour le d\xe9tail de son fonctionnement."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"SAX OPEN XML ELEMENT ARRAYS"})," accepte des tableaux de type date, num\xe9rique, bool\xe9en et image comme param\xe8tre(s) ",(0,r.jsx)(t.em,{children:"tabValeursAttributs"}),". 4D effectue automatiquement les conversions n\xe9cessaires, vous pouvez param\xe9trer ces conversions \xe0 l\u2019aide de la commande ",(0,r.jsx)(t.a,{href:"/docs/fr/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Facultativement, la commande ",(0,r.jsx)(t.strong,{children:"SAX OPEN XML ELEMENT ARRAYS"})," permet de passer plusieurs couples d\u2019attributs et de valeurs d\u2019attributs sous forme de tableaux dans les param\xe8tres ",(0,r.jsx)(t.em,{children:"tabNomsAttributs"})," et ",(0,r.jsx)(t.em,{children:"tabValeursAttributs"}),".",(0,r.jsx)(t.br,{}),"\nLes tableaux doivent avoir \xe9t\xe9 cr\xe9\xe9s au pr\xe9alable et fonctionner par paires. Vous pouvez passer autant de couples de tableaux et autant d\u2019\xe9l\xe9ments dans chaque couple que vous voulez."]}),"\n",(0,r.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(t.p,{children:"La m\xe9thode suivante :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY STRING(80;tNomsAtt;2)\n\xa0ARRAY STRING(80;tValeursAtt;2)\n\xa0vElement:="Book"\n\xa0tNomsAtt{1}:="Font"\n\xa0tValeursAtt{1}:="arial"\n\xa0tNomsAtt{2}:="Style"\n\xa0tValeursAtt{2}:="Bold"\n\xa0SAX OPEN XML ELEMENT ARRAYS($RefDoc;vElement;tNomsAtt;tValeursAtt)\n'})}),"\n",(0,r.jsx)(t.p,{children:"... inscrira cette ligne dans le document :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-XML",children:'<Book Font="arial" Style="Bold">\n'})}),"\n",(0,r.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/commands/sax-close-xml-element",children:"SAX CLOSE XML ELEMENT"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/commands/sax-open-xml-element",children:"SAX OPEN XML ELEMENT"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,r.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(t.td,{children:"921"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var s=n(667294);let r={},a=s.createContext(r);function l(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);