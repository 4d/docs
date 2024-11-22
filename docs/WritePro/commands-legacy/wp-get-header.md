---
id: wp-get-header
title: WP Get header
slug: /WritePro/commands/wp-get-header
displayed_sidebar: docs
---

<!--REF #_command_.WP Get header.Syntax-->**WP Get header** ( *targetObj* ) | (*wpDoc* ; *sectionIndex* {; *subSectionType*} )  : Object<!-- END REF-->
<!--REF #_command_.WP Get header.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | 4D Write Pro range or section/sub-section element |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| sectionIndex | Integer | &#8594;  | Section index |
| subSectionType | Integer | &#8594;  | Sub-section type (wk first page, wk left page, or wk right page) |
| Function result | Object | &#8592; | 4D Write Pro header |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get header.Summary-->The **WP Get header** command returns the header associated to the *targetObj* or to the specified *sectionIndex* of the *wpDoc* document.<!-- END REF--> If no header is found with regards to the parameter(s), the command returns **Null**.

* With the first syntax (using the *targetObj* parameter), the command returns the header of the first page in the range or section/sub-section passed in parameter. If a sub-section is active on the page, the command returns the header of the active sub-section, so it always returns the visible header.
* With the second syntax (using the *wpDoc* parameter), the command returns the header of the specified *sectionIndex* section (*sectionIndex* value must be >=1).  
If the *subSectionType* parameter is passed, the command returns the header associated to the specified sub-section type. You can pass one of the following constants in the *subSectionType* parameter:
  
| Constant      | Type    | Value |  
| ------------- | ------- | ----- |  
| wk first page | Integer | 1     |  
| wk left page  | Integer | 2     |  
| wk right page | Integer | 3     |  
    
If the *subSectionType* is not specified, the main section header will be returned. In this case, if a sub-section is active, the main section header object is *undefined* (the main section header is available only if there is no active wk first page or wk left page sub-section).

#### Example 

You want to copy the header of the first page of a 4D Write Pro document to the headers of all pages of another 4D Write Pro document:

```4d
 var $headerSource;$rangeSource;$tempoc;$headerTarget;$rangeTarget : Object
 
 $headerSource:=WP Get header([TEMPLATES]WPtemplate;1;wk first page) //get the first page header of section 1
 $rangeSource:=WP Text range($headerSource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $headerTarget:=WP Get header([Docs]MyWPDoc;1) //all pages of section 1
 $rangeTarget:=WP Text range($headerTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### See also 

*Using a 4D Write Pro area*  
[WP DELETE HEADER](wp-delete-header.md)  
[WP Get footer](wp-get-footer.md)  
[WP New header](wp-new-header.md)  
[WP Text range](wp-text-range.md)  