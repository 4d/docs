---
id: object-set-text-orientation
title: OBJECT SET TEXT ORIENTATION
slug: /commands/object-set-text-orientation
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Syntax-->**OBJECT SET TEXT ORIENTATION** ( {* ;} *object* ; *orientation* )<!-- END REF-->
<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列) 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| orientation | Integer | &#8594;  | オブジェクトの方向を決める値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Summary-->**OBJECT SET TEXT ORIENTATION**コマンドは、引数 *object* と *\** で指定したオブジェクトの方向を、カレントプロセスにおいて変更します。<!-- END REF-->

フォームエディター内の"方向"のプロパティは、フォームに対してテキストエリアの恒常的な回転を行います。 このプロパティとは異なり、 **OBJECT SET TEXT ORIENTATION** コマンドはオブジェクトそのものではなく、オブジェクトのコンテンツに対して回転を行います。詳細な情報に関しては *Design Reference* マニュアルを参照して下さい。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。   
スタティックなテキストと、入力不可能な変数とフィールドのみ回転させることができます。このプロパティをサポートしないオブジェクトに対してコマンドを使用した場合、コマンドは何もしません。

*orientation* 引数には、オブジェクトに適用したい方向の絶対値を渡します。"*Form Objects (Properties)*" テーマ内にある、以下の定数のどれか一つのみ使用可能です:

| 定数                    | 型    | 値   | コメント                |
| --------------------- | ---- | --- | ------------------- |
| Orientation 0°        | 倍長整数 | 0   | 回転なし(デフォルト値)        |
| Orientation 180°      | 倍長整数 | 180 | テキストの方向を時計回りに180°回転 |
| Orientation 90° left  | 倍長整数 | 270 | テキストの方向を反時計回りに90°回転 |
| Orientation 90° right | 倍長整数 | 90  | テキストの方向を時計回りに90°回転  |

**注:** 上記の値に対応する方向のみサポートされています。これ以外の値を渡した場合、その値は無視されます。

#### 例題 

フォームの内の変数に、 270° の回転をさせたい場合: 

```4d
 OBJECT SET ENTERABLE(*;"myVar";False)
  // 変数が入力可能である場合は必須のコマンド
 OBJECT SET TEXT ORIENTATION(*;"myVar";Orientation 90° left)
```

#### 参照 

[OBJECT Get text orientation](object-get-text-orientation.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1284 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


