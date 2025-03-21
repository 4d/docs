"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17060"],{82879:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/set-timeout","title":"SET TIMEOUT","description":"SET TIMEOUT ( segundos )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-timeout.md","sourceDirName":"commands-legacy","slug":"/commands/set-timeout","permalink":"/docs/pt/commands/set-timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-timeout.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-timeout","title":"SET TIMEOUT","slug":"/commands/set-timeout","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET CHANNEL","permalink":"/docs/pt/commands/set-channel"},"next":{"title":"USE CHARACTER SET","permalink":"/docs/pt/commands/use-character-set"}}'),s=r("785893"),t=r("250065");let d={id:"set-timeout",title:"SET TIMEOUT",slug:"/commands/set-timeout",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET TIMEOUT"})," ( ",(0,s.jsx)(n.em,{children:"segundos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"segundos"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Segundos at\xe9 o timeout"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando SET TIMEOUT especifica quanto tempo um comando de porta serial tem para terminar. Se o comando da porta serial n\xe3o for conclu\xeddo dentro do tempo especificado, em ",(0,s.jsx)(n.em,{children:"segundos"}),", o comando da porta serial \xe9 cancelado, um erro -9990 \xe9 gerado, e a vari\xe1vel de sistema OK \xe9 definida como 0. Voc\xea pode pegar o erro com um m\xe9todo de tratamento de erros instalado usando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note que o tempo \xe9 o tempo total permitido para o comando ser executado, e n\xe3o o tempo entre caracteres recebidos. Para cancelar uma configura\xe7\xe3o anterior e parar de monitorar a comunica\xe7\xe3o da porta serial, utilize uma configura\xe7\xe3o de 0 para os ",(0,s.jsx)(n.em,{children:"segundos"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Os comandos que s\xe3o afetados pela configura\xe7\xe3o de tempo limite s\xe3o:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/receive-packet",children:"RECEIVE PACKET"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["O exemplo a seguir define a porta serial para receber dados. Em seguida, ele define um limite de tempo. Os dados s\xe3o lidos com ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/receive-packet",children:"RECEIVE PACKET"}),". Se os dados n\xe3o forem recebidos em tempo, ocorre um erro:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0SET CHANNEL(MacOS serial port;Speed 9600+Data bits 8+Stop bits one+Parity none)\xa0// Abertura da porta serial\n\xa0SET TIMEOUT(10)\xa0// Fixar o timeout em 10 segundos\n\xa0ON ERR CALL("INTERCEPTAR ERROS COM")\xa0// Tratar as eventuais interrup\xe7\xf5es\xa0\n\xa0RECEIVE PACKET(vtBuffer;Char(13))\xa0// Ler at\xe9 encontrar um retorno de carro\n\xa0If(OK=0)\n\xa0\xa0\xa0\xa0ALERT("Erro durante o recebimento de dados.")\n\xa0Else\n\xa0\xa0\xa0\xa0[Pessoas]Nome:=vtBuffer\xa0// Salvar os dados recebidos em um campo\n\xa0End if\n\xa0ON ERR CALL("")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/receive-packet",children:"RECEIVE PACKET"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/receive-record",children:"RECEIVE RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/receive-variable",children:"RECEIVE VARIABLE"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"268"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var o=r(667294);let s={},t=o.createContext(s);function d(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);