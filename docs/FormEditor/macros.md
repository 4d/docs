---
id: macros
title: Form Editor Macros
---

## Overview

The 4D Form editor supports macros. A macro is a set of instructions to perform an action or a sequence of actions. When called upon, the macro will execute its instructions and automatically perform the action(s). 

For example if you have a recurring report with specific formatting (e.g., certain text must appear in red and certain text must appear in green), you can create a macro to automatically set the color. You can create macros for the 4D Form editor that can:  

*	Create and execute 4D code
*	Display dialogs
*	Select form objects
*	Add / delete / modify forms, form objects as well as their properties
*	Modify project files (update, delete)

Macros can been defined for the host project or for components within the project.

Macros code supports [class functions](Concepts/classes.md) and [form object properties in JSON](FormObjects/properties_Reference.md) to let you define any custom feature in the Form editor. 

When called, a macro overrides any previously specified behaviors, including when the form is executed (e.g. entry order).

## Hands-on example

In this very short example, you'll see how to create and call a macro that adds a button in the top left corner of your form, which will display "Hello World!" when clicked. 

1. In the `FormMacros.json` file within the `Project/Sources` folder, you write:

```
{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
```

2. Create a 4D class named `AddButton`.

3. Within the `AddButton` class, write the following function:

```code4d
Function onInvoke($editor : Object)->$result : Object
	
	var $btnHello : Object
	
	// Create a "Hello" button
	$btnHello:=New object("type"; "button"; \
	"text"; "Hello World!"; \
	"method"; New object("source"; "ALERT(\"Hello World!\")"); \
	"events"; New collection("onClick"); \
	"width"; 120; \
	"height"; 20; \
	"top"; 0; \
	"left"; 0)	
	
	// Add button in the current page
	$editor.editor.currentPage.objects.btnHello:=$btnHello	
	
	// Select the new button in the form editor
	$editor.editor.currentSelection.clear() //unselect elements
	$editor.editor.currentSelection.push("btnHello")	
	
	// Notify the modification to the 4D Form editor
	$result:=New object("currentSelection"; $editor.editor.currentSelection; "currentPage"; $editor.editor.currentPage)
```

You can then call the macro:
![](assets/en/FormEditor/macroex1.png)
![](assets/en/FormEditor/macroex2.png)
 

## Calling macros in the Form editor

When macros are defined in your 4D project, you can call a macro using the contextual menu of the Form editor:

![](assets/en/FormEditor/macroSelect.png)

This menu is built upon the `FormMacros.json` [macro definition file(s)](#location-of-macros), in the order they are defined in the file. It contains:

1. host application macros
2. component macros

This menu can be called in an empty area or a selection in the form. Selected object are passed to `$editor.currentSelection` or `$editor.target` in the [`onInvoke`](#oninvoke) function of the macro. 

Several macros can be sequentially called. The standard **Undo** feature of the Form editor can be used to reverse macro operations. 

## Location of macro file

All 4D Form Editor macros are defined within a single JSON file per project or component: `FormMacros.json`. 

This file must be located in the host or component's **Project** > **Sources** folder:

![](assets/en/FormEditor/macroStructure.png)



## Declaring macros

The structure of the `FormMacros.json` file is the following:

```
{
    "macros": {
            "macroName": {
                "class": "className" 
                "myParam": "Hello"
        }
    }
}
```

Here is the description of the JSON file contents:
 
|Attribute|||Type|Description|
|---|---|---|---|---|
|macros|||object|list of defined macros|
||\<macroName>||object|macro definition|
|||class|string|macro class name|
|||\<customProperty>|any|custom value to retrieve in the constructor

Custom attributes can be added (named `myParam` in the above example). They will be passed to the [constructor](#class-constructor) function of the macro.

### Example of FormMacros.json file 

> The order of macros objects in the file defines the [**Macros** menu](#calling-macros-in-the-form-editor) organization in the Form editor.  

```
{
   "macros": {
     "0- Open Macros file": {
       "class": "OpenMacro"
     },
     "1- Align to Right on Target Object": {
       "class": "AlignOnTarget",
       "type": "right"
     },
     "2- Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "type": "left"
     }
   }
}
```


## Instantiating macros in 4D

Each macro you want to instantiate in your project or component must be declared as a [4D class](Concepts/classes.md). 

The class name must match the name defined using the [class](#creating-macros) attribute of the `FormMacros.json` file. 

Macros are instantiated at application startup. Consequently, if you modify the macro class structure (add a function, modify a parameter...) or the [constructor](#class-constructor), you will have to restart the application to apply the changes. 




## Macro Functions

Every macro class can contain a class constructor and two functions: `OnInvoke()` and `OnError()`.


### Class constructor

#### Class constructor($macro : object)

|Parameter|Type|Description|
|---|---|---|
|$macro|Object|Macro declaration object (in the `FormMacros.json` file)|

Macros are instantiated using a [class constructor](Concepts/classes.md#class-constructor) function, if it exists. 

The class constructor is called once during class instantiation, which occurs at application startup. Consequently, any modification applied to this function would require that you restart the application. 

Custom attributes added to the [macro declaration](#declaring-macros) are returned in the parameter of the class contructor function.


#### Example

In the `FormMacros.json` file:

```
{
    "macros": {
            "My macro": {
                "class": "MyMacroClass" 
                "myParam": "Hello"
        }
    }
}
```

You can write: 

```code4d  
// Class "MyMacroClass"
Class constructor($macro : Object)
    This.myParameter:=$macro.myParam //Hello
    ...
```


### onInvoke()

#### onInvoke($editor : object) -> result : object

|Parameter|Type|Description|
|---|---|---|
|$editor|Object|Form elements to be modified by the macro|
|result|Object|Form elements modified by the macro|

The `onInvoke` function is automatically executed each time the macro is called.

Properties of the `$editor` object:

|Property|Type|Description|
|---|---|---|
|$editor.form|Object|The entire form - All modifications in this object are ignored.
|$editor.file|File|File object of the form file|
|$editor.name|String|Name of the form|
|$editor.table|number|Table number of the form, 0 for project form|
|$editor.currentPageNumber|number|The number of the current page|
|$editor.currentPage|Object|The current page - All modifications in this object are applied to the form|
|$editor.currentSelection|Collection|Collection of names of selected objects - If the list is modified, the selection in the form is changed according the list.|
|$editor.formProperties|Object|Properties of the current form. All modifications in this object are applied to the form.|
|$editor.target|string|Name of the object under the mouse when clicked on a macro|

**Result**

|Property|Type|Description|
|---|---|---|
|currentPage |Object |(optional) pass the currentPage is changed by macro|
|currentSelection |Collection |(optional) pass the currentSelection is changed by macro|
|formProperties |Object |(optional) pass the formProperties is changed by macro|
|editor.groups |Object |(optional) pass the group info, if groups are changed by macro|
|editor.views |Object |(optional) pass the view info, if views are changed by macro|
|editor.activeView |String |(optional) Active view name|


When the function is called, it receives all the properties with their current values in the `$editor` parameter. The function can do any operation on these properties. 

Once operations are done, pass the modified or edited values in `Result`. For optimization, it is recommended to return only edited elements.  

> All objects passed to macros through the `Result` parameter are copies. Any modifications made by macros are saved in memory only. 


#### `method` attribute

When handling the `method` attribute of form objects, you can define the attribute value in two ways in macros:

- Using a [string containing the method file name/path](FormObjects/properties_Action.md#method).

- Using an object with the following structure:

|Property|Type|Description|
|---|---|---|
source|String|method code|

4D will create a file using the object name in the "objectMethods" folder with the content of `source` attribute. This feature is only available for macro code.  


#### Example

You want to define a macro function that will apply the red color and italic font style to any selected object(s).

```code4d
Function onInvoke($editor : Object)->$result : Object
	var $name : Text
	
	If ($editor.editor.currentSelection.length>0)		
		// Set stroke to red and style to italic for each selected object
		For each ($name; $editor.editor.currentSelection)
			$editor.editor.currentPage.objects[$name].stroke:="red"
			$editor.editor.currentPage.objects[$name].fontStyle:="italic"
		End for each 
		
	Else 
		ALERT("Please select a form object.")
	End if 
	
	// Notify to 4D the modification
	$result:=New object("currentPage"; $editor.editor.currentPage)
```


### onError()

#### onError($editor : object; $resultMacro : Object ; $error : Collection)

|Parameter||Type|Description|
|---|---|---|---|
|$editor||Object|Object send to [onInvoke](#oninvoke)|
|$resultMacro||Object|Object returned by [onInvoke](#oninvoke)|
|$error||Collection|Error stack |
||[].errCode|Number|Error code |
||[].message|Text|Description of the error |
||[].componentSignature|Text|Internal component signature |

The `onError` function is executed when the macros processor encounters an error. 

When executing a macro, if 4D encounters an error which prevents the macro from being cancelled, it does not execute the macro. It is the case for example if executing a macro would result in:

- deleting or modifying a script whose file is read-only.
- creating two objects with the same internal ID.

#### Example

In a macro class definition, you can write the following generic error code:

```4d
Function onError($editor : Object; $resultMacro : Object; $error : Collection)
	var $obj : Object
	var $txt : Text
	$txt:=""
	
	For each ($obj; $error)
		$txt:=$txt+$obj.message+" \n"
	End for each 
	
	ALERT($txt)
```
