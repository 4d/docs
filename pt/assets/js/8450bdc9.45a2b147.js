"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82603"],{463048:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/web-send-file","title":"WEB SEND FILE","description":"WEB SEND FILE ( htmlArquivo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-send-file.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-file","permalink":"/docs/pt/commands/web-send-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-send-file","title":"WEB SEND FILE","slug":"/commands/web-send-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND BLOB","permalink":"/docs/pt/commands/web-send-blob"},"next":{"title":"WEB SEND HTTP REDIRECT","permalink":"/docs/pt/commands/web-send-http-redirect"}}'),o=s("785893"),r=s("250065");let d={id:"web-send-file",title:"WEB SEND FILE",slug:"/commands/web-send-file",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WEB SEND FILE"})," ( ",(0,o.jsx)(n.em,{children:"htmlArquivo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"htmlArquivo"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Rota do arquivo HTML ou string vazia para terminar SEND HTML FILE"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"WEB SEND FILE"})," envia ao navegador web a p\xe1gina HTML ou o arquivo web armazenado no documento cuja rota se passa em ",(0,o.jsx)(n.em,{children:"arquivohtml"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Por padr\xe3o, 4D busca o documento HTML no interior da pasta raiz, definida nas Propriedades do banco."}),"\n",(0,o.jsxs)(n.p,{children:['Este comando aceita como par\xe2metro uma rota de acesso expressa em sintaxe Posix (nomes de diret\xf3rios ou de pastas separados por uma barra obl\xedqua "/") ou em sintaxe sistema.',(0,o.jsx)(n.br,{}),"\nSe passar uma rota de acesso inv\xe1lida, se gera um erro asociado \xe0 gest\xe3o dos arquivos de seu sistema operativo. Pode interceptar este erro utilizando um m\xe9todo instalado pelo comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),". Se o m\xe9todo mostra uma caixa de di\xe1logo de alerta ou de mensagem, aparecer\xe1 na m\xe1quina do navegador.",(0,o.jsx)(n.br,{}),"\nQuando tiver executada a instru\xe7\xe3o ",(0,o.jsx)(n.strong,{children:"WEB SEND FILE"}),", a vari\xe1vel sistema OK se atualiza: se o arquivo a enviar existir e se o timeout n\xe3o for passado, OK toma o valor 1. Do contr\xe1rio, toma o valor 0."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": se chama ",(0,o.jsx)(n.strong,{children:"WEB SEND FILE"})," desde um processo que n\xe3o \xe9 um processo web, o comando n\xe3o faz nada. N\xe3o se retorna nenhum erro e a chamada simplesmente \xe9 ignorada."]}),"\n",(0,o.jsxs)(n.p,{children:["As refer\xeancias \xe0s vari\xe1veis 4D e a as etiquetas de tipo ",(0,o.jsx)(n.em,{children:"4DSCRIPT"})," na p\xe1gina sempre se analizam quando o tipo de documento o permite (documento baseado em texto)."]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"A pasta raiz do banco de dados \xe9 a pasta WebDocs. Cont\xe9m os elementos abaixo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0..\\WebDocs\\HTM\\MyPage.HTM\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Enviar a p\xe1gina web ",(0,o.jsx)(n.em,{children:'"MinhaPagina.HTM"'})," pode ser efetuada da seguinte maneira :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0WEB SEND FILE("HTM/MinhaPagina.HTM")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(n.p,{children:"Se o arquivo a ser enviado existir e o timeout n\xe3o tiver passado, OK \xe9 estabelecido a 1. Sen\xe3o, \xe9 igual a 0."}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/commands/web-send-blob",children:"WEB SEND BLOB"})}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"619"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var a=s(667294);let o={},r=a.createContext(o);function d(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);