"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88920"],{350581:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/soap-send-fault","title":"SOAP SEND FAULT","description":"SOAP SEND FAULT ( tipoErro ; descri\xe7ao )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/soap-send-fault.md","sourceDirName":"commands-legacy","slug":"/commands/soap-send-fault","permalink":"/docs/pt/20-R8/commands/soap-send-fault","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-send-fault.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"soap-send-fault","title":"SOAP SEND FAULT","slug":"/commands/soap-send-fault","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SOAP request","permalink":"/docs/pt/20-R8/commands/soap-request"},"next":{"title":"Windows","permalink":"/docs/pt/20-R8/commands/theme/Windows"}}'),d=r("785893"),o=r("250065");let t={id:"soap-send-fault",title:"SOAP SEND FAULT",slug:"/commands/soap-send-fault",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SOAP SEND FAULT"})," ( ",(0,d.jsx)(n.em,{children:"tipoErro"})," ; ",(0,d.jsx)(n.em,{children:"descri\xe7ao"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tipoErro"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"1 = Erro cliente; 2= erro Servidor"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"descri\xe7ao"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Descri\xe7\xe3o do erro a enviar ao cliente SOAP"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(n.p,{children:"O comando SOAP SEND FAULT permite devolver um erro a um cliente SOAP indicando a origem do erro: cliente ou servidor. Este comando permite indicar um erro a um cliente sem ter que devolver um resultado."}),"\n",(0,d.jsx)(n.p,{children:"Por exemplo, um erro do lado do cliente pode ser detectado quando publica um servi\xe7o web \u201CRaiz_quadrada\u201D e um cliente envia uma peti\xe7\xe3o com um n\xfamero negativo; pode utilizar este comando com o objetivo de indicar ao cliente que se necessita um valor positivo."}),"\n",(0,d.jsx)(n.p,{children:"Um erro poss\xedvel do lado do servidor poderia ser por exemplo, falta de mem\xf3ria durante a execu\xe7\xe3o do m\xe9todo."}),"\n",(0,d.jsxs)(n.p,{children:["Passe o origem do erro em ",(0,d.jsx)(n.em,{children:"tipoErro"}),". Pode utilizar as seguintes constantes predefinidas, que ficam no tema ",(0,d.jsx)(n.em,{children:"Servi\xe7os Web (Servidor)"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SOAP client fault"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SOAP server fault"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Passe em ",(0,d.jsx)(n.em,{children:"descri\xe7ao"})," a descri\xe7\xe3o do erro. Se a implementa\xe7\xe3o do cliente for correta, o erro pode ser processado."]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Regresando ao exemplo do servi\xe7o Web \u201CRaiz_quadrada\u201D da descri\xe7\xe3o do comando, a instru\xe7\xe3o abaixo pode ser utilizada para processar peti\xe7\xf5es con n\xfameros negativos:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SEND SOAP FAULT(SOAP client fault;"Valores positivos exigidos")\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/soap-declaration",children:"SOAP DECLARATION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/soap-get-info",children:"SOAP get info"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"781"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var s=r(667294);let d={},o=s.createContext(d);function t(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);