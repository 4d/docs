---
id: listOverview
title: Hierarchical List
---


Hierarchical lists are form objects that can be used to display data as lists with one or more levels that can be expanded or collapsed.

![](../assets/en/FormObjects/Hlist1.png)

Where appropriate, the expand/collapse icon is automatically displayed to the left of the item. Hierarchical lists support an unlimited number of sublevels.


## Hierarchical list data source

The contents of a hierarchical list form object can be initialized in one of the following ways:

- Associate an existing [choice list](properties_DataSource.md#choice-list) to the object. The choice list must have been defined in the List editor in Design mode. 
- Directly assign a hierarchical list  reference to the [variable or expression](properties_Object.md#variable-or-expression) associated with the form object. 

In both cases, you manage a hierarchical list at runtime through its *ListRef* reference, using the [Hierarchical list](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html) commands in the 4D language. 


## ListRef and object name

A hierarchical list is both a **language object** existing in memory and a **form object**.

The **language object** is referenced by an unique internal ID of the Longint type, designated by *ListRef* in the 4D Language Reference. This ID is returned by the commands that can be used to create lists: `New list`, `Copy list`, `Load list`, `BLOB to list`. There is only one instance of the language object in memory and any modification carried out on this object is immediately carried over to all the places where it is used.

The **form object** is not necessarily unique: there may be several representations of the same hierarchical list in the same form or in different ones. As with other form objects, you specify the object in the language using the syntax (*;"ListName", etc.).

You connect the hierarchical list "language object" with the hierarchical list "form object" by the intermediary of the variable containing the ListRef value. For example, if you have associated the mylist [variable](properties_Object.md#variable-or-expression) to the form object, you can write:

```4d
mylist:=New list
```

Each representation of the list has its own specific characteristics and shares common characteristics with all the other representations. The following characteristics are specific to each representation of the list:

- The selection,
- The expanded/collapsed state of its items,
- The position of the scrolling cursor.

The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately.
Consequently, when you use commands based on the expanded/collapsed configuration or the current item, for example `Count list items` (when the final `*` parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity.

You must use the `ListRef` ID with language commands when you want to specify the hierarchical list found in memory. On the other hand, if you want to specify the representation of a hierarchical list object at the form level, you must use the object name (string type) in the command, via the standard syntax (*;"ListName", etc.).

> In the case of commands that set properties, the syntax based on the object name does not mean that only the form object specified will be modified by the command, but rather that the action of the command will be based on the state of this object. The common characteristics of hierarchical lists are always modified in all of their representations. 
> For example, if you execute:

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```

>... you are indicating that you want to modify the font of the hierarchical list item associated with the *mylist1* form object. The command will take the current item of the *mylist1* object into account to specify the item to modify, but this modification will be carried over to all the representations of the list in all of the processes.

### Support of @

As with other object property management commands, it is possible to use the “@” character in the `ListName` parameter. As a rule, this syntax is used to designate a set of objects in the form. However, in the context of hierarchical list commands, this does not apply in every case. This syntax will have two different effects depending on the type of command:

- For commands that set properties, this syntax designates all the objects whose name corresponds (standard behavior). For example, the parameter "LH@" designates all objects of the hierarchical list type whose name begins with “LH.”
	- `DELETE FROM LIST`
	- `INSERT IN LIST`
	- `SELECT LIST ITEMS BY POSITION`
	- `SET LIST ITEM`
	- `SET LIST ITEM FONT`
	- `SET LIST ITEM ICON`
	- `SET LIST ITEM PARAMETER`
	- `SET LIST ITEM PROPERTIES`

- For commands retrieving properties, this syntax designates the first object whose name corresponds:
	- `Count list items`
	- `Find in list`
	- `GET LIST ITEM`
	- `Get list item font` 
	- `GET LIST ITEM ICON` 
	- `GET LIST ITEM PARAMETER` 
	- `GET LIST ITEM PROPERTIES` 
	- `List item parent`
	- `List item position`
	- `Selected list items`


## Generic commands to use with hierarchical lists

It is possible to modify the appearance of a hierarchical list form objects using several generic 4D commands. You can pass to these commands either the object name of the hierarchical list (using the * parameter), or its variable name (containing the ListRef value):

- `OBJECT SET FONT`
- `OBJECT SET FONT STYLE`
- `OBJECT SET FONT SIZE`
- `OBJECT SET COLOR`
- `OBJECT SET FILTER`
- `OBJECT SET ENTERABLE`
- `OBJECT SET SCROLLBAR`
- `OBJECT SET SCROLL POSITION`
- `OBJECT SET RGB COLORS`

> Reminder: Except `OBJECT SET SCROLL POSITION`, these commands modify all the representations of the same list, even if you only specify a list via its object name. 

## Priority of property commands  

Certain properties of hierarchical lists (for example, the **Enterable** attribute or the color) can be set in different ways: in the form properties, via a command of the “Object Properties” theme or via a command of the “Hierarchical Lists” theme. When all three of these means are used to set list properties, the following order of priority is applied:

1. Commands of the “Hierarchical Lists” theme
2. Generic object property commands
3. Form property

This principle is applied regardless of the order in which the commands are called. If an item property is modified individually via a hierarchical list command, the equivalent object property command will have no effect on this item even if it is called subsequently. For example, if the color of an item is modified via the `SET LIST ITEM PROPERTIES` command, the `OBJECT SET COLOR` command will have no effect on this item.


## Management of items by position or by reference 

You can usually work in two ways with the contents of hierarchical lists: by position or by reference.

- When you work by position, 4D bases itself on the position in relation to the items of the list displayed on screen in order to identify them. The result will differ according to whether or not certain hierarchical items are expanded or collapsed. Note that in the case of multiple representations, each form object has its own configuration of expanded/collapsed items.
- When you work by reference, 4D bases itself on the *itemRef* ID number of the list items. Each item can thus be specified individually, regardless of its position or its display in the hierarchical list.


### Using item reference numbers (itemRef)  

Each item of a hierarchical list has a reference number (*itemRef*) of the Longint type. This value is only intended for your own use: 4D simply maintains it.

> Warning: You can use any type of Longint value as a reference number, except for 0. In fact, for most of the commands in this theme, the value 0 is used to specify the last item added to the list.

Here are a few tips for using reference numbers:

1. You do not need to identify each item with a unique number (beginner level).

	- First example: you build a system of tabs by programming, for example, an address book. Since the system returns the number of the tab selected, you will probably not need more information than this. In this case, do not worry about item reference numbers: pass any value (except 0) in the *itemRef* parameter. Note that for an address book system, you can predefine a list A, B, ..., Z in Design mode. You can also create it by programming in order to eliminate any letters for which there are no records.
	- Second example: while working with a database, you progressively build a list of keywords. You can save this list at the end of each session by using the `SAVE LIST` or `LIST TO BLOB` commands and reload it at the beginning of each new session using the `Load list` or `BLOB to list` commands. You can display this list in a floating palette; when each user clicks on a keyword in the list, the item chosen is inserted into the enterable area that is selected in the foreground process. The important thing is that you only process the item selected, because the `Selected list items` command returns the position of the item that you must process. When using this position value, you obtain the title of the item by means of the `GET LIST ITEM` command. Here again, you do not need to identify each item individually; you can pass any value (except 0) in the *itemRef* parameter.  

2. You need to partially identify the list items (intermediary level).  
You use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the `APPEND TO LIST` command. In this example, we use the item reference numbers to store record numbers. However, we must be able to establish a distinction between items that correspond to the [Department] records and those that correspond to the [Employees] records.

3. You need to identify all the list items individually (advanced level).  
You program an elaborate management of hierarchical lists in which you absolutely must be able to identify each item individually at every level of the list. A simple way of implementing this is to maintain a personal counter. Suppose that you create a *hlList* list using the `APPEND TO LIST` command. At this stage, you initialize a counter *vhlCounter* to 1. Each time you call `APPEND TO LIST` or `INSERT IN LIST`, you increment this counter `(vhlCounter:=vhlCounter+1)`, and you pass the counter number as the item reference number. The trick consists in never decrementing the counter when you delete items — the counter can only increase. In this way, you guarantee the uniqueness of the item reference numbers. Since these numbers are of the Longint type, you can add or insert more than two billion items in a list that has been reinitialized... (however if you are working with such a great number of items, this usually means that you should use a table rather than a list.)

> If you use Bitwise Operators, you can also use item reference numbers for storing information that can be put into a Longint, i.e. 2 Integers, 4-byte values or, yet again, 32 Booleans.

### When do you need unique reference numbers?  

In most cases, when using hierarchical lists for user interface purposes and when only dealing with the selected item (the one that was clicked or dragged), you will not need to use item reference numbers at all. Using `Selected list items` and `GET LIST ITEM` you have all you need to deal with the currently selected item. In addition, commands such as `INSERT IN LIST` and `DELETE FROM LIST` allow you to manipulate the list “relatively” with respect to the selected item.

Basically, you need to deal with item reference numbers when you want direct access to any item of the list programmatically and not necessarily the one currently selected in the list.


## Modifiable element

You can control whether hierarchical list items can be modified by the user by using the **Alt+click**(Windows) / **Option+click** (macOS) shortcut, or by carrying out a long click on the text of the item. 

- Whatever the hierarchical list data source, you can control the whole object with the [Enterable](properties_Entry.md#enterable) property. 

- In addition, if you populate the hierarchical list using a list created in the Lists editor, you control whether an item in a hierarchical list is modifiable using the **Modifiable Element** option in the Lists editor. For more information, see [Setting list properties](https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html).


## Supported Properties

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable) - [Droppable](properties_Action.md#droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Fill Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multi-selectable](properties_Action.md#multi-selectable) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 