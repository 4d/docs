---
id: imageformat
title: $imageformat
---

Defines which image format to use for retrieving images (_e.g._, `$imageformat=png`)

## 説明

画像の表示に使う形式を指定します。 次の形式が指定できます (拡張子、MIMEタイプ、OSType Mac がサポートされています):

| タイプ                                      | 説明       |
| ---------------------------------------- | -------- |
| "best"                                   | 画像に最適な形式 |
| ".gif" または "image/gif"   | GIF 形式   |
| ".png" または "image/png"   | PNG 形式   |
| ".jpeg" または "image/jpeg" | JPEG 形式  |
| ".tiff" または "image/tiff" | TIFF 形式  |

Once you have defined the format, you must pass the image attribute to [`$expand`]($expand.md) to load the photo completely.

If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be an empty object `{}`.

## 例題

photo属性の実際の形式に関わらず、画像形式を JPEG に指定し、サーバーより受け取ったバージョン番号を受け渡している例です:

`GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo`
