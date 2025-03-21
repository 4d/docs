"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11805"],{113313:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-registered-clients","title":"GET REGISTERED CLIENTS","description":"GET REGISTERED CLIENTS ( listaClientes ; metodos )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-registered-clients.md","sourceDirName":"commands-legacy","slug":"/commands/get-registered-clients","permalink":"/docs/pt/20-R7/commands/get-registered-clients","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-registered-clients.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-registered-clients","title":"GET REGISTERED CLIENTS","slug":"/commands/get-registered-clients","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Execute on server","permalink":"/docs/pt/20-R7/commands/execute-on-server"},"next":{"title":"New process","permalink":"/docs/pt/20-R7/commands/new-process"}}'),r=s("785893"),d=s("250065");let i={id:"get-registered-clients",title:"GET REGISTERED CLIENTS",slug:"/commands/get-registered-clients",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET REGISTERED CLIENTS"})," ( ",(0,r.jsx)(n.em,{children:"listaClientes"})," ; ",(0,r.jsx)(n.em,{children:"metodos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"listaClientes"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Lista dos clientes 4D registrados"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"metodos"}),(0,r.jsx)(n.td,{children:"Integer array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Lista de m\xe9todos a executar"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"O comando GET REGISTERED CLIENTS preenche dois arrays:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"listaClientes"})," cont\xe9m a lista dos clientes \u201Cregistrados\u201D utilizando o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/register-client",children:"REGISTER CLIENT"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"metodos"})," fornece a lista de \u201Ccargas de trabalho\u201D de cada cliente. A carga de trabalho \xe9 o n\xfamero de m\xe9todos que um cliente 4D deve executar chamando o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/execute-on-client",children:"EXECUTE ON CLIENT"})," (para mais informa\xe7\xe3o, consulte la descri\xe7\xe3o do comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," se a opera\xe7\xe3o foi bem sucedida, a vari\xe1vel sistema OK \xe9 igual a 1."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Vamos supor que voc\xea quer obter uma lista de todos os clientes registrados e os m\xe9todos que faltam por executar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($clientes;0)\n\xa0ARRAY LONGINT($metodos;0)\n\xa0GET REGISTERED CLIENTS($clientes;$metodos)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsxs)(n.p,{children:["Consulte o exemplo do comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/register-client",children:"REGISTER CLIENT"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsx)(n.p,{children:"Se a opera\xe7\xe3o foi bem sucedida, a vari\xe1vel do sistema OK, tem valor 1."}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/register-client",children:"REGISTER CLIENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/unregister-client",children:"UNREGISTER CLIENT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"650"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);