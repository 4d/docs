---
id: get-4d-folder
title: Get 4D folder
slug: /commands/get-4d-folder
displayed_sidebar: docs
---

<!--REF #_command_.Get 4D folder.Syntax-->**Get 4D folder** {( *folder* {; *options*} {; *})} : Text<!-- END REF-->
<!--REF #_command_.Get 4D folder.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| folder | Integer | &#8594;  | フォルダータイプ (省略時 = Active 4D folder) |
| options | Object | &#8594;  | 4D Client database folder path configuration |
| * | 演算子 | &#8594;  | ホストデータベースのフォルダーを返す |
| 戻り値 | Text | &#8592; | 指定したフォルダーのパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get 4D folder.Summary-->**Get 4D folder**コマンドは、カレントアプリケーションのアクティブな4Dフォルダー、または*folder* 引数と*options* 引数で指定された4D環境フォルダーへのパス名を返します。<!-- END REF-->このコマンドを使用して、4Dアプリケーションで使用されるフォルダーの実際のパス名を取得できます。このコマンドを使用すれば、記述したコードがローカライズされたどのシステムのプラットフォームでも動作することが保障されます。

*folder* には*4D Environment*テーマの次のいずれかの定数を渡します(それぞれのフォルダの詳細な情報はこのページの下部にあります):

| 定数                          | 型    | 値  |
| --------------------------- | ---- | -- |
| 4D Client database folder   | 倍長整数 | 3  |
| Active 4D Folder            | 倍長整数 | 0  |
| Current resources folder    | 倍長整数 | 6  |
| Data folder                 | 倍長整数 | 9  |
| Database folder             | 倍長整数 | 4  |
| Database folder Unix syntax | 倍長整数 | 5  |
| HTML Root folder            | 倍長整数 | 8  |
| Licenses folder             | 倍長整数 | 1  |
| Logs folder                 | 倍長整数 | 7  |
| MobileApps folder           | 倍長整数 | 10 |

*options* 引数を使用すると、ローカルのリソースフォルダーパスをカスタマイズすることができます。これは4D Client database folder 定数を使用する場合にのみ考慮されます(以下参照)。

**注意:** **Get 4D folder** コマンドがリモート4D から呼び出された場合、返されるパスはリモートマシンのパスであり、4D Server のパスではありません。

##### Active 4D Folder 

4D環境は、以下の情報を保存するために特定のフォルダーを使用します:

* 4D環境アプリケーションが使用する環境設定ファイル
* Shortcuts.xml ファイル (カスタマイズされたキーボードショートカット)
* Macros v2 フォルダー (メソッドエディターで使用するマクロコマンド)
* Favorites v1xフォルダー、例えば Favorites v13フォルダーなど(開いたローカルおよびリモートデータベースのパス名)
* Logs フォルダー、データが読み込みのみモードの場合のメンテナンスログ置き場

アクティブな4Dフォルダーは、デフォルトでは以下の場所に作成されます:

* Windows: *{Disk}:\\Users\\* *<userName>\\AppData\\Roaming\\<applicationName>*
* macOS: *{Disk}:Users:* *<userName>:Library:Application Support:<applicationName>*

##### Licenses Folder 

マシンのライセンスファイルを含むフォルダーです。

**注意:** 4D Volume Desktopとマージされたアプリケーションの場合、Licensesフォルダーはアプリケーションのパッケージに含まれます。

##### Data Folder 

カレントのデータファイルを含んでいるフォルダへのパスです。パス名はカレントのプラットフォームでの標準のシンタックスを使用して表現されます。

##### 4D Client Database Folder(クライアントマシン) 

データベースに関連したファイルやフォルダ(リソース、プラグイン、Resources フォルダ等)を保存するために4D リモートのマシンに自動的に作成された4D フォルダのパスです。コマンドは以下のどちらかを返します:

* リモートマシン上で呼び出され、*options* 引数が省略された場合には、カレントアプリケーションにおけるパスを返します。
* *options* 引数が使用された場合には任意のアプリケーションのパスを返します(この場合、**Get 4D folder** はどのマシンからも呼び出されてもかまいません)。

デフォルトでは、パスは以下のような形になります:

* Windows 上: {**Disk}:\\Users\\{UserAccount}\\AppData\\Local\\{ApplicationName}\\{StructureName\_IP\_Port\_key}*例: C:\\Users\\John Doe\\AppData\\Local\\myApp\\myApp\_192\_168\_2\_134\_19813\_157
* macOS 上: *{Disk}:Users:{UserAccount}:Library:Caches:{ApplicationName} Client:{StructureName\_IP\_Port\_key}.*  
例: :Users:John Doe:Library:Caches:myApp Client:myApp\_192\_168\_2\_134\_19813\_933

同じマシン上でクライアントアプリケーションのインスタンスが同時に複数起動していた場合には、異なるフォルダが使用されます。

**注意:** Windows上の組み込みクライアントアプリでは、*ShareLocalResourcesOnWindowsClient* BuildApp キーが使用されていた場合にはこのフォルダの位置は変更されています。

**4D Client Database Folder と*options* 引数を使用する**

任意の4D データベースローカルフォルダパスを計算したい場合には、*options* 引数を使用することができます。この場合には、この返されるパスはオブジェクトで提供した情報に基づいてビルドされ、またコマンドは4D、4D Server、あるいはリモートアプリケーションのいずれからも使用することができます。この機能によって、リソースフォルダのパスを事前に計算することができ、それによって例えばコンテンツを事前にロードしておくことなどができます。

*options* オブジェクトには、以下のプロパティを渡すことができます:

| **プロパティ**                          | **型** | **詳細**                                                                                            |
| ---------------------------------- | ----- | ------------------------------------------------------------------------------------------------- |
| remoteAppPath                      | テキスト  | 任意 - リモートアプリケーションの実行ファイルのシステムパス。デフォルトはカレントアプリケーションの実行ファイルのパス                                      |
| buildApplicationName               | テキスト  | 任意 - アプリケーションの名前(*BuildApplicationName* BuildApp xml キー値と同じ)。デフォルトはカレントアプリケーション名                  |
| structureName                      | テキスト  | *clientServerSystemFolderName* 属性が定義されている場合を除き必須 - ストラクチャー名                                       |
| ipAddress                          | テキスト  | *clientServerSystemFolderName* 属性が定義されている場合を除き必須 - サーバーのIP アドレス(*IPAddress* BuildApp xml キー値と同じ)  |
| portNumber                         | 数値    | *clientServerSystemFolderName* 属性が定義されている場合を除き必須 - サーバーの公開ポート番号(*PortNumber* BuildApp xml キー値と同じ) |
| clientServerSystemFolderName       | テキスト  | 任意 - ローカルリソース最終フォルダのカスタム名(*ClientServerSystemFolderName* BuildApp xml キー値と同じ)                     |
| shareLocalResourcesOnWindowsClient | ブール   | 任意 - 共有ローカルリソースフォルダ(*ShareLocalResourcesOnWindowsClient* BuildApp xml キー値と同じ)                     |

**注意:** 返されるパスは、コマンドを実行しているマシンのシステムシンタックスを使用して表現されます。

##### Database Folder 

データベースストラクチャファイルを含むフォルダーです。 パス名は、現在のプラットホームの標準のシンタックスを使用して表現されます。  
4Dクライアントアプリケーションの場合、この定数は前述の4D Client Database Folder定数とまったく同じです。 コマンドはローカルに作成されたフォルダーのパス名を返します。

##### Database Folder Unix Syntax 

データベースストラクチャファイルを含むフォルダーです。 この定数は前述のフォルダーと同じものですが、パス名は/Users/...のようなUNIXシンタックス (POSIX) で表現されます。このシンタックスは主に、Mac OSで [LAUNCH EXTERNAL PROCESS](launch-external-process.md) コマンドを使用する場合に使用されます。

##### Current Resources folder 

データベースのリソースフォルダー。このフォルダーにはデータベースのインタフェースで使用される、ピクチャーやテキストなどの追加の項目が置かれます。コンポーネントはそれぞれ独自のResourcesフォルダーを持つことができます。

クライアント/サーバーモードでは、サーバーマシンとクライアントマシン間でピクチャーやファイル、サブフォルダーなどのカスタムデータを交換するために使用できます。このフォルダーのコンテンツはクライアントマシンが接続するたびに自動で更新されます。Resourcesフォルダーに関連付けられたすべての参照メカニズムは、クライアント/サーバーモードでもサポートされます (.lproj フォルダー、XLIFF、ピクチャーなど)。さらに4Dではリソースエクスプローラーなどさまざまなツールを通じ、このフォルダの管理と更新を動的に行えるようになっています。

**注意:** 

* データベースに対してフォルダが存在しない場合、Current resources folder 定数とGet 4D folder コマンドを使用することでこのフォルダが作成されます。
* Windows 上では、組み込みクライアントプロジェクトにおいてはこのフォルダの位置は、*ShareLocalResourcesOnWindowsClient* BuildApp キーを使用していた場合、変更されます。

##### Logs folder 

データベースのLogsフォルダーで、データファイルと同じ階層にあります。カレントデータベースの次のログがこのフォルダーに格納されます:

* データベース変換
* Webサーバリクエスト
* バックアップ/復元処理のジャーナル
* コマンドデバッグ
* 4D Serverリクエスト (クライアントマシンとサーバー上で生成)

**注:**

* system user preferences フォルダー (Active 4D Folder) にも追加の Logs フォルダーがあり、圧縮・検証・修復などのメンテナンスログファイルを保存します。これらのログファイルにアクセスするには、コマンド [Get 4D file](get-4d-file.md)(Compacting log file) を使うことが推奨されます。通常の Logs フォルダーに書き込みできない場合にも、このLogs フォルダーが使用されます。
* データベースにLogsフォルダーが存在しない場合、**Get 4D folder**コマンドにLogs folder定数を渡して実行すると、フォルダーが適切な場所に作成されます。

##### HTML Root Folder 

データベースのカレントの HTML ルートフォルダ。返されるパス名は、プラットフォームの標準シンタックスで表現されます。HTMLルートフォルダーは、リクエストされたページやファイルを4D Webサーバが探すフォルダーです。デフォルトで、このフォルダーの名前は**WebFolder**で、ストラクチャーファイルと同階層 (またはリモートモードの4Dの場合、そのローカルコピー) に置かれます。この場所はデータベース設定のWeb/設定ページ、または[WEB SET ROOT FOLDER](web-set-root-folder.md) コマンドで動的に変更できます。

**注:** Windows上では、組み込みクライアントプロジェクトにおいてはこのフォルダの位置は、*ShareLocalResourcesOnWindowsClient* BuildApp キーを使用していた場合、変更されます。

##### MobileApps Folder 

モバイルアプリユーザーセッション(4D for iOS アプリまたは4D for Android のためのセッション)を参照するために4D アプリケーションによって使用される、全ての既存のセッションファイル(.json ファイル)を格納しているフォルダ。セッションファイルはアプリケーションサブフォルダごとにグループ分けされており、自動的に作成されます。詳細な情報については、 [go mobile ドキュメンテーション](https://developer.4d.com/go-mobile/) のドキュメントを参照してください。

フォルダはカレントの4D データファイルと同じ階層に位置しています。

##### 

任意の *\** 引数は、コンポーネントを使用しているアーキテクチャーの場合には有用です。これを使用することで、フォルダのパス名を取得したいデータベースがどちらか(ホストまたはコンポーネント)を指定することができます。この引数はDatabase folder、Database folder UNIX syntax および Current resources folder フォルダに対してのみ有効です。それ以外の場合には全て無視されます。

コマンドがコンポーネントから呼ばれた場合:

* *\** 引数が渡されていた場合、コマンドはホストデータベースのフォルダへのパス名を返します。
* *\** 引数が渡されていなかった場合、コマンドはコンポーネントのフォルダへのパス名を返します。  
返されるデータベースフォルダ(Database folder および Database folder UNIX syntax) は、コンポーネントのアーキテクチャーの種類によって変わります:  
   * .4dbase フォルダ/パッケージの場合には、コマンドは.4dbase フォルダ/パッケージへのパス名を返します。  
   * .4db または .4dc ファイルの場合には、コマンドは"Components" フォルダへのパス名を返します。  
   * エイリアスまたはショートカットの場合には、オリジナルのマトリックスデータベースを格納しているフォルダへのパス名を返します。返される結果は上記に説明されているように、このデータベースのフォーマット(.4dbase フォルダ/パーッケーじまたは .4db/.4dc ファイル)によって変わります。  
 コマンドがホストデータベースから呼び出されている場合、 *\** 引数の有無に関わらず、常にホストデータベースのパス名を返します。

#### 例題 1 

シングルユーザの4Dで、起動時に、4Dフォルダにある設定ファイルを読み込み (または作成) したいとします。これを行うために、[On Startupデータベースメソッド](on-startup-database-method.md), に以下のように記述できます:

```4d
 $vsPrefDocName:=Get 4D folder+"MyPrefs.prf" //Build pathname to the Preferences file
  // ファイルが存在するかチェック
 If(Test path name($vsPrefDocName)#Is a document)
    $vtPrefDocRef:=Create document($vsPrefDocName.prf) // 存在しなければ作成
 Else
    $vtPrefDocRef:=Open document($vsPrefDocName.prf) // 存在すれば開く
 End if
 If(OK=1)
  // ドキュメントのコンテンツを処理
    CLOSE DOCUMENT($vtPrefDocRef)
 Else
  // エラー処理
 End if
```

#### 例題 2 

以下の例は、Mac OS上でDatabase Folder Unix Syntax定数を使用し、データベースフォルダの内容を取り出します: 

```4d
 $posixpath:="\""+Get 4D folder(Database folder Unix syntax)+"\""
 $myfolder:="ls -l "+$posixpath
 $in:=""
 $out:=""
 $err:=""
 LAUNCH EXTERNAL PROCESS($myfolder;$in;$out;$err)
```

**Note:** Mac OSでは、スペースがファイルやフォルダ名に含まれる場合、パス名をクォートで括らなければなりません。文字列にクォートを挿入するために、エスケープ文字"\\"を使用できます。あるいはChar(Double quote)を使用することもできます。

#### システム変数およびセット 

*folder* 引数が無効または返されたパス名が空の場合、OKシステム変数は0に設定されます。

#### 参照 

[COMPONENT LIST](component-list.md)  
[System folder](system-folder.md)  
[Temporary folder](temporary-folder.md)  
[Test path name](test-path-name.md)  
[WEB SET ROOT FOLDER](web-set-root-folder.md)  