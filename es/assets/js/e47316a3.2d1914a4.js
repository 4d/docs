"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46979"],{266828:function(e,n,s){s.r(n),s.d(n,{default:()=>i,frontMatter:()=>a,metadata:()=>d,assets:()=>c,toc:()=>l,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/request","title":"Request","description":"Request ( mensaje {; respuestaDefecto {; titulobotonOK {; titulobotoncancel}}} )  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/request.md","sourceDirName":"commands-legacy","slug":"/commands/request","permalink":"/docs/es/commands/request","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frequest.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"request","title":"Request","slug":"/commands/request","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MESSAGES ON","permalink":"/docs/es/commands/messages-on"},"next":{"title":"Named Selections","permalink":"/docs/es/category/named-selections"}}'),r=s("785893"),t=s("250065");let a={id:"request",title:"Request",slug:"/commands/request",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function A(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Request"})," ( ",(0,r.jsx)(n.em,{children:"mensaje"})," {; ",(0,r.jsx)(n.em,{children:"respuestaDefecto"})," {; ",(0,r.jsx)(n.em,{children:"titulobotonOK"})," {; ",(0,r.jsx)(n.em,{children:"titulobotoncancel"}),"}}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mensaje"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Mensaje a mostrar en la caja de di\xe1logo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"respuestaDefecto"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor por defecto en el \xe1rea de entrada de texto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"titulobotonOK"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"T\xedtulo del bot\xf3n Aceptar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"titulobotoncancel"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"T\xedtulo del bot\xf3n Cancelar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor introducido por el usuario"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"Request"})," muestra una caja de di\xe1logo compuesta de un mensaje, un \xe1rea de entrada de texto, un bot\xf3n ",(0,r.jsx)(n.strong,{children:"OK"})," y un bot\xf3n ",(0,r.jsx)(n.strong,{children:"Cancelar"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El mensaje a mostrar se pasa en el par\xe1metro ",(0,r.jsx)(n.em,{children:"mensaje"}),". Si el mensaje no se ajusta al \xe1rea de mensaje (por lo general alrededor de 50 caracteres, var\xeda dependiendo del sistema y de la fuente utilizada), puede aparecer truncado."]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, t\xedtulo del bot\xf3n ",(0,r.jsx)(n.strong,{children:"OK"})," es \u201CAceptar\u201D y el del bot\xf3n ",(0,r.jsx)(n.strong,{children:"Cancelar"})," es \u201CCancelar.\u201D Para cambiar los t\xedtulos de estos botones, pase los nuevos t\xedtulos en los par\xe1metros opcionales ",(0,r.jsx)(n.em,{children:"titulobotonOK"})," y ",(0,r.jsx)(n.em,{children:"titulobotoncancel"}),". Si es necesario, el ancho de los botones se redimensiona hacia la izquierda, de acuerdo al ancho de los t\xedtulos personalizados que usted pase."]}),"\n",(0,r.jsxs)(n.p,{children:["El bot\xf3n ",(0,r.jsx)(n.strong,{children:"OK"})," es el bot\xf3n por defecto. Si el usuario hace clic en el bot\xf3n ",(0,r.jsx)(n.strong,{children:"OK"})," o presiona ",(0,r.jsx)(n.strong,{children:"Intro"})," para aceptar la caja de di\xe1logo, la variable sistema ",(0,r.jsx)(n.strong,{children:"OK"})," toma el valor 1. Si el usuario hace clic en el bot\xf3n ",(0,r.jsx)(n.strong,{children:"Cancelar"})," para cancelar la caja de di\xe1logo, la variable sistema OK toma el valor 0."]}),"\n",(0,r.jsxs)(n.p,{children:["El usuario puede introducir texto en el \xe1rea de entrada de texto. Para especificar un valor por defecto, pase el texto por defecto en el par\xe1metro ",(0,r.jsx)(n.em,{children:"respuestaDefecto"}),". Si el usuario hace clic en el bot\xf3n ",(0,r.jsx)(n.strong,{children:"OK"}),", ",(0,r.jsx)(n.strong,{children:"Request"})," devuelve el texto. Si el usuario hace clic en ",(0,r.jsx)(n.strong,{children:"Cancelar"}),", ",(0,r.jsx)(n.strong,{children:"Request"}),' devuelve una cadena vac\xeda (""). Si la respuesta debe ser un valor num\xe9rico o una fecha, convierta la cadena devuelta por ',(0,r.jsx)(n.strong,{children:"Request"})," al tipo deseado con la ayuda de las funciones ",(0,r.jsx)(n.a,{href:"/docs/es/commands/num",children:"Num"})," or ",(0,r.jsx)(n.a,{href:"/docs/es/commands/date",children:"Date"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," no llame el comando ",(0,r.jsx)(n.strong,{children:"Request"})," desde un m\xe9todo de formulario o de objeto que maneje los eventos de formulario On Activate o On Deactivate; esto provocar\xe1 un bucle infinito."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consejo:"})," si necesita obtener varias piezas de informaci\xf3n del usuario, dise\xf1e un formulario y pres\xe9ntelo con ",(0,r.jsx)(n.a,{href:"/docs/es/commands/dialog",children:"DIALOG"}),", en lugar de presentar una sucesi\xf3n de cajas de di\xe1logo de tipo ",(0,r.jsx)(n.strong,{children:"Request"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"La l\xednea:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vsPrompt:=Request("Por favor introduzca su nombre:")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Mostrar\xe1 la siguiente caja de di\xe1logo (en Windows):"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(574237).Z+"",width:"392",height:"142"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"La l\xednea:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vsPrompt:=Request("Name of the Employee:";"";"Create Record";"Cancel")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ADD RECORD([Employees])\n\xa0\xa0//Nota: vsPrompt luego es copiado en el campo [Employees]Last name\n\xa0\xa0//durante el evento On Load en el m\xe9todo de formulario\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"Mostrar\xe1 la siguiente caja de di\xe1logo (en Windows):"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(908570).Z+"",width:"392",height:"142"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"La l\xednea:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vdPrompt:=Date(Request("Introduzca la nueva fecha:";String(Current date)))\n'})}),"\n",(0,r.jsx)(n.p,{children:"Mostrar\xe1 la siguiente caja de di\xe1logo (en Windows):"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(767386).Z+"",width:"392",height:"142"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/alert",children:"ALERT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/confirm",children:"CONFIRM"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"163"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function i(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}},574237:function(e,n,s){s.d(n,{Z:function(){return d}});let d="data:image/png;base64,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"},908570:function(e,n,s){s.d(n,{Z:function(){return d}});let d="data:image/png;base64,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"},767386:function(e,n,s){s.d(n,{Z:function(){return d}});let d="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var d=s(667294);let r={},t=d.createContext(r);function a(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);