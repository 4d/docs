---
id: version-18.0-developing
title: プロジェクトの開発
original_id: developing
---

## 開発ツール


4D database projects are created locally, using the **4D Developer** application. To open a project from 4D Developer, select the project's main file, named *databaseName.4DProject* (see [Architecture of a 4D project](architecture.md)). 4D プロジェクトファイルの大多数はテキストファイルなため、任意のテキストエディターを使って作業することも可能です。 ファイルへの同時アクセスはファイルアクセスマネージャーによって管理されます (後述参照)。

4D Server can open *databaseName.4DProject* files for testing purposes: remote 4D machines can connect and use the database, but all database structure files are read-only.

マルチユーザー開発は標準的なソース管理ツールを使っておこないます。これによって、異なるブランチで開発し、比較してマージまたは変更を戻すといった処理が可能になります。



## プロジェクトファイルアクセス

4D Developer でプロジェクトを開発するにあたって、ストラクチャー要素やメソッド、フォームの作成・変更・保存には 4D のビルトインエディターを利用することができます。 このエディターの作業対象はディスク上のファイルなため、同じファイルが同時に編集されていたり削除されていたりといった場合には競合が発生します。 For example, if the same method is edited in a method editor window *and* in a text editor, saving both modifications will result in a conflict.

4D Developer のフレームワークには同時アクセスを制御するためのファイルアクセスマネージャーが含まれています:

- if an open file which is read-only at the OS level, a locked icon is displayed in the editor: ![](assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog box when trying to save the changes: ![](assets/en/Project/projectReload.png)
    - **Yes**: discard editor changes and reload
    - **No**: save changes and overwrite the other version
    - **Cancel**: do not save

この機能はすべてのビルトインエディターにおいて有効化されています:

- ストラクチャーエディター
- フォームエディター
- メソッドエディター
- 環境設定
- ツールボックス
