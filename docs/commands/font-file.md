---
id: font-file
title: Font file
displayed_sidebar: docs
---

<!--REF #_command_.Font file.Syntax-->**Font file** ( *fontFamily* {; *fontStyle*} ) -> Function result<!-- END REF-->
<!--REF #_command_.Font file.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fontFamily | Text | -> | Name of font family |
| fontStyle | Longint | -> | Font style: 0=normal (default), 1=bold, 2=italic |
| Function result | Null, Object | <- | Font file object |

<!-- END REF-->

#### Description 

<!--REF #_command_.Font file.Summary-->The **Font file** command returns an object describing the font file in your OS corresponding to the *fontFamily* and, optionally, *fontStyle* you passed in parameter.<!-- END REF--> 

If the font designated by *fontFamily* is not installed in the OS, the command returns a *Null* object. 

The optional *fontStyle* parameter allows to define a style variation to get. You can pass one or a combination of the following constants from the [Font Styles](/4Dv20R6/4D/20-R6/Font-Styles.302-6958451.en.html) theme (any other value is ignored):

| Constant | Type    | Value |
| -------- | ------- | ----- |
| Bold     | Longint | 1     |
| Italic   | Longint | 2     |
| Plain    | Longint | 0     |

#### Example 

You want to make sure the font used in a text area is available on the user system for a correct display:

```4d
 C_TEXT($fontName)

 C_LONGINT($fontStyle)

 C_OBJECT($fontFile)

 $fontName:=OBJECT Get font(*;"vText")

 $fontStyle:=OBJECT Get font style(*;"vText")

 $fontFile:=Font file($fontName;$fontStyle)

 If($fontFile=Null)

    ALERT("Defined font is not available, please install: "+$fontName)

 End if
```

#### See also 
[OBJECT SET FONT](object-set-font.md)  