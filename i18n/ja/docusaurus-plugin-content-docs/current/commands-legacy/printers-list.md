---
id: printers-list
title: PRINTERS LIST
slug: /commands/printers-list
displayed_sidebar: docs
---

<!--REF #_command_.PRINTERS LIST.Syntax-->**PRINTERS LIST** ( *namesArray* {; *altNamesArray* {; *modelsArray*}} )<!-- END REF-->
<!--REF #_command_.PRINTERS LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| namesArray | Text array | &#8592; | プリンタ名 |
| altNamesArray | Text array | &#8592; | Windows: プリンタの場所 macOS: カスタムプリンタ名 |
| modelsArray | Text array | &#8592; | プリンタモデル |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.PRINTERS LIST.Summary-->**PRINTERS LIST** コマンドは、引数として渡された各配列にそのマシンで使用できるプリンタの名前、およびオプションとしてプリンタの場所とモデルを返します。<!-- END REF-->

**Note:** プリントサーバ (スプーラ) を使用してプリンタを管理している場合、フルアクセスパス (Windows) またはスプーラの名前 (macOS) が返されます。

*namesArray* 引数には、テキスト配列を渡します。コマンドの実行後、この配列には使用できるプリンタの名前が代入されます。macOSの場合、固定のシステムの名称になります。

オプションで2番目の引数として*altNamesArray* を渡すことができます。この配列に含まれる内容はプラットフォームにより異なります:

* Windowsでは、各プリンタに関して、ネットワーク・ロケーション(または、ローカル・ポート) が代入されます。
* macOSでは、各プリンタに関して、ユーザが変更することのできるカスタム名称が代入されます。例えば、ダイアログボックスの中でこの名前を使用することができます。

オプション引数*modelsArray* を渡した場合、各プリンタのモデルを取得できます。

4Dで選択されたプリンタの変更や取得を行うには、[SET CURRENT PRINTER](set-current-printer.md) および [Get current printer](get-current-printer.md) コマンドを使用します。最初の配列 (*namesArray* ) に返された名前を渡さなければなりません。

Windows上では、プリンタ名はOSレベルで手動にて変更することができます。一方、プリンタの場所とモデルタイプは、その物理的特性に関連しています。したがって、オプションの配列に返された値を使用して、選択したプリンタの特性を調べることができます。特に、クライアントマシンがすべて同じプリンタを使用していることをチェックすることができます。

macOS上では、プリンタ名 (プリンタサーバの名前) を使用して、このチェックを行います。このプリンタ名は、接続している各マシンに対して同じ名前になります。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定され、空の配列が返されます。

#### 参照 

[Get current printer](get-current-printer.md)  
[SET CURRENT PRINTER](set-current-printer.md)  