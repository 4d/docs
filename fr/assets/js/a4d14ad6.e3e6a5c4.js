"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27450"],{345444:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>A,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/dom-get-xml-attribute-by-name","title":"DOM GET XML ATTRIBUTE BY NAME","description":"DOM GET XML ATTRIBUTE BY NAME ( refEl\xe9ment ; nomAttribut ; valeurAttribut )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-get-xml-attribute-by-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-attribute-by-name","permalink":"/docs/fr/commands/dom-get-xml-attribute-by-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-attribute-by-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-get-xml-attribute-by-name","title":"DOM GET XML ATTRIBUTE BY NAME","slug":"/commands/dom-get-xml-attribute-by-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ATTRIBUTE BY INDEX","permalink":"/docs/fr/commands/dom-get-xml-attribute-by-index"},"next":{"title":"DOM GET XML CHILD NODES","permalink":"/docs/fr/commands/dom-get-xml-child-nodes"}}'),s=t("785893"),l=t("250065");let A={id:"dom-get-xml-attribute-by-name",title:"DOM GET XML ATTRIBUTE BY NAME",slug:"/commands/dom-get-xml-attribute-by-name",displayed_sidebar:"docs"},d=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM GET XML ATTRIBUTE BY NAME"})," ( ",(0,s.jsx)(n.em,{children:"refEl\xe9ment"})," ; ",(0,s.jsx)(n.em,{children:"nomAttribut"})," ; ",(0,s.jsx)(n.em,{children:"valeurAttribut"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refEl\xe9ment"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomAttribut"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom d\u2019attribut"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valeurAttribut"}),(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valeur de l\u2019attribut"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"DOM GET XML ATTRIBUTE BY NAME"})," permet de conna\xeetre la valeur d\u2019un attribut d\xe9sign\xe9 par son nom."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"refEl\xe9ment"})," la r\xe9f\xe9rence d\u2019un \xe9l\xe9ment XML et dans ",(0,s.jsx)(n.em,{children:"nomAttribut"})," le nom d\u2019attribut dont vous voulez conna\xeetre la valeur. La valeur est retourn\xe9e dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"valeurAttribut"}),". 4D tentera de convertir la valeur obtenue dans le type de la variable pass\xe9e en param\xe8tre. Si le type de la variable n'est pas d\xe9fini, la valeur est retourn\xe9e par d\xe9faut en type texte."]}),"\n",(0,s.jsxs)(n.p,{children:["Si aucun attribut ",(0,s.jsx)(n.em,{children:"nomAttribut"})," n\u2019existe dans l\u2019\xe9l\xe9ment XML, une erreur est retourn\xe9e. Si plusieurs attributs de l\u2019\xe9l\xe9ment XML portent le nom sp\xe9cifi\xe9, seule la valeur du premier attribut est retourn\xe9e."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Cette m\xe9thode permet de r\xe9cup\xe9rer une valeur d\u2019attribut XML \xe0 l\u2019aide de son nom :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var maVarBlob : Blob\n\xa0var $ref_XML_Parent;$ref_XML_Enfant : Text\n\xa0var $NumLigne : Integer\n\xa0\n\xa0$ref_XML_Parent:=DOM Parse XML variable(maVarBlob)\n\xa0$ref_XML_Enfant:=DOM Get first child XML element($ref_XML_Parent)\n\xa0DOM GET XML ATTRIBUTE BY NAME($ref_XML_Enfant;"N";$NumLigne)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Si cette m\xe9thode est appliqu\xe9e \xe0 l\u2019exemple ci-dessous, $NumLigne contient la valeur 1 :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(802506).Z+"",width:"510",height:"138"})}),"\n",(0,s.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,s.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK prend la valeur 1. Si une erreur se produit, elle prend la valeur 0."}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/dom-get-xml-attribute-by-index",children:"DOM GET XML ATTRIBUTE BY INDEX"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"728"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},802506:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return A}});var r=t(667294);let s={},l=r.createContext(s);function A(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:A(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);