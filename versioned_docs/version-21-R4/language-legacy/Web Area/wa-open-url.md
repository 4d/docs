---
id: wa-open-url
title: WA OPEN URL
slug: /commands/wa-open-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN URL.Syntax-->**WA OPEN URL** ( * ; *object* : Text ; *url* : Text )<br/>**WA OPEN URL** ( *object* : Variable, Field ; *url* : Text )<!-- END REF-->
<!--REF #_command_.WA OPEN URL.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| url | Text | &#8594;  | URL to load in Web area |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL Release 2|Created|

</details>
</div>

## Description 

<!--REF #_command_.WA OPEN URL.Summary-->The **WA OPEN URL** command loads the URL passed in the *url* parameter into the Web area designated by the *\** and *object* parameters.<!-- END REF-->

If an empty string is passed in *url*, the command does nothing and no error is generated. To load a blank page into the Web area, pass the string "about:blank" in *url*.

Like the existing [OPEN URL](../commands/open-url) command, **WA OPEN URL** accepts several types of syntaxes in the *url* parameter to designate the files:

* posix syntax: "file:///c:/My%20File"
* system syntax: "c:\\MyFolder\\MyFile" (Windows) or "MyDisk:MyFolder:MyFile" (macOS).

**Note:** For compatibility, the "file://" syntax (using two "/") is accepted in 4D but it does not conform to RFC. We recommend using the "file:///" syntax (with three "/") that complies with RFC.

On Mac OS, when FileVault is activated, you must use the Posix syntax. You can transform paths of the system using the [Convert path system to POSIX](../commands/convert-path-system-to-posix) command.

This command has the same effect as modifying the value of the "URL" variable associated with the area. For example, if the variable of the area is named MyWArea\_url:

```4d
 MyWArea_url:="http://www.4d.com/"
```

is the same as:

```4d
 WA OPEN URL(MyWArea;"http://www.4d.com/")
```

## See also 

[OPEN URL](../commands/open-url)  
[WA OPEN BACK URL](../commands/wa-open-back-url)  
[WA OPEN FORWARD URL](../commands/wa-open-forward-url)  

## Properties

|  |  |
| --- | --- |
| Command number | 1020 |
| Thread safe | no |


