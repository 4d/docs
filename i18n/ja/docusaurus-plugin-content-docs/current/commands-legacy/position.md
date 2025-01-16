---
id: position
title: Position
slug: /commands/position
displayed_sidebar: docs
---

<!--REF #_command_.Position.Syntax-->**Position** ( *find* ; *aString* {; *start* {; *lengthFound*}}{; *} ) -> 戻り値 <br/>
**Position** ( *find* ; *aString* ; *start* ; *lengthFound* ; *options* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Position.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| find | Text | &#8594;  | 見つける文字列 |
| aString | Text | &#8594;  | 調べる文字列 |
| start | Integer | &#8594;  | aString引数内で検索を開始する位置 |
| lengthFound | Integer | &#8592; | 見つかった文字列の長さ |
| * | 演算子 | &#8594;  | 渡されると、文字コードに基づいて評価 |
| 戻り値 | Integer | &#8592; | 最初に見つかった位置 |
| Position ( find ; aString ; start ; lengthFound ; options ) -> 戻り値 |
| 引数 | 型 | 説明 |
| find | Text | &#8594;  | 見つける文字列 |
| aString | Text | &#8594;  | 調べる文字列 |
| start | Integer | &#8594;  | aString引数内で検索を開始する位置 |
| lengthFound | Integer | &#8594;  | 見つかった文字列の長さ |
| options | Integer | &#8594;  | 検索条件 |
| 戻り値 | Integer | &#8592; | 最初に見つかった位置 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Position.Summary-->**Position** コマンドは、*aString* の中で*find* が最初に現われる位置を返します。<!-- END REF-->の中に*find* が見つからない場合は、Positionはゼロ(0) を返します。

*find* が見つかると、*aString* の中に検索文字列が最初に表示された文字位置を返します。

空のstringに対して空のfindを指定すると、**Position** はゼロ(0) を返します。

デフォルトで、検索を*aString* の最初の文字で開始します。*start* 引数を使用して、*aString* 中で検索を開始する文字位置を指定します。

*lengthFound* 引数は、検索によって実際に見つかった文字列の長さを返します。この引数は、１つ以上の文字(例えばæとae、ßとss等) で書きこまれる文字を正確に表現するために必要となります。  
*\** 引数が渡されたとき (以下参照) 、これらの文字は等しいと認識されない (æ # ae) ことに注意してください。このモードで、*lengthFound* はいつも*find* の長さと同じです (オカレンスが発見された場合)。

デフォルトでこのコマンドはグローバルな比較を行い、言語上の特性と、1つ以上の文字で記述される文字 (例 æ = ae) を考慮に入れます。他方、発音は区分せず (a=A, a=à 等) 、無視可能な文字は考慮されません (Unicodeの仕様)。無視可能な文字にはUnicodeの*C0 Control* サブセット (U+0000 \~ U+001F, Ascii制御文字セット) のすべての文字が含まれます (ただし印刷可能な文字 (U+0009 TAB, U+0010 LF, U+0011 VT, U+0012 FF そして U+0013 CR) は除きます。  
この動作を変更するには、シンタックスに応じて以下のものを渡してください: 

* (**第1シンタックス - \* 引数**) 最後の引数としてアスタリスク *\** を渡します。この場合、比較は文字コードベースで行われます。*\** 引数は以下のようなケースで必要となります:  
   * 区切り文字として使用されている文字(**Char**(1))などの特別な文字を考慮に入れたい場合、  
   * 文字の評価で大文字小文字の区別やアクセント文字を考慮したい場合 (a#A, a#à 等)。  
   このモードでは、単語が書かれた方法のバリエーションが評価されないことに留意してください。  
         
   **注:** 特定の場合において、 *\** 引数を使用することでコマンドの実行速度が格段に速くなる場合があります。
* (**第2シンタックス - options 引数**) *Strings* テーマ内の以下の定数の一つまたは複数:  
    
| 定数                       | 値  | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| ------------------------ | -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| sk case insensitive      | 2  | 文字列は、カレントのデータ言語設定に応じて比較され、大文字/小文字の差異は考慮されません。ただしアクセント記号は考慮されるという点に注意してください。例えば、"A" と"a" は同じとみなされますが、"a" は"à" とは違うとみなされます。デフォルトでは、4Dの文字列比較は大文字と小文字を区別しません。 これは以下の定数と組み合わせ可能です: sk char codes または sk diacritic insensitive sk whole word ([Position](position.md) コマンドのみ) この定数は、暗示的に以下の定数を使用します(可読性向上のために組み合わせることも可能です): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                |  
| sk char codes            | 1  | 文字列は文字コードに基づいて比較されます。カレントのデータ言語設定は比較の際には考慮されません。 これは以下の定数と組み合わせ可能です: sk case insensitive これは"a-z" または "A-Z" のレンジのみ使用可能です(例: Alpha = alpha、しかし Alpha # âlphà)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| sk diacritic insensitive | 4  | 文字列は、カレントのデータ言語設定に応じて比較されますが、文字のアクセント記号(アクセントや記号など)は無視されます。例えば、"a" は"à" と同じとみなされます。 これは以下の定数と組み合わせ可能です: sk case insensitive sk whole word ([Position](position.md) コマンドのみ) この定数は、暗示的に以下の定数を使用します(可読性向上のために組み合わせることも可能です): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  
| sk kana insensitive      | 8  | 日本語のみ。ひらがな文字とカタカナ文字の区別をコントロールします。意味合いを考える場合には、一般的にはひらがなとカタカナの差異は大きいものですが、より多くの結果を検索で見つけるために、4D ではデフォルトではこの差異を無視するように(kana insensitive に)設定されています。例えば、"あ" は"ア" と同じとみなされます。sk strict オプションはひらがなとカタカナを区別する比較を実行します。sk kana insensitive を使用するとひらがなとカタカナを同一視するようにルールを一部緩和させることができます。 **<br/>注:** このオプションを使用するためには、データ言語が日本語に設定されている必要があります。その他の全ての言語に対してはこのオプションは無視され、[Compare strings](compare-strings.md) はsk strict が指定された時と同じように振る舞います。言い換えると、日本語以外の言語のコンテキストにおいてこのオプションを設定した場合、文字列の比較はひらがなとカタカナを区別するようになります(つまり本来の想定とは逆の効果が出ます)。 これは以下の定数と組み合わせ可能です: sk case insensitive sk diacritic insensitive この定数は、暗示的に以下の定数を使用します(可読性向上のために組み合わせることも可能です): sk width insensitive sk strict                                                  |  
| sk strict                | 0  | 文字列は、カレントのデータ言語設定の基づいて完全一致するかどうかに応じて比較されます。多くの場合、大文字/小文字、アクセント記号の有無は比較の際に考慮されます(違う文字とみなされます)。 これは以下の定数と組み合わせ可能です: sk case insensitive sk diacritic insensitive sk kana insensitive この定数は、暗示的に以下の定数を使用します(可読性向上のために組み合わせることも可能です): sk width insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  
| sk whole word            | 32 | 文字列は、カレントのデータ言語設定に基づいて比較されます。完成された単語全体が文字列として考慮されます。例えば、"where" は"somewhere" 内に含まれているのが見つかった場合は同じとはみなされません。 これは以下の定数と組み合わせ可能です: sk case insensitive ([Position](position.md) コマンドのみ) sk diacritic insensitive ([Position](position.md) コマンドのみ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| sk width insensitive     | 16 | 日本語のみ。[Unicode Standard Annex #11](http://www.unicode.org/reports/tr11/) に定義されているUnicode 標準の「東アジアの文字幅」に対応します。意味合いを考える場合には、文字の"全角"と"半角"(あるいは"狭い"と"広い")の差異は一般的にはあまり大きくなく、そのため4D でもデフォルトではこのモードが採用されています。例えば、"ア" は"ｱ" と同じであるとみなされます。 ****注:** このオプションを使用するためには、データ言語が日本語に設定されている必要があります。その他の全ての言語に対してはこのオプションは無視され、[Compare strings](compare-strings.md) はsk strict が指定された時と同じように振る舞います。言い換えると、日本語以外の言語のコンテキストにおいてこのオプションを設定した場合、文字列の比較は全角と半角を区別するようになります(つまり本来の想定とは逆の効果が出ます)。 このオプションは [Position](position.md) コマンドでは無視されます。Unicode のWidth Insensitive コレーションは非対称的であり、位置や長さで検索を行うのは不可能だからです。 これは以下の定数と組み合わせ可能です: sk case insensitive sk diacritic insensitive sk kana insensitive この定数は、暗示的に以下の定数を使用します(可読性向上のために組み合わせることも可能です): sk strict |

データ言語の定義に関する情報については、*デザインリファレンス*の の章を参照してください。

**警告:** **Position** に対して@ワイルドカード記号を使用することはできません。例えば、*find*に"abc@" を渡すと、このコマンドは"abc" で始まる文字ではなく、単なる文字として"abc@" を検索します。

#### 例題 1 

Position関数の使用例を次に示します。結果を変数*vlResult*に代入します。コメントは、変数*vlResult*に代入される値についての説明です。  
  
```4d
 vlResult:=Position("ll";"Willow") // vlResult gets 3
 vlResult:=Position(vtText1;vtText2) // Returns first occurrence of vtText1 in vtText2
 vlResult:=Position("day";"Today is the first day";1) // vlResult gets 3
 vlResult:=Position("day";"Today is the first day";4) // vlResult gets 20
 vlResult:=Position("DAY";"Today is the first day";1;*) // vlResult gets 0
 vlResult:=Position("œ";"Bœuf";1;$length) // vlResult =2, $length = 1
```

#### 例題 2 

次の例では*lengthFound*引数を使用して、テキスト中に現れるすべての"aegis" を検索します。

```4d
 $start:=1
 Repeat
    vlResult:=Position("aegis";$text;$start;$lengthfound)
    $start:=$start+$lengthfound
 Until(vlResult=0)
```

#### 例題 3 

以下の例題では、ある文字列を全て見つけて、それを置き換える場合を考えます:

```4d
 var $lengthFound : Integer
 
 $string:="Hello Joelle et joel!"
 $find:="joel"
 $replace:="Joël"
 $option:=sk case insensitive+sk diacritic insensitive
 
 $p:=0
 Repeat
    $p:=Position($find;$string;$p+1;$lengthFound;$option)
    If($p>0)
       $string:=Substring($string;1;$p-1)+$replace+Substring($string;$p+$lengthFound)
    End if
 Until($p<=0) // 戻り値: $string -> Hello Joëlle and Joël!
```

#### 参照 

[Compare strings](compare-strings.md)  
[Substring](substring.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 15 |
| スレッドセーフである | &check; |


