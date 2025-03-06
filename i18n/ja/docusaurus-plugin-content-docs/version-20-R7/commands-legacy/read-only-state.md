---
id: read-only-state
title: Read only state
slug: /commands/read-only-state
displayed_sidebar: docs
---

<!--REF #_command_.Read only state.Syntax-->**Read only state** {( *aTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Read only state.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | 読み込みのみ状態を調べるテーブル, または 省略時はデフォルトテーブル |
| 戻り値 | Boolean | &#8592; | TRUE: テーブルへのアクセスは読み込みのみ FALSE: テーブルへのアクセスは読み書き可 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Read only state.Summary-->このコマンドは、コマンドが呼び出されるプロセス内の*aTable*の状態が読み込み専用かどうかを調べます。<!-- END REF-->*aTable*が読み込み専用であれば、[True](true.md "True")を返します。*aTable*が読み書き可であれば、[False](false.md "False")を返します。

#### 例題 

以下の例は\[Invoice\]テーブルの状態を判断するものです。\[Invoice\]テーブルの状態が読み込み専用であれば、読み書き可に設定し、カレントレコードを再度ロードします。

```4d
 If(Read only state([Invoice]))
    READ WRITE([Invoice])
    LOAD RECORD([Invoice])
 End if
```

**Note:** ユーザがレコードを修正できるようにするために、請求書レコードを再ロードします。すでに読み込み専用でロードされたレコードは、書き込み可能状態で再ロードされるまで、変更不可のままです。

#### 参照 

[READ ONLY](read-only.md)  
[READ WRITE](read-write.md)  
*レコードのロック*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 362 |
| スレッドセーフである | &check; |


