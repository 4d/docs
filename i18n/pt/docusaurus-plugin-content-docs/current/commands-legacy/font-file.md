---
id: font-file
title: Font file
slug: /commands/font-file
displayed_sidebar: docs
---

<!--REF #_command_.Font file.Syntax-->**Font file** ( *fontFamily* {; *fontStyle*} ) : any<!-- END REF-->
<!--REF #_command_.Font file.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| fontFamily | Text | &#8594;  | Name of font family |
| fontStyle | Integer | &#8594;  | Font style: 0=normal (default), 1=bold, 2=italic |
| Resultado | Null, Object | &#8592; | Font file object |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Font file.Summary-->The **Font file** command returns an object describing the font file in your OS corresponding to the *fontFamily* and, optionally, *fontStyle* you passed in parameter.<!-- END REF--> 

If the font designated by *fontFamily* is not installed in the OS, the command returns a *Null* object. 

The optional *fontStyle* parameter allows to define a style variation to get. You can pass one or a combination of the following constants from the *Font Styles* theme (any other value is ignored):

| Constant | Type    | Value |
| -------- | ------- | ----- |
| Bold     | Integer | 1     |
| Italic   | Integer | 2     |
| Plain    | Integer | 0     |

#### Exemplo 

You want to make sure the font used in a text area is available on the user system for a correct display:

```4d
 var $fontName : Text
 var $fontStyle : Integer
 var $fontFile : Object
 $fontName:=OBJECT Get font(*;"vText")
 $fontStyle:=OBJECT Get font style(*;"vText")
 $fontFile:=Font file($fontName;$fontStyle)
 If($fontFile=Null)
    ALERT("Defined font is not available, please install: "+$fontName)
 End if
```

#### Ver também 

[OBJECT SET FONT](object-set-font.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1700 |
| Thread-seguro | &check; |
| Proibido no servidor ||


