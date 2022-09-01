---
id: REST_requests
title: RESTリクエストについて
---


RESTリクエストでは次の構文がサポートされています:

| URI                              | リソース                                                                        | {サブリソース}                                                                   | {クエリ文字列}                                                        |
| -------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- |
| http://{servername}:{port}/rest/ | [{dataClass}](%7BdataClass%7D.html)/                                        | [{attribute1, attribute2, ...}](manData.html#selecting-attributes-to-get)/ |                                                                 |
|                                  | [{dataClass}](%7BdataClass%7D.html)/                                        | [{attribute1, attribute2, ...}](manData.html#selecting-attributes-to-get)/ | [{method}](%7BdataClass%7D.html#dataclassmethod)                |
|                                  |                                                                             |                                                                            | [$entityset/{entitySetID}](entityset.html#entitysetentitysetid) |
|                                  |                                                                             |                                                                            | [?$filter]($filter.md)                                          |
|                                  |                                                                             | [{attribute}](manData.html#selecting-attributes-to-get)/                   | [?$compute]($compute.md)                                        |
|                                  | [{dataClass}({key})](%7BdataClass%7D.html#dataclasskey)/                    | [{attribute1, attribute2, ...}](manData.html#selecting-attributes-to-get)/ |                                                                 |
|                                  | [{dataClass}:{attribute}(value)](%7BdataClass%7D%7Battribute%7D_value.html) |                                                                            |                                                                 |
|                                  | [$catalog]($catalog.md)                                                     |                                                                            |                                                                 |
|                                  | [$directory]($directory.md)                                                 |                                                                            |                                                                 |
|                                  | [$info]($info.md)                                                           |                                                                            |                                                                 |


RESTリクエストには、URI とリソースが必ず含まれていなければなりませんが、返されるデータをフィルダーするサブリソースの使用は任意です。

すべての URI と同様に、先頭パラメーターは "?" に続けて指定し、それ以降のパラメーターは "&" で区切ります。 例:

 `GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`
> 曖昧さ回避のため、値は引用符内に書くことができます。 たとえば、上の例では名字 (lastName) の値を単一引用符内に書けます: "lastName!='Jones'"。

パラメーターを利用することで、4Dプロジェクトのデータクラスのデータを操作できます。 `GET` HTTPメソッドを使ってデータを取得する以外にも、`POST` HTTPメソッドを使ってデータクラスのエンティティを追加・更新・削除することが可能です。

JSON の代わりに配列形式でデータを取得するには [`$asArray`]($asArray.md) パラメーターを使います。


## RESTステータスとレスポンス
各 RESTリクエストに対し、サーバーはステータスとレスポンス (エラー付き、またはエラー無し) を返します。

### リクエストステータス
RESTリクエストをおこなうと、レスポンスとともにステータスが返されます。 主なステータスをいくつか紹介します:

| ステータス                     | 詳細                                    |
| ------------------------- | ------------------------------------- |
| 0                         | リクエストは処理されませんでした (サーバー未起動の可能性)        |
| 200 OK                    | リクエストはエラーなく処理されました                    |
| 401 Unauthorized          | 権限エラー (ユーザーのアクセス権限を確認する必要があります)       |
| 402 No session            | セッションの最大数に達しています                      |
| 404 Not Found             | データクラスが REST に公開されていないか、エンティティが存在しません |
| 500 Internal Server Error | RESTリクエスト処理中にエラーが発生しました               |

### レスポンス

返されるレスポンス (JSON形式) はリクエストによって変わります。

エラーが発生した場合、その内容はレスポンスとともに返されるか、サーバーのレスポンスそのものになります。

 

