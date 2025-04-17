"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99706"],{570295:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>t});var o=JSON.parse('{"id":"commands-legacy/delete-record","title":"DELETE RECORD","description":"DELETE RECORD {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/delete-record.md","sourceDirName":"commands-legacy","slug":"/commands/delete-record","permalink":"/docs/pt/commands/delete-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-record.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"delete-record","title":"DELETE RECORD","slug":"/commands/delete-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE RECORD","permalink":"/docs/pt/commands/create-record"},"next":{"title":"DISPLAY RECORD","permalink":"/docs/pt/commands/display-record"}}'),d=n("785893"),a=n("250065");let s={id:"delete-record",title:"DELETE RECORD",slug:"/commands/delete-record",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"DELETE RECORD"})," {( ",(0,d.jsx)(r.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Par\xe2metro"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tabela"}),(0,d.jsx)(r.td,{children:"Table"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Tabela na qual o registro atual ser\xe1 apagado, ou tabela Padr\xe3o, se omitido"})]})})]}),"\n",(0,d.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["DELETE RECORD apaga o registro atual de ",(0,d.jsx)(r.em,{children:"tabela"})," no processo. Se n\xe3o houver registro atual para ",(0,d.jsx)(r.em,{children:"tabela"})," no processo, DELETE RECORD n\xe3o tem efeito. Em um formul\xe1rio, pode criar um bot\xe3o Apagar registro em lugar de utilizar este comando."]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"Nota"}),":"]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["Se o registro atual \xe9 descarregado da mem\xf3ria antes de chamar DELETE RECORD (por exemplo em resposta a um ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/unload-record",children:"UNLOAD RECORD"}),"), a sele\xe7\xe3o atual de ",(0,d.jsx)(r.em,{children:"tabela"})," est\xe1 vazia depois da elimina\xe7\xe3o."]}),"\n",(0,d.jsxs)(r.li,{children:["O comando DELETE RECORD n\xe3o faz nada quando a tabela est\xe1 em modo ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/read-only",children:"READ ONLY"}),", independentemente de se o registro apagar est\xe1 bloqueado ou n\xe3o."]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["A elimina\xe7\xe3o de registros \xe9 uma opera\xe7\xe3o permanente e n\xe3o pode ser desfeita (exceto quando \xe9 executado durante uma transa\xe7\xe3o, ver ",(0,d.jsx)(r.em,{children:"Usar Transa\xe7\xf5es"}),")."]}),"\n",(0,d.jsx)(r.p,{children:"Se um registro for apagado, o n\xfamero do registro ser\xe1 reutilizado quando novos registros forem criados. N\xe3o utilize o n\xfamero do registro como identificador do registro se seu banco permite a elimina\xe7\xe3o de registros."}),"\n",(0,d.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(r.p,{children:"O exemplo apaga um registro de um empregado. O c\xf3digo pergunta ao usu\xe1rio o n\xfamero do empregado a apagar, procura o registro correspondente e o a apaga:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:'\xa0vBuscar:=Request("N\xfamero do empregado a apagar:")\xa0// Obt\xe9m um n\xfamero de identifica\xe7\xe3o do empregado\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Empregado];[Empregado]ID =vBuscar)\xa0// Buscar o empregado\n\xa0\xa0\xa0\xa0DELETE RECORD([Empregado])\xa0// Apagar o empregado\n\xa0End if\n'})}),"\n",(0,d.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/pt/commands/locked",children:"Locked"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.em,{children:"Triggers"})]}),"\n",(0,d.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"N\xfamero do comando"}),(0,d.jsx)(r.td,{children:"58"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Thread-seguro"}),(0,d.jsx)(r.td,{children:"\u2713"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Modificar o registro atual"}),(0,d.jsx)(r.td,{})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return t},a:function(){return s}});var o=n(667294);let d={},a=o.createContext(d);function s(e){let r=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);