"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99817"],{204914:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"commands/web-server","title":"WEB Server","description":"WEB Server Integer ) : 4D.WebServer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/web-server.md","sourceDirName":"commands","slug":"/commands/web-server","permalink":"/docs/pt/commands/web-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fweb-server.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-server","title":"WEB Server","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND TEXT","permalink":"/docs/pt/commands/web-send-text"},"next":{"title":"WEB Server list","permalink":"/docs/pt/commands/web-server-list"}}'),t=r("785893"),d=r("250065");let i={id:"web-server",title:"WEB Server",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB Server"})," : 4D.WebServer",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"WEB Server"}),"( ",(0,t.jsx)(n.em,{children:"option"})," : Integer ) : 4D.WebServer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"option"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Servidor Web a ser obtido (padr\xe3o se omitido = ",(0,t.jsx)(n.code,{children:"Web server database"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"4D. WebServer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Objeto Web Server"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R3"}),(0,t.jsx)(n.td,{children:"Adicionado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19"}),(0,t.jsx)(n.td,{children:"suporte para .sessionCookieSameSite"})]})]})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"WEB Server"})," command returns the default Web server object, or the Web server object defined through the ",(0,t.jsx)(n.em,{children:"option"})," parameter."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, if the ",(0,t.jsx)(n.em,{children:"option"})," parameter is omitted, the command returns a reference to the Web server of the database, i.e. the default Web server. To designate the Web server to return, you can pass one of the following constants in the ",(0,t.jsx)(n.em,{children:"option"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metros"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Web server database"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Servidor Web de banco de dados atual (padr\xe3o caso omitido)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Par\xe2metros"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Servidor Web do banco de dados de host de um componente"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Solicita\xe7\xe3o de recebimento do servidor web"})}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"Servidor web que recebeu o pedido (servidor Web de destino)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"returned Web server object"})," contains the current values of the ",(0,t.jsx)(n.a,{href:"/docs/pt/API/WebServerClass",children:"Web server properties"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Do seu componente, voc\xea quer saber se o servidor Web do banco de dados host est\xe1 iniciado:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"  // M\xe9todo de um componente\n var $hostWS : 4D.WebServer\n $hostWS:=WEB Server(Web server host database)\n If($hostWS.isRunning)\n    ...\n End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/web-server-list",children:"WEB Server list"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/API/WebServerClass#stop",children:"webServer.stop()"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);