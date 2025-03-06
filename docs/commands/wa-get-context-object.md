---
id: wa-get-context-object
title: WA Get context object
---

<!--REF #_command_.WA Get context object.Syntax-->**WA Get context object** ( {* ;} *object* ) -> *contextObj*<!-- END REF-->
<!--REF #_command_.WA Get context object.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, *object* is an object name (string). If omitted, *object* is a variable. |
| object | Form object | &#8594;  | Object name (if * is specified) or Variable (if * is omitted). |
| contextObj | Object | &#8592;  | Returns the context object if previously defined. Otherwise, returns `null`. |

<!-- END REF-->

#### Description 

The `WA Get context object` command<!--REF #_command_.WA Get context object.Summary--> retrieves the context object defined for `$4d` in a specific embedded web area. If no context object was set using `WA SET CONTEXT OBJECT`, the command returns `null`.<!-- END REF-->

This command is **only applicable to embedded web areas** where the **"Use embedded web rendering engine"** parameter is set to `true`.

#### Example 1: 

Retrieve a Previously Defined Context Object

```4d
 var $context:={}
 $context.myMethod:=Formula(myMethod)
 $context.myMethod2:=Formula(myMethod2)

 WA SET CONTEXT OBJECT(*; "myWebArea"; $context)

 // Retrieve the context object
 var $retrievedContext:=WA Get context object(*; "myWebArea")
```

#### Example 2: 

Checking If a Context Exists

```4d
 var $contextObj:=WA Get context object(*; "myWebArea")

 If (Not(Null($contextObj)))
    ALERT("Context object is defined!")
 Else 
    ALERT("No context object set for this web area.")
 End if
```

#### See also 

[WA SET CONTEXT OBJECT](wa-set-context-object.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | TBD |
| Thread safe | &cross; |
