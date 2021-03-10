---
id: savedfilter
title: '$savedfilter'
---

エンティティセット作成時に、$filter に定義したフィルターを保存します (*例*: `$savedfilter="{filter}"`)

## 説明

エンティティセットを作成する際に使用したフィルターを念のために保存しておくことができます。 4D Server のキャッシュからエンティティセットが削除されてしまっても (たとえばタイムアウトや容量の問題、[`$method=release`]($method.md#methodrelease) 操作によって) 、同じエンティティセットを取り戻すことができます。

You use `$savedfilter` to save the filter you defined when creating your entity set and then pass `$savedfilter` along with your call to retrieve the entity set each time.

If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. エンティティセットが消えていた場合、再作成されるエンティティセットの内容は更新されたものです (新しくエンティティが追加されていたり、存在していたエンティティが削除されていたりする場合がありえます)。

If you have used both `$savedfilter` and [`$savedorderby`]($savedorderby.md) in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that.

## 例題

In our example, we first call ``$savedfilter` with the initial call to create an entity set as shown below:

`GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset`

Then, when you access your entity set, you write the following to ensure that the entity set is always valid:

`GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"`
