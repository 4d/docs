---
id: get-list-item-parameter-arrays
title: GET LIST ITEM PARAMETER ARRAYS
slug: /commands/get-list-item-parameter-arrays
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Syntax-->**GET LIST ITEM PARAMETER ARRAYS** ( {* ;} *list* ; itemRef | * ; *arrSelection* {; *arrValues*} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時listはオブジェクト名 (文字列)省略時listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リストタイプのオブジェクト名 (* 指定時)またはリスト参照番号 (* 省略時) |
| itemRef &#124; * | 倍長整数, 演算子 | &#8594;  | 項目参照番号、または0 = リストに最後に追加された項目、または* = カレントリスト項目 |
| arrSelection | Text array | &#8592; | パラメーター名配列 |
| arrValues | Text array | &#8592; | パラメーター値配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Summary-->**GET LIST ITEM PARAMETER ARRAYS**コマンドは*list* 引数で指定した参照またはオブジェクト名を持つ階層リスト中で、*itemRef* で指定した項目に割り当てられたパラメーター (およびその値) を一回の呼び出しで取り出すことができます。<!-- END REF-->

項目に関連付けられたパラメーターは各項目の追加の情報を格納しています。これらは[SET LIST ITEM PARAMETER](set-list-item-parameter.md)コマンドで設定できます。

一番目のオプションの引数 *\** を渡すと、*list* はフォーム中でリストを表示するリストオブジェクトに対応するオブジェクト名 (文字列) です。この引数を渡さない場合、*list* は階層リスト参照 ([ListRef](# "階層リストへの参照")) です。ひとつのリストオブジェクトだけ、あるいは (二番目の *\** を使用しないで) 項目を構造的に選択する場合、どちらのシンタックスでも使用できます。しかし同じリストを複数のリストオブジェクトに表示し、かつ (二番目の *\** を使用して) 現在選択されている項目に対してコマンドを適用する場合、各リストオブジェクトは異なるカレント項目を持つことができるため、オブジェクト名に基づくシンタックスを使用しなければなりません。

**GET LIST ITEM PARAMETER ARRAYS**は*itemRef*項目に設定されたパラメーターを*arrSelectors*テキスト配列に返します。*arrValues*テキスト配列が渡された場合、これらのパラメーターに設定された値も返します。

*arrValues* はテキスト配列でなければなりません。関連付けた値がテキストでない (数値やブール) の場合、文字に変換されます (True="1", False="0")。

#### 例題 

以下のコードで構築された階層リストがあるとき: 

```4d
 <>HL:=New list
 $ID:=30
 APPEND TO LIST(<>HL;"Martin";$ID)
  //5つのパラメーター
 SET LIST ITEM PARAMETER(<>HL;$ID;"Firstname";"Phil")
 SET LIST ITEM PARAMETER(<>HL;$ID;"Birthday";"01/02/1978")
 SET LIST ITEM PARAMETER(<>HL;$ID;"Male";True) //ブール
 SET LIST ITEM PARAMETER(<>HL;$ID;"Age";33) //数値
 SET LIST ITEM PARAMETER(<>HL;$ID;"City";"Dallas")
```

\*説明を簡単にするために、階層リスト<>HLが同じ名前のフォームオブジェクト"<>HL"に関連づけられています。  
リスト中で"Martin"が選択されているとき、以下のコードを使用してそのパラメーターを取得できます:

```4d
 ARRAY TEXT(arrParamNames;0)
 GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";*;arrParamNames)
  // arrParamNames{1} = "Firstname"
  // arrParamNames{2} = "Birthday"
  // arrParamNames{3} = "Male"
  // arrParamNames{4} = "Age"
  // arrParamNames{5} = "City"
```

パラメーターの値も取得したい場合、以下のようにします:

```4d
 ARRAY TEXT(arrParamNames;0)
 ARRAY TEXT(arrParamValues;0)
 GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";*;arrParamNames;arrParamValues)
  // arrParamValues{1} = "Phil"
  // arrParamValues{2} = "01/02/1978"
  // arrParamValues{3} = "1"
  // arrParamValues{4} = "33"
  // arrParamValues{5} = "Dallas"
```

#### 参照 

[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1195 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


