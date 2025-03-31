---
id: wp-find-all
title: WP Find all
slug: /WritePro/commands/wp-find-all
displayed_sidebar: docs
---

<!--REF #_command_.WP Find all.Syntax-->**WP Find all** ( *targetObj* ; *searchValue* ; *searchCondition* {; *replaceValue*} )  : Collection<!-- END REF-->
<!--REF #_command_.WP Find all.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| searchValue | Text | &#8594;  | Search value |
| searchCondition | Integer | &#8594;  | Search rule(s) |
| replaceValue | Text | &#8594;  | Replacement string |
| Function result | Collection | &#8592; | Collection of range objects |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Find all.Summary-->The **WP Find all** command searches the *targetObj* for the *searchValue* based on the *searchCondition*.<!-- END REF--> An optional parameter can be used to replace any results found. 

**Note**: **WP Find all** does not search or replace text in formulas. Use the [WP Get formulas](wp-get-formulas.md) command in this case. 

In the *targetObj* parameter, pass an object containing:

* a range, or
* an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / text box), or
* a 4D Write Pro document.

The *searchValue* parameter lets you pass the text to search for within the *targetObj*. 

You can specify how the search is performed with the *searchCondition* parameter. You can use one (or a combination) of the following constants: 

| Constant                 | Comment                                                                                                                                                                                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk case insensitive      | Strings are compared with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however "a" is not considered the same as "à".                            |
| wk diacritic insensitive | Strings are compared but the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "à".                                                                                                                 |
| wk find reverse          | Search is performed in reverse order.                                                                                                                                                                                                                         |
| wk kana insensitive      | For Japanese language. Strings are compared according to the meaning (not the writing style). For example, "あ" is considered the same as "ア". When this option is set, wk width insensitive  is implicit (considered set), however, the opposite is not true. |
| wk keep character style  | When replacing text, the existing character style is retained (if possible).                                                                                                                                                                                  |
| wk override protected    | Read/write protection is ignored and strings in protected areas can be replaced.                                                                                                                                                                              |
| wk use keyboard language | For string comparison, use the keyboard language property from the form object being edited instead of the current data language (default). **Note**: Ignored if the document is offscreen.                                                                   |
| wk whole word            | Only strings that are complete words are considered. Matching strings within other strings are not considered. For example, "where" is not considered when found within "somewhere".                                                                          |
| wk width insensitive     | For Japanese language. Strings are compared by character width. For example, "ｱ" is considered the same as "ア".                                                                                                                                               |

**Note**: Strings are compared to the current data language unless wk use keyboard language is used.

In the optional *replaceValue* parameter, you can pass text to take the place of any instance of the text in *searchValue* found in the *targetObj*.

**Returned Collection**

The function returns a collection of range objects describing each value that was found or replaced:

* search operations - the ranges match the found strings positions
* replace operations - the ranges match the replaced strings positions

If *targetObj* is a range or element, found values are returned in the order they are found.

If *targetObj* is a 4D Write Pro document, found values are returned in the following order:

1. body
2. first page header for section 1 (if any)
3. first page footer for section 1 (if any)
4. left page header for section 1 (if any)
5. left page footer for section 1 (if any)
6. right page header for section (if any)
7. right page footer for section 1 (if any)
8. main header for section 1 (if any)
9. main footer for section 1 (if any)
10. repeat with section 2, section 3, and so on
11. text boxes.

The order is reversed if wk find reverse is used.

An empty collection is returned if no results are found.

#### Example 

```4d
 var $userSel ;$target ;$alphaRanges : Object
 var $bravoRanges: &NBSP;Collection
 var $options : Integer
 
  // define search options
 $options:=wk case insensitive+wk diacritic insensitive
 
  // get current user position
 $userSel:=WP Selection range(*;"WParea")
 
  // define target
 $target:=WP Get body(WParea) // search only inside the body
 
  // launch REPLACEMENT of ALL occurences of "alpha" by "bravo" in the body
 $bravoRanges:=WP Find all($target;"alpha";$options;"bravo")
```

#### See also 

[WP Find next](wp-find-next.md)  
[WP Find previous](wp-find-previous.md)  