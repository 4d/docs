---
id: updates
title: リリースノート
---

:::tip

[**4D 19 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v19/): 4D 19 LTS の新機能と拡張機能をすべてリストアップしたブログ記事です。

:::



## 4D 19.8 LTS

#### ハイライト

- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=19.8): 4D 19.8 で修正されたバグのリストです。


## 4D 19.7 LTS

#### ハイライト

:::warning セキュリティに関する注記

4Dアプリケーションが TLS接続を使用する場合は、4D 19.7 LTS build 288986以上へのアップグレードが推奨されます。 詳細は [セキュリティ情報](https://blog.4d.com/ja/security-bulletin-two-cves-and-how-to-stay-secure/) を参照ください。

:::

- [**修正リスト**](https://4d-jp.github.io//2023/161/release-note-version-19/): 4D 19.7 で修正されたバグのリストです。


## 4D 19.6 LTS

#### ハイライト

- [**修正リスト**](https://4d-jp.github.io//2023/41/release-note-version-19/): 4D 19.6 で修正されたバグのリストです。


## 4D 19.5 LTS

#### ハイライト

- 4D 19.5 は Windows 11 22H2 対応です。
- 4D 19.5 は macOS Ventura (macOS 13) 対応です。
- SpreadJS のバージョンが更新されました (14.1.6)。
- [**修正リスト**](https://4d-jp.github.io/293/release-note-version-19/): 4D 19.5 で修正されたバグのリストです。


## 4D 19.x LTS

#### ハイライト

- [IMAPTransporter クラス](../API/IMAPTransporterClass.md): 新しい `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, `.unsubscribe()` 関数
- [File クラス](../API/FileClass.md): 新しい `setAppInfo()` および `getAppInfo()` 関数
- 新しい [4DEACH](../Tags/tags#4deach-と-4dendeach) 変換タグ
- Web サーバー: 新しい [SameSite セッションcookie](../WebServer/webServerConfig.md#セッションcookie-samesite) 設定
- [フォーム](../FormEditor/properties_FormProperties.md#カラースキーム) および [スタイルシート](../FormEditor/createStylesheet.md#メディアクエリ) 用のダークおよびライトカラースキームサポート
- [コードエディター環境設定](../Preferences/methods.md#テーマリスト) の新しいデフォルトの Dark および Lightテーマ
- Apple Silicon プロセッサー用の [ネイティブコンパイル](../Project/compiler.md#コンパイラーメソッド)
- エンティティセレクション型リストボックスの列で、[変数の計算](../FormObjects/properties_Object.md#変数の計算) プロパティがサポートされるようになりました。
- 新しい包括的な [CLI](../Admin/cli.md) (コマンドラインインターフェース) ページ



### 4D 18 R6

- [EntitySelection クラス](../API/EntitySelectionClass.md): `.average()`, `.max()` および `.min()` 関数は、エンティティセレクションが空の場合には *undefined* を返すようになりました。
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) and [SMTP Mail](../API/SMTPTransporterClass.md): `authenticationMode` プロパティは OAuth 2.0 を有効化します。
- [IMAP Mail](../API/IMAPTransporterClass.md): 新しい `.expunge()` および `.append()` 関数の追加。
- 新しい [Web管理](../Admin/webAdmin.md) Webサーバーコンポーネント
- 新しい [データエクスプローラー](../Admin/dataExplorer.md) インターフェース
- 新しい Web [ユーザーセッション](../WebServer/sessions.md) および [その API](../API/SessionClass.md)


## 過去のリリース


- doc.4d.com の [**過去のリリースノート**](https://doc.4d.com/4Dv19/4D/19.4/4D-v19x-Release-Notes.100-6044726.ja.html) を参照ください。


## ライブラリの一覧


| ライブラリ    | 現在のバージョン  | 更新された 4D バージョン | 説明                                                        |
| -------- | --------- | -------------- | --------------------------------------------------------- |
| OpenSSL  | 1.1.1s    | 19.6           |                                                           |
| SpreadJS | 14.1.6    | 19.5           | 4D View Pro エンジン                                          |
| CEF      | 4324      | 19             | Chromium v88. Apple Silicon プラットフォーム上でのネイティブコンパイルを可能にします。 |
| webKit   | WKWebView | 19             |                                                           |
| ICU      | 68.1      | 18 R6          | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。          |
| PHP      | 7.3.27    | 18 R6          |                                                           |
| libldap  | 2.4.48    | 18 R2          |                                                           |
