---
id: open-settings-window
title: OPEN SETTINGS WINDOW
slug: /commands/open-settings-window
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SETTINGS WINDOW.Syntax-->**OPEN SETTINGS WINDOW** ( *selector* {; *access* {; *settingsType*}} )<!-- END REF-->
<!--REF #_command_.OPEN SETTINGS WINDOW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| selector | Text | &#8594;  | 環境設定やデータベース設定ダイアログボックス中のテーマやページ、またはパラメーターグループを指定するキー |
| access | Boolean | &#8594;  | True=ダイアログボックスの他のページをロックする<br/>Falseまたは省略=ダイアログの他のページもアクティブにする |
| settingsType | Integer | &#8594;  | 0または省略時 = ストラクチャー設定、1 = ユーザー設定 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OPEN SETTINGS WINDOW.Summary-->**OPEN SETTINGS WINDOW**コマンドは、カレントの4Dアプリケーションの環境設定ダイアログボックスまたはカレント4Dアプリケーションのデータベース設定を表示し、*selector*キーで指定されたパラメーターやページを表示します。<!-- END REF-->

*selector* 引数には、開くダイアログボックスとそのページを示す“キー”を渡さなくてはなりません。キーは以下のような構造になります: */Dialog{/Page{/Parameters}}*。*Dialog* は表示するダイアログで、"4D" (環境設定) または"Database" (データベース設定) を指定できます。例えばデータベース設定のコンパイラページを指定するには、*selector* に"*/Database/Compiler*"を指定します。使用可能なキーのリストは後に示します。*selector*にスラッシュ ("/") のみを渡すと、コマンドはデータベース設定の最初のページを表示します。

*access*引数を使用して他のページをロックすることで、環境設定やデータベース設定ダイアログボックス内でのユーザーアクションをコントロールできます。特に、ユーザーに対し特定のパラメーターの変更を許可し、他の部分の変更は許可したくないという場合に使用します。この場合、*access*引数にTrueを渡すと*selector*引数で指定したページのみがアクティブになり変更可能となります。他のすべてのページへのアクセスはロックされます (ナビゲーションバーのボタンをクリックしても効果はありません)。*access*引数にFalseを渡すか省略すると、ダイアログボックスのすべてのページがアクセス可能になります。

*settingsType* 引数はユーザー設定モードに設定されたデータベースでのみ有効です。このモードではカスタマイズされた"ユーザー設定"または"データファイル用のユーザー設定"が外部ファイルとして生成され、標準設 定の代わりに使用されます。詳細はデザインリファレンスマニュアルの*ユーザー設定を使用する*を参照してください。このコンテキストでは、この引数を使用してストラクチャー設定また はユーザー設定いずれのダイアログボックスにアクセスするか指定できます。*4D Environment*テーマの以下の定数を使用できます:

| 定数                     | 型    | 値 | コメント                                                                                                                    |
| ---------------------- | ---- | - | ----------------------------------------------------------------------------------------------------------------------- |
| Structure settings     | 倍長整数 | 0 | ストラクチャー設定を使用 (引数が省略された際のデフォルト)。このモードでは使用される*selector*の値は標準モードと同じです。                                                     |
| User settings          | 倍長整数 | 1 | ユーザー設定を使用。このモードでは特定のキーのみを*selector*引数で使用できます。                                                                           |
| User settings for data | 倍長整数 | 2 | "データファイル用のユーザー設定"へのアクセス。このファイルはデータファイルと同じレベルに保存されているユーザー設定です。このモードでは、*selector*引数に対しては一部のキーのみが使用可能です(ユーザー設定と同じサブセットです)。 |

無効なキーを渡すと、データベース設定の最初のページが表示されます。

##### キーのパス (標準モード) 

以下は標準モードの*selector*引数 (ストラクチャー設定) で使用可能なキーです: 

*/4D* 
*/4D/General* 
*/4D/Structure* 
*/4D/Form editor* 
*/4D/Method editor* 
*/4D/Shortcuts* 
*/Database* 
*/Database/General* 
*/Database/Mover* 
*/Database/Interface* 
*/Database/Interface/Developper* 
*/Database/Interface/User* 
*/Database/Interface/Shortcuts* 
*/Database/Compiler* 
*/Database/Database* 
*/Database/Database/Data storage* 
*/Database/Database/Memory and cpu* 
*/Database/Database/International* 
*/Database/Backup* 
*/Database/Backup/Scheduler* 
*/Database/Backup/Configuration* 
*/Database/Backup/Backup and restore* 
*/Database/Client-Server* 
*/Database/Client-Server/Network* 
*/Database/Client-Server/IP configuration* 
*/Database/Web* 
*/Database/Web/Config* 
*/Database/Web/Options 1* 
*/Database/Web/Options 2* 
*/Database/Web/Log format* 
*/Database/Web/Log scheduler* 
*/Database/Web/Webservices* 
*/Database/SQL* 
*/Database/php* 
*/Database/Compatibility* 
*/Database/Security* 

**互換性に関する注意:** このコマンドは11.x以前のバージョンのキーでも動作します。対応は自動で4Dが行います。しかしながら以前の呼び出しを、上記のキーで置き換えることを推奨します。

##### キーのパス (ユーザー設定モード) 

以下は "ユーザー設定" および "データファイル用のユーザー設定" モードの*selector*引数で使用できるキーです:

*/Database* 
*/Database/Interface* 
*/Database/Database/Memory and cpu* 
**/Database/Client-Server* 
*/Database/Client-Server/Network* 
*/Database/Client-Server/IP configuration* 
*/Database/Web* 
*/Database/Web/Config* 
*/Database/Web/Options 1* 
*/Database/Web/Options 2* 
*/Database/Web/Log format* 
*/Database/Web/Log scheduler* 
*/Database/Web/Webservices* 
*/Database/SQL* 
*/Database/php* 

"データファイル用のユーザー設定" モードで使用できる追加のキーです:

*/Database/Backup* 
*/Database/Backup/Scheduler* */Database/Backup/Configuration* 
*/Database/Backup/Backup and restore*

#### 例題 1 

4D環境設定の“メソッド”ページを開きます:   
  
```4d
 OPEN SETTINGS WINDOW("/4D/Method editor")
```

#### 例題 2 

データベース設定の“ショートカット”パラメーターを開き、他の設定はロックします:  

```4d
 OPEN SETTINGS WINDOW("/Database/Interface/Shortcuts";True)
```

#### 例題 3 

環境設定の最初のページを開きます:  

```4d
 OPEN SETTINGS WINDOW("/")
```

#### 例題 4 

ユーザー設定モードでデータベース設定のインターフェースページにアクセスする:

```4d
 OPEN SETTINGS WINDOW("/Database/Interface";False;1)
```

#### システム変数およびセット 

環境設定/データベース設定ダイアログが受け入れられるとOKシステム変数に1が、キャンセルされると0が設定されます。


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 903 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


