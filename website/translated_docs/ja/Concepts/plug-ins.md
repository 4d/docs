---
id: plug-ins
title: プラグイン
---

4Dアプリケーションの開発を進めていくと、最初は気付かなかった数多くの機能を発見することでしょう。 You can even augment the standard version of 4D by adding **plug-ins** to your 4D development environment.

## プラグインの必要性

オブジェクトやレコードの操作、ユーザーインターフェースの実装のため、4D は数百のビルトインコマンドを提供していますが、さらに特殊な機能 (プラットフォーム依存のものなど) が必要になることがあります。たとえば、Windows上のODBC 、macOS上のアップルサービス、特殊な統計機能、ソーシャルネットワークログイン、決済用のプラットフォーム、ネットワークを介したファイルアクセス、特殊なユーザーインターフェース、独自のピクチャー構造などです。

これらの機能をすべて、macOS と Windows の両方で 4D コマンドによって提供しようとした場合、コマンド数は数千に膨れ上がると同時に、ほとんどのユーザーはそれらの追加機能を必要としないでしょう。 また、そのような万能ツールを作り上げたとしても、その結果として 4D 環境は複雑化することになり、4D の学習が困難になるだけでなく、成果が得られるまで時間を要するようになるでしょう。

4D 環境のモジュール性により、基礎的なアプリケーションの作成はもちろんのこと、非常に複雑なシステムの開発も可能です。 4D プラグインのアーキテクチャーによって、4D 環境はあらゆるアプリケーションとユーザーに対して開かれています。 4D プラグインによってアプリケーションやユーザーの生産性を飛躍させることができます。

## プラグインとは何か

プラグインとは、4D 起動時にロードされるコードのことです。 プラグインは、4D に機能を追加します。

通常、プラグインは:
- 4D ができないことを処理します (プラットフォーム特有の技術など)
- 4D だけでは難しいことを実現します
- プラグインのエントリーポイントの形でのみ提供されている機能を提供します

プラグインには通常複数のルーチンが含まれています。 プラグインは外部エリアを操作でき、外部プロセスを実行できます。

- A **plug-in routine** is a routine written in native language (usually C or C++) that causes an action.
- An **external area** is a part of a form that can display almost everything and interact with the user when necessary.
- An **external process** is a process that runs alone, usually in a loop, doing almost everything it wants. プロセスのコードはすべてプラグインに属しており、4D はプロセスに対してイベントを送受信するだけです。

### 重要な注記

プラグインは、小さな処理をおこなう一つのルーチンを実行するだけの、とても簡単なものでありえます。また、百以上のルーチンとエリアを扱うような、非常に複雑なものでもありえます。 プラグインの機能に制限はありませんが、プラグインの開発にあたっては、プラグインがあくまで従たるコードであることに留意が必要です。 プラグインは 4D 内で実行されます。 プラグインは独立したアプリケーションではなく、4D の一部です。 プラグインは、他のプラグインや 4D 自身と CPU 時間とメモリを共有します。したがって、プラグインのコードは、必要なリソースだけを使用する控えめなコードであるべきです。 たとえば、非常に長いループ処理においては (その重要性が絶対的な優先権を要求しないかぎり)、プラグインは `PA_Yield()` を呼び出して、4D のスケジューラーにも処理時間を割り当てるべきです。

## プラグインの作り方

4D provides on GitHub an open-source [**plug-in SDK**](https://github.com/4d/4D-Plugin-SDK), containing the 4D Plugin API and the 4D Plugin Wizard:

- the [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API の機能は、4D とプラグイン間の通信を管理します。
- The [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) is an essential tool that simplifies the task of developing 4D plug-ins. プラグインのロードや、プラグインとの通信に 4D が必要とするコードがツールによって提供されることで、デベロッパーはプラグインの根幹をなすコードに集中することができます。

## インストールの手順

プラグインやコンポーネントは 4D環境の適切なフォルダーにコピーすることでインストールされます。

Windows および macOS用の 4Dプラグインは、“PluginName.bundle” フォルダー (macOSではパッケージと呼ばれます) に格納されます。 このフォルダーの内部構造により、4D Server環境において、接続するクライアントのOSに応じたプラグインがロード/配信され、クライアント上で実行されます。 To install a plug-in in your environment, you just need to put the “PluginName.bundle” folder or package concerned into the desired **PlugIns** folder.

Plugins フォルダーは 2つの異なる場所に配置できます:

- 4D実行アプリケーションレベル:
  - Windows: .exeファイルと同階層
  - Under macOS: at the first level of the Contents folder inside the application package.   
    In this case, plug-ins are available in every database opened by this application.
- データベースストラクチャーファイルと同階層: この場合、プラグインは当該データベースでのみ利用可能です。

場所の選択はプラグインをどのように使用するかによって決定します。

同じプラグインが両方の場所にインストールされている場合、4Dはストラクチャーファイルと同階層にインストールされたもののみをロードします。 コンパイルされ、4D Volume Desktop がマージされたアプリケーションでは、同じプラグインのインスタンスが複数存在する場合、アプリケーションを開くことができません。

プラグインは 4D 起動時にロードされるので、これらをインストールする際には 4Dアプリケーションを終了する必要があります。 インストールが終了したら 4D でデータベースを開きます。 プラグインの利用に特別なライセンスが必要な場合、プラグインはロードされますが、ライセンスをインストールするまで使用することはできません。
