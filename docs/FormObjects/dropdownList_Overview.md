---
id: dropdownListOverview
title: Drop-down List
---

Drop-down lists are objects that allow the user to select from a list. You manage the items displayed in the drop-down list using an object, an array, a choice list, or a standard action. 

On macOS, drop-down lists are also sometimes called "pop-up menu". Both names refer to the same objects. As the following example shows, the appearance of these objects can differ slightly according to the platform: 

![](assets/en/FormObjects/popupDropdown_appearance.png)


## Using an object

An [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection) can be used as the data source of a drop-down list. The object must contain the following properties:

|Property|Type|Description|
|---|---|---|
|`values`|Collection|Mandatory - Collection of scalar values. All values must be of the same type. Supported types:<li>strings</li><li>numbers</li><li>dates</li><li>times</li>If empty or not defined, the drop-down list is empty|
|`index`|number|Index of the currently selected item (value between 0 and `collection.length-1`). If you set -1, `currentValue` is displayed as a placeholder string|
|`currentValue`|same as Collection|Currently selected object|

If the object contains other properties, they are ignored. 

To initialize the object associated to the drop-down list, you can:

* Enter a list of default values in the object properties by selecting "\<Static List>" in the [Data Source](properties_DataSource.md) theme of the Property List. The default values are loaded into an object automatically. You can refer to the object using the name of the variable associated with the drop-down list.

* Execute code that creates the object and its properties. For example, if "myList" is the [variable](properties_Object.md#variable-or-expression) associated to the drop-down list, you can write in the [On Load](Events/onLoad.md) form event:

```4d
var myList : Object
// myList is the dataSource of the object
 
myList:=New object
myList.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")
myList.index:=-1  //currentValue is a placeholder
myList.currentValue:="Select a fruit" 
```

The drop-down list is displayed with the placeholder string:

![](assets/en/FormObjects/fruits2.png)

After the user selects a value:

![](assets/en/FormObjects/fruits3.png)

```4d
myList.values // ["apples","nuts","pears","oranges","carrots"]
myList.currentValue //"oranges"
myList.index //3
```



## Using an array

An [array](Concepts/arrays.md) is a list of values in memory that is referenced by the name of the array. A drop-down list can display an array as a list of values when you click on it.

To initialize the array associated to the drop-down list, you can:

* Enter a list of default values in the object properties by selecting "\<Static List>" in the [Data Source](properties_DataSource.md) theme of the Property List. The default values are loaded into an array automatically. You can refer to the array using the name of the variable associated with the object.

* Before the object is displayed, execute code that assigns values to the array elements. For example:

```4d
  ARRAY TEXT(aCities;6) 
  aCities{1}:="Philadelphia" 
  aCities{2}:="Pittsburg" 
  aCities{3}:="Grand Blanc" 
  aCities{4}:="Bad Axe" 
  aCities{5}:="Frostbite Falls" 
  aCities{6}:="Green Bay" 
```

In this case, the name of the [variable](properties_Object.md#variable-or-expression) associated with the object in the form must be `aCities`. This code could be placed in the form method and be executed when the `On Load` form event runs.
  
*  Before the object is displayed, load the values of a list into the array using the [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html) command. For example:

```4d
   LIST TO ARRAY("Cities";aCities)
```
     
In this case also, the name of the [variable](properties_Object.md#variable-or-expression) associated with the object in the form must be `aCities`. This code would be run in place of the assignment statements shown above.
 
If you need to save the user’s choice into a field, you would use an assignment statement that runs after the record is accepted. The code might look like this:

```4d
  Case of
    :(Form event=On Load)
       LIST TO ARRAY("Cities";aCities)
       If(Record number([People])<0) `new record
          aCities:=3 `display a default value
       Else `existing record, display stored value
          aCities:=Find in array(aCities;City)
       End if
    :(Form event=On Clicked) `user modified selection
       City:=aCities{aCities} `field gets new value
    :(Form event=On Validate)
       City:=aCities{aCities}
    :(Form event=On Unload)
       CLEAR VARIABLE(aCities)
 End case
```
  
You must select each event that you test for in your Case statement. Arrays always contain a finite number of items. The list of items is dynamic and can be changed by a method. Items in an array can be modified, sorted, and added to.


## Using a choice list  

If you want to use a drop-down list to manage the values of a listed field or variable, 4D lets you reference the field or variable directly as the object's data source. This makes it easier to manage listed fields/variables.

>If you use a hierarchical list, only the first level is displayed and can be selected.

For example, in the case of a "Color" field that can only contain the values "White", "Blue", "Green" or "Red", it is now possible to create a list containing these values and associate it with a pop-up menu object that references the 4D "Color" field. 4D then automatically takes care of managing the input and display of the current value in the form.

To associate a drop-down list with a field or variable, you can just enter the name of the field or variable directly in the [Variable or Expression](properties_Object.md#variable-or-expression) of the object in the Property List.

When the form is executed, 4D automatically manages the pop-up menu or combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the pop-up menu when the form is displayed:

![](assets/en/FormObjects/popupDropdown_choiceList.png)

>It is not possible to combine this principle with using an object or an array to initialize the object. If you enter a field name in the Variable Name area, then you must use a choice list.

### Selected item value or reference

When you have associated a drop-down list with a choice list and with a field or a variable, you can set the **Data Type** property to [Selected item value or Selected item reference](properties_DataSource.md#save-as). This option lets you optimize the size of the data saved. 

## Using a standard action 
 
You can assign a [standard action](properties_Action.md#standard-action) to a drop-down list. This feature is supported in two contexts:

- Use of the `gotoPage` standard action. In this case, 4D will automatically display the [page of the form](FormEditor/forms.md#form-pages) that corresponds to the number of the item that is selected. For example, if the user selects the 3rd item, 4D will display the third page of the current form (if it exists). 

- Use of a standard action that displays a sublist of items, for example `backgroundColor`. At runtime the object will display an automatic list of background colors. You can override this automatic list by assigning in addition a choice list in which each item has been assigned a custom standard action. 
This feature requires that:
	- a target styled text area ([4D Write Pro area](writeProArea_overview.md) or [input](input_overview.md) with [multistyle](properties_Text.md#multi-style) property) is present in the form to execute the standard action. 
	+ the [focusable](properties_Entry.md#focusable) property is not set to the drop-down list. 

## Supported Properties

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Save as](properties_DataSource.md#save-as) - [Save value](properties_Object.md#save-value) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  