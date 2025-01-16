---
id: compare-strings
title: Compare strings
slug: /commands/compare-strings
displayed_sidebar: docs
---

<!--REF #_command_.Compare strings.Syntax-->**Compare strings** ( *aString* ; *bString* {; *options*} ) : Integer<!-- END REF-->
<!--REF #_command_.Compare strings.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aString | Text | &#8594;  | 比較する文字列 |
| bString | Text | &#8594;  | 比較する文字列 |
| options | Integer | &#8594;  | 比較ルール |
| 戻り値 | Integer | &#8592; | 文字列比較の結果 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Compare strings.Summary-->**Compare strings** コマンドは、*aString* 引数の文字列が*bString* 引数の文字列比較して低い/等しい/高いと評価されるかによって負の値/ゼロ/正の値を返します。<!-- END REF-->引数にはtext 型の値を渡します。

*bString* 引数には、*aString* 引数と比較するtext 型の値を渡します。

デフォルトで、**Compare strings** コマンドは"<" (未満) 演算子が使用されたのと同じように振舞います(*String operators* を参照)。この振る舞いは*options* 引数を使用することで変更可能です。*Strings* テーマ内の、以下の定数のいづれか一つまたは組み合わせを渡すことができます:

| 定数                       | 値  | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sk case insensitive      | 2  | 文字列は、カレントのデータ言語設定に応じて比較され、大文字/小文字の差異は考慮されません。ただしアクセント記号は考慮されるという点に注意してください。例えば、"A" と"a" は同じとみなされますが、"a" は"à" とは違うとみなされます。デフォルトでは、4Dの文字列比較は大文字と小文字を区別しません。 これは以下の定数と組み合わせ可能です: sk char codes または sk diacritic insensitive sk whole word ([Position](position.md) コマンドのみ) この定数は、暗示的に以下の定数を使用します(可読性向上のために組み合わせることも可能です): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                |
| sk char codes            | 1  | 文字列は文字コードに基づいて比較されます。カレントのデータ言語設定は比較の際には考慮されません。 これは以下の定数と組み合わせ可能です: sk case insensitive これは"a-z" または "A-Z" のレンジのみ使用可能です(例: Alpha = alpha、しかし Alpha # âlphà)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| sk diacritic insensitive | 4  | 文字列は、カレントのデータ言語設定に応じて比較されますが、文字のアクセント記号(アクセントや記号など)は無視されます。例えば、"a" は"à" と同じとみなされます。 これは以下の定数と組み合わせ可能です: sk case insensitive sk whole word ([Position](position.md) コマンドのみ) この定数は、暗示的に以下の定数を使用します(可読性向上のために組み合わせることも可能です): sk kana insensitive sk width insensitive sk strict                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| sk kana insensitive      | 8  | 日本語のみ。ひらがな文字とカタカナ文字の区別をコントロールします。意味合いを考える場合には、一般的にはひらがなとカタカナの差異は大きいものですが、より多くの結果を検索で見つけるために、4D ではデフォルトではこの差異を無視するように(kana insensitive に)設定されています。例えば、"あ" は"ア" と同じとみなされます。sk strict オプションはひらがなとカタカナを区別する比較を実行します。sk kana insensitive を使用するとひらがなとカタカナを同一視するようにルールを一部緩和させることができます。 **<br/>注:** このオプションを使用するためには、データ言語が日本語に設定されている必要があります。その他の全ての言語に対してはこのオプションは無視され、[Compare strings](compare-strings.md) はsk strict が指定された時と同じように振る舞います。言い換えると、日本語以外の言語のコンテキストにおいてこのオプションを設定した場合、文字列の比較はひらがなとカタカナを区別するようになります(つまり本来の想定とは逆の効果が出ます)。 これは以下の定数と組み合わせ可能です: sk case insensitive sk diacritic insensitive この定数は、暗示的に以下の定数を使用します(可読性向上のために組み合わせることも可能です): sk width insensitive sk strict                                                  |
| sk strict                | 0  | 文字列は、カレントのデータ言語設定の基づいて完全一致するかどうかに応じて比較されます。多くの場合、大文字/小文字、アクセント記号の有無は比較の際に考慮されます(違う文字とみなされます)。 これは以下の定数と組み合わせ可能です: sk case insensitive sk diacritic insensitive sk kana insensitive この定数は、暗示的に以下の定数を使用します(可読性向上のために組み合わせることも可能です): sk width insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| sk width insensitive     | 16 | 日本語のみ。[Unicode Standard Annex #11](http://www.unicode.org/reports/tr11/) に定義されているUnicode 標準の「東アジアの文字幅」に対応します。意味合いを考える場合には、文字の"全角"と"半角"(あるいは"狭い"と"広い")の差異は一般的にはあまり大きくなく、そのため4D でもデフォルトではこのモードが採用されています。例えば、"ア" は"ｱ" と同じであるとみなされます。 ****注:** このオプションを使用するためには、データ言語が日本語に設定されている必要があります。その他の全ての言語に対してはこのオプションは無視され、[Compare strings](compare-strings.md) はsk strict が指定された時と同じように振る舞います。言い換えると、日本語以外の言語のコンテキストにおいてこのオプションを設定した場合、文字列の比較は全角と半角を区別するようになります(つまり本来の想定とは逆の効果が出ます)。 このオプションは [Position](position.md) コマンドでは無視されます。Unicode のWidth Insensitive コレーションは非対称的であり、位置や長さで検索を行うのは不可能だからです。 これは以下の定数と組み合わせ可能です: sk case insensitive sk diacritic insensitive sk kana insensitive この定数は、暗示的に以下の定数を使用します(可読性向上のために組み合わせることも可能です): sk strict |

データ言語の定義の詳細な情報については、*デザインリファレンス*の の章を参照してください。

**警告:** **Compare strings** では@ のワイルドカード文字を使用することはできません。例えば、*aString* または *bString* 引数*"abc@"* にを渡した場合、コマンドは*"abc@"* という文字列を評価し、"abc" という文字列とそれに続く何らかの文字、という解釈はしません。

**返される値**

コマンドは以下のlongint 型の値のいずれかを返します:

| **値 <br/>** | **詳細 <br/>**                        |
| ------------------- | ------------------------------------------- |
| \-1                 | *aString* は*bString* の前である(*aString* の方が低い) |
| 0                   | *aString* は*bString* と等しい                   |
| 1                   | *aString* は*bString* の後である(*aString* の方が高い) |
  
  
#### 例題 1 

以下の文字列を比較したい場合を考えます: 

```4d
 $string1:="alpha Bravo charlie Delta Echo Fox-Trot"
 $string2:="Alpha Bravo Charlie Delta Echo Fox-Trot"
 
  // 文字コードを使用して文字列を比較する
 $result:=Compare strings($string1;$string2;sk char codes)
  // $result = 1
 
  // 文字コードを使用して文字列を比較するが、大文字/小文字の違いは無視する
 $result:=Compare strings($string1;$string2;sk char codes+sk case insensitive)
  // $result = 0
```

#### 例題 2 

以下の例題は**データ言語が日本語のコンテキスト**におけるこのオプションの特定の振る舞いについて説明しています:

```4d
  // デフォルトはひらがなとカタカナを区別しない(kana insensitive)
 $result:=Compare strings("イロハ";"いろは") // 同じであるとみなされる
 $result:=Compare strings("イロハ";"いろは";sk strict) // 異なるとみなされる
 $result:=Compare strings("イロハ";"いろは";sk kana insensitive) // 同じであるとみなされる
```

```4d
  // デフォルトは大文字と小文字("つ"と"っ"など)を区別しない(case insensitive)
 $result:=Compare strings("さつき";"さっき") // 同じであるとみなされる
 $result:=Compare strings("さつき";"さっき";sk strict) // 異なるとみなされる
 $result:=Compare strings("さつき";"さっき";sk case insensitive) // 同じであるとみなされる
```

```4d
  // データ言語が日本語に設定されている場合には、記号(濁点など)の有無を区別する(diacritic sensitive)、これは他の言語設定と異なる
 $result:=Compare strings("ete";"été") // データ言語が日本語以外に設定されている場合には同じとみなされる
 $result:=Compare strings("ete";"été") // データ言語が日本語に設定されている場合には異なるとみなされる
 $result:=Compare strings("うがい";"うかい") // 異なるとみなされる
 $result:=Compare strings("うがい";"うかい";sk strict) // 異なるとみなされる
 $result:=Compare strings("うがい";"うかい";sk diacritic insensitive) // 同じであるとみなされる
```

**注:** "テキスト検索用の文字列比較を使用する"オプション(参照)は**Compare strings** コマンドに影響があります。具体的には、"カタカナ-ひらがなの長音記号"の解釈の仕方が異なります。またこの設定は"ゝ"または"ゞ"などの日本語の繰り返し記号(踊り字)にも影響があります。例:

```4d
 $result:=Compare strings("いすず";"いすゞ") // オプションが無効化されている場合には同じとみなされる
 $result:=Compare strings("いすず";"いすゞ") // オプションが有効化されている場合には異なるとみなされる
 $result:=Compare strings("ラーメン";"ﾗｱﾒﾝ") // オプションが無効化されている場合には同じとみなされる
 $result:=Compare strings("ラーメン";"ﾗｱﾒﾝ") // オプションが有効化されている場合には異なるとみなされる
```

#### 参照 

[Position](position.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1756 |
| スレッドセーフである | &check; |


