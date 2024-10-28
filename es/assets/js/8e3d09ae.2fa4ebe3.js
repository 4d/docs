"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28888],{21799:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var l=d(474848),s=d(28453);const r={id:"field",title:"Field",slug:"/commands/field",displayed_sidebar:"docs"},i=void 0,t={id:"commands-legacy/field",title:"Field",description:"Field ( numTabla ; numCamp ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/field.md",sourceDirName:"commands-legacy",slug:"/commands/field",permalink:"/docs/es/commands/field",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffield.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"field",title:"Field",slug:"/commands/field",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"EXPORT STRUCTURE",permalink:"/docs/es/commands/export-structure"},next:{title:"Field name",permalink:"/docs/es/commands/field-name"}},a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Field"})," ( ",(0,l.jsx)(n.em,{children:"numTabla"})," ; ",(0,l.jsx)(n.em,{children:"numCamp"})," ) -> Resultado\xa0",(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.strong,{children:"Field"})," ( ",(0,l.jsx)(n.em,{children:"ptrCamp"})," ) -> numCampo"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"numTabla"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"N\xfamero de tabla"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"numCamp"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"N\xfamero de campo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Pointer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Puntero de campo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Field ( ptrCamp ) -> numCampo"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Par\xe1metro"}),(0,l.jsx)(n.td,{children:"Tipo"}),(0,l.jsx)(n.td,{children:"Descripci\xf3n"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ptrCamp"}),(0,l.jsx)(n.td,{children:"Pointer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Puntero del campo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"numCampo"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"N\xfamero de campo"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsx)(n.p,{children:"El comando Field tiene dos sintaxis:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Si pasa un n\xfamero de tabla en ",(0,l.jsx)(n.em,{children:"numTabla"})," y un n\xfamero de campo en ",(0,l.jsx)(n.em,{children:"numCampo"}),", Field devuelve un puntero al campo."]}),"\n",(0,l.jsxs)(n.li,{children:["Si pasa un puntero a un campo en ",(0,l.jsx)(n.em,{children:"ptrCamp"}),", Field devuelve el n\xfamero del campo."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,l.jsxs)(n.p,{children:["El siguiente ejemplo asigna la variable ",(0,l.jsx)(n.em,{children:"campPtr"})," a un puntero al segundo campo en la tercera tabla:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0CampPtr:=Field(3;2)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,l.jsxs)(n.p,{children:["Si pasa ",(0,l.jsx)(n.em,{children:"campPtr"})," (un puntero al segundo campo de una tabla) a Field devuelve el valor 2. La siguiente l\xednea asigna el valor 2 a ",(0,l.jsx)(n.em,{children:"campNum"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0campNum:=Field(campPtr)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,l.jsxs)(n.p,{children:["En el siguiente ejemplo, la variable ",(0,l.jsx)(n.em,{children:"campNum"})," es igual al n\xfamero del campo de [Tabla3]Campo2:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0campNum:=Field(->[Tabla3]Campo2)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/commands/field-name",children:"Field name"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/commands/last-field-number",children:"Last field number"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/commands/table",children:"Table"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>t});var l=d(296540);const s={},r=l.createContext(s);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);