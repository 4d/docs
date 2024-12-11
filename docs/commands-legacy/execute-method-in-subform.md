---
id: execute-method-in-subform
title: EXECUTE METHOD IN SUBFORM
slug: /commands/execute-method-in-subform
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Syntax-->**EXECUTE METHOD IN SUBFORM** ( *subformObject* ; *formula* {; *return* {; *param*} {; *param2* ; ... ; *paramN*}} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| subformObject | Text | &#8594;  | Name of subform object |
| formula | Object, Text | &#8594;  | Formula object or Name of project method |
| return | *, Variable | &#8594;  | * if formula does not return a value |
| &#8592; | Value returned by formula |
| param | Expression | &#8594;  | Parameter(s) passed to formula |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Summary-->The EXECUTE METHOD IN SUBFORM command can be used to execute the code designated by *formula* in the context of the *subformObject* subform object.<!-- END REF--> 

The called code can receive from 1 to X parameters in *param* and return a value in *return*. Pass *\** in the *return* parameter if the code does not return parameters. 

In *formula*, you designate the 4D code to be executed in the context of *subformObject*. You can pass either:

* a **formula object** (see *Formula Objects*). Formula objects can encapsulate any executable expressions, including functions and project methods;
* a **string** containing the name of a project method.

The execution context is preserved in the called code, which means that the current form and current form event remain specified. If the subform comes from a component, a called method or function must belong to the component and have the "Shared by components and host database" property.

This command must be called in the context of the parent form (containing the *subformObject* object), for example via the form method.

**Note:** The formula is not executed if the *subformObject* is not found in the current page or is not yet instantiated.

#### Example 1 

Given the "ContactDetail" form used as subform in the parent form "Company". The subform object that contains the ContactDetail form is named "ContactSubform". Imagine that we want to modify the appearance of certain elements of the subform according to the value of the field(s) of the company (for example, "contactname" must switch to red when \[Company\]City="New York" and to blue when \[Company\]City="San Diego"). This mechanism is implemented via the SetToColor method. To be able to get this result, the SetToColor method cannot be called directly from the process of the "On Load" form event of the Company parent form because the "contactname" object does not belong to the current form, but to the form displayed in the "ContactSubform" subform object. The method must therefore be executed using the EXECUTE METHOD IN SUBFORM command in order to function correctly.

```4d
 Case of
    :(Form event code=On Load)
       Case of
          :([Company]City="New York")
             $Color:=$Red
          :([Company]City="San Diego")
             $Color:=$Blue
          Else
             $Color:=$Black
       End case
       EXECUTE METHOD IN SUBFORM("ContactSubform";Formula(SetToColor);*;$Color)
 End case
```

#### Example 2 

You are developing a database that will be used as a component. It includes a shared project form (named, for instance, Calendar) that contains *dynamic variables* as well as a public project method that is used to adjust the calendar: SetCalendarDate(varDate).   
If this method was used directly in the Calendar form method, you could call it directly in the "On Load" event: 

```4d
 SetCalendarDate(Current date)
```

 But, in the context of the host database, imagine that a project form contains two "Calendar" subforms, in subform objects called "Cal1" and "Cal2". You must set the date of Cal1 to 01/01/10 and the date of Cal2 to 05/05/10\. You cannot call SetCalendarDate directly because the method will not "know" which forms and variables it should apply. Therefore, you must call it via the following code: 

```4d
 EXECUTE METHOD IN SUBFORM("Cal1";Formula(SetCalendarDate);*;!01/01/20!)
 EXECUTE METHOD IN SUBFORM("Cal2";Formula(SetCalendarDate);*;!05/05/20!)
```

#### System variables and sets 

If this command is executed correctly, the system variable OK is set to 1; otherwise, it is set to 0.


#### Properties
|  |  |
| --- | --- |
| Command number | 1085 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


