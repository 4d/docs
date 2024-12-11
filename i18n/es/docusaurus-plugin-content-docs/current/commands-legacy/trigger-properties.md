---
id: trigger-properties
title: TRIGGER PROPERTIES
slug: /commands/trigger-properties
displayed_sidebar: docs
---

<!--REF #_command_.TRIGGER PROPERTIES.Syntax-->**TRIGGER PROPERTIES** ( *nivelTrigger* ; *eventoBase* ; *numTabla* ; *regNum* )<!-- END REF-->
<!--REF #_command_.TRIGGER PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nivelTrigger | Integer | &#8594;  | Nivel de ejecución del trigger |
| eventoBase | Integer | &#8592; | Evento de base de datos |
| numTabla | Integer | &#8592; | Número de la tabla |
| regNum | Integer | &#8592; | Número del registro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.TRIGGER PROPERTIES.Summary-->El comando **TRIGGER PROPERTIES** devuelve la información sobre el nivel de ejecución del trigger que se pasa en *nivelTrigger*.<!-- END REF--> Puede utilizar **TRIGGER PROPERTIES** junto con [Trigger level](trigger-level.md) para efectuar diferentes acciones en función de la cascada del trigger. Para mayor información, consulte la descripción de triggers en cascada en la sección *Triggers*.

Si pasa un nivel de ejecución de trigger inexistente, el comando devuelve 0 (cero) en todos los parámetros.

La naturaleza del evento de base de datos para el nivel de ejecución del trigger se devuelve en *dbEvent*. En el tema *Eventos trigger* se ofrecen las siguientes constantes predefinidas:

| Constante                       | Tipo         | Valor |
| ------------------------------- | ------------ | ----- |
| On Deleting Record Event        | Entero largo | 3     |
| On Saving Existing Record Event | Entero largo | 2     |
| On Saving New Record Event      | Entero largo | 1     |

El número de tabla y de registro para el registro relacionado por el evento de base de datos para el nivel de ejecución del trigger se devuelven en *tablaNum* y *regNum*.

#### Ver también 

*Acerca de números de registros*  
[Trigger event](trigger-event.md)  
[Trigger level](trigger-level.md)  
*Triggers*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 399 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


