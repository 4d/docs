---
id: paths
title: パス名
---

File および Folder の関数、プロパティ、コマンドにより、ファイルやフォルダーをオブジェクトとして扱うことができます。 これにより、ファイルやフォルダーの管理を強力かつ柔軟におこなえます。 たとえば、カレントユーザーのドキュメントフォルダーに新しいファイルを作成する場合、次のように書くことができます:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

さらに、ファイルおよびフォルダーオブジェクトは、アプリケーションの主なフォルダーへのコンテキストパスを提供する `filesystem` をサポートしています。


## filsystemパス名

4D は、macOS および Windows上で様々な場所にある特定の 4Dフォルダーを指定するいくつかの "filesystem" パス名を受け取ります。 filesystemパス名の使用は、主に二つの理由から有用です:

- 独立性: OS の違いやパスの心配なく、ソリューションを一つの場所から他の場所へと移せるようになります。
- 安全性: コードにより、ディスク上のファイルシステムのルートより上の階層にある要素へアクセスすることはできません (サンドボックス化)。

以下の filesystemパス名がサポートされています:

| filesystem   | 指定先                               |
| ------------ | --------------------------------- |
| "/DATA"      | カレントデータフォルダー                      |
| "/LOGS"      | Logs フォルダー                        |
| "/PACKAGE"   | データベースフォルダー (拡張子 4dbase の有無に関わらず) |
| "/PROJECT"   | Project フォルダー                     |
| "/RESOURCES" | カレントデータベースの Resources フォルダー       |
| "/SOURCES"   | カレントプロジェクトの Sources フォルダー         |

## POSIX シンタックス

POSIX シンタックスはすべてのプラットフォームでサポートされています。 もっとも柔軟性に優れるため、**POSIX シンタックスの使用が推奨されています**。 POSIX シンタックスはデフォルトで使用されています ([file.path](../API/FileClass.md#path) および [folder.path](../API/FolderClass.md#path) プロパティによって返されます)。

このシンタックスでは:

- フォルダーは "/" で区切られます。
- 絶対パス名は "/" で始まります。
- 相対パスにおいて 1階層上に移動するには、パス名の前に "../" を使用します (セキュリティ上の理由から、filesystem から上へは移動できません)。

POSIX シンタックスでは一般的に、[`File`](../API/FileClass.md#file) および [`Folder`](../API/FolderClass.md#folder) コマンドに `filesystem` パス名を使用します。例:

```4d
$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```


## プラットフォーム特有のシンタックス

プラットフォーム特有のシンタックスは、コマンドが実行される OS に依存します。 このシンタックスを使用して File または Folder オブジェクトを作成するとき、`fk platform path` 定数を引数として使用してそれを宣言する必要がある点に注意してください。

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

#### Entering Windows pathnames and escape sequences

The 4D [code editor](../code-editor/write-class-method.md) allows the use of escape sequences. An escape sequence is a set of characters that are used to replace a "special" character. The sequence begins with a backslash `\`, followed by a character. For example, `\t` is the escape sequence for the `Tab` character.

The `\` character is also used as the separator in pathnames in Windows. In general, 4D will correctly interpret Windows pathnames that are entered in the code editor by replacing single backslashes `\` with double backslashes ``\\`. For example,``C:\Folder`will become`C:\\Folder`.

However, if you write `C:\MyDocuments\New`, 4D will display `C:\\MyDocuments\New`. In this case, the second `\` is incorrectly interpreted as `\N` (an existing escape sequence). You must therefore enter a double `\\` when you want to insert a backslash before a character that is used in one of the escape sequences recognized by 4D.

The following escape sequences are recognized by 4D:

| エスケープシーケンス                   | 意味する文字              |
| ---------------------------- | ------------------- |
| `\n`                        | LF (New line)       |
| `\t`                        | HT (Horizontal tab) |
| `\r`                        | CR (改行)             |
| ``\\`|``&#96; (Backslash) |                     |
| `\"`                        | `"` (Quotes)        |

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

If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use `filesystems` (see above). たとえば:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //folder created at the structure level
$okFile:=File("/DATA/Prefs/tempo.txt").create() //file created in the data folder
```

### `.file()` and `.folder()` folder functions

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. 例:

```4d
  //to reference a "Picture" folder within the user documents folder
$userImages:=Folder(fk documents folder).folder("Pictures")
  //to create a folder on the desktop
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Absolute pathnames are not supported and will return errors.


## 例題

The flexibility of file and folder functions offers you various possibilities for handling files and folders, like in the following examples:

```4d
$f:=Folder(fk desktop folder).folder("archive/jan2019")

$f2:=Folder("/DATA/archive/jan2019").file("total.txt")

$f3:=Folder("/DATA/archive/jan2019")

$f4:=File("/DATA/info.txt")

$f5:=File("c:\\archives\\local\\jan2019.txt";fk platform path)

$f6:=File(fk backup log file)
```