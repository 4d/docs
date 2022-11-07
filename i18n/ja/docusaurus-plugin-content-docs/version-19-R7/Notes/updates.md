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
    - 4D v19 R7 からのリリースは 100xxx と番号付けされます。

    特定の 4Dバージョンは、ブランチ名とビルド番号により一意に識別されます。 ビルド番号は時系列に増加します。


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
    - ビルド時に、プロジェクトの [directory.json ファイル](../Users/editing#directoryjson-file) を [サーバーに埋め込む](../Desktop/building#ビルドしたサーバーアプリケーションにプロジェクトのユーザーとグループを埋め込む) ことができるようになりました。 これにより、基本的なセキュリティのユーザーとグループ構成でクライアント/サーバーアプリケーションを運用することができます。
    - ビルドするアプリケーションで、[使用しないモジュールの選択を解除](../Desktop/building#モジュールの選択解除) できるようになりました。
- [Client/Server optimization](../ORDA/datastores#clientserver-optimization): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](../ORDA/datastores#preconfiguring-contexts) and [ORDA Cache](../ORDA/datastores#orda-cache) for more information. > これらの関数は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。
- [DataClass class](../API/DataClassClass): The new [.getCount()](../API/DataClassClass#getcount) function returns the number of entities in a dataclass.
- 4D View Pro:
    - The new [VP SET DATA CONTEXT](../ViewPro/method-list#vp-set-data-context), [VP Get data context](../ViewPro/method-list#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list#vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list#vp-get-binding-path) and [VP Export to object](../ViewPro/method-list#vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.


### 4D v19 R4

- [Alias attributes](../ORDA/ordaClasses#alias-attributes-1) are available in ORDA classes.
- Support for [break and continue](../Concepts/looping#break-and-continue) statements in loops.
- Support for [return](../Concepts/control-flow#return-expression) statement and [return expression](../Concepts/parameters#return-expression) to return values.
- Support for [compound assignment operators](../Concepts/operators#compound-assignment-operators), [short-circuit operators](../Concepts/operators#short-circuit-operators), and [ternary operator](../Concepts/operators#ternary-operator)
- The [Code Editor](../code-editor/overview) now includes an dropdown tool and supports markers for better code navigation.
- New Preferences: [**Include tokens in project source files**](../Preferences/general#include-tokens-in-project-source-files) and [**Show clipboards**](../Preferences/methods#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](../REST/lock) entities.
- [4D View Pro](../ViewPro/getting-started) chapter added with new commands: [VP Copy to object](../ViewPro/method-list#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list#vp-paste-from-object).
- New [SystemWorker class](../API/SystemWorkerClass).


### 4D v19 R3

- [Computed properties](../Concepts/classes#function-get-and-function-set) are available in classes.
- [Computed attributes](../ORDA/ordaClasses#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](../ORDA/ordaClasses#function-query-attributename) and [orderBy](../ORDA/ordaClasses#function-orderby-attributename) functions.
- New ORDA dataclass attributes: [`exposed`](../API/DataClassAttributeClass#exposed) and [`readOnly`](../API/DataClassAttributeClass#readonly).
- [ZIP archives](../API/ZipArchiveClass#zip-create-archive) now supports *LZMA* and *xz* compression algorithms.
- A [new build option](../Desktop/building#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows.
- Extended [support of dark mode](../Preferences/general#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](../API/IMAPTransporterClass#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass#pop3-new-transporter), and [`SMTP New transporter`](../API/SMTPTransporterClass#smtp-new-transporter).
- Users can now load a [log configuration file](../Debugging/debugLogFiles#using-a-log-configuration-file) using a button in the [server administration window](../ServerWindow/maintenance#load-logs-configuration-file).
- Handling [optional parameters](../Concepts/parameters#optional-parameters) is more flexible in the 4D language.
- Debugging web server sessions [is easier on 4D Server](../WebServer/sessions#preemptive-mode).
- 新しい [4D NetKit](https://github.com/4d/4D-NetKit) コンポーネントを使って、Microsoft Graph などのサードパーティーAPI に接続することができます。


### 4D v19 R2

- A [default .gitignore file](../Preferences/general#create-gitignore-file) can be created with new projects
- New [Blob class API](../API/BlobClass) to handle new [`4D.Blob` objects](Concepts/dt_blob#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](../API/FileClass#settext)


### 4D v19

- [IMAPTransporter Class](../API/IMAPTransporterClass): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](../API/FileClass): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](../Tags/tags.md#4deach-and-4dendeach) transformation tag.

- Web Server: new [SameSite session cookie](../WebServer/webServerConfig#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](../FormEditor/propertiesForm#color-scheme) and [style sheets](../FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](../Preferences/methods#theme-list).
- [Native compilation](../Project/compiler#compiler-methods-for) for Silicon processors.
- [Variable calculation](../FormObjects/propertiesObject#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](../Admin/cli) page.



### 4D v18 R6

- [Entity Selection Class](../API/EntitySelectionClass): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](../API/IMAPTransporterClass), [POP3 Mail](../API/POP3TransporterClass) and [SMTP Mail](../API/SMTPTransporterClass): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass): new `.expunge()` and `.append()` functions
- New [WebAdmin](../Admin/webAdmin) web server component
- New [DataExplorer](../Admin/dataExplorer) interface
- New web [user sessions](../WebServer/sessions) and [their API](../API/SessionClass).


</details>


## ライブラリの一覧

<details><summary>4D で使用されているライブラリについてはこちらをクリックしてください。</summary>

| ライブラリ    | 現在のバージョン  | 更新された 4D バージョン | 説明                                                    |
| -------- | --------- | -------------- | ----------------------------------------------------- |
| SpreadJS | 15.2.0    | 19 R7          | 4D View Pro エンジン                                      |
| CEF      | 4692.99   | 19 R5          | Chromium v97。 ディスク上のファイルにアクセスするときも CORSポリシーが適用されます。   |
| OpenSSL  | 1.1.1n    | 19 R4          |                                                       |
| libzip   | 1.7.3     | 19 R2          | Zip クラス、4D Write Pro、svg および serverNet コンポーネントによって使用。 |
| webKit   | WKWebView | 19             |                                                       |
| ICU      | 68.1      | 18 R6          |                                                       |
| PHP      | 7.3.27    | 18 R6          | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。      |
| libldap  | 2.4.48    | 18 R2          |                                                       |

</details>