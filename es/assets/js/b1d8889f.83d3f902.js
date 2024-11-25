"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59435"],{645743:function(e,r,n){n.r(r),n.d(r,{metadata:()=>o,contentTitle:()=>c,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/goto-record","title":"GOTO RECORD","description":"GOTO RECORD ( {tabla ;} posicion )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/goto-record.md","sourceDirName":"commands-legacy","slug":"/commands/goto-record","permalink":"/docs/es/commands/goto-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"goto-record","title":"GOTO RECORD","slug":"/commands/goto-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DUPLICATE RECORD","permalink":"/docs/es/commands/duplicate-record"},"next":{"title":"Is new record","permalink":"/docs/es/commands/is-new-record"}}'),s=n("785893"),t=n("250065");let d={id:"goto-record",title:"GOTO RECORD",slug:"/commands/goto-record",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"GOTO RECORD"})," ( {",(0,s.jsx)(r.em,{children:"tabla"})," ;} ",(0,s.jsx)(r.em,{children:"posicion"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe1metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tabla"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Tabla del registro de destino o Tabla por defecto, si se omite"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"posicion"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"N\xfamero devuelto por n\xfamero registro"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(r.p,{children:["GOTO RECORD selecciona el registro actual de ",(0,s.jsx)(r.em,{children:"tabla"}),". El par\xe1metro ",(0,s.jsx)(r.em,{children:"registro"})," es el n\xfamero devuelto por la funci\xf3n ",(0,s.jsx)(r.a,{href:"/docs/es/commands/record-number",title:"Record Number",children:"Record Number"}),". Despu\xe9s de ejecutar este comando, el registro es el \xfanico registro en la selecci\xf3n."]}),"\n",(0,s.jsxs)(r.p,{children:["Si ",(0,s.jsx)(r.em,{children:"registro"})," es inferior al n\xfamero m\xe1s peque\xf1o en la base o superior al n\xfamero m\xe1s grande de la base, 4D genera un mensaje de error que indica que el n\xfamero est\xe1 fuera del intervalo. Si ",(0,s.jsx)(r.em,{children:"registro"})," es igual al n\xfamero de registro de un registro borrado, 4D devuelve el error -10503 y la selecci\xf3n queda vac\xeda."]}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(r.p,{children:"Ver el ejemplo para Record Number."}),"\n",(0,s.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Acerca de n\xfameros de registros"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/commands/record-number",children:"Record number"})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return d}});var o=n(667294);let s={},t=o.createContext(s);function d(e){let r=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);