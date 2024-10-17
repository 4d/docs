---
id: updates
title: リリースノート
---

## 4D 20 R5

[**4D 20 R5 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-20-R5/): 4D 20 R5 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- 新しい [コンポーネントマネージャー](../Project/components.md) は、`dependencies.json` ファイルを介してコンポーネントを管理します。
- [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try) エラー処理構文のサポート。
- QUICネットワークレイヤーは [ブロードキャスト](../Desktop/clientServer.md#リモートプロジェクトを開く)、[SSO](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.ja.html)、および [IPv6](https://doc.4d.com/4Dv20R5/4D/20-R5/IP-Settings.300-6932707.ja.html) に対応しました。
- [制限付エンティティセレクション](../ORDA/entities.md#制限付エンティティセレクション) をサポート。
- [共有クラス](../Concepts/classes.md#共有クラス) と [シングルトンクラス](../Concepts/classes.md#シングルトンクラス) をサポート。 新しいクラスプロパティ: [`.isShared`](../API/ClassClass.md#isshared), [`.isSingleton`](../API/ClassClass.md#isingleton), [`.me`](../API/ClassClass.md#me).
- [宣言と同時にクラスプロパティを初期化](../Concepts/classes.md/#宣言と同時にプロパティを初期化する) できるようになりました。
- RESTリクエスト用の新しい [強制ログインモード](../REST/authUsers.md#強制ログインモード) と、[Qodly Studio for 4D での専用サポート](../WebServer/qodly-studio.md#強制ログイン)。
- 新しい [$format](../REST/$format.md) RESTパラメーター。
- リモートユーザーセッションとストアドプロシージャーセッションで [`Session`](../API/SessionClass.md#session) オブジェクトが利用できるようになりました。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6817247.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6851780.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R5): 4D 20 R5 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/122/release-note-version-20r5/))。

#### 動作の変更

- _4D Internet Commands_ および _4D for OCI_ プラグインは、4Dインストーラーに含まれなくなりました。 これらのプラグインを入手するには、[**4D製品ダウンロードポータル**](https://product-download.4d.com/) に接続する必要があります。
- ストラクチャーエディターでテーブルやフィールドのグラフィカルな表示 (色、位置、順序など)  に加えた変更は、`catalog_editor.json` という個別ファイルに保存されるようになりました。このファイルはプロジェクトの [`Sources`フォルダー](../Project/architecture.md#sources) に保存されます。

## 4D 20 R4

[**4D 20 R4 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R4/): 4D 20 R4 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- TLS証明書の [`ECDSA` 暗号化形式](../Admin/tls.md#暗号化) をサポート。
- クライアント/サーバーおよび SQLサーバーの TLS接続は、[動的に設定](../Admin/tls.md#他のサーバーで-tls-を有効にする) されるようになりました (証明書ファイルは必要ありません)。
- HTML への直接の [ストラクチャー定義の書き出し](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.ja.html) をサポート。
- 実行エラーを防ぐため、コード入力、シンタックスチェック、およびコンパイルステップにおけるコード管理を強化する新しい [コードライブチェッカー](../code-editor/write-class-method.md#警告とエラー)。
- `#DECLARE` プロトタイプで宣言されたメソッドの引数は、["Compiler_" メソッドではもはや必要ありません](../Concepts/parameters.md#コンパイル)。
- [日付・時間のカスタムフォーマット](../Project/date-time-formats.md) をサポート
- 新しい [`Try(expression)` キーワード](../Concepts/error-handling.md#tryexpression) で単純なエラーケースを処理できます。
- 新しい [`HTTP Parse message`](../API/HTTPRequestClass.md#http-parse-message) コマンド。
- 新しい [ノンブロッキング印刷](../settings/compatibility.md) 互換性オプション。
- データエクスプローラーの新しい [編集モード](../Admin/dataExplorer.md#データの編集)。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R4): 4D 20 R4 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/4/release-note-version-20r4/))。

#### 動作の変更

- 引数を宣言するための従来のシンタックス (例: `C_TEXT($1)` や `var $1 : Text`) は非推奨となり、コードの入力時、シンタックスチェック、コンパイル時に警告が生成されます。
- セレクション内レコードの削除後に、別レコードが新規作成された場合でも、セレクションの一貫性が保持されるようになりました ([このブログ記事](https://blog.4d.com/ja/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/) を参照ください)。
- 更新された [OpenSSL ライブラリ](#ライブラリの一覧) では、デフォルトの SSL/TLS セキュリティレベルが 1 から 2 に変更されました。 1024ビット以上2048ビット未満のRSA、DSA、DH鍵、および 160ビット以上224ビット未満の ECC鍵は使用できなくなりました。 デフォルトでは、以前の OpenSSLバージョンですでに TLS圧縮が無効にされていました。 セキュリティレベル2では、これを有効化できません。
- [4Dユーザーディレクトリが bcryptアルゴリズムを使用している](https://blog.4d.com/ja/bcrypt-support-for-passwords/) 場合にパスワード認証を可能にするため、[`Open datastore`](../API/DataStoreClass.md#open-datastore) コマンドの _connectionInfo_ パラメーターに設定する "password" 値は、デフォルトでクリアテキストで送信されるようになりました。 "On REST authentication" データベースメソッドが、パスワードを平文の状態で扱えるようにし (3番目のパラメーターは **False**)、`Open datastore` に渡す _connectionInfo_ で "tls" オプションを **True** にすることで、接続が暗号化されるようにする必要があります。 特定の場合には、新しい "passwordAlgorithm" オプションも互換性のために使用できます ([`Open datastore`](../API/DataStoreClass.md#open-datastore) コマンド参照)。

## 4D 20 R3

[**4D 20 R3 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R3/): 4D 20 R3 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- 新しい [`collection.multiSort()`](../API/CollectionClass.md#multisort) 関数を追加しました。
- [`Formula from string`](../API/FunctionClass.md#formula-from-string) で _context_ パラメーターをサポート。
- [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew) の _connectionHandler_ パラメーターで `headers` プロパティをサポート。
- データ同期モジュールの実装に役立つ [グローバル変更スタンプ](../ORDA/global-stamp.md)。 新しい [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) と [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp) 関数が追加されました。
- ピクチャー/Blob属性へのファイル参照の代入は、[ORDAでサポートされています](../ORDA/entities.md#d#ピクチャーまたは-blob属性にファイルを代入する)。
- [宣言と同時に変数のデータ型と値を初期化](../Concepts/variables/#宣言と同時に変数を初期化する) できるようになりました。
- ログファイルの設定は、[カレントデータファイル](../Backup/settings.md#ログ管理) とともに保存されるようになりました。
- [可変長引数を宣言するための新しいシンタックス](../Concepts/parameters.md#可変長引数の宣言)
- 4D View Pro:ドキュメントの [インポート](../ViewPro/commands/vp-import-from-blob) および [エクスポート](../ViewPro/commands/vp-export-to-blob) で Blob形式をサポート。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R3): 4D 20 R3 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2023/269/release-note-version-20r3/))。

#### 動作の変更

- いくつかのエラーは、[エラー処理メソッド](../Concepts/error-handling.md) によってインタプリタモードのみでキャッチ可能でした。 この問題の修正後、以下のエラーがコンパイルモードでも検出されるようになりました: _範囲外のインデックス_、_互換性のない型_、_Null ポインターの逆参照_。 ただし、Intelプロセッサーでは、このようなエラーによって以前と同様に処理が中断されますが、Apple Siliconプロセッサーでは、[`ABORT`](https://doc.4d.com/4dv20/help/command/ja/page156.html)コマンドを呼び出さない限り、処理は中断されません。
- 4D は内部的な PHPインタプリターを実装しなくなりました。 PHPコマンドを使用するには、[別途PHPインタプリターをセットアップして実行する](https://blog.4d.com/ja/deprecation-of-php-commands-removal-of-4d-built-in-php-interpreter) 必要があります。

## 4D 20 R2

[**4D 20 R2 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R2/): 4D 20 R2 の新機能と拡張機能をすべてリストアップしたブログ記事です。

:::warning セキュリティに関する注記

4Dアプリケーションが TLS接続を使用する場合は、4D 20 R2 HF1 build 100440以上へのアップグレードが推奨されます。 詳細は [セキュリティ情報](https://blog.4d.com/ja/security-bulletin-two-cves-and-how-to-stay-secure/) を参照ください。

:::

#### ハイライト

- 4D から WebSocketクライアント接続を作成および管理するための、新しい [WebSocket](../API/WebSocketClass.md) クラス。
- 新しい QUICネットワークレイヤー [インタフェース設定](../settings/client-server.md#ネットワークレイヤー)。
- 4D View Pro:ドキュメントの [インポート](../ViewPro/commands/vp-import-document) および [エクスポート](../ViewPro/commands/vp-export-document) で **.sjs** ファイル形式をサポート。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.ja.html) ページ。
- 4D Write Pro インターフェース: 新しい [表ウィザード](../WritePro/writeprointerface.md)。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R2): 4D 20 R2 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2023/178/release-note-version-20r2/))。

#### 動作の変更

- **警告**: [4D.FileHandle](../API/FileHandleClass.md) オブジェクトの [`offset`](../API/FileHandleClass.md#offset) の開始値が誤って 0 ではなく 1 に設定されていました。 **20.1 HF1** および **20 R2** のバージョンで 4D が修正され、この値が 0 になりました。

## 4D 20.x LTS

See [**Release Notes for 4D 20.x LTS**](../../version-20/Notes/updates.md).

## ライブラリの一覧

| ライブラリ     | 現在のバージョン                               | 更新された 4D バージョン       | 説明                                                                    |
| --------- | -------------------------------------- | -------------------- | --------------------------------------------------------------------- |
| ICU       | 73.2                   | 20.1 | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。                      |
| CEF       | 121                                    | 20 R5                | Chromium 6167                                                         |
| Hunspell  | 1.7.2  | 20                   | 4D フォームと 4D Write Pro でスペルチェックに使用されます。                                |
| PDFWriter | 4.3                    | 20                   | 12.2.1 で FreeType依存                   |
| SpreadJS  | 16.2.6 | 20 R4                | 4D View Pro エンジン                                                      |
| OpenSSL   | 3.2.0  | 20 R4                | デフォルトの TLS/SSL セキュリティレベルがアップグレードされました。 リリース v20R4 の[動作の変更](#動作の変更)参照。 |
| libZip    | 1.9.2  | 20                   | Zip クラス、4D Write Pro、svg および serverNet コンポーネントによって使用。                 |
| LZMA      | 5.4.1  | 20                   |                                                                       |
| Zlib      | 1.2.13 | 20                   |                                                                       |
| webKit    | WKWebView                              | 19                   |                                                                       |
| PHP       | 8.2.4  | 20                   |                                                                       |
| libldap   | 2.6.4  | 20 R3                |                                                                       |
| libsasl   | 2.1.28 | 20                   |                                                                       |
