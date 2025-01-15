---
id: version
title: $version
---

画像のバージョン番号

## 説明

`$version` はサーバーにより返される画像のバージョン番号です。 サーバーより受け取るバージョン番号は、ブラウザーのキャッシュを回避し、正しい画像を取得できるようにします。

画像の version パラメーターの値はサーバーによって変更されます。

## 例題

photo属性の実際の形式に関わらず、画像形式を JPEG に指定し、サーバーより受け取ったバージョン番号を受け渡している例です:

`GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`
