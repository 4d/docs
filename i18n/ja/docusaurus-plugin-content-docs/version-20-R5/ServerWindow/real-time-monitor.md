---
id: real-time-monitor
title: リアルタイムモニターページ
---

リアルタイムモニターは、アプリケーションによって実行された、"長い" オペレーションの状態をリアルタイムでモニターします。 これらのオペレーションとは、たとえばシーケンシャルクエリやフォーミュラの実行などです:

![](../assets/en/Admin/server-admin-monitor-page.png)

> このページは、サーバーマシンの管理ウィンドウにありますが、リモートの 4Dマシンからも見られます。 リモートマシンの場合は、サーバーマシン上で実行されている操作のデータを表示します。

データに対して実行されている長い処理は、それぞれに行が割り当てられます。 This line automatically disappears when the operation is complete (you can check the **Display operations at least 5 seconds** option to keep quick operations on screen for 5 seconds, see below).

各行について、以下の情報が表示されます:

- **Start Time**: starting time of operation in the format: "dd/mm/yyyy - hh:mm:ss"
- **Duration** (ms): duration in milliseconds of operation in progress
- **Information**: title of operation.
- **Details**: this area displays detailed information which will vary according to the type of operation selected. 具体的には以下の情報が表示されます:
  - **Created on**: indidates whether the operation results from a client action (Created on client) or if it was started explicitly on the server by means of a stored procedure or the "Execute on server" option (Created on server).
  - **Operation Details**: Operation type and (for query operations) query plan.
  - **Sub-operations** (if any): Dependent operations of the selected operation (e.g. deleting related records before a parent record).
  - **Process Details**: Additional information concerning the table, field, process or client, depending on the type of operation

> Real-time monitoring page uses the [`GET ACTIVITY SNAPSHOT`](https://doc.4d.com/4dv19/help/command/en/page1277.html) command internally. 詳細については、コマンドの説明を参照ください。

このページは表示後すぐにアクティブになり、恒久的に更新され続けます。 ただし、この処理によって、アプリケーションの実行を極端に遅くさせる可能性があることに注意してください。 以下の方法を用いて更新を一時的に停止させることが可能です:

- clicking on the **Pause** button,
- リストの中をクリックする
- スペースバーを押す

When you pause the page, a "PAUSED" message appears and the button label changes to **Resume**.
モニタリング停止操作と同じ操作をすることでモニタリングを再開させることができます。

## 詳細モード

必要であれば、RTMページはオペレーションごとに追加の情報を表示することができます。

To access the advanced mode for an operation, press **Shift** and select the desired operation. All available information is then displayed in the "Process Details" area without any filtering (as returned by the `GET ACTIVITY SNAPSHOT` command). 表示される情報は、選択したオペレーションによって異なります。

標準モードで表示される情報の例です:

![](../assets/en/Admin/server-admin-monitor-adv1.png)

In advanced mode (**Shift+Click** on the operation), additional information is displayed:

![](../assets/en/Admin/server-admin-monitor-adv2.png)

## スナップショットボタン

The **Snapshot** button allows you to copy to the clipboard all the operations displayed in the RTM panel, as well as their related details (process and sub-operation info):

![](../assets/en/Admin/server-admin-monitor-snapshot.png)

## オペレーションを最低5秒間表示する

If you check the **Display operations at least 5 seconds** option, any listed operation will be displayed on the page for at least five seconds, even after its execution is finished. このオプションが適用されたオペレーションは、オペレーションリスト中に灰色で表示されます。 この機能は、とても早く終わってしまうオペレーションの情報を取得したい場合に有効です。
