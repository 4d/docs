---
id: vp-object-to-font
title: VP Object to font
---


<!-- REF #_method_.VP Object to font.Syntax -->
**VP Object to font** ( *fontObj* : Object ) : Text <!-- END REF -->

<!-- REF #_method_.VP Object to font.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|fontObj   |Object|->|Font object|
|Result   |Text|<-|Font shorthand|<!-- END REF -->

#### Description

The `VP Object to font` command <!-- REF #_method_.VP Object to font.Summary -->returns a font shorthand string from *fontObj*<!-- END REF -->.

In *fontObj*, pass an object containing the font properties. The following properties are supported:

|Property|Type|Description|Possible values| Mandatory|
|---|---|---|---|---|
|family |text| Specifies the font.| any standard or generic font family. Ex. "Arial", "Helvetica", "serif", "arial,sans-serif" |Yes|
|size |text| Defines the size of the font.The line-height can be added to the font-size: font-size/line-height: Ex: "15pt/20pt" |a number with one of the following units: <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"</li>or one of the following:<li>`vk font size large`</li><li>`vk font size larger`</li><li>`vk font size x large`</li><li>`vk font size xx large`</li><li>`vk font size small`</li><li>`vk font size smaller`</li><li>`vk font size x small`</li><li>`vk font size xx small`</li>| Yes|
|style |text |The style of the font. |<li>`vk font style italic`</li><li>`vk font style oblique`</li>| No|
|variant |text |Specifies font in small capital letters. |<li>`vk font variant small caps`</li>| No|
|weight |text| Defines the thickness of the font.|<li>`vk font weight 100`</li><li>`vk font weight 200`</li><li>`vk font weight 300`</li><li>`vk font weight 400`</li><li>`vk font weight 500`</li><li>`vk font weight 600`</li><li>`vk font weight 700`</li><li>`vk font weight 800`</li><li>`vk font weight 900`</li><li>`vk font weight bold`</li><li>`vk font weight bolder`</li><li>`vk font weight lighter`</li>| No|

This object can be created with the [VP Font to object](vp-font-to-object.md) command.

The returned shorthand string can be assigned to the "font" property of a cell with the [VP SET CELL STYLE](vp-set-cell-style.md), for example.

#### Example

```4d
$cellStyle:=VP Get cell style($range)
 
$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder
 
$cellStyle.font:=VP Object to font($font)
//$cellStyle.font contains "bolder oblique small-caps 16pt arial"
```

#### See also

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/> 
[VP Font to object](vp-font-to-object.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
