---
id: decrypt-blob
title: DECRYPT BLOB
slug: /commands/decrypt-blob
displayed_sidebar: docs
---

<!--REF #_command_.DECRYPT BLOB.Syntax-->**DECRYPT BLOB** ( *aDescifrar* : Blob ; *enviarLlavePub* : Blob {; *recepLlavePriv* : Blob} )<!-- END REF-->
<!--REF #_command_.DECRYPT BLOB.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| aDescifrar | Blob | &#8596; | Datos a descifrar |
|  |  |  | Datos descifrados |
| enviarLlavePub | Blob | &#8594; | Llave pública del emisor |
| recepLlavePriv | Blob | &#8594; | Llave privada del receptor |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6.7|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.DECRYPT BLOB.Summary-->El comando DECRYPT BLOB descifra el contenido del BLOB aDescrifrar utilizando la llave pública del emisor *enviarLlavePub* y opcionalmente la llave privada del receptor *recepLlavePriv*.<!-- END REF-->

El BLOB que contiene la llave pública del emisor se pasa en el parámetro *enviarLlavePub*. Esta llave ha sido generada por el emisor utilizando el comando [GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md "GENERATE ENCRYPTION KEYPAIR") y tiene que ser enviada al receptor. 

El BLOB que contiene la llave privada del receptor puede pasarse en el parámetro opcional *recepLlavePriv*. En este caso, el receptor ha generado un par de llaves de cifrado con el comando [GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md "GENERATE ENCRYPTION KEYPAIR") y tiene que enviar su llave pública al emisor. El sistema de cifrado a dos llaves garantiza que el mensaje ha sido cifrado sólo por el emisor y que puede ser decodificado únicamente por el receptor. Para mayor información sobre el sistema de codificación de dos llaves, consulte la rutina [ENCRYPT BLOB](encrypt-blob.md "ENCRYPT BLOB"). 

El comando DECRYPT BLOB ofrece una funcionalidad de verificación de integridad (checksum) con el fin de evitar toda modificación del contenido del BLOB (deliberada o no). Si el BLOB cifrado está dañado o modificado, el comando no hará nada y devolverá un error. 

## Ejemplo 

Consulte los ejemplos dados por el comando [ENCRYPT BLOB](encrypt-blob.md "ENCRYPT BLOB").

## Ver también 

[ENCRYPT BLOB](../commands/encrypt-blob)  
[GENERATE ENCRYPTION KEYPAIR](../commands/generate-encryption-keypair)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 690 |
| Hilo seguro | yes |


