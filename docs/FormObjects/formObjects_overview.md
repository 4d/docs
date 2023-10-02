---
id: formObjectsOverview
title: Form Objects
---

You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used. 

## Active and static objects

4D forms support a large number of built-in **active** and **static** objects:

- **active objects** perform a database task or an interface function. Fields are active objects. Other active objects — enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on — store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process. 
- **static objects** are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Static objects do not have associated variables like active objects. However, you can insert dynamic objects into static objects.


## Handling form objects

You can add or modify 4D form objects in the following ways:

*	**[Form Editor](FormEditor/formEditor.md):** Drag an object from the Form Editor toolbar onto the form. Then use the Property List to specify the object's properties.   

* **4D language**: Commands from the `Objects (Forms)` theme such as [`OBJECT DUPLICATE`](https://doc.4d.com/4dv20/help/command/en/page1111.html) or [`OBJECT SET FONT STYLE`](https://doc.4d.com/4dv20/help/command/en/page166.html) allow to create and define form objects. 

*	**JSON code in dynamic forms:** Define the properties using JSON. Use the [type](properties_Object.md#type) property to define the object type, then set its [available properties](properties_Reference.md). 
Example for a button object: 

```json
	{
		"type": "button", 
		"style": "bevel", 
		"text": "OK", 
		"action": "Cancel", 
		"left": 60, 
		"top": 160, 
		"width": 100, 
		"height": 20
	}
```