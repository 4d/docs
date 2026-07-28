---
id: dom-get-root-xml-element
title: DOM Get root XML element
slug: /commands/dom-get-root-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get root XML element.Syntax-->**DOM Get root XML element** ( *elementRef* : Text ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get root XML element.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| Function result | Text | &#8592; | Reference of root element or "" in case of error |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL Release 3|Created|

</details>
</div>

## Description 

<!--REF #_command_.DOM Get root XML element.Summary-->The DOM Get root XML element command returns a reference to the root element of the document to which the XML element that is passed in the *elementRef* parameter belongs.<!-- END REF--> This reference can be used with the other XML parsing commands.

## See also 

[DOM Get parent XML element](../commands/dom-get-parent-xml-element)  

## Properties

|  |  |
| --- | --- |
| Command number | 1053 |
| Thread safe | yes |
| Modifies variables | OK, error |


