---
id: dom-set-xml-attribute
title: DOM SET XML ATTRIBUTE
slug: /commands/dom-set-xml-attribute
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ATTRIBUTE.Syntax-->**DOM SET XML ATTRIBUTE** ( *elementRef* : Text ; *attribName* : Text ; *attrValue* : any {; ...(*attribName* : Text ; *attrValue* : any)} )<!-- END REF-->
<!--REF #_command_.DOM SET XML ATTRIBUTE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| attribName | Text | &#8594;  | Attribute to set |
| attrValue | any | &#8594;  | New attribute value |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.DOM SET XML ATTRIBUTE.Summary-->The DOM SET XML ATTRIBUTE command adds one or more attributes to the XML element whose reference is passed in the *elementRef* parameter.<!-- END REF--> It also sets the value of each attribute defined.

Pass the attribute you want to set and its value respectively in the *attrName* and *attrValue* parameters (in the form of variables, fields or literal values). You can pass as many attribute/value pairs as you want.   
The *attrValue* parameter can be of the text type or another type (Boolean, integer, real, date or time). If you pass a value other than text, 4D handles its conversion to text, according to the following principles:

| **Type** | **Example of converted value**                |
| -------- | --------------------------------------------- |
| Boolean  | "true" or "false"                             |
| Integer  | "123456"                                      |
| Real     | "12.34" (the decimal separator is always ".") |
| Date     | "2006-12-04T00:00:00Z" (RFC 3339 standard)    |
| Time     | "5233" (number of seconds)                    |

## Example 

In the following XML source:

```XML
<Book>
   <Title>The Best Seller</Title>
</Book>
```

If the following code is executed:

```4d
 vAttrName:="Font"
 vAttrVal:="Verdana"
 DOM SET XML ATTRIBUTE(vElemRef;vAttrName;vAttrVal)
```

We get:

```XML
<Book>
   <Title Font=Verdana>The Best Seller</Title>
</Book>
```

## System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated.

## See also 

[DOM GET XML ATTRIBUTE BY INDEX](../commands/dom-get-xml-attribute-by-index)  
[DOM GET XML ATTRIBUTE BY NAME](../commands/dom-get-xml-attribute-by-name)  
[DOM REMOVE XML ATTRIBUTE](../commands/dom-remove-xml-attribute)  
[XML SET OPTIONS](../commands/xml-set-options)  

## Properties

|  |  |
| --- | --- |
| Command number | 866 |
| Thread safe | yes |
| Modifies variables | OK |


