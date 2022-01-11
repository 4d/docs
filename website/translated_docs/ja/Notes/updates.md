---
id: updates
title: ドキュメンテーション更新情報
---

このドキュメントのおもな更新内容のリストです。 4D製品の新機能についての一般的な情報は、[doc.4d.com](https://doc.4d.com) の **リリースノート** を参照ください。


## 4D v19 R4

- [Alias attributes](ORDA/ordaClasses.md#alias-attributes) are available in ORDA classes.
- Support for [break and continue](Concepts/cf_looping.md#break-and-continue) statements in loops.
- Support for [return](Concepts/flow-control.md#return-expression) statement and [return expression](Concepts/parameters.md#return-expression) to return values.
- Support for [compound assignment operators](Concepts/operators.md#compound-assignment-operators), [short-circuit operators](Concepts/operators.md#short-circuit-operators), and [ternary operator](Concepts/operators.md#ternary-operator)
- The [Code Editor](code-editor/navigation.md) now includes an dropdown tool and supports markers for better code navigation.
- New Preferences: [**Include tokens in project source files**](Preferences/general.md#include-tokens-in-project-source-files) and [**Show clipboards**](Preferences/methods.md#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](REST/$lock.md) entities.
- [4D View Pro](ViewPro/getting-started.md) の章が次の新コマンドとともに追加されました: [VP Copy to object](ViewPro/method-list#vp-copy-to-object), [VP MOVE CELLS](ViewPro/method-list#vp-move-cells), [VP PASTE FROM OBJECT](ViewPro/method-list#vp-paste-from-object).
- New [SystemWorker class](API/SystemWorkerClass.md).


## 4D v19 R3

- クラス: [計算プロパティ](Concepts/classes.md#function-get-と-function-set) が利用可能に。
- ORDAクラス: [計算属性](ORDA/ordaClasses.md#計算属性) が利用可能に。 計算プロパティと似ていますが、[クエリ](ORDA/ordaClasses.md#function-query-attributename) や [orderBy](ORDA/ordaClasses.md#function-orderby-attributename) 関数もサポートしています。
- 新しい ORDAデータクラス属性: [`exposed`](API/DataClassAttributeClass.md#exposed) および [`readOnly`](API/DataClassAttributeClass.md#readonly)。
- [ZIPアーカイブ](API/ZipArchiveClass.md#zip-create-archive): *LZMA* および *xz* 圧縮アルゴリズムをサポート。
- [新しいビルドオプション](Desktop/building.md#silicon-macos-クライアントからの接続を許可) により、Windows上で Serverアプリケーションに Silicon Macクライアントを組み込むのが簡単になりました。
- macOS で [ダークモードをサポート](Preferences/general.md#アピアランス-macosのみ)。
- [`IMAP New transporter`](API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](API/POP3TransporterClass.md#pop3-new-transporter), および [`SMTP New transporter`](API/SMTPTransporterClass.md#smtp-new-transporter): **OAuth2 トークンオブジェクト** をサポート。
- [サーバー管理ウィンドウ](ServerWindow/maintenance.md#ログ設定ファイルを読み込む) のボタンを使って、[ログ設定ファイル](Debugging/debugLogFiles.md#ログ設定ファイルを使用する) を読み込めるようになりました。
- 4Dランゲージで [任意パラメーター](Concepts/parameters.md#任意パラメーター) をより柔軟に扱えるようになりました。
- Webサーバーセッションのデバッグが [4D Server 上で容易になりました](WebServer/sessions.md#プリエンプティブモード)。
- 新しい [4D NetKit](Extensions/overview.md#4dコンポーネントの一覧) コンポーネントを使って、Microsoft Graph などのサードパーティーAPI に接続することができます。


## 4D v19 R2

- 新規プロジェクト作成時に [デフォルトの.gitignoreファイル](Preferences/general.md#gitignore-ファイルを作成する) が作成可能
- 新しい [`4D.Blob`](Concepts/dt_blob.md#blob-の種類) オブジェクトを扱うための新しい[BlobクラスAPI](API/BlobClass.md)
- [`.setText()`](API/FileClass.md#settext) におけるデフォルトの改行コード (EOL) の指定と `no-bom` のサポート


## 4D v19

- [IMAPTransporter クラス](API/IMAPTransporterClass.md): 新しい `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, `.unsubscribe()` 関数
- [File クラス](API/FileClass.md): 新しい `setAppInfo()` および `getAppInfo()` 関数
- 新しい [4DEACH](Tags/tags.md#4deach-and-4dendeach) 変換タグ
- Web サーバー: 新しい [SameSite セッションcookie](WebServer/webServerConfig.md#セッションcookie-samesite) 設定
- [フォーム](FormEditor/properties_FormProperties.md#カラースキーム) および [スタイルシート](FormEditor/createStylesheet.md#メディアクエリ) 用のダークおよびライトカラースキームサポート
- [メソッドエディター環境設定](Preferences/methods.md#テーマリスト) の新しいデフォルトの Dark および Lightテーマ
- Apple Silicon プロセッサー用の [ネイティブコンパイル](Project/compiler.md#コンパイラーメソッド)
- エンティティセレクション型リストボックスの列で、[変数の計算](FormObjects/properties_Object.md#変数の計算) プロパティがサポートされるようになりました。
- 新しい包括的な [CLI](Admin/cli.md) (コマンドラインインターフェース) ページ



## 4D v18 R6

- [EntitySelection クラス](API/EntitySelectionClass.md): `.average()`, `.max()` および `.min()` 関数は、エンティティセレクションが空の場合には *undefined* を返すようになりました。
- [IMAP Mail](API/IMAPTransporterClass.md), [POP3 Mail](API/POP3TransporterClass.md) and [SMTP Mail](API/SMTPTransporterClass.md): `authenticationMode` プロパティは OAuth 2.0 を有効化します。
- [IMAP Mail](API/IMAPTransporterClass.md): 新しい `.expunge()` および `.append()` 関数の追加。
- 新しい [Web管理](Admin/webAdmin.md) Webサーバーコンポーネント
- 新しい [データエクスプローラー](Admin/dataExplorer) インターフェース
- 新しい Web [ユーザーセッション](WebServer/sessions.md) および [その API](API/SessionClass.md)