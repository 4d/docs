---
id: developing
title: プロジェクトの開発
---

## 概要

4D プロジェクトは **4D Developer** (**4D**) アプリケーションを使って作成します。 4D Developer は 4D プロジェクト用の統合開発環境 (IDE) およびアプリケーションランタイムを提供し、プロジェクトの開発・テスト・デバッグに使います。

> 4D プロジェクトファイルの大多数はテキストファイルなため、任意のテキストエディターを使って作業することも可能です。 ファイルへの同時アクセスはファイルアクセスマネージャーによって管理されます (後述参照)。

マルチユーザー開発は標準的なソース管理ツールを使っておこないます。これによって、異なるブランチで開発し、比較してマージまたは変更を戻すといった処理が可能になります。


## 開発環境

インタープリター版のプロジェクトファイル (*databaseName.4DProject* ([4D プロジェクトのアーキテクチャー](architecture.md) 参照)) は次の開発環境で開くことができます:

- 4D Developer を使い、**ローカルなプロジェクトファイル** を開きます - この場合、プロジェクトのすべての要素が開発者に提供されます。 プロジェクトファイルを作成・編集・コンパイルすることができます。 また、4D Developer にて **Test application** メニューコマンドを実行するか、[統合された Web サーバー](WebServer/webServerObject.md)を使用することで、開発の成果をいつでもテストすることができます。
- 4D Developer connection from the **same machine as 4D Server** - in this case, development is supported the same as local projects. This feature allows you to develop a client/server application in the same context as the deployment context ()[detailed below](#developing-projects-with-4d-server)).
- 4D Developer connection from a **remote machine** - in this case, 4D Server sends a .4dz version of the project ([compressed format](building.md#build-compiled-structure)) to 4D Developer. As a consequence, all structure files are read-only. This feature is useful for testing purposes.


## Developing projects with 4D Server

### Updating project files on the server

Developing a 4D Server project is based upon the following principles:

- You create, test, and modify the project features in a local version of the files using 4D Developer. To work directly with 4D Server, you can [use 4D Developer on the same machine as the server](#using-4d-developer-on-the-same-machine).

> It is recommended to use a standard source control tool (e.g. Git) in order to work with branches, to save projects at different steps, and/or to revert changes if necessary.

- 4D Server can run the *.4DProject* project file (not compressed) in interpreted mode, so that remote 4D can connect and test the features. For this purpose, 4D Server automatically creates and sends the remote machines a [.4dz version](building.md#build-compiled-structure) of the project.

- An updated .4dz version of the project is automatically produced when necessary, *i.e.* when the project has been modified and reloaded by 4D Server. The project is reloaded:
    - automatically, when the 4D Server application window comes to the front of the OS or when the 4D Developer application on the same machine saves a modification (see below).
    - when the `RELOAD PROJECT` command is executed. Calling this command is necessary for example when you have pulled a new version of the project from the source control platform.


### Updating project files on remote machines

When an updated .4dz version of the project has been produced on 4D Server, connected remote 4D machines must log out and reconnect to 4D Server in order to benefit from the updated version.



### Using 4D Developer on the same machine

When 4D Developer connects to a 4D Server on the same machine, the application behaves as 4D in single user mode and the design environment allows you to edit project files. Each time 4D Developer performs a **Save all** action from the design environment (explicitly from **File** menu or implicitly by switching to application mode for example), 4D Server synchronously reloads project files. 4D Developer waits for 4D Server to finish reloading the project files before it continues.

However, you need to pay attention to the following behavior differences compared to [standard project architecture](architecture.md):

- the userPreferences.{username} folder used by 4D Developer is not the same folder used by 4D Server in the database folder. Instead, it is a dedicated folder, named "userPreferences", stored in the database system folder (i.e., the same location as when opening a .4dz project).
- the folder used by 4D Developer for derived data is not the folder named "DerivedData" in the project folder. Instead it is a dedicated folder named "DerivedDataRemote" located in the database system folder.
- the catalog.4DCatalog file is not edited by 4D Developer but by 4D Server. Catalog information is synchronised using client/server requests
- the directory.json file is not edited by 4D Developer but by 4D Server. Directory information is synchronised using client/server requests
- 4D Developer uses its own internal components and plug-ins instead of those in 4D Server.

> It is not recommended to install plug-ins or components in 4D or 4D Server applications.


## ファイルの保存

4D でプロジェクトを開発するにあたって、ストラクチャー要素やメソッド、フォームの作成・変更・保存には 4D のビルトインエディターを利用することができます。 **保存** メニューを選択するか、エディターウィンドウがフォーカスを得た/失ったときに、編集内容がディスクに保存されます。

このエディターの作業対象はディスク上のファイルなため、同じファイルが同時に編集されていたり削除されていたりといった場合には競合が発生します。 たとえば、一つのメソッドをメソッドエディターで編集しつつ、標準のテキストエディターでも開いて変更した場合に競合が起こりえます。

4D Developer のフレームワークには同時アクセスを制御するためのファイルアクセスマネージャーが含まれています:

- 開かれているファイルが OS レベルで読み取り専用の場合、エディターには鍵アイコンが表示されます: ![](assets/en/Project/lockicon.png)
- 開かれているファイルが複数のアクセスによって同時編集を受けている場合、4D は保存時に警告ダイアログを表示します: ![](assets/en/Project/projectReload.png)
    - **はい**: 編集内容を破棄してリロードします
    - **いいえ**: 編集内容で上書き保存します
    - **キャンセル**: 保存しません

この機能はすべてのビルトインエディター (ストラクチャー、フォーム、メソッド、設定、ツールボックス) において有効化されています).
