"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40013"],{924950:function(e,a,o){o.r(a),o.d(a,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>t,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"ServerWindow/application-server","title":"P\xe1gina Servidor de aplica\xe7\xf5es","description":"A p\xe1gina Application Server agrupa informa\xe7\xf5es sobre a aplica\xe7\xe3o desktop publicada pelo 4D Server e pode ser usada para gerenciar essa publica\xe7\xe3o.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/ServerWindow/application-server.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/application-server","permalink":"/docs/pt/20/ServerWindow/application-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fapplication-server.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"application-server","title":"P\xe1gina Servidor de aplica\xe7\xf5es"},"sidebar":"docs","previous":{"title":"P\xe1gina Manuten\xe7\xe3o","permalink":"/docs/pt/20/ServerWindow/maintenance"},"next":{"title":"P\xe1gina servidor SQL","permalink":"/docs/pt/20/ServerWindow/sql-server"}}'),i=o("785893"),n=o("250065");let s={id:"application-server",title:"P\xe1gina Servidor de aplica\xe7\xf5es"},d=void 0,t={},l=[{value:"Aceitar/Rejeitar novas liga\xe7\xf5es",id:"aceitarrejeitar-novas-liga\xe7\xf5es",level:2},{value:"Informa\xe7\xe3o",id:"informa\xe7\xe3o",level:2},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:3},{value:"Mem\xf3ria",id:"mem\xf3ria",level:3},{value:"Liga\xe7\xf5es aplica\xe7\xe3o servidor",id:"liga\xe7\xf5es-aplica\xe7\xe3o-servidor",level:3}];function c(e){let a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"A p\xe1gina Application Server agrupa informa\xe7\xf5es sobre a aplica\xe7\xe3o desktop publicada pelo 4D Server e pode ser usada para gerenciar essa publica\xe7\xe3o."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:o(406779).Z+"",width:"1036",height:"699"})}),"\n",(0,i.jsx)(a.p,{children:"A parte superior da p\xe1gina fornece informa\xe7\xe3o sobre o estado atual do servidor de aplica\xe7\xe3o 4D Server."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Estado"}),": Iniciado ou Parado."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Hora de in\xedcio"}),": Data e hora em que o servidor de aplica\xe7\xf5es foi lan\xe7ado. Esta data corresponde \xe0 abertura do projeto por 4D Server."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Uptime"}),": Tempo decorrido desde a \xfaltima abertura do projeto pelo servidor."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"aceitarrejeitar-novas-liga\xe7\xf5es",children:"Aceitar/Rejeitar novas liga\xe7\xf5es"}),"\n",(0,i.jsx)(a.p,{children:"Este bot\xe3o alterna e pode ser utilizado para gerir o acesso de novas m\xe1quinas cliente de ambiente de trabalho ao servidor de aplica\xe7\xf5es."}),"\n",(0,i.jsx)(a.p,{children:"Por padr\xe3o, quando o projeto for publicado:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:'O bot\xe3o tem o t\xedtulo "Rejeitar novas liga\xe7\xf5es."'}),"\n",(0,i.jsx)(a.li,{children:"Os novos clientes desktop podem conectar-se livremente (dentro do limite das conex\xf5es permitidas pela licen\xe7a)."}),"\n",(0,i.jsx)(a.li,{children:'O nome do projeto \xe9 publicado na caixa de di\xe1logo de liga\xe7\xe3o remota (se a op\xe7\xe3o "At Startup Publish Database Name in the Connection Dialog" estiver selecionada nas Prefer\xeancias).'}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Se clicar no bot\xe3o ",(0,i.jsx)(a.strong,{children:"Rejeitar novas liga\xe7\xf5es"})," :"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:'O t\xedtulo do bot\xe3o muda para "Aceitar novas liga\xe7\xf5es."'}),"\n",(0,i.jsx)(a.li,{children:"Nenhum novo cliente pode ent\xe3o ligar-se. Os clientes que tentarem ligar-se receber\xe3o a seguinte mensagem:"}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:o(158039).Z+"",width:"671",height:"255"})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"O nome do projeto j\xe1 n\xe3o aparece na caixa de di\xe1logo da liga\xe7\xe3o remota."}),"\n",(0,i.jsx)(a.li,{children:"Os clientes de ambiente de trabalho que j\xe1 est\xe3o ligados n\xe3o s\xe3o desligados e podem continuar a trabalhar normalmente."}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["\xc9 poss\xedvel executar a mesma a\xe7\xe3o com o comando ",(0,i.jsx)(a.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1635.html",children:(0,i.jsx)(a.code,{children:"REJECT NEW REMOTE CONNECTIONS"})})," ."]}),"\n"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Se clicar no bot\xe3o ",(0,i.jsx)(a.strong,{children:"Aceitar novas liga\xe7\xf5es"}),", o servidor de aplica\xe7\xf5es regressa ao seu estado predefinido."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Esta carater\xedstica permite, por exemplo, que um administrador efetue v\xe1rias opera\xe7\xf5es de manuten\xe7\xe3o (verifica\xe7\xe3o, compacta\xe7\xe3o, etc.) logo ap\xf3s ter iniciado o servidor. Se o administrador utilizar uma liga\xe7\xe3o remota, pode ter a certeza de que \xe9 o \xfanico a modificar os dados. Tamb\xe9m \xe9 poss\xedvel utilizar esta fun\xe7\xe3o para preparar uma opera\xe7\xe3o de manuten\xe7\xe3o que exija que n\xe3o exista uma m\xe1quina cliente de secret\xe1ria ligada."}),"\n",(0,i.jsx)(a.h2,{id:"informa\xe7\xe3o",children:"Informa\xe7\xe3o"}),"\n",(0,i.jsx)(a.h3,{id:"configura\xe7\xe3o",children:"Configura\xe7\xe3o"}),"\n",(0,i.jsx)(a.p,{children:"Esta \xe1rea fornece informa\xe7\xe3o sobre o projeto 4D publicado pelo servidor: nome e localiza\xe7\xe3o dos arquivos de dados e de estrutura e nome do arquivo de registo da base de dados. Pode clicar no nome da estrutura ou do arquivo de dados para ver o seu caminho completo."}),"\n",(0,i.jsxs)(a.p,{children:["O campo ",(0,i.jsx)(a.strong,{children:"Mode"})," indica o modo de execu\xe7\xe3o atual da aplica\xe7\xe3o: compilado ou interpretado."]}),"\n",(0,i.jsx)(a.p,{children:"A parte inferior da \xe1rea indica os par\xe2metros de configura\xe7\xe3o do servidor (lan\xe7ados como servi\xe7o, porta e endere\xe7o IP) e a ativa\xe7\xe3o do TLS para liga\xe7\xf5es cliente-servidor (n\xe3o diz respeito a liga\xe7\xf5es SQL nem HTTP)."}),"\n",(0,i.jsx)(a.h3,{id:"mem\xf3ria",children:"Mem\xf3ria"}),"\n",(0,i.jsxs)(a.p,{children:["Esta \xe1rea indica a ",(0,i.jsx)(a.strong,{children:"Mem\xf3ria cache total"})," (par\xe2metro definido nas configura\xe7\xf5es) e a ",(0,i.jsx)(a.strong,{children:"Mem\xf3ria cache usada"})," (aloca\xe7\xe3o din\xe2mica pelo 4D Server de acordo com suas necessidades)."]}),"\n",(0,i.jsx)(a.h3,{id:"liga\xe7\xf5es-aplica\xe7\xe3o-servidor",children:"Liga\xe7\xf5es aplica\xe7\xe3o servidor"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"M\xe1ximo"}),": n\xfamero m\xe1ximo de liga\xe7\xf5es simult\xe2neas de clientes permitidas para o servidor de aplica\xe7\xf5es. Este valor depende da licen\xe7a instalada na m\xe1quina do servidor."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Used"}),": n\xfamero real de liga\xe7\xf5es atualmente utilizadas."]}),"\n"]})]})}function p(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},406779:function(e,a,o){o.d(a,{Z:function(){return r}});let r=o.p+"assets/images/server-admin-application-page-2790afb1ca369f9c919e14a195be066d.png"},158039:function(e,a,o){o.d(a,{Z:function(){return r}});let r=o.p+"assets/images/server-error-5a94dad40acb679497621d693b40b05b.png"},250065:function(e,a,o){o.d(a,{Z:function(){return d},a:function(){return s}});var r=o(667294);let i={},n=r.createContext(i);function s(e){let a=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);