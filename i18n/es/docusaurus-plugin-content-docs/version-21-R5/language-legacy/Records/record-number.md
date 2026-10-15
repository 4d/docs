---
id: record-number
title: Record number
slug: /commands/record-number
displayed_sidebar: docs
---

<!--REF #_command_.Record number.Syntax-->**Record number** ( *tabla* : Table ) : Integer<!-- END REF-->
<!--REF #_command_.Record number.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594; | Tabla de la cual devolver el número del registro actual o Tabla por defecto, si se omite |
| Resultado | Integer | &#8592; | Número del registro actual |
</div>
<!-- END REF-->

## Descripción 

<!--REF #_command_.Record number.Summary-->**Record number** devuelve el número del registro actual de *tabla*.<!-- END REF--> Si no hay registro actual, como cuando el puntero del registro está antes o después de la selección actual, **Record number** devuelve –1\. Si el registro es un nuevo registro que no ha sido guardado, **Record number** devuelve –3.

Los números de registro pueden variar. Los números de registros borrados son reutilizados. 

**4D Server:** este comando devuelve un resultado diferente en el contexto del evento de formulario On Validate dependiendo de si se ejecuta en 4D en modo local o 4D en modo remoto. En versión monopuesto, el comando devuelve un número de registro (el registro se considera como creado). En versión cliente/servidor, el comando devuelve -3 porque en ese caso, el registros ya ha sido creado en el servidor pero la información no ha sido enviada al cliente.

**Nota:** se recomienda utilizar el comando [Is new record](../commands/is-new-record) para verificar si el registro está en proceso de creación. 

## Ejemplo 

El siguiente ejemplo guarda el número del registro actual y luego busca en la tabla si otro registro tiene el mismo valor:

```4d
 $NumReg:=Record number([Personas]) // Obtener el número del registro
 QUERY([Personas];[Personas]Apellido=[Personas]Apellido) // ¿Alguien más con el mismo apellido?
  // Mostrar una alerta con el nombre de las personas que tienen el mismo apellido
 ALERT("Hay "+String(Records in selection([Personas])+" con ese apellido.")
 GOTO RECORD([Personas];$NumReg) // Regresar al registro original
```

## Ver también 

*Acerca de números de registros*  
[GOTO RECORD](../commands/goto-record)  
[Is new record](../commands/is-new-record)  
[Selected record number](../commands/selected-record-number)  
[Sequence number](../commands/sequence-number)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 243 |
| Hilo seguro | yes |


