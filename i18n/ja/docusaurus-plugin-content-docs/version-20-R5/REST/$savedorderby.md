---
id: savedorderby
title: $savedorderby
---

エンティティセット作成時に、`$orderby` に定義した並べ替え情報を保存します (_例_: `$savedorderby="{orderby}"`)

## 説明

エンティティセットを作成する際に使用した並べ替え情報を念のために保存しておくことができます。 4D Server のキャッシュからエンティティセットが削除されてしまっても (たとえばタイムアウトや容量の問題、[`$method=release`]($method.md#methodrelease) 操作によって) 、同じエンティティセットを取り戻すことができます。

`$savedorderby` を使用してエンティティセット作成時に使った並べ替え情報を保存したあとは、エンティティセットを取得する度に `$savedorderby` も受け渡します。

4D Server のキャッシュからエンティティセットが消えていた場合、10分のデフォルトタイムアウトで再作成されます。 エンティティセットの作成時に [`$savedfilter`]($savedfilter.md) と `$savedorderby` の両方を使用したにも関わらず、次の呼び出しでは片方を省略すると、返されるエンティティセットは同じ参照番号を持ちながら、この変更を反映します。

## 例題

エンティティセットを作成する際に `$savedorderby` を使います:

`GET  /rest/People/?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset`

作成したエンティティセットにアクセスする際、そのエンティティセットが有効なのを確実にしたい場合には、($savedfilter と $savedorderby を両方使って) 次のように書きます:

`GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=''"&$savedorderby="salary"`
