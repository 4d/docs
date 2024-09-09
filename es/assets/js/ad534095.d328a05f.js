/*! For license information please see ad534095.d328a05f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87254],{18108:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(474848),a=n(28453);const i={id:"formSize",title:"Tama\xf1o formulario"},s=void 0,l={id:"FormEditor/formSize",title:"Tama\xf1o formulario",description:"4D permite definir el tama\xf1o tanto del formulario como de la ventana. Estas propiedades son interdependientes y su interfaz de aplicaci\xf3n es el resultado de su interacci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/FormEditor/properties_FormSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/formSize",permalink:"/docs/es/FormEditor/formSize",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_FormSize.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"formSize",title:"Tama\xf1o formulario"},sidebar:"docs",previous:{title:"Propiedades de los formularios",permalink:"/docs/es/FormEditor/propertiesForm"},next:{title:"Marcadores",permalink:"/docs/es/FormEditor/markers"}},t={},d=[{value:"Tama\xf1o basado en",id:"tama\xf1o-basado-en",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Altura",id:"altura",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Margen hor.",id:"margen-hor",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:4},{value:"Margen hor.",id:"margen-hor-1",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4},{value:"Ancho",id:"ancho",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-4",level:4}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["4D permite definir el tama\xf1o tanto del formulario como de la ",(0,o.jsx)(r.a,{href:"/docs/es/FormEditor/windowSize",children:"ventana"}),". Estas propiedades son interdependientes y su interfaz de aplicaci\xf3n es el resultado de su interacci\xf3n."]}),"\n",(0,o.jsxs)(r.p,{children:["Las opciones de tama\xf1o dependen del valor de la opci\xf3n ",(0,o.jsx)(r.strong,{children:"Tama\xf1o basado en"}),"."]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"tama\xf1o-basado-en",children:"Tama\xf1o basado en"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Tama\xf1o autom\xe1tico"}),": el tama\xf1o del formulario ser\xe1 el necesario para mostrar todos los objetos, al que se a\xf1adir\xe1n los valores de margen (en p\xedxeles) introducidos en los campos ",(0,o.jsx)(r.a,{href:"#hor-margin",children:(0,o.jsx)(r.strong,{children:"Margen Hor"})})," y ",(0,o.jsx)(r.a,{href:"#vert-margin",children:(0,o.jsx)(r.strong,{children:"Margen Vertical"})}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Puede elegir esta opci\xf3n cuando desee utilizar objetos activos situados en un \xe1rea fuera de la pantalla (",(0,o.jsx)(r.em,{children:"es decir"}),", fuera del rect\xe1ngulo delimitador de la ventana) con una ventana de tama\xf1o autom\xe1tico. Gracias a esta opci\xf3n, la presencia de estos objetos no modificar\xe1 el tama\xf1o de la ventana."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Definir tama\xf1o"}),": el tama\xf1o del formulario se basar\xe1 en lo que introduzca (en p\xedxeles) en los campos ",(0,o.jsx)(r.a,{href:"#width",children:(0,o.jsx)(r.strong,{children:"Ancho"})})," y ",(0,o.jsx)(r.a,{href:"#height",children:(0,o.jsx)(r.strong,{children:"Alto"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"<object name>"}),": el tama\xf1o del formulario se basar\xe1 en la posici\xf3n del objeto formulario seleccionado. Por ejemplo, si elige un objeto situado en la parte inferior derecha del \xe1rea a mostrar, el tama\xf1o del formulario consistir\xe1 en un rect\xe1ngulo cuya esquina superior izquierda ser\xe1 el origen del formulario y la esquina inferior derecha corresponder\xe1 a la del objeto seleccionado, m\xe1s los valores de los m\xe1rgenes."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["For output forms, only the ",(0,o.jsx)(r.a,{href:"#hor-margin",children:(0,o.jsx)(r.strong,{children:"Hor margin"})})," or ",(0,o.jsx)(r.a,{href:"#width",children:(0,o.jsx)(r.strong,{children:"Width"})})," fields are available."]}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nombre"}),(0,o.jsx)(r.th,{children:"Tipos de datos"}),(0,o.jsx)(r.th,{children:"Valores posibles"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"formSizeAnchor"}),(0,o.jsx)(r.td,{children:"string"}),(0,o.jsx)(r.td,{children:"Nombre del objeto a utilizar para definir el tama\xf1o del formulario"})]})})]}),"\n",(0,o.jsx)(r.p,{children:"--- "}),"\n",(0,o.jsx)(r.h2,{id:"altura",children:"Altura"}),"\n",(0,o.jsxs)(r.p,{children:["Altura del formulario (en p\xedxeles) cuando el ",(0,o.jsx)(r.a,{href:"#size-based-on",children:"tama\xf1o del formulario"})," es definido en ",(0,o.jsx)(r.strong,{children:"Definir tama\xf1o"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nombre"}),(0,o.jsx)(r.th,{children:"Tipos de datos"}),(0,o.jsx)(r.th,{children:"Valores posibles"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"height"}),(0,o.jsx)(r.td,{children:"number"}),(0,o.jsx)(r.td,{children:"valor entero largo"})]})})]}),"\n",(0,o.jsx)(r.p,{children:"--- "}),"\n",(0,o.jsx)(r.h2,{id:"margen-hor",children:"Margen hor."}),"\n",(0,o.jsxs)(r.p,{children:["Valor a a\xf1adir (en p\xedxeles) al margen inferior del formulario cuando el ",(0,o.jsx)(r.a,{href:"#size-based-on",children:"tama\xf1o del formulario"})," est\xe1 definido en ",(0,o.jsx)(r.strong,{children:"Tama\xf1o autom\xe1tico"})," o ",(0,o.jsx)(r.code,{children:"\\<object name>"})]}),"\n",(0,o.jsx)(r.p,{children:"Este valor tambi\xe9n determina los m\xe1rgenes derechos de los formularios utilizados en el editor de etiquetas."}),"\n",(0,o.jsx)(r.h4,{id:"gram\xe1tica-json-2",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nombre"}),(0,o.jsx)(r.th,{children:"Tipos de datos"}),(0,o.jsx)(r.th,{children:"Valores posibles"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"rightMargin"}),(0,o.jsx)(r.td,{children:"number"}),(0,o.jsx)(r.td,{children:"valor entero largo"})]})})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"margen-hor-1",children:"Margen hor."}),"\n",(0,o.jsxs)(r.p,{children:["Valor a a\xf1adir (en p\xedxeles) al margen inferior del formulario cuando el ",(0,o.jsx)(r.a,{href:"#size-based-on",children:"tama\xf1o del formulario"})," est\xe1 definido en ",(0,o.jsx)(r.strong,{children:"Tama\xf1o autom\xe1tico"})," o ",(0,o.jsx)(r.code,{children:"\\<object name>"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"Este valor tambi\xe9n determina los m\xe1rgenes superiores de los formularios utilizados en el editor de etiquetas."}),"\n",(0,o.jsx)(r.h4,{id:"gram\xe1tica-json-3",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nombre"}),(0,o.jsx)(r.th,{children:"Tipos de datos"}),(0,o.jsx)(r.th,{children:"Valores posibles"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"bottomMargin"}),(0,o.jsx)(r.td,{children:"number"}),(0,o.jsx)(r.td,{children:"valor entero largo"})]})})]}),"\n",(0,o.jsx)(r.p,{children:"--- "}),"\n",(0,o.jsx)(r.h2,{id:"ancho",children:"Ancho"}),"\n",(0,o.jsxs)(r.p,{children:["Ancho del formulario (en p\xedxeles) cuando el ",(0,o.jsx)(r.a,{href:"#size-based-on",children:"tama\xf1o del formulario"})," est\xe1 definido en ",(0,o.jsx)(r.strong,{children:"Definir tama\xf1o"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"gram\xe1tica-json-4",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Nombre"}),(0,o.jsx)(r.th,{children:"Tipos de datos"}),(0,o.jsx)(r.th,{children:"Valores posibles"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"ancho"}),(0,o.jsx)(r.td,{children:"number"}),(0,o.jsx)(r.td,{children:"valor entero largo"})]})})]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},221020:(e,r,n)=>{var o=n(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var o,i={},d=null,c=null;for(o in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,o)&&!t.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:l.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>l});var o=n(296540);const a={},i=o.createContext(a);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);