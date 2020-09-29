---
id: building
title: プロジェクトパッケージのビルド
---

4D Developer にはプロジェクトパッケージ (ファイナルビルド) を作成するためのアプリケーションビルダーが統合されています。 このビルダーを使用すれば、コンパイルされた 4D アプリケーションの展開を簡易化することができます。 OS ごとに異なる特定の処理を自動で処理し、クライアント/サーバーアプリケーションの展開が容易になります。

アプリケーションビルダーでは以下のことを行えます:

*   インタープリターコードを含まないコンパイル済みストラクチャーのビルド
*   ダブルクリックで起動可能なスタンドアロンアプリケーションのビルド (4D のデータベースエンジンである 4D Volume Desktop を組み込んだ 4D アプリケーション)
*   XML形式のプロジェクトファイル定義を用いて、同じコンパイル済みストラクチャーから異なるアプリケーションのビルド
*   クライアント/サーバーアプリケーションのビルド
*   クライアントとサーバーの自動更新機能を備えたクライアント/サーバーアプリケーションのビルド
*   ビルド設定の保存 (*設定保存* ボタン)



## アプリケーションのビルド

プロジェクトパッケージをビルドするには次の方法があります:

- [BUILD APPLICATION](https://doc.4d.com/4Dv18R4/4D/18-R4/BUILD-APPLICATION.301-4982852.ja.html) コマンドを使う
- [アプリケーションビルド](#application-builder)ウィンドウを使う

このウィンドウを開くには 4D の**デザイン**メニューから**アプリケーションビルド...**を選択します。

![](assets/en/Project/buildappProj.png)

アプリケーションビルドウィンドウには複数のページがあり、タブを使用してページを移動できます:

![](assets/en/Project/appbuilderProj.png)


ビルドをおこなう前にプロジェクトはコンパイルされていなければなりません。 まだコンパイルされていないプロジェクトでこのメニューコマンドを選択する、あるいはコンパイル後にコードが変更されていると、プロジェクトを (再) コンパイルしなければならない旨の警告ダイアログが表示されます。


### アプリケーションビルド設定

アプリケーションビルドに関わる各パラメーター設定は XML キーの形で、"buildApp.4DSettings" という名称のアプリケーションプロジェクトファイルに保存されます。この XML ファイルはプロジェクトの Settings フォルダーに配置されます。

アプリケーションビルドダイアログが初めて表示されるときにはデフォルトパラメーターが使用されます。 **ビルド** ボタンや **設定保存** ボタンをクリックすると、このプロジェクトファイルの内容が更新されます。 同じデータベースについて内容の異なる複数の XML ファイルを定義し、[BUILD APPLICATION](https://doc.4d.com/4Dv18/4D/18/BUILD-APPLICATION.301-4505371.ja.html) コマンドでそれらを使い分けることができます。

また、XML キーを使用すれば、アプリケーションビルドダイアログには表示されない追加の設定をおこなうことができます。 詳細は専用のドキュメント [アプリケーションビルド設定ファイル](https://doc.4d.com/4Dv18R4/4D/18-R4/4D-XML-Keys-BuildApplication.100-5068211.ja.html) を参照してください。

### ログファイル

アプリケーションをビルドすると、4D はログファイル (*BuildApp.log.xml*) を生成して、プロジェクトの **Logs** フォルダーに保存します。 ログファイルにはビルド毎に以下の情報が書き込まれます:

- ターゲットビルドの開始と終了
- 生成されたファイルの名称とフルパス
- ビルドの日付と時刻
- 発生したエラー
- 署名の問題 (例: 署名されていないプラグイン)

アプリケーションを公証する場合などは、このファイルを確認することで、後の運用手順で時間を節約できることがあります。

> `Get 4D file(Build application log file)` コマンドを使って、ログファイルの場所を取得します。



## アプリケーション名と保存先フォルダー

![](assets/en/Project/buidappstructureProj.png)

**アプリケーション名** には生成するアプリケーションの名前を入力します。

**保存先フォルダー** にはビルドされるアプリケーションの保存先を指定します。 指定したフォルダーが存在しない場合は新たに作成します。



## コンパイル済みストラクチャーページ

このページでは、標準のコンパイル済みストラクチャーファイルやコンパイル済みコンポーネントをビルドできます。

![](assets/en/Project/appbuilderProj.png)


### コンパイル済みストラクチャーをビルド

インタープリターコードを含まないアプリケーションをビルドします。

これにより、*Compiled Database/\<project name>* フォルダーの中に *.4dz* ファイルが作成されます。 たとえば、アプリケーション名を "MyProject" にした場合、4D は次のものを作成します:

*\<destination\>/Compiled Database/MyProject/MyProject.4dz*

> .4dz ファイルは ZIP 圧縮されたプロジェクトフォルダーです (**注:** バイナリデータベースの場合に生成される .4DC ファイルと同義ではないことに注意が必要です)。 .4dz ファイルを開けるのは 4D Server、4D Volume ライセンス (組み込みアプリケーション)、および 4D Developer (4D) です。 圧縮・最適化された .4dz ファイルによってプロジェクトパッケージの展開が容易になります。


#### 関連するフォルダーを含む

このオプションを選択すると、プロジェクトに関連するフォルダーが、Build フォルダーの *Components* および *Resources* フォルダーにコピーされます。 これらのフォルダーの詳細については [プロジェクトアーキテクチャーの説明](Project/architecture.md) を参照ください。


### コンポーネントをビルド

ストラクチャーからコンパイル済みコンポーネントをビルドします。

コンポーネントは特定の機能を実装した標準の 4D プロジェクトです。 ビルドされたコンポーネントを他の 4Dプロジェクト (ホストアプリケーションプロジェクト) にインストールすると、ホストプロジェクトはその機能を利用できるようになります。

アプリケーション名を *MyComponent* に指定した場合、4D は *Components* フォルダーを作成し、その中に *MyComponent.4dbase* フォルダーを生成します:

*\<destination>/Components/MyComponent.4dbase/MyComponent.4DZ*.

*MyComponent.4dbase* フォルダーには次のファイルが含まれます:
-   *MyComponent.4DZ* ファイル
-   *Resources* フォルダー: 関連リソースは自動的にこのフォルダーにコピーされます。 コンポーネントは、他のコンポーネントやプラグインを使用できないため、その他の "Components" や "Plugins" フォルダーはコピーされません。


## アプリケーションページ

このタブでは、スタンドアロンのシングルユーザー版アプリケーションをビルドします:

![](assets/en/Project/standaloneProj.png)

### スタンドアロンアプリケーションをビルド

**スタンドアロンアプリケーションをビルド** オプションを選択して **ビルド** ボタンをクリックすると、スタンドアロンの (つまり、ダブルクリックで起動可能な) アプリケーションがアプリケーションプロジェクトをもとに作成されます。

ビルドには次のものが必要です:
- 4D Volume Desktop (4Dデータベースエンジン)
- 適切な [ライセンス](#licenses)

Windows においては、.exe 拡張子のついた実行ファイルが作成されます。 macOS においては、ソフトウェアパッケージが作成されます。

The principle consists of merging a compiled structure file with 4D Volume Desktop. 4D Volume Desktop が提供する機能はライセンスページで指定するライセンス情報に基づきます。 For more information about this point, refer to the sales documentation and to the [4D Store](http://www.4d.com/).

You can define a default data file or allow users to create and use their own data file (see the [Data file management in final applications](https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html) section).

It is possible to automate the update of merged single-user applications by means of a sequence of language commands (see [Automatic updating of server or single-user applications](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html).

#### 4D Volume Desktop Location

In order to build a stand-alone application, you must first designate the folder containing the 4D Volume Desktop file:

*   *Windows* - the folder contains the 4D Volume Desktop.4DE, 4D Volume Desktop.RSR, as well as various files and folders required for its operation. These items must be placed at the same level as the selected folder.
*   *macOS* - 4D Volume Desktop is provided in the form of a structured software package containing various generic files and folders.

To select the 4D Volume Desktop folder, click on the **[...]** button. A dialog box appears allowing you to designate the 4D Volume Desktop folder (Windows) or package (macOS).

Once the folder is selected, its complete pathname is displayed and, if it actually contains 4D Volume Desktop, the option for building an executable application is activated.

> The 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v18, you must select a 4D Volume Desktop v18.

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file. Two data linking modes are available:

*   **By application name** (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. このモードではアプリケーションパッケージをディスク上で自由に移動させることができます。 This option should generally be used for merged applications, unless you specifically need to duplicate your application.

*   **By application path** - The merged 4D application will parse the application's *lastDataPath.xml* file and try to open the data file with an "executablePath" attribute that matches the application's full path. 同エントリー内で "dataFilePath" 属性で定義されているデータファイルを開きます。 Otherwise, the last opened data file is opened (default mode).

For more information about the data linking mode, refer to the [Last data file opened](#last-data-file-opened) section.


#### Generated files

When you click on the **Build** button, 4D automatically creates a **Final Application** folder in the specified **Destination Folder**. その中に指定したアプリケーション名のサブフォルダーを作成します。

If you have specified "MyProject" as the name of the application, you will find the following files in this subfolder (aka MyProject):

*   *Windows*
    *   MyProject.exe  - Your executable and a MyProject.rsr (the application resources)
    *   4D Extensions folder, Resources folder, various libraries (DLL), Native Components folder, SASL Plugins folder - Files necessary for the operation of the application
    *   Database folder  - Includes a Resources folder and  MyProject.4DZ file. They make up the compiled structure of the project as well as the project Resources folder. **Note**: This folder also contains the *Default Data* folder, if it has been defined (see [Data file management in final applications](#data-file-management-in-final-applicatons).
    *   (Optional) Components folder and/or Plugins folder - Contains any components and/or plug-in files included in the project. For more information about this, refer to the [Plugins and components](#plugins-and-components) section.
    *   Licenses folder - An XML file of license numbers integrated into the application. For more information about this, refer to the [Licenses & Certificate](#licenses-and-certificate) section.
    *   Additional items added to the 4D Volume Desktop folder, if any (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)).

    All these items must be kept in the same folder in order for the executable to operate.

*   *macOS*
    -   A software package named MyProject.app containing your application and all the items necessary for its operation, including the plug-ins, components and licenses. プラグインやコンポーネントの統合に関する詳細は [プラグイン ＆コンポーネントページ](#プラグインコンポーネントページ) を参照してください。 ライセンスの統合に関しては [ライセンス & 証明書ページ](#ライセンス証明書ページ) を参照してください。 **Note**: In macOS, the [Application file](https://doc.4d.com/4Dv18R4/4D/18-R4/Application-file.301-4982855.en.html) command of the 4D language returns the pathname of the ApplicationName file (located in the Contents:macOS folder of the software package) and not that of the .comp file (Contents:Resources folder of the software package).


#### Customizing 4D Volume Desktop folder

When building a stand-alone application, 4D copies the contents of the 4D Volume Desktop folder into Destination folder > *Final Application* folder. 必要に応じて、このコピー元である 4D Volume Desktop フォルダーの内容をカスタマイズすることできます。 You can, for example:

*   Install a 4D Volume Desktop version corresponding to a specific language;
*   Add a custom *PlugIns* folder;
*   Customize the contents of the *Resources* folder.
> In macOS, 4D Volume Desktop is provided in the form of a software package. In order to modify it, you must first display its contents (**Control+click** on the icon).


#### Location of Web files

If your stand-alone application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:

*   *cert.pem* and *key.pem* files (optional): These files are used for TLS connections and by data encryption commands,
*   default Web root folder.

Items must be installed:

- **on Windows**: in the *Final Application\MyProject\Database* subfolder.
- **on macOS**: next to the *MyProject.app* software package.





## Client/Server page

On this tab, you can build customized client-server applications that are homogenous, cross-platform and with an automatic update option.

![](assets/en/Project/buildappCSProj.png)

### What is a Client/Server application?

A client/server application comes from the combination of three items:

- A compiled 4D project,
- The 4D Server application,
- The 4D Volume Desktop application (macOS and/or Windows).

Once built, a client/server application is composed of two customized parts: the Server portion (unique) and the Client portion (to install on each client machine).

Also, the client/server application is customized and its handling simplified:

- To launch the server portion, the user simply double-clicks on the server application. The project file does not need to be selected.
- To launch the client portion, the user simply double-clicks the client application, which connects directly to the server application. You do not need to choose a server in a connection dialog box. クライアントは接続対象のサーバーを名称 (サーバーが同じサブネットワーク上にある場合)、あるいはIPアドレスによって認識します。IPアドレスの指定は buildapp.4DSettings ファイル内の `IPAddress` XMLキーを使用して設定されます。 接続が失敗した場合のために、代替機構を実装することができます。これについては [クライアント接続の管理](#クライアント接続の管理) の章で説明されています。 また、**Option** (macOS) や **Alt** (Windows) キーを押しながらクライアントアプリケーション起動すると、標準の接続ダイアログを強制的に表示させることもできます。 サーバーアプリケーションには、対応するクライアントアプリケーションのみが接続できます。 If a user tries to connect to the server portion using a standard 4D application, an error message is returned and connection is impossible.
- A client/server application can be set so that the client portion [can be updated automatically over the network](#copy-of-client-applications-in-the-server-application).
- It is also possible to automate the update of the server part through the use of a sequence of language commands ([SET UPDATE FOLDER](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html) and [RESTART 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html)).



### Build server application

Check this option to generate the server part of your application during the building phase. ビルドに使用する 4D Server アプリケーションの場所を選択する必要があります。 この 4D Server はビルドをおこなうプラットフォームに対応していなければなりません (たとえば、Windows 用のサーバーアプリケーションをビルドするには Windows 上でビルドを実行する必要があり、Windows 版の 4D Server アプリケーションを指定する必要があります)。

#### 4D Server location

Click on the **[...]** button and use the *Browse for folder* dialog box to locate the 4D Server application. In macOS, you must select the 4D Server package directly.

#### Current version

Used to indicate the current version number for the application generated. このバージョン番号をもとに、クライアントアプリケーションからの接続を受け入れたり拒否したりできます。 クライアントとサーバーアプリケーションで互換性のある番号の範囲は [XML キー](#アプリケーションビルド設定) で設定します。

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file. Two data linking modes are available:

*   **By application name** (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. このモードではアプリケーションパッケージをディスク上で自由に移動させることができます。 This option should generally be used for merged applications, unless you specifically need to duplicate your application.

*   **By application path** - The merged 4D application will parse the application's *lastDataPath.xml* file and try to open the data file with an "executablePath" attribute that matches the application's full path. 同エントリー内で "dataFilePath" 属性で定義されているデータファイルを開きます。 Otherwise, the last opened data file is opened (default mode).

For more information about the data linking mode, refer to the [Last data file opened](#last-data-file-opened) section.


### Build client application

Checking this option generates the client part of your application during the building phase.

#### 4D Volume Desktop

You must designate the location on your disk of the 4D Volume Desktop application to be used. この 4D Volume Desktop はビルドをおこなうプラットフォームに対応していなければなりません。 異なるプラットフォーム用のクライアントアプリケーションをビルドするには、そのプラットフォームで 4D アプリケーションを実行し、追加のビルド処理をしなければなりません。 これはクライアントアプリケーションの最初のバージョンをビルドするときのみ必要です。自動アップデート機構を利用することで、それ以降のアップデートは同じプラットフォーム上から管理することができます。 For more information about this point, see [Customizing 4D Server and/or 4D Client folders](#customizing-4d-server-and-or-4d-client-folders).

> The 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v18, you must select a 4D Volume Desktop v18.

If you want the client application to connect to the server using a specific address (other than the server name published on the sub-network), you must use the `IPAddress` XML key in the buildapp.4DSettings file. この点についてのより詳細な情報については、[BUILD APPLICATION](https://doc.4d.com/4Dv18/4D/18/BUILD-APPLICATION.301-4505371.ja.html) コマンドを参照してください。 接続失敗時の特定の機構を実装することもできます。 The different scenarios proposed are described in the [Management of connections by client applications](#management-of-client-connections) paragraph.

#### Copy of client applications in the server application

The options of this area to set up the mechanism for updating the client parts of your client/server applications using the network each time a new version of the application is generated.

- **Allow automatic update of Windows client application** - Check these options so that your Windows client/server application can take advantage of the automatic update mechanism for clients via the network.
- **Allow automatic update of Macintosh client application** - Check these options so that your Macintosh client/server application can take advantage of the automatic update mechanism for clients via the network.

*   **Allow automatic update of Macintosh client application** - If you want to create a cross-platform client application, you must designate the location on your disk of the 4D Volume Desktop application that corresponds to the “concurrent” platform of the build platform.

    For example, if you build your application in Windows, you must use the **[...]** button to designate the 4D Volume Desktop macOS application (provided as a package).



#### Displaying update notification

The client application update notification is carried out automatically following the server application update.

It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the **Upgrade4DClient** subfolder of the **ApplicationName** Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a .*4darchive* update file is available for each platform:

To trigger client application update notifications, simply replace the old version of the server application with the new one and then execute it. あとの処理は自動でおこなわれます。

On the client side, when the “old” client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. The user can either update their version or cancel the dialog box.

*   If the user clicks **OK**, the new version is downloaded to the client machine over the network. ダウンロードが完了すると古いクライアントアプリケーションが閉じられて、新しいバージョンが起動しサーバーに接続します。 The old version of the application is then placed in the machine’s recycle bin.
*   If the user clicks **Cancel**, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. Otherwise (by default), the connection is established.

#### Forcing automatic updates

In some cases, you may want to prevent client applications from being able to cancel the update download. For example, if you used a new version of the 4D Server source application, the new version of the client application must absolutely be installed on each client machine.

To force the update, simply exclude the current version number of client applications (X-1 and earlier) in the version number range compatible with the server application. すると、未更新クライアントからの接続は更新メカニズムによって拒否されます。 たとえば、クライアントサーバーアプリケーションの新しいバージョン番号がの 6 の場合、バージョン番号が 5 以下のクライアントアプリケーションを許可しないようにできます。

[現在のバージョン番号](#現在のバージョン) はアプリケーションビルドダイアログのクライアント/サーバーページで設定できます。 The intervals of authorized numbers are set in the application project using specific [XML keys](#build-application-settings).


#### Update Error

If 4D cannot carry out the update of the client application, the client machine displays the following error message: “The update of the client application failed. The application is now going to quit.”

There are many possible causes for this error. When you get this message, it is advisable to check the following parameters first off:

*   **Pathnames** - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example *ClientMacFolderToWin*). More particularly, check the pathnames to the versions of 4D Volume Desktop.
*   **Read/write privileges** - On the client machine, check that the current user has write access rights for the client application update.


### Generated files

Once a client/server application is built, you will find a new folder in the destination folder named **Client Server executable**. This folder contains two subfolders, *\<ApplicationName>Client* and *\<ApplicationName>Server*.
> These folders are not generated if an error occurs. In this case, open the [log file](#log-file) in order to find out the cause of the error.

The *\<ApplicationName>Client* folder contains the client portion of the application corresponding to the execution platform of the application builder. このフォルダーを各クライアントにインストールします。 *\<ApplicationName> Server* フォルダーはサーバーアプリケーションを格納します。

The contents of these folders vary depending on the current platform:

*   *Windows* - Each folder contains the application executable file, named *\<ApplicationName>Client.exe* for the client part and *\<ApplicationName>Server.exe* for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.
*   *macOS* - Each folder contains only the application package, named \<ApplicationName> Client for the client part and \<ApplicationName> Server for the server part. 各パッケージには動作に必要なすべてのファイルが含まれます。 Under macOS, launch a package by double-clicking it.

    > The macOS packages built contain the same items as the Windows subfolders. ビルドされた macOS パッケージの内容を表示するにはアイコンを **Control+クリック** して、"パッケージの内容を表示"を選択します。

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. このサブフォルダーには macOS/Windows 版のクライアントアプリケーションが圧縮されて格納されます。 This file is used during the automatic client application update.


#### Location of Web files

If the server and/or client part of your double-clickable application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:

- *cert.pem* and *key.pem* files (optional): These files are used for SSL connections and by data encryption commands,
- Default Web root folder (WebFolder).

Items must be installed:
*   **on Windows**
    *   **Server application** - in the *Client Server executable\ \<ApplicationName>Server\Server Database* subfolder.
    *   **Client application** - in the *Client Server executable\ \<ApplicationName>Client* subfolder.

*   **on macOS**
    *   **Server application** - next to the *\<ApplicationName>Server* software package.
    *   **Client application** - next to the *\<ApplicationName>Client* software package.


### シングルユーザークライアントアプリケーションの埋め込み

4D ではクライアントアプリケーションにコンパイル済ストラクチャーを埋め込むことができます。 この機能を使用すると、たとえば、`.4dlink` ファイルを `OPEN DATABASE` コマンドで実行することで異なるサーバーアプリケーションにアクセスできるような "ポータル" アプリケーションをユーザーに提供することができます。

この機能を有効化するためには、*buildApp* 設定ファイルに `DatabaseToEmbedInClientWinFolder` または `DatabaseToEmbedInClientMacFolder` キーを追加します。 いずれかのキーが存在する場合、アプリケーションビルドプロセスの途中で組み込みシングルユーザーアプリケーションが生成され、コンパイルされたストラクチャーが (EnginedServer.4Dlink ファイルの代わりに) "Database" フォルダー内に置かれます。

- シングルユーザーアプリケーション内に "Default Data" フォルダーがあれば、アプリケーションにはライセンスが埋め込まれます。
- シングルユーザーアプリケーション内に "Default Data" フォルダーがなければ、データファイルおよびライセンスなしでアプリケーションが実行されます。

基本シナリオは以下の通りです:

1. アプリケーションビルド ダイアログボックス内にて、"コンパイルされたストラクチャーをビルド" オプションを選択し、シングルユーザーモードで使用されるアプリケーションの .4DC または .4DZ ファイルを生成します。
2. クライアント/サーバーアプリケーションの *buildApp.4DSettings* ファイル内で、コンパイルされたシングルユーザーアプリケーションを格納しているフォルダへのパスを以下の xml キーに指示します:
    - `DatabaseToEmbedInClientWinFolder`
    - `DatabaseToEmbedInClientMacFolder`
3. クライアント/サーバーアプリケーションをビルドします。 これは以下のように動作します:
    - シングルユーザーアプリケーションのフォルダー全体が、組み込みクライアントの "Database" フォルダー内にコピーされます。
    - "Database" フォルダーの *EnginedServer.4Dlink* ファイルは生成されません。
    - シングルユーザーアプリケーションのコピーが持つ .4DC、.4DZ、.4DIndy ファイルは、組み込みクライアントの名前へとファイル名が変更されます。
    - `PublishName` キーは、組み込みクライアントの *info.plist* にコピーされません。
    - シングルユーザーデータベースに "Default Data" フォルダーがない場合、組み込みクライアントはデータなしで実行されます。

4D Server の自動アップデート機能 ([現在のバージョン](#現在のバージョン) 番号、`SET UPDATE FOLDER</a> コマンドなど...) は、シングルユーザーアプリケーションにおいても標準のリモートアプリケーションと同様に動きます。 接続時、シングルユーザーアプリケーションは <code>CurrentVers` キーを 4D Server バージョンレンジと比較します。 レンジ外だった場合、アップデートされているシングルユーザーアプリケーションがサーバーからダウンロードされ、アップデーターがローカルアップデートプロセスを実行します。


### Customizing client and/or server cache folder names

Client and server cache folders are used to store shared elements such as resources or components. They are required to manage exchanges between server and remote clients. Client/server applications use default pathnames for both client and server system cache folders.

In some specific cases, you might need to customize the names of these folders to implement specific architectures (see below). 4D provides you with the `ClientServerSystemFolderName` and `ServerStructureFolderName` keys to be set in the *buildApp* settings file.


#### Client cache folder

Customizing the client-side cache folder name can be useful when your client application is used to connect to several merged servers which are similar but use different data sets. In this case, to save multiple unnecessary downloads of identical local resources, you can use the same custom local cache folder.

- Default configuration (*for each connection to a server, a specific cache folder is downloaded/updated*):

![](assets/en/Admin/cachea.png)

- Using the `ClientServerSystemFolderName` key (*a single cache folder is used for all servers*):

![](assets/en/Admin/cacheb.png)


#### Server cache folder

Customizing the server-side cache folder name is useful when you run several identical server applications built with different 4D versions on the same computer. If you want each server to use its own set of resources, you need to customize the server cache folder.

- Default configuration (*same server applications share the same cache folder*):

![](assets/en/Admin/cacheServera.png)

- Using the `ServerStructureFolderName` key (*a dedicated cache folder is used for each server application*):

![](assets/en/Admin/cacheServerb.png)




## Plugins & components page

このページでは、シングルユーザーまたはクライアント/サーバーアプリケーションに含める [プラグイン](Concepts/plug-ins.md) や [コンポーネント](Concepts/components.md) を設定できます。

このページには、現在の 4Dアプリケーションにロードされている要素がリストされます:

![](assets/en/Project/buildapppluginsProj.png)

*    **アクティブ** 列 - ビルドするアプリケーションパッケージに項目を統合するかどうかを指定します。 デフォルトですべての項目が選択されています。 プラグインやコンポーネントを除外するには、チェックボックスの選択を外します。

*   **プラグイン&コンポーネント** 列 - プラグイン/コンポーネントの名称を表示します。

*   **ID** 列 - プラグイン/コンポーネントの ID (あれば) を表示します。

*   **タイプ** 列 - その要素がプラグインであるかコンポーネントであるかが表示されます。

その他のプラグインやコンポーネントをアプリケーションに統合したい場合には、4D Server や 4D Volume Desktop の **Plugins** や **Components** フォルダーにそれらを配置します。 ソースアプリケーションのフォルダーから内容をコピーするメカニズム ([4D Volume Desktop フォルダーのカスタマイズ](#4D-Volume-Desktop-フォルダーのカスタマイズ) 参照) により、どんなタイプのファイルでもアプリケーションに統合することができます。

同じプラグインの異なるバージョンが見つかった場合 (現在 4D にロードされているものと同じプラグインが、ソースアプリケーションのフォルダーにも配置されている場合など)、4D Volume Desktop/4D Server フォルダーにインストールされているバージョンが優先されます。 他方、同じコンポーネントが両方にインストールされていた場合は、アプリケーションを開くことはできません。
> 配布するアプリケーションでプラグインやコンポーネントを使用するには、それぞれ適切なライセンスが必要です。






## Licenses & Certificate page

ライセンス&証明書のページでは、次のようなことができます:

*   シングルユーザーのスタンドアロンアプリケーションに統合するライセンス番号を指定します。
*   macOS 環境下では、証明書を使用してアプリケーションに署名をすることができます。

![](assets/en/Admin/buildappCertif.png)

### ライセンスリスト

アプリケーションに統合するのに使用できる配布ライセンスの一覧を表示します。 デフォルトでリストは空です。 アプリケーションをビルドするには *4D Developer Professional* ライセンスと、その開発ライセンスに対応する *4D Desktop Volume* ライセンスを指定しなければなりません。 現在使用しているものとは別の 4D Developer Professional ライセンス (およびその付属ライセンス) を追加することもできます。

ライセンスを追加または取り除くにはウィンドウ下部の **[+]** または **[-]** ボタンをクリックします。

\[+] ボタンをクリックすると、ファイルを開くダイアログが表示され、マシンの *Licenses* フォルダーの内容が表示されます。 このフォルダーの場所については 詳しくは [Get 4D folder](https://doc.4d.com/4Dv18/4D/18/Get-4D-folder.301-4505365.ja.html) コマンドの説明を参照してください。

開発ライセンスとそれに対応した配布ライセンスを選択します。 これらのファイルは *4D Developer Professional* ライセンスや *4D Desktop Volume* ライセンスをアクティベーションした際、この場所にコピーされます。

ファイルを選択すると、リストに選択内容が反映されます:

*   **ライセンス #** - 製品ライセンス番号
*   **ライセンス** - プロダクト名
*   **有効期限** - ライセンスの有効期限 (あれば)
*   **パス** - ディスク上のライセンスの場所

ライセンスが有効でない場合、警告が表示されます。

必要なだけ有効なファイルを選択することができます。 実行可能アプリケーションをビルドする際に、4D は最も適切なライセンスを使用します。
> "R-リリース" バージョンのアプリケーションをビルドするには、専用の "R" ライセンスが必要です ("R" 製品用のライセンス番号は "R-" から始まる番号です)。

アプリケーションビルド後、配布ライセンスファイルは実行可能ファイルと同階層 (Windows) やパッケージ内 (macOS) に自動でコピーされます。


### OS X 署名に使用する証明書

アプリケーションビルダーは、macOS 環境下において組み込み4Dアプリに署名をする機能を備えています (macOS のシングルユーザーアプリ、サーバーおよびクライアントアプリ)。 アプリケーションを署名することにより、 macOS において「Mac App Store と確認済みの開発元からのアプリケーションを許可」のオプションが選択されているときに Gatekeeper の機能を使用してアプリケーションを実行することが可能になります (後述の "Gatekeeper について" を参照ください)。

- **アプリケーションに署名** オプションにチェックをすると、macOS のアプリケーションビルド処理に認証が含まれます。4D はビルドの際に、認証に必要な要素の有無をチェックします:

![](assets/en/Admin/buildapposxcertProj.png)

このオプションは Windows と macOS 両方の環境で表示されますが、macOS の場合においてのみ有効です。

*   **認証名** - Apple によって有効化されたデベロッパー認証名を入力してください。 この認証名は通常、キーチェーンアクセスユーティリティ内の証明書の名前と一緒です (下図の赤枠):

![](assets/en/Project/certificate.png)

Apple からデベロッパー認証を取得するためには、キーチェーンアクセスのメニューのコマンドを使用するか、次のリンクへ移動してください: [http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html)。
> この証明書の取得には Apple の codesign ユーティリティが必要になります。このユーティリティはデフォルトで提供されており、通常 “/usr/bin/” フォルダーにあります。 エラーが起きた際には、このユーティリティがディスク上にあるかどうかを確認してください。

* **自己署名証明書の生成** - 自己署名証明書を生成するための "証明書アシスタント" を実行します。 Apple 社のデベロッパー認証を持たない場合には、自己署名証明書を提供する必要があります。 この証明書を使うと、アプリケーションを内部的に運用する場合に警告が表示されません。 アプリケーションを外部で運用する場合 (http やメールを介した場合) には、アプリケーションの開発者が不明であるという警告が macOS での起動時に表示されます。 その場合でもユーザーはアプリケーションを "強制的" に起動することができます。 <p>"証明書アシスタント" では、オプションを適切に選択します: ![](assets/en/Admin/Cert1.png) ![](assets/en/Admin/Cert2.png)

> Apple Developer Program に加入し、アプリケーションの公証 (後述参照) に必要なデベロッパー認証を取得することが推奨されます。



#### Gatekeeper について

Gatekeeper とは macOS のセキュリティ機能で、インターネットからダウンロードしてきたアプリケーションの実行を管理するものです。 もしダウンロードしたアプリケーションが Apple Store からダウンロードしたものではない、または署名されていない場合には実行が拒否されます。

アプリケーションビルダーの **アプリケーションに署名** 機能によって、このセキュリティオプションと互換性のあるアプリケーションをデフォルトで生成することができます。


#### ノータリゼーション (公証) について

macOS 10.14.5 (Mojave) および 10.15 (Catalina) において、アプリケーションのノータリゼーション (公証) が Apple より強く推奨されています。公証を得ていないアプリケーションをインターネットからダウンロードした場合、デフォルトでブロックされます。

Apple の公証サービスを利用するのに必要な条件を満たすため、4D v18 では [ビルトインの署名機能](#OS-X-署名に使用する証明書) が更新されています。 公証自体はデベロッパーによっておこなわなくてはいけないもので、4D とは直接関係ありません。なお、Xcode のインストールが必須である点に注意してください。 公証についての詳細は [4D ブログ記事 (英語)](https://blog.4d.com/how-to-notarize-your-merged-4d-application/) や関連の [テクニカルノート (日本語)](https://4d-jp.github.io/tech_notes/20-02-25-notarization/) を参照ください。

 公証についての詳細は、

[Apple のデベロッパー Web サイト](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow) を参照ください。 </p>

## Customizing application icons

4Dは、ダブルクリックで実行可能なアプリケーションにデフォルトアイコンを割り当てますが、アプリケーションごとにこのアイコンをカスタマイズできます。

*   **macOS** - アプリケーションビルドの際にアイコンをカスタマイズするには、 icns タイプのアイコンファイルを作成し、それを Project フォルダーと同階層に配置しておきます。
> Apple, Inc. より、*icns* アイコンファイルを作成するツールが提供されています。(詳細については、[Apple documentation](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2) を参照してください。)

    アイコンファイルの名前は、プロジェクトファイル名 + "*.icns*" 拡張子でなければなりません。 4D は自動でこのファイルを認識し、アイコンとして使用します (*.icns* ファイルは *ApplicationName.icns* に名称変更されて Resourcesフォルダーに置かれます。さらに *info.plist* ファイルの *CFBundleFileIcon* エントリーを更新します)。

*   **Windows** - アプリケーションビルドの際にアイコンをカスタマイズするには、 *.ico* タイプのアイコンファイルを作成し、それを Project フォルダーと同階層に配置しておきます。

    アイコンファイルの名前は、プロジェクトファイル名 + "*.ico*" 拡張子でなければなりません。 4Dは自動でこのファイルを認識し、アイコンとして使用します。

また、buildApp.4DSettings ファイルにて、使用すべきアイコンを [XML keys](https://doc.4d.com/4Dv18/4D/18/4D-XML-Keys-BuildApplication.100-4670981.ja.html) (SourcesFiles の項参照)によって指定することも可能です。 次のキーが利用できます:

- RuntimeVLIconWinPath
- RuntimeVLIconMacPath
- ServerIconWinPath
- ServerIconMacPath
- ClientMacIconForMacPath
- ClientWinIconForMacPath
- ClientMacIconForWinPath
- ClientWinIconForWinPath



## Management of data file(s)

### データファイルを開く

ユーザーが組み込みアプリ、またはアプリのアップデート (シングルユーザー、またはクライアント/サーバーアプリ) を起動すると、4D は有効なデータファイルを選択しようとします。 アプリケーションによって、複数の場所が順次検索されます。

組み込みアプリ起動時のオープニングシーケンスは以下のようになっています:

1. 4D は最後に開かれたデータファイルを開こうとします。詳しくは [後述の説明](#最後に開かれたデータファイル) を参照ください (これは初回起動時には適用されません)。
2. 見つからない場合、4D は .4DZ ファイルと同階層の Default Data フォルダー内にあるデータファイルを、読み込み専用モードで開こうとします。
3. これも見つからない場合、4D は標準のデフォルトデータファイルを開こうとします (.4DZ ファイルと同じ場所にある、同じ名前のファイル)。
4. これも見つからない場合、4D は "データファイルを開く" ダイアログボックスを表示します。


### 最後に開かれたデータファイル

#### 最後に開かれたファイルへのパス
4D でビルドされたスタンドアロンまたはサーバーアプリケーションは、最後に開かれたデータファイルのパスをアプリケーションのユーザー設定フォルダー内に保存します。

アプリケーションのユーザー設定フォルダーの場所は、以下のコマンドで返されるパスに対応しています:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

データファイルパスは *lastDataPath.xml* という名前の専用ファイルに保存されます。

これにより、アプリケーションのアップデートを提供したときにも、ローカルのユーザーデータファイル (最後に使用されたデータファイル) が初回の起動から自動的に開かれます。

このメカニズムは標準的な運用に適しています。 しかしながら特定の場合、たとえば組み込みアプリケーションを複製した場合などにおいて、データファイルとアプリケーションのリンクを変えたいことがあるかもしれません (次章参照)。

#### データリンクモードの設定

コンパイルされたアプリケーションでは、4D は最後に使用されたデータファイルを自動的に使用します。 デフォルトでは、データファイルのパスはアプリケーションのユーザー設定フォルダー内に保存され、 **アプリケーション名 ** でリンクされます。

異なるデータファイルを使用するために組み込みアプリを複製する場合には、この方法は適さないかもしれません。 複製されたアプリは同じアプリケーションユーザー設定フォルダーを共有するため、同じデータファイルを使用することになります (最後に使用されたファイルが開かれるため、データファイル名を変更した場合でも結果は同じです)。

そのため 4D では、アプリケーションパスを使用してデータファイルとリンクすることも可能です。 このとき、データファイルは特定のパスを使用してリンクされるので、最後に開かれたファイルであるかは問われません。 この設定を使うには、データリンクモードの基準を **アプリケーションパス** に設定します。

このモードを使えば、組み込みアプリがいくつあっても、それぞれが専用のデータファイルを使えます。 ただし、デメリットもあります: アプリケーションパッケージを移動させてしまうとアプリケーションパスが変わってしまうため、データファイルを見つけられなくなります。この場合、ユーザーは開くデータファイルを指定するダイアログを提示され、正しいファイルを選択しなくてはなりません。一度選択されれば、*lastDataPath.xml* ファイルが更新され、新しい "executablePath" 属性のエントリーが保存されます。


*データがアプリケーション名でリンクされている場合の複製:* ![](assets/en/Project/datalinking1.png)

*データがアプリケーションパスでリンクされている場合の複製:* ![](assets/en/Project/datalinking2.png)

このデータリンクモードはアプリケーションビルドの際に選択することができます。 オブジェクトにヘルプメッセージを関連付けるには:

- アプリケーションビルダーの [アプリケーションページ](#アプリケーションページ) または [クライアント/サーバーページ](#クライアント-サーバーページ) を使用する。
- シングルユーザーまたはサーバーアプリケーションの **LastDataPathLookup** XMLキーを使用する。


### デフォルトのデータフォルダーを定義する

4D では、アプリケーションビルド時にデフォルトのデータファイルを指定することができます。 アプリケーションの初回起動時に、開くべきローカルデータファイルが見つからなかった場合 (前述の [オープニングシーケンス](#データファイルを開く)参照)、デフォルトのデータファイルが読み込み専用モードで自動的に開かれます。 この機能を使って、組み込みアプリを初回起動したときのデータファイル作成・選択の操作をより制御することができます。

具体的には、次のような場合に対応できます:

- 新しい、またはアップデートされた組み込みアプリを起動したときに、"データファイルを開く" ダイアログが表示されるのを防ぐことができます。 たとえば、デフォルトデータファイルが開かれたことを起動時に検知して、独自のコードやダイアログを実行して、ローカルデータファイルの作成や選択を促すことができます。
- デモアプリなどの用途で、読み込み専用データしか持たない組み込みアプリを配布することができます。


デフォルトのデータファイルを定義・使用するには:

- デフォルトのデータファイル (名称は必ず "Default.4DD") を、データベースプロジェクトのデフォルトフォルダー (名称は必ず "Default Data") 内に保存します。 このデフォルトのデータファイルには、プロジェクト構成に応じて必要なファイルもすべて揃っている必要があります: インデックス (.4DIndx)、外部BLOB、ジャーナル、他。 必ず、有効なデフォルトデータファイルを用意するようにしてください。 なお、デフォルトデータファイルはつねに読み込み専用モードで開かれるため、データファイルの作成前に、あらかじめ大元のストラクチャー設定の "ログを使用" オプションを非選択にしておくことが推奨されます。
- アプリケーションをビルドすると、このデフォルトデータフォルダーが組み込みアプリに統合されます。 同フォルダー内ファイルはすべて一緒に埋め込まれます。

この機能を図示すると次のようになります:

![](assets/en/Project/DefaultData.png)

デフォルトのデータファイルが初回起動時に検知された場合、データファイルは自動的に読み込み専用モードで開かれ、データファイルの変更を伴わないカスタムオペレーションを実行できるようになります。


## Management of client connection(s)

ここでは、組み込みクライアントアプリが運用環境において対象サーバーへと接続する際のメカニズムについて説明します。

### 接続シナリオ

組み込みクライアントアプリの接続プロシージャーは、専用サーバーが使用不可能な場合にも柔軟に対応します。 4Dクライアントアプリのスタートアップシナリオは、次のとおりです:

- クライアントアプリは検索サービスを使用してサーバーへの接続を試みます (同じサブネット内に公開されたサーバー名に基づいて検索します)。  
  または  
  クライアントアプリ内の "EnginedServer.4DLink" ファイルに有効な接続情報が保存されていた場合、クライアントアプリは指定されたサーバーアドレスへ接続を試みます。
- これが失敗した場合、クライアントアプリケーションは、アプリケーションのユーザー設定フォルダーに保存されている情報 ("lastServer.xml" ファイル、詳細は後述参照) を使用してサーバーへの接続を試みます。
- これが失敗した場合、クライアントアプリケーションは接続エラーダイアログボックスを表示します。
    - ユーザーが **選択...** ボタンをクリックした場合、標準の "サーバー接続" ダイアログボックスが表示されます (ビルドの段階で許可されていた場合に限ります。詳細は後述)。
    - ユーザーが **終了** ボタンをクリックした場合、クライアントアプリケーションは終了します。
- 接続が成功した場合、クライアントアプリケーションは将来の使用のために、その接続情報をアプリケーションのユーザー設定フォルダーに保存します。

### 最後に使用したサーバーパスを保存する

最後に使用され検証されたサーバーパスは、アプリケーションのユーザー設定フォルダー内の "lastServer.xml" ファイルに自動的に保存されます。 このフォルダーは次の場所に保存されています:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

このメカニズムは、最初に指定したサーバーが何らかの理由 (例えばメンテナンスモードなど) で一時的に使用できないケースに対応します。 こういった状態が初めて起こったときにはサーバー選択ダイアログボックスが表示され (ただし許可されていた場合に限ります、後述参照)、ほかのサーバーをユーザーが手動で選択すると、その接続が成功した場合にはそのパスが保存されます。 それ以降に接続ができなかった場合には、"lastServer.xml" のパス情報によって自動的に対処されます。

> - ネットワークの設定などの影響で、クライアントアプリが恒久的に検索サービスを使ったサーバー接続ができない場合には、ビルド時にあらかじめ "BuildApp.4DSettings" ファイル内の [IPAddress](https://doc.4d.com/4Dv18/4D/18/IPAddress.300-4671089.ja.html) キーでホスト名を指定しておくことが推奨されます。 このメカニズムはあくまで一時的な接続不可状態の場合を想定しています。  
> - スタートアップ時に **Alt/Option** キーを押しながら起動してサーバー接続ダイアログボックスを表示する方法は、すべての場合において可能です。



### エラー時のサーバー選択ダイアログボックス使用の可・不可

組み込みクライアントアプリがサーバーに接続できない場合、標準のサーバー選択ダイアログボックスを表示するかどうかは設定しておくことができます。 この設定は、アプリケーションをビルドするマシン上の [ServerSelectionAllowedXML](https://doc.4d.com/4Dv18/4D/18/ServerSelectionAllowed.300-4671093.ja.html) キーの値によって制御されます:

- **エラーメッセージを表示し、サーバー選択ダイアログボックスを表示させない**。 デフォルトの挙動です。 アプリケーションは終了する以外の選択肢がありません。  
  `ServerSelectionAllowed`: **False** 値、またはキーを省略 ![](assets/en/Project/connect1.png)

- **エラーメッセージを表示し、サーバー選択ダイアログボックスへのアクセスを可能にする**。 ユーザーは **選択...** ボタンをクリックする事によってサーバー選択ウィンドウにアクセスできます。   
  `ServerSelectionAllowed`: **True**値 ![](assets/en/Project/connect2.png) ![](assets/en/Project/connect3.png)
