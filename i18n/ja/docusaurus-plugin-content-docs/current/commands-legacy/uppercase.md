---
id: uppercase
title: Uppercase
slug: /commands/uppercase
displayed_sidebar: docs
---

<!--REF #_command_.Uppercase.Syntax-->**Uppercase** ( *aString* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Uppercase.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aString | Text | &#8594;  | 英大文字にする文字列 |
| * | 演算子 | &#8594;  | 渡されると、アクセント符号を保持 |
| 戻り値 | Text | &#8592; | 英大文字に変換した文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Uppercase.Summary-->Uppercaseは、*aString*を取りアルファベット文字列をすべて英大文字に変換して返します。<!-- END REF-->

オプションの*\** 引数が渡されると、*aString*に存在するアクセント符号付きの文字を、アクセント符号付きの英小文字で返します。この引数が省略され変換が実行されると、アクセント符号付きの文字は、デフォルトでそのアクセント符号を失います。

#### 例題 1 

この例では、引数が渡されたか、渡されないかに応じて取得された結果を比較します。

```4d
 $thestring:=Uppercase("helene") // $thestringは"HELENE"
 $thestring:=Uppercase("helene";*) // $thestringは"HELENE"
```

#### 例題 2 

[Lowercase](lowercase.md "Lowercase")の例を参照してください。

#### 参照 

[Lowercase](lowercase.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 13 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


