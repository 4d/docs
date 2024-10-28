"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43183],{562318:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>i,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=t(474848),d=t(28453);const o={id:"dom-get-xml-document-ref",title:"DOM Get XML document ref",slug:"/commands/dom-get-xml-document-ref",displayed_sidebar:"docs"},s=void 0,c={id:"commands-legacy/dom-get-xml-document-ref",title:"DOM Get XML document ref",description:"DOM Get XML document ref ( refEl\xe9ment ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-xml-document-ref.md",sourceDirName:"commands-legacy",slug:"/commands/dom-get-xml-document-ref",permalink:"/docs/fr/commands/dom-get-xml-document-ref",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-document-ref.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"dom-get-xml-document-ref",title:"DOM Get XML document ref",slug:"/commands/dom-get-xml-document-ref",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DOM GET XML CHILD NODES",permalink:"/docs/fr/commands/dom-get-xml-child-nodes"},next:{title:"DOM Get XML element",permalink:"/docs/fr/commands/dom-get-xml-element"}},l={},m=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM Get XML document ref"})," ( ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refEl\xe9ment"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019un \xe9l\xe9ment existant dans un arbre DOM"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence du premier \xe9l\xe9ment de l'arbre DOM (noeud document)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"DOM Get XML document ref"}),' permet de r\xe9cup\xe9rer la r\xe9f\xe9rence de l\u2019\xe9l\xe9ment "document" de l\u2019arbre DOM dont vous avez pass\xe9 la r\xe9f\xe9rence dans ',(0,r.jsx)(n.em,{children:"refEl\xe9ment"}),". L\u2019\xe9l\xe9ment document est le premier \xe9l\xe9ment d\u2019un arbre DOM ; c\u2019est le parent de l\u2019\xe9l\xe9ment racine."]}),"\n",(0,r.jsxs)(n.p,{children:['La r\xe9f\xe9rence de l\u2019\xe9l\xe9ment document vous permet de manipuler les noeuds "Doctype" et "Instructions de traitement". Elle ne peut \xeatre utilis\xe9e qu\u2019avec les commandes ',(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-append-xml-child-node",children:"DOM Append XML child node"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-get-xml-child-nodes",children:"DOM GET XML CHILD NODES"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"A ce niveau, vous pouvez uniquement ajouter des instructions de traitement, des commentaires ou remplacer le noeud Doctype. Vous ne pouvez pas y cr\xe9er de noeud CDATA ou texte."}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Dans cet exemple nous cherchons \xe0 retrouver la d\xe9claration de DTD du document XML :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $refRoot : Text\n\xa0$refRoot:=DOM Parse XML source("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0var $refDocument : Text\n\xa0\xa0// on cherche le noeud document, puisque c\'est le noeud auquel est\n\xa0\xa0// rattach\xe9 le n\u0153ud DOCTYPE avant le noeud root\n\xa0\xa0\xa0\xa0$refDocument:=DOM Get XML document ref($refRoot)\n\xa0\xa0\xa0\xa0ARRAY TEXT($arrType;0)\n\xa0\xa0\xa0\xa0ARRAY TEXT($arrValue;0)\n\xa0\xa0// sur ce n\u0153ud on cherche parmi les enfants le n\u0153ud de type DOCTYPE\n\xa0\xa0\xa0\xa0DOM GET XML CHILD NODES($refDocument;$arrType;$arrValue)\n\xa0\xa0\xa0\xa0var $text : Text\n\xa0\xa0\xa0\xa0$text:=""\n\xa0\xa0\xa0\xa0$pos:=Find in array($arrType;XML DOCTYPE)\n\xa0\xa0\xa0\xa0If($pos>-1)\n\xa0\xa0// On r\xe9cup\xe8re dans $text la d\xe9claration de DTD\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$text:=$text+"Doctype: "+$arrValue{$pos}+Char(Carriage return)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0DOM CLOSE XML($refRoot)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-append-xml-child-node",children:"DOM Append XML child node"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-get-xml-child-nodes",children:"DOM GET XML CHILD NODES"})]})]})}function i(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(296540);const d={},o=r.createContext(d);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);