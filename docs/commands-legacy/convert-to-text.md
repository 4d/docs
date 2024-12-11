---
id: convert-to-text
title: Convert to text
slug: /commands/convert-to-text
displayed_sidebar: docs
---

<!--REF #_command_.Convert to text.Syntax-->**Convert to text** ( *blob* ; *charSet* ) : Text<!-- END REF-->
<!--REF #_command_.Convert to text.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB containing text expressed in a specific character set |
| charSet | Text, Integer | &#8594;  | Name or Number of BLOB character set |
| Function result | Text | &#8592; | Contents of BLOB expressed in 4D character set |

<!-- END REF-->

#### Description 

<!--REF #_command_.Convert to text.Summary-->The **Convert to text** command converts the text contained in the *blob* parameter and returns it in text expressed in the character set of 4D.<!-- END REF--> 4D uses the UTF-16 character set by default.

In *charSet*, pass the character set of the text contained in *blob*, which will be used for the conversion. If the BLOB contains text copied from within 4D, then the BLOB’s text is likely to be in the UTF-16 character set. You can pass a string providing the standard name of the character set, or one of its aliases (for example, “ISO-8859-1” or “UTF-8”), or its identifier (longint). For more information, please refer to the description of the [CONVERT FROM TEXT](convert-from-text.md) command.

**Convert to text** supports Byte Order Marks (BOMs). If the character set specified is of the Unicode type (UTF-8, UTF-16 or UTF-32), 4D attempts to identify a BOM among the first bytes received. If one is detected, it is filtered out of the result and 4D uses the character set that it defines instead of the one specified.

#### System variables and sets 

If the command has been correctly executed, the OK variable is set to 1\. Otherwise, it is set to 0.

#### See also 

[CONVERT FROM TEXT](convert-from-text.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1012 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


