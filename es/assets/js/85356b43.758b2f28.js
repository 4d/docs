"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43944"],{365798:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/st-get-attributes","title":"ST GET ATTRIBUTES","description":"ST GET ATTRIBUTES ( { ;} objeto ; inicioSel ; finSel ; nomAtrib ; valorAtrib {; nomAtrib2 ; valorAtrib2 ; ... ; nomAtribN ; valorAtribN*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/st-get-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-attributes","permalink":"/docs/es/commands/st-get-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-attributes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-get-attributes","title":"ST GET ATTRIBUTES","slug":"/commands/st-get-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST FREEZE EXPRESSIONS","permalink":"/docs/es/commands/st-freeze-expressions"},"next":{"title":"ST Get content type","permalink":"/docs/es/commands/st-get-content-type"}}'),i=t("785893"),l=t("250065");let s={id:"st-get-attributes",title:"ST GET ATTRIBUTES",slug:"/commands/st-get-attributes",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ST GET ATTRIBUTES"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"inicioSel"})," ; ",(0,i.jsx)(n.em,{children:"finSel"})," ; ",(0,i.jsx)(n.em,{children:"nomAtrib"})," ; ",(0,i.jsx)(n.em,{children:"valorAtrib"})," {; ",(0,i.jsx)(n.em,{children:"nomAtrib2"})," ; ",(0,i.jsx)(n.em,{children:"valorAtrib2"})," ; ... ; ",(0,i.jsx)(n.em,{children:"nomAtribN"})," ; ",(0,i.jsx)(n.em,{children:"valorAtribN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del objeto (se se especifica *) o Variable o campo (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"inicioSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Inicio de la selecci\xf3n de texto"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"finSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Fin de la selecci\xf3n de texto"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nomAtrib"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Atributo a leer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valorAtrib"}),(0,i.jsx)(n.td,{children:"Variable"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Valor actual del atributo"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ST GET ATTRIBUTES se utiliza para recuperar el valor actual de un atributo de estilo en una selecci\xf3n de texto del objeto de formulario designado por ",(0,i.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:""}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Durante la ejecuci\xf3n, si el objeto tiene el foco, el comando devuelve informaci\xf3n sobre el objeto que est\xe1 siendo editado, sin embargo, cuando el objeto no tiene el foco, el comando devuelve informaci\xf3n sobre la fuente de datos (campo o variable) del objeto.",(0,i.jsx)(n.br,{}),"\nSi omite el par\xe1metro ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, pase una referencia campo o variable en lugar de una cadena y durante la ejecuci\xf3n, el comando devuelve informaci\xf3n sobre este campo o variable."]}),"\n",(0,i.jsx)(n.h5,{id:"-1"}),"\n",(0,i.jsxs)(n.p,{children:["Los par\xe1metros ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," se utilizan para designar la selecci\xf3n de texto de la cual leer el atributo de estilo. Pase la posici\xf3n del primer car\xe1cter de la selecci\xf3n en ",(0,i.jsx)(n.em,{children:"inicioSel"})," y la posici\xf3n m\xe1s uno del \xfaltimo car\xe1cter de la selecci\xf3n en ",(0,i.jsx)(n.em,{children:"finSel"}),". Puede pasar 0 en ",(0,i.jsx)(n.em,{children:"finSel"})," para designar autom\xe1ticamente el \xfaltimo car\xe1cter del texto (pase 1 en ",(0,i.jsx)(n.em,{children:"inicioSel"})," para designar el primer car\xe1cter del texto).",(0,i.jsx)(n.br,{}),"\nSi los valores de ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," son iguales o si ",(0,i.jsx)(n.em,{children:"inicioSel"})," es mayor que ",(0,i.jsx)(n.em,{children:"finSel"}),", se devuelve un error (excepto si ",(0,i.jsx)(n.em,{children:"finSel"})," vale 0).",(0,i.jsx)(n.br,{}),"\nLos valores ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"})," no tienen en cuenta ning\xfan tipo de etiquetas de estilo ya presentes en el \xe1rea. Se eval\xfaan sobre la base de texto sin formato (texto del cual se han filtrado las etiquetas de estilo). 4D"]}),"\n",(0,i.jsxs)(n.p,{children:["4D ofrece constantes predefinidas para que pueda designar autom\xe1ticamente los l\xedmites de selecci\xf3n en los par\xe1metros ",(0,i.jsx)(n.em,{children:"inicioSel"})," y ",(0,i.jsx)(n.em,{children:"finSel"}),'. Estas constantes se encuentran en el tema "',(0,i.jsx)(n.em,{children:"Texto multiestilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST End highlight"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"-1001"}),(0,i.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST End text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Designa el \xfaltimo car\xe1cter del texto contenido en el objeto"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Start highlight"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"-1000"}),(0,i.jsx)(n.td,{children:"Designa el primer car\xe1cter de la selecci\xf3n actual de texto en el objeto (*)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ST Start text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Designa el primer car\xe1cter del texto contenido en el objeto"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["(*) Debe pasar un nombre de objeto en ",(0,i.jsx)(n.em,{children:"objeto"})," para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto."]}),"\n",(0,i.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,i.jsx)(n.em,{children:"nomAtrib"})," el nombre del atributo a leer y pase en el par\xe1metro ",(0,i.jsx)(n.em,{children:"valorAtrib"})," una variable que debe recuperar el valor actual del atributo. Para definir el par\xe1metro ",(0,i.jsx)(n.em,{children:"nomAtrib"}),", debe utilizar una de las constantes del tema ",(0,i.jsx)(n.em,{children:"Atributos de texto multiestilo"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute background color"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"attValue"}),"=Valor hexadecimal o nombre del color HTML (Windows \xfanicamente)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute bold style"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"attValue"}),"=0: elimina el atributo negrita de la selecci\xf3n",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.em,{children:"attValue"}),"=1: aplica el atributo negrita a la selecci\xf3n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute font name"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"attValue"}),"=nombre de la familia de la fuente (cadena)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute italic style"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"attValue"}),"=0: elimina el atributo it\xe1lica de la selecci\xf3n",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.em,{children:"attValue"}),"=1: aplica el atributo it\xe1lica a la selecci\xf3n."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute strikethrough style"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"attValue"}),"=0: elimina el atributo tachado de la selecci\xf3n",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.em,{children:"attValue"}),"=1: aplica el atributo tachado a la selecci\xf3n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute text color"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"7"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"attValue"}),"=valores hexadecimales o nombre de color HML"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute text size"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"6"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"attValue"}),"=n\xfamero de puntos(n\xfamero)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute underline style"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"attValue"}),"=0: elimina el atributo subrayado de la selecci\xf3n",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.em,{children:"attValue"}),"=1: aplica el atributo subrayado a la selecci\xf3n"]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Puede pasar tantos pares de atributos/valores como quiera."}),"\n",(0,i.jsxs)(n.p,{children:["Si el valor del atributo ",(0,i.jsx)(n.em,{children:"nomAtrib"})," es el mismo para toda la selecci\xf3n, se devuelve en ",(0,i.jsx)(n.em,{children:"valorAtrib"}),". Si este valor es diferente o si ",(0,i.jsx)(n.em,{children:"objeto"})," no contiene etiquetas SPAN, se devuelven los siguientes valores:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"nomAtrib"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"valorAtrib si atributo heterog\xe9neo en la selecci\xf3n o no etiquetas SPAN"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute background color"}),(0,i.jsx)(n.td,{children:"FFFFFFFF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute bold style"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute font name"}),(0,i.jsx)(n.td,{children:'"" (empty string)'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute italic style"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute strikethrough style"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute text color"}),(0,i.jsx)(n.td,{children:"FFFFFFFF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute text size"}),(0,i.jsx)(n.td,{children:"-1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attribute underline style"}),(0,i.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:'Dado un campo [Table_1]StyledText mostrado en un formulario. El objeto tiene la propiedad Multiestilo y se llama "StyledText_t". Usted quiere obtener el texto resaltado as\xed como tambi\xe9n el estado de atributo de estilo Negrita. Puede proceder de dos formas diferentes dependiendo de si utiliza el nombre del objeto o la referencia del campo.'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Utilizando el nombre del objeto:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$text:=ST Get text(*;"StyledText_t";ST Start highlight;ST End highlight)\n\xa0ST GET ATTRIBUTES(*;"StyledText_t";ST Start highlight;ST End highlight;Attribute bold style;$bold)\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Utilizando el nombre del campo:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0GET HIGHLIGHT([Table_1]StyledText;$Begin_l;$End_l)\n\xa0$text:=ST Get text([Table_1]StyledText;$Begin_l;$End_l)\n\xa0ST GET ATTRIBUTES([Table_1]StyledText;$Begin_l;$End_l;Attribute bold style;$bold)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,i.jsx)(n.p,{children:"Despu\xe9s de ejecutar este comando, la variable OK toma el valor 1 si no se presenta ning\xfan error; de lo contrario, toma el valor 0. Este es el caso particularmente cuando las etiquetas de estilo no se eval\xfaan correctamente (etiquetas incorrectas o faltantes)."}),"\n",(0,i.jsx)(n.p,{children:"En caso de error, no cambia la variable. Cuando ocurre un error en una variable cuando se est\xe1 evaluando el texto, 4D transforma el texto en texto plano; como resultado, los caracteres <, > y & se convierten en entidades HTML."}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/st-set-attributes",children:"ST SET ATTRIBUTES"})}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1094"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var r=t(667294);let i={},l=r.createContext(i);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);