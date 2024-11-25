"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69820"],{585765:function(e,r,n){n.r(r),n.d(r,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>s});var i=JSON.parse('{"id":"commands-legacy/web-service-get-info","title":"WEB SERVICE Get info","description":"WEB SERVICE Get info ( tipoInfo ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-get-info.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-get-info","permalink":"/docs/es/commands/web-service-get-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-get-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-get-info","title":"WEB SERVICE Get info","slug":"/commands/web-service-get-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE CALL","permalink":"/docs/es/commands/web-service-call"},"next":{"title":"WEB SERVICE GET RESULT","permalink":"/docs/es/commands/web-service-get-result"}}'),o=n("785893"),t=n("250065");let s={id:"web-service-get-info",title:"WEB SERVICE Get info",slug:"/commands/web-service-get-info",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4}];function a(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"WEB SERVICE Get info"})," ( ",(0,o.jsx)(r.em,{children:"tipoInfo"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe1metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"tipoInfo"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Informaci\xf3n a recuperar"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Resultado"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"Informaci\xf3n sobre el \xfaltimo error SOAP"})]})]})]}),"\n",(0,o.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(r.p,{children:["El comando ",(0,o.jsx)(r.strong,{children:"WEB SERVICE Get info"})," devuelve la informaci\xf3n sobre todo error encontrado durante la ejecuci\xf3n de la \xfaltima petici\xf3n SOAP enviada a un servicio web remoto. Generalmente, este comando debe llamarse dentro de un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,o.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["El par\xe1metro ",(0,o.jsx)(r.em,{children:"tipoInfo"})," le permite indicar el tipo de informaci\xf3n que quiere obtener. Debe pasar una de las constantes listadas a continuaci\xf3n, ubicada en el tema ",(0,o.jsx)(r.em,{children:"Servicios Web (Cliente)"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Constante"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{children:"Valor"}),(0,o.jsx)(r.th,{children:"Comentario"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Web Service detailed message"}),(0,o.jsx)(r.td,{children:"Entero largo"}),(0,o.jsx)(r.td,{children:"1"}),(0,o.jsxs)(r.td,{children:["Mensaje detallado que describe el error. El tipo de mensaje difiere seg\xfan el tipo de error principal. ",(0,o.jsx)(r.br,{}),"- Si el error principal = 9910 (Error Soap): se devuelve la causa del error SOAP (ej.: \u201Cel m\xe9todo remoto no existe\u201D).",(0,o.jsx)(r.br,{}),"- Si el error principal = 9911 (Error de analizador xml): se devuelve la ubicaci\xf3n del error en el documento XML.",(0,o.jsx)(r.br,{}),"- Si el error principal = 9912 (Error HTTP):",(0,o.jsx)(r.br,{}),"- Si el error HTTP se ubica en el intervalo [300-400] (problemas relacionados con la ubicaci\xf3n del documento solicitado), se devuelve la nueva ubicaci\xf3n del URL solicitado. ",(0,o.jsx)(r.br,{}),"- Para todo otro c\xf3digo de error HTTP, se devuelve el . ",(0,o.jsx)(r.br,{}),"- Si el error principal = 9913 (Error de red): se devuelve la causa del error de red (ej.: \u201CServerAddress: error DNS\u201D)",(0,o.jsx)(r.br,{}),"- Si el error principal = 9914 (Error interno): se devuelve la causa del error interno"]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Web Service error code"}),(0,o.jsx)(r.td,{children:"Entero largo"}),(0,o.jsx)(r.td,{children:"0"}),(0,o.jsxs)(r.td,{children:["C\xf3digo del error principal (definido por 4D). Este c\xf3digo tambi\xe9n es devuelto en la variable sistema Error.",(0,o.jsx)(r.br,{}),"Lista de c\xf3digos que pueden ser devueltos:",(0,o.jsx)(r.br,{}),"9910: Error Soap (ver tambi\xe9n Web Service Fault Actor)",(0,o.jsx)(r.br,{}),"9911: Error de analizador xml",(0,o.jsx)(r.br,{}),"9912: Error HTTP (ver tambi\xe9n Web Service HTTP Error code)",(0,o.jsx)(r.br,{}),"9913: Error red",(0,o.jsx)(r.br,{}),"9914: Error interno."]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Web Service fault actor"}),(0,o.jsx)(r.td,{children:"Entero largo"}),(0,o.jsx)(r.td,{children:"3"}),(0,o.jsxs)(r.td,{children:["Causa del error (devuelto por el protocolo SOAP, a utilizar en caso de error principal 9910).",(0,o.jsx)(r.br,{}),"- Version Mismatch ",(0,o.jsx)(r.br,{}),"- Must Understand (un par\xe1metro definido como obligatorio no puede ser interpretado por el servidor)",(0,o.jsx)(r.br,{}),"- Sender Fault",(0,o.jsx)(r.br,{}),"- Receiver Fault",(0,o.jsx)(r.br,{}),"- Encoding Unknown"]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Web Service HTTP status code"}),(0,o.jsx)(r.td,{children:"Entero largo"}),(0,o.jsx)(r.td,{children:"2"}),(0,o.jsx)(r.td,{children:"C\xf3digo del error HTTP (a utilizar en caso de error principal 9912)."})]})]})]}),"\n",(0,o.jsx)(r.p,{children:"Se devuelve una cadena vac\xeda cuando no hay informaci\xf3n disponible, en particular si la \xfaltima petici\xf3n SOAP no gener\xf3 errores."})]})}function u(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return s}});var i=n(667294);let o={},t=i.createContext(o);function s(e){let r=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);