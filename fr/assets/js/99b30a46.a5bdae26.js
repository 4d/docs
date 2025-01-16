"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13207"],{820555:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>r,assets:()=>m,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/dom-get-next-sibling-xml-element","title":"DOM Get next sibling XML element","description":"DOM Get next sibling XML element ( refEl\xe9ment {; nomEl\xe9mentFr\xe8re {; valeurEl\xe9mentFr\xe8re}} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-next-sibling-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-next-sibling-xml-element","permalink":"/docs/fr/20-R7/commands/dom-get-next-sibling-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-next-sibling-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-next-sibling-xml-element","title":"DOM Get next sibling XML element","slug":"/commands/dom-get-next-sibling-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get last child XML element","permalink":"/docs/fr/20-R7/commands/dom-get-last-child-xml-element"},"next":{"title":"DOM Get parent XML element","permalink":"/docs/fr/20-R7/commands/dom-get-parent-xml-element"}}'),l=t("785893"),s=t("250065");let i={id:"dom-get-next-sibling-xml-element",title:"DOM Get next sibling XML element",slug:"/commands/dom-get-next-sibling-xml-element",displayed_sidebar:"docs"},d=void 0,m={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM Get next sibling XML element"})," ( ",(0,l.jsx)(n.em,{children:"refEl\xe9ment"})," {; ",(0,l.jsx)(n.em,{children:"nomEl\xe9mentFr\xe8re"})," {; ",(0,l.jsx)(n.em,{children:"valeurEl\xe9mentFr\xe8re"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"refEl\xe9ment"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nomEl\xe9mentFr\xe8re"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Nom de l'\xe9l\xe9ment XML fr\xe8re"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"valeurEl\xe9mentFr\xe8re"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Valeur de l'\xe9l\xe9ment XML fr\xe8re"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"R\xe9f\xe9rence de l\u2019\xe9l\xe9ment XML fr\xe8re"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"DOM Get next sibling XML element"})," retourne une r\xe9f\xe9rence vers le prochain \u201Cfr\xe8re\u201D de l\u2019\xe9l\xe9ment XML pass\xe9 en r\xe9f\xe9rence. Cette r\xe9f\xe9rence pourra \xeatre utilis\xe9e avec les autres commandes d\u2019analyse XML."]}),"\n",(0,l.jsxs)(n.p,{children:["Les param\xe8tres ",(0,l.jsx)(n.em,{children:"nomEl\xe9mentFr\xe8re"})," et ",(0,l.jsx)(n.em,{children:"valeurEl\xe9mentFr\xe8re"}),", s\u2019ils sont pass\xe9s, re\xe7oivent respectivement le nom et la valeur de l\u2019\xe9l\xe9ment \u201Cfr\xe8re\u201D."]}),"\n",(0,l.jsx)(n.p,{children:"Cette commande permet de naviguer parmi les \u201Cenfants\u201D d'un \xe9l\xe9ment XML."}),"\n",(0,l.jsx)(n.p,{children:"Apr\xe8s le dernier \u201Cfr\xe8re\u201D, la variable syst\xe8me OK prend la valeur 0."}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.p,{children:"R\xe9cup\xe9ration de la r\xe9f\xe9rence de l\u2019\xe9l\xe9ment XML fr\xe8re suivant l\u2019\xe9l\xe9ment pass\xe9 en param\xe8tre :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0var $ref_XML_Parent;$ref_XML_Suivant : Text\n\xa0$ref_XML_Suivant:=DOM Get next sibling XML element($ref_XML_Parent)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(894312).Z+"",width:"511",height:"214"})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"R\xe9cup\xe9ration dans une boucle des r\xe9f\xe9rences de tous les \xe9l\xe9ments XML enfants de l\u2019\xe9l\xe9ment parent pass\xe9 en param\xe8tre, \xe0 compter du premier enfant :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0var $ref_XML_Parent;$ref_XML_Premier;$ref_XML_Suivant : Text\n\xa0\n\xa0$ref_XML_Premier:=DOM Get first child XML element($ref_XML_Parent)\n\xa0$ref_XML_Suivant:=$ref_XML_Premier\n\xa0While(OK=1)\n\xa0\xa0\xa0\xa0$ref_XML_Suivant:=DOM Get next sibling XML element($ref_XML_Suivant)\n\xa0End while\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(814815).Z+"",width:"785",height:"205"})}),"\n",(0,l.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,l.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e et si l\u2019\xe9l\xe9ment analys\xe9 n\u2019est pas le dernier \u201Cfr\xe8re\u201D de l\u2019\xe9l\xe9ment r\xe9f\xe9renc\xe9, la variable syst\xe8me OK prend la valeur 1. Si une erreur se produit ou si l\u2019\xe9l\xe9ment analys\xe9 est le dernier \u201Cfr\xe8re\u201D de l\u2019\xe9l\xe9ment r\xe9f\xe9renc\xe9, elle prend la valeur 0."}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/dom-get-first-child-xml-element",children:"DOM Get first child XML element"})}),"\n",(0,l.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"724"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifie les variables"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},894312:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict40038.fr-6746c4af43b70c713bc455fb9438b1ea.png"},814815:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict40039.fr-6f2746bb2664476cd3b05597223eed43.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var r=t(667294);let l={},s=r.createContext(l);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);