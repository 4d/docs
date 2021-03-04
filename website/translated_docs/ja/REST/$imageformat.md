---
id: imageformat
title: '$imageformat'
---

画像取得の際に使用する画像形式を指定します (*例*: `$imageformat=png`)

## 説明

画像の表示に使う形式を指定します。 デフォルトでは、画像に最適な形式が選択されます。 指定する場合は、次の形式が指定できます:

| タイプ  | 説明                             |
| ---- | ------------------------------ |
| GIF  | GIF format                     |
| PNG  | PNG format                     |
| JPEG | JPEG format                    |
| TIFF | TIFF format                    |
| best | Best format based on the image |

Once you have defined the format, you must pass the image attribute to [`$expand`]($expand.md) to load the photo completely.

If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be empty.

## 例題

The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:

`GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`

