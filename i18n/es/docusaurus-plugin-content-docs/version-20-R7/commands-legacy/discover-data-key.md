---
id: discover-data-key
title: Discover data key
slug: /commands/discover-data-key
displayed_sidebar: docs
---

<!--REF #_command_.Discover data key.Syntax-->**Discover data key**  : Boolean<!-- END REF-->
<!--REF #_command_.Discover data key.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True si se ha encontrado una llave de cifrado válida para el archivo de datos abierto actualmente, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Discover data key.Summary-->El comando **Discover data key** busca una llave de cifrado válida correspondiente al archivo de datos abierto actualmente a nivel de la raíz de todos los dispositivos conectados y devuelve **True** si es exitoso.<!-- END REF--> 

Los dispositivos conectados a buscar incluyen llaves USB o discos externos. Es necesaria una llave de cifrado válida para permitir el acceso de lectura/escritura a una base de datos cifrada. Se puede llamar a este comando, por ejemplo, al iniciar la base de datos, después de que el usuario haya sido invitado a conectar una llave USB.

Los archivos llave (archivos de extensión ".4DKeyChain") deben almacenarse en el nivel superior de los dispositivos conectados (la búsqueda no pasará por la jerarquía de carpetas). Las llaves de cifrado deben guardarse en formato JSON (ver *Almacenamiento de llaves de cifrado de datos en archivos* en la *Referencia de Diseño de 4D*).

**Valor devuelto**

* **True** si se encuentra una llave de cifrado válida para el archivo de datos abierto actual, en cuyo caso:  
   * la llave de cifrado se aplica si es necesario para que los datos cifrados se puedan utilizar (acceso a las operaciones de lectura/escritura).  
   * la llave de cifrado se agrega a la cadena 4D.
* **False** si no se encuentra una llave de cifrado válida para el archivo de datos abierto actual, por lo que no es posible acceder a los datos.

#### Ejemplo 

```4d
 var $status : Object
 var $keyFound : Boolean
 
 $status:=ds.encryptionStatus()
 
 If(($status.isEncrypted)&(Not($status.keyProvided))) //ninguna llave está disponible
  // por lo tanto el acceso a los datos encriptados no está permitido
    $keyFound:=Discover data key
    If($keyFound=True)
       ALERT("Se ha encontrado una llave de encripción válida.")
    End if
 End if
```

#### Ver también 

  
[New data key](new-data-key.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1639 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


