---
id: old-related-many
title: OLD RELATED MANY
slug: /commands/old-related-many
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED MANY.Syntax-->**OLD RELATED MANY** ( *aField* )<!-- END REF-->
<!--REF #_command_.OLD RELATED MANY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | 1フィールド |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OLD RELATED MANY.Summary-->OLD RELATED MANYは、1フィールドの更新前の内容を使用してリレート処理を実行する以外は、[RELATE MANY](relate-many.md "RELATE MANY")コマンドと同じ処理を行います。<!-- END REF-->

**Note:**OLD RELATED MANYコマンドは[Old](old.md "Old")関数により返される、nフィールドの古い値を使用します。詳細は、[Old](old.md "Old")関数の説明を参照してください。

OLD RELATED MANYはリレートテーブルのセレクションを変更し、カレントレコードとしてそのセレクションの最初のレコードを選択します。

#### 参照 

[OLD RELATED ONE](old-related-one.md)  
[RELATE MANY](relate-many.md)  