"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39147"],{209798:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/use-named-selection","title":"USE NAMED SELECTION","description":"USE NAMED SELECTION ( nome )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/use-named-selection.md","sourceDirName":"commands-legacy","slug":"/commands/use-named-selection","permalink":"/docs/pt/commands/use-named-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuse-named-selection.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"use-named-selection","title":"USE NAMED SELECTION","slug":"/commands/use-named-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CUT NAMED SELECTION","permalink":"/docs/pt/commands/cut-named-selection"},"next":{"title":"Objects (Forms)","permalink":"/docs/pt/commands/theme/Objects-Forms"}}'),o=r("785893"),a=r("250065");let t={id:"use-named-selection",title:"USE NAMED SELECTION",slug:"/commands/use-named-selection",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"USE NAMED SELECTION"})," ( ",(0,o.jsx)(n.em,{children:"nome"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nome"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome da sele\xe7\xe3o temporal a utilizar"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"USE NAMED SELECTION utiliza o nome da sele\xe7\xe3o tempor\xe1ria como sele\xe7\xe3o atual para la tabela a qual pertence."}),"\n",(0,o.jsxs)(n.p,{children:["Quando cria uma sele\xe7\xe3o tempor\xe1ria, o registro atual \xe9 \u201Crecordado\u201D pela sele\xe7\xe3o tempor\xe1ria. USE NAMED SELECTION recupera a posi\xe7\xe3o deste registro e retorna o novo registro atual; este comando carrega o registro atual. Se o registro atual foi modificado depois da cria\xe7\xe3o de ",(0,o.jsx)(n.em,{children:"nome"}),", o registro deve ser guardada antes de executar USE NAMED SELECTION, para evitar perder a informa\xe7\xe3o modificada."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Se ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"})," foi utilizado para criar ",(0,o.jsx)(n.em,{children:"nome"}),", a sele\xe7\xe3o tempor\xe1ria ",(0,o.jsx)(n.em,{children:"nome"})," \xe9 copiada \xe0 sele\xe7\xe3o atual da tabela a qual pertence ",(0,o.jsx)(n.em,{children:"nome"}),". A sele\xe7\xe3o tempor\xe1ria ",(0,o.jsx)(n.em,{children:"nome"})," existe em mem\xf3ria at\xe9 que se elimina. Utilize o comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/clear-named-selection",title:"CLEAR NAMED SELECTION",children:"CLEAR NAMED SELECTION"})," para apagar a sele\xe7\xe3o tempor\xe1ria e liberar a mem\xf3ria utilizada por ",(0,o.jsx)(n.em,{children:"nome"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Se ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/cut-named-selection",title:"CUT NAMED SELECTION",children:"CUT NAMED SELECTION"})," foi utilizado para criar ",(0,o.jsx)(n.em,{children:"nome"}),", ",(0,o.jsx)(n.em,{children:"nome"})," \xe9 utilizado como sele\xe7\xe3o atual da tabela e ",(0,o.jsx)(n.em,{children:"nome"})," n\xe3o existe mais em mem\xf3ria."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Lembre que uma sele\xe7\xe3o tempor\xe1ria \xe9 uma representa\xe7\xe3o de uma sele\xe7\xe3o de registros no momento que \xe9 criado a sele\xe7\xe3o tempor\xe1ria. Se os registros que a sele\xe7\xe3o tempor\xe1ria representa s\xe3o modificados, a sele\xe7\xe3o tempor\xe1ria poderia ser obsoleta. Portanto, uma sele\xe7\xe3o tempor\xe1ria representa um grupo de registros que n\xe3o mudam com frequ\xeancia. Diferentes coisas podem invalidar uma sele\xe7\xe3o tempor\xe1ria: a modifica\xe7\xe3o ou elimina\xe7\xe3o de um registro da sele\xe7\xe3o tempor\xe1ria, ou a modifica\xe7\xe3o dos crit\xe9rios de cria\xe7\xe3o da sele\xe7\xe3o tempor\xe1ria."}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/cut-named-selection",children:"CUT NAMED SELECTION"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"332"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar o registro atual"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,o.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var s=r(667294);let o={},a=s.createContext(o);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);