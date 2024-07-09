/*! For license information please see f67155d5.c99248c5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12684],{411011:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=r(474848),i=r(28453);const s={id:"print",title:"Imprimir"},o=void 0,d={id:"FormEditor/print",title:"Imprimir",description:"Settings",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/FormEditor/properties_Print.md",sourceDirName:"FormEditor",slug:"/FormEditor/print",permalink:"/docs/es/20/FormEditor/print",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Print.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"print",title:"Imprimir"},sidebar:"docs",previous:{title:"Men\xfa",permalink:"/docs/es/20/FormEditor/menu"},next:{title:"Tama\xf1o de la ventana",permalink:"/docs/es/20/FormEditor/windowSize"}},a={},l=[{value:"Settings",id:"Settings",level:2},{value:"Gram\xe1tica JSON",id:"Gram\xe1tica-JSON",level:4}];function c(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"Settings",children:"Settings"}),"\n",(0,t.jsx)(n.p,{children:"Permite definir los par\xe1metros de impresi\xf3n espec\xedficos para el formulario. Esta funcionalidad es \xfatil para ver los l\xedmites de p\xe1ginas de impresi\xf3n en el editor de formularios."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compatibilidad:"})," aunque estos par\xe1metros se tengan en cuenta cuando se imprime el formulario en modo Aplicaci\xf3n, se desaconseja confiar en esta funcionalidad para almacenar los par\xe1metros de impresi\xf3n del formulario, debido a las limitaciones relativas a la plataforma y al driver. Es muy recomendable utilizar los comandos 4D ",(0,t.jsx)(n.code,{children:"Print settings to BLOB"}),"/",(0,t.jsx)(n.code,{children:"BLOB to print settings"})," que son m\xe1s poderosos."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Puede modificar los siguientes par\xe1metros de impresi\xf3n:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Formato del papel"}),"\n",(0,t.jsx)(n.li,{children:"Orientaci\xf3n del papel"}),"\n",(0,t.jsx)(n.li,{children:"Escala de la p\xe1gina"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Las opciones disponibles dependen de la configuraci\xf3n del sistema."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"Gram\xe1tica-JSON",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nombre"}),(0,t.jsx)(n.th,{children:"Tipos de datos"}),(0,t.jsx)(n.th,{children:"Valores posibles"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pageFormat"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Propiedades de impresi\xf3n disponibles: paperName, paperWidth, paperHeight, orientation, scale"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paperName"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:'"A4", "US Letter"...'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paperWidth"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Utilizado si no se encuentra un papel llamado paperName. Requiere sufijo de unidad: pt, in, mm, cm."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paperHeight"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Utilizado si no se encuentra un papel llamado paperName. Requiere sufijo de unidad: pt, in, mm, cm."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"orientation"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:'"landscape" (por defecto es "portrait")'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scale"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"m\xednimo: 0"})]})]})]}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,n,r)=>{var t=r(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,c=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:c,props:s,_owner:d.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(296540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);