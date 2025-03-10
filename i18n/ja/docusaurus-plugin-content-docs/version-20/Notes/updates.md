---
id: updates
title: リリースノート
---


:::tip

[**4D 20 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v20/): 4D 20.x LTS の新機能と拡張機能をすべてリストアップしたブログ記事です。

:::

## 4D 20.6 LTS

#### ハイライト

- 4D 20.6 LTS はWindows Server 2025 対応です。

:::警告 WINDOWS SERVER 2025 での既知の問題

Windows Server 2025 では、新しいWindows 印刷ダイアログボックス内での一部のカスタムのオプションは利用不可となっており、現在調査中です。 A fix will be available in the next hotfix.

:::

- Ability to [build standalone applications without embedded licenses](../Desktop/building.md#licenses).
- [**Fixed bugs list**](https://bugs.4d.com/fixes?version=20.6): list of all bugs that have been fixed in 4D 20.6 LTS.



## 4D 20.5 LTS

#### ハイライト

- 4D 20.5 LTD は Windows 11 24H2 対応です。
- 4D 20.5 LTS は macOS Sequoia (macOS 15) 対応です。

:::warning Windows 11 24H2における既知の問題

Windows 11 24H2 では、Microsoft Print to PDFドライバーを使用して PDF を生成すると、現在調査中の問題が原因で失敗する可能性があります。 4Dアプリケーションで頻繁に PDF を印刷する場合、Windows 11 24H2 へのアップグレードはされないことをお勧めします。

:::

- [**修正リスト**](https://bugs.4d.com/fixes?version=20.5): 4D 20.5 LTS で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/276/release-note-version-20/))。


## 4D 20.4 LTS

#### ハイライト

- [**修正リスト**](https://bugs.4d.com/fixes?version=20.4): 4D 20.4 LTS で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/276/release-note-version-20/))。

## 4D 20.3 LTS

#### ハイライト

- CEF が Chromium 5993 にアップデートされました。
- SpreadJS は 4D 20.2 HF1 でバージョン 16.2.6 にアップデートされました。
- [**修正リスト**](https://bugs.4d.com/fixes?version=20.3): 4D 20.3 LTS で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/276/release-note-version-20/))。

#### 動作の変更

- 4D 20.3では、[4Dユーザーディレクトリが bcryptアルゴリズムを使用している](https://blog.4d.com/ja/bcrypt-support-for-passwords/)場合にパスワード認証を可能にするため、[`Open datastore`](../API/DataStoreClass.md#open-datastore)コマンドの *connectionInfo* パラメーターに設定する "password" 値は、デフォルトでクリアテキストで送信されるようになりました。 "On REST authentication" データベースメソッドが、パスワードを平文の状態で扱えるようにし (3番目のパラメーターは **False**)、`Open datastore` に渡す *connectionInfo* で "tls" オプションを **True** にすることで、接続が暗号化されるようにする必要があります。 特定の場合には、新しい "passwordAlgorithm" オプションも互換性のために使用できます ([`Open datastore`](../API/DataStoreClass.md#open-datastore) コマンド参照)。


## 4D 20.2 LTS

#### ハイライト

- 4D 20.2 は macOS Sonoma (macOS 14) 対応です。

:::warning セキュリティに関する注記

4Dアプリケーションが TLS接続を使用する場合は、4D 20.2 LTS build 100956以上へのアップグレードが推奨されます。 詳細は [セキュリティ情報](https://blog.4d.com/ja/security-bulletin-two-cves-and-how-to-stay-secure/) を参照ください。

:::

:::caution 4D Server 20.2 以降の最小クライアントバージョンについて

内部的な理由により、4D 20.2 以降の 4D Server に接続するリモートクライアントのバージョンは、4D 20.2 以上でなければなりません。

:::

- [**修正リスト**](https://bugs.4d.com/fixes?version=20.2): 4D 20.2 LTS で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/276/release-note-version-20/))。

#### 動作の変更

- 4D 20.2 以降、4D 20 LTS は Windows Server 2012 R2 との互換性がなくなりました。
- **警告**: [4D.FileHandle](../API/FileHandleClass.md) オブジェクトの [`offset`](../API/FileHandleClass.md#offset) の開始値が誤って 0 ではなく 1 に設定されていました。 **20.2** (20.1 HF1) および **20 R2** のバージョンで 4D が修正され、この値が 0 になりました。

## 4D 20.1 LTS

#### ハイライト

:::caution 4D 20.1 インデックス再構築、およびクライアント/サーバーのバージョンについての警告

4D 20.1 には ICUライブラリーのアップデートが含まれており、以下の影響があります:

- 文字列型、テキスト型、オブジェクト型のインデックスの再構築が強制されます。
- 並べ替えの一貫性のため、4Dリモートクライアントと 4D Server は同じバージョンを使用する必要があります。 4D 20.1 のリモートと 4D Server 20.1 のみが互いに接続できます。

:::


- [**修正リスト**](https://bugs.4d.com/fixes?version=20.1): 4D 20.1 LTS で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/276/release-note-version-20/))。

## 4D 20 LTS


#### ハイライト

:::caution インデックス再構築

4D 20 では、ICUライブラリのアップデート (後述参照) により、文字列型、テキスト型、オブジェクト型のインデックスの再構築が強制されます。 データファイルのサイズに応じて、この処理には時間がかかることがあるため、計画的なアップグレードが推奨されます。

:::

- [`Compile project`](https://doc.4d.com/4dv20/help/command/ja/page1760.html) コマンドの *options* パラメーターに `plugins` プロパティが新しく追加されました。
- 4D Server automatically integrates multiple journals: [Automatic restore](../Backup/settings.md#automatic-restore-and-log-integration).
- [IMAP Transporter クラス](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass.md#getboxinfo) が *id* を返すようになりました。 [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) が *id*, *flags* および *permanentFlags* を返すようになりました。 [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) と [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) がカスタムキーワードをサポートするようになりました。
- 新しい [WebSocketServer](../API/WebSocketServerClass.md) と [WebSocketConnection](../API/WebSocketConnectionClass.md) クラスで、4D から WebSocket 接続を作成および管理できるようになりました。
- ユーザークラス定義で [`property`](../Concepts/classes.md#property) キーワードをサポート。
- データストアをロック/ロック解除する新しい関数が追加されました: [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock)。
- EntitySelection クラスに新しく [`.at()`](../API/EntitySelectionClass.md#at) 関数が追加されました。
- Collection クラスに次の新しい関数が追加されました: [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap),[`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright)。
- コードエディター: 強化された [検索/置換機能](../code-editor/write-class-method.md#検索と置換)。
- [**デザインモードを検索**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.ja.html#6337726) ダイアログボックスにおいて、"property" ランゲージ要素が新たに検索可能になりました。
- コード簡素化のため、一部の比較演算子は [未定義値](../Concepts/dt_null_undefined.md#未定義演算子) に使用しても、エラーが発生しないようになりました。
- [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail) で *headerOnly* パラメーターをサポート。
- [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) および [`collection.distinct()`](../API/CollectionClass.md#distinct) 関数で `count values` オプションをサポートしました。
- 新しい [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths) 関数を追加しました。
- [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) および [`collection.distinct()`](../API/CollectionClass.md#distinct) 関数で `count values` オプションをサポートしました。
- ORDAリクエストログが [サーバー上 ](../Debugging/debugLogFiles.md#ordaリクエスト) で利用可能になり、[`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) 関数に引数が追加されました。
- CLI でコードを実行するための新しいツール: [tool4d](../Admin/cli.md#tool4d) および [ユーティリティモードの 4D Server](../Admin/cli.md#ユーティリティモードの-4d-server)。
- [データエクスプローラー](../Admin/dataExplorer.md#データエクスプローラーを開く) 用の新しいツールバーボタンと 4Dウィンドウでの表示。
- ボタン、チェックボックス、ラジオボタンに新しいプロパティが追加されました: [タイトルと画像を隣接させる](../FormObjects/properties_TextAndPicture.md#タイトルと画像を隣接させる) と [横揃え](../FormObjects/properties_Text.md#横揃え)
- [`file.setAppInfo()`](../API/FileClass.md#setappinfo) 関数で `WinIcon` をサポート。
- New `validateTLSCertificate` option for [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew) allowing you to control the automatic certificate validation.
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.com/fixes?version=20): 4D 20 LTS で修正されたバグのリストです ([日本語版はこちら](https://4d-jp.github.io/2024/276/release-note-version-20/))。


#### 動作の変更

- HTTP RFC に準拠するため、[`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) プロパティは、すべてのヘッダー名を **小文字で** 返すようになりました。 以前と同じふるまいが必要な場合には、新しい [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) プロパティを使用します。
- [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) で HTTPリクエストを送信する際、TLS証明書が 4Dによって自動的に検証され、無効な場合はエラーで拒否されるようになりました。 新しい *option* プロパティで、この検証を管理することができます。
- TLS v1.0 および TLS v1.1 は廃止され、4D Server において `Min TLS version` としてサポートされなくなりました。 `_o_TLSv1_0` または `_o_TLSv1_1` 定数が [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/ja/page642.html) で設定されている場合には、バージョン 1.3 が自動的に使用されます。
- 一貫性のため、ボタン・チェックボックス・ラジオボタンはすべて、実行時に "3D" タイプでレンダリングされるようになりました。 これらのオブジェクトに対し [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/ja/page1300.html) を呼び出した場合、返されるのはそれぞれ、`Object type 3D button`、`Object type 3D checkbox`、`Object type 3D radio button` の値です。
- 4D for Mobile の開発機能を 4D で利用するには、プロジェクトの ["Components"](../Project/architecture.md#components) フォルダーに [4D Mobile App コンポーネントをインストール](https://developer.4d.com/go-mobile/docs/getting-started/installation) する必要があります。 プロジェクトが [4D Mobile App Server コンポーネント](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server) の機能を使用している場合、こちらも同じ場所にインストールする必要があります。 4D 20 より、[4D for Mobile](https://developer.4d.com/go-mobile/) は 4D環境にデフォルトでインストールされなくなりました。


### 4D 19 R8

[**4D 19 R8 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v19-r8/): 4D 19 R8 の新機能と拡張機能をすべてリストアップしたブログ記事です。


#### ハイライト

- [グローバルおよびコンポーネントの実行コンテキスト](../Concepts/error-handling.md#スコープとコンポーネント) に対してエラー処理メソッドを実装することができます。
- コレクションまたはエンティティセレクションをデータソースとするリストボックスの列で、[自動行高](../FormObjects/properties_CoordinatesAndSizing.md#自動行高) プロパティがサポートされるようになりました。
- ORDA: [`setPrivileges()`](../API/SessionClass.md#setprivileges) を使ってセッションに割り当てる [権限](../ORDA/privileges.md) を定義するための *roles.json* ファイルをサポート。
- Windows で [SDIモードでのアプリケーションのテスト](../Menus/sdi.md#sdiモード利用条件) をサポート。
- 4D View Pro:
    - 表組みにおけるテーマのサポート: 新しい [VP SET TABLE THEME](../ViewPro/method-list.md#vp-set-table-theme) および [VP Get table theme](../ViewPro/method-list.md#vp-get-table-theme) コマンドの追加、[VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) コマンドにテーマオプションを追加
    - 新しい [VP Get table dirty rows](../ViewPro/method-list.md#vp-get-table-dirty-rows) コマンドの追加
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.ja.html) ページ。
- [**修正リスト**](https://bugs.4d.fr/fixedbugslist?version=19_R8): 4D 19 R8 で修正されたバグのリストです。


#### 動作の変更

- HTTP RFC に準拠するため、[`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) プロパティは、すべてのヘッダー名を **小文字で** 返すようになりました。 以前と同じふるまいが必要な場合には、新しい [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) プロパティを使用します。
- When a [bevel button with linked pop-up menu](../FormObjects/properties_TextAndPicture.md#with-pop-up-menu) is assigned a standard action, the standard action is no longer generated if a pop-up menu option is selected.
- Blink (CEF) を使用する Webエリアにおいて、外部スクリプトによって表示されるダイアログは、 `setTimeout()` JS 関数から呼び出されていないとブロックされるようになりました。 これは、現在のCEFのアップデートにより、`alert()` や `print()` などの関数によって表示されるダイアログが、OS ではなく Web エリアで処理されるようになったためです。 [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/ja/page1029.html) および [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/ja/page1043.html) 参照。



### 4D 19 R7

[**4D 19 R7 の新機能**](https://blog.4d.com/ja-whats-new-in-4d-v19-r7/): 4D 19 R7 の新機能と拡張機能をすべてリストアップしたブログ記事です。


#### ハイライト

- [データエクスプローラー](../Admin/dataExplorer#基本) にリレートデータと計算属性、エイリアス属性が表示できます。
- 新しい [FileHandle](../API/FileHandleClass.md) クラスと、`File` クラスの新しい [`.open()`](../API/FileClass.md#open) 関数。
- [EntitySelection クラス](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) 関数が *entitySelection* 引数を、[`.minus()`](../API/EntitySelectionClass.md#minus) 関数が *keepOrder* 引数をサポートするようになりました。
- [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew) において、*automaticRedirections* および *decodeData* オプションをサポート。
- New [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlogtxt) log file.
- 4D View Pro に新しい表組みコマンドが追加されました: [VP Find table](../ViewPro/method-list.md#vp-find-table), [VP Get table column attributes](../ViewPro/method-list.md#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list.md#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list.md#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list.md#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list.md#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list.md#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list.md#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list.md#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list.md#vp-set-table-column-attributes)。
- コンポーネント名前空間が [ エクスプローラーに表示](../Extensions/develop-components#コンポーネント名前空間の宣言) されるようになりました。
- テキストエリアおよび入力フォームオブジェクトにおいて、[角の半径プロパティ](../FormObjects/properties_CoordinatesAndSizing#角の半径) をサポート。
- 4Dランゲージコマンド: doc.4d.com の [新着](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.ja.html) ページ。
- 4D Write Pro: doc.4d.com の [新着](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.ja.html) ページ。
- [**修正リスト**](https://4d-jp.github.io/283/release-note-version-19r7/): 4D 19 R7 で修正されたバグのリストです。


#### 動作の変更

- 標準的なインターフェース (OS のファイルエクスプローラなど) との一貫性を保つため、行の選択/ドラッグ＆ドロップに関するリストボックスのルールが変更されました。 連続または不連続の選択行をクリックして移動するだけで、ドラッグできるようになり、**Alt** キーは不要になりました (ひきつづき以前のように使用することはできます)。 **Shift** または **Ctrl/Command** キーが押されている場合、マウスのクリックは押されたとき (マウスダウン) に考慮されます。 リストボックスでのドラッグ＆ドロップの詳細については、[このブログ記事](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) を参照し、[このHDI 4Dプロジェクト](https://github.com/4D-JP/HDI/releases/download/19r7/HDI_LB_DragAndDrop.zip) をダウンロードしてください。
- 4D 19 R7 から 4D の内部ビルド番号が変更されました:
    - 4D 19 R6 (含む) までのリリースは 282xxx の番号です。
    - 4D 19 R7 以降のリリースは 100xxx という番号になります。     
      なお、特定の 4Dバージョンは、ブランチ名とビルド番号により一意に識別されます。 ビルド番号は時系列に増加します。
- Wakanda/4D Mobile REST プロトコルを使用してプロジェクトメソッドを呼び出す機能が削除されました。 [ORDAデータモデルクラス関数](../REST/ClassFunctions.md) または [/4DACTION URL](../WebServer/httpRequests.md#4daction) を代わりに使用することができます。


### 4D 19 R6

- 新しい [HTTPRequest](../API/HTTPRequestClass.md) クラス。
- コードを呼び出すタイプの Collectionクラス関数が、*formula* 引数として Formulaオブジェクトをサポートするようになりました: [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- リストボックスのセルは、[横方向](../FormObjects/properties_CoordinatesAndSizing.md#横方向パディング) および [縦方向](../FormObjects/properties_CoordinatesAndSizing.md#縦方向パディング) のパディングをサポートするようになりました。
- 4D View Pro: 新しい [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) と [VP REMOVE TABLE](../ViewPro/method-list.md#vp-remove-table) コマンドを使用して、シート内のテーブルを操作します。
- [Webデータエクスプローラー](../Admin/dataExplorer.md#基本) でリレート属性、計算属性、およびエイリアス属性を表示することができます。
- 4D製品を改善し続けるために、実行中の 4D Server アプリケーションの使用状況データを自動的に収集します。 この処理はパフォーマンスに影響を与えません。 [4D がデータを収集する理由と方法](../Admin/data-collect.md) について詳細を説明する新しいページを参照ください。
- Silicon用にコンパイルされたコンポーネント: macOS Siliconプラットフォーム (Apple ARM CPU) では、このリリースで使用するためには、コンポーネントを 4D 19 R6 以降で再コンパイルする必要があります。




### 4D 19 R5

- ビルド時に、プロジェクトの [directory.json ファイル](../Users/handling_users_groups.md#directoryjson-file) を [サーバーに埋め込む](../Desktop/building.md#ビルドしたサーバーアプリケーションにプロジェクトのユーザーとグループを埋め込む) ことができるようになりました。 これにより、基本的なセキュリティのユーザーとグループ構成でクライアント/サーバーアプリケーションを運用することができます。
- ビルドするアプリケーションで、[使用しないモジュールの選択を解除](../Desktop/building.md#モジュールの選択解除) できるようになりました。
- *MeCab* ライブラリが、すべての macOS 4Dアプリケーションにデフォルトで含まれるようになりました。 日本語テキストの管理に特化したこのライブラリは、以前のリリースでは日本語版の macOS 4D でのみ利用可能でした。 最終的なアプリケーションでこのライブラリが必要ない場合は、[選択を解除](../Desktop/building.md#モジュールの選択解除) することができます。
- [クライアント/サーバーの最適化](../ORDA/remoteDatastores.md#クライアントサーバーの最適化): 新しいクラス関数により、ORDAキャッシュと最適化コンテキストの内容を操作することができます。 詳細は、[コンテキストの事前設定](../ORDA/remoteDatastores.md#コンテキストの事前設定) および [ORDAキャッシュ](../ORDA/remoteDatastores.md#ordaキャッシュ) を参照ください。

   > これらの関数は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。
- [DataClass クラス](../API/DataClassClass.md): 新しい [.getCount()](../API/DataClassClass.md#getcount) 関数は、データクラスの総エンティティ数を返します。
- *4DDiagnosticLog.txt* ファイルは、デフォルトでは高レベルの情報のみを記録します ([INFOレベル](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt))。 `SET DATABASE PARAMETER` コマンドまたはログ設定ファイルの `Diagnostic log level` セレクターを使用して、記録する情報レベル (たとえばDEBUGレベル) を選択できるようになりました。
- 非共有オブジェクトや非共有コレクションに対して `Use()` を呼び出しても何も起こりません (エラーが発生しなくなりました)。 したがって、Use() に渡されたオブジェクトやコレクションが実際に共有されているかどうかをチェックする意味はなくなりました。
- 分かりやすさのため、2つの SQLコマンドにプレフィックスが付けられました: `GET DATA SOURCE LIST` は `SQL GET DATA SOURCE LIST`、`Get current data source` は `SQL Get current data source` に名称変更されました。
- **4D View Pro**:
    - 新しい [VP SET DATA CONTEXT](../ViewPro/method-list.md#vp-set-data-context)、[VP Get data context](../ViewPro/method-list.md#vp-get-data-context)、[VP SET BINDING PATH](../ViewPro/method-list.md#vp-set-binding-path)、および [VP Get binding path](../ViewPro/method-list.md#vp-get-binding-path) コマンドを使って、データコンテキストを作成し、その内容をシートのセルにバインドすることができます。
    - [VP EXPORT DOCUMENT](../ViewPro/method-list.md#vp-get-binding-path) と [VP Export to object](../ViewPro/method-list.md#vp-get-binding-path) は、データコンテキストの内容をセルの値としてエクスポートするための新しい `includeBindingSource` オプションを受け付けます。
    - (Windowsのみ) 4D View Pro エリアの印刷設定ウィンドウが新しくなりました。
- **Webエリア**:
    + 新しい Windowsシステムのレンダリングエンジン: [Windowsシステムのレンダリングエンジン](../FormObjects/webArea_overview.md#webレンダリングエンジン) を使用している Webエリアは、**Microsoft Edge WebView2** をベースとするようになりました。 これにより、以下のような機能に影響があります:
        * `WA Create URL history menu` および `WA GET URL HISTORY` のコマンドは、カレントURL のみを返すようになりました。
        - [進捗状況変数](../FormObjects/properties_WebArea.md#進捗状況変数) は更新されなくなりました。
        - ドラッグ＆ドロップ機能は、マイクロソフトが "experimental" とタグ付けしている Windows API で処理されます。 そのため、この API がインストールされていない場合、Webエリアが期待どおりに振る舞わないかもしれません: `WA enable URL drop` 設定が false に設定されていても、ドラッグ＆ドロップ機能が許可されているように見えるかもしれません。 しかし、ドロップアクションはデフォルトでブロックされており、許可する URL は [`On Window Opening Denied` イベント](../Events/onWindowOpeningDenied.md) で管理することができます (後述参照)。
    - (Windows のみ) ユーザーが、埋め込みWebレンダリングエンジンを使用している Webエリアから **印刷...** メニューを選択した場合に表示される印刷設定ウィンドウが新しくなりました。
    - Webエリアにおけるコマンドの実際の効果 (ページズームレベルの増加/減少) を反映させるため、2つのコマンドの名前が変更されました: `WA SET PAGE TEXT LARGER` は `WA ZOOM IN` に、`WA SET PAGE TEXT SMALLER` は `WA ZOOM OUT` に名称変更されました。
    - [埋め込みWebレンダリングエンジン](../FormObjects/properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) または (Microsoft Edge WebView2 に基づく) [Windowsシステムのレンダリングエンジン](../FormObjects/webArea_overview.md#webレンダリングエンジン) を使用する Webエリアでのセキュリティを強化しました:
        - Webエリアにおいてディスク上のファイルにアクセスする場合にも、CORSポリシーが適用されるようになりました。 たとえば、`WA OPEN URL` を使用して .html ファイルを開こうとした場合、その .html ファイルには、フォルダー外のファイルへのリンクを含めることはできません。
        - Webエリアへの外部コンテンツのドロップは常にブロックされ、`WA enable URL drop` 設定が true に設定されている場合には、[`On Window Opening Denied` イベント](../Events/onWindowOpeningDenied.md) をトリガーします。 `WA enable URL drop` 設定が false に設定されている場合、マウスカーソルのアイコンのみが変更され、`On Window Opening Denied` イベントはフィルターされます。 ドロップアクションを許可するには、Webエリアのオブジェクトメソッドにおいて以下のような追加のコードを実行する必要があります:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))
```



### 4D 19 R4

- ORDAクラス: [エイリアス属性](../ORDA/ordaClasses.md#エイリアス属性-1) が利用可能に。
- ループにおける [break と continue](../Concepts/flow-control.md#break-と-continue) 文のサポート。
- [return](../Concepts/flow-control.md#return-expression) 文と、値を返すための [return {expression}](../Concepts/parameters.md#return-expression) 文のサポート。
- [複合代入演算子](../Concepts/operators.md#複合代入演算子)、[短絡演算子](../Concepts/operators.md#短絡演算子)、および [三項演算子](../Concepts/operators.md#三項演算子) のサポート。
- コードナビゲーションを改善するため、[コードエディター](../code-editor/overview.md) にドロップダウンツールが追加され、コードにマーカーを追加できるようになりました。
- 新しい環境設定: 一般ページの [**Project ソースファイルにトークンを含める**](../Preferences/general.md#project-ソースファイルにトークンを含める) および、メソッドページの [**クリップボードを表示**](../Preferences/methods.md#クリップボードを表示)。
- エンティティを [lock/unlock](../REST/$lock.md) するための新しい REST リクエスト。
- [4D View Pro](../ViewPro/getting-started.md) の章が次の新コマンドとともに追加されました: [VP Copy to object](../ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list.md#vp-paste-from-object).
- 新しい [SystemWorker クラス](../API/SystemWorkerClass.md)。
- ORDA でエイリアス属性をサポートしたことに起因する競合を解決するため、`Alias selection` 定数の名称を `Allow alias files` に変更しました。
- ORDA の仕様により適合するため、*ヌル値に空値をマップ* フィールドプロパティは、4D 19 R4以降で作成されたデータベースにおいてはデフォルトでチェックされないようになります。 以前のバージョンの 4D から変換されたデータベースにおいては、データベース設定の "フィールド作成時にヌル値を空値にマップをデフォルトでチェックを外す" オプションを選択することで、この新しいデフォルトの振る舞いを有効化することができます。 ORDA では NULL が完全にサポートされるようになったため、今後は使用することが推奨されます。
- [三項演算子](../Concepts/operators.md#三項演算子) のサポートに伴い、コロン ":" は今後、変数名、フィールド名、定数名、関数名、プラグイン名、プロジェクトメソッド名に使用できなくなります。 データベース/プロジェクトにおいてコロンを含む識別子が使用されている場合には、v19 R4 以降への変換前にそれらを置換する必要があります。 置換しない場合、コード内でエラーが起きる可能性があります。 たとえば、*a:b* という名前の変数があった場合、これが三項演算子シンタックスとして誤解されてしまう可能性があります:

```4d
$value:=($size>1000)? a:b // この場合 'a:b' は三項演算子として解釈されます
```



### 4D 19 R3

- クラス: [計算プロパティ](../Concepts/classes.md#function-get-と-function-set) が利用可能に。
- ORDAクラス: [計算属性](../ORDA/ordaClasses.md#計算属性) が利用可能に。 計算プロパティと似ていますが、[クエリ](../ORDA/ordaClasses.md#function-query-attributename) や [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename) 関数もサポートしています。
- 新しい ORDAデータクラス [属性](../API/DataClassClass.md#attributename): `exposed` および `readOnly`。
- [ZIPアーカイブ](../API/ZipArchiveClass.md#zip-create-archive): *LZMA* および *xz* 圧縮アルゴリズムをサポート。
- [新しいビルドオプション](../Desktop/building.md#silicon-macos-クライアントからの接続を許可) により、Windows上で Serverアプリケーションに Silicon Macクライアントを組み込むのが簡単になりました。
- macOS で [ダークモードをサポート](../Preferences/general.md#アピアランス-macosのみ)。
- [`IMAP New transporter`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass.md#pop3-new-transporter), および [`SMTP New transporter`](../API/SMTPTransporterClass.md#smtp-new-transporter) で **OAuth2 トークンオブジェクト** をサポート。
- [サーバー管理ウィンドウ](../ServerWindow/maintenance.md#ログ設定ファイルを読み込む) のボタンを使って、[ログ設定ファイル](../Debugging/debugLogFiles.md#ログ設定ファイルを使用する) を読み込めるようになりました。
- 宣言されたが渡されなかった引数にアクセスする場合の、4Dランゲージの [任意パラメーター](../Concepts/parameters.md#任意パラメーター) の扱いがより柔軟になりました。 たとえば、以下のコードは今後、エラーを生成しません:

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
詳細については、こちらの [ブログ記事](https://blog.4d.com/ja/stop-press-accessing-parameters-not-being-passed-is-possible) を参照ください。 この全体的な変更を利点を活かすため、呼び出し先メソッドと呼び出し元メソッドの両方を再コンパイルする必要があります。 そのため、コンポーネントの再コンパイルが必要になります。
- Debugging web server sessions [is easier on 4D Server](../WebServer/sessions.md).
- 新しい [4D NetKit](https://github.com/4d/4D-NetKit) コンポーネントを使って、Microsoft Graph などのサードパーティーAPI に接続することができます。
- ツールボックス、`CHANGE PASSWORD` コマンド、または `Set user properties` コマンドを使用してパスワードを変更した際に、この新しいアルゴリズムが自動的に使用されます。 4D 19 R3 では、4Dユーザーパスワードに対して、bcrypt というより強力なハッシュ化アルゴリズムを使用しています。 パスワードが一度変更されると、4D 19 R3 より前のバージョンで同じデータベースを開いた際には、そのアカウントの認証が拒否されます (ログインできません)。 そのため、4Dパスワードを使用している場合には、4D 19 R3 以降のバージョンにアップグレードする前に .4db ファイル (バイナリデータベース) または directory.json ファイル (プロジェクトデータベース) をバックアップしておくことが強く推奨されます。
- 正確性のため、`4D digest` 定数は、`4D REST digest` へと名称が改められました。

- XML コマンドにおける改行文字と BOM 管理: 以前のバージョンで作成されたプロジェクトまたはデータベースが 4D 19 R3 で開かれた場合、XMLドキュメントにおける改行文字と BOM 管理に関わる振る舞いが異なります: macOS において CR の代わりにラインフィード(LF) が使用されるほか、バイトオーダーマーク (BOM) が含まれなくなります。 これにより、VCS ツールとの互換性が改善されます。 必要であれば、`XML SET OPTIONS` コマンドを使用することで、v19 R2 以前の振る舞いに戻すことができます。 v19 R2 以前のバージョンから変換されたプロジェクトまたはデータベースにおいては、これらのオプションは 2つの互換性設定によって管理されます。
- ビルドされたプロジェクトで、ランタイムエクスプローラーへのショートカットが削除: シングルユーザー版の組み込みプロジェクトアプリケーションにおいて、**Cmd/Ctrl+Shift+F9** ショートカットは、ランタイムエクスプローラーを表示しないようになりました。 このショートカットは、ユーザーアプリケーション用のショートカットとして使用できるようになりました。 ランタイムエクスプローラーウィンドウは、新しい `OPEN RUNTIME EXPLORER` コマンドを使用することで呼び出し可能です。
- 4D Server のデバッグ機能の拡張: 4D Server はインタープリターモードにおいて、スケーラブルWeb セッションを含め、全種類のプロセスをデバッグできるようになりました。 これには、デバッガーをサーバーまたはリモートクライアントで有効化するだけです。     
  *警告: インタープリターモードにおいて、サーバーでデバッガーが有効化された場合 (デフォルト) には、サーバーマシン上でのデバッグを可能にするため、すべてのサーバープロセスが自動でコオペラティブ実行されます。 これは、4D Server v19 R3 以降に変換されたアプリケーションにおいては、パフォーマンスに重大な影響を生ずる可能性があります。 サーバーをプリエンプティブ実行に戻すには、サーバーのデバッガーを無効化します (そして必要な場合にはリモートクライアント側でデバッガーを有効化します)。 *
- Windows で、4D 19 R3 以降に作成された 4Dプロジェクトおよびデータベースは、フォームにおいて [DirectWrite API](https://learn.microsoft.com/ja-jp/windows/win32/DirectWrite/direct-write-portal) を使用します。 この API はテキストレンダリングを、特に高DPI 環境において改善させます。 スタティックテキスト、入力テキスト、チェックボックス、ボタン、ラジオボタンのテキストレンダリングに対して DirectWrite が使用されます。 リストボックスは、既に DirectWrite を使用しています。 以前の 4D のバージョンで作成されたプロジェクトやデータベースにおいても、互換性オプションを使用することで DirectWrite を有効化することができます。
- Silicon (Apple ARM CPU) をターゲットに 4D 19.0 でコンパイルされたコンポーネントを使用しており、そのコンポーネント内で `Count parameters` コマンドを呼んでいる場合、4D 19 R3 以降のリリースとの互換性のために、4D 19 R3 でコンポーネントを再コンパイルすることが推奨されます。 コンポーネントが Silicon 向けにコンパイルされていない場合、再コンパイルの必要はありません。








### 4D 19 R2

- 新規プロジェクト作成時に [デフォルトの.gitignoreファイル](../Preferences/general.md#gitignore-ファイルを作成する) が作成可能
- 新しい [`4D.Blob`](Concepts/dt_blob.md#blob-の種類) オブジェクトを扱うための新しい[BlobクラスAPI](../API/BlobClass.md)
- [`.setText()`](../API/FileClass.md#settext) におけるデフォルトの改行コード (EOL) の指定と `no-bom` のサポート


## 4D 19.x LTS


[**4D 19.x LTS のリリースノート**](../../version-19/Notes/updates.md) 参照。



## ライブラリの一覧 (4D 20 LTS)



| ライブラリ     | 現在のバージョン  | 更新された 4D バージョン | 説明                                                    |
| --------- | --------- | -------------- | ----------------------------------------------------- |
| ICU       | 73.2      | 20.1           | このアップグレードにより、英数字とテキスト、オブジェクトのインデックスが自動的に再構築されます。      |
| CEF       | 118       | 20.3           | Chromium 5993                                         |
| Hunspell  | 1.7.2     | 20             | 4D フォームと 4D Write Pro でスペルチェックに使用されます。                |
| PDFWriter | 4.3       | 20             | 12.2.1 で FreeType依存                                   |
| SpreadJS  | 16.2.6    | 20.2 HF1       | 4D View Pro エンジン                                      |
|           | 16.0.4    | 20             |                                                       |
| OpenSSL   | 3.1.6     | **20.4 HF2**   |                                                       |
| libZip    | 1.9.2     | 20             | Zip クラス、4D Write Pro、svg および serverNet コンポーネントによって使用。 |
| LZMA      | 5.4.1     | 20             |                                                       |
| Zlib      | 1.2.13    | 20             |                                                       |
| webKit    | WKWebView | 19             |                                                       |
| PHP       | 8.2.4     | 20             |                                                       |
| libldap   | 2.6.4     | 20             |                                                       |
| libsasl   | 2.1.28    | 20             |                                                       |
