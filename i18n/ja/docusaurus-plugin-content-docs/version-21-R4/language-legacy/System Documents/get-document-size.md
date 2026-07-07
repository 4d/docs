---
id: get-document-size
title: Get document size
slug: /commands/get-document-size
displayed_sidebar: docs
---

<!--REF #_command_.Get document size.Syntax-->**Get document size** ( *document* : Text, Time {; *} ) : Real<!-- END REF-->
<!--REF #_command_.Get document size.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text, Time | &#8594; | ドキュメント参照番号 または、ドキュメントの名前 |
| * | 演算子 | &#8594; | Mac OSのみ: 省略した場合、データフォークのサイズ 指定した場合、リソースフォークのサイズ |
| 戻り値 | Real | &#8592; | ドキュメントのサイズ(バイト単位) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL Release 3|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Get document size.Summary-->Get document sizeコマンドは、ドキュメントのサイズをバイト単位で表示して返します。<!-- END REF-->

ドキュメントを開いている場合、そのドキュメント参照番号を*document*に渡します。  
ドキュメントを開いていない場合、その名前またはパス名*document*に渡します。

Macintoshでは、任意の引数 *\** を渡さない場合、データフォークのサイズが返されます。 引数 *\** を渡すと、リソースフォークのサイズが返されます。

## 参照 

[Get document position](../commands/get-document-position)  
[SET DOCUMENT POSITION](../commands/set-document-position)  
[SET DOCUMENT SIZE](../commands/set-document-size)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 479 |
| スレッドセーフである | yes |
| システム変数を更新する | error |


