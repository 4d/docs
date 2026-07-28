---
id: overview
title: 拡張機能
---

4D [プロジェクトアーキテクチャー](../Project/architecture.md) はモジュール式です。 [**コンポーネント**](../Concepts/components.md) や [**プラグイン**](../Concepts/plug-ins.md) をインストールすることで、4Dプロジェクトに追加機能を持たせることができます。 コンポーネントは 4Dコードで構成されていますが、プラグインはどんな言語でも作成できます。

## Components developed by 4D

4D proposes various components to the 4D community, covering many development needs. All 4D components can be found on the [**4D github repository**](https://github.com/4d).

A subset of these components is listed by default in the [Dependency Manager](../Project/components.md), including:

| コンポーネント               | Github repository                                                           | 説明                                                                                | 主な機能                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit              | https://github.com/4d/4D-AIKit              | サードパーティのOpenAI API に接続するためのクラス群                                                   | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit             | https://github.com/4d/4D-NetKit             | サードパーティAPI に接続するためのWeb サービスツール群                                                   | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress           | https://github.com/4d/4D-Progress           | 1つ以上の進捗バーを同じウィンドウで開く                                                              | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D SVG                | https://github.com/4d/4D-SVG                | 一般的な svgグラフィックオブジェクトの作成・操作                                                        | `SVGTool_Display_viewer`, 複数の `SVG_` メソッド                                                                                               |
| 4D ViewPro            | https://github.com/4d/4d-view-pro           | フォームに追加できる表計算機能                                                                   | [4D View Pro ドキュメンテーション](ViewPro/getting-started.md) 参照。                                                                                |
| 4D Widgets            | https://github.com/4d/4D-Widgets            | DatePicker, TimePicker, SearchPicker 4Dウィジェットの管理                                  | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| 4D WritePro Interface | https://github.com/4d/4D-WritePro-Interface | Manage 4D Write Pro palettes and [table wizard](../WritePro/writeprointerface.md) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |

## サードパーティーコンポーネント

独自の 4Dコンポーネントを開発し、インストールすることができます。 詳しくは [このページ](develop-components.md) を参照ください。

4Dコミュニティの多くの開発者が 4Dコンポーネントを公開しています。それらをインストールしてプロジェクトで使用することができます。

[`4d-component`](https://github.com/topics/4d-component) のトピックで公開されている 4Dコンポーネントの一覧を Github で閲覧することができます。

## Plugins

プラグインは、4D がネイティブにおこなっていないこと (例: 特定のプラットフォーム技術など) や、4D だけでは困難なことを実現します。 [このページ](develop-plug-ins.md) で説明しているように、独自のプラグインを開発することができます。

多くの機能は、既存の 4Dプラグインでカバーされています。 [`4d-plugin`](https://github.com/topics/4d-plugin) のトピックで公開されている 4Dプラグインの一覧を Github で閲覧することができます。


