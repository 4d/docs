"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6967"],{93432:function(e,s,r){r.r(s),r.d(s,{metadata:()=>a,contentTitle:()=>t,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>d});var a=JSON.parse('{"id":"commands-legacy/assert","title":"ASSERT","description":"ASSERT ( expressaoBool {; mensagemTexto} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/assert.md","sourceDirName":"commands-legacy","slug":"/commands/assert","permalink":"/docs/pt/commands/assert","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fassert.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"assert","title":"ASSERT","slug":"/commands/assert","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ABORT","permalink":"/docs/pt/commands/abort"},"next":{"title":"Asserted","permalink":"/docs/pt/commands/asserted"}}'),n=r("785893"),o=r("250065");let d={id:"assert",title:"ASSERT",slug:"/commands/assert",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"ASSERT"})," ( ",(0,n.jsx)(s.em,{children:"expressaoBool"})," {; ",(0,n.jsx)(s.em,{children:"mensagemTexto"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"expressaoBool"}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Express\xe3o Booleana"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mensagemText"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Texto de mensagem de erro"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(s.p,{children:["O comando ",(0,n.jsx)(s.strong,{children:"ASSERT"})," avalia a express\xe3o ",(0,n.jsx)(s.em,{children:"boolExpression"})," passa no par\xe2metro e, se retornar falso, para a execu\xe7\xe3o do c\xf3digo com uma mensagem de erro .O comando funciona em modo interpretado e compilado."]}),"\n",(0,n.jsxs)(s.p,{children:["Se ",(0,n.jsx)(s.em,{children:"boolExpression"}),' for verdadeiro, nada acontece. Se for falso, o comando ativa o erro -10518 e exibe como padr\xe3o o texto da asser\xe7\xe3o preceidade pela mensagem "Assert failed:". Pode interceptar este erro via um m\xe9todo instalado usando o comando ',(0,n.jsx)(s.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),", por exemplo para oferecer informa\xe7\xe3o para um arquivo de log."]}),"\n",(0,n.jsxs)(s.p,{children:["Opcionalmente, pode pasar um par\xe2metro ",(0,n.jsx)(s.em,{children:"messageText"})," para exibir uma mensagem de erro personalizada ao inv\xe9s do texo da asser\xe7\xe3o."]}),"\n",(0,n.jsxs)(s.p,{children:["Uma asser\xe7\xe3o \xe9 uma instru\xe7\xe3o inserida no c\xf3digo que \xe9 respons\xe1vel por detectar qualquer anomalia durante sua execu\xe7\xe3o. O princ\xedpio consiste em verificar que uma express\xe3o seja verdadeira em um dado momento e, caso n\xe3o seja verdadeira, causar uma exce\xe7\xe3o. Asser\xe7\xf5es s\xe3o usadas principalmente para detectar casos que nunca deveriam acontecer, principalmente para detectar bugs de programa\xe7\xe3o. \xc9 poss\xedvel ativar ou desativar globalmente3 todas as asser\xe7\xf5es de um aplicativo (por exemplo de acordo com o tipo de vers\xe3o) via o comando ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/set-assert-enabled",children:"SET ASSERT ENABLED"})," . Para saber mais sobre asser\xe7\xf5es em programa\xe7\xe3o, veja o artigo na Wikipedia: ",(0,n.jsx)(s.a,{href:"http://en.wikipedia.org/wiki/Assertion%5F%28computing%29",children:"http://en.wikipedia.org/wiki/Assertion_(computing)"})]}),"\n",(0,n.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(s.p,{children:"Antes de realizar opera\xe7\xf5es em um registro, o desenvolvedor deseja ter certeza de que est\xe1 carregado em modo leitura/escritura:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"\xa0READ WRITE([Tabela 1])\n\xa0LOAD RECORD([Tabela 1])\n\xa0ASSERT(Not(Locked([Tabela 1])))\n\xa0\xa0// dispara o erro -10518 se o registro est\xe1 bloqueado\n"})}),"\n",(0,n.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(s.p,{children:"Uma asser\xe7\xe3o permite provar os par\xe2metros passados a um m\xe9todo de projeto para detectar os valores aberrantes. Neste exemplo, \xe9 utilizado uma mensagem de alerta personalizado."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo que retorna o n\xfamero de um cliente em fun\xe7\xe3o de seu nome passado em $1\n\xa0var $1 : Text\xa0// Nome do cliente\n\xa0ASSERT($1#"";"Pesquisa de um nome de cliente vazio")\n\xa0\xa0// Um nome vazio neste caso \xe9 um valor aberrante\n\xa0\xa0// Se a asser\xe7\xe3o \xe9 falsa, se mostrar\xe1 na caixa de di\xe1logo o erro:\n\xa0\xa0// "Asser\xe7\xe3o falhou: pesquisa de um nome de cliente vazia"\n'})}),"\n",(0,n.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/commands/asserted",children:"Asserted"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/get-assert-enabled",children:"Get assert enabled"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/set-assert-enabled",children:"SET ASSERT ENABLED"})]}),"\n",(0,n.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"N\xfamero do comando"}),(0,n.jsx)(s.td,{children:"1129"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Thread-seguro"}),(0,n.jsx)(s.td,{children:"\u2713"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(s.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return t},a:function(){return d}});var a=r(667294);let n={},o=a.createContext(n);function d(e){let s=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);