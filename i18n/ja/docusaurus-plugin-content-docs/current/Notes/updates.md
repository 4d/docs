---
id: updates
title: リリースノート
---

## 4D 21

Read [**What’s new in 4D 21**](https://blog.4d.com/en-whats-new-in-4d-21/), the blog post that lists all new features and enhancements in 4D 21.

#### ハイライト

- The code of a loaded, interpreted component can now be [edited from a dedicated tab](../Extensions/develop-components.md#editing-all-component-code) in the 4D Explorer.
- Support of TLS encryption for the [4D.TCPConnection](../API/TCPConnectionClass.md#4dtcpconnectionnew) class.
- 4Dランゲージ:
     - New "trim" commands to remove leading and trailing spaces from a string: [`Trim`](../commands/trim.md), [`Trim start`](../commands/trim-start.md), and [`Trim end`](../commands/trim-end.md).
     - [`Num`](../commands/num.md) and [`String`](../commands/string.md) commands have been updated to support conversions in different bases (radix).

#### 動作の変更

- Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
- Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. No specific processing is done on these URLs anymore.
- Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).

## 4D 20 R10

[**4D 20 R10の新機能**](https://blog.4d.com/en-whats-new-in-4d-20-R10/) 4D 20 R10 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [データ上のORDA イベント](../ORDA/orda-events.md) の管理。
- [`4D.TCPConnection.new()`](../API/TCPConnectionClass.md#4dtcpconnectionnew) 関数の[`options`](../API/TCPConnectionClass.md#options-parameter) 引数に新しい`connectionTimeout` オプションが追加されました。
- New [`4D.Vector`](../API/VectorClass.md) class to process and compare vectors, usually calculated by AIs.
- New options to generate UUIDs in **version 7** for [4D automatic fields](../settings/database.md#auto-uuid-version) and [`Generate UUID`](../commands/generate-uuid) command.
- New [`UDPSocket`](../API/UDPSocketClass.md) and [`UDPEvent`](../API/UDPEventClass.md) classes to send data using UDP sockets. Support of detailed logging for UDP events in the [`4DTCPUDPLog.txt`](../Debugging/debugLogFiles.md#4dtcpudplogtxt) log file (renamed from `4DTCPLog.txt`).
- [Automatic selection of licenses to embed](../Desktop/building.md#application-automatically-embedding-available-licenses) in the Build application dialog box, modified [`Create deployment license`](../commands/create-deployment-license.md) command, new [`AutomaticLicenseIntegration`](https://doc.4d.com/4Dv20R10/4D/20-R10/AutomaticLicenseIntegration.300-7611090.en.html) BuildApplication xml key.
- Enhanced security for formula copy/paste in [4D Write Pro](../WritePro/managing-formulas.md) and [styled text areas](../FormObjects/input_overview.md): formulas copied from outside the current 4D application are now always pasted as values only.
- 4D AIKit component: new [OpenAIEmbeddingsAPI class](../aikit/Classes/OpenAIEmbeddingsAPI.md) to create embeddings using OpenAI's API.
- You can now [associate a class](../Develop/field-properties.md) to an object field in the structure editor.
- Automatic handling of [recursive dependencies](../Project/components.md#automatic-dependency-resolution).
- 4Dランゲージ:
     - 統一性のため、[`Create entity selection`](../commands/create-entity-selection.md) コマンドおよび [`USE ENTITY SELECTION`](../commands/use-entity-selection.md) コマンドは、["4D 環境"](../commands/theme/4D_Environment.md) テーマから ["Selection"](../commands/theme/Selection.md) テーマへと移動しました。
     - 新しい [`OBJECT SET DATA SOURCE FORMULA`](../commands/object-set-data-source-formula.md) および [`OBJECT Get data source formula`](../commands/object-get-data-source-formula.md) コマンドを使用して、フォームオブジェクトに対して`Formula` オブジェクトを割り当て、または読み出しができるようになります。
     - [`LISTBOX SET PROPERTY`](../commands/listbox-set-property.md) および [`LISTBOX Get property`](../commands/listbox-get-property.md) は3つの新しい定数をサポートするようになりました: `lk current item`、`lk current item position`、および `lk selected items expression` です。
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R10): list of all bugs that have been fixed in 4D 20 R10.

#### 動作の変更

- Windows 上では、印刷しか想定していない(つまりスクリーン上で使用不可能な)カレントプリンターフォントは、4D の起動時にはロードされないようになりました。
- The *MeCab* library has been removed. This change only affects the processing of Japanese text.
- When an object variable or parameter is declared with a ["cs" class](../Concepts/classes.md#cs) type, assigning it with an object instance of a different class now generates a syntax error.

## 4D 20 R9

[**4D 20 R9 の新機能**](https://blog.4d.com/en-whats-new-in-4d-20-R9/): 4D 20 R9 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [*MeCab* ライブラリー](../settings/database.md#mecab日本語版のサポート) は今後廃止予定となり、次のリリースでは削除される予定です。
- [`Session.createOTP()`](../API/SessionClass.md#createotp) および[`Session.restore()`](../API/SessionClass.md#restore) の新関数を使用して管理することで、[セッショントークン](../WebServer/sessions.md#session-token-otp) がサポートされるようになりました。
- ラベルウィザードは、[ラベルデザインエリア](../Desktop/labels.md#ラベルプレビューエリア) においてフォーミュラを追加または編集する際にフォーミュラエディターを使用するようになりました。
- New [`TCPListener`](../API/TCPListenerClass.md) class to create TCP server connections; new properties in related classes: `address`, `listener` and `port` in [`TCPConnection`](../API/TCPConnectionClass.md) class, `address` and `port` in [`TCPEvent`](../API/TCPEventClass.md) class.
- [ライブチェッカーとコンパイラー](../code-editor/write-class-method.md#warnings-and-errors).において、廃止予定のコマンドと定数は、特定の警告を生成するようになりました。 [`Command name`](../commands/command-name.md) コマンドを使用することで、コマンドが廃止予定かどうかを知ることができます。
- 新しいコマンド[WA SET CONTEXT](../commands/wa-set-context.md) および [WA Get context](../commands/wa-get-context.md) を使用して、Web エリア内の[$4d](../FormObjects/webArea_overview.md#4d-object) コンテンツを管理することができるようになります。
- 新しい[`RDP optimization` データベースパラメーター](../commands-legacy/set-database-parameter.md#rdp-optimization-133) を使用して、例えば4D をリモートデスクトッププロトコルを使用している場合の共有クリップボードを最適化することができます。
- インタープリタ版のコンポーネントは[ホストプロジェクトから編集する](../Extensions/develop-components.md#コンポーネントをホストから編集する) ことが可能になりました。
- [ライセンス](../Admin/licenses.md) は起動時に自動的に更新されるようになりました。
- 新しい[4D AIKit コンポーネント](../aikit/overview.md) を使用することでサードパーティAI のAPI とやり取りをすることが可能になります。
- 以下のVP コマンドのコールバックは、4D カスタム関数がその計算を全て終えるのを待つようになりました: [VP IMPORT DOCUMENT](../ViewPro/commands/vp-import-document.md), [VP IMPORT FORM BLOB](../ViewPro/commands/vp-import-from-blob.md)、[VP IMPORT FROM OBJECT](../ViewPro/commands/vp-import-from-object.md)、および [VP FLUSH COMMANDS](../ViewPro/commands/vp-flush-commands.md)
- Google およびMicrosoft 365 カレンダーを管理するための新しい[4D Netkit](https://developer.4d.com/4D-NetKit/) 機能。OAuth 2.0 認証のためのホストWeb サーバーを使用する機能。
- 4D Write Pro インターフェース: 新しい [統合されたAI](../WritePro/writeprointerface.md#integrated-ai) を使用して、4D Write Pro ドキュメントから**chatGTP** とやり取りすることができます。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R9): 4D 20 R9 で修正されたバグのリストです(日本語版は [こちら](https://4d-jp.github.io/2025/99/release-note-version-20r9//))。

## 4D 20 R8

[**4D 20 R8 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R8/): 4D 20 R8 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [`4D.IncomingMessage`](../API/IncomingMessageClass.md) class を使用して独自の[**HTTP request handlers**](../WebServer/http-request-handler.md) を実装することができます。
- [フォームオブジェクトプロパティ](../FormObjects/propertiesReference.md) は、[プロパティリスト](../FormEditor/formEditor.md#プロパティリスト) と[コンパイラー](../Project/compiler.md#シンタックスチェック)においてシンタックスチェックの恩恵を受けることができるようになりました。
- [フォームにクラスを割り当てる](../FormEditor/properties_FormProperties.md#フォームクラス) ことで、[`Form`](../commands/form.md) コマンドを使用しているときにタイプアヘッドとフォームデータの自動インスタンス化を有効化することができるようになります。
- [スタンドアロンセッション](../API/SessionClass.md) のサポート。これによりクライアント/サーバーアプリケーションのローカルなコーディングが単純化されます。
- [4D デバッガ](../Debugging/debugger.md): 新デザイン、自動保存、表示モードなどの新機能
- Apple 公証ガイドラインにより合致する[新しくビルトされたコンポーネントアーキテクチャ](../Desktop/building.md#build-component)
- ビルドアプリケーションダイアログボックスから、簡単に[評価版アプリケーションをビルド](../Desktop/building.md#評価版アプリケーション) することができるようになりました。
- 依存関係: 依存関係マネージャーを使用して、GitHub 上のコンポーネントの[新バージョンをチェック](../Project/components.md#新バージョンをチェック) したり[更新する](../Project/components.md#依存関係の更新) ことができます。
- 新しい [`TCPConnection`](../API/TCPConnectionClass.md) および [`TCPEvent`](../API/TCPEventClass.md) クラスを使用してTCP クライアント接続を管理したり、イベントを管理したり、データ転送のコントロールを改善することができます。 追加された[`4DTCPLog.txt`](../Debugging/debugLogFiles.md#4dtcpudplogtxt) を使用することでTCP イベントの詳細なログを取ることができます。
- [VP EXPORT DOCUMENT](../ViewPro/commands/vp-export-document.md) および [VP IMPORT DOCUMENT](../ViewPro/commands/vp-import-document.md) の新しいオプションを使用して、スタイル、フォーミュラ、データ整合性、そしてパスワードによる保護などを管理することができます。
- 4D Write Pro:
     - 以下のコマンドが、引数としてオブジェクトまたはコレクションを受け取れるようになりました: [WP SET ATTRIBUTES](../WritePro/commands/wp-set-attributes.md)、[WP Get attributes](../WritePro/commands/wp-get-attributes.md)、[WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md)、[WP Table append row](../WritePro/commands/wp-table-append-row.md)、 [WP Import document](../WritePro/commands/wp-import-document.md)、 [WP EXPORT DOCUMENT](../WritePro/commands/wp-export-document.md)、 [WP Add picture](../WritePro/commands/wp-add-picture.md)、および [WP Insert picture](../WritePro/commands/wp-insert-picture.md)
     - [WP Insert formula](../WritePro/commands/wp-insert-formula.md)、 [WP Insert document body](../WritePro/commands/wp-insert-document-body.md)、および [WP Insert break](../WritePro/commands/wp-insert-break.md) はレンジを返す関数になりました(頭文字のみ大文字です)。
     - ドキュメント属性に関連した新しい式: [This.sectionIndex](../WritePro/managing-formulas.md)、 [This.sectionName](../WritePro/managing-formulas.md) および[This.pageIndex](../WritePro/managing-formulas.md)
- 4Dランゲージ:
     - 変更されたコマンド: [`FORM EDIT`](../commands/form-edit.md)
     - [4D.CryptoKey class](../API/CryptoKeyClass.md) の[`.sign()`](../API/CryptoKeyClass.md#sign) および [`.verify()`](../API/CryptoKeyClass.md#verify) 関数は *message* 引数においてBlob をサポートするようになりました。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R8): 4D 20 R8 で修正されたバグのリストです(日本語版は [こちら](https://4d-jp.github.io/2024/360/release-note-version-20r8/))。

#### 動作の変更

- [`SELECT LOG FILE`](../commands/select-log-file.md) コマンドあるいは [バックアップ設定](../Backup/settings.md#ログ管理) を使用してログファイルを変更したあと、[`New log file`](../commands/new-log-file.md) コマンドは、バックアップを待たずに変更を検証するようになりました。 エラー -4447 (バックアップが必要です) は発生しなくなりました。
- [新アーキテクチャ](../Desktop/building.md#build-component) 導入の影響により、4D 20 R8 以降でビルドされたコンポーネントはそれ以前の4D リリースへとインストールすることはできません。

## 4D 20 R7

[**4D 20 R7 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R7/): 4D 20 R7 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- 時間型のリストボックスの列とヘッダーは、["blankIfNull" オプション](../FormObjects/properties_Display.md#時間フォーマット) をサポートするようになりました。
- [`.getBoxInfo()`](../API/IMAPTransporterClass.md#getboxinfo) and [`.getBoxList()`](../API/IMAPTransporterClass.md#getboxlist) に新しいプロパティが追加されました。
- [コンポーネントマネージャーのインターフェースを使用してコンポーネントを追加および削除](../Project/components.md#プロジェクトの依存関係のモニタリング) できるようになりました。
- コンパイラー設定の新しい [**直接型指定モード**](../Project/compiler.md#直接型指定の有効化): コード内のすべての変数および引数を `var` と `#DECLARE`/`Function` キーワードで宣言します (新規プロジェクトではこのモードのみサポートされます)。  これに伴い、[シンタックスチェック機能](../Project/compiler.md#シンタックスチェック) が強化されました。 これに伴い、[シンタックスチェック機能](../Project/compiler.md#シンタックスチェック) が強化されました。
- [セッションシングルトン](../Concepts/classes.md#シングルトンクラス) と、新しい [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton) クラスプロパティをサポート。
- 新しい[`onHTTPGet` 関数キーワード](../ORDA/ordaClasses.md#onhttpget-keyword) を使用して[HTTP REST GET requests](../REST/ClassFunctions.md#function-calls) 経由で呼び出し可能なシングルトンまたはORDA 関数を定義できるようになりました。
- 新しい [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) クラスを使用してREST サーバーがあらゆるWeb コンテンツを返すようになりました。
- Qodly Studio: [Qodly Studio デバッガーを 4D Server で有効化](../WebServer/qodly-studio.md#4d-server-で-qodlyデバッガーを使用する) できるようになりました。
- 4Dクライアントアプリケーション用の新しいアプリケーションビルド XMLキー: 接続時にサーバーから送信される証明書について、認証局の&#x20;
    署名 や [ドメイン](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateDomainName.300-7425906.ja.html) を検証するためのキーが追加されました。
- [埋め込みライセンスなしでスタンドアロンアプリケーションをビルドすること](../Desktop/building.md#licenses) が可能になりました。
- 4Dランゲージ:
     - 新コマンド: [Process info](../commands/process-info.md)、 [Session info](../commands/session-info.md)、 [SET WINDOW DOCUMENT ICON](../commands/set-window-document-icon.md)
     - 変更されたコマンド: [Process activity](../commands/process-activity.md)、 [Process number](../commands/process-number.md)
     - Deprecated commands (replacement): `GET LAST ERROR STACK` ([Last errors](../commands/last-errors.md)), `GET SERIAL INFORMATION` ([License info](../commands/license-info.md)), `PROCESS PROPERTIES` ([Process info](../commands/process-info.md)), `SET SCREEN DEPTH`, `C_XXX` commands ([var](../Concepts/variables.md#declaring-variables) and [#DECLARE/Function](../Concepts/parameters.md#declaring-parameters) declarations). Deprecated commands are prefixed with "\*o\*".
- 4D Write Pro:
     - 新コマンド: [WP DELETE SECTION](../WritePro/commands/wp-delete-section.md)
     - 変更されたコマンド: [WP DELETE SUBSECTION](../WritePro/commands/wp-delete-subsection.md) および [WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md)
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R7): 4D 20 R7 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/274/release-note-version-20r7/))。

#### 動作の変更

- [4Dランゲージ](../commands/command-index.md) よび [4D Write Pro ランゲージ](../WritePro/commands/command-index.md) のドキュメントが、developer.4d.com で利用できるようになりました。  これらのドキュメントに関する新機能と変更点については、このリリースノートを参照ください。 これらのドキュメントに関する新機能と変更点については、このリリースノートを参照ください。
- [`File`](../commands/file.md) コマンド (および [`4D.File.new()`](../API/FileClass.md#4dfilenew) コマンド) は、引数として与えられた *path* のシンタックスをより厳しくチェックする様になりました。
- [permission](../ORDA/privileges.md#permission-actions) の利用可能なアクションから、**describe** アクションが削除されました。 [`/rest/$catalog`](../REST/$catalog.md) URL へのアクセスは制御されなくなりました。 Session の *describe* 権限は今後は無視されます。

## 4D 20 R6

[**4D 20 R6 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-20-R6/): 4D 20 R6 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- [オブジェクト参照](../Concepts/dt_object.md#オブジェクト演算子) と [コレクション参照](../Concepts/dt_collection.md#コレクション演算子) を対象とした比較演算子をサポート。  [`collection.query()`](../API/CollectionClass.md#query) は、[オブジェクト参照やコレクション参照をクエリの値](../API/CollectionClass.md#オブジェクト参照やコレクション参照で検索する) としてサポートするようになりました。 [`collection.query()`](../API/CollectionClass.md#query) は、[オブジェクト参照やコレクション参照をクエリの値](../API/CollectionClass.md#オブジェクト参照やコレクション参照で検索する) としてサポートするようになりました。
- [宣言された名前空間](../Extensions/develop-components.md#コンポーネント名前空間の宣言) をコンポーネントが持つ場合、そのクラスは [`cs.<namespace>`](../Concepts/classes.md#cs) を介して、ホストプロジェクトに読み込まれているすべてのコンポーネント間で自動的に共有されるようになりました。
- コンポーネントマネージャー: [GitHub に保存されたコンポーネント](../Project/components.md#github-に保存されたコンポーネント) のサポート。
- 新しい [`entitySelection.clean()`](../API/EntitySelectionClass.md#clean) 関数と [`$clean`](../REST/$clean.md) REST API が追加されました。これらは、対象のエンティティセレクションから削除済みエンティティを除外したエンティティセレクションを新規に取得します。
- セッションの権限を確認し、デバッグを容易にするための新しい [`session.getPrivileges()`](../API/SessionClass.md#getprivileges) 関数と [`$info/privileges`](../REST/$info.md) REST API が追加されました。
- [4DCEFParameters.jsonファイル](../FormObjects/webArea_overview.md#4dcefparametersjson) が新しく追加されました。これにより、4D埋め込みWebエリアをカスタマイズすることができます。
- 新しい [HTTPAgent](../API/HTTPAgentClass.md) クラスと、HTTPRequest クラスの新しい [`agent`](../API/HTTPRequestClass.md#options-引数) プロパティ。
- サーバーから Qodlyのページの状態を監視するための新しい [`enableState()`](../API/WebFormClass.md) と [`disableState()`](../API/WebFormClass.md) 関数。
- 公開されたシングルトン関数を REST で呼び出すための新しい [`$singleton` API](../REST/$singleton.md) と、それに伴う新しい [権限](../ORDA/privileges.md) が追加されました。
- プロジェクトを "強制ログイン" RESTモードにアップグレードするための [新しい設定ボタン](../settings/web.md#dsauthentify-関数によって-rest認証を有効化する) が追加されました (`On REST Authentication`データベースメソッドは非推奨となりました)。
- [新しい設定タブ](../Project/compiler.md#警告) を使用して、警告の生成をグローバルに定義できます。
- 主に"4D 環境"テーマからのコマンドを含めたいくつかのコマンドがスレッドセーフになったとともに、[`SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md)/[`Get database parameter`](../commands-legacy/get-database-parameter.md) コマンドのいくつかもセレクターもスレッドセーフとなりました。
- PDF/A3 ドキュメントから添付ファイルを抽出する `PDF Get attachments` コマンドを提供する新しい [4D-QPDF コンポーネント](https://github.com/4d/4D-QPDF)。
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
- [共有クラス](../Concepts/classes.md#共有クラス) と [シングルトンクラス](../Concepts/classes.md#シングルトンクラス) をサポート。 新しいクラスプロパティ: [`.isShared`](../API/ClassClass.md#isshared), [`.isSingleton`](../API/ClassClass.md#issingleton), [`.me`](../API/ClassClass.md#me).
- [クラスプロパティを宣言の行において初期化すること](../Concepts/classes.md#initializing-the-property-in-the-declaration-line) がサポートされるようになりました。
- RESTリクエスト用の新しい [強制ログインモード](../REST/authUsers.md#強制ログインモード) と、[Qodly Studio for 4D での専用サポート](../WebServer/qodly-studio.md#強制ログイン)。
- 新しい [$format](../REST/$format.md) RESTパラメーター。
- [`Session`](../commands/session.md) オブジェクトはリモートユーザーセッションおよびすトアドプロシージャーセッションにおいても利用可能になりました。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R5): 4D 20 R5 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/122/release-note-version-20r5/))。

#### 動作の変更

- *4D Internet Commands* および *4D for OCI* プラグインは、4Dインストーラーに含まれなくなりました。 これらのプラグインを入手するには、[**4D製品ダウンロードポータル**](https://product-download.4d.com/) に接続する必要があります。
- ストラクチャーエディターでテーブルやフィールドのグラフィカルな表示 (色、位置、順序など)  に加えた変更は、`catalog_editor.json` という個別ファイルに保存されるようになりました。このファイルはプロジェクトの [`Sources`フォルダー](../Project/architecture.md#sources) に保存されます。

## 4D 20 R4

[**4D 20 R4 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R4/): 4D 20 R4 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- TLS証明書の [`ECDSA` 暗号化形式](../Admin/tls.md#暗号化) をサポート。
- クライアント/サーバーおよび SQLサーバーの TLS接続は、[動的に設定](../Admin/tls.md#他のサーバーで-tls-を有効にする) されるようになりました (証明書ファイルは必要ありません)。
- HTML への直接の [ストラクチャー定義の書き出し](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.ja.html) をサポート。
- 実行エラーを防ぐため、コード入力、シンタックスチェック、およびコンパイルステップにおけるコード管理を強化する新しい [コードライブチェッカー](../code-editor/write-class-method.md#警告とエラー)。
- `#DECLARE` プロトタイプ内で宣言されたメソッド引数は["Compiler_" メソッドでは不要になりました](../Concepts/parameters.md)。
- [日付・時間のカスタムフォーマット](../Project/date-time-formats.md) をサポート
- 新しい [`Try(expression)` キーワード](../Concepts/error-handling.md#tryexpression) で単純なエラーケースを処理できます。
- 新しい[`HTTP Parse message`](../commands/http-parse-message.md) コマンド。
- 新しい [ノンブロッキング印刷](../settings/compatibility.md) 互換性オプション。
- データエクスプローラーの新しい [編集モード](../Admin/dataExplorer.md#データの編集)。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R4): 4D 20 R4 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/4/release-note-version-20r4/))。

#### 動作の変更

- 引数を宣言するための従来のシンタックス (例: `C_TEXT($1)` や `var $1 : Text`) は非推奨となり、コードの入力時、シンタックスチェック、コンパイル時に警告が生成されます。
- セレクション内レコードの削除後に、別レコードが新規作成された場合でも、セレクションの一貫性が保持されるようになりました ([このブログ記事](https://blog.4d.com/ja/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/) を参照ください)。
- 更新された [OpenSSL ライブラリ](#ライブラリの一覧) では、デフォルトの SSL/TLS セキュリティレベルが 1 から 2 に変更されました。  1024ビット以上2048ビット未満のRSA、DSA、DH鍵、および 160ビット以上224ビット未満の ECC鍵は使用できなくなりました。 デフォルトでは、以前の OpenSSLバージョンですでに TLS圧縮が無効にされていました。 セキュリティレベル2では、これを有効化できません。 1024ビット以上2048ビット未満のRSA、DSA、DH鍵、および 160ビット以上224ビット未満の ECC鍵は使用できなくなりました。 デフォルトでは、以前の OpenSSLバージョンですでに TLS圧縮が無効にされていました。 セキュリティレベル2では、これを有効化できません。
- [4D ユーザーがbcrypt アルゴリズムを使用できる](https://blog.4d.com/bcrypt-support-for-passwords/) ようにするため、[`Open datastore`](../commands/open-datastore.md) コマンドの*connectionInfo* 引数内の"password" の値はデフォルトでは平文で送信されるようになりました。 そのため、"On REST authentication" データベースメソッドがパスワードを平文で扱えるようにすること(そのため第3引数は**False** となります)と、`Open datastore` の*connectionInfo* の"tls" オプションに**True**  を渡すことで接続を暗号化するようにすることを忘れないようにして下さい。 特定の場合には、新しい "passwordAlgorithm" オプションも互換性のために使用できます ([`Open datastore`](../commands/open-datastore.md) コマンド参照)。

## 4D 20 R3

[**4D 20 R3 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R3/): 4D 20 R3 の新機能と拡張機能をすべてリストアップしたブログ記事です。

#### ハイライト

- 新しい [`collection.multiSort()`](../API/CollectionClass.md#multisort) 関数を追加しました。
- Support of *context* parameter in [`Formula from string`](../commands/formula-from-string.md).
- [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew) の *connectionHandler* パラメーターで `headers` プロパティをサポート。
- データ同期モジュールの実装に役立つ [グローバル変更スタンプ](../ORDA/global-stamp.md)。 新しい [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) と [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp) 関数が追加されました。
- ピクチャー/BLOB 属性にファイル参照を代入することが、[ORDA でサポートされるようになりました](../ORDA/entities.md#assigning-files-to-picture-or-blob-attributes)。
- [宣言と同時に変数のデータ型と値を初期化](../Concepts/variables/#宣言と同時に変数を初期化する) できるようになりました。
- ログファイルの設定は、[カレントデータファイル](../Backup/settings.md#ログ管理) とともに保存されるようになりました。
- [可変長引数を宣言するための新しいシンタックス](../Concepts/parameters.md#可変長引数の宣言)
- 4D View Pro:ドキュメントの [インポート](../ViewPro/commands/vp-import-from-blob) および [エクスポート](../ViewPro/commands/vp-export-to-blob) で Blob形式をサポート。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R3): 4D 20 R3 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2023/269/release-note-version-20r3/))。

#### 動作の変更

- いくつかのエラーは、[エラー処理メソッド](../Concepts/error-handling.md) によってインタプリタモードのみでキャッチ可能でした。 この問題の修正後、以下のエラーがコンパイルモードでも検出されるようになりました: *範囲外のインデックス*、*互換性のない型*、*Null ポインターの逆参照*。 ただし、Intelプロセッサーでは、このようなエラーによって以前と同様に処理が中断されますが、Apple Siliconプロセッサーでは、[`ABORT`](../commands-legacy/abort.md) コマンドを呼び出さない限り、処理は中断されません。
- 4D は内部的な PHPインタプリターを実装しなくなりました。  PHPコマンドを使用するには、[別途PHPインタプリターをセットアップして実行する](https://blog.4d.com/ja/deprecation-of-php-commands-removal-of-4d-built-in-php-interpreter) 必要があります。

## 4D 20 R2

[**4D 20 R2 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20-R2/): 4D 20 R2 の新機能と拡張機能をすべてリストアップしたブログ記事です。

:::warning セキュリティに関する注記

4Dアプリケーションが TLS接続を使用する場合は、4D 20 R2 HF1 build 100440以上へのアップグレードが推奨されます。  詳細は [セキュリティ情報](https://blog.4d.com/ja/security-bulletin-two-cves-and-how-to-stay-secure/) を参照ください。 詳細は [セキュリティ情報](https://blog.4d.com/ja/security-bulletin-two-cves-and-how-to-stay-secure/) を参照ください。

:::

#### ハイライト

- 4D から WebSocketクライアント接続を作成および管理するための、新しい [WebSocket](../API/WebSocketClass.md) クラス。
- 新しい QUICネットワークレイヤー [インタフェース設定](../settings/client-server.md#ネットワークレイヤー)。
- 4D View Pro:ドキュメントの [インポート](../ViewPro/commands/vp-import-document) および [エクスポート](../ViewPro/commands/vp-export-document) で **.sjs** ファイル形式をサポート。
- 4D Write Pro インターフェース: 新しい [表ウィザード](../WritePro/writeprointerface.md)。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20_R2): 4D 20 R2 で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2023/178/release-note-version-20r2/))。

#### 動作の変更

- **警告**: [4D.FileHandle](../API/FileHandleClass.md) オブジェクトの [`offset`](../API/FileHandleClass.md#offset) の開始値が誤って 0 ではなく 1 に設定されていました。  **20.1 HF1** および **20 R2** のバージョンで 4D が修正され、この値が 0 になりました。 **20.1 HF1** および **20 R2** のバージョンで 4D が修正され、この値が 0 になりました。

## 4D 20.x LTS

[**4D 20.x LTS のリリースノート**](../../versioned_docs/version-20/Notes/updates.md) を参照して下さい。

## ライブラリの一覧

| ライブラリ     | 現在のバージョン                               | 更新された 4D バージョン | 説明                                                                                                                                                 |
| --------- | -------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL | 0697c88                                | **21**         | QUIC に使用                                                                                                                                           |
| CEF       | 7258                                   | **21**         | Chromium 139                                                                                                                                       |
| Hunspell  | 1.7.2  | 20             | 4D フォームと 4D Write Pro でスペルチェックに使用されます。                                                                                                             |
| ICU       | 73.2                   | 20             | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。                                                                                                   |
| libldap   | 2.6.7  | 20 R6          |                                                                                                                                                    |
| libsasl   | 2.1.28 | 20             |                                                                                                                                                    |
| Liblsquic | 4.2.0  | 20 R10         | QUIC に使用                                                                                                                                           |
| Libuv     | 1.51.0 | **21**         | QUIC に使用                                                                                                                                           |
| libZip    | 1.9.2  | 20             | Zip クラス、4D Write Pro、svg および serverNet コンポーネントによって使用。                                                                                              |
| LZMA      | 5.4.1  | 20             |                                                                                                                                                    |
| ngtcp2    | 1.14.0 | **21**         | QUIC に使用                                                                                                                                           |
| OpenSSL   | 3.5.2  | **21**         |                                                                                                                                                    |
| PDFWriter | 4.7.0  | **21**         | Used for [`WP Export document`](../WritePro/commands/wp-export-document.md) and [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
| PHP       | 8.2.4  | 20             |                                                                                                                                                    |
| SpreadJS  | 17.1.0 | 20 R7          | 新機能の概要については、[このブログ記事](https://blog.4d.com/ja/4d-view-pro-whats-new-in-4d-20-r7/) を参照ください。                                                          |
| webKit    | WKWebView                              | 19             |                                                                                                                                                    |
| Zlib      | 1.2.13 | 20             |                                                                                                                                                    |
