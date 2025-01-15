---
id: sql-export-selection
title: SQL EXPORT SELECTION
slug: /commands/sql-export-selection
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXPORT SELECTION.Syntax-->**SQL EXPORT SELECTION** ( *aTable* ; *folderPath* {; *numFiles* {; *fileLimitSize* {; *fieldLimitSize*}}} )<!-- END REF-->
<!--REF #_command_.SQL EXPORT SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セレクションを書き出すテーブル |
| folderPath | Text | &#8594;  | 書き出しフォルダーのパス名、または"" でフォルダー選択ダイアログボックスを表示 |
| numFiles | Integer | &#8594;  | フォルダーごとの最大ファイル数 |
| fileLimitSize | Integer | &#8594;  | Export.sql ファイルの最大サイズ (KB) |
| fieldLimitSize | Integer | &#8594;  | この引数のサイズ以下のテキスト、Blob、ピクチャーフィールドの内容はメインのファイルに統合する (バイト単位) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SQL EXPORT SELECTION.Summary-->SQL EXPORT SELECTION コマンドは、aTable引数で指定した4DテーブルのカレントセレクションをSQLフォーマットで書き出します。<!-- END REF-->

このコマンドは[SQL EXPORT DATABASE](sql-export-database.md) コマンドとほぼ同様のものです。生成されたファイルは[SQL EXECUTE SCRIPT](sql-execute-script.md) コマンドで直接使用する事ができ、他の4Dデータベースへとデータを読み込むことができます。 SQL EXPORT SELECTION は*aTable* のカレントセレクションのみを書き出すのに対し、[SQL EXPORT DATABASE](sql-export-database.md) はデータベース全体を書き出します。また[SQL EXPORT DATABASE](sql-export-database.md) と異なり、 SQL EXPORT SELECTION は外部SQLデータベースでは動作しません。このコマンドはメインのデータベースでのみ使用できます。

これらのコマンドの動作と引数の説明については[SQL EXPORT DATABASE](sql-export-database.md) コマンドを参照してください。

カレントセレクションが空の場合、コマンドはなにも行いません。この場合、保存先フォルダは空にされないことに留意してください。

書き出しが正しく実行されるとOK 変数に1 が、そうでなければ0 が設定されます。 

##### 

**注:** このコマンドはオブジェクト型フィールドをサポートしません。

#### 参照 

[SQL EXPORT DATABASE](sql-export-database.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1064 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


