---
id: blob-to-variable
title: BLOB TO VARIABLE
slug: /commands/blob-to-variable
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO VARIABLE.Syntax-->**BLOB TO VARIABLE** ( *BLOB* ; *variable* {; *offset*} )<!-- END REF-->
<!--REF #_command_.BLOB TO VARIABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | 4D変数を格納したBLOB |
| variable | Variable | &#8592; | BLOBの内容を書き込む変数 |
| offset | Integer |&#8596;  | BLOB内の変数の位置 |
| || | BLOB内の次の変数の位置 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BLOB TO VARIABLE.Summary-->BLOB TO VARIABLE コマンドは、*offset*引数で指定されたバイトオフセット (ゼロから開始) にある*blob*に格納されているデータを使用して*variable*を上書きします。<!-- END REF-->

BLOBデータは宛先変数と整合性を保っていなければなりません。通常、[VARIABLE TO BLOB](variable-to-blob.md) コマンドを使用して格納されたBLOBを使用します。

オプション引数の*offset*を指定しない場合には、変数データはBLOBの最初から読み込まれます。  
複数の変数が格納されているBLOBを操作する場合には、*offset*に数値型変数を渡さなければなりません。呼び出しの前に、この数値型変数に適切なオフセットを設定します。呼び出しの後で、この同じ数値型変数はBLOB内に格納されている次の変数へのオフセットを返します。

**注:** **BLOB TO VARIABLE** は [C\_OBJECT](c-object.md) 型および [C\_COLLECTION](c-collection.md) 型のオブジェクト変数およびコレクション変数をサポートします。詳細な情報に関しては、 [VARIABLE TO BLOB](variable-to-blob.md) コマンドを参照して下さい。

呼び出し後、変数が正常に上書きされた場合には、システム変数OKは1に設定されます。変数を上書きするために必要なメモリがない等の理由で処理が実行できなかった場合には、システム変数OKは0に設定されます。 

**プラットフォーム独立性に関する注意** 

BLOB TO VARIABLEと[VARIABLE TO BLOB](variable-to-blob.md)は4Dの内部フォーマットを使用してBLOBに格納される変数を取り扱います。この利点として、これら二つのコマンドを使用する際、プラットフォーム間のバイトスワップを気にする必要はありません。言い換えればこれらのコマンドを使用してWindowsで作成されたBLOBをMacintoshで使用する、あるいはその逆をおこなうことができます。

#### 例題 

[VARIABLE TO BLOB](variable-to-blob.md "VARIABLE TO BLOB")の例題参照

#### システム変数およびセット 

変数に書き込みが行われると、OK変数に1が設定されます。そうでなければ0が設定されます。

#### 参照 

[VARIABLE TO BLOB](variable-to-blob.md)  