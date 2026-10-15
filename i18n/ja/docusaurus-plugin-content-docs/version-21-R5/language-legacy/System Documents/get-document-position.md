---
id: get-document-position
title: Get document position
slug: /commands/get-document-position
displayed_sidebar: docs
---

<!--REF #_command_.Get document position.Syntax-->**Get document position** ( *DocRef* : Time ) : Real<!-- END REF-->
<!--REF #_command_.Get document position.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Time | Time | &#8594; | ドキュメント参照番号 |
| 戻り値 | Real | &#8592; | ドキュメント開始位置からの ファイル位置(バイト単位) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Get document position.Summary-->**Get document position** コマンドは、ドキュメントの先頭からの位置を返します。これは、次の読み込み ([RECEIVE PACKET](../commands/receive-packet)) または書き込み ([SEND PACKET](../commands/send-packet)) が行われる位置です。
<!-- END REF-->

このコマンドは、*docRef* に渡されたドキュメント参照番号を持つ、現在開いているドキュメントに対してのみ機能します。

## 参照 

[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  
[SET DOCUMENT POSITION](../commands/set-document-position)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 481 |
| スレッドセーフである | yes |


