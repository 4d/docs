---
id: wa-get-preference
title: WA GET PREFERENCE
slug: /commands/wa-get-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA GET PREFERENCE.Syntax-->**WA GET PREFERENCE** ( {* ;} *object* ; *selector* ; *value* )<!-- END REF-->
<!--REF #_command_.WA GET PREFERENCE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| selector | Integer | &#8594;  | Preference to get |
| value | Variable | &#8592; | Current value of the preference |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA GET PREFERENCE.Summary-->The WA GET PREFERENCE command gets the current value of the preference in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

Pass the preference whose value you want to get in the *selector* parameter. You can pass one of the following constants, found in the *Web Area* theme:

| Constant                  | Value | Comment                                                                                                                                 |
| ------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------- |
| WA enable contextual menu | 4     | Allow the display of a standard contextual menu in the Web area. Default (any engine) = False                                           |
| WA enable URL drop        | 101   | Change drop icon and call *On Window Opening Denied* event when URLs or files are dropped in the Web area. Default (any engine) = False |
| WA enable Web inspector   | 100   | Allow the display of the Web inspector in the area. Default (any engine) = False                                                        |

In the *value* parameter, pass a variable that will receive the current value of the preference. The *value* variable is always a Boolean: it contains **True** if the preference is active and **False** otherwise.

#### See also 

[WA SET PREFERENCE](wa-set-preference.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1042 |
| Thread safe | &check; |
| Forbidden on the server ||


