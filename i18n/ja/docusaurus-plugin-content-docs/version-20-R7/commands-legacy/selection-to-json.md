---
id: selection-to-json
title: Selection to JSON
slug: /commands/selection-to-json
displayed_sidebar: docs
---

<!--REF #_command_.Selection to JSON.Syntax-->**Selection to JSON** ( *aTable* {; *aField*}{; *aField2* ; ... ; *aFieldN*}{; *template*})  : Text<!-- END REF-->
<!--REF #_command_.Selection to JSON.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | シリアライズするテーブル |
| aField | Field | &#8594;  | シリアライズするフィールドを指定 |
| template | Object | &#8594;  | プロパティ名と取り出したいフィールドを指定するポインターをオブジェクトで渡す |
| 戻り値 | Text | &#8592; | シリアライズされた JSON 配列を含む文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Selection to JSON.Summary-->**Selection to JSON**コマンドは、 *aTable* のカレントセレクション内のレコードと同数の要素を持つJSON配列を含んだ文字列を返します。<!-- END REF-->配列のそれぞれの要素はセレクションのフィールドのラベルと値を含んだJSONオブジェクトです。

*aTable* 引数のみを渡した場合、テーブル内の、全てのフィールドの値のうち、JSON で表現できるものをJSON 配列で返します。BLOB フィールドとピクチャーフィールドは無視されます。

*aTable* 内の一部のフィールドのみ取り出したい場合、 *aField* 引数か、 *template* 引数を使ってその部分を指定することが出来ます:

* *aField*: 一つ以上のフィールドをこの引数で指定して下さい。ここで指定したフィールドの値のみ JSON 配列で返されます。
* *template*: 一つ以上の*名前/値*のペアを含んだ 4D オブジェクトを渡して下さい。*名前*には任意の有効な属性名を、*値*には取り出したいフィールドを指定するポインターを入れて指定します。このシンタックスを使用するとJSON配列内のフィールドのラベルをカスタマイズする事ができます。

このコマンドはオブジェクト型フィールドをサポートします: これらのフィールドのデータは自動的にJSONフォーマットへと変換されます(ピクチャー属性値は"\[object Picture\]" という文字列に変換されるという点に注意してください)。以下の4D宣言は、"テーブルのカレントセレクション内の*objectField* の全ての値からJSONを生成せよ"、と解釈されるという点に注意して下さい:  

```4d
 Selection to JSON([aTable];objectField)
```

**注:** **Selection to JSON**コマンドを呼び出した後、カレントセレクションは同じままですが、カレントレコードはロードされておらず、変更されている可能性もあります(その場合、カレントセレクションの最後のレコードがカレントレコードになります)。**Selection to JSON**コマンドのあと、カレントレコード内のフィールドの値を使用したい場合には[LOAD RECORD](load-record.md) コマンドと、(必要であれば)[GOTO SELECTED RECORD](goto-selected-record.md) コマンドを組み合わせて呼んで下さい。

#### 例題 1 

以下のセレクションを JSON 文字列で表現する場合:

![](../assets/en/commands/pict1205203.en.png)

1) \[Members\] テーブル内の全てのフィールドの値を取り出す場合:  

```4d
 $jsonString :=Selection to JSON([Members])
  // $jsonString =[{"LastName":"Durant","FirstName":"Mark","Address":
  //"25 Park St","Zip code":"15205","City":"Pittsburgh"},{"LastName":
  //"Smith","FirstName":"John","Address":"24 Philadelphia Ave","Zip code":
  //"75203","City":"Dallas"},{"LastName":"Anderson","FirstName"
  //:"Adeline","Address":"37 Market St","Zip code":"45205","City":"Cincinnati"},...]
```

2) フィールドを指定して、取り出すフィールドを二つだけに限定したい場合:  

```4d
 QUERY([Members];[Members]LastName="A@")
 $jsonString :=Selection to JSON([Members];[Members]LastName;[Members]City)
  // $jsonString = [{"LastName":"Anderson","City":"Cincinnati"},{"LastName":"Albert","City":"Houston"}]
```

3) 一つのフィールドだけを取り出したし、異なるラベルを使用したい場合。  
この場合、*template* 表記を使用する事ができます:  

```4d
 var $template : Object
 OB SET($template;"Member";->[Members]LastName) // 単一のフィールドを指定、カスタムのラベルを使用
 ALL RECORDS([Members])
 $jsonString :=Selection to JSON([Members];$template)
  // $jsonString = [{"Member":"Durant"},{"Member":"Smith"},{"Member":"Anderson"},{"Member":"Albert"},{"Member":"Leonard"},{"Member":"Pradel"}
```

#### 例題 2 

*template* 表記を使用する事で、異なるテーブルからフィールドを書き出す事ができます:

```4d
 var $template : Object
 var $jsonString : Text
 OB SET($template;"Last name";->[Emp]LastName)
 OB SET($template;"First name";->[Emp]FirstName)
 OB SET($template;"Company";->[Company]LastName) //[Emp]LastName フィールドと重複してしまうのでカスタムのラベルを使用
 ALL RECORDS([Emp])
 SET FIELD RELATION([Emp]UUID_Company;Automatic;Do not modify)
 $jsonString:=Selection to JSON([Emp];$template)
 SET FIELD RELATION([Emp]UUID_Company;Structure configuration;Do not modify)
```

#### 参照 

[JSON TO SELECTION](json-to-selection.md)  