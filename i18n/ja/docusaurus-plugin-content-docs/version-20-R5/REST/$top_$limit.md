---
id: top_$limit
title: $top/$limit
---

Limits the number of entities to return (e.g., `$top=50`)

## 説明

`$top/$limit` defines the limit of entities to return. この数字はデフォルトで 100件です。 You can use either keyword: `$top` or `$limit`.

When used in conjunction with [`$skip`]($skip.md), you can navigate through the entity selection returned by the REST request.

## 例題

エンティティセットから、20番目以降の10件のエンティティを取得します:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`
