---
id: cli
title: コマンドライン・インターフェース
---

You can use the macOS Terminal or the Windows console to drive your 4D applications (4D, 4D Server, merged application, and [tool4d](#tool4d)) using command lines. この機能により、以下のことが可能になります:

- リモートからのデータベース起動。これは特に Webサーバーとして動作する 4D の管理に便利です。
- アプリケーションの自動テストの実行

## 基本情報

4Dアプリケーションのコマンドラインは、macOS のターミナルまたは Windows のコンソールで実行できます。

- macOS では、`open` コマンドを使用します。
- Windows では、引数を直接渡すことができます。

> macOS でも、パッケージ内のアプリケーションがあるフォルダー (Contents/MacOS パス) に移動することによって、引数を直接渡すことができ、エラーストリーム (stderr) にアクセスできるようになります。 たとえば、4Dパッケージが `MyFolder` フォルダーにある場合、次のようにコマンドラインを書く必要があります: `/MyFolder/4D.app/Contents/MacOS/4D`。 しかしながら、エラーストリーム(stderr) にアクセスする必要がない場合には、`open` コマンドの使用が推奨されます。

## 4Dアプリケーションの起動

Here is a description of command lines and arguments supported to launch 4D applications.

シンタックス:

```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] 
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  
[--utility] [--skip-onstartup] [--startup-method <methodName string>] 
```

| 引数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 値                                                    | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `applicationPath`                                                                                                                                                                      | Path of 4D, 4D Server, merged application, or tool4d | Launches the application.<br/>If not headless: identical to double-clicking the application; when called without structure file argument, the application is executed and the 'select database' dialog box appears.                                                                                                                                                                                                                                                                  |
| `--version`                                                                                                                                                                            |                                                      | アプリケーションのバージョンを表示して終了します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--help`                                                                                                                                                                               |                                                      | ヘルプを表示して終了します。 代替引数: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--project`                                                                                                                                                                            | projectPath &#124; packagePath &#124; 4dlinkPath     | カレントデータファイルを開くプロジェクトファイル。 ダイアログボックスは表示されません。                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--data`                                                                                                                                                                               | dataPath                                             | 指定されたプロジェクトファイルで開くデータファイル。 If not specified, the last opened data file is used.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `--opening-mode`                                                                                                                                                                       | interpreted &#124; compiled                          | データベースをインタープリタモードまたはコンパイルモードで開くように指示します。 指定のモードが利用できない場合でも、エラーは発生しません。                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--create-data`                                                                                                                                                                        |                                                      | 有効なデータファイルが見つからない場合、新しいデータファイルを自動的に作成します。 ダイアログボックスは表示されません。 "-data" 引数で渡されたファイルがあれば、4D はそれを使用します (同じ名前のファイルが既に存在する場合にはエラーが生成されます)。                                                                                                                                                                                                                                                                                                                                                        |
| `--user-param`                                                                                                                                                                         | カスタムのユーザー文字列                                         | A string that will be available within the application through the [`Get database parameter`](https://doc.4d.com/4dv19R/help/command/en/page643.html) command (the string must not start with a "-" character, which is reserved).                                                                                                                                                                                                                                                         |
| `--headless`                                                                                                                                                                           |                                                      | 4D、4D Server、または組み込みアプリケーションをインターフェースなし (ヘッドレスモード) で起動します。 このモードでは:<li> デザインモードは使えません。データベースはアプリケーションモードで起動します。</li><li> ツールバー、メニューバー、MDI ウィンドウやスプラッシュスクリーンは表示されません。</li><li>Dock またはタスクバーにはアイコンは表示されません。</li><li>開かれたデータベースは、"最近使用したデータベース" メニューに登録されません。</li><li>4D診断ファイルの記録が自動的に開始されます ([SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/ja/page642.html)、値79 参照)</li><li>ダイアログボックスへのコールはすべてインターセプトされ、自動的にレスポンスが返されます (例: [ALERT](https://doc.4d.com/4dv19/help/command/ja/page41.html) コマンドの場合は OK、エラーダイアログの場合は Abort など)。 インターセプトされたコマンド (*) は、診断ファイルに記録されます。</li><br/>保守上の理由から、[LOG EVENT](https://doc.4d.com/4dv19/help/command/ja/page667.html) コマンドを使用して任意のテキストを標準の出力ストリームに送ることができます。 ヘッドレスモードの 4Dアプリケーションは、[QUIT 4D](https://doc.4d.com/4dv19/help/command/ja/page291.html) を呼び出すか OSタスクマネージャーを使用することでしか終了できない点に注意が必要です。 |
| `--dataless`                                                                                                                                                                           |                                                      | Launches 4D, 4D Server, merged application or tool4d in dataless mode. データレスモードは、4D がデータを必要としないタスク (プロジェクトのコンパイルなど) を実行する場合に便利です。 このモードでは: <li>コマンドラインや `.4DLink` ファイルで指定されていても、また `CREATE DATA FILE` や `OPEN DATA FILE` コマンドを使用していても、データを含むファイルは開かれません。</li><li>データを操作するコマンドはエラーを生成します。 たとえば、`CREATE RECORD` は "このコマンドの対象となるテーブルがありません" というエラーを生成します。</li><br/>**注記**:<li>コマンドラインで引数が渡された場合、アプリケーションを終了しない限り、4D で開かれているすべてのデータベースにデータレスモードが適用されます。</li><li>`.4DLink` ファイルを使って引数が渡された場合には、データレスモードは `.4DLink` ファイルで指定されたデータベースにのみ適用されます。 `.4DLink` ファイルの詳細については、[プロジェクトを開く (その他の方法)](../GettingStarted/creating.md#プロジェクトを開く-その他の方法) を参照ください。</li>                                                                                                                                                                                                                           |
| `--webadmin-settings-file`                                                                                                                                                             | ファイルパス                                               | Path of the custom WebAdmin `.4DSettings` file for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                           |
| `--webadmin-access-key`                                                                                                                                                                | String                                               | Access key for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                               |
| `--webadmin-auto-start`                                                                                                                                                                | Boolean                                              | Status of the automatic startup for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                          |
| `--webadmin-store-settings`                                                                                                                                                            |                                                      | アクセスキーと自動スタートアップパラメーターを、現在使用している設定ファイル (デフォルトの [`WebAdmin.4DSettings`](webAdmin.md#webadmin-設定) ファイル、または `--webadmin-settings-path` パラメーターで指定されたカスタムファイル) に保存します。 Use the `--webadmin-store-settings` argument to save these settings if necessary. Not available with [tool4d](#tool4d).                                                                                                                                                                                                  |
| `--utility`                                                                                                                                                                            |                                                      | Only available with 4D Server. Launches [4D Server in utility mode](#4d-server-in-utility-mode).                                                                                                                                                                                                                                                                                                                                                                                           |
| `--skip-onstartup`                                                                                                                                                                     |                                                      | Launches the project without executing any "automatic" methods, including the `On Startup` and `On Exit` database methods                                                                                                                                                                                                                                                                                                                                                                  |
| `--startup-method`                                                                                                                                                                     | Project method name (string)                         | Project method to execute immediately after the `On Startup` database method (if not skipped with `--skip-onstartup`).                                                                                                                                                                                                                                                                                                                                                                     |

(*) 一部のダイアログはデータベースを開く前に表示されるため、[診断ログファイル](Debugging/debugLogFiles.md#4ddiagnosticlogtxt) に記録することができません (ライセンス警告、変換ダイアログ、データベース選択、データファイル選択)。 このような場合、エラーストリーム (stderr) とシステムのイベントログにエラーが投げられ、アプリケーションが終了します。

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



## tool4d


**tool4d** is a free, lightweight, stand-alone application allowing you to open a 4D project in headless mode and execute some 4D code using the CLI.

tool4d is available on Windows and macOS and is always associated to a 4D release (same version and build number). It is only provided in English localization.

tool4d is a perfect tool if you want to:

- implement a CI/CD chain for your 4D application,
- use a light 4D executable to run 4D scripts, for example to execute automatic unit tests.



### Using tool4d

You can get tool4d from the 4D [Product download page](https://product-download.4d.com/).

You use tool4d by executing a [command line](#launch-a-4d-application) with a standard 4D project. You can use all arguments described in the above table, except --`webadmin` since this component is [disabled in tool4d](#disabled-4d-features). With tool4d, the following specific sequence is launched:

1. tool4d executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` argument is passed.
2. tool4d executes the method designated by the `--startup-method` argument, if any.
3. tool4d executes the `On Exit` database method, except if the `--skip-onstartup` argument is passed.
4. tool4d quits.

On Windows, tool4d is a console application so that the `stdout` stream is displayed in the terminal (cmd, powershell...).


:::note Notes

- tool4d is always executed headless (the `headless` command line option is useless).
- The [`Application type`](https://doc.4d.com/4dv19R/help/command/en/page494.html) command returns the value 6 ("tool4d") when called from the tool4d application.
- the [diagnostic log file](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) is prefixed with "4DDiagnosticLogTool".

:::


### Disabled 4D features

Keep in mind that tool4d runs automatically in **headless mode** (see `--headless` in [this table](#launch-a-4d-application)), and does neither give access to the 4D IDE nor any of its servers. In particular, the following features are disabled:

- application server, Web server, SQL server,
- backup scheduler,
- ODBC and SQL pass-through,
- all components such as 4D View Pro, 4D SVG, 4D NetKit...,
- hunspell spell checker,
- japanese spellchecker (*mecab* library),
- WebAdmin,
- CEF,
- PHP,
- remote debugger (local debugger, `TRACE` command and breakpoints are ignored in headless applications).



## 4D Server in utility mode

You can launch a 4D Server instance in a utility mode (headless) by using the `--utility` CLI option. In this case, the following workflow is triggered:

1. 4D Server executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` parameter is passed.
2. 4D Server executes the method designated by the `--startup-method`, if any.
3. 4D Server executes the `On Exit` database method, except if the `--skip-onstartup` parameter is passed.
4. 4D Server quits.

:::info

Unlike tool4d, 4D Server in utility mode has all its features enabled. However, the application server and all other servers are not started.

:::


:::tip See also

See [this blog post](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) for examples of how to use tool4d and 4D Server in utility mode.

:::