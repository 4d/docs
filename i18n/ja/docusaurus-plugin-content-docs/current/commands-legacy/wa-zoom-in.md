---
id: wa-zoom-in
title: WA ZOOM IN
slug: /commands/wa-zoom-in
displayed_sidebar: docs
---

<!--REF #_command_.WA ZOOM IN.Syntax-->**WA ZOOM IN** ( {* ;} *object* )<!-- END REF-->
<!--REF #_command_.WA ZOOM IN.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA ZOOM IN.Summary-->WA ZOOM IN コマンドは、*\** と *object* 引数で指定したWebエリアに表示されているテキストのサイズを大きくします。<!-- END REF-->

macOS では、このコマンドのスコープは4D セッションとなります。このコマンドにより実行される設定は、4D アプリケーション終了後は引き継がれません。

Windows では、このコマンドのスコープはグローバルです。4D アプリケーション終了後も設定が引き継がれます。

#### 参照 

[WA ZOOM OUT](wa-zoom-out.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1039 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


