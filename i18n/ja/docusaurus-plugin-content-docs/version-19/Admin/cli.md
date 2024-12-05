---
id: cli
title: コマンドライン・インターフェース
---

macOS のターミナルまたは Windows のコンソールを使用して、コマンドラインによる 4Dアプリケーション (4D および 4D Server) の起動ができます。 この機能により、以下のことが可能になります:

- リモートからのデータベース起動。これは特に Webサーバーとして動作する 4D の管理に便利です。
- アプリケーションの自動テストの実行

## 基本情報

4Dアプリケーションのコマンドラインは、macOS のターミナルまたは Windows のコンソールで実行できます。

- macOS では、`open` コマンドを使用します。
- Windows では、引数を直接渡すことができます。

> macOS でも、パッケージ内のアプリケーションがあるフォルダー (Contents/MacOS パス) に移動することによって、引数を直接渡すことができ、エラーストリーム (stderr) にアクセスできるようになります。 たとえば、4Dパッケージが `MyFolder` フォルダーにある場合、次のようにコマンドラインを書く必要があります: `/MyFolder/4D.app/Contents/MacOS/4D`。 しかしながら、エラーストリーム(stderr) にアクセスする必要がない場合には、`open` コマンドの使用が推奨されます。

## 4Dアプリケーションの起動

ここでは、4Dアプリケーションを起動するためのコマンドラインとサポートされている引数について説明します。

シンタックス:
```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]
```
| 引数                          | 値                                                | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `applicationPath`           | 4D、4D Server、または組み込みアプリケーションへのパス。                | アプリケーションを起動します。 4Dアプリケーションをダブルクリックするのと同じ動作をします。 ストラクチャーファイルを指定する引数なしで呼び出された場合、アプリケーションが実行され、データベースを選択するためのダイアログボックスが表示されます。                                                                                                                                                                                                                                                                                                                                                                |
| `--version`                 |                                                  | アプリケーションのバージョンを表示して終了します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--help`                    |                                                  | ヘルプを表示して終了します。 代替引数: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--project`                 | projectPath &#124; packagePath &#124; 4dlinkPath | カレントデータファイルを開くプロジェクトファイル。 ダイアログボックスは表示されません。                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--data`                    | dataPath                                         | 指定されたプロジェクトファイルで開くデータファイル。 指定しない場合、4D は最後に開いたデータファイルを使用します。                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--opening-mode`            | interpreted &#124; compiled                      | データベースをインタープリタモードまたはコンパイルモードで開くように指示します。 指定のモードが利用できない場合でも、エラーは発生しません。                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--create-data`             |                                                  | 有効なデータファイルが見つからない場合、新しいデータファイルを自動的に作成します。 ダイアログボックスは表示されません。 "-data" 引数で渡されたファイルがあれば、4D はそれを使用します (同じ名前のファイルが既に存在する場合にはエラーが生成されます)。                                                                                                                                                                                                                                                                                                                                                        |
| `--user-param`              | カスタムのユーザー文字列                                     | Get database parameter コマンドを通して 4Dアプリケーションで利用可能な任意の文字列 (ただし文字列は予約文字である "-" から始まってはいけません)。                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--headless`                |                                                  | 4D、4D Server、または組み込みアプリケーションをインターフェースなし (ヘッドレスモード) で起動します。 このモードでは:<li> デザインモードは使えません。データベースはアプリケーションモードで起動します。</li><li> ツールバー、メニューバー、MDI ウィンドウやスプラッシュスクリーンは表示されません。</li><li>Dock またはタスクバーにはアイコンは表示されません。</li><li>開かれたデータベースは、"最近使用したデータベース" メニューに登録されません。</li><li>4D診断ファイルの記録が自動的に開始されます ([SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/ja/page642.html)、値79 参照)</li><li>ダイアログボックスへのコールはすべてインターセプトされ、自動的にレスポンスが返されます (例: [ALERT](https://doc.4d.com/4dv19/help/command/ja/page41.html) コマンドの場合は OK、エラーダイアログの場合は Abort など)。 インターセプトされたコマンド (*) は、診断ファイルに記録されます。</li><br/>保守上の理由から、[LOG EVENT](https://doc.4d.com/4dv19/help/command/ja/page667.html) コマンドを使用して任意のテキストを標準の出力ストリームに送ることができます。 ヘッドレスモードの 4Dアプリケーションは、[QUIT 4D](https://doc.4d.com/4dv19/help/command/ja/page291.html) を呼び出すか OSタスクマネージャーを使用することでしか終了できない点に注意が必要です。 |
| `--dataless`                |                                                  | 4D、4D Server、または組み込みアプリケーションをデータレスモードで起動します。 データレスモードは、4D がデータを必要としないタスク (プロジェクトのコンパイルなど) を実行する場合に便利です。 このモードでは: <li>コマンドラインや `.4DLink` ファイルで指定されていても、また `CREATE DATA FILE` や `OPEN DATA FILE` コマンドを使用していても、データを含むファイルは開かれません。</li><li>データを操作するコマンドはエラーを生成します。 たとえば、`CREATE RECORD` は "このコマンドの対象となるテーブルがありません" というエラーを生成します。</li><br/>**注記**:<li>コマンドラインで引数が渡された場合、アプリケーションを終了しない限り、4D で開かれているすべてのデータベースにデータレスモードが適用されます。</li><li>`.4DLink` ファイルを使って引数が渡された場合には、データレスモードは `.4DLink` ファイルで指定されたデータベースにのみ適用されます。 `.4DLink` ファイルの詳細については、[プロジェクトを開く (その他の方法)](../Project/creating.md#プロジェクトを開く-その他の方法) を参照ください。</li>                                                                                                                                                                                                                                                     |
| `--webadmin-settings-file`  | ファイルパス                                           | [WebAdmin Webサーバー](webAdmin.md) 用のカスタム WebAdmin `.4DSettings` ファイルのパス                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--webadmin-access-key`     | Text                                             | [WebAdmin Webサーバー](webAdmin.md) 用のアクセスキー                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--webadmin-auto-start`     | Boolean                                          | [WebAdmin Webサーバー](webAdmin.md) 用の自動スタートアップ設定の状態                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--webadmin-store-settings` |                                                  | アクセスキーと自動スタートアップパラメーターを、現在使用している設定ファイル (デフォルトの [`WebAdmin.4DSettings`](webAdmin.md#webadmin-設定) ファイル、または `--webadmin-settings-path` パラメーターで指定されたカスタムファイル) に保存します。 必要に応じて `--webadmin-store-settings` 引数を使用して、これらの設定を保存します。                                                                                                                                                                                                                                                                 |
 (*) 一部のダイアログはデータベースを開く前に表示されるため、

[診断ログファイル](debugLogFiles.md#4ddiagnosticlogtxt) に記録することができません (ライセンス警告、変換ダイアログ、データベース選択、データファイル選択)。 このような場合、エラーストリーム (stderr) とシステムのイベントログにエラーが投げられ、アプリケーションが終了します。

### 例題

> ユーザーのカレントフォルダーは、macOS では "~" コマンドを、Windows では "%HOMEPATH%" コマンドを使用することで取得することができます。

デスクトップ上に置かれた 4Dアプリケーションの起動:

*   macOS:


```bash
open ~/Desktop/4D.app
open "~/Desktop/4D Server.app"
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe
%HOMEPATH%\Desktop\"4D Server.exe"
```


macOS上でパッケージファイルを開く:

```bash
--args ~/Documents/myDB.4dbase
```

プロジェクトファイルを開く:

*   macOS:


```bash
--args ~/Documents/myProj/Project/myProj.4DProject
```


*   Windows:


```bash
%HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```



データファイルを指定してプロジェクトファイルを開く:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
または:
/project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

.4DLink ファイルを開く:

*   macOS:


```bash
~/Desktop/MyDatabase.4DLink
```


*   Windows:


```bash
%HOMEPATH%\Desktop\MyDatabase.4DLink
```

コンパイルモードで起動し、データファイルが利用できない場合には作成する:

*   macOS:


```bash
~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

*   Windows:


```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

データファイルを指定してプロジェクトファイルを開き、ユーザー引数として文字列を渡す:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

インターフェースなしで起動する (ヘッドレスモード):

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
```
