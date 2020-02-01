---
id: version-18.0-creating
title: 4D プロジェクトの作成
original_id: creating
---

## 要件

New 4D projects can only be created from **4D Developer** (see [Developing a project](developing.md)).


**Note:** 4D Server can open .4DProject files in read-only mode, for testing purposes only. 運用するにあたっては、4D プロジェクトは .4dz ファイル (圧縮ファイル) の形で提供されます。 詳細については [プロジェクトパッケージのビルド](building.md) を参照ください。

> 既存のバイナリデータベースを変換してプロジェクトデータベースにすることもできます doc.4d.com の "[データベースをプロジェクトモードに変換する](https://doc.4d.com/4Dv18/4D/18/Converting-databases-to-projects.300-4606146.ja.html)" 参照。

## プロジェクトファイルの作成

新規データベースプロジェクトを作成するには:

1. 4D Developer アプリケーションを起動します。
2. Select **New > Database Project...** from the **File** menu: ![](assets/en/Project/project-create1.png) OR Select **Database Project...** from the **New** toolbar button: ![](assets/en/Project/projectCreate2.png) A standard **Save** dialog box appears so that you can choose the name and location of the 4D database project main folder.
1. Enter the name of your project folder and click **Save**. この名称はつぎの場所に使用されます:
    - プロジェクトを格納するフォルダーの名称 ([4D プロジェクトのアーキテクチャー](Project/architecture.md) で紹介している例では "MyFirstProject")
    - "Project" フォルダーの中にある .4DProject ファイルの名称<br /><br /> OS によって許可されている名称であれば使用可能です。 *Warning:* if your database project is intended to work on other systems or to be saved via a source control tool, you must take their specific naming recommendations into account.

ダイアログボックスを受け入れると、4D は開いているデータベース (あれば) を閉じ、指定の場所にプロジェクトフォルダーを作成し、データベースプロジェクトに必要なファイルを設置します  (詳細については [4D プロジェクトのアーキテクチャー](Project/architecture.md) を参照ください)。

つぎに、エクスプローラーを最前面にした 4D アプリケーションウィンドウが表示されます。 プロジェクトが作成されたら、プロジェクトフォームの作成や、ストラクチャーエディターを開いてテーブルおよびフィールドを追加するなど、開発作業へと進みます。
