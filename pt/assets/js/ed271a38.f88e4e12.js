"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8105"],{67410:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>c,default:()=>m,assets:()=>l,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/selected-record-number","title":"Selected record number","description":"Selected record number {( tabela )} : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/selected-record-number.md","sourceDirName":"commands-legacy","slug":"/commands/selected-record-number","permalink":"/docs/pt/commands/selected-record-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselected-record-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"selected-record-number","title":"Selected record number","slug":"/commands/selected-record-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SCAN INDEX","permalink":"/docs/pt/commands/scan-index"},"next":{"title":"TRUNCATE TABLE","permalink":"/docs/pt/commands/truncate-table"}}'),o=n("785893"),s=n("250065");let d={id:"selected-record-number",title:"Selected record number",slug:"/commands/selected-record-number",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function i(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Selected record number"})," {( ",(0,o.jsx)(r.em,{children:"tabela"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"tabela"}),(0,o.jsx)(r.td,{children:"Table"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Tabela para a qual retornar o n\xfamero de registros selecionados ou tabela padr\xe3o se omitida"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Resultado"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"N\xba registro selecionado do registro atual"})]})]})]}),"\n",(0,o.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["Selected record number retorna a posi\xe7\xe3o do registro atual na sele\xe7\xe3o atual de ",(0,o.jsx)(r.em,{children:"tabela"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Se a sele\xe7\xe3o n\xe3o estiver vazia e se o registro atual estiver contido na sele\xe7\xe3o, Selected record number retorna um valor entre 1 e ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/records-in-selection",children:"Records in selection"}),". Se a sele\xe7\xe3o estiver vazia, ou se n\xe3o houver registro atual, retorna 0 (zero)."]}),"\n",(0,o.jsxs)(r.p,{children:["O n\xfamero do registro na sele\xe7\xe3o \xe9 diferente do n\xfamero retornado por ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/record-number",children:"Record number"}),", que retorna o n\xfamero do registro f\xedsico na tabela. O n\xfamero do registro na sele\xe7\xe3o depende da sele\xe7\xe3o e do registro atual."]}),"\n",(0,o.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(r.p,{children:"O seguinte exemplo guarda o n\xfamero do registro atual da sele\xe7\xe3o em uma vari\xe1vel:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"\xa0NumRegAc:=Selected record number([Pessoas])\xa0// Obter o n\xfamero do registro na sele\xe7\xe3o\n"})}),"\n",(0,o.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/records-in-selection",children:"Records in selection"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.em,{children:"Sobre N\xfameros de Registros"})]})]})}function m(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return d}});var t=n(667294);let o={},s=t.createContext(o);function d(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);