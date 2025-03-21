"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["198"],{620208:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"commands-legacy/reload-external-data","title":"RELOAD EXTERNAL DATA","description":"RELOAD EXTERNAL DATA ( oCampo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/reload-external-data.md","sourceDirName":"commands-legacy","slug":"/commands/reload-external-data","permalink":"/docs/pt/20-R7/commands/reload-external-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freload-external-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"reload-external-data","title":"RELOAD EXTERNAL DATA","slug":"/commands/reload-external-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REGENERATE MISSING TABLE","permalink":"/docs/pt/20-R7/commands/regenerate-missing-table"},"next":{"title":"RESUME INDEXES","permalink":"/docs/pt/20-R7/commands/resume-indexes"}}'),a=o("785893"),t=o("250065");let d={id:"reload-external-data",title:"RELOAD EXTERNAL DATA",slug:"/commands/reload-external-data",displayed_sidebar:"docs"},s=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," ( ",(0,a.jsx)(n.em,{children:"oCampo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"oCampo"}),(0,a.jsx)(n.td,{children:"Text, Blob, Picture, Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Campo para definir a localiza\xe7\xe3o de armazenamento"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["O comando ",(0,a.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," permite recarregar em mem\xf3ria o conte\xfado de um arquivo de armazenamento externo associado a um campo de tipo BLOB, Imagem ou Texto."]}),"\n",(0,a.jsx)(n.p,{children:"Este comando \xe9 \xfatil quando o campo de um registro j\xe1 carregado em mem\xf3ria \xe9 modificado no disco por outra aplica\xe7\xe3o (os arquivos de armazenamento externo dos campos sempre s\xe3o acess\xedveis em escritura). Por exemplo, uma imagem utilizada em um campo Imagem pode ser modificada por um editor gr\xe1fico e logo de guardar-se no disco."}),"\n",(0,a.jsxs)(n.p,{children:["A continua\xe7\xe3o deve recarregar os dados utilizando o comando ",(0,a.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," para atualizar o conte\xfado do campo se for mostrado no formul\xe1rio."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": o comando ",(0,a.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," s\xf3 funciona em 4D local ou 4D Server. N\xe3o \xe9 poss\xedvel recarregar individualmente um campo com 4D em modo remoto. Neste contexto, \xe9 necess\xe1rio recarregar todos os registros (utilizando o comando ",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/load-record",children:"LOAD RECORD"})," por exemplo)."]}),"\n",(0,a.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-external-data-path",children:"SET EXTERNAL DATA PATH"})}),"\n",(0,a.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero do comando"}),(0,a.jsx)(n.td,{children:"1135"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread-seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return d}});var r=o(667294);let a={},t=r.createContext(a);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);