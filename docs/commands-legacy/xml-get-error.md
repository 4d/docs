---
id: xml-get-error
title: XML GET ERROR
slug: /commands/xml-get-error
displayed_sidebar: docs
---

<!--REF #_command_.XML GET ERROR.Syntax-->**XML GET ERROR** ( *elementRef* ; *errorText* {; *row* {; *column*}} )<!-- END REF-->
<!--REF #_command_.XML GET ERROR.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML element reference |
| errorText | Variable | &#8592; | Text of the error |
| row | Variable | &#8592; | Row number |
| column | Variable | &#8592; | Column number |

<!-- END REF-->

#### Description 

<!--REF #_command_.XML GET ERROR.Summary-->The XML GET ERROR command returns, in the *errorText* parameter, a description of the error encountered when processing the XML element designated by the *elementRef* parameter.<!-- END REF--> The information returned is supplied by the Xerces.DLL library. 

The optional *row* and *column* parameters indicate the location of the error: they retrieve, respectively, the row number and, in this row, the position of the first character of the expression at the origin of the error. 

#### System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1\. If an error occurs, it is set to 0.

#### See also 

[DOM Get XML information](dom-get-xml-information.md)  