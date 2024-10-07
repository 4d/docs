---
id: zip-create-archive
title: ZIP Create archive
slug: /commands/zip-create-archive
displayed_sidebar: docs
---

<!--REF #_command_.ZIP Create archive.Syntax-->**ZIP Create archive** ( fileOrFolder | zipStructure  ; *destinationFile* {; *options*} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.ZIP Create archive.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fileOrFolder &#124; zipStructure | オブジェクト | &#x1F852; | 圧縮するファイル/フォルダーオブジェクト |
| destinationFile | Object | &#x1F852; | アーカイブの保存先ファイル |
| options | Integer | &#x1F852; | fileOrFolder 引数が使用された場合のみ: 外側のフォルダーを除外してZIP圧縮を行う |
| 戻り値 | Object | &#x1F850; | ステータスオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ZIP Create archive.Summary-->**ドキュメンテーションは移動しました**

このコマンドのドキュメンテーションは移動しました。<!-- END REF-->更新されたドキュメンテーションを見るには[developer.4d.com 上の**ZIP Create archive** コマンドのページ](https://developer.4d.com/docs/ja/API/ZipArchiveClass/#zip-create-archive) を参照してください。

**ZIP Create archive** コマンドは、圧縮されたZIP アーカイブオブジェクトを作成し、その操作のステータスを返します。

#### 参照 

[ZIP Read archive](zip-read-archive.md)  