"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91640"],{744529:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>o,metadata:()=>r,assets:()=>t,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/listbox-get-property","title":"LISTBOX Get property","description":"LISTBOX Get property ( { ;} objeto ; propiedad* ) : any","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-property.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-property","permalink":"/docs/es/20-R7/commands/listbox-get-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-property","title":"LISTBOX Get property","slug":"/commands/listbox-get-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET PRINT INFORMATION","permalink":"/docs/es/20-R7/commands/listbox-get-print-information"},"next":{"title":"LISTBOX Get row color","permalink":"/docs/es/20-R7/commands/listbox-get-row-color"}}'),l=s("785893"),i=s("250065");let o={id:"listbox-get-property",title:"LISTBOX Get property",slug:"/commands/listbox-get-property",displayed_sidebar:"docs"},d=void 0,t={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"objeto"})," ; ",(0,l.jsx)(n.em,{children:"propiedad"})," ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Operador"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objeto"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"propiedad"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Informaci\xf3n a obtener"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Text, Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Valor actual"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," devuelve el valor de la ",(0,l.jsx)(n.em,{children:"propiedad"})," del list box o columna especificado utilizando los par\xe1metros ",(0,l.jsx)(n.em,{children:"objeto"})," y ",(0,l.jsx)(n.em,{children:"*."})]}),"\n",(0,l.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,l.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,l.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,l.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, usted pasa una referencia de variable en lugar de una cadena. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,l.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Nota:"})," si el list box o columna especificado utilizando los par\xe1metros ",(0,l.jsx)(n.em,{children:"objeto"})," y ",(0,l.jsx)(n.em,{children:"*"})," no existe, el comando ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," devuelve -1 para los propiedades num\xe9ricas o una cadena vac\xeda."]}),"\n",(0,l.jsxs)(n.p,{children:["En el par\xe1metro ",(0,l.jsx)(n.em,{children:"propiedad"}),", pase una constante indicando la propiedad cuyo valor quiere obtener. Puede utilizar un valor o una de las siguientes constantes del tema ",(0,l.jsx)(n.em,{children:"Listbox"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Valor"}),(0,l.jsx)(n.th,{children:"Comentario"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk allow wordwrap"}),(0,l.jsx)(n.td,{children:"14"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Retorno de l\xednea"}),(0,l.jsx)(n.br,{}),"Aplica a: Columna*",(0,l.jsx)(n.br,{}),"Valores posibles:",(0,l.jsx)(n.br,{}),"lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk auto row height"}),(0,l.jsx)(n.td,{children:"31"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Altura de fila autom\xe1tica"}),". ",(0,l.jsx)(n.br,{}),"Aplica a: List box o columna",(0,l.jsx)(n.br,{}),"Valores posibles:lk yes lk no",(0,l.jsx)(n.strong,{children:"4D View Pro \xfanicamente:"})," esta funcionalidad requiere una licencia 4D View Pro. Para m\xe1s informaci\xf3n, consulte ",(0,l.jsx)(n.em,{children:"4D View Pro"}),"."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk background color expression"}),(0,l.jsx)(n.td,{children:"22"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Expresi\xf3n"})," ",(0,l.jsx)(n.strong,{children:"color de fondo"})," para list box de tipo selecci\xf3n, colecci\xf3n o entity selection.",(0,l.jsx)(n.br,{}),"Aplica a: List box o columna"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk cell horizontal padding"}),(0,l.jsx)(n.td,{children:"36"}),(0,l.jsx)(n.td,{children:"Relleno horizontal de la celda en p\xedxeles (mismo valor para el relleno izquierdo y derecho) Se aplica a: list box, columna, encabezado, pie de p\xe1gina"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk cell vertical padding"}),(0,l.jsx)(n.td,{children:"37"}),(0,l.jsxs)(n.td,{children:["Relleno vertical de la celda en p\xedxeles (mismo valor para el relleno superior e inferior)",(0,l.jsx)(n.br,{}),"Se aplica a: list box, columna, encabezado, pie de p\xe1gina"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk column max width"}),(0,l.jsx)(n.td,{children:"26"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Ancho M\xe1ximo"}),(0,l.jsx)(n.br,{}),"Aplica a: Columna*"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk column min width"}),(0,l.jsx)(n.td,{children:"25"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Ancho m\xednimo"}),(0,l.jsx)(n.br,{}),"Aplica a: Columna*"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk column resizable"}),(0,l.jsx)(n.td,{children:"15"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Redimensionable"})," ",(0,l.jsx)(n.br,{}),"Aplica a: Columna*",(0,l.jsx)(n.br,{}),"Valores posibles:",(0,l.jsx)(n.br,{}),"lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk detail form name"}),(0,l.jsx)(n.td,{children:"19"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Nombre formulario detallado"})," para la selecci\xf3n de tipo list box ",(0,l.jsx)(n.br,{}),"Aplica a: List box"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk display footer"}),(0,l.jsx)(n.td,{children:"8"}),(0,l.jsx)(n.td,{children:"0=oculto, 1=se muestra"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk display header"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"0=oculto, 1=se muestra"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk display type"}),(0,l.jsx)(n.td,{children:"21"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Tipo de visualizaci\xf3n"})," para columnas num\xe9ricas ",(0,l.jsx)(n.br,{}),"Aplica a: Columna*",(0,l.jsx)(n.br,{}),"Valores posibles:**",(0,l.jsx)(n.br,{}),"**lk numeric format (0): muestra valores en formato num\xe9ricolk three states checkbox (1): muestra valores como casillas de selecci\xf3n de tres estados"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk double click on row"}),(0,l.jsx)(n.td,{children:"18"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Doble clic en la l\xednea"})," para los list box de tipo selecci\xf3n",(0,l.jsx)(n.br,{}),"Aplica a: List box",(0,l.jsx)(n.br,{}),"Valores posibles:lk do nothing (0): no desencadena ninguna acci\xf3n autom\xe1ticalk edit record (1): muestra el registro correspondiente en modo lectura-escrituralk display record (2): muestra el registro correspondiente en modo de solo lectura"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk extra rows"}),(0,l.jsx)(n.td,{children:"13"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Ocultar l\xedneas vac\xedas finales"})," ",(0,l.jsx)(n.br,{}),"Aplica a: List box",(0,l.jsx)(n.br,{}),"Valores posibles:**",(0,l.jsx)(n.br,{}),"**lk display (0)lk hide (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk font color expression"}),(0,l.jsx)(n.td,{children:"23"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Expresi\xf3n color fuente"}),"para list box de tipo selecci\xf3n,  colecci\xf3n o entity selection.",(0,l.jsx)(n.br,{}),"Aplica a: List box o columna"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk font style expression"}),(0,l.jsx)(n.td,{children:"24"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Expresi\xf3n estilo"})," para list boxes de tipo selecci\xf3n, colecci\xf3n o entity selection.",(0,l.jsx)(n.br,{}),"Aplica a: List box o columna",(0,l.jsx)(n.br,{})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk hide selection highlight"}),(0,l.jsx)(n.td,{children:"16"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Ocultar resaltado de selecci\xf3n"}),(0,l.jsx)(n.br,{}),"Aplica a: List box",(0,l.jsx)(n.br,{}),"Valores posibles:**",(0,l.jsx)(n.br,{}),"**lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk highlight set"}),(0,l.jsx)(n.td,{children:"27"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Conjunto resaltado"})," para el list box de tipo selecci\xf3n**",(0,l.jsx)(n.br,{}),"**Aplica a: List box"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk hor scrollbar height"}),(0,l.jsx)(n.td,{children:"3"}),(0,l.jsx)(n.td,{children:"Altura en p\xedxeles"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk movable rows"}),(0,l.jsx)(n.td,{children:"35"}),(0,l.jsxs)(n.td,{children:["La propiedad ",(0,l.jsx)(n.strong,{children:"L\xedneas m\xf3viles"})," para list box de tipo array ",(0,l.jsx)(n.br,{}),"Se aplica a: List box (excluyendo el modo jer\xe1rquico) ",(0,l.jsx)(n.br,{}),"Valores posibles: lk no (0): las l\xedneas no se pueden mover en tiempo de ejecuci\xf3n lk yes (1): las l\xedneas se pueden mover en tiempo de ejecuci\xf3n (predeterminado)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk multi style"}),(0,l.jsx)(n.td,{children:"30"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Multiestilo"})," ",(0,l.jsx)(n.br,{}),"Aplica a: Columna*",(0,l.jsx)(n.br,{}),"Valores posibles:",(0,l.jsx)(n.br,{}),"lk no (0)[#/note]lk yes (1) [#/note]"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk named selection"}),(0,l.jsx)(n.td,{children:"28"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Selecci\xf3n temporal"})," para list box de tipo selecci\xf3n",(0,l.jsx)(n.br,{}),"Aplica a: List box"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk resizing mode"}),(0,l.jsx)(n.td,{children:"11"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Autoredimensionamiento de columnas"}),(0,l.jsx)(n.br,{}),"Aplica a: List box",(0,l.jsx)(n.br,{}),"Valores posibles:",(0,l.jsx)(n.br,{}),"lk manual (0)lk automatic (2)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk row height unit"}),(0,l.jsx)(n.td,{children:"17"}),(0,l.jsxs)(n.td,{children:["Unidad de la propiedad ",(0,l.jsx)(n.strong,{children:"Alto de l\xednea"})," ",(0,l.jsx)(n.br,{}),"Aplica a: List box",(0,l.jsx)(n.br,{}),"Valores posibles:**",(0,l.jsx)(n.br,{}),"**lk lines (1)",(0,l.jsx)(n.br,{}),"lk pixels (0)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk selection mode"}),(0,l.jsx)(n.td,{children:"10"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Modo de s"})," ",(0,l.jsx)(n.strong,{children:"elecci\xf3n"}),(0,l.jsx)(n.br,{}),"Aplica a: List box",(0,l.jsx)(n.br,{}),"Valores posibles: **",(0,l.jsx)(n.br,{}),"**lk none (0)",(0,l.jsx)(n.br,{}),"lk single (1)",(0,l.jsx)(n.br,{}),"lk multiple (2)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk single click edit"}),(0,l.jsx)(n.td,{children:"29"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Editar en clic \xfanico"}),(0,l.jsx)(n.br,{}),"Aplica a: List box",(0,l.jsx)(n.br,{}),"Posible valores:",(0,l.jsx)(n.br,{}),"lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk sortable"}),(0,l.jsx)(n.td,{children:"20"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Ordenable"})," ",(0,l.jsx)(n.br,{}),"Aplica a: List box",(0,l.jsx)(n.br,{}),"Valores posibles:**",(0,l.jsx)(n.br,{}),"**lk no (0)lk yes (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk truncate"}),(0,l.jsx)(n.td,{children:"12"}),(0,l.jsxs)(n.td,{children:["Propiedad ",(0,l.jsx)(n.strong,{children:"Truncar con elipse"})," ",(0,l.jsx)(n.br,{}),"Aplica a: List box o columna",(0,l.jsx)(n.br,{}),"Valores posibles:**",(0,l.jsx)(n.br,{}),"**lk without ellipsis (0)lk with ellipsis (1)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk ver scrollbar width"}),(0,l.jsx)(n.td,{children:"5"}),(0,l.jsx)(n.td,{children:"Ancho en p\xedxeles"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["*Estas propiedades s\xf3lo se aplican a las columnas list box; si pasa un list box como par\xe1metro con una de estas propiedades, ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," devuelve -1, o una cadena vac\xeda, dependiendo de la ",(0,l.jsx)(n.em,{children:"propiedad"})," pasada."]}),"\n",(0,l.jsxs)(n.p,{children:["En general, para indicar un resultado no v\xe1lido ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," devuelve -1 al recuperar las propiedades que tienen valores num\xe9ricos, o una cadena vac\xeda; Sin embargo, no se generan errores. M\xe1s espec\xedficamente, esto ocurre en los siguientes casos:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Si pasa una ",(0,l.jsx)(n.em,{children:"propiedad"})," que no existe"]}),"\n",(0,l.jsxs)(n.li,{children:["Si pasa una ",(0,l.jsx)(n.em,{children:"propiedad"})," que no est\xe1 disponible para el list box o columna especificada, por ejemplo, usted pasa la propiedad lk font color expression con un list box de tipo array"]}),"\n",(0,l.jsxs)(n.li,{children:["Si pasa una columna como par\xe1metro con una ",(0,l.jsx)(n.em,{children:"propiedad"})," que se aplica a un list box, y viceversa, si pasa un list box como par\xe1metro con una ",(0,l.jsx)(n.em,{children:"propiedad"})," que se aplica a una columna (ver arriba *)"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:['Adem\xe1s, no es posible devolver valores de m\xe1s de una columna a la vez; si utiliza el s\xedmbolo "@" como parte del nombre de una columna para indicar varias columnas m\xfaltiples con nombres similares, ',(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," devuelve el primer valor coincidente que encuentre; como resultado, el valor devuelto no tiene verdadera importancia."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Las constantes lk display footer y lk display header son \xfatiles para calcular el tama\xf1o de un \xe1rea de list box mostrada en el formulario."}),"\n",(0,l.jsxs)(n.li,{children:["Cuando utilice las constantes lk hor scrollbar position o lk ver scrollbar position, el comando ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," devuelve la posici\xf3n del cursor de desplazamiento en relaci\xf3n con su posici\xf3n original, es decir el tama\xf1o de la parte oculta de la ventana, expresado en p\xedxeles. Por defecto, esta posici\xf3n corresponde a 0. Combinando, por ejemplo, con informaci\xf3n relativa a la altura de la l\xednea, este valor le permite encontrar el contenido mostrado en el listbox. Sin embargo, estas constantes son obsoletas y pueden remplazarse por el comando ",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-get-scroll-position",children:"OBJECT GET SCROLL POSITION"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["La instrucci\xf3n ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"}),"(vLB;_o_lk footer height) devuelve el mismo valor que el comando ",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-get-footers-height",children:"LISTBOX Get footers height"})," cuando los pies se muestran. Sin embargo, si los pies no se muestran, ",(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," devuelve 0 mientras ",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-get-footers-height",children:"LISTBOX Get footers height"})," devuelve la altura, en este caso te\xf3rica, de los pies."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,l.jsx)(n.p,{children:'Dado un listbox"MyListbox", si ejecuta la siguiente instrucci\xf3n:'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0$Value:=LISTBOX Get property(*;"MyListbox";lk selection mode)\xa0// el valor devuelto indica el modo de selecci\xf3n\n'})}),"\n",(0,l.jsx)(n.p,{children:"En este caso, el resultado devuelto indica si varias l\xedneas pueden ser seleccionadas."}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,l.jsx)(n.p,{children:'Dado un list box "MyListbox", si ejecuta la siguiente instrucci\xf3n:'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0$resizable:=LISTBOX Get property(*;"MyListbox";lk column resizable)\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX Get property"})," devuelve -1 porque la propiedad lk column resizable aplica a columnas y un list box se pas\xf3 como par\xe1metro."]}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-set-property",children:"LISTBOX SET PROPERTY"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"})]}),"\n",(0,l.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"917"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let l={},i=r.createContext(l);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);