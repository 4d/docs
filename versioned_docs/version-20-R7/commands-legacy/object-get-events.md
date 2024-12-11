---
id: object-get-events
title: OBJECT GET EVENTS
slug: /commands/object-get-events
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET EVENTS.Syntax-->**OBJECT GET EVENTS** ( {* ;} *object* ; *arrEvents* )<!-- END REF-->
<!--REF #_command_.OBJECT GET EVENTS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name or "" to designate the form (if * is specified) orField or variable (if * is omitted) |
| arrEvents | Array integer | &#8592; | Array of enabled events |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET EVENTS.Summary-->The **OBJECT GET EVENTS** command gets the current configuration of the form events for the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

Form events can be enabled/disabled either using the Property List, or using the [OBJECT SET EVENTS](object-set-events.md) command if it is called in the current process.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).  
To get the configuration of events for the form itself, pass the optional *\** parameter and an empty string "" in object: in this case, you designate the current form. 

**Note:** If you want to get events for a subform related to a table, you can only use the syntax based on the object name.

Pass a longint array in the *arrEvents* parameter. When the command is executed, this array is automatically sized and receives all the predefined or custom form events that are enabled for the object or the form. You can compare the values received with the constants of the "*Form Events*" theme.

Note that the *arrEvents* array is returned empty if no object method is associated with the object or if no form method is associated with the form. 

#### Example 

You want to enable two events and get the list of events for an object:

```4d
 ARRAY LONGINT($ArrCurrentEvents;0)
 ARRAY LONGINT($ArrEnabled;2)
 $ArrEnabled{1}:=On Header Click
 $ArrEnabled{2}:=On Footer Click
 OBJECT SET EVENTS(*;"Col1";$ArrEnabled;Enable events others unchanged)
 OBJECT GET EVENTS(*;"Col1";$ArrCurrentEvents)
```

#### See also 

[OBJECT SET EVENTS](object-set-events.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1238 |
| Thread safe | &check; |
| Forbidden on the server ||


