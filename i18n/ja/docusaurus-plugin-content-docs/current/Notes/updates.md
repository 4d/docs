---
id: updates
title: ドキュメンテーション更新情報
---

このドキュメントのおもな更新内容のリストです。 4D製品の新機能についての一般的な情報は、[doc.4d.com](https://doc.4d.com) の **リリースノート** を参照ください。


## 4D v19 R7

- [データエクスプローラー](Admin/dataExplorer.md#基本) にリレートデータと計算属性、エイリアス属性が表示できます。
- 新しい [FileHandle](API/FileHandleClass.md) クラスと、`File` クラスの新しい [`.open()`](API/FileClass.md#open) 関数。


## 4D v19 R6

- 新しい [HTTPRequest](API/HTTPRequestClass.md) クラス。
- コードを呼び出す Collectionクラス関数は、*formula* 引数として Formulaオブジェクトをサポートするようになりました: [`.every()`](API/CollectionClass.md#every), [`.filter()`](API/CollectionClass.md#filter), [`.find()`](API/CollectionClass.md#find), [`.findIndex()`](API/CollectionClass.md#findindex), [`.map()`](API/CollectionClass.md#map), [`.orderByMethod()`](API/CollectionClass.md#orderbymethod), [`.reduce()`](API/CollectionClass.md#reduce), [`.some()`](API/CollectionClass.md#some), [`.sort()`](API/CollectionClass.md#sort)
- リストボックスのセルは、[横方向](FormObjects/properties_CoordinatesAndSizing.md#横方向パディング) および [縦方向](FormObjects/properties_CoordinatesAndSizing.md#縦方向パディング) のパディングをサポートするようになりました。
- 4D View Pro: 新しい [VP CREATE TABLE](ViewPro/method-list.md#vp-create-table) と [VP REMOVE TABLE](ViewPro/method-list.md#vp-remove-table) コマンドを使用して、シート内のテーブルを操作します。
- [Webデータエクスプローラー](Admin/dataExplorer.md#基本) でリレート属性、計算属性、およびエイリアス属性を表示することができます。
- [4D がデータを収集する理由と方法](Admin/data-collect.md) について詳細を説明する新しいページ


## 4D v19 R5

- ビルドされたクライアント/サーバーアプリケーション:
    - ビルド時に、プロジェクトの [directory.json ファイル](../Users/handling_users_groups.md#directoryjson-file) を [サーバーに埋め込む](../Desktop/building.md#ビルドしたサーバーアプリケーションにプロジェクトのユーザーとグループを埋め込む) ことができるようになりました。 これにより、基本的なセキュリティのユーザーとグループ構成でクライアント/サーバーアプリケーションを運用することができます。
    - ビルドするアプリケーションで、[使用しないモジュールの選択を解除](../Desktop/building.md#モジュールの選択解除) できるようになりました。

- [クライアント/サーバーの最適化](../ORDA/remoteDatastores.md#クライアントサーバーの最適化): 新しいクラス関数により、ORDAキャッシュと最適化コンテキストの内容を操作することができます。 詳細は、[コンテキストの事前設定](../ORDA/remoteDatastores.md#コンテキストの事前設定) および [ORDAキャッシュ](../ORDA/remoteDatastores.md#ordaキャッシュ) を参照ください。

    > これらの関数は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。

- [DataClass クラス](../API/DataClassClass.md): 新しい [.getCount()](../API/DataClassClass.md#getcount) 関数は、データクラスの総エンティティ数を返します。

- 4D View Pro:
    - 新しい [VP SET DATA CONTEXT](ViewPro/method-list.md#vp-set-data-context)、[VP Get data context](ViewPro/method-list.md#vp-get-data-context)、[VP SET BINDING PATH](ViewPro/method-list.md#vp-set-binding-path)、および [VP Get binding path](ViewPro/method-list.md#vp-get-binding-path) コマンドを使って、データコンテキストを作成し、その内容をシートのセルにバインドすることができます。
    - [VP EXPORT DOCUMENT](ViewPro/method-list.md#vp-get-binding-path) と [VP Export to object](ViewPro/method-list.md#vp-get-binding-path) は、データコンテキストの内容をセルの値としてエクスポートするための新しい `includeBindingSource` オプションを受け付けます。


## 4D v19 R4

- ORDAクラス: [エイリアス属性](ORDA/ordaClasses.md#エイリアス属性-1) が利用可能に。

- ループにおける [break と continue](Concepts/cf_looping.md#break-と-continue) 文のサポート。
- [return](Concepts/flow-control.md#return-expression) 文と、値を返すための [return {expression}](Concepts/parameters.md#return-expression) 文のサポート。
- [複合代入演算子](Concepts/operators.md#複合代入演算子)、[短絡演算子](Concepts/operators.md#短絡演算子)、および [三項演算子](Concepts/operators.md#三項演算子) のサポート。
- コードナビゲーションを改善するため、[コードエディター](../code-editor/navigation.md) にドロップダウンツールが追加され、コードにマーカーを追加できるようになりました。
- 新しい環境設定: 一般ページの [**Project ソースファイルにトークンを含める**](Preferences/general.md#project-ソースファイルにトークンを含める) および、メソッドページの [**クリップボードを表示**](Preferences/methods.md#クリップボードを表示)。
- エンティティを [lock/unlock](REST/$lock.md) するための新しい REST リクエスト。
- [4D View Pro](ViewPro/getting-started.md) の章が次の新コマンドとともに追加されました: [VP Copy to object](ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](ViewPro/method-list.md#vp-paste-from-object).
- 新しい [SystemWorker クラス](API/SystemWorkerClass.md)。


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
- [コードエディター環境設定](Preferences/methods.md#テーマリスト) の新しいデフォルトの Dark および Lightテーマ
- Apple Silicon プロセッサー用の [ネイティブコンパイル](Project/compiler.md#コンパイラーメソッド)
- エンティティセレクション型リストボックスの列で、[変数の計算](FormObjects/properties_Object.md#変数の計算) プロパティがサポートされるようになりました。
- 新しい包括的な [CLI](Admin/cli.md) (コマンドラインインターフェース) ページ



## 4D v18 R6

- [EntitySelection クラス](API/EntitySelectionClass.md): `.average()`, `.max()` および `.min()` 関数は、エンティティセレクションが空の場合には *undefined* を返すようになりました。
- [IMAP Mail](API/IMAPTransporterClass.md), [POP3 Mail](API/POP3TransporterClass.md) and [SMTP Mail](API/SMTPTransporterClass.md): `authenticationMode` プロパティは OAuth 2.0 を有効化します。
- [IMAP Mail](API/IMAPTransporterClass.md): 新しい `.expunge()` および `.append()` 関数の追加。
- 新しい [Web管理](Admin/webAdmin.md) Webサーバーコンポーネント
- 新しい [データエクスプローラー](../Admin/dataExplorer.md) インターフェース
- 新しい Web [ユーザーセッション](WebServer/sessions.md) および [その API](API/SessionClass.md)