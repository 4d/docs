---
id: method-get-attribute
title: METHOD Get attribute
slug: /commands-legacy/method-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get attribute.Syntax-->**METHOD Get attribute** ( *path* ; *attribType* {; *} ) -> Function result<!-- END REF-->
<!--REF #_command_.METHOD Get attribute.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text | &rarr; | Path of project method |
| attribType | Longint | &rarr; | Type of attribute to get |
| * | Operator | &rarr; | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |
| Function result | Boolean | &larr; | True = attribute selected; otherwise False |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD Get attribute.Summary-->The **METHOD Get attribute** command returns the value of the *attribType* attribute for the project method designated by the *path* parameter.<!-- END REF--> This command only works with project methods. If you pass an invalid *path*, an error is generated. 

In the *attribType* parameter, pass a value indicating the type of attribute to get. You can use the following constants, found in the *Design Object Access* theme:

| Constant                     | Type    | Value | Comment                                                                           |
| ---------------------------- | ------- | ----- | --------------------------------------------------------------------------------- |
| Attribute executed on server | Longint | 8     | Corresponds to the "Execute on server" option                                     |
| Attribute invisible          | Longint | 1     | Corresponds to the "Invisible" option                                             |
| Attribute published SOAP     | Longint | 3     | Corresponds to the "Offered as a Web Service" option                              |
| Attribute published SQL      | Longint | 7     | Corresponds to the "Available through SQL" option                                 |
| Attribute published Web      | Longint | 2     | Corresponds to the "Available through 4D HTML tags and URLs (4DACTION...)" option |
| Attribute published WSDL     | Longint | 4     | Corresponds to the "Published in WSDL" option                                     |
| Attribute shared             | Longint | 5     | Corresponds to the "Shared by components and host database" option                |

If the command is executed from a component, it applies by default to the component methods. If you pass the *\** parameter, it accesses the methods of the host database.

The command returns **True** when an attribute is selected and **False** if it is deselected.

#### See also 

[METHOD SET ATTRIBUTE](method-set-attribute.md)  