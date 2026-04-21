---
id: application-file
title: Application file
slug: /commands/application-file
displayed_sidebar: docs
---

<!--REF #_command_.Application file.Syntax-->**Application file**  : Text<!-- END REF-->
<!--REF #_command_.Application file.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Long name of the 4D executable file or application |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Application file.Summary-->The Application file command returns the long name of the 4D executable file or application you are running.<!-- END REF--> 
If, for example, you are running 4D located at \\PROGRAMS\\4D on the volume E, the command returns E:\\PROGRAMS\\4D\\4D.EXE.

*On Macintosh*  
If, for example, you are running 4D in the Programs folder on the disk Macintosh HD, the command returns Macintosh HD:Programs:4D.app.

## Example 

At startup on Windows, you need to check if a DLL Library is correctly located at the same level as the 4D executable file. In the of your application you can write:

```4d
 If(Is Windows&(Application type#4D Server))
    var $appPath : Object
    $appPath:=Path to object(Application file)
    If(Test path name(($appPath.parentFolder)+"XRAYCAPT.DLL")#Is a document)
       ALERT("XRAYCAPT.DLL is missing. The X-ray capture capability will not be available.")
    End if
 End if
```

## See also 

[Data file](../commands/data-file)  
[Structure file](../commands/structure-file)  

## Properties

|  |  |
| --- | --- |
| Command number | 491 |
| Thread safe | yes |


