---
id: dom-get-xml-information
title: DOM Get XML information
slug: /commands/dom-get-xml-information
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML information.Syntax-->**DOM Get XML information** ( *elementRef* ; *xmlInfo* ) -> Function result<!-- END REF-->
<!--REF #_command_.DOM Get XML information.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| elementRef | Text | &#x1F852; | XML root element reference |
| xmlInfo | Integer | &#x1F852; | Type of information to get |
| Function result | String | &#x1F850; | Value of the XML information |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get XML information.Summary-->The DOM Get XML information command retrieves diverse information about the XML element designated by *elementRef*.<!-- END REF--> 

In *xmlInfo*, pass a code indicating the type of information to be retrieved. You can use the following predefined constants, located in the *XML* theme:

| Constant     | Type    | Value | Comment                                                                                                       |
| ------------ | ------- | ----- | ------------------------------------------------------------------------------------------------------------- |
| DOCTYPE Name | Longint | 3     | Name of the root element as defined in the DOCTYPE marker                                                     |
| Document URI | Longint | 6     | URI of the DTD                                                                                                |
| Encoding     | Longint | 4     | Encoding used (UTF-8, ISO...)                                                                                 |
| PUBLIC ID    | Longint | 1     | Public identifier (FPI) of the DTD to which the document conforms (if the DOCTYPE xxx PUBLIC tag is present). |
| SYSTEM ID    | Longint | 2     | System identifier                                                                                             |
| Version      | Longint | 5     | Accepted XML version                                                                                          |

#### See also 

[XML GET ERROR](xml-get-error.md)  