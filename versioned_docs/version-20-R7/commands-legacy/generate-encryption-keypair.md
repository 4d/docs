---
id: generate-encryption-keypair
title: GENERATE ENCRYPTION KEYPAIR
slug: /commands/generate-encryption-keypair
displayed_sidebar: docs
---

<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Syntax-->**GENERATE ENCRYPTION KEYPAIR** ( *privKey* ; *pubKey* {; *length*} )<!-- END REF-->
<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| privKey | Blob | &#8592; | BLOB to contain the private key |
| pubKey | Blob | &#8592; | BLOB to contain the public key |
| length | Integer | &#8594;  | Key length (bits) [512...2048] Default value = 512 |

<!-- END REF-->

#### Description 

<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Summary-->The **GENERATE ENCRYPTION KEYPAIR** command generates a new pair of RSA keys.<!-- END REF--> These keys allow asymmetric encryption features in 4D, usually required when you need to secure data exchanges over a network (e.g. using the 4D Web server and the TLS protocol). 

**Note:** If you need to encrypt your data on disk, you might consider using the data file encryption features provided by 4D (see *Encrypting data* page). 

Once the command has been executed, the BLOBs passed in *privKey* and *pubKey* parameters contain a new pair of encryption keys.

The optional parameter *length* can be used to set the key size (in bits). The larger the key, the more difficult it is to break the encryption code.

However, large keys require longer execution or reply time, especially within a secured connection.

By default (if the *length* parameter is omitted), the generated key size is set to 512 bits, which is a good compromise for the security/efficiency ratio. To increase the security factor, you can change keys more often, for example every six months.You can generate 2048 bits keys to increase the encryption security but the Web application connections will be slowed down.

This command will generate keys in PKCS format encoded in base64, which means that their content can be copied/pasted in an email without any change. Once the pair of keys has been generated, a text document in PEM format can be produced (using the [BLOB TO DOCUMENT](blob-to-document.md) command for example) and the keys can be stored in a safe place.

**Warning:** The private key should always be kept secret.

#### About RSA, private key and public key 

The RSA cipher used by **GENERATE ENCRYPTION KEYPAIR** is based on a double key encryption system: a private key and a public key. As indicated by its name, the public key can be given to a third person and used to decrypt information. The public key is matched with a unique private key, used to encrypt the information. Thus, the private key is used for encryption; the public key for decryption (or vice versa). The information encrypted with one key can only be decrypted with the other one.

The TLS/SSL protocol encryption functionalities are based on this principle, the public key being included in the certificate sent to the browsers (for more information, see the section [WEB SERVICE SET PARAMETER](web-service-set-parameter.md)). 

This encryption mode is also used by the first syntax of the [ENCRYPT BLOB](encrypt-blob.md) and [DECRYPT BLOB](decrypt-blob.md) commands. The public key should be confidentially published. 

It is possible to mix the public and private keys from two persons to encrypt information so that the recipient is the only person to be able to decrypt them and the sender is the only person to have encrypted them. This principle is given by the second syntax of the two [ENCRYPT BLOB](encrypt-blob.md) and [DECRYPT BLOB](decrypt-blob.md) commands.

#### Example 

See example for the [ENCRYPT BLOB](encrypt-blob.md) command.

#### See also 

[DECRYPT BLOB](decrypt-blob.md)  
[ENCRYPT BLOB](encrypt-blob.md)  
[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 688 |
| Thread safe | &check; |


