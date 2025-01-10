"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17233"],{669480:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands/use-entity-selection","title":"USE ENTITY SELECTION","description":"USE ENTITY SELECTION ( entitySelection : 4D.EntitySelection )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/use-entity-selection.md","sourceDirName":"commands","slug":"/commands/use-entity-selection","permalink":"/docs/pt/commands/use-entity-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fuse-entity-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"use-entity-selection","title":"USE ENTITY SELECTION","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Table fragmentation","permalink":"/docs/pt/commands/table-fragmentation"},"next":{"title":"VERIFY CURRENT DATA FILE","permalink":"/docs/pt/commands/verify-current-data-file"}}'),o=t("785893"),i=t("250065");let r={id:"use-entity-selection",title:"USE ENTITY SELECTION",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"USE ENTITY SELECTION"})," ( ",(0,o.jsx)(n.em,{children:"entitySelection"})," : 4D.EntitySelection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"entitySelection"}),(0,o.jsx)(n.td,{children:"4D. EntitySelection"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Sele\xe7\xe3o de entidades"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"USE ENTITY SELECTION"})," command updates the current selection of the table matching the dataclass of the ",(0,o.jsx)(n.em,{children:"entitySelection"})," parameter, according to the content of the entity selection."]}),"\n",(0,o.jsxs)(n.p,{children:["Este comando n\xe3o pode ser utilizado com um ",(0,o.jsx)(n.a,{href:"/docs/pt/ORDA/datastores",children:"datastore remoto"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Esse comando foi projetado para fazer com que as sele\xe7\xf5es de corrente 4D se beneficiem do poder das consultas ORDA. Por motivos de desempenho, no 4D single-user e no 4D Server, o comando conecta diretamente ",(0,o.jsx)(n.em,{children:"entitySelection"})," \xe0 sele\xe7\xe3o atual. Portanto, uma vez que a ",(0,o.jsx)(n.em,{children:"entitySelection"})," tenha sido usada, ela n\xe3o deve ser reutilizada ou alterada posteriormente."]})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Ap\xf3s uma chamada para ",(0,o.jsx)(n.code,{children:"USE ENTITY SELECTION"}),", o primeiro registro da sele\xe7\xe3o atual atualizada (se n\xe3o estiver vazio) torna-se o registro atual, mas n\xe3o \xe9 carregado na mem\xf3ria. Se precisar usar os valores dos campos no registro atual, use o comando ",(0,o.jsx)(n.code,{children:"LOAD RECORD"})," ap\xf3s o comando ",(0,o.jsx)(n.code,{children:"USE ENTITY SELECTION"}),"."]})}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $entitySel : cs.EmployeeSelection\n\n$entitySel:=ds.Employee.query("lastName = :1"; "M@") //$entitySel est\xe1 relacionado \xe0 classe de dados Employee\nREDUCE SELECTION([Employee];0)\nUSE ENTITY SELECTION($entitySel) //A sele\xe7\xe3o atual da tabela Employee \xe9 atualizada\n'})}),"\n",(0,o.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/commands/create-entity-selection",children:"Create entity selection"})}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"1513"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"&check;"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Changes current record"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Changes current selection"}),(0,o.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let o={},i=s.createContext(o);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);