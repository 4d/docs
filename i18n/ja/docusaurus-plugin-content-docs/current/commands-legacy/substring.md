---
id: substring
title: Substring
slug: /commands/substring
displayed_sidebar: docs
---

<!--REF #_command_.Substring.Syntax-->**Substring** ( *source* ; *firstChar* {; *numChars*} ) : Text<!-- END REF-->
<!--REF #_command_.Substring.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| source | Text | &#8594;  | 一部を取り出す文字列 |
| firstChar | Integer | &#8594;  | 最初の文字位置 |
| numChars | Integer | &#8594;  | 取り出す文字列の長さ |
| 戻り値 | Text | &#8592; | 文字列の一部 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Substring.Summary-->**Substring** コマンドは、*firstChar*と*numChars*で指定した部分文字列を*source*から取り出して返します。<!-- END REF--> 

*firstChar*には文字列の中で取り出す文字列の最初の文字の位置を指定し、*numChars*には取り出す文字列の長さを指定します。

*firstChar*と*numChars*の和が、文字列自身の文字数よりも大きい場合や*numChars*を指定しない場合には、 **Substring** は先頭文字位置以降の文字列をすべて取り出します。*firstChar*が文字列の長さより大きいと、**Substring** は空の文字列("") を返します。

**警告:** このコマンドをマルチスタイルのコンテキストで使用する場合、正常に処理するためにはWindowsの改行文字 ('\\r\\n')を全て単一の文字 ('\\r')に変換する必要があります。これは、マルチプラットフォームの互換性を保証するために4Dの行末を標準化するための機構によるものです。詳細な情報に関しては、*行末の自動標準化* を参照して下さい。

#### 例題 1 

Substringコマンドの使用例を次に示します。結果を変数 vsResultに代入します。コメントは、変数 vsResultに代入される内容についての説明です。 

```4d
 vsResult:=Substring("08/04/62";4;2) // vsResultは"04"
 vsResult:=Substring("Emergency";1;6) // vsResultは"Emerge"
 vsResult:=Substring(var;2) //vsResult は一文字目を除いた全て
```

#### 例題 2 

以下のプロジェクトメソッドは、テキスト(最初の引数で指定) 中に見つかった段落を文字列またはテキスト配列(2番目の引数としてポインタを渡す) に追加します。

```4d
  // EXTRACT PARAGRAPHS
  // EXTRACT PARAGRAPHS ( text ; Pointer )
  // EXTRACT PARAGRAPHS ( Text to parse ; -> 文字列配列 )
 
 var $1 : Text
 var $2 : Pointer
 
 $vlElem:=Size of array($2->)
 Repeat
    $vlElem:=$vlElem+1
    INSERT IN ARRAY($2->;$vlElem)
    $vlPos:=Position(Char(Carriage return);$1)
    If($vlPos>0)
       $2->{$vlElem}:=Substring($1;1;$vlPos-1)
       $1:=Substring($1;$vlPos+1)
    Else
       $2->{$vlElem}:=$1
    End if
 Until($1="")
```

#### 参照 

[Position](position.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 12 |
| スレッドセーフである | &check; |


