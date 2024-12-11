---
id: record-number
title: Record number
slug: /commands/record-number
displayed_sidebar: docs
---

<!--REF #_command_.Record number.Syntax-->**Record number** {( *tabla* )} : Integer<!-- END REF-->
<!--REF #_command_.Record number.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual devolver el número del registro actual o Tabla por defecto, si se omite |
| Resultado | Integer | &#8592; | Número del registro actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Record number.Summary-->**Record number** devuelve el número del registro actual de *tabla*.<!-- END REF--> Si no hay registro actual, como cuando el puntero del registro está antes o después de la selección actual, **Record number** devuelve –1\. Si el registro es un nuevo registro que no ha sido guardado, **Record number** devuelve –3.

Los números de registro pueden variar. Los números de registros borrados son reutilizados. 

**4D Server:** este comando devuelve un resultado diferente en el contexto del evento de formulario On Validate dependiendo de si se ejecuta en 4D en modo local o 4D en modo remoto. En versión monopuesto, el comando devuelve un número de registro (el registro se considera como creado). En versión cliente/servidor, el comando devuelve -3 porque en ese caso, el registros ya ha sido creado en el servidor pero la información no ha sido enviada al cliente.

**Nota:** se recomienda utilizar el comando [Is new record](is-new-record.md) para verificar si el registro está en proceso de creación. 

#### Ejemplo 

El siguiente ejemplo guarda el número del registro actual y luego busca en la tabla si otro registro tiene el mismo valor:

```4d
 $NumReg:=Record number([Personas]) // Obtener el número del registro
 QUERY([Personas];[Personas]Apellido=[Personas]Apellido) // ¿Alguien más con el mismo apellido?
  // Mostrar una alerta con el nombre de las personas que tienen el mismo apellido
 ALERT("Hay "+String(Records in selection([Personas])+" con ese apellido.")
 GOTO RECORD([Personas];$NumReg) // Regresar al registro original
```

#### Ver también 

*Acerca de números de registros*  
[GOTO RECORD](goto-record.md)  
[Is new record](is-new-record.md)  
[Selected record number](selected-record-number.md)  
[Sequence number](sequence-number.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 243 |
| Hilo seguro | &check; |


