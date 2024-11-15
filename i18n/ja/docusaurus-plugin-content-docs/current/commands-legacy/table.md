---
id: table
title: Table
slug: /commands/table
displayed_sidebar: docs
---

<!--REF #_command_.Table.Syntax-->**Table** ( tableNum | aPtr ) : any<!-- END REF-->
<!--REF #_command_.Table.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tableNum &#124; aPtr | 倍長整数, ポインター | &#8594;  | テーブル番号、または テーブルポインタ、または フィールドポインタ |
| 戻り値 | Pointer, Integer | &#8592; | テーブル番号を渡した場合テーブルポインタ テーブルポインタを渡した場合テーブル番号 フィールドポインタを渡した場合テーブル番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Table.Summary-->Tableコマンドには、3つの形式があります。<!-- END REF-->

* *tableNum*にテーブル番号を渡した場合は、テーブルポインタを返します。
* *aPtr*にテーブルポインタを渡した場合は、テーブル番号を返します。
* *aPtr*にフィールドポインタを渡した場合は、テーブル番号を返します。

#### 例題 1 

以下の例は変数*tablePtr*に3番目のテーブルに対するポインタを代入します。

```4d
 TablePtr:=Table(3)
```

#### 例題 2 

変数*tablePtr*( 3番目のテーブルのポインタ) を使用すると、Table関数は数値の3を返しま  
す。以下の例を実行すると変数TableNumに3を代入します。

```4d
 TableNum:=Table(TablePtr)
```

#### 例題 3 

以下の例は変数*tableNum*にテーブル*\[Table3\]*のテーブル番号を代入します。

```4d
 TableNum:=Table(->[Table3])
```

#### 例題 4 

以下の例は変数*tableNum*にフィールド*\[Table3\]Field1*の属するテーブルのテーブル番号を代入します。

```4d
 TableNum:=Table(->[Table3]Field1)
```

#### 参照 

[Field](field.md)  
[Last table number](last-table-number.md)  
[Table name](table-name.md)  