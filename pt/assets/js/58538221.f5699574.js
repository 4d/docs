/*! For license information please see 58538221.f5699574.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25777],{671420:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=o(474848),n=o(28453);const s={id:"onScroll",title:"On Scroll"},i=void 0,c={id:"Events/onScroll",title:"On Scroll",description:"| Code | Pode ser chamado por                                                                                                                                | Defini\xe7\xe3o                                                                                  |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onScroll.md",sourceDirName:"Events",slug:"/Events/onScroll",permalink:"/docs/pt/20/Events/onScroll",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonScroll.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onScroll",title:"On Scroll"},sidebar:"docs",previous:{title:"On Row Resize",permalink:"/docs/pt/20/Events/onRowResize"},next:{title:"On Selection Change",permalink:"/docs/pt/20/Events/onSelectionChange"}},l={},d=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2},{value:"Entrada de imagem",id:"Entrada-de-imagem",level:3},{value:"List box",id:"List-box",level:3}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Code"}),(0,r.jsx)(t.th,{children:"Pode ser chamado por"}),(0,r.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"59"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/inputOverview",children:"Input"})," of the ",(0,r.jsx)(t.code,{children:"picture"})," ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})]}),(0,r.jsx)(t.td,{children:"The user scrolls the contents of a picture object or list box using the mouse or keyboard."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(t.p,{children:"Esse evento pode ser gerado no contexto de uma entrada imagem ou de um list box."}),"\n",(0,r.jsxs)(t.p,{children:["This event is triggered after any other user event related to the scrolling action (",(0,r.jsx)(t.a,{href:"/docs/pt/20/Events/onClicked",children:"On Clicked"}),", ",(0,r.jsx)(t.a,{href:"/docs/pt/20/Events/onAfterKeystroke",children:"On After Keystroke"}),", etc.). The event is only generated in the object method (not in the form method)."]}),"\n",(0,r.jsxs)(t.p,{children:["The event is triggered when the scroll is the result of a user action: using the scroll bars and/or cursors, using the mouse wheel or ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"the keyboard"}),". It is not generated when the object is scrolled due to the execution of the ",(0,r.jsx)(t.code,{children:"OBJECT SET SCROLL POSITION"})," command."]}),"\n",(0,r.jsx)(t.h3,{id:"Entrada-de-imagem",children:"Entrada de imagem"}),"\n",(0,r.jsxs)(t.p,{children:["The event is generated as soon as a user scrolls a picture within the picture input (field or variable) that contains it. You can scroll the contents of a picture area when the size of the area is smaller than its contents and the ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesDisplay#picture-format",children:"display format"}),' is "Truncated (non Centered)".']}),"\n",(0,r.jsx)(t.h3,{id:"List-box",children:"List box"}),"\n",(0,r.jsx)(t.p,{children:"The event is generated as soon as a user scrolls the rows or columns of the list box."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,o)=>{var r=o(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,s={},d=null,a=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:d,ref:a,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var r=o(296540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);