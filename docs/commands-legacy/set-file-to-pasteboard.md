---
id: set-file-to-pasteboard
title: SET FILE TO PASTEBOARD
slug: /commands/set-file-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET FILE TO PASTEBOARD.Syntax-->**SET FILE TO PASTEBOARD** ( *file* {; *} )<!-- END REF-->
<!--REF #_command_.SET FILE TO PASTEBOARD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| file | Text | &#8594;  | File name or complete pathname of file |
| * | Operator | &#8594;  | If passed = add; If omitted = replace |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET FILE TO PASTEBOARD.Summary-->The SET FILE TO PASTEBOARD command adds the complete pathname of the file passed in the *file* parameter.<!-- END REF--> This command can be used to set up interfaces allowing the drag and drop of 4D objects to files on the desktop for example.

In the *file* parameter, you can pass either a complete pathname or a simple file name (without a pathname). In the latter case, the file must be located next to the database structure file.

The command accepts the star *\** as an optional parameter. By default, when this parameter is omitted, the command replaces the contents of the pasteboard by the last pathname specified by *file*. If you pass this parameter, the command adds the *file* to the pasteboard. This way it can contain a "stack" of file pathnames. In both cases, if data other than pathnames was present in the pasteboard, it is erased.

**Note:** The pasteboard is in read-only mode during the On Drag Over form event. It is therefore not possible to use this command in that context.

#### See also 

[Get file from pasteboard](get-file-from-pasteboard.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 975 |
| Thread safe | &check; |
| Forbidden on the server ||


