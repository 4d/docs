---
id: creating
title: プロジェクトの作成・開始
---


## プロジェクトの作成

新規の 4D アプリケーションプロジェクトを作成できるのは **4D** または **4D Server** アプリケーションです ([プロジェクトの開発](Project/developing.md) 参照)。 いずれの場合も、プロジェクトファイルはローカルマシン上に保存します。

新規プロジェクトを作成するには:

1. 4D または 4D Server を起動します。
2. **ファイル** メニューより **新規 > プロジェクト...**を選択します: <p>![](assets/en/getStart/projectCreate1.png)<p>OR<p>(4D のみ) **新規** ツールバーボタンより **プロジェクト...**を選択します:<p>![](assets/en/getStart/projectCreate2.png)<p>標準の **保存** ダイアログが表示され、4D プロジェクトの名前と保存場所を指定します。

3. プロジェクトフォルダー名を入力したら、**保存**をクリックします。<p> この名称はつぎの場所に使用されます:
    - プロジェクト全体を保存するフォルダーの名称
    - "Project" フォルダーの中にある .4DProject ファイルの名称<br /><br />

    OS によって許可されている名称であれば使用可能です。 しかしながら、異なる OS での使用を予定していたり、ソース管理ツールを利用したりするのであれば、それらの命名規則を考慮する必要があります。

**保存** ダイアログを受け入れると、4D は開いているプロジェクト (あれば) を閉じ、指定の場所にプロジェクトフォルダーを作成し、プロジェクトに必要なファイルを設置します。 (詳細については [4D プロジェクトのアーキテクチャー](Project/architecture.md) を参照ください)。

これで、プロジェクトの開発を始めることができます。


## ローカルプロジェクトを開く

既存のローカルプロジェクトを 4D で開くには:

1. Welcome ウィザードにて **ローカルアプリケーションプロジェクトを開く** を選択します。 <p>OR<p> **ファイル** メニューより **開く ＞ ローカルプロジェクト...**を選択するか、**開く** ツールバーボタンより同様に選択します。<p> 標準のファイルを開くためのダイアログが表示されます。

2. プロジェクトの `.4dproject` ファイルを選択し、**開く** をクリックします。<p> By default, the project is opened with its current data file. Other file types are suggested:

    - *Packed project files*: `.4dz` extension  - deployment projects
    - *Shortcut files*: `.4dlink` extension - store additional parameters needed for opening projects or applications (addresses, identifiers, etc.)
    - *Binary files*: `.4db` or `.4dc` extension - legacy 4D database formats

### Options

In addition to standard system options, the *Open* dialog in 4D provides two menus with specific options that are available using the **Open** button and the **Data file** menu.

- **Open** - opening mode of the project:
    - **Interpreted** or **Compiled**: These options are available when the selected project contains both [interpreted and compiled code](Concepts/interpreted.md).
    - **[Maintenance Security Center](MSC/overview.md)**: Opening in secure mode allowing access to damaged projects in order to perform any necessary repairs.

- **Data file** - specifies the data file to be used with the project. By default, the **Current data file** option is selected.


## リモートプロジェクトを開く

The first time you connect to a 4D Server project via a remote 4D, you will usually use the standard connection dialog. Thereafter, you will be able to connect directly using the **Open Recent Projects** menu or a 4DLink shortcut file ([see below](#project-opening-shortcuts)).

To connect remotely to a 4D Server project:

1. Select **Connect to 4D Server** in the Welcome Wizard dialog, <p>OR<p> Select **Open/Remote Project...** from the **File** menu or the **Open** toolbar button.

The 4D Server connection dialog appears. This dialog has three tabs: **Recent**, **Available**, and **Custom**.

If 4D Server is connected to the same network as the remote 4D, select **Available**. 4D Server includes a built-in TCP/IP broadcasting system that, by default, publishes the name of the 4D Server projects available over the network. The list is sorted by order of appearance and updated dynamically.

![](assets/en/getStart/serverConnect.png)

To connect to a server from the list, double-click on its name or select it and click the **OK** button.

> A circumflex accent (^) is placed before the name of projects published with the encryption option enabled.

If the published project is not displayed in the **Available** list, select **Custom**. The Custom page allows you to connect to a published server on the network using its network address and assigning it a customized name.

![](assets/en/getStart/serverConnect2.png)


- **Project name**: Defines the local name of the 4D Server project. This name will be used in the **Recent** page when referring to the project.
- **Network address**: The IP address of the machine where the 4D Server was launched. <p>If two servers are executed simultaneously on the same machine, the IP address must be followed by a colon and port number, for example: `192.168.92.104:19814`. <p>By default, the publishing port of a 4D Server is 19813. This number can be modified in the Project settings.

Once this page assigns a server, clicking the **OK** button will allow you to connect to the server.

> If the project is published with the encryption option enabled, you must add a circumflex accent (^) before the name, otherwise the connection will be refused. For more information, refer to the Encrypting Client/Server Connections section.

Once a connection to the server has been established, the remote project will be listed on the **Recent** tab.



## Project opening shortcuts

4D offers two ways to let you open projects directly and bypass the Open dialog:

- via menu options:
    -   *Menu bar* - **File** > **Open Recent Projects / {project name}**
    -   *4D Tool bar* -  Select the project from the menu associated with the **Open** button

- via preferences:
    -   Set the **At startup** general preference to **Open last used project**. 