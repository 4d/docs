---
id: old-related-one
title: OLD RELATED ONE
slug: /commands/old-related-one
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED ONE.Syntax-->**OLD RELATED ONE** ( *aField* )<!-- END REF-->
<!--REF #_command_.OLD RELATED ONE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | nフィールド |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OLD RELATED ONE.Summary-->OLD RELATED ONEは、リレーションを実行する際に*aField*の古い値を使用することを除き、[RELATE ONE](relate-one.md "RELATE ONE")と同じ処理を行います。<!-- END REF-->

**Note:** OLD RELATED ONEは[Old](old.md "Old")コマンドにより返される、nフィールドの古い値を使用します。詳細は[Old](old.md "Old")コマンドの説明を参照してください。

OLD RELATED ONEは、更新前のカレントレコードの内容にリレートしたレコードをロードし、そのリレートレコードにアクセスできるようにします。この更新前の関連レコードを修正し、保存したい場合には、[SAVE RELATED ONE](save-related-one.md "SAVE RELATED ONE")コマンドを使用する必要があります。新しく作成されたレコ－ドは、更新前の関連するレコ－ドを持たないという点に注意してください。

#### システム変数およびセット 

コマンドが正しく実行されリレーとされたレコードがロードされると、OKシステム変数は1に設定されます。ユーザが(リレートされたレコードが更新されたときに表示される) レコード選択ダイアログボックスで**キャンセル**をクリックすると、OK変数は0に設定されます。

#### 参照 

[Old](old.md)  
[OLD RELATED MANY](old-related-many.md)  
[RELATE ONE](relate-one.md)  
[SAVE RELATED ONE](save-related-one.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 44 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


