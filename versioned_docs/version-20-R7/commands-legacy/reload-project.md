---
id: reload-project
title: RELOAD PROJECT
slug: /commands/reload-project
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD PROJECT.Syntax-->**RELOAD PROJECT**<!-- END REF-->
<!--REF #_command_.RELOAD PROJECT.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.RELOAD PROJECT.Summary-->The **RELOAD PROJECT** command reloads the source file definitions (methods, forms, etc.) from the disk for the running project in the current 4D environment.<!-- END REF--> It can only be used with 4D projects executed in **interpreted mode**. The command execution is asynchronous. 

Usually, a project is automatically reloaded when the 4D application detects that a source file has been added, modified, or deleted. It is the case when a file was directly edited from the 4D Developer IDE, or after the 4D application window is moved from the background to the foreground of the OS. 

Calling **RELOAD PROJECT** command is necessary when the automatic project reload mechanisms could not apply, i.e. in the following contexts:

* the project is run by 4D Server or 4D Developer and source files are modified by an external means, for example by a *pull* action from a source control repository; and you cannot (or you don't want to) manually move the application window, for example because you want to to have an automatic execution.
* the project is run by 4D Server in headless mode and source files have been modified.

The command does nothing if the Design environnement is not opened.

When the command is called from:

* a 4D Developer connected to a 4D Server on the same machine, it is executed on 4D Server first, then on the 4D Developer side.
* a 4D Developer connected remotely to a 4D Server, it is executed on 4D Server only.
* a 4D single-user or a 4D Server, it is executed locally.

#### See also 

*Developing a project*  