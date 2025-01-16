"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96608"],{191711:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/post-outside-call","title":"POST OUTSIDE CALL","description":"POST OUTSIDE CALL ( proceso )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/post-outside-call.md","sourceDirName":"commands-legacy","slug":"/commands/post-outside-call","permalink":"/docs/es/commands/post-outside-call","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-outside-call.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"post-outside-call","title":"POST OUTSIDE CALL","slug":"/commands/post-outside-call","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Outside call","permalink":"/docs/es/commands/outside-call"},"next":{"title":"Right click","permalink":"/docs/es/commands/right-click"}}'),r=n("785893"),a=n("250065");let t={id:"post-outside-call",title:"POST OUTSIDE CALL",slug:"/commands/post-outside-call",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Compatibility Note",id:"compatibility-note",level:4},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," ( ",(0,r.jsx)(s.em,{children:"proceso"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"proceso"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"N\xfamero de proceso"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"compatibility-note",children:"Compatibility Note"}),"\n",(0,r.jsxs)(s.p,{children:["This command was named ",(0,r.jsx)(s.strong,{children:"CALL PROCESS"})," in previous 4D releases."]}),"\n",(0,r.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," llama al formulario mostrado en la ventana del primer plano de ",(0,r.jsx)(s.em,{children:"proceso"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Importante:"})," ",(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," s\xf3lo funciona entre procesos que se ejecutan en el mismo equipo."]}),"\n",(0,r.jsx)(s.p,{children:"Si llama a un proceso que no existe, no pasa nada."}),"\n",(0,r.jsxs)(s.p,{children:["Si ",(0,r.jsx)(s.em,{children:"proceso"})," (el proceso llamado) no est\xe1 mostrando un formulario actualmente, no pasa nada. El formulario mostrado en el proceso llamado recibe un evento On Outside Call. Este evento debe haber sido seleccionado para ese formulario en la ventana ",(0,r.jsx)(s.strong,{children:"Propiedades del formulario"})," del entorno Dise\xf1o, y usted debe administrar el evento en el m\xe9todo de formulario. Si el evento no est\xe1 seleccionado o si no es administrado en el m\xe9todo de formulario, el comando no hace nada."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," la recepci\xf3n del evento On Outside Call en un formulario de entrada provoca el cambio del contexto de entrada del formulario. En particular, si un campo estaba siendo editado, se genera el evento On Data Change."]}),"\n",(0,r.jsxs)(s.p,{children:["El proceso llamante (el proceso en el cual el comando ",(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," se ejecuta) no \u201Cespera\u201D, ",(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," tiene un efecto inmediato. Si es necesario, debe escribir un bucle de espera para tratar una eventual respuesta del proceso llamante, utilizando las variables interproceso o las variables proceso (reservadas para este prop\xf3sito) que pueden ser le\xeddas y escritas entre los dos procesos (utilizando ",(0,r.jsx)(s.a,{href:"/docs/es/commands/get-process-variable",children:"GET PROCESS VARIABLE"})," y ",(0,r.jsx)(s.a,{href:"/docs/es/commands/set-process-variable",children:"SET PROCESS VARIABLE"}),")."]}),"\n",(0,r.jsxs)(s.p,{children:["Para comunicarse entre procesos que no muestran formularios, utilice los comandos ",(0,r.jsx)(s.a,{href:"/docs/es/commands/get-process-variable",children:"GET PROCESS VARIABLE"})," y ",(0,r.jsx)(s.a,{href:"/docs/es/commands/set-process-variable",children:"SET PROCESS VARIABLE"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Tip:"})," ",(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"})," acepta la sintaxis alterna ",(0,r.jsx)(s.strong,{children:"POST OUTSIDE CALL"}),"(-1). Para no volver lenta la ejecuci\xf3n de los m\xe9todos, 4D no redise\xf1a las variables interproceso cada vez que son modificadas. Si pasa -1 en lugar de un n\xfamero de referencia de proceso en el par\xe1metro ",(0,r.jsx)(s.em,{children:"proceso"}),", 4D no llama ning\xfan proceso. En lugar de eso, redise\xf1a todas las variables interproceso mostradas actualmente en todas las ventanas de todos los procesos que se ejecutan en el mismo equipo."]}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(s.p,{children:["Ver el ejemplo de ",(0,r.jsx)(s.a,{href:"metodo-base-on-exit.md",title:"On Exit Database Method",children:"On Exit Database Method"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/set-process-variable",children:"SET PROCESS VARIABLE"})]}),"\n",(0,r.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero de comando"}),(0,r.jsx)(s.td,{children:"329"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Hilo seguro"}),(0,r.jsx)(s.td,{children:"\u2717"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Prohibido en el servidor"}),(0,r.jsx)(s.td,{})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return t}});var o=n(667294);let r={},a=o.createContext(r);function t(e){let s=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);