"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74542"],{150718:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>m});var s=JSON.parse('{"id":"commands-legacy/dom-get-xml-element-name","title":"DOM GET XML ELEMENT NAME","description":"DOM GET XML ELEMENT NAME ( refEl\xe9ment ; nomEl\xe9ment )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-xml-element-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-element-name","permalink":"/docs/fr/20-R7/commands/dom-get-xml-element-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-element-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-element-name","title":"DOM GET XML ELEMENT NAME","slug":"/commands/dom-get-xml-element-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get XML element","permalink":"/docs/fr/20-R7/commands/dom-get-xml-element"},"next":{"title":"DOM GET XML ELEMENT VALUE","permalink":"/docs/fr/20-R7/commands/dom-get-xml-element-value"}}'),l=t("785893"),r=t("250065");let d={id:"dom-get-xml-element-name",title:"DOM GET XML ELEMENT NAME",slug:"/commands/dom-get-xml-element-name",displayed_sidebar:"docs"},m=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM GET XML ELEMENT NAME"})," ( ",(0,l.jsx)(n.em,{children:"refEl\xe9ment"})," ; ",(0,l.jsx)(n.em,{children:"nomEl\xe9ment"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"refEl\xe9ment"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nomEl\xe9ment"}),(0,l.jsx)(n.td,{children:"Variable"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Nom de l\u2019\xe9l\xe9ment"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande DOM LIRE NOM ELEMENT XML retourne dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"nomEl\xe9ment"})," le nom de l\u2019\xe9l\xe9ment XML d\xe9sign\xe9 par ",(0,l.jsx)(n.em,{children:"refEl\xe9ment"}),". Si le type de la variable ",(0,l.jsx)(n.em,{children:"nomEl\xe9ment"})," n'est pas d\xe9fini, le type texte est utilis\xe9 par d\xe9faut."]}),"\n",(0,l.jsx)(n.p,{children:"Pour plus d'informations sur les noms d'\xe9l\xe9ments XML, reportez-vous \xe0 la section ."}),"\n",(0,l.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"Cette m\xe9thode retourne le nom de l\u2019\xe9l\xe9ment $ref_XML_El\xe9ment :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0var $ref_XML_El\xe9ment : Text\n\xa0var $nom : Text\n\xa0\n\xa0DOM GET XML ELEMENT NAME($ref_XML_El\xe9ment;$nom)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,l.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK prend la valeur 1. Si une erreur se produit, elle prend la valeur 0."}),"\n",(0,l.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/dom-get-xml-element-value",children:"DOM GET XML ELEMENT VALUE"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/dom-set-xml-element-name",children:"DOM SET XML ELEMENT NAME"})]}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"730"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifie les variables"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return m},a:function(){return d}});var s=t(667294);let l={},r=s.createContext(l);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);