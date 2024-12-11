---
id: resolve-alias
title: RESOLVE ALIAS
slug: /commands/resolve-alias
displayed_sidebar: docs
---

<!--REF #_command_.RESOLVE ALIAS.Syntax-->**RESOLVE ALIAS** ( *aliasPath* ; *targetPath* )<!-- END REF-->
<!--REF #_command_.RESOLVE ALIAS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aliasPath | Text | &#8594;  | エイリアス/ショートカットのアクセスパスまたは名前 |
| targetPath | Text | &#8592; | エイリアス/ショートカットターゲットのアクセスパスまたは名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RESOLVE ALIAS.Summary-->RESOLVE ALIASコマンドは、目的のファイルまたはエイリアス(Windowsではショートカットと呼ばれる) のフォルダへの完全なパスを返します。<!-- END REF-->

エイリアスへの完全なパスを*aliasPath*に渡します。  
このコマンドが実行されると、*targetPath*変数にはエイリアスのターゲットファイルまたはフォルダへの完全なパスが格納され、OKシステム変数に1が代入されます。  
*aliasPath*に渡されたパスがエイリアスではなくファイルである場合、*targetPath*はそのファイルのパスを返し、OKシステム変数に0が代入されます。

#### システム変数およびセット 

*aliasPath* がエイリアスやショートカットの場合、OKシステム変数は1に設定されます。*aliasPath* が標準のファイルを指している場合、OKシステム変数は0に設定されます。

#### 参照 

[CREATE ALIAS](create-alias.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 695 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


