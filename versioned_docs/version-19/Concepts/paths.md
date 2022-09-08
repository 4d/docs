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

|filesystem|Designates|
|---|---|
|"/DATA"|Current data folder|
|"/LOGS"|Logs folder|
|"/PACKAGE"|Database folder (with or without 4dbase extension)|
|"/PROJECT"|Project folder|
|"/RESOURCES"|Current database resources folder|
|"/SOURCES"|Current project resources folder|

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
- the text contains ':' and '\' as the second and third character,
- the text starts with "\\".

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Entering Windows pathnames and escape sequences

The 4D [code editor](../code-editor/write-class-method.md) allows the use of escape sequences. An escape sequence is a set of characters that are used to replace a "special" character. The sequence begins with a backslash `\`, followed by a character. For example, `\t` is the escape sequence for the `Tab` character.

The `\` character is also used as the separator in pathnames in Windows. In general, 4D will correctly interpret Windows pathnames that are entered in the code editor by replacing single backslashes `\` with double backslashes `\\`. For example, `C:\Folder` will become `C:\\Folder`.

However, if you write `C:\MyDocuments\New`, 4D will display `C:\\MyDocuments\New`. In this case, the second `\` is incorrectly interpreted as `\N` (an existing escape sequence). You must therefore enter a double `\\` when you want to insert a backslash before a character that is used in one of the escape sequences recognized by 4D.

The following escape sequences are recognized by 4D:

|Escape sequence|Character replaced|
|---|---|
|`\n`|LF (New line)|
|`\t`|HT (Horizontal tab)|
|`\r`|CR (Carriage return)|
|`\\`|`\` (Backslash)|
|`\"`|`"` (Quotes)|

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

If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use `filesystems` (see above). For example, you can write:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //folder created at the structure level
$okFile:=File("/DATA/Prefs/tempo.txt").create() //file created in the data folder
```

### `.file()` and `.folder()` folder methods

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. For example:

```4d
  //to reference a "Picture" folder within the user documents folder
$userImages:=Folder(fk documents folder).folder("Pictures")
  //to create a folder on the desktop
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Absolute pathnames are not supported and will return errors.


## Examples

The flexibility of file and folder functions offers you various possibilities for handling files and folders, like in the following examples:

```4d
$f:=Folder(fk desktop folder).folder("archive/jan2019")
 
$f2:=Folder("/DATA/archive/jan2019").file("total.txt")
 
$f3:=Folder("/DATA/archive/jan2019")
 
$f4:=File("/DATA/info.txt")
 
$f5:=File("c:\\archives\\local\\jan2019.txt";fk platform path)
 
$f6:=File(fk backup log file)
```