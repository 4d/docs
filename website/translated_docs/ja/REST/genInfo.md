---
id: genInfo
title: サーバー情報の取得
---

RESTサーバーの次の情報を取得することができます:

- 公開されているデータクラスとデータクラス属性
- RESTサーバーのキャッシュの中身 (ユーザーセッションを含む)

## カタログ

[公開されているデータクラスとデータクラス属性](configuration.md#テーブルやフィールドの公開) のリストを取得するには [`$catalog`]($catalog.md)、[`$catalog/{dataClass}`]($catalog.md#catalogdataclass)、または [`$catalog/$all`]($catalog.md#catalogall) パラメーターを使います。

公開されている全データクラスとデータクラス属性のコレクションを取得するには:

`GET /rest/$catalog/$all`


## キャッシュ情報

4D Server のキャッシュに保存されているエンティティセレクション、および実行中のユーザーセッションの情報を取得するには [`$info`]($info.md) パラメーターを使います。

## queryPath と queryPlan

Entity selections that are generated through queries can have the following two properties: `queryPlan` and `queryPath`. To calculate and return these properties, you just need to add [`$queryPlan`]($queryplan.md) and/or [`$queryPath`]($querypath.md) in the REST request.

たとえば:

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

These properties are objects that contain information about how the server performs composite queries internally through dataclasses and relations:
- **queryPlan**: object containing the detailed description of the query just before it was executed (i.e., the planned query).
- **queryPath**: object containing the detailed description of the query as it was actually performed.

The information recorded includes the query type (indexed and sequential) and each necessary subquery along with conjunction operators. Query paths also contain the number of entities found and the time required to execute each search criterion. You may find it useful to analyze this information while developing your application. Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low.