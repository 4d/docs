"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91673"],{986392:function(e,s,a){a.r(s),a.d(s,{metadata:()=>o,contentTitle:()=>t,default:()=>l,assets:()=>d,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"REST/configuration","title":"Configura\xe7\xe3o do servidor","description":"Utilizando peti\xe7\xf5es HTTP padr\xe3o, o servidor 4D REST permite \xe0s aplica\xe7\xf5es externas acessar diretamente aos dados de seu banco, ou seja, recuperar informa\xe7\xe3o sobre as classes de dados de seu projeto, manipular dados, entrar em sua aplica\xe7\xe3o web, e muito mais.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/configuration.md","sourceDirName":"REST","slug":"/REST/configuration","permalink":"/docs/pt/20/REST/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"configuration","title":"Configura\xe7\xe3o do servidor"},"sidebar":"docs","previous":{"title":"Come\xe7ando","permalink":"/docs/pt/20/REST/gettingStarted"},"next":{"title":"Usu\xe1rios e sess\xf5es","permalink":"/docs/pt/20/REST/authUsers"}}'),r=a("785893"),n=a("250065");let i={id:"configuration",title:"Configura\xe7\xe3o do servidor"},t=void 0,d={},c=[{value:"Iniciar o servidor REST",id:"iniciar-o-servidor-rest",level:2},{value:"Configura\xe7\xe3o de acesso REST",id:"configura\xe7\xe3o-de-acesso-rest",level:2},{value:"Utiliza\xe7\xe3o dos par\xe2metros da estrutura",id:"utiliza\xe7\xe3o-dos-par\xe2metros-da-estrutura",level:3},{value:"M\xe9todo base On REST Authentication",id:"m\xe9todo-base-on-rest-authentication",level:3},{value:"Expor tabelas e campos",id:"expor-tabelas-e-campos",level:2},{value:"Expor as tabelas",id:"expor-as-tabelas",level:3},{value:"Expor campos",id:"expor-campos",level:3}];function u(e){let s={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Utilizando peti\xe7\xf5es HTTP padr\xe3o, o servidor 4D REST permite \xe0s aplica\xe7\xf5es externas acessar diretamente aos dados de seu banco, *ou seja, *recuperar informa\xe7\xe3o sobre as classes de dados de seu projeto, manipular dados, entrar em sua aplica\xe7\xe3o web, e muito mais."}),"\n",(0,r.jsx)(s.p,{children:"Para iniciar usando as funcionalidades REST, precisa iniciar e configurar o servidor 4D REST."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Em 4D Server, abrir uma sess\xe3o REST exige que uma licen\xe7a cliente 4D free esteja dispon\xedvel.",(0,r.jsx)(s.br,{})]}),"\n",(0,r.jsx)(s.li,{children:"Em 4D single-user, pode abrir at\xe9 tr\xeas sess\xf5es REST para fins de teste."}),"\n",(0,r.jsxs)(s.li,{children:["You need to manage the ",(0,r.jsx)(s.a,{href:"/docs/pt/20/REST/authUsers#session-cookie",children:"session cookie"})," to use the same session for your requesting application."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"iniciar-o-servidor-rest",children:"Iniciar o servidor REST"}),"\n",(0,r.jsxs)(s.p,{children:["Por raz\xf5es de seguran\xe7a, o padr\xe3o de 4D \xe9 n\xe3o responder a peti\xe7\xf5es REST. If you want to start the REST Server, you must check the ",(0,r.jsx)(s.strong,{children:"Expose as REST server"}),' option in the "Web/REST resource" page of the structure settings in order for REST requests to be processed.']}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"alt-text",src:a(120507).Z+"",width:"862",height:"377"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Servi\xe7os REST usam o servidor 4D HTTP, por isso precisa ter certeza que o servidor 4D Web Server foi iniciado."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:'A mensagem de aviso "Aten\xe7\xe3o, verifique os privil\xe9gios de acesso" \xe9 exibida quando checar essa op\xe7\xe3o para chamar aten\xe7\xe3o para o fato que os servi\xe7os REST foram ativados, como padr\xe3o acessar os objetos de banco de dados \xe9 gr\xe1tis desde que os acessos REST n\xe3o tenham sido configurados.'}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Deve reiniciar a aplica\xe7\xe3o 4D para que as suas altera\xe7\xf5es tenham efeito."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"configura\xe7\xe3o-de-acesso-rest",children:"Configura\xe7\xe3o de acesso REST"}),"\n",(0,r.jsx)(s.p,{children:"Como padr\xe3o, acessos REST s\xe3o abertos a todos os usu\xe1rios que s\xe3o obviamente n\xe3o configurados para raz\xf5es de seguran\xe7a e tamb\xe9m para controlar uso de licen\xe7as de cliente."}),"\n",(0,r.jsx)(s.p,{children:"Pode configurar os acessos REST de uma das maneiras abaixo:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["assigning a ",(0,r.jsx)(s.strong,{children:"Read/Write"}),' user group to REST services in the "Web/REST resource" page of the Structure Settings;']}),"\n",(0,r.jsxs)(s.li,{children:["escrever um m\xe9todo de database ",(0,r.jsx)(s.code,{children:"On REST Authentication"})," para interceptar e manejar qualquer peti\xe7\xe3o inicial REST."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["N\xe3o pode usar as duas funcionalidades ao mesmo tempo. Once an ",(0,r.jsx)(s.code,{children:"On REST Authentication"}),' database method has been defined, 4D fully delegates control of REST requests to it: any setting made using the "Read/Write" menu on the Web/REST resource page of the Structure Settings is ignored.']}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"utiliza\xe7\xe3o-dos-par\xe2metros-da-estrutura",children:"Utiliza\xe7\xe3o dos par\xe2metros da estrutura"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"Read/Write"}),' menu in the "',(0,r.jsx)(s.strong,{children:"Web"})," > ",(0,r.jsx)(s.strong,{children:"Web Features"}),'" page of the structure settings specifies a group of 4D users that is authorized to establish the link to the 4D application using REST queries.']}),"\n",(0,r.jsxs)(s.p,{children:["Como padr\xe3o, o menu mostra ",(0,r.jsx)(s.code,{children:"<Anyone>"}),", o que significa que os acessos REST est\xe3o abertos a todos os usu\xe1rios. Quando tiver especificado um grupo, s\xf3 contas de usu\xe1rios 4D que perten\xe7am ao grupo podem ser usadas ",(0,r.jsx)(s.a,{href:"/docs/pt/20/REST/authUsers",children:"acesso a 4D atrav\xe9s de peti\xe7\xf5es REST"}),". Se uma conta for usada que n\xe3o perten\xe7a a esse grupo, 4D retorna um erro de autentica\xe7\xe3o para o emissor da peti\xe7\xe3o."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Para essa configura\xe7\xe3o funcionar, o m\xe9todo de database ",(0,r.jsx)(s.code,{children:"On REST Authentication"})," n\xe3o deve ser definido. Se existir, 4D ignora os par\xe2metros de aceso definidos nas propriedades do banco de dados."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"m\xe9todo-base-on-rest-authentication",children:"M\xe9todo base On REST Authentication"}),"\n",(0,r.jsxs)(s.p,{children:["O m\xe9todo database ",(0,r.jsx)(s.code,{children:"On REST Authentication"})," lhe oferece uma forma personalizada de controlar a abertura de sess\xf5es REST em 4D. Esse m\xe9todo de banco de dados \xe9 chamado automaticamente quando uma nova sess\xe3o for aberta atrav\xe9s da peti\xe7\xe3o REST. Quando receber uma ",(0,r.jsx)(s.a,{href:"/docs/pt/20/REST/authUsers",children:"solicita\xe7\xe3o para abrir uma sess\xe3o REST"}),", os identificadores de conex\xe3o s\xe3o oferecidos no cabe\xe7alho da solicita\xe7\xe3o. O m\xe9todo database ",(0,r.jsx)(s.code,{children:"On REST Authentication"})," \xe9 chamado para poder avaliar estes identificadores. Pode utilizar a lista de usu\xe1rios do banco 4D ou pode utilizar sua pr\xf3pria tabela de identificadores. For more information, refer to the ",(0,r.jsx)(s.code,{children:"On REST Authentication"})," database method ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html",children:"documentation"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"expor-tabelas-e-campos",children:"Expor tabelas e campos"}),"\n",(0,r.jsx)(s.p,{children:"Quando servi\xe7os REST estiverem ativados no banco de dados 4D, como padr\xe3o uma sess\xe3o REST pode acessar todas as tabelas e campos da datastore, e assim usar seus dados. Assim, pode utilizar os seus dados. Por exemplo, se seu banco de dados conter uma tabela [Employee], \xe9 poss\xedvel escrever:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n'})}),"\n",(0,r.jsx)(s.p,{children:"Esta peti\xe7\xe3o devolver\xe1 todos os empregados cujo campo de salario seja superior a 10000."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:'As tabelas ou campos 4D que tenham o atributo "Invis\xedvel" tamb\xe9m s\xe3o expostas em REST por padr\xe3o.'}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Se quiser personalizar os objetos de datastore acess\xedveis atrav\xe9s de REST, deve desativar a exposi\xe7\xe3o para cada tabela ou campo que queira esconder. Quando uma peti\xe7\xe3o REST tentar acessar um recurso n\xe3o autorizado, 4D devolve um erro."}),"\n",(0,r.jsx)(s.h3,{id:"expor-as-tabelas",children:"Expor as tabelas"}),"\n",(0,r.jsx)(s.p,{children:"Como padr\xe3o, todas as tabelas s\xe3o expostas em REST."}),"\n",(0,r.jsx)(s.p,{children:"Por raz\xf5es de seguran\xe7a, pode querer expor apenas algumas tabelas em sua datastore para as chamadas REST. Por exemplo, se criar uma tabela [Users] que armazene os nomes de usu\xe1rio e as senhas, seria melhor n\xe3o deix\xe1-la exposta."}),"\n",(0,r.jsx)(s.p,{children:"Para remover a exposi\xe7\xe3o REST para uma tabela:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Visualizar o inspetor de Tabelas no editor de Estrutura e selecionar a tabela que quiser modfiicar."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Uncheck the ",(0,r.jsx)(s.strong,{children:"Expose as REST resource"})," option: ",(0,r.jsx)(s.img,{alt:"alt-text",src:a(494428).Z+"",width:"279",height:"330"})," Do this for each table whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"expor-campos",children:"Expor campos"}),"\n",(0,r.jsx)(s.p,{children:"Como padr\xe3o, todos os campos 4D database s\xe3o expostos em REST."}),"\n",(0,r.jsx)(s.p,{children:"Pode querer expor certos campos de suas tabelas para REST. Por exemplo, \xe9 poss\xedvel que n\xe3o queira expor o campo [Employees]Salary."}),"\n",(0,r.jsx)(s.p,{children:"Para eliminar a exposi\xe7\xe3o REST de um campo:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Exibar o inspetor de Campo no editor de Estruturas e selecione o campo a modificar."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Desmarque a op\xe7\xe3o ",(0,r.jsx)(s.strong,{children:"Expor como recurso REST"})," para o campo. ",(0,r.jsx)(s.img,{alt:"alt-text",src:a(683323).Z+"",width:"279",height:"271"})," Repeat this for each field whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Para que um campo seja access\xedvel a trav\xe9s de REST, a tabela pai tamb\xe9m deve ser. Se a tabela pai n\xe3o estiver exposta, nenhum dos campos estar\xe1, independente de seu estado."}),"\n"]})]})}function l(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},120507:function(e,s,a){a.d(s,{Z:function(){return o}});let o=a.p+"assets/images/Settings-a02f94292e28dc8a9de292c9bd947c8b.png"},683323:function(e,s,a){a.d(s,{Z:function(){return o}});let o=a.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},494428:function(e,s,a){a.d(s,{Z:function(){return o}});let o=a.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"},250065:function(e,s,a){a.d(s,{Z:function(){return t},a:function(){return i}});var o=a(667294);let r={},n=o.createContext(r);function i(e){let s=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);