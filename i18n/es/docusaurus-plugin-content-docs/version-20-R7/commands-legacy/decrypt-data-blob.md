---
id: decrypt-data-blob
title: Decrypt data BLOB
slug: /commands/decrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Decrypt data BLOB.Syntax-->**Decrypt data BLOB** ( *blobADescifrar* ; objetoLlave | frasePasar ; *sal* ; *blobDescifrado* ) : Boolean<!-- END REF-->
<!--REF #_command_.Decrypt data BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| blobADescifrar | Blob | &#8594;  | BLOB a descifrar |
| objetoLlave &#124; frasePasar | Objeto, Texto | &#8594;  | Objeto JSON que contiene la llave de cifrado o la frase de paso para la generación directa de la llave de cifrado (texto) |
| sal | Integer | &#8594;  | Sal adicional para el algoritmo |
| blobDescifrado | Blob | &#8592; | BLOB descifrado |
| Resultado | Boolean | &#8592; | True si la desencriptación se ha realizado correctamente, False en caso contrario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Decrypt data BLOB.Summary-->El comando **Decrypt data BLOB** descifra el parámetro *blobADescifrar* con el mismo algoritmo que 4D utiliza para descifrar datos (AES-256) y devuelve el resultado en *blobDescifrado*.<!-- END REF-->

Puede utilizar un *objetoLlave* o una *frasePasar* para descifrar el BLOB:

* *objetoLlave*: un objeto JSON que contiene la llave de cifrado, con la misma estructura que el objeto devuelto por el comando [New data key](new-data-key.md)
* *frasePasar*: una cadena utilizada para generar la llave de cifrado

El número pasado en el parámetro *sal* de **Decrypt data BLOB** debe coincidir con el utilizado para el cifrado.

Si el descifrado tiene éxito, los datos descifrados se devuelven en el parámetro *blobDescifrado* y el comando devuelve True.

En caso de error, el BLOB se devuelve vacío y el comando devuelve false.

#### Ejemplo 

El siguiente ejemplo muestra cómo descifrar un archivo encriptado ubicado en la carpeta RESOURCES de la base de datos:  
  
```4d
 var $fileToDecrypt;$decryptedFile : 4D.File
 var $blobToDecrypt;$decryptedBlob : Blob
 var $result : Boolean
 
 $fileToDecrypt:=File("/RESOURCES/encryptedConfidential.txt")
 $decryptedFile:=File("/RESOURCES/decryptedConfidential.txt")
 
 $blobToDecrypt:=$fileToDecrypt.getContent()
 
 $result:=Decrypt data BLOB($blobToDecrypt;"myPassPhrase";MAXLONG;$decryptedBlob)
 $decryptedFile.setContent($decryptedBlob)
```

La *frasePasar* y la *sal* utilizadas para el descifrado son idénticas a la *frasePasar*  y la *sal* utilizadas para el cifrado (ver el ejemplo [Encrypt data BLOB](encrypt-data-blob.md)).

#### Ver también 

  
[Encrypt data BLOB](encrypt-data-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[New data key](new-data-key.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1774 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


