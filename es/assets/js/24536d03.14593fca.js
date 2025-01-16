"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48646"],{341927:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>t,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/print-label","title":"PRINT LABEL","description":"PRINT LABEL ( {tabla }{;}{ doc {; * | >}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/print-label.md","sourceDirName":"commands-legacy","slug":"/commands/print-label","permalink":"/docs/es/20-R7/commands/print-label","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-label.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"print-label","title":"PRINT LABEL","slug":"/commands/print-label","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Print form","permalink":"/docs/es/20-R7/commands/print-form"},"next":{"title":"Print object","permalink":"/docs/es/20-R7/commands/print-object"}}'),s=i("785893"),r=i("250065");let o={id:"print-label",title:"PRINT LABEL",slug:"/commands/print-label",displayed_sidebar:"docs"},l=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PRINT LABEL"})," ( {",(0,s.jsx)(n.em,{children:"tabla"})," }{;}{ ",(0,s.jsx)(n.em,{children:"doc"})," {; * | >}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabla"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabla a imprimir, o Tabla por defecto, si se omite"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"doc"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del documento de etiquetas del disco"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"* | >"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"* para suprimir las cajas de di\xe1logo de impresi\xf3n, o > para no reiniciar los par\xe1metros de impresi\xf3n"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PRINT LABEL"})," le permite imprimir etiquetas con los datos de la selecci\xf3n de ",(0,s.jsx)(n.em,{children:"tabla"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si no especifica el par\xe1metro ",(0,s.jsx)(n.em,{children:"documento"}),", ",(0,s.jsx)(n.strong,{children:"PRINT LABEL"})," imprime la selecci\xf3n actual de ",(0,s.jsx)(n.em,{children:"tabla"})," como etiquetas, utilizando el formulario de salida actual. No puede utilizar este comando para imprimir subformularios. Para mayor informaci\xf3n sobre la creaci\xf3n de formularios para etiquetas, consulte el Manual de Dise\xf1o."]}),"\n",(0,s.jsxs)(n.p,{children:["Si especifica el par\xe1metro ",(0,s.jsx)(n.em,{children:"documento"}),", ",(0,s.jsx)(n.strong,{children:"PRINT LABEL"})," le permite tener acceso al Asistente de etiquetas (mostrado a continuaci\xf3n) o imprimir un documento de etiquetas existente almacenado en el disco. Ver el ejemplo a continuaci\xf3n."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(8869).Z+"",width:"748",height:"605"})}),"\n",(0,s.jsxs)(n.p,{children:["Por defecto, ",(0,s.jsx)(n.strong,{children:"PRINT LABEL"})," muestra la caja de di\xe1logo de impresi\xf3n. Si el usuario cancela una de las cajas de di\xe1logo de impresi\xf3n, el comando se cancela y las etiquetas no se imprimen."]}),"\n",(0,s.jsxs)(n.p,{children:["Puede suprimir esta caja de di\xe1logo utilizando el par\xe1metro opcional asterisco (",(0,s.jsx)(n.em,{children:"*"}),") o el par\xe1metro opcional \u201Cmayor que\u201D (",(0,s.jsx)(n.em,{children:">"}),"):",(0,s.jsx)(n.br,{}),"\n\u2022 El par\xe1metro * causa una impresi\xf3n con los par\xe1metros de impresi\xf3n actuales.",(0,s.jsx)(n.br,{}),"\n\u2022 Adem\xe1s, el par\xe1metro > provoca un trabajo de impresi\xf3n sin reinicializar los par\xe1metros de impresi\xf3n actuales. Este par\xe1metro es \xfatil para ejecutar varias llamadas sucesivas a ",(0,s.jsx)(n.strong,{children:"PRINT LABEL"})," (por ejemplo al interior de un bucle) mientras mantiene los par\xe1metros de impresi\xf3n personalizados previamente definidos. Para ver un ejemplo sobre el uso de este par\xe1metro, consulte la descripci\xf3n del comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/print-record",children:"PRINT RECORD"}),".",(0,s.jsx)(n.br,{}),"\nNote que este par\xe1metro no tiene efecto si se utiliza el asistente de creaci\xf3n de etiquetas."]}),"\n",(0,s.jsxs)(n.p,{children:["Si no se utiliza el asistente de creaci\xf3n de etiquetas, la variable sistema OK toma el valor 1 si todas las etiquetas se imprimen; de lo contrario, toma el valor 0 (cero) (por ejemplo, si el usuario hizo clic en el bot\xf3n ",(0,s.jsx)(n.strong,{children:"Cancelar"})," en las caja de di\xe1logo de impresi\xf3n)."]}),"\n",(0,s.jsxs)(n.p,{children:["Si especifica el par\xe1metro ",(0,s.jsx)(n.em,{children:"documento"}),", las etiquetas se imprimen con los par\xe1metros definidos en ",(0,s.jsx)(n.em,{children:"documento"}),". Si ",(0,s.jsx)(n.em,{children:"documento"}),' es una cadena vac\xeda (""), ',(0,s.jsx)(n.strong,{children:"PRINT LABEL"})," presentar\xe1 una caja de di\xe1logo est\xe1ndar de apertura de documentos, permitiendo al usuario seleccionar el archivo de etiquetas a utilizar. Si ",(0,s.jsx)(n.em,{children:"documento"})," es el nombre de un documento que no existe (por ejemplo, si pasa ",(0,s.jsx)(n.em,{children:"char(1)"})," en ",(0,s.jsx)(n.em,{children:"documento)"}),", el asistente de creaci\xf3n de etiquetas aparece, permitiendo al usuario definir su formato de etiquetas."]}),"\n",(0,s.jsxs)(n.p,{children:["**Nota:**si la ",(0,s.jsx)(n.em,{children:"tabla"})," fue declarada \u201Cinvisible\u201D en el entorno Dise\xf1o, no se mostrar\xe1 el asistente de etiquetas."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," este comando puede ejecutarse en 4D Server en el marco de un procedimiento almacenado. En este contexto:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Aseg\xfarese de que ninguna caja de di\xe1logo aparezca en el equipo servidor (excepto por una necesidad espec\xedfica). Para hacer esto, es necesario llamar al comando con el par\xe1metro ",(0,s.jsx)(n.em,{children:"*"})," o ",(0,s.jsx)(n.em,{children:">"})," ."]}),"\n",(0,s.jsx)(n.li,{children:"La sintaxis que hace que el editor de etiquetas aparezca no funciona con 4D Server; en este caso, la variable sistema OK toma el valor 0."}),"\n",(0,s.jsx)(n.li,{children:"En el caso de un problema relacionado de impresora (sin papel, impresora desconectada, etc.), no se genera un mensaje de error."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo imprime las etiquetas utilizando el formulario de salida de una tabla. El ejemplo utiliza dos m\xe9todos. El primero es un m\xe9todo de proyecto que designa el formulario de salida a utilizar y luego imprime las etiquetas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Direcciones])\xa0// Selecci\xf3n de todos los registros\n\xa0FORM SET OUTPUT([Direcciones];"Imprimir Etiqueta")\xa0// Selecci\xf3n del formulario de salida\n\xa0PRINT LABEL([Direcciones])\xa0// Impresi\xf3n de etiquetas\n\xa0FORM SET OUTPUT([Direcciones];"Salida")\xa0// Restablecimiento del formulario de salida por defecto\n'})}),"\n",(0,s.jsxs)(n.p,{children:["El segundo m\xe9todo es el m\xe9todo de formulario del formulario ",(0,s.jsx)(n.em,{children:'"Imprimir Etiqueta"'}),". El formulario contiene una variable llamada ",(0,s.jsx)(n.em,{children:"vEtiq"}),", que se utiliza para mantener los campos concatenados. Si el segundo campo de direcciones (Dir2) est\xe1 vac\xedo, es eliminado por el m\xe9todo. Note que esta operaci\xf3n es realizada autom\xe1ticamente por el asistente de creaci\xf3n de etiquetas. El m\xe9todo de formulario crea la etiqueta para cada registro:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9todo de formulario [Direcciones]; "Etiqueta salida"\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEtiq:=[Direcciones]Nom1+" "+[Direcciones]Nom2+Char(13)+[Direcciones]Dir1+Char(13)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If([Direcciones]Dir2#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEtiq:=vLabel+[Direcciones]Dir2+Char(13)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEtiq:=vEtiq+[Direcciones]Ciudad+", "+[Direcciones]Estado+" "+[Direcciones]CodigoPostal\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo le permite al usuario efectuar una b\xfasqueda en la tabla [Personas], y luego imprime autom\xe1ticamente las etiquetas \u201CMis etiquetas\u201D:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personas])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0PRINT LABEL([Personas];"Mis etiquetas";*)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo le permite al usuario efectuar una b\xfasqueda en la tabla [Personas], y despu\xe9s le permite al usuario elegir las etiquetas a imprimir:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personas])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0PRINT LABEL([Personas];"")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo le permite al usuario efectuar una b\xfasqueda en la tabla [Personas] y luego muestra el Asistente de etiquetas de manera que el usuario pueda dise\xf1ar, guardar, cargar e imprimir todo tipo de etiquetas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Personas])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0PRINT LABEL([Personas];Char(1))\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/print-selection",children:"PRINT SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/qr-report",children:"QR REPORT"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"39"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8869:function(e,n,i){i.d(n,{Z:function(){return a}});let a=i.p+"assets/images/pict2980390.es-48a28b1dbe67aeea9c14dabd47f39912.png"},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var a=i(667294);let s={},r=a.createContext(s);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);