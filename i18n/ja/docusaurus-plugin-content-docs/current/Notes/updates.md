---
id: updates
title: リリースノート
---

## 4D 21 R2

[**4D 21 R2 の新機能**](https://blog.4d.com/en-whats-new-in-4d-21-r2/): 4D 21 R2 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) has been enhanced to provide greater precision in error detection (see [this blog post](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) for more information).
- [4D Write Pro standard actions](../WritePro/user-legacy/standard-actions.md) that apply [lists](../WritePro/user-legacy/using-a-4d-write-pro-area.md#lists) now automatically adjust paragraph margins to keep markers positioned inside it.
- Built-in support of `order by` in query strings for AI vector searches using [`query()`](../API/DataClassClass.md#query-by-vector-similarity) functions and the [REST API](../REST/$orderby.md).
- 4D AIKit component: new [File API](../aikit/Classes/OpenAIFilesAPI.md) class to implement **file upload** features.
- [**Find in Design**](../Project/search-replace.md#search-in-components) and [**Replace in contents**](../Project/search-replace.md#replace-in-contents) features can now support editable components.
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=21_R2): 4D 21 R2 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2023/178/release-note-version-20r2/))。

#### 動作の変更

## ライブラリの一覧

| ライブラリ     | 現在のバージョン                               | 更新された 4D バージョン | 説明                                                                                                                                                   |
| --------- | -------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL | fa47b1d                                | **21**         | QUIC に使用                                                                                                                                             |
| CEF       | 7258                                   | **21**         | Chromium 139                                                                                                                                         |
| Hunspell  | 1.7.2  | 20             | 4D フォームと 4D Write Pro でスペルチェックに使用されます。                                                                                                               |
| ICU       | 77.1                   | **21**         | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。                                                                                                     |
| libldap   | 2.6.10 | **21**         |                                                                                                                                                      |
| libsasl   | 2.1.28 | 20             |                                                                                                                                                      |
| Liblsquic | 4.2.0  | 20 R10         | QUIC に使用                                                                                                                                             |
| Libuv     | 1.51.0 | **21**         | QUIC に使用                                                                                                                                             |
| libZip    | 1.11.4 | **21**         | Zip クラス、4D Write Pro、svg および serverNet コンポーネントによって使用。                                                                                                |
| LZMA      | 5.8.1  | **21**         |                                                                                                                                                      |
| ngtcp2    | 1.16.0 | **21**         | QUIC に使用                                                                                                                                             |
| OpenSSL   | 3.5.2  | **21**         |                                                                                                                                                      |
| PDFWriter | 4.7.0  | **21**         | [`WP Export document`](../WritePro/commands/wp-export-document.md) および [`WP Export variable`](../WritePro/commands/wp-export-variable.md) において使用されます |
| SpreadJS  | 17.1.0 | 20 R7          | 新機能の概要については、[このブログ記事](https://blog.4d.com/ja/4d-view-pro-whats-new-in-4d-20-r7/) を参照ください。                                                            |
| webKit    | WKWebView                              | 19             |                                                                                                                                                      |
| Xerces    | 3.3.0  | **21**         | XML コマンドにおいて使用されます                                                                                                                                   |
| Zlib      | 1.3.1  | **21**         |                                                                                                                                                      |
