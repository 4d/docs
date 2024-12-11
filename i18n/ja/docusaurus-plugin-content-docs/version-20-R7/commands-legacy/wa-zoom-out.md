---
id: wa-zoom-out
title: WA ZOOM OUT
slug: /commands/wa-zoom-out
displayed_sidebar: docs
---

<!--REF #_command_.WA ZOOM OUT.Syntax-->**WA ZOOM OUT** ( {* ;} *object* )<!-- END REF-->
<!--REF #_command_.WA ZOOM OUT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA ZOOM OUT.Summary-->WA ZOOM OUT コマンドは、*\** と *object* 引数で指定したWebエリアに表示されているテキストのサイズを小さくします。<!-- END REF-->

macOS では、このコマンドのスコープは4D セッションとなります。このコマンドにより実行される設定は、4D アプリケーション終了後は引き継がれません。

Windows では、このコマンドのスコープはグローバルです。4D アプリケーション終了後も設定が引き継がれます。

#### 参照 

[WA ZOOM IN](wa-zoom-in.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1040 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


