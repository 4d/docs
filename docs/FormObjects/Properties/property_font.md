---
id: property_font
title: Property: Font
---


This property specifies the name of font family used in the object. 

There are two types of font family names:

* *family-name:* The name of a font-family, like "times", "courier", "arial", etc.
* *generic-family:* The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".


You can set this property via the Property List or you via the [**OBJECT SET FONT**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT.301-4054834.en.html) command.  



>**Example**<p>
<span style="font-family:Times New Roman; font-size:20pt"> This is Times New Roman font.</span><br>
<span style="font-family:Calibri; font-size:20pt"> This is Calibri font.</span><br>
<span style="font-family:Papyrus; font-size:20pt"> This is Papyrus font.</span>




<hr>

### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|fontFamily|string |CSS font family name  |


>4D recommends using only [web safe](https://www.w3schools.com/cssref/css_websafe_fonts.asp) fonts.

<hr>

### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](../Buttons/button_overview.md#regular)|[Toolbar button](../Buttons/button_overview.md#toolbar)|[Bevel button](../Buttons/button_overview.md#bevel)|[Rounded Bevel button](../Buttons/button_overview.md#Rounded-bevel)|[OS X Gradient button](../Buttons/button_overview.md#os-x-gradient)|
||[OS X Textured button](../Buttons/button_overview.md#os-x-textured)|[Office XP button](../Buttons/button_overview.md#office-XP)|[Help button](../Buttons/button_overview.md#help)|[Circle button](../Buttons/button_overview.md#circle)|[Custom button](../Buttons/button_overview.md#custom)| 


