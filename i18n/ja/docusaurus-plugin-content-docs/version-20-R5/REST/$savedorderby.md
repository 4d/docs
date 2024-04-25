---
id: savedorderby
title: $savedorderby
---

Saves the order by defined by `$orderby` when creating an entity set (_e.g._, `$savedorderby="{orderby}"`)

## 説明

エンティティセットを作成する際に使用した並べ替え情報を念のために保存しておくことができます。 If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling [`$method=release`]($method.md#methodrelease)).

You use `$savedorderby` to save the order you defined when creating your entity set, you then pass `$savedorderby` along with your call to retrieve the entity set each time.

4D Server のキャッシュからエンティティセットが消えていた場合、10分のデフォルトタイムアウトで再作成されます。 If you have used both [`$savedfilter`]($savedfilter.md) and `$savedorderby` in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that.

## 例題

You first call `$savedorderby` with the initial call to create an entity set:

`GET  /rest/People/?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset`

作成したエンティティセットにアクセスする際、そのエンティティセットが有効なのを確実にしたい場合には、($savedfilter と $savedorderby を両方使って) 次のように書きます:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=''"&$savedorderby="salary"`
