---
id: vp-get-table-dirty-rows
title: VP Get table dirty rows
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R8 | 追加 |

</details>

<!-- REF #_method_.VP Get table dirty rows.Syntax -->

**VP Get table dirty rows** ( *vpAreaName* : Text ; *tableName* : Text { ; *reset* : Boolean {; *sheet* : Integer }} ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get table dirty rows.Params -->

| 引数         | 型      |    | 説明                                                                    |                  |
| ---------- | ------ | -- | --------------------------------------------------------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名                                               |                  |
| tableName  | テキスト   | -> | Table name                                                            |                  |
| reset      | ブール    | -> | 現在の表から "ダーティ" ステータスをクリアするには true、そのままにするには false を指定します。 デフォルト = true |                  |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート)                        |                  |
| 戻り値        | コレクション | <- | 前回のリセット以降に変更された全項目を格納するオブジェクトのコレクション                                  | <!-- END REF --> |

#### 説明

`VP Get table dirty rows` コマンドは、<!-- REF #_method_.VP Get table dirty rows.Summary -->*tableName* が指定する表組みの前回のリセット以降に変更された項目を含む *dirty row* ("ダーティ" な行) のオブジェクトのコレクションを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*tableName* には、変更された行を取得したい表組みの名称を渡します。 なお、[データコンテキスト](vp-set-data-context.md) にバインドされている列の変更のみが考慮されます。

デフォルトでは、このコマンドを呼び出すと、現在のテーブルから *ダーティ* のステータスをクリアします。 この状態をリセットせずに維持するには、*reset* に `false` を渡します。

*sheet* には、ターゲットシートのインデックスを渡します。 index が省略された場合、または -1 が渡された場合、コマンドはカレントシートに対して適用されます。

> インデックスは 0 起点です。

返されるコレクション内の各 *dirty row* ("ダーティ" な行) オブジェクトは、以下のプロパティを含みます:

| プロパティ        | 型       | 説明              |
| ------------ | ------- | --------------- |
| item         | object  | 変更された行の変更オブジェクト |
| originalItem | object  | 変更前のオブジェクト      |
| row          | integer | 変更された行のインデックス   |

*tableName* が見つからない場合、または変更された列が含まれていない場合、コマンドは空のコレクションを返します。

#### 例題

変更された行の数を取得します:

```4d
var $dirty : Collection
$dirty:=VP Get table dirty rows("ViewProArea"; "ContextTable"; False)
VP SET NUM VALUE(VP Cell("ViewProArea"; 0; 0); $dirty.length)
```

#### 参照

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
