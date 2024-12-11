---
id: array-to-selection
title: ARRAY TO SELECTION
slug: /commands/array-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO SELECTION.Syntax-->**ARRAY TO SELECTION** {( *array* ; *aField* {; *array2* ; *aField2* ; ... ; *arrayN* ; *aFieldN*}{; *} )}<!-- END REF-->
<!--REF #_command_.ARRAY TO SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594;  | コピー元の配列 |
| aField | Field | &#8592; | 配列データを受け取るフィールド |
| * | 演算子 | &#8594;  | 実行をスタックする |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ARRAY TO SELECTION.Summary-->**ARRAY TO SELECTION**コマンドは、1つ以上の配列をレコードのセレクションにコピーします。<!-- END REF-->すべてのフィールドは同一テーブルのものでなければなりません。 

コマンド呼び出し時にセレクションが存在する場合、配列の並び順とレコードの並び順に基づき、配列要素はレコードに書き込まれます。要素数がレコード数よりも多い場合、新しいレコードを作成します。レコードは、既存でも新規でも、自動的に保存されます。

**注:** このコマンドは新しいレコードを作成できるため、テーブルの読み込みのみ状態を考慮しません(*レコードのロック* を参照して下さい)。

すべての配列は同じ要素数でなければなりません。配列のサイズが異なる場合、シンタックスエラーが生成されます。

このコマンドは[SELECTION TO ARRAY](selection-to-array.md)コマンドとは逆の動作を行います。しかし**ARRAY TO SELECTION**コマンドは、たとえ自動リレートが設定されていても、リレートテーブルを含む他のテーブルのフィールドを使用することはできません。

*\** 引数を渡すと、4Dはその行の実行を遅延し、メモリに格納します。*\** で終わる行を使用して複数の行をスタックできます。スタックされた行は *\** なしの**ARRAY TO SELECTION**一回の呼び出しですべて実行されます。この目的のため、このコマンドを引数なしで呼び出すことができます。  
これにより、[QUERY](query.md)コマンドのように、複雑な文を複数の行に分割して記述することができ、可読性が向上します。また途中の行の挿入も容易です。 

**警告**: **ARRAY TO SELECTION**コマンドは、既存のレコードの情報を上書きします。十分に注意して使用してください。**ARRAY TO SELECTION**コマンド実行中、レコードが他のプロセスによりロックされていると、そのレコードは更新されません。ロックされたレコードは"**LockedSet**"というプロセスセットに入れられます。**ARRAY TO SELECTION**コマンド実行後に"**LockedSet**"セットをテストして、ロックされていたレコードの存在を知ることができます。

**注**: このコマンドは、フィールドが含まれているテーブルの読み込みのみ/読み書き状態を考慮しません。

**4D Server:** このコマンドは4D Server用に最適化されています。配列はクライアントマシンからサーバへ渡され、レコードの修正や追加はサーバ上で実行されます。この処理は同期的に 行われるため、クライアントマシンは処理が正常に終了するまで待機しなくてはなりません。マルチユーザ・マルチプロセス環境では、ロックされたレコードは 上書きされません。

#### 例題 1 

以下の例は、*asLastNames*と*asCompanies*の2つの配列のデータを*\[People\]*テーブルにコピーします。配列*asLastNames*のデータは*\[People\]Last Name*フィールドに、配列*asCompanies*のデータは*\[People\]Company*フィールドに、それぞれ書き込まれます:

```4d
 ARRAY TO SELECTION(asLastNames;[People]Last Name;asCompanies;[People]Company)
```

#### 例題 2 

オプションの値に応じてフィールドを選択し、そのレコードのセレクションをアーカイブテーブルへとコピーしたい場合を考えます:

```4d
 ARRAY TEXT($_name;0)
 ARRAY TEXT($_firstname;0)
 ARRAY TEXT($_cv;0)
 ARRAY PICTURE($_photo;0)
 
 SELECTION TO ARRAY([Candidate]Name;$_name;*)
 SELECTION TO ARRAY([Candidate]Firstname;$_firstname;*)
 If(withCV) //CV フィールドを読み込み
    SELECTION TO ARRAY([Candidate]cv;$_cv;*)
 End if
 If(withPhoto) //Photo フィールドを読み込み
    SELECTION TO ARRAY([Candidate]photo;$_photo;*)
 End if
 SELECTION TO ARRAY //コピーを実行
 
 REDUCE SELECTION([Candidate_Archive];0)
 ARRAY TO SELECTION($_name;[Candidate_Archive]Name;*)
 ARRAY TO SELECTION($_prenom;[Candidate_Archive]Firstname;*)
 If(withCV)
    ARRAY TO SELECTION($_cv;[Candidate_Archive]cv;*)
 End if
 If(withPhoto)
    ARRAY TO SELECTION($_photo;[Candidate_Archive]photo;*)
 End if
 ARRAY TO SELECTION
```

#### 参照 

[SELECTION TO ARRAY](selection-to-array.md)  
*システム変数*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 261 |
| スレッドセーフである | &check; |
| カレントセレクションを変更する ||


