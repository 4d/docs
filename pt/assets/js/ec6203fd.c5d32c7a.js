/*! For license information please see ec6203fd.c5d32c7a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9370],{309815:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=t(474848),s=t(28453);const n={id:"propertiesPrint",title:"Imprimir"},i=void 0,a={id:"FormObjects/propertiesPrint",title:"Imprimir",description:"Impress\xe3o quadro",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/FormObjects/properties_Print.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPrint",permalink:"/docs/pt/FormObjects/propertiesPrint",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Print.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"propertiesPrint",title:"Imprimir"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/pt/FormObjects/propertiesPlugIns"},next:{title:"Gama de valores",permalink:"/docs/pt/FormObjects/propertiesRangeOfValues"}},l={},c=[{value:"Impress\xe3o quadro",id:"impress\xe3o-quadro",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objectos suportados",id:"objectos-suportados",level:4}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"impress\xe3o-quadro",children:"Impress\xe3o quadro"}),"\n",(0,o.jsx)(r.p,{children:"This property handles the print mode for objects whose size can vary from one record to another depending on their contents. Estes objetos podem ser definidos para imprimir com uma moldura fixa ou vari\xe1vel. Fixed frame objects print within the confines of the object as it was created on the form. Variable frame objects expand during printing to include the entire contents of the object. Note that the width of objects printed as a variable size is not affected by this property; only the height varies automatically based on the contents of the object."}),"\n",(0,o.jsx)(r.p,{children:"You cannot place more than one variable frame object side-by-side on a form. You can place non-variable frame objects on either side of an object that will be printed with a variable size provided that the variable frame object is at least one line longer than the object beside it and that all objects are aligned on the top. If this condition is not respected, the contents of the other fields will be repeated for every horizontal slice of the variable frame object."}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Los comandos ",(0,o.jsx)(r.code,{children:"objeto Print"})," y ",(0,o.jsx)(r.code,{children:"Print form"})," no soportan esta propiedad."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"As op\xe7\xf5es de impress\xe3o s\xe3o:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["La opci\xf3n ",(0,o.jsx)(r.strong,{children:"Variable"})," / ",(0,o.jsx)(r.strong,{children:"Imprimir marco variable"})," marcada: 4D ampl\xeda o reduce el \xe1rea del objeto del formulario para imprimir todos los subregistros."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Opci\xf3n fija (truncamiento)"})," / ",(0,o.jsx)(r.strong,{children:"Imprimir marco variable"})," no seleccionada: 4D s\xf3lo imprime el contenido que aparece en el \xe1rea del objeto. O formul\xe1rio s\xf3 \xe9 impresso uma vez e os conte\xfados n\xe3o impressos s\xe3o ignorados."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Fijo (M\xfaltiples Registros)"})," (s\xf3lo subformularios): se mantiene el tama\xf1o inicial del \xe1rea del subformulario pero 4D imprime el formulario varias veces para imprimir todos los registros."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Esta propiedad puede definirse por programaci\xf3n utilizando el comando ",(0,o.jsx)(r.code,{children:"OBJECT SET PRINT VARIABLE FRAME"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Nome"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Tipo de dados"}),(0,o.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"printFrame"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"string"}),(0,o.jsx)(r.td,{children:'"fixed", "variable", (apenas subformul\xe1rio) "fixedMultiple"'})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"objectos-suportados",children:"Objectos suportados"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/subformOverview",children:"Subformularios"})," (s\xf3lo subformularios lista) - ",(0,o.jsx)(r.a,{href:"/docs/pt/FormObjects/writeProAreaOverview",children:"\xc1reas 4D Write Pro"})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,r,t)=>{var o=t(296540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var o,n={},c=null,d=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,o)&&!l.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===n[o]&&(n[o]=r[o]);return{$$typeof:s,type:e,key:c,ref:d,props:n,_owner:a.current}}r.Fragment=n,r.jsx=c,r.jsxs=c},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var o=t(296540);const s={},n=o.createContext(s);function i(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);