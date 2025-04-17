"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76486"],{200785:function(A,e,o){o.r(e),o.d(e,{default:()=>i,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/object-set-rgb-colors","title":"OBJECT SET RGB COLORS","description":"OBJECT SET RGB COLORS ( { ;} objeto ; colorPrimerPlano {; colorFondo {; colorFondoAlt*}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-set-rgb-colors.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-rgb-colors","permalink":"/docs/es/commands/object-set-rgb-colors","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-rgb-colors.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-rgb-colors","title":"OBJECT SET RGB COLORS","slug":"/commands/object-set-rgb-colors","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET RESIZING OPTIONS","permalink":"/docs/es/commands/object-set-resizing-options"},"next":{"title":"OBJECT SET SCROLL POSITION","permalink":"/docs/es/commands/object-set-scroll-position"}}'),r=o("785893"),t=o("250065");let s={id:"object-set-rgb-colors",title:"OBJECT SET RGB COLORS",slug:"/commands/object-set-rgb-colors",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(A){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...A.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"OBJECT SET RGB COLORS"})," ( {* ;} ",(0,r.jsx)(e.em,{children:"objeto"})," ; ",(0,r.jsx)(e.em,{children:"colorPrimerPlano"})," {; ",(0,r.jsx)(e.em,{children:"colorFondo"})," {; ",(0,r.jsx)(e.em,{children:"colorFondoAlt"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Par\xe1metro"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"*"}),(0,r.jsx)(e.td,{children:"Operador"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"objeto"}),(0,r.jsx)(e.td,{children:"any"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Nombre de objeto (si se especifica *), o Campo o variable (si se omite *)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"colorPrimerPlano"}),(0,r.jsx)(e.td,{children:"Text, Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Valor del color RGB del primer plano"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"colorFondo"}),(0,r.jsx)(e.td,{children:"Text, Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Valor del color RGB del fondo"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"colorFondoAlt"}),(0,r.jsx)(e.td,{children:"Text, Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Valor del color RGB del fondo alterno"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(e.p,{children:["El comando ",(0,r.jsx)(e.strong,{children:"OBJECT SET RGB COLORS"})," cambia los colores de fondo y primer plano de los objetos especificados por ",(0,r.jsx)(e.em,{children:"objeto"})," y el par\xe1metro opcional ",(0,r.jsx)(e.em,{children:"*"}),". Cuando el comando se aplica a un objeto list box, un par\xe1metro adicional le permite modificar el color alterno de las filas."]}),"\n",(0,r.jsxs)(e.p,{children:["Si pasa el par\xe1metro opcional ",(0,r.jsx)(e.em,{children:"*"}),", especifica que el par\xe1metro ",(0,r.jsx)(e.em,{children:"objeto"})," es el nombre de objeto (una cadena). Si omite el par\xe1metro opcional *, especifica que ",(0,r.jsx)(e.em,{children:"objeto"})," es un campo o una variable. En este caso, no pasa en ",(0,r.jsx)(e.em,{children:"objeto"})," una cadena sino una referencia a un campo o a una variable (campo o variable de tipo objeto \xfanicamente) en lugar de una cadena. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,r.jsx)(e.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(e.em,{children:"colorFondoAlt"})," le permite definir un color alternativo para el fondo de las l\xedneas pares. Este par\xe1metro s\xf3lo se utiliza cuando el objeto se especifica como List box o columna de List box. Cuando se utiliza este par\xe1metro, el par\xe1metro ",(0,r.jsx)(e.em,{children:"c"})," ",(0,r.jsx)(e.em,{children:"olorFondo"})," se utiliza para las l\xedneas impares \xfanicamente. La utilizaci\xf3n de colores alternativos hace que las listas sean m\xe1s f\xe1ciles de leer."]}),"\n",(0,r.jsxs)(e.p,{children:["Si ",(0,r.jsx)(e.em,{children:"objeto"})," especifica un objeto List box, los colores alternos se utilizan en todo el List box. Si ",(0,r.jsx)(e.em,{children:"objeto"})," especifica una columna del List box, s\xf3lo la columna utilizar\xe1 los colores definidos."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Definici\xf3n de colores"})}),"\n",(0,r.jsxs)(e.p,{children:["Los valores de los colores RGB se indican en los par\xe1metros ",(0,r.jsx)(e.em,{children:"colorPrimerPlano"})," y opcionalmente en ",(0,r.jsx)(e.em,{children:"colorFondo"})," y ",(0,r.jsx)(e.em,{children:"colorFondoAlt"}),". Los siguientes formatos se soportan:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsxs)(e.strong,{children:["Nombre del formato",(0,r.jsx)(e.br,{})]})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Tipo"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Descripci\xf3n"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Ejemplos"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CSS color name"}),(0,r.jsx)(e.td,{children:"Texto"}),(0,r.jsxs)(e.td,{children:["Nombre de color CSS2 est\xe1ndar. La lista de nombres disponibles se puede encontrar en varios lugares en la web, por ejemplo, en el sitio web ",(0,r.jsx)(e.a,{href:"https://htmlcolorcodes.com/color-names/",children:"htmlcolorcodes.com"}),'. Utiliza "transparente" para definir la transparencia en el fondo (solo se puede utilizar con los par\xe1metros ',(0,r.jsx)(e.em,{children:"colorFondo"})," y ",(0,r.jsx)(e.em,{children:"colorFondoAlt"}),'). Utiliza "" (cadena vac\xeda) en ',(0,r.jsx)(e.em,{children:"colorPrimerPlano"})," y/o ",(0,r.jsx)(e.em,{children:"colorFondo"})," para dejarlo sin cambios."]}),(0,r.jsx)(e.td,{children:'"red", "cyan", "lightblue"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:'CSS color "#rrggbb" syntax'}),(0,r.jsx)(e.td,{children:"Texto"}),(0,r.jsx)(e.td,{children:"C\xf3digo de color hexadecimal CSS2 est\xe1ndar: rr = componente rojo del color gg = componente verde del color bb = componente azul del color"}),(0,r.jsx)(e.td,{children:'"#ff0000", "#00FFFF", "#ADD8E6"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:'CSS color "rgb(r,g,b)" syntax'}),(0,r.jsx)(e.td,{children:"Texto"}),(0,r.jsx)(e.td,{children:"C\xf3digo de color rgb CSS2 est\xe1ndar: r = componente rojo del color (0...255) g = componente verde del color (0...255) b = componente azul del color (0...255)"}),(0,r.jsx)(e.td,{children:'"rgb(255,255,0)", "rgb(255,0,0)"'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4-byte RGB value"}),(0,r.jsx)(e.td,{children:"Entero largo"}),(0,r.jsxs)(e.td,{children:["Entero largo de 4 bytes (formato 0x00rrggbb). Valores hexadecimales:",(0,r.jsx)(e.br,{})," rr = componente rojo del color gg = componente verde del color bb = componente azul del color"]}),(0,r.jsx)(e.td,{children:"0x00000000, 0x00FF7F7F"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:'4D "system" color constant'}),(0,r.jsx)(e.td,{children:"Entero largo"}),(0,r.jsxs)(e.td,{children:["Colores utilizados por 4D para dibujar objetos con colores autom\xe1ticos. Constantes disponibles (del tema ",(0,r.jsx)(e.em,{children:"DEFINIR COLORES RVA"}),"):",(0,r.jsx)(e.br,{})," Background color Background color none (solo puede utilizasrse con los par\xe1metros ",(0,r.jsx)(e.em,{children:"colorFondo"})," y ",(0,r.jsx)(e.em,{children:"colorFondoAlt"}),") Dark shadow color Disable highlight item color Foreground color Highlight menu background color Highlight menu text color Highlight text background color Highlight text color Light shadow color"]}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.strong,{children:"Nota:"})," ",(0,r.jsx)(e.em,{children:"los colores autom\xe1ticos dependen del sistema y del tipo de objeto al cual se asignan."})]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(e.p,{children:["Este formulario contiene dos variables editables, ",(0,r.jsx)(e.em,{children:"vsColorValor"})," y ",(0,r.jsx)(e.em,{children:"vsColor"})," as\xed como tres term\xf3metros: ",(0,r.jsx)(e.em,{children:"thRojo"}),", ",(0,r.jsx)(e.em,{children:"thVerde"}),", y ",(0,r.jsx)(e.em,{children:"thAzul"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:o(27549).Z+"",width:"594",height:"395"})}),"\n",(0,r.jsx)(e.p,{children:"Estos son los m\xe9todos de estos objetos:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto de la variable no editable vsColorValor\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsColorValor:="0x00000000"\n\xa0End case\n\xa0\n\xa0\xa0// M\xe9todo de objeto de la variable no editable vsColor\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsColor:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET RGB COLORS(vsColor;0x00FFFFFF;0x0000)\n\xa0End case\n\xa0\n\xa0\xa0// M\xe9todo de objeto del term\xf3metro thRojo\n\xa0CLIC EN TERMOMETRO DE COLOR\n\xa0\xa0// M\xe9todo de objeto del term\xf3metro thVerde\n\xa0CLIC EN TERMOMETRO DE COLOR\n\xa0\n\xa0\xa0// M\xe9todo de objeto del term\xf3metro thAzul\n\xa0CLIC EN TERMOMETRO DE COLOR\n'})}),"\n",(0,r.jsx)(e.p,{children:"El m\xe9todo de proyecto llamado por los tres term\xf3metros es:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto CLIC EN TERMOMETRO DE COLOR\n\xa0OBJECT SET RGB COLORS(vsColor;0x00FFFFFF;(thRojo&NBSP;<<&NBSP;16)+(thVerde&NBSP;<<&NBSP;8)+thAzul)\n\xa0vsColorValor:=String((thRojo\xa0<<\xa016)+(thVerde\xa0<<\xa08)+thAzul;"\xa0&\xa0x")\n\xa0If(thRojo=0)\n\xa0\xa0\xa0\xa0vsColorValor:=Substring(vsColorValor;1;2)+"0000"+Substring(vsColorValor;3)\n\xa0End if\n'})}),"\n",(0,r.jsxs)(e.p,{children:["Note la utilizaci\xf3n de los ",(0,r.jsx)(e.em,{children:"Bitwise operators"})," para el calculo de los valores de los colores a partir de los valores de los term\xf3metros."]}),"\n",(0,r.jsx)(e.p,{children:"En ejecuci\xf3n, el formulario se ve as\xed:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:o(921224).Z+"",width:"591",height:"374"})}),"\n",(0,r.jsx)(e.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(e.p,{children:"Cambia a fondo transparente con un color de fuente claro:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:o(292069).Z+"",width:"153",height:"50"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0OBJECT SET RGB COLORS(*;"myVar";Light shadow color;Background color none)\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:o(201821).Z+"",width:"152",height:"49"})}),"\n",(0,r.jsx)(e.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/es/commands/object-get-rgb-colors",children:"OBJECT GET RGB COLORS"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/es/commands/select-rgb-color",children:"Select RGB color"})]}),"\n",(0,r.jsx)(e.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"N\xfamero de comando"}),(0,r.jsx)(e.td,{children:"628"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hilo seguro"}),(0,r.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function i(A={}){let{wrapper:e}={...(0,t.a)(),...A.components};return e?(0,r.jsx)(e,{...A,children:(0,r.jsx)(a,{...A})}):a(A)}},292069:function(A,e,o){o.d(e,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAyCAIAAADA5e7AAAAC2ElEQVR42u2bP2vbQBTAT232mEIKLSmUImUw/gTy2C5SO2TyVrwUe4tEIFuhFLx1sZcWa3MDLXjq0EhTR+kTGA/WDYEGApmUT+Ce/tiWFCe+s+uqeXq/6UyefBf99N49CUsKgoAgIHhQ9AKQvwa6hAO6hAO6hMNO+sPu20rR60HEuD5dtK6Yl3BAl3BAl3BAl3BAl3BAl3BAl3BAl3BAl3BAl3DY4Yw7l1/SNx+C4LroBZeLSmVX/vnxOf3FE8zr8uHx91f7e0X/a2WEvjglR095IrHGwkHcpdOWEtoO+0h7daneo2svgH3disMXE87YZD7ACLpk5nRiTyP86oTJlA136hryFpeo9eP57BZRu3444ptv9VUCDN79MsEfe2pViceysVWFiCiCeakdtjyzmbna55d/NHBYyU3qL02G8+zIBCxJmfkBcfVeSSY+VevDeep1SbeIZyq8XwYA0f2SFTy/MVRuOd+e2SGDqBxautSMhmzsmZ+cXIDfJblLghlQhg0/rqaks7o45uKJ4dq1cCKnzXYB13XnNbmvFX2S/xFr9LHhDslkjPSbOtXuIKq7LH2J2ngdleBwPJrQbIBsvG95Yz91KJ2M4jRi6Fb2b8tYEq/1baJLzGRp7GVZ955ENgZd1fqxdvkKVdyglXRVU85kEo0HjqBLpzcrfvRsuGiDuPGGZ3R2dOswff7lgxqxOErrHfFRdWUFVy/NDplFtPc5GMdlTVLMmi1+L6LWxs3Z0blU0vrhJqpwdz+5+B67Wxp1TzSinbDyH3ZBUZ9Wpt5HClLvk9zxm8rfn6+ebfoMj/WXnaq/3ZtReNDzS/n2Z3j4m0qYoEs4CD732Qh2b4rd5hbBvIQDb14++np08e7L/mMgL5xcXN2bN4iffDvmjOTtY5H/E+xjYYIu4YAu4YAu4YAu4YAu4YAu4YAu4YAu4YAu4YAu4ZB5HovcazAv4YAu4YAu4fAHqlk+ohKu574AAAAASUVORK5CYII="},201821:function(A,e,o){o.d(e,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAxCAIAAACps/dQAAADAklEQVR42u2bMWwSURjH/2gTxxIHE2ktDodD414DYdKl1oVEHJoYN4gOR2NgMzHOJQZuMCnpUk10YMDBlMmJwNDZdGhvkKgMLl5HJ3x33iEHrXcPCgdfv18u4QHf3Xu8/33/7+7lCBmGAWb+uRT0AJjzgYUkAgtJBBaSCAv9bxYfh4MeDyPHyTv7WpUzkggsJBFYSCKwkERgIYnAQhKBhSQCC0kEFpIILCQRFnzGfVXu6g9eGsZJ0AO+WITDi8qnVzf1z56RfoW8/PzDvWfXcCXoXzYmv4MegDy61oEa8QxjayWCvJDJfVS71rZvvo2WUD1GdOQBZLx3L3SdHp1tMx7wtM0ekkIK2VQgHTK3/BGSQHsL6RjakxzjttVdOitsBnmr/b7lYzcfpwgh/NZIm5Vb6BzZbSHhRPU7X+awOkohmZGNj4jk3M7WO/GtRrJku59I1s1jtxO6A4btMVpymbYnrvg4ys4xhfmXRdc7gIJiF4VM0JM8DWRrZAXpBNaatlSDKHhoGa9Wh9oFntjt1IvBgHwZqT2372VQ3LCdU4OPKjgQD+SyVkcZ0/xzsX9WvF0JepKnwQhXrS3kLCXUYS11vN4yX0Xiinaz5bRjjmZOgLDlAwUrfbtGV+0EEqeIuo6l2x6jOCW+YioqElG7H/SsBoBkjewhlKht4E4GjdH2j2N5+MM60lIayMZTRjIjRYWzcyuONQU/vkh2pyBheWb0ESJ110nQPgTWJe4rTom3TFU4quqvxNJCMiMbh6aV/eUga90GeHmgCx1Le6gqZlMLub+qIL+KYhMp5+AetW0gvozlHGoJ0/lrBZRLyAn33jG91/tQFAgZff/9+M/jkN/e/Lwx7hKduGotID/hm86zmNvbD13rKGcv0fUehxy1Ro7D3M7pLMNrrUSYppCViS/mXWAkrZVdcVbxK+TVt+r33V9Bj/Yicn33qZ8wv1etzGzCf+KhBgtJBBaSCCwkEVhIIrCQRGAhicBCEoGFJAILSQQWkgiutVZmfuGMJAILSYQ/onDta5uziiIAAAAASUVORK5CYII="},27549:function(A,e,o){o.d(e,{Z:function(){return n}});let n="data:image/png;base64,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"},921224:function(A,e,o){o.d(e,{Z:function(){return n}});let n="data:image/png;base64,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"},250065:function(A,e,o){o.d(e,{Z:function(){return d},a:function(){return s}});var n=o(667294);let r={},t=n.createContext(r);function s(A){let e=n.useContext(t);return n.useMemo(function(){return"function"==typeof A?A(e):{...e,...A}},[e,A])}function d(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:s(A.components),n.createElement(t.Provider,{value:e},A.children)}}}]);