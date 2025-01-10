"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46981"],{70295:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/qr-report","title":"QR REPORT","description":"QR REPORT ( {tabla ;} doc {; nomMetodo}{; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-report.md","sourceDirName":"commands-legacy","slug":"/commands/qr-report","permalink":"/docs/es/commands/qr-report","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-report.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-report","title":"QR REPORT","slug":"/commands/qr-report","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR ON COMMAND","permalink":"/docs/es/commands/qr-on-command"},"next":{"title":"QR REPORT TO BLOB","permalink":"/docs/es/commands/qr-report-to-blob"}}'),o=r("785893"),d=r("250065");let i={id:"qr-report",title:"QR REPORT",slug:"/commands/qr-report",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"QR REPORT"})," ( {",(0,o.jsx)(n.em,{children:"tabla"})," ;} ",(0,o.jsx)(n.em,{children:"doc"})," {; ",(0,o.jsx)(n.em,{children:"nomMetodo"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tabla"}),(0,o.jsx)(n.td,{children:"Table"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tabla a utilizar para el informe o tabla por defecto si se omite"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"doc"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Documento de informe r\xe1pido a cargar"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomMetodo"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre del m\xe9todo a llamar"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Eliminaci\xf3n de las cajas de di\xe1logo de impresi\xf3n"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"QR REPORT"})," imprime un informe para ",(0,o.jsx)(n.em,{children:"tabla"}),", con ayuda del editor de informes r\xe1pidos de 4D. Este editor permite a los usuarios crear sus propios informes. Para mayor informaci\xf3n sobre la creaci\xf3n de informes r\xe1pidos con la ayuda del editor de informes r\xe1pidos, consulte la secci\xf3n ",(0,o.jsx)(n.em,{children:"Informes r\xe1pidos"})," en el ",(0,o.jsx)(n.em,{children:"Manual de Dise\xf1o"})," de 4D."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["El editor no aparece si la ",(0,o.jsx)(n.em,{children:"tabla"})," ha sido declarada \u201CInvisible.\u201D"]}),"\n",(0,o.jsxs)(n.li,{children:["Cuando el editor se llama utilizando el comando QR REPORT, las relaciones entre las tablas conservan su estado manual, donde aplique. Este principio permite al desarrollador administrar \xe9l mismo este estado utilizando los comandos ",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," y ",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-field-relation",children:"SET FIELD RELATION"}),". Sin embargo, tenga en cuenta que las funcionalidades autom\xe1ticas se desactivan cuando las tablas relacionadas se visualizan en un formulario listado mostrado utilizando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/display-selection",children:"DISPLAY SELECTION"}),", ",(0,o.jsx)(n.a,{href:"/docs/es/commands/modify-selection",children:"MODIFY SELECTION"})," o un subformulario. Ver ",(0,o.jsx)(n.em,{children:"Relaciones manuales y autom\xe1ticas"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["El editor se llama en una ventana externa y no es posible utilizar el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/qr-on-command",children:"QR ON COMMAND"})," en este contexto. Sin embargo, puede utilizar el par\xe1metro ",(0,o.jsx)(n.em,{children:"nomMetodo"})," para ejecutar c\xf3digo personalizado cuando un comando de interfaz se activa (ver abajo)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"documento"}),' es un documento de informe que fue creado con el editor de informes r\xe1pidos y guardado en disco. El documento guarda las especificaciones del informe, no lo registros a imprimir. Si una cadena vac\xeda ("") se pasa en ',(0,o.jsx)(n.em,{children:"documento"}),", ",(0,o.jsx)(n.strong,{children:"QR REPORT"})," muestra una caja de di\xe1logo de apertura de archivos, en la cual el usuario puede seleccionar el informe a imprimir.",(0,o.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,o.jsx)(n.em,{children:"documento"})," especifica un documento que no existe (por ejemplo, si pasa ",(0,o.jsx)(n.a,{href:"/docs/es/commands/char",children:"Char"}),(0,o.jsx)(n.strong,{children:"(1)"})," en ",(0,o.jsx)(n.em,{children:"documento"}),"), se muestra el editor de informes r\xe1pidos."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"nomMetodo"})," designa un m\xe9todo de proyecto 4D que se ejecuta cada vez que un comando del editor de informes r\xe1pidos es llamado por la selecci\xf3n de un elemento del men\xfa o hacer clic en un bot\xf3n. Utilizar este par\xe1metro es equivalente a utilizar ",(0,o.jsx)(n.a,{href:"/docs/es/commands/qr-on-command",children:"QR ON COMMAND"})," en el contexto de la ventana del editor de informes r\xe1pidos (",(0,o.jsx)(n.a,{href:"/docs/es/commands/qr-on-command",children:"QR ON COMMAND"})," s\xf3lo funciona en el contexto de un \xe1rea incluida). Por ejemplo, se puede utilizar este par\xe1metro para cambiar el juego de caracteres utilizado por el informe r\xe1pido. El m\xe9todo ",(0,o.jsx)(n.em,{children:"nomMetodo"})," recibe dos par\xe1metros:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Par\xe1metro"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Tipo"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$1"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$2"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsxs)(n.td,{children:["N\xfamero del comando seleccionado (entero largo). Puede comparar este valor con las constantes del tema ",(0,o.jsx)(n.em,{children:"QR Comandos"})," (solo son soportados los eventos listados):                                    ",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Constante"}),(0,o.jsx)(n.td,{children:"Valor"}),(0,o.jsx)(n.td,{children:"Comentario"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"qr cmd generate"}),(0,o.jsx)(n.td,{children:"2008"}),(0,o.jsxs)(n.td,{children:["Compatible editor 64 bits (uso del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/qr-run",children:"QR RUN"})," recomendado)"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"qr cmd open"}),(0,o.jsx)(n.td,{children:"2001"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"qr cmd page setup"}),(0,o.jsx)(n.td,{children:"2006"}),(0,o.jsx)(n.td,{children:"Compatible editor 64 bits"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"qr cmd print preview"}),(0,o.jsx)(n.td,{children:"2007"}),(0,o.jsx)(n.td,{children:"Compatible editor 64 bits"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"qr cmd save"}),(0,o.jsx)(n.td,{children:"2002"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"qr cmd save as"}),(0,o.jsx)(n.td,{children:"2003"}),(0,o.jsx)(n.td,{})]})]})]})]})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," si desea compilar su base, debe declarar los par\xe1metros $1 y $2 expl\xedcitamente como enteros largos, incluso si no los utiliza."]}),"\n",(0,o.jsxs)(n.p,{children:["Si desea ejecutar el comando inicial elegido por el usuario, utilice la siguiente instrucci\xf3n en el m\xe9todo ",(0,o.jsx)(n.em,{children:"nomMetodo"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0QR EXECUTE COMMAND($1;$2)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Si el par\xe1metro ",(0,o.jsx)(n.em,{children:"nomMetodo"}),' es una cadena vac\xeda ( "") o se omite, ning\xfan m\xe9todo se llama y se aplica la operaci\xf3n est\xe1ndar de ',(0,o.jsx)(n.strong,{children:"QR REPORT"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Una vez seleccionado un informe, se muestran las cajas de di\xe1logo de impresi\xf3n, a menos que se especifique el par\xe1metro ",(0,o.jsx)(n.em,{children:"*."})," Si se especifica este par\xe1metro, no se muestran estas cajas de di\xe1logo y se imprime el informe."]}),"\n",(0,o.jsxs)(n.p,{children:["Si no se involucar al editor de informes r\xe1pidos, la variable sistema OK toma el valor 1 si se imprime un informe; de lo contrario, toma el valor 0 (cero) (por ejemplo, si el usuario hace clic en ",(0,o.jsx)(n.strong,{children:"Cancelar"})," en las cajas de di\xe1logo de impresi\xf3n)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"4D Server:"})," este comando puede ejecutarse en el servidor 4D Server en el marco de un procedimiento almacenado. En este contexto:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Aseg\xfarese de que no aparezca ninguna caja de di\xe1logo en el equipo servidor (excepto para un requerimiento especifico). Para hacer esto, es necesario llamar al comando con el par\xe1metro ",(0,o.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"La sintaxis que hace aparecer el editor Quick Report no funciona con 4D Server; en este caso, la variable sistema OK toma el valor 0."}),"\n",(0,o.jsx)(n.li,{children:"En el caso de un problema relacionado con la impresora (sin papel, impresora desconectada, etc.), no se genera un error."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"El siguiente ejemplo permite al usuario efectuar una b\xfasqueda en la tabla [Personas], y luego imprime autom\xe1ticamente el informe \u201CLista detallada\u201D:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QR REPORT([People];"Detailed Listing";*)\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"El siguiente ejemplo permite al usuario efectuar una b\xfasqueda en la tabla [Personas], y luego seleccionar el informe a imprimir:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QR REPORT([People];"")\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsx)(n.p,{children:"El siguiente ejemplo permite al usuario efectuar una b\xfasqueda en la tabla [Personas], y luego muestra el editor de informes r\xe1pidos de manera que el usuario pueda dise\xf1a, guardar, cargar e imprimir informes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QR REPORT([People];Char(1))\n\xa0End if\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,o.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-field-relation",title:"SET FIELD RELATION",children:"SET FIELD RELATION"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,o.jsxs)(n.p,{children:["Usted desea convertir el conjunto de caracteres utilizado en un informe r\xe1pido llamado utilizando ",(0,o.jsx)(n.strong,{children:"QR REPORT"})," en Mac Roman:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0QR REPORT([MyTable];Char(1);"myCallbackMeth")\n'})}),"\n",(0,o.jsx)(n.p,{children:"El m\xe9todo myCallbackMeth convierte el informe cuando se genera:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $1;$2 : Integer\n\xa0If($2=qr cmd generate)\xa0//si generamos un informe\n\xa0\xa0\xa0\xa0var $myblob : Blob\n\xa0\xa0\xa0\xa0var $path;$text : Text\n\xa0\xa0\xa0\xa0var $type : Integer\n\xa0\xa0\xa0\xa0QR EXECUTE COMMAND($1;$2)\xa0//ejecuci\xf3n del comando\n\xa0\xa0\xa0\xa0QR GET DESTINATION($1;$type;$path)\xa0//recuperaci\xf3n del destino\n\xa0\xa0\xa0\xa0If(($type=qr HTML file)|($type=qr text file))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB($path;$myblob)\n\xa0\xa0//conversi\xf3n del texto utilizando UTF-8\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$text:=Convert to text($myblob;"UTF-8")\n\xa0\xa0//uso del conjunto MacRoman\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONVERT FROM TEXT($text;"MacRoman";$myblob)\n\xa0\xa0//Devuelve el informe convertido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($path;$myblob)\n\xa0\xa0\xa0\xa0End if\n\xa0Else\xa0//de lo contrario, ejecuci\xf3n del comando\n\xa0\xa0\xa0\xa0QR EXECUTE COMMAND($1;$2)\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/print-label",children:"PRINT LABEL"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/print-selection",children:"PRINT SELECTION"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"197"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var s=r(667294);let o={},d=s.createContext(o);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);