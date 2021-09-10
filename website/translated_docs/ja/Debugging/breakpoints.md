---
id: breakpoints
title: ブレークポイントとキャッチコマンド
---

## 概要


ブレークポイントとキャッチコマンドは、非常に効率的なデバッグ手法です。 どちらも、コードの実行を任意のステップで一時停止させる (まだ表示されていない場合はデバッガーウィンドウを表示させる) という同じ効果があります。

ブレークポイントは、実行を一時停止させたいコードの任意の行に設定します。 ブレークポイントには条件を関連付けることができます。

キャッチコマンドは、特定のコマンドが呼び出された時点で、呼び出し元プロセスの実行をトレース開始することができます。



## ブレークポイント


ブレークポイントを設定するには、デバッガーまたはメソッドエディターのソースコードエリアの左マージン内をクリックします。

次の図では、ブレークポイント (赤い点) がデバッガー内で、`If ($in.dataClass#Null)` の行に設定されています:

![ブレークポイント](assets/en/Debugging/break.png)

上の状態で [**トレース終了**](./debugger.md/#トレース終了) ボタンをクリックすると、ブレークポイントが設定された行まで実行が再開されます。 その後、ブレークポイントで示された行は実行されずに、トレースモードへ 戻ります。 プログラムカウンターより下方の (後に実行される) 行にブレークポイントを設定し、**トレース終了** ボタンをクリックすると、ブレークポイントまでのメソッドをスキップすることができます。

赤色の点をクリックすると、ブレークポイントは削除されます。


### ブレークポイントプロパティ

ブレークポイントプロパティウィンドウを使って、ブレークポイントのふるまいを変更することができます:

![breakpoint-properties](assets/en/Debugging/breakpoint-properties.png)

このウィンドウはメソッドエディターおよびデバッガーの [ソースコードエリア](debugger.md#ソースコードエリア) からアクセスします。 次の操作がおこなえます:

- 任意の行を右クリックして、コンテキストメニューから **ブレークポイントを編集...** を選択する。
- 左マージン内で `Alt+クリック` (Windows) または `Option+クリック` (macOS) を実行する。

ブレークポイントが既に存在する場合、そのブレークポイントについてのウィンドウが表示されます。 それ以外の場合は、ブレークポイントが新規作成され、そのブレークポイントに関するウィンドウを表示します。

プロパティは、次の通りです:

* **場所**: メソッド名とブレークポイントが設定されている行番号を示します。
* **次の式が真のときブレーク**: `True` または `False` を返す 4Dフォーミュラを入力することによって、**条件付きブレークポイント** を作成することができます。 たとえば、`Records in selection(\[aTable])=0` と入力すると、テーブル \[aTable] のレコードが選択されていない場合に限ってブレークが発生します。 ブレークポイントの条件は、[ブレークリスト](#ブレークリスト)の **条件** カラムでも確認できます。
* **ブレークの前にスキップする回数**: ループ構造 (While、Repeat、For) 内、またはループから呼び出されているサブルーチンや関数内のコード行にブレークポイントを設定することができます。
* **ブレークポイントが無効です**: ブレークポイントが現在は必要でないものの、後で必要になるかもしれない場合には、一時的に無効にしておくことができます。 無効なブレークポイントは、点 (･) ではなくダッシュ記号 (-) で表示されます。


### リモートデバッグでのブレークポイント

ブレークポイントの一覧はローカルに保存されています。 リモートデバッグモードでは、起動したデバッガーがリモート4D だった場合、デバッグセッションの間はリモートのブレークポイント一覧がサーバーのブレークポイント一覧を一時的に置き換えます。

サーバーのブレークポイント一覧は、サーバー上でデバッガーが起動した場合には自動的に復元され使用されます。

### ブレークリスト

The Break list is a page of the Runtime Explorer that lets you manage the breakpoints created in the Debugger Window or in the Method Editor. For more information on the Runtime Explorer, see its dedicated page in [the Design reference manual](https://doc.4d.com/4Dv19/4D/19/Runtime-Explorer.200-5416614.en.html).

To open the Break list page:

1. From the **Run menu**, click **Runtime Explorer...**

2. Click the **Break** tab to display the Break list:

![break-list-runtime-explorer](assets/en/Debugging/break-list.png)

Using this window, you can:

* Set conditions for breakpoints in the **Conditions** column
* Enable or disable breakpoints by clicking the bullets in the margin. Disabled breakpoints display transparent bullets
* Delete breakpoints by pressing the `Delete` or `Backspace` key, or click on the **Delete** button below the list.
* Open the methods where the breakpoint are located by double-clicking any line in the list

You cannot add new breakpoints from this window. Breakpoints can only be created from within the Debugger window or the Method Editor.


## Catching Commands

The **Catch** tab of the Runtime Explorer lets you add additional breaks to your code by catching calls to 4D commands. Unlike a break point, which is located in a particular project method (and therefore triggers a trace exception only when it is reached), the scope of catching a command includes all the processes that execute 4D code and call that command.

Catching a command is a convenient way to trace large portions of code without setting break points at arbitrary locations. For example, if a record that should not be deleted is deleted after you've executed one or several processes, you can try to reduce the field of your investigation by catching commands such as `DELETE RECORD` and `DELETE SELECTION`. Each time these commands are called, you can check if the record in question has been deleted, and thus isolate the faulty part of the code.

Feel free to combine breakpoints and command catching.

To open the Caught Commands page:

1. Choose **Run** > **Runtime explorer...** to open the Runtime Explorer.

2. Click **Catch** to display the Caught Commands List:

![runtime-explorer-window](assets/en/Debugging/catch-command.png)

This page lists the commands to be caught during execution. It is composed of two columns:

* The left column displays the Enable/Disable status of the caught command, followed by the name of the command
* The right column displays the condition associated with the caught command, if any

To add a command to be caught:

1. Click on the **Add New Catch** button (in the shape of a +) located below the list. A new entry is added to the list with the `ALERT` command as default
2. Click the **ALERT** label, type the name of the command you want to catch, then press **Enter**.

To enable or disable a caught command, click on the bullet (•) in front of the command label. The bullet is transparent when the command is disabled.

> Disabling a caught command has almost the same effect as deleting it. During execution, the debugger spends almost no time on the entry. The advantage of disabling an entry is that you do not have to recreate it when you need it again.

To delete a caught command:

1. Select a command in the list.
2. Press **Backspace** or **Delete** on your keyboard or click on the **Delete** button beneath the list (**Delete All** removes all commands in the list).

### Setting a Condition for catching a command

1. Click on the entry in the right column
2. Enter a 4D formula (expression, command call or project method) that returns a Boolean value.

> To remove a condition, delete its formula.

Adding conditions allows you to stop execution when the command is invoked only if the condition is met. For example, if you associate the condition `Records in selection(\[Emp]>10)` with the break point on the `DELETE SELECTION` command, the code will not be stopped during execution of the `DELETE SELECTION` command if the current selection of the \[Emp] table only contains 9 records (or less).

Adding conditions to caught commands slows the execution, because the condition has to be evaluated each time an exception is met. On the other hand, adding conditions accelerates the debugging process, because 4D automatically skips occurrences that do not match the conditions.

