---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## 継承元

- [OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ    | 型                                     | 説明                              |
| -------- | ------------------------------------- | ------------------------------- |
| `images` | [OpenAIImage](OpenAIImage.md) のコレクション | OpenAIImage オブジェクトのコレクションを返します。 |
| `ピクチャー`  | [OpenAIImage](OpenAIImage.md)         | コレクションから最初のOpenAIImage を返します。   |

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
