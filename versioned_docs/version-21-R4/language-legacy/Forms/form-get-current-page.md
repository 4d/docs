---
id: form-get-current-page
title: FORM Get current page
slug: /commands/form-get-current-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM Get current page.Syntax-->**FORM Get current page** ({ * }) : Integer<!-- END REF-->
<!--REF #_command_.FORM Get current page.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | Returns number of current subform page |
| Function result | Integer | &#8592; | Number of currently displayed form page |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Modified|
|12|Renamed|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.FORM Get current page.Summary-->The **FORM Get current page** command returns the number of the currently displayed form page or of the current form loaded by the [FORM LOAD](../commands/form-load) command.<!-- END REF--> 

The *\** parameter is useful when the command is called in the context of a page type subform containing several pages. In this case, when you pass this parameter, the command changes the page of the current subform (the one that called the command). By default, when the *\** parameter is omitted, the command is always applied to the parent form. 

## Example 

In a form, when you select a menu item from the menu bar or when the form receives a call from another process, you can perform different actions depending on the form page currently displayed. In this example, you write:

```4d
  // [myTable];"myForm" Form Method
 Case of
    :(FORM Event.code=On Load)
  // ...
    :(FORM Event.code=On Unload)
  // ...
    :(FORM Event.code=On Menu Selected)
       $vlMenuNumber:=Menu selected>>16
       $vlItemNumber:=Menu selected & 0xFFFF
       Case of
          :($vlMenuNumber=...)
             Case of
                :($vlItemNumber=...)
                :(FORM Get current page=1)
  // Do appropriate action for page 1
                :(FORM Get current page=2)
  // Do appropriate action for page 2
  // ...
                :($vlItemNumber=...)
  // ...
             End case
          :($vlMenuNumber=...)
  // ...
       End case
    :(FORM Event.code=On Outside Call)
       Case of
          :(FORM Get current page=1)
  // Do appropriate reply for page 1
          :(FORM Get current page=2)
  // Do appropriate reply for page 2
       End case
  // ...
 End case
```

## See also 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Properties

|  |  |
| --- | --- |
| Command number | 276 |
| Thread safe | no |



