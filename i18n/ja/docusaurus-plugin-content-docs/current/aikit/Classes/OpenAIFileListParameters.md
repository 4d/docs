---
id: openaifilelistparameters
title: OpenAIFileListParameters
---

# OpenAIFileListParameters

`OpenAIFileListParameters` クラスはOpenAI API 内でファイルをリストするための引数が格納されています。

## 継承元

[OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ名    | 型       | 必須 | デフォルト | 説明                                                                                                                                                                      |
| --------- | ------- | -- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`   | Text    | 任意 | -     | ページネーションで使用するためのカーソル。 `after` はリスト内での位置を定義するためのオブジェクト ID です。 例えば、リストをリクエストして100個のオブジェクトを受信し、最後が `obj_foo` だった場合、その次の呼び出しに `after=obj_foo` を含めることでリストの次のページを取得することができます。 |
| `limit`   | Integer | 任意 | 10000 | 返されるオブジェクト数の上限。 上限値は1から10000 を選択でき、デフォルトの値は10000です。                                                                                                                     |
| `order`   | Text    | 任意 | desc  | オブジェクトの `created_at` タイプスタンプ順で並び替えします。 昇順には `asc` を、降順には `desc` を使用します。                                                                                                 |
| `purpose` | Text    | 任意 | -     | 特定の目的のファイルのみを返します。                                                                                                                                                      |

## 使用例

```4d
// purpose が "fine-tune" である最初の100個のファイルを取得
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.limit:=100
$params.purpose:="fine-tune"
$params.order:="desc"

var $result:=$client.files.list($params)
```

## 参照

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
