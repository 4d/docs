---
id: save-related-one
title: SAVE RELATED ONE
slug: /commands/save-related-one
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RELATED ONE.Syntax-->**SAVE RELATED ONE** ( *aField* )<!-- END REF-->
<!--REF #_command_.SAVE RELATED ONE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | nフィールド |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAVE RELATED ONE.Summary-->SAVE RELATED ONEは、*aField*にリレートするレコードを保存します。<!-- END REF-->[CREATE RELATED ONE](create-related-one.md "CREATE RELATED ONE")で新しく作成したレコードを更新する、または[RELATE ONE](relate-one.md "RELATE ONE")でロードし修正したレコードを保存するために、SAVE RELATED ONEコマンドを実行します。

SAVE RELATED ONEは、ロックされたレコードを保存しません。このコマンドを使用する場合、最初にレコードがロックされていないことを確認する必要があります。レコードがロックされている場合、このコマンドは無視され、レコードを保存せずエラーも返しません。  

#### 参照 

[CREATE RELATED ONE](create-related-one.md)  
[Locked](locked.md)  
[RELATE ONE](relate-one.md)  
*トリガ*  