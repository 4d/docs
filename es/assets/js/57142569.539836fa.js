"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65763"],{699911:function(e,n,l){l.r(n),l.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>c,assets:()=>r,toc:()=>t,contentTitle:()=>a});var c=JSON.parse('{"id":"commands/new-collection","title":"Nueva colecci\xf3n","description":"New collection {( ...value Collection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/new-collection.md","sourceDirName":"commands","slug":"/commands/new-collection","permalink":"/docs/es/20-R7/commands/new-collection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-collection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-collection","title":"Nueva colecci\xf3n","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COLLECTION TO ARRAY","permalink":"/docs/es/20-R7/commands/collection-to-array"},"next":{"title":"New shared collection","permalink":"/docs/es/20-R7/commands/new-shared-collection"}}'),o=l("785893"),i=l("250065");let s={id:"new-collection",title:"Nueva colecci\xf3n",displayed_sidebar:"docs"},a=void 0,r={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"New collection"})," {( ",(0,o.jsx)(n.em,{children:"...value"})," : any )} : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"value"}),(0,o.jsx)(n.td,{children:"Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Valor(es) de collection"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Collection"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nueva colecci\xf3n"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.code,{children:"New collection"})," crea una nueva colecci\xf3n vac\xeda o prellenada y devuelve su referencia. Las colecciones pueden manejarse utilizando propiedades y funciones de la ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/API/CollectionClass",children:"API de la clase Collection"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si no se pasa ning\xfan par\xe1metro, ",(0,o.jsx)(n.code,{children:"New collection"})," crea una colecci\xf3n vac\xeda y devuelve su referencia."]}),"\n",(0,o.jsx)(n.p,{children:"Debe asignar la referencia devuelta a una variable 4D del tipo Collection."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Keep in mind that ",(0,o.jsx)(n.code,{children:"var : Collection"})," statement declares a variable of the ",(0,o.jsx)(n.code,{children:"Collection"})," type but does not create any collection."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Opcionalmente, puede prellenar la nueva colecci\xf3n pasando uno o varios ",(0,o.jsx)(n.em,{children:"valores"})," como par\xe1metro(s)."]}),"\n",(0,o.jsx)(n.p,{children:"De lo contrario, puede a\xf1adir o modificar elementos posteriormente por asignaci\xf3n. Por ejemplo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' myCol[10]:="My new element"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Si el nuevo \xedndice del elemento est\xe1 m\xe1s all\xe1 del \xfaltimo elemento existente de la colecci\xf3n, la colecci\xf3n se redimensiona autom\xe1ticamente y a todos los nuevos elementos intermedios se les asigna un valor ",(0,o.jsx)(n.strong,{children:"null"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Puede pasar cualquier n\xfamero de valores de todos los tipos soportados (number, text, date, picture, pointer, object, collection...). A diferencia de los arrays, las colecciones pueden mezclar datos de diferentes tipos."}),"\n",(0,o.jsx)(n.p,{children:"Debe prestar atenci\xf3n a los siguientes aspectos de la conversi\xf3n:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['Si pasasun puntero, se mantiene "tal cual"; se eval\xfaa utilizando el comando ',(0,o.jsx)(n.code,{children:"JSON Stringify"})]}),"\n",(0,o.jsxs)(n.li,{children:['Las fechas se almacenan como fechas "aaaa-mm-dd" o de cadenas con el formato "AAAA-MM-DDTHH:mm:ss.SSSZ", seg\xfan la configuraci\xf3n actual "fechas dentro de los objetos" de la base de datos. Al convertir las fechas 4D en texto antes de almacenarlas en la colecci\xf3n, por defecto el programa tiene en cuenta la zona horaria local. Puede modificar este comportamiento utilizando el selector ',(0,o.jsx)(n.code,{children:"Dates inside objects"})," del comando ",(0,o.jsx)(n.code,{children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Si pasa un tiempo, se almacena como un n\xfamero de milisegundos (Real)."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Quiere crear una nueva colecci\xf3n vac\xeda y asignarla a una variable colecci\xf3n 4D:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" var $myCol : Collection\n $myCol:=New collection\n  //$myCol=[]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Quiere crear una colecci\xf3n precargada:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var $filledColl : Collection\n $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)\n  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsx)(n.p,{children:"Se crea una nueva colecci\xf3n y se a\xf1ade un nuevo elemento:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' var $coll : Collection\n $coll:=New collection("a";"b";"c")\n  //$coll=["a","b","c"]\n $coll[9]:="z" //a\xf1adir un d\xe9cimo elemento con valor "z"\n $vcolSize:=$coll.length //10\n  //$coll=["a","b","c",null,null,null,null,null,null,"z"]\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/new-shared-collection",children:"New shared collection"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/type",children:"Type"})]}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1472"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return s}});var c=l(667294);let o={},i=c.createContext(o);function s(e){let n=c.useContext(i);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);