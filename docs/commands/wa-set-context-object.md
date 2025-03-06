---
id: wa-set-context-object
title: WA SET CONTEXT OBJECT
---


<!--REF #_command_.WA SET CONTEXT OBJECT.Syntax-->**WA SET CONTEXT OBJECT** ( {* ;} *object* ; *contextObj* )<!-- END REF-->
<!--REF #_command_.WA SET CONTEXT OBJECT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, *object* is an object name (string). If omitted, *object* is a variable. |
| object | Form object | &#8594;  | Object name (if * is specified) or Variable (if * is omitted). |
| contextObj | Object | &#8594;  | Object containing the functions and attributes that can be called with `$4d`. Functions or attributes starting with `_` are hidden from `$4d`. |

<!-- END REF-->

#### Description 

The `WA SET CONTEXT OBJECT` command <!--REF #_command_.WA SET CONTEXT OBJECT.Summary--> defines a context object for `$4d` in a specific embedded web area. When this command is used, `$4d` can only access the attributes and functions within the provided `contextObj`. If no context object is set, `$4d` has access to all 4D methods.<!-- END REF-->

The command is **only usable with an embedded web area** where the **"Use embedded web rendering engine"** parameter is set to `true`.

- If `contextObj = null`, `$4d` has access to all 4D methods.
- If `contextObj = {}`, `$4d` cannot access any method.
- Attributes or functions that begin with `_` are hidden from `$4d`.

#### Example 1: 

Restrict `$4d` to Specific Methods

```4d
 var $context:={}
 $context.myMethod:=Formula(myMethod)
 $context.myMethod2:=Formula(myMethod2)

 WA SET CONTEXT OBJECT(*; "myWebArea"; $context)
```

**In HTML:**
```html
$4d.myMethod(); // Allowed
$4d.myMethod2(); // Allowed
$4d.someOtherMethod(); // Not accessible
```

#### Example 2: 

Using a Class Object

```4d
 var $myWAObject:=cs.WAFunctions.new()

 WA SET CONTEXT OBJECT(*; "MyWA"; $myWAObject)
```

#### See also 

[WA Get context object](wa-get-context-object.md)

#### Properties

|  |  |
| --- | --- |
| Command number | TBD |
| Thread safe | &cross; |
