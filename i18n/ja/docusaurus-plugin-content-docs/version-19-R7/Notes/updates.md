---
id: updates
title: リリースノート
---

## 4D v19 R7

[**4D v19 R7 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v19-r7/): 4D v19 R7 の新機能と拡張機能をすべてリストアップしたブログ記事です。


#### ハイライト

- [データエクスプローラー](../Admin/dataExplorer#基本) にリレートデータと計算属性、エイリアス属性が表示できます。
- 新しい [FileHandle](../API/FileHandleClass) クラスと、`File` クラスの新しい [`.open()`](../API/FileClass#open) 関数。
- [EntitySelection クラス](../API/EntitySelectionClass): [`.add()`](../API/EntitySelectionClass#add) 関数が *entitySelection* 引数を、[`.minus()`](../API/EntitySelectionClass#minus) 関数が *keepOrder* 引数をサポートするようになりました。
- 4D View Pro に新しい表組みコマンドが追加されました: [VP Find table](../ViewPro/method-list#vp-find-table), [VP Get table column attributes](../ViewPro/method-list#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list#vp-set-table-column-attributes)。
- コンポーネント名前空間が [ エクスプローラーに表示](../Extensions/develop-components#コンポーネント名前空間の宣言) されるようになりました。
- テキストエリアおよび入力フォームオブジェクトにおいて、[角の半径プロパティ](../FormObjects/properties_CoordinatesAndSizing#角の半径) をサポート。
- 4D クラシックランゲージ: doc.4d.com の [新着](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.ja.html) ページ。
- [**修正リスト**](https://4d-jp.github.io/283/release-note-version-19r7/): 4D v19 R7 で修正されたバグのリストです。


#### 動作の変更

- 標準的なインターフェース (OS のファイルエクスプローラなど) との一貫性を保つため、行の選択/ドラッグ＆ドロップに関するリストボックスのルールが変更されました。 連続または不連続の選択行をクリックして移動するだけで、ドラッグできるようになり、**Alt** キーは不要になりました (ひきつづき以前のように使用することはできます)。 **Shift** または **Ctrl/Command** キーが押されている場合、マウスのクリックは押されたとき (マウスダウン) に考慮されます。 リストボックスでのドラッグ＆ドロップの詳細については、[このブログ記事](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) を参照し、[このHDI 4Dプロジェクト](https://github.com/4D-JP/HDI/releases/download/19r7/HDI_LB_DragAndDrop.zip) をダウンロードしてください。
- 4D v19 R7 から 4D の内部ビルド番号が変更されました:
    - 4D v19 R6 (含む) までのリリースは 282xxx の番号です。
    - 4D v19 R7 からのリリースは 100xxx と番号付けされます。 特定の 4Dバージョンは、ブランチ名とビルド番号により一意に識別されます。 ビルド番号は時系列に増加します。
- Wakanda/4D Mobile REST プロトコルを使用してプロジェクトメソッドを呼び出す機能が削除されました。 [ORDAデータモデルクラス関数](../REST/ClassFunctions.md) または [/4DACTION URL](../WebServer/httpRequests.md#4daction) を代わりに使用することができます。

## 過去のリリース

<details><summary>過去のリリースについてはこちらをクリックしてください。</summary>

### 4D v19 R6

- 新しい [HTTPRequest](../API/HTTPRequestClass) クラス。
- コードを呼び出す Collectionクラス関数は、*formula* 引数として Formulaオブジェクトをサポートするようになりました: [`.every()`](../API/CollectionClass#every), [`.filter()`](../API/CollectionClass#filter), [`.find()`](../API/CollectionClass#find), [`.findIndex()`](../API/CollectionClass#findindex), [`.map()`](../API/CollectionClass#map), [`.orderByMethod()`](../API/CollectionClass#orderbymethod), [`.reduce()`](../API/CollectionClass#reduce), [`.some()`](../API/CollectionClass#some), [`.sort()`](../API/CollectionClass#sort)
- リストボックスのセルは、[横方向](FormObjects/properties_CoordinatesAndSizing#横方向パディング) および [縦方向](FormObjects/properties_CoordinatesAndSizing#縦方向パディング) のパディングをサポートするようになりました。
- 4D View Pro: 新しい [VP CREATE TABLE](../ViewPro/method-list#vp-create-table) と [VP REMOVE TABLE](../ViewPro/method-list#vp-remove-table) コマンドを使用して、シート内のテーブルを操作します。
- [Webデータエクスプローラー](../Admin/dataExplorer#基本) でリレート属性、計算属性、およびエイリアス属性を表示することができます。
- [4D がデータを収集する理由と方法](../Admin/data-collect) について詳細を説明する新しいページ



### 4D v19 R5

- ビルドされたクライアント/サーバーアプリケーション:
    - The project [directory.json file](Users/editing#directoryjson-file) can now be [embedded in the server](../Desktop/building#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
    - You can now [deselect useless modules](../Desktop/building#deselecting-modules) in your built applications.
- [クライアント/サーバーの最適化](../ORDA/remoteDatastores#クライアントサーバーの最適化): 新しいクラス関数により、ORDAキャッシュと最適化コンテキストの内容を操作することができます。 詳細は、[コンテキストの事前設定](../ORDA/remoteDatastores#コンテキストの事前設定) および [ORDAキャッシュ](../ORDA/remoteDatastores#ordaキャッシュ) を参照ください。 > これらの関数は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。
- [DataClass クラス](../API/DataClassClass): 新しい [.getCount()](../API/DataClassClass#getcount) 関数は、データクラスの総エンティティ数を返します。
- 4D View Pro:
    - 新しい [VP SET DATA CONTEXT](../ViewPro/method-list#vp-set-data-context)、[VP Get data context](../ViewPro/method-list#vp-get-data-context)、[VP SET BINDING PATH](../ViewPro/method-list#vp-set-binding-path)、および [VP Get binding path](../ViewPro/method-list#vp-get-binding-path) コマンドを使って、データコンテキストを作成し、その内容をシートのセルにバインドすることができます。
    - [VP EXPORT DOCUMENT](../ViewPro/method-list#vp-get-binding-path) と [VP Export to object](../ViewPro/method-list#vp-get-binding-path) は、データコンテキストの内容をセルの値としてエクスポートするための新しい `includeBindingSource` オプションを受け付けます。


### 4D v19 R4

- ORDAクラス: [エイリアス属性](../ORDA/ordaClasses#エイリアス属性-1) が利用可能に。
- ループにおける [break と continue](../Concepts/cf_looping#break-と-continue) 文のサポート。
- [return](../Concepts/control-flow#return-expression) 文と、値を返すための [return {expression}](../Concepts/parameters#return-expression) 文のサポート。
- [複合代入演算子](../Concepts/operators#複合代入演算子)、[短絡演算子](../Concepts/operators#短絡演算子)、および [三項演算子](../Concepts/operators#三項演算子) のサポート。
- コードナビゲーションを改善するため、[コードエディター](../code-editor/overview) にドロップダウンツールが追加され、コードにマーカーを追加できるようになりました。
- 新しい環境設定: 一般ページの [**Project ソースファイルにトークンを含める**](../Preferences/general#project-ソースファイルにトークンを含める) および、メソッドページの [**クリップボードを表示**](../Preferences/methods#クリップボードを表示)。
- エンティティを [lock/unlock](../REST/lock) するための新しい REST リクエスト。
- [4D View Pro](../ViewPro/getting-started) の章が次の新コマンドとともに追加されました: [VP Copy to object](../ViewPro/method-list#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list#vp-paste-from-object).
- 新しい [SystemWorker クラス](../API/SystemWorkerClass)。


### 4D v19 R3

- クラス: [計算プロパティ](../Concepts/classes#function-get-と-function-set) が利用可能に。
- ORDAクラス: [計算属性](../ORDA/ordaClasses#計算属性) が利用可能に。 計算プロパティと似ていますが、[クエリ](../ORDA/ordaClasses#function-query-attributename) や [orderBy](../ORDA/ordaClasses#function-orderby-attributename) 関数もサポートしています。
- 新しい ORDAデータクラス属性: [`exposed`](../API/DataClassAttributeClass#exposed) および [`readOnly`](../API/DataClassAttributeClass#readonly)。
- [ZIPアーカイブ](../API/ZipArchiveClass#zip-create-archive): *LZMA* および *xz* 圧縮アルゴリズムをサポート。
- [新しいビルドオプション](../Desktop/building#silicon-macos-クライアントからの接続を許可) により、Windows上で Serverアプリケーションに Silicon Macクライアントを組み込むのが簡単になりました。
- macOS で [ダークモードをサポート](../Preferences/general#アピアランス-macosのみ)。
- [`IMAP New transporter`](../API/IMAPTransporterClass#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass#pop3-new-transporter), および [`SMTP New transporter`](../API/SMTPTransporterClass#smtp-new-transporter): **OAuth2 トークンオブジェクト** をサポート。
- [サーバー管理ウィンドウ](../ServerWindow/maintenance#ログ設定ファイルを読み込む) のボタンを使って、[ログ設定ファイル](../Debugging/debugLogFiles#ログ設定ファイルを使用する) を読み込めるようになりました。
- 4Dランゲージで [任意パラメーター](../Concepts/parameters#任意パラメーター) をより柔軟に扱えるようになりました。
- Webサーバーセッションのデバッグが [4D Server 上で容易になりました](../WebServer/sessions#プリエンプティブモード)。
- 新しい [4D NetKit](https://github.com/4d/4D-NetKit) コンポーネントを使って、Microsoft Graph などのサードパーティーAPI に接続することができます。


### 4D v19 R2

- 新規プロジェクト作成時に [デフォルトの.gitignoreファイル](../Preferences/general#gitignore-ファイルを作成する) が作成可能
- 新しい [`4D.Blob`](../Concepts/dt_blob#blob-の種類) オブジェクトを扱うための新しい[BlobクラスAPI](../API/BlobClass)
- [`.setText()`](../API/FileClass#settext) におけるデフォルトの改行コード (EOL) の指定と `no-bom` のサポート


### 4D v19

- [IMAPTransporter クラス](../API/IMAPTransporterClass): 新しい `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, `.unsubscribe()` 関数
- [File クラス](../API/FileClass): 新しい `setAppInfo()` および `getAppInfo()` 関数
- 新しい [4DEACH](../Tags/tags#4deach-と-4dendeach) 変換タグ

- Web サーバー: 新しい [SameSite セッションcookie](../WebServer/webServerConfig#session-cookie-samesite) 設定
- [フォーム](../FormEditor/properties_FormProperties#カラースキーム) および [スタイルシート](../FormEditor/createStylesheet#メディアクエリ) 用のダークおよびライトカラースキームサポート
- [コードエディター環境設定](../Preferences/methods#テーマリスト) の新しいデフォルトの Dark および Lightテーマ
- Apple Silicon プロセッサー用の [ネイティブコンパイル](../Project/compiler#コンパイラーメソッド)
- エンティティセレクション型リストボックスの列で、[変数の計算](../FormObjects/properties_Object#変数の計算) プロパティがサポートされるようになりました。
- 新しい包括的な [CLI](../Admin/cli) (コマンドラインインターフェース) ページ



### 4D v18 R6

- [EntitySelection クラス](../API/EntitySelectionClass): `.average()`, `.max()` および `.min()` 関数は、エンティティセレクションが空の場合には *undefined* を返すようになりました。
- [IMAP Mail](../API/IMAPTransporterClass), [POP3 Mail](../API/POP3TransporterClass) and [SMTP Mail](../API/SMTPTransporterClass): `authenticationMode` プロパティは OAuth 2.0 を有効化します。
- [IMAP Mail](../API/IMAPTransporterClass): 新しい `.expunge()` および `.append()` 関数の追加。
- 新しい [Web管理](../Admin/webAdmin) Webサーバーコンポーネント
- 新しい [データエクスプローラー](../Admin/dataExplorer) インターフェース
- 新しい Web [ユーザーセッション](../WebServer/sessions) および [その API](../API/SessionClass)


</details>


## ライブラリの一覧

<details><summary>4D で使用されているライブラリについてはこちらをクリックしてください。</summary>

| ライブラリ    | 現在のバージョン  | 更新された 4D バージョン | 説明                                                    |
| -------- | --------- | -------------- | ----------------------------------------------------- |
| SpreadJS | 15.2.0    | 19 R7          | 4D View Pro エンジン                                      |
| CEF      | 4692.99   | 19 R5          | Chromium v97。 ディスク上のファイルにアクセスするときも CORSポリシーが適用されます。   |
| OpenSSL  | 1.1.1s    | 19 R7          |                                                       |
| libzip   | 1.7.3     | 19 R2          | Zip クラス、4D Write Pro、svg および serverNet コンポーネントによって使用。 |
| webKit   | WKWebView | 19             |                                                       |
| ICU      | 68.1      | 18 R6          | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。      |
| PHP      | 7.3.27    | 18 R6          |                                                       |
| libldap  | 2.4.48    | 18 R2          |                                                       |

</details>