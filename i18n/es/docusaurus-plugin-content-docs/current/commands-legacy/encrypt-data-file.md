---
id: encrypt-data-file
title: Encrypt data file
slug: /commands/encrypt-data-file
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data file.Syntax-->**Encrypt data file** ( *rutaEstruct* ; *rutaDatos* {; newPassPhrase | newDataKey {; *carpetaArchivo* {; curPassPhrase | curDataKey {; *nomMetod*}}}} ) : Text<!-- END REF-->
<!--REF #_command_.Encrypt data file.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaEstruct | Text | &#8594;  | Nombre de ruta del archivo de estructura |
| rutaDatos | Text | &#8594;  | Nombre de ruta del archivo de datos a cifrar |
| newPassPhrase &#124; newDataKey | Texto, Objeto | &#8594;  | En caso de reemplazo: nueva passPhrase (texto) o nueva llave de cifrado (objeto) |
| carpetaArchivo | Text | &#8594;  | Nombre de ruta de la carpeta donde se guardarán los archivos originales |
| curPassPhrase &#124; curDataKey | Texto, Objeto | &#8594;  | passPhrase actual (texto) o llave de encripción actual(objeto) |
| nomMetod | Text | &#8594;  | Nombre del método de retrollamada 4D |
| Resultado | Text | &#8592; | Nombre completo de la carpeta donde se guardaron los archivos originales |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Encrypt data file.Summary-->El comando **Encrypt data file** se utiliza para cifrar o volver a cifrar el archivo de datos designado por el parámetro *rutaDatos* asociado al parámetro *rutaEstructura*.<!-- END REF--> También se puede utilizar para eliminar el cifrado de la base de datos. El comando no modifica los archivos originales, devuelve el nombre de ruta completo de la carpeta creada para respaldar el archivo de datos original.

**Notas:**

* Este comando no se puede utilizar con el archivo de datos abierto actualmente.
* Este comando solo puede ejecutarse desde 4D (modo local) o 4D Server (procedimiento almacenado). El archivo de datos que se va a cifrar debe corresponder al archivo de estructura designado por *rutaEstructura*.

La ejecución de este comando cifrará o modificará el cifrado de todas las tablas de la base de datos que se han definiido como "encriptable". Para más información, consulte la sección *Encriptable*.

**Atención:** el cifrado de una base de datos es una operación prolongada. Muestra un indicador de progreso (que podría ser interrumpido por el usuario). Tenga en cuenta también que la secuencia de cifrado de la base de datos incluye un paso de compactación.

En el parámetro *rutaEstructura*, puede pasar una cadena vacía o la ruta de acceso completa del archivo de estructura asociado con el archivo de datos que desea cifrar. Esta información es necesaria para el procedimiento de cifrado. Si pasa una cadena vacía, aparecerá un cuadro de diálogo **Abrir archivo** estándar para que el usuario pueda designar el archivo de estructura que se utilizará. De lo contrario, puede pasar una ruta de acceso completa, expresada en la sintaxis del sistema operativo.

En el parámetro *rutaDatos*, puede pasar una cadena vacía, un nombre de archivo o una ruta completa (debe expresarse en la sintaxis del sistema operativo). Si pasa una cadena vacía, aparecerá un cuadro de diálogo **Abrir archivo** estándar para que el usuario pueda designar el archivo de datos que se va a cifrar. Este archivo debe corresponder al archivo de estructura definido en el parámetro *rutaEstructura*. Si solo pasa el nombre del archivo de datos, 4D lo buscará en el mismo nivel que el archivo de estructura.

* **Para cifrar la base de datos por primera vez**, solo necesita pasar el parámetro *newPassPhrase* o *newDataKey* (los parámetros *curPassPhrase* o *curDataKey* no deben proporcionarse):  
   * *newPassPhrase*: cadena utilizada para generar la llave de cifrado (SHA de 256 bits)  
   * *newDataKey*: objeto (con propiedad *encodedKey*) que contiene una nueva llave de cifrado de datos. Esta llave debería haberse generado con el comando [New data key](new-data-key.md).  
**Nota:** *newPassPhrase* (o *newDataKey*) no se agrega al llavero 4D.
* **Para volver a cifrar una base de datos** (es decir, la base de datos ya se ha cifrado), debe pasar tanto el parámetro *newPassPhrase* (o *newDataKey*), como la frase de contraseña actual (o la llave de datos actual). Esto es necesario para descifrar la base de datos antes de volver a cifrarla. Esta información se puede proporcionar de las siguientes maneras:  
   * pasando parámetros válidos de *curPassPhrase* (o *curDataKey*) al comando,  
   * en el llavero 4D.
* **Para eliminar el cifrado de todas las tablas**, pase una frase de contraseña vacía o una llave de datos nula como *newPassPhrase* (o *newDataKey*). La contraseña o llave de datos actual ya debe haber sido proporcionada. Los archivos descifrados se generarán/copiarán en carpetas denominadas "Archivos sustituidos (Descifrado) YYYY-MM-DD HH-MM-SS”/"Decrypted files YYYY-MM-DD HH-MM-SS".

El comando no modifica los archivos originales. Se mueven en la carpeta *carpetaArchivo* (si se pasa) a una carpeta especial denominada *Archivos reemplazados (Encriptación) YYYY-MM-DD HH-MM-SS* o *Archivos reemplazados (Descifrado) YYYY-MM-DD HH-MM-SS* donde YYYY-MM-DD HH-MM-SS representa la fecha y la hora de la operación. Por ejemplo: "Archivos reemplazados (cifrado) 2018-09-29 13-00-35". El nuevo archivo de datos cifrados o descifrados reemplaza automáticamente el archivo original.  
Si pasó "" en *carpetaArchivo*, aparecerá un diálogo **Abrir carpeta** estándar para que el usuario pueda especificar la ubicación de la carpeta que se creará. Si *carpetaArchivo* se omite, los archivos originales se almacenan automáticamente en una carpeta con marca de tiempo creada junto al archivo de estructura.

El parámetro *método* se utiliza para establecer un método de retro llamada que se llamará regularmente durante el proceso de cifrado. Si pasa una cadena vacía o un nombre de método no válido, este parámetro se ignora (no se llama a ningún método). Cuando se llama, este método recibe hasta 5 parámetros según el tipo de evento que origina la llamada (ver más abajo). Es imperativo declarar estos parámetros en el método:

| **Evento**          | **$1 (Entero largo)** | **$2 (Entero largo)** | **$3 (Texto)**                                                                                            | **$4 (Entero largo)**                  | **$5 (Entero largo)** |
| ------------------- | --------------------- | --------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------- | --------------------- |
| Message             | 1                     | 0                     | Mensaje de progreso (por ejemplo, "Cifrado de BLOBs en la tabla Documents")                               | Porcentaje realizado (por ejemplo, 50) | Reservado             |
| Encryption finished | 2                     | 0                     | Mensaje de OK (por ejemplo, "Hecho")                                                                      | 0                                      | Reservado             |
| Error               | 3                     | 0                     | Mensaje de error (por ejemplo, "Problema en la tabla de datos XX: No se proporcionó la llave de cifrado") | 0                                      | Reservado             |
| End of execution    | 4                     | 0                     | "Hecho"                                                                                                   | 0                                      | Reservado             |
| Warning(\*)         | 5                     | Tipo de objeto        | Texto de error                                                                                            | Tabla o número de índice               | Reservado             |

(\*) Advertencia devuelta en el paso de verificación (consulte el comando [VERIFY DATA FILE](verify-data-file.md)).

**Valor devuelto**

Ruta real de la carpeta de destino de los archivos originales.  
  
#### Ejemplo 1 

Cifrar un archivo de datos por primera vez:

```4d
 var $folder;$passphrase : Text
 $passphrase:=Request("Enter the passphrase")
 If(OK=1)
  //Como el archivo de datos no está cifrado, no se ofrece ninguna llave de cifrado actual
    $folder:=Encrypt data file(Structure file;"myData.4DD";$passphrase)
 End if
```

#### Ejemplo 2 

Vuelva a cifrar un archivo de datos cifrado (cambie la frase secreta):

```4d
 var $folder;$targetFolder;$passphrase;$newPassphrase : Text
 $passphrase:=Request("Enter the current passphrase")
 If(OK=1)
    $newPassphrase:=Request("Enter the new passphrase")
    If(OK=1)
       $targetFolder:=Get 4D folder(Database folder)+"Save"+Folder separator
  //Como el archivo de datos está cifrado, se debe proporcionar la llave de cifrado actual
       $folder:=Encrypt data file(Structure file;"myData.4DD";$newPassphrase;$targetFolder;$passphrase)
    End if
 End if
```

#### Ejemplo 3 

Eliminar el cifrado de un archivo de datos cifrados:

```4d
 var $folder;$targetFolder;$passphrase : Text
 $passphrase:=Request("Introduzca la frase de contraseña")
 If(OK=1)
    $targetFolder:=Get 4D folder(Database folder)+"DecryptedData"+Folder separator
  //La nueva frase secreta se define en una cadena vacía para descifrar todos los datos
  //Se debe proporcionar la frase de contraseña actual
    $folder:=Encrypt data file(Structure file;"myData.4DD";"";$targetFolder;$passphrase)
 End if
```

#### Ejemplo 4 

Vuelva a cifrar un archivo de datos encriptados con la llave actual (por ejemplo, cuando se ha cambiado el estado encriptable para algunas tablas).

```4d
 var $folder;$passPhrase : Text
 var $added : Boolean
 
 $passphrase:=Request("Ingrese la frase secreta")
 If(OK=1)
    $added:=Register data key($passphrase) //La llave de datos ahora está en el llavero 4D
    $folder:=Encrypt data file(Structure file;"myData.4DD")
 End if
```

#### Ver también 

  
[Data file encryption status](data-file-encryption-status.md)  
[Decrypt data BLOB](decrypt-data-blob.md)  
[Encrypt data BLOB](encrypt-data-blob.md)  
[New data key](new-data-key.md)  