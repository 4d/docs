---
id: get-restore-information
title: GET RESTORE INFORMATION
slug: /commands/get-restore-information
displayed_sidebar: docs
---

<!--REF #_command_.GET RESTORE INFORMATION.Syntax-->**GET RESTORE INFORMATION** ( *selector* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.GET RESTORE INFORMATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| selector | 倍長整数 | &#x1F852; | 取得する情報のタイプ |
| info1 | 倍長整数, 日付 | &#x1F858; | セレクタの値1 |
| info2 | 文字, 時間 | &#x1F858; | セレクタの値2 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET RESTORE INFORMATION.Summary-->GET RESTORE INFORMATIONコマンドを使用し、前回のデータベース自動復元に関連する情報を取得できます。<!-- END REF-->

*selector*には取得する情報タイプを渡します。この引数の値として、“”テーマ内の定数を使用できます:

| 定数                  | 型    | 値 |
| ------------------- | ---- | - |
| Last restore date   | 倍長整数 | 0 |
| Last restore status | 倍長整数 | 2 |

*info1*と*info2*の型および内容は、*selector*の値によって決まります。

* *selector* \= 0 (Last Restore Date)：前回の自動復元の、*info1*に日付、*info2*に時間が返されます。
* *selector* \= 2 (Last Restore Status)：前回の自動復元の、*info1*にステータス番号、*info2*にそのテキストが返されます。

**Note:** このコマンドは手動でのデータベース復元は対象外となります。

#### 参照 

[RESTORE](restore.md)  