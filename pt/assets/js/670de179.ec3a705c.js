"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16414],{603905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var a=i(667294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(i),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return i?a.createElement(h,n(n({ref:t},c),{},{components:i})):a.createElement(h,n({ref:t},c))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,n=new Array(r);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var p=2;p<r;p++)n[p]=i[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},174656:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});i(667294);var a=i(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}const n={id:"listOverview",title:"Hierarchical List"},s=void 0,l={unversionedId:"FormObjects/listOverview",id:"version-20-R4/FormObjects/listOverview",title:"Hierarchical List",description:"As listas hier\xe1rquicas s\xe3o objetos de formul\xe1rio que podem ser utilizados para apresentar dados como listas com um ou mais n\xedveis que podem ser expandidos ou recolhidos.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/FormObjects/list_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/listOverview",permalink:"/docs/pt/FormObjects/listOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Flist_overview.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"listOverview",title:"Hierarchical List"},sidebar:"docs",previous:{title:"Input",permalink:"/docs/pt/FormObjects/inputOverview"},next:{title:"List Box",permalink:"/docs/pt/FormObjects/listboxOverview"}},p={},c=[{value:"Fonte de dados de lista hier\xe1rquica",id:"fonte-de-dados-de-lista-hier\xe1rquica",level:2},{value:"RefList e nome de objeto",id:"reflist-e-nome-de-objeto",level:2},{value:"Suporte da @",id:"suporte-da-",level:3},{value:"Comandos gen\xe9ricos utiliz\xe1veis com listas hier\xe1rquicas",id:"comandos-gen\xe9ricos-utiliz\xe1veis-com-listas-hier\xe1rquicas",level:2},{value:"Prioridade dos comandos de propriedade",id:"prioridade-dos-comandos-de-propriedade",level:2},{value:"Gerenciamento dos itens por posi\xe7\xe3o ou refer\xeancia",id:"gerenciamento-dos-itens-por-posi\xe7\xe3o-ou-refer\xeancia",level:2},{value:"Utiliza\xe7\xe3o de n\xfameros de refer\xeancia dos items (itemRef)",id:"utiliza\xe7\xe3o-de-n\xfameros-de-refer\xeancia-dos-items-itemref",level:3},{value:"Quando \xe9 que s\xe3o necess\xe1rios n\xfameros de refer\xeancia \xfanicos?",id:"quando-\xe9-que-s\xe3o-necess\xe1rios-n\xfameros-de-refer\xeancia-\xfanicos",level:3},{value:"Elemento modific\xe1vel",id:"elemento-modific\xe1vel",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}],m={toc:c};function d(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As listas hier\xe1rquicas s\xe3o objetos de formul\xe1rio que podem ser utilizados para apresentar dados como listas com um ou mais n\xedveis que podem ser expandidos ou recolhidos."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(530563).Z,width:"168",height:"162"})),(0,a.kt)("p",null,"Quando apropriado, o \xedcone de expans\xe3o/colapso \xe9 automaticamente apresentado \xe0 esquerda do item. As listas hier\xe1rquicas suportam um n\xfamero ilimitado de subn\xedveis."),(0,a.kt)("h2",o({},{id:"fonte-de-dados-de-lista-hier\xe1rquica"}),"Fonte de dados de lista hier\xe1rquica"),(0,a.kt)("p",null,"O conte\xfado de um objeto formul\xe1rio lista hier\xe1rquica pode ser inicializado de uma das seguintes formas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Associate an existing ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/pt/FormObjects/propertiesDataSource#choice-list"}),"choice list")," to the object. A lista de op\xe7\xf5es deve ter sido definida no editor de listas no modo Desenho."),(0,a.kt)("li",{parentName:"ul"},"Directly assign a hierarchical list  reference to the ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression"}),"variable or expression")," associated with the form object.")),(0,a.kt)("p",null,"In both cases, you manage a hierarchical list at runtime through its ",(0,a.kt)("em",{parentName:"p"},"ListRef")," reference, using the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html"}),"Hierarchical list")," commands in the 4D language."),(0,a.kt)("h2",o({},{id:"reflist-e-nome-de-objeto"}),"RefList e nome de objeto"),(0,a.kt)("p",null,"A hierarchical list is both a ",(0,a.kt)("strong",{parentName:"p"},"language object")," existing in memory and a ",(0,a.kt)("strong",{parentName:"p"},"form object"),"."),(0,a.kt)("p",null,"O ",(0,a.kt)("strong",{parentName:"p"},"objeto de linguagem ")," \xe9 referenciado por um ID interno \xfanico do tipo Longint, designado por ",(0,a.kt)("em",{parentName:"p"},"ListRef")," na manual da Linguagem 4D. Este ID \xe9 devolvido pelos comandos que podem ser utilizados para criar listas: ",(0,a.kt)("inlineCode",{parentName:"p"},"New list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Copy list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Load list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BLOB to list"),". Existe apenas uma inst\xe2ncia do objeto l\xedngua na mem\xf3ria e qualquer modifica\xe7\xe3o efetuada neste objeto \xe9 imediatamente transferida para todos os locais onde \xe9 utilizado."),(0,a.kt)("p",null,"O ",(0,a.kt)("strong",{parentName:"p"},"objeto de formul\xe1rio"),' n\xe3o \xe9 necessariamente \xfanico: podem existir v\xe1rias representa\xe7\xf5es da mesma lista hier\xe1rquica na mesma forma ou em formas diferentes. Tal como acontece com outros objetos de formul\xe1rio, especifica-se o objeto na linguagem utilizando a sintaxe (*; "ListName", etc.).'),(0,a.kt)("p",null,'You connect the hierarchical list "language object" with the hierarchical list "form object" by the intermediary of the variable containing the ListRef value. You connect the hierarchical list "language object" with the hierarchical list "form object" by the intermediary of the variable containing the ListRef value.'),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$mylist:=New list\n")),(0,a.kt)("p",null,"Each representation of the list has its own specific characteristics and shares common characteristics with all the other representations. The following characteristics are specific to each representation of the list:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A selec\xe7\xe3o,"),(0,a.kt)("li",{parentName:"ul"},"O estado expandido/recolhido dos seus itens,"),(0,a.kt)("li",{parentName:"ul"},"A posi\xe7\xe3o do cursor de rolagem.")),(0,a.kt)("p",null,"The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately. Consequently, when you use commands based on the expanded/collapsed configuration or the current item, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"Count list items")," (when the final ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity."),(0,a.kt)("p",null,"You must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListRef"),' ID with language commands when you want to specify the hierarchical list found in memory. On the other hand, if you want to specify the representation of a hierarchical list object at the form level, you must use the object name (string type) in the command, via the standard syntax (*;"ListName", etc.).'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In the case of commands that set properties, the syntax based on the object name does not mean that only the form object specified will be modified by the command, but rather that the action of the command will be based on the state of this object. The common characteristics of hierarchical lists are always modified in all of their representations. Por exemplo, se executa:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'SET LIST ITEM FONT(*;"mylist1";*;thefont)\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"... est\xe1 a indicar que pretende modificar o tipo de letra do item da lista hier\xe1rquica associado ao objeto de formul\xe1rio ",(0,a.kt)("em",{parentName:"p"},"mylist1"),". The command will take the current item of the ",(0,a.kt)("em",{parentName:"p"},"mylist1")," object into account to specify the item to modify, but this modification will be carried over to all the representations of the list in all of the processes.")),(0,a.kt)("h3",o({},{id:"suporte-da-"}),"Suporte da @"),(0,a.kt)("p",null,"As with other object property management commands, it is possible to use the \u201c@\u201d character in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListName")," parameter. Regra geral, esta sintaxe \xe9 utilizada para designar um conjunto de objetos no formul\xe1rio. However, in the context of hierarchical list commands, this does not apply in every case. Essa sintaxe tem dois efeitos diferentes, dependendo do comando:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'For commands that set properties, this syntax designates all the objects whose name corresponds (standard behavior). For example, the parameter "LH@" designates all objects of the hierarchical list type whose name begins with \u201cLH.\u201d'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DELETE FROM LIST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INSERT IN LIST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SELECT LIST ITEMS BY POSITION")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM FONT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM ICON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM PARAMETER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM PROPERTIES")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For commands retrieving properties, this syntax designates the first object whose name corresponds:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Count list items")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Find in list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Get list item font")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM ICON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM PARAMETER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM PROPERTIES")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"List item parent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"List item position")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Selected list items"))))),(0,a.kt)("h2",o({},{id:"comandos-gen\xe9ricos-utiliz\xe1veis-com-listas-hier\xe1rquicas"}),"Comandos gen\xe9ricos utiliz\xe1veis com listas hier\xe1rquicas"),(0,a.kt)("p",null,"It is possible to modify the appearance of a hierarchical list form objects using several generic 4D commands. You can pass to these commands either the object name of the hierarchical list (using the * parameter), or its variable name (containing the ListRef value):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OBJECT SET FONT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OBJECT SET FONT STYLE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OBJECT SET FONT SIZE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OBJECT SET COLOR")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OBJECT SET FILTER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OBJECT SET ENTERABLE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OBJECT SET SCROLLBAR")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OBJECT SET SCROLL POSITION")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OBJECT SET RGB COLORS"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reminder: Except ",(0,a.kt)("inlineCode",{parentName:"p"},"OBJECT SET SCROLL POSITION"),", these commands modify all the representations of the same list, even if you only specify a list via its object name.")),(0,a.kt)("h2",o({},{id:"prioridade-dos-comandos-de-propriedade"}),"Prioridade dos comandos de propriedade"),(0,a.kt)("p",null,"Certain properties of hierarchical lists (for example, the ",(0,a.kt)("strong",{parentName:"p"},"Enterable")," attribute or the color) can be set in different ways: in the form properties, via a command of the \u201cObject Properties\u201d theme or via a command of the \u201cHierarchical Lists\u201d theme. When all three of these means are used to set list properties, the following order of priority is applied:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Comandos do tema "Listas hier\xe1rquicas"'),(0,a.kt)("li",{parentName:"ol"},"Comandos gen\xe9ricos de propriedades de objectos"),(0,a.kt)("li",{parentName:"ol"},"Propriedade formul\xe1rio")),(0,a.kt)("p",null,"This principle is applied regardless of the order in which the commands are called. If an item property is modified individually via a hierarchical list command, the equivalent object property command will have no effect on this item even if it is called subsequently. For example, if the color of an item is modified via the ",(0,a.kt)("inlineCode",{parentName:"p"},"SET LIST ITEM PROPERTIES")," command, the ",(0,a.kt)("inlineCode",{parentName:"p"},"OBJECT SET COLOR")," command will have no effect on this item."),(0,a.kt)("h2",o({},{id:"gerenciamento-dos-itens-por-posi\xe7\xe3o-ou-refer\xeancia"}),"Gerenciamento dos itens por posi\xe7\xe3o ou refer\xeancia"),(0,a.kt)("p",null,"You can usually work in two ways with the contents of hierarchical lists: by position or by reference."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When you work by position, 4D bases itself on the position in relation to the items of the list displayed on screen in order to identify them. The result will differ according to whether or not certain hierarchical items are expanded or collapsed. Note that in the case of multiple representations, each form object has its own configuration of expanded/collapsed items."),(0,a.kt)("li",{parentName:"ul"},"When you work by reference, 4D bases itself on the ",(0,a.kt)("em",{parentName:"li"},"itemRef")," ID number of the list items. Each item can thus be specified individually, regardless of its position or its display in the hierarchical list.")),(0,a.kt)("h3",o({},{id:"utiliza\xe7\xe3o-de-n\xfameros-de-refer\xeancia-dos-items-itemref"}),"Utiliza\xe7\xe3o de n\xfameros de refer\xeancia dos items (itemRef)"),(0,a.kt)("p",null,"Each item of a hierarchical list has a reference number (",(0,a.kt)("em",{parentName:"p"},"itemRef"),") of the Longint type. Este valor \xe9 apenas destinado ao seu pr\xf3prio uso: 4D simplesmente o mant\xe9m."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: You can use any type of Longint value as a reference number, except for 0. In fact, for most of the commands in this theme, the value 0 is used to specify the last item added to the list.")),(0,a.kt)("p",null,"Seguem-se algumas sugest\xf5es para a utiliza\xe7\xe3o de n\xfameros de refer\xeancia:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You do not need to identify each item with a unique number (beginner level)."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"First example: you build a system of tabs by programming, for example, an address book. Since the system returns the number of the tab selected, you will probably not need more information than this. In this case, do not worry about item reference numbers: pass any value (except 0) in the ",(0,a.kt)("em",{parentName:"li"},"itemRef")," parameter. Note that for an address book system, you can predefine a list A, B, ..., Z in Design mode. You can also create it by programming in order to eliminate any letters for which there are no records."),(0,a.kt)("li",{parentName:"ul"},"Second example: while working with a database, you progressively build a list of keywords. You can save this list at the end of each session by using the ",(0,a.kt)("inlineCode",{parentName:"li"},"SAVE LIST")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"LIST TO BLOB")," commands and reload it at the beginning of each new session using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Load list")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"BLOB to list")," commands. You can display this list in a floating palette; when each user clicks on a keyword in the list, the item chosen is inserted into the enterable area that is selected in the foreground process. The important thing is that you only process the item selected, because the ",(0,a.kt)("inlineCode",{parentName:"li"},"Selected list items")," command returns the position of the item that you must process. When using this position value, you obtain the title of the item by means of the ",(0,a.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM")," command. Here again, you do not need to identify each item individually; you can pass any value (except 0) in the ",(0,a.kt)("em",{parentName:"li"},"itemRef")," parameter."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You need to partially identify the list items (intermediary level).",(0,a.kt)("br",{parentName:"p"}),"\n","You use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the ",(0,a.kt)("inlineCode",{parentName:"p"},"APPEND TO LIST")," command. In this example, we use the item reference numbers to store record numbers. However, we must be able to establish a distinction between items that correspond to the ","[Department]"," records and those that correspond to the ","[Employees]"," records.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You need to identify all the list items individually (advanced level).",(0,a.kt)("br",{parentName:"p"}),"\n","You program an elaborate management of hierarchical lists in which you absolutely must be able to identify each item individually at every level of the list. Uma forma simples de o fazer \xe9 manter um contador pessoal. Suppose that you create a ",(0,a.kt)("em",{parentName:"p"},"hlList")," list using the ",(0,a.kt)("inlineCode",{parentName:"p"},"APPEND TO LIST")," command. Nesse est\xe1gio, voc\xea inicializa um contador ",(0,a.kt)("em",{parentName:"p"},"vhlCounter")," para 1. Each time you call ",(0,a.kt)("inlineCode",{parentName:"p"},"APPEND TO LIST")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT IN LIST"),", you increment this counter ",(0,a.kt)("inlineCode",{parentName:"p"},"(vhlCounter:=vhlCounter+1)"),", and you pass the counter number as the item reference number. The trick consists in never decrementing the counter when you delete items \u2014 the counter can only increase. In this way, you guarantee the uniqueness of the item reference numbers. Since these numbers are of the Longint type, you can add or insert more than two billion items in a list that has been reinitialized... (however if you are working with such a great number of items, this usually means that you should use a table rather than a list.)"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you use Bitwise Operators, you can also use item reference numbers for storing information that can be put into a Longint, i.e. 2 Integers, 4-byte values or, yet again, 32 Booleans.")),(0,a.kt)("h3",o({},{id:"quando-\xe9-que-s\xe3o-necess\xe1rios-n\xfameros-de-refer\xeancia-\xfanicos"}),"Quando \xe9 que s\xe3o necess\xe1rios n\xfameros de refer\xeancia \xfanicos?"),(0,a.kt)("p",null,"In most cases, when using hierarchical lists for user interface purposes and when only dealing with the selected item (the one that was clicked or dragged), you will not need to use item reference numbers at all. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Selected list items")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GET LIST ITEM")," you have all you need to deal with the currently selected item. In addition, commands such as ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT IN LIST")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE FROM LIST")," allow you to manipulate the list \u201crelatively\u201d with respect to the selected item."),(0,a.kt)("p",null,"Basically, you need to deal with item reference numbers when you want direct access to any item of the list programmatically and not necessarily the one currently selected in the list."),(0,a.kt)("h2",o({},{id:"elemento-modific\xe1vel"}),"Elemento modific\xe1vel"),(0,a.kt)("p",null,"Pode controlar se os itens da lista hier\xe1rquica podem ser modificados pelo usu\xe1rio, utilizando o atalho ",(0,a.kt)("strong",{parentName:"p"},"Alt+click"),"(Windows) / ",(0,a.kt)("strong",{parentName:"p"},"Option+click")," (macOS), ou fazendo um clique longo no texto do item."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Independentemente da fonte de dados da lista hier\xe1rquica, \xe9 poss\xedvel controlar todo o objeto com a propriedade ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesEntry#enterable"}),"Edit\xe1vel"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In addition, if you populate the hierarchical list using a list created in the Lists editor, you control whether an item in a hierarchical list is modifiable using the ",(0,a.kt)("strong",{parentName:"p"},"Modifiable Element")," option in the Lists editor. Para obter mais informa\xe7\xf5es, consulte ",(0,a.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html"}),"Defini\xe7\xe3o das propriedades da lista"),"."))),(0,a.kt)("h2",o({},{id:"propriedades-compat\xedveis"}),"Propriedades compat\xedveis"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesText#bold"}),"Negrita")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Estilo de linha de borda")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Inferior")," - ","[","Lista de op\xe7\xf5es","]","(properties_DataSource. md#choice-list) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#css-class"}),"Classe")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesAction#draggable-and-droppable"}),"Arrast\xe1vel")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesAction#draggable-and-droppable"}),"Solt\xe1vel")," - ","[","Edit\xe1vel","]","(properties_Entry. md#enterable) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesEntry#entry-filter"}),"Filtro de entrada")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color"}),"Cor de preenchimento")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesEntry#focusable"}),"Foc\xe1vel")," - ","[","Fonte","]","(properties_Text. md#font) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesText#font-color"}),"Cor da fonte")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesText#font-size"}),"Tamanho da fonte")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura")," - ","[","Ocultar ret\xe2ngulo de enfoque","]","(properties_Appearance. md#hide-focus-rectangle) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesAppearance#horizontal-scroll-bar"}),"Barra de deslocamento horizontal")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Tamanho horizontal")," - ","[","It\xe1lica","]","(properties_Text. md#italic) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left"}),"esquerda")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesAction#multi-selectable"}),"Multi-selecion\xe1vel")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#object-name"}),"Nome do objeto")," - ","[","Direita","]","(properties_CoordinatesAndSizing. md#right) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top"}),"Superior")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#type"}),"Tipo")," - ","[","Sublinhado","]","(properties_Text. md#underline) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesAppearance#vertical-scroll-bar"}),"Barra de deslocamento vertical")," - ","[","Tamanho vertical","]","(properties_ResizingOptions. md#vertical-sizing) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression"}),"Vari\xe1vel ou express\xe3o")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesDisplay#visibility"}),"Visibilidade")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largura")))}d.isMDXComponent=!0},530563:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);