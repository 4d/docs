---
id: trigger-event
title: Trigger event
slug: /commands/trigger-event
displayed_sidebar: docs
---

<!--REF #_command_.Trigger event.Syntax-->**Trigger event**  : Integer<!-- END REF-->
<!--REF #_command_.Trigger event.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | 0 = Fuera de todo evento de trigger 1 = Al guardar un nuevo registro 2 = Al guardar un registro existente 3 = Al borrar un registro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Trigger event.Summary-->El comando **[Trigger event](trigger-event.md)** se llama en un trigger y devuelve un valor numérico que indica el tipo del evento de la base, en otras palabras, la razón por la cual se invoca el trigger.<!-- END REF--> 

4D ofrece las siguientes constantes predefinidas del tema *Eventos trigger*:

| Constante                       | Tipo         | Valor |
| ------------------------------- | ------------ | ----- |
| On Deleting Record Event        | Entero largo | 3     |
| On Saving Existing Record Event | Entero largo | 2     |
| On Saving New Record Event      | Entero largo | 1     |

Dentro de un trigger, si efectúa operaciones de base de datos sobre varios registros, puede encontrar condiciones (generalmente registros bloqueados) que impiden al trigger ejecutar correctamente las operaciones para las cuales es llamado. Un ejemplo de esta situación es la actualización de varios registros en la tabla *\[Productos\]* cuando se añade un registro a la tabla *\[Facturas\]*. En este punto, debe detener las operaciones de la base y devolver un error de manera que el proceso llamante sepa que la petición no puede llevarse a cabo. Luego el proceso llamante debe poder cancelar, durante la transacción, las operaciones incompletas efectuadas por el trigger. Cuando se produce este tipo de situación, debe saber en el trigger si está en transacción antes de intentar hacer algo. Para hacer esto, utilice el comando [In transaction](in-transaction.md).

En 4D, no hay límite, a parte de la memoria disponible, para la llamada de triggers en cascada. Para optimizar la ejecución de un trigger, puede escribir el código de sus triggers dependiendo no sólo del evento de la base, sino también del nivel de la llamada cuando los triggers se llaman en cascada. Por ejemplo, durante una eliminación del evento trigger para la tabla *\[Facturas\]*, puede no efectuar la actualización del campo *\[Clientes\]* Ventas brutas si la eliminación del registro de la tabla *\[Facturas\]* es parte de la eliminación en cascada de facturas relacionadas con el registro en la tabla *\[Clientes\]* que está siendo eliminado. Para hacer esto, utilice los comandos [Trigger level](trigger-level.md) y [TRIGGER PROPERTIES](trigger-properties.md).

#### Ejemplo 

Utilice el comando **Trigger event** para estructurar sus triggers de esta manera:

```4d
  // Trigger de la tabla [toda tabla]
 var $0 : Integer
 $0:=0 // Asegurarse de que la petición de la base será concedida
 Case of
    :(Database event=On Saving New Record Event)
  // Ejecutar las acciones apropiadas para guardar un nuevo registro
    :(Database event=On Saving Existing Record Event)
  // Ejecutar las acciones apropiadas para guardar un registro existente
    :(Database event=On Deleting Record Event)
  // Ejecutar las acciones apropiadas para la eliminación de un registro
 End case
```

#### Ver también 

[In transaction](in-transaction.md)  
[Trigger level](trigger-level.md)  
[TRIGGER PROPERTIES](trigger-properties.md)  
*Triggers*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 369 |
| Hilo seguro | &check; |


