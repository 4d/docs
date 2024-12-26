"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77904"],{57690:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/form-set-input","title":"FORM SET INPUT","description":"FORM SET INPUT ( {tabla ;} form {; formUsuario {; *}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-set-input.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-input","permalink":"/docs/es/commands/form-set-input","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-input.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-set-input","title":"FORM SET INPUT","slug":"/commands/form-set-input","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET HORIZONTAL RESIZING","permalink":"/docs/es/commands/form-set-horizontal-resizing"},"next":{"title":"FORM SET OUTPUT","permalink":"/docs/es/commands/form-set-output"}}'),a=n("785893"),s=n("250065");let o={id:"form-set-input",title:"FORM SET INPUT",slug:"/commands/form-set-input",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let i={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"FORM SET INPUT"})," ( {",(0,a.jsx)(i.em,{children:"tabla"})," ;} ",(0,a.jsx)(i.em,{children:"form"})," {; ",(0,a.jsx)(i.em,{children:"formUsuario"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Par\xe1metro"}),(0,a.jsx)(i.th,{children:"Tipo"}),(0,a.jsx)(i.th,{}),(0,a.jsx)(i.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"tabla"}),(0,a.jsx)(i.td,{children:"Table"}),(0,a.jsx)(i.td,{children:"\u2192"}),(0,a.jsx)(i.td,{children:"Tabla para la cual definir el formulario de entrada o Tabla por defecto, si se omite"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"form"}),(0,a.jsx)(i.td,{children:"Text, Object"}),(0,a.jsx)(i.td,{children:"\u2192"}),(0,a.jsx)(i.td,{children:"Nombre del formulario a definir como formulario de entrada"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"formUsuario"}),(0,a.jsx)(i.td,{children:"Text"}),(0,a.jsx)(i.td,{children:"\u2192"}),(0,a.jsx)(i.td,{children:"Nombre del formulario usuario a utilizar"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"*"}),(0,a.jsx)(i.td,{children:"Operator"}),(0,a.jsx)(i.td,{children:"\u2192"}),(0,a.jsx)(i.td,{children:"Tama\xf1o de ventana autom\xe1tico"})]})]})]}),"\n",(0,a.jsx)(i.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(i.p,{children:["El comando FORM SET INPUT define el formulario de entrada actual de ",(0,a.jsx)(i.em,{children:"tabla"})," para ",(0,a.jsx)(i.em,{children:"form"})," o ",(0,a.jsx)(i.em,{children:"formUsuario"}),". El formulario debe pertenecer a ",(0,a.jsx)(i.em,{children:"tabla"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"El alcance de este comando es el proceso actual. Cada tabla tiene su propio formulario de entrada en cada proceso."}),"\n",(0,a.jsxs)(i.p,{children:["En el par\xe1metro ",(0,a.jsx)(i.em,{children:"nomForm"}),", puede pasar:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"el nombre de un formulario (formulario proyecto o tabla) a utilizar;"}),"\n",(0,a.jsxs)(i.li,{children:["la ruta (en sintaxis POSIX) a un archivo .json v\xe1lido que contiene una descripci\xf3n del formulario a usar. Ver ",(0,a.jsx)(i.em,{children:"Ruta de archivo del formulario"}),";"]}),"\n",(0,a.jsx)(i.li,{children:"un objeto que contiene una descripci\xf3n del formulario a utilizar."}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Nota:"})," por razones estructurales, este comando no es compatible con formularios de proyectos."]}),"\n",(0,a.jsxs)(i.p,{children:["FORM SET INPUT no muestra el formulario; s\xf3lo designa cu\xe1l formulario se utiliza para la entrada de datos, importaci\xf3n, u operaci\xf3n por otro comando. Para mayor informaci\xf3n sobre la creaci\xf3n de formularios, consulte el ",(0,a.jsx)(i.em,{children:"Manual de Dise\xf1o"})," 4D."]}),"\n",(0,a.jsx)(i.p,{children:"El formulario de entrada por defecto para cada tabla se define en la ventana del Explorador. Este formulario de entrada por defecto se utiliza si el comando FORM SET INPUT no se utiliza para especificar un formulario de entrada, o si especifica un formulario que no existe."}),"\n",(0,a.jsx)(i.p,{children:"Los formularios de entrada tambi\xe9n se utilizan autom\xe1ticamente mediante acciones est\xe1ndar como ak edit subrecord o ak add subrecord."}),"\n",(0,a.jsxs)(i.p,{children:["El par\xe1metro opcional ",(0,a.jsx)(i.em,{children:"formUsuario"})," le permite especificar un formulario usuario (proveniente de ",(0,a.jsx)(i.em,{children:"form"}),") como formulario de entrada por defecto. Si pasa un nombre de formulario usuario correcto, este formulario ser\xe1 utilizado por defecto en lugar del formulario de entrada en el proceso actual. Esto le permite tener simult\xe1neamente diferentes formularios usuarios personalizados (generados utilizando el comando ",(0,a.jsx)(i.em,{children:"_o_CREATE USER FORM"}),") y utilizar aquel que sea conveniente en funci\xf3n del contexto."]}),"\n",(0,a.jsxs)(i.p,{children:["Para mayor informaci\xf3n sobre formularios de usuario, consulte la secci\xf3n ",(0,a.jsx)(i.em,{children:"Presentaci\xf3n de los formularios de usuario"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"Los formularios de entrada son mostrados por numerosos comandos, los cuales generalmente se utilizan para permitir al usuario introducir nuevos datos o modificar datos antiguos. Los siguientes comandos muestran un formulario de entrada para entrada de datos o b\xfasquedas:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/docs/es/commands/add-record",children:"ADD RECORD"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/docs/es/commands/display-record",children:"DISPLAY RECORD"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/docs/es/commands/modify-record",children:"MODIFY RECORD"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/docs/es/commands/query-by-example",children:"QUERY BY EXAMPLE"})}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["Los comandos ",(0,a.jsx)(i.a,{href:"/docs/es/commands/display-selection",children:"DISPLAY SELECTION"})," y ",(0,a.jsx)(i.a,{href:"/docs/es/commands/modify-selection",children:"MODIFY SELECTION"})," muestran una lista de registros utilizando el formulario de salida. El usuario puede hacer doble clic en un registro en la lista y se muestra el formulario de entrada."]}),"\n",(0,a.jsxs)(i.p,{children:["Los comandos de importaci\xf3n ",(0,a.jsx)(i.a,{href:"/docs/es/commands/import-text",children:"IMPORT TEXT"}),", ",(0,a.jsx)(i.a,{href:"/docs/es/commands/import-sylk",children:"IMPORT SYLK"})," e ",(0,a.jsx)(i.a,{href:"/docs/es/commands/import-dif",children:"IMPORT DIF"})," utilizan el formulario de entrada actual para importar registros."]}),"\n",(0,a.jsxs)(i.p,{children:["El par\xe1metro opcional ",(0,a.jsx)(i.em,{children:"*"})," se utiliza en conjunto con las propiedades del formulario que defini\xf3 en la ventana de propiedades del formulario del entorno Dise\xf1o y el comando ",(0,a.jsx)(i.a,{href:"/docs/es/commands/open-window",children:"Open window"}),". El especificar el par\xe1metro * le indica a 4D que utilice las propiedades del formulario para redimensionar autom\xe1ticamente la ventana para el siguiente uso del formulario (como un formulario de entrada o como una caja de di\xe1logo). Ver mayor informaci\xf3n en ",(0,a.jsx)(i.a,{href:"/docs/es/commands/open-window",children:"Open window"}),"."]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Nota:"})," bien sea que pase el par\xe1metro opcional ",(0,a.jsx)(i.em,{children:"*"})," o no, FORM SET INPUT cambia el formulario de entrada para la tabla."]}),"\n",(0,a.jsx)(i.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(i.p,{children:"El siguiente ejemplo muestra un uso t\xedpico de FORM SET INPUT:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Empresas];"Nueva empresa")\xa0// Formulario para a\xf1adir nuevas empresas\n\xa0ADD RECORD([Empresas])\xa0// A\xf1adir una nueva empresa\n'})}),"\n",(0,a.jsx)(i.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(i.p,{children:"En una base de facturaci\xf3n que administra varias empresas, la creaci\xf3n de una factura debe efectuarse utilizando el formulario usuario correspondiente:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(empresa="4D SAS")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET INPUT([Facturas];"Entrada";"4D_SAS")\n\xa0\xa0\xa0\xa0:(empresa="4D Inc")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET INPUT([Facturas];"Entrada";"4D_Inc")\n\xa0\xa0\xa0\xa0:(empresa="Acme")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET INPUT([Facturas];"Entrada";"ACME")\n\xa0End case\n\xa0ADD RECORD([Facturas])\n'})}),"\n",(0,a.jsx)(i.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,a.jsx)(i.p,{children:"Los siguientes ejemplos usan la ruta a un formulario .json para ingresar los registros en una lista de empleados:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Personnel];"/RESOURCES/PersonnelForm.json")\n\xa0ADD RECORD([Personnel])\n'})}),"\n",(0,a.jsx)(i.p,{children:"que devuelve:"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:n(546546).Z+"",width:"387",height:"277"})}),"\n",(0,a.jsx)(i.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"/docs/es/commands/add-record",children:"ADD RECORD"}),(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.a,{href:"/docs/es/commands/display-record",children:"DISPLAY RECORD"}),(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.a,{href:"/docs/es/commands/display-selection",children:"DISPLAY SELECTION"}),(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.a,{href:"/docs/es/commands/form-set-output",children:"FORM SET OUTPUT"}),(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.a,{href:"/docs/es/commands/import-dif",children:"IMPORT DIF"}),(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.a,{href:"/docs/es/commands/import-sylk",children:"IMPORT SYLK"}),(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.a,{href:"/docs/es/commands/import-text",children:"IMPORT TEXT"}),(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.a,{href:"/docs/es/commands/modify-record",children:"MODIFY RECORD"}),(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.a,{href:"/docs/es/commands/modify-selection",children:"MODIFY SELECTION"}),(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.a,{href:"/docs/es/commands/open-window",children:"Open window"}),(0,a.jsx)(i.br,{}),"\n",(0,a.jsx)(i.a,{href:"/docs/es/commands/query-by-example",children:"QUERY BY EXAMPLE"})]}),"\n",(0,a.jsx)(i.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{}),(0,a.jsx)(i.th,{})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"N\xfamero de comando"}),(0,a.jsx)(i.td,{children:"55"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Hilo seguro"}),(0,a.jsx)(i.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},546546:function(e,i,n){n.d(i,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,i,n){n.d(i,{Z:function(){return d},a:function(){return o}});var r=n(667294);let a={},s=r.createContext(a);function o(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);