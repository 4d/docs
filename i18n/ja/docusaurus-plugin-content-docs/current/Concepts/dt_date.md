---
id: date
title: Date
---

日付フィールド、変数、式として認識できる範囲は、100/1/1 から 32,767/12/31 までです。(日本語版の 4D を使用した場合、日付の順序は年/月/日の順になります。)

C_DATE によって宣言された日付は 32767年までの範囲に対応していますが、システムを経由する処理によっては上限にさらなる制限が課せられます。

**注:** 4D ランゲージリファレンスでは、コマンド説明における日付引数はとくに明記されていない限り、「日付」と表記されています。

## 日付リテラル

日付リテラル定数は、エクスクラメーションマークで囲んで表します (! ... !)。 日付は ISOフォーマット (!YYYY-MM-DD!) を使って記述します。 下記に、日付定数の例を示します:

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

空の日付は、 *!00-00-00!* のように指定します。

**Tip:** コードエディターでは空の日付を入力するためのショートカットが提供されています。 空の日付を入力するには、エクスクラメーションマーク (!)  の入力後に Enterキーを押します。

**注:**

- 互換性の理由から、4D はシステムフォーマットに準じた二桁の年次の入力を受け付けます (例: !98/04/20!)。 数字が 30以上の場合は 20世紀 (1900年代)、30未満の場合は 21世紀 (2000年代) であると認識します (ただしデフォルト設定が `SET DEFAULT CENTURY` コマンドを使用して変更されていない場合に限ります)。
- "地域特有のシステム設定を使う" オプション (<a href="https://doc.4d.com/4Dv18/4D/18/Methods-Page.300-4575690.ja.html">メソッドページ</a> 参照) にチェックがされている場合、システムで定義されている日付フォーマットを使用する必要があります。 一般的に、US環境においては、日付は月/日/年の形式で入力され、値はスラッシュ "/" で区切られます。

## 日付演算子

| 演算    | シンタックス                                | 戻り値     | 式                                                     | 値            |
| ----- | ------------------------------------- | ------- | ----------------------------------------------------- | ------------ |
| 日付の差  | Date – Date                           | Number  | !2017-01-20! - !2017-01-01!                           | 19           |
| 日付の加算 | Date + Number                         | Date    | !2017-01-20! + 9                                      | !2017-01-29! |
| 日付の減算 | Date – Number                         | Date    | !2017-01-20! - 9                                      | !2017-01-11! |
| 等しい   | Date = Date                           | Boolean | !2017-01-20! = !2017-01-01!                           | true         |
|       |                                       |         | !2017-01-20! = !2017-01-01!                           | false        |
| 異なる   | Date # Date                           | Boolean | !2017-01-20! # !2017-01-01!                           | true         |
|       |                                       |         | !2017-01-20! # !2017-01-20!                           | false        |
| 大きい   | Date > Date                           | Boolean | !2017-01-20! > !2017-01-01!                           | true         |
|       |                                       |         | !2017-01-20! > !2017-01-20!                           | false        |
| 小さい   | Date < Date  | Boolean | !2017-01-20! < !2017-01-20!  | true         |
|       |                                       |         | !2017-01-20! < !2017-01-20!  | false        |
| 以上    | Date >= Date                          | Boolean | !2017-01-20! >=!2017-01-01!                           | true         |
|       |                                       |         | !2017-01-01!>=!2017-01-20!                            | false        |
| 以下    | Date <= Date | Boolean | !2017-01-20! <= !2017-01-20! | true         |
|       |                                       |         | !2017-01-20! <= !2017-01-01! | false        |

## Conversion of dates from JavaScript

Since dates in JavaScript are objects, they are sent to 4D as text containing their JSON form like any other object. This principle is implemented in particular when using [JSON commands](../commands/theme/JSON) or [Web Areas](../FormObjects/webArea_overview.md).

The JSON form of JavaScript Date objects follows the ISO 8601 standard, for example "2013-08-23T00:00:00Z". It is your responsibility to convert this text into a 4D date. Two solutions are available:

Using the [`JSON Parse`](../commands/json-parse) command:

```4d
 var $dateIso : Text // reception of a date in ISO format
 var $date4D : Date 
 $date4D:=JSON Parse("\""+$dateIso+"\"";Is date))
```

Using the [`Date`](../commands/date) command:

```4d
 var $dateIso : Text // reception of a date in ISO format
 var $date4D : Date 
 $date4D:=Date($dateIso)
```

Note the difference between these two solutions: [`JSON Parse`](../commands/json-parse) respects the [conversion mode set using the `SET DATABASE PARAMETER`](../commands/set-database-parameter#dates-inside-objects-85) (if any), while [`Date`](../commands/date) is not subject to this. Conversion using the [`Date`](../commands/date) command always takes the local time zone into account.

:::note

When the current date storage setting is [`date type`](../commands/set-database-parameter#dates-inside-objects-85) (default), JSON date strings in "YYYY-MM-DD" format are automatically handled as date values by the [`JSON Parse`](../commands/json-parse) and [`Date`](../commands/date) commands.

:::
