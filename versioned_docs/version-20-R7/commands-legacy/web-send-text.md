---
id: web-send-text
title: WEB SEND TEXT
slug: /commands/web-send-text
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND TEXT.Syntax-->**WEB SEND TEXT** ( *htmlText* {; *type*} )<!-- END REF-->
<!--REF #_command_.WEB SEND TEXT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| htmlText | Text | &#8594;  | HTML text field or variable to be sent to the Web browser |
| type | Text | &#8594;  | MIME type |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SEND TEXT.Summary-->The **WEB SEND TEXT** command directly sends HTML formatted text data.<!-- END REF-->

The *htmlText* parameter contains the data to be sent. Since 4D does not check the parameter content, make sure that the HTML encoding is correct.

Any references to 4D variables and *4DSCRIPT* type tags in the text are always parsed.

By default, if you omit the *type* parameter, 4D assumes that the data sent is of the "text/html" type. The command is then exactly the same as sending a BLOB of the "text/html" type using the [WEB SEND BLOB](web-send-blob.md) command.   
You can also use the *type* parameter to specify the MIME type of the text to be sent. For more information about the MIME types supported, refer to the description of the [WEB SEND BLOB](web-send-blob.md) command.

#### Example 

The following method:

```4d
 TEXT TO BLOB(""+String(Current time)+"";$blob;UTF8 Text without length)
 WEB SEND BLOB($blob;"text/html")
```

... can be replaced by the single line:

```4d
 WEB SEND TEXT(""+String(Current time)+"")
```

#### See also 

[WEB SEND BLOB](web-send-blob.md)  