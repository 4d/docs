"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47929"],{912179:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>t,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>o});var n=JSON.parse('{"id":"FormObjects/pictureButtonOverview","title":"Bot\xf3n Imagen","description":"Generalidades","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-18/FormObjects/pictureButton_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/pictureButtonOverview","permalink":"/docs/es/18/FormObjects/pictureButtonOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FpictureButton_overview.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"pictureButtonOverview","title":"Bot\xf3n Imagen"},"sidebar":"docs","previous":{"title":"List Box","permalink":"/docs/es/18/FormObjects/listboxOverview"},"next":{"title":"Men\xfa pop-up imagen","permalink":"/docs/es/18/FormObjects/picturePopupMenuOverview"}}'),a=r("785893"),i=r("250065");let o={id:"pictureButtonOverview",title:"Bot\xf3n Imagen"},t=void 0,c={},d=[{value:"Generalidades",id:"generalidades",level:2},{value:"Utilizar los botones imagen",id:"utilizar-los-botones-imagen",level:2},{value:"Animaci\xf3n",id:"animaci\xf3n",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}];function l(e){let s={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"generalidades",children:"Generalidades"}),"\n",(0,a.jsxs)(s.p,{children:["Un bot\xf3n imagen es similar a un ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/buttonOverview",children:"bot\xf3n est\xe1ndar"}),". Sin embargo, a diferencia de un bot\xf3n est\xe1ndar (que acepta tres estados: activado, desactivado y pulsado), un bot\xf3n imagen tiene una imagen diferente para representar cada estado."]}),"\n",(0,a.jsx)(s.p,{children:"Los botones imagen pueden utilizarse de dos maneras:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Como botones de comando en un formulario. En este caso, el bot\xf3n de imagen suele incluir cuatro estados diferentes: activado, desactivado, presionado y al pasar por encima. Por ejemplo, una tabla de miniaturas que tiene una l\xednea de cuatro columnas, cada miniatura corresponde a los estados Por defecto, Presionado, Pasar el rat\xf3n y Desactivado."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Propiedad"}),(0,a.jsx)(s.th,{children:"Nombre JSON"}),(0,a.jsx)(s.th,{children:"Valor"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Rows"}),(0,a.jsx)(s.td,{children:"rowCount"}),(0,a.jsx)(s.td,{children:"1"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Columnas"}),(0,a.jsx)(s.td,{children:"columnCount"}),(0,a.jsx)(s.td,{children:"4"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Switch back when Released"}),(0,a.jsx)(s.td,{children:"switchBackWhenReleased"}),(0,a.jsx)(s.td,{children:"true"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Switch when Roll Over"}),(0,a.jsx)(s.td,{children:"switchWhenRollover"}),(0,a.jsx)(s.td,{children:"true"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Use Last Frame as Disabled"}),(0,a.jsx)(s.td,{children:"useLastFrameAsDisabled"}),(0,a.jsx)(s.td,{children:"true"})]})]})]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Como bot\xf3n de imagen que permite al usuario elegir entre varias opciones. En este caso, se puede utilizar un bot\xf3n de imagen en lugar de un men\xfa de imagen emergente. As a picture button letting the user choose among several choices. Aqu\xed un ejemplo de un bot\xf3n imagen. Supongamos que quiere dar a los usuarios de una aplicaci\xf3n personalizada la posibilidad de elegir el idioma de la interfaz de la aplicaci\xf3n. La opci\xf3n se implementa como un bot\xf3n imagen en una caja de di\xe1logo personalizada de propiedades:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:r(280540).Z+"",width:"97",height:"118"})}),"\n",(0,a.jsx)(s.p,{children:"Al hacer clic en el objeto, la imagen cambia."}),"\n",(0,a.jsx)(s.h2,{id:"utilizar-los-botones-imagen",children:"Utilizar los botones imagen"}),"\n",(0,a.jsx)(s.p,{children:"Puede implementar un bot\xf3n imagen de la siguiente manera:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"En primer lugar, prepare un \xfanico gr\xe1fico en el que las series de im\xe1genes est\xe9n dispuestas en l\xedneas, en columnas o en las dos."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:r(581328).Z+"",width:"242",height:"108"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Puede organizar las im\xe1genes en columnas, l\xedneas o en una cuadr\xedcula (como se muestra arriba). Cuando se organizan las im\xe1genes en forma de cuadr\xedcula, se numeran de izquierda a derecha, l\xednea por l\xednea, empezando por 0. Por ejemplo, la segunda imagen de la segunda l\xednea de una cuadr\xedcula que consta de dos l\xedneas y tres columnas, tiene el n\xfamero 4 (la bandera del Reino Unido en el ejemplo anterior)."}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["A continuaci\xf3n, aseg\xfarese de que la imagen est\xe1 en los recursos de su proyecto e introduzca la ruta en la propiedad ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesTextAndPicture#picture-pathname",children:"Ruta de acceso imagen"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Defina las propiedades de ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesCrop",children:"l\xedneas y columnas"})," del gr\xe1fico."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Especifique cu\xe1ndo cambian las im\xe1genes seleccionando las propiedades de ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation",children:"animaci\xf3n"})," apropiadas."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"animaci\xf3n",children:"Animaci\xf3n"}),"\n",(0,a.jsx)(s.p,{children:"Adem\xe1s de los par\xe1metros de posicionamiento y de apariencia est\xe1ndar, puede definir algunas propiedades espec\xedficas para los botones imagen, especialmente en lo que respecta a c\xf3mo y cu\xe1ndo se muestran las im\xe1genes. Estas opciones de propiedades pueden combinarse para mejorar sus botones de imagen."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Por defecto (",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation",children:"cuando no se selecciona la opci\xf3n animaci\xf3n"}),"), un bot\xf3n de imagen muestra la siguiente imagen de la serie cuando el usuario hace clic; muestra la imagen anterior de la serie cuando el usuario mantiene pulsada la tecla ",(0,a.jsx)(s.strong,{children:"May\xfasculas"})," y hace clic en el bot\xf3n. Cuando el usuario llega a la \xfaltima imagen de la serie, la imagen no cambia cuando el usuario hace clic de nuevo. En otras palabras, no vuelve a la primera imagen de la serie."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Hay otros modos disponibles:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#loop-back-to-first-frame",children:"Vuelve a la primera secuencia"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#switch-back-when-released",children:"Switch back when Released"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#switch-when-roll-over",children:"Switch when Roll Over"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#switch-continuously-on-clicks",children:"Desplazamiento continuo en clics"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#use-last-frame-as-disabled",children:"Use Last Frame as Disabled"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#use-last-frame-as-disabled",children:"Utilizar el \xdaltimo cuadro como Desactivado"})}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#use-last-frame-as-disabled",children:"Use Last frame as disabled"})," > The ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression",children:"associated variable"})," of the picture button returns the index number, in the thumbnail table, of the current picture displayed. La numeraci\xf3n de las im\xe1genes en la tabla empieza por 0."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Estilo de l\xednea de borde"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesTextAndPicture#button-style",children:"Estilo de bot\xf3n"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesCrop#columns",children:"Columnas"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesEntry#focusable",children:"Focalizable"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesText#font-color",children:"Color de fuente"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesHelp#help-tip",children:"Consejo de ayuda"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Tama\xf1o horizontal"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesText#italic",children:"Cursiva"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#loop-back-to-first-frame",children:"Retroceder al primer fotograma"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesObject#object-name",children:"Nombre de objeto"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesPicture#pathname",children:"Nombre de ruta"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesCrop#rows",children:"Filas"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesEntry#shortcut",children:"Acceso directo"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAction#standard-action",children:"Acci\xf3n est\xe1ndar"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#switch-back-when-released",children:"Retroceder al soltar"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#switch-continuously-on-clicks",children:"Cambiar continuamente al hacer clic"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#switch-every-x-ticks",children:"Cambiar cada x ticks"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesObject#title",children:"T\xedtulo"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#switch-when-roll-over",children:"Cambiar al pasar el rat\xf3n por encima"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesAnimation#use-last-frame-as-disabled",children:"Usar el \xfaltimo fotograma como desactivado"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable o expresi\xf3n"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Tama\xf1o vertical"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,a.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]})]})}function p(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},280540:function(e,s,r){r.d(s,{Z:function(){return n}});let n="data:image/png;base64,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"},581328:function(e,s,r){r.d(s,{Z:function(){return n}});let n="data:image/png;base64,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"},250065:function(e,s,r){r.d(s,{Z:function(){return t},a:function(){return o}});var n=r(667294);let a={},i=n.createContext(a);function o(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);