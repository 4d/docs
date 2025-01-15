---
id: dom-get-xml-information
title: DOM Get XML information
slug: /commands/dom-get-xml-information
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML information.Syntax-->**DOM Get XML information** ( *elementRef* ; *xmlInfo* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML information.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML root element reference |
| xmlInfo | Integer | &#8594;  | Type of information to get |
| Function result | Text | &#8592; | Value of the XML information |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get XML information.Summary-->The DOM Get XML information command retrieves diverse information about the XML element designated by *elementRef*.<!-- END REF--> 

In *xmlInfo*, pass a code indicating the type of information to be retrieved. You can use the following predefined constants, located in the *XML* theme:

| Constant     | Type    | Value | Comment                                                                                                       |
| ------------ | ------- | ----- | ------------------------------------------------------------------------------------------------------------- |
| DOCTYPE Name | Integer | 3     | Name of the root element as defined in the DOCTYPE marker                                                     |
| Document URI | Integer | 6     | URI of the DTD                                                                                                |
| Encoding     | Integer | 4     | Encoding used (UTF-8, ISO...)                                                                                 |
| PUBLIC ID    | Integer | 1     | Public identifier (FPI) of the DTD to which the document conforms (if the DOCTYPE xxx PUBLIC tag is present). |
| SYSTEM ID    | Integer | 2     | System identifier                                                                                             |
| Version      | Integer | 5     | Accepted XML version                                                                                          |

#### See also 

[XML GET ERROR](xml-get-error.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 721 |
| Thread safe | &check; |


