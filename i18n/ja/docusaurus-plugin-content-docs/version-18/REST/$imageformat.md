---
id: imageformat
title: '$imageformat'
---

画像取得の際に使用する画像形式を指定します (*例*: `$imageformat=png`)

## 説明

画像の表示に使う形式を指定します。 You can use one of the following formats (extensions, mime types and OsType Mac are supported):

| タイプ                     | 説明       |
| ----------------------- | -------- |
| "best"                  | 画像に最適な形式 |
| ".gif" or "image/gif"   | GIF 形式   |
| ".png" or "image/png"   | PNG 形式   |
| ".jpeg" or "image/jpeg" | JPEG 形式  |
| ".tiff" or "image/tiff" | TIFF 形式  |

画像を完全に読み込むには、形式を指定するだけでなく、画像属性を [`$expand`]($expand.md) に渡す必要があります。

If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be an empty object `{}`.

## 例題

photo属性の実際の形式に関わらず、画像形式を JPEG に指定し、サーバーより受け取ったバージョン番号を受け渡している例です:

`GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo`

