"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5672"],{834645:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"Events/onHeader","title":"On Header","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | D\xe9finition                                                                                    |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Events/onHeader.md","sourceDirName":"Events","slug":"/Events/onHeader","permalink":"/docs/fr/20-R6/Events/onHeader","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonHeader.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onHeader","title":"On Header"},"sidebar":"docs","previous":{"title":"On Getting focus","permalink":"/docs/fr/20-R6/Events/onGettingFocus"},"next":{"title":"On Header Click","permalink":"/docs/fr/20-R6/Events/onHeaderClick"}}'),s=n("785893"),o=n("250065");let i={id:"onHeader",title:"On Header"},c=void 0,d={},l=[{value:"Description",id:"description",level:2}];function a(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Code"}),(0,s.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"5"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/buttonGridOverview",children:"Grille de bouton"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form (list form only) - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/pluginAreaOverview#overview",children:"Zone de Plug-in"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/tabControl",children:"Onglet"})]}),(0,s.jsx)(r.td,{children:"La zone d'en-t\xeate du formulaire est sur le point d'\xeatre imprim\xe9e ou affich\xe9e."})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Header"})," est appel\xe9 lorsqu'un enregistrement est sur le point d'\xeatre affich\xe9 dans un formulaire liste affich\xe9 via ",(0,s.jsx)(r.code,{children:"DISPLAY SELECTION"})," et ",(0,s.jsx)(r.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Cet \xe9v\xe9nement ne peut pas \xeatre s\xe9lectionn\xe9 pour les formulaires projet, il est uniquement disponible avec les ",(0,s.jsx)(r.strong,{children:"formulaires table"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Dans ce contexte, la s\xe9quence d'appels de m\xe9thodes et d'\xe9v\xe9nements de formulaire suivante est d\xe9clench\xe9e :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Pour chaque objet de la zone d'en-t\xeate :\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["M\xe9thode objet avec l'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Header"})]}),"\n",(0,s.jsxs)(r.li,{children:["M\xe9thode formulaire avec l'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Header"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Les enregistrements imprim\xe9s sont g\xe9r\xe9s \xe0 l'aide de l'\xe9v\xe9nement ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R6/Events/onDisplayDetail",children:(0,s.jsx)(r.code,{children:"On Display Detail"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["L'appel d'une commande 4D qui affiche une bo\xeete de dialogue \xe0 partir de l'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Header"})," n'est pas autoris\xe9 et g\xe9n\xe9rera une erreur de syntaxe. Plus particuli\xe8rement, les commandes concern\xe9es sont : ",(0,s.jsx)(r.code,{children:"ALERT"}),", ",(0,s.jsx)(r.code,{children:"DIALOG"}),", ",(0,s.jsx)(r.code,{children:"CONFIRM"}),", ",(0,s.jsx)(r.code,{children:"Request"}),", ",(0,s.jsx)(r.code,{children:"ADD RECORD"}),", ",(0,s.jsx)(r.code,{children:"MODIFY RECORD"}),", ",(0,s.jsx)(r.code,{children:"DISPLAY SELECTION"}),", et ",(0,s.jsx)(r.code,{children:"MODIFY SELECTION"}),"."]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var t=n(667294);let s={},o=t.createContext(s);function i(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);