---
id: overview
title: 4D アプリケーションの拡張
---

## 概要

4D [プロジェクトアーキテクチャー](../Project/architecture.md) はオープンであり、様々な方法で拡張することができます。 4D でネイティブに利用できない機能が必要な場合、以下のような様々な方法でアプリケーションに統合することができます:

- [**System workers**](../API/SystemWorkerClass.md) を使用すると、4D コードからどんな外部プロセス(シェルコマンド、PHP、任意のスクリプト、など) でも呼び出すことができます。 またその実行をモニターすることもできます。
- [**SQL コマンド**](../commands/theme/SQL) を使用すると、様々なSQL データソースに接続して、それらを使用することができます。
- The [**built-in HTTP client**](../API/HTTPRequestClass.md) can request any HTTP server and process data.
- [**Web Areas**](../FormObjects/webArea_overview.md) can give access to web pages or various HTML contents within your forms.
- [**Components**](Concepts/components.md). Components are made of 4D code. 4D proposes a set of utility components (see below) that you can install and use depending on your needs. You can also [develop your own 4D components](develop-components.md), or use third-party components. Many developers from the 4D community have shared 4D components (browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic).
- [**Plug-ins**](../Concepts/plug-ins.md). Plug-ins can be built using any language. プラグインは、4D がネイティブにおこなっていないこと (例: 特定のプラットフォーム技術など) や、4D だけでは困難なことを実現します。 [このページ](develop-plug-ins.md) で説明しているように、独自のプラグインを開発することができます。 多くの機能は、既存の 4Dプラグインでカバーされています。 [`4d-plugin`](https://github.com/topics/4d-plugin) のトピックで公開されている 4Dプラグインの一覧を Github で閲覧することができます。

## Components developed by 4D

4D proposes various components to the 4D community, covering many development needs. All 4D components can be found on the [**4D github repository**](https://github.com/4d).

A subset of these components is listed by default in the [Dependency Manager](../Project/components.md), including:

| コンポーネント               | Github repository                                                           | 説明                                                                                | 主な機能                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit              | https://github.com/4d/4D-AIKit              | サードパーティのOpenAI API に接続するためのクラス群                                                   | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit             | https://github.com/4d/4D-NetKit             | サードパーティAPI に接続するためのWeb サービスツール群                                                   | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress           | https://github.com/4d/4D-Progress           | 1つ以上の進捗バーを同じウィンドウで開く                                                              | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D QPDF               | https://github.com/4d/4D-QPDF               | Extract attachments from PDF/A-3 files                                            | `PDF Get attachments`                                                                                                                   |
| 4D SVG                | https://github.com/4d/4D-SVG                | 一般的な svgグラフィックオブジェクトの作成・操作                                                        | `SVGTool_Display_viewer`, 複数の `SVG_` メソッド                                                                                               |
| 4D ViewPro            | https://github.com/4d/4d-view-pro           | フォームに追加できる表計算機能                                                                   | [4D View Pro ドキュメンテーション](ViewPro/getting-started.md) 参照。                                                                                |
| 4D Widgets            | https://github.com/4d/4D-Widgets            | DatePicker, TimePicker, SearchPicker 4Dウィジェットの管理                                  | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| 4D WritePro Interface | https://github.com/4d/4D-WritePro-Interface | Manage 4D Write Pro palettes and [table wizard](../WritePro/writeprointerface.md) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |
| Build4D               | https://github.com/4d-depot/Build4D         | Compile, build, and sign projects                                                 | CI/CD                                                                                                                                   |



