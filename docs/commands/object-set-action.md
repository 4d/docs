---
id: object-set-action
title: OBJECT SET ACTION
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ACTION.Syntax-->**OBJECT SET ACTION** ( {* ;} *object* ; *action* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ACTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a field or variable |
| object | Form object | -> | Object name (if * is specified) or
Field or variable (if * is omitted) |
| action | Text | -> | Name of action to associate (including parameters if necessary) |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET ACTION.Summary-->The **OBJECT SET ACTION** command modifies the standard action associated with the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only). 

In the *action* parameter, pass a string containing the name of the standard action to associate with the object, or a constant from the [Standard Action](/4Dv20R6/4D/20-R6/Standard-Action.302-6958501.en.html) theme. Optionally, the action can have parameters.

For detailed information on action names, please refer to the [Standard actions](/4Dv20R6/4D/20-R6/Standard-actions.300-7003350.en.html) section in the *4D Design Reference* manual. 

**Compatibility Note:** Legacy constants (prefixed by \_o\_ in the "[Standard Action](/4Dv20R6/4D/20-R6/Standard-Action.302-6958501.en.html)" theme) are deprecated starting with 4D v16 R3\. However, they are still supported for compatibility. 

#### Example 

You want to associate the **Validate** standard action with a button:

```4d
 OBJECT SET ACTION(*;"bValidate";ak accept)
```

#### See also 

[\_o\_OBJECT Get action](../../4D/20-R6/o-OBJECT-Get-action.301-6957659.en.html)  
[OBJECT Get action](object-get-action.md)  