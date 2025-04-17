"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57192"],{46152:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/st-set-attributes","title":"ST SET ATTRIBUTES","description":"ST SET ATTRIBUTES ( { ;} objeto ; inicioSel ; finSel ; nomAtrib ; valorAtrib {; nomAtrib2 ; valorAtrib2 ; ... ; nomAtribN ; valorAtribN*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/st-set-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-attributes","permalink":"/docs/es/commands/st-set-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-attributes.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"st-set-attributes","title":"ST SET ATTRIBUTES","slug":"/commands/st-set-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST INSERT URL","permalink":"/docs/es/commands/st-insert-url"},"next":{"title":"ST SET OPTIONS","permalink":"/docs/es/commands/st-set-options"}}'),s=t("785893"),i=t("250065");let l={id:"st-set-attributes",title:"ST SET ATTRIBUTES",slug:"/commands/st-set-attributes",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ST SET ATTRIBUTES"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"inicioSel"})," ; ",(0,s.jsx)(n.em,{children:"finSel"})," ; ",(0,s.jsx)(n.em,{children:"nomAtrib"})," ; ",(0,s.jsx)(n.em,{children:"valorAtrib"})," {; ",(0,s.jsx)(n.em,{children:"nomAtrib2"})," ; ",(0,s.jsx)(n.em,{children:"valorAtrib2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"nomAtribN"})," ; ",(0,s.jsx)(n.em,{children:"valorAtribN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del objeto (si se especifica *), o Variable o campo Texto (si se omite *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inicioSel"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Inicio de la nueva selecci\xf3n de texto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"finSel"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Fin de la nueva selecci\xf3n de texto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomAtrib"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Atributo a definir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valorAtrib"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nuevo valor del atributo"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ST SET ATTRIBUTES permite modificar uno o m\xe1s atributos de estilo en el(los) objeto(s) de formulario designado(s) por ",(0,s.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:""}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Durante la ejecuci\xf3n, si el objeto tiene el foco, el comando s\xf3lo se aplica al objeto que se est\xe1 editando y no a su fuente de datos (campo o variable). Los cambios s\xf3lo se transfieren a la fuente (y a cualquier otro objeto con esta misma fuente) cuando el objeto que se est\xe1 editando se valida, ya sea por perder el foco o con la tecla ",(0,s.jsx)(n.strong,{children:"Intro"}),". Si el objeto no tiene el foco, el comando se aplica directamente a la fuente de datos y los cambios son inmediatamente trasladados a otros objetos con la misma fuente.",(0,s.jsx)(n.br,{}),"\nSi se omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un campo o una variable y se pasa una referencia de campo o variable en lugar de una cadena. El comando se aplica directamente al campo o a la variable y los cambios son transferidos inmediatamente a todos los objetos que utilizan esta fuente, incluyendo el objeto con el foco."]}),"\n",(0,s.jsx)(n.h3,{id:"-1"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": s\xf3lo puede utilizar los atributos de estilo con campos de tipo texto. Dado que los campos de tipo Alfa tienen una longitud predefinida, la adici\xf3n de etiquetas de estilo podr\xeda producir una p\xe9rdida de datos."]}),"\n",(0,s.jsxs)(n.p,{children:["La definici\xf3n de un atributo se efect\xfaa por medio de la inserci\xf3n o modificaci\xf3n de etiquetas HTML de estilo al interior del texto (para m\xe1s informaci\xf3n sobre este punto, consulte el ",(0,s.jsx)(n.em,{children:"Manual de Dise\xf1o"}),"). Tenga en cuenta que ST SET ATTRIBUTES inserta etiquetas de estilo en todos los casos, aunque ",(0,s.jsx)(n.em,{children:"objeto"})," designe los objetos texto del formulario que no tengan la propiedad Multiestilo."]}),"\n",(0,s.jsxs)(n.p,{children:["Los par\xe1metros ",(0,s.jsx)(n.em,{children:"inicioSel"})," y ",(0,s.jsx)(n.em,{children:"finSel"})," se pueden utilizar para designar a la selecci\xf3n de texto a la cual aplicar la modificaci\xf3n de estilo al interior del ",(0,s.jsx)(n.em,{children:"objeto"}),". En ",(0,s.jsx)(n.em,{children:"inicioSel"})," pase la posici\xf3n del primer car\xe1cter a modificar y en ",(0,s.jsx)(n.em,{children:"finSel"}),", pase la posici\xf3n del \xfaltimo car\xe1cter a modificar m\xe1s uno. Puede pasar 0 en ",(0,s.jsx)(n.em,{children:"finSel"})," para designar autom\xe1ticamente el \xfaltimo car\xe1cter del texto (pase 1 en ",(0,s.jsx)(n.em,{children:"inicioSel"})," para designar el primer car\xe1cter).",(0,s.jsx)(n.br,{}),"\nSi el valor de ",(0,s.jsx)(n.em,{children:"finSel"})," es superior al n\xfamero de caracteres del objeto, todos los caracteres entre ",(0,s.jsx)(n.em,{children:"inicioSel"})," y el final del textose modifican. Si el valor de ",(0,s.jsx)(n.em,{children:"inicioSel"})," es mayor que el de ",(0,s.jsx)(n.em,{children:"finSel"})," (excepto cuando ",(0,s.jsx)(n.em,{children:"finSel"})," vale 0), el comando no hace nada y la variable OK toma el valor 0.",(0,s.jsx)(n.br,{}),"\nLos valores de ",(0,s.jsx)(n.em,{children:"inicioSel"})," y ",(0,s.jsx)(n.em,{children:"finSel"})," no tienen en cuenta las etiquetas de estilo presentes en el \xe1rea. Son evaluados sobre la base de texto sin formato (texto donde las etiquetas de estilo han sido filtradas)."]}),"\n",(0,s.jsxs)(n.p,{children:["4D ofrece constantes predefinidas para que pueda designar autom\xe1ticamente los l\xedmites de selecci\xf3n en los par\xe1metros ",(0,s.jsx)(n.em,{children:"inicioSel"})," y ",(0,s.jsx)(n.em,{children:"finSel"}),'. Estas constantes se encuentran en el tema "',(0,s.jsx)(n.em,{children:"Texto multiestilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST End highlight"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"-1001"}),(0,s.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST End text"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter del texto contenido en el objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST Start highlight"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"-1000"}),(0,s.jsx)(n.td,{children:"Designa el primer car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ST Start text"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Designa el primer car\xe1cter del texto contenido en el objeto"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["(*) Debe pasar un nombre de objeto en ",(0,s.jsx)(n.em,{children:"objeto"})," para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto."]}),"\n",(0,s.jsxs)(n.p,{children:["Pase en los par\xe1metros ",(0,s.jsx)(n.em,{children:"nomAtrib"})," y ",(0,s.jsx)(n.em,{children:"valorAtrib"})," respectivamente el nombre y el valor del atributo a modificar. Puede pasar tantos pares de atributos/valores como quiera. Para definir el par\xe1metro ",(0,s.jsx)(n.em,{children:"nomAtrib"}),", utilice las constantes predefinidas del tema ",(0,s.jsx)(n.em,{children:"Atributos de texto multiestilo"}),". El valor a pasar en el par\xe1metro ",(0,s.jsx)(n.em,{children:"valorAtrib"})," depende del par\xe1metro ",(0,s.jsx)(n.em,{children:"nomAtrib"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attribute background color"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"attValue"}),"=Valor hexadecimal o nombre del color HTML (Windows \xfanicamente)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attribute bold style"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"attValue"}),"=0: elimina el atributo negrita de la selecci\xf3n",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.em,{children:"attValue"}),"=1: aplica el atributo negrita a la selecci\xf3n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attribute font name"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"attValue"}),"=nombre de la familia de la fuente (cadena)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attribute italic style"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"attValue"}),"=0: elimina el atributo it\xe1lica de la selecci\xf3n",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.em,{children:"attValue"}),"=1: aplica el atributo it\xe1lica a la selecci\xf3n."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attribute strikethrough style"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"attValue"}),"=0: elimina el atributo tachado de la selecci\xf3n",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.em,{children:"attValue"}),"=1: aplica el atributo tachado a la selecci\xf3n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attribute text color"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"attValue"}),"=valores hexadecimales o nombre de color HML"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attribute text size"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"attValue"}),"=n\xfamero de puntos(n\xfamero)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attribute underline style"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"attValue"}),"=0: elimina el atributo subrayado de la selecci\xf3n",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.em,{children:"attValue"}),"=1: aplica el atributo subrayado a la selecci\xf3n"]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Colores"}),(0,s.jsx)(n.br,{}),"\nSi pasa las constantes Attribute text color o Attribute background en ",(0,s.jsx)(n.em,{children:"nomAtrib"}),", debe pasar en ",(0,s.jsx)(n.em,{children:"valorAtrib"})," una cadena que contenga un nombre de color HTML o un valor de color hexadecimal:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Nombre de color HTML"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Valor hexadecimal"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Aqua"}),(0,s.jsx)(n.td,{children:"#00FFFF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Black"}),(0,s.jsx)(n.td,{children:"#000000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blue"}),(0,s.jsx)(n.td,{children:"#0000FF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Fushia"}),(0,s.jsx)(n.td,{children:"#FF00FF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Gray"}),(0,s.jsx)(n.td,{children:"#808080"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Green"}),(0,s.jsx)(n.td,{children:"#008000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Lime"}),(0,s.jsx)(n.td,{children:"#00FF00"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Maroon"}),(0,s.jsx)(n.td,{children:"#800000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Navy"}),(0,s.jsx)(n.td,{children:"#000080"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Olive"}),(0,s.jsx)(n.td,{children:"#808000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Purple"}),(0,s.jsx)(n.td,{children:"#800080"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Red"}),(0,s.jsx)(n.td,{children:"#FF0000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Silver"}),(0,s.jsx)(n.td,{children:"#C0C0C0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Teal"}),(0,s.jsx)(n.td,{children:"#008080"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"White"}),(0,s.jsx)(n.td,{children:"#FFFFFF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Yellow"}),(0,s.jsx)(n.td,{children:"#FFFF00"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"En este ejemplo, modificamos el tama\xf1o y el color de texto como tambi\xe9n los atributos negrita y subrayado de los caracteres 2 a 4 del campo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ST SET ATTRIBUTES([MyTable]MyField;2;5;Attribute font name;"Arial";Attribute text size;10;Attribute underline style;1;Attribute bold style;1;Attribute text color;"Blue")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s de ejecutar este comando, la variable OK toma el valor 1 si no se presenta ning\xfan error; de lo contrario, toma el valor 0. Este es el caso particularmente cuando las etiquetas de estilo no se eval\xfaan correctamente (etiquetas incorrectas o faltantes)."}),"\n",(0,s.jsx)(n.p,{children:"En caso de error, no cambia la variable. Cuando ocurre un error en una variable cuando se est\xe1 evaluando el texto, 4D transforma el texto en texto plano; como resultado, los caracteres <, > y & se convierten en entidades HTML."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/font-list",children:"FONT LIST"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/st-get-attributes",children:"ST GET ATTRIBUTES"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1093"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var r=t(667294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);