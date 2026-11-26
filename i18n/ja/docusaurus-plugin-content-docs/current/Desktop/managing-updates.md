---
id: managing-updates
title: Managing Updates
---

原則的に、サーバーアプリケーションや組み込みのシングルユーザーアプリケーションを更新するには、ユーザーの介入 (またはカスタムのシステムルーチンのプログラミング) が必要です。組み込みアプリケーションの新しいバージョンが利用可能になるたびに、運用中のアプリケーションを終了して、古いファイルを新しいファイルに手動で置き換え、その後アプリケーションを再起動してカレントのデータファイルを選択しなければなりません。

この手順は、次のランゲージコマンドを使って大部分を自動化することができます: [`SET UPDATE FOLDER`](../commands/set-update-folder)、[`RESTART 4D`](../commands/restart-4d)、および[`Last update log path`](../commands/last-update-log-path)(モニタリング操作用)。これらのコマンドを使い、4Dアプリケーションに、以下に説明する自動更新手順をトリガーする機能を実装します。具体的には、メニューコマンドや、バックグラウンドで動作するプロセスなどを実装し、サーバーにアーカイブがあるかどうかを定期的にチェックします。

> You also have XML keys to elevate installation privileges so that you can use protected files under Windows (see the [AutoUpdate XML keys](../BuildApplication/auto-update.md)).

以下に、サーバーや組み込みシングルユーザーアプリケーションをアップデートする場合のシナリオを説明します:

1. HTTPサーバーなどを使用して、サーバーアプリケーションまたは組み込みシングルユーザーアプリケーションの新バージョンを本番環境のマシンに転送します。
2. In the application in production, you call the [`SET UPDATE FOLDER`](../commands/set-update-folder) command: this command designates the location of the folder where the "pending" update of the current application is found. 任意で、本番環境バージョンのカスタム要素 (ユーザーファイル) をこのフォルダーにコピーすることもできます。
3. In the application in production, call the [`RESTART 4D`](../commands/restart-4d) command: this command automatically triggers execution of a utility program named "updater" that exits the current application, replaces it using the "pending" update if one is specified, and restarts the application with the current data file. 旧バージョンは名称変更されます。

> この手順は、[サービスとして実行される](../server/service.md) Windowsサーバーアプリケーションでも使用することができます。

### アップデートログ

インストール手順により、ターゲットマシン上の組み込みアプリケーション (クライアント、サーバー、またはシングルユーザー) の更新処理の詳細が記録されたログファイルが作成されます。このファイルは、インストール中に発生したエラーの分析に役立ちます。

アップデートログは、`YYYY-MM-DD_HH-MM-SS_log_X.txt` という名前で、たとえば、2021年 8月 25日の 14:23 に作成されたファイルに対しては `2021-08-25_14-23-00_log_1.txt` という名前になります。

このファイルは、システムユーザーフォルダー内の "Updater" アプリケーションフォルダー内に作成されます。 [`Last update log path`](../commands/last-update-log-path) コマンドを使用することで、このファイルの保存場所を探すことができます。

