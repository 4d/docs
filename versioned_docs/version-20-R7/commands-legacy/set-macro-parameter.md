---
id: set-macro-parameter
title: SET MACRO PARAMETER
slug: /commands/set-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MACRO PARAMETER.Syntax-->**SET MACRO PARAMETER** ( *selector* ; *textParam* )<!-- END REF-->
<!--REF #_command_.SET MACRO PARAMETER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Selection to use |
| textParam | Text | &#8594;  | Text sent |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET MACRO PARAMETER.Summary-->The **SET MACRO PARAMETER** command inserts the *paramText* text into the method from which it has been called.<!-- END REF-->

If text has been selected in the method, the *selector* parameter can be used to set whether the *paramText* text must replace all of the method text or only the selected text. In selector, you can pass one of the following constants, added to the “*4D Environment*” theme:

| Constant                | Type    | Value |
| ----------------------- | ------- | ----- |
| Full method text        | Integer | 1     |
| Highlighted method text | Integer | 2     |

If no text has been selected, *paramText* is inserted into the method.

#### Note 

 In order for the [GET MACRO PARAMETER](get-macro-parameter.md) and **SET MACRO PARAMETER** commands to work correctly, the new “version” attribute must be declared in the macro itself. The “version” attribute must be declared as follows:

```xml
<macro name="MyMacro" version="2">
--- Text of macro ---
</macro>
```

#### Example 

This macro builds a new text that will be returned to the calling method:

```4d
 var $input_text : Text
 var $output_text : Text
 GET MACRO PARAMETER(Highlighted method text;$input_text)
  //Suppose that the selected text is a table, i.e. “[Customers]”
 $output_text:=""
 $output_text:=$output_text+Command name(47)+"("+$input_text+")" // Select all ([Customers])
 $output_text:=$output_text+"$i:="+Command name(76)+"("+$input_text+")" // $i:=Records in selection([Customers])
 SET MACRO PARAMETER(Highlighted method text;$output_text)
  //Replaces the selected text by the new code
```

#### See also 

[GET MACRO PARAMETER](get-macro-parameter.md)  