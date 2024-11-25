"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6199"],{464923:function(e,a,s){s.r(a),s.d(a,{metadata:()=>o,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>t});var o=JSON.parse('{"id":"commands-legacy/select-folder","title":"Select folder","description":"Select folder ( {mensagem }{;}{ rotaPadrao {; op\xe7\xf5es}} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/select-folder.md","sourceDirName":"commands-legacy","slug":"/commands/select-folder","permalink":"/docs/pt/commands/select-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-folder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"select-folder","title":"Select folder","slug":"/commands/select-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Select document","permalink":"/docs/pt/commands/select-document"},"next":{"title":"SET DOCUMENT POSITION","permalink":"/docs/pt/commands/set-document-position"}}'),n=s("785893"),r=s("250065");let t={id:"select-folder",title:"Select folder",slug:"/commands/select-folder",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Select folder"})," ( {",(0,n.jsx)(a.em,{children:"mensagem"})," }{;}{ ",(0,n.jsx)(a.em,{children:"rotaPadrao"})," {; ",(0,n.jsx)(a.em,{children:"op\xe7\xf5es"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe2metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"mensagem"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"T\xedtulo da janela"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"rotaPadrao"}),(0,n.jsx)(a.td,{children:"Text, Integer"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"\u2022 Rota padr\xe3o ou \u2022 String vazia para mostrar a pasta de usu\xe1rio padr\xe3o (\u201CMeus documentos\u201D em Windows, \u201CDocumentos\u201D em Mac OS), ou \u2022 N\xfamero de rota memorizada"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"op\xe7\xf5es"}),(0,n.jsx)(a.td,{children:"Integer"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Op\xe7\xf5es de sele\xe7\xe3o em Mac OS"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Resultado"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2190"}),(0,n.jsx)(a.td,{children:"Rota de acesso \xe0 pasta selecionada"})]})]})]}),"\n",(0,n.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(a.p,{children:["O comando Select folder mostra uma caixa de di\xe1logo que lhe permite selecionar manualmente uma pasta e depois recuperar a rota de acesso completa a essa pasta. O par\xe2metro opcional ",(0,n.jsx)(a.em,{children:"rotaPadrao"})," pode ser utilizado para designar a localiza\xe7\xe3o de uma pasta que inicialmente ser\xe1 mostrada na caixa de di\xe1logo de sele\xe7\xe3o da pasta."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota"}),": este comando n\xe3o modifica a pasta atual da aplica\xe7\xe3o 4D."]}),"\n",(0,n.jsxs)(a.p,{children:["O comando Select folder mostra uma caixa de di\xe1logo padr\xe3o de navega\xe7\xe3o atrav\xe9s dos volumes e as pastas.",(0,n.jsx)(a.br,{}),"\nO par\xe2metro opcional ",(0,n.jsx)(a.em,{children:"mensagem"}),' lhe permite mostrar uma mensagem na caixa de di\xe1logo. Nos seguintes exemplos, a mensagem \xe9 "Selecione uma pasta de destino":']}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Windows"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:s(117015).Z+"",width:"502",height:"420"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Mac OS"}),"\n",(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.img,{src:s(76707).Z+"",width:"758",height:"492"})})]}),"\n",(0,n.jsxs)(a.p,{children:["Pode utilizar o par\xe2metro ",(0,n.jsx)(a.em,{children:"rotaPadrao"})," para oferecer uma localiza\xe7\xe3o de pasta por padr\xe3o na caixa de di\xe1logo de sele\xe7\xe3o de pasta. Pode passar neste par\xe2metro tr\xeas tipos de valores:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Uma rota de acesso de uma pasta v\xe1lida utilizando a sintaxe da plataforma atual."}),"\n",(0,n.jsx)(a.li,{children:"Uma string vazia (\u201C\u201D) para mostrar a pasta do usu\xe1rio por padr\xe3o do sistema (\u201CMeus documentos\u201D em Windows, \u201CDocumentos\u201D em Mac OS)."}),"\n",(0,n.jsxs)(a.li,{children:["O n\xfamero de rota de acesso memorizada (de 1 a 32.000) para mostrar a pasta associada. Isto significa que pode armazenar em mem\xf3ria a rota de acesso da pasta aberta quando o usu\xe1rio clicar no bot\xe3o de sele\xe7\xe3o; em outras palavras, a pasta escolhida pelo usu\xe1rio. Quando for chamado um n\xfamero arbitr\xe1rio (por exemplo, 5) o comando mostra a pasta do usu\xe1rio por padr\xe3o do sistema (equivalente a passar uma string vazia). O usu\xe1rio pode ent\xe3o navegar entre as pastas em seu disco r\xedgido. Quando o usu\xe1rio clicar no bot\xe3o de sele\xe7\xe3o, a rota de acesso \xe9 memorizada e se associa com o n\xfamero 5. Quando posteriormente se chama o n\xfamero 5, se utilizar\xe1 por padr\xe3o a rota de acesso memorizada. Em caso de sele\xe7\xe3o de uma nova localiza\xe7\xe3o, a rota n\xfamero 5 ser\xe1 atualizado, e assim sucessivamente.",(0,n.jsx)(a.br,{}),"\nEste mecanismo pode ser utilizado para memorizar at\xe9 32.000 rotas de acesso. Em Windows, cada rota \xe9 conservada durante a sess\xe3o. Em Mac OS, as rotas ficam memorizadas de uma sess\xe3o a outra. Se a rota for incorreta, o par\xe2metro ",(0,n.jsx)(a.em,{children:"rotaPadrao"})," ser\xe1 ignorado."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Note:"})," Este mecanismo \xe9 id\xeantico ao usado pelo comando ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/select-document",children:"Select document"}),". O n\xfamero de rotas memorizadas \xe9 passado entre os dois comandos."]}),"\n",(0,n.jsxs)(a.p,{children:["O par\xe2metro op\xe7\xf5es permite que voc\xea se beneficie de fun\xe7\xf5es adicionais no Mac OS. Nesse par\xe2metro, voc\xea pode passar uma das seguintes constantes, encontradas no tema ",(0,n.jsx)(a.em,{children:"Documentos Sistema"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Constante"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{children:"Valor"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Package open"}),(0,n.jsx)(a.td,{children:"Inteiro longo"}),(0,n.jsx)(a.td,{children:"2"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Use sheet window"}),(0,n.jsx)(a.td,{children:"Inteiro longo"}),(0,n.jsx)(a.td,{children:"16"})]})]})]}),"\n",(0,n.jsxs)(a.p,{children:["Pode passar uma constante ou a combina\xe7\xe3o de duas. Estas op\xe7\xf5es apenas consideradas no Mac OS. Em Windows, o par\xe2metro ",(0,n.jsx)(a.em,{children:"op\xe7oes"})," \xe9 ignorado se for passado."]}),"\n",(0,n.jsxs)(a.p,{children:["O usu\xe1rio seleciona uma pasta e logo faz clique no bot\xe3o ",(0,n.jsx)(a.strong,{children:"Select Folder"})," (em Windows) ou ",(0,n.jsx)(a.strong,{children:"Open"})," (em Mac OS). A rota de acesso a pasta \xe9 ent\xe3o retornada pela fun\xe7\xe3o."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Em Windows, a rota de acesso retornada no seguinte formato:",(0,n.jsx)(a.br,{}),"\n\u201CC:\\Pasta1\\Pasta2\\PastaSelecionada\\\u201D"]}),"\n",(0,n.jsxs)(a.li,{children:["Em Mac OS, a rota de acesso retornada no seguinte formato:",(0,n.jsx)(a.br,{}),"\n\u201CDisco:Pasta1:Pasta2:PastaSelecionada:\u201D"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota"}),": em Mac OS, dependendo de se o nome da pasta for selecionado ou n\xe3o na caixa de di\xe1logo, a rota de acesso retornada poderia ser diferente."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:s(596010).Z+"",width:"587",height:"183"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"4D Server"}),": esta fun\xe7\xe3o permite visualizar os volumes conectados \xe0s esta\xe7\xf5es de trabalho dos clientes. N\xe3o \xe9 poss\xedvel chamar esta fun\xe7\xe3o desde um procedimento armazenado."]}),"\n",(0,n.jsxs)(a.p,{children:["Se o usu\xe1rio validar a caixa de di\xe1logo, a vari\xe1vel sistema OK toma o valor 1. Se o usu\xe1rio clicar no bot\xe3o ",(0,n.jsx)(a.strong,{children:"Cancelar"}),", a vari\xe1vel sistema ",(0,n.jsx)(a.strong,{children:"OK"})," toma o valor 0 e a fun\xe7\xe3o retorna uma string vazia."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota"}),': em Windows, se o usu\xe1rio selecionar alguns elementos incorretos, tais como \u201CEsta\xe7\xe3o de trabalho", \u201CLixeira\u201D, etc., a vari\xe1vel sistema OK toma o valor 0, mesmo se o usu\xe1rio validar a caixa de di\xe1logo.']}),"\n",(0,n.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(a.p,{children:"O exemplo abaixo lhe permite selecionar a pasta na qual ser\xe3o armazenadas as imagens da biblioteca de imagens:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0$PictFolder:=Select folder("Select a folder for your pictures.")\n\xa0PICTURE LIBRARY LIST(pictRefs;pictNames)\n\xa0For($n;1;Size of array(pictNames))\n\xa0\xa0\xa0\xa0GET PICTURE FROM LIBRARY(pictRefs{$n};$vStoredPict)\n\xa0\xa0\xa0\xa0WRITE PICTURE FILE($PictFolder+pictNames{$n};$vStoredPict)\n\xa0End for\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d"})}),"\n",(0,n.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/pt/commands/create-folder",children:"CREATE FOLDER"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/commands/folder-list",children:"FOLDER LIST"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/commands/select-document",children:"Select document"})]})]})}function m(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},596010:function(e,a,s){s.d(a,{Z:function(){return o}});let o=s.p+"assets/images/pict34878.en-8cebfddc4025e3e90fbe59c6bd333e0d.png"},117015:function(e,a,s){s.d(a,{Z:function(){return o}});let o=s.p+"assets/images/pict3881936.en-f7ad218df9275caade9f5928d0aafe2a.png"},76707:function(e,a,s){s.d(a,{Z:function(){return o}});let o=s.p+"assets/images/pict3881985.en-dd24a3439cdb04dcca328ff9abb64a6c.png"},250065:function(e,a,s){s.d(a,{Z:function(){return d},a:function(){return t}});var o=s(667294);let n={},r=o.createContext(n);function t(e){let a=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);