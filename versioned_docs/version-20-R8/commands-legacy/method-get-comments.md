---
id: method-get-comments
title: METHOD GET COMMENTS
slug: /commands/method-get-comments
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET COMMENTS.Syntax-->**METHOD GET COMMENTS** ( *path* ; *comments* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET COMMENTS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text, Text array | &#8594;  | Text or Text array containing one or more method path(s) |
| comments | Text, Text array | &#8592; | Documentation of designated method(s) |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD GET COMMENTS.Summary-->The **METHOD GET COMMENTS** command returns, in the *comments* parameter, the documentation of the method(s) designated by the *path* parameter.<!-- END REF-->

The documentation retrieved by this command is displayed in the 4D Explorer (not to be confused with lines of comments in the code that are retrieved using [METHOD GET CODE](method-get-code.md)). 

It contains:

* markdown text in project databases
* styled text in binary databases

![](../assets/en/commands/pict4968699.en.png)

This documentation can be generated for methods ot type triggers, project methods, form methods, database methods, and classes. 

**Note:** Forms and form methods share the same documentation.

You can use two types of syntaxes, based either on text arrays, or text variables:  

```4d
 var tVpath : Text // text variables
 var tVcomments : Text
 METHOD GET COMMENTS(tVpath;tVcomments) // documentation of a single method
```

```4d
 ARRAY TEXT(arrPaths;0) // text arrays
 ARRAY TEXT(arrComments;0)
 METHOD GET COMMENTS(arrPaths;arrComments) // documentation of several methods
```

You cannot mix the two syntaxes.

If the command is executed from a component, it applies by default to the component methods. If you pass the *\** parameter, it accesses the methods of the host database.

#### See also 

[METHOD SET COMMENTS](method-set-comments.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1189 |
| Thread safe | &cross; |


