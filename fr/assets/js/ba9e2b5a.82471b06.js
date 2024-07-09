/*! For license information please see ba9e2b5a.82471b06.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92788],{15772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(474848),o=n(28453);const s={id:"onScroll",title:"On Scroll"},i=void 0,l={id:"Events/onScroll",title:"On Scroll",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                   | D\xe9finition                                                                                                    |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onScroll.md",sourceDirName:"Events",slug:"/Events/onScroll",permalink:"/docs/fr/19/Events/onScroll",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonScroll.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onScroll",title:"On Scroll"},sidebar:"docs",previous:{title:"On Row Resize",permalink:"/docs/fr/19/Events/onRowResize"},next:{title:"On Selection Change",permalink:"/docs/fr/19/Events/onSelectionChange"}},d={},c=[{value:"Description",id:"Description",level:2},{value:"Entr\xe9e d&#39;image",id:"Entr\xe9e-dimage",level:3},{value:"List box",id:"List-box",level:3}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Code"}),(0,r.jsx)(t.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(t.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"59"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Zone de saisie"})," de ",(0,r.jsx)(t.a,{href:"/docs/fr/19/FormObjects/propertiesObject#type",children:"type"})," ",(0,r.jsx)(t.code,{children:"image"})," - ",(0,r.jsx)(t.a,{href:"/docs/fr/19/FormObjects/listboxOverview",children:"List Box"})]}),(0,r.jsx)(t.td,{children:"L'utilisateur fait d\xe9filer le contenu d'un objet image ou d'une list box \xe0 l'aide de la souris ou du clavier."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Cet \xe9v\xe9nement peut \xeatre g\xe9n\xe9r\xe9 dans le contexte d'une entr\xe9e d'image ou d'une list box."}),"\n",(0,r.jsxs)(t.p,{children:["Il est d\xe9clench\xe9 apr\xe8s tout autre \xe9v\xe9nement utilisateur li\xe9 \xe0 l'action de d\xe9filement (",(0,r.jsx)(t.a,{href:"/docs/fr/19/Events/onClicked",children:"On Clicked"}),", ",(0,r.jsx)(t.a,{href:"/docs/fr/19/Events/onAfterKeystroke",children:"On After Keystroke"}),", etc.). L'\xe9v\xe9nement est uniquement g\xe9n\xe9r\xe9 dans la m\xe9thode objet (pas dans la m\xe9thode formulaire)."]}),"\n",(0,r.jsxs)(t.p,{children:["L'\xe9v\xe9nement est d\xe9clench\xe9 lorsque le d\xe9filement est le r\xe9sultat d'une action de l'utilisateur : \xe0 l'aide des barres de d\xe9filement et/ou des curseurs, \xe0 l'aide de la molette de la souris ou du ",(0,r.jsx)(t.a,{href:"/docs/fr/19/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"clavier"}),". Il n'est pas g\xe9n\xe9r\xe9 lors du d\xe9filement de l'objet en raison de l'ex\xe9cution de la commande ",(0,r.jsx)(t.code,{children:"OBJECT SET SCROLL POSITION"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"Entr\xe9e-dimage",children:"Entr\xe9e d'image"}),"\n",(0,r.jsxs)(t.p,{children:["L'\xe9v\xe9nement est g\xe9n\xe9r\xe9 d\xe8s qu'un utilisateur fait d\xe9filer une image dans l'entr\xe9e d'image (champ ou variable) qui la contient. Vous pouvez faire d\xe9filer le contenu d'une zone d'image lorsque la taille de la zone est plus petite que son contenu et que le ",(0,r.jsx)(t.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#picture-format",children:"format d'affichage"}),' est "Tronqu\xe9 (non centr\xe9)".']}),"\n",(0,r.jsx)(t.h3,{id:"List-box",children:"List box"}),"\n",(0,r.jsx)(t.p,{children:"L'\xe9v\xe9nement est g\xe9n\xe9r\xe9 d\xe8s qu'un utilisateur fait d\xe9filer les lignes ou les colonnes de la list box."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,a=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:a,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);