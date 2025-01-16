"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71759"],{430645:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/text-to-array","title":"TEXT TO ARRAY","description":"TEXT TO ARRAY ( varText ; arrText ; ancho ; nomFuente ; tamFuente {; estiloFuente {; *}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/text-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/text-to-array","permalink":"/docs/es/20-R7/commands/text-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftext-to-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"text-to-array","title":"TEXT TO ARRAY","slug":"/commands/text-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SORT ARRAY","permalink":"/docs/es/20-R7/commands/sort-array"},"next":{"title":"Backup","permalink":"/docs/es/20-R7/category/backup"}}'),r=t("785893"),a=t("250065");let l={id:"text-to-array",title:"TEXT TO ARRAY",slug:"/commands/text-to-array",displayed_sidebar:"docs"},i=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TEXT TO ARRAY"})," ( ",(0,r.jsx)(n.em,{children:"varText"})," ; ",(0,r.jsx)(n.em,{children:"arrText"})," ; ",(0,r.jsx)(n.em,{children:"ancho"})," ; ",(0,r.jsx)(n.em,{children:"nomFuente"})," ; ",(0,r.jsx)(n.em,{children:"tamFuente"})," {; ",(0,r.jsx)(n.em,{children:"estiloFuente"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"varText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Texto original a dividir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrText"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Array que contiene el texto dividido en palabras o l\xedneas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ancho"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Ancho m\xe1ximo de la cadena(en p\xedxeles)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomFuente"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de la fuente"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tamFuente"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tama\xf1o de la fuente"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"estiloFuente"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Estilo de fuente"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se pasa = interpretar el texto como multistyle"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"TEXT TO ARRAY"})," transforma una variable texto en un array texto. El texto original (con estilo o no) se divide y cada parte se convierte en un elemento del array ",(0,r.jsx)(n.em,{children:"arrText"})," que es devuelto por el comando. Este comando se puede utilizar por ejemplo para llenar las p\xe1ginas o las columnas con texto de un tama\xf1o fijo."]}),"\n",(0,r.jsx)(n.p,{children:'El texto original se divide en "palabras", basado en un tama\xf1o de l\xednea definido por los par\xe1metros del comando y teniendo en cuenta todos los estilos utilizados.'}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"varText"}),", pase el texto a dividir en elementos de array. Este texto puede ser o no multiestilo. Algunos par\xe1metros se ignoran cuando el texto es multiestilo."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,r.jsx)(n.em,{children:"arrText"})," el nombre del array a llenar con el texto dividido."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"ancho"}),', pase un tama\xf1o en p\xedxeles que indique la longitud m\xe1xima de l\xednea a medir para dividir el texto. Para todo el texto, el comando evaluara el n\xfamero m\xe1ximo de palabras que pueden "encajar" en este ancho en funci\xf3n de los atributos gr\xe1ficos del texto (fuente, estilo).']}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si el texto es multiestilo, los estilos del texto original se tienen en cuenta y los siguientes par\xe1metros se ignoran si se pasan. En este caso, las l\xedneas de texto en el array resultante conservan su estilo original (de manera que se puede imprimir una por una v\xeda una variable texto o alfa por ejemplo)."}),"\n",(0,r.jsx)(n.li,{children:"Si se trata de texto plano (sin estilos), debe pasar todos los par\xe1metros para que el comando pueda calcular la longitud de las l\xedneas."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Cada elemento del array debe contener al menos una palabra. Si el ancho pasado es demasiado peque\xf1o para que la regla de divisi\xf3n se respete estrictamente, el array se llena lo m\xe1s aproximadamente posible de acuerdo a los par\xe1metros y la variable OK toma el valor 0. Por ejemplo, si pasa un ancho de 3 p\xedxeles, es probable que la mayor\xeda de las palabras sean m\xe1s grandes que esta longitud. En este caso, la variable OK toma el valor 0.",(0,r.jsx)(n.br,{}),"\nEsto tambi\xe9n significa que el tama\xf1o m\xe1ximo te\xf3rico del array devuelto es igual al n\xfamero de palabras presentes en ",(0,r.jsx)(n.em,{children:"varText"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En los par\xe1metros ",(0,r.jsx)(n.em,{children:"nomFuente"})," y ",(0,r.jsx)(n.em,{children:"tamFuente"}),", pase el nombre y el tama\xf1o de la fuente con la cual ",(0,r.jsx)(n.em,{children:"varText"})," debe ser evaluado por el comando para hacer la divisi\xf3n. Estos par\xe1metros son obligatorios en el caso de texto sin formato."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"estiloFuente"}),", pase una o m\xe1s constantes del tema ",(0,r.jsx)(n.em,{children:"Estilos de fuente"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bold"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Italic"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Plain"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Underline"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Este par\xe1metro es opcional; cuando se omite, se utiliza el estilo Normal."}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", si se pasa, permite forzar el que se tenga en cuenta los par\xe1metros ",(0,r.jsx)(n.em,{children:"nomFuente"}),", ",(0,r.jsx)(n.em,{children:"tamFuente"})," y/o ",(0,r.jsx)(n.em,{children:"estiloFuente"})," para los textos multiestilos cuando estos par\xe1metros no est\xe1n definidos en el texto original. Sin embargo, si estos par\xe1metros est\xe1n definidos en el texto original, los par\xe1metros pasados al comando se ignoran en todos los casos."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Queremos dividir un texto multistyle en l\xedneas con un tama\xf1o m\xe1ximo de 200 p\xedxeles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0TEXT TO ARRAY(theText;TextArray;200;"Arial";20;Normal;*)\n\xa0\xa0// los atributos Arial, 20 y Normal s\xf3lo se tienen en cuenta si no est\xe1n definidos en el texto\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Queremos dividir un texto en l\xedneas de un tama\xf1o m\xe1ximo de 350 p\xedxeles en fuente Bodoni negrita 14. Como el comando no funciona correctamente si la fuente no est\xe1 disponible, es \xfatil verificar su presencia:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($FontList;0)\n\xa0FONT LIST($FontList)\n\xa0$Font:="Bodoni"\n\xa0$p:=Find in array($FontList;$Font)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0TEXT TO ARRAY(theText;TextArray;350;"Bodoni";14;Bold)\n\xa0Else\n\xa0\xa0// utilizar otra fuente\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Un texto multiestilo debe imprimirse sin estilo en la fuente Arial normal 12 con un ancho m\xe1ximo de 600 p\xedxeles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// transformamos el texto multiestilo en texto bruto\n\xa0$RawText:=OBJECT Get plain text(vText)\n\xa0\xa0// llenamos el array\n\xa0TEXT TO ARRAY($RawText;TextArray;600;"Arial";12)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,r.jsx)(n.p,{children:"Debe imprimir en un \xe1rea de 400 p\xedxeles de largo un texto de un m\xe1ximo de 80 l\xedneas con la fuente m\xe1s grande posible (sin exceder los 24 puntos). Puede escribir:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(TextArray;0)\n\xa0$Size:=24\n\xa0Repeat\n\xa0\xa0\xa0\xa0TEXT TO ARRAY($RawText;TextArray;400;"Arial";$Size)\n\xa0\xa0\xa0\xa0$Size:=$Size-1\n\xa0\xa0\xa0\xa0$n:=Size of array(TextArray)\n\xa0Until($n<=80)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/split-string",children:"Split string"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/st-get-plain-text",children:"ST Get plain text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/st-get-text",children:"ST Get text"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1149"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},a=s.createContext(r);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);