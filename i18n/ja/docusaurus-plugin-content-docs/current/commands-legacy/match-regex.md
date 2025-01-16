---
id: match-regex
title: Match regex
slug: /commands/match-regex
displayed_sidebar: docs
---

<!--REF #_command_.Match regex.Syntax-->**Match regex** ( *pattern* ; *aString* ; *start* {; pos_found ; length_found}{; *} ) -> 戻り値 <br/>
**Match regex** ( *pattern* ; *aString* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Match regex.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| pattern | Text | &#8594;  | 通常の式 |
| aString | Text | &#8594;  | 検索が実行される文字列 |
| start | Integer | &#8594;  | aStringで検索が開始する位置 |
| pos_found | Integer array, Integer | &#8592; | オカレンスの位置 |
| length_found | Integer array, Integer | &#8592; | オカレンスの長さ |
| * | 演算子 | &#8594;  | 渡された場合、示された位置で検索するのみ |
| 戻り値 | Boolean | &#8592; | True = 検索がオカレンスを発見した場合 その他の場合はFalse |
| Match regex ( pattern ; aString ) -> 戻り値 |
| 引数 | 型 | 説明 |
| pattern | Text | &#8594;  | 通常の式(完全に一致) |
| aString | Text | &#8594;  | 検索が行われる文字列 |
| 戻り値 | Boolean | &#8592; | True = 検索でオカレンスが見つかった; それ以外の場合にはFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Match regex.Summary-->Match regexコマンドを使用して、 "正規表現" と呼ばれるメタ言語で合成された規則のセットと文字列が一致しているかを確認します。<!-- END REF-->

正規表現を渡して、*pattern*で検索します。これは特殊文字を用いて、文字列を説明するために使用される文字のセットから成ります。

*aString*に正規表現で検索する文字列を渡します。

*start*では、*aString*中で検索を開始する位置を渡します。

*pos\_found*と*length\_found*が変数である場合、コマンド は位置とオカレンスの長さをこれらの変数に返します。配列を渡す場合、コマンドは位置とオカレンスの長さを配列の要素0に、正規表現によってキャプチャされたグループの位置と長さを続く要素に返します。

任意の*\** 引数 が渡されると、検索は*start*で指定した位置から実行され、パターンにマッチしない場合でもそれ以降を検索しません。

検索がオカレンスを発見した場合、コマンドは[True](true.md "True")を返します。

正規表現に関する詳細は、以下の情報を参照してください:  
[http://ja.wikipedia.org/wiki/正規表現](http://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%8F%BE)

*pattern*引数に渡す正規表現の構文についての詳細は、次のアドレスを参照してください:  
*https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions*

#### 例題 1 

完全に対等なものを検索する(単純なシンタックス):  
*vfound:=Match regex(pattern;mytext)*  

```4d
 QUERY BY FORMULA([Employees];Match regex(".*smith.*";[Employees]name))
```

#### 例題 2 

位置を用いてテキストで検索する  
vfound:=Match regex( pattern;mytext; start; pos\_found; length\_found)  
すべての$1タグを表示する例:  
  
```4d
 vStart:=1
 Repeat
    vfound:=Match regex("<.*>";$1;vStart;pos_found;length_found)
    If(vfound)
       ALERT(Substring($1;pos_found;length_found))
       vStart:=pos_found+length_found
    End if
 Until(Not(vfound))
```

#### 例題 3 

括弧を使用したグループキャプチャのサポートを用いて検索する。正規表現では ( ) を使用してグループを定義する。  
vfound:=Match regex( pattern;mytext; start; pos\_found\_array; length\_found\_array)  

```4d
 ARRAY LONGINT(pos_found_array;0)
 ARRAY LONGINT(length_found_array;0)
 vfound:=Match regex("(.*)stuff(.*)";$1;1;pos_found_array;length_found_array)
 If(vfound)
    $group1:=Substring($1;pos_found_array{1};length_found_array{1})
    $group2:=Substring($1;pos_found_array{2};length_found_array{2})
 End if
```

#### 例題 4 

示されている位置のパターンの類似を制限しながら検索する  
以前の2つの構文のうち１つの最後にスターを追加します。  
  
```4d
 vfound:=Match regex("a.b";"---a-b---";1;$pos_found;$length_found)
  //True を返す
 vfound:=Match regex("a.b";"---a-b---";1;$pos_found;$length_found;*)
  //returns False を返す
 vfound:=Match regex("a.b";"---a-b---";4;$pos_found;$length_found;*)
  //returns True を返す
```
  
  
**注**: 返された位置と長さはUnicodeモードまたはテキストが7ビットASCIIタイプの場合のみその意味を持ちます。

#### エラー管理 

エラーのイベントでは、コマンドはエラーを生成しますが、[ON ERR CALL](on-err-call.md "ON ERR CALL")コマンドを用いてインストールされたメソッドで、これを検知することができます。


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1019 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |


