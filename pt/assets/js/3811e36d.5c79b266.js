"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89969],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},761219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"SessionClass",title:"Session"},i=void 0,s={unversionedId:"API/SessionClass",id:"version-20-R4/API/SessionClass",title:"Session",description:"Os objetos Session s\xe3o devolvidos pelo comando Session quando s\xe3o habilitadas as sess\xf5es escal\xe1veis em seu projeto. O objeto Session \xe9 criado e mantido automaticamente pelo servidor web 4D para controlar a sess\xe3o de um cliente web (por exemplo, um navegador). Esse objeto oferece ao desenvolvedor web uma interface para a sess\xe3o de usu\xe1rio, permitindo gerenciar privil\xe9gios, armazenar dados contextuais, partilhar informa\xe7\xe3o entre processos e lan\xe7ar processos preemptivos relacionados a sess\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/API/SessionClass.md",sourceDirName:"API",slug:"/API/SessionClass",permalink:"/docs/pt/20-R4/API/SessionClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSessionClass.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"SessionClass",title:"Session"},sidebar:"docs",previous:{title:"POP3Transporter",permalink:"/docs/pt/20-R4/API/POP3TransporterClass"},next:{title:"Signal",permalink:"/docs/pt/20-R4/API/SignalClass"}},p={},d=[{value:"Resumo",id:"resumo",level:3},{value:"Session",id:"session",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:".clearPrivileges()",id:"clearprivileges",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:"Exemplo",id:"exemplo-1",level:4},{value:".expirationDate",id:"expirationdate",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:"Exemplo",id:"exemplo-2",level:4},{value:".hasPrivilege()",id:"hasprivilege",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:"Exemplo",id:"exemplo-3",level:4},{value:".idleTimeout",id:"idletimeout",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:"Exemplo",id:"exemplo-4",level:4},{value:".isGuest()",id:"isguest",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:"Exemplo",id:"exemplo-5",level:4},{value:".setPrivileges()",id:"setprivileges",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4},{value:"Exemplo",id:"exemplo-6",level:4},{value:".storage",id:"storage",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-7",level:4},{value:"Exemplo",id:"exemplo-7",level:4},{value:".userName",id:"username",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-8",level:4}],m={toc:d};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Os objetos Session s\xe3o devolvidos pelo comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#session"}),(0,n.kt)("inlineCode",{parentName:"a"},"Session"))," quando ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R4/WebServer/sessions#enabling-sessions"}),"s\xe3o habilitadas as sess\xf5es escal\xe1veis em seu projeto"),". O objeto Session \xe9 criado e mantido automaticamente pelo servidor web 4D para controlar a sess\xe3o de um cliente web (por exemplo, um navegador). Esse objeto oferece ao desenvolvedor web uma interface para a sess\xe3o de usu\xe1rio, permitindo gerenciar privil\xe9gios, armazenar dados contextuais, partilhar informa\xe7\xe3o entre processos e lan\xe7ar processos preemptivos relacionados a sess\xe3o."),(0,n.kt)("p",null,"Para obter informa\xe7\xe3o detalhada sobre a implementa\xe7\xe3o da sess\xe3o, consulte ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R4/WebServer/sessions"}),"Sess\xf5es do servidor web"),"."),(0,n.kt)("h3",r({},{id:"resumo"}),"Resumo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#clearprivileges"}),(0,n.kt)("strong",{parentName:"a"},".clearPrivileges()")),"\xa0","\xa0","\xa0","\xa0","retira todos os privil\xe9gios associados \xe0 sess\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#expirationdate"}),(0,n.kt)("strong",{parentName:"a"},".expirationDate")," : Text"),"\xa0","\xa0","\xa0","\xa0","a data e hora de expira\xe7\xe3o do cookie da sess\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#hasprivilege"}),(0,n.kt)("strong",{parentName:"a"},".hasPrivilege"),"( ",(0,n.kt)("em",{parentName:"a"},"privilege")," : Text ) : Boolean"),"\xa0","\xa0","\xa0","\xa0","retorna Verdadeiro se o privil\xe9gio estiver associado \xe0 sess\xe3o, e Falso de outra forma")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#idletimeout"}),(0,n.kt)("strong",{parentName:"a"},".idleTimeout")," : Integer"),"\xa0","\xa0","\xa0","\xa0","o tempo limite da sess\xe3o de inatividade (em minutos), ap\xf3s o qual a sess\xe3o \xe9 automaticamente encerrada por 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#isguest"}),(0,n.kt)("strong",{parentName:"a"},".isGuest()")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","retorna Verdadeiro se a sess\xe3o for uma sess\xe3o de Convidado (ou seja, n\xe3o tem privil\xe9gios)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#setprivileges"}),(0,n.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"a"},"privilege")," : Text )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"a"},"privileges")," : Collection )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"a"},"settings")," : Object )"),"\xa0","\xa0","\xa0","\xa0","associa \xe0 sess\xe3o o(s) privil\xe9gio(s) definido(s) no par\xe2metro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#storage"}),(0,n.kt)("strong",{parentName:"a"},".storage")," : Object"),"\xa0","\xa0","\xa0","\xa0","um objeto partilhado que pode ser utilizado para armazenar informa\xe7\xe3o dispon\xedvel para todos os pedidos do cliente da web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#username"}),(0,n.kt)("strong",{parentName:"a"},".userName")," : Text"),"\xa0","\xa0","\xa0","\xa0","o nome de usu\xe1rio associado \xe0 sess\xe3o")))),(0,n.kt)("h2",r({},{id:"session"}),"Session"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Session")," : 4D. Session"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resultados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D. Session"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objecto Session")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"O comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Session")," devolve o objecto ",(0,n.kt)("inlineCode",{parentName:"p"},"Sess\xe3o")," correspondente \xe0 actual sess\xe3o web escal\xe1vel do utilizador."),(0,n.kt)("p",null,"Este comando s\xf3 funciona quando ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R4/WebServer/sessions#enabling-sessions"}),"est\xe3o ativadas as sess\xf5es escal\xe1veis"),". Devolve ",(0,n.kt)("em",{parentName:"p"},"Null")," quando as sess\xf5es estiverem desabilitadas ou quando utilizar sess\xf5es herdadas."),(0,n.kt)("p",null,"Quando se habilitam as sess\xf5es escal\xe1veis, o objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Sess\xe3o")," est\xe1 dispon\xedvel desde qualquer processo web nos seguintes contextos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Connection"),", e m\xe9todos database",(0,n.kt)("inlineCode",{parentName:"li"},"On REST Authentication"),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"Em Mobile App Authentication"))," e ",(0,n.kt)("a",r({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action"}),(0,n.kt)("inlineCode",{parentName:"a"},"Em Mobile App Action"))," m\xe9todos de base de dados para pedidos m\xf3veis,"),(0,n.kt)("li",{parentName:"ul"},"As ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/20-R4/ORDA/ordaClasses"}),"fun\xe7\xf5es Data Model Class")," ORDA chamadas pelas peti\xe7\xf5es REST,"),(0,n.kt)("li",{parentName:"ul"},"c\xf3digo processado a trav\xe9s das etiquetas 4D nas p\xe1ginas semidin\xe2micas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"),(0,n.kt)("li",{parentName:"ul"},'os m\xe9todos projeto com o atributo "Available through 4D tags and URLs (4DACTION...)" e chamados atrav\xe9s de 4DACTION/ urls.')),(0,n.kt)("h4",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"Se definiu o m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"action_Session"),' com o atributo "Available through 4D tags and URLs". Pode chamar ao m\xe9todo introduzindo a URL abaixo no navegador:'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"IP:port/4DACTION/action_Session\n")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //m\xe9todo action_Session\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //chamada da fun\xe7\xe3o hasPrivilege\n          WEB SEND TEXT("4DACTION --\x3e Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e Sesion is null")\n End case\n')),(0,n.kt)("h2",r({},{id:"clearprivileges"}),".clearPrivileges()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".clearPrivileges()")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xe3o exige nenhum par\xe2metro")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".clearPrivileges()")," retira todos os privil\xe9gios associados \xe0 sess\xe3o. Como resultado, a sess\xe3o torna-se automaticamente uma sess\xe3o de convidado."),(0,n.kt)("h4",r({},{id:"exemplo-1"}),"Exemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//Invalidate a session\nvar $isGuest : Boolean Session.clearPrivileges()\n$isGuest:=Session.isGuest() //$isGuest is True\n")),(0,n.kt)("h2",r({},{id:"expirationdate"}),".expirationDate"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".expirationDate")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".expirationDate")," cont\xe9m a data e hora de expira\xe7\xe3o do cookie da sess\xe3o. ."),(0,n.kt)("p",null,"Essa propriedade \xe9 ",(0,n.kt)("strong",{parentName:"p"},"apenas leitura"),". \xc9 recalculada automaticamente se modificar o valor da propriedade ",(0,n.kt)("a",r({parentName:"p"},{href:"#idletimeout"}),(0,n.kt)("inlineCode",{parentName:"a"},".idleTimeout")),"."),(0,n.kt)("h4",r({},{id:"exemplo-2"}),"Exemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $expiration : Text\n$expiration:=Session.expirationDate //por exemplo "2021-11-05T17:10:42Z"\n')),(0,n.kt)("h2",r({},{id:"hasprivilege"}),".hasPrivilege()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".hasPrivilege"),"( ",(0,n.kt)("em",{parentName:"p"},"privilege")," : Text ) : Boolean"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"privilege"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome do privilegio a verificar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resultados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True se a sess\xe3o tiver ",(0,n.kt)("em",{parentName:"td"},"privilege"),", False caso contr\xe1rio")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-3"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".hasPrivilege()")," retorna Verdadeiro se o privil\xe9gio estiver associado \xe0 sess\xe3o, e Falso de outra forma."),(0,n.kt)("h4",r({},{id:"exemplo-3"}),"Exemplo"),(0,n.kt)("p",null,'Se quiser comprovar se o privil\xe9gio "WebAdmin" est\xe1 associado \xe0 sess\xe3o:'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'If (Session.hasPrivilege("WebAdmin"))\n //Access is granted, do nothing Else\n //Display an authentication page End if\n')),(0,n.kt)("h2",r({},{id:"idletimeout"}),".idleTimeout"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".idleTimeout")," : Integer"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-4"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".idleTimeout")," cont\xe9m o tempo limite da sess\xe3o de inatividade (em minutos), ap\xf3s o qual a sess\xe3o \xe9 automaticamente encerrada por 4D."),(0,n.kt)("p",null,"Se n\xe3o se definir esta propriedade, o valor padr\xe3o \xe9 60 (1h)."),(0,n.kt)("p",null,"Quando se definir esta propriedade, a propriedade ",(0,n.kt)("a",r({parentName:"p"},{href:"#expirationdate"}),(0,n.kt)("inlineCode",{parentName:"a"},".expirationDate"))," \xe9 atualizada em consequ\xeancia."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"O valor n\xe3o pode ser inferior a 60: se definir um valor inferior, o tempo de espera se eleva at\xe9 60.")),(0,n.kt)("p",null,"Essa propriedade \xe9",(0,n.kt)("strong",{parentName:"p"},"apenas escrita"),"."),(0,n.kt)("h4",r({},{id:"exemplo-4"}),"Exemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"If (Session.isGuest())\n  // A Guest session will close after 60 minutes of inactivity\n Session.idleTimeout:=60 Else\n  // Other sessions will close after 120 minutes of inactivity\n Session.idleTimeout:=120 End if\n\n")),(0,n.kt)("h2",r({},{id:"isguest"}),".isGuest()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".isGuest()")," : Boolean"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resultados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True se a sess\xe3o for uma sess\xe3o Guest, False caso contr\xe1rio")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-5"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".isGuest()")," retorna Verdadeiro se a sess\xe3o for uma sess\xe3o de Convidado (ou seja, n\xe3o tem privil\xe9gios)."),(0,n.kt)("h4",r({},{id:"exemplo-5"}),"Exemplo"),(0,n.kt)("p",null,"No m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"If (Session.isGuest())\n //Do something for Guest user End if\n")),(0,n.kt)("h2",r({},{id:"setprivileges"}),".setPrivileges()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19 R8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Suporte da propriedade "roles" das Settings')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"p"},"privilege")," : Text )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"p"},"privileges")," : Collection )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"p"},"settings")," : Object )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"privilege"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome do privil\xe9gio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"privileges"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Collection de nomes de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"settings"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Objetos com as propriedades "privil\xe9gios" (string ou collection)')))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-6"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".setPrivileges()")," associa \xe0 sess\xe3o o(s) privil\xe9gio(s) definido(s) no par\xe2metro."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"No par\xe2metro ",(0,n.kt)("em",{parentName:"p"},"privilege"),", passe uma string contendo um nome de privil\xe9gio (ou v\xe1rios nomes de privil\xe9gio separados por v\xedgulas).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"No par\xe2metro ",(0,n.kt)("em",{parentName:"p"},"privileges"),", passe uma cole\xe7\xe3o de strings contendo nomes de privil\xe9gios.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"No par\xe2metro ",(0,n.kt)("em",{parentName:"p"},"settings"),", passe um objeto contendo as propriedades abaixo:"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"privileges"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text ou Collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("li",null,"Strings contendo um nome de privil\xe9gio ou"),(0,n.kt)("li",null,"Collection de strings contendo nomes de privil\xe9gios"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"roles"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text ou Collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("li",null,"Strings contendo um papel ou"),(0,n.kt)("li",null,"Cole\xe7\xe3o de strings contendo pap\xe9is"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"userName"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome de usu\xe1rio associado \xe0 sess\xe3o (opcional)")))),(0,n.kt)("admonition",r({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Os privil\xe9gios e pap\xe9is s\xe3o definidos no arquivo ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R4/ORDA/privileges#rolesjson-file"}),(0,n.kt)("inlineCode",{parentName:"a"},"roles.json"))," do projeto. Para mais informa\xe7\xf5es, consulte por favor a sec\xe7\xe3o ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R4/ORDA/privileges"}),(0,n.kt)("strong",{parentName:"a"},"Privileges")),".")),(0,n.kt)("p",null,"Se a propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},"privilegios")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"roles")," conter um nome que n\xe3o \xe9 declarado no arquivo ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R4/ORDA/privileges#rolesjson-file"}),(0,n.kt)("inlineCode",{parentName:"a"},"roles.json")),", ele \xe9 ignorado."),(0,n.kt)("p",null,"Como padr\xe3o quando n\xe3o houver um privil\xe9gio associado \xe0 sess\xe3o, a sess\xe3o \xe9 ",(0,n.kt)("a",r({parentName:"p"},{href:"#isguest"}),"Guest session"),"."),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("a",r({parentName:"p"},{href:"#username"}),(0,n.kt)("inlineCode",{parentName:"a"},"userName"))," est\xe1 dispon\xedvel no n\xedvel do objeto da sess\xe3o (apenas leitura)."),(0,n.kt)("h4",r({},{id:"exemplo-6"}),"Exemplo"),(0,n.kt)("p",null,'Em um m\xe9todo de autentica\xe7\xe3o personalizado, deve estabecer o privil\xe9gio "WebAdmin" ao usu\xe1rio:'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $userOK : Boolean\n\n... //Authenticate the user If ($userOK) //The user has been approved\n  var $info : Object\n  $info:=New object()\n  $info.privileges:=New collection("WebAdmin")\n  Session.setPrivileges($info)\nEnd if\n\n')),(0,n.kt)("h2",r({},{id:"storage"}),".storage"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".storage")," : Object"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-7"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".storage")," cont\xe9m um objeto partilhado que pode ser utilizado para armazenar informa\xe7\xe3o dispon\xedvel para todos os pedidos do cliente da web."),(0,n.kt)("p",null,"Quando um objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Session")," for criado, a propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".storage")," \xe9 vazia. J\xe1 que \xe9 um objeto partilhado, essa propriedade estar\xe1 dispon\xedvel no objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage")," do servidor."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Da mesma forma que o objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage")," do servidor, a propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".storage"),' sempre ser\xe1 "single": adicionar um objeto partilhado ou uma collection partilhada a ',(0,n.kt)("inlineCode",{parentName:"p"},".storage")," n\xe3o cria um grupo partilhado.")),(0,n.kt)("p",null,"Esas propriedade \xe9 ",(0,n.kt)("strong",{parentName:"p"},"read only")," mas retorna um objeto  read-write."),(0,n.kt)("h4",r({},{id:"exemplo-7"}),"Exemplo"),(0,n.kt)("p",null,"Se quiser armazenar a IP do cliente na propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".storage"),". Pode escrever no m\xe9todo de banco de dados ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'If (Session.storage.clientIP=Null) //first access\n    Use (Session.storage)\n        Session.storage.clientIP:=New shared object("value"; $clientIP)\n    End use End if\n\n')),(0,n.kt)("h2",r({},{id:"username"}),".userName"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".userName")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-8"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".userName")," cont\xe9m o nome de usu\xe1rio associado \xe0 sess\xe3o. Pode us\xe1-la para identificar o usu\xe1rio dentro de seu c\xf3digo."),(0,n.kt)("p",null,"Essa propriedade \xe9 uma string vazia como padr\xe3o. Pode ser estabelecida usando a propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},"privileges")," da fun\xe7\xe3o ",(0,n.kt)("a",r({parentName:"p"},{href:"#setprivileges"}),(0,n.kt)("inlineCode",{parentName:"a"},"setPrivileges()")),"."),(0,n.kt)("p",null,"Essa propriedade \xe9",(0,n.kt)("strong",{parentName:"p"},"apenas leitura"),"."))}u.isMDXComponent=!0}}]);