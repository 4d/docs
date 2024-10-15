---
id: ZipArchiveClass
title: ZIPArchive
---

4D ZIP アーカイブは、一つ以上のファイルまたはフォルダーを格納している `File` または `Folder` オブジェクトで、元のサイズより小さくなるように圧縮されているものをいいます。 これらのアーカイブは ".zip" 拡張子を持つように作成され、ディスクスペースの確保や、サイズ制限があるメディア (例: メールまたはネットワークなど) 経由のファイル転送を容易にする用途に使用できます。

- You create a 4D ZIP archive with the [`ZIP Create archive`](../commands/zip-create-archive.md) command.
- 4D [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [`ZIP Read archive`](../commands/zip-read-archive.md) command.

### 例題

ZIPFile オブジェクトを取得し、その中身を確認します:

```4d
var $path; $archive : 4D.File
var $zipFile : 4D.ZipFile
var $zipFolder : 4D.ZipFolder
var $txt : Text

$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
$archive:=ZIP Read archive($path)
$zipFolder:=$archive.root // 圧縮ファイルのルートフォルダーを保存します
$zipFile:=$zipFolder.files()[0] // 最初のファイルを読み取ります

If($zipFile.extension=".txt")
 $txt:=$zipFile.getText()
End if
```

### 概要

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)<br/><!-- INCLUDE #ZipArchiveClass.root.Summary --> |

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D.ZipFolder<!-- END REF -->

#### 説明

`.root` プロパティは、<!-- REF #ZipArchiveClass.root.Summary -->ZIPアーカイブのコンテンツにアクセスするためのバーチャルフォルダー<!-- END REF -->を格納します。

`root` フォルダーとそのコンテンツは、[ZipFile](ZipFileClass.md) および [ZipFolder](ZipFolderClass.md) の関数とプロパティを使用することで操作可能です。

このプロパティは **読み取り専用** です。
