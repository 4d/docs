"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78038"],{572572:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/web-send-http-redirect","title":"WEB SEND HTTP REDIRECT","description":"WEB SEND HTTP REDIRECT ( url {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-send-http-redirect.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-http-redirect","permalink":"/docs/pt/commands/web-send-http-redirect","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-http-redirect.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-http-redirect","title":"WEB SEND HTTP REDIRECT","slug":"/commands/web-send-http-redirect","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND FILE","permalink":"/docs/pt/commands/web-send-file"},"next":{"title":"WEB SEND RAW DATA","permalink":"/docs/pt/commands/web-send-raw-data"}}'),t=r("785893"),d=r("250065");let o={id:"web-send-http-redirect",title:"WEB SEND HTTP REDIRECT",slug:"/commands/web-send-http-redirect",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB SEND HTTP REDIRECT"})," ( ",(0,t.jsx)(n.em,{children:"url"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nova URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Se especificado = URL n\xe3o for traduzido, se omitido = URL \xe9 traduzido"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"WEB SEND HTTP REDIRECT"})," permite transformar uma URL em outra."]}),"\n",(0,t.jsxs)(n.p,{children:["O par\xe2metro ",(0,t.jsx)(n.em,{children:"url"})," cont\xe9m a nova URL que permite redirecionar a peti\xe7\xe3o. Se este par\xe2metro for uma url para um arquivo, deve conter a refer\xeancia a este arquivo, por exemplo: ",(0,t.jsx)(n.strong,{children:"WEB SEND HTTP REDIRECT"}),' ("/MinhaPagina.HTM").']}),"\n",(0,t.jsxs)(n.p,{children:["Este comando prevalece sobre os comandos de envio de dados (",(0,t.jsx)(n.a,{href:"/docs/pt/commands/web-send-file",children:"WEB SEND FILE"}),", ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/web-send-blob",children:"WEB SEND BLOB"}),", etc.) que possam estar no mesmo m\xe9todo."]}),"\n",(0,t.jsx)(n.p,{children:"Este comando tamb\xe9m permite redirecionar uma peti\xe7\xe3o a outro servidor web."}),"\n",(0,t.jsxs)(n.p,{children:["4D codifica automaticamente os caracteres especiais do URL. Se passar o caractere ",(0,t.jsx)(n.em,{children:"*"}),", 4D n\xe3o os traduzir\xe1."]}),"\n",(0,t.jsxs)(n.p,{children:["Note que o estado da peti\xe7\xe3o enviada por este comando \xe9 ",(0,t.jsx)(n.strong,{children:"302: Moved Temporarily"}),". Se necessita um redirecionamento permanente (status 301), pode fixar o campo HTTP ",(0,t.jsx)(n.em,{children:"X-STATUS: 301"})," no cabe\xe7alho da resposta."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Pode utilizar este comando para realizar, com a ajuda de p\xe1ginas est\xe1ticas, pesquisas personalizadas em 4D. Imagine que coloca os elementos abaixo em uma p\xe1gina HTML est\xe1tica:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(39506).Z+"",width:"307",height:"179"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," a a\xe7\xe3o POST \u201C/4dcgi/rech\u201D foi associada \xe0 \xe1rea de texto e aos bot\xf5es ",(0,t.jsx)(n.strong,{children:"Aceitar"})," e ",(0,t.jsx)(n.strong,{children:"Cancelar"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Na parte (ou subrotina) do ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/qr-set-destination",children:"QR SET DESTINATION"}),", insere o c\xf3digo abaixo:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0[tab/]Case of\n:($1="/4dcgi/rech")\xa0//Quando 4D recebe este URL\n\xa0\xa0//Se o bot\xe3o Aceitar foi usando e o "nome" contiver um valor\n\xa0If((bOK="Aceitar")&(nome#""))\n\xa0\xa0//Mudar a URL para executar o c\xf3digo da pesquisa,\n\xa0\xa0//localizado mais abaixo no mesmo m\xe9todo\n\xa0\xa0\xa0\xa0WEB SEND HTTP REDIRECT("/4dcgi/rech?"+nome)\n\xa0Else\n\xa0\xa0//Se n\xe3o voltarr \xe0 p\xe1gina de in\xedcio\n\xa0\xa0\xa0\xa0WEB SEND HTTP REDIRECT("/pagina1.htm")\n\xa0End if\n\xa0...\n:($1="/4dcgi/rech?@")\xa0//Se a URL tiver sido redirigida\n\xa0...\xa0//Coloque o c\xf3digo da pesquisa aqui\nEnd case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"659"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},39506:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict838167.pt-19d263a859002d675b0653de5f7f05ff.png"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(667294);let t={},d=s.createContext(t);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);