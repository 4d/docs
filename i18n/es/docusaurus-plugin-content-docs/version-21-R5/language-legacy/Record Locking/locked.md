---
id: locked
title: Locked
slug: /commands/locked
displayed_sidebar: docs
---

<!--REF #_command_.Locked.Syntax-->**Locked** ( *tabla* : Table ) : Boolean<!-- END REF-->
<!--REF #_command_.Locked.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594; | Tabla en la cual verificar si el registro actual está bloqueado o Tabla por defecto, si se omite |
| Resultado | Boolean | &#8592; | El registro está bloqueado (TRUE), o El registro no está bloqueado (FALSE) |
</div>
<!-- END REF-->

## Descripción 

<!--REF #_command_.Locked.Summary-->Locked prueba si el registro actual de *tabla* está bloqueado.<!-- END REF--> Utilice esta función para saber si un registro está bloqueado o no; luego tome la acción más conveniente, tal como darle al usuario la opción de esperar que el registro sea liberado o de anular al operación. 

Si Locked devuelve TRUE, el registro no puede guardarse porque está bloqueado por otro usuario o proceso, o está apilado en el proceso actual. En este caso, utilice [LOAD RECORD](../commands/load-record) para recargar el registro hasta que Locked devuelva FALSE.

SiLocked devuelve FALSE, el registro está desbloqueado, lo que significa que está bloqueado para los otros usuarios. Sólo el usuario local o el proceso actual puede modificar y guardar el registro. Una tabla debe estar en modo lectura/escritura si quiere modificar los registros que contiene.

Si trata de cargar un registro que ha sido borrado, Locked devuelve TRUE. Para evitar esperar por un registro que no existe, utilice el comando [LOCKED BY](../commands/locked-by). Si el registro ha sido borrado, el comando [LOCKED BY](../commands/locked-by) devuelve -1 en el parámetro proceso.

**Nota:** Locked devuelve False cuando no hay un registro actual en *tabla*, en otras palabras, cuando [Record number](record-number.md "Record number") devuelve -1.

Durante una transacción, [LOAD RECORD](../commands/load-record) y Locked se utilizan con frecuencia para probar la disponibilidad de los registros. Si un registro está bloqueado, es común cancelar la transacción.

## Ver también 

[Locked records info](../commands/locked-records-info)  
[LOAD RECORD](../commands/load-record)  
[LOCKED BY](../commands/locked-by)  
*Record Locking*  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 147 |
| Hilo seguro | yes |


