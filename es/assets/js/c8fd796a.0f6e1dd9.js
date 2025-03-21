"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23417"],{386303:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/reject","title":"REJECT","description":"REJECT {( unCampo )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/reject.md","sourceDirName":"commands-legacy","slug":"/commands/reject","permalink":"/docs/es/commands/reject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freject.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"reject","title":"REJECT","slug":"/commands/reject","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Old","permalink":"/docs/es/commands/old"},"next":{"title":"Data Security","permalink":"/docs/es/commands/theme/Data-Security"}}'),o=a("785893"),s=a("250065");let t={id:"reject",title:"REJECT",slug:"/commands/reject",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"REJECT"})," {( ",(0,o.jsx)(n.em,{children:"unCampo"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"unField"}),(0,o.jsx)(n.td,{children:"Field"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Campo a rechazar"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"REJECT"})," tiene dos sintaxis. La primera sintaxis no tiene par\xe1metros. En este caso, el comando rechaza la totalidad de la entrada y obliga al usuario a permanecer en el formulario. La segunda sintaxis rechaza solamente el ",(0,o.jsx)(n.em,{children:"campo"})," y obliga al usuario a permanecer en el campo."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," debe considerar utilizar las herramientas integradas de validaci\xf3n de datos antes de utilizar este comando."]}),"\n",(0,o.jsxs)(n.p,{children:["La primera sintaxis de ",(0,o.jsx)(n.strong,{children:"REJECT"})," evita que el usuario acepte un registro incompleto. Puede alcanzar el mismo resultado sin utilizar ",(0,o.jsx)(n.strong,{children:"REJECT"}),", asocie la tecla Intro con un bot\xf3n Sin acci\xf3n y utilice los comandos ",(0,o.jsx)(n.a,{href:"/docs/es/commands/accept",children:"ACCEPT"})," y",(0,o.jsx)(n.a,{href:"/docs/es/commands/cancel",children:"CANCEL"}),"  para aceptar o cancelar el registro, una vez los campos hayan sido introducidos correctamente. Es recomendable utilizar esta segunda t\xe9cnica y no la primera sintaxis de ",(0,o.jsx)(n.strong,{children:"REJECT"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si utiliza la primera sintaxis, usted ejecuta ",(0,o.jsx)(n.strong,{children:"REJECT"})," para evitar que el usuario acepte un registro, generalmente porque el registro est\xe1 incompleto o tiene entradas incorrectas. Si el usuario trata de aceptar el registro, la ejecuci\xf3n de ",(0,o.jsx)(n.strong,{children:"REJECT"})," evita la aceptaci\xf3n del registro; el registro permanece visualizado en el formulario. El usuario debe continuar con la entrada de datos hasta que el registro sea aceptable o se cancele el registro."]}),"\n",(0,o.jsxs)(n.p,{children:["El mejor lugar para el comando ",(0,o.jsx)(n.strong,{children:"REJECT"}),", cuando se utiliza esta sintaxis, es el m\xe9todo de objeto de un bot\xf3n Aceptar asociado a la tecla Intro. De esta forma, la validaci\xf3n ocurre s\xf3lo cuando el registro es aceptado y el usuario no puede forzar la validaci\xf3n presionando la tecla Enter."]}),"\n",(0,o.jsxs)(n.p,{children:["La segunda sintaxis de ",(0,o.jsx)(n.strong,{children:"REJECT"})," se ejecuta con el par\xe1metro ",(0,o.jsx)(n.em,{children:"campo"}),". En este caso, el cursor permanece en el \xe1rea de entrada del campo, que obliga al usuario a introducir un valor correcto.",(0,o.jsx)(n.br,{}),"\nCon esta sintaxis, el comando ",(0,o.jsx)(n.strong,{children:"REJECT"})," debe obligatoriamente ser llamado en el evento formulario On Data Change.Debe colocar esta sintaxis del comando ",(0,o.jsx)(n.strong,{children:"REJECT"})," en el m\xe9todo de formulario o en el m\xe9todo de objeto del \xe1rea de entrada. Si est\xe1 utilizando ",(0,o.jsx)(n.strong,{children:"REJECT"})," para el formulario detallado de un subformulario para una tabla, col\xf3quelo en el m\xe9todo de formulario o m\xe9todo de objeto para el formulario detallado. Este comando no tiene efecto en campos de subformularios."]}),"\n",(0,o.jsxs)(n.p,{children:["Puede utilizar ",(0,o.jsx)(n.a,{href:"/docs/es/commands/highlight-text",children:"HIGHLIGHT TEXT"})," para seleccionar los datos en el campo que est\xe1n siendo rechazados."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"El siguiente ejemplo es sobre un registro de transacci\xf3n bancaria que ilustra la primera sintaxis de REJECT utilizada en el m\xe9todo de objeto de un bot\xf3n Aceptar. La tecla Enter est\xe1 definida como un equivalente del bot\xf3n. Esto significa que incluso si el usuario presiona la tecla Enter para aceptar el registro, el m\xe9todo de objeto del bot\xf3n se ejecutar\xe1. Si la transacci\xf3n es un cheque, entonces debe haber un n\xfamero de cheque. Si no hay un n\xfamero de cheque, se rechaza la validaci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(([Operacion]Transaccion="Cheque")\xa0&\xa0([Operacion]N\xfamero Cheque=""))\xa0// Si es un cheque sin n\xfamero.\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Por favor introduzca el n\xfamero del cheque.")\xa0// Alerta del usuario\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0REJECT\xa0// Rechazar la entrada\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO OBJECT([Operacion]N\xfamero Cheque)\xa0// Ir al campo N\xfamero Cheque\n\xa0End case\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsxs)(n.p,{children:["El siguiente ejemplo es parte de un m\xe9todo de objeto para un campo ",(0,o.jsx)(n.em,{children:"[Employees]Salary"}),". El m\xe9todo de objeto prueba el campo ",(0,o.jsx)(n.em,{children:"Employees]Salary"})," y rechaza el campo si el valor es menor que 10 000 EUR. Puede efectuar la misma operaci\xf3n especificando un valor m\xednimo para el campo en el editor de formularios:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Data Change)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If([Employees]Salary<10000)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Salary must be greater than $10,000")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0REJECT([Employees]Salary)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/accept",children:"ACCEPT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/cancel",children:"CANCEL"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/goto-object",children:"GOTO OBJECT"})]}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"38"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return t}});var r=a(667294);let o={},s=r.createContext(o);function t(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);