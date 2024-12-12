---
id: method-get-names
title: METHOD GET NAMES
slug: /commands/method-get-names
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET NAMES.Syntax-->**METHOD GET NAMES** ( *arrNames* {; *filter*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET NAMES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrNames | Text array | &#8592; | Array of project method names |
| filter | Text | &#8594;  | Name filter |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD GET NAMES.Summary-->The **METHOD GET NAMES** command fills the *arrNames* array with the names of project methods created in the application.<!-- END REF-->

By default, all methods are listed. You can restrict this list by passing a comparison string in the *filter* parameter: in this case, the command only returns methods whose name matches the filter. You must use the @ character in order to set filters of the "starts with", "ends with" or "contains" type. 

If this command is executed from a component, it returns by default the names of the component project methods. If you pass the *\** parameter, the array contains the host database project methods.

**Note:** Methods placed in the trash are not listed. 

#### Example 

Here are a few typical examples of use:

```4d
  // List of all project methods of the database
 METHOD GET NAMES(t_Names)
 
  //  List of project methods beginning with a specific string
 METHOD GET NAMES(t_Names;"web_@")
 
  // List of project methods in the host database beginning with a specific string
 METHOD GET NAMES(t_Names;"web_@";*)
```
