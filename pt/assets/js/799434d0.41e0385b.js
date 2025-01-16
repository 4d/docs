"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7361"],{98618:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>t});var o=JSON.parse('{"id":"commands-legacy/receive-variable","title":"RECEIVE VARIABLE","description":"RECEIVE VARIABLE ( variavel )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/receive-variable.md","sourceDirName":"commands-legacy","slug":"/commands/receive-variable","permalink":"/docs/pt/commands/receive-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-variable.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"receive-variable","title":"RECEIVE VARIABLE","slug":"/commands/receive-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE RECORD","permalink":"/docs/pt/commands/receive-record"},"next":{"title":"SEND PACKET","permalink":"/docs/pt/commands/send-packet"}}'),s=n("785893"),a=n("250065");let d={id:"receive-variable",title:"RECEIVE VARIABLE",slug:"/commands/receive-variable",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"RECEIVE VARIABLE"})," ( ",(0,s.jsx)(r.em,{children:"variavel"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"variavel"}),(0,s.jsx)(r.td,{children:"Variable"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Vari\xe1vel na qual receber"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["RECEIVE VARIABLE recebe a ",(0,s.jsx)(r.em,{children:"variavel"}),", que anteriormente foi enviada pelo ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"})," do documento ou porta serial aberta anteriormente pelo ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"No modo interpretado, se a vari\xe1vel n\xe3o existe antes da chamada a RECEIVE VARIABLE, a vari\xe1vel \xe9 criada, escrita e atribu\xedda de acordo com o que foi recebido. No modo compilado, a vari\xe1vel deve ser do mesmo tipo, como o que \xe9 recebida. Em ambos os casos, o conte\xfado da vari\xe1vel s\xe3o substitu\xeddos com o que \xe9 recebido."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(r.p,{children:["1. Se voc\xea receber uma vari\xe1vel de um documento utilizando este comando, o documento deve ter sido aberto usando o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),". Voc\xea n\xe3o pode usar RECEIVE VARIABLE com um documento aberto com ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/append-document",title:"Append document",children:"Append document"})," ou ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/create-document",title:"Create document",children:"Create document"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["2. Este comando n\xe3o suporta vari\xe1veis de array. Se voc\xea quiser enviar e receber arrays de um documento ou atrav\xe9s de uma porta serial, use os ",(0,s.jsx)(r.em,{children:"Comandos BLOB"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["3. Durante a execu\xe7\xe3o das RECEIVE VARIABLE, o usu\xe1rio pode interromper a recep\xe7\xe3o pressionando Ctrl-Alt-Shift (Windows) ou Command + Option + Shift (Macintosh). Esta interrup\xe7\xe3o gera um erro -9994, que voc\xea pode pegar com um m\xe9todo de tratamento de erros instalado usando ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),". Normalmente, voc\xea s\xf3 precisa manipular a interrup\xe7\xe3o de uma recep\xe7\xe3o ao comunicar-se atrav\xe9s de uma porta serial."]}),"\n",(0,s.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(r.p,{children:["Veja o exemplo para o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(r.p,{children:"A vari\xe1vel de sistema OK \xe9 definida como 1 se a vari\xe1vel for recebida. Caso contr\xe1rio, a vari\xe1vel de sistema OK \xe9 definido como 0."}),"\n",(0,s.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/receive-record",children:"RECEIVE RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/send-record",children:"SEND RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,s.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"81"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2713"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(r.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return t},a:function(){return d}});var o=n(667294);let s={},a=o.createContext(s);function d(e){let r=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);