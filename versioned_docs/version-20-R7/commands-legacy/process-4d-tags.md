---
id: process-4d-tags
title: PROCESS 4D TAGS
slug: /commands/process-4d-tags
displayed_sidebar: docs
---

<!--REF #_command_.PROCESS 4D TAGS.Syntax-->**PROCESS 4D TAGS** ( *inputTemplate* ; *outputResult* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.PROCESS 4D TAGS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| inputTemplate | Text | &#8594;  | Data containing tags to process |
| outputResult | Text | &#8592; | Result from template execution |
| param | Expression | &#8594;  | Parameter(s) passed to template being executed |

<!-- END REF-->

#### Description 

<!--REF #_command_.PROCESS 4D TAGS.Summary-->The **PROCESS 4D TAGS** command causes the processing of 4D transformation tags contained in the *inputTemplate* parameter while (optionally) inserting value(s) using the *param* parameters and returns the result in *outputResult*.<!-- END REF--> For a complete description of these tags, refer to the *4D Transformation Tags* section.

This command lets you execute a "template" type text containing tags and references to 4D expressions and/or variables, and to produce a result depending on the execution context and/or the values passed as parameters.   
For example, you can use this command to generate and save HTML pages based on **semi-dynamic pages** containing 4D transformation tags (without it being necessary for 4D's Web server to be started). You can use it to send e-mail messages in HTML format that contain processing of and/or references to data contained in the database via the 4D Internet Commands. It is possible to process any type of data based on text, such as XML, SVG or multi-style text.

Pass the data containing the tags to be processed in the *inputTemplate* parameter. This parameter can be a field or variable of the Text type. 

All the transformation tags of 4D are supported (*4DTEXT*, *4DHTML, 4DSCRIPT*, *4DLOOP*, *4DEVAL*, etc.).

**Note:** When using the *4DINCLUDE* tag outside the framework of the Web server (Web process):

* with 4D in local mode or 4D Server, the default folder is the folder containing the database structure file,
* with 4D in remote mode, the default folder is the folder containing the 4D application.

The **PROCESS 4D TAGS** command supports an indefinite number of *param* parameters that can be inserted into the executed code. As with project methods, these parameters can contain scalar values of varied types (text, date, time, longint, real, boolean), as well as pointers, objects and collections. You can also use arrays, by means of array pointers. Inside the code processed by the 4D tags, these parameters can be accessed by means of standard arguments ($1, $2, etc.), just like in 4D methods (see example).  
A dedicated set of local variables is defined in the execution context of the **PROCESS 4D TAGS** command. These variables can be written or read during processing.

After command execution, the *outputResult* parameter receives the execution result of the *inputTemplate* parameter, along with the result of the processing of any 4D tags that it contains, when applicable. If *inputTemplate* does not contain any 4D tags or produces an empty string, the contents of *outputResult* is identical to that of *inputTemplate*.

The *outputResult* parameter may be a field or a variable of the Text type.

**Note:** This command never calls the [On Web Authentication database method](on-web-authentication-database-method.md).

#### Example 1 

This example loads a 'template' type document, processes the tags it contains and then stores it:

```4d
 var $inputText_t : Text
 var $outputText_t : Text
 
 $inputText_t:=Document to text(File("/PACKAGE/mytemplate.txt").platformPath)
 PROCESS 4D TAGS($inputText_t;$outputText_t)
 TEXT TO DOCUMENT(File("/PACKAGE/myfile.txt").platformPath;$outputText_t)
```

#### Example 2 

This example generates a text using data of the arrays:

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:=""
 $input:=$input+""
 $input:=$input+" "
 $input:=$input+""
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world"
```

#### See also 

*4D Transformation Tags*  

#### Properties
|  |  |
| --- | --- |
| Command number | 816 |
| Thread safe | &check; |


