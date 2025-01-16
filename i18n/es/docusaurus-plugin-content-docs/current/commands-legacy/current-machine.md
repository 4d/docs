---
id: current-machine
title: Current machine
slug: /commands/current-machine
displayed_sidebar: docs
---

<!--REF #_command_.Current machine.Syntax-->**Current machine**  : Text<!-- END REF-->
<!--REF #_command_.Current machine.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nombre del equipo en la red |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Current machine.Summary-->El comando Current machine devuelve el nombre de su equipo, como está definido en el panel de control de red.<!-- END REF-->

#### Ejemplo 

Incluso si no está corriendo la versión cliente/servidor de 4D, su aplicación puede incluir servicios de red que necesiten que su equipo esté configurado correctamente. En el Método de base On Startup de su aplicación, puede escribir:

```4d
 If((Current machine="")|(Current system user=""))
  // Mostrar una caja de diálogo pidiendo al usuario configurar sus parámetros de red
 End if
```

#### Ver también 

[Current system user](current-system-user.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 483 |
| Hilo seguro | &check; |


