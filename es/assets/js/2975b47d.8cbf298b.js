"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94057"],{905294:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>o,metadata:()=>n,assets:()=>t,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/printers-list","title":"PRINTERS LIST","description":"PRINTERS LIST ( arrayNoms {; arrayNomsAlt {; arrayModelos}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/printers-list.md","sourceDirName":"commands-legacy","slug":"/commands/printers-list","permalink":"/docs/es/20-R7/commands/printers-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprinters-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"printers-list","title":"PRINTERS LIST","slug":"/commands/printers-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Print settings to BLOB","permalink":"/docs/es/20-R7/commands/print-settings-to-blob"},"next":{"title":"Printing page","permalink":"/docs/es/20-R7/commands/printing-page"}}'),a=r("785893"),i=r("250065");let o={id:"printers-list",title:"PRINTERS LIST",slug:"/commands/printers-list",displayed_sidebar:"docs"},d=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let s={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"PRINTERS LIST"})," ( ",(0,a.jsx)(s.em,{children:"arrayNoms"})," {; ",(0,a.jsx)(s.em,{children:"arrayNomsAlt"})," {; ",(0,a.jsx)(s.em,{children:"arrayModelos"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Par\xe1metro"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"arrayNoms"}),(0,a.jsx)(s.td,{children:"Text array"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Nombres de las impresoras"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"arrayNomsAlt"}),(0,a.jsx)(s.td,{children:"Text array"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Windows: Ubicaci\xf3n de las impresoras macOS: Nombres personalizados de las impresoras"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"arrayModelos"}),(0,a.jsx)(s.td,{children:"Text array"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Modelos de impresoras"})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(s.p,{children:["El comando ",(0,a.jsx)(s.strong,{children:"PRINTERS LIST"})," llena el (los) array(s) pasados como par\xe1metro(s) con los nombres y opcionalmente con la ubicaci\xf3n o nombres personalizados y los modelos de impresi\xf3n disponibles para el equipo."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Nota:"})," si las impresoras se manejan utilizando un servidor de impresi\xf3n (spooler), se devuelve la ruta de acceso completa (bajo Windows) o el nombre del spooler (bajo macOS)."]}),"\n",(0,a.jsxs)(s.p,{children:["Pase en el par\xe1metro ",(0,a.jsx)(s.em,{children:"arrayNoms"})," el nombre de un array de texto. Despu\xe9s de la ejecuci\xf3n del comando, este array contendr\xe1 los nombres de las impresoras disponibles. Bajo macOS, este ser\xe1 el \u201Csistema\u201D fijo de nombres."]}),"\n",(0,a.jsxs)(s.p,{children:["Puede pasar un segundo array opcional, ",(0,a.jsx)(s.em,{children:"arrayNomsAlt"}),". El contenido de este array depender\xe1 de la plataforma:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Bajo Windows, para cada impresora, usted obtiene su ubicaci\xf3n en red (o puerto local)."}),"\n",(0,a.jsx)(s.li,{children:"Bajo macOS, para cada impresora, usted obtiene su nombre personalizado, el cual puede se modificado por el usuario. Este nombre puede utilizarse, por ejemplo, en cajas de di\xe1logos."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["El par\xe1metro opcional ",(0,a.jsx)(s.em,{children:"arrayModelos"})," permite recuperar el modelo de cada impresora."]}),"\n",(0,a.jsxs)(s.p,{children:["Utilice los comandos ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/commands/set-current-printer",children:"SET CURRENT PRINTER"})," y ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/commands/get-current-printer",children:"Get current printer"})," para modificar u obtener la impresora seleccionada en 4D. Debe pasar los nombres devueltos en el primer array (",(0,a.jsx)(s.em,{children:"arrayNoms"}),")."]}),"\n",(0,a.jsx)(s.p,{children:"Bajo Windows, el nombre de una impresora puede ser modificado manualmente al nivel del sistema de operaci\xf3n. Por otra parte, su ubicaci\xf3n y su modelo est\xe1n asociados a sus caracter\xedsticas f\xedsicas. Por lo tanto, puede utilizar los valores de array opcionales para verificar las caracter\xedsticas de la impresora seleccionada, generalmente, puede verificar que todos los equipos de los clientes utilizan la misma impresora."}),"\n",(0,a.jsx)(s.p,{children:"Bajo macOS, esta verificaci\xf3n puede llevarse a cabo utilizando el nombre de la impresora (nombre del servidor de impresi\xf3n), que es el mismo para cada equipo que est\xe1 conectado."}),"\n",(0,a.jsx)(s.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(s.p,{children:"La variable sistema OK toma el valor 1 si el comando ha sido ejecutado correctamente; de lo contrario, toma el valor 0 y los arrays se devuelven vac\xedos."}),"\n",(0,a.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/es/20-R7/commands/get-current-printer",children:"Get current printer"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/commands/set-current-printer",children:"SET CURRENT PRINTER"})]}),"\n",(0,a.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"N\xfamero de comando"}),(0,a.jsx)(s.td,{children:"789"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Hilo seguro"}),(0,a.jsx)(s.td,{children:"\u2717"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Modifica variables"}),(0,a.jsx)(s.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return o}});var n=r(667294);let a={},i=n.createContext(a);function o(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);