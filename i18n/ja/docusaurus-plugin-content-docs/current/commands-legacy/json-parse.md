---
id: json-parse
title: JSON Parse
slug: /commands/json-parse
displayed_sidebar: docs
---

<!--REF #_command_.JSON Parse.Syntax-->**JSON Parse** ( *jsonString* {; *type*}{; *} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.JSON Parse.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| jsonString | 文字 | &#x1F852; | 解析したいJSON文字列 |
| type | 倍長整数 | &#x1F852; | 値を変換したい型 |
| * | 演算子 | &#x1F852; | 返された値がオブジェクトの場合、各プロパティの行の位置とオフセットを追加 |
| 戻り値 | Mixed, オブジェクト | &#x1F850; | JSON文字列から取り出した値 |

<!-- END REF-->

#### 説明 

```undefined
__symbols:{//オブジェクト詳細<br />   myAtt.mySubAtt...:{ //プロパティパス<br />      line:10, //プロパティの行番号<br />      offset:35 //プロパティの、行の先頭からのオフセット<br />      }<br />   }
```

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

```undefined
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

#### 参照 

*Field and Variable Types*  
[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  
[JSON Validate](json-validate.md)  