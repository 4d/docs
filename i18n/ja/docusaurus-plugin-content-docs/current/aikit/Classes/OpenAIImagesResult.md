---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## 継承元

- [OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ    | 型                                     | 説明                                                                              |
| -------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| `images` | [OpenAIImage](OpenAIImage.md) のコレクション | OpenAIImage オブジェクトのコレクションを返します。                                                 |
| `image`  | [OpenAIImage](OpenAIImage.md)         | コレクションから最初のOpenAIImage を返します。                                                   |
| `usage`  | Object                                | トークン使用状況の情報をかえします([OpenAIResult](OpenAIResult.md) から継承されます)。 |

### usage

`usage` プロパティは画像生成のトークン使用状況を格納したオブジェクトを返します(プロバイダーからサポートされていれば)。

| フィールド                  | 型       | 説明                                   |
| ---------------------- | ------- | ------------------------------------ |
| `total_tokens`         | Integer | 使用されたトークンの総数。                        |
| `input_tokens`         | Integer | 入力(プロンプト)でのトークン数。 |
| `output_tokens`        | Integer | 出力(画像)でのトークン数。    |
| `input_tokens_details` | Object  | 入力トークンの詳細(オプション)。 |

#### input_tokens_details

| フィールド          | 型       | 説明                                          |
| -------------- | ------- | ------------------------------------------- |
| `text_tokens`  | Integer | プロンプト内でのテキストトークン数。                          |
| `image_tokens` | Integer | 画像トークンの数(画像編集/バリエーション用)。 |

**レスポンスの例:**

```json
{
  "total_tokens": 100,
  "input_tokens": 50,
  "output_tokens": 50,
  "input_tokens_details": {
    "text_tokens": 10,
    "image_tokens": 40
  }
}
```

> **注意:** 画像生成使用状況は、全てのプロバイダーにおいて利用可能とは限りません。 この構造は、使用している特定の画像API エンドポイントによっては異なる場合があります。

## 関数

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| 引数       | 型                         | 説明                            |
| -------- | ------------------------- | ----------------------------- |
| *folder* | 4D.Folder | 画像が保存されるフォルダー。                |
| *prefix* | Text                      | 保存された画像ファイル名につける接頭辞。          |
| 戻り値      | Boolean                   | 画像が正常に保存された場合には、`True` を返します。 |

画像を指定されたディスクフォルダーに保存します。

## 参照

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
