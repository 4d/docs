---
id: verify-current-data-file
title: VERIFY CURRENT DATA FILE
slug: /commands/verify-current-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY CURRENT DATA FILE.Syntax-->**VERIFY CURRENT DATA FILE** ({ *objects* : Integer ; *options* : Integer ; *method* : Text {; *tablesArray* : Integer array {; *fieldsArray* : Integer array}} })<!-- END REF-->
<!--REF #_command_.VERIFY CURRENT DATA FILE.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| objects | Integer | &#8594; | 検証するオブジェクト |
| options | Integer | &#8594; | 検証オプション |
| method | Text | &#8594; | 4Dコールバックメソッド名 |
| tablesArray | Integer array | &#8594; | 検証するテーブル番号 |
| fieldsArray | Integer array | &#8594; | 2D array, numbers of indexes to be checked |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|15 R3|変更|
|11 SQL Release 4|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.VERIFY CURRENT DATA FILE.Summary-->VERIFY CURRENT DATA FILEコマンドは、4Dが現在開いているデータファイル中にあるオブジェクトの、構造的な検証を行います。<!-- END REF-->

このコマンドは、開かれたデータベースのカレントのデータファイルのみに適用されることを除き、[VERIFY DATA FILE](../commands/verify-data-file)コマンドと同じ機能を持ちます。そのため、ストラクチャとデータを指定する引数は必要ありません。  
引数の説明は[VERIFY DATA FILE](../commands/verify-data-file)コマンドを参照してください。

VERIFY CURRENT DATA FILEコマンドを引数なしで呼び出すと、デフォルトの設定値を使用して検証が行われます:

* *objects* \= Verify All (= 値 16)
* *options* \= 0 (ログファイルを作成するがタイムスタンプは押さない)
* *method* \= ""
* *tablesArray*と*fieldsArray*は省略される.

このコマンドが実行されると、データキャッシュがフラッシュされ、検証中はデータにアクセスするすべての操作がブロックされます。

ログファイルが生成されていた場合、その完全パス名がDocumentシステム変数へと返されます。

## システム変数およびセット 

検証が行われない場合、エラーが発生し、システム変数OKが0に設定されます。ログファイルが生成された場合、その完全なパス名がDocumentシステム変数に返されます。

## 参照 

[VERIFY DATA FILE](../commands/verify-data-file)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1008 |
| スレッドセーフである | yes |
| システム変数を更新する | OK、Document、error |


