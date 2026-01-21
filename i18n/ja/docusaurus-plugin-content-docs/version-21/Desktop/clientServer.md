---
id: clientServer
title: クライアント/サーバー管理
---

組み込みクライアント/サーバーアプリケーションまたはリモートプロジェクトの形で、4Dデスクトップアプリケーションをクライアント/サーバー構成で運用することができます。

- **組み込みクライアント/サーバーアプリケーション** は [アプリケーションビルダー](building.md#クライアントサーバーページ) を使って生成します。 これらは、アプリケーションの運用に使います。

- **リモートプロジェクト** とは、4D Server 上で開いた [.4DProject](Project/architecture.md) ファイルのことで、リモートモードの 4D を使って接続します。 4D Server は、プロジェクトの [圧縮形式](building.md#コンパイル済みストラクチャーをビルド) である .4dz ファイルをリモートの 4D に送信します。つまり、ストラクチャーファイルは読み取り専用です。 この構成は通常、アプリケーションのテストに使います。

![](../assets/en/getStart/localremote.png)

> ただし、**4D Server と同じマシン** から接続している場合には、プロジェクトファイルの変更が可能です。 この [特殊機能](#4d-と-4d-server-の同じマシン上での使用) により、クライアント/サーバーアプリケーションを運用時と同じコンテキストで開発することができます。

## 組み込みクライアント/サーバーアプリケーションを開く

ビルドされたクライアント/サーバーアプリケーションは起動や接続処理が簡易です:

- サーバーを起動するには、サーバーアプリケーションをダブルクリックします。 プロジェクトファイルを選択する必要はありません。
- クライアントを起動するにも、同様にクライアントアプリケーションをダブルクリックします。すると、サーバーアプリケーションへの接続が直接おこなわれるため、

詳細については [アプリケーションビルド](building.md#クライアント/サーバーアプリケーションとは) ページを参照ください。

## リモートプロジェクトを開く

4D Server 上で動いているプロジェクトに初めて接続する場合は、通常は標準の接続ダイアログを使います。 以降は、**最近使用したプロジェクトを開く** メニューや、4DLink ショートカットファイルを使って直接接続できるようになります。

4D Server で実行されているプロジェクトに接続するには:

1. 次のいずれかの方法をおこないます:
   - Welcome ウィザードにて **4D Serverに接続** を選択します。
   - **ファイル** メニューより \*\*開く ＞ リモートプロジェクト...\*\*を選択するか、**開く** ツールバーボタンより同様に選択します。

4D Server に接続するためのダイアログが表示されます。 ダイアログには **最近使用**、**利用可**、および **カスタム** という、3つのタブがあります。

リモートの 4D と同じサブネットワークに 4D Server が接続されている場合は **利用可** タブを選択します。 4D Server には組み込みのブロードキャストシステムがあり、デフォルトで、ネットワーク上に利用可能な 4D Server データベースの名前を公開します。 このリストは、名前が見つかった順に表示され、動的に更新されます。

![](../assets/en/getStart/serverConnect.png)

このリストからサーバーに接続するには、名前上でダブルクリックするか、名前を選択して **OK** ボタンをクリックします。

公開されているプロジェクトが **利用可** タブに見つからない場合には、**カスタム** タブを開きます。 カスタムページでは、IPアドレスでネットワーク上のサーバーを指定し、それに任意の名前をつけられます。

![](../assets/en/Desktop/serverConnect2.png)

- **プロジェクト名**: 4D Server プロジェクトのローカル名を指定できます。 この名前は **最近使用** ページでプロジェクトを参照する際に使用されます。
- **ネットワークアドレス**: 4D Server が起動されたマシンの IPアドレスを指定します。
  - 2つのサーバーが同じマシン上で同時に起動されているときは、IPアドレスの後にコロンとポート番号を続けます。例: `192.168.92.104:19820`。
  - デフォルトで、4D Server の公開ポートは 19813 です。 この番号は、プロジェクト設定で変更できます。

> The [**Activate development mode**](#development-mode) option opens the remote connection in a special read/write mode and requires to access the project folder from the remote 4D.

このページでサーバーを指定したら、**OK** ボタンをクリックしてサーバーに接続できます。

サーバーとの接続が確立されると、そのリモートプロジェクトは **最近使用** タブのリストに加えられます。

### サーバー上のプロジェクトファイルの更新

インタープリターモードの場合、4D Server は *.4DProject* プロジェクトファイル (非圧縮) の [.4dz](building.md#コンパイル済みストラクチャーをビルド) ファイルを自動的に作成し、リモートマシンに送信します。

- プロジェクトが編集され 4D Server にリロードされた場合など、必要に応じてプロジェクトの .4dzファイルは自動的に更新されます。 プロジェクトは次の場合にリロードされます:
  - 4D Server アプリケーションウィンドウが OS の最前面に来たり、同じマシン上の 4D アプリケーションが編集を保存した場合 (後述参照) に自動でリロードされます。
  - when the [`RELOAD PROJECT`](../commands-legacy/reload-project.md) command is executed. プロジェクトの新しいバージョンをソース管理システムよりプルしたときなどに、このコマンドを呼び出す必要があります。

### リモートマシンのプロジェクトファイルの更新

4D Server 上で .4dz ファイルの更新版が生成された場合、その更新版を利用するには、接続中のリモート 4D マシンは一度ログアウトし、4D Server に再接続する必要があります。

## 4D と 4D Server の同じマシン上での使用

同じマシン上で 4D が 4D Server に接続すると、アプリケーションはシングルユーザーモードの 4D のようにふるまい、デザイン環境にてプロジェクトファイルの編集が可能です。 この機能により、クライアント/サーバーアプリケーションを運用時と同じコンテキストで開発することができます。

> When 4D connects to a 4D Server on the same machine, the **development mode** is automatically activated, whatever the [Development mode](#development-mode) status.

デザイン環境にて 4D が **すべてを保存** アクションを (**ファイル** メニューを使って明示的に、または、アプリケーションモードへの移行により暗示的に) おこなうと、4D Server は同期的にプロジェクトファイルをリロードします。 4D Server によるプロジェクトファイルのリロードが完了するのを待って、4D は続行します。

ただし、[標準のプロジェクトアーキテクチャー](Project/architecture.md) とは次のふるまいにおいて異なりますので、注意が必要です:

- 4D が使用する userPreferences.\{username\} フォルダーは、4D Server が使用するプロジェクトフォルダー内のものと同一ではありません。 この専用の "userPreferences" フォルダーはプロジェクトシステムフォルダー内 (つまり、.4dzプロジェクトを開く場合と同じ場所) に格納されます。
- 4D が使用する DerivedData フォルダーは、4D Server が使用するプロジェクトフォルダー内のものと同一ではありません。 この専用の "DerivedDataRemote" フォルダーはプロジェクトのシステムフォルダー内に格納されます。
- catalog.4DCatalog ファイルは 4D ではなく 4D Server によって編集されます。 catalog の情報はクライアント/サーバーリクエストによって同期されます。
- directory.json ファイルは 4D ではなく 4D Server によって編集されます。 directory の情報はクライアント/サーバーリクエストによって同期されます。
- 4D は、4D Server 上のものではなく、独自の内部的なコンポーネントやプラグインを使用します。

> プラグインやコンポーネントを 4D あるいは 4D Server アプリケーションレベルにインストールすることは、推奨されません。

## Development mode

The **Development mode** in 4D Server is a special project opening mode that allows read/write access for connected remote 4D applications. The project must be available in [**interpreted** mode](../Concepts/interpreted.md).

This mode allows one or more developers to work simultaneously on the same project in Design environment. When a project is opened in **Development mode**:

- Project files are available in read/write so that you can edit methods, forms, etc.
- Several remote 4D can concurrently open the same interpreted project files and edit them. An automatic locking system prevents from concurrent access to the same resource.
- Modifications are made available to all remote developers. Note however that there is no automatic push to remote developers, they need to refresh to get latest versions of files (a refresh is done each time the developer switches from design mode to application mode for example, or selects **Save all** from the **File** menu).

To use this mode, select the **Activate development mode** option in the [connection dialog box](#opening-a-remote-project) from your remote 4D. You are prompted to **Select 4D project file**: you need to select the [.project file](../Project/architecture.md#applicationname4dproject-file) that 4D Server has opened. If you select a different file, an alert dialog box warns you that the development mode is not available. It means that the remote 4D must have access to the project folder over the network (the whole project folder must be shared, i.e. the root folder of the project).

:::caution

For performance reasons with this configuration, it is strongly recommended that the project folder be stored on a dedicated file server (e.g. a NAS) on a local network.

:::

:::note

When both the server and the remote 4D are on the same machine, [additional rules applies](#using-4d-and-4d-server-on-the-same-machine).

:::

Here is an overview of the development mode architecture:

![](../assets/en/Desktop/develop-mode.png)

:::note 互換性

This feature is designed for small-size development teams who are used to work on binary databases and want to benefit from project features while maintaining their current organisation. However, for multi-user development on 4D projects, we recommend using a standard architecture where developers work on their machine and manage their work using source control repository tools (Git, SVN, etc.). This organisation provides a great flexibility by allowing developers to work on different branches, and compare, merge, or revert modifications.

:::

:::tip 関連したblog 記事

[Developing Concurrently on 4D Server in Project Mode](https://blog.4d.com/developing-concurrently-on-4d-server-in-project-mode/)

:::