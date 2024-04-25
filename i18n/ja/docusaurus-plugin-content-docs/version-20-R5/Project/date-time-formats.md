---
id: date-time-formats
title: Date and Time Formats
---

アプリケーション、プラットフォーム、またはインターフェースの要件に従って、4Dプロジェクトにおける日付や時間の表示形式を管理しなくてはならない場合があります。

4Dには、デフォルトの形式に加えて、カスタマイズされた日付と時間のフォーマットを作成および適用するために使用できる包括的なパターンのリストが含まれています。 カスタマイズされたフォーマットパターンは、以下の機能でサポートされています:

- the [`String`](https://doc.4d.com/4dv20R/help/command/en/page10.html) command,
- the [`OBJECT SET FORMAT`](https://doc.4d.com/4dv20R/help/command/en/page236.html) and [`OBJECT Get format`](https://doc.4d.com/4dv20R/help/command/en/page894.html) commands,
- the date and time format form object properties, available from the Property list or the [`dateFormat`](../FormObjects/properties_Display.md/#date-format) and [`timeFormat`](../FormObjects/properties_Display.md/#time-format) JSON properties.

## パターンリスト

以下の表は、日付/時間フォーマットでサポートされているすべてのパターンの一覧です (一部の出力はローカライズされており、システムパラメーターに依存します)。

| 記号  | 意味                                                                 | パターン       | 出力例                                                                                       |
| --- | ------------------------------------------------------------------ | ---------- | ----------------------------------------------------------------------------------------- |
| G   | 元号                                                                 | G, GG, GGG | 西暦                                                                                        |
|     |                                                                    | GGGG       | 西暦                                                                                        |
|     |                                                                    | GGGGG      | A                                                                                         |
| y   | 年                                                                  | yy         | 96                                                                                        |
|     |                                                                    | y または yyyy | 1996                                                                                      |
| Y   | ウィークカレンダーの年                                                        | Y          | 1997                                                                                      |
| u   | 拡張年                                                                | u          | 4601                                                                                      |
| Q   | 四半期                                                                | Q          | 2                                                                                         |
|     |                                                                    | QQ         | 02                                                                                        |
|     |                                                                    | QQQ        | Q2                                                                                        |
|     |                                                                    | QQQQ       | 第2四半期                                                                                     |
|     |                                                                    | QQQQQ      | 2                                                                                         |
| q   | 四半期 (単独)                                        | q          | 2                                                                                         |
|     |                                                                    | qq         | 02                                                                                        |
|     |                                                                    | qqq        | Q2                                                                                        |
|     |                                                                    | qqqq       | 第2四半期                                                                                     |
|     |                                                                    | qqqqq      | 2                                                                                         |
| M   | 月                                                                  | M          | 9                                                                                         |
|     |                                                                    | MM         | 09                                                                                        |
|     |                                                                    | MMM        | 9月                                                                                        |
|     |                                                                    | MMMM       | 9月                                                                                        |
|     |                                                                    | MMMMM      | S                                                                                         |
| L   | 月 (単独)                                          | L          | 9                                                                                         |
|     |                                                                    | LL         | 09                                                                                        |
|     |                                                                    | LLL        | 9月                                                                                        |
|     |                                                                    | LLLL       | 9月                                                                                        |
|     |                                                                    | LLLLL      | S                                                                                         |
| w   | 週番号                                                                | w          | 27                                                                                        |
|     |                                                                    | ww         | 27                                                                                        |
| d   | 日                                                                  | d          | 2                                                                                         |
|     |                                                                    | dd         | 2                                                                                         |
| D   | 日 (年始からの日数)                                     | D          | 189                                                                                       |
| E   | 曜日                                                                 | E, EE, EEE | Tue                                                                                       |
|     |                                                                    | EEEE       | Tuesday                                                                                   |
|     |                                                                    | EEEEE      | T                                                                                         |
|     |                                                                    | EEEEEE     | 火                                                                                         |
| e   | ローカル曜日                                                             | e          | 2                                                                                         |
|     |                                                                    | ee         | 02                                                                                        |
|     |                                                                    | eee        | Tue                                                                                       |
|     |                                                                    | eeee       | Tuesday                                                                                   |
|     |                                                                    | eeeee      | T                                                                                         |
|     |                                                                    | eeeeee     | 火                                                                                         |
| c   | ローカル曜日 (単独)                                     | c, cc      | 2                                                                                         |
|     |                                                                    | ccc        | Tue                                                                                       |
|     |                                                                    | cccc       | Tuesday                                                                                   |
|     |                                                                    | ccccc      | T                                                                                         |
|     |                                                                    | cccccc     | 火                                                                                         |
| a   | 午前、午後                                                              | a, aa, aaa | 午後                                                                                        |
|     |                                                                    | aaaa       | 午後                                                                                        |
|     |                                                                    | aaaaa      | p                                                                                         |
| b   | 午前、午後、正午                                                           | b, bb, bbb | 正午                                                                                        |
|     |                                                                    | bbbb       | 正午                                                                                        |
|     |                                                                    | bbbbb      | 正午                                                                                        |
| B   | 時間帯表現                                                              | B, BB, BBB | 夜                                                                                         |
|     |                                                                    | BBBB       | 夜                                                                                         |
|     |                                                                    | BBBBB      | 夜                                                                                         |
| h   | 時間 (1~12)                       | h          | 7                                                                                         |
|     |                                                                    | hh         | 07                                                                                        |
| H   | 時間 (0~23)                       | H          | 0                                                                                         |
|     |                                                                    | HH         | 00                                                                                        |
| K   | 時間 (0~11)                       | K          | 0                                                                                         |
|     |                                                                    | KK         | 00                                                                                        |
| k   | 時間 (1~24)                       | k          | 24                                                                                        |
|     |                                                                    | kk         | 24                                                                                        |
| m   | 分                                                                  | m          | 4                                                                                         |
|     |                                                                    | mm         | 04                                                                                        |
| s   | 秒                                                                  | s          | 5                                                                                         |
|     |                                                                    | ss         | 05                                                                                        |
| X   | タイムゾーン: ISO8601 基本 hm? 0 の場合は Z 表示                 | X          | -08, +0530, Z                                                                             |
|     | タイムゾーン: ISO8601 基本 hm, 0 の場合は Z 表示                 | XX         | -0800, Z                                                                                  |
|     | タイムゾーン: ISO8601 拡張 hm, 0 の場合は Z 表示                 | XXX        | -08:00, Z                                                                 |
|     | タイムゾーン: ISO8601 基本 hms?, 0 の場合は Z 表示               | XXXX       | -0800, -075258, Z                                                                         |
|     | タイムゾーン: ISO8601 拡張 hms?, 0 の場合は Z 表示               | XXXXX      | -08:00, -07:52:58, Z                      |
| ○   | タイムゾーン: ISO8601 基本 hm?, Z 表示なし                     | ○          | -08, +0530, +00                                                                           |
|     | タイムゾーン: ISO8601 基本 hm, Z 表示なし                      | xx         | -0800, +0000                                                                              |
|     | タイムゾーン: ISO8601 拡張 hm, Z 表示なし                      | xxx        | -08:00, +00:00                                            |
|     | タイムゾーン: ISO8601 基本 hms?, Z 表示なし                    | xxxx       | -0800, -075258, +0000                                                                     |
|     | タイムゾーン: ISO8601 拡張 hms?, Z 表示なし                    | xxxxx      | -08:00, -07:52:58, +00:00 |
| O   | タイムゾーン: 短いローカライズされた GMT                            | O          | GMT+9                                                                                     |
|     | タイムゾーン: 長いローカライズされた GMT (=ZZZZ) | OOOO       | GMT+09:00                                                                 |
| z   | タイムゾーン: 共通形式                                       | z, zz, zzz | JST                                                                                       |
|     |                                                                    | zzzz       | GMT+09:00                                                                 |
|     |                                                                    | zzzzz      | -08:00, -07:52:58, Z                      |
|     |                                                                    |            |                                                                                           |
| '   | テキスト用エスケープ                                                         | '          | '                                                                                         |
| ' ' | 2つの一重引用符は 1つの一重引用符として解釈されます                                        | ' '        | ' '                                                                                       |

## パターンについて

### `y` vs `Y`

`y` is the calendar year, while `Y` is the year based on the week number. たとえば、2010年の1月の最初の日が週番号1ではない場合、y = 2010 かつ Y = 2009 となりえます (2010年の最初の週が始まる日まで)。(週番号の数え方にはいくつかの方式があります)

### `L` (stand-alone) vs `M`

ロシア語、スロバキア語など一部の言語では、単独で使用される月名と日付内の月名が異なります。 In "January 10, 2010", "January" is not spelled the same as in "_rendez-vous_ in January".

### `e` vs `c`

Same remark as for `L` and `M`: `c` is for a day used alone "every tuesday") and `e` is for a day in a date ("Tuesday January 15, 1951").

### `E` vs `e`

`e` is based on system settings: if the week is defined in the system as starting on a Wednesday, then Wednesday will have the numerical value "1" (or zero) whereas "E" always returns the same value (from 1 to 7 or from 0 to 6).

### 先頭のゼロ

一般的に、フォーマット文字列の文字数が数値の桁数よりも多い場合、先頭にゼロが追加されます。 例: "yyyyyy" は "001996" と表示されます。

### ローカライズされた出力

一部の出力 ("正午"、"火曜日" など) は、地域設定に応じてローカライズされます。

For example, for the time `13:25:34`, "B" will display _in the afternoon_ on an US system, and _après-midi_ on a French system.

### 追加の文字

フォーマット文字列には、フォーマット文字として解釈されない文字を含めることができます。追加の文字が "a" から "z" または "A" から "Z" の間の文字の場合、それらは一重引用符で囲む必要があります。

例:

"15:30:00" をパターン "HH 'hours and' mm 'minutes'" で表現すると、"15 hours and 30 minutes" と出力されます。

### 先頭と末尾のスペース

パターンの先頭と末尾のスペースは、出力の際に自動でトリミングされます。 結果の文字列の先頭や末尾にスペースを入れるには、一重引用符で囲む必要があります。

例:

" HH : mm : ss " ---> "09 : 10 : 25"
"' 'HH : mm : ss' '" ---> " 09 : 10 : 25 "

## 例題

| 日付/時間                                    | パターン                         | 戻り値                              | コメント      |
| ---------------------------------------- | ---------------------------- | -------------------------------- | --------- |
| 2000/06/15                               | "QQQQ"                       | "第2四半期"                          | ローカライズ済み  |
| 2001/03/17                               | "D"                          | "76"                             | 年始から 76日目 |
| 1954/03/17                               | "w"                          | "12"                             | 年の 12週目   |
| 1954/03/17                               | "eeee"                       | "水曜日"                            | ローカライズ済み  |
| 15:00:00 | "a"                          | "午後"                             |           |
| 18:00:00 | "a K"                        | "午後 6"                           |           |
| 13:30:15 | "aa hh:mm O" | "午後 01:30 GMT+9" |           |

## 参照

See [this blogpost](https://blog.4d.com/tailored-customization-for-dates-and-times) for more information on the custom date and time formats.
