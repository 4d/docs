"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41042"],{516118:function(e,o,t){t.r(o),t.d(o,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"WebServer/allowProject","title":"Permitir m\xe9todos projeto","description":"As tags 4D, como 4DEVAL, 4DTEXT, 4DHTML... as well as the /4DACTION URL allow you to trigger the execution of any project method of a 4D project published on the Web. Por ejemplo, la petici\xf3n http://www.server.com/4DACTION/login provoca la ejecuci\xf3n del m\xe9todo proyecto login, si existe.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/WebServer/allowProject.md","sourceDirName":"WebServer","slug":"/WebServer/allowProject","permalink":"/docs/pt/WebServer/allowProject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FallowProject.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"allowProject","title":"Permitir m\xe9todos projeto"},"sidebar":"docs","previous":{"title":"HTTP Request handler","permalink":"/docs/pt/WebServer/http-request-handler"},"next":{"title":"P\xe1ginas de erro HTTP personalizadas","permalink":"/docs/pt/WebServer/errorPages"}}'),s=t("785893"),n=t("250065");let i={id:"allowProject",title:"Permitir m\xe9todos projeto"},d=void 0,a={},c=[];function l(e){let o={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["As tags 4D, como ",(0,s.jsx)(o.code,{children:"4DEVAL"}),", ",(0,s.jsx)(o.code,{children:"4DTEXT"}),", ",(0,s.jsx)(o.code,{children:"4DHTML"}),"... as well as the ",(0,s.jsx)(o.a,{href:"/docs/pt/WebServer/httpRequests#4daction",children:(0,s.jsx)(o.code,{children:"/4DACTION URL"})})," allow you to trigger the execution of any project method of a 4D project published on the Web. Por ejemplo, la petici\xf3n ",(0,s.jsx)(o.em,{children:(0,s.jsx)(o.a,{href:"http://www.server.com/4DACTION/login",children:"http://www.server.com/4DACTION/login"})})," provoca la ejecuci\xf3n del m\xe9todo proyecto ",(0,s.jsx)(o.em,{children:(0,s.jsx)(o.strong,{children:"login"})}),", si existe."]}),"\n",(0,s.jsx)(o.p,{children:"Este mecanismo representa, portanto, um risco de seguran\xe7a para a aplica\xe7\xe3o, em especial se um utilizador da Internet acionar intencionalmente (ou n\xe3o) um m\xe9todo n\xe3o destinado a ser executado atrav\xe9s da Web. Este risco pode ser evitado das seguintes formas:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Filtre os m\xe9todos chamados atrav\xe9s as URLS usando o m\xe9todo banco de dados ",(0,s.jsx)(o.a,{href:"/docs/pt/WebServer/authentication#on-web-authentication",children:(0,s.jsx)(o.code,{children:"On Web Authentication"})}),". Desvantagens: Se a base de dados incluir um grande n\xfamero de m\xe9todos, este sistema pode ser dif\xedcil de gerir."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Utilice la opci\xf3n ",(0,s.jsx)(o.strong,{children:"Disponible a trav\xe9s de etiquetas 4D y URLs (4DACTION...)"})," que se encuentra en la caja de di\xe1logo de propiedades del m\xe9todo:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:t(473692).Z+"",width:"577",height:"575"})}),"\n",(0,s.jsxs)(o.p,{children:["Esta opci\xf3n se utiliza para designar individualmente cada m\xe9todo del proyecto que puede ser llamado utilizando la URL especial ",(0,s.jsx)(o.code,{children:"4DACTION"}),", o las etiquetas ",(0,s.jsx)(o.code,{children:"4DTEXT"}),", ",(0,s.jsx)(o.code,{children:"4DHTML"}),", ",(0,s.jsx)(o.code,{children:"4DEVAL"}),", ",(0,s.jsx)(o.code,{children:"4DSCRIPT"}),", ",(0,s.jsx)(o.code,{children:"4DIF"}),", ",(0,s.jsx)(o.code,{children:"4DELSEIF"})," o ",(0,s.jsx)(o.code,{children:"4DLOOP"}),". Se n\xe3o estiver assinalado, o m\xe9todo de projeto em causa n\xe3o pode ser executado diretamente atrav\xe9s de um pedido HTTP. Por outro lado, pode ser executado atrav\xe9s de outros tipos de chamadas (f\xf3rmulas, outros m\xe9todos, etc.)."]}),"\n",(0,s.jsxs)(o.p,{children:["Esta op\xe7\xe3o n\xe3o est\xe1 selecionada por defeito. Los m\xe9todos que se pueden ejecutar a trav\xe9s de ",(0,s.jsx)(o.code,{children:"4DACTION"})," o de etiquetas espec\xedficas deben indicarse espec\xedficamente."]}),"\n",(0,s.jsx)(o.p,{children:"No Explorador, os m\xe9todos de projeto com esta propriedade recebem um \xedcone espec\xedfico:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:t(319278).Z+"",width:"54",height:"48"})})]})}function p(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},319278:function(e,o,t){t.d(o,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},473692:function(e,o,t){t.d(o,{Z:function(){return r}});let r=t.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"},250065:function(e,o,t){t.d(o,{Z:function(){return d},a:function(){return i}});var r=t(667294);let s={},n=r.createContext(s);function i(e){let o=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);