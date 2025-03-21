"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80304"],{85582:function(e,s,o){o.r(s),o.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>t,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/web-get-variables","title":"WEB GET VARIABLES","description":"WEB GET VARIABLES ( nomeArray ; valorArray )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-get-variables.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-variables","permalink":"/docs/pt/commands/web-get-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-variables.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-get-variables","title":"WEB GET VARIABLES","slug":"/commands/web-get-variables","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET STATISTICS","permalink":"/docs/pt/commands/web-get-statistics"},"next":{"title":"WEB Is secured connection","permalink":"/docs/pt/commands/web-is-secured-connection"}}'),n=o("785893"),a=o("250065");let d={id:"web-get-variables",title:"WEB GET VARIABLES",slug:"/commands/web-get-variables",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Sobre formul\xe1rios Web e suas a\xe7\xf5es associadas",id:"sobre-formul\xe1rios-web-e-suas-a\xe7\xf5es-associadas",level:3},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"WEB GET VARIABLES"})," ( ",(0,n.jsx)(s.em,{children:"nomeArray"})," ; ",(0,n.jsx)(s.em,{children:"valorArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"nomeArray"}),(0,n.jsx)(s.td,{children:"Text array"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Nomes de vari\xe1veis de webform"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"valorArray"}),(0,n.jsx)(s.td,{children:"Text array"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Valor de vari\xe1vel de webform"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(s.p,{children:["O comando WEB GET VARIABLES preenche os arrays texto ",(0,n.jsx)(s.em,{children:"arrayNoms e arrayValores"})," com os nomes e valores das vari\xe1veis contidas no formul\xe1rio web \u201Cenviado\u201D (ou seja enviado ao servidor web)."]}),"\n",(0,n.jsx)(s.p,{children:"Este comando obt\xe9m o valor de todas as vari\xe1veis que podem ser inclu\xeddas em p\xe1ginas HTML: \xe1reas de entrada, bot\xf5es, caixas de sele\xe7\xe3o, bot\xf5es de op\xe7\xe3o, menus pop up, listas de op\xe7\xf5es..."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Nota"}),": no caso das caixas de sele\xe7\xe3o, o nome da vari\xe1vel e seu valor s\xf3 s\xe3o retornados se a caixa de sele\xe7\xe3o tiver sido selecionada."]}),"\n",(0,n.jsx)(s.p,{children:"Este comando \xe9 valido sem importar o tipo de URL ou de formul\xe1rio (m\xe9todo POST ou GET) enviado ao servidor web."}),"\n",(0,n.jsxs)(s.p,{children:["Este comando pode ser chamado, se for necess\xe1rio, no ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/qr-set-destination",children:"QR SET DESTINATION"})," ou em qualquer outro m\xe9todo 4D que resulte do envio de um formul\xe1rio."]}),"\n",(0,n.jsx)(s.h3,{id:"sobre-formul\xe1rios-web-e-suas-a\xe7\xf5es-associadas",children:"Sobre formul\xe1rios Web e suas a\xe7\xf5es associadas"}),"\n",(0,n.jsxs)(s.p,{children:["Um formul\xe1rio cont\xe9m \xe1reas de entrada (\xe1reas de texto, bot\xf5es, caixas de sele\xe7\xe3o). Quando um formul\xe1rio \xe9 enviado (uma peti\xe7\xe3o \xe9 enviada ao servidor web), a peti\xe7\xe3o cont\xe9m, entre outros, a lista de \xe1reas de entrada e seus valores respectivos.",(0,n.jsx)(s.br,{}),"\nH\xe1 dois m\xe9todos para enviar um formul\xe1rio (ambos podem ser utilizados indiferentemente com 4D):"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"POST, geralmente utilizado para adicionar dados no servidor web, a um banco de dados,"}),"\n",(0,n.jsx)(s.li,{children:"GET, geralmente utilizado para a peti\xe7\xe3o ao servidor web, dados que provem de um banco de dados."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(s.p,{children:"Um formul\xe1rio cont\xe9m dois campos, vNome e vCidade que recebem os valores \u201CROBERTO\u201D e \u201CPARIS\u201D. A a\xe7\xe3o associada ao formul\xe1rio \xe9 \u201C/4DACTION/WEBFORM\u201D."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Se o m\xe9todo de formul\xe1rio for POST (o utilizado com mais frequ\xeancia), os dados introduzidos n\xe3o ser\xe3o vis\xedveis na URL (",(0,n.jsx)(s.a,{href:"http://127.0.0.1/4DACTION/WEBFORM",children:"http://127.0.0.1/4DACTION/WEBFORM"}),")."]}),"\n",(0,n.jsxs)(s.li,{children:["Se o m\xe9todo de formul\xe1rio for GET, os dados ser\xe3o vis\xedveis na URL (",(0,n.jsx)(s.a,{href:"http://127.0.0.1/4DACTION/WEBFORM?vNOME=ROBERTO&vCIDADE=PARIS",children:"http://127.0.0.1/4DACTION/WEBFORM?vNOME=ROBERTO&vCIDADE=PARIS"}),")."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"O m\xe9todo WEBFORM pode ser desta forma:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY TEXT($anombres;0)\n\xa0ARRAY TEXT($avalores;0)\n\xa0WEB GET VARIABLES($anombres;$avalores)\n"})}),"\n",(0,n.jsx)(s.p,{children:"O resultado ser\xe1:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0$anomes{1}="vNOME"\n\xa0$anomes{2}="vCIDADE"\n\xa0$avalores{1}="ROBERTO"\n\xa0$avalores{2}="PARIS"\n'})}),"\n",(0,n.jsx)(s.p,{children:"A vari\xe1vel vNOME cont\xe9m ROBERTO e vCIDADE cont\xe9m PARIS."}),"\n",(0,n.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/pt/commands/web-get-body-part",children:"WEB GET BODY PART"})}),"\n",(0,n.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"N\xfamero do comando"}),(0,n.jsx)(s.td,{children:"683"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Thread-seguro"}),(0,n.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return i},a:function(){return d}});var r=o(667294);let n={},a=r.createContext(n);function d(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);