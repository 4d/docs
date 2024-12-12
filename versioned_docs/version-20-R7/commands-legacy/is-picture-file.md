---
id: is-picture-file
title: Is picture file
slug: /commands/is-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.Is picture file.Syntax-->**Is picture file** ( *filePath* {; *} ) : Boolean<!-- END REF-->
<!--REF #_command_.Is picture file.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| filePath | Text | &#8594;  | File pathname |
| * | Operator | &#8594;  | Validate data |
| Function result | Boolean | &#8592; | True = filePath designates a picture file; otherwise, False |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is picture file.Summary-->The Is picture file command tests the file designated by the *filePath* parameter and returns True if it is a valid picture file.<!-- END REF--> The command returns False if the file is not of the picture type or if it is not found. 

Pass the pathname of the picture file to be tested in the *filePath* parameter. The path must be expressed with the system syntax. You can pass an absolute pathname or a pathname relative to the database structure file. If you pass an empty string (""), the command returns False. 

If you do not pass the *\** parameter, the command tests the file by looking for its extension among the list of available codecs. If you want to be able to test files without extensions or to carry out a more thorough verification, pass the *\** parameter. In this case, the command makes additional tests: it loads and inspects the file header and queries the codecs in order to validate the picture. This syntax slows command execution.

**Note:** The command returns True for PDF files under Windows and EMF files under Mac OS. 

#### See also 

[PICTURE CODEC LIST](picture-codec-list.md)  