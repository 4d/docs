---
id: json-parse-array
title: JSON PARSE ARRAY
slug: /commands/json-parse-array
displayed_sidebar: docs
---

<!--REF #_command_.JSON PARSE ARRAY.Syntax-->**JSON PARSE ARRAY** ( *jsonString* ; *array* )<!-- END REF-->
<!--REF #_command_.JSON PARSE ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| jsonString | Text | &#8594;  | 解析したいJSON文字列 |
| array | Array | &#8592; | JSON文字列を解析した結果を含む配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.JSON PARSE ARRAY.Summary-->**JSON PARSE ARRAY**コマンドは、JSONフォーマットの文字列の中身を解析し、取り出したデータを *array* 引数の配列の中へと入れます。<!-- END REF-->このコマンドはJSONデータをデシリアライズします。 [JSON Stringify array](json-stringify-array.md)コマンドと逆の挙動をします。

*jsonString* 引数には、解析したいJSONフォーマットの文字列を渡します。この文字列は正しいフォーマットで書かれてる必要があり、そうでない場合にはエラーが生成されます。

*array* 引数には、解析結果を受け取る、希望する型の配列を渡します。

**注:** 4D v16 R4以降、**JSON PARSE ARRAY** は一般的に**コレクション**を返す[JSON Parse](json-parse.md) コマンドへの呼び出しで置き換えることができます。コレクションはJSON配列に基づいており、異なる型のデータを保存することができるため、配列より柔軟性に優れています。

#### 例題 

この例では、テーブル内のレコードのフィールドからのデータが取り出され、オブジェクト配列に保存されます。

```4d
 var $ref : Object
 ARRAY OBJECT($sel;0)
 ARRAY OBJECT($sel2;0)
 var v_String : Text
 
 OB SET($ref;"name";->[Company]Company Name)
 OB SET($ref;"city";->[Company]City)
 
 While(Not(End selection([Company])))
    $ref_company:=OB Copy($ref;True)
    APPEND TO ARRAY($sel;$ref_company)
  // $sel{1}={"name":"4D SAS","city":"Clichy"}
  // $sel{2}={"name":"MyComp","city":"Lyon"}
  // ...
    NEXT RECORD([Company])
 End while
 
 v_String:=JSON Stringify array($sel)
  // v_String= [{"name":"4D SAS","city":"Clichy"},{"name":"MyComp","city":"Lyon"}...]
 JSON PARSE ARRAY(v_String;$sel2)
  // $sel2{1}={"name":"4D SAS","city":"Clichy"}
  // $sel2{2}={"name":"MyComp","city":"Lyon"}
  //...
```

#### 参照 

[JSON Parse](json-parse.md)  
[JSON Stringify array](json-stringify-array.md)  