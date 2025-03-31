---
id: object-set-border-style
title: OBJECT SET BORDER STYLE
slug: /commands/object-set-border-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET BORDER STYLE.Syntax-->**OBJECT SET BORDER STYLE** ( {* ;} *object* ; *borderStyle* )<!-- END REF-->
<!--REF #_command_.OBJECT SET BORDER STYLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| borderStyle | Integer | &#8594;  | 境界線スタイル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET BORDER STYLE.Summary-->**OBJECT SET BORDER STYLE**コマンドは、引数 *object* と *\** で指定したオブジェクトの境界線スタイルを変更します。<!-- END REF-->

「境界線スタイル」のプロパティは、オブジェクトの外枠の見た目を管理します。詳細な情報に関しては *Design Reference* マニュアルの *境界線スタイル* を参照して下さい。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。  

*borderStyle* 引数には、オブジェクトに適用したい境界線スタイルを指定する値を渡します。"*Form Objects (Properties)*" テーマ内にある、以下の定数のどれかを使用することができます:

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

[OBJECT Get border style](object-get-border-style.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1262 |
| スレッドセーフである | &cross; |


