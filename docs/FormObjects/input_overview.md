---
id: inputOverview
title: Input Areas
---

In forms, input areas allow you to add fields and variables to your forms. Fields and variables work in much the same way.

*	Fields are used to enter or display the data of a record. When you create a new form using the Form Wizard, you select the fields that you want to include in the form as standard objects. Once the form has been created, you can use the Form editor to specify additional properties such as the display format and data entry controls. These properties only apply to the forms in which they were specified. You can then use the same properties for other forms or specify new ones. You can change the properties of the fields or add/delete them at any time.
*	Variables can be enterable or non-enterable and can receive data of the Alpha, Text, number, Date, Time and/or Picture type. You can create a large number of variables automatically using the [Duplicating on a matrix](https://doc.4d.com/4Dv17R5/4D/17-R5/Duplicating-on-a-matrix.300-4163734.en.html) function.
Like fields, variables let you enter and display data. Variables are used for temporary storage of data. One common use for a variable is to display calculations that are done using a method such as:

	```code4d  
	  vTotal := Quantity * Price  
	```  

	You create a variable that displays the result of the calculation, name this variable vTotal, and use a method to do the calculation.
	You use methods to manage enterable and non-enterable variables. An enterable variable accepts data. You can set data entry controls for the object as you would for a field. The entered data is associated with the object name. You can manage the data with object or form methods using the object’s name as a variable.

You can also represent fields and variables in your forms in alternative forms, more particularly:

*	You can display and enter data from database fields directly in columns of "selection" type List boxes  (see [Display of fields in list boxes](https://doc.4d.com/4Dv17R5/4D/17-R5/Display-of-fields-in-list-boxes.300-4163654.en.html)).
*	You can represent a list field or variable directly in a form using [Pop-up Menus/Drop-down Lists](popupMenuDropdownList_overview) and [Combo Boxes](comboBox_overview.md) objects.
*	You can represent a boolean field or variable as a [check box](checkbox_overview.md) or as a [radio button](radio_overview.md) object.



#### JSON Example:    

```code4d
	"myText": {
                "type": "input",		//define the type of object
                "spellcheck": true,		//enable spelling verification
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			//width of the object
                "height": 20			//height of the object
                }
``` 


#### Supported Properties
[Border Line Style](properties_BackgroundAndBorder.md) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Fill Color](properties_BackgroundAndBorder.md#fill-color) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Orientation](properties_Text.md#orientation) - [Right](properties_CoordinatesAndSizing.md#right) - [Title](properties_Object.md#title) -[Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 

## Adding fields and variables to a form  

You can add or delete fields from a form at any time. For example, you may decide to add fields to a form when the following occurs :

*	You discover you need a field or variable you did not choose in the Form Wizard.
*	You add a field to the database structure and need to add it to a form so that you can use it.

To add a field or variable to a form:

1.	Select the input object, then draw it in the form.
4D automatically displays the available properties in the Property List.
2.	Select the field you want to insert from the table/field list or define the variable.

	>You cannot select a BLOB type field.

3.	If desired, select the specific properties you want to assign to the field/variable.
After creating the field/variable, you generally need to set additional properties. You can set data entry controls, write help text, attach a method, set resizing or repositioning options, set font or appearance options (see the **Properties** chapter).
	>You can also insert a field by dragging and dropping it from the [Tables Page](https://doc.4d.com/4Dv17R5/4D/17-R5/Tables-Page.300-4163690.en.html) of the Explorer.

The new field/variable appears in the form where you placed it. The input area displays the name of the field/variable you selected (preceded by the table name for fields) . By default, 4D does not add a label to designate the field/variable but you can create one using a static text area. Note that the label itself can be defined dynamically (see [Using references in static text](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html)).

After you place a field or variable in a form, you can modify it as you would any other form object. You can resize it, change the font, choose colors for display on a color monitor, and so on.

## Changing a field into a variable and vice-versa  

You can transform every object type (active or not) into another object type. You can also transform a field into a variable and vice-versa. This is useful when, after inserting a field in a form, you want to change that field into a variable because you don’t need to store the value. When 4D changes an object into another object, it keeps the original properties of the object (coordinates, object method, appearance, color and so on. The data type assigned to a field will be kept for the variable: a picture field will be converted to a picture variable, and so on.

To change a variable into a field or a field into a variable, select the object and select Field or Variable from the Type drop-down list in the Property List (“Objects” theme). The Property List is then updated to display the properties for that new object type. The object name, object method, and its properties (size, enterable and so on) remain identical. 

When you change a variable into a field, 4D assigns the first field in the first table to the object by default. You can manually set the table and field in Source table and Source field (“Data Source” theme).