---
id: updates
title: リリースノート
---

## 4D 20 R8

Read [**What’s new in 4D 20 R8**](https://blog.4d.com/en-whats-new-in-4d-v20-R8/), the blog post that lists all new features and enhancements in 4D 20 R8.

#### ハイライト

- Expressions used in [form object properties](../FormObjects/properties_Reference.md) now benefit from syntax checking in the [Property list](../FormEditor/formEditor.md#property-list) and in the [Compiler](../Project/compiler.md#check-syntax).
- You can [associate a class to a form](../FormEditor/properties_FormProperties.md#form-class) to enable code type-ahead and automatic instantiation of form data when using the [`Form`](../commands/form.md) command.
- Support of [standalone sessions](../API/SessionClass.md) to simplify local coding for client/server applications.
- 4D Language:
  - Modified commands: [`FORM EDIT`](../commands/form-edit.md)
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R8): list of all bugs that have been fixed in 4D 20 R8.

## 4D 20 R7

[**4D 20 R7 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R7/): 4D 20 R7 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- 時間型のリストボックスの列とヘッダーは、["blankIfNull" オプション](../FormObjects/properties_Display.md#時間フォーマット) をサポートするようになりました。
- New properties in [`.getBoxInfo()`](../API/IMAPTransporterClass.md#getboxinfo) and [`.getBoxList()`](../API/IMAPTransporterClass.md#getboxlist).
- [コンポーネントマネージャーのインターフェースを使用してコンポーネントを追加および削除](../Project/components.md#依存関係の追加と削除) できるようになりました。
- コンパイラー設定の新しい [**直接型指定モード**](../Project/compiler.md#直接型指定の有効化): コード内のすべての変数および引数を `var` と `#DECLARE`/`Function` キーワードで宣言します (新規プロジェクトではこのモードのみサポートされます)。 これに伴い、[シンタックスチェック機能](../Project/compiler.md#シンタックスチェック) が強化されました。
- [セッションシングルトン](../Concepts/classes.md#シングルトンクラス) と、新しい [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton) クラスプロパティをサポート。
- New [`onHttpGet` function keyword](../ORDA/ordaClasses.md#onhttpget-keyword) to define singleton or ORDA functions that can be called through [HTTP REST GET requests](../REST/ClassFunctions.md#function-calls).
- New [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) class for the REST server to return any web contents.
- Qodly Studio: [Qodly Studio デバッガーを 4D Server で有効化](../WebServer/qodly-studio.md#4d-server-で-qodlyデバッガーを使用する) できるようになりました。
- 4Dクライアントアプリケーション用の新しいアプリケーションビルド XMLキー: 接続時にサーバーから送信される証明書について、認証局の&#x20;
  署名 や [ドメイン](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateDomainName.300-7425906.ja.html) を検証するためのキーが追加されました。
- 4D Language:
  - New commands: [Process info](../commands/process-info.md), [Session info](../commands/session-info.md), [SET WINDOW DOCUMENT ICON](../commands/set-window-document-icon.md)
  - Modified commands: [Process activity](../commands/process-activity.md), [Process number](../commands/process-number.md)
- 4D Write Pro:
  - New command: [WP DELETE SECTION](../WritePro/commands/wp-delete-section.md)
  - Modified commands: [WP DELETE SUBSECTION](../WritePro/commands/wp-delete-subsection.md) and [WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md)
  - [What's new page](https://doc.4d.com/4Dv20R7/4D/20-R7/What-s-new.901-7239607.en.html) in 4D Write Pro Reference.
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R7): 4D 20 R7 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/274/release-note-version-20r7/))。

#### 動作の変更

- [4Dランゲージ](../commands/command-index.md) よび [4D Write Pro ランゲージ](../WritePro/commands/command-index.md) のドキュメントが、developer.4d.com で利用できるようになりました。 これらのドキュメントに関する新機能と変更点については、このリリースノートを参照ください。
- [`File`](../commands/file.md) コマンド (および [`4D.File.new()`](../API/FileClass.md#4dfilenew) コマンド) は、引数として与えられた _path_ のシンタックスをより厳しくチェックする様になりました。

## 4D 20 R6

[**4D 20 R6 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-20-R6/): 4D 20 R6 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [オブジェクト参照](../Concepts/dt_object.md#オブジェクト演算子) と [コレクション参照](../Concepts/dt_collection.md#コレクション演算子) を対象とした比較演算子をサポート。 [`collection.query()`](../API/CollectionClass.md#query) は、[オブジェクト参照やコレクション参照をクエリの値](../API/CollectionClass.md#オブジェクト参照やコレクション参照で検索する) としてサポートするようになりました。
- [宣言された名前空間](../Extensions/develop-components.md#コンポーネント名前空間の宣言) をコンポーネントが持つ場合、そのクラスは [`cs.<namespace>`](../Concepts/classes.md#cs) を介して、ホストプロジェクトに読み込まれているすべてのコンポーネント間で自動的に共有されるようになりました。
- コンポーネントマネージャー: [GitHub に保存されたコンポーネント](../Project/components.md#github-に保存されたコンポーネントの宣言) のサポート。
- 新しい [`entitySelection.clean()`](../API/EntitySelectionClass.md#clean) 関数と [`$clean`](../REST/$clean.md) REST API が追加されました。これらは、対象のエンティティセレクションから削除済みエンティティを除外したエンティティセレクションを新規に取得します。
- セッションの権限を確認し、デバッグを容易にするための新しい [`session.getPrivileges()`](../API/SessionClass.md#getprivileges) 関数と [`$info/privileges`](../REST/$info.md) REST API が追加されました。
- [4DCEFParameters.jsonファイル](../FormObjects/webArea_overview.md#4dcefparametersjson) が新しく追加されました。これにより、4D埋め込みWebエリアをカスタマイズすることができます。
- 新しい [HTTPAgent](../API/HTTPAgentClass.md) クラスと、HTTPRequest クラスの新しい [`agent`](../API/HTTPRequestClass.md#options-引数) プロパティ。
- サーバーから Qodlyのページの状態を監視するための新しい [`enableState()`](../API/WebFormClass.md) と [`disableState()`](../API/WebFormClass.md) 関数。
- 公開されたシングルトン関数を REST で呼び出すための新しい [`$singleton` API](../REST/$singleton.md) と、それに伴う新しい [権限](../ORDA/privileges.md) が追加されました。
- プロジェクトを "強制ログイン" RESTモードにアップグレードするための [新しい設定ボタン](../settings/web.md#dsauthentify-関数によって-rest認証を有効化する) が追加されました (`On REST Authentication`データベースメソッドは非推奨となりました)。
- [新しい設定タブ](../Project/compiler.md#警告) を使用して、警告の生成をグローバルに定義できます。
- いくつかのコマンド (主に "4D環境" テーマのもの) がスレッドセーフになりました ([完全なリストはこちらを参照ください](https://doc.4d.com/4Dv20R6/4D/Preemptive_6957385.999-2878208.ja.html))。また、[`SET DATABASE PARAMETER`](https://doc.4d.com/4Dv20R6/help/command/ja/page642.html)/[`Get database parameter`](https://doc.4d.com/4Dv20R6/help/command/ja/page643.html) コマンドの一部のセレクターもスレッドセーフになりました。
- PDF/A3 ドキュメントから添付ファイルを抽出する `PDF Get attachments` コマンドを提供する新しい [4D-QPDF コンポーネント](https://github.com/4d/4D-QPDF)。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6957482.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6993921.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R6): 4D 20 R6 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/178/release-note-version-20r6/))。

#### 動作の変更

- フォーム内のスクロールチェーンをサポート: 埋め込まれたスクロール可能なオブジェクト ([縦スクロールバー](../FormObjects/properties_Appearance.md#縦スクロールバー)・[横スクロールバー](../FormObjects/properties_Appearance.md#横スクロールバー)) がスクロール境界に達しても、マウスやトラックパッドを使用してユーザーがスクロールを続ける場合、親サブフォームは自動的にスクロールします (オーバースクロール)。
- [`$catalog` REST API](../REST/$catalog.md) は、シングルトンを返すようになりました (あれば)。

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
- [`Session`](../commands/session.md) object is now available in remote user sessions and stored procedures session.
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
- In order to allow password verification when the [4D user directory uses the bcrypt algorithm](https://blog.4d.com/bcrypt-support-for-passwords/), the "password" value in the _connectionInfo_ parameter of the [`Open datastore`](../commands/open-datastore.md) command is now sent in clear form by default. "On REST authentication" データベースメソッドが、パスワードを平文の状態で扱えるようにし (3番目のパラメーターは **False**)、`Open datastore` に渡す _connectionInfo_ で "tls" オプションを **True** にすることで、接続が暗号化されるようにする必要があります。 In specific cases, a new "passwordAlgorithm" option can also be used for compatibility (see [`Open datastore`](../commands/open-datastore.md) command).

## 4D 20 R3

[**4D 20 R3 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R3/): 4D 20 R3 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- 新しい [`collection.multiSort()`](../API/CollectionClass.md#multisort) 関数を追加しました。
- Support of _context_ parameter in [`Formula from string`](../commands/formula-from-string.md).
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

See [**Release Notes for 4D 20.x LTS**](../../versioned_docs/version-20/Notes/updates.md).

## ライブラリの一覧

| ライブラリ     | 現在のバージョン                               | 更新された 4D バージョン | 説明                                                                                        |
| --------- | -------------------------------------- | -------------- | ----------------------------------------------------------------------------------------- |
| BoringSSL | 0aa300b                                | 20 R6          | QUIC に使用                                                                                  |
| CEF       | 128                                    | **20 R7**      | Chromium 6613                                                                             |
| Hunspell  | 1.7.2  | 20             | 4D フォームと 4D Write Pro でスペルチェックに使用されます。                                                    |
| ICU       | 73.2                   | 20             | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。                                          |
| libldap   | 2.6.7  | 20 R6          |                                                                                           |
| libsasl   | 2.1.28 | 20             |                                                                                           |
| Libuv     | 1.48                   | 20 R6          | QUIC に使用                                                                                  |
| libZip    | 1.9.2  | 20             | Zip クラス、4D Write Pro、svg および serverNet コンポーネントによって使用。                                     |
| LZMA      | 5.4.1  | 20             |                                                                                           |
| OpenSSL   | 3.3.2  | **20 R7**      | デフォルトの TLS/SSL セキュリティレベルがアップグレードされました。 リリース v20R4 の[動作の変更](#動作の変更)参照。                     |
| PDFWriter | 4.3                    | 20             | 12.2.1 で FreeType依存                                       |
| PHP       | 8.2.4  | 20             |                                                                                           |
| SpreadJS  | 17.1.0 | **20 R7**      | 新機能の概要については、[このブログ記事](https://blog.4d.com/ja/4d-view-pro-whats-new-in-4d-20-r7/) を参照ください。 |
| webKit    | WKWebView                              | 19             |                                                                                           |
| Zlib      | 1.2.13 | 20             |                                                                                           |
