---
id: overview
title: 4D アプリケーションの拡張
---

## 概要

4D [プロジェクトアーキテクチャー](../Project/architecture.md) はオープンであり、様々な方法で拡張することができます。 4D でネイティブに利用できない機能が必要な場合、以下のような様々な方法でアプリケーションに統合することができます:

- [**System workers**](../API/SystemWorkerClass.md) を使用すると、4D コードからどんな外部プロセス(シェルコマンド、PHP、任意のスクリプト、など) でも呼び出すことができます。 またその実行をモニターすることもできます。
- [**SQL コマンド**](../commands/theme/SQL) を使用すると、様々なSQL データソースに接続して、それらを使用することができます。
- [**ビルトイン HTTP クライアント**](../API/HTTPRequestClass.md) はあらゆるHTTP サーバーへとリクエストを送り、データを処理することができます。
- [**Web エリア**](../FormObjects/webArea_overview.md) を使用するとフォーム内においてWeb ページや様々なHTML コンテンツへのアクセスを提供できるようになります。
- [**コンポーネント**](Concepts/components.md) コンポーネントは4D コードがからできています。 4D はユーティリティコンポーネントのセット(以下参照) を提供しており、これを必要に応じてインストールして使用することができます。 また[自分で独自の4D コンポーネントを開発する](develop-components.md) ことや、あるいはサードパーティ製のコンポーネントを使用することもできます。 4D コミュニティの多くのデベロッパーが、開発した4D コンポーネントを共有しています([`4d-component`](https://github.com/topics/4d-component) トピックのもとに集められた公開4D コンポーネントの一覧を見るためにはGitHub にアクセスして検索してください)。
- [**プラグイン**](../Concepts/plug-ins.md) プラグインはどんな言語でもビルドすることができます。 プラグインは、4D がネイティブにおこなっていないこと (例: 特定のプラットフォーム技術など) や、4D だけでは困難なことを実現します。 [このページ](develop-plug-ins.md) で説明しているように、独自のプラグインを開発することができます。 多くの機能は、既存の 4Dプラグインでカバーされています。 [`4d-plugin`](https://github.com/topics/4d-plugin) のトピックで公開されている 4Dプラグインの一覧を Github で閲覧することができます。

## 4Dによって開発されたコンポーネント

4D は様々なコンポーネントを4D コミュニティに対して提供しており、これは幅広い開発需要をカバーしています。 全ての4D製の コンポーネントは[**4D github repository**](https://github.com/4d) にあります。

これらのコンポーネントの一部は、デフォルトで[依存関係マネージャ](../Project/components.md), に登録されています。具体的には以下の通りです:

| コンポーネント               | Github リポジトリ                                                                | 説明                                                                   | 主な機能                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit              | https://github.com/4d/4D-AIKit              | サードパーティのOpenAI API に接続するためのクラス群                                      | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit             | https://github.com/4d/4D-NetKit             | サードパーティAPI に接続するためのWeb サービスツール群                                      | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress           | https://github.com/4d/4D-Progress           | 1つ以上の進捗バーを同じウィンドウで開く                                                 | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D QPDF               | https://github.com/4d/4D-QPDF               | PDF/A-3 ファイルから添付ファイルを抽出します。                                          | `PDF Get attachments`                                                                                                                   |
| 4D SVG                | https://github.com/4d/4D-SVG                | 一般的な svgグラフィックオブジェクトの作成・操作                                           | `SVGTool_Display_viewer`, 複数の `SVG_` メソッド                                                                                               |
| 4D ViewPro            | https://github.com/4d/4d-view-pro           | フォームに追加できる表計算機能                                                      | [4D View Pro ドキュメンテーション](ViewPro/getting-started.md) 参照。                                                                                |
| 4D Widgets            | https://github.com/4d/4D-Widgets            | DatePicker, TimePicker, SearchPicker 4Dウィジェットの管理                     | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| 4D WritePro Interface | https://github.com/4d/4D-WritePro-Interface | 4D Write Pro パレットと[表ウィザード](../WritePro/writeprointerface.md) を管理します。 | `WP PictureSettings`、`WP ShowTabPages`、`WP SwitchToolbar`、`WP UpdateWidget`                                                             |
| Build4D               | https://github.com/4d-depot/Build4D         | プロジェクトのコンパイル、ビルド、および署名                                               | CI/CD                                                                                                                                   |



