"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12328"],{774321:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>i,assets:()=>l,toc:()=>t,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/invoke-action","title":"INVOKE ACTION","description":"INVOKE ACTION ( accion {; objetivo} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/invoke-action.md","sourceDirName":"commands-legacy","slug":"/commands/invoke-action","permalink":"/docs/es/20-R7/commands/invoke-action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finvoke-action.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"invoke-action","title":"INVOKE ACTION","slug":"/commands/invoke-action","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get pointer","permalink":"/docs/es/20-R7/commands/get-pointer"},"next":{"title":"Is a variable","permalink":"/docs/es/20-R7/commands/is-a-variable"}}'),r=o("785893"),s=o("250065");let c={id:"invoke-action",title:"INVOKE ACTION",slug:"/commands/invoke-action",displayed_sidebar:"docs"},a=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"INVOKE ACTION"})," ( ",(0,r.jsx)(n.em,{children:"accion"})," {; ",(0,r.jsx)(n.em,{children:"objetivo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accion"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre o patr\xf3n de acci\xf3n est\xe1ndar incluyendo par\xe1metro si es necesario"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objetivo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Define donde ejecutar la acci\xf3n: formulario actual (por defecto) o formulario principal"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"INVOKE ACTION"})," activa la acci\xf3n est\xe1ndar definida por el par\xe1metro accion, opcionalmente en el contexto objetivo."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"accion"}),", pase el nombre de la acci\xf3n est\xe1ndar a ejecutar. Puede ser una cadena o una constante del tema ",(0,r.jsx)(n.em,{children:"Acci\xf3n est\xe1ndar"}),". Algunas acciones aceptan un elemento de destino y par\xe1metros. En este caso, debe utilizar el patr\xf3n solicitado, por ejemplo ",(0,r.jsx)(n.em,{children:'"gotoPage?value=2"'})," or ",(0,r.jsx)(n.em,{children:"paragraph/backgroundPositionV?value=top."})]}),"\n",(0,r.jsxs)(n.p,{children:["Todas las acciones disponibles se listan en la secci\xf3n ",(0,r.jsx)(n.em,{children:"Acciones est\xe1ndar"})," del manual de ",(0,r.jsx)(n.em,{children:"Dise\xf1o 4D"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," tambi\xe9n se ofrecen acciones espec\xedficas adicionales para los documentos 4D Write Pro. Se detallan en la secci\xf3n ",(0,r.jsx)(n.em,{children:"Utilizar las acciones est\xe1ndar 4D Write Pro"})," del manual de referencia de 4D Write Pro."]}),"\n",(0,r.jsx)(n.h3,{id:""}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"objetivo"}),", puede pasar el contexto del formulario en el que se debe ejecutar la ",(0,r.jsx)(n.em,{children:"accion"}),". Puede utilizar una de las siguientes constantes del tema ",(0,r.jsx)(n.em,{children:"Acci\xf3n est\xe1ndar"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak current form"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"El formulario actual es el formulario donde se llam\xf3 la acci\xf3n. Podr\xeda ser el formulario principal o un formulario tipo paleta delante del formulario principal del proceso actual."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ak main form"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"El formulario principal es el documento m\xe1s adelante o el formulario di\xe1logo del proceso, excluyendo cualquier ventana flotante o emergente."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," si se omite ",(0,r.jsx)(n.em,{children:"objetivo"}),", se utiliza por defecto el contexto ak current form."]}),"\n",(0,r.jsxs)(n.p,{children:["Dependiendo del ",(0,r.jsx)(n.em,{children:"objetivo"}),", la ejecuci\xf3n del comando ",(0,r.jsx)(n.strong,{children:"INVOKE ACTION"})," es s\xedncrona o as\xedncrona:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Con ak current form como ",(0,r.jsx)(n.em,{children:"objetivo"}),", el comando ",(0,r.jsx)(n.strong,{children:"INVOKE ACTION"})," es s\xedncrono; La acci\xf3n se ejecuta en el ciclo actual en el momento en que se llama al comando."]}),"\n",(0,r.jsxs)(n.li,{children:["Con ak main form como ",(0,r.jsx)(n.em,{children:"objetivo"}),", el comando ",(0,r.jsx)(n.strong,{children:"INVOKE ACTION"})," es as\xedncrono; La acci\xf3n se ejecuta en el siguiente ciclo despu\xe9s del final de la ejecuci\xf3n del m\xe9todo objeto de formulario."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," las acciones de edici\xf3n est\xe1ndar (Cortar, Copiar, Pegar, Seleccionar todo, Borrar, Deshacer/Rehacer) ignoran el par\xe1metro ",(0,r.jsx)(n.em,{children:"objetivo"}),", si se pasa. Tales acciones se ejecutan siempre de forma sincr\xf3nica en el contexto del objeto editable que tiene el foco."]}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"INVOKE ACTION"})," no genera un error, por ejemplo, si la acci\xf3n solicitada no est\xe1 disponible en el contexto actual. Debe validar la acci\xf3n esperada utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/action-info",children:"Action info"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:["Desea ejecutar la acci\xf3n est\xe1ndar ",(0,r.jsx)(n.strong,{children:"Copiar"})," en el formulario actual:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0INVOKE ACTION(ak copy;ak current form)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsxs)(n.p,{children:["Usted desea ejecutar una acci\xf3n est\xe1ndar ",(0,r.jsx)(n.strong,{children:"Goto page"})," (p\xe1gina 3) en el formulario principal:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0INVOKE ACTION(ak goto page+"?value=3";ak main form)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/action-info",children:"Action info"})}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1439"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return c}});var i=o(667294);let r={},s=i.createContext(r);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);