---
id: general
title: 一般ページ
---

このページには、4Dアプリケーションの一般的な動作を設定するためのオプションが含まれています。

## オプション

### 開始時

このオプションは、ユーザーがアプリケーションのみを起動したとき、4D が起動時に提供するデフォルトの表示を設定することができます。

- **Do nothing**: Only the application window appears, empty.
- **Open Local Project dialog**: 4D displays a standard open document dialog box, allowing you to select a local project.
- **Open last used project**: 4D directly opens the last project used; no opening dialog box appears.
  > To force the display of the opening dialog box when this option is selected, hold down the **Alt** (Windows) or **Option** (macOS) key while launching the project.
- **Open Remote Project dialog**: 4D displays the standard 4D Server logon dialog, allowing you to select a project published on the network.
- **Open Welcome Wizard dialog** (factory setting): 4D displays the Welcome Wizard dialog box.

> **4D Server**: The 4D Server application ignores this option. In this environment, the **Do nothing** mode is always used.

### 自動フォーム作成

> このオプションは、バイナリデータベースでのみ使用され、プロジェクトアーキテクチャーでは無視されます。 doc.4d.com を参照ください。

### ウィンドウのタブ (macOSのみ)

macOS Sierra 以降、Mac のアプリケーションは、複数のウィンドウを整理しやすくする自動ウィンドウタブ機能を利用することができます。単一の親ウィンドウ内でドキュメントウィンドウを積み重ね、タブを通してブラウズすることができます。 この機能は小さなスクリーンや、トラックパッドを使用している場合などに有用です。

この機能は、以下の環境において利用することができます (4D 64-bit版のみ):

- コードエディターウィンドウ
- フォームエディターウィンドウ

これらのエディターのウィンドウはすべて、タブ形式にすることができます:

![](../assets/en/Preferences/general2.png)

A set of commands in the **Window** menu allows managing the tabs:

![](../assets/en/Preferences/general3.png)

In the 4D's Preferences dialog box, the **Window tabbing** option allows you to control this feature:

![](../assets/en/Preferences/general4.png)

次の値が提供されています:

- **According to System Preferences** (default): 4D windows will behave like defined in the macOS System Preferences (In full screen, Always, or Manually).
- **Never**: Opening a new document in 4D form editor or Code Editor will always result in creating a new window (tabs are never created).
- **Always**: Opening a new document in 4D form editor or method editors will always result in creating a new tab.

### アピアランス (macOSのみ)

This menu lets you select the color scheme to use for the **4D development** environment. 指定されたカラースキームは、デザインモードのすべてのエディターとウィンドウに適用されます。

> You can also set the color scheme to use in your **desktop applications** in the "Interface" page of the Settings dialog box.

次の値が提供されています:

- **According to System Color Scheme Preferences** (default): Use the color scheme defined in the macOS System Preferences.
- **Light**: Use the Light Theme
- **Dark**: Use the Dark Theme

> この設定は macOS でのみサポートされています。 Windows上では、"Light" テーマが常に使用されます。

### アプリケーションモードに移動する時に、デザインモードを終了する

If this option is checked, when the user switches to the Application environment using the **Test Application** menu command, all the windows of the Design environment are closed. このオプションがチェックされていないと (初期設定)、デザインモードのウィンドウはアプリケーションモードの後ろに表示されたままとなります。

### バイナリー形式のデータベース作成を有効化する

If you check this option, two items are added in the **File > New** menu and the **New** toolbar button:

- **Database...**
- **ストラクチャー定義を使用したデータベース...**

![](../assets/en/Preferences/general5.png)

These items allow you to create binary databases (see [Creating a new database](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html) section). これらの項目はデフォルトでは表示されません。今後 4D は、新規の開発にはプロジェクトベースのアーキテクチャーを使用することを推奨するからです。

## 新規プロジェクト作成時

### ログファイルを使用

このオプションをチェックすると、新規データベース作成時にログファイルが自動的に開始され、使用されます。 For more information, please refer to [Log file (.journal)](Backup/log.md).

### パッケージを作成する

このオプションがチェックされていると、4Dデータベースは自動で .4dbase 拡張子が付いたフォルダーに作成されます。

この原則のため、macOS ではデータベースフォルダーが専用プロパティ付きのパッケージとして表示されます。 Windows では、これは普通のフォルダーと変わりありません。

### Project ソースファイルにトークンを含める

When this option is checked, saved [method source files](../Project/architecture.md#sources) in new 4D projects will contain **tokens** for classic language and database objects (constants, commands, tables and fields). Tokens are additional characters such as `:C10` or `:5` inserted in the source code files, that allow renaming tables and fields and identifying elements whatever the 4D version (see [Using tokens in formulas](https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html)).

バージョン管理システムや外部のコードエディターを新規プロジェクトで使用したい場合、これらのツールでのコードの可読性のために、このオプションのチェックを外すことができます。

> このオプションは、プロジェクトにのみ適用できます (バイナリデータベースでは常にトークンが含まれます)。

> You can always get the code with tokens by calling [`METHOD GET CODE`](https://doc.4d.com/4dv19R/help/command/en/page1190.html) with 1 in the _option_ parameter.

#### 既存プロジェクトからトークンを除外する

You can configure your existing projects to save code **without tokens** by inserting the following key in the [`<applicationName>.4DProject`](../Project/architecture.md#applicationname4dproject-file) file using a text editor:

```
"tokenizedText": false
```

> この設定は、メソッドが保存されるときにのみ考慮されます。 つまり、再保存しない限り、プロジェクト内の既存メソッドはそのまま残されます。

### Create `.gitignore` file

新しいプロジェクトでは、いくつかのファイルを git に無視させたいことがあるかもしれません。

You can set this preference by checking the **Create .gitignore file**  option.

When a project is created in 4D and that box is checked, 4D creates a `.gitignore` file at the same level as the `Project` folder (see [Architecture of a Project](Project/architecture.md#gitignore-file-optional)).

You can define the default contents of the `.gitignore` file by clicking the pencil icon. これにより、.gitignore 設定ファイルがテキストエディターで開かれます。 The contents of this file will be used to generate the `.gitignore` files in your new projects.

The [official git documentation](https://git-scm.com/docs/gitignore) is a great resource to understand how `.gitignore` files work.

### テキスト比較の言語

このパラメーターは新規データベースにおいて、文字列の処理と比較で使用されるデフォルトの言語を設定します。 言語の選択は、テキストの並べ替えや検索、文字の大小などの比較ルール等に直接影響を与えます。ただし、テキストの翻訳や日付・時刻・通貨のフォーマットはシステムの言語設定が使用され、この設定には影響されません。 初期設定では、4D はシステムに設定されているカレントのユーザー言語を使用します。

つまり、4Dデータベースはシステム言語とは異なる言語で動作することができます。 データベースが開かれるとき、4Dエンジンはデータファイルに使用されている言語を検知し、(インタープリターやコンパイルモードの) ランゲージに提供します。 データベースエンジン、あるいはランゲージのいずれがテキスト比較をおこなうかに関わらず、同じ言語が使用されます。

新規にデータファイルを作成する際、4D はこのメニューで設定されている言語を使用します。 ストラクチャーの言語と異なる言語のデータファイルを開くと、データファイルの言語が使用され、ストラクチャーに言語コードがコピーされます。

> You can modify this parameter for the open database using the Database Settings (see [Text comparison](../settings/database.md#text-comparison)).

## ドキュメントの場所

このエリアでは、カレントブラウザーに表示される 4D HTMLドキュメントへのアクセスを設定します:

- When you hit the **F1** key while the cursor is inserted in a 4D class function or command name in the Code Editor;
- When you double-click on a 4D command in the **Commands Page** of the Explorer.

### ドキュメント言語

表示する HTMLドキュメントの言語。 アプリケーションの言語とは別のドキュメント言語を選択することができます。

### 最初にローカルフォルダーを見る

> このオプションは、コマンドドキュメントへのアクセスに関してのみ考慮されます (クラス関数を除く)。

4Dがドキュメントのページを探す場所を設定します。

- チェックされている場合 (デフォルト)、4D はまずローカルフォルダーでページを探します (後述参照)。 ページが見つかれば、4D はそのページをカレントブラウザーで表示します。 見つからない場合、4D は自動でオンラインドキュメントの Webサイトを参照します。 この場合インターネットに接続されていない環境でも、ローカルのドキュメントが参照できます。
- チェックされていない場合、4D はオンラインドキュメントの Webサイトに直接アクセスし、カレントブラウザーでページを表示します。 ページが見つからない場合、4D はブラウザーにエラーメッセージを表示します。

### ローカルフォルダー

> このオプションは、コマンドドキュメントへのアクセスに関してのみ考慮されます (クラス関数を除く)。

スタティックな HTMLドキュメントの場所を指定します。 デフォルトでこれは \Help\Command\language サブフォルダーに設定されています。 このエリアに割り当てられているメニューをクリックすると、場所を見ることができます。 このサブフォルダーが存在しない場合、場所は赤で表示されます。

この場所は必要に応じて変更することができます。たとえば、アプリケーションの言語とは異なる言語でドキュメントを表示したい場合などです。 HTMLドキュメントは、異なるボリュームや Webサーバー上などに置くことも可能です。 To designate a different location, click on the **[...]** button next to the entry area and choose a documentation root folder (folder corresponding to the language: `fr`, `en`, `es`, `de` or `ja`).
