---
id: server-admin
title: 4D Server 管理ウィンドウ
---


Windows または macOS上で、4D Server をインターフェースありで起動すると、グラフィカルな管理ウィンドウが利用でき、公開された 4Dアプリケーション用に多くの解析・制御ツールを提供します。 開いているプロジェクトの 4D Server 管理ウィンドウを表示するには、**ウィンドウ＞管理** メニュー項目を選択するか、**Ctrl+U** を押します。

> 管理ウィンドウはリモートの 4D からもアクセス可能です。 この点についての詳細は、 リモートマシンからの管理を参照ください。


## モニターページ

**モニター** ページには、データベース利用に関する動的な情報のほか、システムや 4D Serverアプリケーションの情報が表示されます。

![](assets/en/Admin/server-admin.png)

> Windows では、このページに表示されるシステム情報の一部は、Windows パフォーマンスアナライザー (WPA) ツールを介して取得されます。 これらのツールは、4D Server を起動したセッションを開いたユーザーが、必要な管理権限を持っている場合にのみアクセスできます。

#### グラフィックエリア

グラフィックエリアでは、複数のパラメーター (CPU使用率、ネットワークトラフィック、およびメモリ) の変化がリアルタイムで表示されます。 ウィンドウの中央にあるメニューから表示する内容を選択します:

![](assets/en/Admin/server-graphic.png)

- **CPU使用率**: すべてのアプリケーションによるマシンの全体的な CPU使用率。 この使用率のうちの 4D Server による使用分は、"プロセッサー" 情報エリアで提供されます。
- **ネットワーク**: マシン (サーバーまたはクライアント) が 1秒あたりに受信したバイト数。 送信バイト数は "ネットワーク" 情報エリアで提供されます。
- **物理メモリ**: 4D Server が使用する、マシンの RAM の量。 メモリの利用に関するより詳細な情報は "メモリ" 情報エリアで提供されます。
- **仮想メモリ**: 4D Server アプリケーションが使用する仮想メモリの量。 このメモリは、アプリケーションのニーズに応じてシステムにより割り当てられます。 エリアの右下に表示される値は、現在使用されているメモリ量を示します。 左上に表示される値は、利用可能な仮想メモリの最大値を示します。 最大値は、アプリケーションの一般メモリ設定に基づき動的に計算されます。
- **キャッシュ**: 4D Server アプリケーションが使用するキャッシュメモリの量。 エリアの右下に表示される値は、現在使用されているメモリ量を示します。 左上に表示される値は、ストラクチャー設定にて指定されたキャッシュメモリの合計サイズを示します。

このオプションが選択されている場合、キャッシュの有効な解析をおこなうために長めの観測時間が必要となるため、グラフエリアのスクロールは遅くなります。


#### 概要エリア

"概要" エリアでは、システム、アプリケーション、そして 4D Server マシンにインストールされたライセンスに関する様々な情報が提供されます。

- **システム情報**: サーバーのマシン、システムおよび IPアドレス
- **アプリケーション情報**: 4D Server の内部バージョン番号およびボリュームシャドウコピーステータス
- **最大接続数**: サーバータイプ毎に可能な同時接続数
- **ライセンス**: ライセンスの詳細。 プロダクトライセンス、あるいは付随エクスパンションのいずれかが 10日以内に失効するとき (例: サブスクリプション型ライセンスなど)、4D Server は自動的にそのライセンスを 4Dユーザーアカウントから更新しようとします。 この場合、なんらかの理由 (接続エラー、無効なアカウント状態、契約が延長されていないなど) で自動更新が失敗した場合、サーバー管理者に警告を伝えるアイコンがライセンスの隣に表示されます。 エリア上にマウスをホバーさせると、ライセンス更新状態についての追加の情報が tips として表示されます:

![](assets/en/Admin/server-licence-failed.png)

こういった場合には通常、[**ライセンスマネージャー**](licenses.md) をチェックする必要があります。

#### 詳細エリア

"詳細" エリアは、すでにグラフィックエリアで表示されている情報の一部と、追加の情報を提供します。

- **ハードディスク**: ハードディスク全体、およびデータベースデータ ( データファイルとインデックスファイル) の使用スペース、他のファイルの使用スペース、空きスペースなどを表示します。
- **メモリ**: マシンにインストールされた RAMメモリ、4D Server による使用量、他のアプリケーションによる使用量、および空き容量。 4D Server が使用するメモリはグラフィックエリアにも動的に表示できます。
- **プロセッサー**: 4D Server と他のアプリケーションによる、プロセッサーの使用率。 この使用率は絶えず再計算されます。 4D Server による使用率はグラフィックエリアにも動的に表示できます。
- **ネットワーク**: マシン (サーバーまたはクライアント) が受信および送信したその瞬間のバイト数。 この値は絶えず更新されます。 受信したバイト数はグラフィックエリアにも動的に表示できます。


## ユーザーページ

**ユーザー** ページには、サーバーに接続しているユーザーが表示されます:


![](assets/en/Admin/server-users.png)

"ユーザー" ボタンには、データベースに接続中のユーザ数が括弧内に表示されます (この番号は、ウィンドウに適用される表示フィルターを考慮しません)。 このページには、動的な検索エリアやコントロールボタンもあります。 ヘッダーエリアをドラッグ＆ドロップして、列の順番を入れ替えることができます。

また、ヘッダーをクリックすると、リストの値が並べ替えられます。 クリックするごとに昇順/降順が入れ替わります。

![](assets/en/Admin/server-users-sort.png)

### ユーザーリスト

サーバーに接続したユーザーごとに、以下の情報がリストに表示されます:

- システム: クライアントマシンのシステム (macOS/Windows)。
- **4Dユーザー**: 4Dユーザー名、またはユーザーマシン上で [`SET USER ALIAS`](https://doc.4d.com/4dv19/help/command/ja/page1666.html) コマンドで設定されていればエイリアス。 パスワードシステムが有効になっていない場合、かつエイリアスも設定されていなければ、すべてのユーザーは "Designer" となります。
- **マシン名**: リモートマシンの名前。
- **セッション名**: リモートマシン上で開かれたセッション名。
- **IP アドレス**: リモートマシンの IPアドレス。
- **ログイン日**: リモートマシンが接続した日付と時刻。
- **CPU時間**: 接続してからこのユーザーが消費した CPU の時間
- **Activity**: 4D Server がこのユーザーのために使用する時間の割合 (動的表示)。 リモートマシンがスリープモードに切り替わっている場合には "スリープ中" と表示 (以下参照)。

#### スリープ中ユーザーの管理

4D Server は、サーバーマシンへのアクセスがアクティブである間にスリープモードへと切り替わってしまった 4Dリモートアプリケーションを実行しているマシンについて、特別な管理をします。 この場合、接続されている 4Dリモートアプリケーションはこの急な切断を 4D Server へと自動的に知らせます。 サーバー側では、接続しているユーザーのアクティビティステータスを **スリープ中** へと変更されます:

![](assets/en/Admin/server-sleeping.png)

このステータスはサーバー側のリソースを一部解放します。 これに加え、4Dリモートアプリケーションはスリープモードから復帰したときに自動的に 4D Server へと再接続します。

サポートされるシナリオは、以下の様なものです: たとえばお昼休みなどでリモートユーザーが作業を中断するも、サーバーとの接続は開いたままにしたとします。 マシンはスリープモードへと切り替わります。 ユーザーが戻ってきてマシンをスリープから復帰させると、4Dリモートアプリケーションは自動的にサーバーへの接続を復元するとともにセッションコンテキストも復元します。

> スリープ状態のリモートセッションは、48時間活動しないとサーバーから自動的に切断されます。 このデフォルトのタイムアウトを変更するには、[`SET DATABASE PARAMETER`](https://doc.4d.com/4dv19/help/command/ja/page642.html) コマンドの `Remote connection sleep timeout` セレクターを使用します。


### 検索/フィルターエリア

この機能を使用して、検索エリアに入力されたテキストに対応する行だけをリストに表示させ、行数を減らすことができます。 エリアには、どの列に対して検索/フィルターが実行されるかが表示されています。 ユーザーページでは、4D ユーザー、マシン名、そしてセッション名です。

エリアにテキストが入力されると、リストはリアルタイムで更新されます。 値をセミコロンで区切ることで、一つ以上の値を使用して検索をおこなうことができます。 この場合 `OR` タイプの演算がおこなわれます。 たとえば、"John;Mary;Peter" と入力すると、John または Mary または Peter が対象となる列にある行のみが表示されます。


### 管理ボタン

このページには 3つのコントロールボタンがあります。 これらのボタンは、最低 1つの行が選択されているときに有効になります。 **Shift**キーを押しながらクリックして連続した行を、あるいは **Ctrl** (Windows) / **Command** (macOS) キーを押しながらクリックして連続しない行を複数選択できます。

#### メッセージ送信

このボタンを使用して、ウィンドウで選択した 4Dユーザーにメッセージを送信できます。 ユーザーが選択されていないと、ボタンを使用できません。 ボタンをクリックするとダイアログボックスが表示され、メッセージを入力できます。 ダイアログにはメッセージを受信するユーザーの数が表示されます:

![](assets/en/Admin/server-message.png)

クライアントマシン上でこのメッセージは警告メッセージとして表示されます。

> [`SEND MESSAGE TO REMOTE USER`](https://doc.4d.com/4dv19/help/command/ja/page1632.html) コマンドを使用することでも、リモートユーザーに対して同じアクションを実行することができます。


#### プロセス監視

このボタンをクリックすると、選択されたユーザーのプロセスを、管理ウィンドウの [**プロセス** ページ](#プロセスページ) に直接表示させることができます。 ボタンをクリックすると、4D Server はプロセスページに移動し、このページの検索/フィルターエリアに選択されたユーザー名を入力します。

#### ユーザーをドロップ

このボタンは、選択したユーザーの接続を強制的に解除するために使用します。 このボタンをクリックすると警告ダイアログが表示され、接続解除を実行するかキャンセルするか選択できます。確認ダイアログなしに選択ユーザーの接続を解除するには、**Alt**キーを押しながら、**ユーザーをドロップ** ボタンをクリックします。

> [`DROP REMOTE USER`](https://doc.4d.com/4dv19/help/command/ja/page1633.html) コマンドを使用することでも、リモートユーザーに対して同じアクションを実行することができます。



## プロセスページ

**プロセス** ページには実行中のプロセスが表示されます。

![](assets/en/Admin/server-admin-process-page.png)


"プロセス" ボタンには、サーバーで実行中のプロセス数が括弧内に表示されます (この番号は、ウィンドウに適用される表示フィルターや **グループ毎にプロセスを表示** オプションのステータスを考慮しません)。

列ヘッダーをドラッグ＆ドロップして、列の順番を入れ替えることができます。 また、ヘッダーをクリックすると、リストの値が並べ替えられます。

ユーザーページと同様にこのページにも、検索欄に入力されたテキストに対応する行だけをリストに表示させ、行数を減らすことができる動的な [検索/フィルターエリア](#検索フィルターエリア) があります。 検索/フィルターはセッションとプロセス名の列に対して実行されます。

ウィンドウに表示されるプロセスを、タイプ毎にフィルターするためのボタンが 3つあります:

![](assets/en/Admin/server-process-buttons.png)

- **ユーザープロセス**: ユーザーセッションにより、またユーザーセッションのために作成されたプロセス。 このプロセスには人のアイコンが表示されます。
- **4D プロセス**: 4D Server エンジンが生成したプロセス。 このプロセスには歯車のアイコンが表示されます。
- **予備プロセス**: 使用されていないが一時的に保持され、いつでも再利用が可能なプロセス。 このメカニズムは 4D Server の反応性を向上させます。 このプロセスには薄暗い人のアイコンが表示されます。

**グループ毎にプロセスを表示** オプションを使用して、4D Server の内部プロセスやクライアントプロセスをグループ化できます。 このオプションをチェックすると:

- 4Dクライアントのプロセス (メインの 4Dクライアントプロセスや 4Dクライアントの基本プロセス。[プロセスタイプ](#プロセスタイプ) 参照) は 1つにグループ化されます。
- "タスクマネージャー" グループが作成され、タスクを分割するための内部プロセス (共有バランサー、ネットセッションマネージャー、Exclusive pool worker) がグループ化されます。
- "クライアントマネージャー" グループが作成され、これにはクライアントのさまざまな内部プロセスが含まれます。

ウィンドウの下段には選択したプロセスの稼働状況がグラフィカルに表示されます。

> **Shift**キーを押しながら連続した行を、**Ctrl** (Windows) / **Command** (macOS) キーを押しながら非連続の行を選択できます。

プロセスの稼働状況は、4D Server がこのプロセスのために使用した時間のパーセンテージです。 ウィンドウにはプロセスごとに以下の情報が表示されます:

- プロセスタイプ (後述)
- セッション/情報:
    - 4Dプロセス - 空白
    - ユーザープロセス - 4Dユーザー名
    - Webプロセス - URLパス
- プロセス名
- プロセス番号 (たとえば [`New process`](https://doc.4d.com/4dv19/help/command/ja/page317.html) 関数で返される値)。 プロセス番号はサーバー上で割り当てられる番号です。 グローバルプロセスの場合、この番号はクライアントマシン上で割り当てられた番号と異なる場合があります。
- プロセスの現在の状況
- 作成されてからのプロセスの実行時間 (秒)
- 4D Server がこのプロセスに使用した時間のパーセンテージ

### プロセスタイプ

プロセスタイプはアイコンで識別できます。 アイコンの色や形に対応するプロセスタイプは以下のとおりです:

| icon                                    | type                                                                        |
| --------------------------------------- | --------------------------------------------------------------------------- |
| ![](assets/en/Admin/server-icon-1.png)  | アプリケーションサーバー                                                                |
| ![](assets/en/Admin/server-icon-2.png)  | SQL サーバー                                                                    |
| ![](assets/en/Admin/server-icon-3.png)  | DB4D サーバー (データベースエンジン)                                                      |
| ![](assets/en/Admin/server-icon-4.png)  | Web サーバー                                                                    |
| ![](assets/en/Admin/server-icon-5.png)  | SOAP サーバー                                                                   |
| ![](assets/en/Admin/server-icon-6.png)  | 保護された 4Dクライアントプロセス (接続された 4D の開発プロセス)                                       |
| ![](assets/en/Admin/server-icon-7.png)  | メイン4Dクライアントプロセス (接続された 4D のメインプロセス。 クライアントマシン上で作成されたプロセスに対応するサーバープロセス)      |
| ![](assets/en/Admin/server-icon-8.png)  | 4Dクライアント基本プロセス (4Dクライアントプロセスと並列なプロセス。 メイン4Dクライアントプロセスをコントロールするプリエンプティブプロセス) |
| ![](assets/en/Admin/server-icon-9.png)  | 予備プロセス (以前または後の "4Dクライアントデータベースプロセス")                                       |
| ![](assets/en/Admin/server-icon-10.png) | SQL サーバーワーカープロセス                                                            |
| ![](assets/en/Admin/server-icon-11.png) | HTTP サーバーワーカープロセス                                                           |
| ![](assets/en/Admin/server-icon-12.png) | 4Dクライアントプロセス (接続された 4D 上で実行中のプロセス)                                          |
| ![](assets/en/Admin/server-icon-13.png) | ストアドプロシージャー (接続された 4D により起動され、サーバー上で実行しているプロセス)                             |
| ![](assets/en/Admin/server-icon-14.png) | Web メソッド (4DACTION などにより起動)                                                 |
| ![](assets/en/Admin/server-icon-15.png) | Web メソッド (プリエンプティブ)                                                         |
| ![](assets/en/Admin/server-icon-16.png) | SOAP メソッド (Webサービスにより起動)                                                    |
| ![](assets/en/Admin/server-icon-17.png) | SOAP メソッド (プリエンプティブ)                                                        |
| ![](assets/en/Admin/server-icon-18.png) | ロガー                                                                         |
| ![](assets/en/Admin/server-icon-19.png) | TCP接続リスナー                                                                   |
| ![](assets/en/Admin/server-icon-20.png) | TCPセッションマネージャー                                                              |
| ![](assets/en/Admin/server-icon-21.png) | その他のプロセス                                                                    |
| ![](assets/en/Admin/server-icon-22.png) | ワーカープロセス (コオペラティブ)                                                          |
| ![](assets/en/Admin/server-icon-23.png) | 4Dクライアントプロセス (プリエンプティブ)                                                     |
| ![](assets/en/Admin/server-icon-24.png) | ストアドプロシージャー (プリエンプティブプロセス)                                                  |
| ![](assets/en/Admin/server-icon-25.png) | ワーカープロセス (プリエンプティブ)                                                         |

> **グループ毎にプロセスを表示** オプションがチェックされていると、それぞれの 4Dクライアントメインプロセスと、その対である 4Dクライアント基本プロセスは一緒にグループ化されて表示されます。


### 管理ボタン

このページには、選択されたプロセスに対して動作する 5つのコントロールボタンがあります。 ユーザープロセスに対してのみ使用できる点に注意してください。

![](assets/en/Admin/server-process-actions.png)

- **プロセスを中断**: 選択したプロセスをアボートします。 このボタンをクリックすると警告ダイアログが表示され、操作を続行またはキャンセルできます。

> 確認ダイアログなしに選択したプロセスをアボートするには、**Alt**キーを押しながらこのボタンをクリックするか、[`ABORT PROCESS BY ID`](https://doc.4d.com/4dv19/help/command/ja/page1634.html) コマンドを使用します。

- **プロセスを一時停止**: 選択したプロセスを一時停止します。
- **プロセスをアクティベート**: 選択したプロセスの実行を再開します。 対象のプロセスは、前述のボタンかプログラムにより一時停止状態でなければなりません。そうでなければ、このボタンは効果ありません。
- **プロセスをデバッグ**: 選択したプロセスのデバッガーをサーバーマシン上で開きます。 このボタンをクリックすると警告ダイアログが表示され、操作を続行またはキャンセルできます。 4Dコードが実際にサーバーマシン上で実行されている場合にのみ、デバッガーウィンドウが表示される点に注意してください (たとえば、トリガーや "サーバー上で実行" 属性を持つメソッドの実行時など)。

> 確認ダイアログなしに選択したプロセスをデバッグするには、**Alt**キーを押しながらこのボタンをクリックします。

- **ユーザーを表示**: 選択されたプロセスのユーザーを管理ウィンドウの [ユーザーページ](#ユーザーページ) に直接表示させることができます。 1つ以上のユーザープロセスが選択されている場合にこのボタンは有効になります。


## メンテナンスページ

**メンテナンス** ページには、アプリケーションの現在の動作状況に関する情報が表示されます。 また、基本的なメンテナンス機能にアクセスすることもできます:

![](assets/en/Admin/server-maintenance.png)


### 最新の検査/圧縮:

このエリアには、データベース上で実行された最新の [データの検査](MSC/verify.md) および [圧縮処理](MSC/compact.md) の日付、時刻、状況が表示されます。

#### レコードとインデックスを検査

このボタンを使用して、サーバーを止めることなく検査処理を直接起動できます。 検証の間、サーバーの動作が遅くなるかもしれないことに留意してください。

データベースのすべてのレコードとすべてのインデックスが検証されます。 検査対象を絞り込んだり、追加のオプションを指定したい場合は、[Maintenance ＆ Security Center](MSC/overview.md) (MSC) を使用します。

検査後、サーバー上の [maintenance Logs](Project/architecture.md#logs) フォルダーに、XML形式でレポートファイルが作成されます。 **レポートを表示** (クライアントマシンから処理が実行された場合は **レポートをダウンロード**) ボタンをクリックすると、ブラウザーにレポートを表示できます。


このエリアには、データベースのデータに対して実行された処理の日付、時刻、状況が表示されます。

#### データ圧縮

このボタンを使用して、データ圧縮処理を直接起動できます。 この処理をおこなうにはサーバーを停止させる必要があります。ボタンをクリックすると、4D Server の終了ダイアログが表示され、終了方法を選択することができます:

![](assets/en/Admin/server-shut.png)

アプリケーションが実際に停止された後、4D Server はデータベースのデータに対する標準の圧縮処理をおこないます。 追加のオプションを指定したい場合は、[Maintenance ＆ Security Center](MSC/overview.md) (MSC) を使用します。

圧縮が終了すると、4D Server は自動でデータベースを再開します。 その後、4Dユーザーの再接続が可能になります。

> 圧縮リクエストがリモートの 4Dマシンからなされた場合、このマシンは 4D Server により自動で再接続されます。

検査後、サーバー上の [maintenance Logs](Project/architecture.md#logs) フォルダーに、XML形式でレポートファイルが作成されます。 **レポートを表示** (クライアントマシンから処理が実行された場合は **レポートをダウンロード**) ボタンをクリックすると、ブラウザーにレポートを表示できます。


### 動作時間

このエリアには、サーバーが開始されてからの稼働時間 (日、時、分) が表示されます。


#### サーバを再起動...

このボタンをクリックするとサーバーを即座に再起動できます。 ボタンをクリックすると、4D Server の終了ダイアログが表示され、終了方法を選択することができます。 再起動後、4D Server は自動でプロジェクトを再度開きます。 その後、4Dユーザーの再接続が可能になります。

> 再起動リクエストがリモートの 4Dマシンからなされた場合、このマシンは 4D Server により自動で再接続されます。

### 前回のバックアップ

このエリアには、データベースの [前回のバックアップ](MSC/backup.md) の日付・時刻と、予定された次のバックアップがあれば、それに関する情報が表示されます。 自動バックアップは、ストラクチャー設定の **スケジューラー** ページで設定します

- **前回のバックアップ**: 前回のバックアップ日時。
- **次回のバックアップ**: 予定された次のバックアップ日時。
- **必要なスペース**: バックアップに必要な計算された空き容量。 バックアップファイルの実際のサイズは (圧縮などの) 設定や、データファイルの変化により変わります。
- **空きスペース**: バックアップボリュームの空き容量。


**バックアップ開始** ボタンを使用して、現在のバックアップパラメーター ( バックアップするファイル、アーカイブの場所、オプションなど) を使用したバックアップを即座に開始できます。 **環境設定...** ボタンをクリックして、これらのパラメーターを確認できます。 サーバー上でのバックアップがおこなわれる間、クライアントマシンはブロックされ (ただし接続解除はされません)、新規のクライアント接続はできなくなります。


### リクエストとデバッグログ

このエリアには、(ログファイルが有効化されている場合に) ログファイルの記録に要した時間が表示され、ログの有効化も管理できます。

ログファイルについては、[**ログファイルの詳細**](debugLogFiles.md) を参照ください。

#### リクエストとデバッグのログを開始/停止

**リクエストとデバッグのログを開始** ボタンでログファイルが開始されます。 これによりフォーマンスが著しく低下する場合があるため、これはアプリケーションの開発フェーズでのみ使用します。

> このボタンは、サーバー上で実行されているオペレーションしか記録しません。

ログが有効になると、ボタンのタイトルが **リクエストとデバッグのログを停止** に変わり、いつでもリクエストの記録を停止できます。 停止後にログを再開すると、以前のファイルは消去されることに留意してください。

#### レポートを表示

**レポートを表示** (リモートのデスクトップクライアントから処理を実行した場合は **レポートをダウンロード**) ボタンをクリックすると、システムウィンドウが開いて、リクエストログファイルが表示されます。

#### Load logs configuration file

This button allows you to load a special server log configuration file (`.json` file). Such a file can be provided by 4D technical services to monitor and study specific cases.


#### Pause logging

This button suspends all currently logging operations started on the server. This feature can be useful to temporarily lighten the server tasks.

When the logs have been paused, the button title changes to **Resume logging**, so that you can resume the logging operations.

> You can pause and resume logging using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) command.


## Application Server Page

The Application Server page groups together information about the desktop application published by 4D Server and can be used to manage this publication.

![](assets/en/Admin/server-admin-application-page.png)


The upper part of the page provides information about the current status of the 4D Server application server.

- **State**: Started or Stopped.
- **Starting time**: Date and time the application server was launched. This date corresponds to the opening of the project by 4D Server.
- **Uptime**: Time elapsed since last opening of the project by the server.

### Accept/Reject New Connections

This button toggles and can be used to manage the access of new desktop client machines to the application server.

By default, when the project is published:
- The button is titled "Reject new connections."
- New desktop clients can connect freely (within the limit of the connections permitted by the license).
- The project name is published in the remote connection dialog box (if the "At Startup Publish Database Name in the Connection Dialog" option is checked in the Preferences).

If you click on the **Reject new connections** button:
- The button title changes to "Accept new connections."
- No new desktop client can then connect. Clients attempting to connect will receive the following message:

![](assets/en/Admin/server-error.png)

- The project name no longer appears in the remote connection dialog box.
- Desktop clients that are already connected are not disconnected and can continue to work normally.

> You can perform the same action with the [`REJECT NEW REMOTE CONNECTIONS`](https://doc.4d.com/4dv19/help/command/en/page1635.html) command.

- If you click on the **Accept new connections button**, the application server returns to its default state.

This feature permits, for example, an administrator to carry out various maintenance operations (verification, compacting, etc.) just after having started the server. If the administrator uses a remote connection, they can be certain to be the only one modifying the data. It is also possible to use this function in preparation of a maintenance operation which requires that there be no desktop client machine connected.

### Information

#### 設定

This area provides information about the 4D project published by the server: name and location of data and structure files and name of database log file. You can click on the structure or data file name in order to view its complete pathname.

The **Mode** field indicates the current execution mode of the application: compiled or interpreted.

The lower part of the area indicates the server configuration parameters (launched as service, port and IP address) and the enabling of TLS for client-server connections (does not concern SQL nor HTTP connections).

#### メモリ

This area indicates the **Total cache memory** (parameter set in the settings) and the **Used cache memory** (dynamic allocation by 4D Server according to its needs).


#### Application Server Connections

- **Maximum**: maximum number of simultaneous client connections allowed for the application server. This value depends on the license installed on the server machine.
- **Used**: actual number of connections currently being used.


## SQL Server Page

The SQL Server page groups together information about the integrated SQL server of 4D Server. It also includes a button that can be used to control the activation of the server.

![](assets/en/Admin/server-admin-sql-page.png)


The upper part of the page provides information about the current status of the SQL server of 4D Server.

- **State**: Started or Stopped
- **Starting time**: Date and time the SQL server was last launched.
- **Uptime**: Time elapsed since last startup of the SQL server.

### Start / Stop SQL Server

This button toggles and can be used to control the activation of the 4D Server SQL server.

- When the SQL server state is "Started," the button is titled **Stop SQL Server**. If you click on this button, the 4D Server SQL server is immediately stopped; it no longer replies to any external SQL requests received on the designated TCP port.
- When the SQL server state is "Stopped," the button is titled **Start SQL Server**. If you click on this button, the 4D Server SQL server is immediately started; it replies to any external SQL queries received on the designated TCP port. Note that you will need a suitable license to be able to use the 4D SQL server.

> The SQL server can also be launched automatically on application startup (option in the Settings) or by programming.

### Information

#### 設定

This area provides information about the SQL server configuration parameters: automatic launching on startup, listening IP address, TCP port (19812 by default) and enabling of SSL for SQL connections (does not concern 4D nor HTTP connections).

These parameters can be modified via the 4D Settings.

#### Connections

Number of SQL connections currently open on 4D Server.

#### Maximum Connections

Maximum number of simultaneous SQL connections allowed. This value depends on the license installed on the server machine.

## HTTP Server Page

The HTTP Server page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. The SOAP server manages the publication of Web Services. These servers rely on the internal HTTP server of 4D Server.

![](assets/en/Admin/server-admin-web-page.png)


The upper part of the page provides information about the current status of the HTTP server of 4D Server.

- **State**: Started or Stopped
- **Starting time**: Date and time the HTTP server was last launched.
- **Uptime**: Time elapsed since last startup of the HTTP server.
- **Total HTTP hits**: Number of (low level) HTTP hits received by the HTTP server since it was started.


### Start/Stop HTTP Server

This button toggles and can be used to control the activation of the 4D Server HTTP server.

- When the HTTP server state is "Started," the button is titled **Stop HTTP Server**. If you click on this button, the 4D Server HTTP server is immediately stopped; the Web server, REST server, and SOAP server no longer accept any requests.
- When the HTTP server state is "Stopped," the button is titled **Start HTTP Server**. If you click on this button, the 4D Server HTTP server is immediately started; Web, REST, and SOAP requests are accepted.

> You must have a suitable license in order to be able to start the HTTP server.
> 
> The HTTP server can also be launched automatically on application startup (Settings) or by programming.

### Web Information

This area provides specific information about the Web server of 4D Server.

- **Web requests**: Accepted or Rejected. This information indicates whether the Web server is activated. Since the Web server is directly linked to the HTTP server, Web requests are accepted when the HTTP server is started and rejected when it is stopped.
- **Maximum connections**: Maximum number of Web connections allowed. This value depends on the license installed on the server machine.

### SOAP Information

This area provides specific information about the SOAP server of 4D Server and includes a control button.

- **SOAP requests**: Accepted or Rejected. This information indicates whether the SOAP server is activated. In order for SOAP requests to be accepted, the HTTP server must be started and the SOAP server must explicitly accept the requests (see the Accept/Reject button).
- **Maximum connections**: Maximum number of SOAP connections allowed. This value depends on the license installed on the server machine.
- **Accept/Reject SOAP requests** button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the **Allow Web Services Requests** option on the "Web Services" page of the Settings (and vice versa). You can also use the [`SOAP REJECT NEW REQUESTS`](https://doc.4d.com/4dv19/help/command/en/page1636.html) command to refuse new SOAP requests, however this does not modify the value of the **Allow Web Services Requests** option.

If you click on the **Accept SOAP requests** button and the HTTP server is stopped, 4D automatically starts it.

### HTTP Server Configuration

This area provides information about the configuration parameters and operation of the HTTP server:

- **Auto-launched at startup**: parameter set via the Settings.
- **HTTP Server processes (used/total)**: number of HTTP processes created on the server (current number of processes / total of all processes created).
- **Cache memory**: size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the **Clear Cache** button to empty the current cache.
- **Listening to IP**, **HTTP Port** (80 by default), **TLS enabled** for HTTP connections (does not concern 4D nor SQL connections) and **HTTPS Port** used: current [configuration parameters](WebServer/webServerConfig.md) of the HTTP server, specified through the Settings or by programming.
- **Log file information**: name, format and date of the next automatic log backup of the HTTP server (logweb.txt file).


## Real Time Monitor Page

The Real Time Monitor page monitors the progress of "long" operations performed by the application in real time. These operations are, for example, sequential queries, execution of formulas, etc.

![](assets/en/Admin/server-admin-monitor-page.png)
> This page is available in the administration window of the server machine and also from a remote 4D machine. In the case of a remote machine, this page displays data from operations performed on the server machine.

A line is added for each long operation performed on the data. This line automatically disappears when the operation is complete (you can check the **Display operations at least 5 seconds** option to keep quick operations on screen for 5 seconds, see below).

The following information is provided for each line:

- **Start Time**: starting time of operation in the format: "dd/mm/yyyy - hh:mm:ss"
- **Duration** (ms): duration in milliseconds of operation in progress
- **Information**: title of operation.
- **Details**: this area displays detailed information which will vary according to the type of operation selected. More specifically:
    + **Created on**: indidates whether the operation results from a client action (Created on client) or if it was started explicitly on the server by means of a stored procedure or the "Execute on server" option (Created on server).
    + **Operation Details**: Operation type and (for query operations) query plan.
    + **Sub-operations** (if any): Dependent operations of the selected operation (e.g. deleting related records before a parent record).
    + **Process Details**: Additional information concerning the table, field, process or client, depending on the type of operation

> Real-time monitoring page uses the [`GET ACTIVITY SNAPSHOT`](https://doc.4d.com/4dv19/help/command/en/page1277.html) command internally. More information can be found in this command description.

The page is active and updated permanently as soon as it is displayed. It should be noted that its operation can significantly slow the execution of the application. It is possible to suspend the updating of this page in one of the following ways:

- clicking on the **Pause** button,
- clicking in the list,
- pressing the space bar.

When you pause the page, a "PAUSED" message appears and the button label changes to **Resume**. You can resume monitoring of the operations by performing the same action as for pausing.

#### 詳細モード

The RTM page can display additional information, if necessary, for each listed operation.

To access the advanced mode for an operation, press **Shift** and select the desired operation. All available information is then displayed in the "Process Details" area without any filtering (as returned by the `GET ACTIVITY SNAPSHOT` command). Available information depends on the operation selected.

Here is an example of information displayed in standard mode:

![](assets/en/Admin/server-admin-monitor-adv1.png)


In advanced mode (**Shift+Click** on the operation), additional information is displayed:

![](assets/en/Admin/server-admin-monitor-adv2.png)

#### Snapshot button

The **Snapshot** button allows you to copy to the clipboard all the operations displayed in the RTM panel, as well as their related details (process and sub-operation info):

![](assets/en/Admin/server-admin-monitor-snapshot.png)


#### Display operations at least 5 seconds

If you check the **Display operations at least 5 seconds** option, any listed operation will be displayed on the page for at least five seconds, even after its execution is finished. Retained operations appear dimmed in the operation list. This feature is useful for getting information about operations that execute very quickly.
