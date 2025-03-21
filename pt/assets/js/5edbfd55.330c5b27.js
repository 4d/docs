"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29001"],{723346:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>t});var o=JSON.parse('{"id":"commands-legacy/printers-list","title":"PRINTERS LIST","description":"PRINTERS LIST ( arrayNoms {; altNomesArray {; modelosArray}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/printers-list.md","sourceDirName":"commands-legacy","slug":"/commands/printers-list","permalink":"/docs/pt/20-R7/commands/printers-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprinters-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"printers-list","title":"PRINTERS LIST","slug":"/commands/printers-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Print settings to BLOB","permalink":"/docs/pt/20-R7/commands/print-settings-to-blob"},"next":{"title":"Printing page","permalink":"/docs/pt/20-R7/commands/printing-page"}}'),n=r("785893"),a=r("250065");let i={id:"printers-list",title:"PRINTERS LIST",slug:"/commands/printers-list",displayed_sidebar:"docs"},t=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"PRINTERS LIST"})," ( ",(0,n.jsx)(s.em,{children:"arrayNoms"})," {; ",(0,n.jsx)(s.em,{children:"altNomesArray"})," {; ",(0,n.jsx)(s.em,{children:"modelosArray"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"arrayNoms"}),(0,n.jsx)(s.td,{children:"Text array"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Nomes das impressoras"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"altNomesArray"}),(0,n.jsx)(s.td,{children:"Text array"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Windows: localiza\xe7\xe3o das impressoras; macOS: Nomes personalizados das impressoras"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"modelosArray"}),(0,n.jsx)(s.td,{children:"Text array"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Modelos de impressoras"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(s.p,{children:"O comando PRINTERS LIST preenche os arrays passados como par\xe2metros com os nomes e opcionalmente com a localiza\xe7\xe3o os nomes personalizados e os modelos de impress\xe3o dispon\xedveis para a m\xe1quina."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Nota"}),": se as impressoras se manejam utilizando um servidor de impress\xe3o (spooler), se devolve a rota de acesso completa (em Windows) ou o nome do spooler (em Mac OS)."]}),"\n",(0,n.jsxs)(s.p,{children:["Passe no par\xe2metro ",(0,n.jsx)(s.em,{children:"nomesArray"})," o nome de um array de texto. Depois da execu\xe7\xe3o do comando, este array conter\xe1 os nomes das impressoras dispon\xedveis. Em Mac OS, este ser\xe1 o \u201Csistema\u201D fixo de nomes."]}),"\n",(0,n.jsxs)(s.p,{children:["Pode passar um segundo array opcional, ",(0,n.jsx)(s.em,{children:"altNomesArray"}),". O conte\xfado de este array depender\xe1 da plataforma:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Em Windows, para cada impressora, voc\xea obt\xe9m sua localiza\xe7\xe3o em red (o porto local)."}),"\n",(0,n.jsx)(s.li,{children:"Em Mac OS, para cada impressora, voc\xea obt\xe9m seu nome personalizado, o qual pode se modificado pelo usu\xe1rio. Este nome pode ser utilizado, por exemplo, em caixas de di\xe1logos."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["O par\xe2metro opcional ",(0,n.jsx)(s.em,{children:"modelosArray"})," se utiliza para obter o modelo de cada impressora."]}),"\n",(0,n.jsxs)(s.p,{children:["Utilize os comandos ",(0,n.jsx)(s.a,{href:"/docs/pt/20-R7/commands/set-current-printer",children:"SET CURRENT PRINTER"})," e ",(0,n.jsx)(s.a,{href:"/docs/pt/20-R7/commands/get-current-printer",children:"Get current printer"})," para modificar ou obter a impressora selecionada em 4D. Deve passar os nomes devolvidos no primeiro array (",(0,n.jsx)(s.em,{children:"nomesArray"}),")."]}),"\n",(0,n.jsx)(s.p,{children:"Em Windows, o nome de una impressora pode ser modificado manualmente ao n\xedvel do sistema de opera\xe7\xe3o. Por outro lado, sua localiza\xe7\xe3o e seu modelo est\xe3o associados a suas caracter\xedsticas f\xedsicas. Portanto, voc\xea pode utilizar os valores de array opcionais para verificar as caracter\xedsticas da impressora selecionada, geralmente, voc\xea pode verificar que todos as m\xe1quinas dos clientes utilizam a mesma impressora."}),"\n",(0,n.jsx)(s.p,{children:"Em Mac OS, esta verifica\xe7\xe3o pode ser realizada a cabo utilizando o nome da impressora (nome do servidor de impress\xe3o), que \xe9 o mesmo para cada m\xe1quina que estiver conectada."}),"\n",(0,n.jsx)(s.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(s.p,{children:"A vari\xe1vel sistema OK toma o valor 1 se o comando tiver sido executado corretamente; do contr\xe1rio, toma o valor 0 e os arrays se devolvem vazios."}),"\n",(0,n.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/20-R7/commands/get-current-printer",children:"Get current printer"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/20-R7/commands/set-current-printer",children:"SET CURRENT PRINTER"})]}),"\n",(0,n.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"N\xfamero do comando"}),(0,n.jsx)(s.td,{children:"789"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Thread-seguro"}),(0,n.jsx)(s.td,{children:"\u2717"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(s.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return t},a:function(){return i}});var o=r(667294);let n={},a=o.createContext(n);function i(e){let s=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);