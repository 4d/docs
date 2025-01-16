---
id: object-set-placeholder
title: OBJECT SET PLACEHOLDER
slug: /commands/object-set-placeholder
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PLACEHOLDER.Syntax-->**OBJECT SET PLACEHOLDER** ( {* ;} *object* ; *placeholderText* )<!-- END REF-->
<!--REF #_command_.OBJECT SET PLACEHOLDER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列) 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| placeholderText | Text | &#8594;  | オブジェクトに関連付けるプレースホルダーテキスト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET PLACEHOLDER.Summary-->**OBJECT SET PLACEHOLDER**コマンドは、引数 *object* と *\** で指定したオブジェクトにプレースホルダーテキストを関連付けます。<!-- END REF-->

詳細な情報に関しては、 *Design Reference* マニュアルを参照して下さい。

プロパティリストを通じてプレースホルダーが既に関連付けられていた場合、そのテキストはカレントプロセスにおいて *placeholderText* 引数で指定した値で置換されます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*placeholderText* 引数には、オブジェクトが空欄の時に表示させたいヘルプテキストか指示を渡します。  

**注:** **OBJECT SET PLACEHOLDER** コマンドでは、プレースホルダーに xliff 参照を挿入することはできません。挿入する場合にはプロパティリストを通じてプレースホルダーを定義して下さい。

このコマンドは、変数、フィールド、コンボボックスのフォームオブジェクトにしか使用できません。  
プレースホルダーには文字列かテキストの値を関連付けることが出来ます。また、「ヌルのときブランクにする」プロパティがあるフォームオブジェクトに関しては、日付か時刻のデータと関連付けることができます。

#### 例題 

コンボボックスにプレースホルダーとして「Search」というテキストを表示したい場合:

```4d
 OBJECT SET PLACEHOLDER(*;"search_combo";"Search")
```

![](../assets/en/commands/pict1208449.en.png)

#### 参照 

[OBJECT Get placeholder](object-get-placeholder.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1295 |
| スレッドセーフである | &cross; |


