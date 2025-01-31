---
id: qr-report-to-blob
title: QR REPORT TO BLOB
slug: /commands/qr-report-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT TO BLOB.Syntax-->**QR REPORT TO BLOB** ( *area* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.QR REPORT TO BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| Blob | Blob | &#8592; | クイックレポートを納めるBLOB |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR REPORT TO BLOB.Summary-->QR REPORT TO BLOB コマンドは、*area*に渡された参照番号のレポートをBLOB (変数またはフィールド) に格納します。<!-- END REF-->

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 例題 

次のコードは、MyAreaに格納されているクイックレポートをBLOBフィールドに代入します。

```4d
 QR REPORT TO BLOB(MyArea;[Table1]Field4)
```

#### 参照 

[QR BLOB TO REPORT](qr-blob-to-report.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 770 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


