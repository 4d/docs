---
id: macros
title: Form Editor Macros
---

## Overview

The 4D Form editor supports dedicated macros. A macro is a set of instructions to perform an action or a sequence of actions. When called upon, the macro will execute its instructions and automatically perform the action(s). 

For example if you have a recurring report with specific formatting (e.g., certain text must appear in red and certain text must appear in green), you can create a macro to automatically set the color. You can create macros for the 4D Form editor that can:  

*	Create and execute 4D code
*	Display dialogs
*	Select form objects
*	Add / delete / modify forms, form objects as well as their properties
*	Modify project files (update, delete)

Macros can been defined for the host project or for components within your project.


nt to be aware that any previously specified behaviors are overridden by macros (e.g., entry order, etc.)



## Creating macros 

You can create 4D Form editor macros using JSON code:

Example:

```code4d
{
    "macros": {
            "macroName": {
                "class": "className" 
        }
    }
}
```

The syntax for 4D Form Editor macros uses a combination  of a dedicated `macros` tag, followed by macro-specific attributes:
 
|Attribute|Description|
|---|---|
|name|macro name|
|class|macro class|
|param|optional custom attributes|

>Parameters are available in the order they are defined in the macro.



All 4D Form Editor macros  are defined within a single JSON file per database or project component: "FormMacros". This file must be located in the in the host or component's **Project** > **Sources** folder:

![](assets/en/FormEditor/marcroStructure.png)



 

## Using a macro

4D Form Editor macros are instantiated in a class constructor.

```code4d
Class constructor
    This.myParameter:=$1.param
```


## Macro Functions

**MAKE INDIVIDUAL PAGES FOR FUNCTIONS ?**

Every 4D Form Editor macro has two built-in functions, `OnInvoke` and `OnError`.

##### onInvoke( )

IMPORTANT : Tous les objets json passés à la macro sont des copies, vous pouvez les modifier, mais cela n'aura aucun impact sur le formulaire en cours d'edition.¶

***Syntax***

```code4d
onInvoke($editor.<macroTarget> : <target type>) -> Function result
```


|Parameter|	 Type	|Description|
|---|---|---|
|editor			|Object	|Macro keyword|
|macroTarget	|Mixed	|Target of the macro|
|Function result| Object|Modifications|


***Description***

The `onInvoke` function executes the macro on the designated *macroTarget*.

*macroTarget* properties:


|Name|Type|Description|
|---|---|---|
|$editor.form|	Object	|Entire form - All modifications in this object are ignored.
|$editor.file|	File object|	File object of the form file|
|$editor.name|	Form name|	The name of the form|
|$editor.table|	Name table|	Table number of the form, 0 for project form|
|$editor.currentPageNumber|	Number|	The number of the current page|
|$editor.currentPage|	Object|	The current page - All modifications in this object are applied on the form|
|$editor.currentSelection|	Collection	|Collection of the selected object name - If the list is modified, the selection in the form are changed according the list.|
|$editor.formProperties|	Object|	The property of the current form. All modifications in this object are applied on the form.|
|$editor.target|	Object|the object name under the mouse when clicked on a macro|

***Returned Object***

|Name|Type|Description|
|---|---|---|
|currentPage | Object |(optional) pass the currentPage is changed by macro|
|currentSelection | Collection | (optional) pass the currentSelection is changed by macro|
|formProperties | Object |(optional) pass the formProperties is changed by macro|
|editor.groups | Object | (optional) pass the group info, if groups are changed by macro|

|editor.views | Object | (optional) pass the view info, if views are changed by macro|
|editor.activeLayer | String | (optional) Active view name|

>All objects passed to macros are copies. Any modifications made by macros are saved in memory only. 


***Example***

```code4d
Function onInvoke 
    C_OBJECT($editor)
    $editor:=$1
    // ...
```











## Practical Examples

### For a Form Object

A macro shall be able to add a form object in the current form.
A macro shall be able to delete a form object in the current form.
A macro shall be able to select a form object in the current form.

### For a Property of a Form Object

A macro shall be able to add a property of a form object in the current form.
A macro shall be able to modify a property of a form object in the current form.
A macro shall be able to delete a property of a form object in the current form.

### For Method of Form or Form Object

A macro shall be able to add the form method or a form object method in the current form.
A macro shall be able to delete the form method or a form object method in the current form.
A macro shall be able to open the form method or a form object method in the current form.


### For any files

A macro shall be able to delete a file from the current form folder (such as unused methods or images).