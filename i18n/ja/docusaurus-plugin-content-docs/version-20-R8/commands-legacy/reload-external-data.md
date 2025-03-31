---
id: reload-external-data
title: RELOAD EXTERNAL DATA
slug: /commands/reload-external-data
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD EXTERNAL DATA.Syntax-->**RELOAD EXTERNAL DATA** ( *aField* )<!-- END REF-->
<!--REF #_command_.RELOAD EXTERNAL DATA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Text, Blob, Picture, Object | &#8594;  | 外部ストレージからリロードを行うフィールド |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RELOAD EXTERNAL DATA.Summary-->**RELOAD EXTERNAL DATA**コマンドはBLOB、ピクチャー、およびテキスト型フィールドに割り当てられた外部ストレージの内容をメモリにリロードします。<!-- END REF-->

このコマンドは、フィールドデータがディスクファイルからメモリにロードされているとき、他のアプリケーションによってディスクファイルが更新されたような 場合に使用します (外部ストレージファイルは常に書き込み可能です)。例えばピクチャーフィールドに称されるピクチャーは、ピクチャーエディターで更新し保存することが可 能です。

このような場合において、フォーム上にフィールドが表示されている場合、その内容を再描画するために**RELOAD EXTERNAL DATA**コマンドを使用してデータを再読み込みしなければなりません。

**注:** **RELOAD EXTERNAL DATA**コ マンドは4Dローカルモードおよび4D Server上でのみ動作します。4Dリモートモードで個々にフィールドをリロードすることはできません。4Dリモートモードの場合 (例えば[LOAD RECORD](load-record.md)コマンドを使用して) レコード全体をリロードしなければなりません。

#### 参照 

[SET EXTERNAL DATA PATH](set-external-data-path.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1135 |
| スレッドセーフである | &check; |


