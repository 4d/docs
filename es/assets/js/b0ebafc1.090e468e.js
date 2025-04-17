"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96861"],{278689:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>t,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/set-print-option","title":"SET PRINT OPTION","description":"SET PRINT OPTION ( opcion ; valor1 {; valor2} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-print-option.md","sourceDirName":"commands-legacy","slug":"/commands/set-print-option","permalink":"/docs/es/20-R8/commands/set-print-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-print-option.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-print-option","title":"SET PRINT OPTION","slug":"/commands/set-print-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PRINT MARKER","permalink":"/docs/es/20-R8/commands/set-print-marker"},"next":{"title":"SET PRINT PREVIEW","permalink":"/docs/es/20-R8/commands/set-print-preview"}}'),s=i("785893"),o=i("250065");let a={id:"set-print-option",title:"SET PRINT OPTION",slug:"/commands/set-print-option",displayed_sidebar:"docs"},d=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"opciones y valores",id:"opciones-y-valores",level:3},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET PRINT OPTION"})," ( ",(0,s.jsx)(n.em,{children:"opcion"})," ; ",(0,s.jsx)(n.em,{children:"valor1"})," {; ",(0,s.jsx)(n.em,{children:"valor2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"opcion"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de opci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valor1"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valor 1 de la opci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valor2"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valor 2 de la opci\xf3n"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"SET PRINT OPTION"})," se utiliza para modificar por programaci\xf3n el valor de una opci\xf3n de impresi\xf3n. Cada opci\xf3n definida utilizando este comando se aplica a los ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/settings/compatibility",children:"par\xe1metros de impresi\xf3n actuales 4D"})," siempre que no se llame otro comando que modifique los par\xe1metros de impresi\xf3n (",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-settings",children:"PRINT SETTINGS"}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-selection",children:"PRINT SELECTION"})," sin el par\xe1metro ",(0,s.jsx)(n.em,{children:">"})," par\xe1metro, etc.). Si se ha abierto un trabajo de impresi\xf3n (por ejemplo con ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/open-printing-job",children:"OPEN PRINTING JOB"}),"), la opci\xf3n se define para el trabajo y no puede modificarse mientras el trabajo no haya finalizado (excepto para Orientation option, ver m\xe1s adelante)."]}),"\n",(0,s.jsx)(n.h3,{id:"opciones-y-valores",children:"opciones y valores"}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"opcion"})," le permite indicar la opci\xf3n a modificar. Puede pasar una de las constantes predefinidas del tema ",(0,s.jsx)(n.em,{children:"Opciones de impresi\xf3n"}),", o un c\xf3digo de opci\xf3n PDF (utilizable con el driver PDFCreator bajo Windows \xfanicamente).",(0,s.jsx)(n.br,{}),"\nPase en los par\xe1metros ",(0,s.jsx)(n.em,{children:"valor1"})," y ",(0,s.jsx)(n.em,{children:"valor2"})," (opcionalmente) los nuevos valores de la ",(0,s.jsx)(n.em,{children:"opcion"})," especificada. El n\xfamero y naturaleza de los valores pasados depende del tipo de opci\xf3n especificada."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Paper option"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["Si s\xf3lo utiliza ",(0,s.jsx)(n.em,{children:"valor1"}),", que contiene el nombre del papel. Si se utilizan los dos par\xe1metros, ",(0,s.jsx)(n.em,{children:"valor1"})," contiene el ancho del papel y ",(0,s.jsx)(n.em,{children:"valor2"})," contiene el alto del papel. La anchura y la altura se expresan en puntos. Utilice el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-option-values",children:"PRINT OPTION VALUES"})," para obtener el nombre, el alto y el ancho de todos los formatos de papel que ofrece la impresora."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Orientation option"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"valor1"})," \xfanicamente: 1=Retrato, 2=Paisaje. Si se utiliza una opci\xf3n de orientaci\xf3n diferente, ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-print-option",children:"GET PRINT OPTION"}),"devuelve 0 en ",(0,s.jsx)(n.em,{children:"valor1"}),".",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"Versiones 64 bits"}),": esta opci\xf3n se puede llamar desde una tarea de impresi\xf3n, lo que significa que puede cambiar de vertical a horizontal, o viceversa, durante el mismo trabajo de impresi\xf3n."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Scale option"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"valor1"})," \xfanicamente: valor de la escala en porcentaje. Tenga cuidado, algunas impresoras no permiten modificar la escala. Si pasa un valor no v\xe1lido, la propiedad se reinicia al 100% en el momento de la impresi\xf3n.",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.br,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Number of copies option"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"valor1"})," \xfanicamente: n\xfamero de copias a imprimir."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Paper source option"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsxs)(n.td,{children:["(Windows \xfanicamente) ",(0,s.jsx)(n.em,{children:"valor1"})," \xfanicamente: n\xfamero correspondiente al \xedndice, en el array de bandejas devuelto por el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-option-values",children:"PRINT OPTION VALUES"}),", de la bandeja de papel a utilizar. Esta opci\xf3n s\xf3lo se puede utilizar en Windows.",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.br,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Destination option"}),(0,s.jsx)(n.td,{children:"9"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"valor1"}),": c\xf3digo que indica el tipo de destino de la impresi\xf3n: 1=Impresora, 2=Archivo (PS en Mac), 3=Archivo PDF, 5=Pantalla (opci\xf3n del driver macOS).",(0,s.jsx)(n.br,{}),"Si ",(0,s.jsx)(n.em,{children:"valor1"})," es diferente de 1 o 5, ",(0,s.jsx)(n.em,{children:"valor2"})," contiene un nombre de ruta para el documento resultante. Esta ruta se utilizar\xe1 hasta que se especifique otra ruta. Si un archivo con el mismo nombre ya existe en el lugar de destino, ser\xe1 sustituido. Con ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-print-option",children:"GET PRINT OPTION"}),", si el valor actual no est\xe1 en la lista predefinida, ",(0,s.jsx)(n.em,{children:"valor1"})," contiene -1 y la variable sistema OK toma el valor 1. Si ocurre un error, ",(0,s.jsx)(n.em,{children:"valor1"})," y la variable sistema OK toman el valor 0. ",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"Nota (Windows)"}),": para imprimir PDF en Windows, debe llamar a ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-current-printer",children:"SET CURRENT PRINTER"}),"(Generic PDF driver) y definir el destino de la impresi\xf3n en 2 (Archivo) o 3 (Archivo PDF). El ajuste 3 le permite escribir un c\xf3digo multiplataforma."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Double sided option"}),(0,s.jsx)(n.td,{children:"11"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"valor1"}),": 0=Un solo lado o est\xe1ndar, 1=Doble cara. Si *valor1=*1, ",(0,s.jsx)(n.em,{children:"valor2"})," contiene la uni\xf3n: 0=Izquierda (valor predeterminado), 1=Uni\xf3n superior.",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"Nota"}),": esta opci\xf3n s\xf3lo se puede utilizar en Windows.",(0,s.jsx)(n.br,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Spooler document name option"}),(0,s.jsx)(n.td,{children:"12"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"valor1"})," \xfanicamente: nombre del documento de impresi\xf3n actual, que aparece en la lista de documentos de la cola de impresi\xf3n. El nombre definido para esta instrucci\xf3n se utilizar\xe1 para todos los documentos de impresi\xf3n de la sesi\xf3n hasta que un nuevo nombre o una cadena vac\xeda no se pase. Para utilizar o restablecer el funcionamiento normal (usando el nombre del m\xe9todo en el caso de un m\xe9todo, el nombre de la tabla para un registro, etc.), pase una cadena vac\xeda en ",(0,s.jsx)(n.em,{children:"valor1"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Page range option"}),(0,s.jsx)(n.td,{children:"15"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"valor1"}),"=primera p\xe1gina a imprimir (valor por defecto 1) y (opcional) ",(0,s.jsx)(n.em,{children:"valor2"}),"=n\xfamero de la \xfaltima p\xe1gina a imprimir (valor por defecto -1 = fin del documento)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Legacy printing layer option"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsxs)(n.td,{children:["(Windows \xfanicamente) ",(0,s.jsx)(n.em,{children:"valor1"})," \xfanicamente: 1=seleccionar la antigua capa de impresi\xf3n GDI para todos los trabajos de impresi\xf3n subsiguientes. 0=seleccionar la capa de impresi\xf3n D2D (por defecto). Este selector est\xe1 destinado principalmente para permitir plug-ins de antigua generaci\xf3n imprimir dentro de tareas de impresi\xf3n 4D en aplicaciones 4D en Windows."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Print preview option"}),(0,s.jsx)(n.td,{children:"18"}),(0,s.jsxs)(n.td,{children:["(s\xf3lo Windows) ",(0,s.jsx)(n.em,{children:"valor1"}),": formato a utilizar para las vistas previas de impresi\xf3n en Windows. Valores disponibles: kp preview automatic (por defecto): utiliza la impresora y el visor XPS si est\xe1n disponibles, en caso contrario utiliza la impresora y el visor PDF si est\xe1n disponibles, en caso contrario generar un error. kp preview XPS: utiliza la impresora y el visor XPS si est\xe1n disponibles, en caso contrario generar un error. kp preview PDF: utiliza la impresora y el visor PDF si est\xe1n disponibles; de lo contrario, se generar\xe1 un error. ",(0,s.jsx)(n.em,{children:"valor2"})," (s\xf3lo se puede utilizar con ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-print-option",children:"GET PRINT OPTION"}),"): formato de vista previa de impresi\xf3n utilizado realmente en Windows (puede diferir del ",(0,s.jsx)(n.em,{children:"valor1"})," dependiendo de la configuraci\xf3n). Valores disponibles: kp preview none: ning\xfan formato disponible. kp preview XPS: impresora y visor XPS utilizados. kp preview PDF: impresora y visor PDF utilizados."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Una vez fijado utilizando este comando, una opci\xf3n de impresi\xf3n se conservar\xe1 durante toda la sesi\xf3n para toda la aplicaci\xf3n 4D. Ser\xe1 utilizada por los comandos ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-record",children:"PRINT RECORD"}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-form",children:"Print form"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/qr-report",children:"QR REPORT"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-print",children:"WP PRINT"}),", as\xed como tambi\xe9n para todas las impresiones 4D, incluyendo en modo Dise\xf1o."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Es indispensable utilizar el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:">"})," con los comandos ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-record",children:"PRINT RECORD"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/page-break",children:"PAGE BREAK"})," para evitar reinicializar las opciones de impresi\xf3n que fueron definidas utilizando el comando ",(0,s.jsx)(n.strong,{children:"SET PRINT OPTION"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["El comando ",(0,s.jsx)(n.strong,{children:"SET PRINT OPTION"})," s\xf3lo opera con impresoras PostScript. Puede utilizar este comando con otros tipos de impresoras, tales como PCL o tinta, pero en este caso, es posible que algunas opciones no est\xe9n disponibles."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(n.p,{children:["El valor de Orientation option puede modificarse en el mismo trabajo de impresi\xf3n. Note que la opci\xf3n debe haberse definido antes del comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/page-break",children:"PAGE BREAK"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([People])\n\xa0PRINT SETTINGS\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OPEN PRINTING JOB\n\xa0\xa0\xa0\xa0SET PRINT OPTION(Orientation option;1)\xa0//portrait\n\xa0\xa0\xa0\xa0Print form([People];"Vertical_Form")\n\xa0\n\xa0\xa0\xa0\xa0SET PRINT OPTION(Orientation option;2)\xa0//landscape\n\xa0\xa0\xa0\xa0PAGE BREAK\xa0//must be called imperatively AFTER the option\n\xa0\xa0\xa0\xa0Print form([People];"Horiz_Form")\n\xa0\xa0\xa0\xa0CLOSE PRINTING JOB\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si el comando ha sido ejecutado correctamente; de lo contrario, toma el valor 0."}),"\n",(0,s.jsx)(n.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,s.jsxs)(n.p,{children:["Si el valor pasado por una ",(0,s.jsx)(n.em,{children:"opci\xf3n"})," es incorrecto o si no est\xe1 disponible en la impresora, el comando devuelve un error (que puede interceptar utilizando un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),") y el valor actual de la opci\xf3n permanece sin cambios."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-print-option",children:"GET PRINT OPTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Opciones de impresi\xf3n"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-form",children:"Print form"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/print-option-values",children:"PRINT OPTION VALUES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-current-printer",children:"SET CURRENT PRINTER"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"733"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return a}});var r=i(667294);let s={},o=r.createContext(s);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);