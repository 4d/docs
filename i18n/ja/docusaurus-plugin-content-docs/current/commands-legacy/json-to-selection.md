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
| aTable | Table | &#8594;  | 要素の複製先の4Dテーブル |
| jsonArray | Text | &#8594;  | JSON形式の文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.JSON TO SELECTION.Summary-->**JSON TO SELECTION**コマンドは、JSONオブジェクト配列 *jsonArray* の中身を、 *aTable* のレコードのセレクションへとコピーします。<!-- END REF-->. 

*jsonArray* 引数はJSON形式にフォーマットされた配列を表すtextで、一つ以上の要素を含んでいます。シンタックスは以下のような形になっています:

```json
"[{"attribute1":"value1","attribute2":"value2",...},...,{"attribute1":"valueN","attribute2":"valueN",...}]"
```

*aTable* を呼び出したときに指定したセレクションが存在していた場合、 JSON 配列の要素は配列の順番とレコードの順番に応じてコピーされます。JSON 配列によって定義された要素の数がカレントセレクション内に存在するレコードより多い場合、新たにレコードが追加されます。レコードは、存在していた場合 でも新規に追加した場合でも、自動的に保存されます。

**注:** このコマンドはオブジェクト型のフィールドをサポートします: JSONデータは自動的に変換されます。

****警告:** **JSON TO SELECTION** コマンドは既存のレコード内の情報を上書きしてしまうため、使用の際には注意が必要です。  

コマンド実行中、保存先のレコードが他の処理などでロックされていた場合、その中身は変更されません。ロックされたレコードは、 *LockedSet システムセット*内に保存されています。 **JSON TO SELECTION**コマンドを実行し終えたあと、 *LockedSet* 内にロックされたレコードが保存されているかどうか検証することが出来ます。

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

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1235 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


