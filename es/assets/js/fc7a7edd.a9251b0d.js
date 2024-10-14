"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5822],{350376:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=o(474848),i=o(28453);const t={id:"onColumnResize",title:"On Column Resize"},d=void 0,r={id:"Events/onColumnResize",title:"On Column Resize",description:"| Code | Puede ser llamado por                                                                                                                                                                     | Definici\xf3n                                                                                                                                |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Events/onColumnResize.md",sourceDirName:"Events",slug:"/Events/onColumnResize",permalink:"/docs/es/Events/onColumnResize",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonColumnResize.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onColumnResize",title:"On Column Resize"},sidebar:"docs",previous:{title:"On Column Moved",permalink:"/docs/es/Events/onColumnMoved"},next:{title:"On Data Change",permalink:"/docs/es/Events/onDataChange"}},l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"List Box",id:"list-box",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Ejemplo",id:"ejemplo",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Puede ser llamado por"}),(0,s.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"33"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/docs/es/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,s.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-columns",children:"Columna de List Box "})]}),(0,s.jsx)(n.td,{children:"El ancho de una columna es modificado directamente por el usuario o en consecuencia de un redimensionamiento de la ventana del formulario"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.h3,{id:"list-box",children:"List Box"}),"\n",(0,s.jsxs)(n.p,{children:['Este evento se genera cuando el ancho de una columna en el list box es modificado por un usuario. El evento se activa "en directo", ',(0,s.jsx)(n.em,{children:"es decir"}),", se env\xeda continuamente durante el evento, mientras se redimensiona el list box o la columna en cuesti\xf3n. Este redimensionamiento es realizado manualmente por un usuario, o puede ocurrir como resultado de que el list box y su(s) columna(s) sean redimensionados junto con la propia ventana del formulario (ya sea que el formulario sea redimensionado manualmente"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["El evento ",(0,s.jsx)(n.code,{children:"On Column Resize"})," no se activa cuando se redimensiona una ",(0,s.jsx)(n.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#about-the-fake-blank-column",children:"falsa columna"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,s.jsxs)(n.p,{children:["Este evento se genera cuando el ancho de una columna es modificado por un usuario. En este contexto, el ",(0,s.jsx)(n.a,{href:"/docs/es/Events/overview#event-object",children:"objeto evento"})," devuelto por el comando ",(0,s.jsx)(n.code,{children:"FORM Event"})," contiene:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"entero largo"}),(0,s.jsx)(n.td,{children:"On Column Resize"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'"On Column Resize"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheetName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nombre de la hoja del evento"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"range"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Rango de celdas de las columnas cuyo ancho ha cambiado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"True si la columna de encabezado de l\xednea (primera columna) se redimensiona, si no, false"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Column Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))\n End if\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>r});var s=o(296540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);