---
id: vp-font-to-object
title: VP Font to object
---


<!-- REF #_method_.VP Font to object.Syntax -->
**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->


<!-- REF #_method_.VP Font to object.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|font  |Text|->|Font shorthand string|  
|Result  |Object|<-|Font object|
<!-- END REF -->


#### Description

The `VP Font to object` utility command <!-- REF #_method_.VP Font to object.Summary -->returns an object from a font shorthand string<!-- END REF -->. This object can then be used to set or get font property settings via object notation.

In the *font* parameter, pass a font shorthand string to specify the different properties of a font (e.g., "12 pt Arial"). You can learn more about font shorthand strings [in this page](https://www.w3schools.com/cssref/pr_font_font.asp) for example.

The returned object contains defined font attributes as properties. For more information about the available properties, see the [VP Object to font](vp-object-to-font.md) command.

#### Example 1

This code:

```4d
$font:=VP Font to object("16pt arial")
```

will return the following $font object:

```4d
{

family:arial
size:16pt
}
```

#### Example 2  

See example for [`VP Object to font`](vp-object-to-font.md).

#### See also

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
