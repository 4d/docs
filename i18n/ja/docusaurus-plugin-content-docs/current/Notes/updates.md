---
id: updates
title: リリースノート
---

## 4D v20

[**4D v20 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20/): 4D v20 の新機能と拡張機能をすべてリストアップしたブログ記事です。


#### インデックス再構築の警告

4D v20 では、ICUライブラリのアップデート (後述参照) により、文字列型、テキスト型、オブジェクト型のインデックスの再構築が強制されます。 データファイルのサイズに応じて、この処理には時間がかかることがあるため、計画的なアップグレードが推奨されます。

#### ハイライト

- [IMAP Transporter クラス](../API/IMAPTransporterClass): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) が *id* を返すようになりました。[`.selectBox()`](../API/IMAPTransporterClass#selectbox) が *id*, *flags* および *permanentFlags* を返すようになりました。[`.addFlags()`](../API/IMAPTransporterClass#addflags) と [`.removeFlags()`](../API/IMAPTransporterClass#removeflags) がカスタムキーワードをサポートするようになりました。
- 新しい [WebSocketServer](../API/WebSocketServerClass.md) と [WebSocketConnection](../API/WebSocketConnectionClass.md) クラスで、4D から WebSocket 接続を作成および管理できるようになりました。
- データストアをロック/ロック解除する新しい関数が追加されました: [`.flushAndLock()`](../API/DatastoreClass#flushandlock), [`.locked()`](../API/DatastoreClass#locked), [`.unlock()`](../API/DatastoreClass#unlock)。
- コードエディター: 強化された [検索/置換機能](../code-editor/write-class-method.md#検索と置換)。
- コード簡素化のため、一部の比較演算子は [未定義値](../Concepts/dt_null_undefined.md#未定義演算子) に使用しても、エラーが発生しないようになりました。
- [`POP3Transporter.getMail()`](../API/POP3TransporterClass#getmail) で *headerOnly* パラメーターをサポート 。
- Support of `count values` option in [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) and [`collection.distinct()`](../API/CollectionClass.md#distinct) functions.
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) on doc.4d.com.
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=20): 4D v20 で修正されたバグのリストです。



#### 動作の変更

- HTTP RFC に準拠するため、[`HTTPRequestClass.response.headers`](../API/HTTPRequestClass#response) プロパティは、すべてのヘッダー名を **小文字で** 返すようになりました。 以前と同じふるまいが必要な場合には、新しい [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass#response) プロパティを使用します。


## 4D v19 R8

[**4D v19 R8 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v19-r8/): 4D v19 R8 の新機能と拡張機能をすべてリストアップしたブログ記事です。


#### ハイライト

- [グローバルおよびコンポーネントの実行コンテキスト](../Concepts/error-handling.md#スコープとコンポーネント) に対してエラー処理メソッドを実装することができます。
- コレクションまたはエンティティセレクションをデータソースとするリストボックスの列で、[自動行高](../FormObjects/properties_CoordinatesAndSizing.md#自動行高) プロパティがサポートされるようになりました。
- ORDA: [`setPrivileges()`](../API/SessionClass.md#setprivileges) を使ってセッションに割り当てる [権限](../ORDA/privileges.md) を定義するための *roles.json* ファイルをサポート。
- Windows で [SDIモードでのアプリケーションのテスト](../Menus/sdi.md#sdiモード利用条件) をサポート。
- 4D View Pro:
    - 表組みにおけるテーマのサポート: 新しい [VP SET TABLE THEME](../ViewPro/method-list#vp-set-table-theme) および [VP Get table theme](../ViewPro/method-list#vp-get-table-theme) コマンドの追加、[VP CREATE TABLE](../ViewPro/method-list#vp-create-table) コマンドにテーマオプションを追加
    - 新しい [VP Get table dirty rows](../ViewPro/method-list#vp-get-table-dirty-rows) コマンドの追加
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) on doc.4d.com.
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=19_R8): 4D v19 R8 で修正されたバグのリストです。


#### 動作の変更

- HTTP RFC に準拠するため、[`HTTPRequestClass.response.headers`](../API/HTTPRequestClass#response) プロパティは、すべてのヘッダー名を **小文字で** 返すようになりました。 以前と同じふるまいが必要な場合には、新しい [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass#response) プロパティを使用します。
- 標準アクションが適用されている [リンクされているポップアップメニューの付いたベベルボタン](../FormObjects/properties_TextAndPicture.md/#ポップアップメニューあり) で、ポップアップメニューのオプションが選択された場合、その標準アクションは実行されなくなりました。
- Blink (CEF) を使用する Webエリアにおいて、外部スクリプトによって表示されるダイアログは、 `setTimeout()` JS 関数から呼び出されていないとブロックされるようになりました。 これは、現在のCEFのアップデートにより、`alert()` や `print()` などの関数によって表示されるダイアログが、OS ではなく Web エリアで処理されるようになったためです。 [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/ja/page1029.html) と [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/ja/page1043.html) 参照。



## 4D v19 R7

[**4D v19 R7 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v19-r7/): 4D v19 R7 の新機能と拡張機能をすべてリストアップしたブログ記事です。


#### ハイライト

- [データエクスプローラー](../Admin/dataExplorer#基本) にリレートデータと計算属性、エイリアス属性が表示できます。
- 新しい [FileHandle](../API/FileHandleClass) クラスと、`File` クラスの新しい [`.open()`](../API/FileClass#open) 関数。
- [EntitySelection クラス](../API/EntitySelectionClass): [`.add()`](../API/EntitySelectionClass#add) 関数が *entitySelection* 引数を、[`.minus()`](../API/EntitySelectionClass#minus) 関数が *keepOrder* 引数をサポートするようになりました。
- 4D View Pro に新しい表組みコマンドが追加されました: [VP Find table](../ViewPro/method-list#vp-find-table), [VP Get table column attributes](../ViewPro/method-list#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list#vp-set-table-column-attributes)。
- コンポーネント名前空間が [ エクスプローラーに表示](../Extensions/develop-components#コンポーネント名前空間の宣言) されるようになりました。
- テキストエリアおよび入力フォームオブジェクトにおいて、[角の半径プロパティ](../FormObjects/properties_CoordinatesAndSizing#角の半径) をサポート。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.ja.html) ページ。
- [**修正リスト**](https://4d-jp.github.io/283/release-note-version-19r7/): 4D v19 R7 で修正されたバグのリストです。


#### 動作の変更

- 標準的なインターフェース (OS のファイルエクスプローラなど) との一貫性を保つため、行の選択/ドラッグ＆ドロップに関するリストボックスのルールが変更されました。 連続または不連続の選択行をクリックして移動するだけで、ドラッグできるようになり、**Alt** キーは不要になりました (ひきつづき以前のように使用することはできます)。 **Shift** または **Ctrl/Command** キーが押されている場合、マウスのクリックは押されたとき (マウスダウン) に考慮されます。 リストボックスでのドラッグ＆ドロップの詳細については、[このブログ記事](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) を参照し、[このHDI 4Dプロジェクト](https://github.com/4D-JP/HDI/releases/download/19r7/HDI_LB_DragAndDrop.zip) をダウンロードしてください。
- 4D v19 R7 から 4D の内部ビルド番号が変更されました:
    - 4D v19 R6 (含む) までのリリースは 282xxx の番号です。
    - 4D v19 R7 以降のリリースは 100xxx という番号になります。   
      なお、特定の 4Dバージョンは、ブランチ名とビルド番号により一意に識別されます。 ビルド番号は時系列に増加します。
- Wakanda/4D Mobile REST プロトコルを使用してプロジェクトメソッドを呼び出す機能が削除されました。 [ORDAデータモデルクラス関数](../REST/ClassFunctions.md) または [/4DACTION URL](../WebServer/httpRequests.md#4daction) を代わりに使用することができます。


## 4D v19 R6

- 新しい [HTTPRequest](../API/HTTPRequestClass) クラス。
- コードを呼び出す Collectionクラス関数は、*formula* 引数として Formulaオブジェクトをサポートするようになりました: [`.every()`](../API/CollectionClass#every), [`.filter()`](../API/CollectionClass#filter), [`.find()`](../API/CollectionClass#find), [`.findIndex()`](../API/CollectionClass#findindex), [`.map()`](../API/CollectionClass#map), [`.orderByMethod()`](../API/CollectionClass#orderbymethod), [`.reduce()`](../API/CollectionClass#reduce), [`.some()`](../API/CollectionClass#some), [`.sort()`](../API/CollectionClass#sort)
- リストボックスのセルは、[横方向](FormObjects/properties_CoordinatesAndSizing#横方向パディング) および [縦方向](FormObjects/properties_CoordinatesAndSizing#縦方向パディング) のパディングをサポートするようになりました。
- 4D View Pro: 新しい [VP CREATE TABLE](../ViewPro/method-list#vp-create-table) と [VP REMOVE TABLE](../ViewPro/method-list#vp-remove-table) コマンドを使用して、シート内のテーブルを操作します。
- [Webデータエクスプローラー](../Admin/dataExplorer#基本) でリレート属性、計算属性、およびエイリアス属性を表示することができます。
- To help us make our products always better, we now automatically collect data regarding usage statistics on running 4D Server applications. This will have no impact on performance. See the new page explaining [why and how 4D collects data](../Admin/data-collect).
- Components compiled for Silicon: On macOS Silicon platforms (Apple ARM CPUs), components must be recompiled with 4D v19 R6 or higher to be used with this release.




## 4D v19 R5

- The project [directory.json file](Users/editing#directoryjson-file) can now be [embedded in the server](../Desktop/building#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
- You can now [deselect useless modules](../Desktop/building#deselecting-modules) in your built applications.
- The *MeCab* library is included by default in all 4D applications on macOS. In previous releases, this library, specifically designed to manage Japanese text, was only available in the Japanese version of 4D on macOS. If you do not need this library in your final applications, you can now [deselect it](../Desktop/building#deselecting-modules).
- [クライアント/サーバーの最適化](../ORDA/remoteDatastores#クライアントサーバーの最適化): 新しいクラス関数により、ORDAキャッシュと最適化コンテキストの内容を操作することができます。 詳細は、[コンテキストの事前設定](../ORDA/remoteDatastores#コンテキストの事前設定) および [ORDAキャッシュ](../ORDA/remoteDatastores#ordaキャッシュ) を参照ください。

   > These functions are intended for developers who need to customize ORDA default features for specific configurations. ほとんどの場合、使用する必要はないでしょう。
- [DataClass クラス](../API/DataClassClass): 新しい [.getCount()](../API/DataClassClass#getcount) 関数は、データクラスの総エンティティ数を返します。
- The *4DDiagnosticLog.txt* file only records high-level information by default ([INFO level](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). You can now select the information level to record (for example DEBUG level information) using the `Diagnostic log level` selector of the `SET DATABASE PARAMETER` command or the log configuration file.
- Calling `Use()` on a non-shared object or a non-shared collection does nothing (it no longer generates an error). Thus, it is now useless to test if the object or collection passed to Use() is actually shared.
- For clarification purposes, two SQL commands have been prefixed: `GET DATA SOURCE LIST` has been renamed to `SQL GET DATA SOURCE LIST`, `Get current data source` has been renamed to `SQL Get current data source`.
- **4D View Pro**:
    - 新しい [VP SET DATA CONTEXT](../ViewPro/method-list#vp-set-data-context)、[VP Get data context](../ViewPro/method-list#vp-get-data-context)、[VP SET BINDING PATH](../ViewPro/method-list#vp-set-binding-path)、および [VP Get binding path](../ViewPro/method-list#vp-get-binding-path) コマンドを使って、データコンテキストを作成し、その内容をシートのセルにバインドすることができます。
    - [VP EXPORT DOCUMENT](../ViewPro/method-list#vp-get-binding-path) と [VP Export to object](../ViewPro/method-list#vp-get-binding-path) は、データコンテキストの内容をセルの値としてエクスポートするための新しい `includeBindingSource` オプションを受け付けます。
    - (Windows only) 4D View Pro areas now use a new print settings window.
- **Web areas**:
    + New Windows system rendering engine: Web Areas using the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) are now based upon **Microsoft Edge WebView2**. This impacts the following features:
        * The `WA Create URL history menu` and `WA GET URL HISTORY` commands only return the current URL.
        - The [Progression variable](../FormObjects/properties_WebArea.md#progression) is no longer updated.
        - Drag and drop features are handled by a Windows API which is tagged "experimental" by Microsoft. Consequently, web areas may not work as expected when this API is not installed: Drag and drop may seem allowed even when the `WA enable URL drop` preference has been set to False. However, the drop action is blocked by default, and you can control the allowed URLs using the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) (see below).
    - (Windows only) When the user selects **Print...** from a web area using the embedded web rendering engine, a new print settings window is now displayed.
    - To reflect their actual effect in web areas (increase or decrease page zoom level), two commands have been renamed: `WA SET PAGE TEXT LARGER` has been renamed `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` has been renamed `WA ZOOM OUT`.
    - Enhanced security in web areas that use the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) or the [Windows system rendering engine](../FormObjects/webArea_Overview.md#web-rendering-engine) (based on Microsoft Edge WebView2):
        - CORS policies now apply when accessing files on disk in web areas. For example, when opening a .html file with `WA OPEN URL`, that .html file cannot contain links that point to files outside its folder
        - Dropping external contents in web areas is now always blocked and triggers the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) when the `WA enable URL drop` preference is set to True (when set to False, the `WA enable URL drop` preference only modifies the drop cursor icon and filters the `On Window Opening Denied` event). To allow a drop action, you need to execute additional code in the object method of the web area:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))
```



## 4D v19 R4

- ORDAクラス: [エイリアス属性](../ORDA/ordaClasses#エイリアス属性-1) が利用可能に。
- ループにおける [break と continue](../Concepts/cf_looping#break-と-continue) 文のサポート。
- [return](../Concepts/control-flow#return-expression) 文と、値を返すための [return {expression}](../Concepts/parameters#return-expression) 文のサポート。
- [複合代入演算子](../Concepts/operators#複合代入演算子)、[短絡演算子](../Concepts/operators#短絡演算子)、および [三項演算子](../Concepts/operators#三項演算子) のサポート。
- コードナビゲーションを改善するため、[コードエディター](../code-editor/overview) にドロップダウンツールが追加され、コードにマーカーを追加できるようになりました。
- 新しい環境設定: 一般ページの [**Project ソースファイルにトークンを含める**](../Preferences/general#project-ソースファイルにトークンを含める) および、メソッドページの [**クリップボードを表示**](../Preferences/methods#クリップボードを表示)。
- エンティティを [lock/unlock](../REST/lock) するための新しい REST リクエスト。
- [4D View Pro](../ViewPro/getting-started) の章が次の新コマンドとともに追加されました: [VP Copy to object](../ViewPro/method-list#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list#vp-paste-from-object).
- 新しい [SystemWorker クラス](../API/SystemWorkerClass)。
- The `Alias selection` constant has been renamed `Allow alias files` to resolve a conflict resulting from the support of alias attributes in ORDA.
- For better compliance with ORDA specifications, the *Map NULL values to blank values* field property is now unchecked by default in databases created with 4D v19 R4 and higher. You can also enable this default behavior in your databases converted from previous versions by selecting the Map NULL values to blank values unchecked by default at field creation compatibility setting. Working with Null values is now recommended since they are fully supported by ORDA.
- Because of the support of the [ternary operator](../Concepts/operators#ternary-operator), the colon ":" is no longer allowed in variable, field, constant, function, plugin and project method names. If your database/project contains identifiers with colons, you must replace them before converting it to v19 R4 or higher, otherwise errors may occur in your code. For example, if you have a variable named *a:b*, it could be interpreted as ternary operator syntax:

```4d
$value:=($size>1000)? a:b // Here 'a:b' is viewed as a ternary operator.
```



## 4D v19 R3

- クラス: [計算プロパティ](../Concepts/classes#function-get-と-function-set) が利用可能に。
- ORDAクラス: [計算属性](../ORDA/ordaClasses#計算属性) が利用可能に。 計算プロパティと似ていますが、[クエリ](../ORDA/ordaClasses#function-query-attributename) や [orderBy](../ORDA/ordaClasses#function-orderby-attributename) 関数もサポートしています。
- 新しい ORDAデータクラス属性: [`exposed`](../API/DataClassAttributeClass#exposed) および [`readOnly`](../API/DataClassAttributeClass#readonly)。
- [ZIPアーカイブ](../API/ZipArchiveClass#zip-create-archive): *LZMA* および *xz* 圧縮アルゴリズムをサポート。
- [新しいビルドオプション](../Desktop/building#silicon-macos-クライアントからの接続を許可) により、Windows上で Serverアプリケーションに Silicon Macクライアントを組み込むのが簡単になりました。
- macOS で [ダークモードをサポート](../Preferences/general#アピアランス-macosのみ)。
- [`IMAP New transporter`](../API/IMAPTransporterClass#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass#pop3-new-transporter), および [`SMTP New transporter`](../API/SMTPTransporterClass#smtp-new-transporter): **OAuth2 トークンオブジェクト** をサポート。
- [サーバー管理ウィンドウ](../ServerWindow/maintenance#ログ設定ファイルを読み込む) のボタンを使って、[ログ設定ファイル](../Debugging/debugLogFiles#ログ設定ファイルを使用する) を読み込めるようになりました。
- Handling [optional parameters](../Concepts/parameters#optional-parameters) is more flexible in the 4D language when accessing parameters declared but not passed. For example, the following code no longer provokes an error:

```4d
// "concate" function of myClass
Function concate ($param1 : Text ; $param2 : Text)
ALERT($param1+" "+$param2)
  // Calling method
 $class:=cs.myClass.new()
 $class.concate("Hello";" world") // Displays "Hello world"
 $class.concate("Hello") // Displays "Hello "
 $class.concate() // Displays " "
```
For detailed information, please refer to [this blog post](https://blog.4d.com/stop-press-accessing-parameters-not-being-passed-is-possible). To benefit from this overall simplification, you need to recompile both calling and called methods; thus components must be recompiled.
- Webサーバーセッションのデバッグが [4D Server 上で容易になりました](../WebServer/sessions#プリエンプティブモード)。
- 新しい [4D NetKit](https://github.com/4d/4D-NetKit) コンポーネントを使って、Microsoft Graph などのサードパーティーAPI に接続することができます。
- 4D v19 R3 uses a stronger hashing algorithm for 4D user passwords: Bcrypt. This new algorithm is automatically used when a password is changed using the Tool Box, the `CHANGE PASSWORD` command, or the `Set user properties` command. Once a password is modified, opening the database with a version prior to 4D v19 R3 will cause an authentication denial for this account. If you use 4D passwords, it is highly recommended to backup the .4db file (binary databases) or directory.json file (projects) before upgrading to 4D v19 R3 or later.
- For accuracy, the `4D digest` constant has been renamed `4D REST digest`.
- End-of-line and BOM management for XML commands: When opened in 4D v19 R3, projects or databases created with previous releases behave differently regarding default end-of-line characters and BOM management in XML documents: line feed (LF) characters are used instead of CR (on macOS), and byte order marks (BOM) are not included. This allows a better compatibility with VCS tools. If necessary, you can restore the v19 R2 behavior using the `XML SET OPTIONS` command. In projects or databases converted from versions prior to 19 R2, these options are managed by two compatibility settings.
- Runtime Explorer shortcut removed in built projects: The **Cmd/Ctrl+Shift+F9** shortcut does no longer display the Runtime Explorer window in single-user merged project applications. This shortcut can now be a user application shortcut. You can call the Runtime Explorer window using the new `OPEN RUNTIME EXPLORER` command.
- Extended debugging capabilities with 4D Server: In interpreted mode, 4D Server can now debug all kinds of processes, including scalable web sessions. This is available when the debugger is attached to the server or to a remote client.   
  *Warning: In interpreted mode, in order to make extented debugging available on the server machine, all server processes are now automatically executed in cooperative mode when the debugger is attached to the server (default setting). This can have a significant impact on the performance of your converted applications when they run with 4D Server v19 R3 and higher. To restore preemptive execution on the server in this case, all you need to do is detach the debugger from the server (and attach it to a remote client if necessary).*
- On Windows, 4D projects and databases created with 4D v19 R3 and higher use the [DirectWrite API](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) in forms. This API improves text rendering, especially in high DPI configurations. DirectWrite is used for text rendering with static and input text, checkboxes, buttons, and radio buttons. Note that listboxes already use DirectWrite. A compatibility option allows you to enable DirectWrite in projects and databases created with previous 4D versions.
- If you use components compiled with 4D v19.0 for Silicon (Apple ARM CPUs) which call the `Count parameters` command, we recommend to recompile them with 4D v19 R3 to provide compatibility with 4D v19 R3 and future releases. If a component is not compiled for Silicon, there is no need to recompile.








## 4D v19 R2

- 新規プロジェクト作成時に [デフォルトの.gitignoreファイル](../Preferences/general#gitignore-ファイルを作成する) が作成可能
- 新しい [`4D.Blob`](../Concepts/dt_blob#blob-の種類) オブジェクトを扱うための新しい[BlobクラスAPI](../API/BlobClass)
- [`.setText()`](../API/FileClass#settext) におけるデフォルトの改行コード (EOL) の指定と `no-bom` のサポート


## 過去のリリース

<details><summary>過去のリリースについてはこちらをクリックしてください。</summary>

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



| ライブラリ     | 現在のバージョン  | 更新された 4D バージョン | 説明                                                                                                                                                                 |
| --------- | --------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ICU       | 72.1      | 20             | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。                                                                                                                   |
| CEF       | 109       | 20             | Chromium 5414. CORS policies now also apply when accessing files on disk (see the "security" paragraph on web areas in the [4D v19 R5](#4d-v19-r5) section above). |
| Hunspell  | 1.7.2     | 20             | 4D フォームと 4D Write Pro でスペルチェックに使用されます。                                                                                                                             |
| PDFWriter | 4.3       | 20             | FreeType dependency in 12.2.1                                                                                                                                      |
| SpreadJS  | 15.2.5    | 19 R8          | 4D View Pro エンジン                                                                                                                                                   |
| OpenSSL   | 1.1.1s    | 19 R7          |                                                                                                                                                                    |
| libZip    | 1.9.2     | 20             | Zip クラス、4D Write Pro、svg および serverNet コンポーネントによって使用。                                                                                                              |
| LZMA      | 5.4.1     | 20             |                                                                                                                                                                    |
| Zlib      | 1.2.13    | 20             |                                                                                                                                                                    |
| webKit    | WKWebView | 19             |                                                                                                                                                                    |
| PHP       | 7.3.27    | 18 R6          |                                                                                                                                                                    |
| libldap   | 2.4.48    | 18 R2          |                                                                                                                                                                    |

