---
id: method-set-code
title: METHOD SET CODE
slug: /commands/method-set-code
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET CODE.Syntax-->**METHOD SET CODE** ( *path* ; *code* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET CODE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text, Text array | &#8594;  | Text or Text array containing one or more method path(s) |
| code | Text, Text array | &#8594;  | Code of designated method(s) |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD SET CODE.Summary-->The **METHOD SET CODE** command modifies the code of the method(s) designated by the *path* parameter with the contents passed in the *code* parameter.<!-- END REF--> 

The command can access the existing code of all types of methods: database methods, class definitions, triggers, project methods, form methods and object methods.

If a method does not exist, it is created with the *code* contents.

**Note for projects:** 

* Creating a new method with this command is only possible for database methods, triggers, and project methods.
* The code is saved with or without tokens in newly created projects depending on the *Include tokens in project source files* option in the Preferences.

You can use two types of syntaxes, based either on text arrays, or text variables:

```4d
 var tVpath : Text // text variables
 var tVcode : Text
 METHOD SET CODE(tVpath;tVcode) // code of a single method
```

```4d
 ARRAY TEXT(arrPaths;0) // text arrays
 ARRAY TEXT(arrCodes;0)
 METHOD SET CODE(arrPaths;arrCodes) // code of several methods
```

You cannot mix the two syntaxes.

If you pass an invalid pathname, the command does nothing.

When **METHOD SET CODE** is called, the method attributes are reset by default. However, if the first line of the method *code* contains valid metadata (expressed in JSON), they are used to specify the method attributes and the first line is not inserted. Example of metadata:

```4d
  // %attributes = {"invisible":true,"lang":"fr","folder":"Security"}
```

**Note:** These metadata are generated automatically by the [METHOD GET CODE](method-get-code.md) command. For more information about supported attributes, refer to the description of the [METHOD SET ATTRIBUTES](method-set-attributes.md) command.

Concerning the "folder" property of the metadata:

* When this property is present and corresponds to a valid folder, the method is placed in its parent folder,
* If this property is not present or if the folder does not exist, the command makes no changes at the parent folder level,
* When this property contains an empty string, the method is placed at the root level.

You can execute this command from a component, but in this case, you must pass the *\** parameter because access to the component code is read-only. If you omit the *\** parameter in this context, the error -9763 is generated.

#### Example 

This example exports and imports all the project methods of an application:

```4d
 $root_t:=Get 4D folder(Database folder)+"methods"+Folder separator
 ARRAY TEXT($fileNames_at;0)
 CONFIRM("Import or export methods?";"Import";"Export")
 
 If(OK=1)
    DOCUMENT LIST($root_t;$fileNames_at)
    For($loop_l;1;Size of array($fileNames_at))
       $filename_t:=$fileNames_at{$loop_l}
       DOCUMENT TO BLOB($root_t+$filename_t;$blob_x)
       METHOD SET CODE($filename_t;BLOB to text($blob_x;UTF8 text without length))
    End for
 Else
    If(Test path name($root_t)#Is a folder)
       CREATE FOLDER($root_t;*)
    End if
    METHOD GET PATHS(Path project method;$fileNames_at)
    METHOD GET CODE($fileNames_at;$code_at)
    For($loop_l;1;Size of array($fileNames_at))
       $filename_t:=$fileNames_at{$loop_l}
       SET BLOB SIZE($blob_x;0)
       TEXT TO BLOB($code_at{$loop_l};$blob_x;UTF8 text without length)
       BLOB TO DOCUMENT($root_t+$filename_t;$blob_x)
    End for
 End if
 SHOW ON DISK($root_t)
```

#### See also 

[METHOD GET CODE](method-get-code.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1194 |
| Thread safe | &cross; |


