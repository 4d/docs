---
id: overview
title: 概要
---

Web やモバイル、デスクトップの運用形態に関わらず、データベースストラクチャーからユーザーインターフェースまで (コード、フォーム、メニュー、ユーザー設定、その他必要なリソース含む) 、4D アプリケーションのすべてのソースコードが 4D プロジェクトには格納されています。 4D プロジェクトは主にテキストファイルによって構成されています。


## プロジェクトファイル

4D プロジェクトファイルは 4D または 4D Server で開いて編集します。 4D では、ストラクチャーエディター、メソッドエディター、フォームエディター、メニューエディターなど、機能の充実したエディターを使ってファイルを扱うことができます。

また、人間にも解読可能なテキストファイル (JSON、XML等) 形式で提供されているため、プロジェクトの読み書きは任意のコードエディターでおこなうことも可能です。

4D プロジェクトファイルによって、汎用的なコーディング、アプリケーションテンプレートの作成や、コードシェアリングが容易になります。 プロジェクトは内部的に [フォルダーとファイル](Project/architecture.md) で構成されています。


## 開発

4D プロジェクトは **4D** アプリケーションを使って作成します。 It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing to develop, test, and debug any kind of project.

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications.


## 運用

プロジェクトファイルをコンパイルし、Web、モバイル、またはデスクトップ (クライアントサーバーまたはシングルユーザー) で運用することができます。

最終アプリケーション運用ファイルは [4D アプリケーションビルダー](Admin/building.md) を使って生成します。 アプリケーションは、4D Server または 4D を使って開くほか、4D Volume ライセンスと統合することも可能です。

