---
id: method-set-access-mode
title: METHOD SET ACCESS MODE
slug: /commands/method-set-access-mode
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ACCESS MODE.Syntax-->**METHOD SET ACCESS MODE** ( *mode* )<!-- END REF-->
<!--REF #_command_.METHOD SET ACCESS MODE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| mode | Integer | &#8594;  | ロックされたオブジェクトのアクセスモード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.METHOD SET ACCESS MODE.Summary-->**METHOD SET ACCESS MODE**コマンドは他のユーザーやプロセスによって更新のためにさきにロードされているオブジェクトに書き込みアクセスを行おうとした時の振る舞いを設定します。<!-- END REF-->このコマンドのスコープはカレントセッションです。

*mode*引数には*Design Object Access*テーマの以下の定数を渡します:

| 定数                       | 型    | 値 | コメント                                                                        |
| ------------------------ | ---- | - | --------------------------------------------------------------------------- |
| On object locked abort   | 倍長整数 | 0 | オブジェクトのロードが中断された (デフォルト動作)                                                  |
| On object locked confirm | 倍長整数 | 2 | 再試行するか中断するか選択できるようにするためダイアログを表示します。リモートモードではこのオプションはサポートされません (ロードは中断されます)。 |
| On object locked retry   | 倍長整数 | 1 | オブジェクトがリリースされるまでオブジェクトのロードを試行します。                                           |


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1191 |
| スレッドセーフである | &cross; |


