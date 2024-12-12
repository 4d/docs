---
id: http-get-certificates-folder
title: HTTP Get certificates folder
slug: /commands/http-get-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get certificates folder.Syntax-->**HTTP Get certificates folder**  : Text<!-- END REF-->
<!--REF #_command_.HTTP Get certificates folder.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | アクティブな証明書フォルダの完全なパス名 |

<!-- END REF-->

:::info 互換性

このコマンドは互換性のためだけに維持されています。現在は [`4D.HTTPRequest クラス`](../API/HTTPRequestClass.md) を使用することが推奨されています。

:::


#### 説明 

<!--REF #_command_.HTTP Get certificates folder.Summary-->**HTTP Get certificates folder**コマンドは、アクティブなクライアント証明書フォルダの完全なパス名を返します。<!-- END REF--> 

デフォルトでは、4D はストラクチャーファイルのとなりに作成された "ClientCertificatesFolder" というフォルダを使用します(必要がある場合にのみ作成されます)。 [HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md) コマンドを使用することによって、カレントプロセスにおいてユーザー定義のフォルダを作成することができます。

#### 例題 

証明書フォルダを一時的に変更したい場合を考えます:

```4d
 var $certifFolder : Text
 $certifFolder :=HTTP Get certificates folder //カレントフォルダを保存
 HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")
 ... // 特定のリクエストの実行
 HTTP SET CERTIFICATES FOLDER($certifFolder) //以前のフォルダを復元
```

#### 参照 

[HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md)  