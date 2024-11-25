"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42163"],{151763:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>a,frontMatter:()=>i});var o=JSON.parse('{"id":"Events/onBeforeKeystroke","title":"On Before Keystroke","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                  | Definici\xf3n                                                                                                                                                                         |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Events/onBeforeKeystroke.md","sourceDirName":"Events","slug":"/Events/onBeforeKeystroke","permalink":"/docs/es/Events/onBeforeKeystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeforeKeystroke.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onBeforeKeystroke","title":"On Before Keystroke"},"sidebar":"docs","previous":{"title":"On Before Data Entry","permalink":"/docs/es/Events/onBeforeDataEntry"},"next":{"title":"On Begin Drag Over","permalink":"/docs/es/Events/onBeginDragOver"}}'),t=s("785893"),r=s("250065");let i={id:"onBeforeKeystroke",title:"On Before Keystroke"},d=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Objetos no editables",id:"objetos-no-editables",level:3},{value:"Secuencia de tecla",id:"secuencia-de-tecla",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Puede ser llamado por"}),(0,t.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Combo Box"})," - Formulario - ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-columns",children:"Columna de list Box"})]}),(0,t.jsxs)(n.td,{children:["Un personaje est\xe1 a punto de ser introducido en el objeto que tiene el foco. ",(0,t.jsx)(n.code,{children:"Get edited text"})," devuelve el texto del objeto ",(0,t.jsx)(n.strong,{children:"sin"})," este car\xe1cter."]})]})})]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Lanzamiento"}),(0,t.jsx)(n.th,{children:"Modificaciones"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R5"}),(0,t.jsx)(n.td,{children:"- Soporte en list boxes no editables - El evento se activa ahora despu\xe9s de la validaci\xf3n IME"})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["Despu\xe9s de que se seleccionen los eventos ",(0,t.jsx)(n.code,{children:"On Before Keystroke"})," y ",(0,t.jsx)(n.a,{href:"/docs/es/Events/onAfterKeystroke",children:(0,t.jsx)(n.code,{children:"On After Keystroke"})})," para un objeto, puede detectar y manejar las pulsaciones de teclas dentro del objeto, utilizando el comando ",(0,t.jsx)(n.code,{children:"Form event code"})," que devolver\xe1 ",(0,t.jsx)(n.code,{children:"On Before Keystroke"})," y luego ",(0,t.jsx)(n.a,{href:"/docs/es/Events/onAfterKeystroke",children:(0,t.jsx)(n.code,{children:"On After Keystroke"})})," (para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,t.jsx)(n.code,{children:"Get edited text"}),"). En el evento ",(0,t.jsx)(n.code,{children:"On Before Keystroke"}),", se puede utilizar el comando ",(0,t.jsx)(n.code,{children:"FILTER KEYSTROKE"})," para filtrar los caracteres digitados."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Estos eventos tambi\xe9n son activados por comandos del lenguaje que simulan una acci\xf3n del usuario como ",(0,t.jsx)(n.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["El evento ",(0,t.jsx)(n.code,{children:"On Before Keystroke"})," no se genera:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["en un m\xe9todo ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-columns",children:"columnas de list box"})," excepto cuando se est\xe1 editando una celda (sin embargo se genera en cualquier caso en el m\xe9todo de ",(0,t.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview",children:"list box"}),"),"]}),"\n",(0,t.jsxs)(n.li,{children:["cuando las modificaciones usuario no se realizan con el teclado (pegar, arrastrar y soltar, casilla de verificaci\xf3n, lista desplegable, combo box). Para procesar estos eventos, debe utilizar ",(0,t.jsx)(n.a,{href:"/docs/es/Events/onAfterEdit",children:(0,t.jsx)(n.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"objetos-no-editables",children:"Objetos no editables"}),"\n",(0,t.jsxs)(n.p,{children:["El evento ",(0,t.jsx)(n.code,{children:"On Before Keystroke"})," puede generarse en objetos no introducibles, por ejemplo, en un list box aunque las celdas del list box no sean introducibles, o las l\xedneas no sean seleccionables. Esto permite crear interfaces en las que el usuario puede desplazarse din\xe1micamente a una l\xednea espec\xedfica en un list box introduciendo las primeras letras de un valor. En el caso de que las celdas del cuadro del list box sean editables, puede utilizar el comando ",(0,t.jsx)(n.code,{children:"Is editing text"})," para saber si el usuario est\xe1 realmente introduciendo texto en una celda o est\xe1 utilizando la funci\xf3n de tecleo predictivo y entonces, ejecuta"]}),"\n",(0,t.jsx)(n.h3,{id:"secuencia-de-tecla",children:"Secuencia de tecla"}),"\n",(0,t.jsxs)(n.p,{children:["Cuando una entrada requiere una secuencia de pulsaciones de teclas, los eventos ",(0,t.jsx)(n.code,{children:"On Before Keystroke"})," y ",(0,t.jsx)(n.a,{href:"/docs/es/Events/onAfterKeystroke",children:(0,t.jsx)(n.code,{children:"On After Keystroke"})})," se generan solo cuando la entrada es completamente validada por el usuario. El comando ",(0,t.jsx)(n.code,{children:"Keystroke"})," devuelve el car\xe1cter validado. Este caso se da principalmente:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'cuando se utilizan las teclas "muertas" como ^ o ~: los eventos se generan s\xf3lo cuando se introduce el car\xe1cter extendido eventualmente (por ejemplo, "\xea" o \xf1),'}),"\n",(0,t.jsx)(n.li,{children:"cuando un IME (Input Code Editor) muestra una caja de di\xe1logo intermedia en la que el usuario puede introducir una combinaci\xf3n de caracteres: los eventos se generan s\xf3lo cuando el di\xe1logo IME se valida."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/Events/onAfterKeystroke",children:"On After Keystroke"}),"."]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var o=s(667294);let t={},r=o.createContext(t);function i(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);