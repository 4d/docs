"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13164"],{228106:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/form-set-vertical-resizing","title":"FORM SET VERTICAL RESIZING","description":"FORM SET VERTICAL RESIZING ( redimension {; alturaMin {; alturaMax}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/form-set-vertical-resizing.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-vertical-resizing","permalink":"/docs/es/commands/form-set-vertical-resizing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-vertical-resizing.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"form-set-vertical-resizing","title":"FORM SET VERTICAL RESIZING","slug":"/commands/form-set-vertical-resizing","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET SIZE","permalink":"/docs/es/commands/form-set-size"},"next":{"title":"FORM UNLOAD","permalink":"/docs/es/commands/form-unload"}}'),i=r("785893"),a=r("250065");let l={id:"form-set-vertical-resizing",title:"FORM SET VERTICAL RESIZING",slug:"/commands/form-set-vertical-resizing",displayed_sidebar:"docs"},t=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FORM SET VERTICAL RESIZING"})," ( ",(0,i.jsx)(n.em,{children:"redimension"})," {; ",(0,i.jsx)(n.em,{children:"alturaMin"})," {; ",(0,i.jsx)(n.em,{children:"alturaMax"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"redimension"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"True: el formulario es redimensionable verticalmente False: el formulario no puede ser redimensionado verticalmente"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"alturaMin"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Altura m\xednima del formulario (p\xedxeles)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"alturaMax"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Altura m\xe1xima del formulario (p\xedxeles)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"El comando FORM SET VERTICAL RESIZING le permite modificar por programaci\xf3n las propiedades de redimensionamiento vertical del formulario actual. Por defecto, estas propiedades son definidas en el editor de formularios en el entorno Dise\xf1o. Las nuevas propiedades son definidas para el proceso actual; no son almacenadas con el formulario."}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"redimension"})," le permite definir si el formulario puede redimensionarse verticalmente; en otras palabras, si la altura es modificable (manualmente por el usuario o por programaci\xf3n)."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa ",(0,i.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"}),", la altura del formulario puede ser modificada por el usuario; 4D utiliza como marcadores los valores pasados en ",(0,i.jsx)(n.em,{children:"alturaMin"})," y ",(0,i.jsx)(n.em,{children:"altura"}),"Max."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa ",(0,i.jsx)(n.a,{href:"/docs/es/commands/false",title:"False",children:"False"}),", no se puede modificar el largo del formulario actual; en este caso, no hay necesidad de pasar valores en los par\xe1metros ",(0,i.jsx)(n.em,{children:"alturaMin"})," y ",(0,i.jsx)(n.em,{children:"altura"}),"Max."]}),"\n",(0,i.jsxs)(n.p,{children:["Si ha pasado ",(0,i.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"})," en el primer par\xe1metro, puede pasar en los par\xe1metros opcionales ",(0,i.jsx)(n.em,{children:"alturaMin"})," y ",(0,i.jsx)(n.em,{children:"altura"}),"Max las nuevas alturas, m\xednimas y m\xe1ximas, del formulario (en p\xedxeles). Si omite estos par\xe1metros se utilizan los valores definidos en el entorno Dise\xf1o (si los hay)."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/form-set-size",title:"FORM SET SIZE",children:"FORM SET SIZE"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/form-get-vertical-resizing",children:"FORM GET VERTICAL RESIZING"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/form-set-horizontal-resizing",children:"FORM SET HORIZONTAL RESIZING"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/form-set-size",children:"FORM SET SIZE"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"893"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return l}});var s=r(667294);let i={},a=s.createContext(i);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);