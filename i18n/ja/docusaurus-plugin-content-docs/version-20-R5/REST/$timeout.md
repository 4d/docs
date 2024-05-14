---
id: timeout
title: $timeout
---

4D Server のキャッシュにエンティティセットが保存される時間 (秒単位) を指定します (_例_: `$timeout=1800`)

## 説明

[`$method=entityset`]($method.md#methodentityset) を使って作成するエンティティセットについてタイムアウトを指定するには任意の秒数を `$timeout` に渡します。 たとえば、20分のタイムアウトを設定するには、1200を渡します。 デフォルトのタイムアウトは 2時間です。

一旦タイムアウトが定義されると、(`$method=entityset` によって) エンティティセットが呼び出される度に現時刻とタイムアウトに基づいて有効期限が再計算されます。

一度削除されたエンティティセットが `$method=entityset` と [`$savedfilter`]($savedfilter.md) の組み合わせで再作成された場合、`$timeout` で指定していた数値に関わらず、デフォルトタイムアウトは 10分です。

## 例題

作成するエンティティセットのタイムアウトを 20分に設定します:

`GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`
