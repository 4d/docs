---
id: method-open-path
title: METHOD OPEN PATH
slug: /commands-legacy/method-open-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD OPEN PATH.Syntax-->**METHOD OPEN PATH** ( *path* {; *line*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD OPEN PATH.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text | &#x1F852; | Path of method to open |
| line | Number | &#x1F852; | Line number |
| * | Operator | &#x1F852; | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD OPEN PATH.Summary-->The **METHOD OPEN PATH** command opens, in the 4D Method editor, the method whose internal pathname is passed in the *path* parameter.<!-- END REF-->

The command is asynchronous, it returns immediately to the calling method and does not wait for the method editor to be open. 

This command can open all method types and class functions. For more details, see *Path syntax*.

The method must already exist. If the *path* parameter does not correspond to an existing method, the error -9801 "Cannot open method" is returned.

You can execute this command from a component, but in this case, you must pass the *\** parameter because access to the component code is read-only. If you omit the *\** parameter in this context, the error -9763 is generated

#### See also 

*Design Object Access Commands*  
[METHOD Get path](method-get-path.md)  