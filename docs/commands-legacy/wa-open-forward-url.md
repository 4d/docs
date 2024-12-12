---
id: wa-open-forward-url
title: WA OPEN FORWARD URL
slug: /commands/wa-open-forward-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN FORWARD URL.Syntax-->**WA OPEN FORWARD URL** ( {* ;} *object* )<!-- END REF-->
<!--REF #_command_.WA OPEN FORWARD URL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WA OPEN FORWARD URL.Summary-->The **WA OPEN FORWARD URL** command loads the next URL in the sequence of URLs opened into the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

If there is no next URL (in other words, if the user has never returned to a previous URL), the command does nothing. You can test whether a next URL is available using the [WA Forward URL available](wa-forward-url-available.md) command.

#### See also 

[WA OPEN BACK URL](wa-open-back-url.md)  
[WA OPEN URL](wa-open-url.md)  