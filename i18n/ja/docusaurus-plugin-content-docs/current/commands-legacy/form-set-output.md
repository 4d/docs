---
id: form-set-output
title: FORM SET OUTPUT
slug: /commands/form-set-output
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET OUTPUT.Syntax-->**FORM SET OUTPUT** ( {*aTable* ;} *form* {; *userForm*} )<!-- END REF-->
<!--REF #_command_.FORM SET OUTPUT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | 出力フォームを設定するテーブル, または 省略した場合、デフォルトテーブル |
| form | Text, Object | &#8594;  | (プロジェクトまたはテーブル)フォーム名(文字列)、<br/>あるいはフォームを定義した.jsonファイルへのPOSIXパス(文字列)、<br/>あるいは開くフォームを定義したオブジェクト |
| userForm | Text | &#8594;  | 使用するユーザフォーム名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM SET OUTPUT.Summary-->**FORM SET OUTPUT** コマンドは、*form*または*userForm*を*aTable*のカレント出力フォームとして設定します。<!-- END REF-->このフォームは*aTable*に属するものでなければなりません。   

*form* 引数で表示したいフォームを指定します。以下のいづれかを渡すことができます:

* フォーム名
* 使用するフォームの詳細を格納している有効な.josn ファイルへのパス(POSIX シンタックス、*フォームファイルパス*参照)
* フォームの詳細を格納しているオブジェクト

このコマンドのスコープはカレントプロセスです。各テーブルはプロセスごとに出力フォームを持っています。

**注:** 構造的な理由から、このコマンドはプロジェクトフォームと互換がありません。プロジェクトフォームを*form*に渡しても、コマンドは何も行いません。  
  
**FORM SET OUTPUT** はフォームを表示しません。データ印刷や表示、他のコマンドで使用するフォームを指定するだけです。フォームの作成に関する詳細は*4D Design Reference*マニュアルを参照してください。

デフォルト出力フォームはテーブルごとにエクスプローラウィンドウで指定します。このデフォルト出力フォームは、**FORM SET OUTPUT** コマンドで出力フォームを指定しない場合や、指定したフォームが存在しない場合に使用されます。

任意の引数*userForm* を使用して、(*form*を基に作成された) ユーザフォームをデフォルトの出力フォームとして設定することができます。有効なユーザフォーム名を渡すと、カレントプロセスの出力フォームに代わり、このフォームがデフォルトとして使用されます。これにより、(*\_o\_CREATE USER FORM* コマンドで生成された) 複数の異なるカスタムユーザフォームを同時に使用できるようになり、現在の状況で適切なフォームを使用することができます。

ユーザフォームに関する詳細は*ユーザフォームの概要* の節を参照してください。

出力フォームは3つのコマンドグループ（画面上にレコードをリスト表示するグループ、レポートを作成するグループ、データを書き出すグループ）で使用されます。[DISPLAY SELECTION](display-selection.md) や [MODIFY SELECTION](modify-selection.md) コマンドは、出力フォームを使用してレコードのリストを表示します。[PRINT LABEL](print-label.md) や 60 コマンドを使用してレポートを作成する際にも出力フォームを使用します。各データ書き出しコマンド（[EXPORT DIF](export-dif.md)、85 そして [EXPORT TEXT](export-text.md)）でも出力フォームを使用します。

#### 例題 1 

以下の例は、**FORM SET OUTPUT** コマンドの典型的な使用方法です。この例では**FORM SET OUTPUT** コマンドを出力フォームが使用される直前に記述していますが、直前である必要はありません。実際、この**FORM SET OUTPUT**コマンドがこのメソッドの前に同じプロセス内で実行されていれば、このコマンドを全く別のメソッドで実行しても構いません:

```4d
 FORM SET INPUT([Parts];"Parts In") //入力フォームを設定
 FORM SET OUTPUT([Parts];"Parts List") //出力フォームを設定
 MODIFY SELECTION([Parts]) //このコマンドは両フォームを使用する
```

#### 例題 2 

以下の例は.json フォームへのパスを使用して従業員リスト内のレコードを印刷する場合を考えます:

```4d
 FORM SET OUTPUT([Personnel];"/RESOURCES/PersonnelForm.json")
 ALL RECORDS([Personnel])
 PRINT SELECTION([Personnel])
```

#### 参照 

[DISPLAY SELECTION](display-selection.md)  
[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[FORM SET INPUT](form-set-input.md)  
[MODIFY SELECTION](modify-selection.md)  
[PRINT LABEL](print-label.md)  
[PRINT SELECTION](print-selection.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 54 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


