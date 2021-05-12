---
id: creating
title: プロジェクトを開発する
---

4Dプロジェクトは、包括的な統合開発環境 (IDE) を提供する **4D** アプリケーションを使って作成・開発します。 **4D Server** も、空のプロジェクトを新規作成することができます。

マルチユーザー開発は標準的な **ソース管理** リポジトリツール (Perforce, Git, SVN 等) を使っておこないます。これによって、異なるブランチで開発し、比較してマージまたは変更を戻すといった処理が可能になります。


## プロジェクトの作成

新規の 4Dアプリケーションプロジェクトは **4D** または **4D Server** アプリケーションを使って作成します。 いずれの場合も、プロジェクトファイルはローカルマシン上に保存します。

新規プロジェクトを作成するには:

1. 4D または 4D Server を起動します。
2. **ファイル** メニューより **新規 > プロジェクト...**を選択します: <p>![](assets/en/getStart/projectCreate1.png)<p>OR<p>(4D のみ) **新規** ツールバーボタンより **プロジェクト...**を選択します:<p>![](assets/en/getStart/projectCreate2.png)<p>標準の **保存** ダイアログが表示され、4D プロジェクトの名前と保存場所を指定します。

3. プロジェクトフォルダー名を入力したら、**保存**をクリックします。<p> この名称はつぎの場所に使用されます:
    - プロジェクト全体を保存するフォルダーの名称
    - "Project" フォルダーの中にある .4DProject ファイルの名称<br /><br />

    OS によって許可されている名称であれば使用可能です。 しかしながら、異なる OS での使用を予定していたり、ソース管理ツールを利用したりするのであれば、それらの命名規則を考慮する必要があります。

**保存** ダイアログを受け入れると、4D は開いているプロジェクト (あれば) を閉じ、指定の場所にプロジェクトフォルダーを作成し、プロジェクトに必要なファイルを設置します。 (詳細については [4D プロジェクトのアーキテクチャー](Project/architecture.md) を参照ください)。

これで、プロジェクトの開発を始めることができます。

## プロジェクトを開く

既存のプロジェクトを 4D で開くには:

1. Welcome ウィザードにて **ローカルアプリケーションプロジェクトを開く** を選択します。 <p>OR<p> **ファイル** メニューより **開く ＞ ローカルプロジェクト...**を選択するか、**開く** ツールバーボタンより同様に選択します。<p> 標準のファイルを開くためのダイアログが表示されます。

2. プロジェクトの `.4dproject` ファイルを選択し、**開く** をクリックします。<p> デフォルトで、プロジェクトはカレントデータファイルとともに開かれます。 ほかにも、次のファイルタイプを選択できます:

    - *圧縮されたプロジェクトファイル*: `.4dz` 拡張子 - 運用プロジェクト
    - *ショートカットファイル*: `.4DLink` 拡張子 - プロジェクトやアプリケーションを起動する際に必要な追加のパラメーターを格納しています (アドレス、認証情報、他)
    - *バイナリファイル*: `.4db` または `.4dc` 拡張子 - 従来の 4D データベース形式

### オプション

標準のシステムオプションに加え、4D が提供する *開く* ダイアログボックスには、*開く* と**データファイル** という、2つのオプションがあります。

- **開く** - プロジェクトを開くモードを指定できます:
    - **インタープリター** または **コンパイル済み**: これらのオプションは、選択したプロジェクトが [インタープリターおよびコンパイル済みコード](Concepts/interpreted.md) を含んでいる場合に選択可能となります。
    - **[Maintenance Security Center](MSC/overview.md)**: 損傷を受けたプエロジェクトに必要な修復を施すために、保護モードでプロジェクトを開きます。

- **データファイル** - プロジェクトで使用するデータファイルを指定できます。 デフォルトでは、**現在のデータファイル** オプションが選択されています。

## プロジェクトを開く (その他の方法)

4D では、開くダイアログを経由しなくてもプロジェクトを開くことのできる方法がいくつかあります:

- メニューを使用:
    -   *メニューバー* - **ファイル** > **最近使用したデータベースを開く / {project name}**
    -   *4D ツールバー* -  **開く** ボタンとそのサブメニューを使ってプロジェクトを選択します。

- 4D 環境設定を使用:
    -   4D 環境設定の **開始時** オプションに **最後に使用したデータベースを開く** を指定します。

- `.4DLink` ファイルを使用

### Opening a Project with a 4DLink file

You can use a [`.4DLink` file](#about-4DLink-files) to launch the 4D application and open the target 4D project. これをおこなうには 2つの方法があります:

- double-click or drag and drop the `.4DLink` file onto the 4D application
- go to **File** > **Open Recent Projects** and select a project

![open-recent-projects](assets/en/Project/4DLinkfiles.png)

A .4DLink file of "remote project" type can be copied and used on several machines.
> It's also possible to select a 4DLink file in the 4D and 4D Server opening dialog box (opening local project only).

## About 4DLink Files

Files with the `.4DLink` extension are XML files that contain parameters intended to automate and simplify opening local or remote 4D projects.

`.4DLink` files can save the address of a 4D project as well as its connection identifiers and opening mode, saving you time when opening projects.

4D automatically generates a `.4DLink` file when a local project is opened for the first time or when connecting to a server for the first time. The file is stored in the local preferences folder at the following location:

- Windows 7 and higher: C:\Users\UserName\AppData\Roaming\4D\Favorites vXX\
- OS X: Users/UserName/Library/Application Support/4D/Favorites vXX/

XX represents the version number of the application. For example, "Favorites v19" for 4D v19.

That folder is divided into two subfolders:
- the **Local** folder contains the `.4DLink` files that can be used to open local projects
- the **Remote** folder contains the `.4DLink` files of recent remote projects

`.4DLink` files can also be created with an XML editor.

4D provides a DTD describing the XML keys that can be used to build a `.4DLink` file. This DTD is named database_link.dtd and is found in the \Resources\DTD\ subfolder of the 4D application.


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