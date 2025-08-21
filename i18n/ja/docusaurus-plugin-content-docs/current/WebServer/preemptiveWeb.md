---
id: preemptiveWeb
title: プリエンプティブWebプロセスの使用
---

4D Webサーバーを使って、アプリケーションでプリエンプティブWebプロセスを使用することによって、マルチコアコンピューターの利点を最大限引き出すことができます。 4D変換タグや Webデータベースメソッド、ORDA の RESTクラス関数を含めた Web関連コードを、可能な限り多くのコアで同時に実行するよう設定することが可能です。

4D のプリエンプティブプロセスについての詳細は、[プリエンプティブ4Dプロセス](../Develop/preemptive.md) の章を参照ください。

## Webプロセスにおけるプリエンプティブモードの使用可能状況

実行コンテキストによって、プリエンプティブモードが使用される、または使用可能かを次の表に示します:

| 4D Server   | インタープリター ([デバッガー有効](../Debugging/debugging-remote.md)) | インタープリター (デバッガー無効) | コンパイル済みコード |
| ----------- | ------------------------------------------------------------------------- | ------------------------------------- | ---------- |
| REST サーバー   | コオペラティブ                                                                   | プリエンプティブ                              | プリエンプティブ   |
| Web サーバー    | コオペラティブ                                                                   | コオペラティブ                               | *Web設定*    |
| Webサービスサーバー | コオペラティブ                                                                   | コオペラティブ                               | *Web設定*    |

| 4Dリモート/シングルユーザー | インタープリターコード | コンパイル済みコード |
| --------------- | ----------- | ---------- |
| REST サーバー       | コオペラティブ     | プリエンプティブ   |
| Web サーバー        | コオペラティブ     | *Web設定*    |
| Webサービスサーバー     | コオペラティブ     | *Web設定*    |

- REST サーバー: REST で呼び出された [ORDA データモデルクラス関数](../REST/ClassFunctions.md) を処理します
- Web サーバー: [Web テンプレート](templates.md)、[4DACTION とデータベースメソッド](httpRequests.md) を処理します
- Web サービスサーバー: SOAPリクエストを処理します
- ***web setting*** means that the preemptive mode depends on the [**scalable sessions**](sessions.md#enabling-web-sessions) status:
  - if scalable sessions are enabled, the preemptive mode is automatically used for web and web service processes.
  - if scalable sessions are not enabled:
    - for web processes, the [**Use preemptive processes**](webServerConfig.md#use-preemptive-processes) option is taken into account.
    - for web service processes (server or client), preemptive mode is supported at method level.

## スレッドセーフなWebサーバーコードの書き方

Webプロセスをプリエンプティモードで実行するには、Webサーバーで実行されるすべての 4Dコードがスレッドセーフでなければなりません。 [プリエンプティブモードが有効化](#webプロセスにおけるプリエンプティブモードの使用可能状況) されている場合、アプリケーションの以下の部分が 4Dコンパイラーによって自動的に評価されます:

- すべての Web関連データベースメソッド:
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - `On REST Authentication`
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) と [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action)

 - `compiler_web` プロジェクトメソッド (実際の "実行モード" プロパティに関わらず評価されます)

 - Webコンテキストにおいて [`PROCESS 4D TAGS`](../commands-legacy/process-4d-tags.md) コマンドによって処理される基本的にすべてのコード (.shtmlページを通して実行されるものなど)

 - "公開オプション: 4DタグとURL (`4DACTION`)..." 属性が有効なプロジェクトメソッド。

 - "RESTリソースとして公開" 属性が有効なテーブルのトリガー

 - REST で呼び出された [ORDA データモデルクラス関数](../REST/ClassFunctions.md)

For each of these methods and code parts, the compiler will check if the [thread-safety rules are respected](../Develop/preemptive.md#writing-a-thread-safe-method), and will return errors in case of issues.

## 4D Webコードのスレッドセーフティ

Web関連のほとんどの 4Dコマンドや関数、データベースメソッド、そして URL がスレッドセーフとなり、プリエンプティモードで使用できます。

### 4Dコマンドとデータベースメソッド

すべての Web関連コマンドはスレッドセーフです:

 - *Webサーバー* テーマの全コマンド
 - *HTTPクライアント* テーマの全コマンド

Web関連のデータベースメソッドもスレッドセーフであり、プリエンプティモードで使用することが可能です (前述参照): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...)。

もちろん、これらのメソッドによって実行されるコードもまたスレッドセーフである必要があります。

### WebサーバーURL

以下の 4D WebサーバーURLはスレッドセーフであり、プリエンプティモードで使用可能です:

 - *4daction/* (呼び出されるプロジェクトメソッドもまたスレッドセーフでなければいけません)
 - *4dwebtest/*
 - *4dblank/*
 - *4dstats/*
 - *4dhtmlstats/*
 - *4dcacheclear/*
 - *rest/*
 - *4dimgfield/* (ピクチャーフィールドの Webリクエストに対し `PROCESS 4D TAGS` によって生成されます)
 - *4dimg/* (ピクチャー変数の Webリクエストに対し `PROCESS 4D TAGS` によって生成されます)

### プリエンプティブWebプロセスアイコン

ランタイムエクスプローラーと 4D Server管理ウィンドウの両方において、プリエンプティブな Webプロセスに対し専用アイコンが表示されるようになりました:

| プロセスタイプ         | アイコン                                        |
| --------------- | ------------------------------------------- |
| プリエンプティブWebメソッド | ![](../assets/en/WebServer/processIcon.png) |
