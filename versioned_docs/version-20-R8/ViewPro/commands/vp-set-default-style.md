---
id: vp-set-default-style
title: VP SET DEFAULT STYLE
---

<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->
**VP SET DEFAULT STYLE** ( *vpAreaName* : Text ; *styleObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET DEFAULT STYLE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|styleObj |Object|->|Style object|
|sheet|Integer|->|Sheet index (default = current sheet)|<!-- END REF -->

#### Description

The `VP SET DEFAULT STYLE` command <!-- REF #_method_.VP SET DEFAULT STYLE.Summary -->defines the style in the *styleObj* as the default style for a *sheet*<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *styleObj* lets you pass an object containing style settings. You can use an existing style sheet or you can create a new style. For more information, see the [Style objects](../configuring.md#style-objects) paragraph.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the style will be defined. If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

* `vk current sheet`

#### Example

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" //light purple color
 
VP SET DEFAULT STYLE("myDoc";$style)
```

![](../../assets/en/ViewPro/cmd_vpSetDefaultStyle.PNG)

#### See also

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP Get default style](vp-get-default-style.md)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET BORDER](vp-set-border.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)