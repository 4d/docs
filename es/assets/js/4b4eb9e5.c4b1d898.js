"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8510"],{698361:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>a,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"FormObjects/listOverview","title":"Lista jer\xe1rquica","description":"Las listas jer\xe1rquicas son objetos formulario que pueden utilizarse para mostrar datos en forma de listas con uno o m\xe1s niveles que pueden desplegarse o contraerse.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/FormObjects/list_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/listOverview","permalink":"/docs/es/19/FormObjects/listOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Flist_overview.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"listOverview","title":"Lista jer\xe1rquica"},"sidebar":"docs","previous":{"title":"Entrada","permalink":"/docs/es/19/FormObjects/inputOverview"},"next":{"title":"List Box","permalink":"/docs/es/19/FormObjects/listboxOverview"}}'),i=n("785893"),r=n("250065");let a={id:"listOverview",title:"Lista jer\xe1rquica"},l=void 0,d={},c=[{value:"Fuente de datos de lista jer\xe1rquica",id:"fuente-de-datos-de-lista-jer\xe1rquica",level:2},{value:"RefList y nombre de objeto",id:"reflist-y-nombre-de-objeto",level:2},{value:"Soporte de @",id:"soporte-de-",level:3},{value:"Comandos gen\xe9ricos utilizables con listas jer\xe1rquicas",id:"comandos-gen\xe9ricos-utilizables-con-listas-jer\xe1rquicas",level:2},{value:"Prioridad de los comandos de propiedad",id:"prioridad-de-los-comandos-de-propiedad",level:2},{value:"Gesti\xf3n de los elementos por posici\xf3n o por referencia",id:"gesti\xf3n-de-los-elementos-por-posici\xf3n-o-por-referencia",level:2},{value:"Utilizar los n\xfameros de referencia de los art\xedculos (itemRef)",id:"utilizar-los-n\xfameros-de-referencia-de-los-art\xedculos-itemref",level:3},{value:"\xbfCu\xe1ndo necesita n\xfameros de referencia \xfanicos?",id:"cu\xe1ndo-necesita-n\xfameros-de-referencia-\xfanicos",level:3},{value:"Elemento modificable",id:"elemento-modificable",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}];function t(e){let s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Las listas jer\xe1rquicas son objetos formulario que pueden utilizarse para mostrar datos en forma de listas con uno o m\xe1s niveles que pueden desplegarse o contraerse."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(960098).Z+"",width:"168",height:"162"})}),"\n",(0,i.jsx)(s.p,{children:"Cuando corresponda, el icono desplegar/contraer se mostrar\xe1 autom\xe1ticamente a la izquierda del elemento. Las listas jer\xe1rquicas soportan un n\xfamero ilimitado de subniveles."}),"\n",(0,i.jsx)(s.h2,{id:"fuente-de-datos-de-lista-jer\xe1rquica",children:"Fuente de datos de lista jer\xe1rquica"}),"\n",(0,i.jsx)(s.p,{children:"El contenido de un objeto formulario lista jer\xe1rquica se puede inicializar de una de las siguientes maneras:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Asociar una ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesDataSource#choice-list",children:"lista de opciones"})," existente al objeto. La lista de elecci\xf3n debe haber sido definida en el editor de listas en modo Dise\xf1o."]}),"\n",(0,i.jsxs)(s.li,{children:["Asigne directamente una referencia de lista jer\xe1rquica a la ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesObject#variable-or-expression",children:"variable o expresi\xf3n"})," asociada al objeto formulario."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["En ambos casos, se gestiona una lista jer\xe1rquica en tiempo de ejecuci\xf3n a trav\xe9s de su referencia ",(0,i.jsx)(s.em,{children:"ListRef"}),", utilizando los comandos ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html",children:"lista jer\xe1rquica"})," del lenguaje 4D."]}),"\n",(0,i.jsx)(s.h2,{id:"reflist-y-nombre-de-objeto",children:"RefList y nombre de objeto"}),"\n",(0,i.jsxs)(s.p,{children:["Una lista jer\xe1rquica es a la vez un ",(0,i.jsx)(s.strong,{children:"objeto de lenguaje"})," existente en memoria y un ",(0,i.jsx)(s.strong,{children:"objeto de formulario"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["El ",(0,i.jsx)(s.strong,{children:"objeto de lenguaje"})," est\xe1 referenciado por un ID interno \xfanico de tipo Entero largo, designado por ",(0,i.jsx)(s.em,{children:"ListRef"})," en el manual de Lenguaje 4D. Este ID es devuelto por los comandos que se pueden usar para crear listas: ",(0,i.jsx)(s.code,{children:"New list"}),", ",(0,i.jsx)(s.code,{children:"Copy list"}),", ",(0,i.jsx)(s.code,{children:"Load list"}),", ",(0,i.jsx)(s.code,{children:"BLOB to list"}),". S\xf3lo hay una instancia del objeto lenguaje en la memoria y cualquier modificaci\xf3n realizada en este objeto se traslada inmediatamente a todos los lugares donde se utiliza."]}),"\n",(0,i.jsxs)(s.p,{children:["El ",(0,i.jsx)(s.strong,{children:"objeto de formulario"}),' no es necesariamente \xfanico: puede haber varias representaciones de la misma lista jer\xe1rquica en el mismo formulario o en otros diferentes. Al igual que con otros objetos formulario, se especifica el objeto en el lenguaje utilizando la sintaxis (*; "NomLista", etc.).']}),"\n",(0,i.jsx)(s.p,{children:'Conecte el "objeto lenguaje " lista jer\xe1rquica con el "objeto de formulario" lista jer\xe1rquica por medio de la variable que contiene el valor RefLista. Conecte el "objeto lenguaje " lista jer\xe1rquica con el "objeto de formulario" lista jer\xe1rquica por medio de la variable que contiene el valor RefLista.'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"mylist:=New list\n"})}),"\n",(0,i.jsx)(s.p,{children:"Cada representaci\xf3n de la lista tiene sus propias caracter\xedsticas espec\xedficas y comparte caracter\xedsticas comunes con todas las dem\xe1s representaciones. Las siguientes caracter\xedsticas son espec\xedficas de cada representaci\xf3n de la lista:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"La selecci\xf3n,"}),"\n",(0,i.jsx)(s.li,{children:"El estado desplegado/colapsado de sus elementos,"}),"\n",(0,i.jsx)(s.li,{children:"La posici\xf3n del cursor de desplazamiento."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Las dem\xe1s caracter\xedsticas (fuente, tama\xf1o de fuente, estilo, control de entrada, color, contenido de la lista, iconos, etc.) son comunes a todas las representaciones y no pueden modificarse por separado. Por consiguiente, cuando se utilizan comandos basados en la configuraci\xf3n expandida/colapsada o en el elemento actual, por ejemplo ",(0,i.jsx)(s.code,{children:"Count list items"})," (cuando no se pasa el par\xe1metro final ",(0,i.jsx)(s.code,{children:"*"}),"), es importante poder especificar la representaci\xf3n que se utilizar\xe1 sin ninguna ambig\xfcedad."]}),"\n",(0,i.jsxs)(s.p,{children:["Debe utilizar el identificador ",(0,i.jsx)(s.code,{children:"RefLista"}),' con los comandos del lenguaje cuando quiera especificar la lista jer\xe1rquica que se encuentra en la memoria. En cambio, si desea especificar la representaci\xf3n al nivel del formulario de un objeto Lista jer\xe1rquica, debe utilizar el nombre del objeto (tipo cadena) en el comando, mediante la sintaxis est\xe1ndar (*; "NomLista", etc.).']}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"En el caso de los comandos que definen propiedades, la sintaxis basada en el nombre del objeto no significa que s\xf3lo el objeto formulario especificado ser\xe1 modificado por el comando, sino que la acci\xf3n del comando se basar\xe1 en el estado de este objeto. Las caracter\xedsticas comunes de las listas jer\xe1rquicas se modifican siempre en todas sus representaciones. Por ejemplo, si pasa la instrucci\xf3n:"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'SET LIST ITEM FONT(*;"mylist1";*;thefont)\n'})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["... est\xe1 indicando que quiere modificar la fuente de un elemento de la lista jer\xe1rquica asociada al objeto de formulario ",(0,i.jsx)(s.em,{children:"mylist1"}),". El comando tendr\xe1 en cuenta el elemento actual del objeto ",(0,i.jsx)(s.em,{children:"mylist1"})," para definir el elemento a modificar, pero esta modificaci\xf3n se trasladar\xe1 a todas las representaciones de la lista en todos los procesos."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"soporte-de-",children:"Soporte de @"}),"\n",(0,i.jsxs)(s.p,{children:['Al igual que con otros comandos de gesti\xf3n de propiedades de objetos, es posible utilizar el car\xe1cter "@" en el par\xe1metro ',(0,i.jsx)(s.code,{children:"NomLista"}),". Por regla general, esta sintaxis se utiliza para designar un conjunto de objetos del formulario. Sin embargo, en el contexto de los comandos de listas jer\xe1rquicas, esto no se aplica en todos los casos. Esta sintaxis tendr\xe1 dos efectos diferentes seg\xfan el tipo de comando:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:'Para los comandos que fijan propiedades, esta sintaxis designa todos los objetos cuyo nombre corresponde (comportamiento est\xe1ndar). Por ejemplo, el par\xe1metro "LH@" designa todos los objetos del tipo lista jer\xe1rquica cuyo nombre empieza por "LH."'}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"DELETE FROM LIST"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"INSERT IN LIST"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"SELECT LIST ITEMS BY POSITION"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"SET LIST ITEM"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"SET LIST ITEM FONT"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"SET LIST ITEM ICON"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"SET LIST ITEM PARAMETER"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"SET LIST ITEM PROPERTIES"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Para los comandos que recuperan propiedades, esta sintaxis designa el primer objeto cuyo nombre corresponde:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"Count list items"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"Find in list"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"GET LIST ITEM"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"Get list item font"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"GET LIST ITEM ICON"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"GET LIST ITEM PARAMETER"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"GET LIST ITEM PROPERTIES"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"List item parent"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"List item position"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"Selected list items"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"comandos-gen\xe9ricos-utilizables-con-listas-jer\xe1rquicas",children:"Comandos gen\xe9ricos utilizables con listas jer\xe1rquicas"}),"\n",(0,i.jsx)(s.p,{children:"Es posible modificar la apariencia de una lista jer\xe1rquica en un formulario utilizando varios comandos 4D gen\xe9ricos. Puede pasar a estos comandos el nombre del objeto de la lista jer\xe1rquica (utilizando el par\xe1metro *), o su nombre de variable (que contiene el valor ListRef):"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"OBJECT SET FONT"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"OBJECT SET FONT STYLE"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"OBJECT SET FONT SIZE"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"OBJECT SET COLOR"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"OBJECT SET FILTER"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"OBJECT SET ENTERABLE"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"OBJECT SET SCROLLBAR"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"OBJECT SET SCROLL POSITION"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"OBJECT SET RGB COLORS"})}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Recordatorio: excepto ",(0,i.jsx)(s.code,{children:"OBJECT SET SCROLL POSITION"}),", estos comandos modifican todas las representaciones de una misma lista, aunque s\xf3lo se especifique una lista a trav\xe9s de su nombre de objeto."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"prioridad-de-los-comandos-de-propiedad",children:"Prioridad de los comandos de propiedad"}),"\n",(0,i.jsxs)(s.p,{children:["Ciertas propiedades de las listas jer\xe1rquicas (por ejemplo, el atributo ",(0,i.jsx)(s.strong,{children:"editable"}),' o el color) pueden definirse de diferentes maneras: en las propiedades del formulario, mediante un comando del tema "Propiedades de los objetos" o mediante un comando del tema "Lista jer\xe1rquica". Cuando se utilizan los tres medios para definir las propiedades de la lista, se aplica el siguiente orden de prioridad:']}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:'Comandos del tema "Lista jer\xe1rquica"'}),"\n",(0,i.jsx)(s.li,{children:"Comandos gen\xe9ricos de propiedad de objeto"}),"\n",(0,i.jsx)(s.li,{children:"Propiedad formulario"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Este principio se aplica independientemente del orden de llamada de los comandos. Si una propiedad de un elemento se modifica individualmente a trav\xe9s de un comando de lista jer\xe1rquica, el comando de propiedad de objeto equivalente no tendr\xe1 ning\xfan efecto sobre este elemento, incluso si se llama posteriormente. Por ejemplo, si el color de un elemento se modifica a trav\xe9s del comando ",(0,i.jsx)(s.code,{children:"SET LIST ITEM PROPERTIES"}),", el comando ",(0,i.jsx)(s.code,{children:"OBJECT SET COLOR"})," no tendr\xe1 ning\xfan efecto sobre este elemento."]}),"\n",(0,i.jsx)(s.h2,{id:"gesti\xf3n-de-los-elementos-por-posici\xf3n-o-por-referencia",children:"Gesti\xf3n de los elementos por posici\xf3n o por referencia"}),"\n",(0,i.jsx)(s.p,{children:"Normalmente se puede trabajar de dos maneras con el contenido de las listas jer\xe1rquicas: por posici\xf3n o por referencia."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Cuando se trabaja por posici\xf3n, 4D se basa en la posici\xf3n con respecto a los elementos de la lista que aparecen en pantalla para identificarlos. El resultado ser\xe1 diferente seg\xfan se expandan o colapsen determinados elementos jer\xe1rquicos. Tenga en cuenta que en el caso de las representaciones m\xfaltiples, cada objeto formulario tiene su propia configuraci\xf3n de elementos expandidos/colapsados."}),"\n",(0,i.jsxs)(s.li,{children:["Cuando se trabaja por referencia, 4D se basa en el n\xfamero de identificaci\xf3n ",(0,i.jsx)(s.em,{children:"itemRef"})," de los elementos de la lista. As\xed, cada elemento puede especificarse individualmente, independientemente de su posici\xf3n o de su visualizaci\xf3n en la lista jer\xe1rquica."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"utilizar-los-n\xfameros-de-referencia-de-los-art\xedculos-itemref",children:"Utilizar los n\xfameros de referencia de los art\xedculos (itemRef)"}),"\n",(0,i.jsxs)(s.p,{children:["Cada elemento de una lista jer\xe1rquica tiene un n\xfamero de referencia (",(0,i.jsx)(s.em,{children:"itemRef"}),") del tipo Entero largo. Este valor s\xf3lo est\xe1 destinado a su propio uso: 4D simplemente lo mantiene."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Atenci\xf3n: puede utilizar cualquier tipo de valor entero largo como n\xfamero de referencia, excepto 0. De hecho, para la mayor\xeda de los comandos de este tema, se utiliza el valor 0 para especificar el \xfaltimo elemento a\xf1adido a la lista."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"He aqu\xed algunos consejos para utilizar los n\xfameros de referencia:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"No es necesario identificar cada elemento con un n\xfamero \xfanico (nivel principiante)."}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Primer ejemplo: se construye por programaci\xf3n un sistema de pesta\xf1as, por ejemplo, una libreta de direcciones. Como el sistema devuelve el n\xfamero de la pesta\xf1a seleccionada, probablemente no necesitar\xe1 m\xe1s informaci\xf3n que \xe9sta. En este caso, no se preocupe por los n\xfameros de referencia de los elementos: pase un valor cualquiera (excepto 0) en el par\xe1metro ",(0,i.jsx)(s.em,{children:"itemRef"}),". Tenga en cuenta que para un sistema de libreta de direcciones, puede predefinir una lista A, B, ..., Z en el modo Dise\xf1o. Tambi\xe9n se puede crear por programaci\xf3n para eliminar las letras para las que no hay registros."]}),"\n",(0,i.jsxs)(s.li,{children:["Segundo ejemplo: al trabajar con una base, se construye progresivamente una lista de palabras clave. Puede guardar esta lista al final de cada sesi\xf3n utilizando los comandos ",(0,i.jsx)(s.code,{children:"SAVE LIST"})," o ",(0,i.jsx)(s.code,{children:"LIST TO BLOB"})," y volver a cargarla al comienzo de cada nueva sesi\xf3n utilizando el ",(0,i.jsx)(s.code,{children:"Load list"})," o ",(0,i.jsx)(s.code,{children:"BLOB to list"}),". Puede mostrar esta lista en una paleta flotante; cuando cada usuario hace clic en una palabra clave de la lista, el elemento elegido se inserta en el \xe1rea introducible que est\xe1 seleccionada en el proceso en primer plano. Lo importante es que s\xf3lo procese el elemento seleccionado, porque el comando ",(0,i.jsx)(s.code,{children:"Select list items"})," devuelve la posici\xf3n del elemento que debe procesar. Cuando se utiliza este valor de posici\xf3n, se obtiene el t\xedtulo del elemento mediante el comando ",(0,i.jsx)(s.code,{children:"GET LIST ITEM"}),". Tambi\xe9n en este caso, no es necesario identificar cada elemento individualmente; puede pasar cualquier valor (excepto 0) en el par\xe1metro ",(0,i.jsx)(s.em,{children:"itemRef"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Es necesario identificar parcialmente los elementos de la lista (nivel intermedio).",(0,i.jsx)(s.br,{}),"\nEl n\xfamero de referencia del elemento se utiliza para almacenar la informaci\xf3n necesaria cuando se debe trabajar con el elemento; este punto se detalla en el ejemplo del comando ",(0,i.jsx)(s.code,{children:"APPEND TO LIST"}),". En este ejemplo, utilizamos los n\xfameros de referencia de los art\xedculos para almacenar los n\xfameros de registro. Sin embargo, debemos ser capaces de establecer una distinci\xf3n entre los elementos que corresponden a los registros [Department] y los que corresponden a los registros [Employees]."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Identifique todos los elementos de la lista individualmente (nivel avanzado).",(0,i.jsx)(s.br,{}),"\nPrograme una gesti\xf3n elaborada de listas jer\xe1rquicas en la que es absolutamente necesario poder identificar cada elemento individualmente en cada nivel de la lista. Una forma sencilla de ponerlo en pr\xe1ctica es mantener un contador personal. Suponga que crea una lista ",(0,i.jsx)(s.em,{children:"hlList"})," utilizando el comando ",(0,i.jsx)(s.code,{children:"APPEND TO LIST"}),". En esta etapa, se inicializa un contador ",(0,i.jsx)(s.em,{children:"vhlCounter"})," en 1. Cada vez que se llama a ",(0,i.jsx)(s.code,{children:"APPEND TO LIST"})," o ",(0,i.jsx)(s.code,{children:"INSERT IN LIST"}),", se incrementa este contador ",(0,i.jsx)(s.code,{children:"(vhlCounter:=vhlCounter+1)"}),", y se pasa el n\xfamero del contador como n\xfamero de referencia del elemento. El truco consiste en no disminuir nunca el contador cuando se eliminan elementos: el contador s\xf3lo puede aumentar. De este modo, se garantiza la unicidad de los n\xfameros de referencia de los elementos. Como estos n\xfameros son de tipo Entero largo, puede a\xf1adir o insertar m\xe1s de dos mil millones de elementos en una lista que ha sido reiniciada... (sin embargo, si est\xe1 trabajando con un n\xfamero tan grande de elementos, esto suele significar que debes utilizar una tabla en lugar de una lista)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Si se utilizan operadores Bitwise, tambi\xe9n se pueden utilizar los n\xfameros de referencia de los elementos para almacenar informaci\xf3n que se puede poner en un Entero largo, es decir, 2 enteros, valores de 4 bytes o de nuevo 32 booleanos."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"cu\xe1ndo-necesita-n\xfameros-de-referencia-\xfanicos",children:"\xbfCu\xe1ndo necesita n\xfameros de referencia \xfanicos?"}),"\n",(0,i.jsxs)(s.p,{children:["En la mayor\xeda de los casos, cuando se utilizan listas jer\xe1rquicas con fines de interfaz de usuario y cuando s\xf3lo se trata del elemento seleccionado (por un clic o arrastrado), no ser\xe1 necesario utilizar los n\xfameros de referencia de los elementos en absoluto. Con ",(0,i.jsx)(s.code,{children:"Selected list items"})," y ",(0,i.jsx)(s.code,{children:"GET LIST ITEM"}),", tiene todo lo que necesita para tratar con el elemento seleccionado actualmente. Adem\xe1s, comandos como ",(0,i.jsx)(s.code,{children:"INSERT IN LIST"})," y ",(0,i.jsx)(s.code,{children:"DELETE FROM LIST"}),' permiten manipular la lista "relativamente" con respecto al elemento seleccionado.']}),"\n",(0,i.jsx)(s.p,{children:"B\xe1sicamente, es necesario tratar con los n\xfameros de referencia de los elementos cuando se quiere acceder directamente a cualquier elemento de la lista de forma programada y no necesariamente al actualmente seleccionado en la lista."}),"\n",(0,i.jsx)(s.h2,{id:"elemento-modificable",children:"Elemento modificable"}),"\n",(0,i.jsxs)(s.p,{children:["Puede controlar si los elementos de la lista jer\xe1rquica pueden ser modificados por el usuario utilizando el atajo de teclado ",(0,i.jsx)(s.strong,{children:"Alt+clic"}),"(Windows) / ",(0,i.jsx)(s.strong,{children:"Opci\xf3n+clic"})," (macOS), o realizando una pulsaci\xf3n larga sobre el texto del elemento."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Sea cual sea la fuente de datos de la lista jer\xe1rquica, puede controlar todo el objeto con la propiedad ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesEntry#enterable",children:"Editable"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Adem\xe1s, si llena la lista jer\xe1rquica utilizando una lista creada en el editor de listas, puede controlar si un elemento de una lista jer\xe1rquica es modificable mediante la opci\xf3n ",(0,i.jsx)(s.strong,{children:"Elemento modificable"})," del editor de listas. Para m\xe1s informaci\xf3n, consulte ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html",children:"Definir las propiedades de la lista"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Estilo de l\xednea de borde"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesDataSource#choice-list",children:"Lista de opciones"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesAction#draggable",children:"Arrastrable"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesAction#droppable",children:"Soltable"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesEntry#enterable",children:"Editable"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesEntry#entry-filter",children:"Filtro de entrada"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Color de relleno"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesEntry#focusable",children:"Enfocable"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesText#font-color",children:"Color de fuente"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesText#font-size",children:"Tama\xf1o de fuente"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#height",children:"Alto"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesHelp#help-tip",children:"Mensaje de ayuda"}),"- ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Ocultar rect\xe1ngulo de enfoque"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Barra de desplazamiento horizontal"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesText#italic",children:"It\xe1lica"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesAction#multi-selectable",children:"Multiselecci\xf3n"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesText#underline",children:"Subrayado"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Barra de desplazamiento vertical"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamiento vertical"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesObject#variable-or-expression",children:"Variable o Expresi\xf3n"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,i.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},960098:function(e,s,n){n.d(s,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return a}});var o=n(667294);let i={},r=o.createContext(i);function a(e){let s=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);