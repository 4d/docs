---
id: blob-to-print-settings
title: BLOB to print settings
slug: /commands/blob-to-print-settings
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to print settings.Syntax-->**BLOB to print settings** ( *printSettings* {; *params*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to print settings.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| printSettings | Blob | &#8594;  | 印刷設定を格納したBLOB |
| params | Integer | &#8594;  | 0 = 部数と印刷範囲に関して、BLOB に保存された値を復元；1 = デフォルト値にリセット |
| 戻り値 | Integer | &#8592; | 1 = 処理に成功, 0 = カレントのプリンターがない, -1 = 引数が不正, 2 = プリンターが変更された |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BLOB to print settings.Summary-->**BLOB to print settings** コマンドは、4Dの現プリンタ設定を *printSettings* BLOBに格納された内容で置き換えます。<!-- END REF-->このBLOBは [Print settings to BLOB](print-settings-to-blob.md) または  4D Pack コマンドで生成されていなければなりません (後述参照)。

*params* パラメーターには、"部数" および "印刷範囲" の基本設定の扱いを指定します:

* 0 または省略: BLOB に保存されている値が採用されます
* 1: これらの値をデフォルト値にリセットします (部数: 1; 印刷範囲: すべて)

新しいプリント設定はカレントプリンターに対して適用され、*\>* 引数なしで呼び出された *\_o\_PAGE SETUP* や [SET PRINT OPTION](set-print-option.md)、[PRINT SELECTION](print-selection.md) などのコマンドが設定を変更するまで、[カレントの 4D 印刷設定](../settings/compatibility.md) に対して適用されます。具体的には [PRINT SELECTION](print-selection.md), [PRINT LABEL](print-label.md), [PRINT RECORD](print-record.md), [Print form](print-form.md) と [QR REPORT](qr-report.md) コマンドのほか、4Dのメニューコマンド (デザインモード含む) で、この印刷設定使用されます。

**BLOB to print settings**で定義した設定を保持するためには、[PRINT SELECTION](print-selection.md), [PRINT LABEL](print-label.md), および [PRINT RECORD](print-record.md) コマンドは *\>* 引数付きで呼び出さなければなりません。

このコマンドは次のいずれかの値を返します:

* \-1: BLOB が不正です
* 0: カレントプリンターがありません (この場合、コマンドはなにもしません)
* 1: BLOB は正常にロードされました
* 2: BLOB は正常にロードされましたが、カレントプリンター名が違います(\*)  
**注:** BLOB が  4D Pack コマンドによって生成されている場合には、当該BLOB にその情報が含まれていないため、プリンター名が実際には変更されていなくても、常に (2)が返されます。

(\*) プリント設定は BLOB 生成時に選択されていたカレントプリンターに依存します。この印刷設定を、同じモデルの異なるプリンターに対して適用することができます。違うプリンターの場合には、共通の設定のみがロードされます。

##### Windows / OS X 

*printSettings* BLOB はどちらのプラットフォームでも保存およびロードすることが可能ですが、印刷設定には共有されているものと、ドライバーやシステムバージョンに依存する特有のものがあります。そのため、同じ *printSettings* BLOB を異なるプラットフォームに流用した場合には、ロードされる情報が不完全の場合があります。異なるプラットフォームを併用する環境において印刷設定の復元を最適化するには、それぞれのプラットフォーム用に (つまり二つの) *printSettings* BLOB を管理することが推奨されます。

##### 4D Pack コマンドとの互換性 

4D Pack の旧  コマンドで生成された印刷設定 BLOB は **BLOB to print settings** で使用できますが、[Print settings to BLOB](print-settings-to-blob.md) で保存した BLOB を  で使用することはできません。

The **BLOB to print settings** コマンドは、コマンドに比べてより多くの印刷情報を格納する事ができます。

#### 例題 

4D の現在の印刷コンテキストに、以前ディスクに保存したプリント設定を適用します: 

```4d
 var curSettings : Blob
 DOCUMENT TO BLOB(Get 4D folder(Active 4D Folder)+"current4Dsettings.blob";curSettings)
  // current4Dsettings は Print settings to BLOB で生成されたものです
 $err:=BLOB to print settings(curSettings;0)
 Case of
    :($err=1)
  // 印刷設定は正常にロードされました
    :($err=2)
       CONFIRM("プリンターが変更されました。\n\n設定を確認しますか?")
       If(OK=1)
          PRINT SETTINGS
       End if
    :($err=0)
       ALERT("カレントプリンターがありません。")
    :($err=-1)
       ALERT("不正な設定ファイルです。")
 End case
```

#### 参照 

[Print settings to BLOB](print-settings-to-blob.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1434 |
| スレッドセーフである | &cross; |


