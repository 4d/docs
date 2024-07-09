/*! For license information please see bfc4f90e.facf117b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78892],{106958:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>i});var o=r(474848),s=r(28453);const d={id:"vp-add-range-name",title:"VP ADD RANGE NAME"},a=void 0,t={id:"ViewPro/commands/vp-add-range-name",title:"VP ADD RANGE NAME",description:"VP ADD RANGE NAME ( rangeObj Text { ; options : Object } )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-add-range-name.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-add-range-name",permalink:"/docs/es/ViewPro/commands/vp-add-range-name",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-range-name.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-add-range-name",title:"VP ADD RANGE NAME"},sidebar:"docs",previous:{title:"VP ADD FORMULA NAME",permalink:"/docs/es/ViewPro/commands/vp-add-formula-name"},next:{title:"VP ADD SELECTION",permalink:"/docs/es/ViewPro/commands/vp-add-selection"}},c={},i=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:4},{value:"Ejemplo",id:"Ejemplo",level:4},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP ADD RANGE NAME"})," ( ",(0,o.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,o.jsx)(n.em,{children:"name"})," : Text { ; ",(0,o.jsx)(n.em,{children:"options"})," : Object } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rangeObj"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Objeto rango"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"name"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Nombre de la f\xf3rmula"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"options"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Opciones de la f\xf3rmula temporal"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.code,{children:"VP ADD RANGE NAME"})," crea o modifica un rango con nombre en el documento abierto."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Los rangos nombrados creados por este comando se guardan con el documento."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"rangeObj"}),", pase el rango que quiere nombrar, y pase el nuevo nombre del rango en ",(0,o.jsx)(n.em,{children:"name"}),". Si el nombre ya se utiliza en el mismo alcance, el nuevo rango nombrado sustituye al existente. Tenga en cuenta que puede utilizar el mismo nombre para diferentes alcances (ver m\xe1s adelante)."]}),"\n",(0,o.jsxs)(n.p,{children:["Puede pasar un objeto con las propiedades adicionales para el rango nombrado en ",(0,o.jsx)(n.em,{children:"options"}),". Se soportan las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Propiedad"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"scope"}),(0,o.jsx)(n.td,{children:"Number"}),(0,o.jsxs)(n.td,{children:["Alcance del rango. Puede pasar el \xedndice de hojas (el conteo comienza en 0) o usar las siguientes constantes: ",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"vk current sheet"})}),(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"vk workbook"})}),"El alcance determina si un nombre de rango es local en una hoja de trabajo determinada (",(0,o.jsx)(n.em,{children:"scope"}),"=sheet index o ",(0,o.jsx)(n.code,{children:"vk current sheet"}),"), o global en todo el libro de trabajo (",(0,o.jsx)(n.em,{children:"scope"}),"=",(0,o.jsx)(n.code,{children:"vk workbook"}),")."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"comment"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"Comentario asociado al rango nombrado"})]})]})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Un rango nombrado es en realidad una f\xf3rmula nombrada que contiene coordenadas. ",(0,o.jsx)(n.code,{children:"VP ADD RANGE NAME"})," facilita la creaci\xf3n de rangos con nombre, pero tambi\xe9n puede utilizar el m\xe9todo ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-add-formula-name",children:(0,o.jsx)(n.code,{children:"VP ADD FORMULA NAME"})})," para crear rangos temporales."]}),"\n",(0,o.jsxs)(n.li,{children:["Las f\xf3rmulas que definen rangos con nombre pueden recuperarse con el m\xe9todo ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-formula-by-name",children:(0,o.jsx)(n.code,{children:"VP Get formula by name"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Quiere crear un rango nombrado para un rango de celdas:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";2;10)\nVP ADD RANGE NAME($range;"Total1")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-names",children:"VP Get names"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var o=r(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var o,d={},i=null,l=null;for(o in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,o)&&!c.hasOwnProperty(o)&&(d[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===d[o]&&(d[o]=n[o]);return{$$typeof:s,type:e,key:i,ref:l,props:d,_owner:t.current}}n.Fragment=d,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>t});var o=r(296540);const s={},d=o.createContext(s);function a(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);