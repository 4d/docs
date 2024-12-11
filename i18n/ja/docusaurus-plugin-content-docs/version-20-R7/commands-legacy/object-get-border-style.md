---
id: object-get-border-style
title: OBJECT Get border style
slug: /commands/object-get-border-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get border style.Syntax-->**OBJECT Get border style** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get border style.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字列)、省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (*指定時)、または変数やフィールド (*省略時) |
| 戻り値 | Integer | &#8592; | 境界線スタイル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get border style.Summary-->**OBJECT Get border style**コマンドは、*object*引数で指定したオブジェクトに設定された境界線スタイルを返します。<!-- END REF--> 

オブジェクトの境界線スタイルはデザインモードのプロパティリストを使用するか、新コマンド [OBJECT SET BORDER STYLE](object-set-border-style.md) を使用することで設定できます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

コマンドは、境界線スタイルに対応する値を返します。返される値は "*Form Objects (Properties)*" テーマの中にあります。以下の通りです:

| 定数            | 型    | 値 | コメント                                   |
| ------------- | ---- | - | -------------------------------------- |
| Border Dotted | 倍長整数 | 2 | オブジェクトの境界線は1ptの点線になります。                |
| Border Double | 倍長整数 | 5 | オブジェクトの境界線は二重線(1ピクセル離れた2本の1ptの線)になります。 |
| Border None   | 倍長整数 | 0 | オブジェクトは境界線を持ちません。                      |
| Border Plain  | 倍長整数 | 1 | オブジェクトの境界線は連続した一本の1ptの線になります。          |
| Border Raised | 倍長整数 | 3 | オブジェクトの境界線は浮き上がったような3Dエフェクトになります。      |
| Border Sunken | 倍長整数 | 4 | オブジェクトの境界線は沈み込んだような3Dエフェクトになります。       |
| Border System | 倍長整数 | 6 | オブジェクトの境界線はシステムのグラフィック仕様に沿ったものになります。   |

#### 参照 

[OBJECT SET BORDER STYLE](object-set-border-style.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1263 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


