---
id: sequence-number
title: Sequence number
slug: /commands/sequence-number
displayed_sidebar: docs
---

<!--REF #_command_.Sequence number.Syntax-->**Sequence number** {( *tabla* )} : Integer<!-- END REF-->
<!--REF #_command_.Sequence number.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a numerar automáticamente o Tabla por defecto, si se omite |
| Resultado | Integer | &#8592; | Número automático |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Sequence number.Summary-->Sequence number devuelve el próximo número automático de *tabla*.<!-- END REF--> El número de secuencia es único para cada tabla. Este número es único para cada tabla. Este valor no se repite y se incrementa por cada nuevo registro creado en la tabla (\*).  

(\*) Por razones de optimización, la numeración automática sólo se inicia en la primera llamada del comando **Sequence number** o de una funcionalidad que tenga acceso al número de secuencia (ver abajo). Además, la numeración se puede modificar utilizando el comando [SET DATABASE PARAMETER](set-database-parameter.md). Por lo tanto, el valor devuelto no se debe considerar como el número de registros creados en *tabla*.

Por defecto, la numeración comienza en 1\. Puede cambiar la numeración para una tabla utilizando el comando [SET DATABASE PARAMETER](set-database-parameter.md). 

**Nota:** si no hay un registro actual y la numeración se ha modificado a través del comando [SET DATABASE PARAMETER](set-database-parameter.md), este número se reserva para la próxima creación de registro, pero sólo será devuelto por la función

**Sequence number** cuando el comando [SAVE RECORD](save-record.md) se haya llamado. 

La función **Sequence number** es útil en los siguientes casos:  
* Si el número de secuencia es mayor que 1
* Si el número de secuencia es parte de un código, por ejemplo un código de número de parte.

Para almacenar el número de secuencia con la ayuda de un método, cree un campo de tipo Entero largo en la tabla y asigne el número de secuencia al campo. 

El número de secuencia devuelto por esta función para la *tabla* es el mismo número que el generado al seleccionar la opción **Autoincrementar** para un campo de la *tabla* utilizando el inspector de estructura o al asignado utilizando el símbolo #N como valor por defecto para un campo de la *tabla* en un formulario. Para mayor información sobre la asignación de valores, consulte el Manual de Diseño de 4D.

**Nota:** la numeración automática también puede asignarse vía el atributo SQL AUTO\_INCREMENT.

Si la numeración debe comenzar en un valor diferente de 1, simplemente añada la diferencia a Sequence number. Por ejemplo, si el número de secuencia debe comenzar en 1 000, puede utilizar la siguiente línea de código para asignar el número:

```4d
 [Table1]Seq Field :=Sequence number([Table1])+999
```

#### Ejemplo 

El siguiente ejemplo es parte de un método de formulario. Estas líneas de código prueban si se trata de un nuevo registro (si el número de factura es igual a una cadena vacía). Si es un nuevo registro, el método asigna un número de factura. El número de factura está formado por dos partes: el número de secuencia, y el identificador del operador, el cual fue introducido al abrir la base. El número de secuencia es formateado como una cadena de cinco caracteres:

```4d
  // Si es una nueva factura, crear un número de factura
 If([Facturas]NumFactura="")
  // El número de factura es una cadena que se termina por el número de referencia del usuario.
    [Facturas]NumFactura:=String(Sequence number;"00000")+[Facturas]Usuario
 End if
```

#### Ver también 

*Acerca de números de registros*  
[Record number](record-number.md)  
[Selected record number](selected-record-number.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 244 |
| Hilo seguro | &check; |


