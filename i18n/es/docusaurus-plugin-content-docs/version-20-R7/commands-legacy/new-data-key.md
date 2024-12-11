---
id: new-data-key
title: New data key
slug: /commands/new-data-key
displayed_sidebar: docs
---

<!--REF #_command_.New data key.Syntax-->**New data key** ( *passPhrase* ) : Object<!-- END REF-->
<!--REF #_command_.New data key.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| passPhrase | Text | &#8594;  | Frase contraseña a utilizar para generar la llave de cifrado de datos AES |
| Resultado | Object | &#8592; | Objeto que contiene la llave (propiedad encodedKey) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.New data key.Summary-->El comando **New data key** genera una llave de cifrado de datos binarios a partir del texto pasado en el parámetro *passPhrase*.<!-- END REF-->

La llave codificada se puede guardar localmente, para ser almacenada en un dispositivo extraíble, como una llave USB (ver *Almacenamiento de llaves de cifrado de datos en archivos* en el manual de *Diseño 4D*). Conectar este dispositivo a la máquina que aloja la base de datos cifrada permitirá automáticamente al usuario acceder a los datos cifrados.

Puede pasar cualquier caracter en *passPhrase*. La misma *passPhrase* siempre producirá la misma llave de cifrado de datos.

**Valor devuelto**

El objeto devuelto contiene la siguiente propiedad:

| **Propiedad** | **Tipo** | **Descripción**                                                          |
| ------------- | -------- | ------------------------------------------------------------------------ |
| encodedKey    | Texto    | Llave de cifrado AES (SHA de 256 bits) generada a partir de *passPhrase* |

Si se pasó una cadena vacía en *passPhrase*, el comando devuelve *null*.

#### Ejemplo 

Desea guardar una llave de cifrado en un archivo .4DKeyChain:

```4d
 var $dataKey : Object
 var $passphrase : Text
 
 $passphrase:=Request("Enter the passphrase:")
 If(OK=1)
    $dataKey:=New data key($passphrase)
    TEXT TO DOCUMENT("generatedKey.4DKeyChain";JSON Stringify($dataKey))
 End if
```

#### Ver también 

  
[Decrypt data BLOB](decrypt-data-blob.md)  
[Discover data key](discover-data-key.md)  
[Encrypt data BLOB](encrypt-data-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[Register data key](register-data-key.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1611 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


