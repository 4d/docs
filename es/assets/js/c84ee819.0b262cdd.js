"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55999"],{7909:function(e,n,s){s.r(n),s.d(n,{default:()=>A,frontMatter:()=>i,metadata:()=>l,assets:()=>t,toc:()=>d,contentTitle:()=>r});var l=JSON.parse('{"id":"commands-legacy/object-set-list-by-reference","title":"OBJECT SET LIST BY REFERENCE","description":"OBJECT SET LIST BY REFERENCE ( { ;} objeto {; tipoLista}; lista* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-list-by-reference.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-list-by-reference","permalink":"/docs/es/commands/object-set-list-by-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-list-by-reference.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-list-by-reference","title":"OBJECT SET LIST BY REFERENCE","slug":"/commands/object-set-list-by-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET LIST BY NAME","permalink":"/docs/es/commands/object-set-list-by-name"},"next":{"title":"OBJECT SET MAXIMUM VALUE","permalink":"/docs/es/commands/object-set-maximum-value"}}'),o=s("785893"),a=s("250065");let i={id:"object-set-list-by-reference",title:"OBJECT SET LIST BY REFERENCE",slug:"/commands/object-set-list-by-reference",displayed_sidebar:"docs"},r=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OBJECT SET LIST BY REFERENCE"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," {; ",(0,o.jsx)(n.em,{children:"tipoLista"}),"}; ",(0,o.jsx)(n.em,{children:"lista"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,o.jsx)(n.br,{}),"Si se omite, objeto es un campo o variable"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Nombre de objeto (si se especifica *) o",(0,o.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tipoLista"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tipo de lista: Lista de valores, Lista de obligatorios o Lista de excluidos"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lista"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de referencia de lista"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"OBJECT SET LIST BY REFERENCE"})," define o remplaza la lista asociada con el objeto u objetos definidos por los par\xe1metros ",(0,o.jsx)(n.em,{children:"objeto"})," y ",(0,o.jsx)(n.em,{children:"*"}),", con la lista jer\xe1rquica definida en el par\xe1metro ",(0,o.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro objeto es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,o.jsxs)(n.p,{children:["Por defecto, si se omite el par\xe1metro ",(0,o.jsx)(n.em,{children:"tipoLista"}),", el comando define una lista de selecci\xf3n fuente (selecci\xf3n de valores) para el objeto. Puede designar cualquier tipo de lista en el par\xe1metro ",(0,o.jsx)(n.em,{children:"tipoLista"}),'. Para ello, s\xf3lo tiene que pasar una de las siguientes constantes del tema "',(0,o.jsx)(n.em,{children:"Propiedades de los objetos"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Comentario"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Choice list"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsx)(n.td,{children:'Lista simple de selecci\xf3n de valores (opci\xf3n "Lista" en la Lista de Propiedades) (por defecto)'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Excluded list"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:'Lista de valores no aceptados para la entrada (Opci\xf3n "Exclusiones" en la lista de propiedades)'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Required list"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:'Lista s\xf3lo los valores aceptados para la entrada (Opci\xf3n "Obligatoria" en la Lista de Propiedades)'})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"lista"}),", pase el n\xfamero de referencia de la lista jer\xe1rquica que desea asociar al objeto. Esta lista debe haber sido generada utilizando el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/copy-list",children:"Copy list"}),", ",(0,o.jsx)(n.a,{href:"/docs/es/commands/load-list",children:"Load list"})," o ",(0,o.jsx)(n.a,{href:"/docs/es/commands/new-list",children:"New list"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Para finalizar la asociaci\xf3n de una ",(0,o.jsx)(n.em,{children:"lista"})," con un ",(0,o.jsx)(n.em,{children:"objeto"}),", s\xf3lo pase 0 en el par\xe1metro ",(0,o.jsx)(n.em,{children:"lista"})," para el tipo de lista concerniente. Eliminar una asociaci\xf3n de lista, no elimina la referencia de lista en memoria. Recuerde llamar el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/clear-list",children:"CLEAR LIST"})," cuando ya no necesite la lista."]}),"\n",(0,o.jsx)(n.p,{children:"La lista de valores existente se sustituye en funci\xf3n de c\xf3mo se asocie la lista al objeto formulario:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"utilizando una lista de elecci\xf3n: se sustituye la propia lista."}),"\n",(0,o.jsx)(n.li,{children:"utilizando un array: la lista se copia en elementos de array."}),"\n",(0,o.jsxs)(n.li,{children:["utilizando un objeto (",(0,o.jsx)(n.em,{children:"no soportado en bases de datos binarias"}),"): la lista se copia como elementos de la colecci\xf3n en la propiedad ",(0,o.jsx)(n.em,{children:"values"})," del objeto."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Este comando es especialmente interesante en el contexto de un pop-up o combo box asociado a una variable o un campo. En este caso, la asociaci\xf3n es din\xe1mica y cualquier cambio en la lista se copia en el formulario. Cuando el objeto est\xe1 asociado a un array o a un objeto, la lista se copia en el array o el objeto y cualquier cambio en la lista no est\xe1n disponible de forma autom\xe1tica (ver el ejemplo 5)."}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Asociar una lista de opciones simples (tipo de lista predeterminado) a un campo de texto:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0vCountriesList:=New list\n\xa0APPEND TO LIST(vCountriesList;"Spain";1)\n\xa0APPEND TO LIST(vCountriesList;"Portugal";2)\n\xa0APPEND TO LIST(vCountriesList;"Greece";3)\n\xa0OBJECT SET LIST BY REFERENCE([Contact]Country;vCountriesList)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:'Asociar la lista "vColor" como una lista de selecci\xf3n simple con el pop-up/lista desplegable "DoorColor":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0vColor:=New list\n\xa0APPEND TO LIST(vColor;"Blue";1)\n\xa0APPEND TO LIST(vColor;"Green";2)\n\xa0APPEND TO LIST(vColor;"Red";3)\n\xa0APPEND TO LIST(vColor;"Yellow";4)\n\xa0OBJECT SET LIST BY REFERENCE(*;"DoorColor";Choice list;vColor)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsx)(n.p,{children:'Ahora desea asociar la lista "vColor" con un combo box denominado "WallColor". Como este combo box es editable, usted quiere asegurarse de que ciertos colores, como "negro", "morado", etc, no se puedan utilizar. Estos colores se colocan en la lista "vReject":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET LIST BY REFERENCE(*;"WallColor";Choice list;vColor)\n\xa0vReject:=New list\n\xa0APPEND TO LIST(vReject;"Black";1)\n\xa0APPEND TO LIST(vReject;"Gray";2)\n\xa0APPEND TO LIST(vReject;"Purple";3)\n\xa0OBJECT SET LIST BY REFERENCE(*;"WallColor";Excluded list;vReject)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,o.jsx)(n.p,{children:"Usted desea eliminar las asociaciones de listas:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET LIST BY REFERENCE(*;"WallColor";Choice list;0)\n\xa0OBJECT SET LIST BY REFERENCE(*;"WallColor";Required list;0)\n\xa0OBJECT SET LIST BY REFERENCE(*;"WallColor";Excluded list;0)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,o.jsx)(n.p,{children:"Este ejemplo ilustra la diferencia en la forma en que funciona el comando cuando se aplica a un men\xfa pop-up asociado a un array texto o a una variable texto. Hay dos men\xfas pop-up en un formulario:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(40492).Z+"",width:"270",height:"73"})}),"\n",(0,o.jsxs)(n.p,{children:["El contenido de estos men\xfas emergentes se define utilizando la lista ",(0,o.jsx)(n.em,{children:"<>vColor"})," (que contiene los valores de colores). Se ejecuta el siguiente c\xf3digo cuando se carga el formulario:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arr1;0)\xa0//arr1 pop up\n\xa0var text1 : Text\xa0//text1 pop up\n\xa0OBJECT SET LIST BY REFERENCE(*;"arr1";<>vColor)\n\xa0OBJECT SET LIST BY REFERENCE(*;"text1";<>vColor)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Durante la ejecuci\xf3n, ambos men\xfas proponen los mismos valores::"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{src:s(743043).Z+"",width:"299",height:"146"}),(0,o.jsx)(n.br,{}),"\n(",(0,o.jsx)(n.em,{children:"Montaje que muestra el contenido de los men\xfas de forma simult\xe1nea"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Luego ejecute el siguiente c\xf3digo, por ejemplo, por medio de un bot\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0APPEND TO LIST(<>vColor;"White";5)\n\xa0APPEND TO LIST(<>vColor;"Black";6)\n'})}),"\n",(0,o.jsx)(n.p,{children:"S\xf3lo el men\xfa asociado al campo texto se actualiza (por medio de la referencia din\xe1mica):"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(517195).Z+"",width:"294",height:"171"})}),"\n",(0,o.jsxs)(n.p,{children:["Con el fin de actualizar la lista asociada al pop-up gestionado por array, es necesario llamar de nuevo al comando ",(0,o.jsx)(n.strong,{children:"OBJECT SET LIST BY REFERENCE"})," para copiar el contenido de la lista."]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/object-get-list-reference",children:"OBJECT Get list reference"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/object-set-list-by-name",children:"OBJECT SET LIST BY NAME"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1266"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function A(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},40492:function(e,n,s){s.d(n,{Z:function(){return l}});let l="data:image/png;base64,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"},743043:function(e,n,s){s.d(n,{Z:function(){return l}});let l="data:image/png;base64,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"},517195:function(e,n,s){s.d(n,{Z:function(){return l}});let l="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var l=s(667294);let o={},a=l.createContext(o);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);