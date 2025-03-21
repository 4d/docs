"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82653"],{177315:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>i,assets:()=>s,toc:()=>c,contentTitle:()=>r});var i=JSON.parse('{"id":"commands-legacy/open-administration-window","title":"OPEN ADMINISTRATION WINDOW","description":"OPEN ADMINISTRATION WINDOW","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/open-administration-window.md","sourceDirName":"commands-legacy","slug":"/commands/open-administration-window","permalink":"/docs/pt/commands/open-administration-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-administration-window.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"open-administration-window","title":"OPEN ADMINISTRATION WINDOW","slug":"/commands/open-administration-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"NOTIFY RESOURCES FOLDER MODIFICATION","permalink":"/docs/pt/commands/notify-resources-folder-modification"},"next":{"title":"OPEN DATA FILE","permalink":"/docs/pt/commands/open-data-file"}}'),d=o("785893"),t=o("250065");let a={id:"open-administration-window",title:"OPEN ADMINISTRATION WINDOW",slug:"/commands/open-administration-window",displayed_sidebar:"docs"},r=void 0,s={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"OPEN ADMINISTRATION WINDOW"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(n.table,{children:(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,d.jsx)(n.th,{})]})})}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(n.p,{children:"O comando OPEN ADMINISTRATION WINDOW exibe a janela de administra\xe7\xe3o do servidor no equipo que executa. A janela de administra\xe7\xe3o 4D Server pode ser usada para visualizar os par\xe2metros atuais e realizar diversas opera\xe7\xf5es de manuten\xe7\xe3o (veja a Guia de Refer\xeancia 4D Server). Come\xe7ando com a vers\xe3o 11 do 4D Server, essa janela pode ser exibida a partir de uma m\xe1quina cliente:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:o(500379).Z+"",width:"1028",height:"694"})}),"\n",(0,d.jsx)(n.p,{children:"Este comando deve ser chamado no contexto de uma aplica\xe7\xe3o 4D conectado ou de um 4D Server. Ele n\xe3o faz nada se:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"ele \xe9 chamado em uma aplica\xe7\xe3o 4D em modo local."}),"\n",(0,d.jsxs)(n.li,{children:["ele \xe9 executado por um usu\xe1rio diferente do Designer ou do administrador (neste caso, o erro -9991 \xe9 gerado, ver a se\xe7\xe3o ",(0,d.jsx)(n.em,{children:"Erros do Motor de banco de dados (-10602 -> 4004)"}),")."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Aqui est\xe1 o c\xf3digo para o bot\xe3o de administra\xe7\xe3o:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0If(Application type=4D local mode)\n\xa0\xa0\xa0\xa0OPEN SECURITY CENTER\n\xa0\xa0// ...\n\xa0End if\n\xa0If(Application type=4D remote mode)\n\xa0\xa0\xa0\xa0OPEN ADMINISTRATION WINDOW\n\xa0\xa0// ...\n\xa0End if\n\xa0If(Application type=4D Server)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0OPEN SECURITY CENTER\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,d.jsx)(n.p,{children:"Se o comando foi executado corretamente, a vari\xe1vel de sistema OK \xe9 definida como 1. Caso contr\xe1rio, \xe9 definido como 0."}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/commands/open-security-center",children:"OPEN SECURITY CENTER"})}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1047"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},500379:function(e,n,o){o.d(n,{Z:function(){return i}});let i=o.p+"assets/images/pict12004.en-d0a40fafca970ac6083eaea5db5cf006.png"},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return a}});var i=o(667294);let d={},t=i.createContext(d);function a(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);