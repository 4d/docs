---
id: decrypt-blob
title: DECRYPT BLOB
slug: /commands/decrypt-blob
displayed_sidebar: docs
---

<!--REF #_command_.DECRYPT BLOB.Syntax-->**DECRYPT BLOB** ( *toDecrypt* ; *sendPubKey* {; *recipPrivKey*} )<!-- END REF-->
<!--REF #_command_.DECRYPT BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| toDecrypt | Blob | &#8596; | 復号するデータ |
||| | 複合されたデータ |
| sendPubKey | Blob | &#8594;  | 送信者の公開鍵 |
| recipPrivKey | Blob | &#8594;  | 受信者の秘密鍵 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DECRYPT BLOB.Summary-->DECRYPT BLOB コマンドは、BLOB *toDecrypt*の内容を送信者の公開鍵*sendPubKey*を使用して解読します。<!-- END REF-->オプションとして、受信者の秘密鍵*recipPrivKey*も使用します。

送信者の公開鍵を納めたBLOBを引数*sendPubKey*に渡します。この鍵は、送信者が[GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md "GENERATE ENCRYPTION KEYPAIR")コマンドを実行して生成し、受信者に送信しておく必要があります。

受信者の秘密鍵を納めたBLOBを引数*recipPrivKey*に渡すことができます。この引数を渡す場合、受信者は[GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md "GENERATE ENCRYPTION KEYPAIR")コマンドを実行して一組の暗号化鍵を生成し、公開鍵を送信者に送っておく必要があります。この一組の鍵をもとにした暗号化システムでは、送信者のみがメッセージの暗号化を行い、かつ受信者だけがその復号を行えるということが保証されます。一組の鍵をもとにした暗号化システムに関する詳細は、[ENCRYPT BLOB](encrypt-blob.md "ENCRYPT BLOB")コマンドを参照してください。

DECRYPT BLOBコマンドは、（意図的かどうかに関わらず）BLOB内容の変更を防ぐため、チェックサム機能が提供されています。暗号化したBLOBが損傷したり変更されていると、このコマンドは何も行わず、エラーを返します。

#### 例題 

[ENCRYPT BLOB](encrypt-blob.md "ENCRYPT BLOB") コマンドの例題を参照

#### 参照 

[ENCRYPT BLOB](encrypt-blob.md)  
[GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 690 |
| スレッドセーフである | &check; |


