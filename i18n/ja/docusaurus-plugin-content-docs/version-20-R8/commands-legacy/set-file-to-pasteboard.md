---
id: set-file-to-pasteboard
title: SET FILE TO PASTEBOARD
slug: /commands/set-file-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET FILE TO PASTEBOARD.Syntax-->**SET FILE TO PASTEBOARD** ( *filePath* {; *} )<!-- END REF-->
<!--REF #_command_.SET FILE TO PASTEBOARD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| filePath | Text | &#8594;  | ファイルの完全パス名 |
| * | 演算子 | &#8594;  | 指定時: 追加、省略時: 置換 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET FILE TO PASTEBOARD.Summary-->SET FILE TO PASTEBOARD コマンドは*filePath* 引数に渡した完全パス名を追加します。<!-- END REF-->このコマンドは例えば、4Dオブジェクトをデスクトップ上のファイルにドラッグ＆ドロップさせるインタフェースのセットアップに使用できます。

*filePath*引数には完全パス名または単に (パス名なしの) ファイル名を渡すことができます。後者の場合、ファイルはストラクチャファイルと同階層になければなりません。

コマンドはアスタリスク *\** をオプションの引数として受け入れます。この引数が省略されるとデフォルトで、コマンドはペーストボードの内容を*filePath*で指定された最後のパス名で置き換えます。この引数を渡すと、コマンドは*filePath*をペーストボードに追加します。この方法で、パス名のスタックをペーストボードに格納できます。両ケースで、ペーストボード内にパス名以外のデータが存在すると、それは消去されます。

**Note:** On Drag Over フォームイベント中ペーストボードは読み込みのみモードです。このコンテキストではこのコマンドは使用できません。

#### 参照 

[Get file from pasteboard](get-file-from-pasteboard.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 975 |
| スレッドセーフである | &cross; |


