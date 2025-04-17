"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64648"],{308726:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>i,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/delete-document","title":"DELETE DOCUMENT","description":"DELETE DOCUMENT ( documento )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/delete-document.md","sourceDirName":"commands-legacy","slug":"/commands/delete-document","permalink":"/docs/pt/commands/delete-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-document.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"delete-document","title":"DELETE DOCUMENT","slug":"/commands/delete-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE FOLDER","permalink":"/docs/pt/commands/create-folder"},"next":{"title":"DELETE FOLDER","permalink":"/docs/pt/commands/delete-folder"}}'),t=o("785893"),s=o("250065");let r={id:"delete-document",title:"DELETE DOCUMENT",slug:"/commands/delete-document",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DELETE DOCUMENT"})," ( ",(0,t.jsx)(n.em,{children:"documento"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"documento"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome do documento ou rota de acesso completa"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando DELETE DOCUMENT apaga o documento cujo nome se passa em ",(0,t.jsx)(n.em,{children:"documento"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Se o nome do documento ou a rota de acesso estiverem incorretos, um erro ser\xe1 gerado."}),"\n",(0,t.jsx)(n.p,{children:"Se o documento for aberto quando o comando \xe9 chamado, o resultado depende do OS."}),"\n",(0,t.jsx)(n.p,{children:"Em Windows, um erro \xe9 gerado"}),"\n",(0,t.jsx)(n.p,{children:"Em macOS, nenhum erro \xe9 gerado e o documento \xe9 apagado"}),"\n",(0,t.jsxs)(n.p,{children:["DELETE DOCUMENT n\xe3o aceita uma string vazia no par\xe2metro ",(0,t.jsx)(n.em,{children:"documento"}),". Se uma string vazia for utilizada, a caixa de di\xe1logo de abertura de arquivos n\xe3o \xe9 mostrada um erro \xe9 gerado."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Advert\xeancia"}),": DELETE DOCUMENT pode apagar um arquivo em disco. Isso inclui documentos criados com outras aplica\xe7\xf5es, al\xe9m das pr\xf3prias aplica\xe7\xf5es. DELETE DOCUMENT deve ser usado com extremo cuidado. A elimina\xe7\xe3o de um documento \xe9 uma opera\xe7\xe3o permanente e n\xe3o pode ser desfeita."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"O exemplo abaixo apaga o documento chamado Nota:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0DELETE DOCUMENT("Nota")\xa0// Apaga o documento\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsxs)(n.p,{children:["Veja o exemplo do comando ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsx)(n.p,{children:"A elimina\xe7\xe3o de um documento faz que a vari\xe1vel sistema assuma o valor 1. Se DELETE DOCUMENT n\xe3o pode apagar o documento, a vari\xe1vel sistema OK assume o valor 0."}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/test-path-name",children:"Test path name"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"159"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return r}});var d=o(667294);let t={},s=d.createContext(t);function r(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);