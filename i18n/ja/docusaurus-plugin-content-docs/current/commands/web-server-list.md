---
id: web-server-list
title: WEB Server list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list** : Collection<!-- END REF-->

<!--REF #_command_.WEB Server list.Params-->

| 引数  | 型      |                            | 説明                                             |
| --- | ------ | -------------------------- | ---------------------------------------------- |
| 戻り値 | コレクション | &#8592; | Collection of the available Web Server objects |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

#### 説明

`WEB Server list` コマンドは、<!-- REF #_command_.WEB Server list.Summary -->4Dアプリケーション内で利用可能な Webサーバーオブジェクトのコレクションを返します<!-- END REF -->。

4Dアプリケーションは一つ以上の Webサーバーを持つことが可能です:

- ホストデータベースの Webサーバーを1つ (デフォルトWebサーバー)
- コンポーネント毎の Webサーバー各1つ

サーバーが実際に実行中か否かに関わらず、`WEB Server list` コマンドは利用可能な Webサーバーをすべて返します。

> デフォルトの Webサーバーオブジェクトは、4D 起動時に自動的にロードされます。 On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](web-server.md) command.

You can use the [.name](../API/WebServerClass.md#name) property of the Web server object to identify the project or component to which each Web server object in the list is attached.

#### 例題

利用可能な Webサーバーのうちいくつが実行中かを調べます:

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")
```

#### 参照

[WEB Server](web-server.md)\
[webServer.stop()](../API/WebServerClass.md#stop)
