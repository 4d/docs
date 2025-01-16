---
id: object-get-events
title: OBJECT GET EVENTS
slug: /commands/object-get-events
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET EVENTS.Syntax-->**OBJECT GET EVENTS** ( {* ;} *object* ; *arrEvents* )<!-- END REF-->
<!--REF #_command_.OBJECT GET EVENTS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| arrEvents | Integer array | &#8592; | Array of enabled events |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT GET EVENTS.Summary-->**OBJECT GET EVENTS**コマンドは、引数 *object* と *\** で指定したオブジェクトの、フォームイベントのカレントの設定を取得します。<!-- END REF-->

フォームイベントはプロパティリストを通して有効化/無効化することができます。また、同一のプロセスにおいてなら [OBJECT SET EVENTS](object-set-events.md) コマンドを使用して設定することも可能です。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。  
フォーム自体のイベントの設定を取得したい場合は、任意の *\** 演算子を渡したうえで、 *object* 引数に空の文字列 "" を渡します。こうすることでカレントフォームをこれで指定します。

**注:** テーブルに関連付けられたサブフォームのイベントを取得したい場合、オブジェクト名を使用する記法しか使用できません。

*arrEvents* 引数には、倍長整数配列を渡します。この配列はコマンドが実行されたときに自動的にリサイズされ、オブジェクトまたはフォームの中で有効化されている、定義済みのイベントかカスタムイベントのコードを全て受け取ります。この値と対応する定数は "*Form Events*" テーマ内にあります。

オブジェクトまたはフォームに対してメソッドが何も関連付けられていない場合は、 *arrEvents* は空で返される点に注意して下さい。

#### 例題 

イベントを2つ有効化して、オブジェクトのイベントのリストを取得したい場合:

```4d
 ARRAY LONGINT($ArrCurrentEvents;0)
 ARRAY LONGINT($ArrEnabled;2)
 $ArrEnabled{1}:=On Header Click
 $ArrEnabled{2}:=On Footer Click
 OBJECT SET EVENTS(*;"Col1";$ArrEnabled;Enable events others unchanged)
 OBJECT GET EVENTS(*;"Col1";$ArrCurrentEvents)
```

#### 参照 

[OBJECT SET EVENTS](object-set-events.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1238 |
| スレッドセーフである | &cross; |


