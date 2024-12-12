---
id: set-update-folder
title: SET UPDATE FOLDER
slug: /commands/set-update-folder
displayed_sidebar: docs
---

<!--REF #_command_.SET UPDATE FOLDER.Syntax-->**SET UPDATE FOLDER** ( *folderPath* {; *silentErrors*} )<!-- END REF-->
<!--REF #_command_.SET UPDATE FOLDER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| folderPath | Text | &#8594;  | アップデートされたアプリケーションを内包するフォルダ(OS Xの場合はパッケージ)へのパス名 |
| silentErrors | Boolean | &#8594;  | False (デフォルト)=エラーを表示して報告 True=エラーを表示しない |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SET UPDATE FOLDER.Summary-->**SET UPDATE FOLDER**コマンドは、カレントの組み込まれた4Dアプリケーションのアップデート情報を含んだフォルダの場所を指定します。<!-- END REF-->この情報は [RESTART 4D](restart-4d.md)メソッドが呼ばれるまで4Dセッション中は保存されます。アプリケーションが手動で終了した場合、この情報は保存されません。

このコマンドは組み込みアプリ(サーバーアプリまたはシングルユーザー向けアプリ)の自動アップデート処理において使用されるためのコマンドです。詳細な情報に関しては、デザインリファレンスマニュアルの *アプリケーションの仕上げと展開*のセクションを参照して下さい。

**Note:** このコマンドは4D サーバーか、または4D Volume Desktopのシングルユーザー向け組み込みアプリでしか使用できません。

*folderPath* 引数には、4Dアプリケーションビルダーによって作成された、組み込みアプリの新バージョンのフォルダへの完全なパス名を渡します(Windowsであれば *my4DApp.exe* アプリケーションを内包しているフォルダ、OS Xであれば *my4DApp* *.app* パッケージを内包しているフォルダ)。

**Note:** アプリケーションフォルダはアップデートの際に上書きされるため、アプリケーションの新バージョンのファイル名は、オリジナルのものと同じ名前を使用することが推奨されます。異なる名前を使用した場合、保存されたショートカットやパスは全て動かなくなります。

引数が有効であれば、セッション中は [RESTART 4D](restart-4d.md) コマンドが呼び出されるまでアップデートは"on hold"となります。[RESTART 4D](restart-4d.md) を呼び出す前に **SET UPDATE FOLDER**を複数回呼び出した場合、最後の有効な呼び出しのみが有効とみなされます。 

例外が起きた場合にはエラーが生成されます。 *silentErrors* 引数によってこのエラーを表示するかどうかを指定することが出来ます(以下を参照)。

*folderPath* に空の文字列 ("")を渡す事によってカレントセッションにおけるアップデート情報をリセットすることができます。 

任意の *silentErrors*  引数はアップデート中のエラーがどのように報告されるかを指定します。

* **False** を渡すかこの引数を省略した場合、エラーはアップデートジャーナルに記録され、警告ダイアログボックス内にその旨が表示されます。
* **True** を渡した場合、エラーはアップデートジャーナルに記録され、表示はされません。

例外: ジャーナルファイルが作成できないときには、 *silentErrors* 引数の値に関わらず警告ダイアログボックスが表示されます。詳細な情報に関しては、 [Get last update log path](get-last-update-log-path.md) コマンドの詳細を参照して下さい。

コマンドが正常に実行された場合には、OKシステム変数は1に設定されます。それ以外の場合は0に設定されます。このコマンドによって生成されたエラーはどれも [ON ERR CALL](on-err-call.md)コマンドを使用して実装されたメソッドによって割り込み可能です。

#### 例題 

ディスク上に "MyUpdates"を作成し、その中に "MyApp"アプリケーションの新しいバージョンが入っているとします。また、エラーは表示したくないとします。このアップデートのためには、以下の様に記載します。

```4d
  // Windows シンタックス
 SET UPDATE FOLDER("C:\\MyUpdates"+Folder separator+"MyApp"+Folder separator;True)
 
  // OS X シンタックス
 SET UPDATE FOLDER("MacHD:MyUpdates"+Folder separator+"MyApp.app"+Folder separator;True)
```

#### 参照 

[Get last update log path](get-last-update-log-path.md)  
[RESTART 4D](restart-4d.md)  