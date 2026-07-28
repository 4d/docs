---
id: triggers-new
title: Triggers
---

para importar

<!-- REF triggers.vs-events.Desc -->

## Triggers vs eventos entidad ORDA

Los **triggers** (también conocidos como eventos base de datos) y los [**eventos entidad ORDA**](../ORDA/orda-events.md) tienen propósitos similares: establecen reglas para controlar las operaciones fundamentales sobre los datos (crear, editar o eliminar). Sin embargo, no funcionan al mismo nivel:

- los triggers se gestionan a nivel de base de datos, que es el nivel más bajo,
- Los eventos de entidad ORDA se gestionan en el nivel [datastore](../ORDA/dsMapping.md#datastore), que está relacionado con su lógica de negocio.

Las acciones sobre los datos ejecutadas a través del almacén de datos, como [`.save()`](../API/EntityClass.md#save) o [`.drop`](../API/EntityClass.md#drop), llamarán a los triggers, si los hubiera.

Por otra parte, las acciones se activaron a nivel de base de datos 4D usando los comandos de lenguaje clásico 4D, tal como [`SAVE RECORD`](../commands/save-record) o [acciones estándar](/Desktop/standard-actions) NO activará eventos de entidades ORDA.

<!-- END REF -->

