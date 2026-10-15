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

* **4D language**: Commands from the `Objects (Forms)` theme such as [`OBJECT DUPLICATE`](../commands/object-duplicate) or [`OBJECT SET FONT STYLE`](../commands/object-set-font-style) allow to create and define form objects. 

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

### Accessing form objects using their name or their data source in the 4D language 

Many commands handling form objects such as commands from [Objects (Forms)](../commands/theme/Objects_Forms.md), [List Box](../commands/theme/List_Box.md), or [Styled Text](../commands/theme/Styled_Text.md) themes share the same generic syntaxes described here:

```4d
COMMAND NAME( * ; *object* : Text { ; *additional parameters* } )
//or
COMMAND NAME( *object* : Variable, Field { ; *additional parameters* })
```

If you specify the \* parameter, you indicate that *object* is the [name of the object](./properties_Object.md#object-name) (a string). If you don't pass the \*, you indicate that *object* is a field or a variable, i.e. its [data source](./properties_Object.md#variable-or-expression).

When using the [object name](./properties_Object.md#object-name), you can rely on the @ character within that name if you want to address several objects of the form in one call. The following table shows examples of object names you can specify to this command.

|Object Names|Objects affected by the call|
|---|---|
|mainGroupBox|Only the object mainGroupBox.|
|main@|The objects whose name starts with “main”.|
|@GroupBox|The objects whose name ends with “GroupBox”.|
|@Group@|The objects whose name contains “Group”.|
|main@Btn|The objects whose name starts with “main” and ends with “Btn”.|
|@|All the objects present in the form.|

Form object names can contain up 255 bytes, allowing you to define and apply custom naming rules, such as "xxxx_Button" or "xxx_Mac".

:::warning

You can [configure the way the @ character is interpreted](../settings/database.md#text-comparison) when it is included in a character string. This option affects the functioning of the form object commands. 

:::

