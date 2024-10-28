"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35108],{657288:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var s=r(474848),a=r(28453);const d={id:"transform-picture",title:"TRANSFORM PICTURE",slug:"/commands/transform-picture",displayed_sidebar:"docs"},i=void 0,t={id:"commands-legacy/transform-picture",title:"TRANSFORM PICTURE",description:"TRANSFORM PICTURE ( imagen ; operador {; param1 {; param2 {; param3 {; param4}}}} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/transform-picture.md",sourceDirName:"commands-legacy",slug:"/commands/transform-picture",permalink:"/docs/es/commands/transform-picture",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftransform-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"transform-picture",title:"TRANSFORM PICTURE",slug:"/commands/transform-picture",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET PICTURE TO LIBRARY",permalink:"/docs/es/commands/set-picture-to-library"},next:{title:"WRITE PICTURE FILE",permalink:"/docs/es/commands/write-picture-file"}},c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){const n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TRANSFORM PICTURE"})," ( ",(0,s.jsx)(n.em,{children:"imagen"})," ; ",(0,s.jsx)(n.em,{children:"operador"})," {; ",(0,s.jsx)(n.em,{children:"param1"})," {; ",(0,s.jsx)(n.em,{children:"param2"})," {; ",(0,s.jsx)(n.em,{children:"param3"})," {; ",(0,s.jsx)(n.em,{children:"param4"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"imagen"}),(0,s.jsx)(n.td,{children:"Picture"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Imagen fuente a transformar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Imagen resultante de la transformaci\xf3n"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"operador"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tipo de transformaci\xf3n a efectuar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param1"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Par\xe1metro de la transformaci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param2"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Par\xe1metro de la transformaci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param3"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Par\xe1metro de la transformaci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param4"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Par\xe1metro de la transformaci\xf3n"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando TRANSFORM PICTURE permite aplicar una transformaci\xf3n de tipo ",(0,s.jsx)(n.em,{children:"operador"})," a la imagen pasada en el par\xe1metro ",(0,s.jsx)(n.em,{children:"imagen"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando extiende las funcionalidades ofrecidas por los operadores convencionales de transformaci\xf3n de im\xe1genes (+/, etc., ver la secci\xf3n ",(0,s.jsx)(n.a,{href:"c-boolean.md",children:"C_BOOLEAN"}),"). Estos operadores permanecen totalmente utilizables en 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["La ",(0,s.jsx)(n.em,{children:"imagen"}),' fuente se modifica directamente despu\xe9s de la ejecuci\xf3n del comando. Tenga en cuenta que ciertas operaciones no son destructivas y pueden revertirse mediante la realizaci\xf3n de la operaci\xf3n contraria o por medio de la operaci\xf3n "Reset". Por ejemplo, una imagen reducida a 1% retomar\xe1 su tama\xf1o original sin alteraciones si se agranda 100 veces. Las transformaciones no modifican el tipo original de la imagen: por ejemplo, una imagen vectorial permanecer\xe1 vectorial despu\xe9s de su transformaci\xf3n.']}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"operador"}),", pase el n\xfamero de la operaci\xf3n a efectuar y en ",(0,s.jsx)(n.em,{children:"param1"})," a ",(0,s.jsx)(n.em,{children:"param4"}),", el o los par\xe1metro(s) necesarios para esta operaci\xf3n (el n\xfamero de par\xe1metros depende de la operaci\xf3n). En ",(0,s.jsx)(n.em,{children:"operador"})," puede utilizar una de las constantes del tema \u201c",(0,s.jsx)(n.em,{children:"Transformaci\xf3n de im\xe1genes"}),"\u201d. Estos operadores y sus par\xe1metros se describen en la siguiente tabla:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"operador (valor)"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"param1"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"param2"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"param3"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"param4"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Valores"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Cancelable"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Reset (0)"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Scale (1)"}),(0,s.jsx)(n.td,{children:"Ancho"}),(0,s.jsx)(n.td,{children:"Alto"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Factores"}),(0,s.jsx)(n.td,{children:"S\xed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Translate (2)"}),(0,s.jsx)(n.td,{children:"Eje X"}),(0,s.jsx)(n.td,{children:"Eje Y"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Pixeles"}),(0,s.jsx)(n.td,{children:"S\xed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Flip horizontally (3)"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"S\xed"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Flip vertically (4)"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"S\xed"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Crop (100)"}),(0,s.jsx)(n.td,{children:"X Orig."}),(0,s.jsx)(n.td,{children:"Y Orig."}),(0,s.jsx)(n.td,{children:"Ancho"}),(0,s.jsx)(n.td,{children:"Alto"}),(0,s.jsx)(n.td,{children:"Pixeles"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Fade to grey scale (101)"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Transparency (102)"}),(0,s.jsx)(n.td,{children:"RGB color"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Hexad\xe9cimal"}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reset: todas las operaciones matriciales efectuadas en la imagen (redimensionar, voltear, etc.) se deshacen."}),"\n",(0,s.jsxs)(n.li,{children:["Scale: la imagen se redimensiona horizontalmente y verticalmente de acuerdo a los valores pasados en ",(0,s.jsx)(n.em,{children:"param1"})," y ",(0,s.jsx)(n.em,{children:"param2"})," respectivamente. Estos valores son factores: por ejemplo, para agrandar el ancho 50%, pase 1.5 en ",(0,s.jsx)(n.em,{children:"param1"})," y para reducir la altura 50%, pase 0.5 en ",(0,s.jsx)(n.em,{children:"param2"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Translate: la imagen se mueve ",(0,s.jsx)(n.em,{children:"param1"})," p\xedxeles horizontalmente y ",(0,s.jsx)(n.em,{children:"param2"})," p\xedxeles verticalmente. Pase un valor positivo para moverse a la derecha o hacia abajo y un valor negativo para moverse hacia la izquierda o hacia arriba."]}),"\n",(0,s.jsx)(n.li,{children:"Flip horizontally y Flip vertically: el efecto espejo se aplica a la imagen original. Todo movimiento efectuado anteriormente no se tendr\xe1 en cuenta."}),"\n",(0,s.jsxs)(n.li,{children:["Crop: la imagen se recorta a partir del punto de coordenadas ",(0,s.jsx)(n.em,{children:"param1"})," y ",(0,s.jsx)(n.em,{children:"param2"})," (expresado en p\xedxeles). El ancho y el alto de la nueva imagen son determinados por los par\xe1metros ",(0,s.jsx)(n.em,{children:"param3"})," y ",(0,s.jsx)(n.em,{children:"param4"}),". Esta transformaci\xf3n no puede anularse."]}),"\n",(0,s.jsx)(n.li,{children:"Fade to grey scale: la imagen se convierte a escala de grises (ning\xfan par\xe1metro es necesario). Esta transformaci\xf3n no puede deshacerse."}),"\n",(0,s.jsxs)(n.li,{children:["Transparency: una m\xe1scara de transparencia se aplica a la imagen basada en el color pasado en ",(0,s.jsx)(n.em,{children:"param1"}),". Por ejemplo, si pasa 0x00FFFFFF (color blanco) en ",(0,s.jsx)(n.em,{children:"param1"}),", todos los p\xedxeles blancos en la imagen original ser\xe1n transparentes en la imagen transformada. Esta operaci\xf3n se puede aplicar a im\xe1genes de mapa de bits o de vectores. Por defecto, si el par\xe1metro ",(0,s.jsx)(n.em,{children:"param1"})," se omite, el color blanco (0x00FFFFFF) se establece como color objetivo. Esta funci\xf3n est\xe1 especialmente dise\xf1ada para manejar la transparencia en im\xe1genes convertidas desde el formato obsoleto PICT, pero se puede usar con im\xe1genes de todo tipo. Esta transformaci\xf3n no se puede deshacer."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Quiere definir las partes blancas de una imagen como transparentes. Para ello, puede utilizar el siguiente c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0TRANSFORM PICTURE(Pict1;Transparency;0x00FFFFFF)\xa0//0x00FFFFFF es blanco\n"})}),"\n",(0,s.jsx)(n.p,{children:"Obtiene el siguiente resultado:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(273425).A+"",width:"633",height:"301"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Este es un ejemplo de corte de una imagen (la imagen se muestra en el formulario con el formato \u201cTruncado (no-centrado)\u201d):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0TRANSFORM PICTURE($vpEngranaje;Crop;50;50;100;100)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(250614).A+"",width:"581",height:"220"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/combine-pictures",children:"COMBINE PICTURES"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},273425:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/pict1359750.en-d8ebc0e4ecc7e27cf14ef2eb6ec1c568.png"},250614:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/pict28288.es-8e088c5295a98c82901d1e714bbd155f.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>t});var s=r(296540);const a={},d=s.createContext(a);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);