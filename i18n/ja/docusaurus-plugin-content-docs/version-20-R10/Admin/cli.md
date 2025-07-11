---
id: cli
title: コマンドライン・インターフェース
---

macOS のターミナルまたは Windows のコンソールを使用して、コマンドラインによる 4Dアプリケーション (4D および 4D Server、組み込みアプリケーション、[tool4d](#tool4d)) の起動ができます。 この機能により、以下のことが可能になります: この機能により、以下のことが可能になります: この機能により、以下のことが可能になります: この機能により、以下のことが可能になります: この機能により、以下のことが可能になります: この機能により、以下のことが可能になります:

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
[--utility] [--skip-onstartup] [--startup-method <methodName string>]
```

| 引数                          | 値                                                                                        | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :-------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`           | 4D、4D Server、組み込みアプリケーション、または tool4d へのパス。                                               | Launches the application.<br/>If not headless: identical to double-clicking the application; when called without structure file argument, the application is executed and the 'select database' dialog box appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--version`                 |                                                                                          | アプリケーションのバージョンを表示して終了します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--help`                    |                                                                                          | ヘルプを表示して終了します。 代替引数: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--project`                 | projectPath &#124; packagePath &#124; 4dlinkPath | カレントデータファイルを開くプロジェクトファイル。 ダイアログボックスは表示されません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--data`                    | dataPath                                                                                 | 指定されたプロジェクトファイルで開くデータファイル。 指定しない場合、最後に開いたデータファイルが使用されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--opening-mode`            | interpreted &#124; compiled                                          | データベースをインタープリタモードまたはコンパイルモードで開くように指示します。 指定のモードが利用できない場合でも、エラーは発生しません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--create-data`             |                                                                                          | 有効なデータファイルが見つからない場合、新しいデータファイルを自動的に作成します。 ダイアログボックスは表示されません。 "-data" 引数で渡されたファイルがあれば、4D はそれを使用します (同じ名前のファイルが既に存在する場合にはエラーが生成されます)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--user-param`              | カスタムのユーザー文字列                                                                             | [`Get database parameter`](../commands-legacy/get-database-parameter.md) コマンドを通してアプリケーションで利用可能な任意の文字列 (ただし文字列は予約文字である "-" から始まってはいけません)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--headless`                |                                                                                          | 4D、4D Server、または組み込みアプリケーションをインターフェースなし (ヘッドレスモード) で起動します。 このモードでは:<li>デザインモードは使えません。データベースはアプリケーションモードで起動します。</li><li>ツールバー、メニューバー、MDI ウィンドウやスプラッシュスクリーンは表示されません。</li><li>Dock またはタスクバーにはアイコンは表示されません。</li><li>開かれたデータベースは、"最近使用したデータベース" メニューに登録されません。</li><li>4D診断ファイルの記録が自動的に開始されます ([SET DATABASE PARAMETER](../commands-legacy/set-database-parameter.md) 、値79 参照)</li><li>ダイアログボックスへのコールはすべてインターセプトされ、自動的にレスポンスが返されます (例: [ALERT](../commands-legacy/alert.md) コマンドの場合は OK、エラーダイアログの場合は Abort など)。 All intercepted commands(\*) are logged in the diagnostic log.</li><br/>For maintenance needs, you can send any text to standard output streams using the [LOG EVENT](../commands-legacy/log-event.md) command. ヘッドレスモードの 4Dアプリケーションは、[QUIT 4D](../commands-legacy/quit-4d.md) を呼び出すか OSタスクマネージャーを使用することでしか終了できない点に注意が必要です。     |
| `--dataless`                |                                                                                          | 4D、4D Server、組み込みアプリケーション、または tood4d をデータレスモードで起動します。 データレスモードは、4D がデータを必要としないタスク (プロジェクトのコンパイルなど) を実行する場合に便利です。 In this mode: <li>No file containing data is opened, even if specified in the command line or the `.4DLink` file, or when using the `CREATE DATA FILE` and `OPEN DATA FILE` commands.</li><li>Commands that manipulate data will throw an error. For example, `CREATE RECORD` throws “no table to apply the command to”.</li><br/>**Note**:<li>If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed.</li><li>If passed using the `.4DLink` file, dataless mode only applies to the database specified in the `.4DLink` file. `.4DLink` ファイルの詳細については、[プロジェクトを開く (その他の方法)](../GettingStarted/creating.md#プロジェクトを開く-その他の方法) を参照ください。</li> |
| `--webadmin-settings-file`  | ファイルパス                                                                                   | [WebAdmin Webサーバー](webAdmin.md) 用のカスタム WebAdmin `.4DSettings` ファイルのパス。 [tool4d](#tool4d) の場合には利用できません。 [tool4d](#tool4d) の場合には利用できません。 [tool4d](#tool4d) の場合には利用できません。 [tool4d](#tool4d) の場合には利用できません。 [tool4d](#tool4d) の場合には利用できません。 [tool4d](#tool4d) の場合には利用できません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--webadmin-access-key`     | Text                                                                                     | [WebAdmin Webサーバー](webAdmin.md) 用のアクセスキー。 [tool4d](#tool4d) の場合には利用できません。 [tool4d](#tool4d) の場合には利用できません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--webadmin-auto-start`     | Boolean                                                                                  | [WebAdmin Webサーバー](webAdmin.md) 用の自動スタートアップ設定の状態。 [tool4d](#tool4d) の場合には利用できません。 [tool4d](#tool4d) の場合には利用できません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--webadmin-store-settings` |                                                                                          | アクセスキーと自動スタートアップパラメーターを、現在使用している設定ファイル (デフォルトの [`WebAdmin.4DSettings`](webAdmin.md#webadmin-設定) ファイル、または `--webadmin-settings-path` パラメーターで指定されたカスタムファイル) に保存します。 必要に応じて `--webadmin-store-settings` 引数を使用して、これらの設定を保存します。 [tool4d](#tool4d) の場合には利用できません。 必要に応じて `--webadmin-store-settings` 引数を使用して、これらの設定を保存します。 [tool4d](#tool4d) の場合には利用できません。 必要に応じて `--webadmin-store-settings` 引数を使用して、これらの設定を保存します。 [tool4d](#tool4d) の場合には利用できません。 必要に応じて `--webadmin-store-settings` 引数を使用して、これらの設定を保存します。 [tool4d](#tool4d) の場合には利用できません。 必要に応じて `--webadmin-store-settings` 引数を使用して、これらの設定を保存します。 [tool4d](#tool4d) の場合には利用できません。 必要に応じて `--webadmin-store-settings` 引数を使用して、これらの設定を保存します。 [tool4d](#tool4d) の場合には利用できません。                                                                                                                                                                                                                                            |
| `--utility`                 |                                                                                          | 4D Server の場合のみ利用可能です。 [4D Server をユーティリティモードで起動](#ユーティリティモードの-4d-server) します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--skip-onstartup`          |                                                                                          | `On Startup` および `On Exit` データベースメソッドを含む "自動" メソッドを一切実行せずにプロジェクトを起動します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--startup-method`          | プロジェクトメソッド名 (文字列)                                                     | (`--skip-onstartup` でスキップされていない場合) `On Startup` データベースメソッドの直後に実行するプロジェクトメソッドです。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

(\*) 一部のダイアログはデータベースを開く前に表示されるため、[診断ログファイル](Debugging/debugLogFiles.md#4ddiagnosticlogtxt) に記録することができません (ライセンス警告、変換ダイアログ、データベース選択、データファイル選択)。 このような場合、エラーストリーム (stderr) とシステムのイベントログにエラーが投げられ、アプリケーションが終了します。 このような場合、エラーストリーム (stderr) とシステムのイベントログにエラーが投げられ、アプリケーションが終了します。

### 例題

> ユーザーのカレントフォルダーは、macOS では "~" コマンドを、Windows では "%HOMEPATH%" コマンドを使用することで取得することができます。

デスクトップ上に置かれた 4Dアプリケーションの起動:

- macOS:

```bash
open ~/Desktop/4D.app
open "~/Desktop/4D Server.app"
```

- Windows:

```bash
%HOMEPATH%\Desktop\4D\4D.exe
%HOMEPATH%\Desktop\"4D Server.exe"
```

macOS上でパッケージファイルを開く:

```bash
--args ~/Documents/myDB.4dbase
```

プロジェクトファイルを開く:

- macOS:

```bash
--args ~/Documents/myProj/Project/myProj.4DProject
```

- Windows:

```bash
%HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```

データファイルを指定してプロジェクトファイルを開く:

- macOS:

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

- Windows:

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
または:
/project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

.4DLink ファイルを開く:

- macOS:

```bash
~/Desktop/MyDatabase.4DLink
```

- Windows:

```bash
%HOMEPATH%\Desktop\MyDatabase.4DLink
```

コンパイルモードで起動し、データファイルが利用できない場合には作成する:

- macOS:

```bash
~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

- Windows:

```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

データファイルを指定してプロジェクトファイルを開き、ユーザー引数として文字列を渡す:

- macOS:

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

- Windows:

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

インターフェースなしで起動する (ヘッドレスモード):

- macOS:

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  
```

- Windows:

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
```

## tool4d

**tool4d** は、4Dプロジェクトをヘッドレスモードで開き、CLI を使用して 4Dコードを実行できる、無料かつ軽量なスタンドアローンアプリケーションです。

tool4d は Windows と macOS で利用可能で、4Dリリースと常に紐づいています (同じバージョンとビルド番号)。 too4d は英語ローカライズ版のみ提供されます。

tool4dは、次のことをおこなう場合に適したツールです:

- 4Dアプリケーション用の CI/CD (継続的インティグレーション/継続的デリバリー) チェーンの実装
- 軽量な 4D実行ファイルを使用して (たとえば、自動のユニットテストをおこなうために) 4Dスクリプトを実行します。

### tool4d の使い方

tool4d は、4D [製品ダウンロードページ](https://product-download.4d.com/) から入手することができます。

tool4d を使うには、[コマンドライン](#4dアプリケーションの起動) を実行して起動し、標準的な 4Dプロジェクトを開きます。 上表に記載されている引数は、--`webadmin` を除いてすべて使用することができます。`WebAdmin` コンポーネントは [tool4d で無効化](#無効化されている-4d機能) されているため、使用できません。 tool4d では、次の実行シーケンスが起動されます:

1. tool4d は、`On Startup` データベースメソッド (および [ユーザー開始メソッド](../Users/handling_users_groups.md#ユーザープロパティ) などのすべての "自動" メソッド) を実行します。ただし、`--skip-onstartup` 引数が渡された場合を除きます。
2. tool4d は、`--startup-method` の引数で指定されたメソッドがあれば、それを実行します。
3. tool4d は、`--skip-onstartup` 引数が渡された場合を除き、`On Exit` データベースメソッドを実行します。
4. tool4d は終了します。

Windows では、tool4d はコンソールアプリケーションであるため、`stdout` ストリームがターミナル (cmd、powershell...) に表示されます。

:::note 注記

- tool4d は常にヘッドレスで実行されます (`headless` コマンドラインオプションは無意味です)。
- [`Application type`](../commands-legacy/application-type.md) コマンドを tool4d から呼び出すと、6 ("tool4d") を返します。
- [診断ログファイル](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) には先頭に "4DDiagnosticLogTool" が付きます。

:::

### 無効化されている 4D機能

tool4d は自動的に **ヘッドレスモード** で実行され ([引数一覧](#4dアプリケーションの起動) の `--headless` 参照)、4D IDE やそのサーバーにアクセスすることはできないことに留意してください。 具体的には、以下の機能が無効になっています: 具体的には、以下の機能が無効になっています: 具体的には、以下の機能が無効になっています: 具体的には、以下の機能が無効になっています: 具体的には、以下の機能が無効になっています: 具体的には、以下の機能が無効になっています:

- アプリケーションサーバー、Webサーバー、SQLサーバー
- バックアップスケジューラー
- ODBC と SQL パススルー
- 4D View Pro、4D SVG、4D NetKit など、すべてのコンポーネント
- hunspell スペルチェッカー
- 日本語のスペルチェッカー (*mecab* ライブラリ)
- WebAdmin
- CEF (Chromium Embedded Framework)
- PHP
- リモートデバッガー (ローカルデバッガー、`TRACE` コマンドおよびブレークポイントは、ヘッドレスアプリケーションでは無視されます)。

## ユーティリティモードの 4D Server

CLIオプションの `--utility` を使用すると、4D Server インスタンスをユーティリティモード (ヘッドレス) で起動することができます。 この場合、以下の実行シーケンスが起動されます: この場合、以下の実行シーケンスが起動されます: この場合、以下の実行シーケンスが起動されます: この場合、以下の実行シーケンスが起動されます: この場合、以下の実行シーケンスが起動されます: この場合、以下の実行シーケンスが起動されます:

1. 4D Server は、`On Startup` データベースメソッド (および [ユーザー開始メソッド](../Users/handling_users_groups.md#ユーザープロパティ) などのすべての "自動" メソッド) を実行します。ただし、`--skip-onstartup` 引数が渡された場合を除きます。
2. 4D Server は、`--startup-method` で指定されたメソッドがあれば、それを実行します。
3. 4D Server は、`--skip-onstartup` 引数が渡された場合を除き、`On Exit` データベースメソッドを実行します。
4. 4D Server は終了します。

:::info

tool4d とは異なり、ユーティリティモードの 4D Server では、すべての機能が有効になっています。 ただし、アプリケーションサーバーなど、すべてのサーバーは起動しません。

:::

:::tip 参照

tool4d とユーティリティモードの 4D Server の使用例については、[このブログ記事](https://blog.4d.com/ja/a-tool-for-4d-code-execution-in-cli/) をご覧ください。

:::
