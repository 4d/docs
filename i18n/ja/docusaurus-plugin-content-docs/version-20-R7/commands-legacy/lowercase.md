---
id: lowercase
title: Lowercase
slug: /commands/lowercase
displayed_sidebar: docs
---

<!--REF #_command_.Lowercase.Syntax-->**Lowercase** ( *aString* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Lowercase.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aString | Text | &#8594;  | 英小文字に変換する文字列 |
| * | 演算子 | &#8594;  | 渡した場合アクセントを保持 |
| 戻り値 | Text | &#8592; | 英小文字の文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Lowercase.Summary-->Lowercaseは、*aString*を取りアルファベット文字列をすべて英小文字に変換して返します。<!-- END REF--> 

オプションの*\** 引数が渡されると、*aString*に存在するアクセント符号付きの文字は、アクセント符号付きの英小文字で返されます。この引数が省略され、変換が実行されると、アクセント符号付きの文字は、デフォルトでそのアクセント記号を失います。

#### 例題 1 

以下の例は、Capsという名前の関数です。与えられた文字列の最初の文字を大文字にして返すものです。例えば、Caps("john") の結果は、"John" となります。

```4d
  // Caps project method
  // Caps ( 文字列 ) -> 文字列
  // Caps ( Any text or 文字列 ) -> Capitalized text
 
 $0:=Lowercase($1)
 If(Length($0)>0)
    $0[[1]]:=Uppercase($0[[1]])
 End if
```

#### 例題 2 

この例では、引数が渡されたか、渡されないかに応じて取得された結果を比較します。

```4d
 $thestring:=Lowercase("DEJA VU") // $thestringは"deja vu"
 $thestring:=Lowercase("DEJA VU";*) // $thestringは"deja vu"
```

#### 参照 

[Uppercase](uppercase.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 14 |
| スレッドセーフである | &check; |


