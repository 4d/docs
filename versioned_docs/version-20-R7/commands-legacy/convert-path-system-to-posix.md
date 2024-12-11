---
id: convert-path-system-to-posix
title: Convert path system to POSIX
slug: /commands/convert-path-system-to-posix
displayed_sidebar: docs
---

<!--REF #_command_.Convert path system to POSIX.Syntax-->**Convert path system to POSIX** ( *systemPath* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Convert path system to POSIX.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| systemPath | Text | &#8594;  | Relative or absolute pathname expressed in system syntax |
| * | Operator | &#8594;  | Encoding option |
| Function result | Text | &#8592; | Absolute pathname expressed in POSIX syntax |

<!-- END REF-->

#### Description 

<!--REF #_command_.Convert path system to POSIX.Summary-->The Convert path system to POSIX command converts a pathname expressed with the system syntax as a pathname expressed with the POSIX (Unix) syntax.<!-- END REF-->

Pass the pathname for a file or folder in the *systemPath* parameter, expressed with the system syntax (Mac OS or Windows). This path may be absolute or relative to the database folder (folder containing the database structure file). It is not mandatory that the elements of the path actually exist on the disk at the time the command is executed (the command does not test the validity of the pathname). 

The command returns the complete pathname of the file or folder expressed in the POSIX syntax. The command always returns an absolute pathname, regardless of the type of path passed in *systemPath*. If you passed a relative pathname in *systemPath*, 4D completes the value returned by adding the pathname of the database folder. 

The optional *\** parameter can be used to specify the encoding of the POSIX path. By default, Convert path system to POSIX does not encode the special characters of the POSIX path. If you pass the \* parameter, the special characters are translated (for example, "My folder" becomes "My%20folder").

#### Example 1 

Examples under OS X

```4d
 $path:=Convert path system to POSIX("machd:file 2.txt")
  //machd is the startup disk
  //returns "/file 2.txt"
 $path:=Convert path system to POSIX("disk2:file 2.txt")
  //disk2 is an additional disk (not the startup)
  //returns "/Volumes/disk2/file 2.txt"
 $path:=Convert path system to POSIX("machd:file 2.txt";*)
  //returns "/file%202.txt"
 $path:=Convert path system to POSIX(":resources:images") //relative path
  //returns "/User/mark/Documents/videodatabase/resources/images"
 $path:=Convert path system to POSIX("resources:images") //absolute path
  //returns "/resources/images"
```

#### Example 2 

Example under Windows

```4d
 $path:=Convert path system to POSIX("c:\docs\file 2.txt")
  //returns "c:/docs/file 2.txt"
 $path:=Convert path system to POSIX("\\srv\tempo\file.txt")
  //returns "//srv/tempo/file.txt"
```

#### See also 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  
[Test path name](test-path-name.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1106 |
| Thread safe | &check; |
| Forbidden on the server ||


