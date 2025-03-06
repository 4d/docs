---
id: get-field-properties
title: GET FIELD PROPERTIES
slug: /commands/get-field-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD PROPERTIES.Syntax-->**GET FIELD PROPERTIES** ( fieldPtr | tableNum {; *fieldNum*}; *fieldType* {; *fieldLength* {; *indexed* {; *unique* {; *invisible*}}}} )<!-- END REF-->
<!--REF #_command_.GET FIELD PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fieldPtr &#124; tableNum | ポインター, 倍長整数 | &#8594;  | テーブル番号、またはフィールドポインタ |
| fieldNum | Integer | &#8594;  | テーブル番号を渡した場合は、フィールド番号 |
| fieldType | Integer | &#8592; | フィールドのタイプ |
| fieldLength | Integer | &#8592; | 文字フィールドの場合、長さ |
| indexed | Boolean | &#8592; | True = インデックス付き、False = インデックスなし |
| unique | Boolean | &#8592; | True = 重複不可、 False = 重複あり |
| invisible | Boolean | &#8592; | True = 非表示、 False = 表示 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET FIELD PROPERTIES.Summary-->GET FIELD PROPERTIESコマンドは、*tableNum*と*fieldNum*または*fieldPtr*で指定したフィールドの情報を返します。<!-- END REF-->

以下のいずれかの引数を渡します。

* 引数*tableNum*と*fieldNum*、または
* *fieldPtr*にフィールドへのポインタ

コマンドの実行後、以下の情報が返されます。

* *fieldType*にはフィールドのタイプが返されます。以下のような定義済みの定数値(*Field and Variable Types* テーマ)が返されます。  
| 定数                 | 型    | 値  |  
| ------------------ | ---- | -- |  
| Is alpha field     | 倍長整数 | 0  |  
| Is BLOB            | 倍長整数 | 30 |  
| Is Boolean         | 倍長整数 | 6  |  
| Is date            | 倍長整数 | 4  |  
| Is float           | 倍長整数 | 35 |  
| Is integer         | 倍長整数 | 8  |  
| Is integer 64 bits | 倍長整数 | 25 |  
| Is longint         | 倍長整数 | 9  |  
| Is object          | 倍長整数 | 38 |  
| Is picture         | 倍長整数 | 3  |  
| Is real            | 倍長整数 | 1  |  
| Is subtable        | 倍長整数 | 7  |  
| Is text            | 倍長整数 | 2  |  
| Is time            | 倍長整数 | 11 |
* 引数*fieldLen*には、フィールドタイプが文字 (つまり、*fieldType=Is Alpha Field*) の場合、フィールドの長さが返されます。その他のフィールドタイプに対しては、*fieldLen*の値は意味を持ちません。
* 引数*indexed*には、フィールドにインデックスが設定されていない場合はFalseが、フィールドにインデックスが設定されている場合はTrueが返されます。*indexed*の値は、フィールドタイプが文字、整数、倍長整数、実数、日付、時間、ブールの場合にだけ意味を持ちます。
* 引数*unique*には、フィールドが重複不可に設定されているときはTrueが、そうでないときにはFalseが返されます。
* 引数*invisible*には、フィールドが非表示に設定されているときにはTrueが、そうでないときにはFalseが返されます。非表示設定は4D標準の（ラベルやチャートなど）エディタで所定のフィールドを隠すために使うことができます。

#### 例題 1 

以下の例は、変数*vType*、*vLength*、*vIndex*、*vUnique*、*vInvisible*にテーブル番号=1、フィールド番号=3のフィールドの属性を設定します。

```4d
 GET FIELD PROPERTIES(1;3;vType;vLength;vIndex;vUnique;vInvisible)
```

#### 例題 2 

以下の例は、変数*vType*、*vLength*、*vIndex*、*vUnique*、*vInvisible*に\[Table3\]Field2という名前のフィールドの属性を設定します。

```4d
 GET FIELD PROPERTIES(->[Table3]Field2;vType;vLength;vIndex;vUnique;vInvisible)
```

#### 参照 

[Field](field.md)  
[Field name](field-name.md)  
[SET INDEX](set-index.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 258 |
| スレッドセーフである | &check; |


