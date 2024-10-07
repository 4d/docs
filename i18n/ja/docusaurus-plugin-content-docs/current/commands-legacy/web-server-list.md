---
id: web-server-list
title: WEB Server list
slug: /commands/web-server-list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list**  -> 戻り値<!-- END REF-->
<!--REF #_command_.WEB Server list.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Collection | &larr; | 利用可能なWebサーバーオブジェクトのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB Server list.Summary-->**WEB Server list** コマンドは、4D アプリケーション内で利用可能なすべてのWeb サーバーオブジェクトのコレクションを返します。<!-- END REF-->

4D アプリケーションには一つまたは複数のWeb サーバーを含めることが可能です:

* ホストデータベースに対してWebサーバー1つ(デフォルトのWeb サーバー)
* 各コンポーネントに対してWebサーバー1つ

それらのサーバーが実際に実行中か否かに関わらず、このコマンドは全ての利用可能なWeb サーバーを返します。

**注:** デフォルトのWeb サーバーはスタートアップじに4Dによって自動的にロードされています。その一方で、使用したいそれぞれのコンポーネントのWeb サーバーは、[WEB Server](web-server.md) コマンドを使用してインスタンス化されている必要があります。

Web サーバオブジェクトの*name* プロパティを使用することで、リスト内のそれぞれのWebサーバーオブジェクトが関連づけられているデータベースまたはコンポーネントを識別することができます。Web サーバーオブジェクトの詳細な説明については、[WEB Server](web-server.md) コマンドの詳細を参照してください。

#### 例題 

いくつのWebサーバーが実行中で利用可能かを調べたい場合を考えます: 

```4d
 var $wSList : Collection
 var $vRun : Integer
 
 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" 個のWebサーバーが実行中で "+String($wSList.length)+" 個が利用可能です")
```

#### 参照 

[WEB Server](web-server.md)  
*webServer.stop( )*  