---
id: set-print-option
title: SET PRINT OPTION
slug: /commands/set-print-option
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT OPTION.Syntax-->**SET PRINT OPTION** ( *option* ; *value1* {; *value2*} )<!-- END REF-->
<!--REF #_command_.SET PRINT OPTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | オプション番号 |
| value1 | Integer, Text | &#8594;  | オプションの値1 |
| value2 | Integer, Text | &#8594;  | オプションの値2 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET PRINT OPTION.Summary-->**SET PRINT OPTION** コマンドを使用し、プログラムから印刷オプションの値を変更することができます。<!-- END REF-->プリントパラメーターを変更する他のコマンド ([PRINT SETTINGS](print-settings.md)、*\>* 引数を使用しない [PRINT SELECTION](print-selection.md)) が呼び出されない限り、このコマンドを使用して定義された各オプションは、[カレントの 4D 印刷設定](https://developer.4d.com/docs/settings/compatibility/) に対して適用されます。印刷ジョブが(例えば[OPEN PRINTING JOB](open-printing-job.md) などによって)開かれている間は、ジョブが終わるまではこのオプションを変更することはできません(ただしOrientation option を除く、以下参照)。

##### オプションおよび値 

*option* を使用することで、変更したいオプションを指定することができます。以下の一覧にある、“*Print Options*” テーマ内の定義済み定数のいずれか一つを渡すことができます。引数で指定したオプション用の新しい値を引数および(必要であれば)引数に渡してください。渡す値の数と種類は指定したオプションのタイプによって変わります。

| 定数                           | 値  | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------- | -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Paper option                 | 1  | *value1* のみを使用した場合、ここには用紙の名前のみが含まれます。両方の引数を使用した場合、*value1* には用紙の幅が、*value2* には用紙の高さが含まれます。幅と高さはどちらもスクリーンピクセルで表現されます。プリンターで使用できる全ての用紙フォーマットの名前、高さと幅を取得する場合には[PRINT OPTION VALUES](print-option-values.md) コマンドを使用して下さい。                                                                                                                                                                                                                                                                                                                                                        |
| Orientation option           | 2  | *value1* のみ:1=縦向き、2=横向き。異なるページ方向が使用されている場合、[GET PRINT OPTION](get-print-option.md)コマンドは*value1*に0を返します**。**このオプションは印刷ジョブ内から呼び出す事が可能なので、同一印刷ジョブ中において縦向きを横向きに、あるいはその逆へと切り替えることが可能です。                                                                                                                                                                                                                                                                                                                                                                                            |
| Scale option                 | 3  | *value1* のみ: 拡大縮小の倍率の値(パーセント)。一部のプリンターでは倍率の変更を許可していないものもあるという点に注意して下さい。無効な値を渡した場合、プロパティは印刷時に100%へとリセットされます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Number of copies option      | 4  | *value1* のみ: 印刷する部数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Paper source option          | 5  | (Windows のみ) *value1* のみ: コマンドで返されるトレイの配列の中で、使用される予定の用紙トレイのインデックスに対応する番号。このオプションはWindowsでのみ使用可能です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Destination option           | 9  | *value1*: 印刷先のタイプを指定するコード: 1=プリンター、2=ファイル(MacではPS)、3=PDFファイル、5=スクリーン(OS X ドライバーオプション)。 *value1* が1あるいは5以外であった場合、*value2* には生成されたドキュメントへのパス名が含まれます。このパスは他のパスが指定されるまでは使用され続けます。保存先に同じ名前のファイルが既に存在していた場合には、それは置き換えられます。[GET PRINT OPTION](get-print-option.md)の場合、カレントの値が既定のリスト内にない場合、*value1* には-1が返され、OKシステム変数は1に設定されます。エラーが起きた場合、*value1* とOKシステム変数は0に設定されます。<br/>**注(Windows)**: Windows 上でPDF を印刷するためには、[SET CURRENT PRINTER](set-current-printer.md)(Generic PDF driver) を呼び出して印刷保存先を2 (File) または 3 (PDF File) に設定する必要があります。3 に設定することでマルチプラットフォーム対応のコードを書くことができます。 |
| Double sided option          | 11 | (Windows のみ) *value1*: 0=片側印刷あるいは標準、1=両面印刷。*value1*\=1のとき、*value2* にはページ綴じの設定が含まれます: 0=左綴じ(デフォルト値)、1=上綴じ                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Spooler document name option | 12 | *value1* のみ: スプーラドキュメントの一覧に表示される、カレントの印刷ドキュメント名。この宣言によって定義される名前は、新しい名前あるいは空の文字列が渡されない限りはセッションで印刷される全てのドキュメントに対して使用されます。標準のオペレーション(メソッドの場合にはメソッド名を、レコードの場合にはテーブル名を使用)を使用あるいは復元するためには、空の文字列を*value1* に渡して下さい。                                                                                                                                                                                                                                                                                                                                                                   |
| Page range option            | 15 | 4D Write Pro 専用のオプション<br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Legacy printing layer option | 16 | (Windows用4D 64-bit版のみ) *value1* のみ: 1=以降の印刷ジョブに対してはGDI-ベースの旧式の印刷レイヤーを選択。0=D2D印刷レイヤーを選択(デフォルト)。<br/>**64-bit 版:** このセレクターはWindows用64-bit版4Dのシングルユーザーアプリケーションでのみサポートされます。他のプラットフォームでは無視されます。これは主に64-bit版4Dアプリケーションの4Dジョブ内で旧式プラグインが印刷できるようにするためにものです。                                                                                                                                                                                                                                                                                                                    |
| Print preview option         | 18 | (Windows のみ) *value1*: Windows 上で印刷プレビュー用に使用するフォーマット。取り得る値: kp preview automatic (デフォルト): XPS プリンターとビューアーがあればそれを利用し、なければPDF プリンターかビューアーを使用し、それもなければエラーを生成する kp preview XPS: XPS プリンターとビューアーがあればそれを使用し、なければエラーを生成する kp preview PDF: PDF プリンターとビューアーがあればそれを使用し、なければエラーを生成する *value2* ([GET PRINT OPTION](get-print-option.md) でのみ使用可能): Windows 上で実際に使用されている印刷プレビューフォーマット(設定によっては *value1* の値と異なることが有り得ます)。取り得る値: kp preview none: 利用可能なフォーマットはありません kp preview XPS: XPS プリンターとビューアーが使用されています kp preview PDF: PDF プリンターとビューアーが使用されています                                          |

このコマンドを使用して設定を行うと、4Dアプリケーション全体に対しセッションの間中、その印刷オプションが保持されます。[PRINT SELECTION](print-selection.md)、[PRINT RECORD](print-record.md)、[Print form](print-form.md)、[QR REPORT](qr-report.md) と [WP PRINT](../WritePro/commands-legacy/wp-print.md) コマンドおよびデザインモードを含めた4Dの印刷全般に対して、この設定が使用されます。

**注意:** 

* **SET PRINT OPTION** コマンドを用いて設定したプリントオプションがリセットされないように、[PRINT SELECTION](print-selection.md)、[PRINT RECORD](print-record.md)、[PAGE BREAK](page-break.md)コマンドでは、任意の引数 *\>* を必ず使用してください。
* **SET PRINT OPTION**コマンドは主にPostScript プリンターをサポートします。このコマンドは他のタイプのプリンター、例えばPCLやlinkなどにも使用できますが、その場合一部のオプションが使用できない可能性があります。

#### 例題 

Orientation option の値は同一印刷ジョブ内で変更することができます (特例)。[PAGE BREAK](page-break.md) コマンドの呼び出しより先に、このオプションがあらかじめ設定されている必要があることに留意ください:

```4d
 ALL RECORDS([People])
 PRINT SETTINGS
 If(OK=1)
    OPEN PRINTING JOB
    SET PRINT OPTION(Orientation option;1) // 縦向き
    Print form([People];"Vertical_Form")
 
    SET PRINT OPTION(Orientation option;2) // 横向き
    PAGE BREAK // 必ずオプションの後にコールします
    Print form([People];"Horiz_Form")
    CLOSE PRINTING JOB
 End if
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されます。

#### エラー管理 

*option*に渡した値が無効であるか、そのプリンタで*option*が利用できない場合、コマンドはエラーを返し ([ON ERR CALL](on-err-call.md "ON ERR CALL")コマンドでインストールされたエラー管理メソッドを用いて、このエラーをとらえることができます) 、オプションの現在の値がそのまま保持されます。

#### 参照 

[GET PRINT OPTION](get-print-option.md)  
[Print form](print-form.md)  
[PRINT OPTION VALUES](print-option-values.md)  
*Print Options*  
[SET CURRENT PRINTER](set-current-printer.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 733 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||


