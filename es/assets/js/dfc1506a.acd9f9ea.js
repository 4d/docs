"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96859"],{325834:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>t,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/multi-sort-array","title":"MULTI SORT ARRAY","description":"MULTI SORT ARRAY ( array {; orden}{; array2 ; orden2 ; ... ; arrayN ; ordenN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/multi-sort-array.md","sourceDirName":"commands-legacy","slug":"/commands/multi-sort-array","permalink":"/docs/es/20-R7/commands/multi-sort-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmulti-sort-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"multi-sort-array","title":"MULTI SORT ARRAY","slug":"/commands/multi-sort-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LONGINT ARRAY FROM SELECTION","permalink":"/docs/es/20-R7/commands/longint-array-from-selection"},"next":{"title":"SELECTION RANGE TO ARRAY","permalink":"/docs/es/20-R7/commands/selection-range-to-array"}}'),a=n("785893"),d=n("250065");let o={id:"multi-sort-array",title:"MULTI SORT ARRAY",slug:"/commands/multi-sort-array",displayed_sidebar:"docs"},i=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"MULTI SORT ARRAY"})," ( ",(0,a.jsx)(r.em,{children:"array"})," {; ",(0,a.jsx)(r.em,{children:"orden"}),"}{; ",(0,a.jsx)(r.em,{children:"array2"})," ; ",(0,a.jsx)(r.em,{children:"orden2"})," ; ... ; ",(0,a.jsx)(r.em,{children:"arrayN"})," ; ",(0,a.jsx)(r.em,{children:"ordenN"}),"} )\xa0",(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.strong,{children:"MULTI SORT ARRAY"})," ( ",(0,a.jsx)(r.em,{children:"ptrArrayNombre"})," ; ",(0,a.jsx)(r.em,{children:"ordenArrayNombre"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe1metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"array"}),(0,a.jsx)(r.td,{children:"Array"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Array(s) a ordenar"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"orden"}),(0,a.jsx)(r.td,{children:"*"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:'">" efectuar una ordenaci\xf3n creciente o "<" efectuar una ordenaci\xf3n decreciente Si se omite "aa" no ordenaci\xf3n'})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"MULTI SORT ARRAY ( ptrArrayNombre ; ordenArrayNombre )"}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Par\xe1metro"}),(0,a.jsx)(r.td,{children:"Tipo"}),(0,a.jsx)(r.td,{children:"Descripci\xf3n"}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"ptrArrayNombre"}),(0,a.jsx)(r.td,{children:"Pointer array"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Array de punteros de arrays"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"ordenArrayNombre"}),(0,a.jsx)(r.td,{children:"Integer array"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Array de criterio de ordenaci\xf3n (1= ordenar por orden creciente, -1= ordenar por orden decreciente), 0= sincronizaci\xf3n con ordenaciones anteriores"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(r.p,{children:"El comando MULTI SORT ARRAY permite efectuar una ordenaci\xf3n multicriterios en un conjunto de arrays."}),"\n",(0,a.jsx)(r.p,{children:"Este comando admite dos sintaxis diferentes."}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"\u2022 Primera sintaxis: MULTI SORT"})," ",(0,a.jsx)(r.strong,{children:"ARRAY (Array{; orden}{; array2; sort2; ...; arrayN; ordenN})"})]}),"\n",(0,a.jsx)(r.p,{children:"Esta sintaxis es la m\xe1s sencilla; le permite pasar directamente los nombres de los arrays sincronizados a donde usted quiere aplicar una ordenaci\xf3n multicriterio."}),"\n",(0,a.jsxs)(r.p,{children:["Puede pasar un n\xfamero ilimitado de parejas (",(0,a.jsx)(r.em,{children:"Array"})," ",(0,a.jsx)(r.em,{children:";> o <"}),") y/o s\xf3lo arrays. Todos los arrays pasados como par\xe1metros se ordenan en de una manera sincronizada."]}),"\n",(0,a.jsxs)(r.p,{children:["Para utilizar los contenidos de un array como criterio de ordenaci\xf3n, pase el par\xe1metro ",(0,a.jsx)(r.em,{children:"orden"}),". El valor del par\xe1metro (",(0,a.jsx)(r.em,{children:"> o <"}),") determina el orden (creciente o decreciente) en el cual el array ser\xe1 ordenado. Si se omite el par\xe1metro ",(0,a.jsx)(r.em,{children:"orden"}),", el contenido del array no se utiliza como criterio de ordenaci\xf3n."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota:"})," recuerde que debe pasarse al menos un criterio de ordenaci\xf3n para que el comando funcione. Si no se define un criterio de ordenaci\xf3n, se genera un error."]}),"\n",(0,a.jsx)(r.p,{children:"Los niveles de ordenaci\xf3n se determinan por el orden en el cual los arrays se pasan al comando: la posici\xf3n de un array con criterio de ordenaci\xf3n en la sintaxis determina su nivel de ordenaci\xf3n."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"\u2022 Segunda sintaxis: MULTI SORT ARRAY (ptrArrayNombre; ordenArrayNombre)"})}),"\n",(0,a.jsxs)(r.p,{children:["Esta sintaxis, m\xe1s compleja, es muy valiosa para los desarrollos gen\xe9ricos (por ejemplo, usted puede crear un m\xe9todo gen\xe9rico para ordenar arrays de todo tipo, o una vez m\xe1s crear el equivalente de un comando ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/commands/sort-array",title:"SORT ARRAY",children:"SORT ARRAY"})," gen\xe9rico)."]}),"\n",(0,a.jsxs)(r.p,{children:["El par\xe1metro ",(0,a.jsx)(r.em,{children:"ptrArrayNombre"})," contiene el nombre de un array de punteros de array; cada elemento de este array es un puntero designando un array a ordenar. Las ordenaciones ser\xe1n efectuadas en el orden de los punteros de array definidos por ",(0,a.jsx)(r.em,{children:"ptrArrayNombre"}),". ",(0,a.jsx)(r.strong,{children:"Advertencia:"})," todos los arrays apuntados por ",(0,a.jsx)(r.em,{children:"ptrArrayNombre"})," deben tener el mismo n\xfamero de elementos."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota:"})," ",(0,a.jsx)(r.em,{children:"ptrArrayNombre"})," puede ser un array de punteros local ($ptrArrayNombre), proceso (ptrArrayNombre) o interproceso (<>ptrArrayNombre). En cambio, los elementos de este array deben apuntar a arrays de proceso o interproceso \xfanicamente."]}),"\n",(0,a.jsxs)(r.p,{children:["El par\xe1metro ",(0,a.jsx)(r.em,{children:"ordenArrayNombre"})," contiene el nombre de un array en el cual cada elemento indica el criterio de ordenaci\xf3n (-1, 0 o 1) del elemento del array de punteros correspondiente:"]}),"\n",(0,a.jsxs)(r.p,{children:["-1 = Ordenaci\xf3n decreciente.",(0,a.jsx)(r.br,{}),"\n0 = El array no se utiliza como criterio de ordenaci\xf3n pero debe ser ordenado en funci\xf3n de otras ordenaciones.",(0,a.jsx)(r.br,{}),"\n1 = Ordenaci\xf3n creciente."]}),"\n",(0,a.jsxs)(r.p,{children:["Para cada elemento del array ",(0,a.jsx)(r.em,{children:"ptrArrayNombre"}),", debe corresponder un elemento del array ",(0,a.jsx)(r.em,{children:"ordenArrayNombre"}),". Por lo tanto los dos arrays deben tener exactamente el mismo n\xfamero de elementos."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["no es posible ordenar arrays de tipo Puntero o ",(0,a.jsx)(r.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Imagen"}),". Puede ordenar un elemento de un array de bidimensional (es decir ",(0,a.jsx)(r.em,{children:"a2DArray{$vlThisElem}"}),") pero no puede ordenar el array bidimensional en s\xed mismo (es decir ",(0,a.jsx)(r.em,{children:"a2DArray"}),")."]}),"\n",(0,a.jsx)(r.li,{children:"You can sort Object arrays. Null elements are grouped and array elements are sorted with an internal order."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsxs)(r.p,{children:["El siguiente ejemplo utiliza la primera sintaxis: crea cuatro arrays y los ordena por ciudad (orden ascendente) luego por salario (orden descendente) con los dos \xfaltimos arrays ",(0,a.jsx)(r.em,{children:"nombres_array"})," y ",(0,a.jsx)(r.em,{children:"telNum_array"}),", siendo sincronizados de acuerdo con los criterios de ordenaci\xf3n anteriores:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0ALL RECORDS([Empleados])\n\xa0SELECTION TO ARRAY([Empleados]Ciudad;ciudades;[Empleados]Salario;salarios;[Empleados]Nombre;\n\xa0nombres;[Empleados]TelNum;telNums)\n\xa0MULTI SORT ARRAY(ciudades;>;salarios;<;nombres;telNums)\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Si quiere que el array de nombres sea utilizado como tercer criterio de ordenaci\xf3n, s\xf3lo a\xf1ada ",(0,a.jsx)(r.em,{children:"> o <"})," despu\xe9s del par\xe1metro ",(0,a.jsx)(r.em,{children:"nombres_array."}),(0,a.jsx)(r.br,{}),"\nObserve que la sintaxis:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0MULTI SORT ARRAY(ciudades;>;salarios;nombres;telNums)\n"})}),"\n",(0,a.jsx)(r.p,{children:"es equivalente a:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0SORT ARRAY(ciudades;salarios;nombres;telNums;>)\n"})}),"\n",(0,a.jsx)(r.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(r.p,{children:"El siguiente ejemplo utiliza la segunda sintaxis: crea cuatro arrays y los ordena por ciudad (orden creciente) y empresa (orden decreciente); los \xfaltimos dos arrays, nombres_Array y telNum_Array, est\xe1n sincronizados de acuerdo al criterio de ordenaci\xf3n anterior:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0ALL RECORDS([Empleados])\n\xa0SELECTION TO ARRAY([Empleados]Ciudad;ciudades;[Empleados]Empresa;empresas;[Empleados]Nombre;\n\xa0nombres;[Empleados]TelNum;telNums)\n\xa0ARRAY POINTER(punteros_Array;4)\n\xa0ARRAY LONGINT(sorts_Array;4)\n\xa0Array_punteros{1}:=->ciudades\n\xa0Array_orden{1}:=1\n\xa0Array_punteros{2}:=->empresas\n\xa0Array_orden{2}:=-1\n\xa0Array_punteros{3}:=->nombres\n\xa0Array_orden{3}:=0\n\xa0Array_punteros{4}:=->telNums\n\xa0Array_orden{4}:=0\n\xa0MULTI SORT ARRAY(Array_punteros;Array_orden)\n"})}),"\n",(0,a.jsx)(r.p,{children:"Si quiere que el array de nombres se utilice como tercer criterio de ordenaci\xf3n, debe asignar el valor 1 al elemento Array_orden{3}. O bien, si quiere que los arrays se ordenen s\xf3lo por el criterio ciudades, asigne el valor 0 a los elementos Array_orden{2}, Array_orden{3} y Array_orden{4}. De esta manera, puede obtener un resultado id\xe9ntico a SORT ARRAY(ciudades;empresas;nombres;telNums;>)."}),"\n",(0,a.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/es/20-R7/commands/order-by",children:"ORDER BY"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/commands/sort-array",children:"SORT ARRAY"})]}),"\n",(0,a.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero de comando"}),(0,a.jsx)(r.td,{children:"718"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Hilo seguro"}),(0,a.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return o}});var s=n(667294);let a={},d=s.createContext(a);function o(e){let r=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);