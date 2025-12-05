---
id: openaifileparameters
title: OpenAIFileParameters
---

# OpenAIFileParameters

`OpenAIFileParameters` クラスはファイルアップロード操作のための引数を管理します。

## 継承元

[OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ名          | 型      | 必須 | 説明                                                                                   |
| --------------- | ------ | -- | ------------------------------------------------------------------------------------ |
| `expires_after` | Object | 任意 | ファイルの失効ポリシー。 デフォルトでは、 `purpose=batch` のファイルは30 日で失効し、それ以外の全てのファイルは手動で削除されるまでは維持されます。 |

### `expires_after` オブジェクト構造

`expires_after` オブジェクトには以下のプロパティが格納されています:

| プロパティ名    | 型       | 説明                                                                                                            |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| `anchor`  | Text    | 失効ポリシーが適用されるアンカータイムスタンプ。 サポートされるアンカー: `created_at` 。                                          |
| `seconds` | Integer | アンカー時間からファイルが有効期限が切れるまでの秒数。 3600 (1 時間) から 2592000 (30 日) の間でなければなりません。 |

## 使用例

```4d
var $params:=cs.AIKit.OpenAIFileParameters.new()

// 7 日後に執行するように設定する
$params.expires_after:={}
$params.expires_after.anchor:="created_at"
$params.expires_after.seconds:=604800  // 7 日相当
```

## 参照

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileResult](OpenAIFileResult.md)
