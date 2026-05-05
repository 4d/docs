---
id: updates
title: リリースノート
---

## 4D 21 R3

[**4D 21 R3 の新機能**](https://blog.4d.com/ja/whats-new-in-4d-21-r3/): 4D 21 R3 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [`JSON Validate`](../commands/json-validate) コマンドは、JSON スキーマドラフト 2020-12 をサポートするようになりました。
- 4D Write Pro は[階層リストスタイルシート](../WritePro/user-legacy/stylesheets.md#hierarchical-list-style-sheets) サポートするようになり、これにより自動ナンバリングつきの、構造化された[マルチレベルのリスト](../WritePro/user-legacy/using-a-4d-write-pro-area.md#multi-level-lists) の作成と管理が可能になりました。
- [`HTTPRequest`](../API/HTTPRequestClass.md#4dhttprequestnew) および [`HTTPAgent`](../API/HTTPAgentClass.md#4dhttpagentnew) クラスにおいて、ローカル証明書フォルダの代わりにmacOS キーチェーンからのカスタムの証明書を使用できるようになりました。
- テキストソースから4D メソッドを作成し実行するための[`4D.Method` クラス](../API/MethodClass.md)。 [`METHOD Get path`](../commands/method-get-path) および [`METHOD RESOLVE PATH`](../commands/method-resolve-path) コマンドは新しい`path volatile method` 定数 (128) をサポートするようになりました。
- IMAP transporter は、[4D.IMAPNotifier](../API/IMAPNotifierClass.md) クラスの、[notifier オブジェクト](../API/IMAPTransporterClass.md#notifier) を通して、IDLE プロトコルを使用したメールボックスイベント通知イベントをサポートするようになりました。またこのクラスは [IMAP New transporter](../commands/imap-new-transporter) の `listener` プロパティを通して設定することができます。
- リモートの[session](../API/SessionClass.md) オブジェクトは、[クライアント側でも利用可能](../Desktop/sessions.md#availability) になりました。
- 新しい[データベース設定の新しい **AI** ページ](../settings/ai.md) を使うことで、4D AIKit コンポーネントを使用したコード内から呼び出し可能な、 [プロバイダーモデルエイリアス](../aikit/provider-model-aliases.md) を設定することができるようになりました。
- 4D AIKit コンポーネント: 新しい[Providers](../aikit/Classes/OpenAIProviders.md) クラスを使用して [プロバイダーとモデルエイリアス](../aikit/provider-model-aliases.md) をインスタンス化して管理することができます。
- ORDA データモデル関数および共有/セッションシングルトン関数における [`server` キーワード](../Concepts/classes.md#server) のサポート。
- Liquid glass および Fluent UI インターフェースのフォーム用の新しい[印刷レンダラー](../FormEditor/forms.md#印刷レンダリングエンジン)。 [クラシックインターフェースのレンダラーを有効化する](../FormEditor/forms.md#旧式印刷レンダラー) ための新しい互換性オプション。
- 依存関係: [GitLab レポジトリ上に保存されたコンポーネント](../Project/components.md#configuring-a-gitlab-repository) のサポート。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=21_R3): 4D 21 R3 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2023/269/release-note-version-20r3/))。

#### macOS におけるLiquid glass のサポート

- macOS 26 Tahoe 上での4D における、[**Liquid glass** インターフェース](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/) の自動サポート。 詳細な情報については、[こちらの blog 記事](https://blog.4d.com/the-new-macos-tahoe-design-comes-to-your-4d-applications) を参照してください。
- [`FORM Theme`](../commands/form-theme) コマンド　および [CSS メディアクエリ](../FormEditor/createStylesheet.md#media-queries)から返される新しい値。
- 開発者がインターフェースを徐々に適合していけるようにするために、アプリケーションの*Info.plist* ファイル内の"UIDesignRequiresCompatibility" キーを使用して**4D 組み込みのアプリケーションにおいてLiquid glass を無効化する機能** ([このキーに関するApple のドキュメンテーション](https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility) を参照のこと)。

#### 動作の変更

- [`JSON Validate`](../commands/json-validate) コマンドは *$schema* キーを考慮するようになり、スキーマ内でサポートされていないバージョンが宣言されたときにはエラーを生成するようになりました。
- 分かりやすさのために、フォーミュラオブジェクトは、汎用的な [`4D.Function`](../API/FunctionClass.md) クラスを継承する [`4D.Formula`](../API/FormulaClass.md) クラスの新しいインスタンスになりました。
- 4D 21 R3 では、[コードライブチェッカー](../code-editor/write-class-method.md#警告とエラー) にもたらされた新しい改良が、ランゲージコマンドに対しても適用されます([こちらのblog 記事](https://blog.4d.com/enhancement-of-command-syntax-checking-in-the-editor)を参照してください)。 以前は検知されなかったシンタックスエラーがコード内でフラグ付けされるようになりました。
- [設定ダイアログボックス](../settings/overview.md) から、"PHP" ページが削除されました。 PHP インタープリターを設定するためには、[`SET DATABASE PARAMETER` のPHP セレクター](../commands/set-database-parameter#php-interpreter-ip-address-55) を使用してください。
- \**旧式* ネットワークレイヤーはサポートされなくなりました。 旧式ネットワークレイヤーを使用していたプロジェクトまたはバイナリーデータベースは、4D 21 R3 以降にアップグレードした際に自動的に[**ServerNet**](../settings/client-server.md#ネットワークレイヤー) へと設定されます。

## 4D 21 R2

[**4D 21 R2 の新機能**](https://blog.4d.com/whats-new-in-4d-21-r2/): 4D 21 R2 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [コードライブチェッカー](../code-editor/write-class-method.md#警告とエラー) はエラー検知の精度が向上するように改善されました(詳細は [こちらのblog 記事](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) を参照してください)。
- [リスト](../WritePro/user-legacy/using-a-4d-write-pro-area.md#リスト) を適用する [4D Write Pro 標準アクション](../WritePro/user-legacy/standard-actions.md) は自動的に段落の余白を、その中に位置するマーカーを内部に配置するように自動的に調整するようになりました。
- [`query()`](../API/DataClassClass.md#ベクトル類似度によるクエリ) 関数および[REST API](../REST/$orderby.md) を使用したAI ベクトル検索のクエリ文字列内で、 `order by` をサポートするようになりました。
- [エクスプローラー](../Develop/explorer.md) からQodly ページを作成したり開いたりすることができるようになりました。
- [コンポーネントのアイコンをカスタマイズできる](../Extensions/develop-components.md#custom-icon) ようになりました。
- 4D AIKit component: 新しい [ファイル API](../aikit/Classes/OpenAIFilesAPI.md) クラスを使用することで **ファイルアップロード** 機能を実装できます。
- [**デザインモードを検索**](../Project/search-replace.md#コンポーネント内を検索) および [**コンテンツを置換**](../Project/search-replace.md#コンテンツを置換) 機能は編集可能なコンポーネントをサポートするようになりました。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=21_R2): 4D 21 R2 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2023/178/release-note-version-20r2/))。

#### デベロッパー・プレビュー

- Windows 上での [**fluent UI** レンダリング](../FormEditor/forms.md#fluent-ui-レンダリング) のサポート:
  - 新しい [`FORM theme`](../commands/form-theme) コマンド
  - 新しい [`form-theme` CSS メディアクエリ](../FormEditor/createStylesheet.md#メディアクエリ)
  - 設定ダイアログボック内での新しい [**Windows 上でFluent UI を使用**](../settings/interface.md#windows-上でfluent-ui-を使用) オプション。

#### 動作の変更

- Windows 上で、[**fluent UI** レンダリング](../FormEditor/forms.md#fluent-ui-レンダリング) が有効化されている場合、 [`GET STYLE SHEET INFO`](../commands/get-style-sheet-info) コマンドは、フォームから呼ばれているかどうかに関わらず、異なる情報を返すことがあります。

## ライブラリの一覧

| ライブラリ     | 現在のバージョン                               | 更新された 4D バージョン | 説明                                                                                                                                                   |
| --------- | -------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL | 9b86817                                | 21             | QUIC に使用                                                                                                                                             |
| CEF       | 7258                                   | 21             | Chromium 139                                                                                                                                         |
| Hunspell  | 1.7.2  | 20             | 4D フォームと 4D Write Pro でスペルチェックに使用されます。                                                                                                               |
| ICU       | 77.1                   | 21             | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。                                                                                                     |
| libldap   | 2.6.10 | 21             |                                                                                                                                                      |
| libsasl   | 2.1.28 | 20             |                                                                                                                                                      |
| Liblsquic | 4.2.0  | 20 R10         | QUIC に使用                                                                                                                                             |
| Libuv     | 1.51.0 | 21             | QUIC に使用                                                                                                                                             |
| libZip    | 1.11.4 | 21             | Zip クラス、4D Write Pro、svg および serverNet コンポーネントによって使用。                                                                                                |
| LZMA      | 5.8.1  | 21             |                                                                                                                                                      |
| ngtcp2    | 1.18.0 | 21             | QUIC に使用                                                                                                                                             |
| OpenSSL   | 3.5.2  | 21             |                                                                                                                                                      |
| PDFWriter | 4.7.0  | 21             | [`WP Export document`](../WritePro/commands/wp-export-document.md) および [`WP Export variable`](../WritePro/commands/wp-export-variable.md) において使用されます |
| SpreadJS  | 18.2.0 | 21 R2          | 新機能の概要については、 [このブログ記事](https://blog.4d.com/4d-view-pro-whats-new-in-4d-21-r2/) を参照してください。                                                            |
| webKit    | WKWebView                              | 19             |                                                                                                                                                      |
| Xerces    | 3.3.0  | 21             | XML コマンドにおいて使用されます                                                                                                                                   |
| Zlib      | 1.3.1  | 21             |                                                                                                                                                      |

