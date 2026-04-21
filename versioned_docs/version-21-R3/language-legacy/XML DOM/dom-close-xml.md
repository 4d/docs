---
id: dom-close-xml
title: DOM CLOSE XML
slug: /commands/dom-close-xml
displayed_sidebar: docs
---

<!--REF #_command_.DOM CLOSE XML.Syntax-->**DOM CLOSE XML** ( *elementRef* : Text )<!-- END REF-->
<!--REF #_command_.DOM CLOSE XML.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML root element reference |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.DOM CLOSE XML.Summary-->The DOM CLOSE XML command frees up the memory occupied by the XML object designated by *elementRef*.<!-- END REF--> 

If *elementRef* is not an XML root object, an error is generated. 

## System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1\. If an error occurs, it is set to 0.

## See also 

[DOM Parse XML source](../commands/dom-parse-xml-source)  
[DOM Parse XML variable](../commands/dom-parse-xml-variable)  

## Properties

|  |  |
| --- | --- |
| Command number | 722 |
| Thread safe | yes |
| Modifies variables | OK, error |


