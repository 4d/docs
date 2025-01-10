"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4390"],{429024:function(e,n,r){r.r(n),r.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>a,assets:()=>i,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/new-object","title":"New object","description":"New object {( propiedad ; valor {; propiedad2 ; valor2 ; ... ; propiedadN ; valorN} )} : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/new-object.md","sourceDirName":"commands-legacy","slug":"/commands/new-object","permalink":"/docs/es/commands/new-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-object","title":"New object","slug":"/commands/new-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Objects (Language)","permalink":"/docs/es/category/objects-language"},"next":{"title":"New shared object","permalink":"/docs/es/commands/new-shared-object"}}'),o=r("785893"),s=r("250065");let l={id:"new-object",title:"New object",slug:"/commands/new-object",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"New object"})," {( ",(0,o.jsx)(n.em,{children:"propiedad"})," ; ",(0,o.jsx)(n.em,{children:"valor"})," {; ",(0,o.jsx)(n.em,{children:"propiedad2"})," ; ",(0,o.jsx)(n.em,{children:"valor2"})," ; ... ; ",(0,o.jsx)(n.em,{children:"propiedadN"})," ; ",(0,o.jsx)(n.em,{children:"valorN"}),"} )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"propiedad"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre de la propiedad a crear"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"valor"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Valor de la propiedad"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nuevo objeto del lenguaje"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"New object"})," crea un nuevo objeto vac\xedo o prellenado y devuelve su referencia."]}),"\n",(0,o.jsxs)(n.p,{children:["Si no pasa ning\xfan par\xe1metro, ",(0,o.jsx)(n.strong,{children:"New object"})," crea un objeto vac\xedo y devuelve su referencia. Debe asignar esta referencia a una variable 4D declarada con ",(0,o.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," o un campo objeto 4D."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," ",(0,o.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," declara una variable del tipo ",(0,o.jsx)(n.a,{href:"#",title:"Datos estructurados como forma de objeto nativo 4D",children:"Objeto"})," pero no crea ning\xfan objeto."]}),"\n",(0,o.jsxs)(n.p,{children:["Opcionalmente, puede prefijar el nuevo objeto pasando uno o varios pares ",(0,o.jsx)(n.em,{children:"propiedad"}),"/",(0,o.jsx)(n.em,{children:"valor"})," como par\xe1metros:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["En el par\xe1metro ",(0,o.jsx)(n.em,{children:"propiedad"}),", pase la etiqueta de la propiedad a crear. Note que el par\xe1metro ",(0,o.jsx)(n.em,{children:"propiedad"})," es sensible a may\xfasculas y min\xfasculas."]}),"\n",(0,o.jsxs)(n.li,{children:["En el par\xe1metro ",(0,o.jsx)(n.em,{children:"valor"}),", pase el valor que desea definir para la propiedad. Varios tipos de datos son soportados:\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"n\xfamero (real, entero...) Los valores num\xe9ricos se almacenan siempre como reales."}),"\n",(0,o.jsx)(n.li,{children:"texto"}),"\n",(0,o.jsx)(n.li,{children:"booleano"}),"\n",(0,o.jsx)(n.li,{children:"puntero"}),"\n",(0,o.jsx)(n.li,{children:"blob (4D.Blob)"}),"\n",(0,o.jsx)(n.li,{children:"fecha"}),"\n",(0,o.jsx)(n.li,{children:"hora"}),"\n",(0,o.jsx)(n.li,{children:"null"}),"\n",(0,o.jsx)(n.li,{children:"imagen"}),"\n",(0,o.jsx)(n.li,{children:"objeto"}),"\n",(0,o.jsx)(n.li,{children:"colecci\xf3n"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Tenga en cuenta que:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["si pasa un puntero, se mantiene como est\xe1; Se eval\xfaa utilizando comandos como ",(0,o.jsx)(n.a,{href:"/docs/es/commands/json-stringify",children:"JSON Stringify"}),","]}),"\n",(0,o.jsxs)(n.li,{children:['las fechas se almacenan en como fechas "aaaa-mm-dd" o en cadena en formato "AAAA-MM-DDTHH:mm:ss.SSSZ" en funci\xf3n del par\xe1metro actual relativo al almacenamiento de las fechas en los objetos (ver ',(0,o.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),"). Al convertir las fechas 4D en texto antes de almacenarlas en el objeto, por defecto el programa toma en cuenta la zona horaria local. Puede modificar este comportamiento utilizando el selector Dates inside objects del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"si pasa una hora, se almacena como un n\xfamero de milisegundos (Real)."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Este comando puede crear objeto vac\xedos o llenos:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $obj1 : Object\n\xa0var $obj2 : Object\n\xa0var $obj3 : Object\n\xa0$obj1:=New object\n\xa0\xa0// $obj1 = {}\n\xa0$obj2:=New object("name";"Smith")\n\xa0\xa0// $obj2 = {name:Smith}\n\xa0$obj3:=New object("name";"Smith";"age";40)\n\xa0\xa0// $obj3 = {name:Smith,age:40}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Crear un nuevo objeto con un objeto como valor de par\xe1metro:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $Children;$Contact : Object\n\xa0\n\xa0\xa0//Crear un array objeto\n\xa0ARRAY TEXT($arrChildren;3)\n\xa0$arrChildren{1}:="Richard"\n\xa0$arrChildren{2}:="Susan"\n\xa0$arrChildren{3}:="James"\n\xa0OB SET ARRAY($Children;"Children";$arrChildren)\n\xa0\n\xa0\xa0//Inicializar el objeto\n\xa0$Contact:=New object("FirstName";"Alan";"LastName";"Parker";"age";30;"Children";$Children)\n\xa0\xa0// $Contact = {FirstName:Alan,LastName:Parker,age:30,Children:{Children:[Richard,Susan,James]}}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsx)(n.p,{children:"Este comando es \xfatil para pasar objetos como par\xe1metros:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $measures : Object\n\xa0$measures:=Database measures(New object("path";"DB.cacheReadBytes";"withHistory";True;"historyLength";120))\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,o.jsx)(n.p,{children:"Con este comando, puede f\xe1cilmente manejar objetos en bucles:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY OBJECT($refs;0)\n\xa0var vCounter : Integer\n\xa0\n\xa0For(vCounter;1;100)\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($refs;New object("line";"Line number "+String(vCounter)))\n\xa0End for\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/new-shared-object",children:"New shared object"})}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1471"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var a=r(667294);let o={},s=a.createContext(o);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);