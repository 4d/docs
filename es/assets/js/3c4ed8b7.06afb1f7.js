"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75519"],{895095:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"Events/onVpRangeChanged","title":"On VP Range Changed","description":"| Code | Puede ser llamado por                                   | Definici\xf3n                                                                                                                                                |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Events/onVpRangeChanged.md","sourceDirName":"Events","slug":"/Events/onVpRangeChanged","permalink":"/docs/es/Events/onVpRangeChanged","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpRangeChanged.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onVpRangeChanged","title":"On VP Range Changed"},"sidebar":"docs","previous":{"title":"On Validate","permalink":"/docs/es/Events/onValidate"},"next":{"title":"On VP Ready","permalink":"/docs/es/Events/onVpReady"}}'),t=d("785893"),s=d("250065");let i={id:"onVpRangeChanged",title:"On VP Range Changed"},a=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Puede ser llamado por"}),(0,t.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"61"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})}),(0,t.jsx)(n.td,{children:"El rango de celdas 4D View Pro ha cambiado (por ejemplo, un c\xe1lculo de f\xf3rmula, un valor eliminado de una celda, etc.)"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"Este evento se genera cuando se produce un cambio dentro de un rango de celdas en el documento 4D View Pro."}),"\n",(0,t.jsx)(n.p,{children:"El objeto devuelto por el comando FORM Event contiene:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propiedad"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objectName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:"entero largo"}),(0,t.jsx)(n.td,{children:"On VP Range Changed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"description"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'"On VP Range Changed"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheetName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nombre de la hoja del evento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"range"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Rango de celdas del cambio"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"changedCells"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Rango que contiene s\xf3lo las celdas modificadas. Puede ser una gama combinada."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"action"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsxs)(n.td,{children:["El tipo de operaci\xf3n que genera el evento:",(0,t.jsx)(n.li,{children:'"clear" - Una operaci\xf3n de borrado de valores de rango'}),(0,t.jsx)(n.li,{children:'"dragDrop" - Una operaci\xf3n de arrastrar y soltar'}),(0,t.jsx)(n.li,{children:'"dragFill" - Una operaci\xf3n de arrastrar y rellenar'}),(0,t.jsx)(n.li,{children:'"evaluateFormula" - Definir una f\xf3rmula en un rango de celdas especificado'}),(0,t.jsx)(n.li,{children:'"paste" - Una operaci\xf3n de pegar'}),(0,t.jsx)(n.li,{children:'"setArrayFormula" - Definir una f\xf3rmula en un rango de celdas especificado'}),(0,t.jsx)(n.li,{children:'"sort" - Ordenar un rango de celdas'})]})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Ver tambi\xe9n ",(0,t.jsx)(n.a,{href:"/docs/es/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return a},a:function(){return i}});var r=d(667294);let t={},s=r.createContext(t);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);