---
id: file
title: File
slug: /commands/file
displayed_sidebar: docs
---

<!--REF #_command_.File.Syntax-->**File** ( path | 4Dfile {; pathType | *} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.File.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path &#124; 4Dfile | テキスト, 倍長整数 | &#x1F852; | ファイルパスまたは4Dファイル定数 |
| pathType &#124; * | 倍長整数, 演算子 | &#x1F852; | path 指定時: fk posix path (デフォルト) または fk platform path<br/>4Dfile 指定時: ホストデータベースのファイルを返すには* を渡す |
| 戻り値 | オブジェクト | &#x1F850; | 新規ファイルオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.File.Summary-->**ドキュメンテーションは移動しました**

このコマンドのドキュメンテーションは移動しました。<!-- END REF-->更新されたドキュメンテーションに関しては [developer.4d.com の**File** コマンド](https://developer.4d.com/docs/ja/API/FileClass/#file) を参照して下さい。

**File** コマンドは*File* 型の新しいオブジェクトを作成して返します。

#### 参照 

[Folder](folder.md)  
[Get 4D file](get-4d-file.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  