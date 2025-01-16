---
id: form-set-input
title: FORM SET INPUT
slug: /commands/form-set-input
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET INPUT.Syntax-->**FORM SET INPUT** ( {*aTable* ;} *form* {; *userForm* {; *}} )<!-- END REF-->
<!--REF #_command_.FORM SET INPUT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | 入力フォームを設定するテーブル, または 省略した場合、デフォルトテーブル |
| form | Text, Object | &#8594;  | (プロジェクトまたはテーブル)フォーム名(文字列)、<br/>あるいはフォームを定義した.jsonファイルへのPOSIXパス(文字列)、<br/>あるいは開くフォームを定義したオブジェクト |
| userForm | Text | &#8594;  | 使用するユーザフォーム名 |
| * | Operator |  &#8594;  | 自動ウィンドウサイズ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM SET INPUT.Summary-->**FORM SET INPUT** コマンドは、*aTable*のカレント入力フォームを*form*または*userForm*に設定します。<!-- END REF-->フォームは*aTable*に属していなければなりません。

このコマンドのスコープは、カレントプロセスです。各テーブルは、プロセスごとに個々の入力フォームを持っています。

*form* 引数で表示したいフォームを指定します。以下のいづれかを渡すことができます:

* フォーム名
* 使用するフォームの詳細を格納している有効な.josn ファイルへのパス(POSIX シンタックス、*フォームファイルパス* 参照)
* フォームの詳細を格納しているオブジェクト

**注:** 構造的な理由から、このコマンドはプロジェクトフォームと互換がありません。プロジェクトフォームを*form*に渡しても、コマンドは何も行いません。  
  
**FORM SET INPUT** はフォームを表示しません。データ入力や読み込み、他のコマンドで使用するフォームを指定するだけです。フォームの作成に関する詳細は*4D Design Reference*マニュアルを参照してください。

デフォルト入力フォームはテーブルごとにエクスプローラウィンドウで指定します。このデフォルト入力フォームは、**FORM SET INPUT** コマンドで入力フォームを指定しない場合や、指定したフォームが存在しない場合に使用されます。

入力フォームはak edit subrecord あるいはak add subrecord といった標準アクションにおいても自動的に使用されます。

任意の引数*userForm* を使用して、(*form*を基に作成された) ユーザフォームをデフォルトの入力フォームとして設定することができます。有効なユーザフォーム名を渡すと、カレントプロセスの入力フォームに代わり、このフォームがデフォルトとして使用されます。これにより、(*\_o\_CREATE USER FORM* コマンドで生成された) 複数の異なるカスタムユーザフォームを同時に使用できるようになり、現在の状況で適切なフォームを使用することができます。

ユーザフォームに関する詳細は*ユーザフォームの概要* の節を参照してください。

入力フォームは多くのコマンドで表示されますが、一般にデータの入力や修正に使用されます。以下のコマンドは、データ入力や検索用に入力フォームを表示します:

* [ADD RECORD](add-record.md)
* [DISPLAY RECORD](display-record.md)
* [MODIFY RECORD](modify-record.md)
* [QUERY BY EXAMPLE](query-by-example.md)

[DISPLAY SELECTION](display-selection.md) や[MODIFY SELECTION](modify-selection.md) コマンドは、出力フォームを使用してレコードのリストを表示します。ユーザがリスト上のレコードをダブルクリックすると、入力フォームを表示します。 

データ読み込みコマンド[IMPORT TEXT](import-text.md)、[IMPORT SYLK](import-sylk.md) および[IMPORT DIF](import-dif.md) は、レコードの読み込みにカレント入力フォームを使用します。

オプション引数 *\** は、デザインモードのフォームプロパティウィンドウおよび[Open window](open-window.md) で使用されます。*\** を指定することにより、(ダイアログボックスや入力フォームとして) 次回フォームを使用する際、フォームプロパティの設定をもとに自動的にウィンドウサイズを変更するよう4Dに指示します。詳しくは[Open window](open-window.md) の節を参照してください。

**注:** オプション引数 *\** を使用するしないに関係なく、**FORM SET INPUT** コマンドはテーブルの入力フォームを変更します。

#### 例題 1 

以下の例は、FORM SET INPUTコマンドの一般的な使用方法です: 

```4d
 FORM SET INPUT([Companies];"New Comp") // 新しい会社を追加するフォーム
 ADD RECORD([Companies]) // 新しい会社の追加
```

#### 例題 2 

複数の会社を処理する請求書データベースでは、対応するユーザフォームを用いて請求書を作成しなくてはなりません: 

```4d
 Case of
    :(company="4D SAS")
       FORM SET INPUT([Invoices];"Input";"4D_SAS")
    :(company="4D Inc")
       FORM SET INPUT([Invoices];"Input";"4D_Inc")
    :(company="Acme")
       FORM SET INPUT([Invoices];"Input";"ACME")
 End case
 ADD RECORD([Factures])
```

#### 例題 3 

以下の例では.json フォームへのパスを使用して従業員リストにレコードを入力する場合を考えます:

```4d
 FORM SET INPUT([Personnel];"/RESOURCES/PersonnelForm.json")
 ADD RECORD([Personnel])
```

結果は以下のようになります:

![](../assets/en/commands/pict3687432.en.png)

#### 参照 

[ADD RECORD](add-record.md)  
[DISPLAY RECORD](display-record.md)  
[DISPLAY SELECTION](display-selection.md)  
[FORM SET OUTPUT](form-set-output.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[MODIFY RECORD](modify-record.md)  
[MODIFY SELECTION](modify-selection.md)  
[Open window](open-window.md)  
[QUERY BY EXAMPLE](query-by-example.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 55 |
| スレッドセーフである | &cross; |


