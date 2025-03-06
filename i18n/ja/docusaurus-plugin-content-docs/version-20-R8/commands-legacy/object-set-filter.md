---
id: object-set-filter
title: OBJECT SET FILTER
slug: /commands/object-set-filter
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FILTER.Syntax-->**OBJECT SET FILTER** ( {* ;} *object* ; *entryFilter* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FILTER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| entryFilter | Text | &#8594;  | 入力可エリアの新しい入力フィルタ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET FILTER.Summary-->OBJECT SET FILTER は、*object*で指定されたオブジェクトの入力フィルタを*entryFilter*に設定します。<!-- END REF-->

オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object*はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。オブジェクト名に関する詳細はを参照してください。

OBJECT SET FILTER は、入力フォームおよびダイアログ用フォームに対して使用でき、デザインモードで入力フィルタを受け付けるフィールドや入力可変数に適用できます。

*entryFilter*に空の文字列を指定すると、オブジェクトのカレント入力フィルタを取り除きます。

**Note:** このコマンドは、サブフォームのリストフォームに配置されたフィールドには使用できません。

**Note:** ツールボックスであらかじめ定義した入力フィルタを*entryFilter*に使用するには、入力フィルタ名の前に縦棒(|)を挿入します。

#### 例題 1 

以下の例は、郵便番号フィールドに対する入力フィルタを設定します。住所が米国の場合は、米国の郵便番号フィルタを設定します。それ以外の場合は、任意の入力ができるように設定します: 

```4d
 If([Companies]Country="US") // ZIPコードフォーマットにフィルターを設定
    OBJECT SET FILTER([Companies]ZIP Code;"&9#####")
 Else // アルファベットと数字を受け付け、小文字を大文字に変換
    OBJECT SET FILTER([Companies]ZIP Code;"~@")
 End if
```

#### 例題 2 

この例題では、“a,” “b,” “c,” そして“g”のみの入力を許可するよう設定します: 

```4d
 OBJECT SET FILTER([table]field ;"&"+Char(Double quote)+"a;b;c;g"+Char(Double quote)+"##")
```

**Note:** この例題では入力フィルタを *&"a;b;c;g"##* に設定しています。

#### 参照 

[OBJECT Get filter](object-get-filter.md)  
[OBJECT SET FORMAT](object-set-format.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 235 |
| スレッドセーフである | &cross; |


