---
id: sql-execute-script
title: SQL EXECUTE SCRIPT
slug: /commands/sql-execute-script
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXECUTE SCRIPT.Syntax-->**SQL EXECUTE SCRIPT** ( *scriptPath* ; *errorAction* {; *attribName* ; *attribValue*} {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.SQL EXECUTE SCRIPT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| scriptPath | Text | &#8594;  | 実行するSQLスクリプトが書かれたファイルの完全パス名 |
| errorAction | Integer | &#8594;  | スクリプト実行中にエラーが発生した場合のアクション |
| attribName | Text | &#8594;  | 使用する属性の名前 |
| attribValue | Text | &#8594;  | 属性の値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SQL EXECUTE SCRIPT.Summary-->SQL EXECUTE SCRIPTコマンドを使用して、*scriptPath*で指定されたスクリプトファイルに書かれた一連のSQLステートメントを実行できます。<!-- END REF-->このコマンドはローカルマシン (ローカルの4Dまたは4D Server上のストアドプロシージャ) でのみ実行できます。またこのコマンドはカレントデータベース (内部あるいはエクスターナルデータベース) に対して動作します。

**Note**: このコマンドは直接あるいはODBC経由で開かれた外部接続では使用できません。

*scriptPath*引数には実行するSQL文が書かれたテキストファイルの完全パス名を渡します。パス名は現在のシステムのシンタックスを使用して表現されなければなりません。*scriptPath*に空の文字列 ("") を渡すと、標準のファイルを開くダイアログボックスが表示され、実行するファイルをユーザが選択できます。

**Note**: [SQL EXPORT DATABASE](sql-export-database.md "SQL EXPORT DATABASE")と[SQL EXPORT SELECTION](sql-export-selection.md "SQL EXPORT SELECTION")コマンドは自動でこのスクリプトファイルを作成します。

*errorAction* 引数を使用して、スクリプト実行中にエラーが発生した場合の動作を設定できます。""テーマ中の以下の3つの定数を使用できます:

| 定数                    | 型    | 値 | コメント                                                          |
| --------------------- | ---- | - | ------------------------------------------------------------- |
| SQL On error abort    | 倍長整数 | 1 | エラーイベント時、4Dは即座にスクリプト実行を停止します。                                 |
| SQL On error confirm  | 倍長整数 | 2 | エラーイベント時、4Dはエラーを説明するダイアログを表示し、スクリプト実行を停止するか続行するかをユーザーが選択できます。 |
| SQL On error continue | 倍長整数 | 3 | エラーイベント時、4Dはそれを無視し、スクリプトの実行を続行します。                            |

*attribName*と*attribValue*引数は組で渡さなければなりません。これらの引数はスクリプト実行のための特定の属性として使用されることを意図しています。現在のバージョンの4D では、一つの属性を*attribName*に渡せます。""テーマの以下の定数を使用できます:

| 定数                    | 型   | 値                        | コメント                                                                                                                                                                                                |
| --------------------- | --- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL use access rights | 文字列 | SQL\_Use\_Access\_Rights | スクリプトのSQLコマンドの実行中に適用されるアクセス権を制限するために使用します。この属性を使用する場合、attribValueには1または0を渡します:<br/>attribValue = 1: 4Dはカレントユーザーのアクセス権を使用します。attribValue = 0 (または属性を指定しない場合): 4Dはアクセスを制限しません。デザイナー権限が使用されます。 |

([SET DATABASE PARAMETER](set-database-parameter.md "SET DATABASE PARAMETER")のセレクター28や45で) 4Dログファイルが有効にされていると、SQLコマンドが実行されるごとに以下の情報が書き込まれます:

* SQLコマンドのタイプ
* コマンドの影響を受けるレコード数
* コマンドの実行時間
* エラーを検知するごとに:  
   * エラーコード  
   * 可能であればエラーテキスト

スクリプトが (エラーなく) 正しく実行されると、OK変数に1が設定されます。エラーが発生した場合、OKシステム変数に0が設定されるか、または*errorAction*引数に設定に基づき: 

* *errorAction* がSQL On error abort (値1) の場合、OKは0に設定されます。
* *errorAction*がSQL On error confirm (値2) の場合、ユーザが処理を中断するとOKに0が、続行を選択すると1が設定されます。
* *errorAction*がSQL On error continue (値3) の場合、OKは常に1が設定されます。

**Note:** 大量のデータ読み込みなど、メモリを消費するアクションを実行するためにこのコマンドを使用する場合、一時的にSQLオプションを無効にするために新しいSQLのALTER DATABASEコマンドの実行を検討できます。
