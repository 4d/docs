"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25082],{614880:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var n=s(474848),o=s(28453);const t={id:"onMouseLeave",title:"On Mouse Leave"},i=void 0,c={id:"Events/onMouseLeave",title:"On Mouse Leave",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | D\xe9finition                                                  |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Events/onMouseLeave.md",sourceDirName:"Events",slug:"/Events/onMouseLeave",permalink:"/docs/fr/20-R6/Events/onMouseLeave",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseLeave.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onMouseLeave",title:"On Mouse Leave"},sidebar:"docs",previous:{title:"On Mouse Enter",permalink:"/docs/fr/20-R6/Events/onMouseEnter"},next:{title:"On Mouse Move",permalink:"/docs/fr/20-R6/Events/onMouseMove"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Appeler la pile",id:"appeler-la-pile",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}];function a(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,n.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"36"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/pluginAreaOverview#overview",children:"Zone de Plug-in"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/tabControl",children:"Onglet"})]}),(0,n.jsx)(r.td,{children:"Le curseur de la souris quitte la zone graphique d'un objet"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 une fois, lorsque le curseur de la souris quitte la zone graphique d'un objet."}),"\n",(0,n.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,n.jsx)(r.code,{children:"On Mouse Leave"})," met \xe0 jour les variables syst\xe8me ",(0,n.jsx)(r.em,{children:"MouseX"})," et ",(0,n.jsx)(r.em,{children:"MouseY"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Les objets rendus invisibles \xe0 l'aide de la commande ",(0,n.jsx)(r.code,{children:"OBJECT SET VISIBLE"})," ou de la propri\xe9t\xe9 ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," ne g\xe9n\xe8rent pas cet \xe9v\xe9nement."]}),"\n",(0,n.jsx)(r.h3,{id:"appeler-la-pile",children:"Appeler la pile"}),"\n",(0,n.jsxs)(r.p,{children:["Si l'\xe9v\xe9nement ",(0,n.jsx)(r.code,{children:"On Mouse Leave"})," a \xe9t\xe9 coch\xe9 pour le formulaire, il est g\xe9n\xe9r\xe9 pour chaque objet de formulaire. S'il est v\xe9rifi\xe9 pour un objet, il n'est g\xe9n\xe9r\xe9 que pour cet objet. Lorsqu'il existe des objets superpos\xe9s, l'\xe9v\xe9nement est g\xe9n\xe9r\xe9 par le premier objet capable de le g\xe9rer qui se trouve en allant de haut en bas."]}),"\n",(0,n.jsx)(r.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/Events/onMouseMove",children:(0,n.jsx)(r.code,{children:"On Mouse Move"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/fr/20-R6/Events/onMouseLeave",children:(0,n.jsx)(r.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var n=s(296540);const o={},t=n.createContext(o);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);