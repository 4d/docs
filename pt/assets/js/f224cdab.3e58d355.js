"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54019"],{668899:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/create-selection-from-array","title":"CREATE SELECTION FROM ARRAY","description":"CREATE SELECTION FROM ARRAY ( tabela ; regArray {; temp} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/create-selection-from-array.md","sourceDirName":"commands-legacy","slug":"/commands/create-selection-from-array","permalink":"/docs/pt/commands/create-selection-from-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-selection-from-array.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"create-selection-from-array","title":"CREATE SELECTION FROM ARRAY","slug":"/commands/create-selection-from-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Before selection","permalink":"/docs/pt/commands/before-selection"},"next":{"title":"DELETE SELECTION","permalink":"/docs/pt/commands/delete-selection"}}'),o=n("785893"),a=n("250065");let t={id:"create-selection-from-array",title:"CREATE SELECTION FROM ARRAY",slug:"/commands/create-selection-from-array",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"CREATE SELECTION FROM ARRAY"})," ( ",(0,o.jsx)(r.em,{children:"tabela"})," ; ",(0,o.jsx)(r.em,{children:"regArray"})," {; ",(0,o.jsx)(r.em,{children:"temp"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"tabela"}),(0,o.jsx)(r.td,{children:"Table"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Tabela da qual criar a sele\xe7\xe3o"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"regArray"}),(0,o.jsx)(r.td,{children:"Integer, Boolean array"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Array de n\xfameros de registros, ou Array de booleanos (True = o registro est\xe1 na sele\xe7\xe3o, False = o registro n\xe3o est\xe1 na sele\xe7\xe3o)"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"temp"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Nome da sele\xe7\xe3o temporal a criar, ou Aplicar o comando a sele\xe7\xe3o atual se o par\xe2metro se omite"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["O comando ",(0,o.jsx)(r.strong,{children:"CREATE SELECTION FROM ARRAY"})," cria a sele\xe7\xe3o selectionName a partir de:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["um array de n\xfameros de registros absolutos ",(0,o.jsx)(r.em,{children:"regArray"})," de ",(0,o.jsx)(r.em,{children:"tabela"}),","]}),"\n",(0,o.jsxs)(r.li,{children:["ou de um array de booleanos. Neste caso, os valores do array indicam a associa\xe7\xe3o (",(0,o.jsx)(r.a,{href:"/docs/pt/commands/true",title:"True",children:"True"}),") ou n\xe3o (",(0,o.jsx)(r.a,{href:"/docs/pt/commands/false",title:"False",children:"False"}),") de cada registro de ",(0,o.jsx)(r.em,{children:"tabela"})," \xe0 sele\xe7\xe3o selectionName."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Cuidado:"})," Uma sele\xe7\xe3o nomeada \xe9 criada e carregada na mem\xf3ria. Portanto, tenha certeza de ter mem\xf3ria suficiente antes de executar o comando."]}),"\n",(0,o.jsx)(r.p,{children:"Se n\xe3o passar selectionName ou se passar uma string vazia, o comando ser\xe1 aplicado a sele\xe7\xe3o atual, a qual ser\xe1 ent\xe3o atualizada."}),"\n",(0,o.jsx)(r.p,{children:"Quando voc\xea utiliza um array de inteiros longos com este comando, todos os n\xfameros do array representam a lista de n\xfameros dos registros em selectionName. Se um n\xfamero for incorreto (registro n\xe3o criado), \xe9 gerado o erro -10503."}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota:"})," aten\xe7\xe3o, deve ter certeza de que o array n\xe3o contenha linhas que tenham o mesmo valor, do contr\xe1rio a sele\xe7\xe3o resultante ser\xe1 incorreta."]}),"\n",(0,o.jsxs)(r.p,{children:["Quando usa um array booleano com este comando, o elemento X do array indica se o registro n\xfamero X \xe9 (",(0,o.jsx)(r.a,{href:"/docs/pt/commands/true",title:"True",children:"True"}),") ou n\xe3o (",(0,o.jsx)(r.a,{href:"/docs/pt/commands/false",title:"False",children:"False"}),") em selectionName. O n\xfamero de elementos em ",(0,o.jsx)(r.em,{children:"regArray"})," deve ser igual ao n\xfamero de registros em ",(0,o.jsx)(r.em,{children:"tabela"}),". Se o array \xe9 menor que o n\xfamero de registros, s\xf3 os registros definidos pelo array podem fazer parte da sele\xe7\xe3o."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota:"})," com um array de booleanos, o comando utiliza elementos do n\xfamero 0 al X-1."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Aviso:"})," Lembre que um n\xfamero de registro pode ser reutilisado se o registro for apagado e outro registro for criado (ver ",(0,o.jsx)(r.em,{children:"Sobre N\xfameros de Registros"}),")."]}),"\n",(0,o.jsx)(r.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,o.jsxs)(r.p,{children:["Se um n\xfamero de registro n\xe3o \xe9 v\xe1lido (registro n\xe3o criado), \xe9 gerado o erro -10503. Pode interceptar este erro com a ajuda de um m\xe9todo instalado pelo comando ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/create-set-from-array",children:"CREATE SET FROM ARRAY"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/longint-array-from-selection",children:"LONGINT ARRAY FROM SELECTION"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/use-named-selection",children:"USE NAMED SELECTION"})]}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"640"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2713"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(r.td,{children:"error"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,o.jsx)(r.td,{})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return t}});var s=n(667294);let o={},a=s.createContext(o);function t(e){let r=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);