---
id: field
title: Field
slug: /commands/field
displayed_sidebar: docs
---

<!--REF #_command_.Field.Syntax-->**Field** ( *tableNum* ; *fieldNum* ) -> 戻り値 
        
            Field ( *fieldPtr* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Field.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tableNum | Integer | &#8594;  | テーブル番号 |
| fieldNum | Integer | &#8594;  | フィールド番号 |
| 戻り値 | Pointer | &#8592; | フィールドポインタ |
| Field ( fieldPtr ) -> 戻り値 |
| 引数 | 型 | 説明 |
| fieldPtr | Pointer | &#8594;  | フィールドポインタ |
| 戻り値 | Integer | &#8592; | フィールド番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Field.Summary-->Field コマンドには、2つの形式があります。<!-- END REF-->

* *tableNum*と*fieldNum*を指定した場合、Fieldはフィールドへのポインタを返します。
* *fieldPtr*を指定した場合には、Fieldはフィールド番号を返します。

#### 例題 1 

以下の例は、変数*fieldPtr*にテーブル番号=3、フィールド番号=2のフィールドへのポインタを代入します。

```4d
 FieldPtr:=Field(3;2)
```

#### 例題 2 

*fieldPtr* (テーブルの2番目のフィールドを指すポインタ) をField に渡すと、数値2を返します。  
以下の例を実行すると変数FieldNumに2を代入します。

```4d
 FieldNum:=Field(FieldPtr)
```

#### 例題 3 

以下の例は、変数FieldNumに\[Table3\]Field2フィールドのフィールド番号を代入します。

```4d
 FieldNum:=Field(->[Table3]Field2)
```

#### 参照 

[Field name](field-name.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[Last field number](last-field-number.md)  
[Table](table.md)  