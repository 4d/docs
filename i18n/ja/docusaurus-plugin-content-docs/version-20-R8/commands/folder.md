---
id: folder
title: Folder
displayed_sidebar: docs
---

<details><summary>履歴</summary>

| リリース  | 内容                     |
| ----- | ---------------------- |
| 19 R8 | `fk home folder` をサポート |
| 17 R5 | 追加                     |

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

<!-- REF #_command_.Folder.Params -->

| 引数             | 型                         |     | 説明                                                                |
| -------------- | ------------------------- | :-: | ----------------------------------------------------------------- |
| path           | Text                      |  →  | フォルダーパス                                                           |
| folderConstant | Integer                   |  →  | 4Dフォルダー定数                                                         |
| pathType       | Integer                   |  →  | `fk posix path` (デフォルト) または `fk platform path` |
| \*             | operator                  |  →  | ホストデータベースのフォルダーを返すには \* を渡します                                     |
| 戻り値            | 4D.Folder |  ←  | 新規フォルダーオブジェクト                                                     |

<!-- END REF -->

#### 説明

`Folder` コマンドは、<!-- REF #_command_.Folder.Summary -->`4D.Folder` 型の新しいオブジェクトを作成して返します<!-- END REF -->。 このコマンドは 2種類のシンタックスを受け入れます。

**Folder ( path { ; pathType } { ; \* } )**

*path* には、フォルダーパス文字列を渡します。 カスタムの文字列または [ファイルシステム](../Concepts/paths.md#ファイルシステムパス名) (例: "/DATA") を渡すことができます。

> `Folder` コマンドでは絶対パス名のみがサポートされます。

デフォルトで、4D は POSIXシンタックスで表現されたパスを期待します。 プラットフォームパス名 (Windows または macOS) を使用する場合、*pathType* 引数を使用してそのことを宣言する必要があります。 以下の定数を使用することができます:

| 定数               | 値 | 説明                                                                |
| ---------------- | - | ----------------------------------------------------------------- |
| fk platform path | 1 | プラットフォーム特有のシンタックスで表現されたパス (プラットフォームパス名の場合には必須) |
| fk posix path    | 0 | POSIXシンタックスで表現されたパス (デフォルト)                    |

**Folder ( folderConstant { ; \* } )**

*folderConstant* には、以下の定数のどれか一つを指定して 4Dビルトインの、またはシステムフォルダーを渡します:

| 定数                         | 値   | 説明                                                                                       |
| -------------------------- | --- | ---------------------------------------------------------------------------------------- |
| fk applications folder     | 116 |                                                                                          |
| fk data folder             | 9   | 関連づけられたファイルシステム: "/DATA"                                                 |
| fk database folder         | 4   | 関連づけられたファイルシステム: "/PACKAGE"                                              |
| fk desktop folder          | 115 |                                                                                          |
| fk documents folder        | 117 | ユーザーのドキュメントフォルダー                                                                         |
| fk home folder             | 118 | ユーザーのカレントホームフォルダー (通常は `/Users/<username>/`)                          |
| fk licenses folder         | 1   | マシンの 4Dライセンスファイルを格納しているフォルダー                                                             |
| fk logs folder             | 7   | 関連づけられたファイルシステム: "/LOGS"                                                 |
| fk mobileApps folder       | 10  |                                                                                          |
| fk remote database folder  | 3   | それぞれの 4Dリモートマシン上に作成された 4Dデータベースフォルダー                                                     |
| fk resources folder        | 6   | 関連づけられたファイルシステム: "/RESOURCES"                                            |
| fk system folder           | 100 |                                                                                          |
| fk user preferences folder | 0   | ユーザー環境設定ファイルを保存している、ユーザーホームフォルダー内の 4Dフォルダー                                               |
| fk web root folder         | 8   | データベースのカレントの Webルートフォルダー: ただし "/PACKAGE/path" のパッケージ内にある場合。そうでない場合はフルパス。 |

コマンドがコンポーネントから呼び出されている場合、`*` 引数を渡してホストデータベースのパスを取得するようにします。 `*` 引数を省略すると、常に null オブジェクトが返されます。

> Windows の場合、組み込みクライアントでは、`ShareLocalResourcesOnWindowsClient` [BuildApp キー](../Desktop/building.md#buildapp4dsettings) を使用されていた場合、ビルトインフォルダーの場所が変更されています。

#### 参照

[File](file.md)\
[Object to path](../commands-legacy/object-to-path.md)\
[Path to object](../commands-legacy/path-to-object.md)

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1567                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
