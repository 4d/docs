---
id: json-validate
title: JSON Validate
slug: /commands/json-validate
displayed_sidebar: docs
---

<!--REF #_command_.JSON Validate.Syntax-->**JSON Validate** ( *vJson* ; *vSchema* ) : Object<!-- END REF-->
<!--REF #_command_.JSON Validate.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| vJson | Object | &#8594;  | 評価するJSONオブジェクト |
| vSchema | Object | &#8594;  | JSONオブジェクトを評価するのに使用するJSONスキーマ |
| 戻り値 | Object | &#8592; | 評価ステータスあるいはエラー(あれば) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.JSON Validate.Summary-->**JSON Validate** コマンドは、*vJson* 引数に渡されたJSON コンテンツを*vSchema* 引数に渡したJSON スキーマで定義されたルールに対しての適合性をチェックします。<!-- END REF-->JSON が向こうであった場合、コマンドはエラーの詳細な説明を返します。

*vJson* 引数には評価をしたいJSON コンテンツを含むJSON オブジェクトを渡します。

**注:** JSON 文字列を評価することとは、JSON スキーマで定義されたルールに則っているかどうかをチェックすることです。JSON が整形されているかどうかをチェックすることとは別で、これは[JSON Parse](json-parse.md) コマンドによってチェックされます。

*vSchema* 引数には評価に使用するJSON スキーマを渡します。JSON スキーマを作成する方法については、[json-schema.org](http://json-schema.org/) のWeb サイトを参照してください。

**注:** JSON オブジェクトを評価するためには、4Dは[JSON Schema Validation](https://tools.ietf.org/html/draft-wright-json-schema-validation-00) ドキュメントで説明されている規範を使用します(このドキュメントは下書きであり、将来変化する可能性があります)。4Dのカレントの実装は、この下書きのバージョン4 に基づいています。

JSON スキーマが有効でない場合、4D は[Null](null.md) オブジェクトを返し、On error call メソッドでキャッチ可能なエラーを返します。

**JSON Validate** は評価の状態を提供するオブジェクトを返します。このオブジェクトは以下のプロパティを格納しています:

| **プロパティ名** | **型**        | **詳細**                                                                   |
| ---------- | ------------ | ------------------------------------------------------------------------ |
| *success*  | ブール          | *vJson* が有効であればTrue、それ以外の場合にはFalse です。False の場合、*errors* プロパティも同時に返されます。 |
| *errors*   | オブジェクトコレクション | *vJson* 引数が評価されなかった場合のエラーオブジェクトの一覧です(以下参照)。                              |

*errors* コレクションの各エラーオブジェクトには以下のプロパティが格納されています:

| **プロパティ名**    | **型** | **詳細**                                                                                                                     |
| ------------- | ----- | -------------------------------------------------------------------------------------------------------------------------- |
| *code*        | 数値    | エラーコード                                                                                                                     |
| *jsonPath*    | 文字列   | *vJson* 内で評価できなかったJSON パス                                                                                                  |
| *line*        | 数値    | JSON ファイル内でのエラーの行数。このプロパティはJSON が[JSON Parse](json-parse.md) コマンドに *\** 引数を渡した状態で解析された場合に返されます。それ以外の場合、このプロパティは省略されます。     |
| *message*     | 文字列   | エラーメッセージ                                                                                                                   |
| *offset*      | 数値    | JSON ファイル内でのエラーの行オフセット。このプロパティはJSON が[JSON Parse](json-parse.md) コマンドに *\** 引数を渡した状態で解析された場合に返されます。それ以外の場合、このプロパティは省略されます。 |
| *schemaPaths* | 文字列   | 評価エラーの原因となったスキーマ内のJSON パス                                                                                                  |

##### エラー管理 

返ってくる可能性あるエラーは以下の通りです:

| **コード** | **JSONキーワード**        | **補足**                                                |
| ------- | -------------------- | ----------------------------------------------------- |
| 2       | multipleOf           | 'multipleOf' キーに対しての検証中のエラー                           |
| 3       | maximum              | 提供された値はスキーマ ("{s1}")内での指定を超えてはいけません。                  |
| 4       | exclusiveMaximum     | 提供された値はスキーマ ("{s1}")内での指定未満でなければいけません。                |
| 5       | minimum              | 提供された値はスキーマ ("{s1}")内での指定を下回ってはいけません。                 |
| 6       | exclusiveMinimum     | 提供された値はスキーマ ("{s1}")内での指定を超えていなければいけません。              |
| 7       | maxLength            | 文字列がスキーマでの指定より長いです。                                   |
| 8       | minLength            | 文字列がスキーマでの指定より短いです。                                   |
| 9       | pattern              | 文字列"{s1}" はスキーマでのパターン{s2}に合致しません。                     |
| 10      | additionalItems      | 配列の検証中のエラー。JSONにはスキーマでの指定より多い要素が含まれています。              |
| 11      | maxItems             | 配列にはスキーマでの指定より多い項目が含まれています。                           |
| 12      | minItems             | 配列にはスキーマでの指定より少ない項目が含まれています。                          |
| 13      | uniqueItems          | 配列の検証中のエラー。要素が重複しています。"{s1}"のインスタンスがすでに配列内にあります。      |
| 14      | maxProperties        | プロパティの数がスキーマでの指定より多いです。                               |
| 15      | minProperties        | プロパティの数がスキーマでの指定より少ないです。                              |
| 16      | required             | 必須のプロパティ"{s1}" がありません。                                |
| 17      | additionalProperties | 追加のプロパティはスキーマによって許可されていません。プロパティ{s1} は削除する必要があります。    |
| 18      | dependencies         | "{s1}" プロパティには"{s2}" プロパティが必要です。                      |
| 19      | enum                 | 'enum' キーに対しての検証中のエラー。"{s1}"はスキーマないのどのenum要素とも合致しません。 |
| 20      | type                 | 不正な型です。予期される型は{s1}                                    |
| 21      | oneOf                | JSONはひとつ以上の値と合致します。                                   |
| 22      | oneOf                | JSONはどの値にも合致しません。                                     |
| 23      | not                  | JSONは'not'の値に対して有効です。                                 |
| 24      | format.              | 文字列が("{s1}")に合致しません。                                  |

#### 例題 

JSON オブジェクトをスキーマで評価して、その評価エラーの一覧があればそれを取得したい場合を考えます。エラー行とメッセージはテキスト変数に保存したいとします:

```4d
 var $oResult : Object
 $oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)
 If($oResult.success) //評価に成功
    ...
 Else //評価に失敗
    var $vLNbErr : Integer
    var $vTerrLine : Text
    $vLNbErr:=$oResult.errors.length ///エラーの行数を取得
    ALERT(String($vLNbErr)+" validation error(s) found.")
    For($i;0;$vLNbErr)
       $vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Carriage return
    End for
 End if
```

**注:** この例題ではオブジェクト記法が有効化されていることが前提となっています(*互換性ページ* を参照してください)。 

#### 参照 

  
  
[JSON Parse](json-parse.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1456 |
| スレッドセーフである | &check; |


