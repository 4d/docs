"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10320"],{895316:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-current-printer","title":"Get current printer","description":"Get current printer  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-current-printer.md","sourceDirName":"commands-legacy","slug":"/commands/get-current-printer","permalink":"/docs/pt/20-R7/commands/get-current-printer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-current-printer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-current-printer","title":"Get current printer","slug":"/commands/get-current-printer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLOSE PRINTING JOB","permalink":"/docs/pt/20-R7/commands/close-printing-job"},"next":{"title":"Get print marker","permalink":"/docs/pt/20-R7/commands/get-print-marker"}}'),s=n("785893"),i=n("250065");let d={id:"get-current-printer",title:"Get current printer",slug:"/commands/get-current-printer",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Get current printer"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Resultado"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Nome da impressora atual"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(r.p,{children:"O comando Get current printer devolve o nome da impressora atual definida na aplica\xe7\xe3o 4D. Como padr\xe3o, ao iniciar 4D, a impressora atual \xe9 a impressora definida no sistema."}),"\n",(0,s.jsx)(r.p,{children:"Se a impressora atual for administrada utilizando um servidor de impressora (spooler), \xe9 devolvida a rota de acesso completa (em Windows) ou o nome do spooler (em Mac OS)."}),"\n",(0,s.jsxs)(r.p,{children:["Para obter a lista de impressoras dispon\xedveis assim como informa\xe7\xe3o adicional, utilize o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/printers-list",children:"PRINTERS LIST"})," . Para modificar la impressora atual, utilize o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/set-current-printer",children:"SET CURRENT PRINTER"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," Quando a constante Generic PDF driver for usada com ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/set-current-printer",children:"SET CURRENT PRINTER"}),", ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/get-current-printer",children:"Get current printer"}),' retorna "_4d_pdf_printer" ou o nome do PDF driver']}),"\n",(0,s.jsx)(r.h4,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,s.jsx)(r.p,{children:"Se n\xe3o tiver uma impressora instalada, um erro \xe9 gerado"}),"\n",(0,s.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/printers-list",children:"PRINTERS LIST"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/set-current-printer",children:"SET CURRENT PRINTER"})]}),"\n",(0,s.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"788"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return d}});var t=n(667294);let s={},i=t.createContext(s);function d(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);