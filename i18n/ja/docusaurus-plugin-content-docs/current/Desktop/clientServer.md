---
id: clientServer
title: クライアント/サーバー
---

組み込みクライアント/サーバーアプリケーションまたはリモートプロジェクトの形で、4Dデスクトップアプリケーションをクライアント/サーバー構成で運用することができます。

- **組み込みクライアント/サーバーアプリケーション** は [アプリケーションビルダー](building.md#クライアントサーバーページ) を使って生成します。 これらは、アプリケーションの運用に使います。

- **リモートプロジェクト** とは、4D Server 上で開いた [.4DProject](Project/architecture.md) ファイルのことで、リモートモードの 4D を使って接続します。 4D Server は、プロジェクトの [圧縮形式](building.md#コンパイル済みストラクチャーをビルド) である .4dz ファイルをリモートの 4D に送信します。つまり、ストラクチャーファイルは読み取り専用です。 この構成は通常、アプリケーションのテストに使います。

![](../assets/en/getStart/localremote.png)

> ただし、**4D Server と同じマシン** から接続している場合には、プロジェクトファイルの変更が可能です。 この [特殊機能](#4d-と-4d-server-の同じマシン上での使用) により、クライアント/サーバーアプリケーションを運用時と同じコンテキストで開発することができます。

## 組み込みクライアント/サーバーアプリケーションを開く

ビルドされたクライアント/サーバーアプリケーションは起動や接続処理が簡易です:

- サーバーを起動するには、サーバーアプリケーションをダブルクリックします。 プロジェクトファイルを選択する必要はありません。
- クライアントを起動するにも、同様にクライアントアプリケーションをダブルクリックします。すると、サーバーアプリケーションへの接続が直接おこなわれるため、

詳細については [アプリケーションビルド](building.md#クライアント/サーバーアプリケーションとは) ページを参照ください。

## リモートプロジェクトを開く

4D Server 上で動いているプロジェクトに初めて接続する場合は、通常は標準の接続ダイアログを使います。 以降は、**最近使用したプロジェクトを開く** メニューや、4DLink ショートカットファイルを使って直接接続できるようになります。

4D Server で実行されているプロジェクトに接続するには:

1. 次のいずれかの方法をおこないます:
   - Welcome ウィザードにて **4D Serverに接続** を選択します。
   - **ファイル** メニューより \*\*開く ＞ リモートプロジェクト...\*\*を選択するか、**開く** ツールバーボタンより同様に選択します。

4D Server に接続するためのダイアログが表示されます。 ダイアログには **最近使用**、**利用可**、および **カスタム** という、3つのタブがあります。

リモートの 4D と同じサブネットワークに 4D Server が接続されている場合は **利用可** タブを選択します。 4D Server には組み込みのブロードキャストシステムがあり、デフォルトで、ネットワーク上に利用可能な 4D Server データベースの名前を公開します。 このリストは、名前が見つかった順に表示され、動的に更新されます。

![](../assets/en/getStart/serverConnect.png)

このリストからサーバーに接続するには、名前上でダブルクリックするか、名前を選択して **OK** ボタンをクリックします。

公開されているプロジェクトが **利用可** タブに見つからない場合には、**カスタム** タブを開きます。 カスタムページでは、IPアドレスでネットワーク上のサーバーを指定し、それに任意の名前をつけられます。

![](../assets/en/Desktop/serverConnect2.png)

- **プロジェクト名**: 4D Server プロジェクトのローカル名を指定できます。 この名前は **最近使用** ページでプロジェクトを参照する際に使用されます。
- **ネットワークアドレス**: 4D Server が起動されたマシンの IPアドレスを指定します。
  - 2つのサーバーが同じマシン上で同時に起動されているときは、IPアドレスの後にコロンとポート番号を続けます。例: `192.168.92.104:19820`。
  - デフォルトで、4D Server の公開ポートは 19813 です。 この番号は、プロジェクト設定で変更できます。

> [**開発モードを有効化する**](#開発モード) オプションは、特別な読み取り/書き込みモードでリモート接続を開きます。このモードでは、リモート4D からプロジェクトフォルダーへのアクセスが確保されている必要があります。

このページでサーバーを指定したら、**OK** ボタンをクリックしてサーバーに接続できます。

サーバーとの接続が確立されると、そのリモートプロジェクトは **最近使用** タブのリストに加えられます。

### サーバー上のプロジェクトファイルの更新

インタープリターモードの場合、4D Server は *.4DProject* プロジェクトファイル (非圧縮) の [.4dz](building.md#コンパイル済みストラクチャーをビルド) ファイルを自動的に作成し、リモートマシンに送信します。

- プロジェクトが編集され 4D Server にリロードされた場合など、必要に応じてプロジェクトの .4dzファイルは自動的に更新されます。 プロジェクトは次の場合にリロードされます:
  - 4D Server アプリケーションウィンドウが OS の最前面に来たり、同じマシン上の 4D アプリケーションが編集を保存した場合 (後述参照) に自動でリロードされます。
  - [`RELOAD PROJECT`](../commands/reload-project) コマンドが実行されたとき。 プロジェクトの新しいバージョンをソース管理システムよりプルしたときなどに、このコマンドを呼び出す必要があります。

### リモートマシンのプロジェクトファイルの更新

4D Server 上で .4dz ファイルの更新版が生成された場合、その更新版を利用するには、接続中のリモート 4D マシンは一度ログアウトし、4D Server に再接続する必要があります。

### 開発モード

4D Server における **開発モード** とは、接続したリモート4D アプリケーションに読み/書きアクセスが許可されるプロジェクトを開くときの特別なモードです。 プロジェクトは[**インタープリタ** モード](../Concepts/interpreted.md) でなければなりません。

このモードでは、同じプロジェクトに対して複数のデベロッパーがデザイン環境で同時に作業することができます。 プロジェクトが**開発モード**で開かれている場合、以下のような特徴があります:

- プロジェクトファイルは読み/書きが可能な状態なので、メソッドやフォームなどを編集することができます。
- 複数のリモート4D が、同じインタープリタ版のプロジェクトファイルを同時に開いて、それを編集することができます。 この場合、自動ロックシステムが同じリソースへの同時アクセスを防止します。
- 編集は全てのリモートデベロッパーに対して利用可能になります。 ただし、このときリモートデベロッパーに対しては自動的なプッシュは起こらなず、最新のバージョンのファイルを取得するためには更新を行う必要があります(更新は、デベロッパーがデザインモードからアプリケーションモードへと切り替えるか、あるいは **ファイル** メニューから **全て保存** を選択したときに毎回起こります)。

このモードを使用するには、リモート4D から[接続ダイアログボックス](#リモートプロジェクトを開く) から**開発モードを有効化する** を選択する必要があります。 次に**4D プロジェクトファイルを選択してください**と表示されます: 4D Server が開いている [.project ファイル](../Project/architecture.md#applicationname4dproject-ファイル) を選択する必要があります。 異なるファイルを選択した場合、開発モードが利用できないことを警告するアラートダイアログボックスが表示されます。 これは、リモート4D がプロジェクトフォルダに対してネットワーク越しでもアクセス権を持っていなければならないことを意味します(例えばプロジェクトのroot フォルダが共有されているなど、プロジェクトファイル全体が共有されている必要があります)。

:::caution

この設定においてはパフォーマンス上の理由から、プロジェクトフォルダがローカルネットワーク上の専用のファイルサーバー上(例: NAS など)に保存することが強く推奨されています。

:::

:::note

サーバーとリモート4D が同じマシン上にある場合、[追加のルールが適用されます](#4d-と-4d-server-の同じマシン上での使用)。

:::

開発モードアーキテクチャーの概要は以下のようになります:

![](../assets/en/Desktop/develop-mode.png)

:::note 互換性

この機能は、バイナリーデータベースで作業するのに慣れていて、現在の構成を維持したままプロジェクトモードでの機能を利用したいような、小規模な開発チーム向けに設計されています。 しかしながら、4D プロジェクト上でのマルチユーザー開発については、デベロッパーがそれぞれのマシン上で開発を行い、その作業をソース管理リポジトリツール(Git、SVN など)で管理する標準のアーキテクチャーを使用することが強く推奨されます。 この構成であれば、デベロッパーが異なるブランチで作業をしたり、行った編集の比較、マージ、差し戻しなどが可能になり、大きな柔軟性を持ちます。

:::

:::tip 関連したblog 記事

[Developing Concurrently on 4D Server in Project Mode](https://blog.4d.com/developing-concurrently-on-4d-server-in-project-mode/)

:::

## 4D と 4D Server の同じマシン上での使用

同じマシン上で 4D が 4D Server に接続すると、アプリケーションはシングルユーザーモードの 4D のようにふるまい、デザイン環境にてプロジェクトファイルの編集が可能です。 この機能により、クライアント/サーバーアプリケーションを運用時と同じコンテキストで開発することができます。

> 同じマシン上で 4D Server に 4D を接続する場合には、 [開発モード](#開発モード) オプションの設定にかかわらず **開発モード** が自動的に有効化されます。

デザイン環境にて 4D が **すべてを保存** アクションを (**ファイル** メニューを使って明示的に、または、アプリケーションモードへの移行により暗示的に) おこなうと、4D Server は同期的にプロジェクトファイルをリロードします。 4D Server によるプロジェクトファイルのリロードが完了するのを待って、4D は続行します。

ただし、[標準のプロジェクトアーキテクチャー](Project/architecture.md) とは次のふるまいにおいて異なりますので、注意が必要です:

- 4D が使用する userPreferences.\{username\} フォルダーは、4D Server が使用するプロジェクトフォルダー内のものと同一ではありません。 4D が使用する userPreferences.\{username\} フォルダーは、4D Server が使用するプロジェクトフォルダー内のものと同一ではありません。
- 4D が使用する DerivedData フォルダーは、4D Server が使用するプロジェクトフォルダー内のものと同一ではありません。 この専用の "DerivedDataRemote" フォルダーはプロジェクトのシステムフォルダー内に格納されます。
- catalog.4DCatalog ファイルは 4D ではなく 4D Server によって編集されます。 catalog の情報はクライアント/サーバーリクエストによって同期されます。
- directory.json ファイルは 4D ではなく 4D Server によって編集されます。 directory の情報はクライアント/サーバーリクエストによって同期されます。
- 4D は、4D Server 上のものではなく、独自の内部的なコンポーネントやプラグインを使用します。

> プラグインやコンポーネントを 4D あるいは 4D Server アプリケーションレベルにインストールすることは、推奨されません。

## クライアント/サーバー開発

### コードの実行場所

クライアント/サーバーアプリケーションにおいては、コードが実際に実行される場所を知っておくことが重要です: **サーバー側** あるいは **クライアント側** のどちらかです。 実行場所を知っておくことは、ユーザーセッション関連のコードの実装、プロセス間での情報の共有、またはデータのアクセスなどの際に非常に重要となります。

以下の表は、デフォルトでのコードの実行場所と、その実行場所を切り替えるための方法(許可されていれば)をまとめたものです。 この表での **ローカル** とは、コードはそれが実際に呼ばれたマシン上で実行されることを意味するという点に注意してください。

| コード                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | デフォルトの実行場所 | 切り替え方法                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ORDA データモデル関数](../ORDA/ordaClasses.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | server     | 関数定義内で `local` キーワードを使用                                                                                                                                      |
| ORDA 計算属性関数のうち [`get()`](../ORDA/ordaClasses.md#function-get-attributename)、 [`set()`](../ORDA/ordaClasses.md#function-set-attributename)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | server     | 関数定義内で `local` キーワードを使用                                                                                                                                      |
| ORDA 計算属性関数のうち [`query()`](../ORDA/ordaClasses.md#function-query-attributename)、 [`orderBy()`](../ORDA/ordaClasses.md#function-orderby-attributename)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | server     | n/a                                                                                                                                                          |
| ORDA イベント関数 [(全般)](../ORDA/orda-events.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | server     | n/a                                                                                                                                                          |
| ORDA イベント関数 [`constructor()`](../ORDA/ordaClasses.md#class-constructor-1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | local      | n/a                                                                                                                                                          |
| ORDA イベント関数 [`event touched()`](../ORDA/orda-events.md#function-event-touched)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | server     | 関数定義内で `local` キーワードを使用                                                                                                                                      |
| [ユーザークラス関数](../Concepts/classes.md#function)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | local      | n/a                                                                                                                                                          |
| [共有シングルトンまたは施ッションシングルトンの関数](../Concepts/classes.md#シングルトンクラス)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | local      | 関数定義内で `server` キーワードを使用                                                                                                                                     |
| [トリガ](#トリガ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | server     | n/a                                                                                                                                                          |
| クライアントから呼び出されたプロジェクトメソッド                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | client     | [**サーバー上で実行する** オプション](../Project/project-method-properties.md#サーバー上で実行) をチェックする。 コードは、[ユーザーセッションプロセス](./sessions.md#remote-user-sessions) のツインプロセス内で実行されます。 |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |            | [`Execute on server`](../commands/execute-on-server) コマンドを呼び出す。 コードは[ストアドプロシージャセッション](./sessions.md#stored-procedure-sessions) 内で実行されます。                     |
| サーバー上の[ストアドプロシージャ](#ストアドプロシージャ) から呼び出されたプロジェクトメソッド                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | server     | [`EXECUTE ON CLIENT`](../commands/execute-on-client) コマンドを呼び出す。 ターゲットとなるクライアントは [登録されている](../commands/register-client) 必要があります。                              |
| オブジェクトメソッド                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | local      | n/a                                                                                                                                                          |
| データベースメソッド:<ul><li>[On Backup Shutdown](../commands-legacy/on-backup-shutdown-database-method.md)</li><li>[On Backup Startup](../commands-legacy/on-backup-startup-database-method.md)</li><li>[On Server Close Connection](../commands-legacy/on-server-close-connection-database-method.md)</li><li>[On Server Open Connection](../commands-legacy/on-server-open-connection-database-method.md)</li><li>[On Server Shutdown](../commands-legacy/on-server-shutdown-database-method.md)</li><li>[On Server Startup](../commands-legacy/on-server-startup-database-method.md)</li><li>[On SQL Authentication](../commands-legacy/on-sql-authentication-database-method.md)</li><li>[On Web Authentication](../commands-legacy/on-web-authentication-database-method.md)</li><li>[On Web Connection](../commands-legacy/on-web-connection-database-method.md)</li></ul> | server     | n/a                                                                                                                                                          |
| データベースメソッド:<ul><li>[On Startup](../commands-legacy/on-startup-database-method.md)</li><li>[On Exit](../commands-legacy/on-exit-database-method.md)</li><li>[On Drop](../commands-legacy/on-drop-database-method.md)</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | client     | n/a                                                                                                                                                          |

### トリガ

[トリガ](../Develop/triggers) はデータベースエンジンが実際に存在するマシン上で実行されます。 4D Server では、トリガはサーバーマシン上で実行されるプロセスのコンテキスト内で実行され、クライアントマシン上では実行されません。 具体的には、データベース操作を呼び出すユーザープロセスの"ツイン"プロセスのコンテキスト内で実行されます。 これらのツインプロセスはクライアント上のユーザープロセスと同じデータベースコンテキスト(具体的にはトランザクションの状態とレコードのロッキング)を共有しますが、ランゲージコンテキスト(変数、プロセス、セット、カレントセレクションなど)は共有しません。 ただしトリガのテーブルのカレントレコードは全てのコンテキストにおいて同じであるという点に注意してください。

:::note

サーバー上では、トリガは割り当てられたアクション(作成/更新/削除)を処理するプロセス内で実行されます。 アクションが[サーバー上のプリエンプティブプロセス](../Develop/preemptive.md) (例: ストアドプロシージャやスケーラブルセッションモードでのHTTP リクエスト)でトリガーされた場合には、トリガは同じプリエンプティブプロセス内で実行されます。 ただし、アクションが4D リモートからトリガーされていた場合、トリガはツインプロセスで実行され、このツインプロセスは必ず小オペラティブモードで実行されます(ツインプロセスはユーザーの全ての呼び出しに対して共有されます)。

:::

### ストアドプロシージャ

4D のストアドプロシージャとは、メソッドを実行したクライアントマシンではなく、サーバーマシン(ありうは登録されたクライアントマシン)上で実行中のプロセス内でプロセスメソッドを実行するプロジェクトメソッドです。

ローカルモードの4D では、[`New process`](../commands/new-process) などのコマンドを使用すると、メソッドを実行できるユーザープロセスを開始することができます。 このメソッドは[プロセスメソッド](../Project/project-method-properties.md#プロセスメソッド) と呼ばれています。 同じことは、4D Server、クライアントマシンで行うことができます。 また、サーバーマシン上で[`Execute on server`](../commands/execute-on-server) コマンドを使用することで、メソッドを実行できるユーザープロセスを開始することができます。 さらに、[`EXECUTE ON CLIENT`](../commands/execute-on-client) コマンドを使用すると異なるクライアント上の他のプロセス内でメソッドを実行することができます。 どちらの場合においても、このメソッドは**ストアドプロシージャ**と呼ばれ、またサーバーマシンまたは他のクライアント上で開始されたプロセスについても(比喩から)同じくストアドプロシージャと呼ばれます。

:::note

サーバー上で実行される全てのストアドプロシージャは[同じ仮想的なユーザーセッションを共有します](./sessions.md#stored-procedure-sessions)。

:::

#### アーキテクチャー

通常のプロセスと同様に、ストアドプロシージャーには次のような独自の環境があります:

- テーブルごとのカレントセレクション: 各ストアドプロシージャーには、個別のカレントセレクションがあります。 1 つのテーブルは、別々のストアドプロシージャーで異なるカレントセレクションを持つことができます。
- テーブルごとのカレントレコード: 各テーブルは、ストアドプロシージャーごとに異なるカレントレコードを持つことができます。
- 変数: 各ストアドプロシージャには独自のプロセス変数があります。 プロセス変数は、その変数が設定されたストアドプロシージャの範囲内でのみ認識されます。
- デフォルトテーブル: 各ストアドプロシージャーには、独自のデフォルトテーブルがあります。
- プロセスセット: 各ストアドプロシージャーには、独自のプロセスセットがあります。
- エラー処理: 各ストアドプロシージャーには、独自のエラー処理メソッドを持てます。
- デバッガウィンドウ: 各ストアドプロシージャーは、独自のデバッガーウィンドウを持てます。

ユーザーインターフェースの点では、ストアドプロシージャーは、ウィンドウを開き、データを表示する (例えば[`DISPLAY RECORD`](../commands/display-records) を使用) ことができます。 4D クライアントマシン上で実行されるストアドプロシージャーではデータ入力ができます。 一方、サーバー上で実行されるストアドプロシージャーではデータ入力を開始することはできません。

ストアドプロシージャーは、システム (ハードウェアおよびメモリ) が許す限りいくつでも開始することができます。 事実、4D Server マシンは、4D クライアントおよびWeb ブラウザに応答するマシンであるだけではなく、サーバーマシンおよびリモート4D マシン上で実行中の他のプロセスと対話するプロセスを実行するマシンである、という見方をする必要があります。

:::note

[**サーバー上で実行** ""メソッド属性](../Project/project-method-properties.md#サーバー上で実行)
を使用して、サーバー上のプロセスでメソッドを実行することもできます。ただしこの場合メソッドは、クライアントプロセスに対応するサーバー上のクライアントプロセスで実行されます。つまりクライアントプロセスの環境を使用できます。 この場合、これは4D のストアドプロシージャーではありません。

:::

#### ストアドプロシージャの機能

サーバー上で実行されるストアドプロシージャでのデータ入力を除き、ほとんどすべてのプロセスおよび4D ランゲージの機能は、ストアドプロシージャーにも適用されます。

ストアドプロシージャーではデータの追加、検索、並べ替え、更新、削除が可能です。 ストアドプロシージャーではディスク上のドキュメントファイルへのアクセス、BLOB を使用した作業、レコードの印刷等を行うことができます。 ローカルの4Dマシン上で作業を行う代わりに、サーバーマシン上や他の4Dクライアントマシン上で実行していると考えてください。

ローカルに実行されるストアドプロシージャに対しサーバー上で実行されるストアドプロシージャーの明確な利点とは、データベースエンジンがあるサーバーマシン上でローカルに実行されるということです。 例えば、ネットワーク経由で[`APPLY TO SELECTION`](../commands/apply-to-selection) を行うと効率的ではありませんが、ストアドプロシージャー内では効率良く実行されます。

クライアントマシン上で実行されるストアドプロシージャーを使用すれば、タスクの分割やクライアントマシン間の通信を最適化できます。 複数のマシンでストアドプロシージャーを実行する例題は、[`REGISTER CLIENT`](../commands/register-client) を参照してください。

しかし、ストアドプロシージャアーキテクチャーの最も重要な利点は、4D Server に追加の世界をもたらすところです。 ストアドプロシージャーを利用すると、独自の4D Server サービスを実現することができます。 唯一の制約はあなたの想像力だけです。

#### ストアドプロシージャーが行わないこと

一般的に言って、サーバー上で実行されるストアドプロシージャーはインターフェース (メニューやウィンドウ、フォームなど) を扱うべきではありません。 実際インターフェースはサーバー上では管理されません。

サーバーマシン上でモーダルダイアログボックスを生成しうる可能性のあるコマンド(例: [`Open document`](../commands/open-document) に第一引数に空の文字列を渡して呼び出すなど)は、全て避けるべきです。 サーバー画面の前には必ずしも常にユーザーがいるわけではないため、ユーザーアクションが必要なモーダルなダイアログボックスを表示することは、アプリケーションの一時的なブロックにつながることがあるという点に注意してください。

#### サーバー上で禁止されるコマンド

以下はサーバー上で実行されるストアドプロシージャー内で使用すべきでないコマンドのリストです。 以下のコマンドの1つををストアドプロシージャー内で使用したら、4D Server 上で使ってはいけないというアラートが表示されます。 エラーは#67 が返ります。[`ON ERR CALL`](../commands/on-err-call) コマンドでインストールされたメソッドを通し、受け取ることができます。

[`ADD RECORD`](../commands/add-record)
[`APPEND MENU ITEM`](../commands/append-menu-item)
[`POST OUTSIDE CALL`](../commands/post-outside-call)
[`CHANGE LICENSES`](../commands/change-licenses)
[`Count menu items`](../commands/count-menu-items)
[`Count menus`](../commands/count-menus)
[`DELETE MENU ITEM`](../commands/delete-menu-item)
[`DISABLE MENU ITEM`](../commands/disable-menu-item)
[`DISPLAY SELECTION`](../commands/display-selection)
[`EDIT ACCESS`](../commands/edit-access)
[`ENABLE MENU ITEM`](../commands/enable-menu-item)
[`FILTER EVENT`](../commands/filter-event)
[`Get menu item`](../commands/get-menu-item)
[`Get menu item key`](../commands/get-menu-item-key)
[`Get menu item mark`](../commands/get-menu-item-mark)
[`Get menu item style`](../commands/get-menu-item-style)
[`Get menu title`](../commands/get-menu-title)
[`SET PICTURE TO LIBRARY`](../commands/set-picture-to-library)
[`INSERT MENU ITEM`](../commands/insert-menu-item)
[`Menu selected`](../commands/menu-selected)
[`MODIFY RECORD`](../commands/modify-record)
[`MODIFY SELECTION`](../commands/modify-selection)
[`ON EVENT CALL`](../commands/on-event-call)
[`QUERY BY EXAMPLE`](../commands/query-by-example)
[`QR REPORT`](../commands/qr-report)
[`REMOVE PICTURE FROM LIBRARY`](../commands/remove-picture-from-library)
[`SET MENU ITEM`](../commands/set-menu-item)
[`SET MENU ITEM SHORTCUT`](../commands/set-menu-item-shortcut)
[`SET MENU ITEM MARK`](../commands/set-menu-item-mark)
[`SET MENU ITEM STYLE`](../commands/set-menu-item-style)
[`SET PICTURE TO LIBRARY`](../commands/set-picture-to-library)
[`SET USER ALIAS`](../commands/set-user-alias)
[`SHOW MENU BAR`](../commands/show-menu-bar)

サーバー上で効果がないコマンド
以下のコマンドはサーバー上のストアドプロシージャーで呼び出された場合、効果がありません。 特定のエラーコードは返されません。

[`GRAPH`](../commands/graph)
[`MESSAGES OFF`](../commands/messages-off)
[`MESSAGES ON`](../commands/messages-on)
[`SET MENU BAR`](../commands/set-menu-bar)
[`SHOW TOOL BAR`](../commands/show-tool-bar)

#### ストアドプロシージャを開始する

4D から**メソッド実行**ダイアログボックスを使用して、手動でストアドプロシージャーを開始できます:

![](../assets/en/Desktop/execute-method.png)

ここからメソッドを4D Serverまたは他の4Dクライアントマシン上で実行できます。 このリストに4Dクライアントマシンを表示させるためには、まずそのマシンが[登録](#クライアントマシン上でのストアドプロシージャ) されていなければならないことに留意してください。

- また4D 上では、[`Execute on server`](../commands/execute-on-server) または [`EXECUTE ON CLIENT`](../commands/execute-on-client) コマンドを使用してプログラムからストアドプロシージャーを開始できます。
- 4D Server上で実行されているメソッド (サーバデータベースメソッド、**サーバ上で実行**属性付きのメソッド、またはストアドプロシージャ) は[`Execute on server`](../commands/execute-on-server)、 [`New process`](../commands/new-process)、または [`EXECUTE ON CLIENT`](../commands/execute-on-client) を使用してストアドプロシージャを開始できます。

:::note

リモート4Dからサーバのストアドプロシージャに、[`DELAY PROCESS`](../commands/delay-process), [`PAUSE PROCESS`](../commands/pause-process) および [`RESUME PROCESS`](../commands/resume-process) などのプロセス管理コマンドを使用することはできません。

:::

#### ストアドプロシージャーとユーザプロセス間のインタープロセス通信について

ストアドプロシージャー間の通信には、次の方法を使用します:

- [ストアドプロシージャセッション](../Desktop/sessions.md#stored-procedure-sessions) の共有オプジェクトの[`session.storage`](../API/SessionClass.md#storage)
- ローカルセマフォーまたはグローバル[セマフォー](../Develop/processes.md#semaphores)
- レコード
- [`GET PROCESS VARIABLE`](../commands/get-process-variable)、 [`SET PROCESS VARIABLE`](../commands/set-process-variable) および [`VARIABLE TO VARIABLE`](../commands/variable-to-variable) コマンド
- (*非推奨*) インタープロセスセットおよびインタープロセス命名セレクション

4Dコマンドは、クライアントマシンのスコープ内で動作する場合と同様に、ストアドプ ロシージャーを実行するサーバーまたはクライアントマシンのスコープ内で動作することに注意してください。

:::note

[`POST OUTSIDE CALL`](../commands/post-outside-call) および [`Outside call`](../commands/outside-call) メカニズムは、サーバーマシン上では意味がありません。ストアドプロシージャーには、データ入力のためのユーザーインタフェースがないためです。

:::

クライアントユーザープロセス (クライアントマシンで実行されるプロセス) は、[`GET PROCESS VARIABLE`](../commands/get-process-variable)、 [`SET PROCESS VARIABLE`](../commands/set-process-variable) および [`VARIABLE TO VARIABLE`](../commands/variable-to-variable) コマンドを使用して、ストアドプロシージャーのプロセス変数 (\*) を読み込んだり、書き込むことができます。

(\*) サーバーマシンのインタープロセス変数も同様。

重要: [`GET PROCESS VARIABLE`](../commands/get-process-variable)、 [`SET PROCESS VARIABLE`](../commands/set-process-variable) および [`VARIABLE TO VARIABLE`](../commands/variable-to-variable) コマンドを使用して行う“マシン間”のプロセス通信は、クライアントからサーバーに対してのみ可能です。 ストアドプロシージャーの変数を読み込んだり、書き込んだりするのは常にクライアントのプロセスです。

#### クライアントマシン上でのストアドプロシージャ

ストアドプロシージャを1つあるいは複数の4D マシン上で実行できます。 クライアント上のストアドプロシージャは、サーバ上のそれとおなじように実行されますが、クライアント上では[`ADD RECORD`](../commands/add-record) などの従来のコマンドを使用してデータ入力を行うことができます。

サーバまたは他のクライアントマシンによって起こされた、どのようなクライアントマシンで実行されているストアードプロシージャも、明示的にこのセッションに登録されなければなりません。 4D クライアントを登録するには2つの方法があります。接続時に自動登録またはプログラミングによる登録です。

- 4D Server へ接続する各4D クライアントマシンを自動的に登録する: データベース設定のクライアント-サーバーページ中、公開オプションタブの[**Execute On Client のために起動時にクライアント登録**](../settings/client-server.md#execute-on-clientのために起動時にクライアント登録)チェックボックスを利用します。 When this option is checked, each 4D client machine connecting to the application is automatically referenced with 4D Server as being able to execute stored procedures. A 4D Client type process named according to the client machine is created on the server. An equivalent process is also created on each client machine.
- Registering 4D Client through programming: you can register one or several client machines using programming, allowing you to select the client machines that needs to be registered and to define their registration name. Use the [`REGISTER CLIENT`](../commands/register-client) command which allows you to register a client machine under any name.
- Unregistering 4D Client: No matter how the client machines have been registered, you can unregister them for the current session using the [`UNREGISTER CLIENT`](../commands/unregister-cient) command for a given client. The registration process (named according to the client) disappears from the user process group on the server machine as well as on the client.

You can get the list and the task distribution (number of methods still to be executed) for the clients registered for a given session using the [`GET REGISTERED CLIENTS`](../commands/get-registered-clients) command.

### 変数

Like all processes, each stored procedure, database method and trigger has its own table of process variables. These process variables can be created and used dynamically during each phase of execution.

4D Server maintains one table of [interprocess variables](../Concepts/variables.md#interprocess-variables) (*deprecated*). The scope of these variables is the server machine. When running a compiled database, the interprocess variable table definition is common between the server and all the clients machines, each machine having its own instance.

### Sets and Named Selections

- Process sets/named selections: A process object can only be accessed by the process in which it has been created and, if it has been created in a client process, by the "twinned" process created on the server. プロセスセットは、プロセスメソッドが終了すると直ちに消去されます。 Process objects do not need any special prefix in the name.
- Interprocess sets/named selections (*deprecated*): An interprocess object is visible for all the processes on the machine (client or server) where it was created. A set or named selection is an interprocess object if the name of the set is preceded by the symbols (\<>) — a “less than” sign followed by a “greater than” sign.
- Local/Client sets/named selections: A local/client object is only visible in the process where it was created. The name of a local/client object is preceded by the dollar sign ($).
  Note: Although its name does not begin with a `$`, the `UserSet` system set is a local/client set.

The following table indicates the principles concerning the visibility of named selections and sets according to where they are created (the table is identical for both types of objects):

|                                 | Client Process | Other client processes | Server process                 | Other server processes |
| ------------------------------- | -------------- | ---------------------- | ------------------------------ | ---------------------- |
| **Created in a client process** |                |                        |                                |                        |
| `$test`                         | ○              |                        |                                |                        |
| `test`                          | ○              |                        | x (Trigger) |                        |
| `<>test`                        | ○              | ○                      |                                |                        |
| **Created in a server process** |                |                        |                                |                        |
| `$test`                         |                |                        | ○                              |                        |
| `test`                          |                |                        | ○                              |                        |
| `<>test`                        |                |                        | ○                              | ○                      |

x = visible

You need to keep this visibility matrix in mind depending on the operations you want to perform. For example, if you want to do a [`DIFFERENCE`](../commands/difference), [`INTERSECTION`](../commands/intersection) or [`UNION`](../commands/union) type operation, make sure that all the sets are visible on the machine that is carrying out the operation.

### Execute on Server attribute

The **Execute on Server** project method attribute can be set using the batch setting of attributes dialog box as well as the [Method Properties dialog box](../Project/project-method-properties.md#execute-on-server). このオプションが選択されていると、そのプロジェクトメソッドは呼び出し方に関わらず常にサーバー上で実行されます。

#### Execution Context

When this attribute is checked, the execution context of the project method is comparable to that of [triggers](#triggers): the method on the server shares the same database context as the corresponding context on the client side for locking records and for transactions, but not the same language context (process variables, sets, current selections). However, unlike a trigger, a method executed on the server does not share the current record with the client context.
All the [parameters of the method](../Concepts/parameters.md) are sent to the server and the return value, if any, is returned to the client.

Unlike the [`Execute on server`](../commands/execute-on-server) command, this option does not create a process on the server. 4D Server uses the "twin" process of the client process that requested the execution. Moreover, this option simplifies the principle of delegating the execution of a method on the server since the transfer of parameters is automatically carried out in both directions, as with a "normal" method call. The [`Execute on server`](../commands/execute-on-server) command functions asynchronously, therefore it requires more programming and makes use of [semaphores](../Develop/processes.md#semaphores) for reading the results.

#### Usable Commands

Methods with "Execute on Server" attribute are subject to the same rules as the [stored procedures](#stored-procedures) as far as the use of 4D language commands is concerned.

#### ポインター

If you pass a pointer to a variable (simple variable, array or array element), the pointed value is also sent to the server. If the pointed value is modified on the server by the method, the modified value is returned to the client in order to update the corresponding variable on the client side.
Pointers to a table or field are sent as references (table number, field number). The current record value is not automatically exchanged.

:::note

This option works the same way in [interpreted mode as in compiled mode](../Concepts/interpreted.md).

:::

#### 例題

Here is the code for the *MyAppli* project method which has the "Execute on Server" attribute:

```4d
 #DECLARE($table: Pointer; $field: Pointer; $array: Pointer; $search: Text) -> $result : Integer
 
  //Search and send back values for each record
 QUERY($table->;$field->=$search)
 While(Not(End selection($table->)))
    APPEND TO ARRAY($array->;myFormula($table))
    NEXT RECORD($table->)
 End while
 UNLOAD RECORD($table->)
 $result:=Records in selection($table->)
```

On the client side, the method is called as follows:

```4d
 ARRAY TEXT(myArray;0)
 var $vlnum:=MyAppli(->[Table_1] ;->[Table_1]Field_1 ;->myArray;"to find")
```

## Resources フォルダー

The [**Resources** folder](../Project/architecture.md#resources) of a project can be used to share custom data (pictures, files, subfolders, etc.) between the server machine and all the client machines. On the server machine, the **Resources** folder is simply be located at the first level of the [project root folder](../Project/architecture.md).

All referencing mechanisms associated with the **Resources** folder are supported in client/server mode (.lproj folder, XLIFF, pictures and so on).

Each client has a local copy of this folder. The contents of the local folder are automatically synchronized with that of the server each time the client connects.

Moreover, client machines can be dynamically "notified" during a session when the contents of the **Resources** folder of the server application are modified by a developer. This notification can be triggered:

- either automatically by the server, two minutes after the last modification made by a client (this delay helps to avoid inopportune notification in the case where numerous files are being copied).
- or manually via the **Notify clients** command in the action menu of the [**Resources explorer**][Using the Resources explorer](https://doc.4d.com/4Dv20/4D/20.2/Using-the-Resources-explorer.300-6750254.en.html) on the Toolbox of the client machine at the origin of the modification.
- or by programming, via a [`NOTIFY RESOURCES FOLDER MODIFICATION`](../commands/notify-resources-folder-notification) command. This command is useful when the contents of the **Resources** folder are modified on the server machine via a stored procedure.

On the client side, the way the notification of any modifications will be handled depending on the [**Update "Resources" folder during a session**](../settings/client-server.md#update-resources-folder-during-a-session) setting value. This can also be set individually via the [`Auto synchro resources folder` selector of the `SET DATABASE PARAMETER`](../commands/set-database-parameter#auto-synchro-resources-folder-48) command. Three choices are available: **no synchronization**, **auto synchronization** or **ask**. For more information, please refer to the [**Network and Client-Server options** section](../settings/client-server.md#update-resources-folder-during-a-session).

Lastly, each client machine can synchronize itself with the server at any time via the **Update Local Resources** command in the action menu of the [Resources explorer](https://doc.4d.com/4Dv20/4D/20.2/Resources-explorer.200-6750091.en.html).