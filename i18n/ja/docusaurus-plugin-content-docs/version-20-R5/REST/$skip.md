---
id: skip
title: $skip
---

Starts the entity defined by this number in the collection (_e.g._, `$skip=10`)

## 説明

`$skip` defines which entity in the collection to start with. デフォルトでは、先頭エンティティから開始します。 10番目のエンティティから開始するには、10を渡します。

`$skip`  is generally used in conjunction with [`$top/$limit`]($top_$limit.md) to navigate through an entity collection.

## 例題

エンティティセットの20番目のエンティティ以降を取得します:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20`
