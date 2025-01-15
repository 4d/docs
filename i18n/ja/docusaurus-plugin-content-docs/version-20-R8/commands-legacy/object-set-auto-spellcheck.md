---
id: object-set-auto-spellcheck
title: OBJECT SET AUTO SPELLCHECK
slug: /commands/object-set-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Syntax-->**OBJECT SET AUTO SPELLCHECK** ( {* ;} *object* ; *autoSpellcheck* )<!-- END REF-->
<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時)変数またはフィールド (* 省略時) |
| autoSpellcheck | Boolean | &#8594;  | True = 自動スペルチェックFalse = 自動スペルチェックなし |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Summary-->**OBJECT SET AUTO SPELLCHECK**コマンドは*object*と*\**引数で指定されたオブジェクトの自動スペルチェックオプションをカレントプロセス内で動的に設定します。<!-- END REF-->このオプションを使用して、オブジェクト (テキスト型オブジェクトのみ) にデータが入力される際の自動スペルチェックを有効/無効にできます。

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

この機能を有効にするには*autoSpellcheck*に**True**を、無効にするには**False**を渡します。

#### 参照 

[OBJECT Get auto spellcheck](object-get-auto-spellcheck.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1173 |
| スレッドセーフである | &cross; |


