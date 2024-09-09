/*! For license information please see e76b19a4.8d491ec3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91370],{609387:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=o(474848),n=o(28453);const r={id:"listOverview",title:"Lista hier\xe1rquica"},t=void 0,a={id:"FormObjects/listOverview",title:"Lista hier\xe1rquica",description:"As listas hier\xe1rquicas s\xe3o objetos de formul\xe1rio que podem ser utilizados para apresentar dados como listas com um ou mais n\xedveis que podem ser expandidos ou recolhidos.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/FormObjects/list_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/listOverview",permalink:"/docs/pt/20-R5/FormObjects/listOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Flist_overview.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"listOverview",title:"Lista hier\xe1rquica"},sidebar:"docs",previous:{title:"Entrada",permalink:"/docs/pt/20-R5/FormObjects/inputOverview"},next:{title:"List Box",permalink:"/docs/pt/20-R5/FormObjects/listboxOverview"}},l={},d=[{value:"Fonte de dados de lista hier\xe1rquica",id:"fonte-de-dados-de-lista-hier\xe1rquica",level:2},{value:"RefList e nome de objeto",id:"reflist-e-nome-de-objeto",level:2},{value:"Suporte da @",id:"suporte-da-",level:3},{value:"Comandos gen\xe9ricos utiliz\xe1veis com listas hier\xe1rquicas",id:"comandos-gen\xe9ricos-utiliz\xe1veis-com-listas-hier\xe1rquicas",level:2},{value:"Prioridade dos comandos de propriedade",id:"prioridade-dos-comandos-de-propriedade",level:2},{value:"Gerenciamento dos itens por posi\xe7\xe3o ou refer\xeancia",id:"gerenciamento-dos-itens-por-posi\xe7\xe3o-ou-refer\xeancia",level:2},{value:"Utiliza\xe7\xe3o de n\xfameros de refer\xeancia dos items (itemRef)",id:"utiliza\xe7\xe3o-de-n\xfameros-de-refer\xeancia-dos-items-itemref",level:3},{value:"Quando \xe9 que s\xe3o necess\xe1rios n\xfameros de refer\xeancia \xfanicos?",id:"quando-\xe9-que-s\xe3o-necess\xe1rios-n\xfameros-de-refer\xeancia-\xfanicos",level:3},{value:"Elemento modific\xe1vel",id:"elemento-modific\xe1vel",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function c(e){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"As listas hier\xe1rquicas s\xe3o objetos de formul\xe1rio que podem ser utilizados para apresentar dados como listas com um ou mais n\xedveis que podem ser expandidos ou recolhidos."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:o(699767).A+"",width:"168",height:"162"})}),"\n",(0,s.jsx)(i.p,{children:"Quando apropriado, o \xedcone de expans\xe3o/colapso \xe9 automaticamente apresentado \xe0 esquerda do item. As listas hier\xe1rquicas suportam um n\xfamero ilimitado de subn\xedveis."}),"\n",(0,s.jsx)(i.h2,{id:"fonte-de-dados-de-lista-hier\xe1rquica",children:"Fonte de dados de lista hier\xe1rquica"}),"\n",(0,s.jsx)(i.p,{children:"O conte\xfado de um objeto formul\xe1rio lista hier\xe1rquica pode ser inicializado de uma das seguintes formas:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Asociar una ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesDataSource#choice-list",children:"lista de opciones"})," existente al objeto. A lista de op\xe7\xf5es deve ter sido definida no editor de listas no modo Desenho."]}),"\n",(0,s.jsxs)(i.li,{children:["Asigne directamente una referencia de lista jer\xe1rquica a la ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesObject#variable-or-expression",children:"variable o expresi\xf3n"})," asociada al objeto formulario."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["En ambos casos, se gestiona una lista jer\xe1rquica en tiempo de ejecuci\xf3n a trav\xe9s de su referencia ",(0,s.jsx)(i.em,{children:"ListRef"}),", utilizando los comandos ",(0,s.jsx)(i.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html",children:"lista jer\xe1rquica"})," del lenguaje 4D."]}),"\n",(0,s.jsx)(i.h2,{id:"reflist-e-nome-de-objeto",children:"RefList e nome de objeto"}),"\n",(0,s.jsxs)(i.p,{children:["Una lista jer\xe1rquica es a la vez un ",(0,s.jsx)(i.strong,{children:"objeto de lenguaje"})," existente en memoria y un ",(0,s.jsx)(i.strong,{children:"objeto de formulario"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["El ",(0,s.jsx)(i.strong,{children:"objeto de lenguaje"})," est\xe1 referenciado por un ID interno \xfanico de tipo Entero largo, designado por ",(0,s.jsx)(i.em,{children:"ListRef"})," en el manual de Lenguaje 4D. Este ID es devuelto por los comandos que se pueden usar para crear listas: ",(0,s.jsx)(i.code,{children:"New list"}),", ",(0,s.jsx)(i.code,{children:"Copy list"}),", ",(0,s.jsx)(i.code,{children:"Load list"}),", ",(0,s.jsx)(i.code,{children:"BLOB to list"}),". Existe apenas uma inst\xe2ncia do objeto l\xedngua na mem\xf3ria e qualquer modifica\xe7\xe3o efetuada neste objeto \xe9 imediatamente transferida para todos os locais onde \xe9 utilizado."]}),"\n",(0,s.jsxs)(i.p,{children:["El ",(0,s.jsx)(i.strong,{children:"objeto de formulario"}),' no es necesariamente \xfanico: puede haber varias representaciones de la misma lista jer\xe1rquica en el mismo formulario o en otros diferentes. Tal como acontece com outros objetos de formul\xe1rio, especifica-se o objeto na linguagem utilizando a sintaxe (*; "ListName", etc.).']}),"\n",(0,s.jsx)(i.p,{children:'You connect the hierarchical list "language object" with the hierarchical list "form object" by the intermediary of the variable containing the ListRef value. Conecte el "objeto lenguaje " lista jer\xe1rquica con el "objeto de formulario" lista jer\xe1rquica por medio de la variable que contiene el valor RefLista.'}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-4d",children:"$mylist:=New list\n"})}),"\n",(0,s.jsx)(i.p,{children:"Each representation of the list has its own specific characteristics and shares common characteristics with all the other representations. The following characteristics are specific to each representation of the list:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"A selec\xe7\xe3o,"}),"\n",(0,s.jsx)(i.li,{children:"O estado expandido/recolhido dos seus itens,"}),"\n",(0,s.jsx)(i.li,{children:"A posi\xe7\xe3o do cursor de rolagem."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately.\nConsequently, when you use commands based on the expanded/collapsed configuration or the current item, for example ",(0,s.jsx)(i.code,{children:"Count list items"})," (when the final ",(0,s.jsx)(i.code,{children:"*"})," parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity."]}),"\n",(0,s.jsxs)(i.p,{children:["Debe utilizar el identificador ",(0,s.jsx)(i.code,{children:"RefLista"}),' con los comandos del lenguaje cuando quiera especificar la lista jer\xe1rquica que se encuentra en la memoria. On the other hand, if you want to specify the representation of a hierarchical list object at the form level, you must use the object name (string type) in the command, via the standard syntax (*;"ListName", etc.).']}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"In the case of commands that set properties, the syntax based on the object name does not mean that only the form object specified will be modified by the command, but rather that the action of the command will be based on the state of this object. The common characteristics of hierarchical lists are always modified in all of their representations.\nPor exemplo, se executa:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-4d",children:'SET LIST ITEM FONT(*;"mylist1";*;thefont)\n'})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["... you are indicating that you want to modify the font of the hierarchical list item associated with the ",(0,s.jsx)(i.em,{children:"mylist1"})," form object. El comando tendr\xe1 en cuenta el elemento actual del objeto ",(0,s.jsx)(i.em,{children:"mylist1"})," para definir el elemento a modificar, pero esta modificaci\xf3n se trasladar\xe1 a todas las representaciones de la lista en todos los procesos."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"suporte-da-",children:"Suporte da @"}),"\n",(0,s.jsxs)(i.p,{children:['Al igual que con otros comandos de gesti\xf3n de propiedades de objetos, es posible utilizar el car\xe1cter "@" en el par\xe1metro ',(0,s.jsx)(i.code,{children:"NomLista"}),". Regra geral, esta sintaxe \xe9 utilizada para designar um conjunto de objetos no formul\xe1rio. However, in the context of hierarchical list commands, this does not apply in every case. Essa sintaxe tem dois efeitos diferentes, dependendo do comando:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:'For commands that set properties, this syntax designates all the objects whose name corresponds (standard behavior). For example, the parameter "LH@" designates all objects of the hierarchical list type whose name begins with \u201cLH.\u201d'}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"DELETE FROM LIST"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"INSERT IN LIST"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"SELECT LIST ITEMS BY POSITION"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"SET LIST ITEM"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"SET LIST ITEM FONT"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"SET LIST ITEM ICON"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"SET LIST ITEM PARAMETER"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"SET LIST ITEM PROPERTIES"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"For commands retrieving properties, this syntax designates the first object whose name corresponds:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"Count list items"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"Find in list"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"GET LIST ITEM"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"Get list item font"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"GET LIST ITEM ICON"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"GET LIST ITEM PARAMETER"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"GET LIST ITEM PROPERTIES"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"List item parent"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"List item position"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"Selected list items"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"comandos-gen\xe9ricos-utiliz\xe1veis-com-listas-hier\xe1rquicas",children:"Comandos gen\xe9ricos utiliz\xe1veis com listas hier\xe1rquicas"}),"\n",(0,s.jsx)(i.p,{children:"It is possible to modify the appearance of a hierarchical list form objects using several generic 4D commands. You can pass to these commands either the object name of the hierarchical list (using the * parameter), or its variable name (containing the ListRef value):"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"OBJECT SET FONT"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"OBJECT SET FONT STYLE"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"OBJECT SET FONT SIZE"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"OBJECT SET COLOR"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"OBJECT SET FILTER"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"OBJECT SET ENTERABLE"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"OBJECT SET SCROLLBAR"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"OBJECT SET SCROLL POSITION"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"OBJECT SET RGB COLORS"})}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["Recordatorio: excepto ",(0,s.jsx)(i.code,{children:"OBJECT SET SCROLL POSITION"}),", estos comandos modifican todas las representaciones de una misma lista, aunque s\xf3lo se especifique una lista a trav\xe9s de su nombre de objeto."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"prioridade-dos-comandos-de-propriedade",children:"Prioridade dos comandos de propriedade"}),"\n",(0,s.jsxs)(i.p,{children:["Ciertas propiedades de las listas jer\xe1rquicas (por ejemplo, el atributo ",(0,s.jsx)(i.strong,{children:"editable"}),' o el color) pueden definirse de diferentes maneras: en las propiedades del formulario, mediante un comando del tema "Propiedades de los objetos" o mediante un comando del When all three of these means are used to set list properties, the following order of priority is applied:']}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:'Comandos do tema "Listas hier\xe1rquicas"'}),"\n",(0,s.jsx)(i.li,{children:"Comandos gen\xe9ricos de propriedades de objectos"}),"\n",(0,s.jsx)(i.li,{children:"Propriedade formul\xe1rio"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["This principle is applied regardless of the order in which the commands are called. If an item property is modified individually via a hierarchical list command, the equivalent object property command will have no effect on this item even if it is called subsequently. Por ejemplo, si el color de un elemento se modifica a trav\xe9s del comando ",(0,s.jsx)(i.code,{children:"SET LIST ITEM PROPERTIES"}),", el comando ",(0,s.jsx)(i.code,{children:"OBJECT SET COLOR"})," no tendr\xe1 ning\xfan efecto sobre este elemento."]}),"\n",(0,s.jsx)(i.h2,{id:"gerenciamento-dos-itens-por-posi\xe7\xe3o-ou-refer\xeancia",children:"Gerenciamento dos itens por posi\xe7\xe3o ou refer\xeancia"}),"\n",(0,s.jsx)(i.p,{children:"You can usually work in two ways with the contents of hierarchical lists: by position or by reference."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"When you work by position, 4D bases itself on the position in relation to the items of the list displayed on screen in order to identify them. The result will differ according to whether or not certain hierarchical items are expanded or collapsed. Note that in the case of multiple representations, each form object has its own configuration of expanded/collapsed items."}),"\n",(0,s.jsxs)(i.li,{children:["Cuando se trabaja por referencia, 4D se basa en el n\xfamero de identificaci\xf3n ",(0,s.jsx)(i.em,{children:"itemRef"})," de los elementos de la lista. Each item can thus be specified individually, regardless of its position or its display in the hierarchical list."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"utiliza\xe7\xe3o-de-n\xfameros-de-refer\xeancia-dos-items-itemref",children:"Utiliza\xe7\xe3o de n\xfameros de refer\xeancia dos items (itemRef)"}),"\n",(0,s.jsxs)(i.p,{children:["Cada elemento de una lista jer\xe1rquica tiene un n\xfamero de referencia (",(0,s.jsx)(i.em,{children:"itemRef"}),") del tipo Entero largo. Este valor \xe9 apenas destinado ao seu pr\xf3prio uso: 4D simplesmente o mant\xe9m."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"Warning: You can use any type of Longint value as a reference number, except for 0. In fact, for most of the commands in this theme, the value 0 is used to specify the last item added to the list."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Seguem-se algumas sugest\xf5es para a utiliza\xe7\xe3o de n\xfameros de refer\xeancia:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"You do not need to identify each item with a unique number (beginner level)."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["First example: you build a system of tabs by programming, for example, an address book. Since the system returns the number of the tab selected, you will probably not need more information than this. En este caso, no se preocupe por los n\xfameros de referencia de los elementos: pase un valor cualquiera (excepto 0) en el par\xe1metro ",(0,s.jsx)(i.em,{children:"itemRef"}),". Note that for an address book system, you can predefine a list A, B, ..., Z in Design mode. You can also create it by programming in order to eliminate any letters for which there are no records."]}),"\n",(0,s.jsxs)(i.li,{children:["Second example: while working with a database, you progressively build a list of keywords. Puede guardar esta lista al final de cada sesi\xf3n utilizando los comandos ",(0,s.jsx)(i.code,{children:"SAVE LIST"})," o ",(0,s.jsx)(i.code,{children:"LIST TO BLOB"})," y volver a cargarla al comienzo de cada nueva sesi\xf3n utilizando el ",(0,s.jsx)(i.code,{children:"Load list"})," o ",(0,s.jsx)(i.code,{children:"BLOB to list"}),". You can display this list in a floating palette; when each user clicks on a keyword in the list, the item chosen is inserted into the enterable area that is selected in the foreground process. Lo importante es que s\xf3lo procese el elemento seleccionado, porque el comando ",(0,s.jsx)(i.code,{children:"Select list items"})," devuelve la posici\xf3n del elemento que debe procesar. Cuando se utiliza este valor de posici\xf3n, se obtiene el t\xedtulo del elemento mediante el comando ",(0,s.jsx)(i.code,{children:"GET LIST ITEM"}),". Tambi\xe9n en este caso, no es necesario identificar cada elemento individualmente; puede pasar cualquier valor (excepto 0) en el par\xe1metro ",(0,s.jsx)(i.em,{children:"itemRef"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["You need to partially identify the list items (intermediary level).",(0,s.jsx)(i.br,{}),"\nYou use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the ",(0,s.jsx)(i.code,{children:"APPEND TO LIST"})," command. In this example, we use the item reference numbers to store record numbers. However, we must be able to establish a distinction between items that correspond to the [Department] records and those that correspond to the [Employees] records."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["You need to identify all the list items individually (advanced level).",(0,s.jsx)(i.br,{}),"\nYou program an elaborate management of hierarchical lists in which you absolutely must be able to identify each item individually at every level of the list. Uma forma simples de o fazer \xe9 manter um contador pessoal. Suponga que crea una lista ",(0,s.jsx)(i.em,{children:"hlList"})," utilizando el comando ",(0,s.jsx)(i.code,{children:"APPEND TO LIST"}),". En esta etapa, se inicializa un contador ",(0,s.jsx)(i.em,{children:"vhlCounter"})," en 1. Cada vez que se llama a ",(0,s.jsx)(i.code,{children:"APPEND TO LIST"})," o ",(0,s.jsx)(i.code,{children:"INSERT IN LIST"}),", se incrementa este contador ",(0,s.jsx)(i.code,{children:"(vhlCounter:=vhlCounter+1)"}),", y se pasa el n\xfamero del contador como n\xfamero de referencia del elemento. The trick consists in never decrementing the counter when you delete items \u2014 the counter can only increase. In this way, you guarantee the uniqueness of the item reference numbers. Since these numbers are of the Longint type, you can add or insert more than two billion items in a list that has been reinitialized... (however if you are working with such a great number of items, this usually means that you should use a table rather than a list.)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"If you use Bitwise Operators, you can also use item reference numbers for storing information that can be put into a Longint, i.e. 2 Integers, 4-byte values or, yet again, 32 Booleans."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"quando-\xe9-que-s\xe3o-necess\xe1rios-n\xfameros-de-refer\xeancia-\xfanicos",children:"Quando \xe9 que s\xe3o necess\xe1rios n\xfameros de refer\xeancia \xfanicos?"}),"\n",(0,s.jsxs)(i.p,{children:["In most cases, when using hierarchical lists for user interface purposes and when only dealing with the selected item (the one that was clicked or dragged), you will not need to use item reference numbers at all. Con ",(0,s.jsx)(i.code,{children:"Selected list items"})," y ",(0,s.jsx)(i.code,{children:"GET LIST ITEM"}),", tiene todo lo que necesita para tratar con el elemento seleccionado actualmente. Adem\xe1s, comandos como ",(0,s.jsx)(i.code,{children:"INSERT IN LIST"})," y ",(0,s.jsx)(i.code,{children:"DELETE FROM LIST"}),' permiten manipular la lista "relativamente" con respecto al elemento seleccionado.']}),"\n",(0,s.jsx)(i.p,{children:"Basically, you need to deal with item reference numbers when you want direct access to any item of the list programmatically and not necessarily the one currently selected in the list."}),"\n",(0,s.jsx)(i.h2,{id:"elemento-modific\xe1vel",children:"Elemento modific\xe1vel"}),"\n",(0,s.jsxs)(i.p,{children:["Puede controlar si los elementos de la lista jer\xe1rquica pueden ser modificados por el usuario utilizando el atajo de teclado ",(0,s.jsx)(i.strong,{children:"Alt+clic"}),"(Windows) / ",(0,s.jsx)(i.strong,{children:"Opci\xf3n+clic"})," (macOS), o realizando una pulsaci\xf3n larga sobre el texto del elemento."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Sea cual sea la fuente de datos de la lista jer\xe1rquica, puede controlar todo el objeto con la propiedad ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesEntry#enterable",children:"Editable"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Adem\xe1s, si llena la lista jer\xe1rquica utilizando una lista creada en el editor de listas, puede controlar si un elemento de una lista jer\xe1rquica es modificable mediante la opci\xf3n ",(0,s.jsx)(i.strong,{children:"Elemento modificable"})," del editor de listas. Para m\xe1s informaci\xf3n, consulte ",(0,s.jsx)(i.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html",children:"Definir las propiedades de la lista"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesAction#draggable-and-droppable",children:"Draggable"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesAction#draggable-and-droppable",children:"Droppable"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesEntry#entry-filter",children:"Entry Filter"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Fill Color"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesEntry#focusable",children:"Focusable"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesText#font",children:"Font"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Horizontal Scroll Bar"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesAction#multi-selectable",children:"Multi-selectable"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Vertical Scroll Bar"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,s.jsx)(i.a,{href:"/docs/pt/20-R5/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,i,o)=>{var s=o(296540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,i,o){var s,r={},d=null,c=null;for(s in void 0!==o&&(d=""+o),void 0!==i.key&&(d=""+i.key),void 0!==i.ref&&(c=i.ref),i)t.call(i,s)&&!l.hasOwnProperty(s)&&(r[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===r[s]&&(r[s]=i[s]);return{$$typeof:n,type:e,key:d,ref:c,props:r,_owner:a.current}}i.Fragment=r,i.jsx=d,i.jsxs=d},474848:(e,i,o)=>{e.exports=o(221020)},699767:(e,i,o)=>{o.d(i,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,i,o)=>{o.d(i,{R:()=>t,x:()=>a});var s=o(296540);const n={},r=s.createContext(n);function t(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);