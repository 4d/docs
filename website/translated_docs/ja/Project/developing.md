---
id: developing
title: プロジェクトの開発
---

## 概要

4D プロジェクトは **4D** アプリケーションを使って作成します。 4D Developer は 4D プロジェクト用の統合開発環境 (IDE) およびアプリケーションランタイムを提供し、プロジェクトの開発・テスト・デバッグに使います。

> 4D プロジェクトファイルの大多数はテキストファイルなため、任意のテキストエディターを使って作業することも可能です。 ファイルへの同時アクセスはファイルアクセスマネージャーによって管理されます (後述参照)。

マルチユーザー開発は標準的なソース管理ツールを使っておこないます。これによって、異なるブランチで開発し、比較してマージまたは変更を戻すといった処理が可能になります。


## 開発環境

インタープリター版のプロジェクトファイル (*applicationName.4DProject* ([4D プロジェクトのアーキテクチャー](architecture.md) 参照)) は次の開発環境で開くことができます:

- 4D を使い、**ローカルなプロジェクトファイル** を開きます - この場合、プロジェクトのすべての要素が開発者に提供されます。 プロジェクトファイルを作成・編集・コンパイルすることができます。 また、4D にて **Test application** メニューコマンドを実行するか、[統合された Web サーバー](WebServer/webServerObject.md)を使用することで、開発の成果をいつでもテストすることができます。
- **4D Server と同じマシン上** で 4D を使い、その 4D Server に接続します。この場合、ローカルプロジェクトと同様に開発がおこなえます。 この機能により、クライアント/サーバーアプリケーションを運用時と同じコンテキストで開発することができます ([後述参照](#4D-Serverでのプロジェクト開発))。
- **リモートマシン** で 4D を使い、4D Server に接続します。この場合、4D Server はプロジェクトを .4dz に[圧縮](building.md#コンパイル済みストラクチャーをビルド)して 4D に送信します。 したがって、すべてのストラクチャーファイルは読み取り専用です。 この機能はテスト用に便利です。


## 4D Serverでのプロジェクト開発

### サーバー上のプロジェクトファイルの更新

4D Server プロジェクトの開発は次の原則に基づきます:

- プロジェクト機能の作成・テスト・編集はローカルファイルを使い、4D でおこないます。 [4D Server と同じマシン上の 4D](#同じマシン上での-4D-の使用) を使えば、4D Server と直に作業することができます。

> ブランチでの開発や、開発途中のプロジェクトの保存、必要に応じたロールバックといった利便性のため、Git などの標準的なソース管理ツールの使用が推奨されます。

- 4D Server は非圧縮の *.4DProject* プロジェクトファイルをインタープリターモードで実行することができ、リモート 4D はそれに接続して機能のテストをおこなえます。 その際に、4D Server はプロジェクトの [.4dz](building.md#コンパイル済みストラクチャーをビルド) ファイルを自動的に作成し、リモートマシンに送信します。

- プロジェクトが編集され 4D Server にリロードされた場合など、必要に応じてプロジェクトの .4dzファイルは自動的に更新されます。 プロジェクトは次の場合にリロードされます:
    - 4D Server アプリケーションウィンドウが OS の最前面に来たり、同じマシン上の 4D アプリケーションが編集を保存した場合 (後述参照) に自動でリロードされます。
    - `RELOAD PROJECT` コマンドが実行されたときにリロードされます。 プロジェクトの新しいバージョンをソース管理システムよりプルしたときなどに、このコマンドを呼び出す必要があります。


### リモートマシンのプロジェクトファイルの更新

4D Server 上で .4dz ファイルの更新版が生成された場合、その更新版を利用するには、接続中のリモート 4D マシンは一度ログアウトし、4D Server に再接続する必要があります。



### 同じマシン上での 4D の使用

同じマシン上で 4D が 4D Server に接続すると、アプリケーションはシングルユーザーモードの 4D のようにふるまい、デザイン環境にてプロジェクトファイルの編集が可能です。 Each time 4D performs a **Save all** action from the design environment (explicitly from **File** menu or implicitly by switching to application mode for example), 4D Server synchronously reloads project files. 4D waits for 4D Server to finish reloading the project files before it continues.

However, you need to pay attention to the following behavior differences compared to [standard project architecture](architecture.md):

- the userPreferences.{username} folder used by 4D is not the same folder used by 4D Server in the project folder. Instead, it is a dedicated folder, named "userPreferences", stored in the project system folder (i.e., the same location as when opening a .4dz project).
- the folder used by 4D for derived data is not the folder named "DerivedData" in the project folder. Instead it is a dedicated folder named "DerivedDataRemote" located in the project system folder.
- the catalog.4DCatalog file is not edited by 4D but by 4D Server. Catalog information is synchronised using client/server requests
- the directory.json file is not edited by 4D but by 4D Server. Directory information is synchronised using client/server requests
- 4D uses its own internal components and plug-ins instead of those in 4D Server.

> It is not recommended to install plug-ins or components at the 4D or 4D Server application level.


## ファイルの保存

4D でプロジェクトを開発するにあたって、ストラクチャー要素やメソッド、フォームの作成・変更・保存には 4D のビルトインエディターを利用することができます。 **保存** メニューを選択するか、エディターウィンドウがフォーカスを得た/失ったときに、編集内容がディスクに保存されます。

このエディターの作業対象はディスク上のファイルなため、同じファイルが同時に編集されていたり削除されていたりといった場合には競合が発生します。 たとえば、一つのメソッドをメソッドエディターで編集しつつ、標準のテキストエディターでも開いて変更した場合に競合が起こりえます。

4D のフレームワークには同時アクセスを制御するためのファイルアクセスマネージャーが含まれています:

- 開かれているファイルが OS レベルで読み取り専用の場合、エディターには鍵アイコンが表示されます: ![](assets/en/Project/lockicon.png)
- 開かれているファイルが複数のアクセスによって同時編集を受けている場合、4D は保存時に警告ダイアログを表示します: ![](assets/en/Project/projectReload.png)
    - **はい**: 編集内容を破棄してリロードします
    - **いいえ**: 編集内容で上書き保存します
    - **キャンセル**: 保存しません

この機能はすべてのビルトインエディター (ストラクチャー、フォーム、メソッド、設定、ツールボックス) において有効化されています).
