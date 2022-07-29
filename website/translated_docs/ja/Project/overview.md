---
id: overview
title: 概要
---

A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. 4D プロジェクトは主にテキストファイルによって構成されています。


## プロジェクトファイル

4D プロジェクトファイルは 4D または 4D Server で開いて編集します。 4D では、ストラクチャーエディター、コードエディター、フォームエディター、メニューエディターなど、機能の充実したエディターを使ってファイルを扱うことができます。

また、人間にも解読可能なテキストファイル (JSON、XML等) 形式で提供されているため、プロジェクトの読み書きは任意のコードエディターでおこなうことも可能です。

4D プロジェクトファイルによって、汎用的なコーディング、アプリケーションテンプレートの作成や、コードシェアリングが容易になります。 プロジェクトは内部的に [フォルダーとファイル](Project/architecture.md) で構成されています。


## 開発

4D プロジェクトは **4D** アプリケーションを使って作成します。 It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project.

マルチユーザー開発は標準的な **ソース管理** リポジトリツール (Perforce, Git, SVN 等) を使っておこないます。これによって、異なるブランチで開発し、比較してマージまたは変更を戻すといった処理が可能になります。


## アプリケーションの仕上げ

プロジェクトファイルは [コンパイル](compiler.md) し、簡単に運用することができます。 プロジェクトをもとに、次の 3種のアプリケーションを作成することができます:

- [Web](WebServer/webServer.md) アプリケーション
- [モバイル](https://developer.4d.com/go-mobile/) アプリケーション
- [デスクトップ](Desktop/building.md) アプリケーション (クライアント/サーバーまたはシングルユーザー)

Back end applications can be deployed using 4D Server, 4D, or [merged with 4D Volume license](../Desktop/building.md).