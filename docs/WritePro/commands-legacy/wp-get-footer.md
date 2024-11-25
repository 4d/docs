---
id: wp-get-footer
title: WP Get footer
slug: /WritePro/commands/wp-get-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP Get footer.Syntax-->**WP Get footer** ( *targetObj* ) | (*wpDoc* ; *sectionIndex* {; *sectionSubType*} )  : Object<!-- END REF-->
<!--REF #_command_.WP Get footer.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | 4D Write Pro range or section/sub-section element |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| sectionIndex | Integer | &#8594;  | Section index |
| sectionSubType | Integer | &#8594;  | Type of subsection (wk first page, wk left page, or wk right page) |
| Function result | Object | &#8592; | 4D Write Pro footer |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get footer.Summary-->The **WP Get footer** command returns the footer associated to the *targetObj* range or to the specified *sectionIndex* of the *wpDoc* document.<!-- END REF--> If no footer is found with regards to the parameter(s), the command returns **Null**.

* With the first syntax (using the *targetObj* parameter), the command returns the footer of the first page in the range or the section/sub-section passed in parameter. If a sub-section is active on the page, the command returns the footer of the active sub-section, so it always returns the visible footer.
* With the second syntax (using the *wpDoc* parameter), the command returns the footer of the specified *sectionIndex* section (*sectionIndex* value must be >=1).  
If the *subSectionType* parameter is passed, the command returns the footer associated to the specified sub-section type. You can pass one of the following constants in the *subSectionType* parameter:
  
| Constant      | Type    | Value |  
| ------------- | ------- | ----- |  
| wk first page | Integer | 1     |  
| wk left page  | Integer | 2     |  
| wk right page | Integer | 3     |  
    
If the *subSectionType* is not specified, the main section footer will be returned. In this case, if a sub-section is active, the main section footer object is *undefined* (the main section footer is available only if there is no active wk first page or wk left page sub-section).

#### Example 

You want to copy the footer of the first page of a 4D Write Pro document to the footer of all pages of another 4D Write Pro document:

```4d
 var $footerSource;$rangeSource;$tempoc;$footerTarget;$rangeTarget : Object
 
 $footerSource:=WP Get footer([TEMPLATES]WPtemplate;1;wk first page) //get the first page footer of section 1
 $rangeSource:=WP Text range($footerSource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $footerTarget:=WP Get footer([Docs]MyWPDoc;1) //all pages of section 1
 $rangeTarget:=WP Text range($footerTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### See also 

*Using a 4D Write Pro area*  
[WP DELETE FOOTER](wp-delete-footer.md)  
[WP Get frame](wp-get-frame.md)  
[WP Get header](wp-get-header.md)  
[WP New footer](wp-new-footer.md)  