/*! For license information please see f3b4054e.1ab40230.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87652],{197025:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=n(474848),t=n(28453);const o={id:"onDragOver",title:"On Drag Over"},i=void 0,d={id:"Events/onDragOver",title:"On Drag Over",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | D\xe9finition                                     |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onDragOver.md",sourceDirName:"Events",slug:"/Events/onDragOver",permalink:"/docs/fr/19/Events/onDragOver",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDragOver.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onDragOver",title:"On Drag Over"},sidebar:"docs",previous:{title:"On Double Clicked",permalink:"/docs/fr/19/Events/onDoubleClicked"},next:{title:"On Drop",permalink:"/docs/fr/19/Events/onDrop"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const r={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Code"}),(0,s.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"21"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/dropdownListOverview",children:"Liste d\xe9roulante"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Zone de saisie"})," -",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/listboxOverview#list-box-columns",children:"Colonne de List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/pluginAreaOverview#overview",children:"Zone de plug-in"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/progressIndicator",children:"Indicateur de progression"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/radiobuttonOverview",children:"Bouton radio"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/ruler",children:"R\xe8gle"})," -",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/tabControl",children:"Onglet"})]}),(0,s.jsx)(r.td,{children:"Les donn\xe9es peuvent \xeatre d\xe9pos\xe9es sur un objet"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Drag Over"})," est envoy\xe9 \xe0 plusieurs reprises \xe0 l'objet de destination lorsque le pointeur de la souris est d\xe9plac\xe9 sur l'objet. G\xe9n\xe9ralement, en r\xe9ponse \xe0 cet \xe9v\xe9nement :"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Vous r\xe9cup\xe9rez les donn\xe9es et les signatures pr\xe9sentes dans le conteneur (via la commande ",(0,s.jsx)(r.code,{children:"GET PASTEBOARD DATA"}),")."]}),"\n",(0,s.jsx)(r.li,{children:"En fonction de la nature et du type de donn\xe9es dans le conteneur, vous acceptez ou refusez le glisser-d\xe9poser."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Pour ",(0,s.jsx)(r.strong,{children:"accepter"})," le glissement, la m\xe9thode de l'objet de destination doit retourner 0 (z\xe9ro), vous devez donc \xe9crire ",(0,s.jsx)(r.code,{children:"$0:=0"}),". Pour ",(0,s.jsx)(r.strong,{children:"rejeter"})," le glissement, la m\xe9thode de l'objet de destination doit retourner -1 (moins un), vous devez donc \xe9crire ",(0,s.jsx)(r.code,{children:"$0:=-1"}),". Lors d'un \xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Drag Over"}),", 4D traite la m\xe9thode objet comme une fonction. Si aucun r\xe9sultat n'est retourn\xe9, 4D suppose que le glissement est accept\xe9."]}),"\n",(0,s.jsxs)(r.p,{children:["Si vous acceptez le glissement, l'objet de destination est mis en surbrillance. Si vous refusez le glissement, la destination n'est pas mise en surbrillance. Accepter le glissement ne signifie pas que les donn\xe9es d\xe9plac\xe9es vont \xeatre ins\xe9r\xe9es dans l'objet de destination. Cela signifie seulement que si le bouton de la souris \xe9tait rel\xe2ch\xe9 \xe0 ce stade, l'objet de destination accepterait les donn\xe9es gliss\xe9es et l'\xe9v\xe9nement ",(0,s.jsx)(r.a,{href:"/docs/fr/19/Events/onDrop",children:(0,s.jsx)(r.code,{children:"On Drop"})})," serait d\xe9clench\xe9."]}),"\n",(0,s.jsxs)(r.p,{children:["Si vous ne traitez pas l'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Drag Over"})," pour un objet d\xe9posable, cet objet sera mis en surbrillance pour toutes les op\xe9rations de glissement, quels que soient la nature et le type des donn\xe9es d\xe9plac\xe9es."]}),"\n",(0,s.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Drag Over"})," est le moyen par lequel vous contr\xf4lez la premi\xe8re phase d'une op\xe9ration de glisser-d\xe9poser. Vous pouvez non seulement tester si les donn\xe9es d\xe9plac\xe9es sont d'un type compatible avec l'objet de destination, puis accepter ou rejeter le glissement; vous pouvez simultan\xe9ment avertir l'utilisateur de ce fait, car 4D met en \xe9vidence (ou non) l'objet de destination, en fonction de votre d\xe9cision."]}),"\n",(0,s.jsxs)(r.p,{children:["Le code g\xe9rant un \xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Drag Over"})," doit \xeatre court et s'ex\xe9cuter rapidement, car cet \xe9v\xe9nement est envoy\xe9 \xe0 plusieurs reprises \xe0 l'objet de destination courant, en raison des mouvements de la souris."]}),"\n",(0,s.jsx)(r.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/fr/19/Events/onBeginDragOver",children:(0,s.jsx)(r.code,{children:"On Begin Drag Over"})})})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,o={},l=null,a=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,s)&&!c.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:t,type:e,key:l,ref:a,props:o,_owner:d.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var s=n(296540);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);