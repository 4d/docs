---
id: WebServerClass
title: WebServer
---


`WebServer` クラス API を使って、メイン (ホスト) アプリケーションおよび、各コンポーネントの Webサーバーを開始・モニターすることができます ([Webサーバーオブジェクト](WebServer/webServerObject.md) 参照)。 このクラスは `4D` クラスストアより提供されます。



### Webサーバーオブジェクト

Webサーバーオブジェクトは [`WEB Server`](#web-server) コマンドによってインスタンス化されます。

これらは、次のプロパティや関数を持ちます:


### 概要
|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**.accessKeyDefined** : Boolean](#accesskeydefined)<p>&nbsp;&nbsp;&nbsp;&nbsp;Webサーバーの設定にアクセスキーが定義されていれば true|
| [**.certificateFolder** : Text](#certificatefolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;認証ファイルが保存されているフォルダー|
| [**.characterSet** : Number<br>**.characterSet** : Text](#characterset)<p>&nbsp;&nbsp;&nbsp;&nbsp;アプリケーションに接続してくるブラウザーとの通信に 4D Webサーバーが使用すべき文字セット|
| [**.cipherSuite** : Text](#ciphersuite)<p>&nbsp;&nbsp;&nbsp;&nbsp;保護されたプロトコルのために使用される暗号スイートリスト|
| [**.CORSEnabled** : Boolean](#corsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;Web サーバーの CORS (*Cross-origin resource sharing*、オリジン間リソース共有) サービス状態|
| [**.CORSSettings** : Collection](#corssettings)<p>&nbsp;&nbsp;&nbsp;&nbsp;CORSサービスに許可されたホストとメソッドの一覧 |
| [**.debugLog** : Number](#debuglog)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTPリクエストログファイルの状態|
| [**.defaultHomepage** : Text](#defaulthomepage)<p>&nbsp;&nbsp;&nbsp;&nbsp;デフォルトのホームページの名称|
| [**.HSTSEnabled** : Boolean](#hstsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTP Strict Transport Security (HSTS) 状態 |
| [**.HSTSMaxAge** : Number](#hstsmaxage)<p>&nbsp;&nbsp;&nbsp;&nbsp;新規クライアント接続ごとに HSTS がアクティブな最長時間 (秒単位)|
| [**.HTTPCompressionLevel** : Number](#httpcompressionlevel)<p>&nbsp;&nbsp;&nbsp;&nbsp;4D HTTPサーバーの HTTP圧縮通信 (クライアントリクエストまたはサーバーレスポンス) における圧縮レベル|
| [**.HTTPCompressionThreshold** : Number](#httpcompressionthreshold)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTP圧縮のしきい値 (バイト単位)。このサイズ未満のリクエストについては、通信が圧縮されません|
| [**.HTTPEnabled** : Boolean](#httpenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTPプロトコルの状態|
| [**.HTTPPort** : Number](#httpport)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTP のリッスンIPポート番号|
| [**.HTTPTrace** : Boolean](#httptrace)<p>&nbsp;&nbsp;&nbsp;&nbsp;`HTTP TRACE` の有効化状態|
| [**.HTTPSEnabled** : Boolean](#httpsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTPSプロトコル状態|
| [**.HTTPSPort** : Number](#httpsport)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTTPS のリッスンIPポート番号|
| [**.inactiveProcessTimeout** : Number](#inactiveprocesstimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;旧式セッションプロセスの非アクティブタイムアウト時間 (分単位)|
| [**.inactiveSessionTimeout** : Number](#inactivesessiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;旧式セッションの非アクティブタイムアウト時間 (分単位; cookie にて設定)|
| [**.IPAddressToListen** : Text](#ipaddresstolisten)<p>&nbsp;&nbsp;&nbsp;&nbsp;4D Webサーバーが HTTPリクエストを受信する IPアドレス|
| [**.isRunning** : Boolean](#isrunning)<p>&nbsp;&nbsp;&nbsp;&nbsp;Webサーバーの実行状態|
| [**.keepSession** : Boolean](#keepsession)<p>&nbsp;&nbsp;&nbsp;&nbsp;Webサーバーで旧式セッションが有効されている場合に true、それ以外は false|
| [**.logRecording** : Number](#logrecording)<p>&nbsp;&nbsp;&nbsp;&nbsp;リクエストログ (logweb.txt) の記録オプション値|
| [**.maxConcurrentProcesses** : Number](#maxconcurrentprocesses)<p>&nbsp;&nbsp;&nbsp;&nbsp;Webサーバーにてサポートする最大同時Webプロセス数|
| [**.maxRequestSize** : Number](#maxrequestsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;Webサーバーが処理してよい HTTPリクエスト (POST) の最大サイズ (バイト単位)|
| [**.maxSessions** : Number](#maxsessions)<p>&nbsp;&nbsp;&nbsp;&nbsp;旧式セッションにおける同時セッションの最大数|
| [**.minTLSVersion** : Number](#mintlsversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;接続に必要な最低TLSバージョン|
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;Webサーバーアプリケーションの名称|
| [**.openSSLVersion** : Text](#opensslversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;使用されている OpenSSLライブラリのバージョン|
| [**.perfectForwardSecrecy** : Boolean](#perfectforwardsecrecy)<p>&nbsp;&nbsp;&nbsp;&nbsp;サーバーの PFS利用可否状況|
| [**.rootFolder** : Text](#rootfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;Webサーバーのルートフォルダーのパス|
| [**.scalableSession** : Boolean](#scalablesession)<p>&nbsp;&nbsp;&nbsp;&nbsp;Webサーバーがスケーラブルセッションを使用している場合に true、それ以外は false|


[**.sessionCookieDomain** : Text](#sessioncookiedomain)<p>&nbsp;&nbsp;&nbsp;&nbsp;セッションcookie の "domain" フィールド| |[**.sessionCookieName** : Text](#sessioncookiename)<p>&nbsp;&nbsp;&nbsp;&nbsp;セッションID の保存に使用されるセッションcookie の名称| |[**.sessionCookiePath** : Text](#sessioncookiepath)<p>&nbsp;&nbsp;&nbsp;&nbsp;セッションcookie の "path" フィールド| |[**.sessionCookieSameSite** : Text](#sessioncookiesamesite)<p>&nbsp;&nbsp;&nbsp;&nbsp;| |[**.sessionIPAddressValidation** : Boolean](#sessionipaddressvalidation)<p>&nbsp;&nbsp;&nbsp;&nbsp;セッションcookie の IP アドレス検証| |[
**.start**() : Object<br>**.start**( *settings* : Object ) : Object](#start)<p>&nbsp;&nbsp;&nbsp;&nbsp;対象の Webサーバーを開始させます| |[**.stop()** ](#stop)<p>&nbsp;&nbsp;&nbsp;&nbsp;対象の Webサーバーを停止します|



## WEB Server

<details><summary>履歴</summary>
| バージョン  | 内容                           |
| ------ | ---------------------------- |
| v18 R3 | 追加                           |
| v19    | .sessionCookieSameSite をサポート |

</details>

**WEB Server** : 4D.WebServer<br>**WEB Server**( *option* : Integer ) : 4D.WebServer


| 引数    | タイプ          |    | 説明                                               |
| ----- | ------------ | -- | ------------------------------------------------ |
| オプション | Integer      | -> | 取得する Webサーバー (省略時のデフォルト = `Web server database`) |
| 戻り値   | 4D.WebServer | <- | WebServer オブジェクト                                 |


`WEB Server` コマンドは、 デフォルトの Webサーバーオブジェクト、または *option* 引数で指定された Webサーバーオブジェクトを返します。

*option*が省略された場合のデフォルトでは、このコマンドはデータベースの Webサーバー (デフォルトWebサーバー) への参照を返します。 取得する Webサーバーを指定するには、*option* に以下の定数のいずれか一つを渡してください:

| 定数                             | 値 | 説明                                 |
| ------------------------------ | - | ---------------------------------- |
| `Web server database`          | 1 | カレントデータベースの Webサーバー( 省略時のデフォルト)    |
| `Web server host database`     | 2 | コンポーネントのホストデータベースの Webサーバー         |
| `Web server receiving request` | 3 | リクエストを受け取った Webサーバー (ターゲットWebサーバー) |

返される Webサーバーオブジェクトには、Webサーバープロパティのカレント値が格納されています。

#### 例題

コンポーネント内から、ホストデータベースの Webサーバーが開始されているかどうかを確認します:

```4d
  // コンポーネントのメソッド
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

## WEB Server list

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |
</details>

**WEB Server list** : Collection


| 引数  | タイプ        |    | 説明                         |
| --- | ---------- | -- | -------------------------- |
| 戻り値 | Collection | <- | 利用可能な Webサーバーオブジェクトのコレクション |


`WEB Server list` コマンドは、 4Dアプリケーション内で利用可能な Webサーバーオブジェクトのコレクションを返します。

4Dアプリケーションは一つ以上の Webサーバーを持つことが可能です:

- ホストデータベースの Webサーバーを1つ (デフォルトWebサーバー)
- コンポーネント毎の Webサーバー各1つ

サーバーが実際に実行中か否かに関わらず、`WEB Server list` コマンドは利用可能な Webサーバーをすべて返します。

> デフォルトの Webサーバーオブジェクトは、4D 起動時に自動的にロードされます。 その一方で、コンポーネントの Webサーバーは、[`WEB Server`](#web-server) コマンドによってそれぞれインスタンス化しなくてはなりません。

Webサーバオブジェクトの [.name](#name) プロパティを使用することで、リスト内の各 Webサーバーオブジェクトが関連づけられているデータベースまたはコンポーネントを識別することができます。


#### 例題

利用可能な Webサーバーのうちいくつが実行中かを調べます:

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT("利用可能 Webサーバー "+String($wSList.length)+" つ中、"+String($vRun)+" つの Webサーバーが実行中です。")

```




## .accessKeyDefined


**.accessKeyDefined** : Boolean

**.accessKeyDefined** プロパティは、 Webサーバーの設定にアクセスキーが定義されていれば trueを格納します。 このプロパティは WebAdmin Webサーバーによって、管理インターフェースのセキュリティ設定を有効化するのに使用されます。



## .certificateFolder



**.certificateFolder** : Text

 認証ファイルが保存されているフォルダーのパス。 パスは、ファイルシステムを使用した POSIXフルパスの形式です。 [`.start()`](#start) 関数に渡す `settings` 引数内でこのプロパティを使用する場合、[`Folder` オブジェクト](FolderClass.md) も使用可能です。




## .characterSet


**.characterSet** : Number<br>**.characterSet** : Text

 アプリケーションに接続してくるブラウザーとの通信に 4D Webサーバーが使用すべき文字セット。 デフォルト値は OS の言語に依存します。 値には、MIBenum 整数や名称の文字列、[IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml) が定義する識別子を使用できます。 以下は、4D Webサーバーがサポートしている文字セットに対応する識別子のリストです:

*   4 = ISO-8859-1
*   12 = ISO-8859-9
*   13 = ISO-8859-10
*   17 = Shift-JIS
*   2024 = Windows-31J
*   2026 = Big5
*   38 = euc-kr
*   106 = UTF-8
*   2250 = Windows-1250
*   2251 = Windows-1251
*   2253 = Windows-1253
*   2255 = Windows-1255
*   2256 = Windows-1256




## .cipherSuite


**.cipherSuite** : Text

 保護されたプロトコルのために使用される暗号スイートリスト。 これは、4D Webサーバーが実装する暗号化アルゴリズムの優先順位を設定します。 コロン区切りの文字列として設定できます (例: "ECDHE-RSA-AES128-...")。 詳細は Open SSL サイトの [ciphers ページ](https://www.openssl.org/docs/manmaster/man1/ciphers.html) を参照ください。





## .CORSEnabled

**.CORSEnabled** : Boolean

 Web サーバーの CORS (*Cross-origin resource sharing*、オリジン間リソース共有) サービス状態。 セキュリティ上の理由により、"ドメイン間" のリクエストはブラウザーレベルでデフォルトで禁止されています。 有効化されている場合 (true)、ドメイン外 Webページからの XHRコール (RESTリクエストなど) をアプリケーションにおいて許可することができます (CORSドメインリストに許可されたアドレスのリストを定義する必要があります。後述の `CORSSettings` 参照)。 無効化されている場合 (false、デフォルト) には、CORS で送信されたサイト間リクエストはすべて無視されます。 有効時 (true) に、許可されていないドメインやメソッドがサイト間リクエストを送信した場合、"403 - forbidden" エラーレスポンスによって拒否されます。

デフォルト: false (無効)

CORS についての詳細は、Wikipedia の[Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) ページを参照ください。




## .CORSSettings


**.CORSSettings** : Collection

 CORSサービスに許可されたホストとメソッドの一覧 ([`CORSEnabled`](#corsenabled) プロパティ参照)。 各オブジェクトは必ず **host** プロパティを格納していなくてはなりません。**methods** プロパティは任意です。

*   **host** (テキスト、必須): CORS を介したサーバーへのデータリクエスト送信が許可されている外部ページのドメイン名または IPアドレス。 複数のドメインを追加してホワイトリストを作成することができます。 *host* が存在しない、または空の場合、当該オブジェクトは無視されます。 複数のシンタックスがサポートされています:
    -   192.168.5.17:8081
    -   192.168.5.17
    -   192.168.*
    -   192.168.*:8081
    -   http://192.168.5.17:8081
    -   http://*.myDomain.com
    -   http://myProject.myDomain.com
    -   *.myDomain.com
    -   myProject.myDomain.com
    -   \*

*   **methods** (テキスト、任意): 対応する CORSホストに対して許可する HTTPメソッド。 メソッド名はセミコロン区切りで指定します(例: "post;get")。 *methods* が空、null、あるいは undefined の場合、すべてのメソッドが許可されます。




## .debugLog


**.debugLog** : Number

 HTTPリクエストログファイルの状態 (アプリケーションの"Logs" フォルダーに格納されている HTTPDebugLog_nn.txt ファイル (nn はファイル番号))。

*   0 = 無効
*   1 = 有効、リクエスト本文なし (本文サイズあり)
*   3 = 有効、レスポンスの本文のみ
*   5 = 有効、リクエストの本文のみ
*   7 = 有効、リクエストおよびレスポンスの本文あり




## .defaultHomepage


**.defaultHomepage** : Text

 デフォルトのホームページの名称 または、カスタムのホームページを送信しない場合は ""。




## .HSTSEnabled

**.HSTSEnabled** : Boolean

 HTTP Strict Transport Security (HSTS) 状態。 HSTS によって、Webサーバーはブラウザーに対し、セキュアな HTTPS接続のみを許可すると宣言できます。 Webサーバーからの初回レスポンスを受け取った際にブラウザーは HSTS情報を記録し、以降の HTTPリクエストは自動的に HTTPSリクエストに変換されます。 ブラウザー側でこの情報が保存される時間は `HSTSMaxAge` プロパティによって指定されます。 HSTS のためには、サーバー上で HTTPS が有効になっていなくてはなりません。 また、初回のクライアント接続を許可するために、HTTP も有効でなくてはなりません。




## .HSTSMaxAge

**.HSTSMaxAge** : Number

 新規クライアント接続ごとに HSTS がアクティブな最長時間 (秒単位)。 この情報はクライアント側で指定された時間のあいだ保存されます。

デフォルト値: 63072000 (2年)。




## .HTTPCompressionLevel

**.HTTPCompressionLevel** : Number

 4D HTTPサーバーの HTTP圧縮通信 (クライアントリクエストまたはサーバーレスポンス) における圧縮レベル。 このセレクターを使って、実行速度を優先するか (圧縮少)、それとも圧縮レベルを優先するか (速度減) を指定し、通信を最適化することができます。

とりうる値:

*   1 から 9 (1 が低圧縮、9 が高圧縮)。
*   -1 = 圧縮速度と圧縮率の妥協点を設定する

デフォルト = 1 (低圧縮)。




## .HTTPCompressionThreshold

**.HTTPCompressionThreshold** : Number

 HTTP圧縮のしきい値 (バイト単位)。このサイズ未満のリクエストについては、通信が圧縮されません。 この設定は、通信サイズが小さい場合、圧縮に処理時間が費やされるのを避けるのに有用です。

デフォルトのしきい値 = 1024 バイト




## .HTTPEnabled


**.HTTPEnabled** : Boolean

 HTTPプロトコルの状態。





## .HTTPPort


**.HTTPPort** : Number

 HTTP のリッスンIPポート番号。

デフォルト = 80




## .HTTPTrace

**.HTTPTrace** : Boolean

 `HTTP TRACE` の有効化状態。 セキュリティ上の理由により、Webサーバーはデフォルトで `HTTP TRACE` リクエストをエラー405 で拒否します。 有効化されている場合、`HTTP TRACE` リクエストに対して Webサーバーは、リクエスト行、ヘッダー、および本文を返します。




## .HTTPSEnabled


**.HTTPSEnabled** : Boolean
 HTTPSプロトコル状態。




## .HTTPSPort


**.HTTPSPort** : Number
 HTTPS のリッスンIPポート番号。

デフォルト = 443




## .inactiveProcessTimeout

**.inactiveProcessTimeout** : Number
> [スケーラブルセッションモード](#scalablesession) の場合には、このプロパティは返されません。 旧式セッションプロセスの非アクティブタイムアウト時間 (分単位)。 タイムアウト時間が経過すると、サーバーはプロセスを終了します。すると、`On Web Legacy Close Session` データベースメソッドが呼び出され、旧式セッションのコンテキストは削除されます。

デフォルト = 480 分




## .inactiveSessionTimeout

**.inactiveSessionTimeout** : Number
> [スケーラブルセッションモード](#scalablesession) の場合には、このプロパティは返されません。 旧式セッションの非アクティブタイムアウト時間 (分単位; cookie にて設定)。 タイムアウト時間が経過するとセッションcookie が無効になり、HTTPクライアントによって送信されなくなります。

デフォルト = 480 分




## .IPAddressToListen


**.IPAddressToListen** : Text

 4D Webサーバーが HTTPリクエストを受信する IPアドレス。 デフォルトでは、特定のアドレスは定義されていません。 IPv6 および IPv4 文字列形式の両方がサポートされています。





## .isRunning


**.isRunning** : Boolean

*読み取り専用プロパティ。* Webサーバーの実行状態。




## .keepSession

**.keepSession** : Boolean

Webサーバーで旧式セッションが有効されている場合に true、それ以外は false。

##### 参照:
[.scalableSession](#scalablesession)




## .logRecording


**.logRecording** : Number

 リクエストログ (logweb.txt) の記録オプション値。

*   0 = 記録しない (デフォルト)
*   1 = CLF形式で記録する
*   2 = DLF形式で記録する
*   3 = ELF形式で記録する
*   4 = WLF形式で記録する




## .maxConcurrentProcesses


**.maxConcurrentProcesses** : Number

 Webサーバーにてサポートする最大同時Webプロセス数。 この数値 (マイナス1) に達すると、4D はプロセスを作成しなくなり、新規リクエストに対して HTTPステータス 503 - Service Unavailable を返します。

とりうる値: 10 - 32000

デフォルト = 100




## .maxRequestSize


**.maxRequestSize** : Number

 Webサーバーが処理してよい HTTPリクエスト (POST) の最大サイズ (バイト単位)。 最大値 (2147483647) に設定した場合、実際には制限無しということになります。 制限を設けることで、サイズが非常に大きいリクエストによって Webサーバーが過負荷状態に陥ることを防ぎます。 リクエストのサイズが制限に達していると、Webサーバーによって拒否されます。

とりうる値: 500000 - 2147483647




## .maxSessions

**.maxSessions** : Number
> [スケーラブルセッションモード](#scalablesession) の場合には、このプロパティは返されません。 旧式セッションにおける同時セッションの最大数。 制限に達すると、Webサーバーが新規セッションを作成するときに、一番古い旧式セッションが閉じられます (`On Web Legacy Close Session` データベースメソッドが呼び出されます)。 旧式セッションの同時セッション数は、Webプロセスの合計値を超えることはできません (`maxConcurrentProcesses` プロパティ、デフォルト値は 100)。




## .minTLSVersion

**.minTLSVersion** : Number

 接続に必要な最低TLSバージョン。 これよりも低いバージョンのみをサポートするクライアントからの接続は拒否されます。

とりうる値:

*   1 = TLSv1_0
*   2 = TLSv1_1
*   3 = TLSv1_2 (デフォルト)
*   4 = TLSv1_3

変更した場合、設定を反映するには Webサーバーを再起動する必要があります。




## .name


**.name** : Text

*読み取り専用プロパティ。* Webサーバーアプリケーションの名称。





## .openSSLVersion

**.openSSLVersion** : Text

*読み取り専用プロパティ。* 使用されている OpenSSLライブラリのバージョン。




## .perfectForwardSecrecy


**.perfectForwardSecrecy** : Boolean

*読み取り専用プロパティ。* サーバーの PFS利用可否状況。



## .rootFolder


**.rootFolder** : Text

 Webサーバーのルートフォルダーのパス。 パスは、ファイルシステムを使用した POSIXフルパスの形式です。 `settings` 引数内でこのプロパティを使用する場合、</code>Folder</code> オブジェクトも使用可能です。


## .scalableSession


**.scalableSession** : Boolean

Webサーバーがスケーラブルセッションを使用している場合に true、それ以外は false。

##### 参照:
[.keepSession](#keepsession)


## .sessionCookieDomain


**.sessionCookieDomain** : Text

 セッションcookie の "domain" フィールド。 セッションcookie のスコープを制御するのに使用されます。 たとえば、このセレクターに "/*.4d.fr" の値を設定した場合、リクエストの宛先が ".4d.fr" のドメインに限り、クライアントは cookie を送信します。つまり、外部の静的データをホストするサーバーは除外されます。




## .sessionCookieName


**.sessionCookieName** : Text

 セッションID の保存に使用されるセッションcookie の名称。

*読み取り専用プロパティ。*




## .sessionCookiePath


**.sessionCookiePath** : Text

 セッションcookie の "path" フィールド。 セッションcookie のスコープを制御するのに使用されます。 たとえば、このセレクターに "/4DACTION" という値を設定した場合、4DACTION で始まる動的リクエストの場合にのみクライアントは cookie を送信し、ピクチャーや静的ページへのリクエストは除外されます。



## .sessionCookieSameSite

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v19   | 追加 |
</details>

**.sessionCookieSameSite** : Text

セッションcookie の "SameSite" 属性の値。 とりうる値 (定数使用):

| 定数                  | 値        | 説明                                                              |
| ------------------- | -------- | --------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | *デフォルト値* - ファーストパーティーのコンテキストでのみ cookie が送信されます。                 |
| Web SameSite Lax    | "Lax"    | サイト間のサブリクエストにおいても cookie が送信されますが、ユーザーがリンクを辿って大元のサイトに戻る場合に限ります。 |
| Web SameSite None   | "None"   | ファーストパーティーやオリジン間リクエストにかかわらず、すべてのコンテキストにおいて cookie が送信されます。      |

詳細については [Session Cookie SameSite](WebServer/webServerConfig.md#セッションcookie-samesite) を参照ください。




## .sessionIPAddressValidation


**.sessionIPAddressValidation** : Boolean

 セッションcookie の IP アドレス検証。 セキュリティ上の理由により、セッションcookie を持つ各リクエストに対して Webサーバーはデフォルトで IPアドレスを検証します。このアドレスが、cookie作成時の IPアドレスと合致しない場合、リクエストは拒否されます。 アプリケーションによっては、この検証機能を無効化し、IPアドレスが合致しなくてもセッションcookie を受け入れるようにしたいかもしれません。 たとえば、モバイルデバイスが WiFi と 3G/4G ネットワークを切り替えた場合、IPアドレスが変更されます。 このように IPアドレスが変更しても、クライアントによる Webセッションの継続を許可できます (アプリケーションのセキュリティレベルは下がります)。




## .start()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |
</details>


**.start**() : Object<br>**.start**( *settings* : Object ) : Object



| 引数       | タイプ    |    | 説明              |
| -------- | ------ | -- | --------------- |
| settings | Object | -> | 開始時の Webサーバー設定  |
| 戻り値      | Object | <- | Webサーバー開始のステータス |


`.start()` 関数は、任意の *settings* オブジェクト引数に設定したプロパティを使用して、 対象の Webサーバーを開始させます。

プロジェクトの設定ファイルに定義されているデフォルトの設定、または `WEB SET OPTION` コマンドで定義された設定 (ホストデータベースのみ) を使用して、Webサーバーは開始されます。 しかし、*settings* 引数を渡せば、Webサーバーセッションにおいてカスタマイズされた設定を定義することができます。

[Web Server オブジェクト](#webサーバーオブジェクト) の設定は、読み取り専用プロパティ ([.isRunning](#isrunning)、[.name](#name)、[.openSSLVersion](#opensslversion)、[.perfectForwardSecrecy](#perfectforwardsecrecy)、[.sessionCookieName(#sessioncookiename)]) を除いて、すべてカスタマイズ可能です。

カスタマイズされた設定は [`.stop()`](#stop) が呼び出されたときにリセットされます。


#### 返されるオブジェクト

関数は Webサーバーの開始ステータスを表すオブジェクトを返します。 このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ   |                         | タイプ        | 説明                                    |
| ------- | ----------------------- | ---------- | ------------------------------------- |
| success |                         | Boolean    | Webサーバーが正常に開始された場合には true、それ以外は false |
| errors  |                         | Collection | エラースタック (Webサーバーが正常に開始された場合には返されません)  |
|         | \[].errCode            | Number     | 4Dエラーコード                              |
|         | \[].message            | Text       | 4Dエラーの詳細                              |
|         | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                   |
> Webサーバーが既に起動していた場合、エラーが返されます。

#### 例題

```4d
 var $settings;$result : Object
 var $webServer : 4D.WebServer

 $settings:=New object("HTTPPort";8080;"defaultHomepage";"myAdminHomepage.html")

 $webServer:=WEB Server
 $result:=$webServer.start($settings)
 If($result.success)
  //...
 End if
```




## .stop()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |
</details>

**.stop()** 

| 引数 | タイプ |  | 説明                |
| -- | --- |  | ----------------- |
|    |     |  | このコマンドは引数を必要としません |

 
`.stop()` 関数は、 対象の Webサーバーを停止します。

Webサーバーが開始されている場合は、処理中のリクエストが完了次第、すべての Web接続と Webプロセスが閉じられます。 Webサーバーが開始されていなかった場合、関数はなにもしません。
> この関数は、[`.start()`](#start) 関数の *settings* 引数を使用してセッションに対して定義したカスタマイズされた Web設定があった場合、それらをリセットします。


#### 例題

データベースWebサーバーを停止します:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```





<style> h2 { background: #d9ebff;}</style>
