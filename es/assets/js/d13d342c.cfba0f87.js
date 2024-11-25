"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24148"],{920841:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"Events/onAfterKeystroke","title":"On After Keystroke","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                  | Definici\xf3n                                                                                                                                                                                |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Events/onAfterKeystroke.md","sourceDirName":"Events","slug":"/Events/onAfterKeystroke","permalink":"/docs/es/20-R6/Events/onAfterKeystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterKeystroke.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onAfterKeystroke","title":"On After Keystroke"},"sidebar":"docs","previous":{"title":"On After Edit","permalink":"/docs/es/20-R6/Events/onAfterEdit"},"next":{"title":"On After Sort","permalink":"/docs/es/20-R6/Events/onAfterSort"}}'),o=s("785893"),r=s("250065");let d={id:"onAfterKeystroke",title:"On After Keystroke"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Secuencia de tecla",id:"secuencia-de-tecla",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Code"}),(0,o.jsx)(n.th,{children:"Puede ser llamado por"}),(0,o.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"28"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/FormObjects/comboBoxOverview",children:"Combo Box"})," - Formulario - ",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/FormObjects/inputOverview",children:"Entrada"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/FormObjects/listboxOverview#list-box-columns",children:"Columna de list Box"})]}),(0,o.jsxs)(n.td,{children:["Un personaje est\xe1 a punto de ser introducido en el objeto que tiene el foco. ",(0,o.jsx)(n.code,{children:"Get edited text"})," devuelve el texto del objeto ",(0,o.jsx)(n.strong,{children:"incluyendo"})," este caracter."]})]})})]}),"\n",(0,o.jsxs)(n.details,{children:[(0,o.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Lanzamiento"}),(0,o.jsx)(n.th,{children:"Modificaciones"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"18 R5"}),(0,o.jsx)(n.td,{children:"- Soporte en list boxes no editables - El evento se activa ahora despu\xe9s de la validaci\xf3n IME"})]})})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["El evento ",(0,o.jsx)(n.code,{children:"On After Keystroke"})," generalmente puede ser reemplazado por el evento ",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/Events/onAfterEdit",children:(0,o.jsx)(n.code,{children:"On After Edit"})})," (ver abajo)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Despu\xe9s de haber seleccionado las propiedades ",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/Events/onBeforeKeystroke",children:(0,o.jsx)(n.code,{children:"On Before Keystroke"})})," y ",(0,o.jsx)(n.code,{children:"On After Keystroke"})," para un objeto, puede detectar y manejar las pulsaciones de teclas dentro del objeto, utilizando el comando ",(0,o.jsx)(n.code,{children:"FORM event"})," que devolver\xe1 ",(0,o.jsx)(n.code,{children:"On Before Keystroke"})," y luego ",(0,o.jsx)(n.code,{children:"On After Keystroke"})," (para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,o.jsx)(n.code,{children:"Get edited text"}),")."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Estos eventos tambi\xe9n son activados por comandos del lenguaje que simulan una acci\xf3n del usuario como ",(0,o.jsx)(n.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["El evento ",(0,o.jsx)(n.code,{children:"On After Keystroke"})," no se genera:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["en el m\xe9todo ",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/FormObjects/listboxOverview#list-box-columns",children:"de las columnas de list box"})," excepto cuando se est\xe1 editando una celda (sin embargo se genera en cualquier caso en el m\xe9todo de ",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/FormObjects/listboxOverview",children:"list box"}),"),"]}),"\n",(0,o.jsxs)(n.li,{children:["cuando las modificaciones usuario no se realizan con el teclado (pegar, arrastrar y soltar, casilla de verificaci\xf3n, lista desplegable, combo box). Para procesar estos eventos, debe utilizar ",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/Events/onAfterEdit",children:(0,o.jsx)(n.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"secuencia-de-tecla",children:"Secuencia de tecla"}),"\n",(0,o.jsxs)(n.p,{children:["Cuando una entrada requiere una secuencia de presiones de teclas, los eventos ",(0,o.jsx)(n.a,{href:"/docs/es/20-R6/Events/onBeforeKeystroke",children:(0,o.jsx)(n.code,{children:"On Before Keystroke"})})," y [",(0,o.jsx)(n.code,{children:"On After Keystroke event"}),"] se generan s\xf3lo cuando la entrada es completamente validada por el usuario. El comando ",(0,o.jsx)(n.code,{children:"Keystroke"})," devuelve el car\xe1cter validado. Este caso se da principalmente:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'cuando se utilizan las teclas "muertas" como ^ o ~: los eventos se generan s\xf3lo cuando se introduce el car\xe1cter extendido eventualmente (por ejemplo, "\xea" o \xf1),'}),"\n",(0,o.jsx)(n.li,{children:"cuando un IME (Input Code Editor) muestra una caja de di\xe1logo intermedia en la que el usuario puede introducir una combinaci\xf3n de caracteres: los eventos se generan s\xf3lo cuando el di\xe1logo IME se valida."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20-R6/Events/onBeforeKeystroke",children:"On Before Keystroke"}),"."]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let o={},r=t.createContext(o);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);