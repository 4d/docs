---
id: last-field-number
title: Last field number
slug: /commands/last-field-number
displayed_sidebar: docs
---

<!--REF #_command_.Last field number.Syntax-->**Last field number** ( tableNum | tablePtr ) : Integer<!-- END REF-->
<!--REF #_command_.Last field number.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tableNum &#124; tablePtr | 倍長整数, ポインター | &#8594;  | テーブル番号、またはテーブルポインタ |
| 戻り値 | Integer | &#8592; | テーブルの最大フィールド番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Last field number.Summary-->Last field numberコマンドは、*tableNum*または*tablePtr*にテーブル番号またはポインタを渡したテーブルにあるフィールドの中で、最大のフィールド番号を返します。<!-- END REF-->

フィールドは作成された順に番号が付けられています。フィールドがテーブルから何も削除されていない場合、コマンドはテーブルにあるフィールドの数を返します。テーブルのフィールド番号でループを繰り返す場合は、[Is field number valid](is-field-number-valid.md "Is field number valid")コマンドを使用して、フィールドが削除されているかを確認します。

#### 例題 

次のプロジェクトメソッドでは、最初の引数として受け取られたポインタが指すテーブルのフィールド名から成る配列*asFields*を構築します。

```4d
 $vlTable:=Table($1)
 ARRAY STRING(31;asFields;Last field number($vlTable))
 For($vlField;Size of array(asFields);1;-1)
    If(Is field number valid($vlTable;$vlField))
       asFields{$vlField}:=Field name($vlTable;$vlField)
    Else
       DELETE FROM ARRAY(asFields;$vlField)
    End if
 End for
```

#### 参照 

[Field name](field-name.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[Last table number](last-table-number.md)  
[Is field number valid](is-field-number-valid.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 255 |
| スレッドセーフである | &check; |


