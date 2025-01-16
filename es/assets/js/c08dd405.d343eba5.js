"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13491"],{713095:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>t,toc:()=>l,contentTitle:()=>o});var a=JSON.parse('{"id":"commands-legacy/web-send-file","title":"WEB SEND FILE","description":"WEB SEND FILE ( archivohtml )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-send-file.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-file","permalink":"/docs/es/20-R7/commands/web-send-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-file","title":"WEB SEND FILE","slug":"/commands/web-send-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND BLOB","permalink":"/docs/es/20-R7/commands/web-send-blob"},"next":{"title":"WEB SEND HTTP REDIRECT","permalink":"/docs/es/20-R7/commands/web-send-http-redirect"}}'),i=s("785893"),r=s("250065");let d={id:"web-send-file",title:"WEB SEND FILE",slug:"/commands/web-send-file",displayed_sidebar:"docs"},o=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WEB SEND FILE"})," ( ",(0,i.jsx)(n.em,{children:"archivohtml"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"archivohtml"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Ruta de acceso HTML al archivo HTML o cadena vac\xeda para terminar SEND HTML FILE"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"WEB SEND FILE"})," env\xeda al navegador web la p\xe1gina HTML o el archivo web almacenado en el documento cuya ruta se pasa en ",(0,i.jsx)(n.em,{children:"archivohtml"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Por defecto, 4D busca el documento HTML al interior de la carpeta ra\xedz, definida en las Propiedades de la base.",(0,i.jsx)(n.br,{}),'\nEste comando acepta como par\xe1metro una ruta de acceso expresada en sintaxis Poxis (nombres de directorios o de carpetas separados por una barra oblicua "/") o en sintaxis sistema.',(0,i.jsx)(n.br,{}),"\nSi pasa una ruta de acceso inv\xe1lida, se genera un error asociado a la gesti\xf3n de los archivos de su sistema operativo. Puede interceptar este error utilizando un m\xe9todo instalado por el comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-err-call",children:"ON ERR CALL"}),". Si el m\xe9todo muestra una caja de di\xe1logo de alerta o de mensaje, aparecer\xe1 en el equipo del navegador."]}),"\n",(0,i.jsxs)(n.p,{children:["Una vez se ejecuta ",(0,i.jsx)(n.strong,{children:"WEB SEND FILE"}),", la variable sistema OK se actualiza: si el archivo a enviar existe y si el timeout no ha pasado, OK toma el valor 1. De lo contrario, toma el valor 0."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," si llama ",(0,i.jsx)(n.strong,{children:"WEB SEND FILE"})," desde un proceso que no es un proceso web, el comando no hace nada. No se devuelve ning\xfan error y la llamada simplemente se ignora."]}),"\n",(0,i.jsxs)(n.p,{children:["Las referencias a las variables 4D y a las etiquetas de tipo ",(0,i.jsx)(n.em,{children:"4DSCRIPT"})," en la p\xe1gina siempre se analizan cuando el tipo de documento lo permite (documento basado en texto)."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsxs)(n.p,{children:["La carpeta ra\xedz HTML de la base es la carpeta ",(0,i.jsx)(n.em,{children:"WebDocs"}),". Contiene los siguientes elementos:"]}),"\n",(0,i.jsx)(n.p,{children:"."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0.\\WebDocs\\HTM\\MiPagina.HTM\n"})}),"\n",(0,i.jsxs)(n.p,{children:["El env\xedo de la p\xe1gina web ",(0,i.jsx)(n.em,{children:'"MiPagina.HTM"'})," debe efectuarse de la siguiente forma:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0WEB SEND FILE("HTM/MiPagina.HTM")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,i.jsx)(n.p,{children:"Si el archivo a enviar existe y si el timeout no ha pasado, OK toma el valor 1. De lo contrario, toma el valor 0."}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-send-blob",children:"WEB SEND BLOB"})}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"619"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var a=s(667294);let i={},r=a.createContext(i);function d(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);