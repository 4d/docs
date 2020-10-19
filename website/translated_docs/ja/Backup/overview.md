---
id: overview
title: 概要
---

4D includes a full application backup and restore module.

This module allows backing up an application currently in use without having to exit it. 各バックアップには、プロジェクトフォルダー、データファイルのほか、任意の追加ファイルやフォルダーを含められます。 These parameters are first set in the Settings.

バックアップは手動で実行するか、またはユーザーが操作しなくても定期的に自動実行することができます。 特定のランゲージコマンドやデータベースメソッドを使用すると、独自のインタフェースにバックアップ機能を統合することができます。

Applications can be restored automatically when a damaged application is opened.

また、この統合バックアップモジュールでは、[ログファイル](log.md) (.journal 拡張子のジャーナルファイル) を利用することができます。 このファイルは、データ上で実行された全操作の記録を保管し、2回のバックアップ間の安全性を完全に保証します。 In case of problems with an application in use, any operations missing in the data file are automatically reintegrated the next time the application is opened. ログファイルの内容はいつでも確認することができます。

> You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of applications for backup purposes. これらのソリューションは次のメカニズムや技術に基づいています:  
> - 4D Serverを使い、(統合されたバックアップモジュールメカニズムを使用して) 論理ミラーを設定する  
> - SQL による同期  
> - HTTP による同期 (/rest/url)


> 4Dのセキュリティ機能の概要については、[4D Security guide](https://blog.4d.com/4d-security-guide/) をご覧ください。
