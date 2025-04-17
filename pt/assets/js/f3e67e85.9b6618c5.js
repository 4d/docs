"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92697"],{639896:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/count-tasks","title":"Count tasks","description":"Count tasks  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/count-tasks.md","sourceDirName":"commands-legacy","slug":"/commands/count-tasks","permalink":"/docs/pt/20-R8/commands/count-tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-tasks.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"count-tasks","title":"Count tasks","slug":"/commands/count-tasks","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ABORT PROCESS BY ID","permalink":"/docs/pt/20-R8/commands/abort-process-by-id"},"next":{"title":"Count user processes","permalink":"/docs/pt/20-R8/commands/count-user-processes"}}'),o=n("785893"),r=n("250065");let d={id:"count-tasks",title:"Count tasks",slug:"/commands/count-tasks",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Count tasks"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Resultado"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"N\xfamero total de processos abertos (incluindo processos kernel)"})]})})]}),"\n",(0,o.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(s.p,{children:"Count tasks devolve o n\xfamero de processos abertos mais alto em uma m\xe1quina 4D remota, 4D Server (procedimentos armazenados) ou monousu\xe1rio de 4D. Os processos s\xe3o enumerados na ordem em foram criados. Quando ainda n\xe3o tiver interrompido nenhum processo durante a sess\xe3o, este comando retorna o n\xfamero total de processos abertos."}),"\n",(0,o.jsx)(s.p,{children:"Este n\xfamero leva em conta todos os processos, inclusive aqueles administrados automaticamente por 4D. O processo principal, a gest\xe3o da cach\xea, o processo de desenho, a gest\xe3o de \xedndices ou o processo do servidor Web."}),"\n",(0,o.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(s.p,{children:["Ver o exemplo para ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/process-state",title:"Process state",children:"Process state"})," e ",(0,o.jsx)(s.a,{href:"metodo-banco-de-dados-on-exit.md",title:"On Exit Database Method",children:"On Exit Database Method"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/count-user-processes",children:"Count user processes"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/count-users",children:"Count users"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/process-info",children:"Process info"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/process-state",children:"Process state"})]}),"\n",(0,o.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"335"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return d}});var t=n(667294);let o={},r=t.createContext(o);function d(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);