---
id: on-host-database-event-database-method
title: On Host Database Event database method
slug: /commands/on-host-database-event-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Host Database Event database method.Syntax-->$1 -> On Host Database Event database method<!-- END REF-->
<!--REF #_command_.On Host Database Event database method.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Integer | &#8592; | Event code |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.On Host Database Event database method.Summary-->The **On Host Database Event database method** allows 4D components to execute code when the host database is opened and closed.<!-- END REF-->

**Note:** For security reasons, in order to be able to call this database method, you must explicitly allow its execution in the host database. For more information about this point, refer to the *Design Reference* manual. 

The **On Host Database Event database method** is executed automatically only in databases used as components of host databases (when it is authorized in the Settings of the host database). It is called when events related to the opening and closing of the host database occur. 

To process an event, you must test the value of the *$1* parameter inside the method, and compare it with one of the following constants, available in the "*Database Events*" theme:

| Constant                        | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On after host database exit     | Integer | 4     | The [On Exit database method](on-exit-database-method.md) of the host database has just finished running                                                                                                                                                                                                                                                                                                |
| On after host database startup  | Integer | 2     | The [On Startup database method](on-startup-database-method.md) of the host database just finished running                                                                                                                                                                                                                                                                                              |
| On before host database exit    | Integer | 3     | The host database is closing. The [On Exit database method](on-exit-database-method.md) of the host database has not yet been called. <br/>The [On Exit database method](on-exit-database-method.md) of the host database is not called while the [On Host Database Event database method](on-host-database-event-database-method.md) of the component is running                               |
| On before host database startup | Integer | 1     | The host database has just been started. The [On Startup database method](on-startup-database-method.md) method of the host database has not yet been called. <br/>The [On Startup database method](on-startup-database-method.md) of the host database is not called while the [On Host Database Event database method](on-host-database-event-database-method.md) of the component is running |

This allows 4D components to load and save preferences or user states related to the operation of the host database. 

#### Example 

Example of typical structure of an On Host Database Event database method:

```4d
  // On Host Database Event database method
 var $1 : Integer
 Case of
    :($1=On before host database startup)
  // put code here that you want to execute before the "On Startup" database method
  // of the host database
    :($1=On after host database startup)
  // put code here that you want to execute after the "On Startup"
  // database method of the host database
    :($1=On before host database exit)
  // put code here that you want to execute before the "On Exit"
  // database method of the host database
    :($1=On after host database exit)
  // put code here that you want to execute after the "On Exit"
  // database method of the host database
 End case
```
