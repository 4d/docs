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
| `ピクチャー`  | [OpenAIImage](OpenAIImage.md)         | コレクションから最初のOpenAIImage を返します。                                                   |
| `usage`  | Object                                | トークン使用状況の情報をかえします([OpenAIResult](OpenAIResult.md) から継承されます)。 |

### usage

The `usage` property returns an object containing token usage information for image generation (when supported by the provider).

| フィールド                  | 型       | 説明                                                                          |
| ---------------------- | ------- | --------------------------------------------------------------------------- |
| `total_tokens`         | Integer | Total tokens used.                                          |
| `input_tokens`         | Integer | Number of tokens in the input (prompt).  |
| `output_tokens`        | Integer | Number of tokens for the output (image). |
| `input_tokens_details` | Object  | Breakdown of input tokens (optional).    |

#### input_tokens_details

| フィールド          | 型       | 説明                                                                                        |
| -------------- | ------- | ----------------------------------------------------------------------------------------- |
| `text_tokens`  | Integer | Number of text tokens in the prompt.                                      |
| `image_tokens` | Integer | Number of image tokens (for image editing/variations). |

**Example response:**

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

> **Note:** Image generation usage may not be available from all providers. The structure may vary depending on the specific image API endpoint used.

## 関数

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| 引数       | 型                         | 説明                            |
| -------- | ------------------------- | ----------------------------- |
| *folder* | 4D.Folder | 画像が保存されるフォルダ。                 |
| *prefix* | Text                      | 保存された画像ファイル名につける接頭辞。          |
| 戻り値      | Boolean                   | 画像が正常に保存された場合には、`True` を返します。 |

画像を指定されたディスクフォルダに保存します。

## 参照

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
