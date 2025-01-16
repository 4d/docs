"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18523"],{375330:function(e,n,A){A.r(n),A.d(n,{default:()=>c,frontMatter:()=>i,metadata:()=>r,assets:()=>t,toc:()=>s,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/form-set-size","title":"FORM SET SIZE","description":"FORM SET SIZE ( {objeto ;} horizontal ; vertical {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-set-size.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-size","permalink":"/docs/es/20-R7/commands/form-set-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-set-size","title":"FORM SET SIZE","slug":"/commands/form-set-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET OUTPUT","permalink":"/docs/es/20-R7/commands/form-set-output"},"next":{"title":"FORM SET VERTICAL RESIZING","permalink":"/docs/es/20-R7/commands/form-set-vertical-resizing"}}'),a=A("785893"),l=A("250065");let i={id:"form-set-size",title:"FORM SET SIZE",slug:"/commands/form-set-size",displayed_sidebar:"docs"},o=void 0,t={},s=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"FORM SET SIZE"})," ( {",(0,a.jsx)(n.em,{children:"objeto"})," ;} ",(0,a.jsx)(n.em,{children:"horizontal"})," ; ",(0,a.jsx)(n.em,{children:"vertical"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre del objeto que indica los l\xedmites del formulario"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"horizontal"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si se pasa *: margen horizontal (p\xedxeles) Si se omite *: ancho (p\xedxeles)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"vertical"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si se pasa *: margen vertical (p\xedxeles) Si se omite *: altura (p\xedxeles)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"\u2022 Si se pasa: a\xf1adir las m\xe1rgenes definidas por los par\xe1metros horizontal y vertical (tama\xf1o autom\xe1tico o basado en un objeto, si se pasa un objeto) \u2022 Si se omite: utilizar horizontal y vertical como ancho y altura del formulario"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"El comando FORM SET SIZE le permite cambiar el tama\xf1o del formulario actual por programaci\xf3n. El nuevo tama\xf1o es definido por el proceso actual; no est\xe1 almacenado con el formulario."}),"\n",(0,a.jsx)(n.p,{children:"Como en el entorno Dise\xf1o, puede utilizar este comando para definir el tama\xf1o del formulario de tres maneras:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Autom\xe1ticamente, 4D determina el tama\xf1o del formulario basado en la noci\xf3n de que todos los objetos deben ser visibles y eventualmente a\xf1adiendo una margen horizontal y vertical,"}),"\n",(0,a.jsx)(n.li,{children:"Basado en la ubicaci\xf3n de un objeto del formulario, al cual se a\xf1aden eventualmente una margen horizontal y una margen vertical,"}),"\n",(0,a.jsx)(n.li,{children:"Introduciendo tama\xf1os \u201Cfijos\u201D (ancho y altura)."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Para mayor informaci\xf3n sobre los posibles redimensionamientos de los formularios, consulte el ",(0,a.jsx)(n.em,{children:"Manual de Dise\xf1o"})," de 4D."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Tama\xf1o autom\xe1tico"}),"\nSi quiere que el tama\xf1o del formulario se defina de manera autom\xe1tica, debe utilizar la siguiente sintaxis:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET SIZE(horizontal;vertical;*)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["En este caso, debe pasar las m\xe1rgenes (en p\xedxeles) que quiere a\xf1adir a la derecha y en la parte inferior del formulario en ",(0,a.jsx)(n.em,{children:"horizontal"})," and ",(0,a.jsx)(n.em,{children:"vertical"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Tama\xf1o basado en un objeto"}),"\nSi quiere que el tama\xf1o del formulario est\xe9 basado en un objeto, debe utilizar la siguiente sintaxis:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET SIZE(objeto;horizontal;vertical)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["En este caso, debe pasar las m\xe1rgenes (en p\xedxeles) que quiere a\xf1adir a la derecha y en la parte inferior del objeto en ",(0,a.jsx)(n.em,{children:"horizontal"})," y ",(0,a.jsx)(n.em,{children:"vertical"}),". No puede pasar el par\xe1metro ",(0,a.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Tama\xf1o fijo"}),"\nSi quiere tener un tama\xf1o de formulario fijo, debe utilizar la siguiente sintaxis:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET SIZE(horizontal;vertical)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["En este caso, debe pasar el ancho y la altura (en p\xedxeles) del formulario en ",(0,a.jsx)(n.em,{children:"horizontal"})," y ",(0,a.jsx)(n.em,{children:"vertical"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["El comando FORM SET SIZE cambia el tama\xf1o del formulario, pero tambi\xe9n tiene en cuenta las propiedades de redimensionamiento. Por ejemplo, si el ancho m\xednimo de un formulario es 500 p\xedxeles y si el comando define un ancho de 400 p\xedxeles, el nuevo ancho del formulario ser\xe1 de 500 p\xedxeles.",(0,a.jsx)(n.br,{}),"\nIgualmente note que este comando no cambia el tama\xf1o de la ventana del formulario (puede redimensionar un formulario sin cambiar el tama\xf1o de la ventana y viceversa). Para cambiar el tama\xf1o de la ventana del formulario, consulte el comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/resize-form-window",title:"RESIZE FORM WINDOW",children:"RESIZE FORM WINDOW"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"El siguiente ejemplo muestra c\xf3mo colocar una ventana de tipo Explorador. El siguiente formulario se crea en el entorno Dise\xf1o:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{src:A(826854).Z+"",width:"726",height:"405"}),(0,a.jsx)(n.br,{}),"\nEl tama\xf1o del formulario es \u201Cautom\xe1tico\u201D."]}),"\n",(0,a.jsx)(n.p,{children:"La ventana se visualiza utilizando el siguiente c\xf3digo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$ref:=Open form window([Tabla 1];"Form1";Standard form window;Horizontally centered;Vertically centered;*)\n\xa0DIALOG([Tabla 1];"Form1")\n\xa0CLOSE WINDOW\n'})}),"\n",(0,a.jsx)(n.p,{children:"La parte de la derecha de la ventana puede mostrarse u ocultarse haciendo clic en la opci\xf3n agrandar/reducir:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:A(154937).Z+"",width:"750",height:"391"})}),"\n",(0,a.jsx)(n.p,{children:"El m\xe9todo de objeto asociado con este bot\xf3n es el siguiente:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var b1;<>contraido : Boolean\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var margen : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0margen:=15\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0b1:=<>contraido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(<>contraido)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(False)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("b1";margen;margen)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("tab";margen;margen)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0<>contraido:=b1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(b1)\n\xa0\xa0//contraido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"b1";$l;$t;$r;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($lf;$tf;$rf;$bf;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW RECT($lf;$tf;$lf+$r+margen;$tf+$b+margen;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(False)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("b1";margen;margen)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0//expandido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"tab";$l;$t;$r;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($lf;$tf;$rf;$bf;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW RECT($lf;$tf;$lf+$r+margen;$tf+$b+margen;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("tab";margen;margen)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End case\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-set-horizontal-resizing",children:"FORM SET HORIZONTAL RESIZING"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-set-vertical-resizing",children:"FORM SET VERTICAL RESIZING"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"891"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},826854:function(e,n,A){A.d(n,{Z:function(){return r}});let r=A.p+"assets/images/pict21945.es-b5c736a41777e5829f1ce347582ba293.png"},154937:function(e,n,A){A.d(n,{Z:function(){return r}});let r="data:image/png;base64,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QMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAImygAAARNlAICAiTIAQMBEGQAgYKIMABAwUQYACJgoAwAETJQBAAKWqfUEoGZW3fpAracAwIEadJTR/WkMCxecW+spAJCAwUUZ3R8AqCvOlQEAAibKAAABE2UAgICJ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"},250065:function(e,n,A){A.d(n,{Z:function(){return o},a:function(){return i}});var r=A(667294);let a={},l=r.createContext(a);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);