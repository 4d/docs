---
id: folder
title: Folder
slug: /commands/folder
displayed_sidebar: docs
---

<!--REF #_command_.Folder.Syntax-->**Folder** ( path | 4Dfolder {; pathType | *} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Folder.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path &#124; 4Dfolder | テキスト, 倍長整数 | &#x1F852; | フォルダパスまたは4Dフォルダ定数 |
| pathType &#124; * | 倍長整数, 演算子 | &#x1F852; | path 指定時: fk posix path (デフォルト) または fk platform path<br/>4Dfolder 指定時: ホストデータベースのファイルを返すには* を渡す |
| 戻り値 | オブジェクト | &#x1F850; | 新規フォルダオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Folder.Summary-->**ドキュメンテーションは移動しました**

このコマンドのドキュメンテーションは移動しました。<!-- END REF-->更新されたドキュメンテーションに関しては [developer.4d.com の **Folder** コマンド](https://developer.4d.com/docs/ja/API/FolderClass/#folder) を参照して下さい。

**Folder** コマンドは、Folder 型の新しいオブジェクトを作成して返します。

#### 参照 

[File](file.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  