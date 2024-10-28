---
id: generate-encryption-keypair
title: GENERATE ENCRYPTION KEYPAIR
slug: /commands/generate-encryption-keypair
displayed_sidebar: docs
---

<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Syntax-->**GENERATE ENCRYPTION KEYPAIR** ( *llavePriv* ; *llavepublica* {; *longitud*} )<!-- END REF-->
<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| llavePriv | Blob | &#8592; | BLOB que contiene la llave privada |
| llavepublica | Blob | &#8592; | BLOB que contiene la llave pública |
| longitud | Integer | &#8594;  | Longitud de la llave (bits) [512...2048] Valor por defecto = 512 |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GENERATE ENCRYPTION KEYPAIR.Summary-->El comando GENERATE ENCRYPTION KEYPAIR genera un nuevo par de llaves RSA.<!-- END REF--> Estas llaves permiten funcionalidades de encripción asimétricas en 4D, generalmente necesarias cuando necesita asegurar intercambios de datos seguros en la red (es decir, utilizando el servidor web 4D y el protocolo TSL). 

**Nota:** si necesita cifrar sus datos en el disco, puede considerar el uso de las funciones de cifrado de archivos de datos ofrecidas por 4D (ver la página *Encripción de datos*). 

Una vez ejecutado el comando, los BLOBs pasados en los parámetros *llavePriv* y *llavepublica* contienen un nuevo par de llaves de cifrado.

El parámetro opcional *largo* permite precisar el tamaño de la llave (en bits). Entre más larga sea la llave, más difícil es romper el código cifrado.

Sin embargo, las llaves largas necesitan más tiempo de ejecución o de respuesta, especialmente dentro de una conexión segura.

Por defecto (si omite el parámetro *largo*), el tamaño de llave generado es de 512 bits, lo cual es un buen compromiso para la relación seguridad/eficiencia. Para aumentar el factor de seguridad, puede cambiar las llaves con frecuencia, por ejemplo cada seis meses. Puede generar llaves de 2048 bits para aumentar la seguridad de cifrado pero podría disminuir la velocidad de las conexiones a la aplicación web.

Este comando genera llaves en formato PKCS codificadas en base64, lo que significa que su contenido puede copiarse y pegarse en un correo electrónico sin sufrir ningún cambio. Una vez se genera el par de llaves, se puede generar un documento de texto en formato PEM (utilizando por ejemplo el comando [BLOB TO DOCUMENT](blob-to-document.md)) y las llaves pueden guardarse en un lugar seguro.

**Advertencia:** la llave privada siempre debe mantenerse en secreto.

#### RSA, llaves privadas y llaves públicas 

El algoritmo de cifrado RSA utilizado por **GENERATE ENCRYPTION KEYPAIR** está basado en un sistema de cifrado de doble llave: una llave privada y una llave pública. Como su nombre lo indica, la llave pública puede ser entregada a una tercera persona y utilizada para descifrar la información. La llave pública corresponde a una llave privada única, utilizada para cifrar la información. De esta forma, la llave privada se utiliza para el cifrado; la llave pública para descifrar (o viceversa). La información cifrada con una llave sólo puede ser descifrada con la otra.

Las funciones de cifrado del protocolo TLS/SSL están basadas en este principio, la llave pública que se incluye en el certificado enviado a los navegadores (para mayor información, consulte la sección [WEB SERVICE SET PARAMETER](web-service-set-parameter.md)). 

Este modo de cifrado también lo utiliza la primera sintaxis de los comandos [ENCRYPT BLOB](encrypt-blob.md) y [DECRYPT BLOB](decrypt-blob.md). La llave pública debe ser publicada de manera confidencial. 

Es posible combinar las llaves públicas y privadas de dos personas para cifrar información de manera que el receptor sea la única persona que pueda descifrar los datos y el emisor la única persona que puede cifrarlos. Es el principio de la segunda sintaxis de los comandos [ENCRYPT BLOB](encrypt-blob.md) y [DECRYPT BLOB](decrypt-blob.md).

#### Ejemplo 

Ver el ejemplo del comando [ENCRYPT BLOB](encrypt-blob.md "ENCRYPT BLOB").

#### Ver también 

[DECRYPT BLOB](decrypt-blob.md)  
[ENCRYPT BLOB](encrypt-blob.md)  
[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  