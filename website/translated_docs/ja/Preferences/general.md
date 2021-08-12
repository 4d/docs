---
id: general
title: 一般ページ
---

このページには、4Dアプリケーションの一般的な動作を設定するためのオプションが含まれています。

## オプション

### 開始時

このオプションは、ユーザーがアプリケーションのみを起動したとき、4D が起動時に提供するデフォルトの表示を設定することができます。

*   **何もしない**: アプリケーションウィンドウのみが表示されます。
*   **ローカルプロジェクトを開くダイアログ**: 4Dは標準のドキュメントを開くダイアログボックスを表示し、ローカルのプロジェクトを選択することができます。
*   **最後に使用したプロジェクトを開く**: 4D は最後に使用されたプロジェクトスを直接開きます。ドキュメントを開くダイアログボックスは表示されません。 ＞このオプションが選択されているときに、ドキュメントを開くダイアログボックスを強制的に表示させるには、プロジェクトを起動する際に、**Alt** (Windows) または **Option** (macOS) キーを押します。
*   **リモートプロジェクトを開くダイアログ**: 4D は 4D Server にログオンする標準のダイアログボックスを表示し、ネットワークに公開されたプロジェクトを指定することができます。
*   **Welcomeウィザードを開くダイアログ** (初期設定): 4D は Welcomeウィザードダイアログボックスを表示します。
> **4D Server**: 4D Server アプリケーションは、このオプションを無視します。 この環境においては、**何もしない** モードが常に選択されます。

### 自動フォーム作成

> このオプションは、バイナリデータベースでのみ使用され、プロジェクトアーキテクチャーでは無視されます。 doc.4d.com を参照ください。

#### ウィンドウのタブ (macOSのみ)

macOS Sierra 以降、Mac のアプリケーションは、複数のウィンドウを整理しやすくする自動ウィンドウタブ機能を利用することができます。単一の親ウィンドウ内でドキュメントウィンドウを積み重ね、タブを通してブラウズすることができます。 この機能は小さなスクリーンや、トラックパッドを使用している場合などに有用です。

この機能は、以下の環境において利用することができます (4D 64-bit版のみ):

*   メソッドエディターウィンドウ
*   フォームエディターウィンドウ

これらのエディターのウィンドウはすべて、タブ形式にすることができます:

![](assets/en/Preferences/general2.png)

**ウィンドウ** メニューのコマンドによって、タブを管理することができます:

![](assets/en/Preferences/general3.png)

4D の環境設定ダイアログボックス内では、**ウィンドウタブ** オプションでこの機能を管理することができます:

![](assets/en/Preferences/general4.png)

次の値が提供されています:

*   **システム設定に従う** (デフォルト): 4D のウィンドウは、macOSシステム環境設定で定義されているように振る舞います (フルスクリーン時のみ、常に、あるいは手動)。
*   **しない**: 4Dフォームエディターあるいはメソッドエディターで開かれた新しいドキュメントは常に新しいウィンドウを作成します (タブは作成されません)。
*   **常にする**: 4Dフォームエディターあるいはメソッドエディターで開かれた新しいドキュメントは常に新しいタブを作成します。

### アプリケーションモードに移動する時に、デザインモードを終了する

このオプションが選択されていると、**アプリケーションモード** コマンドを使用してユーザーがアプリケーションモードに移動する際に、デザインモードのすべてのウィンドウが閉じられます。 If this option is not checked (factory setting), the windows of the Design environment remain visible in the background of the Application environment.


### Enable binary database creation

If you check this option, two items are added in the **File > New** menu and the **New** toolbar button:

*   **Database...**
*   **Database from Structure Definition...**

![](assets/en/Preferences/general5.png)

These items allow you to create binary databases (see [Creating a new database](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html) section). They are no longer proposed by default because 4D recommends using project-based architecture for new developments.

## When creating a new project

### Use Log File

When this option is checked, a log file is automatically started and used when a new database is created. For more information, please refer to [Log file (.journal)](Backup/log.md).

### Create package

When this option is checked, 4D databases are automatically created in a folder suffixed .4dbase.

Thanks to this principle, under macOS the database folders appear as packages having specific properties. Under Windows, this has no particular impact.

### `.gitignore` ファイルを作成する

You might need or want git to ignore some files in your new projects.

You can set this preference by checking the **Create .gitignore file**  option.

![](assets/en/Preferences/gitignore.png)

When a project is created in 4D and that box is checked, 4D creates a `.gitignore` file at the same level as the `Project` folder (see [Architecture of a Project](Project/architecture.md#gitignore-file-optional)).

You can define the default contents of the `.gitignore` file by clicking the pencil icon. This will open the .gitignore configuration file in your text editor. The contents of this file will be used to generate the `.gitignore` files in your new projects.

The [official git documentation](https://git-scm.com/docs/gitignore) is a great resource to understand how `.gitignore` files work.

### Language of text comparison

This parameter configures the default language used for character string processing and comparison in new databases. The language choice has a direct influence on the sorting and searching of text, as well as the character case, but it has no effect on the translation of texts or on the date, time or currency formats, which remain in the system language. By default (factory setting), 4D uses the current user language set in the system.

A 4D database can thus operate in a language different from that of the system. When a database is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the database engine or the language, are done in the same language.

When creating a new data file, 4D uses the language previously set in this menu. When opening a data file that is not in the same language as the structure, the data file language is used and the language code is copied into the structure.
> You can modify this parameter for the open database using the Database Settings (see [Text comparison](https://doc.4d.com/4Dv18R6/4D/18-R6/DatabaseData-storage-page.300-5217842.en.html#460252)).

## ドキュメントの場所

このエリアでは、カレントブラウザーに表示される 4D HTMLドキュメントへのアクセスを設定します:

*   メソッドエディターで、4Dクラス関数またはコマンド名にカーソルがあるときに、**F1**キーを押したとき
*   エクスプローラーの **コマンドページ** 上の 4Dコマンドをダブルクリックしたとき


### ドキュメント言語

Language of the HTML documentation to display. You can select a documentation in a different language from the application language.

### 最初にローカルフォルダーを見る

> This option is only taken into account for command documentation access (excluding class functions).

Sets where 4D will look for documentation pages.

*   チェックされている場合 (デフォルト)、4D はまずローカルフォルダーでページを探します (後述参照)。 ページが見つかれば、4D はそのページをカレントブラウザーで表示します。 見つからない場合、4D は自動でオンラインドキュメントの Webサイトを参照します。 この場合インターネットに接続されていない環境でも、ローカルのドキュメントが参照できます。
*   チェックされていない場合、4D はオンラインドキュメントの Webサイトに直接アクセスし、カレントブラウザーでページを表示します。 ページが見つからない場合、4D はブラウザーにエラーメッセージを表示します。

### Local folder

> This option is only taken into account for command documentation access (excluding class functions).

Indicates the location of the static HTML documentation. By default, this is the \Help\Command\language subfolder. You can view the location by clicking on the menu associated with the area. If this subfolder is not present, the location is shown in red.

You can modify this location as desired, for example if you want to display the documentation in a language different from that of the application. The static HTML documentation can be located on another volume, on a web server, etc. 他の場所を指定するには、メニューの隣の **[...]** ボタンをクリックし、ドキュメントのルートフォルダー (`fr`, `en`, `es`, `de` または `ja` などの言語に対応するフォルダー) を選択します。 
