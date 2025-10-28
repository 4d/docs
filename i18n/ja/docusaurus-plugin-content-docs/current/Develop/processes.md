---
id: processes
title: プロセスとワーカー
---

4D のマルチタスク機能は、複数の処理を同時に実行することを可能にします。 これらの処理を **プロセス** と呼びます。 マルチプロセスは、1つのコンピューター上でのマルチユーザーのようなもので、それぞれの処理は個別のタスクです。 つまり、それぞれのメソッドを個別のデータベースタスクとして実行できるということです。

コードがスレッドセーフであれば [**プリエンプティブプロセス**](preemptive.md) を作成できるため、コンパイル済みアプリケーションをマルチコアコンピューターで実行することで、処理がより高速になります。

:::note

4Dアプリケーションは自身が必要とするプロセスも作成します。例: ユーザインタフェースのウィンドウ表示を管理するメインプロセス、デザインモードのウィンドウとエディターを管理するデザインプロセス (これらは[ワーカープロセス](#ワーカープロセス)です)、Webサーバープロセス、キャッシュマネージャープロセス、インデックスプロセス、そして On Event Managerプロセス。

:::

## プロセスの作成とクリア

新規プロセスを作成するにはいくつかの方法があります:

- デザインモードにおいて、"メソッド実行" ダイアログボックスで **新規プロセス** チェックボックスをチェックした後、メソッドを実行する。 メソッド実行ダイアログボックスで選択したメソッドが (そのプロセスをコントロールする) プロセスメソッドとなります。
- [`New process`](../commands-legacy/new-process.md) コマンドを使用する。 The method passed as a parameter to the [`New process`](../commands/new-process) command is the process method.
- サーバー上ですトアドプロシージャーを作成するためには、[`Execute on server`](../commands-legacy/execute-on-server.md) コマンドを使用します。 コマンドの引数として渡されたメソッドがプロセスメソッドです。
- [`CALL WORKER`](../commands-legacy/call-worker.md) コマンドを使用する。 ワーカープロセスが既に存在していない場合、新たに作成されます。

:::note

デスクトップアプリケーションでは、メニューコマンドを選択することでプロセスを開始できます。 [`メニューエディター`](../Menus/creating.md) において、メニューコマンドを選択して、**新規プロセスで開始** チェックボックスをクリックします。 メニューコマンドに関連付けられたメソッドがプロセスメソッドです。

:::

プロセスは以下の条件でクリアできます。最初の 2つの条件では自動的におこなわれます:

- プロセスメソッドの実行が完了したとき。
- ユーザーがアプリケーションを終了したとき。
- メソッドからプロセスを中止するか、またはデバッガーまたはランタイムエクスプローラーで **アボート** ボタンを使用した場合。
- [`KILL WORKER`](../commands-legacy/kill-worker.md) コマンドを呼び出した場合(ただしこれで削除できるのはワーカープロセスのみです)。

プロセスは別のプロセスを作成することができます。 プロセスは階層構造にはなっていません。どのプロセスから作成されようと、すべてのプロセスは同等です。 いったん、“親” プロセスが “子” プロセスを作成すると、親プロセスの実行状況に関係なく、子プロセスは処理を続行します。

## プロセスの要素

各プロセスには、他のプロセスから独立して扱えるいくつかの要素があります。

### ランゲージ要素

- 変数: すべてのプロセスは独自の [`プロセス変数`](../Concepts/variables#プロセス変数) を持っています。 プロセス変数はその変数を作成したプロセスの範囲内でのみ認識されます。
- プロセスセット: 各プロセスは、独自のプロセスセットを持っています。 `LockedSet` はプロセスセットです。 プロセスセットは、プロセスメソッドが終了すると直ちに消去されます。
- [`エラー処理メソッド`](../Concepts/error-handling#エラー処理メソッドの実装): 各プロセスは、独自のエラー処理メソッドを持てます。
- [`デバッガーウィンドウ`](../Debugging/debugger#デバッガーの呼び出し): 各プロセスは、独自のデバッガーウィンドウを持つことができます。

### インタフェース要素

インターフェース要素は、[デスクトップアプリケーション](../category/desktop-applications) で使用されます。 以下のものがあります:

- [メニューバー](../Menus/creating.md): 各プロセスは、独自のカレントメニューバーを持つことができます。 最前面のプロセスのメニューバーがアプリケーションのカレントメニューバーになります。
- 1つ以上のウィンドウ: 各プロセスは、1つまたは複数のウィンドウを同時に開くことができます。 他方、ウィンドウをまったく持たないプロセスもあります。
- 1つのアクティブ (最前面) ウィンドウ: プロセスは、複数のウィンドウを同時に開くことができますが、アクティブウィンドウは各プロセスに1つしかありません。 複数のアクティブウィンドウを持つには、アクティブウィンドウの数だけプロセスを起動しなければなりません。
- 入力フォームと出力フォーム: 各プロセスの各テーブルに対して、デフォルトの入力フォームと出力フォームをメソッドから設定することができます。

:::info

- プロセスはデフォルトではメニューバーを含みません。つまり、**編集** メニューのショートカット (具体的には、カット/コピー/ペースト) はプロセスウィンドウでは利用できません。 プロセスからダイアログボックスや 4Dエディター (フォームエディター、クエリエディター、Request等) を呼び出した場合、 ユーザーがコピー/ペーストなどのショートカットを利用できるようにするためには、**編集** メニューに相当するものがプロセスにインストールしておく必要があります。
- [プリエンプティブプロセス](preemptive.md) と、サーバー上で実行されるプロセス (ストアドプロシージャー) にインターフェース要素を含めてはいけません。

:::

:::note

各プロセスは、テーブルごとのカレントセレクションおよびカレントレコードも持ちます。 これらのコンセプトの詳細については、[doc.4d.com](https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.ja.html) を参照ください。

:::

## Remote processes

When you create a process on a remote 4D, a "twin" process is created on the server to handle data access and database context as soon as it is necessary, i.e. the first time the process on the remote 4D needs to access data.

For optimization reason, while no server access is required, for example if the process on the remote 4D runs an event-handling method or controls floating windows, no twin process is created on the server.

## ワーカープロセス

ワーカープロセスとは、簡単かつ強力なプロセス間通信の方法です。 この機能は非同期のメッセージシステムに基づいており、プロセスやフォームを呼び出して、呼び出し先のコンテキストにおいて任意のメソッドを指定パラメーターとともに実行させることができます。

あらゆるプロセスは [`CALL WORKER`](../commands-legacy/call-worker.md) コマンドを使用することでワーカープロセスを "雇用" することができ、ワーカーのコンテキストにおいて任意のプロジェクトメソッドを指定のパラメーターで実行させることができます。つまり、呼び出し元のプロセスとワーカーの間で情報の共有が可能です。

:::info

デスクトップアプリケーションにおいては、[`CALL FORM`](../commands-legacy/call-form.md) コマンドを使うことで、あらゆるフォームのコンテキストにおいて任意のプロジェクトメソッドを指定のパラメーターで実行させることができます。

:::

これらの機能は、4D のプロセス間通信における次のニーズに対応します:

- コオペラティブおよびプリエンプティブプロセスの両方に対応しているため、インタープロセス変数が使えないプリエンプティブプロセスにおけるプロセス間通信に最適です ([インタープロセス変数は現在、非推奨です](https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.ja.html#5868705))。
- 煩雑になりやすいセマフォーの代替手法として使用できます。

:::note

Although they have been designed mainly for interprocess communication in the context of preemptive processes, [`CALL WORKER`](../commands/call-worker) and [`CALL FORM`](../commands/call-form) can be used with cooperative processes.

:::

### ワーカーの使用

ワーカーは、プロジェクトメソッドの実行を別プロセスに依頼するときに使います。 ワーカーには次のものが付随します:

- ワーカーを特定する一意の名称 (*警告: ワーカー名は文字の大小を区別します*)。これは、関連プロセスの名称にも使われます。
- ワーカーに関連付けられたプロセス (特定の時点において存在しない場合もあります)
- メッセージボックス
- 初期メソッド (任意)

You ask a worker to execute a project method by calling the [`CALL WORKER`](../commands/call-worker) command. 初めてワーカーを使用するときに、ワーカーはメッセージボックスとともに生成され、依頼内容を関連プロセスにて実行します。 ワーカープロセスが終了してもメッセージボックスは開いたままで、次のメッセージを受け取るとワーカープロセスが再開します。

この一連の流れをアニメーションで表しました:

![](../assets/en/Develop/WorkerAnimation.gif)

Unlike a process created with the [`New process`](../commands/new-process) command, a worker process **remains alive after the execution of the process method ends**. つまり、特定のワーカーにおけるメソッド実行はすべて同一プロセス内でおこなわれ、すべてのプロセス情報 (プロセス変数、カレントレコード、カレントセレクション、など) が保持されます。 続けて実行されるメソッドはこれらの情報を共有することになるため、プロセス間の通信が可能になります。 ワーカーのメッセージボックスは連続した呼び出しを非同期的に扱います。

[`CALL WORKER`](../commands/call-worker) encapsulates both the method name and command arguments in a message that is posted in the worker's message box. ワーカープロセスは、存在していなければ生成され、メッセージボックスに格納されたメッセージを実行します。 This means that [`CALL WORKER`](../commands/call-worker) will usually return before the method is actually executed (processing is asynchronous). For this reason, [`CALL WORKER`](../commands/call-worker) does not return any value. If you need a worker to send information back to the process which called it (callback), you need to use [`CALL WORKER`](../commands/call-worker) again to pass the information needed to the caller. つまり、この場合には、呼び出し元のプロセスもワーカーである必要があります。

It is not possible to use [`CALL WORKER`](../commands/call-worker) to execute a method in a process created by the [`New process`](../commands/new-process) command. メッセージボックスを持つワーカープロセスのみが、`CALL WORKER` によって呼び出し可能です。 Note that a process created by [`New process`](../commands/new-process) can call a worker, but cannot be called back.

Worker processes can be created on 4D Server through stored procedures: for example, you can use the `Execute on server` command to execute a method that calls the [`CALL WORKER`](../commands/call-worker) command.

ワーカープロセスを閉じるには [`KILL WORKER`](../commands-legacy/kill-worker.md) コマンドをコールします。これによってワーカーのメッセージボックスが空にされ、関連プロセスはメッセージの処理を停止し、現在のタスク完了後に実行を終了します。

ワーカープロセスを新規生成する際に指定したメソッドがワーカーの初期メソッドになります。 If [`CALL WORKER`](../commands/call-worker) is called with an empty *method* parameter, then the startup method is automatically reused as method to execute.

The main process created by 4D when opening a database for user and application modes is a worker process and can be called using [`CALL WORKER`](../commands/call-worker). Note that the name of the main process may vary depending on the 4D localization language, but it always has the process number 1; as a result, it's more convenient to designate it by process number instead of process name when calling [`CALL WORKER`](../commands/call-worker).

### ワーカープロセスの識別

全てのワーカープロセス(メインプロセスを除く)は、[`Process info`](../commands/process-info.md) コマンドからは `Worker process` (5) が返されるプロセスタイプを持ちます。

[専用アイコン](../ServerWindow/processes#プロセスタイプ) からもワーカープロセスを識別することができます。

### 参照

ワーカーの使い方の詳細については、[このブログ記事](https://blog.4d.com/ja/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/) を参照ください。
