---
id: wp-set-attributes
title: WP SET ATTRIBUTES
slug: /WritePro/commands/wp-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP SET ATTRIBUTES.Syntax-->**WP SET ATTRIBUTES** ( *targetObj* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.WP SET ATTRIBUTES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| attribName | Text | &#8594;  | Name of attribute to set |
| attribValue | Text, Number, Object, Collection, Picture, Date | &#8594;  | New attribute value |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP SET ATTRIBUTES.Summary-->The **WP SET ATTRIBUTES** command allows you to set the value of any attribute in a range, element or document.<!-- END REF--> This command gives you access to any kind of 4D Write Pro internal attribute: character, paragraph, document, table, or image.

In the first parameter, you can pass :

* a range, or
* an element (header / footer / body / table / row / paragraph / anchored or inline picture / section / subsection / style sheet), or
* a 4D Write Pro document

In *attribName*, pass the name of the attribute to set for the target and in *attribValue*, pass the new value to set. For a comprehensive list of attributes to pass in *attribName*, as well as their scope and respective values, please refer to the *4D Write Pro Attributes* section.

You can pass as many *attribName* / *attribValue* pairs as you want.

**Note:** If you need to set multiple attributes for the same target, it is more optimized to use a single call to **WP SET ATTRIBUTES** with all attribute/value pairs, rather than calling **WP SET ATTRIBUTES** several times. 

#### Example 1 

In this 4D Write Pro area, you selected a word:  
  
![](../../assets/en/WritePro/commands/pict2643639.en.png)  

If you execute the following code:  

```4d
 $range:=WP Get selection(*;"WParea") //get the selected range
 
  // set the shadow offset in pt for the selected text
 WP SET ATTRIBUTES($range;wk text shadow offset;1)
  //set the paragraph padding
 WP SET ATTRIBUTES($range;wk padding;1)
  //define a border of 10 pt
 WP SET ATTRIBUTES($range;wk border style;wk solid;wk border width;10)
  //set the border colors
 WP SET ATTRIBUTES($range;wk border color;"blue";wk border color bottom;"#00FA9A";wk border color right;"#00FA9A")
```

  
You get the following result:  
  
![](../../assets/en/WritePro/commands/pict2643642.en.png)

#### Example 2 

This example illustrates the use of wk inside and wk outside constants:  

```4d
 $wpRange:=WP Get selection(writeProdoc)
 WP SET ATTRIBUTES($wpRange;wk border style+wk inside;wk dotted)
 WP SET ATTRIBUTES($wpRange;wk border style+wk outside;wk solid)
 WP SET ATTRIBUTES($wpRange;wk border color+wk outside;"#00FA9A")
```

  
Assuming all of the contents were selected, the result is:  
  
![](../../assets/en/WritePro/commands/pict2821715.en.png)

#### Example 3 

You want to set a background image for the document:

```4d
 var WParea : Object
 WParea:=WP New
 
 READ PICTURE FILE("C:\\Pictures\\boats.jpg";$picture)
 
 WP SET ATTRIBUTES(WParea;wk background image;$picture)
```

The result is:

![](../../assets/en/WritePro/commands/pict3514231.en.png)

You want to set a background image that covers the whole printable area:

```4d
 var WParea : Object
 WParea:=WP New
 
 READ PICTURE FILE("C:\\Pictures\\boats.jpg";$picture)
 
 WP SET ATTRIBUTES(WParea;wk background image;$picture)
 WP SET ATTRIBUTES(WParea;wk background clip;wk paper box)
 WP SET ATTRIBUTES(WParea;wk background origin;wk paper box)
```

The result is:

![](../../assets/en/WritePro/commands/pict3514233.en.png)

**Note**: The paper box value is only applicable to documents and sections.

#### Example 4 

You want to set tabs at varying intervals and designate a character as the leading character for the last tab:

```4d
 $tab1:=New object()
 $tab1[wk type]:=wk left
 $tab1[wk offset]:="3cm"
 $tab1[wk leading]:=""
 
 $tab2:=New object()
 $tab2[wk type]:=wk center
 $tab2[wk offset]:="8cm"
 $tab2[wk leading]:=""
 
 $tab3:=New object()
 $tab3[wk type]:=wk right
 $tab3[wk offset]:="12cm"
 $tab3[wk leading]:="."
 
 $_tabs:=New collection($tab1;$tab2;$tab3)
 WP SET ATTRIBUTES(wpArea;wk tabs;$_tabs)
```

The result is:

![](../../assets/en/WritePro/commands/pict4251559.en.png)

#### See also 

*4D Write Pro Attributes*  
[WP GET ATTRIBUTES](wp-get-attributes.md)  
[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)  