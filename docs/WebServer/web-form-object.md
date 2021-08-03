---
id: web-form-object
title: WEB Form Object
---

The object returned by the [WEB Form](https://doc.4d.com/4dv19/help/command/en/page1735.html) command lets you handle, on the server side, the behavior of your WebForm and its components.

## Accessing a web form's components

Each property of the object returned by the [WEB Form command](https://doc.4d.com/4dv19R/help/command/en/page1735.html) is a [web form component](web-studio.md#components). The property name is the server reference of the component.

For example, the following code hides the component that has `firstName` as server reference.

```4d
$input:=WebForm.firstName 
$input.hide()
```

## Setting the behavior of web form components using functions

Each web form component object contains the following functions:

| Function | Description |
|----|----|
| show() | displays the component |
| hide() | hides the component |
| addCSSClass($className) |  adds the specified CSS class to the component
| removeCSSClass($className) | removes the specified CSS class from the component

#### Example

```4d 
WebForm.firstName.hide() // hides the component that has "firstName" as server reference

WebForm.firstName.show() //displays the component that has "firstName" as server reference

WebForm.firstName.addCSSClass("red") // adds the "red" CSS class to the component

WebForm.firstName.removeCSSClass("red") // The "red" CSS class is removed from the component
```