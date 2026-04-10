---
id: overview
title: 4D at a glance
slug: /GettingStarted/overview
---

A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, desktop, or mobile), from the database structure to the user interface, including code, web pages, forms, menus, user settings, or any required resources. 4D プロジェクトは主にテキストファイルによって構成されています。

## プロジェクトファイル

4D project files are open and edited using regular 4D platform applications (4D or 4D Server), on Windows or macOS. With 4D, full-featured editors are available to manage files, including a [code editor](../code-editor/write-class-method.md), a [web interface builder (4D Qodly Pro)](https://developer.4d.com/qodly/), a [form editor](../FormEditor/formEditor.md), a structure editor, a menu editor...

また、人間にも解読可能なテキストファイル (JSON、XML等) 形式で提供されているため、プロジェクトの読み書きは任意のコードエディターでおこなうことも可能です。

4D プロジェクトファイルによって、汎用的なコーディング、アプリケーションテンプレートの作成や、コードシェアリングが容易になります。 プロジェクトは内部的に [フォルダーとファイル](../Project/architecture.md) で構成されています。

## 開発

4D プロジェクトは **4D** アプリケーションを使って作成します。 It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a web interface builder, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project.

### ソース管理

マルチユーザー開発は標準的な **ソース管理** リポジトリツール (Perforce, Git, SVN 等) を使っておこないます。これによって、異なるブランチで開発し、比較してマージまたは変更を戻すといった処理が可能になります。

### Development mode on 4D Server

If you are a small-size development team and you do not want to use a source control tool, you can use the [**Development mode**](../Desktop/clientServer.md#development-mode) of 4D Server, allowing developers to work online on the same project with 4D in remote mode. Note that this alternative mode should be used in specific cases; using an organisation based upon source control tools (see above) is usually recommended.

## 運用

プロジェクトファイルは [コンパイル](compiler.md) し、簡単に運用することができます。 4D allows you to create several types of application from your projects, including [web](WebServer/webServer.md) applications, [desktop](Desktop/building.md) applications (client/server or single-user), or [mobile applications](https://developer.4d.com/go-mobile/).

バックエンドアプリケーションは、4D Server または 4D で運用するほか、[4D Volume Desktopライセンスと統合](../Desktop/building.md) することも可能です。