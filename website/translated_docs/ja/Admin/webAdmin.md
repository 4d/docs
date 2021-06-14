---
id: webAdmin
title: Web 管理
---


`WebAdmin` とは、4D および 4D Server に使用される組み込みの Webサーバーコンポーネントの名称で、[データエクスプローラー](dataExplorer.md) などの管理機能への安全な Webアクセスを提供します。 ブラウザーや、任意の Webアプリケーションから、ローカルまたはリモートでこの Webサーバーに接続し、関連の 4Dアプリケーションにアクセスすることができます。

WebAdmin 内部コンポーネントは、"WebAdmin" 権限を持つユーザーの認証を処理し、管理セッションを開いて専用インターフェースにアクセスできるようにします。

この機能は、ヘッドレスで動作する 4Dアプリケーションでも、インターフェースを持つ 4Dアプリケーションでも使用できます。


## WebAdmin Webサーバーの起動

デフォルトでは、`WebAdmin` Webサーバーは開始しません。 起動時に開始するように設定するか、(インターフェース付きの場合は) メニューから手動で開始する必要があります。


### 自動スタートアップ

`WebAdmin` Webサーバーは、4D または 4D Server アプリケーションの起動時 (プロジェクトの読み込み前) に開始するように設定できます。

- インターフェースを持つ 4Dアプリケーションを使用している場合は、**ファイル ＞ Web管理 ＞ 設定...** メニュー項目を選択します。

![alt-text](assets/en/Admin/waMenu1.png)

Web管理設定ダイアログボックスで、**Webサーバー管理自動スタートアップ** オプションをチェックします。

![alt-text](assets/en/Admin/waSettings.png)

- ヘッドレスの 4Dアプリケーションを使用しているかにかかわらず、以下の *コマンドライン・インターフェース* の引数を使用して、自動スタートアップを有効にすることができます:


```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> `WebAdmin` Webサーバーが使用する TCPポート (設定により、[HTTPS](#https-port) または [HTTP](#http-port)) が開始時に空いていない場合、4D は次の 20個のポートを順に試し、利用できる最初のポートを使用します。 利用可能なポートがない場合、Webサーバーは開始せず、エラーが表示されるか、(ヘッドレスアプリケーションの場合は) コンソールのログに記録されます。


### 開始と停止

インターフェースを持つ 4Dアプリケーションを使用している場合、プロジェクトの `WebAdmin` Webサーバーはいつでも開始または停止することができます:

**ファイル ＞ Web管理 ＞ Webサーバー開始** メニュー項目を選択します。

![alt-text](assets/en/Admin/waMenu2.png)

サーバーが開始されていると、メニュー項目は **Webサーバー停止** になります。`WebAdmin` Webサーバーを停止するには、これを選択します。



## WebAdmin 設定

[**アクセスキー**](#access-key) を定義するには、`WebAdmin` コンポーネントの設定は必須です。 デフォルトで、アクセスキーが設定されていない場合は、URL経由のアクセスは許可されません。

`WebAdmin` コンポーネントの設定は、[Web管理設定ダイアログボックス](#settings-dialog-box) (後述参照) でおこないます。

> ヘッドレス4Dアプリケーションを使用している場合は、[*コマンドライン・インターフェース* の引数](#webadmin-headless-configuration) を使用して基本的な設定を定義できます。 高度なパラメーターを定義するには、設定ファイルをカスタマイズする必要があります。


### 設定ダイアログボックス

Web管理の設定ダイアログボックスを開くには、**ファイル ＞ Web 管理 ＞ 設定...** メニュー項目を選択します。

![alt-text](assets/en/Admin/waMenu1.png)

次のようなダイアログボックスが表示されます:

![alt-text](assets/en/Admin/waSettings2.png)

#### Webサーバー管理自動スタートアップ

4D または 4D Server アプリケーションの起動時に `WebAdmin` Webサーバーを自動的に開始させるには、このオプションをチェックします ([前述参照](#自動スタートアップ)）。 デフォルトでは、このオプションはチェックされていません。

#### ローカルホストでHTTP接続を受け入れる

このオプションを有効にすると、4Dアプリケーションと同じマシン上で HTTP を介して `WebAdmin` Webサーバーに接続できます。 デフォルトでは、このオプションはチェックされています。

**注:**
- ローカルホスト以外による HTTP接続は受け付けません。
- Even if this option is checked, when [Accept HTTPS](#accept-https) is checked and the TLS configuration is valid, localhost connections use HTTPS.


#### HTTP Port

Port number to use for connections through HTTP to the `WebAdmin` web server when the **Accept HTTP connections on localhost** option is checked. Default value is 7080.


#### Accept HTTPS

When this option is checked, you will be able to connect to the `WebAdmin` web server through HTTPS. デフォルトでは、このオプションはチェックされています。

#### HTTPS Port

Port number to use for connections through HTTPS to the `WebAdmin` web server when the **Accept HTTPS** option is checked. Default value is 7443.


#### Certificate folder path

Path of the folder where the TLS certificate files are located. By default, the certificate folder path is empty and 4D or 4D Server uses the certificate files embedded in the 4D application (custom certificates must be stored next to the project folder).

#### Debug log mode

Status or format of the HTTP request log file (HTTPDebugLog_*nn*.txt, stored in the "Logs" folder of the application -- *nn* is the file number). 次のオプションから選択することができます:

- **Disable** (default)
- **With all body parts** - enabled with body parts in response and request
- **Without body parts** - enabled without body parts (body size is provided)
- **With request body** - enabled with body part in request only
- **With response body** - enabled with body part in response only

#### Access Key

Defining an access key is mandatory to unlock access to the `WebAdmin` web server through an URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through an URL to a web administration interface like the [Data Explorer page](dataExplorer.md). An error page is returned in case of connection request:

![alt-text](assets/en/Admin/accessKey.png)

An access key is similar to a password but not associated to a login.

- To define a new access key: click the **Define** button, enter the access key string in the dialog box and click **OK**. The button label becomes **Modify**.
- To modify the access key: click the **Modify** button, enter the new access key string in the dialog box and click **OK**.
- To delete the access key: click the **Modify** button, let the access key area empty and click **OK**.


## WebAdmin Headless Configuration

All [WebAdmin settings](#webadmin-settings) are stored in the `WebAdmin.4DSettings` file. There is one default `WebAdmin.4DSettings` file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine.

When running a 4D or 4D Server application headless, you can set and use the default `WebAdmin.4DSettings` file, or designate a custom `.4DSettings` file.

To set the file contents, you can use the [WebAdmin settings dialog](#settings-dialog-box) of the 4D application with interface and run it headless afterwards. The default `WebAdmin.4DSettings` file is then used.

Or, you can set a custom `.4DSettings` file (xml format) and use it instead of the default file. Several dedicated arguments are available in the [Command line interface](cli.md) to support this feature.

> The access key is not stored in clear in the `.4DSettings` file.

例:

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key 
    "my Fabulous AccessKey" --webadmin-auto-start true   
    --webadmin-store-settings

```


## Authentication and Session

- When a web management page is accessed by entering an URL and without prior identification, an authentication is required. The user must enter the [access key](#access-key) in an authentication dialog box. If the access key was not defined in the `WebAdmin` settings, no access via URL is possible.

- When a web management page is accessed directly from a 4D or 4D Server menu item (such as **Records > Data Explorer** or **Window > Data Explorer** (4D Server)), access is granted without authentication, the user is automatically authenticated.

Once the access is granted, a web [session](WebServer/sessions.md) with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the `WebAdmin` component delivers requested pages.


