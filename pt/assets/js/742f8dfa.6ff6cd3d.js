"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27129"],{130545:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/is-picture-file","title":"Is picture file","description":"Is picture file ( viaArquivo {; *} ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-picture-file.md","sourceDirName":"commands-legacy","slug":"/commands/is-picture-file","permalink":"/docs/pt/commands/is-picture-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-picture-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-picture-file","title":"Is picture file","slug":"/commands/is-picture-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE METADATA","permalink":"/docs/pt/commands/get-picture-metadata"},"next":{"title":"PICTURE CODEC LIST","permalink":"/docs/pt/commands/picture-codec-list"}}'),o=n("785893"),i=n("250065");let t={id:"is-picture-file",title:"Is picture file",slug:"/commands/is-picture-file",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Is picture file"})," ( ",(0,o.jsx)(s.em,{children:"viaArquivo"})," {; *} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"viaArquivo"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Rota do arquivo"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"*"}),(0,o.jsx)(s.td,{children:"Operador"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Validar os dados"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Resultado"}),(0,o.jsx)(s.td,{children:"Boolean"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"True = rotaArquivo indica um arquivo de imagem; de outro modo, False"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando Is picture file prova o arquivo designado pelo par\xe2metro ",(0,o.jsx)(s.em,{children:"rotaArquivo"})," e devolve True se for um arquivo de imagem v\xe1lido. O comando devolve False se o arquivo n\xe3o for de tipo imagem ou se n\xe3o for encontrado."]}),"\n",(0,o.jsxs)(s.p,{children:["Passe no par\xe2metro ",(0,o.jsx)(s.em,{children:"rotaArquivo"}),' a rota de acesso do arquivo imagem a provar. A rota deve ser expressa com a sintaxe do sistema. Pode passar uma rota de acesso absoluta ou relativa ao arquivo de estrutura do banco. Se passa uma string vazia (""), o comando devolve False.']}),"\n",(0,o.jsxs)(s.p,{children:["Se n\xe3o passa o par\xe2metro ",(0,o.jsx)(s.em,{children:"*"}),", o comando prova o arquivo buscando sua extens\xe3o na lista de codecs dispon\xedveis. Se quer provar os arquivos sem extens\xf5es ou efetuar uma verifica\xe7\xe3o mais exaustiva, passe o par\xe2metro *. Neste caso, o comando faz provas adicionais: carrega e inspeciona o cabe\xe7alho do arquivo e interroga os codecs com o fim de validar a imagem. Esta sintaxe atrasa a execu\xe7\xe3o de comandos."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota"}),": o comando devolve True para os arquivos PDF em Windows e arquivos EMF em Mac OS."]}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/pt/commands/picture-codec-list",children:"PICTURE CODEC LIST"})}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"1113"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return t}});var r=n(667294);let o={},i=r.createContext(o);function t(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);