/*! For license information please see c44f0958.476d18b9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52046],{560847:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=o(474848),n=o(28453);const t={id:"onMouseMove",title:"On Mouse Move"},i=void 0,l={id:"Events/onMouseMove",title:"On Mouse Move",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | D\xe9finition                                                                                                                         |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onMouseMove.md",sourceDirName:"Events",slug:"/Events/onMouseMove",permalink:"/docs/fr/20/Events/onMouseMove",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseMove.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onMouseMove",title:"On Mouse Move"},sidebar:"docs",previous:{title:"On Mouse Leave",permalink:"/docs/fr/20/Events/onMouseLeave"},next:{title:"On Mouse Up",permalink:"/docs/fr/20/Events/onMouseUp"}},c={},d=[{value:"Description",id:"Description",level:2},{value:"Appeler la pile",id:"Appeler-la-pile",level:3},{value:"Voir \xe9galement",id:"Voir-\xe9galement",level:3}];function u(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Code"}),(0,s.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"37"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/dropdownListOverview",children:"Liste d\xe9roulante"})," -Formulaire - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/inputOverview",children:"Zone de saisie"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/pluginAreaOverview#overview",children:"Zone de plug-in"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/progressIndicator",children:"Indicateur de progression"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/radiobuttonOverview",children:"Bouton radio"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/ruler",children:"R\xe8gle"})," -",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/tabControl",children:"Onglet"})]}),(0,s.jsx)(r.td,{children:"Le curseur de la souris se d\xe9place d'au moins un pixel OU une touche de modification (Shift, Alt/Option, Shift Lock) a \xe9t\xe9 press\xe9e"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"Description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"lorsque le curseur de la souris se d\xe9place d'au moins un pixel"}),"\n",(0,s.jsxs)(r.li,{children:["OU lorsque l'on presse sur une touche de modification (",(0,s.jsx)(r.strong,{children:"Ctrl"}),", ",(0,s.jsx)(r.strong,{children:"Alt/Option"}),", ",(0,s.jsx)(r.strong,{children:"Verr Maj"}),"). Cela permet de g\xe9rer les op\xe9rations de glisser-d\xe9poser de type copier ou d\xe9placer."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Si l'\xe9v\xe9nement est coch\xe9 pour un objet uniquement, il est g\xe9n\xe9r\xe9 uniquement lorsque le curseur se trouve dans la zone graphique de l'objet."}),"\n",(0,s.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Mouse Move"})," met \xe0 jour les variables syst\xe8me ",(0,s.jsx)(r.em,{children:"MouseX"})," et ",(0,s.jsx)(r.em,{children:"MouseY"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Les objets rendus invisibles \xe0 l'aide de la commande ",(0,s.jsx)(r.code,{children:"OBJECT SET VISIBLE"})," ou de la propri\xe9t\xe9 ",(0,s.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," ne g\xe9n\xe8rent pas cet \xe9v\xe9nement."]}),"\n",(0,s.jsx)(r.h3,{id:"Appeler-la-pile",children:"Appeler la pile"}),"\n",(0,s.jsxs)(r.p,{children:["Si l'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Mouse Move"})," a \xe9t\xe9 coch\xe9 pour le formulaire, il est g\xe9n\xe9r\xe9 pour chaque objet de formulaire. S'il est v\xe9rifi\xe9 pour un objet, il n'est g\xe9n\xe9r\xe9 que pour cet objet. Lorsqu'il existe des objets superpos\xe9s, l'\xe9v\xe9nement est g\xe9n\xe9r\xe9 par le premier objet capable de le g\xe9rer qui se trouve en allant de haut en bas."]}),"\n",(0,s.jsx)(r.h3,{id:"Voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/fr/20/Events/onMouseEnter",children:(0,s.jsx)(r.code,{children:"On Mouse Enter"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/fr/20/Events/onMouseLeave",children:(0,s.jsx)(r.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},221020:(e,r,o)=>{var s=o(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,o){var s,t={},d=null,u=null;for(s in void 0!==o&&(d=""+o),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,s)&&!c.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:n,type:e,key:d,ref:u,props:t,_owner:l.current}}r.Fragment=t,r.jsx=d,r.jsxs=d},474848:(e,r,o)=>{e.exports=o(221020)},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>l});var s=o(296540);const n={},t=s.createContext(n);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);