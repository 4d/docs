"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11108"],{632419:function(e,o,t){t.r(o),t.d(o,{metadata:()=>n,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>i});var n=JSON.parse('{"id":"WebServer/allowProject","title":"Permitir m\xe9todos proyecto","description":"Las etiquetas 4D como 4DEVAL, 4DTEXT, 4DHTML... as\xed como la /4DACTION URL permite desencadenar la ejecuci\xf3n de cualquier m\xe9todo proyecto 4D publicado en la Web. Por ejemplo, la petici\xf3n http://www.server.com/4DACTION/login provoca la ejecuci\xf3n del m\xe9todo proyecto login, si existe.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/WebServer/allowProject.md","sourceDirName":"WebServer","slug":"/WebServer/allowProject","permalink":"/docs/es/20-R6/WebServer/allowProject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FallowProject.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"allowProject","title":"Permitir m\xe9todos proyecto"},"sidebar":"docs","previous":{"title":"Procesamiento de peticiones HTTP","permalink":"/docs/es/20-R6/WebServer/httpRequests"},"next":{"title":"P\xe1ginas de error HTTP personalizadas","permalink":"/docs/es/20-R6/WebServer/errorPages"}}'),s=t("785893"),r=t("250065");let i={id:"allowProject",title:"Permitir m\xe9todos proyecto"},c=void 0,a={},d=[];function l(e){let o={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["Las etiquetas 4D como ",(0,s.jsx)(o.code,{children:"4DEVAL"}),", ",(0,s.jsx)(o.code,{children:"4DTEXT"}),", ",(0,s.jsx)(o.code,{children:"4DHTML"}),"... as\xed como la ",(0,s.jsx)(o.a,{href:"/docs/es/20-R6/WebServer/httpRequests#/4daction",children:(0,s.jsx)(o.code,{children:"/4DACTION URL"})})," permite desencadenar la ejecuci\xf3n de cualquier m\xe9todo proyecto 4D publicado en la Web. Por ejemplo, la petici\xf3n ",(0,s.jsx)(o.em,{children:(0,s.jsx)(o.a,{href:"http://www.server.com/4DACTION/login",children:"http://www.server.com/4DACTION/login"})})," provoca la ejecuci\xf3n del m\xe9todo proyecto ",(0,s.jsx)(o.em,{children:(0,s.jsx)(o.strong,{children:"login"})}),", si existe."]}),"\n",(0,s.jsx)(o.p,{children:"Por lo tanto, este mecanismo presenta un riesgo de seguridad para la aplicaci\xf3n, en particular si un usuario de Internet activa intencionalmente (o no) un m\xe9todo no previsto para su ejecuci\xf3n a trav\xe9s de la web. Puede evitar este riesgo de las siguientes maneras:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Filtra los m\xe9todos llamados a trav\xe9s de las URLS utilizando el m\xe9todo base ",(0,s.jsx)(o.a,{href:"/docs/es/20-R6/WebServer/authentication#on-web-authentication",children:(0,s.jsx)(o.code,{children:"On Web Authentication"})}),". Inconvenientes: si la base de datos incluye un gran n\xfamero de m\xe9todos, este sistema puede ser dif\xedcil de gestionar."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Utilice la opci\xf3n ",(0,s.jsx)(o.strong,{children:"Disponible a trav\xe9s de etiquetas 4D y URLs (4DACTION...)"})," que se encuentra en la caja de di\xe1logo de propiedades del m\xe9todo:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:t(594979).Z+"",width:"577",height:"575"})}),"\n",(0,s.jsxs)(o.p,{children:["Esta opci\xf3n se utiliza para designar individualmente cada m\xe9todo del proyecto que puede ser llamado utilizando la URL especial ",(0,s.jsx)(o.code,{children:"4DACTION"}),", o las etiquetas ",(0,s.jsx)(o.code,{children:"4DTEXT"}),", ",(0,s.jsx)(o.code,{children:"4DHTML"}),", ",(0,s.jsx)(o.code,{children:"4DEVAL"}),", ",(0,s.jsx)(o.code,{children:"4DSCRIPT"}),", ",(0,s.jsx)(o.code,{children:"4DIF"}),", ",(0,s.jsx)(o.code,{children:"4DELSEIF"})," o ",(0,s.jsx)(o.code,{children:"4DLOOP"}),". Cuando no est\xe1 marcada, el m\xe9todo proyecto en cuesti\xf3n no puede ser ejecutado directamente a trav\xe9s de una petici\xf3n HTTP. Por el contrario, puede ejecutarse mediante otro tipo de llamadas (f\xf3rmulas, otros m\xe9todos, etc.)."]}),"\n",(0,s.jsxs)(o.p,{children:["Esta opci\xf3n est\xe1 deseleccionada por defecto. Los m\xe9todos que se pueden ejecutar a trav\xe9s de ",(0,s.jsx)(o.code,{children:"4DACTION"})," o de etiquetas espec\xedficas deben indicarse espec\xedficamente."]}),"\n",(0,s.jsx)(o.p,{children:"En el Explorador, los m\xe9todos proyecto con esta propiedad reciben un icono espec\xedfico:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:t(587049).Z+"",width:"54",height:"48"})})]})}function u(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},587049:function(e,o,t){t.d(o,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},594979:function(e,o,t){t.d(o,{Z:function(){return n}});let n=t.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"},250065:function(e,o,t){t.d(o,{Z:function(){return c},a:function(){return i}});var n=t(667294);let s={},r=n.createContext(s);function i(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);