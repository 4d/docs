"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3704"],{571243:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/get-document-icon","title":"GET DOCUMENT ICON","description":"GET DOCUMENT ICON ( rotaDoc ; icone {; tamanho} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-document-icon.md","sourceDirName":"commands-legacy","slug":"/commands/get-document-icon","permalink":"/docs/pt/commands/get-document-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-document-icon.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-document-icon","title":"GET DOCUMENT ICON","slug":"/commands/get-document-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FOLDER LIST","permalink":"/docs/pt/commands/folder-list"},"next":{"title":"Get document position","permalink":"/docs/pt/commands/get-document-position"}}'),s=o("785893"),d=o("250065");let r={id:"get-document-icon",title:"GET DOCUMENT ICON",slug:"/commands/get-document-icon",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET DOCUMENT ICON"})," ( ",(0,s.jsx)(n.em,{children:"rotaDoc"})," ; ",(0,s.jsx)(n.em,{children:"icone"})," {; ",(0,s.jsx)(n.em,{children:"tamanho"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rotaDoc"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome ou rota de acesso do documento para recuperar \xedcone, ou string vazia para caixa de di\xe1logo Abrir Arquivo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"icone"}),(0,s.jsx)(n.td,{children:"Picture, Picture"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Variavel imagem ou campo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tamanho"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tamanho da imagem retornada (em pixels)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando GET DOCUMENT ICON retorna no campo ou a vari\xe1vel imagem 4D \xedcone, o \xedcone do documento cujo nome ou rota de acesso se passa em ",(0,s.jsx)(n.em,{children:"rotaDoc. rotaDoc"})," pode especificar um arquivo de todo tipo (execut\xe1vel, documento, atalho ou alias, etc.) ou uma pasta."]}),"\n",(0,s.jsxs)(n.p,{children:["Passe em ",(0,s.jsx)(n.em,{children:"rotaDoc"})," a rota de acesso absoluta do documento. Igualmente, pode passar unicamente o nome do documento ou rota de acesso relativa, neste caso o documento deve ser encontrado no diret\xf3rio atual da banco (geralmente, a pasta que cont\xe9m o arquivo de estrutura da banco)."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passa uma string vazia em ",(0,s.jsx)(n.em,{children:"rotaDoc"}),", aparece a caixa de di\xe1logo padr\xe3o de abertura de arquivos, permitindo ao usu\xe1rio selecionar o arquivo a ser lido. Quando tiver validada a caixa de di\xe1logo, a vari\xe1vel sistema Document cont\xe9m a rota de acesso completa do arquivo selecionado."]}),"\n",(0,s.jsxs)(n.p,{children:["Passe em ",(0,s.jsx)(n.em,{children:"\xedcone"})," um campo ou uma vari\xe1vel imagem 4D. Depois da execu\xe7\xe3o do comando, este par\xe2metro cont\xe9m o \xedcone do arquivo (formato PICT)."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"tamanho"})," permite indicar as dimens\xf5es em p\xedxels do \xedcone. Este valor representa o comprimento do quadrado incluindo o \xedcone. Geralmente, os \xedcones s\xe3o definidos de 32x32 p\xedxels (\u201C\xedcones longos\u201D) ou 16x16 p\xedxels (\u201C\xedcones pequenos\u201D). Se passa 0 ou omite este par\xe2metro, o comando retorna o \xedcone mais grande dispon\xedvel."]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"700"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"Document, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return r}});var t=o(667294);let s={},d=t.createContext(s);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);