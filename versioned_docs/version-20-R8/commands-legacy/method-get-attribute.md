---
id: method-get-attribute
title: METHOD Get attribute
slug: /commands/method-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get attribute.Syntax-->**METHOD Get attribute** ( *path* ; *attribType* {; *} ) : Boolean<!-- END REF-->
<!--REF #_command_.METHOD Get attribute.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text | &#8594;  | Path of project method |
| attribType | Integer | &#8594;  | Type of attribute to get |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |
| Function result | Boolean | &#8592; | True = attribute selected; otherwise False |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD Get attribute.Summary-->The **METHOD Get attribute** command returns the value of the *attribType* attribute for the project method designated by the *path* parameter.<!-- END REF--> This command only works with project methods. If you pass an invalid *path*, an error is generated. 

In the *attribType* parameter, pass a value indicating the type of attribute to get. You can use the following constants, found in the *Design Object Access* theme:

| Constant                     | Type    | Value | Comment                                                                           |
| ---------------------------- | ------- | ----- | --------------------------------------------------------------------------------- |
| Attribute executed on server | Integer | 8     | Corresponds to the "Execute on server" option                                     |
| Attribute invisible          | Integer | 1     | Corresponds to the "Invisible" option                                             |
| Attribute published SOAP     | Integer | 3     | Corresponds to the "Offered as a Web Service" option                              |
| Attribute published SQL      | Integer | 7     | Corresponds to the "Available through SQL" option                                 |
| Attribute published Web      | Integer | 2     | Corresponds to the "Available through 4D HTML tags and URLs (4DACTION...)" option |
| Attribute published WSDL     | Integer | 4     | Corresponds to the "Published in WSDL" option                                     |
| Attribute shared             | Integer | 5     | Corresponds to the "Shared by components and host database" option                |

If the command is executed from a component, it applies by default to the component methods. If you pass the *\** parameter, it accesses the methods of the host database.

The command returns **True** when an attribute is selected and **False** if it is deselected.

#### See also 

[METHOD SET ATTRIBUTE](method-set-attribute.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1169 |
| Thread safe | &cross; |


