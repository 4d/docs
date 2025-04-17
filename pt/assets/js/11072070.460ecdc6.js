"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47576"],{205714:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>r,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/show-on-disk","title":"SHOW ON DISK","description":"SHOW ON DISK ( nomeRota {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/show-on-disk.md","sourceDirName":"commands-legacy","slug":"/commands/show-on-disk","permalink":"/docs/pt/20-R8/commands/show-on-disk","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fshow-on-disk.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"show-on-disk","title":"SHOW ON DISK","slug":"/commands/show-on-disk","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET DOCUMENT SIZE","permalink":"/docs/pt/20-R8/commands/set-document-size"},"next":{"title":"Test path name","permalink":"/docs/pt/20-R8/commands/test-path-name"}}'),t=s("785893"),a=s("250065");let d={id:"show-on-disk",title:"SHOW ON DISK",slug:"/commands/show-on-disk",displayed_sidebar:"docs"},i=void 0,r={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SHOW ON DISK"})," ( ",(0,t.jsx)(n.em,{children:"nomeRota"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomeRota"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Rota de acesso ao item a exibir"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Se o item \xe9 uma pasta, mostras os conte\xfados"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando SHOW ON DISK mostra em uma janela padr\xe3o do sistema operativo o arquivo ou a pasta na qual a rota de acesso for passada no par\xe2metro ",(0,t.jsx)(n.em,{children:"nomeRota"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Em uma interface de usu\xe1rio, este comando permite designar a localiza\xe7\xe3o de um arquivo ou pasta especifico."}),"\n",(0,t.jsxs)(n.p,{children:["Por padr\xe3o, se ",(0,t.jsx)(n.em,{children:"nomeRota"})," designa uma pasta, o comando mostra o n\xedvel da pasta mesma. Se passa o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", o comando abre a pasta e mostra su conte\xfado na janela. Se ",(0,t.jsx)(n.em,{children:"nomeRota"})," designa um arquivo, se ignora o par\xe2metro ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Os exemplos abaixo ilustram o funcionamento do comando:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MinhaPasta\\\\MeuArquivo.txt")\xa0// Mostra o arquivo designado\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(973770).Z+"",width:"356",height:"287"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MinhaPasta\\\\Pasta2")\xa0// Mostra a pasta designada\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(453025).Z+"",width:"356",height:"287"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MinhaPasta\\\\Pasta2";*)\xa0// Mostra os conte\xfados da pasta designada\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(706101).Z+"",width:"364",height:"274"})}),"\n",(0,t.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsx)(n.p,{children:"A vari\xe1vel sistema OK assume o valor 1 se o comando for executado corretamente, do contr\xe1rio assume o valor 0."}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"922"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},973770:function(e,n,s){s.d(n,{Z:function(){return o}});let o=s.p+"assets/images/pict35007.en-2c7bdca89d46296734727474b018a53b.png"},453025:function(e,n,s){s.d(n,{Z:function(){return o}});let o=s.p+"assets/images/pict35008.en-33fb1afdbb0f542d336cde83117efc01.png"},706101:function(e,n,s){s.d(n,{Z:function(){return o}});let o=s.p+"assets/images/pict35009.en-470c1aff5b19d734834f73845135a32f.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var o=s(667294);let t={},a=o.createContext(t);function d(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);