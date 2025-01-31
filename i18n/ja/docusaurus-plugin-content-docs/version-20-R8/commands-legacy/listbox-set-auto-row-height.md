---
id: listbox-set-auto-row-height
title: LISTBOX SET AUTO ROW HEIGHT
slug: /commands/listbox-set-auto-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Syntax-->**LISTBOX SET AUTO ROW HEIGHT** ( {* ;} *object* ; *selector* ; *value* ; *unit* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または 変数 (* 省略時) |
| selector | Integer | &#8594;  | 設定する高さの値:lk row min height あるいは lk row max height |
| value | Integer | &#8594;  | 行の高さの最小値、あるいは最大値 |
| unit | Integer | &#8594;  | 高さの値の単位: 0=ピクセル単位、1=行単位 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Summary-->**LISTBOX SET AUTO ROW HEIGHT** コマンドは、*object* 引数および *\** 引数を使用して指定したリストボックスオブジェクトの行の高さの最小値あるいは最大値を、*value* 引数で設定します。<!-- END REF-->

**注**: このコマンドはリストボックスが自動行高モード(*自動行高*)に設定されている場合にのみ考慮されます。このモードは"コレクションまたはエンティティセレクション"型および"配列型"のリストボックスにおいてのみ利用可能です。そうでない場合には、何の効力も持ちません。

任意のオプションの *\** 引数を指定した場合、*object* はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object* は変数です。この場合、文字列ではなく変数参照を指定します。オブジェクト名に関する詳細は*オブジェクトプロパティ* の節を参照してください。

*selector* 引数には、設定する値の型を渡します。*List Box* テーマ内にある、以下の定数のどれか一つを使用することができます:

| 定数                | 型    | 値  |
| ----------------- | ---- | -- |
| lk row max height | 倍長整数 | 33 |
| lk row min height | 倍長整数 | 32 |

*value* 引数には、*unit* 引数で指定した単位に適切な範囲で対応する値を渡します。

*unit* 引数は*List Box* テーマ内にある、以下の定数のどれか一つを使用することができます:

| 定数        | 型    | 値 | コメント                            |
| --------- | ---- | - | ------------------------------- |
| lk lines  | 倍長整数 | 1 | 高さを行数で指定。4Dはフォント設定に応じて高さを計算します。 |
| lk pixels | 倍長整数 | 0 | 高さをピクセルで指定 (デフォルト)。             |

**注:** コマンドは最小値と最大値の整合性をチェックしません。しかしながら、ランタイムにおいて、最小値と最大値の矛盾があった場合には、最小値が両方の値に対して適用されます。例えば、最小値が5行であり、最大値が3行であった場合、そろリストボックスの行に適用される最大の高さは、5行となります。

#### 例題 

自動行高が設定されているリストボックスに対して、最小値と最大値を設定したい場合を考えます:

```4d
 LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row min height;60;lk pixels) // 最小値に60ピクセル
 LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row max height;100;lk pixels) //最大値に100ピクセル
```

#### 参照 

[LISTBOX Get auto row height](listbox-get-auto-row-height.md)  
[LISTBOX SET ROW HEIGHT](listbox-set-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1501 |
| スレッドセーフである | &cross; |


