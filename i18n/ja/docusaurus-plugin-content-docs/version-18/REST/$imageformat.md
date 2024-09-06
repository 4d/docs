---
id: imageformat
title: '$imageformat'
---

画像取得の際に使用する画像形式を指定します (*例*: `$imageformat=png`)

## 説明

画像の表示に使う形式を指定します。 次の形式が指定できます (拡張子、MIMEタイプ、OSType Mac がサポートされています):

| 型                        | 説明       |
| ------------------------ | -------- |
| "best"                   | 画像に最適な形式 |
| ".gif" または "image/gif"   | GIF 形式   |
| ".png" または "image/png"   | PNG 形式   |
| ".jpeg" または "image/jpeg" | JPEG 形式  |
| ".tiff" または "image/tiff" | TIFF 形式  |

画像を完全に読み込むには、形式を指定するだけでなく、画像属性を [`$expand`]($expand.md) に渡す必要があります。

読み込むべき画像がない場合、または指定した形式では画像が読み込めない場合、レスポンスは空のオブジェクト `{}` になります。

## 例題

photo属性の実際の形式に関わらず、画像形式を JPEG に指定し、サーバーより受け取ったバージョン番号を受け渡している例です:

`GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo`

