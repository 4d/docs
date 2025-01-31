---
id: wp-is-font-style-supported
title: WP Is font style supported
slug: /WritePro/commands/wp-is-font-style-supported
displayed_sidebar: docs
---

<!--REF #_command_.WP Is font style supported.Syntax-->**WP Is font style supported** ( *targetObj* ; *wpFontStyle* ) : Boolean<!-- END REF-->
<!--REF #_command_.WP Is font style supported.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element |
| wpFontStyle | Integer | &#8594;  | Font style constant |
| Function result | Boolean | &#8592; | True if any part of targetObj supports wpFontStyle; False otherwise |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Is font style supported.Summary-->The **WP Is font style supported** command returns True if the *wpFontStyle* style is supported by any part of the text in *rangeObj*.<!-- END REF--> 

In *targetObj*, you can pass:

* a range, or
* an element (table / row / paragraph / inline picture / body / header / footer)

In *wpFontStyle*, pass one of the following style constants from the "4D Write Pro" constant theme:

| Constant                  | Type   | Value                | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | ------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk font bold              | Text | fontBold             | Specifies thickness of text (depends on available font styles). Possible values:<br/>wk true to set selected characters to bold font style; with the [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) command, wk true is returned if at least one selected character supports a bold font style.wk false (default) to remove the bold font style from selected characters if any; with the [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) command, wk false is returned if none of the selected characters supports a bold font style.                                                          |
| wk font italic            | Text | fontItalic           | Specifies italic style of text (depends on available font styles). Possible values:<br/>wk true to set selected characters to italic or oblique font style; with the [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) command, wk true is returned if at least one selected character supports an italic or oblique font style.wk false (default) to remove the italic or oblique font style from selected characters if any; with the [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) command, wk false is returned if none of the selected characters supports an italic or oblique font style. |
| wk text linethrough style | Text | textLinethroughStyle | Specifies style of text linethrough (if any). Possible values:<br/>wk none (default): no linethrough effectwk solid: draw a solid line on the selected textwk dotted: draw a dotted line on the selected textwk dashed: draw a dashed line on the selected textwk double: draw a double line on the selected textwk semi transparent: dimmed line on the selected text. Can be combined with another line style.wk word: draw a line on words only (exclude blank spaces). Can be combined with another line style.                                                                  |
| wk text underline style   | Text | textUnderlineStyle   | Specifies style of text underline (if any). Possible values:<br/>wk none (default): no underlinewk solid: draw a solid underlinewk dotted: draw a dotted underlinewk dashed: draw a dashed underlinewk double: draw a double underlinewk semi transparent: dimmed underline. Can be combined with another line style.wk word: draw an underline for words only (exclude blank spaces). Can be combined with another line style.                                                                                                                                                      |

Typically, this command is provided to allow developers to implement custom interface objects, such as a pop-up menu offering style options based on the selected text. 
