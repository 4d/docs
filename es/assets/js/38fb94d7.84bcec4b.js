"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73188"],{438560:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"commands-legacy/set-window-rect","title":"SET WINDOW RECT","description":"SET WINDOW RECT ( izquierda ; superior ; derecha ; inferior {; ventana}{; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-window-rect.md","sourceDirName":"commands-legacy","slug":"/commands/set-window-rect","permalink":"/docs/es/commands/set-window-rect","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-window-rect.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-window-rect","title":"SET WINDOW RECT","slug":"/commands/set-window-rect","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET WINDOW DOCUMENT ICON","permalink":"/docs/es/commands/set-window-document-icon"},"next":{"title":"SET WINDOW TITLE","permalink":"/docs/es/commands/set-window-title"}}'),s=d("785893"),r=d("250065");let i={id:"set-window-rect",title:"SET WINDOW RECT",slug:"/commands/set-window-rect",displayed_sidebar:"docs"},o=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET WINDOW RECT"})," ( ",(0,s.jsx)(n.em,{children:"izquierda"})," ; ",(0,s.jsx)(n.em,{children:"superior"})," ; ",(0,s.jsx)(n.em,{children:"derecha"})," ; ",(0,s.jsx)(n.em,{children:"inferior"})," {; ",(0,s.jsx)(n.em,{children:"ventana"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"izquierda"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Coordenada global izquierda del interior de la ventana"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"superior"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Coordenada global superior del interior de la ventana"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"derecha"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Coordenada global derecha del interior de la ventana"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inferior"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Coordenada global inferior del interior de la ventana"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ventana"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia de la ventana o ventana del primer plano del proceso si se omite este par\xe1metro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Si se omite (por defecto) = cambiar ventana al fondo",(0,s.jsx)(n.br,{}),"Si se pasa = no cambiar el nivel de la ventana"]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"SET WINDOW RECT"})," cambia las coordenadas globales de la ventana cuyo n\xfamero de referencia se pasa en ",(0,s.jsx)(n.em,{children:"ventana"}),". Si la ventana no existe, el comando no hace nada."]}),"\n",(0,s.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"ventana"}),", SET WINDOW RECT se aplica a la ventana del primer plano del proceso actual."]}),"\n",(0,s.jsx)(n.p,{children:"Este comando puede redimensionar y mover la ventana, dependiendo de las nuevas coordenadas que se pasen."}),"\n",(0,s.jsx)(n.p,{children:"Las coordenadas deben ser expresadas con relaci\xf3n a la esquina superior izquierda del \xe1rea de contenido de la ventana de la aplicaci\xf3n (modo Windows MDI) o de la pantalla principal (mac OS y modo Windows MDI). Las coordenadas indican el rect\xe1ngulo correspondiente al \xe1rea de contenido de la ventana (excluyendo las barras de t\xedtulos y los bordes)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Advertencia:"})," utilice este comando con precauci\xf3n, podr\xeda mover una ventana m\xe1s all\xe1 de los l\xedmites de la ventana principal (en Windows) o de la pantalla (en Macintosh). Para evitar esto, utilice comandos como ",(0,s.jsx)(n.a,{href:"/docs/es/commands/screen-width",children:"Screen width"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/commands/screen-height",children:"Screen height"})," para verificar las nuevas coordenadas de la ventana."]}),"\n",(0,s.jsxs)(n.p,{children:["Por defecto, la ejecuci\xf3n de este comando pasa al primer plano la ventana designada por el par\xe1metro ",(0,s.jsx)(n.em,{children:"ventana"})," (si se utiliza este par\xe1metro). Puede desactivar este funcionamiento pasando ",(0,s.jsx)(n.em,{children:"*"}),' como \xfaltimo par\xe1metro. En este caso, el comando no modifica el nivel original de la ventana (coordenada "z").']}),"\n",(0,s.jsxs)(n.p,{children:["Este comando no afecta los objetos de formulario. Si la ventana contiene un formulario, los objetos del formulario no se mueven o redimensionan por el comando (sin importar sus propiedades). S\xf3lo se modifica la ventana. Para modificar una ventana de formulario teniendo en cuenta sus propiedades de redimensionamiento y los objetos que contiene, debe utilizar el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/resize-form-window",children:"RESIZE FORM WINDOW"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/window-list",title:"WINDOW LIST",children:"WINDOW LIST"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Dada la siguiente ventana:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(316043).Z+"",width:"401",height:"351"})}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de la siguiente l\xednea:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET WINDOW RECT(100;100;300;300)\n"})}),"\n",(0,s.jsx)(n.p,{children:"La ventana aparece de esta forma:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(762490).Z+"",width:"216",height:"236"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/convert-coordinates",children:"CONVERT COORDINATES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/drag-window",children:"DRAG WINDOW"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/resize-form-window",children:"RESIZE FORM WINDOW"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"444"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},316043:function(e,n,d){d.d(n,{Z:function(){return a}});let a=d.p+"assets/images/pict39568.es-ea712744af9ac4fec50d1b9a2ec3c22f.png"},762490:function(e,n,d){d.d(n,{Z:function(){return a}});let a=d.p+"assets/images/pict39569.es-bf8748a73e43663f31e663794d6bb61e.png"},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return i}});var a=d(667294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);