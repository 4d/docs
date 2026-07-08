---
id: dom-get-xml-element
title: DOM Get XML element
slug: /commands/dom-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML element.Syntax-->**DOM Get XML element** ( *elementRef* : Text ; *elementName* : Text ; *index* : Integer {; *elementValue* : Variable {; *attrNames* : Text array {; *attrValues* : Text array }}}) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML element.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| elementName | Text | &#8594;  | Name of element to get |
| index | Integer | &#8594;  | Index number of element to get |
| elementValue | Variable | &#8592; | Value of the element |
| attrNames | Text array | &#8592; | Attribute names |
| attrValues | Text array | &#8592; | Attribute values |
| Function result | Text | &#8592; | XML reference (16 characters) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16 R4|Modified|
|2004|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.DOM Get XML element.Summary-->The **DOM Get XML element** command returns a reference to the "child" element dependent on the *elementName* and *index* parameters.<!-- END REF-->

The value of the element can be returned in the *elementValue* optional parameter.

The command fills the *attrNames* array, if passed, with the names of attributes of the element. If necessary, the command creates and sizes the array automatically. 

The command also fills the *attrValues* array, if passed, with the values of attributes of the target element. If necessary, the command creates and sizes the array automatically. 

**Note:** By default, **DOM Get XML element** is case sensitive regarding the *elementName* parameter (xml compliance). You can control the case sensitivity of the command using the XML DOM case sensitivity selector of the [XML SET OPTIONS](../commands/xml-set-options) command. 

## System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1. If an error occurs, it is set to 0.

## See also 

[DOM GET XML ELEMENT VALUE](../commands/dom-get-xml-element-value)  
[XML SET OPTIONS](../commands/xml-set-options)  

## Properties

|  |  |
| --- | --- |
| Command number | 725 |
| Thread safe | yes |
| Modifies variables | OK, error |


