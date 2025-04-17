"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20295"],{945384:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>t});var l=JSON.parse('{"id":"commands-legacy/field","title":"Field","description":"Field ( numTabla ; numCamp ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/field.md","sourceDirName":"commands-legacy","slug":"/commands/field","permalink":"/docs/es/commands/field","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffield.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"field","title":"Field","slug":"/commands/field","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT STRUCTURE","permalink":"/docs/es/commands/export-structure"},"next":{"title":"Field name","permalink":"/docs/es/commands/field-name"}}'),s=d("785893"),r=d("250065");let i={id:"field",title:"Field",slug:"/commands/field",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Field"})," ( ",(0,s.jsx)(n.em,{children:"numTabla"})," ; ",(0,s.jsx)(n.em,{children:"numCamp"})," ) -> Resultado\xa0",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Field"})," ( ",(0,s.jsx)(n.em,{children:"ptrCamp"})," ) -> numCampo"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numTabla"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de tabla"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numCamp"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de campo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Puntero de campo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Field ( ptrCamp ) -> numCampo"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Par\xe1metro"}),(0,s.jsx)(n.td,{children:"Tipo"}),(0,s.jsx)(n.td,{children:"Descripci\xf3n"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ptrCamp"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Puntero del campo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numCampo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero de campo"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando Field tiene dos sintaxis:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si pasa un n\xfamero de tabla en ",(0,s.jsx)(n.em,{children:"numTabla"})," y un n\xfamero de campo en ",(0,s.jsx)(n.em,{children:"numCampo"}),", Field devuelve un puntero al campo."]}),"\n",(0,s.jsxs)(n.li,{children:["Si pasa un puntero a un campo en ",(0,s.jsx)(n.em,{children:"ptrCamp"}),", Field devuelve el n\xfamero del campo."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["El siguiente ejemplo asigna la variable ",(0,s.jsx)(n.em,{children:"campPtr"})," a un puntero al segundo campo en la tercera tabla:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0CampPtr:=Field(3;2)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa ",(0,s.jsx)(n.em,{children:"campPtr"})," (un puntero al segundo campo de una tabla) a Field devuelve el valor 2. La siguiente l\xednea asigna el valor 2 a ",(0,s.jsx)(n.em,{children:"campNum"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0campNum:=Field(campPtr)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["En el siguiente ejemplo, la variable ",(0,s.jsx)(n.em,{children:"campNum"})," es igual al n\xfamero del campo de [Tabla3]Campo2:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0campNum:=Field(->[Tabla3]Campo2)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/field-name",children:"Field name"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/last-field-number",children:"Last field number"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/table",children:"Table"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"253"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return t},a:function(){return i}});var l=d(667294);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);