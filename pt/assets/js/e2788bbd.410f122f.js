"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29425"],{773148:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/on-sql-authentication-database-method","title":"On SQL Authentication database method","description":"$user, $pw, $ip -> On SQL Authentication database method : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/on-sql-authentication-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-sql-authentication-database-method","permalink":"/docs/pt/commands/on-sql-authentication-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-sql-authentication-database-method.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"on-sql-authentication-database-method","title":"On SQL Authentication database method","slug":"/commands/on-sql-authentication-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Startup database method","permalink":"/docs/pt/commands/on-server-startup-database-method"},"next":{"title":"On Startup database method","permalink":"/docs/pt/commands/on-startup-database-method"}}'),a=o("785893"),t=o("250065");let d={id:"on-sql-authentication-database-method",title:"On SQL Authentication database method",slug:"/commands/on-sql-authentication-database-method",displayed_sidebar:"docs"},r=void 0,i={},c=[];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"$user, $pw, $ip -> On SQL Authentication database method : Boolean"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$user"}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Nome de usu\xe1rio"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$pw"}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Senha"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$ip"}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"(Opcional) endere\xe7o IP de cliente na origem do pedido"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Verdadeiro = pedido aceito, Falso = pedido recusado"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:""}),"\n",(0,a.jsxs)(n.p,{children:["O On SQL Authentication database method pode ser utilizado para filtrar os pedidos enviados ao servidor SQL integrado de 4D. Este filtro pode estar baseado no nome e senha, assim como 7(opcional) no endere\xe7o IP do usu\xe1rio. O desenvolvedor pode utilizar sua pr\xf3pria tabela de usu\xe1rios ou a dos usu\xe1rios 4D para avaliar os identificadores de conex\xe3o. Quando tiver validada a conex\xe3o, o comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/change-current-user",children:"CHANGE CURRENT USER"})," pode ser utilizado para controlar o acesso das pedidos dentro do banco 4D."]}),"\n",(0,a.jsxs)(n.p,{children:["Quando existir, o On SQL Authentication database method \xe9 chamado automaticamente por 4D ou 4D Server em cada conex\xe3o externa ao servidor SQL. Portanto o Sistema interno de gest\xe3o dos usu\xe1rios de 4D n\xe3o est\xe1 ativado. A conex\xe3o \xe9 aceita apenas se o m\xe9todo de banco retorna ",(0,a.jsx)(n.em,{children:"True"})," em $result e se o comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/change-current-user",children:"CHANGE CURRENT USER"})," for executado com \xeaxito. Se uma destas condi\xe7\xf5es n\xe3o for cumprida, o pedido \xe9 recusado."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": A instru\xe7\xe3o ",(0,a.jsx)(n.strong,{children:"SQL LOGIN(SQL_INTERNAL"}),";$usu\xe1rio;$senha) n\xe3o chama ao On SQL Authentication database method j\xe1 que \xe9 uma conex\xe3o interna neste caso."]}),"\n",(0,a.jsx)(n.p,{children:"O m\xe9todo de banco de dados recebe at\xe9 tr\xeas par\xe2metros de tipo Texto, passados por 4D ($user, $pw e $ip) e retorna um booleano, $result. Esta \xe9 a descri\xe7\xe3o desses par\xe2metros:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Par\xe2metros"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Tipo"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$user"}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsx)(n.td,{children:"Nome de usu\xe1rio"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$pw"}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsx)(n.td,{children:"Senha"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$ip"}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsx)(n.td,{children:"(opcional) Endere\xe7o IP do cliente na origem do pedido (*)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$result"}),(0,a.jsx)(n.td,{children:"Booleano"}),(0,a.jsx)(n.td,{children:"True = pedido aceito, False = pedido recusado"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["(*) 4D devolve os endere\xe7os IPv4 em um formato h\xedbrido IPv6/IPv4 escrito com um prefixo de 96 bits, por exemplo ::ffff:192.168.2.34 para o endere\xe7o IPv4 192.168.2.34. Para maior informa\xe7\xe3o, consulte ",(0,a.jsx)(n.em,{children:"Suporte de IP v6"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Deve declarar estes par\xe2metros desta forma:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de base On Web Authentication\n\xa0\n\xa0var $user;$pw;$ip;$4 : Text\n\xa0\xa0// C\xf3digo para o m\xe9todo\n"})}),"\n",(0,a.jsx)(n.p,{children:"A senha ($pw) se recebe como texto estandarte."}),"\n",(0,a.jsxs)(n.p,{children:["Deve controlar os identificadores da conex\xe3o SQL no On SQL Authentication database method. Por exemplo, pode verificar o nome e a senha utilizando uma tabela de usu\xe1rios personalizada. Se os identificadores forem v\xe1lidos, passe ",(0,a.jsx)(n.em,{children:"True"})," em $result para aceitar a conex\xe3o e a peti\xe7\xe3o. 4D abre uma sess\xe3o SQL para o usu\xe1rio. Caso contr\xe1rio, passe ",(0,a.jsx)(n.em,{children:"False"})," em $result; neste caso, a conex\xe3o \xe9 recusada."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," Se On SQL Authentication database method n\xe3o existir, a conex\xe3o \xe9 avaliada utilizando o Sistema integrado de gest\xe3o de usu\xe1rios de 4D (Se estiver ativado, em outras palavras, se uma senha tiver sido atribu\xedda ao Desenhista). Se este Sistema n\xe3o estiver ativado, os usu\xe1rios est\xe3o conectados com os direitos de acesso do Desenhista (acesso livre)."]}),"\n",(0,a.jsxs)(n.p,{children:["Se passa ",(0,a.jsx)(n.em,{children:"True"})," em $result, deve chamar com sucesso ao comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/change-current-user",children:"CHANGE CURRENT USER"})," no On SQL Authentication database method para que a pedido seja aceito e para que 4D abra uma sess\xe3o SQL para o usu\xe1rio."]}),"\n",(0,a.jsxs)(n.p,{children:["O uso do comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/change-current-user",children:"CHANGE CURRENT USER"})," pode ser usada para implementar um sistema de autentica\xe7\xe3o virtual que tem a dupla vantagem de permitir o controle das a\xe7\xf5es de conex\xe3o e de esconder os identificadores da conex\xe3o na sess\xe3o SQL 4D."]}),"\n",(0,a.jsxs)(n.p,{children:["Quando o sistema de senhas integrado de 4D n\xe3o est\xe1 ativo, a execu\xe7\xe3o do comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/change-current-user",children:"CHANGE CURRENT USER"})," n\xe3o tem efeito; os usu\xe1rios se conectam com os direitos de acesso do Desenhador."]}),"\n",(0,a.jsx)(n.p,{children:'Este exemplo do On SQL Authentication database method verifica que o pedido de conex\xe3o provenha da rede interna, confirma os identificadores e depois atribui os direitos de acessos "sql_user" para a sess\xe3o SQL.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $user;$pw;$ip;$4 : Text\n\xa0\xa0//$user: usu\xe1rio\n\xa0\xa0//$pw: senha\n\xa0\xa0//{$ip: endere\xe7o IP do cliente}\n\xa0ON ERR CALL("SQL_error")\n\xa0If(DirIPInterna($ip))\n\xa0\xa0//O m\xe9todo DirIPInterna verifica se o endere\xe7o IP \xe9 interna\n\xa0\xa0\xa0\xa0If($user="victor")\xa0&\xa0($pw="hugo")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CHANGE CURRENT USER("sql_user";"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$result:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$result:=False\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$result:=False\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0$result:=False\n\xa0End if\n'})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return d}});var s=o(667294);let a={},t=s.createContext(a);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);