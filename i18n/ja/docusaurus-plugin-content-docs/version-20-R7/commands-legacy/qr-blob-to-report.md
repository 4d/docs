---
id: qr-blob-to-report
title: QR BLOB TO REPORT
slug: /commands/qr-blob-to-report
displayed_sidebar: docs
---

<!--REF #_command_.QR BLOB TO REPORT.Syntax-->**QR BLOB TO REPORT** ( *area* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.QR BLOB TO REPORT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| Blob | Blob | &#8594;  | レポートを納めたBLOB |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR BLOB TO REPORT.Summary-->QR BLOB TO REPORT コマンドは、*blob*に格納されたレポートを*area*に渡されたクイックレポートエリアに配置します。<!-- END REF--> 

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*blob*引数を渡した場合、エラー番号-9852が生成されます。

#### 例題 1 

次のコードを使用し、データベースストラクチャと同じ階層にある“report.4qr”という名称のレポートファイルをMyAreaに表示することができます。このレポートファイルは4D 2003で作成されている必要はなく、以前のバージョンのものであっても構いません:

```4d
 var $doc : Blob
 var MyArea : Integer
 DOCUMENT TO BLOB("report.4qr";$doc)
 QR BLOB TO REPORT(MyArea;$doc)
```

#### 例題 2 

次の例は、Field4に格納されたクイックレポートを取り出し、MyAreaに表示します:

```4d
 QR BLOB TO REPORT(MyArea;[Table 1]Field4)
```

#### 参照 

[QR REPORT TO BLOB](qr-report-to-blob.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 771 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


