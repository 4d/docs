"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73255"],{28213:function(e,r,o){o.r(r),o.d(r,{default:()=>u,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/unload-record","title":"UNLOAD RECORD","description":"UNLOAD RECORD {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/unload-record.md","sourceDirName":"commands-legacy","slug":"/commands/unload-record","permalink":"/docs/pt/20-R7/commands/unload-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Funload-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"unload-record","title":"UNLOAD RECORD","slug":"/commands/unload-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"READ WRITE","permalink":"/docs/pt/20-R7/commands/read-write"},"next":{"title":"Records","permalink":"/docs/pt/20-R7/category/records"}}'),a=o("785893"),n=o("250065");let t={id:"unload-record",title:"UNLOAD RECORD",slug:"/commands/unload-record",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"UNLOAD RECORD"})," {( ",(0,a.jsx)(r.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"tabela"}),(0,a.jsx)(r.td,{children:"Table"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Tabela na qual vai descarregar o registro, ou tabela padr\xe3o, se omitido"})]})})]}),"\n",(0,a.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["UNLOAD RECORD descarrega o registro atual de ",(0,a.jsx)(r.em,{children:"tabela"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Se o registro n\xe3o est\xe1 bloqueado para o usu\xe1rio local (bloqueado para os outros usu\xe1rios), UNLOAD RECORD desbloqueia o registro para os outros usu\xe1rios."}),"\n",(0,a.jsx)(r.p,{children:"Mesmo que UNLOAD RECORD descarregue o registro da mem\xf3ria, o registro permanece como registro atual. Quando outro registro se converte no registro atual, o registro atual anterior se descarrega automaticamente e se desbloqueia para os outros usu\xe1rios. Sempre execute este comando quando tenha terminado de modificar um registro e queira que esteja dispon\xedvel para outros usu\xe1rios, enquanto permanece o registro como seu registro atual."}),"\n",(0,a.jsxs)(r.p,{children:["Se um registro tiver uma quantidade importante de dados, de campos de imagem, ou de documentos externos (tais como documentos 4D Write Pro), \xe9 prefer\xedvel n\xe3o armazenar o registro atual em mem\xf3ria a n\xe3o ser que precise modifica-lo. Nesse caso, utilize o comando UNLOAD RECORD, dessa maneira, pode conservar o registro atual sem que esteja em mem\xf3ria. Dessa forma libera a mem\xf3ria ocupada pelo registro, mas n\xe3o tem acesso aos valores armazenados nos campos. Se mais adiante necessita acessar aos valores do registro, utilize o comando ",(0,a.jsx)(r.a,{href:"/docs/pt/20-R7/commands/load-record",title:"LOAD RECORD",children:"LOAD RECORD"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota"}),": quando se utiliza em uma transa\xe7\xe3o, o comando UNLOAD RECORD descarrega o registro atual unicamente para o processo que gera a transa\xe7\xe3o. Para outros processos, o registro permanece bloqueado sempre que a transa\xe7\xe3o n\xe3o tiver sido confirmada (ou cancelada)."]}),"\n",(0,a.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/20-R7/commands/load-record",children:"LOAD RECORD"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.em,{children:"Record Locking"})]}),"\n",(0,a.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero do comando"}),(0,a.jsx)(r.td,{children:"212"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Thread-seguro"}),(0,a.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return d},a:function(){return t}});var s=o(667294);let a={},n=s.createContext(a);function t(e){let r=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);