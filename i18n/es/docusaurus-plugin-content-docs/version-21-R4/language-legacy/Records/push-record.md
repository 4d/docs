---
id: push-record
title: PUSH RECORD
slug: /commands/push-record
displayed_sidebar: docs
---

<!--REF #_command_.PUSH RECORD.Syntax-->**PUSH RECORD** ({ *tabla* : Table })<!-- END REF-->
<!--REF #_command_.PUSH RECORD.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594; | Tabla de la cual apilar el registro actual o Tabla por defecto, si se omite |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.PUSH RECORD.Summary-->PUSH RECORD apila una copia del registro actual de *tabla* en la pila de registros de la tabla.<!-- END REF--> PUSH RECORD puede ejecutarse antes de que se guarde un registro. 

Si apila un registro que fue desbloqueado, este registro permanece bloqueado para todos los otros procesos y usuarios hasta que lo desapile y descargue.

**Nota de compatibilidad**: a partir de la versión 11 de 4D, este comando no soporta subtablas.

## Ejemplo 

El siguiente ejemplo apila el registro de un cliente: 

```4d
 PUSH RECORD([Cliente]) // Poner el registro del cliente en la pila
```

## Ver también 

[POP RECORD](../commands/pop-record)  
*Uso de la pila de registros*  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 176 |
| Hilo seguro | yes |


