"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93421"],{368549:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>o});var a=JSON.parse('{"id":"commands-legacy/set-window-title","title":"SET WINDOW TITLE","description":"SET WINDOW TITLE ( titulo {; ventana} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-window-title.md","sourceDirName":"commands-legacy","slug":"/commands/set-window-title","permalink":"/docs/es/20-R7/commands/set-window-title","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-window-title.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-window-title","title":"SET WINDOW TITLE","slug":"/commands/set-window-title","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET WINDOW RECT","permalink":"/docs/es/20-R7/commands/set-window-rect"},"next":{"title":"SHOW TOOL BAR","permalink":"/docs/es/20-R7/commands/show-tool-bar"}}'),s=t("785893"),r=t("250065");let i={id:"set-window-title",title:"SET WINDOW TITLE",slug:"/commands/set-window-title",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET WINDOW TITLE"})," ( ",(0,s.jsx)(n.em,{children:"titulo"})," {; ",(0,s.jsx)(n.em,{children:"ventana"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"titulo"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"T\xedtulo de la ventana"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ventana"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia de ventana o Ventana del primer plano del proceso actual si se omite el par\xe1metro"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando SET WINDOW TITLE cambia el t\xedtulo de la ventana cuyo n\xfamero de referencia se pasa en ",(0,s.jsx)(n.em,{children:"ventana"})," para el texto pasado en ",(0,s.jsx)(n.em,{children:"titulo"})," (longitud m\xe1xima 80 caracteres)."]}),"\n",(0,s.jsx)(n.p,{children:"Si la ventana no existe, SET WINDOW TITLE no hace nada."}),"\n",(0,s.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"ventana"}),", SET WINDOW TITLE reemplaza el t\xedtulo de la ventana del primer plano del proceso actual."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," en el entorno Dise\xf1o, 4D define autom\xe1ticamente los t\xedtulos de las ventanas, por ejemplo, \u201CEntrada para tabla 1\u201D cuando realiza una entrada de datos. Si cambia un t\xedtulo de ventana, es probable que 4D lo sobrescriba. Por otra parte, en el entorno Aplicaci\xf3n, 4D no cambia los t\xedtulos de las ventanas."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Mientras efect\xfaa una entrada de datos en un formulario, usted hace clic en un bot\xf3n que ejecuta una operaci\xf3n larga (por ejemplo, una modificaci\xf3n por programaci\xf3n de los registros relacionados mostrados en un subformulario). Puede mantenerse informado sobre el progreso de la operaci\xf3n utilizando el t\xedtulo de la ventana actual:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto del bot\xf3n bAnalisis\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0// Guardar el t\xedtulo actual de la ventana en una variable\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTituloActual:=Get window title\n\xa0\xa0// Iniciar la operaci\xf3n larga\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FIRST RECORD([Lineas factura])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlRegistro;1;Records in selection([Lineas factura]))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0HACER ALGO\n\xa0\xa0// Mostrar el progreso\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW TITLE("Procesando la l\xednea #"+String($vlRegistro))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Restaurar el t\xedtulo original de la ventana\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW TITLE($vsTituloActual)\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-window-title",children:"Get window title"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"213"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(667294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);