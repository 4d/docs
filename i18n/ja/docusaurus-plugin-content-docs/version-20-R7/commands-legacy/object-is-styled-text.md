---
id: object-is-styled-text
title: OBJECT Is styled text
slug: /commands/object-is-styled-text
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Is styled text.Syntax-->**OBJECT Is styled text** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Is styled text.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時:objectはオブジェクト名(文字列)省略時:objectは変数 |
| object | any | &#8594;  | オブジェクト名(* 指定時)、または変数(* 省略時) |
| 戻り値 | Boolean | &#8592; | オブジェクトがマルチスタイルテキストであれば True 、そうでなければ False |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Is styled text.Summary-->**OBJECT Is styled text**コマンドは、 *object* と *\** によって指定されたオブジェクトの"マルチスタイル"オプションにチェックが入っているときに **True** を返します。<!-- END REF-->

「マルチスタイル」オプションは、複数のスタイルバリエーションを一つのエリアで使用できるリッチテキストを使用可能にするものです。詳細な情報に関しては、 *Design Reference* マニュアル内の *マルチスタイル (リッチテキストエリア)* を参照して下さい。

マルチスタイルのオブジェクトは、 "*スタイル付きテキスト*" テーマ内のコマンドを使うことによってプログラムで管理することができます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

**注:** **OBJECT Is styled text** コマンドは、4D Write Pro エリアに対して適用された場合、**True** を返します。

#### 例題 

あるフォーム内に、二つの異なるオブジェクトによって表現されたフィールドがあり、片方のオブジェクトは「マルチスタイル」のプロパティにチェックがされていて、もう片方にはチェックがされていません。このとき、以下の様なコードでこれを判別することが出来ます。

```4d
 $Style:=OBJECT Is styled text(*;"Styled_text")
  // True が返されます (「マルチスタイル」がチェックされています)
 
 $Style:=OBJECT Is styled text(*;"Plain_text")
  // False が返されます(「マルチスタイル」はチェックされていません)
```

#### 参照 

*スタイル付きテキスト*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1261 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


