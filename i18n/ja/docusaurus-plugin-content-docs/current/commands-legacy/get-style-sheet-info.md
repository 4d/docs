---
id: get-style-sheet-info
title: GET STYLE SHEET INFO
slug: /commands/get-style-sheet-info
displayed_sidebar: docs
---

<!--REF #_command_.GET STYLE SHEET INFO.Syntax-->**GET STYLE SHEET INFO** ( *styleSheetName* ; *font* ; *size* ; *styles* )<!-- END REF-->
<!--REF #_command_.GET STYLE SHEET INFO.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| styleSheetName | Text | &#8594;  | スタイルシート名 |
| font | Text | &#8592; | フォント名 |
| size | Integer | &#8592; | フォントサイズ |
| styles | Integer | &#8592; | 書体 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET STYLE SHEET INFO.Summary-->**GET STYLE SHEET INFO**コマンドは、*styleSheetName*パラメーターで指定したスタイルシートの現在の構成を返します。<!-- END REF--> 

*styleSheetName* 引数には、デザインモードで定義されたスタイルシート名を渡します。 自動スタイルシートを指定するためには、 "*Font Styles*" テーマ内にある以下の定数のいずれかを使用して下さい: 

| 定数                                | 型   | 値                                   | コメント                                                           |
| --------------------------------- | --- | ----------------------------------- | -------------------------------------------------------------- |
| Automatic style sheet             | 文字列 | \_\_automatic\_\_                   | デフォルトで全てのオブジェクトに使用されます                                         |
| Automatic style sheet\_additional | 文字列 | \_\_automatic\_additional\_text\_\_ | スタティックテキスト、フィールドそして変数においてのみサポートされます。ダイアログボックスでの補足テキストに使用されます。  |
| Automatic style sheet\_main       | 文字列 | \_\_automatic\_main\_text\_\_       | スタティックテキスト、フィールドそして変数においてのみサポートされます。ダイアログボックスでのメインテキストに使用されます。 |

*font* 引数には、カレントのプラットフォームのスタイルシートと関連付けされているフォントの名前がコマンドから返されます。

*size* 引数には、カレントのプラットフォームのスタイルシートと関連付けされている文字サイズがポイント数でコマンドから返されます。

*styles* 引数には、カレントのプラットフォームのスタイルシートと関連付けされているスタイルに対応した値がコマンドから返されます。返された値に対応するスタイルは、以下の表のとおりで、 "*Font Styles*" テーマ内にあります。

| 定数                   | 型    | 値 |
| -------------------- | ---- | - |
| Bold                 | 倍長整数 | 1 |
| Bold and Italic      | 倍長整数 | 3 |
| Bold and Underline   | 倍長整数 | 5 |
| Italic               | 倍長整数 | 2 |
| Italic and Underline | 倍長整数 | 6 |
| Plain                | 倍長整数 | 0 |
| Underline            | 倍長整数 | 4 |

このコマンドが正しく実行された場合には、 *OK* システム変数は 1 に変更されます。そうでない(例えば *styleSheetName* 引数で指定したスタイルシートが存在しないなどの)場合は、OK システム変数は 0 に設定されます。

##### 互換性に関する注意 

**プロジェクトアーキテクチャー**においては、このコマンドがサポートするのは3つの自動スタイルシートだけです。

#### 例題 

自動スタイルシートのカレント設定を調べたい場合:

```4d
 var $size;$style : Integer
 var $font : Text
 GET STYLE SHEET INFO(Automatic style sheet;$font;$size;$style)
```

#### 参照 

[LIST OF STYLE SHEETS](list-of-style-sheets.md)  
[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1256 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


