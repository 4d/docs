---
id: get-system-format
title: GET SYSTEM FORMAT
slug: /commands/get-system-format
displayed_sidebar: docs
---

<!--REF #_command_.GET SYSTEM FORMAT.Syntax-->**GET SYSTEM FORMAT** ( *format* ; *value* )<!-- END REF-->
<!--REF #_command_.GET SYSTEM FORMAT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| format | Integer | &#8594;  | 取得するシステムフォーマット |
| value | Text | &#8592; | システムで定義されるフォーマットの値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET SYSTEM FORMAT.Summary-->GET SYSTEM FORMATコマンドは、オペレーティングシステムで定義されている幾つかの領域のパラメタのカレント値を返します。<!-- END REF-->このコマンドを使用して、システムの環境設定に基づいた"自動" カスタムフォーマットを作成できます。

引数*format* には、値を知りたい引数のタイプを渡します。システムは、結果を文字列として引数*value*に直接返します。*format*には、“” テーマの以下定数の中から一つを必ず渡します。これらの定数の説明は次のとおりです。 

| 定数                         | 型    | 値  | コメント                                        |
| -------------------------- | ---- | -- | ------------------------------------------- |
| Currency symbol            | 倍長整数 | 2  | 通貨記号 (例: “￥”)                               |
| Date separator             | 倍長整数 | 13 | 日付フォーマットの区切り文字 (例: “/”)                     |
| Decimal separator          | 倍長整数 | 0  | 小数区切り文字 (例: “.”)                            |
| Short date day position    | 倍長整数 | 15 | 短日付フォーマットでの日の位置: “1” = 左, “2” = 中央, “3” = 右 |
| Short date month position  | 倍長整数 | 16 | 短日付フォーマットでの月の位置: “1” = 左, “2” = 中央, “3” = 右 |
| Short date year position   | 倍長整数 | 17 | 短日付フォーマットでの年の位置: “1” = 左, “2” = 中央, “3” = 右 |
| System date long pattern   | 倍長整数 | 8  | “dddd MMMM yyyy”形式に対応する長日付表示フォーマット          |
| System date medium pattern | 倍長整数 | 7  | “dddd MMMM yyyy”形式に対応する日付表示フォーマット           |
| System date short pattern  | 倍長整数 | 6  | “dddd d MMMM yyyy”形式に対応する日付表示フォーマット         |
| System time AM label       | 倍長整数 | 18 | 12時間フォーマット時に午前を示すラベル                        |
| System time long pattern   | 倍長整数 | 5  | “HH:MM:SS”形式に対応する長時間表示フォーマット                |
| System time medium pattern | 倍長整数 | 4  | “HH:MM:SS”形式に対応する時間表示フォーマット                 |
| System time PM label       | 倍長整数 | 19 | 12時間フォーマット時に午後を示すラベル                        |
| System time short pattern  | 倍長整数 | 3  | “HH:MM:SS”形式に対応する時間表示フォーマット                 |
| Thousand separator         | 倍長整数 | 1  | 千の位区切り文字 (例: “,”)                           |
| Time separator             | 倍長整数 | 14 | 時間フォーマットの区切り文字 (例: “:”)                     |

#### 参照 

[OBJECT SET FORMAT](object-set-format.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 994 |
| スレッドセーフである | &check; |


