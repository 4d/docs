---
id: json-stringify-array
title: JSON Stringify array
slug: /commands/json-stringify-array
displayed_sidebar: docs
---

<!--REF #_command_.JSON Stringify array.Syntax-->**JSON Stringify array** ( *array* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.JSON Stringify array.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Text array, Real array, Boolean array, Pointer array, Object array | &#8594;  | 内容をシリアライズしたい配列 |
| * | 演算子 | &#8594;  | 整形フォーマット |
| 戻り値 | Text | &#8592; | シリアライズされたJSON配列を含む文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.JSON Stringify array.Summary-->**JSON Stringify array**コマンドは、4D配列 *array* をシリアライズされたJSON配列へと変換します。<!-- END REF-->このコマンドは [JSON PARSE ARRAY](json-parse-array.md)コマンドと逆の挙動をします。

*array* 引数にはシリアライズしたいデータを含む4D配列を渡して下さい。この配列はテキスト、実数、ブール、ポインターまたはオブジェクト型である必要があります。 

**注:** *array* 引数にスカラー値あるいはフィールドを渡した場合、コマンドは文字列ともに"\[ \]"で挟まれた引数の値を返します。

任意の *\** 引数を渡す事によって戻り値の文字列に整形フォーマティングを使用することもできます。これはフォーマティング文字を含めることよってWebページで表示される際のJSONの表示を改善するものです。

#### 例題 1 

テキスト配列の変換:

```4d
 var $jsonString : Text
 ARRAY TEXT($ArrayFirstname;2)
 $ArrayFirstname{1}:="John"
 $ArrayFirstname{2}:="Jim"
 $jsonString :=JSON Stringify array($ArrayFirstname)
 
  // $jsonString = "["John","Jim"]"
```

#### 例題 2 

数字を含むテキスト配列の変換:

```4d
 ARRAY TEXT($phoneNumbers;0)
 APPEND TO ARRAY($phoneNumbers ;"555-0100")
 APPEND TO ARRAY($phoneNumbers ;"555-0120")
 $string :=JSON Stringify array($phoneNumbers)
  // $string = "["555-0100","555-0120"]"
```

#### 例題 3 

オブジェクト配列の変換:

```4d
 var $ref_john : Object
 var $ref_jim : Object
 ARRAY OBJECT($myArray;0)
 OB SET($ref_john;"name";"John";"age";35)
 OB SET($ref_jim;"name";"Jim";"age";40)
 APPEND TO ARRAY($myArray ;$ref_john)
 APPEND TO ARRAY($myArray ;$ref_jim)
 $JsonString :=JSON Stringify array($myArray)
  // $JsonString = "[{"name":"John","age":35},{"name":"Jim","age":40}]"
 
  // Webページでの結果を見たい場合は
  // 任意の * 演算子を渡します:
 $JsonStringPretty :=JSON Stringify array($myArray;*)
```

![](../assets/en/commands/pict1205072.fr.png)

#### 例題 4 

オブジェクト配列内の4Dセレクションの変換:

```4d
 var $jsonObject : Object
 var $jsonString : Text
 
 QUERY([Company];[Company]Company Name="a@")
 OB SET($jsonObject;"company name";->[Company]Company Name)
 OB SET($jsonObject;"city";->[Company]City)
 OB SET($jsonObject;"date";[Company]Date_input)
 OB SET($jsonObject;"time";[Company]Time_input)
 ARRAY OBJECT($arraySel;0)
 
 While(Not(End selection([Company])))
    $ref_value:=OB Copy($jsonObject;True)
  // これらをコピーしない場合、値は空の文字列となります。
    APPEND TO ARRAY($arraySel;$ref_value)
  // それぞれの要素は選択した値を含みます。例えば、
  // $arraySel{1} = // {"company name":"APPLE","time":43200000,"city":
  // "Paris","date":"2012-08-02T00:00:00Z"}
    NEXT RECORD([Company])
 End while
 
 $jsonString:=JSON Stringify array($arraySel)
  // $jsonString = "[{"company name":"APPLE","time":43200000,"city":
  //"Paris","date":"2012-08-02T00:00:00Z"},{"company name":
  //"ALMANZA",...}]"
```

#### 参照 

[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1228 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


