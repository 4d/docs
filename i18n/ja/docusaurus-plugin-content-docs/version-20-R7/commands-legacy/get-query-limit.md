---
id: get-query-limit
title: Get query limit
slug: /commands/get-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.Get query limit.Syntax-->**Get query limit** : Integer<!-- END REF-->
<!--REF #_command_.Get query limit.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | クエリ結果の制限数値0 = 制限なし |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get query limit.Summary-->**Get query limit**コマンドはカレントプロセスでクエリ結果として返されるレコードの上限値を返します。<!-- END REF-->

この上限値は[SET QUERY LIMIT](set-query-limit.md)コマンドを使用して設定できます。 

デフォルトでは制限がなく、この場合コマンドは0を返します。

#### 参照 

[SET QUERY LIMIT](set-query-limit.md)  