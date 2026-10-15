---
id: window-list
title: WINDOW LIST
slug: /commands/window-list
displayed_sidebar: docs
---

<!--REF #_command_.WINDOW LIST.Syntax-->**WINDOW LIST** ( *windows* : Array {; *} )<!-- END REF-->
<!--REF #_command_.WINDOW LIST.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| windows | Array | &#8592; | Array of window reference numbers |
| * | Operator | &#8594;  | If specified, take floating windows into account If omitted, ignore floating windows |
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

<!--REF #_command_.WINDOW LIST.Summary-->The WINDOW LIST command populates the array *windows* with the window reference numbers of the windows currently open in all running processes (kernel or user processes).<!-- END REF--> Only "visible" windows (i.e. windows that are not hidden) are returned. 

If you do not pass the optional *\** parameter, floating windows are ignored.

## Example 

The following project method tiles all the current open window, except floating windows and dialog boxes:

```4d
  // TILE WINDOWS project method
 
 WINDOW LIST($alWnd)
 $vlLeft:=10
 $vlTop:=80 // Leave enough room for the Tool bar
 For($vlWnd;1;Size of array($alWnd))
    If(Window kind($alWnd{$vlWnd})#Modal dialog)
       GET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
       $vlWR:=$vlLeft+($vlWR-$vlWL)
       $vlWB:=$vlTop+($vlWB-$vlWT)
       $vlWL:=$vlLeft
       $vlWT:=$vlTop
       SET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
       $vlLeft:=$vlLeft+10
       $vlTop:=$vlTop+25
    End if
 End for
```

**Note:** This method could be improved by adding tests on the size of the main window (on Windows) or the size and location of the screens (on Macintosh).

## See also 

[Window kind](../commands/window-kind)  
[Window process](../commands/window-process)  

## Properties

|  |  |
| --- | --- |
| Command number | 442 |
| Thread safe | no |


