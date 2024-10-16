---
id: blob-to-document
title: BLOB TO DOCUMENT
slug: /commands/blob-to-document
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO DOCUMENT.Syntax-->**BLOB TO DOCUMENT** ( *document* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.BLOB TO DOCUMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | ドキュメント名 |
| Blob | Blob | &#8594;  | ドキュメントの新しいコンテンツ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BLOB TO DOCUMENT.Summary-->BLOB TO DOCUMENT は、*blob*に格納されているデータを使用して*document*の内容全体を上書きします。<!-- END REF-->*document*にはドキュメント名を渡します。*document*が存在しない場合、コマンドはドキュメントを作成します。既存のドキュメント名を渡す場合、それが開かれていないことを確認してください。ファイルが開かれているとエラーが生成されます。ドキュメントをユーザが選択できるようにするには、[Open document](open-document.md) または[Create document](create-document.md) 、およびプロセス変数*document* を使用します(例題を参照)。

#### 例題 

以下の例は、ドキュメントファイルをすばやく格納、または取得できるような情報システムを記述する場合を想定します。データ入力フォームで、 BLOBフィールドにロードされているデータが含まれているドキュメントファイルを保存できるようなボタンを作成します。このボタンのメソッドは、以下の ように作成します:

```4d
 $vhDocRef:=Create document("") // ドキュメントを作成する
 If(OK=1) // ドキュメントが作成されたら
    CLOSE DOCUMENT($vhDocRef) // それを閉じる
    BLOB TO DOCUMENT(Document;[YourTable]YourBLOBField) // ドキュメントに書き込む
    If(OK=0)
  // エラーを処理する
    End if
 End if
```

#### システム変数およびセット 

ドキュメントが正しく書きこまれたらOK変数は1に設定されます。そうでなければ0に設定され、エラーが生成されます。

#### エラー処理 

* 存在しないドキュメントや、既に他のプロセスやアプリケーションで開かれているドキュメントに書き込みしようとすると、対応するファイルマネージャエラーが生成されます。
* 新しいドキュメントを書き込むためのディスク容量が不足する場合があります。
* ドキュメントを書き込む際に、I／Oエラーが発生する場合があります。

いずれの場合でも、[ON ERR CALL](on-err-call.md "ON ERR CALL")割り込みメソッドを使用すれば、このエラーをとらえることができます。

#### 参照 

[Create document](create-document.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[Open document](open-document.md)  