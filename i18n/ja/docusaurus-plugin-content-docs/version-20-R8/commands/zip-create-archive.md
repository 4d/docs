---
id: zip-create-archive
title: ZIP Create archive
displayed_sidebar: docs
---

<!-- REF #_command_.ZIP Create archive.Syntax -->**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->

| 引数              | 型                         |     | 説明                                                                                                                |
| --------------- | ------------------------- | :-: | ----------------------------------------------------------------------------------------------------------------- |
| fileToZip       | 4D.File   |  →  | 圧縮する File または Folder オブジェクト                                                                                       |
| folderToZip     | 4D.Folder |  →  | 圧縮する File または Folder オブジェクト                                                                                       |
| zipStructure    | Object                    |  →  | 圧縮する File または Folder オブジェクト                                                                                       |
| destinationFile | 4D.File   |  →  | アーカイブの保存先ファイル                                                                                                     |
| options         | Integer                   |  →  | *folderToZip* オプション: `ZIP Without enclosing folder` (外側のフォルダーを除外して ZIP圧縮をおこなう) |
| 戻り値             | Object                    |  ←  | ステータスオブジェクト                                                                                                       |

<!-- END REF -->

<details><summary>履歴</summary>

| リリース  | 内容                                                              |
| ----- | --------------------------------------------------------------- |
| 19 R3 | `ZIP Compression LZMA`, `ZIP Compression XZ`, `.level` プロパティを追加 |
| 18    | 追加                                                              |

</details>

#### 説明

`ZIP Create archive` コマンドは、<!-- REF #_command_.ZIP Create archive.Summary -->圧縮された ZIPArchive オブジェクトを作成し、その処理のステータスを返します<!-- END REF -->。

第1引数として、4D.File、4D.Folder、あるいは zipStructure オブジェクトを渡すことができます。

- *fileToZip*: 圧縮する `4D.File` オブジェクトを引数として渡します。

- *folderToZip*: 圧縮する `4D.Folder` を渡します。 この場合、任意の *options* 引数を渡して、フォルダーのコンテンツのみを圧縮 (つまり、外側のフォルダを除外) することができます。 `ZIP Create archive` はデフォルトで、フォルダーとその中身を圧縮するので、展開処理をしたときにはフォルダーを再作成します。 フォルダーの中身のみを解凍処理で復元するには、*options* 引数に `ZIP Without enclosing folder` 定数を渡します。

- *zipStructure*: ZIPArchive オブジェクトを表すオブジェクトを引数として渡します。 以下のプロパティを利用して、このオブジェクトを定義することが可能です:

| プロパティ       | 型                           | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression | Integer                     | <li>`ZIP Compression standard`: Deflate圧縮 (デフォルト)</li><li>`ZIP Compression LZMA`: LZMA圧縮</li><li>`ZIP Compression XZ`: XZ圧縮</li><li>`ZIP Compression none`: 圧縮なし</li>                                                                                                                                                                                                                                                               |
| level       | Integer                     | 圧縮レベル。 とりうる値: 1 - 10。 低い値ではファイルが大きくなり、高い値ではファイルが小さくなります。 ただし、圧縮レベルはパフォーマンスに影響します。 デフォルト値 (省略時): <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li>                                                                                                                         |
| encryption  | Integer                     | パスワードが設定されていた場合に使用する暗号化方法:<li>`ZIP Encryption AES128`: 128-bit キーを使った AES による暗号化</li><li>`ZIP Encryption AES192`: 192-bit キーを使った AES による暗号化</li><li>`ZIP Encryption AES256`: 256-bit キーを使った AES による暗号化 (パスワードが設定されている場合のデフォルト)</li><li>`ZIP Encryption none`: 暗号化なし (パスワードが設定されてない場合のデフォルト)</li>              |
| password    | Text                        | 暗号化が必要な場合に使用するパスワード                                                                                                                                                                                                                                                                                                                                                                                                                 |
| files       | Collection                  | <li>`4D.File` または` 4D.Folder` オブジェクトのコレクション</li><li>以下のプロパティを持ったオブジェクトのコレクション:</li><table><tr><td>プロパティ</td><td>タイプ</td><td>説明</td></tr><tr><td>source</td><td>4D.File または 4D.Folder</td><td>File または Folder</td></tr><tr><td>destination</td><td>Text</td><td>(任意) - アーカイブのコンテンツ構成を変更するための相対ファイルパス</td></tr><tr><td>option</td><td>number</td><td>(任意) - `ZIP Ignore invisible files` で非表示ファイルを無視、0 を渡すと全ファイルを圧縮</td></tr></table> |
| callback    | 4D.Function | $1 に圧縮の進捗 (0 - 100) を受け取るコールバックフォーミュラ                                                                                                                                                                                                                                                                                                                                                                            |

*destinationFile* には、作成する ZIPアーカイブ (名前や位置など) を記述する `4D.File` オブジェクトを渡します。 作成した ZIPアーカイブがあらゆるソフトウェアで自動的に処理されるようにするため、".zip" 拡張子の使用が推奨されます。

アーカイブが作成されると、[ZIP Read archive](#zip-read-archive) を使用してアクセスすることができます。

**ステータスオブジェクト**

戻り値のステータスオブジェクトには、以下のプロパティが格納されています:

| プロパティ      | 型       | 説明                                                                                                                         |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| statusText | Text    | エラーメッセージ (あれば):<li>ZIPアーカイブを開けません</li><li>ZIPアーカイブを作成できません</li><li>暗号化にはパスワードが必要です</li> |
| status     | Integer | ステータスコード                                                                                                                   |
| success    | Boolean | アーカイブが正常に作成された場合には true、それ以外は false                                                                                        |

#### 例題 1

`4D.File` を圧縮します:

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```

#### 例題 2

フォルダー自体は圧縮せずに `4D.Folder` の中身だけを圧縮します:

```4d
 var $folder : 4D.Folder
 var $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```

#### 例題 3

ZIPアーカイブの圧縮にパスワードと進捗バーを使います:

```4d
 var $destination : 4D.File
 var $zip;$status : Object
 var progID : Integer

 $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")

 $zip:=New object
 $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()
 $zip.password:="password"
 $zip.callback:=Formula(myFormulaCompressingMethod($1))

 progID:=Progress New // 4D Progress コンポーネントを使います

 $status:=ZIP Create archive($zip;$destination)

 Progress QUIT(progID)
```

`myFormulaCompressingMethod`:

```4d
 var $1 : Integer
 Progress SET PROGRESS(progID;Num($1/100))
```

#### 例題 4

*zipStructure* オブジェクトに、圧縮したいフォルダーとファイルを格納したコレクションを渡します:

```4d
 var $destination : 4D.File
 var $zip;$err : Object
 $zip:=New object
 $zip.files:=New collection
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))

 $destination:=Folder(fk desktop folder).file("file.zip")
 $err:=ZIP Create archive($zip;$destination)
```

#### 例題 5

高い圧縮レベルの代替圧縮アルゴリズムを使用します:

```4d
var $destination : 4D.File
var $zip; $err : Object

$zip:=New object
$zip.files:=New collection
$zip.files.push(Folder(fk desktop folder).folder("images"))
$zip.compression:=ZIP Compression LZMA
$zip.level:=7 // デフォルト値は 4 です

$destination:=Folder(fk desktop folder).file("images.zip")
$err:=ZIP Create archive($zip; $destination)
```

#### 参照

[ZipArchive Class](../API/ZipArchiveClass.md)
[ZipFile Class](../API/ZipFileClass.md)
[ZipFolder Class](../API/ZipFolderClass.md)
[`ZIP Read archive`](zip-read-archive.md)

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1640                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
