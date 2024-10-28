---
id: get-picture-from-pasteboard
title: GET PICTURE FROM PASTEBOARD
slug: /commands/get-picture-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Syntax-->**GET PICTURE FROM PASTEBOARD** ( *picture* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture | &#8592; | Picture extracted from pasteboard |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Summary-->GET PICTURE FROM PASTEBOARD returns the picture present in the pasteboard in the *picture* field or variable.<!-- END REF-->

**Note:** In the case of copy/paste operations, the pasteboard is equivalent to the Clipboard.

#### Example 

The following button’s object method assigns the picture (jpeg or gif format) present in the pasteboard (if any) to the field \[Employees\]Photo:

```4d
 If((Pasteboard data size("com.4d.private.picture.jpeg")>0)|(Pasteboard data size("com.4d.private.picture.gif")>0))
    GET PICTURE FROM PASTEBOARD([Employees]Photo)
 Else
    ALERT("The pasteboard does not contain any pictures.")
 End if
```

#### System variables and sets 

If the picture is correctly extracted, OK is set to 1; otherwise OK is set to 0.

#### See also 

[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  
[Pasteboard data size](pasteboard-data-size.md)  