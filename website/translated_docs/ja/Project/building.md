---
id: building
title: プロジェクトパッケージのビルド
---

4D Developer にはプロジェクトパッケージ (ファイナルビルド) を作成するためのアプリケーションビルダーが統合されています。 このビルダーを使用すれば、コンパイルされた 4D アプリケーションの展開を簡易化することができます。 OS ごとに異なる特定の処理を自動で処理し、クライアント/サーバーアプリケーションの展開が容易になります。

アプリケーションビルダーでは以下のことを行えます:

* インタープリターコードを含まないコンパイル済みアプリケーションのビルド
* ダブルクリックで起動可能なスタンドアロンアプリケーションのビルド (4D のデータベースエンジンである 4D Volume Desktop を組み込んだ 4D アプリケーション)
* XML形式のプロジェクトファイル定義を用いて、同じコンパイル済みデータベースから異なるアプリケーションのビルド
* クライアント/サーバーアプリケーションのビルド
* クライアントとサーバーの自動更新機能を備えたクライアント/サーバーアプリケーションのビルド
* ビルド設定の保存 (*設定保存* ボタン)

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

アプリケーションビルドに関わる各パラメーター設定は XML キーの形で、"buildApp.4DSettings" という名称のアプリケーションプロジェクトファイルに保存されます。この XML ファイルはデータベースの Settings フォルダーに配置されます。

アプリケーションビルドダイアログが初めて表示されるときにはデフォルトパラメーターが使用されます。 **ビルド** ボタンや **設定保存** ボタンをクリックすると、このプロジェクトファイルの内容が更新されます。 同じデータベースについて内容の異なる複数の XML ファイルを定義し、[BUILD APPLICATION](https://doc.4d.com/4Dv18/4D/18/BUILD-APPLICATION.301-4505371.ja.html) コマンドでそれらを使い分けることができます。

また、XML キーを使用すれば、アプリケーションビルドダイアログには表示されない追加の設定をおこなうことができます。 詳細は専用のドキュメント [アプリケーションビルド設定ファイル](https://doc.4d.com/4Dv18/4D/18/4D-XML-Keys-BuildApplication.100-4670981.ja.html) を参照してください。

### Log file

アプリケーションをビルドすると、4D はログファイルを生成して **Logs** フォルダーに保存します。 ログファイルにはビルド毎に以下の情報が書き込まれます:

- ターゲットビルドの開始と終了
- 生成されたファイルの名称とフルパス
- ビルドの日付と時刻
- 発生したエラー

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

このオプションを選択すると、データベースに関連するフォルダーが、Build フォルダーの *Components* および *Resources* フォルダーにコピーされます。 これらのフォルダーに関する情報は [データベースアーキテクチャー ](https://doc.4d.com/4Dv18/4D/18/Description-of-4D-files.300-4575698.ja.html#4671957) を参照してください。

### コンポーネントをビルド

ストラクチャーからコンパイル済みコンポーネントをビルドします。

コンポーネントは特定の機能を実装した標準の 4D プロジェクトです。 ビルドされたコンポーネントを他の 4D データベース (ホストデータベース) にインストールすると、ホストデータベースはその機能を利用できるようになります。 コンポーネントに関する詳細は [4D コンポーネントの開発とインストール](https://doc.4d.com/4Dv18/4D/18/Developing-and-installing-4D-components.200-4575436.ja.html) を参照してください。

アプリケーション名を *MyComponent* に指定した場合、4D は Components フォルダーを作成し、その中に *MyComponent.4dbase* フォルダーを生成します:

<

p>*\<destination>/Components/MyComponent.4dbase/*

*MyComponent.4dbase* フォルダーには次のファイルが含まれます: - *MyComponent.4DZ* ファイル - *Resources* フォルダー: 関連リソースは自動的にこフォルダーにコピーされます。 コンポーネントは他のコンポーネントやプラグインを使用できないため、その他の "Components" や "Plugins" フォルダーはコピーされません。

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

* *Windows* では: 4D Volume Desktop.4DE や 4D Volume Desktop.RSR、その他動作に必要なファイルやフォルダーを含むフォルダーを選択します。 
* *macOS* では: ソフトウェアパッケージとして 4D Volume Desktop が提供されているので、このパッケージを選択します。

4D Volume Desktop フォルダーを選択するには **[...]** ボタンをクリックします。 フォルダーを選択するダイアログが表示されたら、4D Volume Desktop フォルダー (Windows) またはパッケージ (macOS) を選択します。

フォルダーが選択されるとその完全パス名が表示され、そこに 4D Volume Desktop が含まれていればビルドボタンが有効になります:

> 4D Volume Desktop のバージョン番号は、4D Developer のバージョン番号と合致する必要があります。 たとえば、4D Developer の v18 を利用していれば、4D Volume Desktop v18 が必要です。

#### データリンクモードの基準

このオプションを使って、組み込みアプリケーションとローカルデータファイルとのリンクモードを選択します。 二種類のリンクモードから選択可能です:

* **アプリケーション名** (デフォルト) - このモードでは、4D アプリケーションはストラクチャーファイルに対応する、最後に開かれたデータファイルを開きます。 このモードではアプリケーションパッケージをディスク上で自由に移動させることができます。 アプリケーションを複製する場合を除いて、通常は組み込みアプリに対してこのモードが使用されるべきです。

* **アプリケーションパス** - このモードでは、組み込み 4D アプリケーションは自身に紐づいている *lastDataPath.xml* ファイルを解析して、起動アプリのフルパスに合致する "executablePath" 属性を持つデータパスマップのエントリーを探し、 同エントリー内で "dataFilePath" 属性で定義されているデータファイルを開きます。 

データリンクモードについての詳細は [最後に開いたデータファイル](#last-data-file-opened) を参照してください。

#### 生成されるファイル

**ビルド** ボタンをクリックすると、4D は **保存先フォルダー** に **Final Application** フォルダーを作成し、 その中に指定したアプリケーション名のサブフォルダーを作成します。

アプリケーション名に "MyProject"と指定した場合、MyProject サブフォルダー内には以下のファイルが置かれます:

* *Windows*
    
    * MyProject.exe - 実行可能ファイル、そして MyProject.rsr (アプリケーションリソースファイル)
    * 4D Extensions および Resources フォルダー、さまざまなライブラリ (DLL)、 Native Components フォルダー、SASL Plugins フォルダーなど、アプリケーション実行に必要なファイル
    * Databaseフォルダー: Resources フォルダーと MyProject.4DZ ファイルが格納されています。 これらはデータベースのコンパイル済みストラクチャーおよびデータベースの Resources フォルダーです。 **注**: このフォルダには、定義されていれば *Default Data* フォルダーも含まれています ([最終アプリケーションでのデータファイルの管理](#data-file-management-in-final-applicatons)を参照してください)。
    * (オプション) データベースに含まれるコンポーネントやプラグインが配置された Components フォルダーおよび Plugins フォルダー。 この点に関する詳細は [プラグイン & コンポーネントページ](#plugins-and-components)を参照してください。
    * Licenses フォルダー - アプリケーションに統合されたライセンス番号の XML ファイルが含まれます。 この点に関する詳細は [ライセンス & 証明書ページ](#licenses-and-certificate) を参照してください。 
    * 4D Volume Desktop フォルダーに追加されたその他の項目 (あれば)([4D Volume Desktopフォルダーのカスタマイズ](#customizing-4d-volume-desktop-folder) 参照)
    
    実行ファイルの動作には、これらすべての項目が同じフォルダー内に必要です。

* *macOS*
    
    - MyProject.app という名称のソフトウェアパッケージに、プラグインやコンポーネント、ライセンスなど必要な項目がすべて格納されます。 プラグインやコンポーネントの統合に関する詳細は [プラグイン & コンポーネントページ](#plugins-and-components) を参照してください。 ライセンスの統合に関しては [ライセンス & 証明書ページ](#licenses-and-certificate) を参照してください。 **注**: macOSでは、4D ランゲージの [Application file](https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html) コマンドが返すのは、ソフトウェアパッケージ内の "Contents:macOS" フォルダー内にコピーされる ApplicationName ファイルのパス名です (ソフトウェアパッケージの "Contents:Resources" フォルダー内の .comp ファイルのパスではありません)。 

#### 4D Volume Desktop フォルダーのカスタマイズ 

ダブルクリックで起動可能なアプリケーションをビルドする際、4D は 4D Volume Desktop フォルダーの内容を *Final Application* 内のアプリケーション名サブフォルダーにコピーします。 必要に応じて、このコピー元である 4D Volume Desktop フォルダーの内容をカスタマイズすることできます。 たとえば:

* 特定の言語バージョンに対応する 4D Volume Desktop をインストールする
* カスタムプラグインを *Plugins* フォルダーに置く
* *Resources* フォルダーの内容をカスタマイズする

> macOS では、4D Volume Desktop はソフトウェアパッケージ形式で提供されています。 内容を変更するにはパッケージを開きます (アイコンを **Control+click**)。

#### Web ファイルの場所

ダブルクリックで起動可能なアプリケーションを Web サーバーとして使用する場合、Web フォルダーやファイルは特定の場所にインストールする必要があります: 

* *cert.pem* と *key.pem* ファイル (オプション): これらのファイルはSSL接続とデータ暗号化コマンドに使用されます。
* デフォルト Web ルートフォルダー

インストール場所:

- **Windows**: *Final Application\MyProject\Database* サブフォルダー内
- **macOS**: *MyProject.app* ソフトウェアパッケージと同階層

## クライアント/サーバーページ

このページでは、クライアントの自動更新もサポートできるクロスプラットフォームなクライアント/サーバーアプリケーションをビルドするための設定をおこないます。

![](assets/en/Project/buildappCSProj.png)

### クライアント/サーバーアプリケーションとは

クライアント/サーバーアプリケーションは、以下の3つの項目の組み合わせから成ります:

- コンパイルされた 4D データベース
- 4D Server アプリケーション
- 4D Volume Desktop アプリケーション (macOS / Windows)

ビルドを行うと、クライアント/サーバーアプリケーションは2つのカスタマイズされたパーツ (サーバーと、各クライアントマシンにインストールするクライアント) で構成されます。

ビルドされたクライアント/サーバーアプリケーションは起動や接続処理が簡易です:

- サーバーを起動するには、サーバーアプリケーションをダブルクリックします。 データベースを選択する必要はありません。
- クライアントを起動するにも、同様にクライアントアプリケーションをダブルクリックします。すると、サーバーアプリケーションへの接続が直接おこなわれるため、 接続ダイアログでサーバーを選択する必要はありません。 クライアントは接続対象のサーバーを名称 (サーバーが同じサブネットワーク上にある場合)、あるいはIPアドレスによって認識します。IPアドレスの指定は buildapp.4DSettings ファイル内の `IPAddress` XMLキーを使用して設定されます。 接続が失敗した場合のために、代替機構を実装することができます。これについては [クライアントアプリケーションによる接続の管理](#management-of-client-connections) の章で説明されています。 また、**Option** (macOS) や **Alt** (Windows) キーを押しながらクライアントアプリケーション起動すると、標準の接続ダイアログを強制的に表示させることもできます。 サーバーアプリケーションには、対応するクライアントアプリケーションのみが接続できます。 標準の 4D アプリケーションを使用してサーバーアプリケーションに接続を試みると、接続は拒否されエラーが返されます。
- クライアント側をネットワーク越しに自動更新するようにクライアント/サーバーアプリケーションを設定することも可能です。この点については [サーバーアプリケーション内部のクライアントアプリケーションのコピー](#copy-of-client-applications-in-the-server-application) を参照ください。
- また、ランゲージコマンド ([SET UPDATE FOLDER](https://doc.4d.com/4Dv18/4D/18/SET-UPDATE-FOLDER.301-4505379.ja.html)、および [RESTART 4D](https://doc.4d.com/4Dv18/4D/18/RESTART-4D.301-4505382.ja.html)) を使用して、サーバーアプリケーションの更新を自動化することも可能です

### サーバーアプリケーションをビルド

サーバー部分をビルドするにはこのオプションを選択します。 ビルドに使用する 4D Server アプリケーションの場所を選択する必要があります。 この 4D Server はビルドをおこなうプラットフォームに対応していなければなりません (たとえば、Windows 用のサーバーアプリケーションをビルドするには Windows 上でビルドを実行する必要があり、Windows 版の 4D Server アプリケーションを指定する必要があります)。

#### 4D Server の場所

4D Server フォルダーを選択するには**[...]**ボタンをクリックします。 macOS では 4D Server パッケージを選択します。

#### 現在のバージョン

生成されるアプリケーションのバージョン番号を指定します。 このバージョン番号をもとに、クライアントアプリケーションからの接続を受け入れたり拒否したりできます。 クライアントとサーバーアプリケーションで互換性のある番号の範囲は [XML キー](#build-application-settings) で設定します。

#### データリンクモードの基準

このオプションを使って、組み込みアプリケーションとローカルデータファイルとのリンクモードを選択します。 二種類のリンクモードから選択可能です:

* **アプリケーション名** (デフォルト) - このモードでは、4D アプリケーションはストラクチャーファイルに対応する、最後に開かれたデータファイルを開きます。 このモードではアプリケーションパッケージをディスク上で自由に移動させることができます。 アプリケーションを複製する場合を除いて、通常は組み込みアプリに対してこのモードが使用されるべきです。

* **アプリケーションパス** - このモードでは、組み込み 4D アプリケーションは自身に紐づいている *lastDataPath.xml* ファイルを解析して、起動アプリのフルパスに合致する "executablePath" 属性を持つデータパスマップのエントリーを探し、 同エントリー内で "dataFilePath" 属性で定義されているデータファイルを開きます。 

データリンクモードについての詳細は [最後に開いたデータファイル](#last-data-file-opened) を参照してください。

### クライアントアプリケーションをビルド

クライアント部分をビルドするにはこのオプションを選択します。

#### 4D Volume Desktop の場所

ビルドに使用する 4D Volume Desktop アプリケーションの場所を選択する必要があります。 この 4D Volume Desktop はビルドをおこなうプラットフォームに対応していなければなりません。 異なるプラットフォーム用のクライアントアプリケーションをビルドするには、そのプラットフォームで 4D アプリケーションを実行し、追加のビルド処理をしなければなりません。 これはクライアントアプリケーションの最初のバージョンをビルドするときのみ必要です。自動アップデート機構を利用することで、それ以降のアップデートは同じプラットフォーム上から管理することができます。 詳細については [4D Serverや4Dクライアントフォルダーのカスタマイズ](#customizing-4d-server-and-or-4d-client-folders) を参照ください。

> 4D Volume Desktop のバージョン番号は、4D Developer のバージョン番号と合致する必要があります。 たとえば、4D Developer の v18 を利用していれば、4D Volume Desktop v18 が必要です。

クライアントアプリから特定のアドレスを使用して (サブネットワーク上にサーバー名が公開されていない) サーバーに接続したい場合、buildapp.4DSettings ファイル内の `IPAddress` XML キーを使用する必要があります。 この点についてのより詳細な情報については、[BUILD APPLICATION](https://doc.4d.com/4Dv18/4D/18/BUILD-APPLICATION.301-4505371.ja.html) コマンドを参照してください。 接続失敗時の特定の機構を実装することもできます。 詳細は [クライアントアプリケーションによる接続の管理](#management-of-client-connections) で説明されています。

#### サーバーアプリケーション内部のクライアントアプリケーションのコピー

このエリアのオプションを使用して、クライアント/サーバーアプリケーションの新しいバージョンがビルドされた際の、ネットワーク越しにクライアントを自動更新するメカニズムを設定できます。

- **Windows クライアントアプリケーションの自動更新を有効にする** - このオプションを選択すると、ネットワーク越しの Windows クライアントの自動更新を有効にすることができます。 
- **macOS クライアントアプリケーションの自動更新を有効にする** - このオプションを選択すると、ネットワーク越しの macOS クライアントの自動更新を有効にすることができます。

- クロスプラットフォームなクライアントアプリケーションの場合には、ビルドをおこなうマシンとは別のプラットフォーム用の 4D Volume Desktop アプリケーションの場所を選択する必要があります。
    
    たとえば Windows 上で **[...]** ボタンをクリックし、macOS 用の 4D Volume Desktop.app フォルダーを選択します。

#### 更新通知の表示

サーバーが更新されると、各クライアントマシン上に自動で更新通知がおこなわれます。

これは次のように動作します: クライアント/サーバーアプリケーションの新しいバージョンをビルドする際、新しいクライアントは **ApplicationName** Server フォルダー内の **Upgrade4DClient** サブフォルダーに圧縮して格納されます (macOSでは、これらのフォルダーはサーバーパッケージ内に配置されます)。 クロスプラットフォームのクライアントアプリケーションを生成した場合には、各プラットフォーム用に *.4darchive* という更新ファイルが格納されます:

クライアントアプリケーションに更新を通知するには、古いサーバーアプリケーションを新しいバージョンで置き換えて起動します。 あとの処理は自動でおこなわれます。

古いバージョンのクライアントが、更新されたサーバーに接続を試みると、新しいバージョンが利用可能である旨を伝えるダイアログがクライアントマシン上に表示されます。 ユーザーはバージョンを更新するか、ダイアログをキャンセルできます。

* ユーザーが **OK** をクリックすると、新バージョンがネットワーク越しにクライアントマシンにダウンロードされます。 ダウンロードが完了すると古いクライアントアプリケーションが閉じられて、新しいバージョンが起動しサーバーに接続します。 古いバージョンはゴミ箱に移動されます。
* ユーザーが **キャンセル** をクリックすると、更新手続きはキャンセルされます。古いクライアントのバージョンがサーバーの許可する範囲外であれば (後述参照)、アプリケーションは閉じられて、接続することはできません。 そうでなければ接続が行われます。

#### 自動更新の強制

更新のダウンロードをキャンセルさせたくない場合、 たとえば新しいメジャーバージョンの 4D Server を使用するような場合、新しいバージョンのクライアントアプリケーションを各クライアントマシンに必ずインストールしなければなりません。

更新を強制するには、サーバーアプリケーションと互換性のあるバージョン番号の範囲からクライアントアプリケーションの現バージョン番号を除外します。 すると、未更新クライアントからの接続は更新メカニズムによって拒否されます。 たとえば、クライアントサーバーアプリケーションの新しいバージョン番号がの 6 の場合、バージョン番号が 5 以下のクライアントアプリケーションを許可しないようにできます。

[現在のバージョン](build-server-application) はアプリケーションビルドダイアログのクライアント/サーバーページで設定できます (前述)。 接続を許可するバージョン番号の範囲は [XML キー](#build-application-settings) で設定します。

#### エラーが発生する場合

クライアントアプリケーションの更新を実行できなかった場合、クライアントマシンには次のメッセージが表示されます: "クライアントアプリケーションの更新に失敗しました。 アプリケーションは終了します。"

このエラーが発生する原因は複数ありえます。 このエラーが表示されるような場合は、まず次の点をチェックしてみてください:

* **パス名** - アプリケーションビルドダイアログや XML キー (たとえば *ClientMacFolderToWin*) で指定されたパス名の有効性をチェックしてください。 とくに 4D Volume Desktop へのパスをチェックしてください。
* **読み書き権限** - クライアントマシン上でカレントユーザーがクライアントアプリケーションを更新する書き込みアクセス権を持っているか確認してください。

### 生成されるファイル

クライアント/サーバーアプリケーションをビルドすると、保存先フォルダー内に **Client Server executable** という名前の新しいフォルダーが作成されます。 このフォルダーにはさらに2つのサブフォルダー、 *\<ApplicationName> Client* と *\<ApplicationName> Server* があります。

> エラーが発生した場合これらのフォルダーは作成されません。 In this case, open the [log file](#log-file) in order to find out the cause of the error.

The *\<ApplicationName>Client* folder contains the client portion of the application corresponding to the execution platform of the application builder. This folder must be installed on each client machine. The *\<ApplicationName>Server* folder contains the server portion of the application.

The contents of these folders vary depending on the current platform:

* *Windows* - Each folder contains the application executable file, named *\<ApplicationName>Client.exe* for the client part and *\<ApplicationName>Server.exe* for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.
* *macOS* - Each folder contains only the application package, named \<ApplicationName> Client for the client part and \<ApplicationName> Server for the server part. Each package contains all the necessary items for the application to work. Under macOS, launch a package by double-clicking it.
    
    >     The macOS packages built contain the same items as the Windows subfolders. You can display their contents (**Control+click** on the icon) in order to be able to modify them. 
    >     

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. This subfolder contains the client application in macOS and/or Windows format as a compressed file. This file is used during the automatic client application update.

#### Customizing 4D Volume Desktop folder

When building a double-clickable application, 4D copies the contents of the 4D Volume Desktop folder into the Final Application subfolder of the destination folder. You are then able to customize the contents of the original 4D Volume Desktop folder according to your needs. You can, for instance:

- Install a 4D Volume Desktop version corresponding to a specific language;
- Add a custom PlugIns folder;
- Customize the contents of the Resources folder.

#### Location of Web files

If the server and/or client part of your double-clickable application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:

- *cert.pem* and *key.pem* files (optional): These files are used for SSL connections and by data encryption commands,
- Default Web root folder (WebFolder).

Items must be installed: * **on Windows** * **Server application** - in the *Client Server executable\ \<ApplicationName>Server\Server Database* subfolder. * **Client application** - in the *Client Server executable\ \<ApplicationName>Client* subfolder.

* **on macOS** 
    * **Server application** - next to the *\<ApplicationName>Server* software package.
    * **Client application** - next to the *\<ApplicationName>Client* software package.

## Plugins & components page

On this tab, you set each [plug-in](Concepts/plug-ins.md) and each [component](Concepts/components.md) that you will use in your stand-alone or client/server application.

The page lists the elements loaded by the current 4D application:

![](assets/en/Project/buildapppluginsProj.png)

* **Active** column - Indicates that the items will be integrated into the application package built. All the items are checked by default. To exclude a plug-in or a component, deselect the check box next to it.

* **Plugins and components** column - Displays the name of the plug-in/component.

* **ID** column - Displays the plug-in/component's identification number (if any).

* **Type** column - Indicates the type of item: plug-in or component.

If you want to integrate other plug-ins or components into the executable application, you just need to place them in a **PlugIns** or **Components** folder next to the 4D Volume Desktop application or next to the 4D Server application. The mechanism for copying the contents of the source application folder (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)) can be used to integrate any type of file into the executable application.

If there is a conflict between two different versions of the same plug-in (one loaded by 4D and the other located in the source application folder), priority goes to the plug-in installed in the 4D Volume Desktop/4D Server folder. However, if there are two instances of the same component, the application will not open.

> The use of plug-ins and/or components in a deployment version requires the necessary license numbers.

## Licenses & Certificate page

The Licences & Certificate page can be used to:

* designate the license number(s) that you want to integrate into your single-user stand-alone application
* sign the application by means of a certificate in macOS.

![](assets/en/Project/buildapplicenseProj.png)

### Licenses

This tab displays the list of available deployment licenses that you can integrate into your application. By default, the list is empty. You must explicitly add your *4D Developer Professional* license as well as each *4D Desktop Volume* license to be used in the application built. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.

To remove or add a license, use the **[+]** and **[-]** buttons at the bottom of the window.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine. For more information about the location of this folder, refer to the [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) command.

You must designate the files that contain your Developer license as well as those containing your deployment licenses. These files were generated or updated when the *4D Developer Professional* license and the *4D Desktop Volume* licenses were purchased.

Once you have selected a file, the list will indicate the characteristics of the license that it contains.

* **License #** - Product license number
* **License** - Name of the product
* **Expiration date** - Expiration date of the license (if any)
* **Path** - Location on disk

If a license is not valid, a message will warn you.

You can designate as many valid files as you want. When building an executable application, 4D will use the most appropriate license available.

> Dedicated "R" licenses are required to build applications based upon "R-release" versions (license numbers for "R" products start with "R-4DDP").

After the application is built, a new deployment license file is automatically included in the Licenses folder next to the executable application (Windows) or in the package (macOS).

### OS X signing certificate

The application builder can sign merged 4D applications under macOS (single-user applications, 4D Server and client parts under macOS). Signing an application authorizes it to be executed using the Gatekeeper functionality of macOS when the "Mac App Store and identified Developers" option is selected (see "About Gatekeeper" below).

- Check the **Sign application** option to include certification in the application builder procedure for OS X. 4D will check the availability of elements required for certification when the build occurs: 

![](assets/en/Project/buildapposxcertProj.png)

This option is displayed under both Windows and macOS, but it is only taken into account for macOS versions.

* **Name of certificate** - Enter the name of your developer certificate validated by Apple in this entry area. The certificate name is usually the name of the certificate in the Keychain Access utility (part in red in the following example):

![](assets/en/Project/certificate.png)

To obtain a developer certificate from Apple, Inc., you can use the commands of the Keychain Access menu or go here: <http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html>.

> This certificate requires the presence of the Apple codesign utility, which is provided by default and usually located in the “/usr/bin/” folder. If an error occurs, make sure that this utility is present on your disk.

#### About Gatekeeper

Gatekeeper is a security feature of OS X that controls the execution of applications downloaded from the Internet. If a downloaded application does not come from the Apple Store or is not signed, it is rejected and cannot be launched.

The **Sign application** option of the 4D application builder lets you generate applications that are compatible with this option by default.

#### About Notarization

Application notarization is highly recommended by Apple as of macOS 10.14.5 (Mojave) and 10.15 (Catalina), since non-notarized applications deployed via the internet are blocked by default.

In 4D v18, the [built-in signing features](#os-x-signing-certificate) have been updated to meet all of Apple's requirements to allow using the Apple notary service. The notarization itself must be conducted by the developer and is independent from 4D. Note also that it requires installing Xcode.

For more information on the notarization, please refer to [this page on the Apple developer website](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).

## Customizing application icons

4D associates a default icon with stand-alone, server, and client applications, however you can customize the icon for each application.

* **macOs** - When building a double-clickable application, 4D handles the customizing of the icon. In order to do this, you must create an icon file (icns type), prior to building the application file, and place it next to the project folder.
    
    > Apple, Inc. provides a specific tool for building *icns* icon files (for more information, please refer to [Apple documentation](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).
    
    Your icon file must have the same name as the project file and include the *.icns* extension. 4D automatically takes this file into account when building the double-clickable application (the *.icns* file is renamed *ApplicationName.icns* and copied into the Resources folder; the *CFBundleFileIcon* entry of the *info.plist* file is updated).

* **Windows** - When building a double-clickable application, 4D handles the customizing of its icon. In order to do this, you must create an icon file (*.ico* extension), prior to building the application file, and place it next to the project folder.
    
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

```code4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

The data file path is stored in a dedicated file, named *lastDataPath.xml*.

Thanks to this architecture, when you provide an update of your application, the local user data file (last data file used) is opened automatically at first launch.

This mechanism is usually suitable for standard deployments. However, for specific needs, for example if you duplicate your merged applications, you might want to change the way that the data file is linked to the application (described below).

#### Configuring the data linking mode

With your compiled applications, 4D automatically uses the last data file opened. By default, the path of the data file is stored in the application's user preferences folder and is linked to the **application name**.

This may be unsuitable if you want to duplicate a merged application intended to use different data files. Duplicated applications actually share the application's user preferences folder and thus, always use the same data file -- even if the data file is renamed, because the last file used for the application is opened.

4D therefore lets you link the data file path to the application path. In this case, the data file will be linked using a specific path and will not just be the last file opened. You therefore link your data **by application path**.

This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).

*Duplication when data linked by application name:* ![](assets/en/Project/datalinking1.png)

*Duplication when data linked by application path:* ![](assets/en/Project/datalinking2.png)

You can select the data linking mode during the build application process. You can either:

- Use the [Application page](#application) or [Client/Server page](#client-server) of the Build Application dialog box.
- Use the **LastDataPathLookup** XML key (single-user application or server application).

### Defining a default data folder

4D allows you to define a default data file at the application building stage. When the application is launched for the first time, if no local data file is found (see [opening sequence described above](#opening-the-data-file)), the default data file is automatically opened silently in read-only mode by 4D. This gives you better control over data file creation and/or opening when launching a merged application for the first time.

More specifically, the following cases are covered:

- Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.
- Allowing the distribution of merged applications with read-only data (for demo applications, for instance).

To define and use a default data file:

- You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the database project folder. This file must be provided along with all other necessary files, depending on the database configuration: index (.4DIndx), external Blobs, journal, etc. It is your responsibility to provide a valid default data file. Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.
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

```code4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

This mechanism addresses the case where the primary targeted server is temporary unavailable for some reason (maintenance mode for example). When this case occurs for the first time, the server selection dialog box is displayed (if allowed, see below) and the user can manually select an alternate server, whose path is then saved if the connection is successful. Any subsequent unavailability would be handled automatically through the "lastServer.xml" path information.

> - When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) key in the "BuildApp.4DSettings" file. The mechanism addresses cases of temporary unavailability. 
> - Pressing the **Alt/Option** key at startup to display the server selection dialog box is still supported in all cases.

### Availability of the server selection dialog box in case of error

You can choose whether or not to display the standard server selection dialog box on merged client applications when the server cannot be reached. The configuration depends on the value of the [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) XML key on the machine where the application was built:

- **Display of an error message with no access possible to the server selection dialog box**. Default operation. The application can only quit.  
    `ServerSelectionAllowed`: **False** or key omitted ![](assets/en/Project/connect1.png)

- **Display of an error message with access to the server selection dialog box possible**. The user can access the server selection window by clicking on the **Select...** button.  
    `ServerSelectionAllowed`: **True** ![](assets/en/Project/connect2.png) ![](assets/en/Project/connect3.png)