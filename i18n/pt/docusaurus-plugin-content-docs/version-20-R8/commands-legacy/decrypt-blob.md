---
id: decrypt-blob
title: DECRYPT BLOB
slug: /commands/decrypt-blob
displayed_sidebar: docs
---

<!--REF #_command_.DECRYPT BLOB.Syntax-->**DECRYPT BLOB** ( *aDecifrar*  ; *enviarChavePub*  {; *recepChavePriv* } )<!-- END REF-->
<!--REF #_command_.DECRYPT BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| aDecifrar | Blob | &#8596;  | Dados a decifrar |
| ||| Dados decifrados |
| enviarChavePub | Blob | &#8594;  | Chave pública do emissor |
| recepChavePriv | Blob | &#8594;  | Chave privada do receptor |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DECRYPT BLOB.Summary-->O comando DECRYPT BLOB descriptografa o conteúdo do BLOB usando *aDecifrar* usando a *enviarChavePub* pública do remetente e, opcionalmente, a chave *recepChavePriv* privada do destinatário.<!-- END REF-->

O BLOB contendo a chave pública do remetente é passado no parâmetro *enviarChavePub*. Esta chave foi gerada pelo remetente usando o comando [GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md "GENERATE ENCRYPTION KEYPAIR") e ele tem de ser enviado para o destinatário. 

O BLOB contendo a chave privada do destinatário pode ser passado no parâmetro opcional *recepChavePriv* . Neste caso, o destinatário tem que gerar um par de chaves de criptografia com o comando [GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md "GENERATE ENCRYPTION KEYPAIR") e tem de enviar a sua chave pública para o remetente. O sistema de criptografia baseado em par de chaves garante que a mensagem foi codificada pelo remetente e só pode ser decifrada pelo destinatário. Para mais informações sobre o sistema de criptografia baseado em par de chaves, consulte a rotina [ENCRYPT BLOB](encrypt-blob.md). 

O comando DECRYPT BLOB oferece uma funcionalidade de verificação a fim de evitar qualquer alteração de conteúdo BLOB (deliberada ou não). Se o BLOB criptografado está danificado ou modificado, o comando não fará nada e um erro será retornado. 

#### Exemplo 

Consulte os exemplos dados para o comando .

#### Ver também 

[ENCRYPT BLOB](encrypt-blob.md)  
[GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 690 |
| Thread-seguro | &check; |


