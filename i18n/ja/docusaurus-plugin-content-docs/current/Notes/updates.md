---
id: updates
title: リリースノート
---

## 4D 21 R3

#### ハイライト

- [`JSON Validate`](../commands/json-validate) コマンドは、JSON スキーマドラフト 2020-12 をサポートするようになりました。
- 4D Write Pro now supports [hierarchical list style sheets](../user-legacy/stylesheets.md#hierarchical-list-style-sheets), enabling the creation and management of structured [multi-level lists](../WritePro/user-legacy/using-a-4d-write-pro-area.md#multi-level-lists) with automatic numbering.
- [`HTTPRequest`](../API/HTTPRequestClass.md#4dhttprequestnew) および [`HTTPAgent`](../API/HTTPAgentClass.md#4dhttpagentnew) クラスにおいて、ローカル証明書フォルダの代わりにmacOS キーチェーンからのカスタムの証明書を使用できるようになりました。
- New [`4D.Method` class](../API/MethodClass.md) to create and execute a 4D method code from text source. [`METHOD Get path`](../commands/method-get-path) and [`METHOD RESOLVE PATH`](../commands/method-resolve-path) commands support a new `path volatile method` constant (128).

#### 動作の変更

- [`JSON Validate`](../commands/json-validate) コマンドは *$schema* キーを考慮するようになり、スキーマ内でサポートされていないバージョンが宣言されたときにはエラーを生成するようになりました。
- For clarity, formula objects are now instances of a new [`4D.Formula`](../API/FormulaClass.md) class that inherits from the generic [`4D.Function`](../API/FunctionClass.md) class.

## 4D 21 R2

[**4D 21 R2 の新機能**](https://blog.4d.com/whats-new-in-4d-21-r2/): 4D 21 R2 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [コードライブチェッカー](../code-editor/write-class-method.md#warnings-and-errors) はエラー検知の精度が向上するように改善されました(詳細は [こちらのblog 記事](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) を参照してください)。
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
| SpreadJS  | 18.2.0 | **21 R2**      | 新機能の概要については、 [このブログ記事](https://blog.4d.com/4d-view-pro-whats-new-in-4d-21-r2/) を参照してください。                                                            |
| webKit    | WKWebView                              | 19             |                                                                                                                                                      |
| Xerces    | 3.3.0  | 21             | XML コマンドにおいて使用されます                                                                                                                                   |
| Zlib      | 1.3.1  | 21             |                                                                                                                                                      |

