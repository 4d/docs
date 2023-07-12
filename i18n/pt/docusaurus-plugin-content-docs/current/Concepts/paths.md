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

| filesystem   | Designa                                                |
| ------------ | ------------------------------------------------------ |
| "/DATA"      | Pasta de dados actual                                  |
| "/LOGS"      | Pasta Logs                                             |
| "/PACKAGE"   | Project root folder (with or without 4dbase extension) |
| "/PROJECT"   | Pasta Project                                          |
| "/RESOURCES" | Current project resources folder                       |
| "/SOURCES"   | Current project sources folder                         |

## Sintaxe POSIX

A sintaxe POSIX é suportada em todas as plataformas. **POSIX syntax is recommended** since it is the most flexible. It is used by default (returned by [file.path](../API/FileClass.md#path) and [folder.path](../API/FolderClass.md#path) properties).

With this syntax:

- as pastas são separadas por "/"
- os nomes de caminho absolutos começam com um "/"
- to move up one folder in a relative path, use "../" in front of the pathname (for security, you cannot move up the filesystem).

In POSIX syntax, you will generally use `filesystem` pathnames with [`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands, for example:

```4d
$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```




## Sintaxe específica da plataforma

A sintaxe específica da plataforma depende do sistema operativo em que o comando é executado. Note that when creating a file or folder object with this syntax, you must declare it using the `fk platform path` constant as parameter.

### Windows

São suportados os seguintes padrões:

- os separadores de pasta são "\"
- the text contains ':' and '\' as the second and third character,
- o texto começa por "\\".

Exemplos com [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Entering Windows pathnames and escape sequences

The 4D language allows the use of [escape sequences](quick-tour.md#escape-sequences). The sequence begins with a backslash `\`, followed by a character. For example, `\t` is the escape sequence for the `Tab` character.

The `\` character is also used as the separator in pathnames in Windows.

### macOS

São suportados os seguintes padrões (sintaxe HFS+):

- os separadores de pasta são ":"
- o caminho não deve começar com um ":"

Exemplos com [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() //a volume deve ser chamado Monday
```

## Absolute and relative pathnames

### `File` and `Folder` constructors

[`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands only accept **absolute pathnames**. Relative pathnames are not supported and will return errors. Por exemplo, o seguinte código não é permitido:

```4d
    //ERROR
$ko:=Folder("myFolder").create() //nome do caminho relativo com construtor
```

If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use `filesystems` (see above). Por exemplo, pode escrever:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //pasta criada ao nível da estrutura
$okFile:=File("/DATA/Prefs/tempo.txt").create() //ficheiro criado na pasta de dados
```

### `.file()` and `.folder()` folder methods

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. Por exemplo:

```4d
  //to reference a "Picture" folder within the user documents folder
$userImages:=Folder(fk documents folder).folder("Pictures")
  //to create a folder on the desktop
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Absolute pathnames are not supported and will return errors.


## Exemplos

The flexibility of file and folder functions offers you various possibilities for handling files and folders, like in the following examples:

```4d
$f:=Folder(fk desktop folder).folder("archive/jan2019")

$f2:=Folder("/DATA/archive/jan2019").file("total.txt")

$f3:=Folder("/DATA/archive/jan2019")

$f4:=File("/DATA/info.txt")

$f5:=File("c:\\archives\\local\\jan2019.txt";fk platform path)

$f6:=File(fk backup log file)
```