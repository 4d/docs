---
id: generate-encryption-keypair
title: GENERATE ENCRYPTION KEYPAIR
slug: /commands/generate-encryption-keypair
displayed_sidebar: docs
---

<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Syntax-->**GENERATE ENCRYPTION KEYPAIR** ( *privKey* ; *pubKey* {; *length*} )<!-- END REF-->
<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| privKey | Blob | &#8592; | 秘密鍵を受け取るBLOB |
| pubKey | Blob | &#8592; | 公開鍵を受け取るBLOB |
| length | Integer | &#8594;  | キー長 (ビット) [512...2048] デフォルト値 = 512 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Summary-->GENERATE ENCRYPTION KEYPAIR コマンドは新しく1対のRSA鍵を生成します。<!-- END REF-->4Dの非対称暗号化機能はこの鍵を元にしていて、一般的にこれはネットワーク越しに安全なデータ交換を行う際(例: 4D Web サーバーとTLSプロトコルを使用する)に必要となります。

**注:** ディスク上のデータを暗号化する必要がある場合、4D が提供するデータファイル暗号化機能を使用することを検討してください(*データの暗号化* のページを参照)。

コマンドが実行されると、*privKey*と*pubKey*に渡されたBLOBには新しい1対の暗号鍵が納められます。

オプションの引数*length*を使用して鍵のサイズ (ビット単位) を設定することができます。鍵が大きいほど暗号コードの解読は困難になります。

ただし鍵が大きくなると実行時間や応答時間が長くなり、特に保護された接続ではこれが顕著です。

デフォルトでは (*length*を省略した場合)、生成される鍵のサイズは512ビットに設定されます。暗号の安全性を高めるために頻繁に、例えば6か月ごとに鍵を交換することもできます。2,048ビットの鍵を生成できますが、Webアプリケーションの接続速度は低下します。

このコマンドはbase64で暗号化されたPKCSフォーマットで鍵を生成し、その内容を変更する必要なく電子メールにコピー＆ペーストできます。一対の鍵が生成されたら (例えば[BLOB TO DOCUMENT](blob-to-document.md) コマンドを使用して) PEMフォーマットのテキストドキュメントを作成することができ、これらの鍵を安全な場所に保管できます。

**警告:** 秘密鍵は常に秘密にしなければなりません。

#### RSA、秘密鍵、および公開鍵について 

**GENERATE ENCRYPTION KEYPAIR** で使用するRSA暗号方 式は、秘密鍵と公開鍵という二重鍵暗号システムに基づいています。その名が示す通り、公開鍵は第三者に渡され、情報の復号に使用されます。公開鍵は情報の暗号化に使われるユニークな秘密鍵と一対です。このように、秘密鍵は暗号化に使用され、公開鍵は復号に使用されます (またはその逆)。一方の鍵を使って暗号化された情報は、もう一方の鍵を使用しなければ解読することはできません。

TLS/SSLプロトコルの暗号化機能はこの原理に基づいており、証明書に納められた公開鍵がブラウザに送信されます。(詳細は[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)の節を参照)。

この暗号化モードは、[ENCRYPT BLOB](encrypt-blob.md)および[DECRYPT BLOB](decrypt-blob.md)の1番目のシンタックスでも使用されています。このシンタックスで用いる公開鍵は極秘に発行してください。  
特定の受信者を復号可能な唯一の人とし、かつ送信者が暗号化を行った人であることを保証するために、2人の公開鍵と秘密鍵を合わせて情報の暗号化を行うことができます。この原理は[ENCRYPT BLOB](encrypt-blob.md)および[DECRYPT BLOB](decrypt-blob.md)の2番目のシンタックスで示されています。

#### 例題 

[ENCRYPT BLOB](encrypt-blob.md "ENCRYPT BLOB")の例題参照

#### 参照 

[DECRYPT BLOB](decrypt-blob.md)  
[ENCRYPT BLOB](encrypt-blob.md)  
[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 688 |
| スレッドセーフである | &check; |


