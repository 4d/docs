"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73091],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(i),d=r,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||a;return i?n.createElement(u,o(o({ref:t},p),{},{components:i})):n.createElement(u,o({ref:t},p))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},73821:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});i(67294);var n=i(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}const o={id:"listOverview",title:"Hierarchical List"},l=void 0,s={unversionedId:"FormObjects/listOverview",id:"version-20/FormObjects/listOverview",title:"Hierarchical List",description:"Hierarchical lists are form objects that can be used to display data as lists with one or more levels that can be expanded or collapsed.",source:"@site/versioned_docs/version-20/FormObjects/list_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/listOverview",permalink:"/docs/FormObjects/listOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Flist_overview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"listOverview",title:"Hierarchical List"},sidebar:"docs",previous:{title:"Input",permalink:"/docs/FormObjects/inputOverview"},next:{title:"List Box",permalink:"/docs/FormObjects/listboxOverview"}},c={},p=[{value:"Hierarchical list data source",id:"hierarchical-list-data-source",level:2},{value:"ListRef and object name",id:"listref-and-object-name",level:2},{value:"Support of @",id:"support-of-",level:3},{value:"Generic commands to use with hierarchical lists",id:"generic-commands-to-use-with-hierarchical-lists",level:2},{value:"Priority of property commands",id:"priority-of-property-commands",level:2},{value:"Management of items by position or by reference",id:"management-of-items-by-position-or-by-reference",level:2},{value:"Using item reference numbers (itemRef)",id:"using-item-reference-numbers-itemref",level:3},{value:"When do you need unique reference numbers?",id:"when-do-you-need-unique-reference-numbers",level:3},{value:"Modifiable element",id:"modifiable-element",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],m={toc:p};function h(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)("wrapper",r({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hierarchical lists are form objects that can be used to display data as lists with one or more levels that can be expanded or collapsed."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(90131).Z,width:"168",height:"162"})),(0,n.kt)("p",null,"Where appropriate, the expand/collapse icon is automatically displayed to the left of the item. Hierarchical lists support an unlimited number of sublevels."),(0,n.kt)("h2",r({},{id:"hierarchical-list-data-source"}),"Hierarchical list data source"),(0,n.kt)("p",null,"The contents of a hierarchical list form object can be initialized in one of the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Associate an existing ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/FormObjects/propertiesDataSource#choice-list"}),"choice list")," to the object. The choice list must have been defined in the List editor in Design mode. "),(0,n.kt)("li",{parentName:"ul"},"Directly assign a hierarchical list  reference to the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/FormObjects/propertiesObject#variable-or-expression"}),"variable or expression")," associated with the form object. ")),(0,n.kt)("p",null,"In both cases, you manage a hierarchical list at runtime through its ",(0,n.kt)("em",{parentName:"p"},"ListRef")," reference, using the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html"}),"Hierarchical list")," commands in the 4D language. "),(0,n.kt)("h2",r({},{id:"listref-and-object-name"}),"ListRef and object name"),(0,n.kt)("p",null,"A hierarchical list is both a ",(0,n.kt)("strong",{parentName:"p"},"language object")," existing in memory and a ",(0,n.kt)("strong",{parentName:"p"},"form object"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"language object")," is referenced by an unique internal ID of the Longint type, designated by ",(0,n.kt)("em",{parentName:"p"},"ListRef")," in the 4D Language Reference. This ID is returned by the commands that can be used to create lists: ",(0,n.kt)("inlineCode",{parentName:"p"},"New list"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Copy list"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Load list"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BLOB to list"),". There is only one instance of the language object in memory and any modification carried out on this object is immediately carried over to all the places where it is used."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"form object"),' is not necessarily unique: there may be several representations of the same hierarchical list in the same form or in different ones. As with other form objects, you specify the object in the language using the syntax (*;"ListName", etc.).'),(0,n.kt)("p",null,'You connect the hierarchical list "language object" with the hierarchical list "form object" by the intermediary of the variable containing the ListRef value. For example, if you have associated the mylist ',(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#variable-or-expression"}),"variable")," to the form object, you can write:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"mylist:=New list\n")),(0,n.kt)("p",null,"Each representation of the list has its own specific characteristics and shares common characteristics with all the other representations. The following characteristics are specific to each representation of the list:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The selection,"),(0,n.kt)("li",{parentName:"ul"},"The expanded/collapsed state of its items,"),(0,n.kt)("li",{parentName:"ul"},"The position of the scrolling cursor.")),(0,n.kt)("p",null,"The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately.\nConsequently, when you use commands based on the expanded/collapsed configuration or the current item, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"Count list items")," (when the final ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity."),(0,n.kt)("p",null,"You must use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ListRef"),' ID with language commands when you want to specify the hierarchical list found in memory. On the other hand, if you want to specify the representation of a hierarchical list object at the form level, you must use the object name (string type) in the command, via the standard syntax (*;"ListName", etc.).'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In the case of commands that set properties, the syntax based on the object name does not mean that only the form object specified will be modified by the command, but rather that the action of the command will be based on the state of this object. The common characteristics of hierarchical lists are always modified in all of their representations.\nFor example, if you execute:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'SET LIST ITEM FONT(*;"mylist1";*;thefont)\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"... you are indicating that you want to modify the font of the hierarchical list item associated with the ",(0,n.kt)("em",{parentName:"p"},"mylist1")," form object. The command will take the current item of the ",(0,n.kt)("em",{parentName:"p"},"mylist1")," object into account to specify the item to modify, but this modification will be carried over to all the representations of the list in all of the processes.")),(0,n.kt)("h3",r({},{id:"support-of-"}),"Support of @"),(0,n.kt)("p",null,"As with other object property management commands, it is possible to use the \u201c@\u201d character in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ListName")," parameter. As a rule, this syntax is used to designate a set of objects in the form. However, in the context of hierarchical list commands, this does not apply in every case. This syntax will have two different effects depending on the type of command:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'For commands that set properties, this syntax designates all the objects whose name corresponds (standard behavior). For example, the parameter "LH@" designates all objects of the hierarchical list type whose name begins with \u201cLH.\u201d'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DELETE FROM LIST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"INSERT IN LIST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SELECT LIST ITEMS BY POSITION")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM FONT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM ICON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM PARAMETER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM PROPERTIES")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For commands retrieving properties, this syntax designates the first object whose name corresponds:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Count list items")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Find in list")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Get list item font")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM ICON")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM PARAMETER")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM PROPERTIES")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"List item parent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"List item position")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Selected list items"))))),(0,n.kt)("h2",r({},{id:"generic-commands-to-use-with-hierarchical-lists"}),"Generic commands to use with hierarchical lists"),(0,n.kt)("p",null,"It is possible to modify the appearance of a hierarchical list form objects using several generic 4D commands. You can pass to these commands either the object name of the hierarchical list (using the * parameter), or its variable name (containing the ListRef value):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET FONT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET FONT STYLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET FONT SIZE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET COLOR")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET FILTER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET ENTERABLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET SCROLLBAR")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET SCROLL POSITION")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET RGB COLORS"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Reminder: Except ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT SET SCROLL POSITION"),", these commands modify all the representations of the same list, even if you only specify a list via its object name. ")),(0,n.kt)("h2",r({},{id:"priority-of-property-commands"}),"Priority of property commands"),(0,n.kt)("p",null,"Certain properties of hierarchical lists (for example, the ",(0,n.kt)("strong",{parentName:"p"},"Enterable")," attribute or the color) can be set in different ways: in the form properties, via a command of the \u201cObject Properties\u201d theme or via a command of the \u201cHierarchical Lists\u201d theme. When all three of these means are used to set list properties, the following order of priority is applied:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Commands of the \u201cHierarchical Lists\u201d theme"),(0,n.kt)("li",{parentName:"ol"},"Generic object property commands"),(0,n.kt)("li",{parentName:"ol"},"Form property")),(0,n.kt)("p",null,"This principle is applied regardless of the order in which the commands are called. If an item property is modified individually via a hierarchical list command, the equivalent object property command will have no effect on this item even if it is called subsequently. For example, if the color of an item is modified via the ",(0,n.kt)("inlineCode",{parentName:"p"},"SET LIST ITEM PROPERTIES")," command, the ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT SET COLOR")," command will have no effect on this item."),(0,n.kt)("h2",r({},{id:"management-of-items-by-position-or-by-reference"}),"Management of items by position or by reference"),(0,n.kt)("p",null,"You can usually work in two ways with the contents of hierarchical lists: by position or by reference."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When you work by position, 4D bases itself on the position in relation to the items of the list displayed on screen in order to identify them. The result will differ according to whether or not certain hierarchical items are expanded or collapsed. Note that in the case of multiple representations, each form object has its own configuration of expanded/collapsed items."),(0,n.kt)("li",{parentName:"ul"},"When you work by reference, 4D bases itself on the ",(0,n.kt)("em",{parentName:"li"},"itemRef")," ID number of the list items. Each item can thus be specified individually, regardless of its position or its display in the hierarchical list.")),(0,n.kt)("h3",r({},{id:"using-item-reference-numbers-itemref"}),"Using item reference numbers (itemRef)"),(0,n.kt)("p",null,"Each item of a hierarchical list has a reference number (",(0,n.kt)("em",{parentName:"p"},"itemRef"),") of the Longint type. This value is only intended for your own use: 4D simply maintains it."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Warning: You can use any type of Longint value as a reference number, except for 0. In fact, for most of the commands in this theme, the value 0 is used to specify the last item added to the list.")),(0,n.kt)("p",null,"Here are a few tips for using reference numbers:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You do not need to identify each item with a unique number (beginner level)."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"First example: you build a system of tabs by programming, for example, an address book. Since the system returns the number of the tab selected, you will probably not need more information than this. In this case, do not worry about item reference numbers: pass any value (except 0) in the ",(0,n.kt)("em",{parentName:"li"},"itemRef")," parameter. Note that for an address book system, you can predefine a list A, B, ..., Z in Design mode. You can also create it by programming in order to eliminate any letters for which there are no records."),(0,n.kt)("li",{parentName:"ul"},"Second example: while working with a database, you progressively build a list of keywords. You can save this list at the end of each session by using the ",(0,n.kt)("inlineCode",{parentName:"li"},"SAVE LIST")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"LIST TO BLOB")," commands and reload it at the beginning of each new session using the ",(0,n.kt)("inlineCode",{parentName:"li"},"Load list")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"BLOB to list")," commands. You can display this list in a floating palette; when each user clicks on a keyword in the list, the item chosen is inserted into the enterable area that is selected in the foreground process. The important thing is that you only process the item selected, because the ",(0,n.kt)("inlineCode",{parentName:"li"},"Selected list items")," command returns the position of the item that you must process. When using this position value, you obtain the title of the item by means of the ",(0,n.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM")," command. Here again, you do not need to identify each item individually; you can pass any value (except 0) in the ",(0,n.kt)("em",{parentName:"li"},"itemRef")," parameter.  "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You need to partially identify the list items (intermediary level).",(0,n.kt)("br",{parentName:"p"}),"\n","You use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the ",(0,n.kt)("inlineCode",{parentName:"p"},"APPEND TO LIST")," command. In this example, we use the item reference numbers to store record numbers. However, we must be able to establish a distinction between items that correspond to the ","[Department]"," records and those that correspond to the ","[Employees]"," records.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You need to identify all the list items individually (advanced level).",(0,n.kt)("br",{parentName:"p"}),"\n","You program an elaborate management of hierarchical lists in which you absolutely must be able to identify each item individually at every level of the list. A simple way of implementing this is to maintain a personal counter. Suppose that you create a ",(0,n.kt)("em",{parentName:"p"},"hlList")," list using the ",(0,n.kt)("inlineCode",{parentName:"p"},"APPEND TO LIST")," command. At this stage, you initialize a counter ",(0,n.kt)("em",{parentName:"p"},"vhlCounter")," to 1. Each time you call ",(0,n.kt)("inlineCode",{parentName:"p"},"APPEND TO LIST")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT IN LIST"),", you increment this counter ",(0,n.kt)("inlineCode",{parentName:"p"},"(vhlCounter:=vhlCounter+1)"),", and you pass the counter number as the item reference number. The trick consists in never decrementing the counter when you delete items \u2014 the counter can only increase. In this way, you guarantee the uniqueness of the item reference numbers. Since these numbers are of the Longint type, you can add or insert more than two billion items in a list that has been reinitialized... (however if you are working with such a great number of items, this usually means that you should use a table rather than a list.)"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you use Bitwise Operators, you can also use item reference numbers for storing information that can be put into a Longint, i.e. 2 Integers, 4-byte values or, yet again, 32 Booleans.")),(0,n.kt)("h3",r({},{id:"when-do-you-need-unique-reference-numbers"}),"When do you need unique reference numbers?"),(0,n.kt)("p",null,"In most cases, when using hierarchical lists for user interface purposes and when only dealing with the selected item (the one that was clicked or dragged), you will not need to use item reference numbers at all. Using ",(0,n.kt)("inlineCode",{parentName:"p"},"Selected list items")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"GET LIST ITEM")," you have all you need to deal with the currently selected item. In addition, commands such as ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT IN LIST")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE FROM LIST")," allow you to manipulate the list \u201crelatively\u201d with respect to the selected item."),(0,n.kt)("p",null,"Basically, you need to deal with item reference numbers when you want direct access to any item of the list programmatically and not necessarily the one currently selected in the list."),(0,n.kt)("h2",r({},{id:"modifiable-element"}),"Modifiable element"),(0,n.kt)("p",null,"You can control whether hierarchical list items can be modified by the user by using the ",(0,n.kt)("strong",{parentName:"p"},"Alt+click"),"(Windows) / ",(0,n.kt)("strong",{parentName:"p"},"Option+click")," (macOS) shortcut, or by carrying out a long click on the text of the item. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Whatever the hierarchical list data source, you can control the whole object with the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#enterable"}),"Enterable")," property. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In addition, if you populate the hierarchical list using a list created in the Lists editor, you control whether an item in a hierarchical list is modifiable using the ",(0,n.kt)("strong",{parentName:"p"},"Modifiable Element")," option in the Lists editor. For more information, see ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html"}),"Setting list properties"),"."))),(0,n.kt)("h2",r({},{id:"supported-properties"}),"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesAction#draggable-and-droppable"}),"Draggable")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesAction#draggable-and-droppable"}),"Droppable")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#enterable"}),"Enterable")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#entry-filter"}),"Entry Filter")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color"}),"Fill Color")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#focusable"}),"Focusable")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font"}),"Font")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesAppearance#hide-focus-rectangle"}),"Hide focus rectangle")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesAppearance#horizontal-scroll-bar"}),"Horizontal Scroll Bar")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesAction#multi-selectable"}),"Multi-selectable")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesAppearance#vertical-scroll-bar"}),"Vertical Scroll Bar")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}h.isMDXComponent=!0},90131:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);