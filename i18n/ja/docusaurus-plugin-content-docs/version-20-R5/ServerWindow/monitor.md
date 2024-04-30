---
id: monitor
title: モニターページ
---

The **Monitor** page displays dynamic information concerning database use as well as information about the system and the 4D Server application.

![](../assets/en/Admin/server-admin.png)

> Windows では、このページに表示されるシステム情報の一部は、Windows パフォーマンスアナライザー (WPA) ツールを介して取得されます。 これらのツールは、4D Server を起動したセッションを開いたユーザーが、必要な管理権限を持っている場合にのみアクセスできます。

## グラフィックエリア

グラフィックエリアでは、複数のパラメーター (CPU使用率、ネットワークトラフィック、およびメモリ) の変化がリアルタイムで表示されます。 ウィンドウの中央にあるメニューから表示する内容を選択します:

![](../assets/en/Admin/server-graphic.png)

- **CPU Usage**: Overall CPU usage of the machine, for all applications taken together. この使用率のうちの 4D Server による使用分は、"プロセッサー" 情報エリアで提供されます。
- **Network**: Number of bytes received per second by the machine (server or client). 送信バイト数は "ネットワーク" 情報エリアで提供されます。
- **Physical memory**: Quantity of RAM memory of machine used by 4D Server. メモリの利用に関するより詳細な情報は "メモリ" 情報エリアで提供されます。
- **Virtual memory**: Quantity of virtual memory used by the 4D Server application. このメモリは、アプリケーションのニーズに応じてシステムにより割り当てられます。 エリアの右下に表示される値は、現在使用されているメモリ量を示します。 左上に表示される値は、利用可能な仮想メモリの最大値を示します。 最大値は、アプリケーションの一般メモリ設定に基づき動的に計算されます。
- **Cache**: Quantity of cache memory used by the 4D Server application. エリアの右下に表示される値は、現在使用されているメモリ量を示します。 左上に表示される値は、ストラクチャー設定に設定されたキャッシュメモリの合計サイズを示します。

このオプションが選択されている場合、キャッシュの有効な解析をおこなうために長めの観測時間が必要となるため、グラフエリアのスクロールは遅くなります。

## 概要エリア

"概要" エリアでは、システム、アプリケーション、そして 4D Server マシンにインストールされたライセンスに関する様々な情報が提供されます。

- **System Information**: Computer, system and IP address of server
- **Application Information**: Internal version number of 4D Server and Volume Shadow Copy status
- **Maximum connections**: Number of simultaneous connections allowed by type of server
- **License**: Description of license. プロダクトライセンス、あるいは付随エクスパンションのいずれかが 10日以内に失効するとき (例: サブスクリプション型ライセンスなど)、4D Server は自動的にそのライセンスを 4Dユーザーアカウントから更新しようとします。 この場合、なんらかの理由 (接続エラー、無効なアカウント状態、契約が延長されていないなど) で自動更新が失敗した場合、サーバー管理者に警告を伝えるアイコンがライセンスの隣に表示されます。 エリア上にマウスをホバーさせると、ライセンス更新状態についての追加の情報が tips として表示されます:

![](../assets/en/Admin/server-licence-failed.png)

Usually, you will need to check the [**Licences Manager**](Admin/licenses.md).

## 詳細エリア

"詳細" エリアは、すでにグラフィックエリアで表示されている情報の一部と、追加の情報を提供します。

- **Hard drive**: Overall capacity of the hard disk and distribution of the space used by the database data (data file + data index), the space used by other files and the free space available.
- **Memory**: RAM memory installed on the machine and amount of memory used by 4D Server, by other applications or that is free. 4D Server が使用するメモリはグラフィックエリアにも動的に表示できます。
- **Processors**: Instant occupancy rate for processor(s) of the machine by 4D Server and by other applications. この使用率は絶えず再計算されます。 4D Server による使用率はグラフィックエリアにも動的に表示できます。
- **Network**: Instantaneous number of bytes sent and received by the machine (server or client). この値は絶えず更新されます。 受信したバイト数はグラフィックエリアにも動的に表示できます。
