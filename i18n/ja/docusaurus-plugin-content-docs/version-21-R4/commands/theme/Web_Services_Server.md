---
id: Web_Services_Server_theme
title: Webサービス (サーバー)
sidebar_label: Webサービス (サーバー)
slug: /commands/theme/Web-Services-Server
---

|                                                                                                             |
| ----------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.SOAP DECLARATION.Syntax -->](../../commands/soap-declaration)<br/>                 |
| [<!-- INCLUDE #_command_.SOAP Get info.Syntax -->](../../commands/soap-get-info)<br/>                       |
| [<!-- INCLUDE #_command_.SOAP REJECT NEW REQUESTS.Syntax -->](../../commands/soap-reject-new-requests)<br/> |
| [<!-- INCLUDE #_command_.SOAP Request.Syntax -->](../../commands/soap-request)<br/>                         |
| [<!-- INCLUDE #_command_.SOAP SEND FAULT.Syntax -->](../../commands/soap-send-fault)<br/>                   |

4DによるWebサービスの公開は、[メソッドプロパティの設定](../../Project/project-method-properties.md#webサービス) で行います。 ほとんどの場合、この処理だけでWebサービスの公開を行うことができます。 しかし特定のメカニズムをカスタマイズしたい場合、例えば配列を使用したい場合などは、4D のサーバー SOAP コマンドを使用する必要があります。

注意: 従来からの決まりにより、サーバ側とクライアント側の間でコマンド(と定数) の名前を区別するために、“SOAP” と “Webサービス” という用語が、それぞれに使用されています。 この2つのコンセプトは同じテクノロジーに言及しています。