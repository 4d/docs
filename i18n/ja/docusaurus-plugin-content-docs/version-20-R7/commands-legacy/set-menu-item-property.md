---
id: set-menu-item-property
title: SET MENU ITEM PROPERTY
slug: /commands/set-menu-item-property
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PROPERTY.Syntax-->**SET MENU ITEM PROPERTY** ( *menu* ; *menuItem* ; *property* ; *value* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PROPERTY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| property | Text | &#8594;  | プロパティタイプ |
| value | Text, Number, Boolean | &#8594;  | プロパティ値 |
| process | Integer | &#8594;  | プロセス番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET MENU ITEM PROPERTY.Summary-->**SET MENU ITEM PROPERTY**コマンドは、*menu* と *menuItem*引数で指定されたメニュー項目に、*property*の*value*を設定するために使用します。<!-- END REF-->

*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することもできます。

*menu*にはメニュー参照 ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) またはメニュー番号を渡します。メニュー参照を渡す場合、コマンドはすべてのプロセスのすべてのインスタンスに適用されます。この場合*process* 引数は渡されても無視されます。メニュー番号を渡す場合、コマンドはカレントプロセスのメインメニューバー中の対応するメニューに適用されます。他のプロセスを指定したい場合、オプションの*process* 引数にその番号を渡します。

*property* 引数には、値を変更するプロパティを、そして新しい値を*value*に渡します。*property*引数には、**標準プロパティ**(“*Menu Item Properties*”テーマ内の定数のどれか一つ)あるいは**カスタムプロパティ**を使用することができます:

* **標準プロパティ**: ほとんどの標準プロパティは、“*Menu Item Properties*” テーマ内の定数を通して利用可能です。  
| 定数                         | 型   | 値                                | コメント                                                                                                                                                                              |  
| -------------------------- | --- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Access privileges          | 文字列 | 4D\_access\_group                | コマンドにアクセスグループを設定するために使用します。<br/>0 = All Groups<br/>>0 = Group ID                                                                                                  |  
| Associated standard action | 文字列 | 4D\_standard\_action             | メニュー項目に標準アクションを割り当てるために使用します。<br/>"*標準アクション*" テーマの定数参照。                                                                                                                   |  
| n/a                        | 文字列 | 4D\_execute\_without\_validating | **[イベントを発生させない](https://developer.4d.com/docs/Menus/properties#execute-without-validating)** オプションを有効化します(標準アクションが割り当てられたメニュー項目に対して設定します)<br/>True=有効化、 False (デフォルト)=無効化 |  
| Start a new process        | 文字列 | 4D\_start\_new\_process          | "新規プロセス開始オプションを有効にします。<br/>0 = No, 1 = Yes                                                                                                                                |  
    
Associated Standard Action プロパティの場合、*value* 引数には標準アクション名を渡すことができます。利用可能なアクションの包括的な一覧については、*デザインリファレンスマニュアル*の*標準アクション*の章を参照してください。主要なアクションは*標準アクション*テーマの定数としても使用可能です。  
    
**互換性に関する注意:** 以前のリリースにおいては、*割り当てられた標準アクションの値*テーマの定数は*value* 引数(倍調整数)に使われていました。4D v16 R3以降、これは廃止予定となりますが、互換性のために引き続きサポートはされています。  
**注意:** メニュー項目が階層サブメニューのタイトルと対応する場合、メニュー項目が選択された時に標準アクションは呼び出されません。
* **カスタムプロパティ**: *property* 引数には、カスタムのテキストを渡し、テキスト、数値、ブール型の*value*引数に割り当てることができます。この*value* 引数は項目と一緒に保存され、[GET MENU ITEM PROPERTY](get-menu-item-property.md)コマンドを使用して取得することができます。*property*引数にはどのようなカスタムの文字列を使用することもできますが、4Dで既に使用されているタイトルは使用しないようにしてください(慣習として、4Dによって設定されているプロパティは"\_4D\_"で始まります)。

#### 参照 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[GET MENU ITEM PROPERTY](get-menu-item-property.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 973 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


