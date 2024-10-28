"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61747],{251456:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=s(474848),r=s(28453);const o={id:"web-send-raw-data",title:"WEB SEND RAW DATA",slug:"/commands/web-send-raw-data",displayed_sidebar:"docs"},t=void 0,d={id:"commands-legacy/web-send-raw-data",title:"WEB SEND RAW DATA",description:"WEB SEND RAW DATA ( datos {; *} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-send-raw-data.md",sourceDirName:"commands-legacy",slug:"/commands/web-send-raw-data",permalink:"/docs/es/commands/web-send-raw-data",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-raw-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"web-send-raw-data",title:"WEB SEND RAW DATA",slug:"/commands/web-send-raw-data",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WEB SEND HTTP REDIRECT",permalink:"/docs/es/commands/web-send-http-redirect"},next:{title:"WEB SEND TEXT",permalink:"/docs/es/commands/web-send-text"}},i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WEB SEND RAW DATA"})," ( ",(0,a.jsx)(n.em,{children:"datos"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"datos"}),(0,a.jsx)(n.td,{children:"Blob"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Datos HTTP a enviar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Env\xedo en trozos (chunked)"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WEB SEND RAW DATA"}),' permite al servidor web 4D enviar datos HTTP "brutos", los cuales pueden estar en trozos.']}),"\n",(0,a.jsxs)(n.p,{children:["El par\xe1metro ",(0,a.jsx)(n.em,{children:"datos"})," contiene las dos partes est\xe1ndar de una respuesta HTTP, es decir el encabezado y el cuerpo. Los datos son enviados sin formato previo por el servidor. Sin embargo, 4D efect\xfaa un control b\xe1sico sobre el encabezado y el cuerpo de la respuesta con el fin de asegurarse de que sean v\xe1lidos:"]}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 Si el encabezado est\xe1 incompleto o no cumple con las especificaciones del protocolo HTTP, 4D lo modifica como corresponde.",(0,a.jsx)(n.br,{}),"\n\u2022 Si la petici\xf3n HTTP est\xe1 incompleta, 4D a\xf1ade la informaci\xf3n faltante. Si por ejemplo quiere efectuar una redirecci\xf3n, debe escribir:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-HTML",children:"\xa0\xa0\xa0HTTP/1.1 302\n\xa0\xa0\xa0Location: http://...\n"})}),"\n",(0,a.jsx)(n.p,{children:"Si s\xf3lo pasa:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-HTML",children:"\xa0\xa0\xa0Location: http://...\n"})}),"\n",(0,a.jsxs)(n.p,{children:["4D completar\xe1 la petici\xf3n a\xf1adiendo ",(0,a.jsx)(n.em,{children:"HTTP/1.1 302"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"*"})," permite especificar que la respuesta se enviar\xe1 \u201ctroceada\u201d. El corte de las respuestas puede ser \xfatil cuando el servidor env\xeda una respuesta sin conocer su longitud total (si, por ejemplo, la respuesta todav\xeda no ha sido generada). Todos los navegadores compatibles HTTP/1.1-aceptan las respuestas troceadas."]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa el par\xe1metro ",(0,a.jsx)(n.em,{children:"*"}),", el servidor web incluir\xe1 autom\xe1ticamente el campo ",(0,a.jsx)(n.em,{children:"transfer-encoding: chunked"})," en el encabezado de la respuesta, si es necesario (puede manejar manualmente el encabezado de la respuesta, si as\xed lo prefiere). El resto de la respuesta tambi\xe9n ser\xe1 formateada para respetar la sintaxis de la opci\xf3n chunked. Las respuestas troceadas contienen un solo encabezado y un n\xfamero indefinido de cuerpos."]}),"\n",(0,a.jsxs)(n.p,{children:["Todas las instrucciones ",(0,a.jsx)(n.strong,{children:"WEB SEND RAW DATA"})," que sigan la ejecuci\xf3n de ",(0,a.jsx)(n.strong,{children:"WEB SEND RAW DATA"}),"(data;*) dentro del mismo m\xe9todo ser\xe1n consideradas como parte de la respuesta (sin importar si contienen el par\xe1metro ",(0,a.jsx)(n.em,{children:"*"}),"). El servidor coloca fin al env\xedo troceado cuando termina la ejecuci\xf3n del m\xe9todo."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," si el cliente web no soporta el protocolo HTTP/1.1, 4D convertir\xe1 autom\xe1ticamente la respuesta al formato compatible HTTP/1.0 (el env\xedo no trocear\xe1). Sin embargo, en este caso, el resultado puede no corresponder a sus deseos. Por lo tanto se recomienda probar si el navegador web soporta HTTP/1.1 y enviar una respuesta apropiada. Para hacer esto, puede utilizar un m\xe9todo de este tipo:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Boolean\n\xa0ARRAY TEXT(arCampos;0)\n\xa0ARRAY TEXT(arValores;0)\n\xa0WEB GET HTTP HEADER(arCampos;arValores)\n\xa0$0:=False\n\xa0If(Size of array(arValores)>=3)\n\xa0\xa0\xa0\xa0If(Position("HTTP/1.1";arValores{3})>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0// El navegador soporta HTTP/1.1; devuelve True en $0\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Combinado con el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/web-get-http-body",children:"WEB GET HTTP BODY"})," y con los otros comandos del tema \u201cServidor web\u201d, este comando completa el rango de herramientas disponibles para los desarrolladores 4D para tratar de manera completamente personalizada las conexiones HTTP entrantes y salientes. Estas herramientas se presentan en el siguiente diagrama:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(792206).A+"",width:"676",height:"374"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsxs)(n.p,{children:["Este ejemplo ilustra el uso de la opci\xf3n chunked con el comando ",(0,a.jsx)(n.strong,{children:"WEB SEND RAW DATA"}),". Los datos (una secuencia de n\xfameros) se env\xedan en 100 trozos generados r\xe1pidamente un bucle. Recuerde que el encabezado de la respuesta no est\xe1 definido expl\xedcitamente: el comando lo enviar\xe1 autom\xe1ticamente e insertar\xe1 el campo ",(0,a.jsx)(n.em,{children:"transfer-encoding: chunked"})," en \xe9l si el par\xe1metro ",(0,a.jsx)(n.em,{children:"*"})," se utiliza."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $cpt : Integer\n\xa0var $mi_blob : Blob\n\xa0var $salida : Text\n\xa0\n\xa0For($cpt;1;100)\n\xa0\xa0\xa0\xa0$salida:="["+String($cpt)+"]"\n\xa0\xa0\xa0\xa0TEXT TO BLOB($salida;$mi_blob;UTF8 text without length)\n\xa0\xa0\xa0\xa0WEB SEND RAW DATA($mi_blob;*)\n\xa0End for\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/web-get-http-body",children:"WEB GET HTTP BODY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/web-get-http-header",children:"WEB GET HTTP HEADER"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},792206:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/pict856016.es-7173d1f197d2336c28786d9471c1a4e0.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var a=s(296540);const r={},o=a.createContext(r);function t(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);