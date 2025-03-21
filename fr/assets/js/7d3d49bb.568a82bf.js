"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7951"],{189368:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/dom-get-first-child-xml-element","title":"DOM Get first child XML element","description":"DOM Get first child XML element ( refEl\xe9ment {; nomEl\xe9mentEnf {; valeurEl\xe9mentEnf}} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-first-child-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-first-child-xml-element","permalink":"/docs/fr/20-R7/commands/dom-get-first-child-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-first-child-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-first-child-xml-element","title":"DOM Get first child XML element","slug":"/commands/dom-get-first-child-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Find XML element by ID","permalink":"/docs/fr/20-R7/commands/dom-find-xml-element-by-id"},"next":{"title":"DOM Get last child XML element","permalink":"/docs/fr/20-R7/commands/dom-get-last-child-xml-element"}}'),l=t("785893"),s=t("250065");let d={id:"dom-get-first-child-xml-element",title:"DOM Get first child XML element",slug:"/commands/dom-get-first-child-xml-element",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function m(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM Get first child XML element"})," ( ",(0,l.jsx)(n.em,{children:"refEl\xe9ment"})," {; ",(0,l.jsx)(n.em,{children:"nomEl\xe9mentEnf"})," {; ",(0,l.jsx)(n.em,{children:"valeurEl\xe9mentEnf"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"refEl\xe9ment"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nomEl\xe9mentEnf"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Nom de l'\xe9l\xe9ment XML enfant"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"valeurEl\xe9mentEnf"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Valeur de l'\xe9l\xe9ment XML enfant"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"R\xe9f\xe9rence de l\u2019\xe9l\xe9ment XML enfant"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"DOM Get first child XML element"})," retourne une r\xe9f\xe9rence XML vers le premier \u201Cenfant\u201D de l\u2019\xe9l\xe9ment XML pass\xe9 en r\xe9f\xe9rence dans ",(0,l.jsx)(n.em,{children:"refEl\xe9ment"}),". Cette r\xe9f\xe9rence pourra \xeatre utilis\xe9e avec les autres commandes d\u2019analyse XML."]}),"\n",(0,l.jsxs)(n.p,{children:["Les param\xe8tres ",(0,l.jsx)(n.em,{children:"nomEl\xe9mentEnf"})," et ",(0,l.jsx)(n.em,{children:"valeurEl\xe9mentEnf"}),", s\u2019ils sont pass\xe9s, re\xe7oivent respectivement le nom et la valeur de l\u2019\xe9l\xe9ment enfant."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(997494).Z+"",width:"604",height:"209"})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.p,{children:"R\xe9cup\xe9ration de la r\xe9f\xe9rence du premier \xe9l\xe9ment XML du parent racine. La structure XML (C:\\\\import.xml) est pr\xe9alablement charg\xe9e dans un BLOB :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var maVarBlob : Blob\n\xa0var $ref_XML_Parent;$ref_XML_Enfant : Text\n\xa0\n\xa0DOCUMENT TO BLOB("c:\\\\import.xml";maVarBlob)\n\xa0$ref_XML_Parent:=DOM Parse XML variable(maVarBlob)\n\xa0$ref_XML_Enfant:=DOM Get first child XML element($ref_XML_Parent)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"R\xe9cup\xe9ration de la r\xe9f\xe9rence, du nom et de la valeur du premier \xe9l\xe9ment XML du parent racine. La structure XML (C:\\\\import.xml) est pr\xe9alablement charg\xe9e dans un BLOB :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var maVarBlob : Blob\n\xa0var $ref_XML_Parent;$ref_XML_Enfant : Text\n\xa0var $enfantNom;$enfantValeur : Text\n\xa0\n\xa0DOCUMENT TO BLOB("c:\\\\import.xml";maVarBlob)\n\xa0$ref_XML_Parent:=DOM Parse XML variable(maVarBlob)\n\xa0$ref_XML_Enfant:=DOM Get first child XML element($ref_XML_Parent;$enfantNom;$enfantValeur)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,l.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK prend la valeur 1. Sinon, elle prend la valeur 0."}),"\n",(0,l.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/dom-get-next-sibling-xml-element",children:"DOM Get next sibling XML element"})}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"723"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifie les variables"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},997494:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict39972.fr-6d3bbb819459c3a004f23d91cc1d8157.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let l={},s=r.createContext(l);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);