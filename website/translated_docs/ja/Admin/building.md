---
id: building
title: プロジェクトパッケージのビルド
---

4D Developer にはプロジェクトパッケージ (ファイナルビルド) を作成するためのアプリケーションビルダーが統合されています。 このビルダーを使用すれば、コンパイルされた 4D アプリケーションの展開を簡易化することができます。 OS ごとに異なる特定の処理を自動で処理し、クライアント/サーバーアプリケーションの展開が容易になります。

アプリケーションビルダーでは以下のことを行えます:

*   インタープリターコードを含まないコンパイル済みアプリケーションのビルド
*   ダブルクリックで起動可能なスタンドアロンアプリケーションのビルド (4D のデータベースエンジンである 4D Volume Desktop を組み込んだ 4D アプリケーション)
*   XML形式のプロジェクトファイル定義を用いて、同じコンパイル済みデータベースから異なるアプリケーションのビルド
*   クライアント/サーバーアプリケーションのビルド
*   クライアントとサーバーの自動更新機能を備えたクライアント/サーバーアプリケーションのビルド
*   ビルド設定の保存 (*設定保存* ボタン)



## アプリケーションのビルド

プロジェクトパッケージをビルドするには次の方法があります:

- [BUILD APPLICATION](https://doc.4d.com/4Dv18/4D/18/BUILD-APPLICATION.301-4505371.ja.html) コマンドを使う
- [アプリケーションビルド](#application-builder)ウィンドウを使う

このウィンドウを開くには 4D の**デザイン**メニューから**アプリケーションビルド...**を選択します。

![](assets/en/Project/buildappProj.png)

アプリケーションビルドウィンドウには複数のページがあり、タブを使用してページを移動できます:

![](assets/en/Project/appbuilderProj.png)


ビルドをおこなう前にアプリケーションはコンパイルされていなければなりません。 まだコンパイルされていないアプリケーションでこのメニューコマンドを選択する、あるいはコンパイル後にコードが変更されていると、データベースを (再) コンパイルしなければならない旨の警告ダイアログが表示されます。


### アプリケーションビルド設定

アプリケーションビルドに関わる各パラメーター設定は XML キーの形で、"buildApp.4DSettings" という名称のアプリケーションプロジェクトファイルに保存されます。この XML ファイルはプロジェクトの Settings フォルダーに配置されます。

アプリケーションビルドダイアログが初めて表示されるときにはデフォルトパラメーターが使用されます。 **ビルド** ボタンや **設定保存** ボタンをクリックすると、このプロジェクトファイルの内容が更新されます。 同じデータベースについて内容の異なる複数の XML ファイルを定義し、[BUILD APPLICATION](https://doc.4d.com/4Dv18/4D/18/BUILD-APPLICATION.301-4505371.ja.html) コマンドでそれらを使い分けることができます。

また、XML キーを使用すれば、アプリケーションビルドダイアログには表示されない追加の設定をおこなうことができます。 詳細は専用のドキュメント [アプリケーションビルド設定ファイル](https://doc.4d.com/4Dv18/4D/18/4D-XML-Keys-BuildApplication.100-4670981.ja.html) を参照してください。

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

これにより、*Compiled Database* フォルダーの中に *.4dz* ファイルが作成されます。 たとえば、アプリケーション名を "MyProject" にした場合、4D は次のものを作成します:

*\<destination>/Compiled Database/\<database name>/MyProject.4dz*

> .4dz ファイルは ZIP 圧縮されたプロジェクトフォルダーです (**注:** バイナリデータベースの場合に生成される .4DC ファイルと同義ではないことに注意が必要です)。 .4dz ファイルを開けるのは 4D Server、4D Volume ライセンス (組み込みアプリケーション)、および 4D Developer です。 圧縮・最適化された .4dz ファイルによってプロジェクトパッケージの展開が容易になります。


#### 関連するフォルダーを含む

このオプションを選択すると、データベースに関連するフォルダーが、Build フォルダーの *Components* および *Resources* フォルダーにコピーされます。 これらのフォルダーに関する情報は [データベースアーキテクチャー  ](https://doc.4d.com/4Dv18/4D/18/Description-of-4D-files.300-4575698.ja.html#4671957) を参照してください。


### コンポーネントをビルド

ストラクチャーからコンパイル済みコンポーネントをビルドします。

コンポーネントは特定の機能を実装した標準の 4D プロジェクトです。 ビルドされたコンポーネントを他の 4D データベース (ホストデータベース) にインストールすると、ホストデータベースはその機能を利用できるようになります。 コンポーネントに関する詳細は [4D コンポーネントの開発とインストール](https://doc.4d.com/4Dv18/4D/18/Developing-and-installing-4D-components.200-4575436.ja.html) を参照してください。

アプリケーション名を *MyComponent* に指定した場合、4D は Components フォルダーを作成し、その中に *MyComponent.4dbase* フォルダーを生成します: *\<destination>/Components/name.4dbase/\<name>.4DZ*.

*MyComponent.4dbase* フォルダーには次のファイルが含まれます:
-   *MyComponent.4DZ* ファイル
-   *Resources* フォルダー: 関連リソースは自動的にこのフォルダーにコピーされます。 コンポーネントは他のコンポーネントやプラグインを使用できないため、その他の "Components" や "Plugins" フォルダーはコピーされません。


## アプリケーションページ

このタブでは、スタンドアロンのシングルユーザー版アプリケーションをビルドします:

![](assets/en/Project/standaloneProj.png)

### スタンドアロンアプリケーションをビルド

**スタンドアロンアプリケーションをビルド** オプションを選択して **ビルド** ボタンをクリックすると、スタンドアロンの (つまり、ダブルクリックで起動可能な) アプリケーションがデータベースプロジェクトをもとに作成されます。

ビルドには次のものが必要です:
- 4D Volume Desktop (4D データベースエンジン)
- [適切なライセンス](#licenses)

Windows においては、.exe 拡張子のついた実行ファイルが作成されます。 macOS においては、ソフトウェアパッケージが作成されます。

この処理はコンパイル済みストラクチャーファイルと4D Volume Desktopを統合します。 4D Volume Desktop が提供する機能はライセンスページで指定するライセンス情報に基づきます。 この点についての詳細な情報は、4D の [オンラインストア](http://store.4d.com/jp/) と、セールスドキュメンテーションを参照してください。

データファイルについては、デフォルトのデータファイルを定義することもできますし、ユーザー独自のデータファイルを作成・使用することを許可することもできます (詳細については [最終アプリケーションでのデータファイルの管理](https://doc.4d.com/4Dv18/4D/18/Data-file-management-in-final-applications.300-4575558.ja.html) を参照してください)。

いくつかのランゲージコマンドを特定の順番で使用することによって、シングルユーザー向け組み込みアプリケーションのアップデートを自動化することが可能です ([サーバーまたはシングルユーザー向けアプリの自動アップデート](https://doc.4d.com/4Dv18/4D/18/Automatic-updating-of-server-or-single-user-applications.300-4575550.ja.html) を参照してください)。

#### 4D Volume Desktopの場所

ダブルクリックで起動されるアプリケーションをビルドするためには、まず 4D Volume Desktop が格納されているフォルダーの場所を指定しなければなりません:

*   *Windows* では: 4D Volume Desktop.4DE や 4D Volume Desktop.RSR、その他動作に必要なファイルやフォルダーを含むフォルダーを選択します。
*   *macOS* では: ソフトウェアパッケージとして 4D Volume Desktop が提供されているので、このパッケージを選択します。

4D Volume Desktop フォルダーを選択するには **[...]** ボタンをクリックします。 フォルダーを選択するダイアログが表示されたら、4D Volume Desktop フォルダー (Windows) またはパッケージ (macOS) を選択します。

フォルダーが選択されるとその完全パス名が表示され、そこに 4D Volume Desktop が含まれていればビルドボタンが有効になります:

> 4D Volume Desktop のバージョン番号は、4D Developer のバージョン番号と合致する必要があります。 たとえば、4D Developer の v18 を利用していれば、4D Volume Desktop v18 が必要です。

#### データリンクモードの基準

このオプションを使って、組み込みアプリケーションとローカルデータファイルとのリンクモードを選択します。 二種類のリンクモードから選択可能です:

*   **アプリケーション名** (デフォルト) - このモードでは、4D アプリケーションはストラクチャーファイルに対応する、最後に開かれたデータファイルを開きます。 このモードではアプリケーションパッケージをディスク上で自由に移動させることができます。 アプリケーションを複製する場合を除いて、通常は組み込みアプリに対してこのモードが使用されるべきです。

*   **アプリケーションパス** - このモードでは、組み込み 4D アプリケーションは自身に紐づいている *lastDataPath.xml* ファイルを解析して、起動アプリのフルパスに合致する "executablePath" 属性を持つデータパスマップのエントリーを探し、 同エントリー内で "dataFilePath" 属性で定義されているデータファイルを開きます。

データリンクモードについての詳細は [最後に開いたデータファイル](#last-data-file-opened) を参照してください。


#### 生成されるファイル

**ビルド** ボタンをクリックすると、4D は **保存先フォルダー** に **Final Application** フォルダーを作成し、 その中に指定したアプリケーション名のサブフォルダーを作成します。

アプリケーション名に "MyProject"と指定した場合、MyProject サブフォルダー内には以下のファイルが置かれます:

*   *Windows*
    *   MyProject.exe  - 実行可能ファイル、そして MyProject.rsr (アプリケーションリソースファイル)
    *   4D Extensions および Resources フォルダー、さまざまなライブラリ (DLL)、 Native Components フォルダー、SASL Plugins フォルダーなど、アプリケーション実行に必要なファイル
    *   Databaseフォルダー: Resources フォルダーと MyProject.4DZ ファイルが格納されています。 これらはデータベースのコンパイル済みストラクチャーおよびデータベースの Resources フォルダーです。 **注**: このフォルダには、定義されていれば *Default Data* フォルダーも含まれています ([最終アプリケーションでのデータファイルの管理](#データファイルの管理)を参照してください)。
    *   (オプション) データベースに含まれるコンポーネントやプラグインが配置された Components フォルダーおよび Plugins フォルダー。 この点に関する詳細は [プラグイン ＆ コンポーネントページ](#プラグインコンポーネントページ)を参照してください。
    *   Licenses フォルダー - アプリケーションに統合されたライセンス番号の XML ファイルが含まれます。 この点に関する詳細は [ライセンス & 証明書ページ](#ライセンス証明書ページ) を参照してください。
    *   4D Volume Desktop フォルダーに追加されたその他の項目 (あれば)([4D Volume Desktop フォルダーのカスタマイズ](#4D-Volume-Desktop-フォルダーのカスタマイズ) 参照)

    実行ファイルの動作には、これらすべての項目が同じフォルダー内に必要です。

*   *macOS*
    -   MyProject.app という名称のソフトウェアパッケージに、プラグインやコンポーネント、ライセンスなど必要な項目がすべて格納されます。 プラグインやコンポーネントの統合に関する詳細は [プラグイン ＆コンポーネントページ](#プラグインコンポーネントページ) を参照してください。 ライセンスの統合に関しては [ライセンス & 証明書ページ](#ライセンス証明書ページ) を参照してください。 **注**: macOSでは、4D ランゲージの [Application file](https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html) コマンドが返すのは、ソフトウェアパッケージ内の "Contents:macOS" フォルダー内にコピーされる ApplicationName ファイルのパス名です (ソフトウェアパッケージの "Contents:Resources" フォルダー内の .comp ファイルのパスではありません)。


#### 4D Volume Desktop フォルダーのカスタマイズ

ダブルクリックで起動可能なアプリケーションをビルドする際、4D は 4D Volume Desktop フォルダーの内容を *Final Application* 内のアプリケーション名サブフォルダーにコピーします。 必要に応じて、このコピー元である 4D Volume Desktop フォルダーの内容をカスタマイズすることできます。 たとえば:

*   特定の言語バージョンに対応する 4D Volume Desktop をインストールする
*   カスタムプラグインを *Plugins* フォルダーに置く
*   *Resources* フォルダーの内容をカスタマイズする
> macOS では、4D Volume Desktop はソフトウェアパッケージ形式で提供されています。 内容を変更するにはパッケージを開きます (アイコンを **Control+click**)。


#### Web ファイルの場所

ダブルクリックで起動可能なアプリケーションを Web サーバーとして使用する場合、Web フォルダーやファイルは特定の場所にインストールする必要があります: These items are the following:

*   *cert.pem* and *key.pem* files (optional): These files are used for SSL connections and by data encryption commands,
*   default Web root folder.

Items must be installed:

- **on Windows**: in the *Final Application\MyProject\Database* subfolder.
- **on macOS**: next to the *MyProject.app* software package.





## Client/Server page

On this tab, you can build customized client-server applications that are homogenous, cross-platform and with an automatic update option.

![](assets/en/Project/buildappCSProj.png)

### What is a Client/Server application?

A client/server application comes from the combination of three items:

- A compiled 4D database,
- The 4D Server application,
- The 4D Volume Desktop application (macOS and/or Windows).

Once built, a client/server application is composed of two customized parts: the Server portion (unique) and the Client portion (to install on each client machine).

Also, the client/server application is customized and its handling simplified:

- To launch the server portion, the user simply double-clicks on the server application. データベースを選択する必要はありません。
- クライアントを起動するにも、同様にクライアントアプリケーションをダブルクリックします。すると、サーバーアプリケーションへの接続が直接おこなわれるため、 接続ダイアログでサーバーを選択する必要はありません。 クライアントは接続対象のサーバーを名称 (サーバーが同じサブネットワーク上にある場合)、あるいはIPアドレスによって認識します。IPアドレスの指定は buildapp.4DSettings ファイル内の `IPAddress` XMLキーを使用して設定されます。 接続が失敗した場合のために、代替機構を実装することができます。これについては [クライアント接続の管理](#クライアント接続の管理) の章で説明されています。 また、**Option** (macOS) や **Alt** (Windows) キーを押しながらクライアントアプリケーション起動すると、標準の接続ダイアログを強制的に表示させることもできます。 サーバーアプリケーションには、対応するクライアントアプリケーションのみが接続できます。 標準の 4D アプリケーションを使用してサーバーアプリケーションに接続を試みると、接続は拒否されエラーが返されます。
- クライアント側をネットワーク越しに自動更新するようにクライアント/サーバーアプリケーションを設定することも可能です。この点については [サーバーアプリケーション内部のクライアントアプリケーションのコピー](#サーバーアプリケーション内部のクライアントアプリケーションのコピー) を参照ください。
- また、ランゲージコマンド ([SET UPDATE FOLDER](https://doc.4d.com/4Dv18/4D/18/SET-UPDATE-FOLDER.301-4505379.ja.html)、および [RESTART 4D](https://doc.4d.com/4Dv18/4D/18/RESTART-4D.301-4505382.ja.html)) を使用して、サーバーアプリケーションの更新を自動化することも可能です



### サーバーアプリケーションをビルド

サーバー部分をビルドするにはこのオプションを選択します。 ビルドに使用する 4D Server アプリケーションの場所を選択する必要があります。 This 4D Server must correspond to the current platform (which will also be the platform of the server application).

#### 4D Server location

Click on the **[...]** button and use the *Browse for folder* dialog box to locate the 4D Server application. macOS では 4D Server パッケージを選択します。

#### 現在のバージョン

生成されるアプリケーションのバージョン番号を指定します。 このバージョン番号をもとに、クライアントアプリケーションからの接続を受け入れたり拒否したりできます。 The interval of compatibility for client and server applications is set using specific [XML keys](#build-application-settings)).

#### Data linking mode

This option lets you choose the linking mode between the merged application and the local data file. 二種類のリンクモードから選択可能です:

*   **アプリケーション名** (デフォルト) - このモードでは、4D アプリケーションはストラクチャーファイルに対応する、最後に開かれたデータファイルを開きます。 このモードではアプリケーションパッケージをディスク上で自由に移動させることができます。 アプリケーションを複製する場合を除いて、通常は組み込みアプリに対してこのモードが使用されるべきです。

*   **アプリケーションパス** - このモードでは、組み込み 4D アプリケーションは自身に紐づいている *lastDataPath.xml* ファイルを解析して、起動アプリのフルパスに合致する "executablePath" 属性を持つデータパスマップのエントリーを探し、 同エントリー内で "dataFilePath" 属性で定義されているデータファイルを開きます。 Otherwise, the last opened data file is opened (default mode).

For more information about the data linking mode, refer to the [Last data file opened](#last-data-file-opened) section.


### Build client application

Checking this option generates the client part of your application during the building phase.

#### 4D Volume Desktop

You must designate the location on your disk of the 4D Volume Desktop application to be used. この 4D Volume Desktop はビルドをおこなうプラットフォームに対応していなければなりません。 異なるプラットフォーム用のクライアントアプリケーションをビルドするには、そのプラットフォームで 4D アプリケーションを実行し、追加のビルド処理をしなければなりません。 これはクライアントアプリケーションの最初のバージョンをビルドするときのみ必要です。自動アップデート機構を利用することで、それ以降のアップデートは同じプラットフォーム上から管理することができます。 詳細については [サーバーやクライアントフォルダーのカスタマイズ](#サーバーやクライアントフォルダーのカスタマイズ) を参照ください。

> 4D Volume Desktop のバージョン番号は、4D Developer のバージョン番号と合致する必要があります。 たとえば、4D Developer の v18 を利用していれば、4D Volume Desktop v18 が必要です。

クライアントアプリから特定のアドレスを使用して (サブネットワーク上にサーバー名が公開されていない) サーバーに接続したい場合、buildapp.4DSettings ファイル内の `IPAddress` XML キーを使用する必要があります。 この点についてのより詳細な情報については、[BUILD APPLICATION](https://doc.4d.com/4Dv18/4D/18/BUILD-APPLICATION.301-4505371.ja.html) コマンドを参照してください。 接続失敗時の特定の機構を実装することもできます。 The different scenarios proposed are described in the [Management of connections by client applications](#management-of-client-connections) paragraph.

#### Copy of client applications in the server application

The options of this area to set up the mechanism for updating the client parts of your client/server applications using the network each time a new version of the application is generated.

- **Allow automatic update of Windows client application** - Check these options so that your Windows client/server application can take advantage of the automatic update mechanism for clients via the network.
- **Allow automatic update of Macintosh client application** - Check these options so that your Macintosh client/server application can take advantage of the automatic update mechanism for clients via the network.

*   **Allow automatic update of Macintosh client application** - If you want to create a cross-platform client application, you must designate the location on your disk of the 4D Volume Desktop application that corresponds to the “concurrent” platform of the build platform.

    For example, if you build your application in Windows, you must use the **[...]** button to designate the 4D Volume Desktop macOS application (provided as a package).



#### Displaying update notification

The client application update notification is carried out automatically following the server application update.

It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the **Upgrade4DClient** subfolder of the **ApplicationName** Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a .*4darchive* update file is available for each platform:

To trigger client application update notifications, simply replace the old version of the server application with the new one and then execute it. The rest of the process is automatic.

On the client side, when the “old” client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. The user can either update their version or cancel the dialog box.

*   If the user clicks **OK**, the new version is downloaded to the client machine over the network. ダウンロードが完了すると古いクライアントアプリケーションが閉じられて、新しいバージョンが起動しサーバーに接続します。 The old version of the application is then placed in the machine’s recycle bin.
*   If the user clicks **Cancel**, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. Otherwise (by default), the connection is established.

#### Forcing automatic updates

In some cases, you may want to prevent client applications from being able to cancel the update download. For example, if you used a new version of the 4D Server source application, the new version of the client application must absolutely be installed on each client machine.

To force the update, simply exclude the current version number of client applications (X-1 and earlier) in the version number range compatible with the server application. すると、未更新クライアントからの接続は更新メカニズムによって拒否されます。 For example, if the new version of the client-server application is 6, you can stipulate that any client application with a version number lower than 6 will not be allowed to connect.

The [current version number](build-server-application) is set on the Client/Server page of the Build Application dialog box. The intervals of authorized numbers are set in the application project using specific [XML keys](#build-application-settings).


#### Update Error

If 4D cannot carry out the update of the client application, the client machine displays the following error message: “The update of the client application failed. The application is now going to quit.”

There are many possible causes for this error. When you get this message, it is advisable to check the following parameters first off:

*   **Pathnames** - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example *ClientMacFolderToWin*). More particularly, check the pathnames to the versions of 4D Volume Desktop.
*   **Read/write privileges** - On the client machine, check that the current user has write access rights for the client application update.


### Generated files

Once a client/server application is built, you will find a new folder in the destination folder named **Client Server executable**. This folder contains two subfolders, *\<ApplicationName>Client* and *\<ApplicationName>Server*.
> These folders are not generated if an error occurs. In this case, open the [log file](#log-file) in order to find out the cause of the error.

The *\<ApplicationName>Client* folder contains the client portion of the application corresponding to the execution platform of the application builder. このフォルダーを各クライアントにインストールします。 The *\<ApplicationName>Server* folder contains the server portion of the application.

The contents of these folders vary depending on the current platform:

*   *Windows* - Each folder contains the application executable file, named *\<ApplicationName>Client.exe* for the client part and *\<ApplicationName>Server.exe* for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.
*   *macOS* - Each folder contains only the application package, named \<ApplicationName> Client for the client part and \<ApplicationName> Server for the server part. 各パッケージには動作に必要なすべてのファイルが含まれます。 Under macOS, launch a package by double-clicking it.

    > The macOS packages built contain the same items as the Windows subfolders. You can display their contents (**Control+click** on the icon) in order to be able to modify them.

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





## Plugins & components page

On this tab, you set each [plug-in](Concepts/plug-ins.md) and each [component](Concepts/components.md) that you will use in your stand-alone or client/server application.

The page lists the elements loaded by the current 4D application:

![](assets/en/Project/buildapppluginsProj.png)

*    **Active** column - Indicates that the items will be integrated into the application package built. デフォルトですべての項目が選択されています。 To exclude a plug-in or a component, deselect the check box next to it.

*   **Plugins and components** column - Displays the name of the plug-in/component.

*   **ID** column - Displays the plug-in/component's identification number (if any).

*   **Type** column - Indicates the type of item: plug-in or component.

If you want to integrate other plug-ins or components into the executable application, you just need to place them in a **PlugIns** or **Components** folder next to the 4D Volume Desktop application or next to the 4D Server application. The mechanism for copying the contents of the source application folder (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)) can be used to integrate any type of file into the executable application.

If there is a conflict between two different versions of the same plug-in (one loaded by 4D and the other located in the source application folder), priority goes to the plug-in installed in the 4D Volume Desktop/4D Server folder. However, if there are two instances of the same component, the application will not open.
> The use of plug-ins and/or components in a deployment version requires the necessary license numbers.






## Licenses & Certificate page

The Licences & Certificate page can be used to:

*   designate the license number(s) that you want to integrate into your single-user stand-alone application
*   sign the application by means of a certificate in macOS.

![](assets/en/Admin/buildappCertif.png)

### Licenses

This tab displays the list of available deployment licenses that you can integrate into your application. デフォルトでリストは空です。 You must explicitly add your *4D Developer Professional* license as well as each *4D Desktop Volume* license to be used in the application built. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.

To remove or add a license, use the **[+]** and **[-]** buttons at the bottom of the window.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine. For more information about the location of this folder, refer to the [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) command.

You must designate the files that contain your Developer license as well as those containing your deployment licenses. These files were generated or updated when the *4D Developer Professional* license and the *4D Desktop Volume* licenses were purchased.

Once you have selected a file, the list will indicate the characteristics of the license that it contains.

*   **License #** - Product license number
*   **License** - Name of the product
*   **Expiration date** - Expiration date of the license (if any)
*   **Path** -  Location on disk

If a license is not valid, a message will warn you.

You can designate as many valid files as you want. When building an executable application, 4D will use the most appropriate license available.
> Dedicated "R" licenses are required to build applications based upon "R-release" versions (license numbers for "R" products start with "R-4DDP").

After the application is built, a new deployment license file is automatically included in the Licenses folder next to the executable application (Windows) or in the package (macOS).


### OS X signing certificate

The application builder can sign merged 4D applications under macOS (single-user applications, 4D Server and client parts under macOS). Signing an application authorizes it to be executed using the Gatekeeper functionality of macOS when the "Mac App Store and identified Developers" option is selected (see "About Gatekeeper" below).

- Check the **Sign application** option to include certification in the application builder procedure for OS X. 4D will check the availability of elements required for certification when the build occurs:

![](assets/en/Admin/buildapposxcertProj.png)

This option is displayed under both Windows and macOS, but it is only taken into account for macOS versions.

*   **Name of certificate** - Enter the name of your developer certificate validated by Apple in this entry area. The certificate name is usually the name of the certificate in the Keychain Access utility (part in red in the following example):

![](assets/en/Project/certificate.png)

To obtain a developer certificate from Apple, Inc., you can use the commands of the Keychain Access menu or go here: [http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html).
> This certificate requires the presence of the Apple codesign utility, which is provided by default and usually located in the “/usr/bin/” folder. If an error occurs, make sure that this utility is present on your disk.

* **Generate self-signed certificate** - runs the "Certificate Assistant" that allows you to generate a self-signed certificate. Apple 社のデベロッパー認証を持たない場合には、自己署名証明書を提供する必要があります。 この証明書を使うと、アプリケーションを内部的に運用する場合に警告が表示されません。 アプリケーションを外部で運用する場合 (http やメールを介した場合) には、アプリケーションの開発者が不明であるという警告が macOS での起動時に表示されます。 その場合でもユーザーはアプリケーションを "強制的" に起動することができます。 <p>In the "Certificate Assistant", be sure to select the appropriate options: ![](assets/en/Admin/Cert1.png) ![](assets/en/Admin/Cert2.png)

> 4D recommends to subscribe to the Apple Developer Program to get access to Developer Certificates that are necessary to notarize applications (see below).



#### About Gatekeeper

Gatekeeper is a security feature of OS X that controls the execution of applications downloaded from the Internet. If a downloaded application does not come from the Apple Store or is not signed, it is rejected and cannot be launched.

The **Sign application** option of the 4D application builder lets you generate applications that are compatible with this option by default.


#### About Notarization

Application notarization is highly recommended by Apple as of macOS 10.14.5 (Mojave) and 10.15 (Catalina), since non-notarized applications deployed via the internet are blocked by default.

In 4D v18, the [built-in signing features](#os-x-signing-certificate) have been updated to meet all of Apple's requirements to allow using the Apple notary service. 公証自体はデベロッパーによっておこなわなくてはいけないもので、4D とは直接関係ありません。なお、Xcode のインストールが必須である点に注意してください。 Please refer to [this 4D blog post](https://blog.4d.com/how-to-notarize-your-merged-4d-application/) that provides a step-by-step description of the notarization process.

For more information on the notarization concept, please refer to [this page on the Apple developer website](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).

## Customizing application icons

4D associates a default icon with stand-alone, server, and client applications, however you can customize the icon for each application.

*   **macOs** - When building a double-clickable application, 4D handles the customizing of the icon. In order to do this, you must create an icon file (icns type), prior to building the application file, and place it next to the project folder.
> Apple, Inc. provides a specific tool for building *icns* icon files (for more information, please refer to [Apple documentation](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).

    Your icon file must have the same name as the project file and include the *.icns* extension. 4D automatically takes this file into account when building the double-clickable application (the *.icns* file is renamed *ApplicationName.icns* and copied into the Resources folder; the *CFBundleFileIcon* entry of the *info.plist* file is updated).

*   **Windows** - When building a double-clickable application, 4D handles the customizing of its icon. In order to do this, you must create an icon file (*.ico* extension), prior to building the application file, and place it next to the project folder.

    Your icon file must have the same name as the project file and include the *.ico* extension. 4D automatically takes this file into account when building the double-clickable application.

You can also set specific [XML keys](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) in the buildApp.4DSettings file to designate each icon to use. The following keys are available:

- RuntimeVLIconWinPath
- RuntimeVLIconMacPath
- ServerIconWinPath
- ServerIconMacPath
- ClientMacIconForMacPath
- ClientWinIconForMacPath
- ClientMacIconForWinPath
- ClientWinIconForWinPath



## Management of data file(s)

### Opening the data file

When a user launches a merged application or an update (single-user or client/server applications), 4D tries to select a valid data file. Several locations are examined by the application successively.

The opening sequence for launching a merged application is:

1. 4D tries to open the last data file opened, [as described below](#last-data-file-opened) (not applicable during initial launch).
2. If not found, 4D tries to open the data file in a default data folder next to the .4DZ file in read-only mode.
3. If not found, 4D tries to open the standard default data file (same name and same location as the .4DZ file).
4. If not found, 4D displays a standard "Open data file" dialog box.


### Last data file opened

#### Path of last data file
Any standalone or server applications built with 4D stores the path of the last data file opened in the application's user preferences folder.

The location of the application's user preferences folder corresponds to the path returned by the following statement:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

The data file path is stored in a dedicated file, named *lastDataPath.xml*.

Thanks to this architecture, when you provide an update of your application, the local user data file (last data file used) is opened automatically at first launch.

This mechanism is usually suitable for standard deployments. However, for specific needs, for example if you duplicate your merged applications, you might want to change the way that the data file is linked to the application (described below).

#### Configuring the data linking mode

With your compiled applications, 4D automatically uses the last data file opened. By default, the path of the data file is stored in the application's user preferences folder and is linked to the **application name**.

This may be unsuitable if you want to duplicate a merged application intended to use different data files. Duplicated applications actually share the application's user preferences folder and thus, always use the same data file -- even if the data file is renamed, because the last file used for the application is opened.

4D therefore lets you link the data file path to the application path. このとき、データファイルは特定のパスを使用してリンクされるので、最後に開かれたファイルであるかは問われません。 You therefore link your data **by application path**.

This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).


*Duplication when data linked by application name:* ![](assets/en/Project/datalinking1.png)

*Duplication when data linked by application path:* ![](assets/en/Project/datalinking2.png)

You can select the data linking mode during the build application process. You can either:

- Use the [Application page](#application) or [Client/Server page](#client-server) of the Build Application dialog box.
- Use the **LastDataPathLookup** XML key (single-user application or server application).


### Defining a default data folder

4D allows you to define a default data file at the application building stage. アプリケーションの初回起動時に、開くべきローカルデータファイルが見つからなかった場合 (前述の [オープニングシーケンス](#データファイルを開く)参照)、デフォルトのデータファイルが読み込み専用モードで自動的に開かれます。 This gives you better control over data file creation and/or opening when launching a merged application for the first time.

More specifically, the following cases are covered:

- Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.
- Allowing the distribution of merged applications with read-only data (for demo applications, for instance).


To define and use a default data file:

- You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the database project folder. このデフォルトのデータファイルには必要なファイルもすべて揃っている必要があります: インデックス (.4DIndx)、外部BLOB、ジャーナル、他。 必ず、有効なデフォルトデータファイルを用意するようにしてください。 Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.
- When the application is built, the default data folder is integrated into the merged application. All files within this default data folder are also embedded.

The following graphic illustrates this feature:

![](assets/en/Project/DefaultData.png)

When the default data file is detected at first launch, it is silently opened in read-only mode, thus allowing you to execute any custom operations that do not modify the data file itself.


## Management of client connection(s)

The management of connections by client applications covers the mechanisms by which a merged client application connects to the target server, once it is in its production environment.

### Connection scenario

The connection procedure for merged client applications supports cases where the dedicated server is not available. The startup scenario for a 4D client application is the following:

- The client application tries to connect to the server using the discovery service (based upon the server name, broadcasted on the same subnet).  
  OR  
  If valid connection information is stored in the "EnginedServer.4DLink" file within the client application, the client application tries to connect to the specified server address.
- If this fails, the client application tries to connect to the server using information stored in the application's user preferences folder ("lastServer.xml" file, see last step).
- If this fails, the client application displays a connection error dialog box.
    - If the user clicks on the **Select...** button (when allowed by the 4D developer at the build step, see below), the standard "Server connection" dialog box is displayed.
    - If the user clicks on the **Quit** button, the client application quits.
- If the connection is successful, the client application saves this connection information in the application's user preferences folder for future use.

### Storing the last server path

The last used and validated server path is automatically saved in a file named "lastServer.xml" in the application's user preferences folder. This folder is stored at the following location:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

This mechanism addresses the case where the primary targeted server is temporary unavailable for some reason (maintenance mode for example). こういった状態が初めて起こったときにはサーバー選択ダイアログボックスが表示され (ただし許可されていた場合に限ります、後述参照)、ほかのサーバーをユーザーが手動で選択すると、その接続が成功した場合にはそのパスが保存されます。 Any subsequent unavailability would be handled automatically through the "lastServer.xml" path information.

> - When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) key in the "BuildApp.4DSettings" file. このメカニズムはあくまで一時的な接続不可状態の場合を想定しています。  
> - Pressing the **Alt/Option** key at startup to display the server selection dialog box is still supported in all cases.



### Availability of the server selection dialog box in case of error

You can choose whether or not to display the standard server selection dialog box on merged client applications when the server cannot be reached. The configuration depends on the value of the [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) XML key on the machine where the application was built:

- **Display of an error message with no access possible to the server selection dialog box**. デフォルトの挙動です。 The application can only quit.  
  `ServerSelectionAllowed`: **False** or key omitted ![](assets/en/Project/connect1.png)

- **Display of an error message with access to the server selection dialog box possible**. The user can access the server selection window by clicking on the **Select...** button.   
  `ServerSelectionAllowed`: **True** ![](assets/en/Project/connect2.png) ![](assets/en/Project/connect3.png)
