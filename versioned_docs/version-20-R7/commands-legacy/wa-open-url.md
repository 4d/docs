---
id: wa-open-url
title: WA OPEN URL
slug: /commands/wa-open-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN URL.Syntax-->**WA OPEN URL** ( {* ;} *object* ; *url* )<!-- END REF-->
<!--REF #_command_.WA OPEN URL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| url | Text | &#8594;  | URL to load in Web area |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WA OPEN URL.Summary-->The **WA OPEN URL** command loads the URL passed in the *url* parameter into the Web area designated by the *\** and *object* parameters.<!-- END REF-->

If an empty string is passed in *url*, the command does nothing and no error is generated. To load a blank page into the Web area, pass the string "about:blank" in *url*.

Like the existing [OPEN URL](open-url.md) command, **WA OPEN URL** accepts several types of syntaxes in the *url* parameter to designate the files:

* posix syntax: "file:///c:/My%20File"
* system syntax: "c:\\MyFolder\\MyFile" (Windows) or "MyDisk:MyFolder:MyFile" (Mac OS).

**Note:** For compatibility, the "file://" syntax (using two "/") is accepted in 4D but it does not conform to RFC. We recommend using the "file:///" syntax (with three "/") that complies with RFC.

On Mac OS, when FileVault is activated, you must use the Posix syntax. You can transform paths of the system using the [Convert path system to POSIX](convert-path-system-to-posix.md) command.

This command has the same effect as modifying the value of the "URL" variable associated with the area. For example, if the variable of the area is named MyWArea\_url:

```4d
 MyWArea_url:="http://www.4d.com/"
```

is the same as:

```4d
 WA OPEN URL(MyWArea;"http://www.4d.com/")
```

#### See also 

[OPEN URL](open-url.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  
[WA OPEN FORWARD URL](wa-open-forward-url.md)  