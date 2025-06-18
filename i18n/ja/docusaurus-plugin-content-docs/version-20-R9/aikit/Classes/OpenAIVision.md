---
id: openaivision
title: OpenAIVision
---

# OpenAIVision

視覚関連のヘルパー。

## 関数

### create()

\**create*(*imageURL* : Text) : OpenAIVisionHelper

| 引数         | 型                                           | 説明                    |
| ---------- | ------------------------------------------- | --------------------- |
| *imageURL* | Text                                        | 解析したい画像のURL。          |
| 戻り値        | [OpenAIVisionHelper](OpenAIVisionHelper.md) | 画像を解析するためのヘルパーインスタンス。 |

#### 使用例

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")
var $result:=$helper.prompt("Could you describe it?")
```

### fromFile()

\**fromFile*(*imageFile* : 4D.File) : OpenAIVisionHelper

| 引数          | 型                                           | 説明                    |
| ----------- | ------------------------------------------- | --------------------- |
| *imageFile* | 4D.File                     | 解析したい画像ファイル。          |
| 戻り値         | [OpenAIVisionHelper](OpenAIVisionHelper.md) | 画像を解析するためのヘルパーインスタンス。 |

#### 使用例

```4d
var $helper:=$client.chat.vision.fromFile(Folder(fk resource foldres).file("image.png"))
var $result:=$helper.prompt("Could you describe it?")
```

### fromPicture()

\**fromPicture*(*image* : Picture) : OpenAIVisionHelper

| 引数      | 型                                           | 説明                    |
| ------- | ------------------------------------------- | --------------------- |
| *image* | Picture                                     | 解析したい画像。              |
| 戻り値     | [OpenAIVisionHelper](OpenAIVisionHelper.md) | 画像を解析するためのヘルパーインスタンス。 |

#### 使用例

```4d
var $helper:=$client.chat.vision.fromPicture($image)
var $result:=$helper.prompt("Could you describe it?")
```
