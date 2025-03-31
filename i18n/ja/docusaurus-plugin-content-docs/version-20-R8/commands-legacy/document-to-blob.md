---
id: document-to-blob
title: DOCUMENT TO BLOB
slug: /commands/document-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.DOCUMENT TO BLOB.Syntax-->**DOCUMENT TO BLOB** ( *document* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.DOCUMENT TO BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | ドキュメント名 |
| Blob | Blob |&#8596; | ドキュメントを受け取るBLOBフィールドまたは変数 |
||| | ドキュメントの内容 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOCUMENT TO BLOB.Summary-->DOCUMENT TO BLOB は、*document*の内容全体を*blob*にロードします。<!-- END REF-->開かれていない既存のドキュメントを渡さなければなりません。そうでなければエラーが生成されます。ドキュメントをユーザが選択できるようにするには、[Open document](open-document.md) およびプロセス変数*document* を使用します(例題を参照)。

#### 例題 

以下の例は、ドキュメントファイルをすばやく格納、または取得できるような情報システムを記述する場合を想定します。データ入力フォームで、ドキュ メントファイルをBLOBフィールドにロードできるようなボタンを作成します。このボタンに以下のようなメソッドを作成します:

```4d
 $vhDocRef:=Open document("") // ドキュメントを選択させる
 If(OK=1) // ドキュメントが選択されたら
    CLOSE DOCUMENT($vhDocRef) // それを閉じる
    DOCUMENT TO BLOB(Document;[YourTable]YourBLOBField) // ドキュメントをロード
    If(OK=0)
  // エラー処理
    End if
 End if
```

#### システム変数およびセット 

ドキュメントが正しくロードされると、OK変数は1に設定されます。そうでなければ0に設定され、エラーが生成されます。

#### エラー処理 

* 存在しないドキュメントファイルや、既に他のプロセスやアプリケーションで開かれているドキュメントファイルを（BLOBに）ロードしようとすると、それぞれに対応するファイルマネージャエラーが生成されます。
* ドキュメントファイルがロックされていたり、ロックされているボリュームにあったり、ドキュメントファイルを読み込む際に問題が発生すると、I／Oエラーが発生する場合があります。
* メモリ不足のためにドキュメントファイルをロードできない場合には、エラー-108が生成されます。

いずれの場合でも、[ON ERR CALL](on-err-call.md "ON ERR CALL")割り込みメソッドを使用すれば、このエラーをとらえることができます。

#### 参照 

[BLOB TO DOCUMENT](blob-to-document.md)  
[Open document](open-document.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 525 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


