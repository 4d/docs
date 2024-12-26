"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40374"],{993258:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>o,toc:()=>l,frontMatter:()=>t});var s=JSON.parse('{"id":"commands-legacy/set-current-printer","title":"SET CURRENT PRINTER","description":"SET CURRENT PRINTER ( nomImpr )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-current-printer.md","sourceDirName":"commands-legacy","slug":"/commands/set-current-printer","permalink":"/docs/es/commands/set-current-printer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-current-printer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-current-printer","title":"SET CURRENT PRINTER","slug":"/commands/set-current-printer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Printing page","permalink":"/docs/es/commands/printing-page"},"next":{"title":"SET PRINT MARKER","permalink":"/docs/es/commands/set-print-marker"}}'),i=r("785893"),a=r("250065");let t={id:"set-current-printer",title:"SET CURRENT PRINTER",slug:"/commands/set-current-printer",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET CURRENT PRINTER"})," ( ",(0,i.jsx)(n.em,{children:"nomImpr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nomImpr"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de la impresora a utilizar"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"SET CURRENT PRINTER"})," designa la impresora a utilizar para imprimir con la aplicaci\xf3n 4D actual."]}),"\n",(0,i.jsxs)(n.p,{children:["Pase el nombre de la impresora a seleccionar en el par\xe1metro ",(0,i.jsx)(n.em,{children:"nomImpr"}),". Para obtener una lista de impresoras disponibles, utilice de antemano el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/printers-list",children:"PRINTERS LIST"}),". Si pasa una cadena vac\xeda en ",(0,i.jsx)(n.em,{children:"nomImpr"}),", se utilizar\xe1 la impresora actual definida en el sistema."]}),"\n",(0,i.jsxs)(n.p,{children:["Tambi\xe9n puede designar la impresora PDF gen\xe9rica autom\xe1ticamente, independientemente de la plataforma, pasando la siguiente constante que se encuentra en el tema ",(0,i.jsx)(n.em,{children:"Opciones de impresi\xf3n"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Generic PDF driver"}),(0,i.jsx)(n.td,{children:"_4d_pdf_printer"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," esta funcionalidad no est\xe1 disponible en las versiones 32 bits de 4D.",(0,i.jsx)(n.br,{}),"En OS X, declara el driver predeterminado como impresora actual. Este driver no es visible y no est\xe1 en la lista devuelta por el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/printers-list",children:"PRINTERS LIST"}),". la ruta de acceso al documento PDF se debe definir utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-print-option",children:"SET PRINT OPTION"}),', si no, se devuelve el error 3107.En Windows, declara el driver PDF de Windows (llamado "Microsoft Print to PDF") como impresora actual. Esta constante est\xe1 disponible en Windows 10 \xfanicamente, cuando est\xe1 instalada la opci\xf3n PDF. Con otras versiones de Windows, o cuando no hay ning\xfan driver PDF disponible, el comando no hace nada y la variable ',(0,i.jsx)(n.em,{children:"OK"})," toma el valor 0."]})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"SET CURRENT PRINTER"})," debe llamarse antes de ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-print-option",children:"SET PRINT OPTION"}),", de manera que las opciones disponibles correspondan a la impresora seleccionada. Por otra parte, ",(0,i.jsx)(n.strong,{children:"SET CURRENT PRINTER"})," debe llamarse despu\xe9s de ",(0,i.jsx)(n.em,{children:"_o_PAGE SETUP"}),", de lo contrario los par\xe1metros de la impresora se pierden."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando puede utilizarse con los comandos ",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-record",children:"PRINT RECORD"}),", ",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-form",children:"Print form"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/commands/qr-report",children:"QR REPORT"}),", y se aplica a todas las impresiones de 4D, incluyendo en el modo Dise\xf1o.",(0,i.jsx)(n.br,{}),"\nLos comandos de impresi\xf3n deben llamarse obligatoriamente con el par\xe1metro ",(0,i.jsx)(n.em,{children:">"})," (donde sea pertinente) de manera que los par\xe1metros especificados no se pierdan."]}),"\n",(0,i.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,i.jsx)(n.p,{children:"Si la selecci\xf3n de impresora se lleva a cabo correctamente, la variable sistema OK toma el valor 1. Si ocurre lo contrario (por ejemplo si no se encuentra la impresora designada), la variable sistema OK toma el valor 0 y la impresora actual permanece sin cambios."}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Creaci\xf3n de un documento PDF bajo Windows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $pdfpath : Text\n\xa0$pdfpath:=System folder(Desktop)+"test.pdf"\n\xa0SET CURRENT PRINTER(Generic PDF driver)\n\xa0SET PRINT OPTION(Destination option;3;$pdfpath)\n\xa0ALL RECORDS([Table_1])\n\xa0PRINT SELECTION([Table_1];*)\n\xa0SET CURRENT PRINTER("")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/get-current-printer",children:"Get current printer"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/printers-list",children:"PRINTERS LIST"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"787"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return t}});var s=r(667294);let i={},a=s.createContext(i);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);