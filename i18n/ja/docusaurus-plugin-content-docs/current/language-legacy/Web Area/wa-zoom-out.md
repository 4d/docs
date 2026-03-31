---
id: wa-zoom-out
title: WA ZOOM OUT
slug: /commands/wa-zoom-out
displayed_sidebar: docs
---

<!--REF #_command_.WA ZOOM OUT.Syntax-->**WA ZOOM OUT** ( * ; *object* : Text )<br/>**WA ZOOM OUT** ( *object* : Variable, Field )<!-- END REF-->
<!--REF #_command_.WA ZOOM OUT.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|19 R5|名称変更|
|11 SQL Release 2|初出|

</details>
</div>

## 説明 

<!--REF #_command_.WA ZOOM OUT.Summary-->WA ZOOM OUT コマンドは、*\** と *object* 引数で指定したWebエリアに表示されているテキストのサイズを小さくします。<!-- END REF-->

macOS では、このコマンドのスコープは4D セッションとなります。このコマンドにより実行される設定は、4D アプリケーション終了後は引き継がれません。

Windows では、このコマンドのスコープはグローバルです。4D アプリケーション終了後も設定が引き継がれます。

## 参照 

[WA ZOOM IN](../commands/wa-zoom-in)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1040 |
| スレッドセーフである | no |


