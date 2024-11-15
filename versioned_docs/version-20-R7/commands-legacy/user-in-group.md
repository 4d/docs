---
id: user-in-group
title: User in group
slug: /commands/user-in-group
displayed_sidebar: docs
---

<!--REF #_command_.User in group.Syntax-->**User in group** ( *user* ; *group* ) : Boolean<!-- END REF-->
<!--REF #_command_.User in group.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| user | Text | &#8594;  | User account name |
| group | Text | &#8594;  | Group name |
| Function result | Boolean | &#8592; | TRUE = user is in group FALSE = user is not in group |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.User in group.Summary-->User in group returns TRUE if *user* is in *group*.<!-- END REF-->

**Note:** This command expects a user account name in the *user* parameter (it does not support user aliases). If you have defined user aliases in your applicaton, pass the 4D user account parameter to the [Current user](current-user.md) command to make sure it returns a user account (see example).

#### Example 

The following example searches for specific invoices. If the current user is in the Executive group, he or she is allowed access to forms that display confidential information. If the user is not in the Executive group, a different form is displayed:

```4d
 QUERY([Invoices];[Invoices]Retail>100)
 If(User in group(Current user(4D user account);"Executive"))
  //4D user account parameter is necessary if you
  //use 4D user aliases in your application
    FORM SET OUTPUT([Invoices];"Executive Output")
    FORM SET INPUT([Invoices];"Executive Input")
 Else
    FORM SET OUTPUT([Invoices];"Standard Output")
    FORM SET INPUT([Invoices];"Standard Input")
 End if
 MODIFY SELECTION([Invoices];*)
```

#### See also 

[Current user](current-user.md)  