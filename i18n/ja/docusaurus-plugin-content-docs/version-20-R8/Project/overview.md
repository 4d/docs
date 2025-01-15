---
id: overview
title: 概要
---

Web やモバイル、デスクトップの運用形態に関わらず、データベースストラクチャーからユーザーインターフェースまで (コード、フォーム、メニュー、ユーザー設定、その他必要なリソース含む) 、4D アプリケーションのすべてのソースコードが 4D プロジェクトには格納されています。 4D プロジェクトは主にテキストファイルによって構成されています。

## プロジェクトファイル

4D プロジェクトファイルは 4D または 4D Server で開いて編集します。 With 4D, full-featured editors are available to manage files, including a structure editor, a [Code Editor](../code-editor/write-class-method.md), a [form editor](../FormEditor/formEditor.md), a menu editor...

また、人間にも解読可能なテキストファイル (JSON、XML等) 形式で提供されているため、プロジェクトの読み書きは任意のコードエディターでおこなうことも可能です。

4D プロジェクトファイルによって、汎用的なコーディング、アプリケーションテンプレートの作成や、コードシェアリングが容易になります。 プロジェクトは内部的に [フォルダーとファイル](Project/architecture.md) で構成されています。

## 開発

4D プロジェクトは **4D** アプリケーションを使って作成します。 4D は 4D プロジェクト用の統合開発環境 (IDE) を提供するだけでなく、Webサーバー、モバイルプロジェクトジェネレーター、およびアプリケーションランタイムも提供し、プロジェクトの開発・テスト・デバッグに使います。

マルチユーザー開発は標準的な **ソース管理** リポジトリツール (Perforce, Git, SVN 等) を使っておこないます。これによって、異なるブランチで開発し、比較してマージまたは変更を戻すといった処理が可能になります。

## アプリケーションの仕上げ

プロジェクトファイルは [コンパイル](compiler.md) し、簡単に運用することができます。 プロジェクトをもとに、次の 3種のアプリケーションを作成することができます:

- [Web](WebServer/webServer.md) アプリケーション
- [モバイル](https://developer.4d.com/go-mobile/) アプリケーション
- [デスクトップ](Desktop/building.md) アプリケーション (クライアント/サーバーまたはシングルユーザー)

Back end applications can be deployed using 4D Server, 4D, or [merged with 4D Volume Desktop](../Desktop/building.md).
