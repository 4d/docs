---
id: path-to-object
title: Path to object
slug: /commands/path-to-object
displayed_sidebar: docs
---

<!--REF #_command_.Path to object.Syntax-->**Path to object** ( *path* {; *pathType*} ) : Object<!-- END REF-->
<!--REF #_command_.Path to object.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text | &#8594;  | Pathname |
| pathType | Integer | &#8594;  | Type of path syntax: System (default) or Posix |
| Function result | Object | &#8592; | Object describing the path contents |

<!-- END REF-->

#### Description 

<!--REF #_command_.Path to object.Summary-->The **Path to object** command returns an object containing the specific properties of the *path* you passed in parameter.<!-- END REF--> 

By default, if you omit the *pathType* parameter, it will be assumed that you passed a system *path*, containing system separators ("\\" on Windows, ":" on macOS). If you passed a Posix *path* containing Posix separators ("/") or want to express the path type, pass one of the following constants in the *pathType* parameter:

| Constant       | Type    | Value | Comment                                                                            |
| -------------- | ------- | ----- | ---------------------------------------------------------------------------------- |
| Path is POSIX  | Integer | 1     | The path is expressed using the Posix syntax                                       |
| Path is system | Integer | 0     | (Default) The path is expressed using the current system syntax (Windows or macOS) |

The command returns an object resulting from parsing the *path*. The following properties are available:

| **Property** | **Type** | **Description**                                                                                      |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------- |
| parentFolder | Text     | Directory information for the path. The last character is always a folder separator.                 |
| name         | Text     | Final file or folder name of the specified path, without extension.                                  |
| extension    | Text     | Extension of the final file or folder name. Always starts with ".". Empty string "" if no extension. |
| isFolder     | Boolean  | True if name is a folder name, false otherwise (default is false)                                    |

It will be assumed that you passed a folder path if the last character of *path* is a separator corresponding to the path type (for example "\\" on Windows). Otherwise, it will be assumed that you passed a file name.   
The extension, if not empty, is returned regardless of whether the path represents a file or a folder. In either case, you need to concatenate the name and extension in order to retrieve the full name.

Note that **Path to object** only handles strings. It neither checks if the path is valid with regards to the path type, nor the actual existence of any file or folder. 

#### Example 1 

The following examples show various results with file paths:

```4d
 var $o : Object
 $o:=Path to object("C:\\first\\second\\fileZ") //on Windows
  //$o.parentFolder="C:\\first\\second\\"
  //$o.name="fileZ"
  //$o.extension=""
  //$o.isFolder=false
```

```4d
 var $o : Object
 $o:=Path to object("osx:Users:john:Documents:Comments.text)  //on macOS
  //$o.parentFolder="osx:Users:john:Documents:"
  //$o.name="Comments"
  //$o.extension=".text"
  //$o.isFolder=false
```

```4d
 var $o : Object
 $o:=Path to object("\\images\\jan\\pict1.png";Path is system) //on Windows
  //$o.parentFolder="\\images\\jan\\"
  //$o.name="pict1"
  //$o.extension=".png"
  //$o.isFolder=false
```

Defining a path to a folder:

```4d
 var $o : Object
 $o:=Path to object("osx:Users:oscargoldman:Desktop:Databases:") //macOS
  //$o.parentFolder="osx:Users:oscargoldman:Desktop:"
  //$o.name="Databases"
  //$o.extension=""
  //$o.isFolder=True
```

```4d
 var $o : Object
 $o:=Path to object("C:\\4D\\Main\\216410\\64\\4D\\4D.user\\")  //windows
  //$o.parentFolder="C:\\4D\\Main\\216410\\64\\4D\\"
  //$o.name="4D"
  //$o.extension=".user"
  //$o.isFolder=true
```

```4d
 var $o : Object
 $o:=Path to object("/first/second.bundle/";Path is POSIX)
  //$o.parentFolder="/first/"
  //$o.name="second"
  //$o.extension=".bundle"
  //$o.isFolder=true
```

If the path is a root directory, *parentFolder* is empty:

```4d
 var $o : Object
 $o:=Path to object("C:\\")  //on windows
  //$o.parentFolder=""
  //$o.name="c:"
  //$o.extension=""
  //$o.isFolder=true
```

```4d
 var $o : Object
 $o:=Path to object("osx:") //on macOS
  //$o.parentFolder=""
  //$o.name="osx"
  //$o.extension=""
  //$o.isFolder=true
```

If the last portion of the path is ".something", it is considered as a file name:

```4d
 var $o : Object
 $o:=Path to object("/folder/.invisible";Path is POSIX)
  //$o.parentFolder="/folder/"
  //$o.name=".invisible"
  //$o.extension=""
  //$o.isFolder=false
```

#### Example 2 

You can combine this command with the [Object to path](object-to-path.md) to rename a file in a path:

```4d
 var $o : Object
 var $path : Text
 $o:=Path to object("C:\\4D\\resources\\images\\4D.jpg")
  //$o.parentFolder="C:\\4D\\resources\\images\\"
  //$o.name="4D"
  //$o.extension=".jpg"
  //$o.isFolder=false
 
 $o.name:="4DOld"
 $path:=Object to path($o)
  //$path="C:\4D\resources\images\4DOld.jpg"
```

#### Example 3 

You want to know the number of subfolders contained in a path:

```4d
 var $o : Object
 var $path : Text
 var $vCount : Integer
 $path:=Select folder //let the user select a folder
 $o:=Path to object($path)
 Repeat
    $o:=Path to object($o.parentFolder)
    $vCount:=$vCount+1
 Until($o.parentFolder="")
 ALERT("The path depth is: "+String($count))
```

#### See also 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Convert path system to POSIX](convert-path-system-to-posix.md)  
[File](../commands/file.md)  
[Folder](../commands/folder.md)  
[Object to path](object-to-path.md)  
[Test path name](test-path-name.md)  