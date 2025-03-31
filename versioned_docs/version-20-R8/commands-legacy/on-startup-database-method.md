---
id: on-startup-database-method
title: On Startup database method
slug: /commands/on-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Startup database method.Syntax-->**On Startup database method**<!-- END REF-->
<!--REF #_command_.On Startup database method.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.On Startup database method.Summary-->The On Startup database method is called once when you open a database.<!-- END REF-->

This occurs in the following 4D environments:

* 4D in local mode
* 4D in remote mode (on the client side, after the connection has been accepted by 4D Server)
* 4D application compiled and merged with 4D Volume Desktop

**Note**: The On Startup database method is NOT invoked by 4D Server.

The On Startup database method is automatically invoked by 4D; unlike project methods, you cannot call this database method yourself by programming. You can however execute it from the Method editor. You can also use subroutines. 

The On Startup database method is the perfect place to:

* Initialize interprocess variables that you will use during the whole working session.
* Start processes automatically when a database is opened.
* Load Preferences or Settings saved for this purpose during the previous working session.
* Prevent the opening of the database if a condition is not met (i.e., missing system resources) by explicitly calling [QUIT 4D](quit-4d.md).
* Perform any other actions that you want to be performed automatically each time a database is opened.

However, we strongly recommend that you do NOT launch print jobs from the **On Startup database method**. 

#### Example 

See the example in the [Semaphore](semaphore.md) section.  

#### See also 

*Database Methods*  
[On Exit database method](on-exit-database-method.md)  
[QUIT 4D](quit-4d.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 905263 |
| Thread safe | &cross; |


