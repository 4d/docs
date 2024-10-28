---
id: method-set-comments
title: METHOD SET COMMENTS
slug: /commands/method-set-comments
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET COMMENTS.Syntax-->**METHOD SET COMMENTS** ( *path* ; *comments* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET COMMENTS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text, Text array | &#8594;  | Text or Text array containing one or more method path(s) |
| comments | Text, Text array | &#8594;  | Documentation of designated method(s) |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.METHOD SET COMMENTS.Summary-->The **METHOD SET COMMENTS** command replaces the documentation of the method(s) designated by the *path* parameter by those specified in the *comments* parameter.<!-- END REF-->

The documentation modified by this command is displayed in the 4D Explorer (not to be confused with lines of comments in the code). It contains:

* markdown text in project databases,
* styled text in binary databases.

This documentation can be generated for methods ot type triggers, project methods, form methods, database methods, and classes. 

**Note:** Forms and form methods share the same documentation.

You can use two types of syntaxes, based either on text arrays, or text variables:  

```4d
 var tVpath : Text // text variables
 var tVcomments : Text
 METHOD SET COMMENTS(tVpath;tVcomments) // documentation for a single method
```

```4d
 ARRAY TEXT(arrPaths;0) // text arrays
 ARRAY TEXT(arrComments;0)
 METHOD SET COMMENTS(arrPaths;arrComments) // documentation for several methods
```

You cannot mix the two syntaxes.

If you pass an invalid pathname, an error is generated.

You can execute this command from a component, but in this case, you must pass the *\** parameter because access to the component code is read-only. If you omit the *\** parameter in this context, the error -9763 is generated

#### Example 

Add a modification date to an existing trigger documentation:

```4d
 METHOD GET COMMENTS("[trigger]/Table1";$comments)
 $comments:="Modif:"+String(Current date)+"\r"+$comments
 METHOD SET COMMENTS("[trigger]/Table1";$comments)
```

#### See also 

[METHOD GET COMMENTS](method-get-comments.md)  