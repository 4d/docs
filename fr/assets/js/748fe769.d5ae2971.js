/*! For license information please see 748fe769.d5ae2971.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79407],{654732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(474848),o=n(28453);const s={id:"onActivate",title:"Sur activation"},i=void 0,a={id:"Events/onActivate",title:"Sur activation",description:"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                                                                                           |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onActivate.md",sourceDirName:"Events",slug:"/Events/onActivate",permalink:"/docs/fr/19/Events/onActivate",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonActivate.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onActivate",title:"Sur activation"},sidebar:"docs",previous:{title:"Vue d\u2019ensemble",permalink:"/docs/fr/19/Events/overview"},next:{title:"On After Edit",permalink:"/docs/fr/19/Events/onAfterEdit"}},c={},l=[{value:"Description",id:"description",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Code"}),(0,r.jsx)(t.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(t.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"11"}),(0,r.jsx)(t.td,{children:"Formulaire"}),(0,r.jsx)(t.td,{children:"La fen\xeatre du formulaire devient la fen\xeatre de premier plan ou bien le conteneur du sous-formulaire obtient le focus"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Si la fen\xeatre d'un formulaire a \xe9t\xe9 envoy\xe9e en arri\xe8re-plan, cet \xe9v\xe9nement est appel\xe9 lorsque la fen\xeatre devient la fen\xeatre active."}),"\n",(0,r.jsxs)(t.p,{children:["Cet \xe9v\xe9nement s'applique au formulaire dans son ensemble et non \xe0 un objet particulier. Par cons\xe9quent, si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire ",(0,r.jsx)(t.code,{children:"On Activate"})," est s\xe9lectionn\xe9e, seul le formulaire aura sa m\xe9thode formulaire appel\xe9e."]}),"\n",(0,r.jsxs)(t.p,{children:["Dans le cas d'un sous-formulaire, cet \xe9v\xe9nement est pass\xe9 au sous-formulaire lorsque le conteneur obtient le focus (s'il poss\xe8de la propri\xe9t\xe9 ",(0,r.jsx)(t.a,{href:"/docs/fr/19/FormObjects/propertiesEntry#focusable",children:"focusable"}),")."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);