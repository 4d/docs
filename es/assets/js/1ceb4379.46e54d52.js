"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14960"],{812551:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>r,contentTitle:()=>a});var s=JSON.parse('{"id":"commands/create-entity-selection","title":"Create entity selection","description":"Create entity selection ( dsTable Object } ) : 4D.EntitySelection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/create-entity-selection.md","sourceDirName":"commands","slug":"/commands/create-entity-selection","permalink":"/docs/es/20-R7/commands/create-entity-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fcreate-entity-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-entity-selection","title":"Create entity selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE DATA FILE","permalink":"/docs/es/20-R7/commands/create-data-file"},"next":{"title":"Data file","permalink":"/docs/es/20-R7/commands/data-file"}}'),i=t("785893"),d=t("250065");let c={id:"create-entity-selection",title:"Create entity selection",displayed_sidebar:"docs"},a=void 0,l={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create entity selection"})," ( ",(0,i.jsx)(n.em,{children:"dsTable"})," : Table { ; ",(0,i.jsx)(n.em,{children:"settings"})," : Object } ) : 4D.EntitySelection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dsTable"}),(0,i.jsx)(n.td,{children:"Tabla"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Tabla de la base 4D cuya selecci\xf3n actual se utilizar\xe1 para construir la selecci\xf3n de entidades"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"settings"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Opciones de construcci\xf3n: context"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"4D.EntitySelection"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Selecci\xf3n de entidades que coinciden con la clase de datos relacionada con la tabla dada"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.code,{children:"Create entity selection"})," crea y devuelve una nueva entity selection ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/ORDA/entities#shareable-or-alterable-entity-selections",children:"modificable"})," relativa a la dataclass correspondiente con la ",(0,i.jsx)(n.em,{children:"dsTable"})," dada, de acuerdo con la selecci\xf3n actual de esta tabla."]}),"\n",(0,i.jsxs)(n.p,{children:["Si la selecci\xf3n actual est\xe1 ordenada, se crea una entity selection ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/ORDA/dsmapping#ordered-or-unordered-entity-selection",children:"ordenada"})," (se mantiene el orden de la selecci\xf3n actual). Si la selecci\xf3n actual no est\xe1 ordenada, se crea una selecci\xf3n de entidades no ordenada."]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"dsTable"})," no est\xe1 expuesto en ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/ds",children:(0,i.jsx)(n.code,{children:"ds"})}),", se devuelve un error. Este comando no puede utilizarse con un datastore remoto."]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"settings"}),", puede pasar un objeto que contenga la siguiente propiedad:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"context"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Etiqueta para el ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/ORDA/client-server-optimization",children:"contexto de optimizaci\xf3n"})," aplicado a la selecci\xf3n de entidades."]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"var $employees : cs.EmployeeSelection\nALL RECORDS([Employee])\n$employees:=Create entity selection([Employee])\n// La entity selection $employees ahora contiene un conjunto de referencias\n// en todas las entidades relacionadas con la clase de datos Employee\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/use-entity-selection",children:"USE ENTITY SELECTION"}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.a,{href:"/docs/es/20-R7/API/DataClassClass#newselection",children:(0,i.jsx)(n.code,{children:"dataClass.newSelection()"})})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1512"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var s=t(667294);let i={},d=s.createContext(i);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);