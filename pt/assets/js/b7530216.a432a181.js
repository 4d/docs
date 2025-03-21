"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30955"],{105195:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>i,toc:()=>c,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/close-window","title":"CLOSE WINDOW","description":"CLOSE WINDOW {( janela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/close-window.md","sourceDirName":"commands-legacy","slug":"/commands/close-window","permalink":"/docs/pt/20-R7/commands/close-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclose-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"close-window","title":"CLOSE WINDOW","slug":"/commands/close-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Windows","permalink":"/docs/pt/20-R7/commands/theme/Windows"},"next":{"title":"CONVERT COORDINATES","permalink":"/docs/pt/20-R7/commands/convert-coordinates"}}'),s=o("785893"),r=o("250065");let d={id:"close-window",title:"CLOSE WINDOW",slug:"/commands/close-window",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CLOSE WINDOW"})," {( ",(0,s.jsx)(n.em,{children:"janela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"janela"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de refer\xeancia da Janela, ou a janela ativa do processo atual, se omitido"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["CLOSE WINDOW fecha a janela ativa aberta pelo comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/open-window",children:"Open window"})," ou ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/open-form-window",children:"Open form window"})," no processo atual. CLOSE WINDOW n\xe3o faz nada se n\xe3o houver uma janela personalizada aberta; n\xe3o fecha as janelas sistema. CLOSE WINDOW tampoco tem efeito se for chamado enquanto um formul\xe1rio estiver ativo na janela. Deve chamar CLOSE WINDOW quando tiver terminado de utilizar uma janela aberta por ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/open-window",children:"Open window"})," ou ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/open-form-window",children:"Open form window"}),".."]}),"\n",(0,s.jsxs)(n.p,{children:["\xc9 in\xfatil passar um n\xfamero a CLOSE WINDOW quando o utiliza para fechar as janelas abertas por ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/open-window",children:"Open window"})," ou ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/open-form-window",children:"Open form window"})," , j\xe1 que CLOSE WINDOW sempre fechar\xe1 a \xfaltima janela criada por um destes comandos."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passar um n\xfamero de refer\xeancia de janela externa no par\xe2metro ",(0,s.jsx)(n.em,{children:"janela"}),", CLOSE WINDOW fecha a janela externa especificada. Para maior informa\xe7\xe3o sobre janelas externas, consulte a fun\xe7\xe3o ."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["O seguinte exemplo abre uma janela formulario e cria novos registros com o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/add-record",children:"ADD RECORD"}),". Ao serem adicionados os registros, a janela se fecha com ",(0,s.jsx)(n.strong,{children:"CLOSE WINDOW"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Employees];"Entry")\n\xa0$winRef:=Open form window([Employees];"Entry")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Employees])\xa0//Adicionar um novo registro de empregado\n\xa0Until(OK=0)\xa0//Loop at\xe9 que o usu\xe1rio cancele\n\xa0CLOSE WINDOW\xa0//Fechamento da janela\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/open-form-window",children:"Open form window"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/open-window",children:"Open window"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"154"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return d}});var a=o(667294);let s={},r=a.createContext(s);function d(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);