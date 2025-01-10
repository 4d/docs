---
id: vp-export-to-blob
title: VP EXPORT TO BLOB
---

<!-- REF #_method_.VP EXPORT TO BLOB.Syntax -->

**VP EXPORT TO BLOB** ( *vpAreaName* : Text ; *paramObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP EXPORT TO BLOB.Params -->

| 引数         | 型      |    | 説明                      |                  |
| ---------- | ------ | -- | ----------------------- | ---------------- |
| vpAreaName | Text   | -> | 4D View Pro フォームオブジェクト名 |                  |
| paramObj   | Object | -> | 書き出しのオプション              | <!-- END REF --> |

#### 説明

`VP EXPORT TO BLOB` コマンドは、<!-- REF #_method_.VP EXPORT TO BLOB.Summary -->*vpAreaName* で指定した 4D View Pro エリアの 4D View Pro ドキュメントを、*paramObj* で指定したとおりに 4D.Blob に書き出します。<!-- END REF --> エクスポートされた Blob は、コールバックを通して利用可能です。 4D View Pro エリアを Blob でエクスポートおよびインポートすることは高速で、メモリ効率に優れています。

*paramObj* には、複数のプロパティを渡せます:

| プロパティ                   | 型                           | 説明                                                                                                                                                         |
| ----------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula                 | 4D.Function | (必須) 書き出しが完了した際に呼び出されるコールバックメソッド名。 [コールバックメソッド (フォーミュラ) の渡し方](vp-export-document.md#コールバックメソッド-フォーミュラ-の渡し方) を参照ください。 |
| includeAutoMergedCells  | Boolean                     | 自動的に結合されたセルを含めるかどうか。デフォルトは false。                                                                                                                          |
| includeBindingSource    | Boolean                     | バインドされたソースを含めるかどうか。デフォルトは true。                                                                                                                            |
| includeCalcModelCache   | Boolean                     | 計算の追加データを含めるか。 ファイルを開く速さに影響する場合があります。デフォルトは false。                                                                                                         |
| includeEmptyRegionCells | Boolean                     | 使用されるデータレンジの外側の空白セル (データがない、またはスタイルだけのセル) を含めるかどうか。デフォルトは true。                                                                         |
| includeFormulas         | Boolean                     | フォーミュラを含めるかどうか。デフォルトは true。                                                                                                                                |
| includeStyles           | Boolean                     | スタイルを含めるかどうか。デフォルトは true。                                                                                                                                  |
| includeUnusedNames      | Boolean                     | 使用されていないカスタム名を含めるかどうか。デフォルトは true。                                                                                                                         |

|saveAsView|Boolean|書き出される値にフォーマット文字列を適用するかどうか。デフォルトは false。|

コールバックメソッドでは、以下のパラメーターを使用することができます:

| 引数     |                               | 型                       | 説明                                |
| :----- | :---------------------------- | :---------------------- | :-------------------------------- |
| param1 |                               | text                    | 4D View Pro オブジェクト名               |
| param2 |                               | 4D.blob | エクスポートされた Blob                    |
| param3 |                               | object                  | コマンドの *paramObj* 引数への参照           |
| param4 |                               | object                  | メソッドから返されるステータスメッセージを格納したオブジェクト   |
|        | .success      | ブール                     | 書き出しに成功した場合は true 、それ以外の場合は false |
|        | .errorCode    | integer                 | エラーコード。                           |
|        | .errorMessage | text                    | エラーメッセージ。                         |

#### 例題

`VP EXPORT TO BLOB` コマンドは非同期です。 エクスポートの結果を取得するには、コールバックメソッド (この例では *VPBlobCallback* という名前) を作成する必要があります。

```4d
// VPドキュメントをエクスポート
VP EXPORT TO BLOB("ViewProArea"; {formula: Formula(VPBlobCallback)})
```

```4d
// VPBlobCallback メソッド
#DECLARE($area : Text; $data : 4D.Blob; $parameters : Object; $status : Object)
var $myEntity : cs.myTableEntity

If ($status.success)
   // ドキュメントをテーブルに保存します
   $myEntity:=ds.myTable.new()
   $myEntity.blob:=$data
   $myEntity.save()
End if

```

#### 参照

[VP IMPORT FROM BLOB](vp-import-from-blob.md)
