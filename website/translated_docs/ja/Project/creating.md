---
id: creating
title: 4D プロジェクトの作成
---

## 最初に

新規の 4D プロジェクトを作成できるのは **4D Developer** または **4D Server** アプリケーションです ([プロジェクトの開発](developing.md) 参照)。

開発は、4D Developer (または他のテキスト編集ツール) を使ってローカルにおこないます。 Projects opened by 4D Server are available in read-only mode to remote 4D Developer applications, for testing purposes only (except when the [4D Developer and the 4D Server are on the same machine](developing.md#using-4d-developer-on-the-same-machine)).

運用するにあたっては、4D プロジェクトは .4dz ファイル (圧縮ファイル) の形で提供されます。 詳細については [プロジェクトパッケージのビルド](building.md) を参照ください。

> 既存のバイナリデータベースを変換してプロジェクトデータベースにすることもできます doc.4d.com の "[データベースをプロジェクトモードに変換する](https://doc.4d.com/4Dv18/4D/18/Converting-databases-to-projects.300-4606146.ja.html)" 参照。

## プロジェクトファイルの作成

新規データベースプロジェクトを作成するには:

1. Launch a 4D Developer or a 4D Server application.
2. Select **New > Database Project...** from the **File** menu: ![](assets/en/Project/project-create1.png) OR (4D Developer only) Select **Database Project...** from the **New** toolbar button: ![](assets/en/Project/projectCreate2.png)  
    A standard **Save** dialog box appears so that you can choose the name and location of the 4D database project main folder.
3. プロジェクトフォルダー名を入力したら、**保存**をクリックします。 この名称はつぎの場所に使用されます: 
    - プロジェクトを格納するフォルダーの名称 ([4D プロジェクトのアーキテクチャー](Project/architecture.md) で紹介している例では "MyFirstProject")
    - "Project" フォルダーの中にある .4DProject ファイルの名称  
          
        OS によって許可されている名称であれば使用可能です。 *警告:* 異なる OS での使用を予定していたり、ソース管理ツールを利用したりするのであれば、それらの命名規則を考慮する必要があります。

ダイアログボックスを受け入れると、4D は開いているデータベース (あれば) を閉じ、指定の場所にプロジェクトフォルダーを作成し、データベースプロジェクトに必要なファイルを設置します (詳細については [4D プロジェクトのアーキテクチャー](Project/architecture.md) を参照ください)。