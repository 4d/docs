---
id: paths
title: Pathnames
---

File and Folder functions, properties, and commands allow you to handle files and folders as objects. This makes file and folder management powerful and flexible. For example, to create a new file in the current user's Documents folder, you can write:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

In addition, file and folder objects support `fileSystems`, which provide contextual path to main application folders.


## Filesystem pathnames

4D accepts several `filesystem` pathnames that designate specific 4D folders with variable location on macOS and Windows. Filesystem pathnames are useful for two main reasons:

- Independence: You can move your solution from one place to another regardless of the OS, without having to worry about paths,
- Security: No code can access elements located above the file system root on the disk (sandboxing).

The following filesystem pathnames are supported:

| filesystem   | Designates                                             |
| ------------ | ------------------------------------------------------ |
| "/DATA"      | Current data folder                                    |
| "/LOGS"      | Logs folder                                            |
| "/PACKAGE"   | Project root folder (with or without 4dbase extension) |
| "/PROJECT"   | Project folder                                         |
| "/RESOURCES" | Current project resources folder                       |
| "/SOURCES"   | Current project sources folder                         |

## POSIX syntax

The POSIX syntax is supported on all platforms. **POSIX syntax is recommended** since it is the most flexible. It is used by default (returned by [file.path](../API/FileClass.md#path) and [folder.path](../API/FolderClass.md#path) properties).

With this syntax:

- folders are separated by "/"
- absolute pathnames start with a "/"
- to move up one folder in a relative path, use "../" in front of the pathname (for security, you cannot move up the filesystem).

In POSIX syntax, you will generally use `filesystem` pathnames with [`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands, for example:

```4d
$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```




## Platform-specific syntax

Platform-specific syntax depends on the operating system on which the command is executed. Note that when creating a file or folder object with this syntax, you must declare it using the `fk platform path` constant as parameter.

### Windows

The following patterns are supported:

- folder separators are "\"
- the text contains ":" and "\" as the second and third character,
- the text starts with "\\".

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Windows pathnames and escape sequences

The 4D language allows the use of [escape sequences](quick-tour.md#escape-sequences). Escape sequences begin with a backslash `\`, followed by a character. For example, `\t` is the escape sequence for the `Tab` character.

Since the `\` character is also used as the separator in pathnames in Windows, you need to enter a double `\\` in windows pathnames.

### macOS

The following patterns are supported (HFS+ syntax):

- folder separators are ":"
- the path must not start with a ":"

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() //a volume must be called Monday
```

## Absolute and relative pathnames

### `File` and `Folder` constructors

[`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands only accept **absolute pathnames**. Relative pathnames are not supported and will return errors. For example, the following code is not allowed:

```4d
    //ERROR
$ko:=Folder("myFolder").create() //relative pathname with constructor
```

If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use `filesystems` (see above). Sie schreiben zum Beispiel:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //folder created at the structure level
$okFile:=File("/DATA/Prefs/tempo.txt").create() //file created in the data folder
```

### `.file()` and `.folder()` folder functions

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. Beispiel:

```4d
  //to reference a "Picture" folder within the user documents folder
$userImages:=Folder(fk documents folder).folder("Pictures")
  //to create a folder on the desktop
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Absolute pathnames are not supported and will return errors.


## Beispiele

The flexibility of file and folder functions offers you various possibilities for handling files and folders, like in the following examples:

```4d
$f:=Folder(fk desktop folder).folder("archive/jan2019")

$f2:=Folder("/DATA/archive/jan2019").file("total.txt")

$f3:=Folder("/DATA/archive/jan2019")

$f4:=File("/DATA/info.txt")

$f5:=File("c:\\archives\\local\\jan2019.txt";fk platform path)

$f6:=File(fk backup log file)
```