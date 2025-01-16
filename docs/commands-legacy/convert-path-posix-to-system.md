---
id: convert-path-posix-to-system
title: Convert path POSIX to system
slug: /commands/convert-path-posix-to-system
displayed_sidebar: docs
---

<!--REF #_command_.Convert path POSIX to system.Syntax-->**Convert path POSIX to system** ( *posixPath* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Convert path POSIX to system.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| posixPath | Text | &#8594;  | POSIX pathname |
| * | Operator | &#8594;  | Encoding option |
| Function result | Text | &#8592; | Pathname expressed in system syntax |

<!-- END REF-->

#### Description 

<!--REF #_command_.Convert path POSIX to system.Summary-->The **Convert path POSIX to system** command converts a pathname expressed with the POSIX (Unix) syntax into a pathname expressed with the system syntax.<!-- END REF--> 

Pass the complete pathname of a file or folder in the *posixPath* parameter, expressed with the POSIX syntax. This path must be absolute (it must begin with the "/" character). You must pass a disk path; it is not possible to pass a network path (beginning, for example, with ftp://ftp.mysite.fr).

The command returns the complete pathname of the file or folder expressed in the current system syntax. 

The optional *\** parameters can be used to indicate whether the *posixPath* parameter is encoded. If this is the case, you must pass this parameter, otherwise the conversion will not be valid. The command returns the pathname without encoding. 

#### Example 1 

Examples under Mac OS:

```4d
 $path:=Convert path POSIX to system("/Volumes/machd/file 2.txt")
  //returns "machd:file 2.txt"
 $path:=Convert path POSIX to system("/Volumes/machd/file%202.txt";*)
  //returns "machd:file 2.txt"
 $path:=Convert path POSIX to system("/file 2.txt")
  //returns "machd:file 2.txt" if machd is the startup disk
```

#### Example 2 

Examples under Windows:

```4d
 $path:=Convert path POSIX to system("c:/docs/file 2.txt")
  //returns "c:\\docs\\file 2.txt"
 $path:=Convert path POSIX to system("c:/docs/file%202.txt";*)
  //returns "c:\\docs\\file 2.txt"
```

#### See also 

[Convert path system to POSIX](convert-path-system-to-posix.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1107 |
| Thread safe | &check; |


