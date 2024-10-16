---
id: wp-set-text
title: WP SET TEXT
slug: /WritePro/commands/wp-set-text
displayed_sidebar: docs
---

<!--REF #_command_.WP SET TEXT.Syntax-->**WP SET TEXT** ( *targetObj* ; *newText* ; *textPosition* {; *rangeUpdate*} )<!-- END REF-->
<!--REF #_command_.WP SET TEXT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| newText | Text | &#8594;  | Text to insert |
| textPosition | Number | &#8594;  | Insertion position (replace, before, after) |
| rangeUpdate | Number | &#8594;  | Includes or excludes the inserted content within the range |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP SET TEXT.Summary-->The **WP SET TEXT** command inserts the text passed in the *newText* parameter as plain text in the *targetObj* at the position designated by the *textPosition* parameter.<!-- END REF--> 

In the *targetObj* parameter, pass an object to designate the position where text will be inserted. It can be an explicit location in the 4D Write Pro document or it can be based on a user's selection. You can pass:

* a range, or
* an element (table / row / paragraph / body / header / footer / inline picture / section / subsection), or
* a 4D Write Pro document.

The *newText* parameter contains the text to be inserted within *targetObj*. **WP SET TEXT** inserts plain text only, exactly as its written, but without any style tags.

In the *textPosition* parameter, the location of the inserted text can be specified by passing one of the following selectors:

| Constant   | Comment                                |
| ---------- | -------------------------------------- |
| wk append  | Insert contents at end of target       |
| wk prepend | Insert contents at beginning of target |
| wk replace | Replace target contents                |

* If *targetObj* is a range, you can use the optional *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted contents are included in the resulting range:  
    
| Constant              | Comment                                               |  
| --------------------- | ----------------------------------------------------- |  
| wk exclude from range | Inserted contents not included in updated range       |  
| wk include in range   | Inserted contents included in updated range (default) |  
    
If you do not pass a *rangeUpdate* parameter, by default the inserted contents are included in the resulting range.
* If *targetObj* is not a range, *rangeUpdate* is ignored.

#### Example 

You want to to add text to this document:

![](../../assets/en/WritePro/commands/pict3772543.en.png)

*targetObj* is a 4D Write Pro document:

```4d
 WP SET TEXT(myDoc;"Hello world";wk append)
  //writes "The quick brown fox jumps over the lazy dog. Hello world!"
```

*targetObj* is a range:

Before the existing text:  

```4d
 $range:=WP Text range(myDoc;wk start text;wk end text)
 WP SET TEXT($range;" Hello world!";wk prepend)
  //writes " Hello world! The quick brown fox jumps over the lazy dog."
```

After the existing text:  

```4d
 $range:=WP Text range(myDoc;wk start text;wk end text)
 WP SET TEXT($range;" Hello world!";wk append)
  //writes "The quick brown fox jumps over the lazy dog. Hello world!"
```

Replace the existing text:  

```4d
 $range:=WP Text range(myDoc;wk start text;wk end text)
 WP SET TEXT($range;" Hello world!";wk replace)
  //writes " Hello world!"
```

#### See also 

[WP Get text](wp-get-text.md)  