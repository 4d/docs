---
id: display-record
title: DISPLAY RECORD
slug: /commands/display-record
displayed_sidebar: docs
---

<!--REF #_command_.DISPLAY RECORD.Syntax-->**DISPLAY RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.DISPLAY RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードを表示するテーブル, または 省略時、デフォルトテーブル |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.DISPLAY RECORD.Summary-->DISPLAY RECORDコマンドは、カレント入力フォームを使って、*aTable*のカレントレコードを表示します。<!-- END REF-->レコードはイベントがウィンドウを更新するまでのみ表示されます。このイベントとは、[ADD RECORD](add-record.md "ADD RECORD")を実行する、または入力フォームへ戻る、メニューバーに戻ることです。DISPLAY RECORDは、カレントレコードが存在しない場合には何も行いません。

DISPLAY RECORDは、しばしばオリジナルの進捗メッセージを表示するために使用されます。また、自動スライドショーを作成するために使用されることもあります。

フォームメソッドが存在する場合は、On Loadイベントが生成されます。

**警告:** DISPLAY RECORDをWeb接続プロセスから呼び出さないでください。このコマンドは、Webブラウザクライアントマシン上ではなく、4D Webサーバマシン上で実行されるためです。

#### 例題 

以下の例は一連のレコードをスライドショーとして表示します:

```4d
 ALL RECORDS([Demo]) // レコードを選択
 FORM SET INPUT([Demo];"Display") // 表示に使用するフォームを選択
 For($vlRecord;1;Records in selection([Demo])) // レコード数だけループ
    DISPLAY RECORD([Demo]) // レコードを表示
    DELAY PROCESS(Current process;180) // 3秒間一時停止
    NEXT RECORD([Demo]) // 次のレコードをカレントレコードにする
 End for
```

#### 参照 

[MESSAGE](message.md)  