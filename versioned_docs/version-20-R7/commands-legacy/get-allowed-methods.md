---
id: get-allowed-methods
title: GET ALLOWED METHODS
slug: /commands/get-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.GET ALLOWED METHODS.Syntax-->**GET ALLOWED METHODS** ( *methodsArray* )<!-- END REF-->
<!--REF #_command_.GET ALLOWED METHODS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| methodsArray | Text array | &#8592; | Array of method names |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET ALLOWED METHODS.Summary-->The **GET ALLOWED METHODS** command returns, in *methodsArray*, the names of methods that can be used to write formulas.<!-- END REF--> These methods are listed at the end of the list of commands in the editor. 

By default, methods cannot be used in the Formula editor. Methods must be explicitly authorized using the [SET ALLOWED METHODS](../commands/set-allowed-methods.md) command. If this command has not been executed, **GET ALLOWED METHODS** returns an empty array.  
  
**GET ALLOWED METHODS** returns exactly what was passed to the [SET ALLOWED METHODS](../commands/set-allowed-methods.md) command, i.e. a string array (the command creates and sizes the array). Also, if the wildcard (@) character is used to set a group of methods, the string containing the @ character is returned (and not the names of the methods of the group). 

This command is useful for storing the settings of the current set of authorized methods before the execution of a formula in a specific context (for instance, a quick report). 

#### Example 

This example authorizes a set of specific methods to create a report: 

```4d
  //Store current parameters
 GET ALLOWED METHODS(methodsArray)
 
  //Define methods for quick report
 methodsarr_Reports{1}:="Reports_@"
 SET ALLOWED METHODS(methodsarr_Reports)
 QR REPORT([People];"MyReport")
 
  //Re-establish current parameters
 SET ALLOWED METHODS(methodsArray)
```

#### See also 

[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 908 |
| Thread safe | &check; |
| Forbidden on the server ||


