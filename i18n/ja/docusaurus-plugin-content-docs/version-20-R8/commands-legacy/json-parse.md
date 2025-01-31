---
id: json-parse
title: JSON Parse
slug: /commands/json-parse
displayed_sidebar: docs
---

<!--REF #_command_.JSON Parse.Syntax-->**JSON Parse** ( *jsonString* {; *type*}{; *} ) : any<!-- END REF-->
<!--REF #_command_.JSON Parse.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| jsonString | Text | &#8594;  | 解析したいJSON文字列 |
| type | Integer | &#8594;  | 値を変換したい型 |
| * | 演算子 | &#8594;  | 返された値がオブジェクトの場合、各プロパティの行の位置とオフセットを追加 |
| 戻り値 | any, Object | &#8592; | JSON文字列から取り出した値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.JSON Parse.Summary-->**JSON Parse**コマンドは、JSONフォーマットの文字列の中身を解析し、4Dのフィールドまた は変数へと保存可能な値を取り出します。<!-- END REF-->このコマンドはJSONデータをデシリアライズします。つまり [JSON Stringify](json-stringify.md)コマンドと逆の挙動をします。

*jsonString* 引数には、解析をしたいJSONフォーマットの文字列を渡します。この文字列が正しくフォーマットされていないと、解析はエラーを生成します。なので、**JSON Parse**をしようしてJSON文字列を評価することができます。

**注:** ポインターを使用した場合、**JSON Parse**を使用する前に [JSON Stringify](json-stringify.md) コマンドを使用する必要があります。

*type* 引数を省略した場合、結果を保存するのに使用する変数またはフィールドが定義されていれば、4Dは自動的に、取得した値をその型へと変換します。そうでない場合は4Dは型を推測します。*type* 引数を渡す事によって変換する型を強制的に指定することもできます。渡す場合は、 *Field and Variable Types*テーマ内にある以下の定数のどれか一つを渡して下さい。

| 定数            | 型    | 値  |
| ------------- | ---- | -- |
| Is Boolean    | 倍長整数 | 6  |
| Is collection | 倍長整数 | 42 |
| Is date       | 倍長整数 | 4  |
| Is longint    | 倍長整数 | 9  |
| Is object     | 倍長整数 | 38 |
| Is real       | 倍長整数 | 1  |
| Is text       | 倍長整数 | 2  |
| Is time       | 倍長整数 | 11 |

****注:** 

* 実数型の値は ±10.421e±10の範囲内に収まっていなければなりません。
* テキスト型の値の場合、全ての特殊文字は引用符を含めエスケープされてなければなりません(例を参照して下さい)。
* JSON の日付は全て "\\"YYYY-MM-DDTHH:mm:ssZ\\""のフォーマットでなければなりません。このコマンドは4Dの日付がGMTではなくローカル時刻を含むことを考慮します。
* Is date 定数を使用する場合、デフォルトで、コマンドは文字列がGMTではなくローカル時刻を含んでいると判断します。この設定は[SET DATABASE PARAMETER](set-database-parameter.md) コマンドのDates inside objects セレクターを使用することで変更することができます。
* 4D v16 R6以降、カレントのデータ保存設定が"日付型"であるとき、"YYYY-MM-DD" フォーマットのJSON 日付文字列は、**JSON Parse** コマンドによって自動的に日付値として返されます。この設定についての詳細な情報については、*互換性ページ* 内にある"オブジェクトではISO日付フォーマットの代わりに日付型を使用する"を参照して下さい。
* 時間型の値は数値型から文字列型へと返すことが可能です。デフォルトでは、解析された値は秒数とみなされます。

任意の *\** 引数を渡し、*jsonString* 引数がオブジェクトであった場合、返されたオブジェクトには、オブジェクトのそれぞれのプロパティとサブプロパティのパス、行の位置、そして行のオフセットを表す*\_\_symbols*という名前の追加のプロパティが含まれています。この情報はデバッグプロセスにおいて有用です。*\_\_symbols* プロパティの構造は、以下のようになっています:

```json
__symbols:{//オブジェクト詳細<br />   myAtt.mySubAtt...:{ //プロパティパス<br />      line:10, //プロパティの行番号<br />      offset:35 //プロパティの、行の先頭からのオフセット<br />      }<br />   }
```

 **注:** 返された値が*type* 引数で指定した型と異なる場合、 *\** 引数は無視されます。

#### 例題 1 

単純な変換の例:

```4d
 var $r : Real
 $r:=JSON Parse("42.17") //$r = 42,17 (Real)
 
 var $el : Integer
 $el:=JSON Parse("120.13";Is longint) //$el=120
 
 var $t : Text
 $t:=JSON Parse("\"Year 42\"";Is text) // $t="Year 42" (text)
 
 var $o : Object
 $o:=JSON Parse("{\"name\":\"john\"}")
  // $o = {"name":"john"} (4D object)
 
 var $b : Boolean
 $b:=JSON Parse("{\"manager\":true}";Is Boolean) // $b=true
 
 var $h : Time
 $h:=JSON Parse("5120";Is time) //$h=01:25:20
```

#### 例題 2 

日付型のデータの変換の例: 

```4d
 $test:=JSON Parse("\"1990-12-25T12:00:00Z\"")
  // $test="1990-12-25T12:00:00Z"
 var $date;$date2;$date3 : Date
 $date:=JSON Parse("\"2008-01-01T12:00:00Z\"";Is date)
  //$date=01/01/08
 $date2:=JSON Parse("\"2017-07-13T23:00:00.000Z\"";Is date)
  //$date2=14/07/17 (Paris time zone)
 SET DATABASE PARAMETER(Dates inside objects;String type without time zone)
 $date3:=JSON Parse("\"2017-07-13T23:00:00.000Z\"";Is date)
  //$date3=13/07/17
```

#### 例題 3 

カレントの日付保存設定が"日付型"になっている場合、以下のように書くことができます:

```4d
 var $o : Object
 var $json : Text
 var $birthday : Date
 
 $json:="{\"name\":\"Marcus\",\"birthday\":\"2017-10-16\"}"
 $o:=JSON Parse($json)
 $birthday:=$o.birthday
  //$birthday=16/10/17
```

**注:** この設定についての詳細な情報については、*互換性ページ*内にある"オブジェクト内ではISO日付フォーマットの代わりに日付型を使用する"を参照して下さい。

#### 例題 4 

ここでは [JSON Stringify](json-stringify.md) と **JSON Parse** コマンドの併用例を紹介しています:

```4d
 var $JSONContact : Text
 var $Contact;$Contact2 : Object
 $Contact:=New object("name";"Monroe";"firstname";"Alan")
 
  // JSON Stringify: JSON オブジェクトからJSON文字列への変換
 $JSONContact:=JSON Stringify($Contact)
 
  // JSON Parse: JSON文字列からJSONオブジェクトへの変換
 $Contact2:=JSON Parse($JSONContact)
```

#### 例題 5 

JSON配列から4Dコレクションを作成したい場合を考えます:

```4d
 var $myCol : Collection
 $myCol:=JSON Parse("[\"Monday\",10,\"Tuesday\",11,\"Wednesday\",12,false]")
```

#### 例題 6 

以下の文字列を解析し、それぞれのプロパティの行の位置とオフセットを取得したい場合を考えます:

```json
{
    "alpha": 4552,
    "beta": [
        {
            "echo": 45,
            "delta": "text1" 
        },
        {
            "echo": 52,
            "golf": "text2" 
        }
    ]
}
```

この場合、以下のように書くことができます:

```4d
 var $obInfo : Object
 $obInfo=JSON Parse("json_string";Is object;*) //* 引数を渡して返された$obinfoオブジェクト内に
  // __symbols プロパティを取得する
```

*$obInfo* オブジェクトの中身は以下のようになっています:

```json
{alpha:4552,
beta:[{echo:45,delta:text1},{echo:52,golf:text2}],
__symbols:{alpha:{line:2,offset:4},
beta:{line:3,offset:4},
beta[0].echo:{line:5,offset:12},
beta[0].delta:{line:6,offset:12},
beta[1].echo:{line:9,offset:12},
beta[1].golf:{line:10,offset:12}}}
```

#### 参照 

*Field and Variable Types*  
[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  
[JSON Validate](json-validate.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1218 |
| スレッドセーフである | &check; |


