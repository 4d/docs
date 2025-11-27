---
id: openaifilelistresult
title: OpenAIFileListResult
---

# OpenAIFileListResult

`OpenAIFileListResult` クラスには、OpenAI API からのファイルをリストアップした結果が格納されています。

## 継承元

[OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ      | 型          | 説明                                                                                          |
| ---------- | ---------- | ------------------------------------------------------------------------------------------- |
| `files`    | Collection | API レスポンスからの[OpenAIFile](OpenAIFile.md) オブジェクトのコレクションを返します。ファイルが何も見つからない場合には空のコレクションが返されます。 |
| `first_id` | Text       | リストの最初のファイルのID を返します。利用できない場合は空の文字列を返します。                                                   |
| `last_id`  | Text       | リストの最後のファイルのID を返します。利用できない場合は空の文字列を返します。                                                   |
| `has_more` | Boolean    | このページの後にまだファイルがあるかどうかを示します。 まだ取得するファイルがある場合には `True`、それ以外の場合には `False`。                     |

## 使用例

### 基本的な使用法

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.purpose:="assistants"
$params.limit:=50

var $result:=$client.files.list($params)
var $files:=$result.files

For each ($file; $files)
    // それぞれの OpenAIFile オブジェクトを処理
    // $file.filename -> "salesOverview.pdf"
    // $file.bytes -> 175
    // $file.purpose -> "assistants"
End for each
```

### ページ分けの例

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.limit:=100

var $result:=$client.files.list($params)
var $allFiles:=$allFiles.combine($result.files)

// まだファイルがある場合には取得を継続
While ($result.has_more)
    $params.after:=$result.last_id
    $result:=$client.files.list($params)
    $allFiles:=$allFiles.combine($result.files)
End while 

// $allFiles には組織からの全てのファイルが格納されています
```

## 参照

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFile](OpenAIFile.md)
- [OpenAIFileListParameters](OpenAIFileListParameters.md)