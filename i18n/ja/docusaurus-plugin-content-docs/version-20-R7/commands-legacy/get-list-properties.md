---
id: get-list-properties
title: GET LIST PROPERTIES
slug: /commands/get-list-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST PROPERTIES.Syntax-->**GET LIST PROPERTIES** ( *list* ; *appearance* {; *icon* {; *lineHeight* {; *doubleClick* {; *multiSelections* {; *editable*}}}}} )<!-- END REF-->
<!--REF #_command_.GET LIST PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | リスト参照番号 |
| appearance | Integer | &#8592; | リストの描画スタイル 1 = Macスタイル 2 = Windowsスタイル |
| icon | Integer | &#8592; | *** 廃止予定、常に0を返します *** |
| lineHeight | Integer | &#8592; | 行の最小高さ (ピクセル単位) |
| doubleClick | Integer | &#8592; | ダブルクリックでサブリストを展開/折り畳み 0 = Yes, 1= No |
| multiSelections | Integer | &#8592; | 複数行選択: 0 = No, 1 = Yes |
| editable | Integer | &#8592; | ユーザによる更新可: 0 = No, 1 = Yes |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET LIST PROPERTIES.Summary-->**GET LIST PROPERTIES** コマンドは、*list*で指定された参照番号を持つ階層リストについての情報を返します。<!-- END REF--> 

引数 *appearance*は、リストの表示形式を返します。

引数 *icon*は、廃止予定の引数で、常に0を返します。

引数 *lineHeight*は、行の高さの最小値を返します。

引数 *doubleClick*が1に設定されている場合、親リスト項目をダブルクリックしても子リストが開いたり閉じたりしません。0に設定されているときは開閉の動作をします（デフォルト値）。

引数 *multiSelections*に0が代入された場合、そのリストにおいてリスト項目を複数選択することは(手動でもプログラムからでも)できません。1が代入された場合は、複数項目を選択することができます。

引数 *editable*に1が代入された場合、レコードの選択リストとして表示されると、そのリストは編集可能になります。0が代入された場合、リストを編集することはできません。

これらのプロパティは、[SET LIST PROPERTIES](set-list-properties.md) コマンドおよび、リストがデザインモードのリストエディタで作成された場合、または[SAVE LIST](save-list.md) コマンドを使用して保存された場合は、リストエディタで設定することができます。

リストの表示様式、ノードアイコン、行の高さの最小値、およびダブルクリックの管理についての詳細は、[SET LIST PROPERTIES](set-list-properties.md) コマンドを参照してください。

#### 参照 

[SET LIST PROPERTIES](set-list-properties.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 632 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


