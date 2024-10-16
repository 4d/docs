---
id: font-style-list
title: FONT STYLE LIST
slug: /commands/font-style-list
displayed_sidebar: docs
---

<!--REF #_command_.FONT STYLE LIST.Syntax-->**FONT STYLE LIST** ( *fontFamily* ; *fontStyleList* ; *fontNameList* )<!-- END REF-->
<!--REF #_command_.FONT STYLE LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fontFamily | Text | &#8594;  | Name of font family |
| fontStyleList | Text array | &#8592; | List of font styles supported by the font family |
| fontNameList | Text array | &#8592; | List of complete font names supported by the font family |

<!-- END REF-->

#### Description 

<!--REF #_command_.FONT STYLE LIST.Summary-->The **FONT STYLE LIST** command returns the list of font styles and the list of complete font names supported by the font family defined in the *fontFamily* parameter.<!-- END REF--> This command allows you to design interfaces handling fonts and font styles, particularly in the context of 4D Write Pro areas (see *4D Write Pro Reference*).

In *fontFamily*, pass the name of the font family for which you want to know the supported font styles and names.

In *fontStyleList*, you pass a text array to be filled with the list of font styles supported by the *fontFamily*. Styles are returned using their localized names (i.e. an "Italic" element will be returned as "Itálico" on a Spanish system), so that you can build a localized "Style" pop-up menu, for example. 

In *fontNameList*, you pass a text array to be filled with the complete list of font names supported by the *fontFamily*. Unlike the *fontStyleList* array, the *fontNameList* array returns non-localized values, i.e. font names based upon the system identification. Thus, font names will be independent from the system language. Elements of this array are strings intended to be used with the wk font 4D Write Pro attribute of the *WP SET ATTRIBUTES* command. Using this feature, 4D Write Pro documents can store font names and then be opened on machines using any system language without font issues. 

 If the *fontFamily* is not found on the machine, arrays are returned empty. To get the list of font families available on the machine, use the [FONT LIST](font-list.md) command.

#### Example 

You want to select styles of the "Verdana" font family (if available):

```4d
 ARRAY TEXT($aTfonts;0)
 ARRAY TEXT($aTStyles;0)
 ARRAY TEXT($aTnames;0)
 var $numStyle : Integer
 
 FONT LIST($aTfonts)
 $numStyle:=Find in array($aTfonts;"Verdana")
 If($numStyle#0)
    FONT STYLE LIST($aTfonts{$numStyle};$aTStyles;$aTnames)
 End if
 
  //For example, resulting arrays are:
  //$aTStyles{1}="Normal"
  //$aTStyles{1}="Italic"
  //$aTStyles{1}="Bold"
  //$aTStyles{1}="Bold Italic"
 
  // $aTnames{1}="Verdana"
  // $aTnames{1}="Verdana Italic"
  // $aTnames{1}="Verdana Bold"
  // $aTnames{1}="Verdana Bold Italic"
```

#### See also 

[FONT LIST](font-list.md)  