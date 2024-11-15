---
id: blob-to-list
title: BLOB to list
slug: /commands/blob-to-list
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to list.Syntax-->**BLOB to list** ( *BLOB* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to list.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | 階層リストが格納されたBLOB |
| offset | Integer | &#8596;  | BLOB内のオフセット (バイト単位) |
| || | 読み込み後の新しいオフセット |
| 戻り値 | Integer | &#8592; | 新しく作成されたリスト参照 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.BLOB to list.Summary-->BLOB to list コマンドは*blob*中、*offset*で指定されたバイトオフセット（ゼロから開始）に格納されているデータを使用して新しい階層リストを作成し、このリストのリスト参照番号を返します。<!-- END REF-->

BLOBデータはコマンドと整合性を保っていなければなりません。通常、[LIST TO BLOB](list-to-blob.md "LIST TO BLOB")コマンドを使用して階層リストを格納したBLOBを使用します。

オプション引数*offset*を指定しない場合には、階層リストはBLOBの最初から読み込まれます。複数の変数やリストが格納されているBLOBを操作する場合には、*offset*にオフセットを格納した数値型変数を渡さなければなりません。呼び出しの前に、この数値型変数を適切なオフセットに設定します。呼び出しの後で、この数値型変数はBLOB内に格納されている次の変数へのオフセットを返します。

呼び出し後、階層リストが正常に作成された場合には、システム変数OKは1に設定されます。階層リストを作成するために必要なメモリがない等の理由で処理が実行できなかった場合には、システム変数OKは0に設定されます。

**プラットフォーム独立性に関する注意**  

BLOB to listや[LIST TO BLOB](list-to-blob.md "LIST TO BLOB")は、 BLOBに格納されたリストを処理するために4Dの内部フォーマットを使用します。この利点として、これら二つのコマンドを使用する際、プラットフォーム 間のバイトスワップを気にする必要はありません。言い換えればこれらのコマンドを使用してWindowsで作成されたBLOBをMacintoshで使用 する、あるいはその逆を行うことができます。

#### 例題 

この例では、データ入力フォームが画面に表示される前に、このフォームのフォームメソッドがBLOBフィールドからリストを抽出し、データ入力が検証されるとこのリストをBLOBフィールドに再び格納します:

```4d
  // [Things To Do];"Input" フォームメソッド
 
 Case of
 
    :(Form event code=On Load)
       hList:=BLOB to list([Things To Do]Other Crazy Ideas)
       If(OK=0)
          hList:=New list
       End if
 
    :(Form event code=On Unload)
       CLEAR LIST(hList;*)
 
    :(bValidate=1)
       LIST TO BLOB(hList;[Things To Do]Other Crazy Ideas)
 
 End case
```

#### システム変数およびセット 

リストが正しく作成されると、OK変数には1が設定されます。そうでなければ0が設定されます。

#### 参照 

[LIST TO BLOB](list-to-blob.md)  