"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94785"],{310486:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>a,frontMatter:()=>t});var s=JSON.parse('{"id":"commands-legacy/form-get-properties","title":"FORM GET PROPERTIES","description":"FORM GET PROPERTIES ( {tabla ;} nomForm ; ancho ; alto {; numPags {; largoFijo {; altFijo {; titulo}}}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-get-properties.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-properties","permalink":"/docs/es/commands/form-get-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-get-properties","title":"FORM GET PROPERTIES","slug":"/commands/form-get-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM GET OBJECTS","permalink":"/docs/es/commands/form-get-objects"},"next":{"title":"FORM GET VERTICAL RESIZING","permalink":"/docs/es/commands/form-get-vertical-resizing"}}'),o=r("785893"),l=r("250065");let t={id:"form-get-properties",title:"FORM GET PROPERTIES",slug:"/commands/form-get-properties",displayed_sidebar:"docs"},d=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"FORM GET PROPERTIES"})," ( {",(0,o.jsx)(n.em,{children:"tabla"})," ;} ",(0,o.jsx)(n.em,{children:"nomForm"})," ; ",(0,o.jsx)(n.em,{children:"ancho"})," ; ",(0,o.jsx)(n.em,{children:"alto"})," {; ",(0,o.jsx)(n.em,{children:"numPags"})," {; ",(0,o.jsx)(n.em,{children:"largoFijo"})," {; ",(0,o.jsx)(n.em,{children:"altFijo"})," {; ",(0,o.jsx)(n.em,{children:"titulo"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tabla"}),(0,o.jsx)(n.td,{children:"Table"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tabla del formulario o tabla por defecto, si se omite"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomForm"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre del formulario"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ancho"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Ancho del formulario (en p\xedxeles)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"alto"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Altura del formulario (en p\xedxeles)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"numPags"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"N\xfamero de p\xe1ginas en el formulario"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"largoFijo"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Verdadero = Ancho fijo, Falso = Ancho variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"altFijo"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Verdadero = Altura fija, Falso = Altura variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"titulo"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"T\xedtulo de la ventana del formulario"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando [#current_title devuelve las propiedades del formulario ",(0,o.jsx)(n.em,{children:"nomForm"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Los par\xe1metros ",(0,o.jsx)(n.em,{children:"ancho"})," y ",(0,o.jsx)(n.em,{children:"altura"})," devuelven el ancho y la altura del formulario en p\xedxeles. Estos valores son determinados en las propiedades de tama\xf1o de la ventana por defecto del formulario:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Si el tama\xf1o del formulario es ",(0,o.jsx)(n.strong,{children:"autom\xe1tico"}),", su ancho y altura se calculan de manera que todos los objetos del formulario sean visibles, teniendo en cuenta, las m\xe1rgenes horizontal y vertical que fueron definidas."]}),"\n",(0,o.jsxs)(n.li,{children:["Si el tama\xf1o del formulario es ",(0,o.jsx)(n.strong,{children:"fijo"}),", su ancho y altura son introducidos manualmente en las \xe1reas correspondientes."]}),"\n",(0,o.jsxs)(n.li,{children:["Si el tama\xf1o del formulario est\xe1 ",(0,o.jsx)(n.strong,{children:"basado en un objeto,"})," su ancho y altura son calculados con relaci\xf3n a la posici\xf3n de este objeto."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"numPags"})," devuelve el n\xfamero de p\xe1ginas en un formulario, excluyendo la p\xe1gina 0 (cero)."]}),"\n",(0,o.jsxs)(n.p,{children:["Los par\xe1metros ",(0,o.jsx)(n.em,{children:"largoFijo"})," y ",(0,o.jsx)(n.em,{children:"altoFijo"})," indican si el largo y el alto del formulario son redimensionables (el par\xe1metro devuelve ",(0,o.jsx)(n.a,{href:"/docs/es/commands/false",title:"False",children:"False"}),") o fijos (el par\xe1metro devuelve ",(0,o.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"t\xedtulo"})," devuelve el t\xedtulo de la ventana del formulario, tal como fue definido en la Lista de propiedades del editor de formularios. Si no se defini\xf3 ning\xfan nombre, el par\xe1metro ",(0,o.jsx)(n.em,{children:"t\xedtulo"})," devuelve una cadena vac\xeda."]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/form-get-objects",children:"FORM GET OBJECTS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/form-set-size",children:"FORM SET SIZE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-form-window",children:"Open form window"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return t}});var s=r(667294);let o={},l=s.createContext(o);function t(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);