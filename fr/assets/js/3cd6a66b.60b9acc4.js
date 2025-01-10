"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8768"],{218525:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"Events/onDoubleClicked","title":"On Double Clicked","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | D\xe9finition                                 |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onDoubleClicked.md","sourceDirName":"Events","slug":"/Events/onDoubleClicked","permalink":"/docs/fr/20/Events/onDoubleClicked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDoubleClicked.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onDoubleClicked","title":"On Double Clicked"},"sidebar":"docs","previous":{"title":"On Display Detail","permalink":"/docs/fr/20/Events/onDisplayDetail"},"next":{"title":"On Drag Over","permalink":"/docs/fr/20/Events/onDragOver"}}'),s=r("785893"),i=r("250065");let o={id:"onDoubleClicked",title:"On Double Clicked"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Exemple",id:"exemple",level:4}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"13"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})," - ",(0,s.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/dropdownListOverview",children:"Liste d\xe9roulante"})," - Formulaire - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/inputOverview",children:"Zone de saisie"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-columns",children:"Colonne de List Box"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/pluginAreaOverview#overview",children:"Zone de plug-in"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/progressIndicator",children:"Indicateur de progression"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/radiobuttonOverview",children:"Bouton radio"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/ruler",children:"R\xe8gle"})," -",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/tabControl",children:"Onglet"})]}),(0,s.jsx)(n.td,{children:"Un double-clic a \xe9t\xe9 effectu\xe9 sur un objet"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On Double Clicked"})," est g\xe9n\xe9r\xe9 lorsque l'utilisateur double-clique sur un objet. La dur\xe9e maximale s\xe9parant un double-clic est d\xe9finie dans les pr\xe9f\xe9rences syst\xe8me."]}),"\n",(0,s.jsxs)(n.p,{children:["Si la propri\xe9t\xe9 d'\xe9v\xe9nement d'objet ",(0,s.jsx)(n.a,{href:"/docs/fr/20/Events/onClicked",children:(0,s.jsx)(n.code,{children:"On Clicked"})})," ou ",(0,s.jsx)(n.code,{children:"On Double Clicked"})," est s\xe9lectionn\xe9e pour un objet, vous pouvez d\xe9tecter et g\xe9rer les clics dans ou sur l'objet, \xe0 l'aide de la commande ",(0,s.jsx)(n.code,{children:"FORM event"})," qui retourne ",(0,s.jsx)(n.a,{href:"/docs/fr/20/Events/onClicked",children:(0,s.jsx)(n.code,{children:"On Clicked"})})," ou ",(0,s.jsx)(n.code,{children:"On Double Clicked"}),", selon le cas."]}),"\n",(0,s.jsxs)(n.p,{children:["Si les deux \xe9v\xe9nements sont s\xe9lectionn\xe9s pour un objet, les \xe9v\xe9nements ",(0,s.jsx)(n.code,{children:"On Clicked"})," puis ",(0,s.jsx)(n.code,{children:"On Double Clicked"})," seront g\xe9n\xe9r\xe9s lorsque l'utilisateur double-clique sur l'objet."]}),"\n",(0,s.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,s.jsxs)(n.p,{children:["Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsque l'utilisateur double-clique n'importe o\xf9 dans un document 4D View Pro. Dans ce contexte, l'",(0,s.jsx)(n.a,{href:"/docs/fr/20/Events/overview#event-object",children:"objet \xe9v\xe9nement"})," retourn\xe9 par la commande ",(0,s.jsx)(n.code,{children:"FORM Event"})," contient :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"entier long"}),(0,s.jsx)(n.td,{children:"13"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'"On Double Clicked"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheetName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"range"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Plage de cellule"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" If(FORM Event.code=On Double Clicked)\n   $value:=VP Get value(FORM Event.range)\n End if\n"})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var t=r(667294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);