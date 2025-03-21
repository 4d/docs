"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32584"],{669332:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>i,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/all-records","title":"ALL RECORDS","description":"ALL RECORDS {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/all-records.md","sourceDirName":"commands-legacy","slug":"/commands/all-records","permalink":"/docs/es/20-R7/commands/all-records","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fall-records.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"all-records","title":"ALL RECORDS","slug":"/commands/all-records","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Selecci\xf3n","permalink":"/docs/es/20-R7/commands/theme/Selection"},"next":{"title":"APPLY TO SELECTION","permalink":"/docs/es/20-R7/commands/apply-to-selection"}}'),d=n("785893"),l=n("250065");let o={id:"all-records",title:"ALL RECORDS",slug:"/commands/all-records",displayed_sidebar:"docs"},t=void 0,c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"ALL RECORDS"})," {( ",(0,d.jsx)(s.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Par\xe1metro"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"tabla"}),(0,d.jsx)(s.td,{children:"Table"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Tabla de la cual seleccionar todos los registros o Tabla por defecto, si se omite"})]})})]}),"\n",(0,d.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(s.p,{children:["ALL RECORDS selecciona todos los registros de ",(0,d.jsx)(s.em,{children:"tabla"})," para el proceso actual. ALL RECORDS hace del primer registro de la selecci\xf3n el registro actual y lo carga en memoria. ALL RECORDS devuelve los registros en el orden por defecto, que es el orden en el cual los registros son almacenados en el disco."]}),"\n",(0,d.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(s.p,{children:"El siguiente ejemplo muestra todos los registros de la tabla [Personas]:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:"\xa0ALL RECORDS([Personas])\xa0// Selecci\xf3n de todos los registros en la tabla\n\xa0DISPLAY SELECTION([Personas])\xa0// Mostrar los registros en el formulario de salida\n"})}),"\n",(0,d.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/es/20-R7/commands/display-selection",children:"DISPLAY SELECTION"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/es/20-R7/commands/modify-selection",children:"MODIFY SELECTION"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/es/20-R7/commands/order-by",children:"ORDER BY"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/es/20-R7/commands/query",children:"QUERY"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/es/20-R7/commands/records-in-selection",children:"Records in selection"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/es/20-R7/commands/records-in-table",children:"Records in table"})]}),"\n",(0,d.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"N\xfamero de comando"}),(0,d.jsx)(s.td,{children:"47"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Hilo seguro"}),(0,d.jsx)(s.td,{children:"\u2713"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Modifica el registro actual"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Modifica la selecci\xf3n actual"}),(0,d.jsx)(s.td,{})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return o}});var r=n(667294);let d={},l=r.createContext(d);function o(e){let s=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);