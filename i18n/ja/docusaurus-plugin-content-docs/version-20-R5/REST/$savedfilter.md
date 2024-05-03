---
id: savedfilter
title: $savedfilter
---

Saves the filter defined by $filter when creating an entity set (_e.g._, `$savedfilter="{filter}"`)

## 説明

エンティティセットを作成する際に使用したフィルターを念のために保存しておくことができます。 If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling [`$method=release`]($method.md#methodrelease)).

You use `$savedfilter` to save the filter you defined when creating your entity set and then pass `$savedfilter` along with your call to retrieve the entity set each time.

4D Server のキャッシュからエンティティセットが消えていた場合、10分のデフォルトタイムアウトで再作成されます。 エンティティセットが消えていた場合、再作成されるエンティティセットの内容は更新されたものです (新しくエンティティが追加されていたり、存在していたエンティティが削除されていたりする場合がありえます)。

If you have used both `$savedfilter` and [`$savedorderby`]($savedorderby.md) in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that.

## 例題

エンティティセットを作成する際に <code>$savedfilter</code> を使います:

` GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset`

作成したエンティティセットにアクセスする際、そのエンティティセットが有効なのを確実にしたい場合には、次のように書きます:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"`
