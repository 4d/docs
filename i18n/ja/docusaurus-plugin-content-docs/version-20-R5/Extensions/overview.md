---
id: overview
title: 拡張機能
---

The 4D [project architecture](../Project/architecture.md) is modular. You can provide additional functionalities to your 4D projects by installing [**components**](Concepts/components.md) and [**plug-ins**](../Concepts/plug-ins.md). コンポーネントは 4Dコードで構成されていますが、プラグインはどんな言語でも作成できます。

## 4Dコンポーネントの一覧

4D includes by default a set of built-in 4D components, that you can see in the **Component Methods** theme of the Explorer's Methods page. All these components can also be found on the [4D github repository](https://github.com/4d).

| コンポーネント                                                              | 説明                                                                                                                                                                          | 主な機能                                                                                                                                    |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [4D Labels](https://github.com/4d/4D-Labels)                         | ラベルテンプレートを作成するための内部コンポーネント                                                                                                                                                  |                                                                                                                                         |
| [4D NetKit](https://github.com/4d/4D-NetKit)                         | サードパーティーAPI に接続するためのツール                                                                                                                                                     | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| [4D Progress](https://github.com/4d/4D-Progress)                     | 1つ以上の進捗バーを同じウィンドウで開く                                                                                                                                                        | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| [4D SVG](https://github.com/4d/4D-SVG)                               | 一般的な svgグラフィックオブジェクトの作成・操作                                                                                                                                                  | `SVGTool_Display_viewer`, multiple `SVG_` methods                                                                                       |
| [4D ViewPro](ViewPro/getting-started.md)                             | フォームに追加できる表計算機能                                                                                                                                                             | See [4D View Pro documentation](ViewPro/getting-started.md)                                                                             |
| [4D Widgets](https://github.com/4d/4D-Widgets)                       | DatePicker, TimePicker, SearchPicker 4Dウィジェットの管理                                                                                                                            | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| [4D WritePro Interface](https://github.com/4d/4D-WritePro-Interface) | Manage [4D Write Pro](https://doc.4d.com/4Dv20/4D/20/4D-Write-Pro-Reference.100-6229455.en.html) palettes and [table wizard](../WritePro/writeprointerface.md#table-wizard) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |

## サードパーティーコンポーネント

独自の 4Dコンポーネントを開発し、インストールすることができます。 See [this page](develop-components.md) for more information.

4Dコミュニティの多くの開発者が 4Dコンポーネントを公開しています。それらをインストールしてプロジェクトで使用することができます。

Browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic.

## プラグイン

プラグインは、4D がネイティブにおこなっていないこと (例: 特定のプラットフォーム技術など) や、4D だけでは困難なことを実現します。 As described in [this page](develop-plug-ins.md), you can develop your own plug-ins.

多くの機能は、既存の 4Dプラグインでカバーされています。 Browse Github to have a list of public 4D plugins gathered with the [`4d-plugin`](https://github.com/topics/4d-plugin) topic.
