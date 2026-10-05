---
id: json-validate
title: JSON Validate
slug: /commands/json-validate
displayed_sidebar: docs
---

<!--REF #_command_.JSON Validate.Syntax-->**JSON Validate** ( *vJson* : Object, Collection ; *vSchema* : Object ) : Object<!-- END REF-->

<!--REF #_command_.JSON Validate.Params-->

<div class="no-index">

| 引数      | 型      |                             | 説明                                                       |
| ------- | ------ | --------------------------- | -------------------------------------------------------- |
| vJson   | Object, Collection | &#8594; | 検証するJSONオブジェクトまたはコレクション |
| vSchema | Object | &#8594; | JSONオブジェクトの検証に使用するJSONスキーマ |
| 戻り値     | Object | &#8592; | 検証ステータスとエラー（該当する場合） |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

| リリース  | 内容                                   |
| ----- | ------------------------------------ |
| 21 R2 | Support of JSON Schema draft 2020-12 |
| 16 R4 | Created                              |

</details>
</div>

## 説明

<!--REF #_command_.JSON Validate.Summary-->**JSON Validate** コマンドは、*vJson* のJSONコンテンツが *vSchema* のJSONスキーマで定義されたルールに準拠しているかを確認します。<!-- END REF--> JSONが無効な場合、コマンドはエラーの詳細を返します。

*vJson* には、検証するJSONコンテンツを含むJSONオブジェクトを渡します。

**注:** JSON文字列の検証では、JSONスキーマで定義されたルールに従っているかを確認します。これは、[JSON Parse](../commands/json-parse) コマンドで行う、JSONの構文が正しいかどうかの確認とは異なります。

*vSchema* には、検証に使用するJSONスキーマを渡します。JSONスキーマの作成方法については、[json-schema.org](http://json-schema.org/) を参照してください。

### サポートされるJSON Schema検証draft

JSONオブジェクトの検証には、4Dは **JSON Schema Validation draft document** で定義された規格を使用します。これらのドキュメントは、これまでに複数のバージョンが公開されています。

4Dは次の2つのdraftバージョンをサポートしています:

- [バージョン2020-12](https://json-schema.org/draft/2020-12/json-schema-validation) (推奨)。次の例外を除き、規格のすべての部分がサポートされています:
  - vocabulary
  - `contentEncoding`、`contentMediaType`、`contentSchema` (JSON以外のコンテンツの検証)
  - 参照について: `$dynamicRef`/`$dynamicAnchor` および `https:...` の参照
- [バージョン4](https://tools.ietf.org/html/draft-wright-json-schema-validation-00) (従来の実装、デフォルトで使用)。この規格のサポートには、バージョン2020-12より多くの制限があります。

#### 使用するバージョンの指定

使用するバージョンは、スキーマの *$schema* キーで指定します:

- バージョン2020-12:

```json
"$schema": "https://json-schema.org/draft/2020-12/schema",
```

- バージョン4:

```json
"$schema": "http://json-schema.org/draft-04/schema#",
```

互換性のため、*$schema* キーが省略された場合はバージョン4が使用されます。ただし、より信頼性の高い検証を行うにはバージョン2020-12の使用をお勧めします。

:::note

*$schema* キーで別のスキーマバージョンを宣言すると、エラーが返されます。

:::

### 検証結果

JSONスキーマが無効な場合、4Dは [Null](../commands/null) オブジェクトを返し、[エラー処理メソッド](../../Concepts/error-handling.md#installing-an-error-handling-method)で捕捉できるエラーを生成します。

**JSON Validate** は検証ステータスを示すオブジェクトを返します。このオブジェクトには、次のプロパティが含まれることがあります:

| **プロパティ名** | **型**             | **説明** |
| ---------- | ----------------- | ------ |
| *success*  | Boolean           | *vJson* が有効な場合はTrue、そうでない場合はfalseです。falseの場合、*errors* プロパティも返されます。 |
| *errors*   | Object collection | *vJson* が無効な場合のエラーオブジェクトの一覧です (下記参照)。 |

*errors* コレクション内の各エラーオブジェクトには、次のプロパティが含まれます:

| **プロパティ名** | **型** | **説明** |
| ------------- | ------ | ------ |
| *code*        | Number | エラーコード |
| *jsonPath*    | Text   | *vJson* で検証できないJSONパス |
| *line*        | Number | JSONファイル内のエラー行番号です。[JSON Parse](../commands/json-parse) の *\** 引数を使用してJSONを解析した場合に設定されます。それ以外の場合、このプロパティは省略されます。 |
| *message*     | Text   | エラーメッセージ |
| *offset*      | Number | JSONファイル内のエラー行のオフセットです。[JSON Parse](../commands/json-parse) の *\** 引数を使用してJSONを解析した場合に設定されます。それ以外の場合、このプロパティは省略されます。 |
| *schemaPaths* | Text   | 検証エラーの原因となったスキーマ内のJSONパス |

### エラー一覧

<details>次のエラーが返されることがあります:

| **コード** | **JSONキーワード** | **メッセージ** |
| -------- | ------------------ | ------------ |
| 2 | multipleOf | 'multipleOf' キーに対する検証中にエラーが発生しました。 |
| 3 | maximum | 指定された値は、スキーマで指定された値 ("{s1}") を超えてはなりません。 |
| 4 | exclusiveMaximum | 指定された値は、スキーマで指定された値 ("{s1}") より小さくなければなりません。 |
| 5 | minimum | 指定された値は、スキーマで指定された値 ("{s1}") 未満であってはなりません。 |
| 6 | exclusiveMinimum | 指定された値は、スキーマで指定された値 ("{s1}") より大きくなければなりません。 |
| 7 | maxLength | 文字列がスキーマで指定された長さを超えています。 |
| 8 | minLength | 文字列がスキーマで指定された長さに達していません。 |
| 9 | pattern | 文字列 "{s1}" がスキーマ内のパターンに一致しません: {s2}。 |
| 10 | additionalItems | 配列の検証中にエラーが発生しました。JSONにスキーマで指定された数を超える要素が含まれています。 |
| 11 | maxItems | 配列にスキーマで指定された数を超える項目が含まれています。 |
| 12 | minItems | 配列にスキーマで指定された数の項目が含まれていません。 |
| 13 | uniqueItems | 配列の検証中にエラーが発生しました。要素が一意ではありません。"{s1}" の別のインスタンスがすでに配列に含まれています。 |
| 14 | maxProperties | プロパティ数がスキーマで指定された上限を超えています。 |
| 15 | minProperties | プロパティ数がスキーマで指定された下限を下回っています。 |
| 16 | required | 必須プロパティ "{s1}" がありません。 |
| 17 | additionalProperties | スキーマでは追加プロパティが許可されていません。プロパティ {s1} を削除してください。 |
| 18 | dependencies | プロパティ "{s1}" にはプロパティ "{s2}" が必要です。 |
| 19 | enum | 'enum' キーに対する検証中にエラーが発生しました。"{s1}" はスキーマ内のどのenum要素にも一致しません。 |
| 20 | type | 型が正しくありません。期待される型: {s1} |
| 21 | oneOf | JSONが複数の値に一致します。 |
| 22 | oneOf | JSONがどの値にも一致しません。 |
| 23 | not | JSONが 'not' の値に対して無効です。 |
| 24 | format | 文字列が ("{s1}") に一致しません。 |
| 25 | const | 値 "{s1}" がスキーマの 'const' 値と一致しません。 |
| 26 | unevalutedProperties | 未評価のプロパティはスキーマで許可されていません。プロパティ {s1} を削除してください。 |
| 27 | unevalutedItems | 未評価の配列項目は許可されていません。インデックス {s1} の項目はどのスキーマでもカバーされていません。 |
| 28 | propertyNames | プロパティ名 "{s1}" が 'propertyNames' スキーマに適合しません。 |
| 29 | contains | 配列に 'contains' スキーマに一致する項目がありません。 |
| 30 | contains | 配列には 'contains' スキーマに一致する項目が少なくとも{s1}個必要ですが、{s2}個しか見つかりませんでした。 |
| 31 | contains | 配列に含められる 'contains' スキーマに一致する項目は最大{s1}個ですが、{s2}個見つかりました。 |
| 32 | required | プロパティ "{s1}" にはプロパティ "{s2}" が必要です。 |
| 35 | prefixItems | 配列の先頭の項目が 'prefixItems' スキーマに一致しません。 |
| 36 | dependentSchemas | 'dependentSchemas' に対する検証に失敗しました。 |
| 37 | $ref | 参照を解決できませんでした。 |
| 38 | $ref | 循環参照が検出されました。 |

</details>

:::tip 関連したblog 記事

[Simplify JSON Validation and Boost Robustness](https://blog.4d.com/simplify-json-validation-and-boost-robustness)

:::

## 例題

スキーマを使用してJSONオブジェクトを検証し、検証エラーがあればその一覧を取得して、エラー行とメッセージをテキスト変数に格納します:

```4d
 var $oResult : Object
 $oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)
 If($oResult.success) //validation successful
    ...
 Else //validation failed
    var $vLNbErr : Integer
    var $vTerrLine : Text
    $vLNbErr:=$oResult.errors.length ///get the number of error(s)
    ALERT(String($vLNbErr)+" validation error(s) found.")
    For($i;0;$vLNbErr)
       $vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Carriage return
    End for
 End if
```

## 参照

[JSON Parse](../commands/json-parse)

## プロパティ

|         |      |
| ------- | ---- |
| コマンド番号  | 1456 |
| スレッドセーフ | ◯    |


