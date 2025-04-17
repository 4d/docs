"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64410"],{402841:function(e,n,t){t.r(n),t.d(n,{default:()=>A,frontMatter:()=>a,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/st-set-text","title":"ST SET TEXT","description":"ST SET TEXT ( { ;} objeto ; nuevTexto {; inicioSel {; finSel*}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/st-set-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-text","permalink":"/docs/es/20-R8/commands/st-set-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-set-text","title":"ST SET TEXT","slug":"/commands/st-set-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST SET PLAIN TEXT","permalink":"/docs/es/20-R8/commands/st-set-plain-text"},"next":{"title":"Subregistros","permalink":"/docs/es/20-R8/commands/theme/Subrecords"}}'),i=t("785893"),o=t("250065");let a={id:"st-set-text",title:"ST SET TEXT",slug:"/commands/st-set-text",displayed_sidebar:"docs"},l=void 0,r={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ST SET TEXT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"nuevTexto"})," {; ",(0,i.jsx)(n.em,{children:"inicioSel"})," {; ",(0,i.jsx)(n.em,{children:"finSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable o un campo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o Variable o campo Texto (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nuevText"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Texto a insertar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"inicioSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Inicio de la selecci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"finSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Fin de la selecci\xf3n"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ST SET TEXT inserta el texto pasado en el par\xe1metro ",(0,i.jsx)(n.em,{children:"nuevText"})," en el campo o variable de texto con estilo designado por el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"}),". Este comando s\xf3lo se aplica al texto sin formato del par\xe1metro de ",(0,i.jsx)(n.em,{children:"objeto"}),", sin modificar las etiquetas de estilo que contiene. Se puede utilizar para modificar por programaci\xf3n, texto con estilo en la pantalla."]}),"\n",(0,i.jsx)(n.h3,{id:""}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Durante la ejecuci\xf3n, si el objeto tiene el foco, el comando s\xf3lo se aplica al objeto que se est\xe1 editando y no a su fuente de datos (campo o variable). Los cambios s\xf3lo se transfieren a la fuente (y a cualquier otro objeto con esta misma fuente) cuando el objeto que se est\xe1 editando se valida, ya sea por perder el foco o con la tecla ",(0,i.jsx)(n.strong,{children:"Intro"}),". Si el objeto no tiene el foco, el comando se aplica directamente a la fuente de datos y los cambios son inmediatamente trasladados a otros objetos con la misma fuente.",(0,i.jsx)(n.br,{}),"\nSi se omite el par\xe1metro ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un campo o una variable y se pasa una referencia de campo o variable en lugar de una cadena. El comando se aplica directamente al campo o a la variable y los cambios son transferidos inmediatamente a todos los objetos que utilizan esta fuente, incluyendo el objeto con el foco."]}),"\n",(0,i.jsx)(n.h3,{id:"-1"}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"nuevText"}),", pase el texto a insertar. El comando ST SET TEXT est\xe1 dise\xf1ado para trabajar con texto enriquecido (multiestilo) con etiquetas de tipo ",(0,i.jsxs)(n.span,{children:[". En todos los dem\xe1s casos (particularmente, cuando trabaja con texto plano que contiene los caracteres <, > o &), debe utilizar el comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"}),'. Si pasa texto plano con los caracteres <, > o & al comando ST SET TEXT, el comando no hace nada. Este principio de funcionamiento es necesario porque si inserta directamente una cadena como "a<b" dentro de un texto enriquecido, no distorsionar\xe1 el an\xe1lisis interno de las etiquetas ',(0,i.jsxs)(n.span,{children:['. En este caso, el car\xe1cter "<" debe ser previamente codificado como "<", lo cual se puede hacer utilizando el comando ',(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})," (ver tambi\xe9n el ejemplo de este comando)."]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Los par\xe1metros opcionales ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," permiten designar una selecci\xf3n de texto en el objeto. Los valores ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," ofrecen una selecci\xf3n de texto sin formato, sin tener en cuenta ning\xfan tipo de etiquetas de estilo en el texto. La acci\xf3n del comando var\xeda seg\xfan los par\xe1metros opcionales ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si omite ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),", ST SET TEXT reemplaza todo el texto de ",(0,i.jsx)(n.em,{children:"objeto"})," por ",(0,i.jsx)(n.em,{children:"nuevText"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["Si pasa \xfanicamente ",(0,i.jsx)(n.em,{children:"inicioSel"})," o si los valores de ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," son iguales, ST SET TEXT inserta el texto ",(0,i.jsx)(n.em,{children:"nuevText"})," en ",(0,i.jsx)(n.em,{children:"objeto"})," a partir de ",(0,i.jsx)(n.em,{children:"inicioSel"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["Si pasa ambos ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),", ST SET TEXT remplaza el texto sin formato definido para estos l\xedmites con el texto ",(0,i.jsx)(n.em,{children:"nuevText"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Puede pasar 0 en ",(0,i.jsx)(n.em,{children:"finSel"})," para designar autom\xe1ticamente el \xfaltimo car\xe1cter del texto (pase 1 en ",(0,i.jsx)(n.em,{children:"inicioSel"})," para designar el primer caracter del texto)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["4D ofrece constantes predefinidas de manera que pueda designar autom\xe1ticamente los l\xedmites de selecci\xf3n en los par\xe1metros ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),'. Estas constantes se encuentran en el tema "',(0,i.jsx)(n.em,{children:"Texto multiestilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST End highlight"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"-1001"}),(0,i.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST End text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter del texto contenido en el objeto"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Start highlight"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"Designa el primer car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Start text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Designa el primer car\xe1cter del texto contenido en el objeto"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["(*) Debe pasar un nombre de objeto en ",(0,i.jsx)(n.em,{children:"objeto"})," para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," si ",(0,i.jsx)(n.em,{children:"inicioSel"})," es superior a ",(0,i.jsx)(n.em,{children:"finSel"}),", el texto no se modifica y la variable OK toma el valor 0 (excepto cuando ",(0,i.jsx)(n.em,{children:"finSel"})," vale 0, ver arriba)."]}),"\n",(0,i.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,i.jsx)(n.p,{children:"Despu\xe9s de ejecutar este comando, la variable OK toma el valor 1 si no se presenta ning\xfan error; de lo contrario, toma el valor 0. Este es el caso particularmente cuando las etiquetas de estilo no se eval\xfaan correctamente (etiquetas incorrectas o faltantes)."}),"\n",(0,i.jsx)(n.p,{children:"En caso de error, no cambia la variable. Cuando ocurre un error en una variable cuando se est\xe1 evaluando el texto, 4D transforma el texto en texto plano; como resultado, los caracteres <, > y & se convierten en entidades HTML."}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Si quiere reemplazar el texto con estilo seleccionado por el usuario con el contenido de una variable."}),"\n",(0,i.jsx)(n.p,{children:"Este es el texto seleccionado:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(890620).Z+"",width:"452",height:"39"})}),"\n",(0,i.jsx)(n.p,{children:"El contenido almacendo en el campo es el siguiente:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(875559).Z+"",width:"402",height:"63"})}),"\n",(0,i.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de este c\xf3digo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0vtempo:="Demonstraci\xf3n"\n\xa0GET HIGHLIGHT([Productos]Notas;vInicio;vFin)\n\xa0ST SET TEXT([Products]Notes;vtemp;vStart;vEnd)\n'})}),"\n",(0,i.jsx)(n.p,{children:"El campo y su contenido son los siguientes:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:t(629461).Z+"",width:"449",height:"46"})," ",(0,i.jsx)(n.img,{src:t(57234).Z+"",width:"402",height:"58"})]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/st-get-plain-text",children:"ST Get plain text"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/st-get-text",children:"ST Get text"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1115"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function A(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},890620:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},875559:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},629461:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},57234:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let i={},o=s.createContext(i);function a(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);