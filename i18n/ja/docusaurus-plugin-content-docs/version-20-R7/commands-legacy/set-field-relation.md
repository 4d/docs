---
id: set-field-relation
title: SET FIELD RELATION
slug: /commands/set-field-relation
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD RELATION.Syntax-->**SET FIELD RELATION** ( manyTable | manyField ; *one* ; *many* )<!-- END REF-->
<!--REF #_command_.SET FIELD RELATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| manyTable &#124; manyField | テーブル, フィールド | &#8594;  | リレーションの開始テーブル, または リレーションの開始フィールド |
| one | Integer | &#8594;  | テーブルまたはフィールドを開始点とする n対1リレーションの状態 |
| many | Integer | &#8594;  | テーブルまたはフィールドを開始点とする 1対nリレーションの状態 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET FIELD RELATION.Summary-->**SET FIELD RELATION** コマンドを使用すると、デザインモードのリレートプロパティウィンドウで設定した初期状態が何であれ、データベースの各リレートの自動/マニュアルの状態を個別に設定できます。<!-- END REF--> 

1番目の引数には、テーブルやフィールドの名前を渡します:

* フィールド名 (*manyField*) を渡すと、コマンドは指定したnフィールドから開始するリレートに対してのみ適用されます。
* テーブル名 (*manyTable*) を渡すと、コマンドは指定したnテーブルから開始するリレートに対してのみ適用されます。
* *manyField*または*manyTable*から開始するリレートが存在しない場合、シンタックスエラー16（“このフィールドにはリレートが設定されていません。”）が生成され、システム変数OKには0が代入されます。

引数*one*と*many*には、指定した1対nリレートやn対1リレートに適用される自動/マニュアルの状態を示す値を渡します。この値として、"*Relations*"テーマの定数を使用できます。

| 定数                      | 型    | 値 | コメント                                    |
| ----------------------- | ---- | - | --------------------------------------- |
| Automatic               | 倍長整数 | 3 | カレントプロセスに対し、リレートを自動に設定する。               |
| Do not modify           | 倍長整数 | 0 | リレートの現在のステータスを変更しない。                    |
| Manual                  | 倍長整数 | 2 | カレントプロセスに対し、リレートをマニュアルに設定する。            |
| Structure configuration | 倍長整数 | 1 | アプリケーションのストラクチャウインドウで指定されたリレートの設定を使用する。 |

**Note:** このコマンドを使用して行った変更は、カレントプロセスに対してのみ適用されます。リレートプロパティウィンドウのオプションを用いて指定されたリレート設定は変更されません。

**Note:** [SET AUTOMATIC RELATIONS](set-automatic-relations.md)コマンドに対して[True](true.md "True") を同じセッション中に渡したとき、**SET FIELD RELATION**への呼び出しは、それが[SET AUTOMATIC RELATIONS](set-automatic-relations.md)の前にあろうと後ろにあろうと無視されます。自動モードをロックして**SET FIELD RELATION**への呼び出しを有効化するためには、[SET AUTOMATIC RELATIONS](set-automatic-relations.md)に[False](false.md "False") を渡します。

#### 例題 

以下のコードを実行すると、クイックレポートエディター内において、有用なリレートだけを自動に設定できるようになります:

```4d
 SET AUTOMATIC RELATIONS(False;False) // リレーションのリセット
  //以下のリレーションのみが使用されます
 SET FIELD RELATION([Invoices]Cust_IDt;Automatic;Automatic)
 SET FIELD RELATION([Invoice_Row]Invoice_ID;Automatic;Automatic)
 QR REPORT([Invoices];Char(1))
```

#### 参照 

[GET AUTOMATIC RELATIONS](get-automatic-relations.md)  
[GET FIELD RELATION](get-field-relation.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 919 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


