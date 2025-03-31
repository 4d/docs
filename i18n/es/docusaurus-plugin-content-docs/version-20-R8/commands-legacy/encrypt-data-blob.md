---
id: encrypt-data-blob
title: Encrypt data BLOB
slug: /commands/encrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data BLOB.Syntax-->**Encrypt data BLOB** ( *blobAEncriptar* ; objetoLlave | frasePasar ; *sal* ; *blobEncriptado* ) : Boolean<!-- END REF-->
<!--REF #_command_.Encrypt data BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| blobAEncriptar | Blob | &#8594;  | BLOB a encriptar |
| objetoLlave &#124; frasePasar | Objeto, Texto | &#8594;  | Objeto JSON que contiene la llave de cifrado o la frase de paso para la generación directa de la llave de cifrado (texto) |
| sal | Integer | &#8594;  | Sal adicional para el algoritmo |
| blobEncriptado | Blob | &#8592; | BLOB Encriptado |
| Resultado | Boolean | &#8592; | True si la encriptación se ha realizado correctamente, False en caso contrario |

<!-- END REF-->

#### Description 

<!--REF #_command_.Encrypt data BLOB.Summary-->El comando **Encrypt data BLOB** encripta el parámetro *blobAEncriptar* con el mismo algoritmo que 4D utiliza para encriptar datos (AES-256) y devuelve el resultado en *blobEncriptado*.<!-- END REF-->

Puede utilizar un *objetoLlave* o una *frasePasar* para encriptar el BLOB:

* *objetoLlave*: un objeto JSON que contiene la llave de cifrado, con la misma estructura que el objeto devuelto por el comando [New data key](new-data-key.md)
* *frasePasar*: una cadena utilizada para generar la llave de cifrado

Pase en *sal* un número que se utilizará para hacer el cifrado más robusto.

Si el cifrado tiene éxito, los datos cifrados se devuelven en el parámetro *blobEncriptado* y el comando devuelve True.

En caso de error, el BLOB se devuelve vacío y el comando devuelve False.

**Nota:** cuando se encripta un blob utilizando **Encrypt data BLOB**, el *blobEncriptado* resultante es un múltiplo de 16 bytes debido al algoritmo de encriptación. En consecuencia, si *blobAEncriptar* no es un múltiplo de 16 bytes, el comando lo convierte automáticamente en un múltiplo de 16 bytes añadiendo bytes nulos al final. Para evitar errores al descifrar el blob con [Decrypt data BLOB](decrypt-data-blob.md), es necesario manejar el tamaño del *blobAEncriptar*   
cuando se trabaja con archivos que no son de texto. Para un ejemplo detallado de cómo hacerlo, ver [este artículo del blog](https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm/).

#### Ejemplo 

Encriptar un archivo de texto ubicado en la carpeta RESOURCES de la base de datos:

```4d
 var $fileToEncrypt;$encryptedFile : 4D.File
 var $blobToEncrypt;$encryptedBlob : Blob
 var $result : Boolean
 
 $fileToEncrypt:=File("/RESOURCES/confidential.txt")
 $encryptedFile:=File("/RESOURCES/encryptedConfidential.txt")
 
 $blobToencrypt:=$fileToEncrypt.getContent()
 
 $result:=Encrypt data BLOB($blobToEncrypt;"myPassPhrase";MAXLONG;$encryptedBlob)
 $encryptedFile.setContent($encryptedBlob)
```

#### Ver también 

  
[Decrypt data BLOB](decrypt-data-blob.md)  
[ENCRYPT BLOB](encrypt-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[New data key](new-data-key.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1773 |
| Hilo seguro | &check; |


