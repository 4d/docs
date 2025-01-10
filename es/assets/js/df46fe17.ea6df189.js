"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88340"],{56028:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>t,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/print-option-values","title":"PRINT OPTION VALUES","description":"PRINT OPTION VALUES ( opcion ; arrayNoms {; info1Array {; info2Array}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/print-option-values.md","sourceDirName":"commands-legacy","slug":"/commands/print-option-values","permalink":"/docs/es/commands/print-option-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-option-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"print-option-values","title":"PRINT OPTION VALUES","slug":"/commands/print-option-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Print object","permalink":"/docs/es/commands/print-object"},"next":{"title":"PRINT RECORD","permalink":"/docs/es/commands/print-record"}}'),i=r("785893"),o=r("250065");let d={id:"print-option-values",title:"PRINT OPTION VALUES",slug:"/commands/print-option-values",displayed_sidebar:"docs"},a=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PRINT OPTION VALUES"})," ( ",(0,i.jsx)(n.em,{children:"opcion"})," ; ",(0,i.jsx)(n.em,{children:"arrayNoms"})," {; ",(0,i.jsx)(n.em,{children:"info1Array"})," {; ",(0,i.jsx)(n.em,{children:"info2Array"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"opcion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de opci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrayNoms"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Nombres de los valores"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"info1Array"}),(0,i.jsx)(n.td,{children:"Integer array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Valores (1) de la opci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"info2Array"}),(0,i.jsx)(n.td,{children:"Integer array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Valores (2) de la opci\xf3n"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"PRINT OPTION VALUES"})," devuelve en ",(0,i.jsx)(n.em,{children:"arrayNoms"})," una lista de nombres disponibles para la ",(0,i.jsx)(n.em,{children:"opcion"})," de impresi\xf3n definida. Opcionalmente, puede recuperar la informaci\xf3n adicional para cada nombre en ",(0,i.jsx)(n.em,{children:"info1Array"})," y ",(0,i.jsx)(n.em,{children:"info2Array"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," el comando ",(0,i.jsx)(n.strong,{children:"PRINT OPTION VALUES"})," s\xf3lo funciona con impresoras PostScript."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"opcion"})," le permite especificar los valores a obtener. Debe pasar una de las siguientes constantes del tema \u201C",(0,i.jsx)(n.em,{children:"Opciones de impresi\xf3n"}),"\u201D:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Paper option"}),"\n",(0,i.jsx)(n.li,{children:"Paper source option"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.em,{children:"option"})," = Paper option (1)"]})}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa Paper option en el par\xe1metro ",(0,i.jsx)(n.em,{children:"opcion"}),", el comando devolver\xe1 la siguiente informaci\xf3n:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["en ",(0,i.jsx)(n.em,{children:"nomsArray"}),", los nombres de los formatos de papel disponibles;"]}),"\n",(0,i.jsxs)(n.li,{children:["en ",(0,i.jsx)(n.em,{children:"info1Array"}),", las alturas de cada formato de papel;"]}),"\n",(0,i.jsxs)(n.li,{children:["en ",(0,i.jsx)(n.em,{children:"info2Array"}),", los largos de cada formato de papel."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," para obtener esta informaci\xf3n, el driver de impresi\xf3n debe tener acceso a un archivo (PostScript Printer Description) v\xe1lido de la impresora."]}),"\n",(0,i.jsxs)(n.p,{children:["Para aplicar un formato de papel espec\xedfico utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-print-option",children:"SET PRINT OPTION"}),", puede pasar uno de los valores de ",(0,i.jsx)(n.em,{children:"nomsArray"}),", los valores correspondientes de ",(0,i.jsx)(n.em,{children:"info1Array"})," e ",(0,i.jsx)(n.em,{children:"info2Array"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.em,{children:"option"})," = Paper source option (5)"]})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," esta opci\xf3n s\xf3lo puede ser utilizada en Windows."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa Paper source option en el par\xe1metro ",(0,i.jsx)(n.em,{children:"opcion"}),", el comando devuelve los nombres de las diferentes bandejas disponibles en ",(0,i.jsx)(n.em,{children:"nomsArray"})," y sus n\xfameros Windows ID internos en ",(0,i.jsx)(n.em,{children:"info1Array"})," (",(0,i.jsx)(n.em,{children:"info2Array"})," permanece vac\xedo). El orden de los valores en los arrays est\xe1 definido por el driver de impresi\xf3n. Para indicar una bandeja utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-print-option",children:"SET PRINT OPTION"}),", debe pasar el \xedndice del elemento que desea en el array ",(0,i.jsx)(n.em,{children:"nomsArray"})," o ",(0,i.jsx)(n.em,{children:"info1Array"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Para mayor informaci\xf3n sobre las diferentes opciones de impresi\xf3n, consulte la descripci\xf3n de los comandos ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-print-option",children:"SET PRINT OPTION"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/commands/get-print-option",children:"GET PRINT OPTION"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Toda la informaci\xf3n devuelta por estos comandos es suministrada por el sistema operativo. Consulte la documentaci\xf3n de su sistema para m\xe1s detalles sobre opciones espec\xedficas."}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/get-print-option",children:"GET PRINT OPTION"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-print-option",children:"SET PRINT OPTION"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"785"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var s=r(667294);let i={},o=s.createContext(i);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);