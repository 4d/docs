---
id: overview
title: 概要
---

4Dには、データベースのフルバックアップと復元用のモジュールが組み込まれています。

このモジュールにより、現在使用中のデータベースを終了しなくても、そのバックアップを作成することができます。 各バックアップには、プロジェクトフォルダー、データファイルのほか、任意の追加ファイルやフォルダーを含められます。 これらのパラメーターの指定は、最初にデータベース設定にておこないます。

バックアップは手動で実行するか、またはユーザーが操作しなくても定期的に自動実行することができます。 特定のランゲージコマンドやデータベースメソッドを使用すると、独自のインタフェースにバックアップ機能を統合することができます。

損傷したデータベースが開かれた場合には、自動的にデータベースを復元することができます。

また、この統合バックアップモジュールでは、[ログファイル](log.md) (.journal 拡張子のジャーナルファイル) を利用することができます。 このファイルは、データ上で実行された全操作の記録を保管し、2回のバックアップ間の安全性を完全に保証します。 使用中のデータベースに問題が発生した場合は、次回そのデータベースを開いたときに、データファイルから失われた操作が自動的に再統合されます。 ログファイルの内容はいつでも確認することができます。

> You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of databases for backup purposes. These solutions can be based on the following mechanisms and technologies:  
> - Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  
> - Synchronization using SQL - Synchronization using HTTP (/rest/url)


> For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).
