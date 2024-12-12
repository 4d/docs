---
id: register-data-key
title: Register data key
slug: /commands/register-data-key
displayed_sidebar: docs
---

<!--REF #_command_.Register data key.Syntax-->**Register data key** ( curPassPhrase | curDataKey ) : Boolean<!-- END REF-->
<!--REF #_command_.Register data key.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| curPassPhrase &#124; curDataKey | Texto, Objeto | &#8594;  | Frase contraseña actual (texto) o llave de cifrado de datos actual (objeto) |
| Resultado | Boolean | &#8592; | True si la llave de cifrado se ha agregado correctamente al llavero 4D, False si ya estaba en el llavero 4D |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Register data key.Summary-->El comando **Register data key** agrega la llave de cifrado de datos pasada en el parámetro al llavero 4D.<!-- END REF-->

El llavero 4D es un conjunto de una o más llaves de cifrado de datos cargadas en la memoria que 4D escanea automáticamente cuando se requiere una llave de datos para descifrar/cifrar un archivo de datos. Para más información, consulte *Encripción de datos*.

En el primer parámetro, pase *curPassPhrase* o *curDataKey* que define la llave de cifrado a agregar:

* *curPassPhrase*: cadena utilizada para generar la llave de cifrado. Cuando se utiliza este parámetro, se genera una llave de cifrado.
* *curDataKey*: objeto (con propiedad *encodedKey*) que contiene la llave de cifrado de datos. Esta llave puede haberse generado con el comando [New data key](new-data-key.md).

**Valor devuelto**

* **True** si la llave de cifrado se carga correctamente en el llavero 4D.
* **False** si la misma llave de cifrado ya estaba presente en el llavero 4D.

#### Ejemplo 

```4d
 var $passphrase : Text
 var $added : Boolean
 
 $passphrase:=Request("Introduzca la frase contraseña:")
 If(OK=1)
    $added:=Register data key($passphrase)
 
    OPEN DATA FILE("data.4DD") //No se necesita llave, está en el llavero 4D
 End if
```

#### Ver también 

  
[New data key](new-data-key.md)  