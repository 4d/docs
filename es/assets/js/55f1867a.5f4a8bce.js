"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24969"],{350427:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>i,assets:()=>t,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/resize-form-window","title":"RESIZE FORM WINDOW","description":"RESIZE FORM WINDOW ( ancho ; alto )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/resize-form-window.md","sourceDirName":"commands-legacy","slug":"/commands/resize-form-window","permalink":"/docs/es/20-R8/commands/resize-form-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresize-form-window.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"resize-form-window","title":"RESIZE FORM WINDOW","slug":"/commands/resize-form-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REDUCE RESTORE WINDOW","permalink":"/docs/es/20-R8/commands/reduce-restore-window"},"next":{"title":"SET WINDOW DOCUMENT ICON","permalink":"/docs/es/20-R8/commands/set-window-document-icon"}}'),r=a("785893"),o=a("250065");let s={id:"resize-form-window",title:"RESIZE FORM WINDOW",slug:"/commands/resize-form-window",displayed_sidebar:"docs"},d=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RESIZE FORM WINDOW"})," ( ",(0,r.jsx)(n.em,{children:"ancho"})," ; ",(0,r.jsx)(n.em,{children:"alto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ancho"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"P\xedxeles a a\xf1adir o eliminar del ancho actual de la ventana formulario"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"alto"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"P\xedxeles a a\xf1adir o eliminar del largo actual de la ventana formulario"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"El comando RESIZE FORM WINDOW  permite modificar el tama\xf1o de la ventana del formulario actual."}),"\n",(0,r.jsxs)(n.p,{children:["Pase el n\xfamero de p\xedxeles que quiere a\xf1adir al tama\xf1o de la ventana actual en los par\xe1metros ",(0,r.jsx)(n.em,{children:"ancho"}),(0,r.jsx)(n.br,{}),"\ny ",(0,r.jsx)(n.em,{children:"alto"}),". Pase 0 en el par\xe1metro que no quiera modificar. Para reducir el tama\xf1o, pase un valor negativo en los par\xe1metros ",(0,r.jsx)(n.em,{children:"ancho"})," y ",(0,r.jsx)(n.em,{children:"alto"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Este comando produce exactamente el mismo resultado que un redimensionamiento manual utilizando la casilla de redimensionamiento (si el tipo de ventana lo permite). Por consiguiente, el comando tiene en cuenta las propiedades de redimensionamiento de los objetos y las limitaciones de tama\xf1o definidas en las propiedades del formulario. Si, por ejemplo, el comando redimensiona la ventana a un tama\xf1o superior al m\xe1ximo del formulario, el comando no tiene efecto."}),"\n",(0,r.jsxs)(n.p,{children:["Por favor tenga en cuenta que este comportamiento es diferente del comportamiento del comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-window-rect",title:"SET WINDOW RECT",children:"SET WINDOW RECT"}),", el cual no tiene en cuenta las propiedades del formulario ni su contenido cuando redimensiona la ventana. Igualmente, note que este comando no necesariamente modifica el tama\xf1o del formulario. Para modificar el tama\xf1o de un formulario por programaci\xf3n, por favor consulte la descripci\xf3n del comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/form-set-size",title:"FORM SET SIZE",children:"FORM SET SIZE"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Dada la siguiente ventana (los campos y el marco tienen la propiedad de dimensionamiento horizontal \u201CAgrandar\u201D):"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(467792).Z+"",width:"401",height:"351"})}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de esta l\xednea:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0RESIZE FORM WINDOW(25;0)\n"})}),"\n",(0,r.jsx)(n.p,{children:"... la ventana aparece as\xed:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(687083).Z+"",width:"551",height:"351"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/form-get-properties",children:"FORM GET PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/form-set-size",children:"FORM SET SIZE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-window-rect",children:"SET WINDOW RECT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"890"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},467792:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/pict39548.es-fcb0ced277050fee650731dade344d7f.png"},687083:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/pict39549.es-4ed1d448dbb8aaae0666c188e7083aa0.png"},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return s}});var i=a(667294);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);