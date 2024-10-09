---
id: json-to-selection
title: JSON TO SELECTION
slug: /commands/json-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.JSON TO SELECTION.Syntax-->**JSON TO SELECTION** ( *aTable* ; *jsonArray* )<!-- END REF-->
<!--REF #_command_.JSON TO SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &srarr; | 要素の複製先の4Dテーブル |
| jsonArray | Text | &srarr; | JSON形式の文字列 |

<!-- END REF-->

#### 説明 

```undefined
"[{"attribute1":"value1","attribute2":"value2",...},...,{"attribute1":"valueN","attribute2":"valueN",...}]"
```

#### 例題 

**JSON TO SELECTION** コマンドを使用して、 \[Company\] テーブルへレコードを追加します。 

```4d
 var $Object1;$Object2;$Object3;$Object4 : Object
 var $ObjectString : Text
 ARRAY OBJECT($arrayObject;0)
 
 OB SET($Object1;"ID";"200";"Company Name";"4D SAS";"City";"Clichy")
 APPEND TO ARRAY($arrayObject;$Object1)
 
 OB SET($Object2;"ID";"201";"Company Name";"APPLE";"City";"Paris")
 APPEND TO ARRAY($arrayObject;$Object2)
 
 OB SET($Object3;"ID";"202";"Company Name";"IBM";"City";"London")
 APPEND TO ARRAY($arrayObject;$Object3)
 
 OB SET($Object4;"ID";"203";"Company Name";"MICROSOFT";"City";"New York")
 APPEND TO ARRAY($arrayObject;$Object4)
 
 $ObjectString:=JSON Stringify array($arrayObject)
 
  // $ObjectString = "[{"ID":"200","City":"Clichy","Company Name":"4D
  // SAS"},{"ID":"201","City":"Paris","Company Name":"APPLE"},{"ID":"202",
  //"City":"London","Company Name":"IBM"},{"ID":"203","City":"New
  //York","Company Name":"MICROSOFT"}]"
 
 JSON TO SELECTION([Company];$ObjectString)
  // [Company] テーブル内に、ID、会社名、都市のフィールドを
  //持つレコードを4つ作成しました。
```

#### 参照 

[Selection to JSON](selection-to-json.md)  