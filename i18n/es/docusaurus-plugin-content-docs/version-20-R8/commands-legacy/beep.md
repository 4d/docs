---
id: beep
title: BEEP
slug: /commands/beep
displayed_sidebar: docs
---

<!--REF #_command_.BEEP.Syntax-->**BEEP**<!-- END REF-->
<!--REF #_command_.BEEP.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BEEP.Summary-->El comando BEEP hace que el PC o Macintosh generen un beep.<!-- END REF--> Su ordenador (en Windows o Macintosh) puede emitir un sonido diferente a un beep, dependiendo del sonido seleccionado en el panel de control de sonido. 

**Advertencia:** no llame BEEP desde un proceso de conexión Web, porque el beep se producirá en el equipo servidor Web 4D y no el equipo del navegador Web.

#### Ejemplo 

En el siguiente ejemplo, si una búsqueda no encuentra ningún registro, se emite un beep y aparece un mensaje de alerta:

```4d
 QUERY([Clientes];[Clientes]Nombre=$vsNombreaBuscar)
 If(Records in selection([Clientes])=0)
    BEEP
    ALERT("No hay ningún cliente con ese nombre.")
 End if
```

#### Ver también 

[PLAY](play.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 151 |
| Hilo seguro | &check; |


