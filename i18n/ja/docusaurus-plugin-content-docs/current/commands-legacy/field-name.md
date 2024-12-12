---
id: field-name
title: Field name
slug: /commands/field-name
displayed_sidebar: docs
---

<!--REF #_command_.Field name.Syntax-->**Field name** ( fieldPtr | tableNum {; *fieldNum*} ) : Text<!-- END REF-->
<!--REF #_command_.Field name.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fieldPtr &#124; tableNum | ポインター, 倍長整数 | &#8594;  | フィールドポインタ、またはテーブル番号 |
| fieldNum | Integer | &#8594;  | 最初の引数にテーブル番号を渡した場合は、 フィールド番号 |
| 戻り値 | Text | &#8592; | フィールド名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Field name.Summary-->Field name関数は、*tableNum*と*fieldNum*または*fieldPtr*で指定したフィールドの名前を返します。<!-- END REF-->

#### 例題 1 

以下の例は、FieldArray{1}の2番目の要素にテーブル番号=1、フィールド番号=2のフィールドの名前を代入します。FieldArrayは、2次元の配列です。

```4d
 FieldArray{1}{2}:=Field name(1;2)
```

#### 例題 2 

以下の例は、FieldArray{1}の2番目の要素にフィールド*\[MyTable\]MyField*の名前を代入します。FieldArrayは、2次元の配列です。

```4d
 FieldArray{1}{2}:=Field name(->[MyTable]MyField)
```

#### 例題 3 

以下の例は、フィールドに対してポインタを渡して、警告を表示します。

```4d
 ALERT(" テーブル "+Table name(Table($1))+"のフィールド"+Field name($1)+
 +"のID番号 は、5文字以上でなければなりません。")
```

#### 参照 

[Field](field.md)  
[Last field number](last-field-number.md)  
[Table name](table-name.md)  