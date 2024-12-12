---
id: web-is-server-running
title: WEB Is server running
slug: /commands/web-is-server-running
displayed_sidebar: docs
---

<!--REF #_command_.WEB Is server running.Syntax-->**WEB Is server running** : Boolean<!-- END REF-->
<!--REF #_command_.WEB Is server running.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | Webサーバーが動作中であればTrue、それ以外の場合にはFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB Is server running.Summary-->新しい**WEB Is server running** コマンド("*Webサーバ*"テーマ)は、4DがビルトインされているWebサーバーが動作中である場合にはTrueを、Webサーバーがオフである場合にはFalseを返します。<!-- END REF-->

このコマンドは、それが実行されたWebサーバーの動作状況を返します: 

| **実行されたコンテキスト**                   | **どこの状況を返すか**      |
| --------------------------------- | ------------------ |
| 4D スタンドアローンアプリケーション               | ローカルの4D Web サーバー   |
| 4D Server                         | 4D Server Web サーバー |
| 4D リモートモード(ローカルプロセス)              | ローカルの4D Web サーバー   |
| 4D リモートモード(4D Server ストアドプロシージャ―) | 4D Server Web サーバー |
| 4D リモートモード(他の4D のリモートストアドプロシージャ―) | リモート4D Web サーバー    |

#### 例題 

Webサーバーが実行中かどうかをチェックしたい場合:

```4d
 If(WEB Is server running)
    ... //実行する処理
 End if
```
