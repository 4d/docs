---
id: print-form
title: Print form
displayed_sidebar: docs
---

<!--REF #_command_.Print form.Syntax-->**Print form** ( {*aTable* ;} *form* {; *formData*} {; *areaStart*{; *areaEnd*}} ) : Integer<!-- END REF-->

<!--REF #_command_.Print form.Params-->

| 引数        | 型            |   | 説明                                                                                                                            |
| --------- | ------------ | - | ----------------------------------------------------------------------------------------------------------------------------- |
| aTable    | テーブル         | → | フォームが属するテーブル, または 省略した場合は、デフォルトテーブル                                                                                           |
| form      | Text, Object | → | フォーム名(文字列)、あるいはフォームを定義した.jsonファイルへのPOSIXパス(文字列)、あるいは印刷するフォームを定義したオブジェクト |
| formData  | Object       | → | フォームに関連づけるデータ                                                                                                                 |
| areaStart | Integer      | → | 印刷マーカ、または開始エリア(areaEndが指定された場合)                                                                            |
| areaEnd   | Integer      | → | 終了エリア(areaStartが指定された場合)                                                                                   |
| 戻り値       | Integer      | ← | 印刷されたエリアの高さ                                                                                                                   |

<!-- END REF-->

*このコマンドはスレッドセーフではないので、プリエンプティブなコードでは使用できません。*

#### 説明

<!--REF #_command_.Print form.Summary-->**Print form** simply prints *form* with the current values of fields and variables of *aTable*.<!-- END REF-->**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** は、*aTable* のフィールドや変数の現在の値を使用して*form* 引数で指定したフォームを印刷します。 通常は、印刷処理を完全に制御する必要のある非常に複雑なレポートを印刷するために使用します。 **Print form** はレコード処理、ブレーク処理、改ページ処理を全く行いません。 これらの処理はすべて開発者が行います。 **Print form** は固定されたサイズの枠のなかにフィ－ルドや変数を印刷します。 通常は、印刷処理を完全に制御する必要のある非常に複雑なレポートを印刷するために使用します。 **Print form** はレコード処理、ブレーク処理、改ページ処理を全く行いません。 これらの処理はすべて開発者が行います。 **Print form** は固定されたサイズの枠のなかにフィ－ルドや変数を印刷します。

*form* 引数には、以下のいづれかを渡すことができます:

- フォーム名
- 使用するフォームの詳細を格納している有効な.josn ファイルへのパス(POSIX シンタックス、*Form file path* 参照)
- フォームの詳細を格納しているオブジェクト

**Print form** は、フォームの印刷後に改ページを行わないため、同じページに異なるフォームを容易に配置することができます。 したがって、**Print form** は、異なるテーブルや異なるフォームを含む複雑な印刷処理に最適です。 フォーム間で改ページを強制的に行うには[PAGE BREAK](../commands-legacy/page-break.md) コマンドを使用してください。 印刷可能領域を超える高さのフォームの印刷を次のページに持ち越すには、[PAGE BREAK](../commands-legacy/page-break.md) コマンドを使用する前に[CANCEL](../commands-legacy/cancel.md) コマンドを呼び出してください。 したがって、**Print form** は、異なるテーブルや異なるフォームを含む複雑な印刷処理に最適です。 フォーム間で改ページを強制的に行うには[PAGE BREAK](../commands-legacy/page-break.md) コマンドを使用してください。 印刷可能領域を超える高さのフォームの印刷を次のページに持ち越すには、[PAGE BREAK](../commands-legacy/page-break.md) コマンドを使用する前に[CANCEL](../commands-legacy/cancel.md) コマンドを呼び出してください。

3つの異なるシンタックスを使用できます:

- **詳細エリアの印刷**

シンタックス:

```4d
 height:=Print form(myTable;myForm)
```

この場合、**Print form** はフォームの詳細エリア (ヘッダマーカと詳細マーカの間のエリア) だけを印刷します。

- **フォームエリアの印刷**

シンタックス:

```4d
 height:=Print form(myTable;myForm;marker)
```

この場合コマンドは*marker* で示されるセクションを印刷します。 この場合コマンドは*marker* で示されるセクションを印刷します。 以下の*Form Area* テーマの定数のうちの1つをmarker引数に渡します:

| 定数            | 型       | 値   |
| ------------- | ------- | --- |
| Form break0   | Integer | 300 |
| Form break1   | Integer | 301 |
| Form break2   | Integer | 302 |
| Form break3   | Integer | 303 |
| Form break4   | Integer | 304 |
| Form break5   | Integer | 305 |
| Form break6   | Integer | 306 |
| Form break7   | Integer | 307 |
| Form break8   | Integer | 308 |
| Form break9   | Integer | 309 |
| Form detail   | Integer | 0   |
| Form footer   | Integer | 100 |
| Form header   | Integer | 200 |
| Form header1  | Integer | 201 |
| Form header10 | Integer | 210 |
| Form header2  | Integer | 202 |
| Form header3  | Integer | 203 |
| Form header4  | Integer | 204 |
| Form header5  | Integer | 205 |
| Form header6  | Integer | 206 |
| Form header7  | Integer | 207 |
| Form header8  | Integer | 208 |
| Form header9  | Integer | 209 |

- **セクション印刷**

シンタックス:

```4d
 height:=Print form(myTable;myForm;areaStart;areaEnd)
```

この場合、コマンドは*areaStart* および*areaEnd* 引数間に含まれる部分を印刷します。 値はピクセル単位で入力しなければいけません。 値はピクセル単位で入力しなければいけません。

**formData**

オプションとして、*form* 引数のフォームに、*formData* オブジェクトを使用してパラメーターを渡すことができます。あるいは、[フォームにユーザークラスを割り当てる](../FormEditor/properties_FormProperties.md#form-class) ことをしていた場合に4D によって自動的にインスタンス化されるフォームクラスオブジェクトを使うこともできます。 form data オブジェクト内のプロパティであればどれも[Form](form.md) コマンドを使用することでフォームコンテキストから利用可能になります。 formData オブジェクトは、[`On Printing Detail` form event](../Events/onPrintingDetail.md) フォームイベント内で利用可能です。

form data オブジェクトについての詳細な情報については、[`DIALOG`](dialog.md) コマンドを参照してください。

**戻り値**

**Print form** によって返される値は印刷可能範囲の高さを表します。 この値は、[Get printed height](../commands-legacy/get-printed-height.md) コマンドに自動的に考慮されます。 この値は、[Get printed height](../commands-legacy/get-printed-height.md) コマンドに自動的に考慮されます。

**Print form** を使用する場合、印刷ダイアログボックスは表示されません。 レポートはデザインモードでフォームに割り当てられた用紙設定を使用しません。 **Print form** を呼び出す前に用紙設定を指定する方法は2通りあります: レポートはデザインモードでフォームに割り当てられた用紙設定を使用しません。 **Print form** を呼び出す前に用紙設定を指定する方法は2通りあります:

- [PRINT SETTINGS](../commands-legacy/print-settings.md) コマンドを使用する。 この場合、ユーザが設定を行います。 この場合、ユーザが設定を行います。
- [SET PRINT OPTION](../commands-legacy/set-print-option.md) および [GET PRINT OPTION](../commands-legacy/get-print-option.md) コマンドを使用する。 この場合、用紙設定はプログラムで指定します。 この場合、用紙設定はプログラムで指定します。

**Print form** は、印刷するページをそれぞれメモリ中に作成します。 各ページはメモリ中のページがいっぱいになるか、[PAGE BREAK](../commands-legacy/page-break.md) コマンドを実行すると印刷されます。 **Print form** は、印刷するページをそれぞれメモリ中に作成します。 各ページはメモリ中のページがいっぱいになるか、[PAGE BREAK](../commands-legacy/page-break.md) コマンドを実行すると印刷されます。 **Print form** の使用後、最後のページの印刷を確実に行うためには、[PAGE BREAK](../commands-legacy/page-break.md) コマンドで終了しなければなりません(ただし[OPEN PRINTING JOB](../commands-legacy/open-printing-job.md) のコンテキスト内の場合を除く、注意参照)。 そうでないと、最後のページが一杯にならないと、それはメモリ中に残り印刷されません。 そうでないと、最後のページが一杯にならないと、それはメモリ中に残り印刷されません。

**警告:** このコマンドが[OPEN PRINTING JOB](../commands-legacy/open-printing-job.md) で開かれた印刷ジョブのコンテキストで呼び出された場合、[PAGE BREAK](../commands-legacy/page-break.md) を使用して最後のページを印刷しようとしてはいけません。なぜなら、最後のページは[CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) コマンドによって自動的に印刷されるからです。 この状況で[PAGE BREAK](../commands-legacy/page-break.md) を使用した場合、空のページが印刷されます。 この状況で[PAGE BREAK](../commands-legacy/page-break.md) を使用した場合、空のページが印刷されます。

このコマンドは外部エリアとオブジェクト(例えば 4D Write や 4D Viewエリアなど) を印刷します。 エリアはコマンドの実行の際に毎回リセットされます。 エリアはコマンドの実行の際に毎回リセットされます。

**警告:** サブフォームは、**Print form** では印刷はされません。 **警告:** サブフォームは、**Print form** では印刷はされません。 そのようなオブジェクトを含んだフォームを一つだけ印刷したい場合は、代わりに[PRINT RECORD](../commands-legacy/print-record.md) を使用して下さい。

**Print form** は、1回だけフォームメソッドの[`On Printing Detail` event](../Events/onPrintingDetail.md) イベントを生成します。

**4D Server:** このコマンドは、ストアドプロシージャのフレームワークにおいて4D Server上で実行することができます。 この状況では、次の制約があります: この状況では、次の制約があります:

- サーバマシン上ではダイアログボックスを一切表示しないでください (特定の必要性がある場合を除く)。
- プリンタ関連の問題が発生しても (用紙切れ、プリンタ接続切断等) 、エラーメッセージは生成されません。

#### 例題 1

以下の例は[PRINT SELECTION](../commands-legacy/print-selection.md) コマンドをエミュレートします。 しかし、レコードが小切手用かデポジット用であるかによって2種類のフォームの1つを使用します: しかし、レコードが小切手用かデポジット用であるかによって2種類のフォームの1つを使用します:

```4d
 QUERY([Register]) // レコードを選択
 If(OK=1)
    ORDER BY([Register]) // レコードをソート
    If(OK=1)
       PRINT SETTINGS // 印刷設定ダイアログを表示
       If(OK=1)
          For($vlRecord;1;Records in selection([Register]))
             If([Register]Type ="Check")
                Print form([Register];"Check Out") // 小切手用のフォーム
             Else
                Print form([Register];"Deposit Out") // デポジット用のフォーム
             End if
             NEXT RECORD([Register])
          End for
          PAGE BREAK // 最後のページを印刷
       End if
    End if
 End if
```

#### 例題 2

[SET PRINT MARKER](../commands-legacy/set-print-marker.md) コマンドの例題参照

#### 例題 3

このフォームはダイアログとして使用され、変更されたあと印刷されます:

![](../assets/en/commands/pict6264975.en.png)

フォームメソッド:

```4d
 If(Form event code=On Printing Detail)
    Form.lastname:=Uppercase(Form.lastname)
    Form.firstname:=Uppercase(Substring(Form.firstname;1;1))+Lowercase(Substring(Form.firstname;2))
    Form.request:=Lowercase(Form.request)
 End if
```

ダイアログを表示し、その後印刷するコードは以下のようなものになります:

```4d
 $formData:=New object
 $formData.lastname:="Smith"
 $formData.firstname:="john"
 $formData.request:="I need more COFFEE"
 $win:=Open form window("Request_obj";Plain form window;Horizontally centered;Vertically centered)
 DIALOG("Request_obj";$formData)
 $h:=Print form("Request_var";$formData;Form detail)
```

#### 参照

[CANCEL](../commands-legacy/cancel.md)\
[PAGE BREAK](../commands-legacy/page-break.md)\
[PRINT SETTINGS](../commands-legacy/print-settings.md)\
[SET PRINT OPTION](../commands-legacy/set-print-option.md)
