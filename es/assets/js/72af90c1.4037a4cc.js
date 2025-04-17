"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13729"],{400967:function(e,o,n){n.r(o),n.d(o,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/storage","title":"Storage","description":"Storage  : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/storage.md","sourceDirName":"commands-legacy","slug":"/commands/storage","permalink":"/docs/es/20-R8/commands/storage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstorage.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"storage","title":"Storage","slug":"/commands/storage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Values","permalink":"/docs/es/20-R8/commands/ob-values"},"next":{"title":"Funciones estad\xedsticas","permalink":"/docs/es/20-R8/commands/theme/On-a-Series"}}'),s=n("785893"),t=n("250065");let a={id:"storage",title:"Storage",slug:"/commands/storage",displayed_sidebar:"docs"},c=void 0,i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let o={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Storage"}),"  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe1metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Resultado"}),(0,s.jsx)(o.td,{children:"Object"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Cat\xe1logo de objetos compartidos registrados y colecciones compartidas"})]})})]}),"\n",(0,s.jsx)(o.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(o.p,{children:["El m\xe9todo ",(0,s.jsx)(o.strong,{children:"Storage"})," devuelve el cat\xe1logo de objetos compartidos o colecciones compartidas registrados registradas en el objeto ",(0,s.jsx)(o.em,{children:"Storage"})," en la m\xe1quina o componente actual."]}),"\n",(0,s.jsxs)(o.p,{children:["El cat\xe1logo devuelto por ",(0,s.jsx)(o.strong,{children:"Storage"})," es creado autom\xe1ticamente por 4D y est\xe1 disponible para todos los procesos de la base, incluidos los procesos apropiativos. Existe un cat\xe1logo ",(0,s.jsx)(o.strong,{children:"Storage"})," por m\xe1quina y componente: en una aplicaci\xf3n cliente/servidor, hay un objeto compartido ",(0,s.jsx)(o.strong,{children:"Storage"})," en el servidor y un objeto compartido ",(0,s.jsx)(o.strong,{children:"Storage"})," en cada aplicaci\xf3n 4D remota; si la base usa componentes, hay un objeto ",(0,s.jsx)(o.strong,{children:"Storage"})," por componente."]}),"\n",(0,s.jsxs)(o.p,{children:["Utilice el cat\xe1logo ",(0,s.jsx)(o.strong,{children:"Storage"})," para hacer referencia a cualquier objeto compartido o colecci\xf3n compartida que desee utilizar desde cualquier proceso apropiativo o est\xe1ndar. Para registrar un objeto compartido o una colecci\xf3n compartida en el cat\xe1logo, agregue su referencia al objeto compartido devuelto por ",(0,s.jsx)(o.strong,{children:"Storage"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Como el cat\xe1logo devuelto por ",(0,s.jsx)(o.strong,{children:"Storage"})," es un o",(0,s.jsx)(o.em,{children:"bjeto compartido"}),", sigue las reglas descritas en la secci\xf3n ",(0,s.jsx)(o.em,{children:"Objetos y colecciones compartidos"}),", pero con algunas caracter\xedsticas espec\xedficas:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Este objeto solo puede contener objetos compartidos y colecciones compartidas. Intentar agregar otros tipos de valores (objetos no compartidos o colecciones, nulos, valores escalares) generar\xe1 un error."}),"\n",(0,s.jsxs)(o.li,{children:["Para agregar una propiedad a este objeto debe estar rodeado por la estructura ",(0,s.jsx)(o.em,{children:"Use...End use"}),", de lo contrario, se devuelve un error. Sin embargo, es posible leer un atributo fuera de una estructura ",(0,s.jsx)(o.em,{children:"Use...End use"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Cuando est\xe1 rodeado por la estructura ",(0,s.jsx)(o.em,{children:"Use...End use"}),", los atributos de primer nivel de ",(0,s.jsx)(o.strong,{children:"Storage"})," est\xe1n bloqueados para otros procesos."]}),"\n",(0,s.jsxs)(o.li,{children:["A diferencia de los objetos compartidos est\xe1ndar, el objeto devuelto por ",(0,s.jsx)(o.strong,{children:"Storage"})," NO compartir\xe1 su ",(0,s.jsx)(o.em,{children:"identificador de bloqueo"})," con objetos compartidos o colecciones agregadas como atributos (para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,s.jsx)(o.em,{children:"Identificador de bloqueo"}),")."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(o.p,{children:["Una pr\xe1ctica com\xfan podr\xeda ser inicializar el objeto ",(0,s.jsx)(o.strong,{children:"Storage"})," en el :"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0Use(Storage)\n\xa0\xa0\xa0\xa0Storage.counters:=New shared object("customers";0;"invoices";0)\n\xa0End use\n'})}),"\n",(0,s.jsx)(o.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(o.p,{children:["Este ejemplo muestra una forma est\xe1ndar de establecer valores de ",(0,s.jsx)(o.strong,{children:"Almacenamiento"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0Use(Storage)\n\xa0\xa0\xa0\xa0Storage.mydata:=New shared object\n\xa0\xa0\xa0\xa0Use(Storage.mydata)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.mydata.prop1:="Smith"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.mydata.prop2:=100\n\xa0\xa0\xa0\xa0End use\n\xa0End use\n'})}),"\n",(0,s.jsx)(o.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Storage"})," permite implementar un singleton con una ",(0,s.jsx)(o.em,{children:"inicializaci\xf3n lenta"}),", como se muestra en el siguiente ejemplo."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," para m\xe1s informaci\xf3n acerca de los patrones de singleton, puede consultar esta p\xe1gina de ",(0,s.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Singleton%5Fpattern",children:"Wikipedia"}),"."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $0 : Integer\n\xa0var $counterValue : Integer\n\xa0var counter : Object\xa0//crea una referencia al contador para el proceso\n\xa0\n\xa0If(counter=Null)\xa0//Si esta referencia es nula, obtenga if de Storage\n\xa0\xa0\xa0\xa0Use(Storage)\xa0// \xa1El uso del almacenamiento solo se necesita una vez!\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Storage.counter=Null)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.counter:=New shared object("operation";0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0counter:=Storage.counter\xa0//Obtener la referencia del objeto compartido contador\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n\xa0Use(counter)\xa0//use directamente el contador de objetos compartidos (\xa1no necesita usar Storage!)\n\xa0\xa0\xa0\xa0counter.operation:=counter.operation+1\n\xa0\xa0\xa0\xa0$counterValue:=counter.operation\n\xa0End use\n\xa0\n\xa0$0:=$counterValue\n'})}),"\n",(0,s.jsx)(o.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.em,{children:"Objetos y colecciones compartidos"})}),"\n",(0,s.jsx)(o.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero de comando"}),(0,s.jsx)(o.td,{children:"1525"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Hilo seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return c},a:function(){return a}});var r=n(667294);let s={},t=r.createContext(s);function a(e){let o=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);