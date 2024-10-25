---
id: read-only
title: READ ONLY
slug: /commands/read-only
displayed_sidebar: docs
---

<!--REF #_command_.READ ONLY.Syntax-->**READ ONLY** {( aTable | * )}<!-- END REF-->
<!--REF #_command_.READ ONLY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable &#124; * | テーブル, 演算子 | &#8594;  | 読み込みのみにするテーブル, または *: すべてのテーブル, または 省略時: デフォルトテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.READ ONLY.Summary-->READ ONLYは、コマンドが呼び出されたプロセス内の*aTable*の状態を読み込みのみに変更します。<!-- END REF-->このコマンドを実行した後でロードしたレコードはすべてロックされ、変更することはできません。*\** を指定すると、すべてのテーブルが読み込みのみに変更されます。

レコ－ドを修正する必要のない場合に、READ ONLYを使用します。

**Note:** このコマンドは、コマンドが実行された時点からさかのぼって適用されることはありません。レコードはロードされた時点におけるテーブルの読み書き状態に従ってロードされます。読み書き可のテーブルから、読み込みのみ状態でレコードをロードするには、先にテーブルを読み込みのみ状態に変更する必要があります。

#### 参照 

[Read only state](read-only-state.md)  
[READ WRITE](read-write.md)  
*レコードのロック*  