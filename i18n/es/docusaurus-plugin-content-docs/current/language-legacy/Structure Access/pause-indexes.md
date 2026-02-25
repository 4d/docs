---
id: pause-indexes
title: PAUSE INDEXES
slug: /commands/pause-indexes
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE INDEXES.Syntax-->**PAUSE INDEXES** ( *laTabla* )<!-- END REF-->
<!--REF #_command_.PAUSE INDEXES.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| laTable | Table | &#8594; | Tabla para la cual detener los índices |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|14|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.PAUSE INDEXES.Summary-->El comando **PAUSE INDEXES** desactiva temporalmente todos los índices de *laTabla*, excepto el índice de la llave primaria .<!-- END REF-->  
  
Los índices no se eliminan físicamente de los datos (archivo .4DIndx) o de la estructura de la base ( \_USER\_INDEXES, ver *Tablas sistema*), pero son inválidos y por lo tanto no se actualizan. Cuando los índices están desactivados, todas las operaciones realizadas en *laTabla* (búsquedas, ordenaciones, adiciones, modificaciones y eliminaciones de registros) ya no utilizan los índices.  
  
Este comando es especialmente útil cuando se va a importar o modificar grandes cantidades de datos en tablas que tienen varios índices. Como 4D debe actualizar los índices cada vez que un registro se valida, la operación podría tomar una cantidad considerable de tiempo. Desactivar los índices de antemano permite acelerar significativamente la operación.  
  
Para reactivar los índices después de que termina la operación, puede llamar al comando [RESUME INDEXES](../commands/resume-indexes) para *laTabla*.  
  
**Nota*:*** puede obtener un resultado similar utilizando los comandos [CREATE INDEX](../commands/create-index) y [DELETE INDEX](../commands/delete-index), pero con diferencias notables:

* es necesario llamar a [DELETE INDEX](../commands/delete-index) / [CREATE INDEX](../commands/create-index) para cada índice en *laTabla*.
* llamar a los comandos [DELETE INDEX](../commands/delete-index) / [CREATE INDEX](../commands/create-index) cambia el número interno del índice, lo que no ocurre con **PAUSE INDEXES** / [RESUME INDEXES](../commands/resume-indexes). Cambiar el número de índice generará una reindexación automática de los datos si el conjunto de datos cambia.

Si llama al comando **PAUSE INDEXES** para una tabla y luego sale de la base sin haber llamado al comando [RESUME INDEXES](../commands/resume-indexes) para esta tabla, todos los índices de la tabla se reconstruyen automáticamente cuando se reinicie la base.

**Nota**: este comando no se puede ejecutar desde un 4D remoto.  

## Ejemplo 

Ejemplo de método de importación masivo de datos:

```4d
 PAUSE INDEXES([Articles])
 IMPORT DATA("HugeImport.txt") //Importando
 RESUME INDEXES([Articles])
```

## Ver también 

[DELETE INDEX](../commands/delete-index)  
[RESUME INDEXES](../commands/resume-indexes)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1293 |
| Hilo seguro | yes |


