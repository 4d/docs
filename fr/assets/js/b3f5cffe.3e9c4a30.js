"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84121],{281151:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>A,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(474848),s=n(28453);const i={id:"dom-count-xml-attributes",title:"DOM Count XML attributes",slug:"/commands/dom-count-xml-attributes",displayed_sidebar:"docs"},l=void 0,a={id:"commands-legacy/dom-count-xml-attributes",title:"DOM Count XML attributes",description:"DOM Count XML attributes ( refEl\xe9ment ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-count-xml-attributes.md",sourceDirName:"commands-legacy",slug:"/commands/dom-count-xml-attributes",permalink:"/docs/fr/commands/dom-count-xml-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-count-xml-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"dom-count-xml-attributes",title:"DOM Count XML attributes",slug:"/commands/dom-count-xml-attributes",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DOM CLOSE XML",permalink:"/docs/fr/commands/dom-close-xml"},next:{title:"DOM Count XML elements",permalink:"/docs/fr/commands/dom-count-xml-elements"}},o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(t){const e={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"DOM Count XML attributes"})," ( ",(0,r.jsx)(e.em,{children:"refEl\xe9ment"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Param\xe8tre"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"refEl\xe9ment"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"R\xe9sultat"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Nombre d\u2019attributs"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["La commande ",(0,r.jsx)(e.strong,{children:"DOM Count XML attributes"})," retourne le nombre d\u2019attributs XML pr\xe9sents dans l\u2019\xe9l\xe9ment XML d\xe9sign\xe9 par ",(0,r.jsx)(e.em,{children:"refEl\xe9ment"}),". Pour plus d'informations sur les attributs XML, reportez-vous \xe0 la section ",(0,r.jsx)(e.em,{children:"Pr\xe9sentation des commandes XML DOM"}),"."]}),"\n",(0,r.jsx)(e.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(e.p,{children:"Avant de r\xe9cup\xe9rer les valeurs des \xe9l\xe9ments dans un tableau, vous souhaitez conna\xeetre le nombre d\u2019attributs dans l\u2019\xe9l\xe9ment XML suivant :"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:n(901421).A+"",width:"485",height:"107"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0var maVarBlob : Blob\n\xa0var $ref_XML_Parent;$ref_XML_Enfant : Text\n\xa0var monR\xe9sultat : Text\n\xa0var $nbAttributs : Integer\n\xa0\n\xa0$ref_XML_Parent:=DOM Parse XML variable(maVarBlob)\n\xa0$ref_XML_Enfant:=DOM Get first child XML element($ref_XML_Parent)\n\xa0\n\xa0$nbAttributs:=DOM Count XML attributes($ref_XML_Enfant)\n\xa0ARRAY TEXT(tAttrib;$nbAttributs)\n\xa0ARRAY TEXT(tValAttrib;$nbAttributs)\n\xa0For($i;1;$nbAttributs)\n\xa0\xa0\xa0\xa0DOM GET XML ATTRIBUTE BY INDEX($ref_XML_Enfant;$i;tAttrib{$i};tValAttrib{$i})\n\xa0End for\n"})}),"\n",(0,r.jsx)(e.p,{children:"Dans l\u2019exemple ci-dessus, $nbAttributs vaut 3, tAttrib{1} contient \u201cFont\u201d, tAttrib{2} contient \u201cN\u201d et tAttrib{3} contient \u201csize\u201d. tValAttrib contient \u201cVerdana\u201d, \u201c1\u201d et \u201c10\u201d."}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Note :"})," Le num\xe9ro d\u2019indice ne correspond pas \xe0 l\u2019emplacement de l\u2019attribut dans le fichier XML affich\xe9 sous forme de texte. En XML, l\u2019indice d\u2019un attribut indique sa position parmi les attributs class\xe9s par ordre alphab\xe9tique (en fonction de leur nom)."]}),"\n",(0,r.jsx)(e.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(e.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK prend la valeur 1. Si une erreur se produit, elle prend la valeur 0."}),"\n",(0,r.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/fr/commands/dom-count-xml-elements",children:"DOM Count XML elements"})})]})}function A(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},901421:(t,e,n)=>{n.d(e,{A:()=>r});const r="data:image/png;base64,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"},28453:(t,e,n)=>{n.d(e,{R:()=>l,x:()=>a});var r=n(296540);const s={},i=r.createContext(s);function l(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:l(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);