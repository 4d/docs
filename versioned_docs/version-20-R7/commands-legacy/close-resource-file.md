---
id: close-resource-file
title: CLOSE RESOURCE FILE
slug: /commands/close-resource-file
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE RESOURCE FILE.Syntax-->**CLOSE RESOURCE FILE** ( *resFile* )<!-- END REF-->
<!--REF #_command_.CLOSE RESOURCE FILE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resFile | Time | &#8594;  | Resource file reference number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.CLOSE RESOURCE FILE.Summary-->The **CLOSE RESOURCE FILE** command closes the resource file whose reference number is passed in *resFile*.<!-- END REF-->

Even if you have opened the same resource file several times, you need to call **CLOSE RESOURCE FILE** only once in order to close that file.

If you apply **CLOSE RESOURCE FILE** to the 4D application or database resource files, the command detects it and does nothing.

If you pass an invalid resource file reference number, the command does nothing.

Remember to eventually call **CLOSE RESOURCE FILE** for a resource file that you have opened using [Open resource file](open-resource-file.md). Note that when you quit the application (or open another database), 4D automatically closes all the resource files you opened.

#### See also 

[Open resource file](open-resource-file.md)  