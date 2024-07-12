/*! For license information please see 11939cbf.80d3e91d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63545],{567700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(474848),r=n(28453);const s={id:"onDeleteAction",title:"On Delete Action"},i=void 0,c={id:"Events/onDeleteAction",title:"On Delete Action",description:"| Code | Pode ser chamado por                                                                            | Defini\xe7\xe3o                           |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onDeleteAction.md",sourceDirName:"Events",slug:"/Events/onDeleteAction",permalink:"/docs/pt/20/Events/onDeleteAction",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDeleteAction.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onDeleteAction",title:"On Delete Action"},sidebar:"docs",previous:{title:"On Deactivate",permalink:"/docs/pt/20/Events/onDeactivate"},next:{title:"On Display Detail",permalink:"/docs/pt/20/Events/onDisplayDetail"}},a={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function l(e){const t={a:"a",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Code"}),(0,o.jsx)(t.th,{children:"Pode ser chamado por"}),(0,o.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"58"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.a,{href:"/docs/pt/20/FormObjects/listOverview",children:"Lista hier\xe1rquica"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})]}),(0,o.jsx)(t.td,{children:"O utilizador tenta eliminar um item"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["This event is generated each time a user attempts to delete the selected item(s) by pressing a deletion key (",(0,o.jsx)(t.strong,{children:"Delete"})," or ",(0,o.jsx)(t.strong,{children:"Backspace"}),") or selecting a menu item whose associated standard action is 'Clear' (such as the ",(0,o.jsx)(t.strong,{children:"Clear"})," command in the ",(0,o.jsx)(t.strong,{children:"Edit"})," menu)."]}),"\n",(0,o.jsx)(t.p,{children:"Note that generating the event is the only action carried out by 4D: the program does not delete any items. It is up to the developer to handle the deletion and any prior warning messages that are displayed."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,s={},d=null,l=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!a.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:d,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(296540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);