---
id: get-text-from-pasteboard
title: Get text from pasteboard
slug: /commands/get-text-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get text from pasteboard.Syntax-->**Get text from pasteboard**  : Text<!-- END REF-->
<!--REF #_command_.Get text from pasteboard.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Returns the text (if any) present in the pasteboard |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get text from pasteboard.Summary-->**Get text from pasteboard** returns the text present in the pasteboard.<!-- END REF--> 

**Note:** In the case of copy/paste operations, the pasteboard is equivalent to the Clipboard 

If the pasteboard contains enriched text (for example in RTF format), the text will keep its attributes when it is dropped or pasted, if the destination area is compatible. 

Note that 4D text fields and variables can contain up to 2 GB of text.

#### System variables and sets 

If the text is correctly extracted, OK is set to 1; otherwise OK is set to 0.

#### See also 

[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Pasteboard data size](pasteboard-data-size.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 524 |
| Thread safe | &cross; |
| Modifies variables | OK |


