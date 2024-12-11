---
id: refresh-license
title: Refresh license
slug: /commands/refresh-license
displayed_sidebar: docs
---

<!--REF #_command_.Refresh license.Syntax-->**Refresh license** : Object<!-- END REF-->
<!--REF #_command_.Refresh license.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Object | &#8592; | Objeto de estado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Refresh license.Summary-->El comando **Refresh license** actualiza la licencia actual del servidor 4D.<!-- END REF--> Lo conecta con la base de datos de clientes 4D y activa automáticamente cualquier licencia nueva o actualizada (por ejemplo, clientes comprados adicionales) relacionada con la licencia actual.

**Objeto devuelto**

El objeto devuelto por **Refresh license** contiene las siguientes propiedades:

| **Propiedad** | **Tipo** | **Descripción**                                                       |
| ------------- | -------- | --------------------------------------------------------------------- |
| success       | booleano | True si la acción de actualización es exitosa, de lo contrario False. |
| status        | número   | Código de estado                                                      |
| statusText    | texto    | Descripción de estado                                                 |
| tips          | texto    | Sugerencias para resolver el error.                                   |

**Nota**: este comando solo puede ejecutarse en 4D Server. Si el método que llama al comando se ejecuta localmente en un cliente remoto o en un solo usuario 4D, **Refresh license** no hace nada.

#### Ejemplo 

Desea actualizar su licencia y recibir un mensaje cuando se complete:

```4d
  // Método a ejecutar en el servidor
 var $res : Object
 $res:=Refresh license
 If($res.success)
    ALERT("Success")
 Else
    ALERT($res.statusText)
 End if
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1336 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


