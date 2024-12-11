---
id: picture-codec-list
title: PICTURE CODEC LIST
slug: /commands/picture-codec-list
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE CODEC LIST.Syntax-->**PICTURE CODEC LIST** ( *codecArray* {; *namesArray*}{; *} )<!-- END REF-->
<!--REF #_command_.PICTURE CODEC LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| codecArray | Text array | &#8592; | 利用可能なピクチャCodecのID |
| namesArray | Text array | &#8592; | ピクチャCodecの名前 |
| * | 演算子 | &#8594;  | 読み込み (デコード) CODECのリストを返す |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PICTURE CODEC LIST.Summary-->PICTURE CODEC LIST コマンドは、コマンドが実行されたマシンで利用可能なピクチャCodec IDのリストを*codecArray* 配列に返します。<!-- END REF-->このリストは4Dがネイティブで管理するCodec IDを含みます。

Codec IDは以下の異なるフォーマットで*codecArray* 配列に返されます:

* 拡張子 (例: “.gif”)
* MIME タイプ (例: “image/jpeg”)

**互換性に関する注意:** QuickTimeがデータベース内で有効になっている場合(*ピクチャ* を参照)、4文字の QuickTimeコードが返されることもあります (例: “PNTG”)。

コマンドから返されるフォーマットは、CodecがOSレベルに記録された方法に基づきます。オプションの*namesArray* 配列を使用してそれぞれのCodecの名称を取得できます。この名称はIDよりも明確です。この配列は例えば利用可能なCodecのメニューリストを作成するために使用できます。

*\** 引数を渡さないとデフォルトでコマンドはピクチャをエンコード (書き込み) するために使用できるCODECのみを返します。これらのIDはピクチャ書き出しコマンド [WRITE PICTURE FILE](write-picture-file.md) や [PICTURE TO BLOB](picture-to-blob.md) の*format* 引数で使用できます。  
*\** 引数を渡すと、コマンドはピクチャのデコード (読み込み) に使用するCODECも返します。2つのリストは排他的ではありません。特定の読み込みおよび書き込みCODECは同じです。ピクチャのエンコードを意図 するCODECは通常デコードに使用されます。他方デコード用のCODECは必ずしもエンコードに使用できるとは限りません。例えば".jpg" CODECは両方のリストにありますが、".xbmp"CODECは読み込み (デコード) CODECにしかありません。

#### 参照 

[Is picture file](is-picture-file.md)  
*ピクチャ*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 992 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


