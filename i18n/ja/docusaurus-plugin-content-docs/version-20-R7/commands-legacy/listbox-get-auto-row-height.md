---
id: listbox-get-auto-row-height
title: LISTBOX Get auto row height
slug: /commands/listbox-get-auto-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get auto row height.Syntax-->**LISTBOX Get auto row height** ( {* ;} *object* ; *selector* {; *unit*} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get auto row height.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または 変数 (* 省略時) |
| selector | Integer | &#8594;  | 取得する高さの値:lk row min height あるいは lk row max height |
| unit | Integer | &#8594;  | 行の高さの最小値、あるいは最大値 |
| 戻り値 | Integer | &#8592; | 選択された行の高さの値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX Get auto row height.Summary-->**LISTBOX Get auto row height** コマンドは、*object* 引数および *\** 引数を使用して指定したリストボックスオブジェクトの行の高さのカレンとの最小値あるいは最大値を返します。<!-- END REF-->

行の高さのカレントの最小値あるいは最大値は、プロパティリストを使用(*自動行高* 参照)して、あるいはカレントプロセスにおいて[LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md) コマンドを使用することで設定可能です。

**注**: このコマンドは"コレクションまたはエンティティセレクション型"および"配列型"のリストボックスにおいてのみ利用可能です。

任意のオプションの *\** 引数を指定した場合、*object* はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object* は変数です。この場合、文字列ではなく変数参照を指定します。オブジェクト名に関する詳細は*オブジェクトプロパティ* の節を参照してください。

*selector* 引数には、取得する値の型を渡します。*List Box* テーマ内にある、以下の定数のどれか一つを使用することができます:

| 定数                | 型    | 値  |
| ----------------- | ---- | -- |
| lk row max height | 倍長整数 | 33 |
| lk row min height | 倍長整数 | 32 |

デフォルトでは、コマンドは値をピクセル単位で返します。*unit* 引数に*List Box* テーマ内にある、以下の定数のどれか一つを渡すことで、使用する単位を定義することができます:

| 定数        | 型    | 値 | コメント                            |
| --------- | ---- | - | ------------------------------- |
| lk lines  | 倍長整数 | 1 | 高さを行数で指定。4Dはフォント設定に応じて高さを計算します。 |
| lk pixels | 倍長整数 | 0 | 高さをピクセルで指定 (デフォルト)。             |

#### 例題 

リストボックスの行の、最大の高さが何行であるのかを取得したい場合を考えます:

```4d
 var vhMaxInteger
 vhMax:=LISTBOX Get auto row height(*;"LB";lk row max height;lk lines)
```

#### 参照 

[LISTBOX Get row height](listbox-get-row-height.md)  
[LISTBOX Get rows height](listbox-get-rows-height.md)  
[LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md)  