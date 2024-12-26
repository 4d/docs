"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54315"],{732720:function(e,n,r){r.r(n),r.d(n,{metadata:()=>d,contentTitle:()=>i,default:()=>j,assets:()=>o,toc:()=>a,frontMatter:()=>l});var d=JSON.parse('{"id":"commands-legacy/object-set-events","title":"OBJECT SET EVENTS","description":"OBJECT SET EVENTS ( { ;} objeto ; arrEventos ; modo* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-events.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-events","permalink":"/docs/es/commands/object-set-events","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-events.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-events","title":"OBJECT SET EVENTS","slug":"/commands/object-set-events","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET ENTERABLE","permalink":"/docs/es/commands/object-set-enterable"},"next":{"title":"OBJECT SET FILTER","permalink":"/docs/es/commands/object-set-filter"}}'),s=r("785893"),t=r("250065");let l={id:"object-set-events",title:"OBJECT SET EVENTS",slug:"/commands/object-set-events",displayed_sidebar:"docs"},i=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"arrEventos"})," ; ",(0,s.jsx)(n.em,{children:"modo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,s.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:['Nombre de objeto o "" para designar el formulario (si * se especifica) o ',(0,s.jsx)(n.br,{}),"Campo o variable (si * se omite)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrEventos"}),(0,s.jsx)(n.td,{children:"Integer array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array de eventos a definir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Modo de activaci\xf3n de los eventos definidos en arrEvents"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," modifica, para el proceso actual, la configuraci\xf3n de los eventos formulario del formulario u objetos designados por los par\xe1metros ",(0,s.jsx)(n.em,{children:"objeto"})," y ",(0,s.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"})," se indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente).",(0,s.jsx)(n.br,{}),"\nPara definir la configuraci\xf3n de eventos para el formulario, pase el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"}),' y una cadena vac\xeda "" en ',(0,s.jsx)(n.em,{children:"objeto"}),", en este caso, usted designa el formulario actual."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si desea modificar los eventos de un subformulario relacionado con una tabla, s\xf3lo puede utilizar la sintaxis basada en el nombre del objeto."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"arrEvents"}),", pase un array entero largo que contenga la lista de eventos de formulario predefinidos o personalizados que desea modificar (se puede utilizar el par\xe1metro ",(0,s.jsx)(n.em,{children:"modo"})," para especificar si la modificaci\xf3n consiste en la activaci\xf3n o desactivaci\xf3n de los eventos) . Para designar un evento predefinido a modificar, puede pasar en cada elemento del array ",(0,s.jsx)(n.em,{children:"arrEvents"}),', una de las siguientes constantes, que se encuentra en el tema "',(0,s.jsx)(n.em,{children:"Eventos formulario"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Activate"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"11"}),(0,s.jsx)(n.td,{children:"La ventana del formulario se convierte en la ventana del primer plano"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On After Edit"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"45"}),(0,s.jsx)(n.td,{children:"El contenido del objeto editable que tiene el foco acaba de ser modificado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On After Keystroke"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"28"}),(0,s.jsxs)(n.td,{children:["Un car\xe1cter est\xe1 apunto de introducirse en el objeto que tiene el foco. ",(0,s.jsx)(n.a,{href:"/docs/es/commands/get-edited-text",children:"Get edited text"})," devuelve el contenido incluyendo este car\xe1cter"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On After Sort"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"30"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"List box \xfanicamente"}),") Se acaba de efectuar una ordenaci\xf3n est\xe1ndar en una columna del list box"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Arrow Click"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"38"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"Botones 3D \xfanicamente"}),") El \xe1rea \u201Cflecha\u201D de un bot\xf3n 3D recibe un clic"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Before Data Entry"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"41"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"List box \xfanicamente"}),") Una celda de list box est\xe1 a punto de pasar a modo edici\xf3n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Before Keystroke"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"17"}),(0,s.jsxs)(n.td,{children:["Un car\xe1cter est\xe1 a punto de introducirse en el objeto que tiene el foco. ",(0,s.jsx)(n.a,{href:"/docs/es/commands/get-edited-text",children:"Get edited text"})," devuelve el texto del objeto sin este car\xe1cter."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Begin Drag Over"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"46"}),(0,s.jsx)(n.td,{children:"Se va a arrastrar un objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Begin URL Loading"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"47"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"\xc1reas web \xfanicamente"}),") Un nuevo URL se carga en el \xe1rea web"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On bound variable change"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"54"}),(0,s.jsx)(n.td,{children:"Se modifica la variable relacionada a un subformulario."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Clicked"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Ocurre un clic sobre un objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Close Box"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"22"}),(0,s.jsx)(n.td,{children:"Se ha hecho clic en la casilla de cerrar la ventana"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Close Detail"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"26"}),(0,s.jsx)(n.td,{children:"Se cierra el formulario de entrada y regresa al formulario de salida"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Collapse"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"44"}),(0,s.jsx)(n.td,{children:"(Listas jer\xe1rquicas \xfanicamente) Un elemento de la lista jer\xe1rquica se ha contra\xeddo v\xeda un clic o una tecla"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Column Moved"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"32"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"List box \xfanicamente"}),") El usuario mueve una columna de list box v\xeda arrastrar y soltar"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Column Resize"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"33"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"List box \xfanicamente"}),") El ancho de una columna de list box es modificado por un usuario con el rat\xf3n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Data Change"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"20"}),(0,s.jsx)(n.td,{children:"Se han modificado los datos de un objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Deactivate"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"12"}),(0,s.jsx)(n.td,{children:"La ventana del formulario deja de ser la ventana del primer plano"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Delete Action"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"58"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"(Listas jer\xe1rquicas y list box \xfanicamente)"}),". El usuario solicita borrar un elemento."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Display Detail"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"Un registro se va a mostrar en una lista o una l\xednea se va a mostrar en un list box."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Double Clicked"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"13"}),(0,s.jsx)(n.td,{children:"Un objeto ha recibido un doble clic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Drag Over"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"21"}),(0,s.jsx)(n.td,{children:"Los datos pueden soltarse en un objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Drop"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{children:"Se han soltado datos en un objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On End URL Loading"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"49"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"\xc1reas web \xfanicamente"}),") Se han cargado todos los recursos del URL"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Expand"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"43"}),(0,s.jsx)(n.td,{children:"(Listas jer\xe1rquicas \xfanicamente) Se ha expandido un elemento de la lista jer\xe1rquica utilizando un clic o una tecla"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Footer Click"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"57"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"List box \xfanicamente)"})," Un clic en el pie de un list box o de una columna de list box"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Getting Focus"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"15"}),(0,s.jsx)(n.td,{children:"Un objeto de formulario toma el foco"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Header"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"El encabezado del formulario se va a imprimir o a mostrar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Header Click"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"42"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"List box \xfanicamente"}),") Ocurre un clic en un encabezado de columna del list box"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Load Record"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"40"}),(0,s.jsx)(n.td,{children:"En modo entrada en lista, se carga un registro durante modificaci\xf3n (el usuario hace clic en una l\xednea del registro y un campo pasa a modo edici\xf3n)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Long Click"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"39"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"Botones 3D \xfanicamente"}),") Se hace clic en un bot\xf3n 3D y el bot\xf3n del rat\xf3n permanece presionado por un cierto tiempo"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Losing Focus"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"14"}),(0,s.jsx)(n.td,{children:"Un objeto de formulario est\xe1 perdiendo el foco"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mac toolbar button"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"55"}),(0,s.jsx)(n.td,{children:"El usuario hace clic en el bot\xf3n de gesti\xf3n de la barra de herramientas en Mac OS."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Menu Selected"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"Se ha seleccionado un comando de men\xfa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Enter"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"35"}),(0,s.jsx)(n.td,{children:"El cursor del rat\xf3n entra al \xe1rea gr\xe1fica de un objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Leave"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"36"}),(0,s.jsx)(n.td,{children:"El cursor del rat\xf3n sale del \xe1rea gr\xe1fica de un objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Move"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"37"}),(0,s.jsx)(n.td,{children:"El cursor del rat\xf3n se mueve al menos un p\xedxel O cuando se presiona una tecla de modificaci\xf3n (Ctrl, Alt, Bloq may\xfas). Si el evento est\xe1 seleccionado para un objeto \xfanicamente, se genera s\xf3lo cuando el cursor se encuentra dentro del \xe1rea gr\xe1fica del objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Open Detail"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"25"}),(0,s.jsx)(n.td,{children:"El formulario detallado asociado con el formulario de salida o con el listbox est\xe1 apunto de ser abierto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Open External Link"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"52"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"\xc1reas web \xfanicamente"}),") Se ha abierto un URL externo en el navegador"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Outside Call"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"10"}),(0,s.jsxs)(n.td,{children:["El formulario recibe una llamada ",(0,s.jsx)(n.a,{href:"/docs/es/commands/post-outside-call",children:"POST OUTSIDE CALL"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Picture Scroll"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"59"}),(0,s.jsx)(n.td,{children:"El usuario desplaza el contenido de un campo o de una variable imagen utilzando el rat\xf3n o una tecla."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Plug in Area"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"19"}),(0,s.jsx)(n.td,{children:"Un objeto externo solicit\xf3 que se ejecute su m\xe9todo de objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Printing Break"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"Se va a imprimir una de las \xe1reas de ruptura del formulario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Printing Detail"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"23"}),(0,s.jsx)(n.td,{children:"Se va a imprimir el \xe1rea de detalle del formulario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Printing Footer"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{children:"Se va a imprimir el \xe1rea de pie de p\xe1gina del formulario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Resize"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"29"}),(0,s.jsx)(n.td,{children:"La ventana del formulario se redimensiona"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Row Moved"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"34"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"List box \xfanicamente"}),") El usuario mueve una fila de un list box v\xeda arrastrar y soltar"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Row Resize"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"60"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"4D View Pro \xfanicamente"}),") La altura de una l\xednea es modificada por un usuario con el rat\xf3n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Selection Change"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"31"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"List box"}),": se modifica la selecci\xf3n actual de l\xedneas o columnas",(0,s.jsx)(n.em,{children:"Registros en lista:"})," se modifica el registro actual o la selecci\xf3n actual de l\xedneas en un formulario listado o en un subformulario",(0,s.jsx)(n.em,{children:"Lista jer\xe1rquica"}),": la selecci\xf3n en la lista se modifica luego de un clic o de presionar una tecla",(0,s.jsx)(n.em,{children:"Variable o campo editable"}),": la selecci\xf3n de texto o la posici\xf3n del cursor en el \xe1rea se modifica al hacer clic o presionar una tecla."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Timer"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"27"}),(0,s.jsxs)(n.td,{children:["El n\xfamero de tics definido por el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/set-timer",children:"SET TIMER"})," se ha pasado"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Unload"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"24"}),(0,s.jsx)(n.td,{children:"El formulario se cierra y libera"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On URL Filtering"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"51"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"\xc1reas web \xfanicamente"}),") Un URL fue bloqueado por el \xe1rea web"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On URL Loading Error"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"50"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"\xc1reas web \xfanicamente"}),") Ocurri\xf3 un error cuando se cargaba el URL"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On URL Resource Loading"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"48"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"\xc1reas web \xfanicamente"}),") Se carga un nuevo recurso en el \xe1rea web"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Validate"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Se ha valido la entrada de datos en el registro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On VP Range Changed"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"61"}),(0,s.jsx)(n.td,{children:"El rango de celdas 4D View Pro ha cambiado (por ejemplo, el c\xe1lculo de una f\xf3rmula, el valor eliminado de una celda, etc.)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Window Opening Denied"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"53"}),(0,s.jsxs)(n.td,{children:["(",(0,s.jsx)(n.em,{children:"\xc1reas web \xfanicamente"}),") Se ha bloqueado una ventana pop-up"]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Es importante tener en cuenta que el evento On Load no est\xe1 incluido en esta lista: este evento no se puede definir porque ya se ha generado durante la ejecuci\xf3n del comando."}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"arrEvents"}),", tambi\xe9n puede pasar todo valor correspondiente a un evento personalizado. En este caso, recomendamos utilizar valores negativos (ver el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/call-subform-container",children:"CALL SUBFORM CONTAINER"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"modo"}),' se utiliza para definir el tratamiento global a efectuar para los elementos del array. Para ello, puede pasar una de las siguientes constantes, que se encuentra en el tema "',(0,s.jsx)(n.em,{children:"Propiedades de los objetos"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Disable events others unchanged"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:["Todos los eventos listados en el array ",(0,s.jsx)(n.em,{children:"arrEvents"})," se desactivan; el estado de todos los dem\xe1s eventos no cambia"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Enable events disable others"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsxs)(n.td,{children:["Todos los eventos listados en el array ",(0,s.jsx)(n.em,{children:"arrEvents"})," se activan; todos los dem\xe1s eventos se desactivan"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Enable events others unchanged"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["Todos los eventos listados en el array ",(0,s.jsx)(n.em,{children:"arrEvents"})," se activan; el estado de todos los dem\xe1s eventos no cambia"]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," puede dar lugar a la activaci\xf3n de eventos que no son compatibles con el ",(0,s.jsx)(n.em,{children:"objeto"})," (dependiendo del tipo). En este caso, simplemente se ignoran los eventos."]}),"\n",(0,s.jsxs)(n.p,{children:["Si un ",(0,s.jsx)(n.em,{children:"objeto"})," se duplica despu\xe9s de una llamada al comando ",(0,s.jsx)(n.strong,{children:"OBJECT SET EVENTS"}),", la configuraci\xf3n resultante de activaci\xf3n/desactivaci\xf3n tambi\xe9n se duplica."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Activaci\xf3n de tres eventos formulario para un conjunto de objetos list box y desactivaci\xf3n de otros eventos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;3)\n\xa0$MyEventsOnLB {1}:=On After Sort\n\xa0$MyEventsOnLB {2}:=On Column Moved\n\xa0$MyEventsOnLB {3}:=On Column Resize\n\xa0OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Enable events disable others)\n\xa0\xa0// activa 3 eventos y desactiva todos los dem\xe1s\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Desactivaci\xf3n de tres eventos formulario para un conjunto de objetos list box, sin modificar los otros eventos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;3)\n\xa0$MyEventsOnLB {1}:=On After Sort\n\xa0$MyEventsOnLB {2}:=On Column Moved\n\xa0$MyEventsOnLB {3}:=On Column Resize\n\xa0OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Disable events others unchanged)\n\xa0\xa0// desactiva solo 3 eventos\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Activaci\xf3n de un evento formulario para un objeto, sin modificar los otros eventos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;1)\n\xa0$MyEventsOnLB {1}:=On Column Moved\n\xa0OBJECT SET EVENTS(*;"Col1";$MyEventsOnLB;Enable events others unchanged)\n\xa0\xa0// activa \xfanicamente el evento\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"Desactivaci\xf3n de todos los eventos del formulario:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyFormEvents;0)\n\xa0OBJECT SET EVENTS(*;"";$MyFormEvents;Enable events disable others)\n\xa0\xa0// desactiva todos los eventos\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,s.jsx)(n.p,{children:"Desactivaci\xf3n de un solo evento del formulario sin modificar los otros:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyFormEvents;1)\n\xa0$MyFormEvents{1}:=On Timer\n\xa0OBJECT SET EVENTS(*;"";$MyFormEvents;Disable events others unchanged)\n\xa0\xa0// solo desactiva el evento\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Eventos formulario"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/object-get-events",children:"OBJECT GET EVENTS"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1239"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var d=r(667294);let s={},t=d.createContext(s);function l(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);