---
id: overview
title: 概要
---

4D [プロジェクトアーキテクチャー](../Project/architecture.md) はモジュール式です。 [**コンポーネント**](../Concepts/components.md) や [**プラグイン**](../Concepts/plug-ins.md) をインストールすることで、4Dプロジェクトに追加機能を持たせることができます。 コンポーネントは 4Dコードで構成されていますが、プラグインはどんな言語でも作成できます。


## 4Dコンポーネントの一覧

4D にはビルトインの 4Dコンポーネントがあらかじめ組み込まれており、エクスプローラーのメソッドページにて、**コンポーネントメソッド** テーマ内で確認することができます。


| コンポーネント名                                                                      | 詳細                                                                                                     | 主な機能                                                                                               |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 4D Labels                                                                     | ラベルテンプレートを作成するための内部コンポーネント                                                                             |                                                                                                    |
| [4D Mobile App Server](https://github.com/4d-go-mobile/4D-Mobile-App-Server)  | 認証、セッション管理、モバイルアプリケーション開発のためのユーティリティクラスと関数のセット                                                         | `.Action`, `.Authentication`, `.PushNotification`, `.WebHandler`, メールでの確認をともなう認証                   |
| [4D NetKit](https://github.com/4d/4D-NetKit)                                  | サードパーティーAPI に接続するためのツール                                                                                | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                   |
| [4D Progress](https://doc.4d.com/4Dv19/4D/19/4D-Progress.100-5461799.en.html) | 1つ以上の進捗バーを同じウィンドウで開く                                                                                   | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...                        |
| [4D SVG](https://doc.4d.com/4Dv19/4D/19/4D-SVG-Component.300-5462064.en.html) | 一般的な svgグラフィックオブジェクトの作成・操作                                                                             | `SVGTool_Display_viewer`, 複数の `SVG_` メソッド                                                          |
| [4D ViewPro](ViewPro/getting-started.md)                                      | フォームに追加できる表計算機能                                                                                        | [4D View Pro ドキュメンテーション](ViewPro/getting-started.md) 参照。                                           |
| [4D Widgets](https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html)   | DatePicker, TimePicker, SearchPicker 4Dウィジェットの管理                                                       | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ...            |
| [4D WritePro Interface](https://github.com/4d/4D-WritePro-Interface)          | [4D Write Pro](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-Write-Pro-Reference.100-5606477.ja.html) パレットの管理 | `WP CreatePreview`, `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget` |


## サードパーティーコンポーネント

独自の 4Dコンポーネントを開発し、インストールすることができます。 詳しくは [このページ](develop-components.md) を参照ください。

4Dコミュニティの多くの開発者が 4Dコンポーネントを公開しています。それらをインストールしてプロジェクトで使用することができます。

[`4d-component`](https://github.com/topics/4d-component) のトピックで公開されている 4Dコンポーネントの一覧を Github で閲覧することができます。


## プラグイン

プラグインは、4D がネイティブにおこなっていないこと (例: 特定のプラットフォーム技術など) や、4D だけでは困難なことを実現します。 [このページ](develop-plug-ins.md) で説明しているように、独自のプラグインを開発することができます。

多くの機能は、既存の 4Dプラグインでカバーされています。 [`4d-plugin`](https://github.com/topics/4d-plugin) のトピックで公開されている 4Dプラグインの一覧を Github で閲覧することができます。


