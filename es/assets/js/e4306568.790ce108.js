"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47472"],{584461:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>m,assets:()=>l,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/order-by-attribute","title":"ORDER BY ATTRIBUTE","description":"ORDER BY ATTRIBUTE ( {tabla ;} campoObjeto ; rutaAtrib ; > o  o  o <N} {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/order-by-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/order-by-attribute","permalink":"/docs/es/commands/order-by-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Forder-by-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"order-by-attribute","title":"ORDER BY ATTRIBUTE","slug":"/commands/order-by-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ORDER BY","permalink":"/docs/es/commands/order-by"},"next":{"title":"ORDER BY FORMULA","permalink":"/docs/es/commands/order-by-formula"}}'),s=a("785893"),t=a("250065");let o={id:"order-by-attribute",title:"ORDER BY ATTRIBUTE",slug:"/commands/order-by-attribute",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ORDER BY ATTRIBUTE"})," ( {",(0,s.jsx)(n.em,{children:"tabla"})," ;} ",(0,s.jsx)(n.em,{children:"campoObjeto"})," ; ",(0,s.jsx)(n.em,{children:"rutaAtrib"})," ; > o < {; ",(0,s.jsx)(n.em,{children:"campoObjeto2"})," ; ",(0,s.jsx)(n.em,{children:"rutaAtrib2"})," ; > o <2 ; ... ; ",(0,s.jsx)(n.em,{children:"campoObjetoN"})," ; ",(0,s.jsx)(n.em,{children:"rutaAtribN"})," ; > o <N} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabla"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabla para la cual ordenar los registros seleccionados, o tabla por defecto, si se omite"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"campoObjeto"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Campo objeto que contiene el atributo de ordenaci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rutaAtrib"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre o ruta del atributo en el que se define el orden para cada nivel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"> o <"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Direcci\xf3n de ordenaci\xf3n para cada nivel: > para ordenar en orden ascendente o < para ordenar en orden descendente"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Continuar bandera de orden"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"ORDER BY ATTRIBUTE"})," ordena (reordena) los registros de la selecci\xf3n actual de ",(0,s.jsx)(n.em,{children:"tabla"})," para el proceso actual basado en el contenido de ",(0,s.jsx)(n.em,{children:"rutaAtrib"})," de ",(0,s.jsx)(n.em,{children:"campoObjeto"}),". Despu\xe9s de terminada la ordenaci\xf3n, el nuevo primer registro de la selecci\xf3n se convierte en el registro actual."]}),"\n",(0,s.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"tabla"}),", el comando se aplica a la tabla por defecto, si se ha especificado. De lo contrario, 4D utiliza la tabla del primer campo pasado como un par\xe1metro."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"campoObjeto"}),", pase el campo Objeto cuyo atributo desea utilizar para la ordenaci\xf3n. Este campo puede pertenecer a ",(0,s.jsx)(n.em,{children:"tabla"})," o a una tabla relacionada con ",(0,s.jsx)(n.em,{children:"tabla"})," con una relaci\xf3n autom\xe1tica o manual. En este caso, la ordenaci\xf3n es siempre secuencial."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"rutaAtrib"}),', pase la ruta del atributo cuyos valores desea utilizar para ordenar los registros, por ejemplo "ni\xf1os.genero.edad".']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"S\xf3lo los atributos que contienen valores escalares (n\xfameros, textos, booleanos, fecha) pueden ser ordenados. Otros tipos de valores (objeto, imagen...) son considerados como valores nulos."}),"\n",(0,s.jsx)(n.li,{children:"No se puede pasar un elemento de un array en rutaAtrib (en este caso, se devuelve un error)."}),"\n",(0,s.jsx)(n.li,{children:'Recuerde que los nombres de atributos son sensibles a las may\xfasculas y min\xfasculas: "MiAtt" y "miAtt" son nombres de atributos diferentes en el mismo registro.'}),"\n",(0,s.jsxs)(n.li,{children:['No puede utilizar atributos cuyo nombre contenga caracteres especiales como "." o "[]", porque ser\xe1n evaluados incorrectamente como tokens en el orden por cadena. Para m\xe1s informaci\xf3n, por favor consulte el p\xe1rrafo ',(0,s.jsx)(n.em,{children:"Identificadores de propiedades de objetos"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Si el atributo del campo contiene valores de tipos diferentes (es decir, n\xfameros, cadenas, booleanos), primero se agrupan por tipo, luego por valor."}),"\n",(0,s.jsxs)(n.p,{children:["Si el valor del atributo de campo es ",(0,s.jsx)(n.strong,{children:"nulo"})," para algunos registros (es decir, el valor del atributo es nulo o ",(0,s.jsx)(n.em,{children:"rutaAtrib"})," no existe en el campo):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si la orden es ",(0,s.jsx)(n.strong,{children:"ascendente"})," (>), los registros con valor ",(0,s.jsx)(n.strong,{children:"nulo"})," se colocar\xe1n al principio de la selecci\xf3n."]}),"\n",(0,s.jsxs)(n.li,{children:["Si el orden es ",(0,s.jsx)(n.strong,{children:"descendente"})," (<), los registros con valor ",(0,s.jsx)(n.strong,{children:"nulo"})," se colocar\xe1n al final de la selecci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Puede ordenar la selecci\xf3n en uno o en varios niveles. Para cada nivel de ordenaci\xf3n, se especifica un ",(0,s.jsx)(n.em,{children:"campo"}),", un ",(0,s.jsx)(n.em,{children:"rutaAtrib"})," y el sentido de ordenaci\xf3n en ",(0,s.jsx)(n.em,{children:"> o <"}),'. Si pasa el s\xedmbolo (>) "mayor que", el orden es ascendente. Si pasa el s\xedmbolo (<) "menor que", el orden es descendente. Si no se especifica el sentido de ordenaci\xf3n, el orden ascendente es el valor predeterminado.',(0,s.jsx)(n.br,{}),"\nSi s\xf3lo se especifica un campo (un nivel de ordenaci\xf3n) y est\xe1 indexado, el \xedndice se utiliza para la orden. Si el campo no est\xe1 indexado o si hay m\xe1s de un campo, el orden es secuencial."]}),"\n",(0,s.jsxs)(n.p,{children:["Para varias ordenaciones (ordenaciones en varios campos), puede llamar a ",(0,s.jsx)(n.strong,{children:"ORDER BY ATTRIBUTE"})," tantas veces como sea necesario y especificar el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", a excepci\xf3n de la \xfaltima llamada ",(0,s.jsx)(n.strong,{children:"ORDER BY ATTRIBUTE"}),", que inicia la operaci\xf3n de ordenaci\xf3n. Esta funcionalidad es \xfatil para la gesti\xf3n de ordenaciones m\xfaltiples en interfaces de usuario personalizadas. Tenga en cuenta que puede combinar las llamadas ",(0,s.jsx)(n.strong,{children:"ORDER BY ATTRIBUTE"})," con llamadas ",(0,s.jsx)(n.a,{href:"/docs/es/commands/order-by",children:"ORDER BY"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," con esta sintaxis, puede pasar un solo nivel de ordenaci\xf3n (campo) por llamada ",(0,s.jsx)(n.strong,{children:"ORDER BY ATTRIBUTE"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["No importa qu\xe9 forma de ordenaci\xf3n se haya definido, si la operaci\xf3n de ordenaci\xf3n va a tomar alg\xfan tiempo, 4D muestra autom\xe1ticamente un mensaje que contiene un term\xf3metro de progreso. Este mensaje se puede controlar mediante el uso de los comandos ",(0,s.jsx)(n.a,{href:"/docs/es/commands/messages-on",children:"MESSAGES ON"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/commands/messages-off",children:"MESSAGES OFF"}),". Si se muestra el term\xf3metro de progreso, el usuario puede hacer clic en el bot\xf3n ",(0,s.jsx)(n.strong,{children:"Detener"})," para interrumpir la ordenaci\xf3n. Si se finaliza la ordenaci\xf3n, OK pasa a 1. De lo contrario, si se interrumpe la ordenaci\xf3n, OK pasa a 0 (cero)."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Usted desea ordenar la selecci\xf3n actual por edad (descendente) y luego por su nombre (ascendente). El orden por defecto es:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// [Customer]OB_Info contents partial export\n{"LastName":"Giorgio","age":33,"client":true},\n{"LastName":"Sarah","age":42,"client":true},\n{"LastName":"Mikken","age":"Forty-six","client":true},\n{"LastName":"Wesson","age":44,"client":true},\n{"LastName":"Johnson","age":44,"client":false},\n{"LastName":"Hamp","age":"Sixty","client":true},\n{"LastName":"Smeldorf","age":33,"client":true},\n{"LastName":"Martin","client":true],\n{"LastName":"Evan","age":36,"client":true},\n{"LastName":"Collins","age":33,"client":true,"Sex":"female"},\n{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},\n{"LastName":"Smeldorf","age":54,"client":true},\n{"LastName":"Smith","age":42,"client":true},\n{"LastName":"Jones","age":52,"client":true},\n{"LastName":"Kerrey","age":44,"client":true},\n{"LastName":"Gordini","client":true},\n{"LastName":"Delaferme","age":54,"client":true},\n{"LastName":"Belami","age":"Forty-six","client":true},\n{"LastName":"Smeldorf","age":22,"client":true},\n{"LastName":"Smeldorf","age":70,"client":true}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Si ejecuta:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ORDER BY ATTRIBUTE([Customer];[Customer]OB_Info;"age";<;[Customer]OB_Info;"LastName";>)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Los registros est\xe1n en el siguiente orden:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"LastName":"Gordini","client":true}, //al inicio porque\n{"LastName":"Martin","client":true}, //age is null (missing)\n{"LastName":"Smeldorf","age":70,"client":true}\n{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},\n{"LastName":"Delaferme","age":54,"client":true}, \n{"LastName":"Smeldorf","age":54,"client":true},\n{"LastName":"Jones","age":52,"client":true},\n{"LastName":"Johnson","age":44,"client":false},\n{"LastName":"Kerrey","age":44,"client":true},\n{"LastName":"Wesson","age":44,"client":true},\n{"LastName":"Sarah","age":42,"client":true},\n{"LastName":"Smith","age":42,"client":true},\n{"LastName":"Evan","age":36,"client":true},\n{"LastName":"Collins","age":33,"client":true,"Sex":"female"},\n{"LastName":"Giorgio","age":33,"client":true},\n{"LastName":"Smeldorf","age":33,"client":true},\n{"LastName":"Smeldorf","age":22,"client":true},\n{"LastName":"Hamp","age":"Sixty","client":true}, //string values in age\n{"LastName":"Belami","age":"Forty-six","client":true}, //are handled separately\n{"LastName":"Mikken","age":"Forty-six","client":true}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1407"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return o}});var r=a(667294);let s={},t=r.createContext(s);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);