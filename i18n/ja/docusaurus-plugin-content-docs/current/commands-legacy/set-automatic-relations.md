---
id: set-automatic-relations
title: SET AUTOMATIC RELATIONS
slug: /commands/set-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.SET AUTOMATIC RELATIONS.Syntax-->**SET AUTOMATIC RELATIONS** ( *one* {; *many*} )<!-- END REF-->
<!--REF #_command_.SET AUTOMATIC RELATIONS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| one | Boolean | &#8594;  | すべてのn対1リレーションの状態 |
| many | Boolean | &#8594;  | すべての1対nリレーションの状態 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET AUTOMATIC RELATIONS.Summary-->**SET AUTOMATIC RELATIONS** は、カレントプロセスで、データベース全体のマニュアルリレートを一時的に自動リレートに変更します。<!-- END REF-->リレートは、次に**SET AUTOMATIC RELATIONS** コマンドを使用するまで自動リレートのままになります。

* *one* が[True](true.md "True") の場合、すべてのn対1のマニュアルリレートを自動リレートに設定します。*one* が[False](false.md "False") の場合、前もって自動リレートにしたすべてのn対1リレートがマニュアルリレートに戻ります。
* *many* も1対nリレートに対して同じように作用します。

このコマンドはデザインモードで既に自動リレートに設定されたものに対しては無効です。

すべてのリレーションをデザインモードでマニュアルに設定した場合、このコマンドを使用して自動リレートを必要とする処理の直前で自動リレートに切り替えることができます (リレーショナル検索やソート等)。処理が終了した後で、再度マニュアルリレートに戻すことができます。

このコマンドはデザインモードで自動リレートに設定されたリレートを自動リレートを使用した処理(例えばリレートを利用した検索や並び替えなど)を行う直前に手動リレートに変更します。処理が終了した後に、再度**SET AUTOMATIC RELATIONS** を呼び出して手動リレートに戻すことができます。

**注意:** 

* **SET AUTOMATIC RELATIONS**コマンドに [True](true.md "True") を渡すと、全ての手動リレートがセッション中に自動モードが"ロック"されます。この場合、 [SET FIELD RELATION](set-field-relation.md) コマンドは**SET AUTOMATIC RELATIONS** の前にあっても後ろにあっても、同じセッション中は呼び出しが無視されます。自動モードを解除して[SET FIELD RELATION](set-field-relation.md) の呼び出しを有効化する際には、**SET AUTOMATIC RELATIONS** に [False](false.md "False")を渡します。
* 自動リレーション機能はリレートされたテーブルが[DISPLAY SELECTION](display-selection.md) 、[MODIFY SELECTION](modify-selection.md) 、あるいはサブフォームを使用して表示されたリストフォーム内で表示されている場合には、無効化されているということに注意してください。詳細については*自動およびマニュアルリレーション* を参照してください。

#### 例題 

以下の例は、すべてのn対1のマニュアルリレートを自動リレートに設定し、前もって自動リレートにした1対nリレートを手動リレートに戻します:

```4d
 SET AUTOMATIC RELATIONS(True;False)
```

#### 参照 

[GET AUTOMATIC RELATIONS](get-automatic-relations.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SET FIELD RELATION](set-field-relation.md)  
*リレーションについて*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 310 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


