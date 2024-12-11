---
id: web-is-server-running
title: WEB Is server running
slug: /commands/web-is-server-running
displayed_sidebar: docs
---

<!--REF #_command_.WEB Is server running.Syntax-->**WEB Is server running** : Boolean<!-- END REF-->
<!--REF #_command_.WEB Is server running.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True si el servidor Web está corriendo, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB Is server running.Summary-->El comando **WEB Is server running** devuelve **True** si el servidor web integrado 4D está corriendo y **False** si el servidor web está apagado.<!-- END REF-->

Este comando ofrece el estado de funcionamiento del servidor web en el que se ejecuta: 

| **Contexto de ejecución**                                   | **Devuelve el estado de** |
| ----------------------------------------------------------- | ------------------------- |
| 4D monopuesto                                               | Servidor web 4D local     |
| 4D Server                                                   | Servidor web 4D Server    |
| 4D modo remoto (proceso local)                              | Servidor web 4D local     |
| 4D modo remoto (procedimiento almacenado en 4D Server)      | Servidor web 4D Server    |
| 4D modo remoto (procedimiento almacenado en otro 4D remoto) | Servidor web 4D remoto    |

#### Ejemplo 

Usted quiere verificar que el servidor web se está ejecutando:

```4d
 If(WEB Is server running)
    ... //hacer las acciones apropiadas
 End if
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1313 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


