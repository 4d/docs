"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75038"],{327086:function(e,n,d){d.r(n),d.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>a,assets:()=>i,toc:()=>c,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/field-name","title":"Field name","description":"Field name ( campPtr | tablaNum {; numCamp} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/field-name.md","sourceDirName":"commands-legacy","slug":"/commands/field-name","permalink":"/docs/es/commands/field-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffield-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"field-name","title":"Field name","slug":"/commands/field-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Field","permalink":"/docs/es/commands/field"},"next":{"title":"Get external data path","permalink":"/docs/es/commands/get-external-data-path"}}'),s=d("785893"),l=d("250065");let r={id:"field-name",title:"Field name",slug:"/commands/field-name",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Field name"})," ( campPtr | tablaNum {; ",(0,s.jsx)(n.em,{children:"numCamp"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"campPtr | tablaNum"}),(0,s.jsx)(n.td,{children:"Puntero, Entero largo"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Puntero a un campo o n\xfamero de tabla"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numCamp"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de campo si se pasa un n\xfamero de tabla como primer par\xe1metro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nombre del campo"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando Field name devuelve el nombre del campo cuyo puntero se pasa en ",(0,s.jsx)(n.em,{children:"campPtr"})," o cuyos n\xfameros de tabla y de campos se pasan en ",(0,s.jsx)(n.em,{children:"tablaNum"})," y ",(0,s.jsx)(n.em,{children:"campNum"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo asigna el segundo elemento del array ",(0,s.jsx)(n.em,{children:"campArray{1}"})," al nombre del segundo campo en la primera tabla. ",(0,s.jsx)(n.em,{children:"campArray"})," es un array de dos dimensiones:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0campArray{1}{2}:=Field name(1;2)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo asigna al segundo elemento del array ",(0,s.jsx)(n.em,{children:"campArray{1}"})," el nombre del campo ",(0,s.jsx)(n.em,{children:"[MiTabla]MiCampo"}),". ",(0,s.jsx)(n.em,{children:"campArray"})," es un array de dos dimensiones:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0campArray{1}{2}:=Field name(->[MiTabla]MiCampo)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Este ejemplo muestra una alerta. Este m\xe9todo pasa un puntero a un campo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("El n\xfamero del campo "+Field name($1)+" de la tabla "\n\xa0+Table name(Table($1))+" debe ser de m\xe1s de cinco caracteres.")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/field",children:"Field"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/last-field-number",children:"Last field number"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/table-name",children:"Table name"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"257"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return t},a:function(){return r}});var a=d(667294);let s={},l=a.createContext(s);function r(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);