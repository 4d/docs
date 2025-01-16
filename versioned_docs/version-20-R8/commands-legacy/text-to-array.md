---
id: text-to-array
title: TEXT TO ARRAY
slug: /commands/text-to-array
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO ARRAY.Syntax-->**TEXT TO ARRAY** ( *varText* ; *arrText* ; *width* ; *fontName* ; *fontSize* {; *fontStyle* {; *}} )<!-- END REF-->
<!--REF #_command_.TEXT TO ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| varText | Text | &#8594;  | Original text to be divided |
| arrText | Text array | &#8592; | Array containing the text divided into words or lines |
| width | Integer | &#8594;  | Maximum width of string (in pixels) |
| fontName | Text | &#8594;  | Name of font |
| fontSize | Integer | &#8594;  | Size of font |
| fontStyle | Integer | &#8594;  | Style of font |
| * | Operator | &#8594;  | If passed = interpret text as multistyle |

<!-- END REF-->

#### Description 

<!--REF #_command_.TEXT TO ARRAY.Summary-->The **TEXT TO ARRAY** command transforms a text variable into a text array.<!-- END REF--> The original varText text (styled or not) is divided and each part becomes an element of the *arrText* array that is returned by the command. This command can be used for example to fill pages or columns with text of a set size.

The original text is divided into "words" based on a line size defined by the command parameters and which takes any styles used into account. 

In the *varText* parameter, you pass the text to be divided into array elements. This text may or may not be multistyle. Some parameters are ignored when the text is multistyle.

In the *arrText* parameter, you pass the name of the array to be filled by the divided text.

In the *width* parameter, you pass a size in pixels indicating the maximum line length to measure when dividing the text. For the entire text, the command evaluates the maximum number of words that can "fit" into this width based on the graphic attributes of the text (font, style). 

* If it is multistyle text, the styles of the original text are taken into account and the following parameters are ignored if they are passed. In this case, the lines of text in the resulting array keep their original styles (so that they can be printed one by one through a text or string variable for example).
* If it is raw text (no styles), you must pass all the parameters so that the command is able to calculate the length of the lines.

Each array element must contain at least one word. If the *width* passed is too small for the dividing rule to be strictly respected, the array is filled as close as possible according to the parameters and the OK variable is set to 0\. For example, if you pass a width of 3 pixels, it is probable that most of the words will be bigger than this length. In this case, the OK variable is set to 0\.   
This also means that the theoretical maximum size of the array returned is equal to the number of words found in *varText*.

In the *fontName* and *fontSize* parameters, you pass the font name and size with which *varText* must be evaluated by the command in order to divide it. These parameters are mandatory in the case of raw text. 

In the *fontStyle* parameter, you pass one or more constants from the *Font Styles* theme:

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| Bold      | Integer | 1     |
| Italic    | Integer | 2     |
| Plain     | Integer | 0     |
| Underline | Integer | 4     |

This parameter is optional; when it is omitted, the Plain style is used. 

The optional *\** parameter, if passed, forces the *fontName*, *fontSize* and/or *fontStyle* parameters to be taken into account for multistyle text when these parameters are not defined in the original text. However, if these parameters are defined in the original text, then the parameters passed to the command are ignored in all cases.

#### Example 1 

We want to divide a multistyle text into lines with a maximum size of 200 pixels:

```4d
 TEXT TO ARRAY(theText;TextArray;200;"Arial";20;Plain;*)
  // the Arial, 20, and Normal attributes are only taken into account if they are not defined in the text
```

#### Example 2 

We want to divide raw text into lines with a maximum size of 350 pixels in Bodoni Bold font, size 14\. Since the command does not work correctly if the font is not available, it is important to check for its presence:

```4d
 ARRAY TEXT($FontList;0)
 FONT LIST($FontList)
 $Font:="Bodoni"
 $p:=Find in array($FontList;$Font)
 If($p>0)
    TEXT TO ARRAY(theText;TextArray;350;"Bodoni";14;Bold)
 Else
  // use another font
 End if
```

#### Example 3 

Multistyle text must be printed without any styles in Arial Normal font, size 12 with a maximum width of 600 pixels:

```4d
  // we transform the multistyle text into raw text
 $RawText:=OBJECT Get plain text(vText)
  // we fill the array
 TEXT TO ARRAY($RawText;TextArray;600;"Arial";12)
```

#### Example 4 

You need to print in a 400-pixel wide area, a text with a maximum of 80 lines and using the largest font possible (without exceeding 24 points). You can write:

```4d
 ARRAY TEXT(TextArray;0)
 $Size:=24
 Repeat
    TEXT TO ARRAY($RawText;TextArray;400;"Arial";$Size)
    $Size:=$Size-1
    $n:=Size of array(TextArray)
 Until($n<=80)
```

#### See also 

[Split string](split-string.md)  
[ST Get plain text](st-get-plain-text.md)  
[ST Get text](st-get-text.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1149 |
| Thread safe | &cross; |


