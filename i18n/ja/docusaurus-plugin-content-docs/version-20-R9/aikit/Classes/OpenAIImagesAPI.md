---
id: openaiimagesapi
title: OpenAIImagesAPI
---

# OpenAIImagesAPI

`OpenAIImagesAPI` はOpenAI のAPI を使用して画像を生成する機能を提供します。

https://platform.openai.com/docs/api-reference/images

## 関数

### generate()

**generate**(*prompt* : Text; *parameters* : OpenAIImageParameters) : OpenAIImagesResult

| 引数           | 型                                                 | 説明               |
| ------------ | ------------------------------------------------- | ---------------- |
| *prompt*     | Text                                              | 画像の生成に使用するプロンプト。 |
| *parameters* | [OpenAIImageParameters](OpenAIImageParameters.md) | 画像生成のためのパラメータ。   |
| 戻り値          | [OpenAIImagesResult](OpenAIImagesResult.md)       | 生成された画像を格納する結果。  |

プロンプトを与えられると画像を作成します。

https://platform.openai.com/docs/api-reference/images/create

## 例題

```4d
var $result:=$client.image.generate("A futuristic city skyline at sunset"; {size: "1024x1024"})

var $image:=$result.image
If($image#Null)
  $image.saveToDisk(Folder(fk desktop folder).file("skylinecity.png"))
End if
```

複数の画像が生成された場合

```4d
var $image: cs.AIKit.OpenAIImage
For each($image; $resule.images || [])
  // asBlob、 asPicture、 saveToDisk などを使用
End for each
```