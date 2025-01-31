---
id: split-string
title: Split string
slug: /commands/split-string
displayed_sidebar: docs
---

<!--REF #_command_.Split string.Syntax-->**Split string** ( *stringToSplit* ; *separator* {; *options*} ) : Collection<!-- END REF-->
<!--REF #_command_.Split string.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| stringToSplit | Text | &#8594;  | 文字列の値 |
| separator | Text | &#8594;  | stringToSplitを分割する文字列。空の文字列("")の場合には、stringToSplitを1文字ずつに分割します |
| options | Integer | &#8594;  | 空の文字列と空白に関するオプション |
| 戻り値 | Collection | &#8592; | 分割した文字列のコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Split string.Summary-->**Split string** コマンドは、*stringToSplit* 引数の文字列を、*separator* 引数で指定した区切り文字によって分割した文字列のコレクションを返します。<!-- END REF-->返されたコレクション内の文字列には、*separator* 引数の区切り文字自身は含まれません。

*stringToSplit* 引数の文字列内に*separator* 引数の区切り文字が見つからない場合、**Split string** は*stringToSplit* 引数を単一の要素として格納するコレクションを返します。*separator* 引数に空の文字列を渡した場合、**Split string** は*stringToSplit* 引数を1文字ずつに分割したコレクションを返します。

*options* 引数には、*Strings* テーマ内にある以下の定数の一つ、あるいはその組み合わせを渡すことができます:

| 定数                      | 型    | 値 | コメント                            |
| ----------------------- | ---- | - | ------------------------------- |
| sk ignore empty strings | 倍長整数 | 1 | 結果のコレクションから空の文字列を削除する(空の文字列を無視) |
| sk trim spaces          | 倍長整数 | 2 | 分割した文字列の先頭と最後にある空白文字(スペース)は切り取る |

#### 例題 1 

```4d
 var $vt : Text
 var $col : Collection
 $col:=New collection
 
 $vt:="John;Doe;120 jefferson st.;Riverside;; NJ; 08075"
 $col:=Split string($vt;";") //["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]
 $col:=Split string($vt;";";sk ignore empty strings) //["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]
 $col:=Split string($vt;";";sk ignore empty strings+sk trim spaces) //["John","Doe","120 jefferson st.","Riverside","NJ","08075"]
```

#### 例題 2 

*separator* 引数には複数文字の文字列を指定することも可能です: 

```4d
 var $vt : Text
 var $col : Collection
 $vt:="NameSmithage40"
 $col:=Split string($vt;"")
  //$col=["Name","Smith","age","40"]
```

#### 参照 

[TEXT TO ARRAY](text-to-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1554 |
| スレッドセーフである | &check; |


