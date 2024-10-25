---
id: change-password
title: CHANGE PASSWORD
slug: /commands/change-password
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE PASSWORD.Syntax-->**CHANGE PASSWORD** ( *password* )<!-- END REF-->
<!--REF #_command_.CHANGE PASSWORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| password | Text | &#8594;  | New password |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.CHANGE PASSWORD.Summary-->CHANGE PASSWORD changes the password of the current user.<!-- END REF--> This command replaces the current password with the new password you pass in *password*. 

**Warning:** Password are case-sensitive.

#### Example 

The following example allows the user to change his or her password.

```4d
 CHANGE CURRENT USER // Present user with password dialog
 If(OK=1)
    $pw1:=Request("Enter new password for "+Current user)
  // The password should be at least five characters long
    If(((OK=1)&($pw1#""))&(Length($pw1)>5))
  // Make sure the password has been entered correctly
       $pw2:=Request("Enter password again")
       If((OK=1)&($pw1=$pw2))
          CHANGE PASSWORD($pw2) // Change the password
       End if
    End if
 End if
```

#### See also 

[CHANGE CURRENT USER](change-current-user.md)  
[OBJECT SET FONT](object-set-font.md)  