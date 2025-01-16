"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45779"],{994156:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>r,metadata:()=>a,assets:()=>i,toc:()=>o,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/get-missing-table-names","title":"GET MISSING TABLE NAMES","description":"GET MISSING TABLE NAMES ( tabfalt )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-missing-table-names.md","sourceDirName":"commands-legacy","slug":"/commands/get-missing-table-names","permalink":"/docs/es/commands/get-missing-table-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-missing-table-names.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-missing-table-names","title":"GET MISSING TABLE NAMES","slug":"/commands/get-missing-table-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET FIELD PROPERTIES","permalink":"/docs/es/commands/get-field-properties"},"next":{"title":"GET RELATION PROPERTIES","permalink":"/docs/es/commands/get-relation-properties"}}'),t=n("785893"),l=n("250065");let r={id:"get-missing-table-names",title:"GET MISSING TABLE NAMES",slug:"/commands/get-missing-table-names",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET MISSING TABLE NAMES"})," ( ",(0,t.jsx)(s.em,{children:"tabfalt"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe1metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tabfalt"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nombres de las tablas faltantes en la base"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(s.p,{children:["El comando GET MISSING TABLE NAMES devuelve los nombres de todas las tablas faltantes de la base en el array ",(0,t.jsx)(s.em,{children:"tabFalt"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Las tablas faltantes son tablas cuyos datos est\xe1n presentes en el archivo de datos pero que no existen a nivel de la estructura actual. Esto puede suceder cuando un archivo de datos se abre con versiones diferentes de la estructura."}),"\n",(0,t.jsx)(s.p,{children:"Por lo general, el escenario es el siguiente:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"el desarrollador ofrece una estructura con las tablas A, B y C,"}),"\n",(0,t.jsx)(s.li,{children:"el usuario a\xf1ade tablas personalizadas D y E, utilizando, por ejemplo, los comandos  integrados de 4D, y guarda los datos en estas tablas,"}),"\n",(0,t.jsxs)(s.li,{children:["El desarrollador ofrece una nueva versi\xf3n de la estructura, que no contiene las tablas D y E.",(0,t.jsx)(s.br,{}),'\nEn este caso, la versi\xf3n usuario de la base a\xfan contiene los datos de las tablas D y E, pero no son accesibles. El comando GET MISSING TABLE NAMES devolver\xe1 los nombres "D" y "E".']}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Una vez haya identificado las tablas faltantes de la base, puede reactivarlas v\xeda el comando ",(0,t.jsx)(s.a,{href:"/docs/es/commands/regenerate-missing-table",title:"REGENERATE MISSING TABLE",children:"REGENERATE MISSING TABLE"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Nota:"})," los datos de las tablas faltantes se borran cuando se compacta el archivo de datos (si las tablas no han sido regeneradas)."]}),"\n",(0,t.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/es/commands/regenerate-missing-table",children:"REGENERATE MISSING TABLE"})}),"\n",(0,t.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"N\xfamero de comando"}),(0,t.jsx)(s.td,{children:"1125"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Hilo seguro"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return r}});var a=n(667294);let t={},l=a.createContext(t);function r(e){let s=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);