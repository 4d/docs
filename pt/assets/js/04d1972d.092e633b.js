"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72551"],{998726:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/pop-record","title":"POP RECORD","description":"POP RECORD {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/pop-record.md","sourceDirName":"commands-legacy","slug":"/commands/pop-record","permalink":"/docs/pt/20-R8/commands/pop-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpop-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"pop-record","title":"POP RECORD","slug":"/commands/pop-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Modified record","permalink":"/docs/pt/20-R8/commands/modified-record"},"next":{"title":"PUSH RECORD","permalink":"/docs/pt/20-R8/commands/push-record"}}'),o=n("785893"),s=n("250065");let d={id:"pop-record",title:"POP RECORD",slug:"/commands/pop-record",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"POP RECORD"})," {( ",(0,o.jsx)(r.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"tabela"}),(0,o.jsx)(r.td,{children:"Table"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Tabela da qual desempilhar o registro, a tabela padr\xe3o, se omitido"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(r.p,{children:"POP RECORD carrega o primeiro registro da pilha de registros da tabela e o transforma no registro atual."}),"\n",(0,o.jsxs)(r.p,{children:["Se empilha um registro, depois cria uma nova sele\xe7\xe3o atual que n\xe3o inclui o registro empilhado, e finalmente desempilha o registro, ent\xe3o o registro atual n\xe3o \xe9 encontrado na sele\xe7\xe3o atual. Para que o registro empilhado esteja na sele\xe7\xe3o atual, utilize ",(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/one-record-select",title:"ONE RECORD SELECT",children:"ONE RECORD SELECT"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"Se utiliza um comando que mova o ponteiro do registro atual antes de guardar o registro, perder\xe1 a c\xf3pia empilhada em mem\xf3ria."}),"\n",(0,o.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(r.p,{children:"O exemplo a seguir recupera o registro de um cliente na pilha:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"\xa0POP RECORD([Clientes])\xa0// Desempilhar o registro\n"})}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/push-record",children:"PUSH RECORD"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.em,{children:"Usar a Pilha de Registros"})]}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"177"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2713"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Modificar o registro atual"}),(0,o.jsx)(r.td,{})]})]})]})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var t=n(667294);let o={},s=t.createContext(o);function d(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);