"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80846"],{279671:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>t,default:()=>m,assets:()=>l,toc:()=>d,frontMatter:()=>i});var a=JSON.parse('{"id":"commands-legacy/message","title":"MESSAGE","description":"MESSAGE ( mensaje )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/message.md","sourceDirName":"commands-legacy","slug":"/commands/message","permalink":"/docs/es/commands/message","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmessage.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"message","title":"MESSAGE","slug":"/commands/message","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GOTO XY","permalink":"/docs/es/commands/goto-xy"},"next":{"title":"MESSAGES OFF","permalink":"/docs/es/commands/messages-off"}}'),o=s("785893"),r=s("250065");let i={id:"message",title:"MESSAGE",slug:"/commands/message",displayed_sidebar:"docs"},t=void 0,l={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MESSAGE"})," ( ",(0,o.jsx)(n.em,{children:"mensaje"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"mensaje"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Mensaje a mostrar"})]})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando MESSAGE generalmente se utiliza para informar al usuario sobre alguna actividad. Muestra ",(0,o.jsx)(n.em,{children:"mensaje"})," en la pantalla en una ventana de mensaje especial que se abre y cierra cada vez que usted llama a MESSAGE, a menos que usted trabaje con una ventana que abri\xf3 previamente utilizando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-window",children:"Open window"})," (ver los siguientes detalles). El mensaje es temporal y se borra tan pronto como se muestre un formulario o se detenga la ejecuci\xf3n del m\xe9todo. Si se ejecuta otro comando MESSAGE, el mensaje anterior se borra."]}),"\n",(0,o.jsxs)(n.p,{children:["Si se abre una ventana con ",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-window",title:"Open window",children:"Open window"}),", todas las llamadas posteriores al comando MESSAGE muestran los mensajes en esa ventana. La ventana se comporta como un terminal:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Los mensajes sucesivos no borran los mensajes anteriores cuando se muestran en la ventana, se concadenan en mensajes existentes."}),"\n",(0,o.jsx)(n.li,{children:"Si un mensaje es m\xe1s largo que la ventana, 4D inserta autom\xe1ticamente un retorno a la l\xednea."}),"\n",(0,o.jsx)(n.li,{children:"Si un mensaje tiene m\xe1s l\xedneas que la ventana, 4D autom\xe1ticamente desplaza el mensaje en la ventana."}),"\n",(0,o.jsxs)(n.li,{children:["Para controlar los saltos de l\xednea autom\xe1ticos, incluya retornos de carro, \u2014 ",(0,o.jsx)(n.strong,{children:"Char(13)"})," \u2014, en su mensaje."]}),"\n",(0,o.jsxs)(n.li,{children:["Para mostrar el texto en un lugar en particular de la ventana, llame ",(0,o.jsx)(n.a,{href:"/docs/es/commands/goto-xy",children:"GOTO XY"}),".."]}),"\n",(0,o.jsxs)(n.li,{children:["Para borrar los contenidos de la ventana, llame ",(0,o.jsx)(n.a,{href:"/docs/es/commands/erase-window",children:"ERASE WINDOW"}),".."]}),"\n",(0,o.jsx)(n.li,{children:"La ventana es s\xf3lo una ventana de salida y su contenido no puede ser redise\xf1ado cuando otras ventanas se colocan sobre ella."}),"\n",(0,o.jsx)(n.li,{children:'Puede modificar la fuente y el tama\xf1o de los caracteres mostrados en la ventana a trav\xe9s de la p\xe1gina "Interfaz" en las Propiedades de la base.'}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," ",(0,o.jsx)(n.strong,{children:"MESSAGE"})," es compatible con el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-form-window",children:"Open form window"}),"; sin embargo, en este contexto, el segundo par\xe1metro ",(0,o.jsx)(n.em,{children:"*"})," de ",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-form-window",children:"Open form window"}),", que guarda el tama\xf1o y la posici\xf3n de la ventana, no es compatible."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"El siguiente ejemplo procesa una selecci\xf3n de registros y llama MESSAGE para informar al usuario sobre el progreso de la operaci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0For($vlRegistro;1;Records in selection([todaTabla]))\n\xa0\xa0\xa0\xa0MESSAGE("Proceso del registro #"+String($vlRegistro))\n\xa0\xa0// Hacer algo con el registro\n\xa0\xa0\xa0\xa0NEXT RECORD([todaTabla])\n\xa0End for\n'})}),"\n",(0,o.jsx)(n.p,{children:"La siguiente ventana aparece y desaparece cada vez que se llama MESSAGE:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(889181).Z+"",width:"504",height:"137"})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsxs)(n.p,{children:['Con el fin de evitar la ventana "titilante", puede mostrar los mensajes en una ventana abierta utilizando ',(0,o.jsx)(n.a,{href:"/docs/es/commands/open-window",title:"Open window",children:"Open window"}),", como en este ejemplo:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0Open window(50;50;500;250;5;"Operaci\xf3n en progreso")\n\xa0For($vlRegistro;1;Records in selection([todaTabla]))\n\xa0\xa0\xa0\xa0MESSAGE("Procesando registro #"+String($vlRegistro))\n\xa0\xa0// Hacer algo con el registro\n\xa0\xa0\xa0\xa0NEXT RECORD([todaTabla])\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,o.jsx)(n.p,{children:"El resultado es el siguiente (en Windows):"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(297006).Z+"",width:"456",height:"226"})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsx)(n.p,{children:"A\xf1adiendo un retorno de carro mejora la presentaci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0Open window(50;50;500;250;5;"Operaci\xf3n en progreso")\n\xa0For($vlRegistro;1;Records in selection([todaTabla]))\n\xa0\xa0\xa0\xa0MESSAGE("Procesando registro #"+String($vlRegistro)+Char(Carriage return))\n\xa0\xa0// Hacer algo con el registro\n\xa0\xa0\xa0\xa0NEXT RECORD([todaTabla])\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,o.jsx)(n.p,{children:"Este es el resultado (en Windows):"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(237326).Z+"",width:"456",height:"226"})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,o.jsxs)(n.p,{children:["Utilizando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/goto-xy",title:"GOTO XY",children:"GOTO XY"})," y escribiendo algunas l\xedneas adicionales:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0Open window(50;50;500;250;5;"Operaci\xf3n en progreso")\n\xa0$vlNbRegistros:=Records in selection([todaTabla])\n\xa0$vhStartTime:=Current time\n\xa0For($vlRegistro;1;$vlNbRegistros)\n\xa0\xa0\xa0\xa0GOTO XY(5;2)\n\xa0\xa0\xa0\xa0MESSAGE("Procesando registro #"+String($vlRegistro)+Char(Carriage return))\n\xa0\xa0// Hacer algo con el registro\n\xa0\xa0\xa0\xa0NEXT RECORD([todaTabla])\n\xa0\xa0\xa0\xa0GOTO XY(5;5)\n\xa0\xa0\xa0\xa0$vlResto:=(($vlNbRegistros/$vlRegistro)-1)*(Current time-$vhHoraInicio)\n\xa0\xa0\xa0\xa0MESSAGE("Tiempo restante estimado: "+Time string($vlResto))\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,o.jsx)(n.p,{children:"El resultado es el siguiente (en Windows):"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(305062).Z+"",width:"456",height:"226"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/close-window",children:"CLOSE WINDOW"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/erase-window",children:"ERASE WINDOW"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/goto-xy",children:"GOTO XY"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-window",children:"Open window"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},889181:function(e,n,s){s.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},297006:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/pict25454.es-1cfcef578aeaab40a883a9b71bfde512.png"},237326:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/pict25455.es-f9c32fffb494f3352ee6682199497a49.png"},305062:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/pict25456.es-9aeb732abc1176f91e467faf37d35f8f.png"},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return i}});var a=s(667294);let o={},r=a.createContext(o);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);