---
id: creating
title: プロジェクトの作成・開始
---

## プロジェクトの作成

新規の 4Dアプリケーションプロジェクトは **4D** または **4D Server** アプリケーションを使って作成します。いずれの場合も、プロジェクトファイルはローカルマシン上に保存します。

新規プロジェクトを作成するには:

1. 4D または 4D Server を起動します。
2. 次のいずれかの方法をおこないます:
   - **ファイル** メニューより \*\*新規 > プロジェクト...\*\*を選択します: ![](../assets/en/getStart/projectCreate-1.png)
   - (4D only) Select **Project...** from the **New** toolbar button:<p>![](../assets/en/getStart/projectCreate-2.png)   <br/>
     A standard **Save** dialog appears so you can choose the name and location of the 4D project's main folder.

:::note

The **Database...** and **Database From Structure Definition...** items are only available if you have selected the [**Enable binary database creation** option](../Preferences/general.md#enable-binary-database-creation) in your Preferences (disabled by default).

:::

3. プロジェクトフォルダー名を入力したら、**保存**をクリックします。この名称はつぎの場所に使用されます:

   - プロジェクト全体を保存するフォルダーの名称
   - ["Project" フォルダー](../Project/architecture.md#project-フォルダー) 内の最初の階層にある .4DProject ファイルの名称

OS によって許可されている名称であれば使用可能です。しかしながら、異なる OS での使用を予定していたり、ソース管理ツールを利用したりするのであれば、それらの命名規則を考慮する必要があります。

**保存** ダイアログを受け入れると、4D は開いているプロジェクト (あれば) を閉じ、指定の場所にプロジェクトフォルダーを作成し、プロジェクトに必要なファイルを設置します。(詳細については [4D プロジェクトのアーキテクチャー](Project/architecture.md) を参照ください)。

これで、プロジェクトの開発を始めることができます。

## プロジェクトを開く

既存のプロジェクトを 4D で開くには:

1. 次のいずれかの方法をおこないます:

   - **ファイル** メニューより \*\*開く ＞ ローカルプロジェクト...\*\*を選択するか、**開く** ツールバーボタンより同様に選択します。
   - Welcome ウィザードにて **ローカルアプリケーションプロジェクトを開く** を選択します。

標準のファイルを開くためのダイアログが表示されます。

2. プロジェクトの ["Project" フォルダー](../Project/architecture.md#project-フォルダー) 内にある `.4dproject` ファイルを選択し、**開く** をクリックします。

   デフォルトで、プロジェクトはカレントデータファイルとともに開かれます。ほかにも、次のファイルタイプを選択できます:

   - *圧縮されたプロジェクトファイル*: `.4dz` 拡張子 - 運用プロジェクト
   - *ショートカットファイル*: `.4DLink` 拡張子 - プロジェクトやアプリケーションを起動する際に必要な追加のパラメーターを格納しています (アドレス、認証情報、他)
   - *バイナリーファイル*: `.4db` または `.4dc` 拡張子 - 従来の 4D データベース形式

:::note

4D [CLI (コマンドラインインターフェース)](../Admin/cli.md) により、インターフェースなしで 4Dプロジェクトを起動することもできます。

:::

### オプション

標準のシステムオプションに加え、4D が提供する *開く* ダイアログボックスには、*開く* と**データファイル** という、2つのオプションがあります。

- **開く** - プロジェクトを開くモードを指定できます:
  - **インタープリター** または **コンパイル済み**: これらのオプションは、選択したプロジェクトが [インタープリターおよびコンパイル済みコード](Concepts/interpreted.md) を含んでいる場合に選択可能となります。
  - **[Maintenance Security Center](MSC/overview.md)**: 損傷を受けたプロジェクトに必要な修復を施すために、保護モードでプロジェクトを開きます。

- **データファイル** - プロジェクトで使用するデータファイルを指定できます。デフォルトでは、**現在のデータファイル** オプションが選択されています。 This menu includes two additional options since 4D allows you to use the same project with different data files.
  - **Choose another data file**: Opens the project with an existing data file other than the current one. When you select this option and then click on **Open**, the standard Open data file dialog box appears so that you can designate a data file.
  - **Create a new data file**: Creates a blank data file for the project. When you select this option and then click on **Open**, the standard Save data file dialog box appears.

:::note

In order to preserve data integrity, 4D does not allow a data file to be opened if it has not been created by the current project file. The program automatically assigns internal link numbers (UUID) to the data and project files when they are created or when the project is converted. These numbers are verified when the data file is opened.

:::

Once you have changed the current data file, 4D opens it by default subsequently. If you move or rename the data file, you will need to locate it again. It is possible to change the data file using a keyboard shortcut on startup (see below). You can view the current data file at any time on the [Information page of the MSC](../MSC/information.md#data).

### Startup Maintenance Dialog

If you need to interrupt the startup sequence, for example if the project is not launching properly or if you want to switch to a different data file, hold down the **Alt** (Windows) or **Option** (macOS) key during database startup to display the startup maintenance dialog box:

![](../assets/en/getStart/startup.png)

The following maintenance options are available:

- **Open the application with the default data file**: continues the standard opening process.
- **Select another data file** / **Create a new data file**: allows you to change of data file (see above).
- **Restore a backup file**: opens standard Open file dialog box, so that you can select a backup file (.4bk) or a log backup file (.4bl) to [restore](../Backup/restore.md#manually-restoring-a-backup-standard-dialog).
- **Open the Maintenance and Security Center**: opens the project in [maintenance mode](../MSC/overview.md#display-in-maintenance-mode).

## プロジェクトを開く (その他の方法)

4D では、開くダイアログを経由しなくてもプロジェクトを開くことのできる方法がいくつかあります:

- via the **Open Recent Projects / {project name}** submenu of the **File** menu or **Open** toolbar button.  
  ![open-recent-projects](../assets/en/Project/4Dlinkfiles.png)
- double-click or drag and drop a `.4DLink` file onto the 4D application (see below).
- by setting the **At startup** general preference to [**Open last used project**](../Preferences/general.md#at-startup).

:::note 注記

- Windows 上では、4D Server プロジェクトが[サービスとして登録](../server/service.md) されていれば、セッションの開始時に自動的に開始されるようにすることができます。
- A [built 4D application](../Desktop/building.md) can be launched by a double-click on the application icon.

:::

## 4DLinkファイルについて

`.4DLink` 拡張子が付いたファイルは XMLファイルで、ローカルまたはリモート4Dプロジェクトの開始を簡略化・自動化するための設定を格納します。

`.4DLink` ファイルは、4Dプロジェクトのアドレスや接続識別子を保存し、プロジェクトを開くための操作を短縮します。

ローカルプロジェクトを初めて開くとき、またはサーバーに初めて接続するとき、4D は `.4DLink` ファイルを自動生成します。このファイルは、次の場所にあるローカル環境設定フォルダーに置かれます:

- Windows: C:\Users\UserName\AppData\Roaming\4D\Favorites vXX\
- macOS: Users/UserName/Library/Application Support/4D/Favorites vXX/

XX はアプリケーションのバージョン番号を意味します。たとえば、4D v19 なら "Favorites v19" となります。

このフォルダーには、2つのサブフォルダーがあります:

- **Local** フォルダーには、ローカルプロジェクトの開始に使用できる `.4DLink` ファイルが格納されます。
- **Remote** フォルダーには、最近のリモートプロジェクトの `.4DLink` ファイルが置かれます。

`.4DLink` ファイルは XMLエディターで作成することもできます。

`.4DLink` ファイルを構築するために使用できる XMLキーを定義した DTD が4D より提供されます。この DTD は database_link.dtd という名前で、4Dアプリケーションの `\Resources\DTD\` サブフォルダーにあります。

