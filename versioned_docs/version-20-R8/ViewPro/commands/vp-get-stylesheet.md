---
id: vp-get-stylesheets
title: VP Get stylesheet
---

<!-- REF #_method_.VP Get stylesheet.Syntax -->
**VP Get stylesheet** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get stylesheet.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName|Text|->|4D View Pro area form object name|
|styleName|Text|->|Name of style|
|sheet|Integer|->|Sheet index (current sheet if omitted)|
|Result|Object|<-|Style sheet object|<!-- END REF -->

#### Description

The `VP Get stylesheet` command <!-- REF #_method_.VP Get stylesheet.Summary -->returns the *styleName* style sheet object containing the property values which have been defined<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In *styleName*, pass the name of the style sheet to get.


You can define where to get the style sheet in the optional *sheet* parameter using the sheet index (counting begins at 0) or with the following constants:

* `vk current sheet`
* `vk workbook`  

#### Example

The following code:

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

... will return the *GreenDashDotStyle* style object from the current sheet:

```4d
{
backColor:green,
borderBottom:{color:green,style:10},
borderLeft:{color:green,style:10},
borderRight:{color:green,style:10},
borderTop:{color:green,style:10}
}
```

#### See also

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)