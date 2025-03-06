---
id: print-option-values
title: PRINT OPTION VALUES
slug: /commands/print-option-values
displayed_sidebar: docs
---

<!--REF #_command_.PRINT OPTION VALUES.Syntax-->**PRINT OPTION VALUES** ( *option* ; *namesArray* {; *info1Array* {; *info2Array*}} )<!-- END REF-->
<!--REF #_command_.PRINT OPTION VALUES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | オプション番号 |
| namesArray | Text array | &#8592; | 値の名前 |
| info1Array | Integer array | &#8592; | オプションの値(1) |
| info2Array | Integer array | &#8592; | オプションの値(2) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PRINT OPTION VALUES.Summary-->**PRINT OPTION VALUES** コマンドは、*option* で定義した印刷オプションに対して利用可能な名前のリストを*namesArray* に返します。<!-- END REF-->またオプションとして、*info1Array* および *info2Array* 内にそれぞれの名前に対する追加の情報を取得することもできます。

**注意:** **PRINT OPTION VALUES** コマンドはPostScript プリンターとしか動作しません。

*option* 引数を使用すると、取得したい値を指定することができます。“*Print Options*” テーマの、以下のいづれか一つ渡す必要があります:

* Paper option
* Paper source option

***option* \= Paper option (1)**

*option* 引数にPaper option を渡した場合、コマンドは以下の情報を返します:

* *namesArray* には、利用可能な用紙フォーマットの名前が返されます。
* *info1Array* には、それぞれの用紙フォーマットの高さが返されます。
* *info2Array* には、それぞれの用紙フォーマットの幅が返されます。

**注意:** この情報を取得するためには、印刷ドライバーはプリンターの有効なPPD(PostScript Printer Description)ファイルへのアクセス権がある必要があります。

[SET PRINT OPTION](set-print-option.md) コマンドを使用して特定の用紙フォーマットを適用するためには、*namesArray* のいづれかの値を渡すか、あるいはそれに対応する*info1Array* および *info2Array*の値を渡します。

***option* \= Paper source option (5)**

**注意:** このオプションはWindows 環境下においてのみ使用可能です。

*option* 引数にPaper source option を渡した場合、コマンドは*namesArray* には利用可能なトレイの名前を返し、それらの内部的なWindows ID 番号を*info1Array* に返します(*info2Array* は空のままです)。配列内の値の順番は印刷ドライバーによって定義されます。[SET PRINT OPTION](set-print-option.md) コマンドを使用してトレイを示すためには、*namesArray* あるいは *info1Array* 配列内のでの希望する要素のインデックス番号を渡す必要があります。

異なる印刷オプションについてのより詳細な情報については、[SET PRINT OPTION](set-print-option.md) および [GET PRINT OPTION](get-print-option.md) コマンドの詳細を参照してください。

これらのコマンドから返される全ての情報は、オペレーションシステムから提供されています。特定のオプションについてのより詳細な情報については、システムのドキュメンテーションを参照してください。

#### 参照 

[GET PRINT OPTION](get-print-option.md)  
[SET PRINT OPTION](set-print-option.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 785 |
| スレッドセーフである | &cross; |


