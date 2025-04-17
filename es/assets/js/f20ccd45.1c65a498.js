"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56507"],{47422:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/web-service-get-result","title":"WEB SERVICE GET RESULT","description":"WEB SERVICE GET RESULT ( valorDevuelto {; nombreDevuelto {; *}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/web-service-get-result.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-get-result","permalink":"/docs/es/commands/web-service-get-result","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-get-result.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"web-service-get-result","title":"WEB SERVICE GET RESULT","slug":"/commands/web-service-get-result","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE Get info","permalink":"/docs/es/commands/web-service-get-info"},"next":{"title":"WEB SERVICE SET OPTION","permalink":"/docs/es/commands/web-service-set-option"}}'),i=n("785893"),d=n("250065");let o={id:"web-service-get-result",title:"WEB SERVICE GET RESULT",slug:"/commands/web-service-get-result",displayed_sidebar:"docs"},t=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"WEB SERVICE GET RESULT"})," ( ",(0,i.jsx)(r.em,{children:"valorDevuelto"})," {; ",(0,i.jsx)(r.em,{children:"nombreDevuelto"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Par\xe1metro"}),(0,i.jsx)(r.th,{children:"Tipo"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"valorDevuelto"}),(0,i.jsx)(r.td,{children:"Variable"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"Valor devuelto por el servicio web"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"nombreDevuelto"}),(0,i.jsx)(r.td,{children:"Text"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Nombre del par\xe1metro a recuperar"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"*"}),(0,i.jsx)(r.td,{children:"Operator"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Liberar memoria"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(r.p,{children:["El comando ",(0,i.jsx)(r.strong,{children:"WEB SERVICE GET RESULT"})," permite recuperar un valor enviado por el servicio web como resultado del proceso realizado.este comando debe utilizarse \xfanicamente despu\xe9s del comando ",(0,i.jsx)(r.a,{href:"/docs/es/commands/web-service-call",children:"WEB SERVICE CALL"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["El par\xe1metro ",(0,i.jsx)(r.em,{children:"valorDevuelto"})," recibe el valor reenviado por el servicio web. Pase en este par\xe1metro una variable 4D. Esta variable es generalmente $result, que corresponde al valor devuelto por el m\xe9todo proxy. Sin embargo, es posible utilizar variables intermediarias (debe utilizar las variables de proceso \xfanicamente)."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Nota:"})," cada variable 4D o array utilizado debe ser declarado previamente utilizando los comandos de los temas \u201CCompilador\u201D y \u201CArrays\u201D."]}),"\n",(0,i.jsxs)(r.p,{children:["El par\xe1metro opcional ",(0,i.jsx)(r.em,{children:"nombreDevuelto"})," se utiliza para especificar el nombre del par\xe1metro a recuperar. Sin embargo, como la mayor\xeda de los servicios web devuelven un solo valor, por lo general este par\xe1metro no es necesario."]}),"\n",(0,i.jsxs)(r.p,{children:["El par\xe1metro opcional ",(0,i.jsx)(r.em,{children:"*,"})," indica al programa que libere la memoria dedicada al procesamiento de la petici\xf3n. Debe pasar este par\xe1metro despu\xe9s de recuperar el \xfaltimo valor enviado por el servicio web."]}),"\n",(0,i.jsx)(r.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(r.p,{children:"Imagine un servicio web que devuelve la hora actual en cualquier ciudad del mundo. Los par\xe1metros recibidos por el servicio web son el nombre de la ciudad y el c\xf3digo del pa\xeds. El servicio web devuelve la correspondiente. El m\xe9todo proxy de llamada puede ser de la siguiente forma:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'\xa0#DECLARE($param1 : Text ; $param2 : Text) -> $result : Time\n\xa0WEB SERVICE SET PARAMETER("ciudad";$param1)\n\xa0WEB SERVICE SET PARAMETER("codigo_pais";$param2)\n\xa0\n\xa0WEB SERVICE CALL("http://www.ciudadesdelmundo.com/WS";"WSTime#City_time";"City_time";"http://www.ciudadesdelmundo.com/namespace/default")\n\xa0\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0WEB SERVICE GET RESULT($result;"devolver";*)\n\xa0End if\n'})}),"\n",(0,i.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/es/commands/web-service-call",children:"WEB SERVICE CALL"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/es/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})]}),"\n",(0,i.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"N\xfamero de comando"}),(0,i.jsx)(r.td,{children:"779"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Hilo seguro"}),(0,i.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return t},a:function(){return o}});var s=n(667294);let i={},d=s.createContext(i);function o(e){let r=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);