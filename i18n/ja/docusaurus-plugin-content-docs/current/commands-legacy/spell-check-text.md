---
id: spell-check-text
title: SPELL CHECK TEXT
slug: /commands/spell-check-text
displayed_sidebar: docs
---

<!--REF #_command_.SPELL CHECK TEXT.Syntax-->**SPELL CHECK TEXT** ( *text* ; *errPos* ; *errLength* ; *checkPos* ; *arrSuggest* )<!-- END REF-->
<!--REF #_command_.SPELL CHECK TEXT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| text | Text | &#8594;  | チェックするテキスト |
| errPos | Integer | &#8592; | 未知の単語の最初の文字位置 |
| errLength | Integer | &#8592; | 未知の単語の長さ |
| checkPos | Integer | &#8594;  | チェックを開始する位置 |
| arrSuggest | Text array | &#8592; | 推奨候補リスト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SPELL CHECK TEXT.Summary-->**SPELL CHECK TEXT**コマンドは*text*引数の内容を、*checkPos*の位置からチェックし、最初に見つかった未知の単語の位置を返します。<!-- END REF-->

このコマンドはこの未知の単語の最初の文字の位置を*errPos*に、そしてその長さを*errLength*に返します。*arrSuggest*配列には、スペルチェッカーが提案する修正候補のリストが返されます。

スペルチェックがエラーなしで開始され未知の単語が見つかった場合、OKシステム変数に0が設定されます。チェック中に初期化エラーが発生するか未知の単語が見つからなかった場合、OKは1に設定されます。

**Note OS X:** OS X 環境下でシステムチェッカーが使用されているときには、このコマンドは文法チェックをサポートしません。

#### 例題 

テキスト中にあるかもしれないエラーをカウントします:

```4d
 $pos:=1
 $errCount:=0
 ARRAY TEXT($tErrors;0)
 ARRAY TEXT($tSuggestions;0)
 Repeat
    SPELL CHECK TEXT($myText;$errPos;$errLength;$pos;$tSuggestions)
    If(OK=0)
       $errCount:=$errCount+1 // エラーカウンター
       $errorWord:=Substring($myText;$errPos;$errLength)
       APPEND TO ARRAY($tErrors;$errorWord) // エラーの配列
       $pos:=$errPos+$errLength  //チェックを続ける
    End if
 Until(OK=1)
  // 最終的に$errCount=Size of array($tErrors)
```

#### 参照 

[SPELL ADD TO USER DICTIONARY](spell-add-to-user-dictionary.md)  
[SPELL CHECKING](spell-checking.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1215 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


