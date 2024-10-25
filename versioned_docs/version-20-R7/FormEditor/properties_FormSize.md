---
id: formSize
title: Form Size
---

 
4D lets you set the size of both the form and the [window](properties_WindowSize.md). These properties are interdependent and your application interface results from their interaction. 

Size options depend on the value of the **Size based on** option.

---
## Size based on 


*	**Automatic Size**: The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the [**Hor Margin**](#hor-margin) and [**Vert Margin**](#vert-margin) fields.

    You can choose this option when you want to use active objects placed in an offscreen area (*i.e.*, outside the bounding rectangle of the window) with an automatic size window. Thanks to this option, the presence of these objects will not modify the size of the window.
	

*	**Set Size**: The size of the form will be based on what you enter (in pixels) in the [**Width**](#width) and [**Height**](#height) fields.

*	`<object name>`: The size of the form will be based on the position of the selected form object. For example, if you choose an object that is placed in the bottom-right part of the area to be displayed, the form size will consist of a rectangle whose upper left corner will be the origin of the form and the lower right corner will correspond to that of the selected object, plus any margin values.
	

> For output forms, only the [**Hor margin**](#hor-margin) or [**Width**](#width) fields are available.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|formSizeAnchor| string|Name of object to use to defined the size of the form |

--- 
## Height

Height of the form (in pixels) when the [form size](#size-based-on) is **Set size**.  


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|height| number|integer value|


--- 
## Hor. Margin

Value to add (in pixels) to the right margin of the form when the [form size](#size-based-on) is **Automatic size** or `\<object name>`


This value also determines the right-hand margins of forms used in the Label editor.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rightMargin| number|integer value|


---

## Vert. Margin

Value to add (in pixels) to the bottom margin of the form when the [form size](#size-based-on) is **Automatic size** or `\<object name>`. 

This value also determines the top margins of forms used in the Label editor.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|bottomMargin| number|integer value|


--- 
## Width

Width of the form (in pixels) when the [form size](#size-based-on) is **Set size**.  


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|width| number|integer value|
