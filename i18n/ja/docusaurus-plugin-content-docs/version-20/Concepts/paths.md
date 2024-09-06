---
id: paths
title: パス名
---

File および Folder の関数、プロパティ、コマンドにより、ファイルやフォルダーをオブジェクトとして扱うことができます。 これにより、ファイルやフォルダーの管理を強力かつ柔軟におこなえます。 たとえば、カレントユーザーのドキュメントフォルダーに新しいファイルを作成する場合、次のように書くことができます:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

さらに、ファイルおよびフォルダーオブジェクトは、アプリケーションの主なフォルダーへのコンテキストパスを提供する `filesystem` をサポートしています。


4D は、macOS および Windows上で様々な場所にある特定の 4Dフォルダーを指定するいくつかの "filesystem" パス名を受け取ります。 ファイルシステムパスはコンテキストに基づいて評価され、絶対パスとして返されます。

ファイルシステムパス名の使用は、主に二つの理由から有用です:

- 独立性: OS の違いやパスの心配なく、ソリューションを一つの場所から他の場所へと移せるようになります。
- 安全性: コードにより、ディスク上のファイルシステムのルートより上の階層にある要素へアクセスすることはできません (サンドボックス化)。

以下のファイルシステムパス名がサポートされています:

| filesystem   | 指定先                                   | 例題                                                   |
| ------------ | ------------------------------------- | ---------------------------------------------------- |
| "/DATA"      | カレントデータフォルダー                          | "C:\\MyApps\\Students\\Data\\"               |
| "/LOGS"      | Logs フォルダー                            | "C:\\MyApps\\Students\\Data\\Logs\\"       |
| "/PACKAGE"   | プロジェクトのルートフォルダー (拡張子 4dbase の有無に関わらず) | "C:\\MyApps\\Students\\"                       |
| "/PROJECT"   | Project フォルダー                         | "C:\\MyApps\\Students\\Project\\"            |
| "/RESOURCES" | カレントプロジェクトの Resources フォルダー           | "C:\\MyApps\\Students\\Resources\\"          |
| "/SOURCES"   | カレントプロジェクトの Sources フォルダー             | "C:\\MyApps\\Students\\Project\\Sources\\" |

## POSIX シンタックス

POSIX シンタックスはすべてのプラットフォームでサポートされています。 もっとも柔軟性に優れるため、**POSIX シンタックスの使用が推奨されています**。 POSIX シンタックスはデフォルトで使用されています ([file.path](../API/FileClass.md#path) および [folder.path](../API/FolderClass.md#path) プロパティによって返されます)。

このシンタックスでは:

- フォルダーは "/" で区切られます。
- 絶対パス名は "/" で始まります。
- 相対パスにおいて 1階層上に移動するには、パス名の前に "../" を使用します (セキュリティ上の理由から、filesystem から上へは移動できません)。

POSIX シンタックスでは一般的に、[`File`](../API/FileClass.md#file) および [`Folder`](../API/FolderClass.md#folder) コマンドに `filesystem` パス名を使用します。例:

```4d
var $pathFile : 4D.File
var $pathFolder : 4D.Folder

$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```




## プラットフォーム特有のシンタックス

プラットフォーム特有のシンタックスは、コマンドが実行される OS に依存します。 このシンタックスを使用して File または Folder オブジェクトを作成するとき、`fk platform path` 定数を引数として使用してそれを宣言する必要がある点に注意してください。

### Windows

以下のパターンがサポートされています:

- フォルダーは "\" で区切られます。
- パスは 2番目と 3番目の文字にそれぞれ ":" と "\" を含みます。
- パスは "\\" で始まります。

[`Folder`](../API/FolderClass.md#folder) を使用した例:

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Windows のパス名とエスケープシーケンス

4Dランゲージでは [エスケープシーケンス](quick-tour.md#エスケープシーケンス) を使用できます。 エスケープシーケンスはバックスラッシュ (`\`: 日本語フォント環境では円マーク) で始まり、その後に文字が続きます。 たとえば、`\t` は、`Tab` 文字のエスケープシーケンスです。

Windows では、`\` 文字をパスの区切り文字としても使用するため、Windows のパス名を入力するにはダブルバックスラッシュ `\` を使用します。

### macOS

以下のパターンがサポートされます (HFS + シンタックス):

- フォルダーは ":" で区切られます。
- パスは ":" で始まってはいけません。

[`Folder`](../API/FolderClass.md#folder) を使用した例:

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() // ボリュームの名前は Monday である必要があります
```

## 相対パス名および絶対パス名について

### `File` および `Folder` コンストラクター

[`File`](../API/FileClass.md#file) および [`Folder`](../API/FolderClass.md#folder) コマンドは **絶対パス名** のみを受け付けます。 相対パス名はサポートされておらず、エラーが返されます。 たとえば、以下のコードは使用できません:

```4d
    //ERROR
$ko:=Folder("myFolder").create() // コンストラクターで相対パス名を使用しています
```

様々な場所 (プロジェクトフォルダー内、システムフォルダー内、など) にあるファイルやフォルダーを扱いたい場合は、`filesystems` (上述参照) を使用します。 たとえば:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() // ストラクチャーレベルでフォルダーが作成されます
$okFile:=File("/DATA/Prefs/tempo.txt").create() // データフォルダー内にファイルが作成されます
```

### `.file()` および `.folder()` フォルダー関数

[`folder.file()`](../API/FolderClass.md#file) および [`folder.folder()`](../API/FolderClass.md#folder-1) などの Folder オブジェクトの関数は、相対 POSIX パス名を想定しています。 例:

```4d
var $userImages : 4D.Folder
var $ok : Boolean

  // ユーザードキュメントフォルダー内にある "Picture" フォルダーを参照するには
$userImages:=Folder(fk documents folder).folder("Pictures")
  // デスクトップにフォルダーを作成するには
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

絶対パス名はサポートされておらず、エラーを返します。


## 例題

File および Folder のコマンドや関数により、以下の例題のように様々な方法でファイルやフォルダーを管理することが可能になります:
```4d
var $fold : 4D.Folder
var $file : 4D.File

$fold:=Folder(fk desktop folder).folder("archive/jan2019")
$fold:=Folder("/DATA/archive/jan2019")
$file:=Folder("/DATA/archive/jan2019").file("total.txt")
$file:=File("/DATA/info.txt")
$file:=File("c:\\archives\\local\\jan2019.txt";fk platform path)
$file:=File(fk backup log file)
```
