/*! For license information please see 919ee1fc.b6a00c9f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64156],{357013:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var t=o(474848),r=o(28453);const s={id:"onScroll",title:"On Scroll"},a=void 0,d={id:"Events/onScroll",title:"On Scroll",description:"| Code | Puede ser llamado por                                                                                                                                    | Definici\xf3n                                                                                                     |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/Events/onScroll.md",sourceDirName:"Events",slug:"/Events/onScroll",permalink:"/docs/es/20-R4/Events/onScroll",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonScroll.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"onScroll",title:"On Scroll"},sidebar:"docs",previous:{title:"On Row Resize",permalink:"/docs/es/20-R4/Events/onRowResize"},next:{title:"On Selection Change",permalink:"/docs/es/20-R4/Events/onSelectionChange"}},l={},i=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Entrada de imagen",id:"Entrada-de-imagen",level:3},{value:"List box",id:"List-box",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Puede ser llamado por"}),(0,t.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"59"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R4/FormObjects/inputOverview",children:"\xc1rea de entrada"})," de ",(0,t.jsx)(n.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#type",children:"tipo"})," ",(0,t.jsx)(n.code,{children:"imagen"})," - ",(0,t.jsx)(n.a,{href:"/docs/es/20-R4/FormObjects/listboxOverview",children:"List Box"})]}),(0,t.jsx)(n.td,{children:"El usuario se desplaza por el contenido de un objeto imagen o de un list box utilizando el rat\xf3n o el teclado."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"Este evento puede generarse en el contexto de una entrada de imagen o de un list box."}),"\n",(0,t.jsxs)(n.p,{children:["Este evento se desencadena despu\xe9s de cualquier otro evento usuario relacionado con la acci\xf3n de desplazamiento (",(0,t.jsx)(n.a,{href:"/docs/es/20-R4/Events/onClicked",children:"On Clicked"}),", ",(0,t.jsx)(n.a,{href:"/docs/es/20-R4/Events/onAfterKeystroke",children:"On After Keystroke"}),", etc.). El evento s\xf3lo se genera en el m\xe9todo objeto (no en el m\xe9todo formulario)."]}),"\n",(0,t.jsxs)(n.p,{children:["El evento se dispara cuando el desplazamiento es el resultado de una acci\xf3n del usuario: utilizando las barras de desplazamiento y/o los cursores, utilizando la rueda del rat\xf3n o ",(0,t.jsx)(n.a,{href:"/docs/es/20-R4/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"el teclado"}),". No se genera cuando el objeto se desplaza debido a la ejecuci\xf3n del comando ",(0,t.jsx)(n.code,{children:"OBJECT SET SCROLL POSITION"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"Entrada-de-imagen",children:"Entrada de imagen"}),"\n",(0,t.jsxs)(n.p,{children:["El evento se genera en cuanto un usuario se desplaza por una imagen dentro de la entrada de imagen (campo o variable) que la contiene. Puede desplazar el contenido de un \xe1rea de imagen cuando el tama\xf1o del \xe1rea es menor que su contenido y el ",(0,t.jsx)(n.a,{href:"/docs/es/20-R4/FormObjects/propertiesDisplay#picture-format",children:"formato de visualizaci\xf3n"}),' es "Truncado (no centrado)".']}),"\n",(0,t.jsx)(n.h3,{id:"List-box",children:"List box"}),"\n",(0,t.jsx)(n.p,{children:"El evento se genera en cuanto un usuario se desplaza por las l\xedneas o columnas del list box."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,n,o)=>{var t=o(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,o){var t,s={},i=null,c=null;for(t in void 0!==o&&(i=""+o),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,t)&&!l.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:r,type:e,key:i,ref:c,props:s,_owner:d.current}}n.Fragment=s,n.jsx=i,n.jsxs=i},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>d});var t=o(296540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);