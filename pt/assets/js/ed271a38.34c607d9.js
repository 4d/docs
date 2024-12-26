"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8105"],{67410:function(e,r,n){n.r(r),n.d(r,{metadata:()=>d,contentTitle:()=>c,default:()=>m,assets:()=>l,toc:()=>a,frontMatter:()=>o});var d=JSON.parse('{"id":"commands-legacy/selected-record-number","title":"Selected record number","description":"Selected record number {( tabela )} : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/selected-record-number.md","sourceDirName":"commands-legacy","slug":"/commands/selected-record-number","permalink":"/docs/pt/commands/selected-record-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselected-record-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"selected-record-number","title":"Selected record number","slug":"/commands/selected-record-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SCAN INDEX","permalink":"/docs/pt/commands/scan-index"},"next":{"title":"TRUNCATE TABLE","permalink":"/docs/pt/commands/truncate-table"}}'),s=n("785893"),t=n("250065");let o={id:"selected-record-number",title:"Selected record number",slug:"/commands/selected-record-number",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function i(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Selected record number"})," {( ",(0,s.jsx)(r.em,{children:"tabela"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tabela"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Tabela para a qual retornar o n\xfamero de registros selecionados ou tabela padr\xe3o se omitida"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Resultado"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"N\xba registro selecionado do registro atual"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["Selected record number retorna a posi\xe7\xe3o do registro atual na sele\xe7\xe3o atual de ",(0,s.jsx)(r.em,{children:"tabela"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Se a sele\xe7\xe3o n\xe3o estiver vazia e se o registro atual estiver contido na sele\xe7\xe3o, Selected record number retorna um valor entre 1 e ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/records-in-selection",children:"Records in selection"}),". Se a sele\xe7\xe3o estiver vazia, ou se n\xe3o houver registro atual, retorna 0 (zero)."]}),"\n",(0,s.jsxs)(r.p,{children:["O n\xfamero do registro na sele\xe7\xe3o \xe9 diferente do n\xfamero retornado por ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/record-number",children:"Record number"}),", que retorna o n\xfamero do registro f\xedsico na tabela. O n\xfamero do registro na sele\xe7\xe3o depende da sele\xe7\xe3o e do registro atual."]}),"\n",(0,s.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(r.p,{children:"O seguinte exemplo guarda o n\xfamero do registro atual da sele\xe7\xe3o em uma vari\xe1vel:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0NumRegAc:=Selected record number([Pessoas])\xa0// Obter o n\xfamero do registro na sele\xe7\xe3o\n"})}),"\n",(0,s.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/records-in-selection",children:"Records in selection"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:"Sobre N\xfameros de Registros"})]}),"\n",(0,s.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"246"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return o}});var d=n(667294);let s={},t=d.createContext(s);function o(e){let r=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(t.Provider,{value:r},e.children)}}}]);