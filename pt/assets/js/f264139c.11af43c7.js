/*! For license information please see f264139c.11af43c7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3369],{426274:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(474848),r=n(28453);const s={id:"onCloseBox",title:"On Close Box"},d=void 0,l={id:"Events/onCloseBox",title:"On Close Box",description:"| Code | Pode ser chamado por | Defini\xe7\xe3o                              |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Events/onCloseBox.md",sourceDirName:"Events",slug:"/Events/onCloseBox",permalink:"/docs/pt/Events/onCloseBox",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onCloseBox",title:"On Close Box"},sidebar:"docs",previous:{title:"On Clicked",permalink:"/docs/pt/Events/onClicked"},next:{title:"On Close Detail",permalink:"/docs/pt/Events/onCloseDetail"}},i={},c=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2},{value:"Exemplo",id:"Exemplo",level:3}];function a(e){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Pode ser chamado por"}),(0,t.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"22"}),(0,t.jsx)(o.td,{children:"Formul\xe1rio"}),(0,t.jsx)(o.td,{children:"A caixa de fecho da janela foi clicada"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["El evento ",(0,t.jsx)(o.code,{children:"On Close Box"})," se genera cuando el usuario hace clic en una caja de cierre de la ventana."]}),"\n",(0,t.jsx)(o.h3,{id:"Exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.p,{children:"Este exemplo mostra como responder a um evento de fecho de janela com um formul\xe1rio utilizado para a introdu\xe7\xe3o de dados de registo:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'  //Method for an input form\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("This record has been modified. Save Changes?")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n End case\n'})})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,o,n)=>{var t=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,n){var t,s={},c=null,a=null;for(t in void 0!==n&&(c=""+n),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(a=o.ref),o)d.call(o,t)&&!i.hasOwnProperty(t)&&(s[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===s[t]&&(s[t]=o[t]);return{$$typeof:r,type:e,key:c,ref:a,props:s,_owner:l.current}}o.Fragment=s,o.jsx=c,o.jsxs=c},474848:(e,o,n)=>{e.exports=n(221020)},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>l});var t=n(296540);const r={},s=t.createContext(r);function d(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);