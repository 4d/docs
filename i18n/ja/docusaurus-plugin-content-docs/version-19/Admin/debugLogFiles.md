---
id: debugLogFiles
title: ログファイルの詳細
---

4Dアプリケーションは、デバッグや実行の最適化のために有用な複数のログファイルを生成することができます。 ログは通常 [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) あるいは[WEB SET OPTION](https://doc.4d.com/4dv19/help/command/en/page1210.html) コマンドのセレクターを使用して開始・停止され、プロジェクトの [Logsフォルダー](Project/architecture.md#logs) 内に保存されます。

記録された情報は、問題の検知と修正のためには分析する必要があります。 この章では、以下のログファイルの詳細を説明します:

* [4DRequestsLog.txt](#4drequestslogtxt)
* [4DRequestsLog_ProcessInfo.txt](#4drequestslog_processinfotxt)
* [HTTPDebugLog.txt](#httpdebuglogtxt)
* 4DDebugLog.txt ([標準](#4ddebuglogtxt-標準) & [タブ分け](#4ddebuglogtxt-タブ分け))
* [4DDiagnosticLog.txt](#4ddiagnosticlogtxt)
* [4DIMAPLog.txt](#4dsmtplogtxt-4dpop3logtxt-および-4dimaplogtxt)
* [4DPOP3Log.txt](#4dsmtplogtxt-4dpop3logtxt-および-4dimaplogtxt)
* [4DSMTPLog.txt](#4dsmtplogtxt-4dpop3logtxt-および-4dimaplogtxt)
* [ORDA クライアントリクエストのログファイル](#ordaクライアントリクエスト)

注: サーバーとクライアントの両方においてログファイルが生成可能な場合、サーバー側のログファイル名には "Server" が追加されます。たとえば、"4DRequestsLogServer.txt" のようにです。

これらのログファイルは、デバッグ中に時系列を確立しエントリー間のつながりを分かりやすくするために、いくつかのフィールドを共有しています:

* `sequence_number`: この番号はすべてのデバッグログ間において固有で重複せず、ログファイルに関わらず新しいエントリーごとに増分されるので、オペレーションの厳密な順番を知ることができます。
* `connection_uuid`: 4Dクライアントで作成されサーバーに接続する 4Dプロセスについては、この接続UUID がサーバー側とクライアント側とで記録されます。 これにより各プロセスを開始したリモートクライアントを簡単に識別することができます。

## 4DRequestsLog.txt

このログファイルは、コマンドを実行した 4D Serverマシンあるいは 4Dリモートマシンによっておこなわれる標準のリクエストを記録します (Webリクエストを除く)。

このログの開始方法:

* サーバー上:

```4d
SET DATABASE PARAMETER(4D Server log recording;1)
// サーバーサイド
```

* クライアント上:

```4d
SET DATABASE PARAMETER(Client Log Recording;1)
// リモートサイド
```
> この宣言は [4DRequestsLog_ProcessInfo.txt](#4drequestslog_processinfotxt) ログファイルも開始させます。

#### ヘッダー

このファイルは以下のヘッダーから始まります:

* Logセッション識別子
* アプリケーションをホストしているサーバーのホスト名
* ユーザーログイン名: サーバー上で 4Dアプリケーションを実行したユーザーの OS上のログイン名

#### 内容

各リクエストに対して、以下のフィールドが記録されます:

| フィールド名                                     | 説明                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| sequence_number                            | ログセッション内で固有かつシーケンシャルなオペレーション番号                                                                                                       |
| time                                       | 'YYYY-MM-DDTHH:MM:SS.mmm' の ISO 8601フォーマットを使用した日付と時間                                                                                 |
| systemid                                   | システムID                                                                                                                               |
| component                                  | コンポーネント署名 (例: '4SQLS' または 'dbmg')                                                                                                    |
| process\_info\_index                   | 4DRequestsLog_ProcessInfo.txt ログの "index"フ ィールドに対応し、リクエストとプロセスのリンクを可能にします。                                                           |
| request                                    | C/SでのリクエストID、あるいは SQLリクエストまたは `LOG EVENT` メッセージ用のメッセージ文字列                                                                            |
| bytes_in                                   | 受信したバイト数                                                                                                                             |
| bytes_out                                  | 送信したバイト数                                                                                                                             |
| server\_duration &#124; exec\_duration | ログが生成された場所によって変わります:<li>*server\_duration* (クライアント上で生成された場合) -- サーバーがリクエストを処理し、レスポンスを返すまでにかかった時間 (マイクロ秒単位)。 以下の画像の B から F までに相当します。あるいは</li><li>*exec\_duration* (サーバー上で生成された場合) -- サーバーがリクエストを処理するまでにかかった時間 (マイクロ秒単位)。 以下の画像の B から E までに相当します。</li>                                                               |
| write\_duration                          | 次のものを送信するのにかかった時間 (μs):<li>リクエスト (クライアント上で実行された場合)。 以下の画像の A から B までに相当します。</li><li>レスポンス (サーバー上で実行された場合)。 以下の画像の E から F までに相当します。</li>                                                            |
| task_kind                                  | プリエンプティブかコオペラティブか (それぞれ 'p' と 'c' で表される)                                                                                             |
| rtt                                        | クライアントがリクエストを送信してサーバーがそれを受け取るまでにかかる時間の概算 (マイクロ秒単位)。 以下の画像の Aから Dまでと Eから Hまでに相当します。<li>ServerNet ネットワークレイヤーを使用している場合にのみ計測されます。旧式ネットワークレイヤを使用していた場合には 0 が返されます。</li><li>Windows 10、あるいは Windows Server 2016 以前のバージョンの Windows においては、これを呼び出すと 0 が返されます。</li> |

リクエストフロー:

![](../assets/en/Admin/logRequestFlow.PNG)

## 4DRequestsLog_ProcessInfo.txt

このログファイルは、コマンドを実行した 4D Serverマシンあるいは 4Dリモートマシンによって作成された各プロセスについての情報を記録します (Webリクエストを除く)。

このログの開始方法:

* サーバー上:

```4d
SET DATABASE PARAMETER(4D Server log recording;1) // サーバーサイド
```

* クライアント上:

```4d
SET DATABASE PARAMETER(Client Log Recording;1) // リモートサイド
```
> この宣言は [4DRequestsLog.txt](#4drequestslogtxt) ログファイルも開始させます。

#### ヘッダー

このファイルは以下のヘッダーから始まります:

* Logセッション識別子
* アプリケーションをホストしているサーバーのホスト名
* ユーザーログイン名: サーバー上で 4Dアプリケーションを実行したユーザーの OS上のログイン名

#### 内容

各プロセスに対して、以下のフィールドが記録されます:

| フィールド名                            | 説明                                                   |
| --------------------------------- | ---------------------------------------------------- |
| sequence_number                   | ログセッション内で固有かつシーケンシャルなオペレーション番号                       |
| time                              | "YYYY-MM-DDTHH:MM:SS.mmm" の ISO 8601フォーマットを使用した日付と時間 |
| process\_info\_index          | 固有かつシーケンシャルなプロセス番号                                   |
| CDB4DBaseContext                  | DB4DコンポーネントデータベースコンテキストUUID                          |
| systemid                          | システムID                                               |
| server\_process\_id           | サーバー上のプロセスID                                         |
| remote\_process\_id           | クライアント上のプロセスID                                       |
| process\_name                   | プロセス名                                                |
| cID                               | 4D接続の識別子                                             |
| uID                               | 4Dクライアントの識別子                                         |
| IP Client                         | IPv4/IPv6アドレス                                        |
| host_name                         | クライアントのホスト名                                          |
| user_name                         | クライアント上のユーザーログイン名                                    |
| connection\_uuid                | プロセス接続の UUID識別子                                      |
| server\_process\_unique\_id | サーバー上の固有プロセスID                                       |

## HTTPDebugLog.txt

このログファイルは、各 HTTPリクエストとそれぞれのレスポンスを rawモードで記録します。 ヘッダーを含むリクエスト全体が記録され、オプションでボディ部分も記録することができます。

このログの開始方法:

```4d
WEB SET OPTION(Web debug log;wdl enable without body) // 他の値も使用可能
```

リクエストとレスポンスの両方に対して以下のフィールドが記録されます:

| フィールド名         | 説明                                  |
| -------------- | ----------------------------------- |
| SocketID       | 通信に使用されたソケットの ID                    |
| PeerIP         | ホスト (あるいはクライアント) の IPv4アドレス         |
| PeerPort       | ホスト (あるいはクライアント) が使用したポート番号         |
| TimeStamp      | (システムが開始されてからの) ミリ秒単位でのタイムスタンプ      |
| ConnectionID   | 接続UUID (通信に使用された VTCPSocket の UUID) |
| SequenceNumber | ログセッション内で固有かつシーケンシャルなオペレーション番号      |

## 4DDebugLog.txt (標準)

このログファイルは、4Dプログラミングレベルで発生するそれぞれのイベントを記録します。 標準モードではイベントの基本的なビューを提供します。

このログの開始方法:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2)  
// 標準、全プロセスを記録

SET DATABASE PARAMETER(Current process debug log recording;2)  
// 標準、カレントプロセスのみを記録
```

それぞれのイベントに対して、以下のフィールドが記録されます:

| カラム番号 | 説明                                                                 |
| ----- | ------------------------------------------------------------------ |
| 1     | ログセッション内で固有かつシーケンシャルなオペレーション番号                                     |
| 2     | ISO 8601フォーマットの日付と時間 (YYYY-MM-DDTHH:MM:SS.mmm)                     |
| 3     | プロセスID (p=xx) と固有プロセスID (puid=xx)                                  |
| 4     | スタックレベル                                                            |
| 5     | コマンド名/メソッド名/メッセージ/タスクの開始・停止情報/プラグイン名、イベント、あるいはコールバックUUID または接続UUID |
| 6     | ログオペレーションにかかった時間 (ミリ秒単位)                                           |

## 4DDebugLog.txt (タブ分け)

このログファイルは、4Dのプログラミングレベルで発生する各イベントについて、(標準フォーマットに比べて) 追加情報を含めた、タブ分けされたコンパクトなフォーマットで記録します。

このログの開始方法:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2+4)  
// 拡張されたタブ分けされたフォーマット、全プロセスを記録

SET DATABASE PARAMETER(Current process debug log recording;2+4)  
// 拡張されたタブ分けされたフォーマット、カレントプロセスのみを記録
```

それぞれのイベントに対して、以下のフィールドが記録されます:

| カラム番号 | フィールド名                          | 説明                                                                                                                                                                                                                                                                                                                                                                  |
| ----- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | sequence_number                 | ログセッション内で固有かつシーケンシャルなオペレーション番号                                                                                                                                                                                                                                                                                                                                      |
| 2     | time                            | ISO 8601フォーマットの日付と時間 (YYYY-MM-DDTHH:MM:SS.mmm)                                                                                                                                                                                                                                                                                                                      |
| 3     | ProcessID                       | プロセスID                                                                                                                                                                                                                                                                                                                                                              |
| 4     | unique_processID                | 固有プロセスID                                                                                                                                                                                                                                                                                                                                                            |
| 5     | stack_level                     | スタックレベル                                                                                                                                                                                                                                                                                                                                                             |
| 6     | operation_type                  | ログオペレーションタイプ。 この値は絶対値を取ることがあります:<ol><li>コマンド</li><li>メソッド (プロジェクトメソッド、データベースメソッド、等)</li><li>メッセージ ([LOG EVENT](https://doc.4d.com/4dv19/help/command/ja/page667.html) コマンドによって送信されたもののみ)</li><li>プラグインメッセージ</li><li>プラグインイベント</li><li>プラグインコマンド</li><li>プラグインコールバック</li><li>タスク</li><li>メンバーメソッド (コレクションまたはオブジェクトに割り当てられているメソッド)</li></ol>スタックレベルを閉じる時には、`operation_type`、`operation` および `operation_parameters` カラムには `stack_opening_sequence_number` カラムに記録された開始スタックレベルと同じ値が記録されます。 例:<ol><li>121  15:16:50:777  5  8  1  2 CallMethod Parameters 0</li><li>122  15:16:50:777  5  8  2  1 283  0</li><li>123  15:16:50:777  5  8  2  1 283  0 122 3</li><li>124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61</li></ol>1行目と 2行目はスタックレベルを開き、3行目と 4行目はスタックレベルを閉じます。 6、7、8カラム目の値は、終了スタックレベル行において繰り返されます。 10カラム目にはスタックレベル開始番号、つまり 3行目の 122 と 4行目の 121 が格納されます。 |
| 7     | operation                       | 以下のいずれかを表す可能性があります (オペレーションタイプによる):<li>ランゲージコマンドID (type=1 の場合)</li><li>メソッド名 (type=2 の場合)</li><li>pluginIndex;pluginCommand の組み合わせ (type=4、5、6 または 7 の場合)。 '3;2' のような形式で格納されます。</li><li>タスク接続UUID (type=8 の場合)</li>                                                                                                                                                                                                                           |
| 8     | operation_parameters            | コマンド、メソッド、プラグインに渡された引数                                                                                                                                                                                                                                                                                                                                              |
| 9     | form_event                      | フォームイベント (あれば)。その他の場合には空になります (フォームメソッドまたはオブジェクトメソッド内でコードが実行された場合に使用されると考えて下さい)                                                                                                                                                                                                                                                                                     |
| 10    | stack_opening_sequence_number | スタックレベルを閉じる時のみ: 開始スタックレベルに対応するシーケンス番号                                                                                                                                                                                                                                                                                                                               |
| 11    | stack_level_execution_time    | スタックレベルを閉じる時のみ: 現在記録されているアクションの経過時間をマイクロ秒単位で表します (上記ログの123 行目と124 行目の 10番目のカラムを参照ください)                                                                                                                                                                                                                                                                              |

## 4DDiagnosticLog.txt

このログファイルには、アプリケーションの内部オペレーションに関連した複数のイベントが、人間にも読めるように記録されます。 [LOG EVENT](https://doc.4d.com/4dv19/help/command/ja/page667.html) コマンドを使用することで、カスタムの情報をこのファイルに含めることができます。

このログの開始方法:

```4d
 SET DATABASE PARAMETER(Diagnostic log recording;1) // 記録を開始
```

それぞれのイベントに対して、以下のフィールドが記録されます:

| フィールド名             | 説明                                             |
| ------------------ | ---------------------------------------------- |
| sequenceNumber     | ログセッション内で固有かつシーケンシャルなオペレーション番号                 |
| timestamp          | ISO 8601フォーマットの日付と時間 (YYYY-MM-DDTHH:MM:SS.mmm) |
| loggerID           | 任意                                             |
| componentSignature | 任意 - 内部コンポーネント署名                               |
| messageLevel       | 情報、警告、エラーなど                                    |
| message            | ログエントリーの詳細                                     |

イベントによって、タスク、ソケットなど様々な他のフィールドを記録に含めることができます。

## 4DSMTPLog.txt, 4DPOP3Log.txt, および 4DIMAPLog.txt

これらのログファイルは、以下のコマンドを使用して始動された、4Dアプリケーションとメールサーバー (SMTP、POP3、IMAP) 間の通信をそれぞれ記録します:

* SMTP - [SMTP New transporter](API/SMTPTransporterClass.md#smtp-new-transporter)
* POP3 - [POP3 New transporter](API/POP3TransporterClass.md#pop3-new-transporter)
* IMAP  - [IMAP New transporter](API/IMAPTransporterClass.md#imap-new-transporter)

2種類のログファイルを生成することができます:

* 通常バージョン:
  * 4DSMTPLog.txt, 4DPOP3Log.txt, および 4DIMAPLog.txt と名前がつけられます。
  * 添付ファイルは含めません
  * 10MBごとの自動循環ファイルリサイクルを使用します。
  * 通常のデバッギング用途を想定しています。

 このログを開始するには:

 ```4d
 SET DATABASE PARAMETER(SMTP Log;1) // SMTPログを開始
 SET DATABASE PARAMETER(POP3 Log;1) // POP3ログを開始
 SET DATABASE PARAMETER(IMAP Log;1) // IMAPログを開始
 ```

 4D Server: 4D Server 管理ウィンドウ内の [メンテナンスページ](https://doc.4d.com/4Dv19/4D/19/Maintenance-Page.300-5422479.ja.html) の **リクエストとデバッグのログを開始** ボタンをクリックします。

   このログのパスは `Get 4D file` コマンドによって返されます。

* 拡張バージョン:
  * 添付ファイルも含まれます。 自動ファイルリサイクルは使用されません。
  * カスタムの名前を使用できます。
  * 特定の目的のために用意されています。

 このログを開始するには:

 ```4d
 $server:=New object
 ...
 //SMTP
 $server.logFile:="MySMTPAuthLog.txt"
 $transporter:=SMTP New transporter($server)

 // POP3
 $server.logFile:="MyPOP3AuthLog.txt"
 $transporter:=POP3 New transporter($server)

 //IMAP
 $server.logFile:="MyIMAPAuthLog.txt"
 $transporter:=IMAP New transporter($server)
 ```

#### 内容

各リクエストに対して、以下のフィールドが記録されます:

| カラム番号 | 説明                                            |
| ----- | --------------------------------------------- |
| 1     | ログセッション内で固有かつシーケンシャルなオペレーション番号                |
| 2     | RFC3339 フォーマットの日付と時間 (yyyy-mm-ddThh:mm:ss.ms) |
| 3     | 4DプロセスID                                      |
| 4     | 固有プロセスID                                      |
| 5     | <ul><li>SMTP、POP3、または IMAPセッションスタートアップ情報。サーバーホスト名、SMTP、POP3、または IMAPサーバーに接続するのに使用された TCPポート番号と TLSステータス。あるいは</li><li>サーバーとクライアント間でやりとりされたデータ。 "S <" (SMTP、POP3、 または IMAPサーバーから受信したデータ) または "C >" (SMTP、POP3、または IMAPクライアントから送信されたデータ) から始まります: サーバーから送信された認証モードの一覧と選択された認証モード、SMTP、POP3、または IMAPサーバーから報告されたエラー、送信されたメールのヘッダー情報 (通常バージョンのみ) およびメールがサーバー上に保存されているかどうか。あるいは</li><li>SMTP、POP3、または IMAPセッションの切断情報。</li></ul>                    |

## ORDAクライアントリクエスト

このログファイルには、リモートマシンが送信する ORDAリクエストが記録されます。 ログ情報はメモリか、ディスク上のファイルに書くことができます。 このログファイルの名称や保管場所は任意に決めることができます。

このログの開始方法:

```4d
// リモートマシンで実行します
ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  
// メモリに送ることもできます
```

ORDAリクエストログにおいてユニークなシーケンス番号を使うには、次のように開始します:

```4d
// リモートマシンで実行します

SET DATABASE PARAMETER(Client Log Recording;1)  
// ログシーケンス番号の有効化

ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  
// メモリに送ることもできます

SET DATABASE PARAMETER(Client Log Recording;0)  
// ログシーケンス番号の無効化
```

各リクエストに対して、以下のフィールドが記録されます:

| フィールド名         | 説明                             | 例題                                                      |
| -------------- | ------------------------------ | ------------------------------------------------------- |
| sequenceNumber | ログセッション内で固有かつシーケンシャルなオペレーション番号 | 104                                                     |
| url            | クライアントの ORDAリクエストURL           | "rest/Persons(30001)"                                   |
| startTime      | 開始日時 (ISO 8601 フォーマット)         | "2019-05-28T08:25:12.346Z"                              |
| endTime        | 終了日時 (ISO 8601 フォーマット)         | "2019-05-28T08:25:12.371Z"                              |
| duration       | クライアント処理時間 (ミリ秒)               | 25                                                      |
| response       | サーバーレスポンスオブジェクト                | {"status":200,"body":{"__entityModel":"Persons",\[...] |
