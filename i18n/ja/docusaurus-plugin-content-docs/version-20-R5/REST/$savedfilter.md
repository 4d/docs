---
id: savedfilter
title: $savedfilter
---

エンティティセット作成時に、$filter に定義したフィルターを保存します (_例_: `$savedfilter="{filter}"`)

## 説明

エンティティセットを作成する際に使用したフィルターを念のために保存しておくことができます。 4D Server のキャッシュからエンティティセットが削除されてしまっても (たとえばタイムアウトや容量の問題、[`$method=release`]($method.md#methodrelease) 操作によって) 、同じエンティティセットを取り戻すことができます。

`$savedfilter` を使用してエンティティセット作成時に使ったフィルターを保存したあとは、エンティティセットを取得する度に `$savedfilter` も受け渡します。

4D Server のキャッシュからエンティティセットが消えていた場合、10分のデフォルトタイムアウトで再作成されます。 エンティティセットが消えていた場合、再作成されるエンティティセットの内容は更新されたものです (新しくエンティティが追加されていたり、存在していたエンティティが削除されていたりする場合がありえます)。

エンティティセットの作成時に `$savedfilter` と [`$savedorderby`]($savedorderby.md) の両方を使用したにも関わらず、次の呼び出しでは片方を省略すると、返されるエンティティセットは同じ参照番号を持ちながら、この変更を反映します。

## 例題

エンティティセットを作成する際に <code>$savedfilter</code> を使います:

`GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset`

作成したエンティティセットにアクセスする際、そのエンティティセットが有効なのを確実にしたい場合には、次のように書きます:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"`
