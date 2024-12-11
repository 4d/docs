---
id: data-file-encryption-status
title: Data file encryption status
slug: /commands/data-file-encryption-status
displayed_sidebar: docs
---

<!--REF #_command_.Data file encryption status.Syntax-->**Data file encryption status** ( rutaEstruct , rutaDatos ) : Object<!-- END REF-->
<!--REF #_command_.Data file encryption status.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaEstruct | Text | &#8594;  | Nombre de ruta del archivo de estructura 4D a verificar |
| rutaDatos | Text | &#8594;  | Nombre de ruta del archivo de datos 4D a verificar |
| Resultado | Object | &#8592; | Información sobre el cifrado del archivo de datos y de cada tabla |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Data file encryption status.Summary-->El comando **Data file encryption status** devuelve un objeto que suministra el estado de cifrado para el archivo de datos designado por los parámetros *rutaEstruct* y *rutaDatos*.<!-- END REF--> También se proporciona el estado de cada tabla.

*rutaDatos* designa un archivo de datos 4D (.4dd). Debe corresponder al archivo de estructura definido por el parámetro *rutaEstruct*. Puede designar el archivo de estructura actual, pero el archivo de datos no debe ser el archivo actual (abierto).

**Nota:** utilice el método *ds.encryptionStatus( )* para determinar el estado de cifrado del archivo de datos actual.

**Valor devuelto**

El objeto devuelto contiene las siguientes propiedades:

| **Propiedad**   | **Tipo** | **Descripción**                                                                                       |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| isEncrypted     | Booleano | True si el archivo de datos está cifrado                                                              |
| keyProvided     | Booleano | True si la llave de cifrado que coincide con el archivo de datos cifrados está en el llavero 4D (\*). |
| tables          | Objeto   | Objeto que contiene tantas propiedades como tablas *encriptables* o *encriptadas*.                    |
| <*table name*\> | Objeto   | Tabla Encriptable o Encriptada                                                                        |
| name            | Texto    | Nombre de la tabla                                                                                    |
| num             | Número   | Número de tabla                                                                                       |
| isEncryptable   | Booleano | True si la tabla se declara encriptable en el archivo de estructura                                   |
| isEncrypted     | Booleano | True si los registros de la tabla están cifrados en el archivo de datos                               |

(\*) La llave de cifrado puede haber sido suministrada:

* previamente:  
   * antes de abrir este archivo de datos, utilizando un dispositivo conectado,  
   * con el comando *ds.provideDataKey( )* cuando se abre este archivo de datos,  
   * después de abrir el archivo de datos, con el comando [Discover data key](discover-data-key.md)
* utilizando el comando [Register data key](register-data-key.md)

#### Ejemplo 

Desea conocer el estado de cifrado de un archivo de datos que corresponde al archivo de estructura actual:

```4d
 var $status : Object
 
 $status:=Data file encryption status(Structure file;"D:\\Invoices\\Data_2019\\Invoices.4dd")
 Case of
    :(Not($status.isEncrypted))
       ALERT("El archivo de datos no está encriptado")
    :($status.isEncrypted&(Not($status.keyProvided))
       ALERT("El archivo de datos está cifrado y la llave de cifrado no está en el llavero. No tendrá acceso a los datos cifrados.")
    :($status.isEncrypted&$status.keyProvided)
       ALERT("El archivo de datos está cifrado y la llave de cifrado está en el llavero. Tendrá acceso a los datos cifrados.")
 End case
```

#### Ver también 

  
[Encrypt data file](encrypt-data-file.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1609 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


