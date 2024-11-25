"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69252"],{697840:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>g,assets:()=>l,toc:()=>c,frontMatter:()=>i});var a=JSON.parse('{"id":"commands-legacy/trigger-event","title":"Trigger event","description":"Trigger event  : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trigger-event.md","sourceDirName":"commands-legacy","slug":"/commands/trigger-event","permalink":"/docs/es/commands/trigger-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrigger-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"trigger-event","title":"Trigger event","slug":"/commands/trigger-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Triggers","permalink":"/docs/es/category/triggers"},"next":{"title":"Trigger level","permalink":"/docs/es/commands/trigger-level"}}'),s=r("785893"),t=r("250065");let i={id:"trigger-event",title:"Trigger event",slug:"/commands/trigger-event",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Trigger event"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"0 = Fuera de todo evento de trigger 1 = Al guardar un nuevo registro 2 = Al guardar un registro existente 3 = Al borrar un registro"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/trigger-event",children:"Trigger event"})})," se llama en un trigger y devuelve un valor num\xe9rico que indica el tipo del evento de la base, en otras palabras, la raz\xf3n por la cual se invoca el trigger."]}),"\n",(0,s.jsxs)(n.p,{children:["4D ofrece las siguientes constantes predefinidas del tema ",(0,s.jsx)(n.em,{children:"Eventos trigger"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Deleting Record Event"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving Existing Record Event"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving New Record Event"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Dentro de un trigger, si efect\xfaa operaciones de base de datos sobre varios registros, puede encontrar condiciones (generalmente registros bloqueados) que impiden al trigger ejecutar correctamente las operaciones para las cuales es llamado. Un ejemplo de esta situaci\xf3n es la actualizaci\xf3n de varios registros en la tabla ",(0,s.jsx)(n.em,{children:"[Productos]"})," cuando se a\xf1ade un registro a la tabla ",(0,s.jsx)(n.em,{children:"[Facturas]"}),". En este punto, debe detener las operaciones de la base y devolver un error de manera que el proceso llamante sepa que la petici\xf3n no puede llevarse a cabo. Luego el proceso llamante debe poder cancelar, durante la transacci\xf3n, las operaciones incompletas efectuadas por el trigger. Cuando se produce este tipo de situaci\xf3n, debe saber en el trigger si est\xe1 en transacci\xf3n antes de intentar hacer algo. Para hacer esto, utilice el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/in-transaction",children:"In transaction"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["En 4D, no hay l\xedmite, a parte de la memoria disponible, para la llamada de triggers en cascada. Para optimizar la ejecuci\xf3n de un trigger, puede escribir el c\xf3digo de sus triggers dependiendo no s\xf3lo del evento de la base, sino tambi\xe9n del nivel de la llamada cuando los triggers se llaman en cascada. Por ejemplo, durante una eliminaci\xf3n del evento trigger para la tabla ",(0,s.jsx)(n.em,{children:"[Facturas]"}),", puede no efectuar la actualizaci\xf3n del campo ",(0,s.jsx)(n.em,{children:"[Clientes]"})," Ventas brutas si la eliminaci\xf3n del registro de la tabla ",(0,s.jsx)(n.em,{children:"[Facturas]"})," es parte de la eliminaci\xf3n en cascada de facturas relacionadas con el registro en la tabla ",(0,s.jsx)(n.em,{children:"[Clientes]"})," que est\xe1 siendo eliminado. Para hacer esto, utilice los comandos ",(0,s.jsx)(n.a,{href:"/docs/es/commands/trigger-level",children:"Trigger level"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/commands/trigger-properties",children:"TRIGGER PROPERTIES"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(n.p,{children:["Utilice el comando ",(0,s.jsx)(n.strong,{children:"Trigger event"})," para estructurar sus triggers de esta manera:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Trigger de la tabla [toda tabla]\n\xa0var $0 : Integer\n\xa0$0:=0\xa0// Asegurarse de que la petici\xf3n de la base ser\xe1 concedida\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Database event=On Saving New Record Event)\n\xa0\xa0// Ejecutar las acciones apropiadas para guardar un nuevo registro\n\xa0\xa0\xa0\xa0:(Database event=On Saving Existing Record Event)\n\xa0\xa0// Ejecutar las acciones apropiadas para guardar un registro existente\n\xa0\xa0\xa0\xa0:(Database event=On Deleting Record Event)\n\xa0\xa0// Ejecutar las acciones apropiadas para la eliminaci\xf3n de un registro\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/in-transaction",children:"In transaction"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/trigger-level",children:"Trigger level"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/trigger-properties",children:"TRIGGER PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Triggers"})]})]})}function g(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var a=r(667294);let s={},t=a.createContext(s);function i(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);