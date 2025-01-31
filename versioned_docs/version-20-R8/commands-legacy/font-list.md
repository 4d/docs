---
id: font-list
title: FONT LIST
slug: /commands/font-list
displayed_sidebar: docs
---

<!--REF #_command_.FONT LIST.Syntax-->**FONT LIST** ( *fonts* {; listType | *} )<!-- END REF-->
<!--REF #_command_.FONT LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fonts | Text array | &#8592; | Array of font names |
| listType &#124; * | Integer, Operator | &#8594;  | Font type list to return or * to return font names under OS X |

<!-- END REF-->

#### Description 

<!--REF #_command_.FONT LIST.Summary-->The **FONT LIST** command populates the *fonts* text array with the names of scalable fonts available on your system.<!-- END REF-->

The *listType* parameter lets you designate the type of font list you want to get. To do so, you can pass one of the following constants in the *listType* parameter, available in the "*Font Type List*" theme:

| Constant       | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                      |
| -------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Favorite fonts | Integer | 1     | *fonts* contains the list of favorite fonts.<br/>- Under Windows: list of active font family names.<br/>- Under OS X: list of font family names found in the control panel, entitled "Favorites" in English, "Favoris" in French, "Favoriten" in German, and so on . This collection may be blank if the user has not added any favorite fonts.<br/> |
| Recent fonts   | Integer | 2     | *fonts* contains the list of recent fonts (the ones used during the 4D session). This list is used in particular by multi-style text areas.                                                                                                                                                                                                                                  |
| System fonts   | Integer | 0     | *fonts* contains the list of all the system fonts. Default option when *listType* is omitted.                                                                                                                                                                                                                                                                                |

Under OS X, when you pass the optional *\** parameter, the command populates the *fonts* array with the names of the fonts themselves, and not with the names of the font families. The default operation simplifies programmed management of rich text areas, which use font families. If you pass the *\** parameter, font names, for example, "Arial bold", "Arial italic", "Arial narrow italic," are returned instead of families, such as "Arial", "Arial black" or "Arial narrow".  
Under Windows, the *\** parameter has no effect. The command still returns the font families.

**Note:** Under OS X, if you use the result of this command with [ST SET ATTRIBUTES](st-set-attributes.md) in a multi-style text area, you must not pass the *\** parameter (only font families are supported as Attribute font name). This limitation does not apply to 4D Write Pro areas, which accept either font or font family names. 

##### About scalable fonts 

This command returns only scalable fonts. Using non-scalable fonts (i.e. bitmap fonts) to design interfaces is not recommended since they are based on an outdated technology and suffer from limitations regarding size variations. They are not supported in cutting-edge features of 4D such as 4D Write Pro areas .

Under OS X, this principle has been in effect since OS X 10.4 (*QuickDraw* bitmap fonts are obsolete beginning with this version).

Under Windows, this principle is applied beginning with 4D v15 R4\. In order to help developers select only modern fonts for their interfaces, only "trueType" or "openType" scalable fonts are listed. For example, "ASI\_Mono", "MS Sans Serif" and "System" fonts are no longer available. In addition, GDI names are also ignored; only DirectWrite font family names are supported. For example, "Arial Black" or "Segoe UI Black" font families are not in the list; only "Arial" and "Segoe" are returned. 

**Compatibility notes for Windows:**

* Bitmap fonts can still be used in your 4D forms (except in 4D Write Pro areas). They are just removed from the list returned by this command. However, to ensure compatibility with future versions of 4D and Windows, we recommend using only DirectWrite font families.
* Since bitmap fonts are filtered from the *fonts* parameter on Windows, the resulting list is different in 4D v15 R4 applications and higher, compared to previous releases. Please make sure to adapt your code if you were using this command to select a non-scalable font.

#### Example 1 

In a form, you want a drop-down list that displays a list of the fonts available on your system. The method of the drop-down list is as follows:

```4d
 Case of
    :(FORM Event=On Load)
       ARRAY TEXT(asFont;0)
       FONT LIST(asFont)
  // ...
 
 End case
```

#### Example 2 

You want to get a list of recent fonts:

```4d
 FONT LIST($arrFonts;Recent fonts)
```

#### See also 

[FONT STYLE LIST](font-style-list.md)  
*Font Type List*  
[OBJECT SET FONT](object-set-font.md)  
[SET RECENT FONTS](set-recent-fonts.md)  
[ST SET ATTRIBUTES](st-set-attributes.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 460 |
| Thread safe | &check; |


