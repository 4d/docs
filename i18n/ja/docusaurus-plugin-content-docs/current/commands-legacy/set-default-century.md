---
id: set-default-century
title: SET DEFAULT CENTURY
slug: /commands/set-default-century
displayed_sidebar: docs
---

<!--REF #_command_.SET DEFAULT CENTURY.Syntax-->**SET DEFAULT CENTURY** ( *century* {; *pivotYear*} )<!-- END REF-->
<!--REF #_command_.SET DEFAULT CENTURY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| century | Integer | &#8594;  | 2桁の年数が入力された場合の デフォルト世紀 (マイナス1) |
| pivotYear | Integer | &#8594;  | 2桁の年で日付が入力された時の区切り年 |

<!-- END REF-->

## 説明 

<!--REF #_command_.SET DEFAULT CENTURY.Summary-->SET DEFAULT CENTURY コマンドは、2桁の年で日付を入力した際に4Dが使用する、デフォルトの世紀と区切り年を指定するために使用します。<!-- END REF-->

区切り年の値は、2桁の年が入力された際に、4Dがどのように日付を解釈するかを定義します:

* 年が区切り年以上の場合、4Dはデフォルト世紀を使用します。
* 年が区切り年未満の場合、4Dは次の世紀を使用します。

デフォルトで、4Dは世紀が20世紀であるとし、区切り年に30を使用します。例えば:

* 97/01/25 は1997年1月25日を意味します。
* 30/01/25 は1930年1月25日を意味します。
* 29/01/25 は2029年1月25日を意味します。
* 07/01/25 は2007年1月25日を意味します。

デフォルトを変更するには、 コマンドを実行します。コマンドは即座に効果を持ちます。新しいデフォルト世紀のみ、または新しいデフォルト世紀と区切り年を渡すことができます。

新しいデフォルト世紀マイナス1を*century*に渡すと、4Dは2桁で入力された日付がこの世紀に属するものとして解釈します。  
例えば:

```4d
 SET DEFAULT CENTURY(20) // 21世紀をデフォルト世紀とする
```

* 97/01/25 は2097年1月25日を意味します。
* 07/01/25 は2007年1月25日を意味します。

さらに、オプションで*pivotYear* 引数を指定できます。  
例えば、以下のように呼び出すと、区切り年は1995になります:

```4d
 SET DEFAULT CENTURY(19;95) // 年が95未満の場合のデフォルト世紀を21世紀とする
```

* 97/01/25 は1997年1月25日を意味します。
* 07/01/25 は2007年1月25日を意味します。

**Note:** このコマンドは、2桁の年で日付が入力された際の4Dの日付の解釈にのみ影響します。  
以下のようなケースでは:

* 1997/01/25 は1997年1月25日を意味します。
* 2097/01/25 は2097年1月25日を意味します。
* 1907/01/25 は1907年1月25日を意味します。
* 2007/01/25 は2007年1月25日を意味します。

このコマンドはデータ入力にのみ影響します。日付の格納や計算には影響しません。


## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 392 |
| スレッドセーフである | &check; |


