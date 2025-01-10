"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74164"],{656545:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/qr-set-destination","title":"QR SET DESTINATION","description":"QR SET DESTINATION ( area ; tipo {; especificos} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-destination.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-destination","permalink":"/docs/pt/commands/qr-set-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-destination.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-destination","title":"QR SET DESTINATION","slug":"/commands/qr-set-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET BORDERS","permalink":"/docs/pt/commands/qr-set-borders"},"next":{"title":"QR SET DOCUMENT PROPERTY","permalink":"/docs/pt/commands/qr-set-document-property"}}'),d=n("785893"),i=n("250065");let o={id:"qr-set-destination",title:"QR SET DESTINATION",slug:"/commands/qr-set-destination",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"QR SET DESTINATION"})," ( ",(0,d.jsx)(r.em,{children:"area"})," ; ",(0,d.jsx)(r.em,{children:"tipo"})," {; ",(0,d.jsx)(r.em,{children:"especificos"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Par\xe2metro"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"area"}),(0,d.jsx)(r.td,{children:"Integer"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tipo"}),(0,d.jsx)(r.td,{children:"Integer"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Tipo do relat\xf3rio"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"especificos"}),(0,d.jsx)(r.td,{children:"Text, Variable"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Espec\xedficos conectados ao tipo de sa\xedda"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["O comando QR SET DESTINATION permite definir o tipo de sa\xedda do relat\xf3rio r\xe1pido em ",(0,d.jsx)(r.em,{children:"area"}),"."]}),"\n",(0,d.jsxs)(r.p,{children:["No par\xe2metro ",(0,d.jsx)(r.em,{children:"tipo"}),", passe uma das constantes do tema ",(0,d.jsx)(r.em,{children:"QR Destino de sa\xedda"}),". O conte\xfado do par\xe2metro ",(0,d.jsx)(r.em,{children:"especificos"})," depende do valor de ",(0,d.jsx)(r.em,{children:"tipo"}),". A tabela a seguir descreve os valores que podem ser passados nos par\xe2metros ",(0,d.jsx)(r.em,{children:"tipo"})," e ",(0,d.jsx)(r.em,{children:"especificos"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Constante"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{children:"Valor"}),(0,d.jsx)(r.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"qr HTML file"}),(0,d.jsx)(r.td,{children:"Inteiro longo"}),(0,d.jsx)(r.td,{children:"5"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"qr printer"}),(0,d.jsx)(r.td,{children:"Inteiro longo"}),(0,d.jsx)(r.td,{children:"1"}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.em,{children:"detalhes:"}),' "*" para eliminar as caixas de di\xe1logo de impress\xe3o']})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"qr text file"}),(0,d.jsx)(r.td,{children:"Inteiro longo"}),(0,d.jsx)(r.td,{children:"2"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:"qr printer"}),' (1): se passar uma cadeia que cont\xe9m um asterisco ("*") no par\xe2metro ',(0,d.jsx)(r.em,{children:"especificos"}),", n\xe3o ser\xe1 mostrada uma caixa de di\xe1logo durante a impress\xe3o e os par\xe2metros de impress\xe3o atuais se utilizar\xe3o automaticamente. Esta configura\xe7\xe3o \xe9 necess\xe1ria se deseja imprimir o suporte no servidor."]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:"qr text file"})," (2): se passar uma cadeia vazia como no par\xe2metro ",(0,d.jsx)(r.em,{children:"especificos"}),", \xe9 mostrada uma caixa de di\xe1logo padr\xe3o de guardar arquivo. Se passar uma rota de acesso v\xe1lida, o relat\xf3rio r\xe1pido ser\xe1 guardado na localiza\xe7\xe3o indicada."]}),"\n",(0,d.jsxs)(r.p,{children:["Por padr\xe3o, o delimitador do campo \xe9 o caractere tab (ASCII 9). O delimitador de registro por padr\xe3o \xe9 o caractere retorno de carro (ASCII 13). Pode mudar esses caracteres por padr\xe3o atribuindo valores \xe0s vari\xe1veis sistema: FldDelimit e RecDelimit. Se em Windows, FldDelimit \xe9 igual a 13, um caractere 10 (salto de linha) ser\xe1 adicionado depois do retorno de carro. Considere que essas vari\xe1veis s\xe3o utilizadas por outros comandos como por exemplo ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/import-text",children:"IMPORT TEXT"})," Toda modifica\xe7\xe3o dessas vari\xe1veis repercute em toda a aplica\xe7\xe3o."]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:"qr 4D View area"})," (3): se o usu\xe1rio tiver 4D View, \xe9 criada uma janela externa 4D View e mostra os resultados dos par\xe2metros atuais da \xe1rea do relat\xf3rio r\xe1pido."]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:"qr HTML file"})," (5): \xe9 criado um arquivo HTML utilizando o modelo definido por ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/qr-set-html-template",children:"QR SET HTML TEMPLATE"}),". Para maior informa\xe7\xe3o sobre o modo de convers\xe3o dos dados, consulte o manual de Desenho."]}),"\n",(0,d.jsxs)(r.p,{children:["Se passar um n\xfamero de ",(0,d.jsx)(r.em,{children:"area"})," inv\xe1lido, \xe9 gerado o erro -9850.",(0,d.jsx)(r.br,{}),"\nSe o valor do destino ",(0,d.jsx)(r.em,{children:"tipo"})," \xe9 incorreto, \xe9 gerado o erro -9852."]}),"\n",(0,d.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(r.p,{children:"O c\xf3digo a seguir define o arquivo texto Midoc.txt como tipo de destino do relat\xf3rio r\xe1pido e o executa:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:'\xa0QR SET DESTINATION(MinhaArea;qr text file;"MeuDoc.txt")\n\xa0QR RUN(MinhaArea)\n'})}),"\n",(0,d.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/docs/pt/commands/qr-get-destination",children:"QR GET DESTINATION"})}),"\n",(0,d.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"N\xfamero do comando"}),(0,d.jsx)(r.td,{children:"745"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Thread-seguro"}),(0,d.jsx)(r.td,{children:"\u2717"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(r.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return t},a:function(){return o}});var s=n(667294);let d={},i=s.createContext(d);function o(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);