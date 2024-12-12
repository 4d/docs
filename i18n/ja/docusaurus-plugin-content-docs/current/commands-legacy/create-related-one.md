---
id: create-related-one
title: CREATE RELATED ONE
slug: /commands/create-related-one
displayed_sidebar: docs
---

<!--REF #_command_.CREATE RELATED ONE.Syntax-->**CREATE RELATED ONE** ( *aField* )<!-- END REF-->
<!--REF #_command_.CREATE RELATED ONE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | nフィールド |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CREATE RELATED ONE.Summary-->CREATE RELATED ONEには2つの機能があります。<!-- END REF-->関連するレコードが*aField* に対して存在しない場合 (つまり*aField* の現在の値に一致するものがない場合) 、CREATE RELATED ONEは新しくリレート先レコードを作成します。

適切なフィールドに値を保存するには、nフィールドから1フィールドへ値を割り当てます。[SAVE RELATED ONE](save-related-one.md "SAVE RELATED ONE")を実行して、この新しいレコードを保存します。

リレート先レコードが存在する場合、CREATE RELATED ONEは[RELATE ONE](relate-one.md "RELATE ONE")コマンドと全く同じようにそのレコードをメモリにロードします。

#### 参照 

[SAVE RELATED ONE](save-related-one.md)  