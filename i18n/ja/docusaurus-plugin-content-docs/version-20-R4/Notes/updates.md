---
id: updates
title: リリースノート
---

## 4D v20 R4

[**4D v20 R4 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R4/): 4D v20 R4 の新機能と拡張機能をすべてリストアップしたブログ記事です。

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
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R4): 4D v20 R4 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/4/release-note-version-20r4/))。

#### 動作の変更

- 引数を宣言するための従来のシンタックス (例: `C_TEXT($1)` や `var $1 : Text`) は非推奨となり、コードの入力時、シンタックスチェック、コンパイル時に警告が生成されます。
- 更新された [OpenSSL ライブラリ](#ライブラリの一覧) では、デフォルトの SSL/TLS セキュリティレベルが 1 から 2 に変更されました。 RSA, DSA and DH keys of 1024 bits and above and less than 2048 bits as well as ECC keys of 160 bits and above and less than 224 bits are now no longer allowed. By default, TLS compression was already disabled in previous OpenSSL versions. At security level 2 it cannot be enabled.

## 4D v20 R3

[**4D v20 R3 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R3/): 4D v20 R3 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- 新しい [`collection.multiSort()`](../API/CollectionClass.md#multisort) 関数を追加しました。
- [`Formula from string`](../API/FunctionClass.md#formula-from-string) で _context_ パラメーターをサポート。
- [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew) の _connectionHandler_ パラメーターで `headers` プロパティをサポート。
- データ同期モジュールの実装に役立つ [グローバル変更スタンプ](../ORDA/global-stamp.md)。 新しい [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) と [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp) 関数が追加されました。
- ピクチャー/Blob属性へのファイル参照の代入は、[ORDAでサポートされています](../ORDA/entities.md#d#ピクチャーまたは-blob属性にファイルを代入する)。
- [宣言と同時に変数のデータ型と値を初期化](../Concepts/variables/#宣言と同時に変数を初期化する) できるようになりました。
- ログファイルの設定は、[カレントデータファイル](../Backup/settings.md#ログ管理) とともに保存されるようになりました。
- [可変長引数を宣言するための新しいシンタックス](../Concepts/parameters.md#可変長引数の宣言)
- 4D View Pro:ドキュメントの [インポート](../ViewPro/method-list.md#vp-export-to-blob) および [エクスポート](../ViewPro/method-list.md#vp-export-to-blob) で Blob形式をサポート。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R3): 4D v20 R3 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2023/269/release-note-version-20r3/))。

#### 動作の変更

- いくつかのエラーは、[エラー処理メソッド](../Concepts/error-handling.md) によってインタプリタモードのみでキャッチ可能でした。 この問題の修正後、以下のエラーがコンパイルモードでも検出されるようになりました: _範囲外のインデックス_、_互換性のない型_、_Null ポインターの逆参照_。 ただし、Intelプロセッサーでは、このようなエラーによって以前と同様に処理が中断されますが、Apple Siliconプロセッサーでは、[`ABORT`](https://doc.4d.com/4dv20/help/command/ja/page156.html)コマンドを呼び出さない限り、処理は中断されません。
- 4D no longer includes an internal PHP interpreter. PHPコマンドを使用するには、[別途PHPインタプリターをセットアップして実行する](https://blog.4d.com/ja/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) 必要があります。

## 4D v20 R2

[**4D v20 R2 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R2/): 4D v20 R2 の新機能と拡張機能をすべてリストアップしたブログ記事です。

:::warning セキュリティに関する注記

4Dアプリケーションが TLS接続を使用する場合は、4D v20 R2 HF1 build 100440以上へのアップグレードが推奨されます。 詳細は [セキュリティ情報](https://blog.4d.com/ja/security-bulletin-two-cves-and-how-to-stay-secure/) を参照ください。

:::

#### ハイライト

- 4D から WebSocketクライアント接続を作成および管理するための、新しい [WebSocket](../API/WebSocketClass.md) クラス。
- 新しい QUICネットワークレイヤー [インタフェース設定](../settings/client-server.md#ネットワークレイヤー)。
- 4D View Pro:ドキュメントの [インポート](../ViewPro/method-list.md#vp-import-document) および [エクスポート](../ViewPro/method-list.md#vp-export-document) で **.sjs** ファイル形式をサポート。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.ja.html) ページ。
- 4D Write Pro インターフェース: 新しい [表ウィザード](../WritePro/writeprointerface.md)。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R2): 4D v20 R2 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2023/178/release-note-version-20r2/))。

#### 動作の変更

- **警告**: [4D.FileHandle](../API/FileHandleClass.md) オブジェクトの [`offset`](../API/FileHandleClass.md#offset) の開始値が誤って 0 ではなく 1 に設定されていました。 **20.1 HF1** および **20 R2** のバージョンで 4D が修正され、この値が 0 になりました。

## 4D v20.x

[**4D v20 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20/): 4D v20 の新機能と拡張機能をすべてリストアップしたブログ記事です。

:::caution 4D v20.2 以降の4D Server に接続する最小クライアントバージョンについて

内部的な理由により、4D v20.2 以降の 4D Server に接続するリモートクライアントのバージョンは、4D v20.2 以上でなければなりません。

:::

:::warning セキュリティに関する注記

4Dアプリケーションが TLS接続を使用する場合は、4D v20.2 LTS build 100956以上へのアップグレードが推奨されます。 詳細は [セキュリティ情報](https://blog.4d.com/ja/security-bulletin-two-cves-and-how-to-stay-secure/) を参照ください。

:::

#### Index rebuild warning

4D v20 では、ICUライブラリのアップデート (後述参照) により、文字列型、テキスト型、オブジェクト型のインデックスの再構築が強制されます。 データファイルのサイズに応じて、この処理には時間がかかることがあるため、計画的なアップグレードが推奨されます。

:::caution 4D v20.1 インデックス再構築、およびクライアント/サーバーのバージョンについての警告

4D v20.1 には ICUライブラリーのアップデートが含まれており、以下の影響があります:

- It will force an automatic rebuild of indexes of type alpha, text, and object.
- Because of sorting consistency, it requires that 4D remote clients and 4D Server use the same version: only remote 4D v20.1 can connect to 4D Server v20.1 and vice versa.

:::

#### ハイライト

- 4D v20.2 is certified on macOS Sonoma (macOS 14).
- (4D v20.1) [`Compile project`](https://doc.4d.com/4dv20/help/command/ja/page1760.html) コマンドの _options_ パラメーターに `plugins` プロパティが新しく追加されました。
- 4D Server は、複数のジャーナルを自動的に統合します: [自動復元](../Backup/settings.md#自動復元)。
- [IMAP Transporter クラス](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass.md#getboxinfo) が _id_ を返すようになりました。[`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) が _id_, _flags_ および _permanentFlags_ を返すようになりました。[`.addFlags()`](../API/IMAPTransporterClass.md#addflags) と [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) がカスタムキーワードをサポートするようになりました。
- 新しい [WebSocketServer](../API/WebSocketServerClass.md) と [WebSocketConnection](../API/WebSocketConnectionClass.md) クラスで、4D から WebSocket 接続を作成および管理できるようになりました。
- ユーザークラス定義で [`property`](../Concepts/classes.md#property) キーワードをサポート。
- データストアをロック/ロック解除する新しい関数が追加されました: [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock)。
- EntitySelection クラスに新しく [`.at()`](../API/EntitySelectionClass.md#at) 関数が追加されました。
- Collection クラスに次の新しい関数が追加されました: [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap), [`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright)。
- コードエディター: 強化された [検索/置換機能](../code-editor/write-class-method.md#検索と置換)。
- [**デザインモードを検索**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.ja.html#6337726) ダイアログボックスにおいて、"property" ランゲージ要素が新たに検索可能になりました。
- コード簡素化のため、一部の比較演算子は [未定義値](../Concepts/dt_null_undefined.md#未定義演算子) に使用しても、エラーが発生しないようになりました。
- [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail) で _headerOnly_ パラメーターをサポート。
- [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) および [`collection.distinct()`](../API/CollectionClass.md#distinct) 関数で `count values` オプションをサポートしました。
- 新しい [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths) 関数を追加しました。
- [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) および [`collection.distinct()`](../API/CollectionClass.md#distinct) 関数で `count values` オプションをサポートしました。
- ORDAリクエストログが [サーバー上 ](../Debugging/debugLogFiles.md#ordaリクエスト) で利用可能になり、[`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) 関数に引数が追加されました。
- CLI でコードを実行するための新しいツール: [tool4d](../Admin/cli.md#tool4d) および [ユーティリティモードの 4D Server](../Admin/cli.md#ユーティリティモードの-4d-server)。
- [データエクスプローラー](../Admin/dataExplorer.md#データエクスプローラーを開く) 用の新しいツールバーボタンと 4Dウィンドウでの表示。
- ボタン、チェックボックス、ラジオボタンに新しいプロパティが追加されました: [タイトルと画像を隣接させる](../FormObjects/properties_TextAndPicture.md#タイトルと画像を隣接させる) と [横揃え](../FormObjects/properties_Text.md#横揃え)
- [`file.setAppInfo()`](../API/FileClass.md#setappinfo) 関数で `WinIcon` をサポート。
- [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) の新しいオプション `validateTLSCertificate` で、証明書の自動検証を管理できるようになりました。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.ja.html) ページ。
- 修正されたバグリスト: [4D v20](https://bugs.4d.fr/fixedbugslist?version=20) - [4D v20.1](https://bugs.4d.fr/fixedbugslist?version=20.1) ([日本語版はこちら](https://4d-jp.github.io//2023/191/release-note-version-20/))。

#### 動作の変更

- As of v20.2, 4D v20 LTS is no longer compatible with Windows Server 2012 R2.
- **警告**: [4D.FileHandle](../API/FileHandleClass.md) オブジェクトの [`offset`](../API/FileHandleClass.md#offset) の開始値が誤って 0 ではなく 1 に設定されていました。 **20.1 HF1** および **20 R2** のバージョンで 4D が修正され、この値が 0 になりました。
- HTTP RFC に準拠するため、[`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) プロパティは、すべてのヘッダー名を **小文字で** 返すようになりました。 以前と同じふるまいが必要な場合には、新しい [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) プロパティを使用します。
- [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) で HTTPリクエストを送信する際、TLS証明書が 4Dによって自動的に検証され、無効な場合はエラーで拒否されるようになりました。 新しい _option_ プロパティで、この検証を管理することができます。
- TLS v1.0 および TLS v1.1 は廃止され、4D Server において `Min TLS version` としてサポートされなくなりました。 現在はバージョン 1.3 がデフォルトで選択されています。`_o_TLSv1_0` または `_o_TLSv1_1` 定数が [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/ja/page642.html) で設定されている場合には、バージョン 1.3 が自動的に使用されます。
- 一貫性のため、ボタン・チェックボックス・ラジオボタンはすべて、実行時に "3D" タイプでレンダリングされるようになりました。これらのオブジェクトに対し [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/ja/page1300.html) を呼び出した場合、返されるのはそれぞれ、`Object type 3D button`、`Object type 3D checkbox`、`Object type 3D radio button` の値です。
- 4D v20 より、[4D for Mobile](https://developer.4d.com/go-mobile/) は 4D環境にデフォルトでインストールされなくなりました。 4D for Mobile の開発機能を 4D で利用するには、プロジェクトの ["Components"](../Project/architecture.md#components) フォルダーに [4D Mobile App コンポーネントをインストール](https://developer.4d.com/go-mobile/docs/getting-started/installation) する必要があります。 プロジェクトが [4D Mobile App Server コンポーネント](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server) の機能を使用している場合、こちらも同じ場所にインストールする必要があります。

## 4D v19 R8

[**4D v19 R8 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v19-r8/): 4D v19 R8 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [グローバルおよびコンポーネントの実行コンテキスト](../Concepts/error-handling.md#スコープとコンポーネント) に対してエラー処理メソッドを実装することができます。
- コレクションまたはエンティティセレクションをデータソースとするリストボックスの列で、[自動行高](../FormObjects/properties_CoordinatesAndSizing.md#自動行高) プロパティがサポートされるようになりました。
- ORDA: [`setPrivileges()`](../API/SessionClass.md#setprivileges) を使ってセッションに割り当てる [権限](../ORDA/privileges.md) を定義するための _roles.json_ ファイルをサポート。
- Windows で [SDIモードでのアプリケーションのテスト](../Menus/sdi.md#sdiモード利用条件) をサポート。
- 4D View Pro:
  - 表組みにおけるテーマのサポート: 新しい [VP SET TABLE THEME](../ViewPro/method-list.md#vp-set-table-theme) および [VP Get table theme](../ViewPro/method-list.md#vp-get-table-theme) コマンドの追加、[VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) コマンドにテーマオプションを追加
  - 新しい [VP Get table dirty rows](../ViewPro/method-list.md#vp-get-table-dirty-rows) コマンドの追加
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=19_R8): 4D v19 R8 で修正されたバグのリストです。

#### 動作の変更

- HTTP RFC に準拠するため、[`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) プロパティは、すべてのヘッダー名を **小文字で** 返すようになりました。 以前と同じふるまいが必要な場合には、新しい [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) プロパティを使用します。
- 標準アクションが適用されている [リンクされているポップアップメニューの付いたベベルボタン](../FormObjects/properties_TextAndPicture.md/#ポップアップメニューあり) で、ポップアップメニューのオプションが選択された場合、その標準アクションは実行されなくなりました。
- Blink (CEF) を使用する Webエリアにおいて、外部スクリプトによって表示されるダイアログは、 `setTimeout()` JS 関数から呼び出されていないとブロックされるようになりました。 これは、現在のCEFのアップデートにより、`alert()` や `print()` などの関数によって表示されるダイアログが、OS ではなく Web エリアで処理されるようになったためです。 [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/ja/page1029.html) と [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/ja/page1043.html) 参照。

## 4D v19 R7

[**4D v19 R7 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v19-r7/): 4D v19 R7 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [データエクスプローラー](../Admin/dataExplorer#基本) にリレートデータと計算属性、エイリアス属性が表示できます。
- 新しい [FileHandle](../API/FileHandleClass.md) クラスと、`File` クラスの新しい [`.open()`](../API/FileClass.md#open) 関数。
- [EntitySelection クラス](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) 関数が _entitySelection_ 引数を、[`.minus()`](../API/EntitySelectionClass.md#minus) 関数が _keepOrder_ 引数をサポートするようになりました。
- [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew) において、_automaticRedirections_ および _decodeData_ オプションをサポート。
- 新しい [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog) ログファイル。
- 4D View Pro に新しい表組みコマンドが追加されました: [VP Find table](../ViewPro/method-list.md#vp-find-table), [VP Get table column attributes](../ViewPro/method-list.md#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list.md#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list.md#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list.md#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list.md#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list.md#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list.md#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list.md#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list.md#vp-set-table-column-attributes)。
- コンポーネント名前空間が [ エクスプローラーに表示](../Extensions/develop-components#コンポーネント名前空間の宣言) されるようになりました。
- テキストエリアおよび入力フォームオブジェクトにおいて、[角の半径プロパティ](../FormObjects/properties_CoordinatesAndSizing#角の半径) をサポート。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.ja.html) ページ。
- [**修正リスト**](https://4d-jp.github.io/283/release-note-version-19r7/): 4D v19 R7 で修正されたバグのリストです。

#### 動作の変更

- For consistency with standard interfaces (e.g. OS file explorers), list box rules for row selection/drag and drop have been modified. 連続または不連続の選択行をクリックして移動するだけで、ドラッグできるようになり、**Alt** キーは不要になりました (ひきつづき以前のように使用することはできます)。 **Shift** または **Ctrl/Command** キーが押されている場合、マウスのクリックは押されたとき (マウスダウン) に考慮されます。 リストボックスでのドラッグ＆ドロップの詳細については、[このブログ記事](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) を参照し、[このHDI 4Dプロジェクト](https://github.com/4D-JP/HDI/releases/download/19r7/HDI_LB_DragAndDrop.zip) をダウンロードしてください。
- The 4D internal build numbering has been modified as of 4D v19 R7:
  - releases up to 4D v19 R6 (included) are numbered 282xxx,
  - 4D v19 R7 以降のリリースは 100xxx という番号になります。\
    なお、特定の 4Dバージョンは、ブランチ名とビルド番号により一意に識別されます。 ビルド番号は時系列に増加します。 The build number increases chronologically.
- The ability to use Wakanda/4D Mobile REST protocol to call a project method has been removed. [ORDAデータモデルクラス関数](../REST/ClassFunctions.md) または [/4DACTION URL](../WebServer/httpRequests.md#4daction) を代わりに使用することができます。

## 4D v19 R6

- 新しい [HTTPRequest](../API/HTTPRequestClass.md) クラス。
- コードを呼び出すタイプの Collectionクラス関数が、_formula_ 引数として Formulaオブジェクトをサポートするようになりました: [`.every()`](../API/CollectionClass,md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- リストボックスのセルは、[横方向](../FormObjects/properties_CoordinatesAndSizing.md#横方向パディング) および [縦方向](../FormObjects/properties_CoordinatesAndSizing.md#縦方向パディング) のパディングをサポートするようになりました。
- 4D View Pro: 新しい [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) と [VP REMOVE TABLE](../ViewPro/method-list.md#vp-remove-table) コマンドを使用して、シート内のテーブルを操作します。
- [Webデータエクスプローラー](../Admin/dataExplorer.md#基本) でリレート属性、計算属性、およびエイリアス属性を表示することができます。
- To help us make our products always better, we now automatically collect data regarding usage statistics on running 4D Server applications. This will have no impact on performance. [4D がデータを収集する理由と方法](../Admin/data-collect.md) について詳細を説明する新しいページを参照ください。
- Components compiled for Silicon: On macOS Silicon platforms (Apple ARM CPUs), components must be recompiled with 4D v19 R6 or higher to be used with this release.

## 4D v19 R5

- ビルド時に、プロジェクトの [directory.json ファイル](../Users/editing.md#directoryjson-file) を [サーバーに埋め込む](../Desktop/building.md#ビルドしたサーバーアプリケーションにプロジェクトのユーザーとグループを埋め込む) ことができるようになりました。 これにより、基本的なセキュリティのユーザーとグループ構成でクライアント/サーバーアプリケーションを運用することができます。
- ビルドするアプリケーションで、[使用しないモジュールの選択を解除](../Desktop/building.md#モジュールの選択解除) できるようになりました。
- _MeCab_ ライブラリが、すべての macOS 4Dアプリケーションにデフォルトで含まれるようになりました。 In previous releases, this library, specifically designed to manage Japanese text, was only available in the Japanese version of 4D on macOS. 最終的なアプリケーションでこのライブラリが必要ない場合は、[選択を解除](../Desktop/building.md#モジュールの選択解除) することができます。
- [クライアント/サーバーの最適化](../ORDA/remoteDatastores.md#クライアントサーバーの最適化): 新しいクラス関数により、ORDAキャッシュと最適化コンテキストの内容を操作することができます。 詳細は、[コンテキストの事前設定](../ORDA/remoteDatastores.md#コンテキストの事前設定) および [ORDAキャッシュ](../ORDA/remoteDatastores.md#ordaキャッシュ) を参照ください。
  > These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them.
- [DataClass クラス](../API/DataClassClass.md): 新しい [.getCount()](../API/DataClassClass.md#getcount) 関数は、データクラスの総エンティティ数を返します。
- _4DDiagnosticLog.txt_ ファイルは、デフォルトでは高レベルの情報のみを記録します ([INFOレベル](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt))。 `SET DATABASE PARAMETER` コマンドまたはログ設定ファイルの `Diagnostic log level` セレクターを使用して、記録する情報レベル (たとえばDEBUGレベル) を選択できるようになりました。
- 非共有オブジェクトや非共有コレクションに対して `Use()` を呼び出しても何も起こりません (エラーが発生しなくなりました)。 Thus, it is now useless to test if the object or collection passed to Use() is actually shared.
- 分かりやすさのため、2つの SQLコマンドにプレフィックスが付けられました: `GET DATA SOURCE LIST` は `SQL GET DATA SOURCE LIST`、`Get current data source` は `SQL Get current data source` に名称変更されました。
- **4D View Pro**:
  - 新しい [VP SET DATA CONTEXT](../ViewPro/method-list.md#vp-set-data-context)、[VP Get data context](../ViewPro/method-list.md#vp-get-data-context)、[VP SET BINDING PATH](../ViewPro/method-list.md#vp-set-binding-path)、および [VP Get binding path](../ViewPro/method-list.md#vp-get-binding-path) コマンドを使って、データコンテキストを作成し、その内容をシートのセルにバインドすることができます。
  - [VP EXPORT DOCUMENT](../ViewPro/method-list.md#vp-get-binding-path) と [VP Export to object](../ViewPro/method-list.md#vp-get-binding-path) は、データコンテキストの内容をセルの値としてエクスポートするための新しい `includeBindingSource` オプションを受け付けます。
  - (Windows only) 4D View Pro areas now use a new print settings window.
- **Webエリア**:
  - 新しい Windowsシステムのレンダリングエンジン: [Windowsシステムのレンダリングエンジン](../FormObjects/webArea_overview.md#webレンダリングエンジン) を使用している Webエリアは、**Microsoft Edge WebView2** をベースとするようになりました。 This impacts the following features:
    - `WA Create URL history menu` および `WA GET URL HISTORY` のコマンドは、カレントURL のみを返すようになりました。
    * [進捗状況変数](../FormObjects/properties_WebArea.md#進捗状況変数) は更新されなくなりました。
    * Drag and drop features are handled by a Windows API which is tagged "experimental" by Microsoft. そのため、この API がインストールされていない場合、Webエリアが期待どおりに振る舞わないかもしれません: `WA enable URL drop` 設定が false に設定されていても、ドラッグ＆ドロップ機能が許可されているように見えるかもしれません。 しかし、ドロップアクションはデフォルトでブロックされており、許可する URL は [`On Window Opening Denied` イベント](../Events/onWindowOpeningDenied.md) で管理することができます (後述参照)。
  * (Windows のみ) ユーザーが、埋め込みWebレンダリングエンジンを使用している Webエリアから **印刷...** メニューを選択した場合に表示される印刷設定ウィンドウが新しくなりました。
  * Webエリアにおけるコマンドの実際の効果 (ページズームレベルの増加/減少) を反映させるため、2つのコマンドの名前が変更されました: `WA SET PAGE TEXT LARGER` は `WA ZOOM IN` に、`WA SET PAGE TEXT SMALLER` は `WA ZOOM OUT` に名称変更されました。
  * [埋め込みWebレンダリングエンジン](../FormObjects/properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) または (Microsoft Edge WebView2 に基づく) [Windowsシステムのレンダリングエンジン](../FormObjects/webArea_overview.md#webレンダリングエンジン) を使用する Webエリアでのセキュリティを強化しました:
    - CORS policies now apply when accessing files on disk in web areas. たとえば、`WA OPEN URL` を使用して .html ファイルを開こうとした場合、その .html ファイルには、フォルダー外のファイルへのリンクを含めることはできません。
    - Webエリアへの外部コンテンツのドロップは常にブロックされ、`WA enable URL drop` 設定が true に設定されている場合には、[`On Window Opening Denied` イベント](../Events/onWindowOpeningDenied.md) をトリガーします。`WA enable URL drop` 設定が false に設定されている場合、マウスカーソルのアイコンのみが変更され、`On Window Opening Denied` イベントはフィルターされます。 To allow a drop action, you need to execute additional code in the object method of the web area:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))

```

## 4D v19 R4

- ORDAクラス: [エイリアス属性](../ORDA/ordaClasses.md#エイリアス属性-1) が利用可能に。
- ループにおける [break と continue](../Concepts/flow-control.md#break-と-continue) 文のサポート。
- [return](../Concepts/flow-control.md#return-expression) 文と、値を返すための [return {expression}](../Concepts/parameters.md#return-expression) 文のサポート。
- [複合代入演算子](../Concepts/operators.md#複合代入演算子)、[短絡演算子](../Concepts/operators.md#短絡演算子)、および [三項演算子](../Concepts/operators.md#三項演算子) のサポート。
- コードナビゲーションを改善するため、[コードエディター](../code-editor/write-class-method.md) にドロップダウンツールが追加され、コードにマーカーを追加できるようになりました。
- 新しい環境設定: 一般ページの [**Project ソースファイルにトークンを含める**](../Preferences/general.md#project-ソースファイルにトークンを含める) および、メソッドページの [**クリップボードを表示**](../Preferences/methods.md#クリップボードを表示)。
- エンティティを [lock/unlock](../REST/$lock.md) するための新しい REST リクエスト。
- [4D View Pro](../ViewPro/getting-started.md) の章が次の新コマンドとともに追加されました: [VP Copy to object](../ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list.md#vp-paste-from-object)。
- 新しい [SystemWorker クラス](../API/SystemWorkerClass.md)。
- ORDA でエイリアス属性をサポートしたことに起因する競合を解決するため、`Alias selection` 定数の名称を `Allow alias files` に変更しました。
- ORDA の仕様により適合するため、_ヌル値に空値をマップ_ フィールドプロパティは、4D v19 R4以降で作成されたデータベースにおいてはデフォルトでチェックされないようになります。 You can also enable this default behavior in your databases converted from previous versions by selecting the Map NULL values to blank values unchecked by default at field creation compatibility setting. Working with Null values is now recommended since they are fully supported by ORDA.
- [三項演算子](../Concepts/operators.md#三項演算子) のサポートに伴い、コロン ":" は今後、変数名、フィールド名、定数名、関数名、プラグイン名、プロジェクトメソッド名に使用できなくなります。 If your database/project contains identifiers with colons, you must replace them before converting it to v19 R4 or higher, otherwise errors may occur in your code. たとえば、_a:b_ という名前の変数があった場合、これが三項演算子シンタックスとして誤解されてしまう可能性があります:

```4d
$value:=($size>1000)? a:b // この場合 'a:b' は三項演算子として解釈されます

```

## 4D v19 R3

- クラス: [計算プロパティ](../Concepts/classes.md#function-get-と-function-set) が利用可能に。
- ORDAクラス: [計算属性](../ORDA/ordaClasses.md#計算属性) が利用可能に。 計算プロパティと似ていますが、[クエリ](../ORDA/ordaClasses.md#function-query-attributename) や [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename) 関数もサポートしています。
- 新しい ORDAデータクラス [属性](../API/DataClassClass.md#attributename): `exposed` および `readOnly`。
- [ZIPアーカイブ](../API/ZipArchiveClass.md#zip-create-archive): _LZMA_ および _xz_ 圧縮アルゴリズムをサポート。
- [新しいビルドオプション](../Desktop/building.md#silicon-macos-クライアントからの接続を許可) により、Windows上で Serverアプリケーションに Silicon Macクライアントを組み込むのが簡単になりました。
- macOS で [ダークモードをサポート](../Preferences/general.md#アピアランス-macosのみ)。
- [`IMAP New transporter`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass.md#pop3-new-transporter), および [`SMTP New transporter`](../API/SMTPTransporterClass.md#smtp-new-transporter) で **OAuth2 トークンオブジェクト** をサポート。
- [サーバー管理ウィンドウ](../ServerWindow/maintenance.md#ログ設定ファイルを読み込む) のボタンを使って、[ログ設定ファイル](../Debugging/debugLogFiles.md#ログ設定ファイルを使用する) を読み込めるようになりました。
- 宣言されたが渡されなかった引数にアクセスする場合の、4Dランゲージの [任意パラメーター](../Concepts/parameters.md#任意パラメーター) の扱いがより柔軟になりました。 For example, the following code no longer provokes an error:

```4d
// myClass クラスの "concate" 関数
Function concate ($param1 : Text ; $param2 : Text)
ALERT($param1+" "+$param2)
  // 呼び出しメソッド
 $class:=cs.myClass.new()
 $class.concate("Hello";" world") // "Hello world" と表示
 $class.concate("Hello") // "Hello " と表示
 $class.concate() // " " と表示
```

詳細については、こちらの [ブログ記事](https://blog.4d.com/ja/stop-press-accessing-parameters-not-being-passed-is-possible) を参照ください。 この全体的な変更を利点を活かすため、呼び出し先メソッドと呼び出し元メソッドの両方を再コンパイルする必要があります。そのため、コンポーネントの再コンパイルが必要になります。

- Webサーバーセッションのデバッグが [4D Server 上で容易になりました](../WebServer/sessions.md#プリエンプティブモード)。

- 新しい [4D NetKit](https://github.com/4d/4D-NetKit) コンポーネントを使って、Microsoft Graph などのサードパーティーAPI に接続することができます。

- 4D v19 R3 uses a stronger hashing algorithm for 4D user passwords: Bcrypt. ツールボックス、`CHANGE PASSWORD` コマンド、または `Set user properties` コマンドを使用してパスワードを変更した際に、この新しいアルゴリズムが自動的に使用されます。 Once a password is modified, opening the database with a version prior to 4D v19 R3 will cause an authentication denial for this account. If you use 4D passwords, it is highly recommended to backup the .4db file (binary databases) or directory.json file (projects) before upgrading to 4D v19 R3 or later.

- 正確性のため、`4D digest` 定数は、`4D REST digest` へと名称が改められました。

- End-of-line and BOM management for XML commands: When opened in 4D v19 R3, projects or databases created with previous releases behave differently regarding default end-of-line characters and BOM management in XML documents: line feed (LF) characters are used instead of CR (on macOS), and byte order marks (BOM) are not included. This allows a better compatibility with VCS tools. 必要であれば、`XML SET OPTIONS` コマンドを使用することで、v19 R2 以前の振る舞いに戻すことができます。 In projects or databases converted from versions prior to 19 R2, these options are managed by two compatibility settings.

- ビルドされたプロジェクトで、ランタイムエクスプローラーへのショートカットが削除: シングルユーザー版の組み込みプロジェクトアプリケーションにおいて、**Cmd/Ctrl+Shift+F9** ショートカットは、ランタイムエクスプローラーを表示しないようになりました。 This shortcut can now be a user application shortcut. ランタイムエクスプローラーウィンドウは、新しい `OPEN RUNTIME EXPLORER` コマンドを使用することで呼び出し可能です。

- Extended debugging capabilities with 4D Server: In interpreted mode, 4D Server can now debug all kinds of processes, including scalable web sessions. これには、デバッガーをサーバーまたはリモートクライアントで有効化するだけです。\
  _警告: インタープリターモードにおいて、サーバーでデバッガーが有効化された場合 (デフォルト) には、サーバーマシン上でのデバッグを可能にするため、すべてのサーバープロセスが自動でコオペラティブ実行されます。 This can have a significant impact on the performance of your converted applications when they run with 4D Server v19 R3 and higher. サーバーをプリエンプティブ実行に戻すには、サーバーのデバッガーを無効化します (そして必要な場合にはリモートクライアント側でデバッガーを有効化します)。_

- Windows で、4D v19 R3 以降に作成された 4Dプロジェクトおよびデータベースは、フォームにおいて [DirectWrite API](https://learn.microsoft.com/ja-jp/windows/win32/DirectWrite/direct-write-portal) を使用します。 This API improves text rendering, especially in high DPI configurations. DirectWrite is used for text rendering with static and input text, checkboxes, buttons, and radio buttons. Note that listboxes already use DirectWrite. A compatibility option allows you to enable DirectWrite in projects and databases created with previous 4D versions.

- Silicon (Apple ARM CPU) をターゲットに 4D v19.0 でコンパイルされたコンポーネントを使用しており、そのコンポーネント内で `Count parameters` コマンドを呼んでいる場合、4D v19 R3 以降のリリースとの互換性のために、4D v19 R3 でコンポーネントを再コンパイルすることが推奨されます。 If a component is not compiled for Silicon, there is no need to recompile.

## 4D v19 R2

- 新規プロジェクト作成時に [デフォルトの.gitignoreファイル](../Preferences/general#gitignore-ファイルを作成する) が作成可能
- 新しい [`4D.Blob`](Concepts/dt_blob.md#blob-の種類) オブジェクトを扱うための新しい[BlobクラスAPI](../API/BlobClass.md)
- [`.setText()`](../API/FileClass.md#settext) におけるデフォルトの改行コード (EOL) の指定と `no-bom` のサポート

## Previous releases

<details><summary>過去のリリースについてはこちらをクリックしてください。</summary>

### 4D v19

:::warning セキュリティに関する注記

4Dアプリケーションが TLS接続を使用する場合は、4D v19.7 LTS build 288986以上へのアップグレードが推奨されます。 詳細は [セキュリティ情報](https://blog.4d.com/ja/security-bulletin-two-cves-and-how-to-stay-secure/) を参照ください。

:::

- [IMAPTransporter クラス](../API/IMAPTransporterClass.md): 新しい `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, `.unsubscribe()` 関数
- [File クラス](../API/FileClass.md): 新しい `setAppInfo()` および `getAppInfo()` 関数
- 新しい [4DEACH](../Tags/tags#4deach-と-4dendeach) 変換タグ
- Web サーバー: 新しい [SameSite セッションcookie](../WebServer/webServerConfig.md#セッションcookie-samesite) 設定
- [フォーム](../FormEditor/properties_FormProperties.md#カラースキーム) および [スタイルシート](../FormEditor/createStylesheet.md#メディアクエリ) 用のダークおよびライトカラースキームサポート
- [コードエディター環境設定](../Preferences/methods.md#テーマリスト) の新しいデフォルトの Dark および Lightテーマ
- Apple Silicon プロセッサー用の [ネイティブコンパイル](../Project/compiler.md#コンパイラーメソッド)
- エンティティセレクション型リストボックスの列で、[変数の計算](../FormObjects/properties_Object.md#変数の計算) プロパティがサポートされるようになりました。
- 新しい包括的な [CLI](../Admin/cli.md) (コマンドラインインターフェース) ページ

### 4D v18 R6

- [EntitySelection クラス](../API/EntitySelectionClass.md): `.average()`, `.max()` および `.min()` 関数は、エンティティセレクションが空の場合には _undefined_ を返すようになりました。
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) と [SMTP Mail](../API/SMTPTransporterClass.md): `authenticationMode` プロパティは OAuth 2.0 を有効化します。
- [IMAP Mail](../API/IMAPTransporterClass.md): 新しい `.expunge()` および `.append()` 関数の追加。
- 新しい [Web管理](../Admin/webAdmin.md) Webサーバーコンポーネント
- 新しい [データエクスプローラー](../Admin/dataExplorer.md) インターフェース
- 新しい Web [ユーザーセッション](../WebServer/sessions.md) および [その API](../API/SessionClass.md)

</details>

## Library table

| ライブラリ     | 現在のバージョン  | 更新された 4D バージョン | 説明                                                                    |
| --------- | --------- | -------------- | --------------------------------------------------------------------- |
| ICU       | 73.2      | 20.1           | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。                      |
| CEF       | 118       | 20 R3          | Chromium 5993                                                         |
| Hunspell  | 1.7.2     | 20             | 4D フォームと 4D Write Pro でスペルチェックに使用されます。                                |
| PDFWriter | 4.3       | 20             | 12.2.1 で FreeType依存                                                   |
| SpreadJS  | 16.2.6    | 20 R4          | 4D View Pro エンジン                                                      |
| OpenSSL   | 3.2.0     | 20 R4          | デフォルトの TLS/SSL セキュリティレベルがアップグレードされました。 リリース v20R4 の[動作の変更](#動作の変更)参照。 |
| libZip    | 1.9.2     | 20             | Zip クラス、4D Write Pro、svg および serverNet コンポーネントによって使用。                 |
| LZMA      | 5.4.1     | 20             |                                                                       |
| Zlib      | 1.2.13    | 20             |                                                                       |
| webKit    | WKWebView | 19             |                                                                       |
| PHP       | 8.2.4     | 20             |                                                                       |
| libldap   | 2.6.4     | 20 R3          |                                                                       |
| libsasl   | 2.1.28    | 20             |                                                                       |
