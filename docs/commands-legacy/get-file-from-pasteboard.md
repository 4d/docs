---
id: get-file-from-pasteboard
title: Get file from pasteboard
slug: /commands/get-file-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get file from pasteboard.Syntax-->**Get file from pasteboard** ( *xIndex* ) : Text<!-- END REF-->
<!--REF #_command_.Get file from pasteboard.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| xIndex | Integer | &#8594;  | Xth file included in drag action |
| Function result | Text | &#8592; | Pathname of file extracted from pasteboard |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Get file from pasteboard.Summary-->The Get file from pasteboard command returns the absolute pathname of a file included in a drag and drop operation.<!-- END REF--> Several files can be selected and moved simultaneously. The *xIndex* parameter is used to designate a file from among the set of files selected.

If there is no Xth file in the pasteboard, the command returns an empty string.

#### Example 

The following example can be used to retrieve in an array all the pathnames of the files included in a drag and drop operation:

```4d
 ARRAY TEXT($filesArray;0)
 var $vfileArray : Text
 var $n : Integer
 $n:=1
 Repeat
    $vfileArray:=Get file from pasteboard($n)
    If($vfileArray#"")
       APPEND TO ARRAY($filesArray;$vfileArray)
       $n:=$n+1
    End if
 Until($vfileArray="")
```

#### See also 

[SET FILE TO PASTEBOARD](set-file-to-pasteboard.md)  