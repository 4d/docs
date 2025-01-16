---
id: vp-import-from-blob
title: VP IMPORT FROM BLOB
---

<!-- REF #_method_.VP IMPORT FROM BLOB.Syntax -->

**VP IMPORT FROM BLOB** ( *vpAreaName* : Text ; *vpBlob* : 4D.blob { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM BLOB.Params -->

| 引数         | 型                       |    | 説明                        |                  |
| ---------- | ----------------------- | -- | ------------------------- | ---------------- |
| vpAreaName | Text                    | -> | 4D View Pro フォームオブジェクト名   |                  |
| vpBlob     | 4D.Blob | -> | 4D View Proドキュメントを含む Blob |                  |
| paramObj   | Object                  | -> | 読み込みのオプション                | <!-- END REF --> |

#### 説明

`VP IMPORT FROM BLOB` コマンドは、<!-- REF #_method_.VP IMPORT FROM BLOB.Summary -->*vpAreaName* の 4D View Pro エリアの中身を、読み込んだ *vpBlob* で置換します<!-- END REF -->。 *vpBlob* には、[VP EXPORT TO BLOB](vp-export-to-blob.md) コマンド、または 4D View Pro インターフェース経由で、Blob として保存された 4D View Pro ドキュメントが格納されている必要があります。

*paramObj* には、複数のプロパティを渡せます:

| プロパティ               | 型                           | 説明                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula             | 4D.Function | 読み込み終了時に実行させるコールバックメソッド。 [コールバックメソッド (フォーミュラ) の渡し方](vp-export-document.md#コールバックメソッド-フォーミュラ-の渡し方) を参照ください。                                                                                                                                                                                                                                                                                                |
| calcOnDemand        | Boolean                     | 要求されたときにだけフォーミュラを計算するかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                      |
| dynamicReferences   | Boolean                     | 動的参照を含む関数を計算するかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                              |
| fullRecalc          | Boolean                     | jsonデータを読み込んだ後に計算するかどうか。デフォルトは false。                                                                                                                                                                                                                                                                                                                                                                                        |
| includeFormulas     | Boolean                     | フォーミュラを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                  |
| includeStyles       | Boolean                     | スタイルを含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                                                    |
| includeUnusedStyles | Boolean                     | excel xml を json に変換する際、使用されていないカスタム名を含めるかどうか。デフォルトは true。                                                                                                                                                                                                                                                                                                                                                                   |
| openMode            | Integer                     | 0 (normal): 通常のオープンモード、レイジーなし、インクリメンタルなし。 ドキュメントを開くと、特定の時点で UI と UIイベントが更新され、応答します。 <br/>1 (lazy): レイジー (遅延) オープンモード。 ドキュメントを開くと、アクティブなシートだけが直接読み込まれます。 他のシートは使用された場合にのみ読み込まれます。 <br/>2 (incremental): インクリメンタル (増分) オープンモード。 ドキュメントを開くと、データ読み込み中に UI と UIイベントが更新され、即座に応答します。 |

コールバックメソッドでは、以下のパラメーターを使用することができます:

| 引数     |                               | 型                       | 説明                                |
| :----- | :---------------------------- | :---------------------- | :-------------------------------- |
| param1 |                               | テキスト                    | 4D View Pro エリアのオブジェクト名           |
| param2 |                               | 4D.Blob | インポートされた Blob                     |
| param3 |                               | object                  | コマンドの *paramObj* 引数への参照           |
| param4 |                               | object                  | メソッドから返されるステータスメッセージを格納したオブジェクト   |
|        | .success      | boolean                 | 読み込みに成功した場合は true 、それ以外の場合は false |
|        | .errorCode    | integer                 | エラーコード。                           |
|        | .errorMessage | テキスト                    | エラーメッセージ。                         |

#### 例題

myTableデータクラスの最初のエンティティに Blob として保存されている 4D View Proドキュメントを "ViewProArea" にインポートします。

```4d
var $myBlobDocument : 4D.Blob :=ds.Table.all().first().blob
VP IMPORT FROM BLOB("ViewProArea"; $myBlobDocument)

```

#### 参照

[VP EXPORT TO BLOB](vp-export-to-blob.md)
