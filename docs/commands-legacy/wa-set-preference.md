---
id: wa-set-preference
title: WA SET PREFERENCE
slug: /commands/wa-set-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PREFERENCE.Syntax-->**WA SET PREFERENCE** ( {* ;} *object* ; *selector* ; *value* )<!-- END REF-->
<!--REF #_command_.WA SET PREFERENCE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| selector | Integer | &#8594;  | Preference to be modified |
| value | Boolean | &#8594;  | Value of the preference (True = allowed,  False = not allowed) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WA SET PREFERENCE.Summary-->The WA SET PREFERENCE command sets different preferences for the Web area designated by the *\** and *object* parameters.<!-- END REF-->

Pass the preference to be modified in the *selector* parameter and the value to be assigned to it in the *value* parameter. In *selector*, you can pass one of the following constants, found in the *Web Area* theme:

| Constant                  | Value | Comment                                                                                                                                 |
| ------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------- |
| WA enable contextual menu | 4     | Allow the display of a standard contextual menu in the Web area. Default (any engine) = False                                           |
| WA enable URL drop        | 101   | Change drop icon and call *On Window Opening Denied* event when URLs or files are dropped in the Web area. Default (any engine) = False |
| WA enable Web inspector   | 100   | Allow the display of the Web inspector in the area. Default (any engine) = False                                                        |

For each preference, pass **True** in *value* to activate it and **False** to deactivate it.

#### Example 

To enable URL drops in the 'myarea' Web area:

```4d
  //in the form method
 WA SET PREFERENCE(*;"myarea";WA enable URL drop;True)
```

```4d
  //in web area object method
 If(FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))
 End if
```

#### See also 

[WA GET PREFERENCE](wa-get-preference.md)  