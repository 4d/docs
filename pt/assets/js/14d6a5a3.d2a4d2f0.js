"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34834"],{111447:function(e,s,o){o.r(s),o.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>i,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/abort-process-by-id","title":"ABORT PROCESS BY ID","description":"ABORT PROCESS BY ID ( IDunico )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/abort-process-by-id.md","sourceDirName":"commands-legacy","slug":"/commands/abort-process-by-id","permalink":"/docs/pt/20-R7/commands/abort-process-by-id","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fabort-process-by-id.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"abort-process-by-id","title":"ABORT PROCESS BY ID","slug":"/commands/abort-process-by-id","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Processes","permalink":"/docs/pt/20-R7/category/processes"},"next":{"title":"Count tasks","permalink":"/docs/pt/20-R7/commands/count-tasks"}}'),r=o("785893"),d=o("250065");let t={id:"abort-process-by-id",title:"ABORT PROCESS BY ID",slug:"/commands/abort-process-by-id",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ABORT PROCESS BY ID"})," ( ",(0,r.jsx)(s.em,{children:"IDunico"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"IDunico"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"ID de processo \xfanica"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["O comando ",(0,r.jsx)(s.strong,{children:"ABORT PROCESS BY ID"})," det\xe9m um processo espec\xedfico no servidor 4D."]}),"\n",(0,r.jsxs)(s.p,{children:["No par\xe2metro ",(0,r.jsx)(s.em,{children:"IDunico"}),", passe o ID \xfanico do processo que se executa no servidor que quiser deter. Pode recuperar o ID do processo com os comandos ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/process-activity",children:"Process activity"})," ou os comandos ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/process-info",children:"Process info"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Notas"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Este comando apenas podem ser executados em 4D Server. Se o m\xe9todo que chamar ao comando for executado localmente em um cliente remoto ou em um \xfanico usu[ario 4D, ",(0,r.jsx)(s.strong,{children:"ABORT PROCESS BY ID"})," n\xe3o faz nada."]}),"\n",(0,r.jsxs)(s.li,{children:["Este comando apenas pode ser usado com a capa de rede ",(0,r.jsx)(s.em,{children:"ServerNet"}),". Ver ",(0,r.jsx)(s.em,{children:"Nova capa de rede ServerNet (compatibilidade)"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Este comando apenas deve serusado para buscar erros ou prop\xf3sitos de administra\xe7\xe3o, n\xe3o como um procedimento ordin\xe1rio."}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(s.p,{children:"Se quiser deter o processo selecionado da cole\xe7\xe3o de processos que s\xe3o mostrados em um list box:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0//variable =curItemPosition\n\xa0\n\xa0\xa0// Recupera a lista de processos no servidor e a mostra na list box\n\xa0$activity:=Get process activity(Processes only).processes\n\xa0...\n\xa0\xa0// O processo selecionado \xe9 detido no servidor\n\xa0ABORT PROCESS BY ID($activity[curItemPosition].ID)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/pause-process",children:"PAUSE PROCESS"})}),"\n",(0,r.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"1634"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return c},a:function(){return t}});var n=o(667294);let r={},d=n.createContext(r);function t(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);