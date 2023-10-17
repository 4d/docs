"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70641],{603905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>m});var t=o(667294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=t.createContext({}),p=function(e){var a=t.useContext(u),o=a;return e&&(o="function"==typeof e?e(a):n(n({},a),e)),o},d=function(e){var a=p(e.components);return t.createElement(u.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,b=c["".concat(u,".").concat(m)]||c[m]||l[m]||s;return o?t.createElement(b,n(n({ref:a},d),{},{components:o})):t.createElement(b,n({ref:a},d))}));function m(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=o.length,n=new Array(s);n[0]=c;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var p=2;p<s;p++)n[p]=o[p];return t.createElement.apply(null,n)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},949171:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>u,toc:()=>d});o(667294);var t=o(603905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},r.apply(this,arguments)}function s(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const n={id:"configuration",title:"Configura\xe7\xe3o do servidor"},i=void 0,u={unversionedId:"REST/configuration",id:"version-20/REST/configuration",title:"Configura\xe7\xe3o do servidor",description:"Utilizando peti\xe7\xf5es HTTP padr\xe3o, o servidor 4D REST permite \xe0s aplica\xe7\xf5es externas acessar diretamente aos dados de seu banco, ou seja, recuperar informa\xe7\xe3o sobre as classes de dados de seu projeto, manipular dados, entrar em sua aplica\xe7\xe3o web, e muito mais.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/configuration.md",sourceDirName:"REST",slug:"/REST/configuration",permalink:"/docs/pt/20/REST/configuration",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"configuration",title:"Configura\xe7\xe3o do servidor"},sidebar:"docs",previous:{title:"Come\xe7ando",permalink:"/docs/pt/20/REST/gettingStarted"},next:{title:"Usu\xe1rios e sess\xf5es",permalink:"/docs/pt/20/REST/authUsers"}},p={},d=[{value:"Iniciar o servidor REST",id:"iniciar-o-servidor-rest",level:2},{value:"Configura\xe7\xe3o de acesso REST",id:"configura\xe7\xe3o-de-acesso-rest",level:2},{value:"Utiliza\xe7\xe3o dos par\xe2metros da estrutura",id:"utiliza\xe7\xe3o-dos-par\xe2metros-da-estrutura",level:3},{value:"M\xe9todo base On REST Authentication",id:"m\xe9todo-base-on-rest-authentication",level:3},{value:"Expor tabelas e campos",id:"expor-tabelas-e-campos",level:2},{value:"Expor as tabelas",id:"expor-as-tabelas",level:3},{value:"Expor campos",id:"expor-campos",level:3}],l={toc:d};function c(e){var{components:a}=e,n=s(e,["components"]);return(0,t.kt)("wrapper",r({},l,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Utilizando peti\xe7\xf5es HTTP padr\xe3o, o servidor 4D REST permite \xe0s aplica\xe7\xf5es externas acessar diretamente aos dados de seu banco, ",(0,t.kt)("em",{parentName:"p"},"ou seja, "),"recuperar informa\xe7\xe3o sobre as classes de dados de seu projeto, manipular dados, entrar em sua aplica\xe7\xe3o web, e muito mais."),(0,t.kt)("p",null,"Para iniciar usando as funcionalidades REST, precisa iniciar e configurar o servidor 4D REST."),(0,t.kt)("blockquote",null,(0,t.kt)("ul",{parentName:"blockquote"},(0,t.kt)("li",{parentName:"ul"},"Em 4D Server, abrir uma sess\xe3o REST exige que uma licen\xe7a cliente 4D free esteja dispon\xedvel.",(0,t.kt)("br",null)),(0,t.kt)("li",{parentName:"ul"},"Em 4D single-user, pode abrir at\xe9 tr\xeas sess\xf5es REST para fins de teste."),(0,t.kt)("li",{parentName:"ul"},"You need to manage the ",(0,t.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/REST/authUsers#session-cookie"}),"session cookie")," to use the same session for your requesting application."))),(0,t.kt)("h2",r({},{id:"iniciar-o-servidor-rest"}),"Iniciar o servidor REST"),(0,t.kt)("p",null,"Por raz\xf5es de seguran\xe7a, o padr\xe3o de 4D \xe9 n\xe3o responder a peti\xe7\xf5es REST. If you want to start the REST Server, you must check the ",(0,t.kt)("strong",{parentName:"p"},"Expose as REST server"),' option in the "Web/REST resource" page of the structure settings in order for REST requests to be processed.'),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:o(182958).Z,width:"862",height:"377"})),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Servi\xe7os REST usam o servidor 4D HTTP, por isso precisa ter certeza que o servidor 4D Web Server foi iniciado.")),(0,t.kt)("p",null,'A mensagem de aviso "Aten\xe7\xe3o, verifique os privil\xe9gios de acesso" \xe9 exibida quando checar essa op\xe7\xe3o para chamar aten\xe7\xe3o para o fato que os servi\xe7os REST foram ativados, como padr\xe3o acessar os objetos de banco de dados \xe9 gr\xe1tis desde que os acessos REST n\xe3o tenham sido configurados.'),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Deve reiniciar a aplica\xe7\xe3o 4D para que as suas altera\xe7\xf5es tenham efeito.")),(0,t.kt)("h2",r({},{id:"configura\xe7\xe3o-de-acesso-rest"}),"Configura\xe7\xe3o de acesso REST"),(0,t.kt)("p",null,"Como padr\xe3o, acessos REST s\xe3o abertos a todos os usu\xe1rios que s\xe3o obviamente n\xe3o configurados para raz\xf5es de seguran\xe7a e tamb\xe9m para controlar uso de licen\xe7as de cliente."),(0,t.kt)("p",null,"Pode configurar os acessos REST de uma das maneiras abaixo:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"assigning a ",(0,t.kt)("strong",{parentName:"li"},"Read/Write"),' user group to REST services in the "Web/REST resource" page of the Structure Settings;'),(0,t.kt)("li",{parentName:"ul"},"escrever um m\xe9todo de database ",(0,t.kt)("inlineCode",{parentName:"li"},"On REST Authentication")," para interceptar e manejar qualquer peti\xe7\xe3o inicial REST.")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"N\xe3o pode usar as duas funcionalidades ao mesmo tempo. Once an ",(0,t.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),' database method has been defined, 4D fully delegates control of REST requests to it: any setting made using the "Read/Write" menu on the Web/REST resource page of the Structure Settings is ignored.')),(0,t.kt)("h3",r({},{id:"utiliza\xe7\xe3o-dos-par\xe2metros-da-estrutura"}),"Utiliza\xe7\xe3o dos par\xe2metros da estrutura"),(0,t.kt)("p",null,"O menu ",(0,t.kt)("strong",{parentName:"p"},"Leitura/Escrita"),' na p\xe1gina "',(0,t.kt)("strong",{parentName:"p"},"Web")," > ",(0,t.kt)("strong",{parentName:"p"},"Web Features"),'" das configura\xe7\xf5es de estrutura especifica um grupo de usu\xe1rios 4D que est\xe1 autorizado a estabelecer o link para a aplica\xe7\xe3o 4D usando consultas REST.'),(0,t.kt)("p",null,"Como padr\xe3o, o menu mostra ",(0,t.kt)("inlineCode",{parentName:"p"},"<Anyone>"),", o que significa que os acessos REST est\xe3o abertos a todos os usu\xe1rios. Quando tiver especificado um grupo, s\xf3 contas de usu\xe1rios 4D que perten\xe7am ao grupo podem ser usadas ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/REST/authUsers"}),"acesso a 4D atrav\xe9s de peti\xe7\xf5es REST"),". Se uma conta for usada que n\xe3o perten\xe7a a esse grupo, 4D retorna um erro de autentica\xe7\xe3o para o emissor da peti\xe7\xe3o."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Para essa configura\xe7\xe3o funcionar, o m\xe9todo de database ",(0,t.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," n\xe3o deve ser definido. Se existir, 4D ignora os par\xe2metros de aceso definidos nas propriedades do banco de dados.")),(0,t.kt)("h3",r({},{id:"m\xe9todo-base-on-rest-authentication"}),"M\xe9todo base On REST Authentication"),(0,t.kt)("p",null,"O m\xe9todo database ",(0,t.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," lhe oferece uma forma personalizada de controlar a abertura de sess\xf5es REST em 4D. Esse m\xe9todo de banco de dados \xe9 chamado automaticamente quando uma nova sess\xe3o for aberta atrav\xe9s da peti\xe7\xe3o REST. Quando receber uma ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/REST/authUsers"}),"solicita\xe7\xe3o para abrir uma sess\xe3o REST"),", os identificadores de conex\xe3o s\xe3o oferecidos no cabe\xe7alho da solicita\xe7\xe3o. O m\xe9todo database ",(0,t.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \xe9 chamado para poder avaliar estes identificadores. Pode utilizar a lista de usu\xe1rios do banco 4D ou pode utilizar sua pr\xf3pria tabela de identificadores. Para obter mais informa\xe7\xe3o, consulte a ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html"}),"documentaci\xf3n")," do m\xe9todo database",(0,t.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),"."),(0,t.kt)("h2",r({},{id:"expor-tabelas-e-campos"}),"Expor tabelas e campos"),(0,t.kt)("p",null,"Quando servi\xe7os REST estiverem ativados no banco de dados 4D, como padr\xe3o uma sess\xe3o REST pode acessar todas as tabelas e campos da datastore, e assim usar seus dados. Assim, pode utilizar os seus dados. Por exemplo, se seu banco de dados conter uma tabela ","[Employee]",", \xe9 poss\xedvel escrever:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{}),'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n')),(0,t.kt)("p",null,"Esta peti\xe7\xe3o devolver\xe1 todos os empregados cujo campo de salario seja superior a 10000."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},'As tabelas ou campos 4D que tenham o atributo "Invis\xedvel" tamb\xe9m s\xe3o expostas em REST por padr\xe3o.')),(0,t.kt)("p",null,"Se quiser personalizar os objetos de datastore acess\xedveis atrav\xe9s de REST, deve desativar a exposi\xe7\xe3o para cada tabela ou campo que queira esconder. Quando uma peti\xe7\xe3o REST tentar acessar um recurso n\xe3o autorizado, 4D devolve um erro."),(0,t.kt)("h3",r({},{id:"expor-as-tabelas"}),"Expor as tabelas"),(0,t.kt)("p",null,"Como padr\xe3o, todas as tabelas s\xe3o expostas em REST."),(0,t.kt)("p",null,"Por raz\xf5es de seguran\xe7a, pode querer expor apenas algumas tabelas em sua datastore para as chamadas REST. Por exemplo, se criar uma tabela ","[Users]"," que armazene os nomes de usu\xe1rio e as senhas, seria melhor n\xe3o deix\xe1-la exposta."),(0,t.kt)("p",null,"Para remover a exposi\xe7\xe3o REST para uma tabela:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Visualizar o inspetor de Tabelas no editor de Estrutura e selecionar a tabela que quiser modfiicar.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Uncheck the ",(0,t.kt)("strong",{parentName:"p"},"Expose as REST resource")," option: ",(0,t.kt)("img",{alt:"alt-text",src:o(883264).Z,width:"279",height:"330"})," Do this for each table whose exposure needs to be modified."))),(0,t.kt)("h3",r({},{id:"expor-campos"}),"Expor campos"),(0,t.kt)("p",null,"Como padr\xe3o, todos os campos 4D database s\xe3o expostos em REST."),(0,t.kt)("p",null,"Pode querer expor certos campos de suas tabelas para REST. Por exemplo, \xe9 poss\xedvel que n\xe3o queira expor o campo ","[Employees]","Salary."),(0,t.kt)("p",null,"Para eliminar a exposi\xe7\xe3o REST de um campo:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Exibar o inspetor de Campo no editor de Estruturas e selecione o campo a modificar.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Desmarque a op\xe7\xe3o ",(0,t.kt)("strong",{parentName:"p"},"Expor como recurso REST")," para o campo. ",(0,t.kt)("img",{alt:"alt-text",src:o(801972).Z,width:"279",height:"271"})," Repeat this for each field whose exposure needs to be modified."))),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Para que um campo seja access\xedvel a trav\xe9s de REST, a tabela pai tamb\xe9m deve ser. Se a tabela pai n\xe3o estiver exposta, nenhum dos campos estar\xe1, independente de seu estado.")))}c.isMDXComponent=!0},182958:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/Settings-a02f94292e28dc8a9de292c9bd947c8b.png"},801972:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},883264:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"}}]);