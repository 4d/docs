---
id: set-text-to-pasteboard
title: SET TEXT TO PASTEBOARD
slug: /commands/set-text-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET TEXT TO PASTEBOARD.Syntax-->**SET TEXT TO PASTEBOARD** ( *text* )<!-- END REF-->
<!--REF #_command_.SET TEXT TO PASTEBOARD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| text | Text | &#8594;  | Text to be put into the pasteboard |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET TEXT TO PASTEBOARD.Summary-->**SET TEXT TO PASTEBOARD** clears the pasteboard and then puts a copy of the text you passed in *text* into the pasteboard.<!-- END REF--> 

**Note:** In the case of copy/paste operations, the pasteboard is equivalent to the Clipboard 

After you have put some text into the pasteboard, you can retrieve it using the [Get text from pasteboard](get-text-from-pasteboard.md) command or by calling for example [GET PASTEBOARD DATA](get-pasteboard-data.md) ("com.4d.private.text.native";...).

4D text expressions can contain up to 2 GB of text*.* 

**Note:** The pasteboard is read only during the On Drag Over form event. It is not possible to use this command in this context.

#### Example 

See the example for the [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md) command.

#### System variables and sets 

If a copy of the text is correctly placed in the pasteboard, the OK variable is set to 1\. If there is not enough memory to place a copy of the text in the pasteboard, the OK variable is set to 0, but no error is generated.

#### See also 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  