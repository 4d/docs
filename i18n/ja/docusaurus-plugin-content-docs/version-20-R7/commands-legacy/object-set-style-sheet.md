---
id: object-set-style-sheet
title: OBJECT SET STYLE SHEET
slug: /commands/object-set-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET STYLE SHEET.Syntax-->**OBJECT SET STYLE SHEET** ( {* ;} *object* ; *styleSheetName* )<!-- END REF-->
<!--REF #_command_.OBJECT SET STYLE SHEET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、<br/>または変数やフィールド( * 省略時) |
| styleSheetName | Text | &#8594;  | スタイルシート名 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET STYLE SHEET.Summary-->**OBJECT SET STYLE SHEET**コマンドは、引数 *object* と *\** で指定したオブジェクトと関連付けられたスタイルシートを、カレントのプロセスにおいて変更します。<!-- END REF-->スタイルシートを変更すると、フォント、フォントサイズ、そしてフォントスタイルが変更されます(ただし自動スタイルシートではフォントスタイルは除く)。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*styleSheetName* 引数の中には、 *object* 引数で指定したオブジェクトに適用するスタイルシートの名前等を渡します。渡せる値は以下の通りです。

* 既存のスタイルシート名(指定したスタイルシートが存在しない場合は、 [ON ERR CALL](on-err-call.md) コマンドで割り込み可能なエラーが返されます)
* 空の文字列 ("") （指定すると、適用していたスタイルシートが解除されます。）
* "*Font Styles*" テーマ内にある以下の定数のいずれか(指定すると、"自動"スタイルシートが適用されます): 
 
|定数                                | 型   | 値                                   | コメント                                                           |  
| --------------------------------- | --- | ----------------------------------- | -------------------------------------------------------------- |  
| Automatic style sheet             | 文字列 | \_\_automatic\_\_                   | デフォルトで全てのオブジェクトに使用されます                                         |  
| Automatic style sheet\_additional | 文字列 | \_\_automatic\_additional\_text\_\_ | スタティックテキスト、フィールドそして変数においてのみサポートされます。ダイアログボックスでの補足テキストに使用されます。  |  
| Automatic style sheet\_main       | 文字列 | \_\_automatic\_main\_text\_\_       | スタティックテキスト、フィールドそして変数においてのみサポートされます。ダイアログボックスでのメインテキストに使用されます。 |

*object* 引数で指定したオブジェクトにデザインモードですでにスタイルシートが関連付けされている場合、このコマンドを呼び出すことによって、カレントプロセス中はスタイルシートが変更されます。

セッション中、 [ST SET ATTRIBUTES](st-set-attributes.md) コマンド、 [ST SET TEXT](st-set-text.md) コマンド、 [OBJECT SET FONT](object-set-font.md) コマンド、または [OBJECT SET FONT SIZE](object-set-font-size.md) コマンド等をオブジェクトに使用してフォントやフォントサイズを変更した場合、スタイルシートへの参照はオブジェクトから自動的に削除されます。元からあったスタイルシートと同じ設定を適用しようとした場合でも同様に削除されます。  
しかしながら、例えば [ST SET ATTRIBUTES](st-set-attributes.md) コマンドや [OBJECT SET FONT STYLE](object-set-font-style.md) コマンド等を使用してスタイル(太字、イタリック等)のみを変更した場合、 スタイルシートへの参照は削除されず、これらのプロパティはセッションの間スタイルシートへと追加されます。

##### 互換性に関する注意 

**プロジェクトアーキテクチャー**においては、このコマンドがサポートするのは3つの自動スタイルシートだけです。

#### 参照 

*Font Styles*  
[GET STYLE SHEET INFO](get-style-sheet-info.md)  
[LIST OF STYLE SHEETS](list-of-style-sheets.md)  
[OBJECT Get style sheet](object-get-style-sheet.md)  