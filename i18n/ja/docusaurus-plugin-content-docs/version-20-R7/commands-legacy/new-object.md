---
id: new-object
title: New object
slug: /commands/new-object
displayed_sidebar: docs
---

<!--REF #_command_.New object.Syntax-->**New object** {( *property* ; *value* {; *property2* ; *value2* ; ... ; *propertyN* ; *valueN*} )} : Object<!-- END REF-->
<!--REF #_command_.New object.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| property | Text | &#8594;  | 作成するプロパティ名 |
| value | any | &#8594;  | プロパティの値 |
| 戻り値 | Object | &#8592; | 新しいランゲージオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.New object.Summary-->**New object** コマンドは新しい空の、あるいは事前に値が入れられたオブジェクトを作成し、その参照を返します。<!-- END REF-->

何も引数を渡さなかった場合、**New object** は空のオブジェクトを作成し、その参照を返します。この参照を*C\_OBJECT* で作成された4D変数あるいは4Dオブジェクトフィールドへと割り当てて下さい。

**注:** *C\_OBJECT* はObject type型の変数を宣言しますが、オブジェクトは作成しません。

オプションとして、一つあるいは複数の*property*/*value* のペアを引数として渡すことにより、新規オブジェクトにあらかじめ値を入れておくことができます:

* *property* 引数には、作成したいプロパティのラベルを渡します。*property* 引数は大文字と小文字を区別することに注意してください。
* *value* 引数にはプロパティに設定したい値を渡します。以下の型の値がサポートされます:  
   * 数値(実数、整数...) 数値は必ず実数として保存されます。  
   * テキスト  
   * ブール  
   * ポインター  
   * blob (4D.Blob)  
   * 日付  
   * 時間  
   * null  
   * ピクチャー  
   * オブジェクト  
   * コレクション

以下の点に注意して下さい:

* ポインターを渡した場合、それはそのままの形で保存されます。[JSON Stringify](json-stringify.md) コマンドを使用した際に評価されます。
* 日付はカレントの"date inside objects"データベース設定(*互換性ページ*参照)に応じて、"yyyy-mm-dd" という日付か "YYYY-MM-DDTHH:mm:ss.SSSZ"というフォーマットの文字列で保存されます。4D日付をオブジェクトに保存する前にテキストに変換した場合、プログラムはデフォルトでローカルのタイムゾーンを使用します。[SET DATABASE PARAMETER](set-database-parameter.md) コマンドのDates inside objects セレクターを使用することで、この振る舞いを変更することができます。
* 時間を渡した場合、ミリ秒の数(実数)として保存されます。

#### 例題 1 

このコマンドは空の、あるいは値が入れられたオブジェクトを作成することができます:

```4d
 var $obj1 : Object
 var $obj2 : Object
 var $obj3 : Object
 $obj1:=New object
  // $obj1 = {}
 $obj2:=New object("name";"Smith")
  // $obj2 = {name:Smith}
 $obj3:=New object("name";"Smith";"age";40)
  // $obj3 = {name:Smith,age:40}
```

#### 例題 2 

オブジェクトを引数の値として渡して、新規のオブジェクトを作成する場合を考えます:

```4d
 var $Children;$Contact : Object
 
  //オブジェクト配列を作成
 ARRAY TEXT($arrChildren;3)
 $arrChildren{1}:="Richard"
 $arrChildren{2}:="Susan"
 $arrChildren{3}:="James"
 OB SET ARRAY($Children;"Children";$arrChildren)
 
  //オブジェクトを初期化
 $Contact:=New object("FirstName";"Alan";"LastName";"Parker";"age";30;"Children";$Children)
  // $Contact = {FirstName:Alan,LastName:Parker,age:30,Children:{Children:[Richard,Susan,James]}}
```

#### 例題 3 

このコマンドはオブジェクトを引数として渡す際に便利です:

```4d
 var $measures : Object
 $measures:=Database measures(New object("path";"DB.cacheReadBytes";"withHistory";True;"historyLength";120))
```

#### 例題 4 

このコマンドを使用すると、オブジェクトをループ内で容易に管理できます:

```4d
 ARRAY OBJECT($refs;0)
 var vCounter : Integer
 
 For(vCounter;1;100)
    APPEND TO ARRAY($refs;New object("line";"Line number "+String(vCounter)))
 End for
```

#### 参照 

  
[New shared object](new-shared-object.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1471 |
| スレッドセーフである | &check; |


