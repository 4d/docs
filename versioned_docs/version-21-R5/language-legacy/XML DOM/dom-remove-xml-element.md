---
id: dom-remove-xml-element
title: DOM REMOVE XML ELEMENT
slug: /commands/dom-remove-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM REMOVE XML ELEMENT.Syntax-->**DOM REMOVE XML ELEMENT** ( *elementRef* : Text )<!-- END REF-->
<!--REF #_command_.DOM REMOVE XML ELEMENT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.DOM REMOVE XML ELEMENT.Summary-->The DOM REMOVE XML ELEMENT command removes the element designated by *elementRef*.<!-- END REF-->

## System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated.   
An error is generated when the element reference is invalid.

## See also 

[DOM Create XML element](../commands/dom-create-xml-element)  
[DOM REMOVE XML ATTRIBUTE](../commands/dom-remove-xml-attribute)  

## Properties

|  |  |
| --- | --- |
| Command number | 869 |
| Thread safe | yes |
| Modifies variables | OK, error |


