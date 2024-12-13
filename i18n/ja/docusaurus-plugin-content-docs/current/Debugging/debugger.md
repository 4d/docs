---
id: debugger
title: デバッガー
---

The 4D debugger is useful when you need to spot errors or monitor the execution of methods. デバッガーを使って、コードをステップごとにゆっくり確認して情報を検証することができます。 このようにメソッドをステップごとに確認する処理はトレースと呼ばれます。

![debugger-window-local](../assets/en/Debugging/debugger-window-intro.png)

:::info

If you are used to coding with **VS Code**, you can also use this editor to debug 4D code on 4D Server after installing the [4D-Debugger](https://github.com/4d/4D-Debugger-VSCode) extension.

:::

## デバッガーの呼び出し

デバッガーを開くには、次のような方法があります:

- [シンタックスエラーウィンドウ](basics.md#シンタックスエラーウィンドウ) で **トレース** ボタンをクリックする。
- Using the [`TRACE`](../commands-legacy/trace.md) command
- メソッド実行ウィンドウで **デバッグ** ボタンをクリックする、またはコードエディターで **実行してデバッグ** ボタンを選択する。
- メソッド実行中に **Alt+Shift+右クリック** (Windows) または **Ctrl+Option+Cmd+クリック** (Macintosh) をおこない、表示されるポップアップウィンドウ内でトレースするプロセスを選択する:

![open-debugger](../assets/en/Debugging/openDebugger.png)

- ランタイムエクスプローラーのプロセスページにてプロセスを選択した後、**トレース** ボタンをクリックする。
- コードエディターウィンドウ、またはランタイムエクスプローラーのブレークおよびキャッチページでブレークポイントを作成する。

デバッガーウィンドウは、現在トレースしているメソッドまたはクラス関数の名前や、デバッガーが表示される原因となったアクションの情報を表示します。 上のウィンドウの例では、次の情報が表示されています:

- _drop_ is the method being traced
- The debugger window appeared because of a break point.

新しいデバッガーウィンドウの表示には、同じセッション内で表示された最後のデバッガーウィンドウと同じ構成 (ウィンドウのサイズと位置、分割線の配置および式評価エリアの内容) を使用します。 複数のユーザープロセスを実行した場合には、それぞれのプロセスを個別にトレースできます。つまり、各プロセスにつき 1つのデバッガーウィンドウを表示できます。

デバッガーウィンドウは、一般的にそのコードが実行されているマシン上に表示されます。 シングルユーザー版アプリケーションの場合、デバッガーは常にアプリケーションを実行しているマシン上に表示されます。 クライアント/サーバー版アプリケーションの場合は:

- ローカルで実行されているコードの場合には、リモート4D 上に表示されます。
- サーバー上で実行されているコード (**サーバー上で実行** オプションがつけられたメソッド) の場合には、サーバーマシン上に表示されます。

:::note 注記

- ヘッドレスモードで実行中のサーバーでは、デバッガーウィンドウを表示することはできません。この場合はリモートデバッガーを使用する必要があります。 [リモートマシンからのデバッグ](./debugging-remote.md) 参照。
- 運用環境で Qodlyページをデバッグする必要がある場合は、[Qodly Studio のデバッガーを 4D Server アプリケーションで有効化する](../WebServer/qodly-studio.md#4d-server-で-qodlyデバッガーを使用する) こともできます。

:::

## ツールバーボタン

デバッガーウィンドウの上部にある実行制御ツールバーには、デフォルトショートカットが設定された複数のボタンがあります:

![execution-control-toolbar-buttons](../assets/en/Debugging/executionToolbarButtons.png)

:::note

Default shortcuts can be customized in the [Shortcuts Page](../Preferences/shortcuts.md) of the Preferences dialog box.

:::

#### トレース終了

トレースが停止され、通常のメソッド実行が再開されます。

> **Shift** + **F5** or **Shift** + clicking the **No Trace** button resumes execution. この操作により、以降のカレントプロセスでの全ての TRACE 呼び出しが無効になります。

#### 次行に進む

現在のメソッド行 (プログラムカウンターと呼ばれる黄色い矢印で示されている行) が実行されます。 その後、デバッガは次の行に移動します。

"次の行に進む" ボタンは、サブルーチンや関数に移動することはなく、現在トレースの対象となっているメソッドのレベルにとどまります。 If you want to also trace subroutines and functions calls, use the **Step Into** button.

リモートデバッグにおいて、メソッドがサーバー上で実行されていた場合には、メソッドの最後の行の実行後にその親メソッドが呼ばれます。 If the parent method is executed on the remote side, the **Step Over** button has the same effect as the **No Trace** button.

#### 呼び出しメソッドもトレース

別のメソッド (サブルーチンまたは関数) を呼び出す行が実行される時にこのボタンを使用すると、呼び出されたメソッドがデバッガーウィンドウに表示され、ステップ実行できます。

The new method becomes the current (top) method in the [Call Chain Pane](#call-chain-pane) of the Debugger window.

When executing a line that does not call another method, this button has the same effect as the **Step Over** button.

#### Step Out

If you are tracing subroutines and functions, clicking on this button allows you to execute the entire method currently being traced and to step back to the caller method. The Debugger window is brought back to the previous method in the call chain. If the current method is the last method in the call chain, the Debugger window is closed.

In remote debugging, on execution of the last line of the method, if the method is executed on the server, the parent method is called. If the parent method is executed on the remote side, the button acts in the same manner as the No Trace button.

#### Step Into Process

On execution of a line that creates a new process (i.e., calling the New process command), this button opens a new Debugger window that allows you to trace the process method of the newly created process. On execution of a line that does not creates a new process, this button acts in the same manner as the Step Over button.

#### 中断

メソッドは中断され、メソッドの実行を開始する前の状態に戻ります。

- イベントに対して実行しているフォームメソッドまたはオブジェクトメソッドをトレースしている場合には、いずれの場合にも停止され、フォームに戻ります。
- アプリケーションモードから実行しているメソッドをトレースしていた場合には、停止後そのモードに戻ります。

#### 中断＆編集

The method that is executing when you click the **Abort and Edit** button opens in the Code Editor.

> **Tip**: Use this button when you know which changes are required in your code, and when these changes are required to pursue the testing of your methods. 変更が完了したら、メソッドを再実行できます。

#### 編集

コードエディターウィンドウが開いて、編集ボタンがクリックされた時点で実行していたメソッドを表示します。

このボタンをクリックしてメソッドを編集した場合には、現在の実行は中断されないため、編集内容の反映は次回実行時になります。

> **Tip:** Use this button when you know which changes are required in your code and when they don't interfere with the rest of the code to be executed or traced.

## Auto-saving

The current state of the debugger window is automatically saved in the project. 構成には次の内容が含まれます:

- the size and position of the window,
- the position of the division lines,
- the [display mode](#display-mode),
- the expressions currently displayed in the custom watch pane expressions. By default, expressions are saved with the current method or function. You can [**pin an expression**](#pin-an-expression) to keep it displayed in all contexts.

The **Default window configuration** button restores the default position and size of the current window (including the division lines and the window itself).

![factory-settings-button](../assets/en/Debugging/debugger-factory.png)

## ウォッチエリア

**ウォッチエリア** は実行コントロールツールバーの下、デバッグウィンドウの左上隅に表示されます。 次に例を示します:

![watch-pane](../assets/en/Debugging/watchPane.png)

> このエリアはリモートデバッグモードでは使用できません。

**ウォッチエリア** には、システム、4D環境、および実行環境について役立つ一般情報が表示されます。

**式** 欄には、要素や式の名前が表示されます。 **値** 欄には、要素や式に対応する現在の値が表示されます。 エリア右側の値をクリックすると、その値が変更可能な場合には、要素の値を修正できます。

テーマ、テーマサブリスト (あれば)、テーマ項目は、いつでも [カスタムウォッチエリア](#カスタムウォッチエリア) にドラッグ＆ドロップすることができます。

### 式リスト

#### Line Expressions

This theme lets you keep track of the values of expressions:

- 実行されるコードの行 (プログラムカウンターにより、[ソースコードエリア](#ソースコードエリア) 内で黄色の矢印でマークされている行) で使用されている。
- コードの前の行で使用されている。

コードの前の行とは実行直後の行であるため、ラインオブジェクトテーマでは、その行が実行される前または後の現在の行の要素や式が表示されます。  たとえば、次のメソッドを実行した場合を想定します:

```4d
TRACE
$a:=1
$b:=$a+1
$c:=$a+$b
```

1. ソースコードエリアのプログラムカウンターが `$a:=1` の行にセットされた状態で、デバッグウィンドウが開きます。 この時点では **ラインオブジェクト** テーマには、次のように表示されています:

   | $a | 未定義 |
   | -- | --- |

   まだ初期化されていない変数 `$a` が表示されているのは、実行の対象となっている行で使用されているためです。

2. **次行に進む** ボタンをクリックします。 プログラムカウンターは `$b:=$a+1` の行に設定されます。 この時点では **ラインオブジェクト** テーマには、次のように表示されています:

   | $a | 1   |
   | -- | --- |
   | $b | 未定義 |

   変数 `$a` の値は 1 になりました。 まだ初期化されていない変数 `$b` が表示されているのは、実行の対象となっている行で使用されているためです。

3. **次行に進む** ボタンをクリックします。 プログラムカウンターは $c:=$a+$b の行に設定されます。 この時点では **ラインオブジェクト** テーマには、次のように表示されています:

   | $c | 未定義 |
   | -- | --- |
   | $a | 1   |
   | $b | 2   |

   変数 `$b` の値が 2 になりました。 まだ初期化されていない変数 `$c` が表示されているのは、実行の対象となっている行で使用されているためです。

#### 変数

このテーマは、次のサブテーマから構成されます:

| サブテーマ    | 説明                                       | 値は編集可能？ |
| -------- | ---------------------------------------- | ------- |
| インタープロセス | この時点で使用されているインタープロセス変数のリスト               | ◯       |
| プロセス     | カレントプロセスで使用されているプロセス変数のリスト               | ◯       |
| ローカル     | 現在トレースしているメソッドで使用されているローカル変数のリスト         | ◯       |
| 引数       | メソッドが受け取った引数のリスト                         | ◯       |
| Self     | オブジェクトメソッドをトレースしている場合には、現在のオブジェクトへのポインター | ×       |

他の変数と同様に、配列はそのスコープによって、インタープロセス、プロセス、およびローカルサブテーマに表示されます。 デバッガーは要素ゼロと最初の 100要素を表示します。 **値** 欄で配列要素の値を変更することは可能ですが、配列のサイズを修正することはできません。

変数の型や内部名を表示するには、右クリックしてコンテキストメニューを開き、**型を表示** にチェックを入れます:

![show-types-menu-item](../assets/en/Debugging/showTypes.png)

このようになります:

![dynamic-variable-names](../assets/en/Debugging/dynamicVariableNames.png)

#### カレントフォーム値

このテーマには、カレントフォームに含まれる各動的オブジェクトの名前に加えて、そこに関連付けられている値が表示されます:

![current-form-value](../assets/en/Debugging/current-form-values.png)

リストボックス配列などの一部のオブジェクトは、二つの異なる項目として表示されることがあります (オブジェクト自身の変数と、そのデータソース)。

#### 定数

エクスプローラーウィンドウの定数ページのように、4D が提供する定義済み定数を表示します。 このテーマの式を修正することはできません。

#### セマフォー

現在設定されているローカルセマフォーのリストを表示します。 各セマフォーの値欄には、自身を設定したプロセスの名前が表示されます。 このテーマの式を修正することはできません。 グローバルセマフォーは表示されません。

#### プロセス

作業セッションを開始してから起動されたプロセスのリストを表示します。 値欄には、各プロセスの現在の状態 (実行中、一時停止等) および使用した時間が表示されます。 このテーマの式を修正することはできません。

#### テーブルとフィールド

4Dデータベースのテーブルやフィールドのリストを表示します。 各テーブル項目について、カレントプロセスにおけるカレントセクションのサイズは勿論、**ロックされたレコード** のナンバーも値欄に表示されます。

各フィールド項目については、カレントレコードのフィールドの値 (ピクチャーと BLOB は除く) が値欄に表示されます。 フィールドの値を修正することはできますが、テーブル情報を修正することはできません。

#### セット

カレント (トレース中の) プロセスで定義されているセットとインタープロセスセットのリストを表示します。 各セットについて、レコード数とテーブル名が値欄に表示されます。 このテーマの式を修正することはできません。

#### 命名セレクション

カレント (トレース中の) プロセスで定義されている命名セレクションとインタープロセス命名セレクションのリストを表示します。 各命名セレクションについて、レコード数とテーブル名が値欄に表示されます。 このテーマの式を修正することはできません。

#### 情報

このテーマは、データベースのオペレーションに関わる一般的な情報を表示します。カレントのデフォルトテーブル (あれば)、物理メモリ、仮想メモリ、空きメモリ、使用中メモリ、クエリ格納先、などです。

#### Web

このテーマは、アプリケーションの メインWebサーバーに関する情報が表示されます (Webサーバーが起動している場合のみ):

- 送信するWebファイル: 送信待機中の Webファイルの名前 (あれば)
- Webキャッシュ利用: Webキャッシュ内のページ数と、使用率
- Webサーバー起動時間: Webサーバーの起動時間 ("時間:分:秒" 形式)
- Webヒット回数: Webサーバー起動以降に受信した HTTPリクエストの総数と、1秒毎の受信数
- 動作中のWebプロセス数: アクティブな Webプロセスの数と、全Webプロセスの数

このテーマの式を修正することはできません。

### コンテキストメニュー

ウォッチエリアのコンテキストメニューでは、追加オプションが提供されています。

![context-menu](../assets/en/Debugging/contextual-menu.png)

- **すべて閉じる**: ウォッチエリアの階層リストの全レベルを縮小します。
- **すべて拡げる**: ウォッチエリアの階層リストの全レベルを展開します。
- **型を表示**: 各項目のデータ型を (適切な場合に) 表示します。
- **フィールド/テーブル番号を表示**: テーブルおよびフィールドの番号を表示します。 テーブル番号やフィールド番号を用いて作業している場合、または `Table` や `Field` コマンドを使用し、ポインターを用いて作業している場合、このオプションは非常に便利です。
- **アイコンを表示**: 各項目のタイプを示すアイコンを表示します。 表示速度を速くするために、このオプションをオフにすることもできます。
- **テーブル/フィールドをソート**: テーブルおよびフィールドをそれぞれアルファベット順に並べ替えます。
- **数値を16進で表示**: 通常、数値は 10進法で表示されます。 このオプションを使用すると、数値が 16進法表記で表示されます。 注: 数値を 16進法で入力するには、0x (ゼロの後にx) とタイプし、その後に 16進数を続けます。
- **アクティビティモニターを有効にする**: 動作のモニタリング (アプリケーション内部の詳細チェック) を有効にし、追加テーマ (**スケジューラー**、**ネットワーク**) に情報を表示します。

## 呼び出し連鎖エリア

1つのメソッドから他のメソッドまたはクラス関数が呼び出される場合があります。 このエリアは、この呼び出し連鎖のリストを表示します。

![call-chain-pane](../assets/en/Debugging/call-chain-example.png)

それぞれのメインレベルの項目は、メソッドまたはクラス関数の名前です。 最も上にある項目は、現在トレース中のメソッド、次の項目は呼び出し元 (トレース中メソッドを呼び出したメソッドまたはクラス関数)、その次の項目は呼び出し元の呼び出し元、のように続きます。

上図の例では:

- `thirdMethod` は引数を受け取っていません。
- `$0` は現在未定義です。これは、メソッドが `$0` に値を割り当てていないためです (メソッドがこの割り当てをまだ実行していないか、メソッドが関数ではなくサブルーチンなことが原因です)。
- `secondMethod` は `firstMethod` から 3つの引数を受け取っています:
  - $1 は `[Employee]` テーブルへのポインター
  - $2 は `[Employee]` テーブルの `ID` フィールドへのポインター
  - $3 は値が "Z" の英数字の引数です。

呼び出し連鎖エリアのメソッド名をダブルクリックすると、そのソースコードが[ソースコードエリア](#ソースコードエリア) に表示されます。

メソッドまたは関数名の隣にあるアイコンをクリックすると、引数および戻り値のリストが展開または縮小されます。 値はエリアの右側に表示されます。 右の値をクリックすると、引数や戻り値の値を変更することができます。

コンテキストメニュー内の **型を表示** を選択することで、引数のデータ型を表示することができます:

![call-chain-show-types](../assets/en/Debugging/callChainShowTypes.png)

メソッドの引数リストが展開されていれば、引数や戻り値を [カスタムウォッチエリア](#カスタムウォッチエリア) にドラッグ＆ドロップすることができます。

You can also use the [Call chain](https://doc.4d.com/4dv19/help/command/en/page1662.html) command to retrieve the call chain programmatically.

## カスタムウォッチエリア

カスタムウォッチエリアは、式を評価するために使用します。 [ウォッチエリア](#ウォッチエリア) と似ていますが、ここでは任意の式を表示することができます。 どのようなタイプの式でも評価できます:

- 変数
- object and object property
- フィールド
- ポインター
- 演算
- 4Dコマンド
- メソッド
- ほか値を返すものなら何でも

![custom-Watch-pane](../assets/en/Debugging/custom-watch-pane.png)

テキスト形式で表示できる式であれば、どのような式でも評価することができます。 ピクチャーや BLOBフィールドおよび変数は表示できません。 To display BLOB contents, you can use BLOB commands, such as [BLOB to text](../commands-legacy/blob-to-text.md).

### Display mode

You select the display mode to be used for all debugger windows using the **Display** option of the Custom Watch pane's [contextual menu](#contextual-menu).

![custom-Watch-pane](../assets/en/Debugging/custom-watch-pane-display-menu.png)

次のオプションから選択することができます:

- **Local variables**: Displays and evaluates automatically local variables as soon as they are initialized in the running source code.
- **Line Expressions**: Displays and evaluates automatically the same contents as the [Line Expressions](#line-expressions) item of the Expression List.
- **Expressions**: Only displays custom expressions that you have entered manually. Custom expressions have a specific blue icon ![custom-expression-icon](../assets/en/Debugging/custom-expression-icon.png).

:::note

Whatever the display mode, you can add custom expressions at any moment.

:::

### 新しい式の挿入

You can enter any expression to evaluate. A custom expression is only displayed in the current debugger window, except if you [pin it](#pin-an-expression).

リストに式を追加する方法は複数あります:

- ウォッチエリアまたは呼び出し連鎖エリアから項目や式をドラッグ＆ドロップします。
- [ソースコードエリア](#ソースコードエリア) で式を選択し、**ctrl+D**  (Windows) または **cmd+D** (macOS) を押します。
- カスタムウォッチエリアの空スペースのどこかをダブルクリックします (プレースホルダー名を持つ編集可能な式が追加されます)。
- Select a [display option](#display-mode) that automatically inserts expressions.
- Select **New Expression...** in the Custom Watch pane's [contextual menu](#contextual-menu) to add an expression using the **Formula Editor**. 値を返すフォーミュラであれば、なんでも追加できます。

式を編集するには、その式をクリックして選択し、再びクリックすると (または**Enter**キーを押す) 編集モードになります。

To delete a custom expression, click on it to select it, then press **Backspace** or **Delete** on your keyboard, or click on the **x** icon.

:::warning

Be careful when you evaluate a 4D expression modifying the value of one of the System Variables (for instance, the OK variable) because the execution of the rest of the method may be altered.

:::

### Pinning an expression

You can click on the pushpin icon to pin an expression:

![pinning-expression](../assets/en/Debugging/pin-expression.png)

The expression will then be displayed in all debugger windows.

### コンテキストメニュー

The Custom Watch Pane’s menu is available on a contextual click or using the ![menu](../assets/en/Debugging/custom-watch-pane-menu.png) icon:

![custom-watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-context-menu.png)

- **Display**: Selects the [display mode](#display-mode) to be used for all debugger windows.
- **New Expression...**: Inserts a new expression and displays the 4D Formula Editor.
  ![custom-Watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-formula-editor.png)
  For more information on the Formula Editor, see the [4D Design Reference manual](https://doc.4d.com/4Dv20/4D/20.2/Description-of-formula-editor.300-6750169.en.html).

* **Insert Command...**: Displays a menu allowing to insert a 4D command as a new expression.
* **すべて削除**: 現在カスタムウォッチエリアに表示されている式をすべて削除します。
* **Standard Expressions**: Copies the Watch Pane's list of expressions as custom expressions.

> このオプションは [リモートデバッグモード](debugging-remote.md)では利用できません。

- **すべて閉じる/すべて拡げる**: 階層リストの全レベルを縮小/展開します。
- **型を表示**: リストの各項目のデータ型を (適切な場合に) 表示します。
- **フィールド/テーブル番号を表示**: テーブルおよびフィールドの番号を表示します。 テーブル番号やフィールド番号を用いて作業している場合、または `Table` や `Field` コマンドを使用し、ポインターを用いて作業している場合、このオプションは非常に便利です。
- **アイコンを表示**: 各項目のタイプを示すアイコンを表示します。
- **テーブル/フィールドをソート**: テーブルおよびフィールドをそれぞれアルファベット順に並べ替えます。
- **数値を16進で表示**: 数値がを16進法表記で表示します。 数値を 16進法で入力するには、0x (ゼロの後にx) とタイプし、その後に 16進数を続けます。

## ソースコードエリア

ソースコードエリアには、トレース中のメソッドや関数のソースコードが表示されます。

このエリアでは、[**ブレークポイント**](breakpoints.md) の追加や削除も可能です。

### Prototype

The prototype of the currently executed method or function in the Call chain is displayed on the top of the pane:

![prototype](../assets/en/Debugging/prototype.png)

### Tips

式の上にマウスカーソルを移動すると、Tipsとして次の内容が表示されます:

- 宣言された式の型
- 式のカレント値

![source-code-pane](../assets/en/Debugging/sourceCodePane.png)

これはセレクションの場合も機能します:

![source-code-pane-tip](../assets/en/Debugging/sourcePaneTip.png)

### カスタムウォッチエリアへの式の追加

ソースコードエリアで選択した式は [カスタムウォッチエリア](#カスタムウォッチエリア) にコピーすることができます。

1. ソースコードエリア内で評価する式を選択します。
2. 次のいずれかの方法をおこないます:
   - 選択したテキストをカスタムウォッチエリアの式欄へドラッグ＆ドロップする。
   - **Ctrl+D** (Windows) または **Cmd+D** (macOS) を押す。
   - 選択したテキストを右クリックして、コンテキストメニューから **式ペインにコピー** コマンドを選択する。

### プログラムカウンター

ソースコードエリアの左マージンにある黄色の矢印は、プログラムカウンターと呼ばれます。 これは、実行される次の行を表しています。

デフォルトでは、プログラムカウンター行 (実行行とも呼ばれます) がデバッガー内でハイライトされています。 [環境設定のメソッドページ](Preferences/methods.md) において、ハイライトカラーをカスタマイズすることができます。

#### プログラムカウンターの移動

デバッグのために、呼び出し連鎖のトップにあるメソッド (実行中のメソッド) のプログラムカウンターの位置を変更することができます。 これには、黄色の矢印をクリックして目的の行まで上下にドラッグします。

これは、その位置からのトレースや実行を追跡するようにデバッガーに指示しているに過ぎません。 カウンターの移動そのものはコードを実行したり、実行をキャンセルしたりしません。 すべての現在の設定内容、フィールド、変数などに影響はありません。

例:

```4d
  // ...
 If(This condition)
    DO_SOMETHING
 Else
    DO_SOMETHING_ELSE
 End if
  // ...
```

行 `If (This condition)` にプログラムカウンターが設定されているとします。
**次行に進む** ボタンをクリックすると、プログラムカウンターが行 `DO SOMETHING ELSE` に直接移動します。
しかし、今回トレースしたかったのは `DO_SOMETHING` 行のコードでした。このような場合、プログラムカウンターをその行に移動して実行することができます。

### コンテキストメニュー

ソースコードエリア のコンテキストメニューを使って、トレースモードでメソッドを実行する際に便利な機能にアクセスできます:

![source-code-pane-context-window](../assets/en/Debugging/sourceCodePaneContext.png)

- **Show documentation**: Opens the documentation for the target element. このコマンドは以下の要素に使用できます:
  - _Project methods_, _user classes_: Selects the method in the Explorer and switches to the documentation tab
  - _4D commands, functions, class names:_ Displays the online documentation.
- **参照を検索...** (コードエディターでも利用可能): 現在の要素が参照されているすべてのメソッドとフォームを検索します。 現在の要素とは、選択されているものまたはカーソルが置かれているものをいいます。 これにはフィールド、変数、コマンド、文字列等が含まれます。 検索結果は、標準の検索結果ウィンドウに表示されます。
- **コピー**: 選択された式が標準のペーストボードへとコピーされます。
- **式ペインにコピー**: 選択された式をカスタムウォッチエリアにコピーします。
- **カーソルまで実行**: プログラムカウンターと選択行の間のコードを実行します。
- **次のステートメントを設定**: 現在の行および途中の行を実行せずに、プログラムカウンターを選択行まで移動します。 選択行は、ユーザーが実行ボタンのいずれかをクリックした際に実行されます。
- **ブレークポイントをトグル** (コードエディターでも利用可能): 選択行のブレークポイントの有無を切り替えます。 これによりメソッドエディターのブレークポイントの有無も切り替わります。
- **ブレークポイントを編集...** (コードエディターでも利用可能): ブレークポイントプロパティダイアログボックスを表示します。 ここでおこなわれた変更はメソッドエディターにも反映されます。

### 次/前を検索

専用のショートカットを使用することで選択された文字列を検索することができます:

- 文字列と一致する次の箇所を検索するには、**Ctrl+E** (Windows) または **Cmd+E** (macOS) を使用します。
- 文字列と一致する前の箇所を検索するには、**Ctrl+Shift+E** (Windows) または **Cmd+Shift+E** (macOS) を使用します。

この検索は、ソースコードエリアにて少なくとも 1文字以上を選択している場合に実行されます。

## ショートカット

この節ではデバッグウィンドウで　利用可能なショートカットをリストしています。

> 実行制御ツールバーにも [ショートカット](#ツールバーボタン) が設定されています。

#### ウォッチエリア & カスタムウォッチエリア

- ウォッチエリア内の項目を **ダブルクリック** すると、その項目がカスタムウォッチエリアにコピーされます。
- カスタムウォッチエリア内で **ダブルクリック** すると、新しい式を作成できます。

#### ソースコードエリア

- 左マージンをクリックすると、ブレークポイントが設定・削除されます。
- **Alt+Shift+クリック** (Windows) または **Option+Shift+クリック** (macOS) により、一時的ブレークポイントが設定されます。
- **Alt+クリック** (Windows) または **Option+クリック** (macOS) により、ブレーク編集ウィンドウが表示されます。
- 選択された式や要素をドラック＆ドロップして、カスタムウォッチエリアにコピーできます。
- **Ctrl+D** (Windows) または **Command+D** (macOS) キーを押すことで、カスタムウォッチエリアに選択テキストがコピーされます。
- **Ctrl+E** (Windows) または **Cmd+E** (macOS) を押すと、選択文字列に一致する次の箇所を検索します。
- **Ctrl+Shift+E** (Windows) または **Cmd+Shift+E** (macOS) を押すと、選択文字列に一致する前の箇所を検索します。

#### すべてのエリア

- **Ctrl** + **+/-** (Windows) または **Command** + **+/-** (macOS) を押すと、可読性を向上させるためにフォントサイズが拡大/縮小します。 変更されたフォントサイズはコードエディターにも適用され、環境設定に保存されます。
- **Ctrl + \*** (Windows) または **Command + \*** (macOS) を押すと、ウォッチエリアが強制的に更新されます。
- 全エリアでいずれの項目も選択されていない場合に **Enter**キーを押すと、1行ずつ進みます。
- 項目の値が選択されている場合には、矢印キーでリスト内を移動します。
- 項目を編集中の場合には、矢印キーでカーソルが移動します。 Ctrl-A/X/C/V (Windows) または Command-A/X/C/V (macOS) を、編集メニューのすべてを選択/切り取り/コピー/貼り付けコマンドへのショートカットとして使用できます。
