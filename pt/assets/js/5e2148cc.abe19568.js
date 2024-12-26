"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54988"],{254440:function(e,a,n){n.r(a),n.d(a,{metadata:()=>o,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>r});var o=JSON.parse('{"id":"commands-legacy/create-alias","title":"CREATE ALIAS","description":"CREATE ALIAS ( rotaObjetivo ; rotaAlias )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-alias.md","sourceDirName":"commands-legacy","slug":"/commands/create-alias","permalink":"/docs/pt/commands/create-alias","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-alias.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-alias","title":"CREATE ALIAS","slug":"/commands/create-alias","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY DOCUMENT","permalink":"/docs/pt/commands/copy-document"},"next":{"title":"Create document","permalink":"/docs/pt/commands/create-document"}}'),t=n("785893"),s=n("250065");let r={id:"create-alias",title:"CREATE ALIAS",slug:"/commands/create-alias",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let a={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"CREATE ALIAS"})," ( ",(0,t.jsx)(a.em,{children:"rotaObjetivo"})," ; ",(0,t.jsx)(a.em,{children:"rotaAlias"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Par\xe2metro"}),(0,t.jsx)(a.th,{children:"Tipo"}),(0,t.jsx)(a.th,{}),(0,t.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"rotaObjetivo"}),(0,t.jsx)(a.td,{children:"Text"}),(0,t.jsx)(a.td,{children:"\u2192"}),(0,t.jsx)(a.td,{children:"Nome da rota de acesso do alias/atalho alvo"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"rotaAlias"}),(0,t.jsx)(a.td,{children:"Text"}),(0,t.jsx)(a.td,{children:"\u2192"}),(0,t.jsx)(a.td,{children:"Nome ou rota de acesso completa para o alias ou atalho"})]})]})]}),"\n",(0,t.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(a.p,{children:["O comando CREATE ALIAS cria um alias (chamado \u201Catalho\u201D em Windows) do arquivo ou pasta objetivo passado em ",(0,t.jsx)(a.em,{children:"rotaObjetivo"}),". O nome e a localiza\xe7\xe3o s\xe3o definidos pelo par\xe2metro ",(0,t.jsx)(a.em,{children:"rotaAlias"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"Pode criar um alias de todo tipo de documento ou de pasta. O \xedcone do alias ser\xe1 id\xeantico ao do elemento objetivo. O \xedcone cont\xe9m uma pequena flecha na parte inferior esquerda. Em Mac OS, o nome do \xedcone \xe9 mostrado em caracteres em it\xe1lico."}),"\n",(0,t.jsxs)(a.p,{children:["Este comando n\xe3o atribui um nome por padr\xe3o, o nome tem que ser passado no par\xe2metro ",(0,t.jsx)(a.em,{children:"rotaAlias"}),". Se apenas passa um nome neste par\xe2metro, o alias \xe9 criado na pasta ativa atual (geralmente a pasta que cont\xe9m o arquivo de estrutura)."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Nota"}),": em Windows, os atalhos s\xe3o arquivos com extens\xe3o \u201C.LNK\u201D (invis\xedvel). Se esta extens\xe3o n\xe3o for passada, \xe9 adicionada automaticamente pelo comando."]}),"\n",(0,t.jsxs)(a.p,{children:["Se for passada uma string vazia em ",(0,t.jsx)(a.em,{children:"rotaObjetivo"}),", o comando n\xe3o faz nada."]}),"\n",(0,t.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(a.p,{children:"Seu banco gera arquivos de texto chamados \u201CRelat\xf3rioN\xfamero\u201D armazenados na pasta do banco. O usu\xe1rio quer criar atalhos a estes relat\xf3rios e armazen\xe1-los em uma localiza\xe7\xe3o conveniente:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0//M\xe9todo CRIAR_RELATORIO\n\xa0var $vtInf : Text\n\xa0C_STRING(250;$vtRota)\n\xa0C_STRING(80;$vaNome)\n\xa0var vDoc : Time\n\xa0C_INTEGER($NumRelatorio)\n\xa0\n\xa0$vtInf:=...\xa0//Criar relatorio\n\xa0$NumRelatorio:=...\xa0//Calculo do n\xfamero do relat\xf3rio\n\xa0$vaNome:="Relat\xf3rio"+String($NumRelat\xf3rio)+".txt"\xa0//Nome do arquivo\n\xa0vDoc:=Create document($vaNome)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vDoc;$vtInf)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vDoc)\n\xa0\xa0//Adicionar o alias\n\xa0\xa0\xa0\xa0CONFIRM("Criar um alias para este relat\xf3rio?")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtRuta:=Select folder("Onde quer criar o alias?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE ALIAS($vaNome;$vtRota+$vaNome)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SHOW ON DISK($vtRota+$vaNome)\n\xa0\xa0//Mostrar a localiza\xe7\xe3o do alias\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(a.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsx)(a.p,{children:"A vari\xe1vel sistema OK assume o valor 1 se o comando for executado corretamente, se n\xe3o assume o valor 0."}),"\n",(0,t.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"/docs/pt/commands/resolve-alias",children:"RESOLVE ALIAS"})}),"\n",(0,t.jsx)(a.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{}),(0,t.jsx)(a.th,{})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"N\xfamero do comando"}),(0,t.jsx)(a.td,{children:"694"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Thread-seguro"}),(0,t.jsx)(a.td,{children:"\u2713"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(a.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return r}});var o=n(667294);let t={},s=o.createContext(t);function r(e){let a=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);