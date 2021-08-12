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

### Automatic form creation

> This option is only used in binary databases; it is ignored in project architecture. See doc.4d.com.

#### Window tabbing (macOS only)

Starting with macOS Sierra, Mac applications can benefit from the Automatic Window Tabbing feature that helps organizing multiple windows: document windows are stacked into a single parent window and can be browsed through tabs. This feature is useful on small screens and/or when using a trackpad.

You can benefit from this feature in the following environments (with 4D 64-bit versions only):

*   Method Editor windows
*   Form Editor windows

All windows from these editors can be put in tab form:

![](assets/en/Preferences/general2.png)

A set of commands in the **Window** menu allows managing the tabs:

![](assets/en/Preferences/general3.png)

In the 4D's Preferences dialog box, the **Window tabbing** option allows you to control this feature:

![](assets/en/Preferences/general4.png)

次の値が提供されています:

*   **According to System Preferences** (default): 4D windows will behave like defined in the macOS System Preferences (In full screen, Always, or Manually).
*   **Never**: Opening a new document in 4D form editor or method editor will always result in creating a new window (tabs are never created).
*   **Always**: Opening a new document in 4D form editor or method editors will always result in creating a new tab.

### Exit Design when going to Application Environment

If this option is checked, when the user switches to the Application environment using the **Test Application** menu command, all the windows of the Design environment are closed. If this option is not checked (factory setting), the windows of the Design environment remain visible in the background of the Application environment.


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

### Language of text comparison

This parameter configures the default language used for character string processing and comparison in new databases. The language choice has a direct influence on the sorting and searching of text, as well as the character case, but it has no effect on the translation of texts or on the date, time or currency formats, which remain in the system language. By default (factory setting), 4D uses the current user language set in the system.

A 4D database can thus operate in a language different from that of the system. When a database is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the database engine or the language, are done in the same language.

When creating a new data file, 4D uses the language previously set in this menu. When opening a data file that is not in the same language as the structure, the data file language is used and the language code is copied into the structure.
> You can modify this parameter for the open database using the Database Settings (see [Text comparison](https://doc.4d.com/4Dv18R6/4D/18-R6/DatabaseData-storage-page.300-5217842.en.html#460252)).


## ドキュメントの場所

このエリアでは、カレントブラウザーに表示される 4D HTMLドキュメントへのアクセスを設定します:

*   ユーザーがエクスプローラーの **コマンドページ** 上のコマンドをダブルクリックしたとき
*   ユーザーがメソッドエディター上でコマンド名をクリックし、**F1**キーを押したとき

4Dオンラインドキュメントサイトに直接アクセスするか、ローカルに保存したファイルにアクセスするかを選択できます。

### Local folder

Indicates the location of the static HTML documentation. By default, this is the \Help\Command\language subfolder. You can view the location by clicking on the menu associated with the area. If this subfolder is not present, the location is shown in red.

You can modify this location as desired, for example if you want to display the documentation in a language different from that of the application. The static HTML documentation can be located on another volume, on a web server, etc. 他の場所を指定するには、メニューの隣の [...] ボタンをクリックし、ドキュメントのルートフォルダー (fr, en, es, de または ja などの言語に対応するフォルダー) を選択します。


### Webサイト

4D Doc Center 上の対応するバージョンのオンラインドキュメントにアクセスするための URL。 4D はこの URL をベースとしてドキュメントの呼び出しを構築します。 この URL を変更して、たとえばアプリケーションランゲージとは異なる言語のドキュメントを参照できます。 エリア右側のテストボタンを使用すると、既定のブラウザーが起動され、指定された URL にアクセスします。

### 最初にローカルフォルダーを見る

(デフォルトでチェックされている) このオプションは、エクスプローラーや F1キーで呼び出されたドキュメントのページを探す場所を設定します。

*   チェックされている場合、4D はまずローカルフォルダーでページを探します。 ページが見つかれば、4D はそのページをカレントブラウザーで表示します。 見つからない場合、4D は自動で Webサイトのオンラインドキュメントを参照します。 この場合インターネットに接続されていない環境でも、ローカルのドキュメントが参照できます。
*   チェックされていない場合、4D は Webサイトのオンラインドキュメントに直接アクセスし、カレントブラウザーでページを表示します。 ページが見つからない場合、4D はブラウザーにエラーメッセージを表示します。

