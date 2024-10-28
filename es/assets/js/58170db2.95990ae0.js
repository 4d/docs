"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1452],{747146:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=a(474848),r=a(28453);const o={id:"distinct-values",title:"DISTINCT VALUES",slug:"/commands/distinct-values",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/distinct-values",title:"DISTINCT VALUES",description:"DISTINCT VALUES ( unCampo ; array {; contArray} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/distinct-values.md",sourceDirName:"commands-legacy",slug:"/commands/distinct-values",permalink:"/docs/es/commands/distinct-values",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"distinct-values",title:"DISTINCT VALUES",slug:"/commands/distinct-values",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DISTINCT ATTRIBUTE VALUES",permalink:"/docs/es/commands/distinct-attribute-values"},next:{title:"Find in array",permalink:"/docs/es/commands/find-in-array"}},l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," ( ",(0,s.jsx)(n.em,{children:"unCampo"})," ; ",(0,s.jsx)(n.em,{children:"array"})," {; ",(0,s.jsx)(n.em,{children:"contArray"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"unField"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Campo o subcampo indexable a utilizar para datos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Array a recibir los datos del campo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contArray"}),(0,s.jsx)(n.td,{children:"Integer array, Real array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Array a recibir el n\xfamero de ocurrencias de cada valor"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," crea y llena el array ",(0,s.jsx)(n.em,{children:"array"})," con todos valores distintos (\xfanicos) del campo ",(0,s.jsx)(n.em,{children:"campo"})," para la selecci\xf3n actual de la tabla del campo y, opcionalmente, devuelve en ",(0,s.jsx)(n.em,{children:"contArray"})," el n\xfamero de ocurrencias de cada valor."]}),"\n",(0,s.jsxs)(n.p,{children:["Puede pasar a ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," todo tipo de campo o subcampo ",(0,s.jsx)(n.strong,{children:"indexable"}),", es decir, cuyo tipo soporte indexaci\xf3n sin que est\xe9 indexado necesariamente.",(0,s.jsx)(n.br,{}),"\nSin embargo, la ejecuci\xf3n de este comando con campos no indexados ser\xe1 m\xe1s lenta. Tambi\xe9n observe que en este caso, el comando pierde el registro actual."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," analiza y extrae los valores no repetidos en los registros seleccionados \xfanicamente."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," cuando el comando ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," se llama durante una transacci\xf3n (que no ha terminado a\xfan), el comando ",(0,s.jsx)(n.strong,{children:"tiene en cuenta"})," los registros creados durante esa transacci\xf3n."]}),"\n",(0,s.jsxs)(n.p,{children:["El array utilizado por ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," debe ser del mismo tipo que el campo pasado como primer par\xe1metro, de lo contrario el array se vuelve a digitar. Hay una excepci\xf3n a esta regla:si el campo es de tipo Imagen (y est\xe1 asociado a un \xedndice de palabras claves), el array correspondiente debe ser de tipo Texto."]}),"\n",(0,s.jsxs)(n.p,{children:["Despu\xe9s del llamado, el tama\xf1o del array es igual al n\xfamero de valores distintos encontrados en la selecci\xf3n. El comando no cambia la selecci\xf3n actual ni el registro actual. El comando ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," utiliza el \xedndice del campo, de manera que los elementos en ",(0,s.jsx)(n.em,{children:"array"})," se devuelven ordenados en orden ascendente. Si este es el orden que usted necesita, no es necesario llamar a ",(0,s.jsx)(n.a,{href:"/docs/es/commands/sort-array",children:"SORT ARRAY"})," despu\xe9s de utilizar ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," cuando se ejecuta ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," se ejecuta con un campo de texto o imagen asociado a un \xedndice de palabras claves, el comando llena el array con las palabras claves del \xedndice. A diferencia de otros tipos de datos, los valores devueltos difieren de acuerdo a la existencia del \xedndice. El \xedndice de palabras claves siempre se tiene en cuenta, incluso cuando el campo est\xe1 asociado a un \xedndice est\xe1ndar. Si el campo texto o imagen no est\xe1 asociado a un \xedndice de palabras claves, el array se devuelve vac\xedo."]}),"\n",(0,s.jsxs)(n.p,{children:["El comando acepta un array ",(0,s.jsx)(n.em,{children:"contArray"})," como un par\xe1metro opcional. Cuando se pasa, este array devuelve, para cada valor no repetido en ",(0,s.jsx)(n.em,{children:"campo"}),", el n\xfamero de ocurrencias detectadas en la selecci\xf3n actual. El array ",(0,s.jsx)(n.em,{children:"contArray"})," Se dimensiona autom\xe1ticamente al n\xfamero de elementos en ",(0,s.jsx)(n.em,{children:"array"}),'. Por ejemplo, para una selecci\xf3n que contiene tres registros con los valores de campos "A", "B" y "A", ',(0,s.jsx)(n.em,{children:"array"})," contendr\xe1 {A;B} y ",(0,s.jsx)(n.em,{children:"contArray"})," contendr\xe1 {2;1}. Puede pasar un array Entero largo o Real en ",(0,s.jsx)(n.em,{children:"contArray"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," el par\xe1metro ",(0,s.jsx)(n.em,{children:"contArray"})," no es soportado para los campos texto o imagen asociados a los \xedndices de palabras claves (en este contexto, se devuelve vac\xedo)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Advertencia:"})," ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," puede crear array grandes, dependiendo del tama\xf1o de la selecci\xf3n y del n\xfamero de valores diferentes en los registros. Los arrays residen en memoria, por lo tanto es buena idea probar el resultado despu\xe9s de la ejecuci\xf3n del comando. Para hacer esto, pruebe el tama\xf1o del array resultante o cubra la llamada al comando, utilizando un m\xe9todo de proyecto ",(0,s.jsx)(n.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," este comando es optimizado por 4D Server. El array se crea y los valores son calculados en el servidor; luego el array se env\xeda, en su totalidad, al cliente."]}),"\n",(0,s.jsx)(n.h5,{id:""}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando no soporta campos de tipo Objeto."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo crea una lista de ciudades a partir de la selecci\xf3n actual e indica al usuario el n\xfamero de ciudades en las cuales la empresa tiene almacenes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Almacenes])\xa0// Crear una selecci\xf3n de registros\n\xa0DISTINCT VALUES([Almacenes]Ciudad;asCiudades)\n\xa0ALERT("La empresa tiene almacenes en "+String(Size of array(asCiudades))+" ciudades.")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:'Usted quiere obtener la lista completa de palabras claves contenidas en el \xedndice de palabras claves del campo "Fotos":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([IMAGES])\n\xa0ARRAY TEXT(<>_MyKeywords;10)\n\xa0DISTINCT VALUES([IMAGES]Fotos;<>_MyKeywords)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Para calcular las estad\xedsticas, usted desea ordenar el n\xfamero de valores distintos en un campo en orden descendente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($_issue_type;0)\n\xa0ARRAY LONGINT($_issue_type_instance;0)\n\xa0DISTINCT VALUES([Issue]iType;$_issue_type;$_issue_type_instances)\n\xa0SORT ARRAY($_issue_type_instances;$_issue_type;<)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/get-text-keywords",children:"GET TEXT KEYWORDS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/selection-to-array",children:"SELECTION TO ARRAY"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>c});var s=a(296540);const r={},o=s.createContext(r);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);