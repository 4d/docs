---
id: wa-zoom-in
title: WA ZOOM IN
slug: /commands/wa-zoom-in
displayed_sidebar: docs
---

<!--REF #_command_.WA ZOOM IN.Syntax-->**WA ZOOM IN** ( * ; *object* : Text )<br/>**WA ZOOM IN** ( *object* : Variable, Field )<!-- END REF-->
<!--REF #_command_.WA ZOOM IN.Params-->
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

<!--REF #_command_.WA ZOOM IN.Summary-->WA ZOOM IN コマンドは、*\** と *object* 引数で指定したWebエリアに表示されているテキストのサイズを大きくします。<!-- END REF-->

macOS では、このコマンドのスコープは4D セッションとなります。このコマンドにより実行される設定は、4D アプリケーション終了後は引き継がれません。

Windows では、このコマンドのスコープはグローバルです。4D アプリケーション終了後も設定が引き継がれます。

## 参照 

[WA ZOOM OUT](../commands/wa-zoom-out)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1039 |
| スレッドセーフである | no |


