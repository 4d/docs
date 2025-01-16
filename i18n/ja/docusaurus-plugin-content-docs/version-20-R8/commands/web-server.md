---
id: web-server
title: WEB Server
displayed_sidebar: docs
---

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->

<!--REF #_command_.WEB Server.Params-->

| 引数     | 型                            |   | 説明                                                                  |
| ------ | ---------------------------- | - | ------------------------------------------------------------------- |
| option | Integer                      | → | 取得する Webサーバー (省略時のデフォルト = `Web server database`) |
| 戻り値    | 4D.WebServer | ← | WebServer オブジェクト                                                    |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容                                           |
| ----- | -------------------------------------------- |
| 18 R3 | 追加                                           |
| 19    | .sessionCookieSameSite をサポート |

</details>

#### 説明

`WEB Server` コマンドは、<!-- REF #_command_.WEB Server.Summary -->デフォルトの Webサーバーオブジェクト、または *option* 引数で指定された Webサーバーオブジェクトを返します<!-- END REF -->。

*option*が省略された場合のデフォルトでは、このコマンドはデータベースの Webサーバー (デフォルトWebサーバー) への参照を返します。 取得する Webサーバーを指定するには、*option* に以下の定数のいずれか一つを渡してください:

| 定数                             | 値 | 説明                                                    |
| ------------------------------ | - | ----------------------------------------------------- |
| `Web server database`          | 1 | カレントデータベースの Webサーバー( 省略時のデフォルト)    |
| `Web server host database`     | 2 | コンポーネントのホストデータベースの Webサーバー                            |
| `Web server receiving request` | 3 | リクエストを受け取った Webサーバー (ターゲットWebサーバー) |

**返されたWeb サーバーオブジェクト** には[Web server プロパティ](../API/WebServerClass.md) のカレントのプロパティが格納されています。

#### 例題

コンポーネント内から、ホストデータベースの Webサーバーが開始されているかどうかを確認します:

```4d
  // コンポーネントのメソッド
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

#### 参照

[WEB Server list](web-server-list.md)\
[webServer.stop()](../API/WebServerClass.md#stop)

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1674                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;cross; |
