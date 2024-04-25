---
id: overview
title: 概要
---

Web やモバイル、デスクトップの運用形態に関わらず、データベースストラクチャーからユーザーインターフェースまで (コード、フォーム、メニュー、ユーザー設定、その他必要なリソース含む) 、4D アプリケーションのすべてのソースコードが 4D プロジェクトには格納されています。 4D プロジェクトは主にテキストファイルによって構成されています。

## プロジェクトファイル

4D プロジェクトファイルは 4D または 4D Server で開いて編集します。 4D では、ストラクチャーエディター、コードエディター、フォームエディター、メニューエディターなど、機能の充実したエディターを使ってファイルを扱うことができます。

また、人間にも解読可能なテキストファイル (JSON、XML等) 形式で提供されているため、プロジェクトの読み書きは任意のコードエディターでおこなうことも可能です。

4D プロジェクトファイルによって、汎用的なコーディング、アプリケーションテンプレートの作成や、コードシェアリングが容易になります。 Project are organized internally in [folders and files](Project/architecture.md).

## 開発

4D projects are developed using the **4D** application. 4D は 4D プロジェクト用の統合開発環境 (IDE) を提供するだけでなく、Webサーバー、モバイルプロジェクトジェネレーター、およびアプリケーションランタイムも提供し、プロジェクトの開発・テスト・デバッグに使います。

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications.

## アプリケーションの仕上げ

Project files can be [compiled](compiler.md) and easily deployed. プロジェクトをもとに、次の 3種のアプリケーションを作成することができます:

- [web](WebServer/webServer.md) applications,
- [mobile](https://developer.4d.com/go-mobile/) applications,
- [desktop](Desktop/building.md) applications (client/server or single-user).

Back end applications can be deployed using 4D Server, 4D, or [merged with 4D Volume license](../Desktop/building.md).
