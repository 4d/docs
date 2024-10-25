---
id: object-set-subform-container-value
title: OBJECT SET SUBFORM CONTAINER VALUE
slug: /commands/object-set-subform-container-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Syntax-->**OBJECT SET SUBFORM CONTAINER VALUE** ( *value* )<!-- END REF-->
<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| value | any | &#8594;  | データソースの新しい値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Summary-->**OBJECT SET SUBFORM CONTAINER VALUE** コマンドは、オヤフォーム内に表示されたサブフォームコンテナにバインドされたデータソースのカレント値を設定します。<!-- END REF-->

このコマンドはサブフォームとして使用されているフォームのコンテキストにおいてのみ使用できます。それ以外のコンテキストでは、このコマンドは何もしません。

*value* 引数には、サブフォームコンテナにバインドされているデータソースと同じ型の値を渡します。データソースは代入可能な式である必要があります(*代入可 vs 代入不可の式* を参照)。そうでない場合、コマンドは何もしません。

バインド変数とフォーム/サブフォームの相互作用についての詳細な情報については、developer.4d.com の*バインドされた変数あるいは式の管理* を参照してください。

#### 例題 

このコマンドの具体的な使用例については、[OBJECT Get subform container value](object-get-subform-container-value.md) の章に例題があります。

#### 参照 

[Form](form.md)  
[OBJECT Get subform container value](object-get-subform-container-value.md)  