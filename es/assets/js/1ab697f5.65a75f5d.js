/*! For license information please see 1ab697f5.65a75f5d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15962],{500994:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(474848),i=r(28453);const s={id:"onSelectionChange",title:"On Selection Change"},o=void 0,l={id:"Events/onSelectionChange",title:"On Selection Change",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                        | Definici\xf3n                            |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Events/onSelectionChange.md",sourceDirName:"Events",slug:"/Events/onSelectionChange",permalink:"/docs/es/Events/onSelectionChange",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonSelectionChange.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onSelectionChange",title:"On Selection Change"},sidebar:"docs",previous:{title:"On Scroll",permalink:"/docs/es/Events/onScroll"},next:{title:"On Timer",permalink:"/docs/es/Events/onTimer"}},d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Formulario listado",id:"formulario-listado",level:3},{value:"Lista jer\xe1rquica",id:"lista-jer\xe1rquica",level:3},{value:"\xc1rea de entrada y 4D Write Pro",id:"\xe1rea-de-entrada-y-4d-write-pro",level:3},{value:"List box",id:"list-box",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Puede ser llamado por"}),(0,t.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"31"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro"})," - Formulario - ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/listOverview",children:"Lista Jer\xe1rquica"})," - ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})]}),(0,t.jsx)(n.td,{children:"La selecci\xf3n en el objeto se modifica"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"Este evento puede generarse en diferentes contextos."}),"\n",(0,t.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,t.jsxs)(n.p,{children:["Se modifica la selecci\xf3n actual de l\xedneas o columnas. En este contexto, el ",(0,t.jsx)(n.a,{href:"/docs/es/Events/overview#event-object",children:"objeto evento"})," devuelto por el comando ",(0,t.jsx)(n.code,{children:"FORM Event"})," contiene:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propiedad"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:"entero largo"}),(0,t.jsx)(n.td,{children:"31"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"description"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'"On Selection Change"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objectName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheetName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nombre de la hoja del evento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oldSelections"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Rango de celdas antes del cambio"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"newSelections"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Rango de celdas luego del cambio"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Selection Change)\n    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))\n    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))\n End if\n'})}),"\n",(0,t.jsx)(n.h3,{id:"formulario-listado",children:"Formulario listado"}),"\n",(0,t.jsx)(n.p,{children:"El registro actual o la selecci\xf3n actual de l\xedneas se modifica en un formulario listado."}),"\n",(0,t.jsx)(n.h3,{id:"lista-jer\xe1rquica",children:"Lista jer\xe1rquica"}),"\n",(0,t.jsx)(n.p,{children:"Este evento se genera cada vez que se modifica la selecci\xf3n en la lista jer\xe1rquica tras un clic del rat\xf3n o una presi\xf3n del teclado."}),"\n",(0,t.jsx)(n.h3,{id:"\xe1rea-de-entrada-y-4d-write-pro",children:"\xc1rea de entrada y 4D Write Pro"}),"\n",(0,t.jsx)(n.p,{children:"La selecci\xf3n de texto o la posici\xf3n del cursor en el \xe1rea se modifica tras un clic o una presi\xf3n de tecla."}),"\n",(0,t.jsx)(n.h3,{id:"list-box",children:"List box"}),"\n",(0,t.jsx)(n.p,{children:"Este evento se genera cada vez que se modifica la selecci\xf3n actual de l\xedneas o de columnas del list box."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var t=r(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,s={},c=null,a=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:c,ref:a,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(296540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);