/*! For license information please see ce0bb692.4e0ea703.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18196],{208680:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=o(474848),r=o(28453);const s={id:"onCloseBox",title:"On Close Box"},i=void 0,l={id:"Events/onCloseBox",title:"On Close Box",description:"| Code | Puede ser llamado por | Definici\xf3n                                       |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Events/onCloseBox.md",sourceDirName:"Events",slug:"/Events/onCloseBox",permalink:"/docs/es/20/Events/onCloseBox",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onCloseBox",title:"On Close Box"},sidebar:"docs",previous:{title:"On Clicked",permalink:"/docs/es/20/Events/onClicked"},next:{title:"On Close Detail",permalink:"/docs/es/20/Events/onCloseDetail"}},d={},a=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Ejemplo",id:"Ejemplo",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Puede ser llamado por"}),(0,t.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"22"}),(0,t.jsx)(n.td,{children:"Formulario"}),(0,t.jsx)(n.td,{children:"Se ha presionado la caja de cierre de la ventana"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El evento ",(0,t.jsx)(n.code,{children:"On Close Box"})," se genera cuando el usuario hace clic en una caja de cierre de la ventana."]}),"\n",(0,t.jsx)(n.h3,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Este ejemplo muestra c\xf3mo responder a un evento de cierre de ventana con un formulario utilizado para la entrada de datos de registro:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  //M\xe9todo para un formulario de entrada\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("Este registro ha sido modificado. Save Changes?")\n          Save Changes?")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n //statement(s)\n End case\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,n,o)=>{var t=o(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,o){var t,s={},a=null,c=null;for(t in void 0!==o&&(a=""+o),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:r,type:e,key:a,ref:c,props:s,_owner:l.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var t=o(296540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);