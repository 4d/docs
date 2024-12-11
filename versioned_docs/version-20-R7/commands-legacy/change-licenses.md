---
id: change-licenses
title: CHANGE LICENSES
slug: /commands/change-licenses
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE LICENSES.Syntax-->**CHANGE LICENSES**<!-- END REF-->
<!--REF #_command_.CHANGE LICENSES.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.CHANGE LICENSES.Summary-->The CHANGE LICENSES command displays the 4D License Manager dialog box.<!-- END REF--> 

This command can only be used with 4D single-user applications and cannot be called from a component. When passwords are enabled, this command can only be executed by the Designer or Administrator; it does nothing when it is called by users that do not have appropriate access rights.

Using the License Manager dialog box, a user can activate plug-ins or the Web server on the machine where it is executed. In 4D, you can display this dialog box by selecting the **License Manager...** command in the **Help** menu.

CHANGE LICENSES is a convenient way to activate licenses and add expansion numbers in a compiled single-user 4D application distributed to customers. 4D developers or IS managers can use this command to distribute a 4D application and let users enter their license without sending an update of the application each time.

For more information about this dialog box, refer to the *Installation and activation* section in the *4D Installation Guide*.

#### Example 

In a custom configuration or preferences dialog box, you include a button whose associated method is:

```4d
  // Object method for bLicense button
 CHANGE LICENSES
```

This way a user can activate licenses without having to modify the database.

#### See also 

[License info](../commands/license-info.md)  
[Is license available](is-license-available.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 637 |
| Thread safe | &check; |
| Forbidden on the server ||


