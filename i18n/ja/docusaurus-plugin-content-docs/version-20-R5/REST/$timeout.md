---
id: timeout
title: $timeout
---

Defines the number of seconds to save an entity set in 4D Server's cache (_e.g._, `$timeout=1800`)

## 説明

To define a timeout for an entity set that you create using [`$method=entityset`]($method.md#methodentityset), pass the number of seconds to `$timeout`. たとえば、20分のタイムアウトを設定するには、1200を渡します。 デフォルトのタイムアウトは 2時間です。

Once the timeout has been defined, each time an entity set is called upon (by using `$method=entityset`), the timeout is recalculated based on the current time and the timeout.

If an entity set is removed and then recreated using `$method=entityset` along with [`$savedfilter`]($savedfilter.md), the new default timeout is 10 minutes regardless of the timeout you defined when calling `$timeout`.

## 例題

作成するエンティティセットのタイムアウトを 20分に設定します:

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`
