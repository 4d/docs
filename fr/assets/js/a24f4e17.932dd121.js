"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77735"],{7392:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>l,assets:()=>i,toc:()=>m,contentTitle:()=>a});var l=JSON.parse('{"id":"commands-legacy/dom-get-xml-element-value","title":"DOM GET XML ELEMENT VALUE","description":"DOM GET XML ELEMENT VALUE ( refEl\xe9ment ; valeurEl\xe9ment {; cDATA} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-xml-element-value.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-element-value","permalink":"/docs/fr/commands/dom-get-xml-element-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-element-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-element-value","title":"DOM GET XML ELEMENT VALUE","slug":"/commands/dom-get-xml-element-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ELEMENT NAME","permalink":"/docs/fr/commands/dom-get-xml-element-name"},"next":{"title":"DOM Get XML information","permalink":"/docs/fr/commands/dom-get-xml-information"}}'),r=t("785893"),s=t("250065");let d={id:"dom-get-xml-element-value",title:"DOM GET XML ELEMENT VALUE",slug:"/commands/dom-get-xml-element-value",displayed_sidebar:"docs"},a=void 0,i={},m=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM GET XML ELEMENT VALUE"})," ( ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"})," ; ",(0,r.jsx)(n.em,{children:"valeurEl\xe9ment"})," {; ",(0,r.jsx)(n.em,{children:"cDATA"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refEl\xe9ment"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeurEl\xe9ment"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur de l\u2019\xe9l\xe9ment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cDATA"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Contenu de la section CDATA"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"DOM GET XML ELEMENT VALUE"})," retourne dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"valeurEl\xe9ment"})," la valeur de l\u2019\xe9l\xe9ment XML d\xe9sign\xe9 par ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"}),". 4D tentera de convertir la valeur obtenue dans le type de la variable pass\xe9e en param\xe8tre. Si le type de la variable n'est pas d\xe9fini, la valeur est retourn\xe9e en type texte par d\xe9faut."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,r.jsx)(n.em,{children:"cDATA"})," permet de r\xe9cup\xe9rer le contenu de la ou des section(s) CDATA de l\u2019\xe9l\xe9ment XML ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"})," le cas \xe9ch\xe9ant. Comme pour le param\xe8tre ",(0,r.jsx)(n.em,{children:"valeurEl\xe9ment"}),", 4D tentera de convertir la valeur obtenue dans le type de la variable pass\xe9e en param\xe8tre, et si le type de la variable n'est pas d\xe9fini, le type texte sera utilis\xe9 par d\xe9faut."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si l\u2019\xe9l\xe9ment d\xe9sign\xe9 par ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"})," est un BLOB trait\xe9 par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-set-xml-element-value",children:"DOM SET XML ELEMENT VALUE"}),", il a \xe9t\xe9 automatiquement encod\xe9 en base64. Par cons\xe9quent, la commande tentera automatiquement de le d\xe9coder en base64."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Cette m\xe9thode retourne la valeur de l\u2019\xe9l\xe9ment $ref_XML_El\xe9ment :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $ref_XML_El\xe9ment : Text\n\xa0var $valeur : Real\n\xa0\n\xa0DOM GET XML ELEMENT VALUE($ref_XML_El\xe9ment;$valeur)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK prend la valeur 1. Si une erreur se produit, elle prend la valeur 0."}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-get-xml-element-name",children:"DOM GET XML ELEMENT NAME"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-set-xml-element-value",children:"DOM SET XML ELEMENT VALUE"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"731"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var l=t(667294);let r={},s=l.createContext(r);function d(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);