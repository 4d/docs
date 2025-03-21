"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8671"],{735404:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>a,assets:()=>i,toc:()=>o,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/last-field-number","title":"Last field number","description":"Last field number ( numTabla | ptrTabla ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/last-field-number.md","sourceDirName":"commands-legacy","slug":"/commands/last-field-number","permalink":"/docs/es/20-R7/commands/last-field-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-field-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"last-field-number","title":"Last field number","slug":"/commands/last-field-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is table number valid","permalink":"/docs/es/20-R7/commands/is-table-number-valid"},"next":{"title":"Last table number","permalink":"/docs/es/20-R7/commands/last-table-number"}}'),l=s("785893"),d=s("250065");let r={id:"last-field-number",title:"Last field number",slug:"/commands/last-field-number",displayed_sidebar:"docs"},t=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Last field number"})," ( numTabla | ptrTabla ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"numTabla | ptrTabla"}),(0,l.jsx)(n.td,{children:"Entero largo, Puntero"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"N\xfamero de tabla o puntero a una tabla"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"N\xfamero de campo m\xe1s alto en la tabla"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando Last field number devuelve el n\xfamero de campo m\xe1s alto de los campos en la tabla cuyo n\xfamero o puntero se pasa en ",(0,l.jsx)(n.em,{children:"numTabla"})," o ",(0,l.jsx)(n.em,{children:"ptrTabla"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Los campos est\xe1n numerados en el orden en el cual fueron creados. Si ning\xfan campo ha sido borrado de la tabla, este comando devuelve el n\xfamero de campos que contiene la tabla. En el caso de bucles interactivos sobre los n\xfameros de campo de la tabla, debe utilizar el comando ",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/is-field-number-valid",title:"Is field number valid",children:"Is field number valid"})," con el fin de verificar que el campo no ha sido eliminado."]}),"\n",(0,l.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsxs)(n.p,{children:["El siguiente m\xe9todo de proyecto crea el array ",(0,l.jsx)(n.em,{children:"asCampos"}),", con los nombres de los campos de la tabla cuyo puntero se recibe como primer par\xe1metro:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0$vlTabla:=Table($1)\n\xa0ARRAY STRING(31;asCampos;Last field number($vlTabla))\n\xa0For($vlCampo;Size of array(asCampos);1;-1)\n\xa0\xa0\xa0\xa0If(Is field number valid($vlTabla;$vlCampo)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asCampos{$vlCampo}:=Field name($vlTabla;$vlCampo)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(asCampos;$vlCampo)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,l.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/field-name",children:"Field name"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/last-table-number",children:"Last table number"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/is-field-number-valid",children:"Is field number valid"})]}),"\n",(0,l.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"255"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return r}});var a=s(667294);let l={},d=a.createContext(l);function r(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);