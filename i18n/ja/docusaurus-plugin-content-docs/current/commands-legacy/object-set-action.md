---
id: object-set-action
title: OBJECT SET ACTION
slug: /commands/object-set-action
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ACTION.Syntax-->**OBJECT SET ACTION** ( {* ;} *object* ; *action* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ACTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| action | Text | &#8594;  | 関連付けるアクション |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET ACTION.Summary-->**OBJECT SET ACTION**コマンドは、引数 *object* と *\** で指定したオブジェクトと関連付けられた標準アクションを、カレントプロセスにおいて変更します。<!-- END REF-->

**注:** 標準アクションはデザインモードからプロパティリストを使用することによってセッションに対して設定することも可能です(*デザインリファレンス* マニュアルの*標準アクション*を参照してください)。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。この場合、文字列ではなくフィールドあるいは変数参照を渡します(フィールドあるいは変数オブジェクトのみ)。

*action* 引数には、オブジェクトと関連付けたい標準アクションを表すコードを文字列で渡します。またオプションとしてアクションは引数を受け取ることができます。アクション名についての詳細については、*4Dデザインリファレンス* マニュアルの*標準アクション*を参照してください。また、"*標準アクション*"テーマ内にある以下の定数のうちの一つを渡すこともできます:

| 定数                               | 値                  | コメント                                                 |
| -------------------------------- | ------------------ | ---------------------------------------------------- |
| \_o\_Object Open next URL action | 38                 |                                                      |
| \_o\_Object Paste action         | 20                 |                                                      |
| ak accept                        | accept             |                                                      |
| ak add subrecord                 | addSubrecord       |                                                      |
| ak automatic splitter            | automaticSplitter  |                                                      |
| ak cancel                        | cancel             |                                                      |
| ak clear                         | clear              | このアクションのターゲットは常にキーボードのフォーカスが入っているオブジェクトです。           |
| ak compute expressions           | computeExpressions | エリア内の全ての動的な式を更新します。                                  |
| ak copy                          | copy               | このアクションのターゲットは常にキーボードのフォーカスが入っているオブジェクトです。           |
| ak cut                           | cut                | このアクションのターゲットは常にキーボードのフォーカスが入っているオブジェクトです。           |
| ak database settings             | databaseSettings   | 標準のデータベース設定ダイアログボックスを表示します。                          |
| ak delete record                 | deleteRecord       |                                                      |
| ak delete subrecord              | deleteSubrecord    |                                                      |
| ak display subrecord             | displaySubrecord   |                                                      |
| ak edit subrecord                | editSubrecord      |                                                      |
| ak first page                    | firstPage          |                                                      |
| ak first record                  | firstRecord        |                                                      |
| ak font bold                     | fontBold           | 太字フォント属性を切り替えます。                                     |
| ak font color dialog             | color/showDialog   | システムフォントカラーダイアログボックスを表示します。                          |
| ak font italic                   | fontItalic         | イタリックフォント属性を切り替えます。                                  |
| ak font linethrough              | fontLinethrough    | 打ち消し線フォント属性を切り替えます。                                  |
| ak font show dialog              | font/showDialog    | システムフォントカラーピッカーダイアログボックスを表示します。                      |
| ak font style                    | fontStyle          | 標準のフォントスタイルサブメニューを表示します。                             |
| ak font underline                | fontUnderline      | 下線フォント属性を切り替えます。                                     |
| ak freeze expressions            | freezeExpressions  | エリア内の全ての動的な式を評価します。                                  |
| ak goto page                     | gotoPage           | 引数: "?value=pageNumber"                              |
| ak last page                     | lastPage           |                                                      |
| ak last record                   | lastRecord         |                                                      |
| ak msc                           | msc                | *Maintenance & Security Center* ウィンドウを表示します。         |
| ak next page                     | nextPage           |                                                      |
| ak next record                   | nextRecord         |                                                      |
| ak none                          | ""                 |                                                      |
| ak open back url                 | openBackURL        | Webエリア内にてユーザーによって実行されたブラウザシークエンスで前に読み込まれたURLを開きます。   |
| ak open forward url              | openForwardURL     | Webエリア内にてユーザーによって実行されたブラウザシークエンスでの次のURLを開きます。        |
| ak paste                         | paste              | このアクションのターゲットは常にキーボードのフォーカスが入っているオブジェクトです。           |
| ak previous page                 | previousPage       |                                                      |
| ak previous record               | previousRecord     |                                                      |
| ak quit                          | quit               | "よろしいですか?" 確認ダイアログボックスを表示し、確定が発生したら4Dアプリケーションを終了します。 |
| ak redo                          | redo               | このアクションのターゲットは常にキーボードのフォーカスが入っているオブジェクトです。           |
| ak refresh current url           | refreshCurrentURL  | Webエリアのカレントのコンテンツを再読み込みします。                          |
| ak return to design mode         | design             | 4Dデザイン環境のウィンドウとメニューバーを最前面に持ってきます。                    |
| ak select all                    | selectAll          | このアクションのターゲットは常にキーボードのフォーカスが入っているオブジェクトです。           |
| ak show clipboard                | showClipboard      |                                                      |
| ak show reference                | visibleReferences  | エリア内の全ての動的な式を参照として表示します。                             |
| ak stop loading url              | stopLoadingURL     | Webエリア内のカレントのURLのページあるいはオブジェクトの読み込みを中止します。           |
| ak undo                          | undo               | このアクションのターゲットは常にキーボードのフォーカスが入っているオブジェクトです。           |

**互換性に関する注意:** レガシーコンテンツ(テーマ内で \_o\_ の接頭辞がついているもの)は4D v16 R3以降は廃止予定となっています。しかしながら、これらは互換性のためにサポートはされています。

#### 例題 

ボタンの標準アクションを**OK**に設定したい場合、以下のように記述します:

```4d
 OBJECT SET ACTION(*;"bValidate";ak accept)
```

#### 参照 

[OBJECT Get action](object-get-action.md)  