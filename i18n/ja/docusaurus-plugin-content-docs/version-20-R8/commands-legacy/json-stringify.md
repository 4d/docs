---
id: json-stringify
title: JSON Stringify
slug: /commands/json-stringify
displayed_sidebar: docs
---

<!--REF #_command_.JSON Stringify.Syntax-->**JSON Stringify** ( *value* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.JSON Stringify.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| value | Object, any | &#8594;  | JSON文字列に変換したいデータ |
| * | 演算子 | &#8594;  | 整形フォーマット |
| 戻り値 | Text | &#8592; | シリアライズされたJSONテキストを含む文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.JSON Stringify.Summary-->**JSON Stringify**コマンドは、 *value* 引数を、JSON文字列へと変換します。<!-- END REF-->このコマンドは[JSON Parse](json-parse.md) コマンドと逆の挙動をします。

シリアライズしたいデータを*value* に渡します。スカラー値(文字列、数字、日付または時間)または4Dオブジェクトあるいはコレクションを渡す事ができます。

**注:** 4D日付はカレントのデータベース設定によって、"yyyy-mm-dd" あるいは "YYYY-MM-DDThh:mm:sssZ" フォーマットに変換されます(*互換性ページ*内にある"オブジェクトではISO日付フォーマットの代わりに日付型を使用する"オプションを参照して下さい)。

オブジェクトあるいはコレクションを渡す場合、全ての型の値を含めることができます( *JSON データ型* の章を参照して下さい)が、以下のJSONの規則に則っている必要があります。

* 文字列の値は引用符で囲われている必要があります。ユニコード文字は全て使用できますが、特殊文字はパックスラッシュでエスケープする必要があります。
* 数字は ±10.421e±10の範囲内におさまっていなければなりません。
* ブール型:"true"または"false"の文字列
* 日付:"yyyy-mm-dd" あるいは "\\"YYYY-MM-DDTHH:mm:ssZ"\\" フォーマットのテキスト型、カレントのデータベース設定による(上記参照)。
* 時間:実数型(デフォルトでは秒数)  
**注:**
* * ピクチャー属性は次の文字列へと変換されます: "\[object Picture\]"  
   * フィールド、変数、配列へのポインターは、文字列化したときに評価されます。

任意の*\** 演算子を渡すことによって、戻り値の文字列にフォーマット文字を含めることができます。これによりJSONデータの表示が改善されます(いわゆる整形フォーマティングです)。

#### 例題 1 

スカラー値の変換:

```4d
 $vc:=JSON Stringify("Eureka!") // "Eureka!"
 $vel:=JSON Stringify(120) // "120"
 
 $vh:=JSON Stringify(?20:00:00?) // 真夜中から"72000" 秒が経過
 SET DATABASE PARAMETER(Times inside objects;Times in milliseconds)
 $vhms:=JSON Stringify(?20:00:00?) // 真夜中から"72000000" ミリ秒が経過
 
 $vd:=JSON Stringify(!28/08/2013!) // "2013-08-27T22:00:00.000Z" (パリ時間)
 SET DATABASE PARAMETER(Dates inside objects;String type without time zone)
 $vdd:=JSON Stringify(!28/08/2013!) // "2013-08-28T00:00:00.000Z"
```

#### 例題 2 

特殊文字を含む文字列の変換:

```4d
 $s:=JSON Stringify("{\"name\":\"john\"}")
  // $s="{\\"name\\":\\"john\\"}"
 $p:=JSON Parse($s)
  // $p={"name":"john"}
```

#### 例題 3 

4Dオブジェクトを、*\** 演算子ありとなしでシリアライズした場合の例:

```4d
 var $MyContact : Text
 var $MyPContact : Text
 var $Contact;$Children : Object
 OB SET($Contact;"lastname";"Monroe";"firstname";"Alan")
 OB SET($Children;"firstname";"Jim";"age";"12")
 OB SET($Contact;"children";$Children)
 $MyContact:=JSON Stringify($Contact)
 $MyPContact:=JSON Stringify($Contact;*)
  //$MyContact= {"lastname":"Monroe","firstname":"Alan","children":{"firstname":"John","age":"12"}}
  //$MyPContact= {\n\t"lastname": "Monroe",\n\t"firstname": "Alan",\n\t"children": {\n\t\t"firstname": "John",\n\t\t"age": "12"\n\t}\n}
```

このフォーマティングを使った場合の利点はJSONがWebエリアに表示されれば一目瞭然です。

* 標準フォーマティング:  
![](../assets/en/commands/pict1205013.fr.png)
* 整形フォーマティング:  
![](../assets/en/commands/pict1205011.fr.png)

#### 例題 4 

変数へのポインターの使用例:

```4d
 var $MyTestVar : Object
 var $name ;$jsonstring  : Text
 OB SET($MyTestVar;"name";->$name) // object definition
  // $MyTestVar= {"name":"->$name"}
 
 $jsonstring :=JSON Stringify($MyTestVar)
  // $jsonstring ="{"name":""}"
  //...
 
 $name:="Smith"
 $jsonstring :=JSON Stringify($MyTestVar)
  //$jsonstring = "{"name" : "Smith"}"
```

#### 例題 5 

4Dオブジェクトのシリアライズ:

```4d
 var $varjsonTextserialized : Text
 var $Contact : Object
 OB SET($Contact;"firstname";"Alan")
 OB SET($Contact;"lastname";"Monroe")
 OB SET($Contact;"age";40)
 OB SET($Contact;"phone";"[555-0100,555-0120]")
 
 $varjsonTextserialized:=JSON Stringify($Contact)
 
  // $varjsonTextserialized = "{"lastname":"Monroe","phone":"[555-0100,
  // 555-0120]","age":40,"firstname":"Alan"}"
```

#### 例題 6 

日付値(パリ時間)を含んでいる4Dオブジェクトのシリアライズの例を考えます。結果の文字列は、カレントのデータベース設定によります。

```4d
 var $varjsonTextserialized : Text
 var $Contact : Object
 OB SET($Contact;"name";"Smith";"birthday";!22/10/1975!)
 $varjsonTextserialized:=JSON Stringify($Contact)
```

* "オブジェクトではISO日付フォーマットの代わりに日付型を使用する"オプションがチェックされていない場合:  
```json  
"name":"Smith","birthday":"1975-10-21T22:00:00.000Z"  
```
* "オブジェクトではISO日付フォーマットの代わりに日付型を使用する"オプションがチェックされている場合:  
```json  
"name":"Smith","birthday":"1975-10-22"  
```

**注:** この設定についての詳細は、*互換性ページ*を参照して下さい。

#### 例題 7 

コレクション(パリ時間)の変換の例を考えます。結果の文字列はカレントのデータベース設定によります:

```4d
 var $myCol : Collection
 var $myTxtCol : Text
 $myCol:=New collection(33;"mike";!28/08/2017!;False)
 $myTxtCol:=JSON Stringify($myCol)
```

* "オブジェクトではISO日付フォーマットの代わりに日付型を使用する"オプションがチェックされていない場合:  
```json  
$myTxtCol="[33,"mike","2017-08-27T22:00:00.000Z",false]"  
```
* "オブジェクトではISO日付フォーマットの代わりに日付型を使用する"オプションがチェックされている場合:  
```json  
$myTxtCol="[33,"mike","2017-08-28",false]"  
```

**注:** このオプションについての詳細な情報については、*互換性ページ*を参照して下さい。

#### 参照 

[JSON Parse](json-parse.md)  
[JSON Stringify array](json-stringify-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1217 |
| スレッドセーフである | &check; |


