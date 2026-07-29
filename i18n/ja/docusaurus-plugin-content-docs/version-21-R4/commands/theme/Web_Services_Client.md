---
id: Web_Services_Client_theme
title: Webサービス (クライアント)
sidebar_label: Webサービス (クライアント)
slug: /commands/theme/Web-Services-Client
---

|                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.WEB SERVICE AUTHENTICATE.Syntax -->](../../commands/web-service-authenticate)<br/>   |
| [<!-- INCLUDE #_command_.WEB SERVICE CALL.Syntax -->](../../commands/web-service-call)<br/>                   |
| [<!-- INCLUDE #_command_.WEB SERVICE Get info.Syntax -->](../../commands/web-service-get-info)<br/>           |
| [<!-- INCLUDE #_command_.WEB SERVICE GET RESULT.Syntax -->](../../commands/web-service-get-result)<br/>       |
| [<!-- INCLUDE #_command_.WEB SERVICE SET OPTION.Syntax -->](../../commands/web-service-set-option)<br/>       |
| [<!-- INCLUDE #_command_.WEB SERVICE SET PARAMETER.Syntax -->](../../commands/web-service-set-parameter)<br/> |

Webサービスは、ネットワーク上で公開された一連の関数です。 ネットワークに接続し、Webサービスと互換のあるアプリケーションであればこれらの関数を呼び出したり、使用したりできます。 Webサービスは、すべてのタイプのタスクを実行します。例えば運送会社による荷物の配送管理、e-commerce、市場価格のモニタリングなどです。

4Dでは、[Webサービスウィザード](https://doc.4d.com/4Dv21/4D/21/Subscribing-to-a-Web-Service-in-4D.300-7676804.ja.html) を使用することで、簡単にWebサービスの利用手続きを行うことができます。 ほとんどの場合ウィザードを使用するだけで、Webサービス利用できます。 ただし、あるメカニズムをカスタマイズしたい場合、4DのクライアントSOAPコマンドを使用しなければなりません。

注意: 従来からの決まりにより、サーバ側とクライアント側の間でコマンド(と定数) の名前を区別するために、“SOAP” と “Webサービス” という用語が、それぞれに使用されています。 この2つのコンセプトは同じテクノロジーに言及しています。