"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15814"],{867713:function(e,n,a){a.r(n),a.d(n,{default:()=>b,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/last-table-number","title":"Last table number","description":"Last table number  : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/last-table-number.md","sourceDirName":"commands-legacy","slug":"/commands/last-table-number","permalink":"/docs/es/20-R7/commands/last-table-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-table-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"last-table-number","title":"Last table number","slug":"/commands/last-table-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Last field number","permalink":"/docs/es/20-R7/commands/last-field-number"},"next":{"title":"PAUSE INDEXES","permalink":"/docs/es/20-R7/commands/pause-indexes"}}'),l=a("785893"),t=a("250065");let r={id:"last-table-number",title:"Last table number",slug:"/commands/last-table-number",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Last table number"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"N\xfamero de tabla m\xe1s alto en la base"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["Last table number devuelve el n\xfamero de tablas en la base. Las tablas est\xe1n numeradas en el orden en el cual fueron creadas. Si ninguna tabla ha sido borrada de la base, el comando devuelve el n\xfamero de tablas presentes en la base. En el caso de bucles iterativos sobre los n\xfameros de tablas de la base, debe utilizar el comando ",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/is-table-number-valid",title:"Is table number valid",children:"Is table number valid"})," para verificar que la tabla no haya sido borrada."]}),"\n",(0,l.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsxs)(n.p,{children:["El siguiente ejemplo inicializa los elementos del array ",(0,l.jsx)(n.em,{children:"asTablas,"})," con los nombres de las tablas definidos en la base. Este array puede utilizarse como lista desplegable (o pesta\xf1as, \xe1rea de desplazamiento, etc.), para mostrar en un formulario la lista de tablas de la base:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(asTablas;Last table number)\n\xa0If(Last table number>0)\xa0//Si la Base de datos no tiene tablas\n\xa0\xa0\xa0\xa0For($vlTablas;Size of array(asTablas);1;-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($vlTablas))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0asTablas{$vlTablas}:=Table name($vlTablas)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(asTablas;$vlTablas)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n"})}),"\n",(0,l.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/last-field-number",children:"Last field number"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/is-table-number-valid",children:"Is table number valid"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/table-name",children:"Table name"})]}),"\n",(0,l.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"254"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function b(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return r}});var s=a(667294);let l={},t=s.createContext(l);function r(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);