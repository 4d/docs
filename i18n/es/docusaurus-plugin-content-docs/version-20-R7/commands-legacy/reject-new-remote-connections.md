---
id: reject-new-remote-connections
title: REJECT NEW REMOTE CONNECTIONS
slug: /commands/reject-new-remote-connections
displayed_sidebar: docs
---

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Syntax-->**REJECT NEW REMOTE CONNECTIONS** ( *rejectStatus* )<!-- END REF-->
<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rejectStatus | Boolean | &#8594;  | True si se rechazan las nuevas conexiones, de lo contrario false |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Summary-->El comando **REJECT NEW REMOTE CONNECTIONS** especifica si el servidor de aplicaciones acepta o no nuevas conexiones de usuarios remotos.<!-- END REF--> 

En *rejectStatus*, pase **true** para rechazar nuevas conexiones remotas. Al pasar **false**, especifica que se permiten nuevas conexiones remotas.

**Nota**: este comando solo puede ejecutarse en 4D Server. Si el método se utiliza localmente o de forma remota en un solo cliente, **REJECT NEW REMOTE CONNECTIONS** no hace nada.

#### Ejemplo 

Desea rechazar o aceptar las nuevas conexiones de clientes:

```4d
  // Rechazar las nuevas conexiones
 REJECT NEW REMOTE CONNECTIONS(True)
  // Ejecutar la operación de mantenimiento
 ...
  // Aceptar las nuevas conexiones
 REJECT NEW REMOTE CONNECTIONS(False)
```

#### Ver también 

[DROP REMOTE USER](drop-remote-user.md)  
[Application info](application-info.md)  
[SOAP REJECT NEW REQUESTS](soap-reject-new-requests.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1635 |
| Hilo seguro | &check; |


