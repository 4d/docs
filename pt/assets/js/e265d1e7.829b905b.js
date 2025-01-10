"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20915"],{831673:function(e,o,a){a.r(o),a.d(o,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"REST/configuration","title":"Configura\xe7\xe3o do servidor","description":"Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, i.e. to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/REST/configuration.md","sourceDirName":"REST","slug":"/REST/configuration","permalink":"/docs/pt/20-R6/REST/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"configuration","title":"Configura\xe7\xe3o do servidor"},"sidebar":"docs","previous":{"title":"Come\xe7ando","permalink":"/docs/pt/20-R6/REST/gettingStarted"},"next":{"title":"Usu\xe1rios e sess\xf5es","permalink":"/docs/pt/20-R6/REST/authUsers"}}'),r=a("785893"),n=a("250065");let i={id:"configuration",title:"Configura\xe7\xe3o do servidor"},t=void 0,d={},c=[{value:"Iniciar o servidor REST",id:"iniciar-o-servidor-rest",level:2},{value:"Controle do acesso REST",id:"controle-do-acesso-rest",level:2},{value:"Expor tabelas e campos",id:"expor-tabelas-e-campos",level:2},{value:"Expor as tabelas",id:"expor-as-tabelas",level:3},{value:"Expor campos",id:"expor-campos",level:3},{value:"Modo preventivo",id:"modo-preventivo",level:2}];function l(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, ",(0,r.jsx)(o.em,{children:"i.e."})," to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more."]}),"\n",(0,r.jsx)(o.p,{children:"Para iniciar usando as funcionalidades REST, precisa iniciar e configurar o servidor 4D REST."}),"\n",(0,r.jsx)(o.h2,{id:"iniciar-o-servidor-rest",children:"Iniciar o servidor REST"}),"\n",(0,r.jsxs)(o.p,{children:["Por raz\xf5es de seguran\xe7a, o padr\xe3o de 4D \xe9 n\xe3o responder a peti\xe7\xf5es REST. Si desea iniciar el servidor REST, debe marcar la opci\xf3n ",(0,r.jsx)(o.strong,{children:"Exponer como servidor REST"})," en la p\xe1gina ",(0,r.jsx)(o.strong,{children:"Web"})," > ",(0,r.jsx)(o.strong,{children:"Web Features"})," de la configuraci\xf3n de la estructura para que se procesen las peticiones REST."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"alt-text",src:a(486076).Z+"",width:"862",height:"377"})}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Servi\xe7os REST usam o servidor 4D HTTP, por isso precisa ter certeza que o servidor 4D Web Server foi iniciado."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:'A mensagem de aviso "Aten\xe7\xe3o, verifique os privil\xe9gios de acesso" \xe9 exibida quando checar essa op\xe7\xe3o para chamar aten\xe7\xe3o para o fato que os servi\xe7os REST foram ativados, como padr\xe3o acessar os objetos de banco de dados \xe9 gr\xe1tis desde que os acessos REST n\xe3o tenham sido configurados.'}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Deve reiniciar a aplica\xe7\xe3o 4D para que as suas altera\xe7\xf5es tenham efeito."}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"controle-do-acesso-rest",children:"Controle do acesso REST"}),"\n",(0,r.jsx)(o.p,{children:"Como padr\xe3o, acessos REST s\xe3o abertos a todos os usu\xe1rios que s\xe3o obviamente n\xe3o configurados para raz\xf5es de seguran\xe7a e tamb\xe9m para controlar uso de licen\xe7as de cliente."}),"\n",(0,r.jsxs)(o.p,{children:["As of 4D 20 R6, you configure REST accesses by enabling the ",(0,r.jsxs)(o.a,{href:"/docs/pt/20-R6/REST/authUsers#force-login-mode",children:[(0,r.jsx)(o.strong,{children:"force login"})," mode"]})," and create an ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/REST/authUsers#authentify",children:(0,r.jsx)(o.code,{children:"authentify()"})})," datastore class function to authenticate users and assign privileges to their web session."]}),"\n",(0,r.jsx)(o.admonition,{title:"Compatibidade",type:"note",children:(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.strong,{children:"Access"})," area in the Settings dialog box is only available in converted projects for compatibility. Consulte ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/settings/web#access",children:"Access"})," para obter mais informa\xe7\xf5es."]})}),"\n",(0,r.jsx)(o.h2,{id:"expor-tabelas-e-campos",children:"Expor tabelas e campos"}),"\n",(0,r.jsxs)(o.p,{children:["Una vez activados los servicios REST en la aplicaci\xf3n 4D, por defecto una sesi\xf3n REST puede acceder a todas las tablas y campos de la base de datos 4D a trav\xe9s de la ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/ORDA/dsmapping#datastore",children:"interfaz del datastore"}),". Assim, pode utilizar os seus dados. Por exemplo, se seu banco de dados conter uma tabela [Employee], \xe9 poss\xedvel escrever:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n'})}),"\n",(0,r.jsx)(o.p,{children:"Esta peti\xe7\xe3o devolver\xe1 todos os empregados cujo campo de salario seja superior a 10000."}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:'As tabelas ou campos 4D que tenham o atributo "Invis\xedvel" tamb\xe9m s\xe3o expostas em REST por padr\xe3o.'}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Se quiser personalizar os objetos de datastore acess\xedveis atrav\xe9s de REST, deve desativar a exposi\xe7\xe3o para cada tabela ou campo que queira esconder. Quando uma peti\xe7\xe3o REST tentar acessar um recurso n\xe3o autorizado, 4D devolve um erro."}),"\n",(0,r.jsx)(o.h3,{id:"expor-as-tabelas",children:"Expor as tabelas"}),"\n",(0,r.jsx)(o.p,{children:"Como padr\xe3o, todas as tabelas s\xe3o expostas em REST."}),"\n",(0,r.jsx)(o.p,{children:"Por raz\xf5es de seguran\xe7a, pode querer expor apenas algumas tabelas em sua datastore para as chamadas REST. Por exemplo, se criar uma tabela [Users] que armazene os nomes de usu\xe1rio e as senhas, seria melhor n\xe3o deix\xe1-la exposta."}),"\n",(0,r.jsx)(o.p,{children:"Para remover a exposi\xe7\xe3o REST para uma tabela:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Visualizar o inspetor de Tabelas no editor de Estrutura e selecionar a tabela que quiser modfiicar."}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Uncheck the ",(0,r.jsx)(o.strong,{children:"Expose as REST resource"})," option:\n",(0,r.jsx)(o.img,{alt:"alt-text",src:a(276027).Z+"",width:"279",height:"330"}),"\nDo this for each table whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"expor-campos",children:"Expor campos"}),"\n",(0,r.jsx)(o.p,{children:"Como padr\xe3o, todos os campos 4D database s\xe3o expostos em REST."}),"\n",(0,r.jsx)(o.p,{children:"Pode querer expor certos campos de suas tabelas para REST. Por exemplo, \xe9 poss\xedvel que n\xe3o queira expor o campo [Employees]Salary."}),"\n",(0,r.jsx)(o.p,{children:"Para eliminar a exposi\xe7\xe3o REST de um campo:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Exibar o inspetor de Campo no editor de Estruturas e selecione o campo a modificar."}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Desmarque la opci\xf3n ",(0,r.jsx)(o.strong,{children:"Exponer como recurso REST"})," para el campo.\n",(0,r.jsx)(o.img,{alt:"alt-text",src:a(916648).Z+"",width:"279",height:"271"}),"\nRepeat this for each field whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Para que um campo seja access\xedvel a trav\xe9s de REST, a tabela pai tamb\xe9m deve ser. Se a tabela pai n\xe3o estiver exposta, nenhum dos campos estar\xe1, independente de seu estado."}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"modo-preventivo",children:"Modo preventivo"}),"\n",(0,r.jsxs)(o.p,{children:["En 4D Server, las peticiones REST se gestionan autom\xe1ticamente a trav\xe9s de procesos apropiativos, ",(0,r.jsx)(o.strong,{children:"incluso en modo interpretado"}),". Debe asegurarse de que su c\xf3digo es ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/WebServer/preemptiveWeb#writing-thread-safe-web-server-code",children:"compatible con una ejecuci\xf3n apropiativa"}),"."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["Para depurar el c\xf3digo web interpretado en la m\xe1quina del servidor, aseg\xfarese de que el depurador est\xe1 ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/Debugging/debugging-remote",children:"adjuntado al servidor"})," o [a una m\xe1quina remota](../Debugging/debugging-remote.md#attaching-the-debugger-to-a-remote-4 With this configuration, all processes switch to cooperative mode and the web server code can be debugged. With this configuration, all processes switch to cooperative mode and the web server code can be debugged."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"With 4D single-user, interpreted code is always run in cooperative mode."})]})}function p(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},486076:function(e,o,a){a.d(o,{Z:function(){return s}});let s=a.p+"assets/images/Settings-a02f94292e28dc8a9de292c9bd947c8b.png"},916648:function(e,o,a){a.d(o,{Z:function(){return s}});let s=a.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},276027:function(e,o,a){a.d(o,{Z:function(){return s}});let s=a.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"},250065:function(e,o,a){a.d(o,{Z:function(){return t},a:function(){return i}});var s=a(667294);let r={},n=s.createContext(r);function i(e){let o=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);