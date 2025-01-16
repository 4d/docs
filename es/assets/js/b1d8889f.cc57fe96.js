"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59435"],{645743:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/goto-record","title":"GOTO RECORD","description":"GOTO RECORD ( {tabla ;} posicion )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/goto-record.md","sourceDirName":"commands-legacy","slug":"/commands/goto-record","permalink":"/docs/es/20-R7/commands/goto-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"goto-record","title":"GOTO RECORD","slug":"/commands/goto-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DUPLICATE RECORD","permalink":"/docs/es/20-R7/commands/duplicate-record"},"next":{"title":"Is new record","permalink":"/docs/es/20-R7/commands/is-new-record"}}'),d=r("785893"),t=r("250065");let o={id:"goto-record",title:"GOTO RECORD",slug:"/commands/goto-record",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GOTO RECORD"})," ( {",(0,d.jsx)(n.em,{children:"tabla"})," ;} ",(0,d.jsx)(n.em,{children:"posicion"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabla"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabla del registro de destino o Tabla por defecto, si se omite"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"posicion"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero devuelto por n\xfamero registro"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["GOTO RECORD selecciona el registro actual de ",(0,d.jsx)(n.em,{children:"tabla"}),". El par\xe1metro ",(0,d.jsx)(n.em,{children:"registro"})," es el n\xfamero devuelto por la funci\xf3n ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/record-number",title:"Record Number",children:"Record Number"}),". Despu\xe9s de ejecutar este comando, el registro es el \xfanico registro en la selecci\xf3n."]}),"\n",(0,d.jsxs)(n.p,{children:["Si ",(0,d.jsx)(n.em,{children:"registro"})," es inferior al n\xfamero m\xe1s peque\xf1o en la base o superior al n\xfamero m\xe1s grande de la base, 4D genera un mensaje de error que indica que el n\xfamero est\xe1 fuera del intervalo. Si ",(0,d.jsx)(n.em,{children:"registro"})," es igual al n\xfamero de registro de un registro borrado, 4D devuelve el error -10503 y la selecci\xf3n queda vac\xeda."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Ver el ejemplo para Record Number."}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"Acerca de n\xfameros de registros"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/record-number",children:"Record number"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"242"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"error"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica la selecci\xf3n actual"}),(0,d.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(667294);let d={},t=s.createContext(d);function o(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);