---
id: zip-read-archive
title: ZIP Read archive
displayed_sidebar: docs
---

<!-- REF #_command_.ZIP Read archive.Syntax -->**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->

| 引数       | 型                             |     | 説明                                         |
| -------- | ----------------------------- | :-: | ------------------------------------------ |
| zipFile  | 4D.File       |  →  | ZIPアーカイブファイル                               |
| password | Text                          |  →  | ZIPアーカイブのパスワード (必要であれば) |
| 戻り値      | 4D.ZipArchive |  ←  | アーカイブオブジェクト                                |

<!-- END REF -->

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 18   | 追加 |

</details>

#### 説明

`ZIP Read archive` コマンドは、<!-- REF #_command_.ZIP Read archive.Summary -->*zipFile* のコンテンツを取得し、`4D.ZipArchive` オブジェクト形式で返します<!-- END REF -->。

> このコマンドは ZIPアーカイブを展開することはしません。その中身に関する情報を提供するのみです。 アーカイブの中身を取り出すためには、[file.copyTo()](../API/Document.md#copyto) や [folder.copyTo()](../API/Directory.md#copyto)などのメソッドを使用する必要があります。

*zipFile* 引数として、圧縮された ZIPアーカイブを参照している `4D.File` オブジェクトを渡します。 ターゲットのアーカイブファイルは `ZIP Read archive` が実行を終えるまで (全コンテンツ/参照が取得/解放されるまで) は開いた状態となり、その後自動的に閉じられます。

*zipFile* 引数で指定した ZIPファイルがパスワードで保護されていた場合、任意の *password* 引数を渡してパスワードを提供する必要があります。 パスワードが必要にも関わらず、コンテンツ読み出し時にパスワードが提示されなかった場合、エラーが生成されます。

**アーカイブオブジェクト**

返されたオブジェクトは単一の[`root`](../API/ZipArchiveClass.md#root) プロパティだけを格納しており、その値は`4D.ZipFolder` オブジェクトです。 このフォルダーは ZIPアーカイブの全コンテンツを表します。 このフォルダーは ZIPアーカイブの全コンテンツを表します。 このフォルダーは ZIPアーカイブの全コンテンツを表します。 このフォルダーは ZIPアーカイブの全コンテンツを表します。 このフォルダーは ZIPアーカイブの全コンテンツを表します。

#### 例題

ZIPFile オブジェクトを取得し、その中身を確認します:

```4d
 var $archive : 4D.ZipArchive
 var $path : 4D.File

 $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 $archive:=ZIP Read archive($path)
```

アーカイブ内のファイルとフォルダーの一覧を取得します:

```4d
 $folders:=$archive.root.folders()
 $files:=$archive.root.files()
```

ファイルのコンテンツを、root フォルダーから取り出すことなく読み出します:

```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```

root フォルダーから取り出します:

```4d
  // 特定のファイルを取得します
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  // すべてのファイルを取得します
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```

#### 参照

[ZipArchive Class](../API/ZipArchiveClass.md)
[ZipFile Class](../API/ZipFileClass.md)
[ZipFolder Class](../API/ZipFolderClass.md)
[`ZIP Create archive`](zip-create-archive.md)
