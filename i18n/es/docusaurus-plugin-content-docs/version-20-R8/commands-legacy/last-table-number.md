---
id: last-table-number
title: Last table number
slug: /commands/last-table-number
displayed_sidebar: docs
---

<!--REF #_command_.Last table number.Syntax-->**Last table number**  : Integer<!-- END REF-->
<!--REF #_command_.Last table number.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de tabla más alto en la base |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Last table number.Summary-->Last table number devuelve el número de tablas en la base.<!-- END REF--> Las tablas están numeradas en el orden en el cual fueron creadas. Si ninguna tabla ha sido borrada de la base, el comando devuelve el número de tablas presentes en la base. En el caso de bucles iterativos sobre los números de tablas de la base, debe utilizar el comando [Is table number valid](is-table-number-valid.md "Is table number valid") para verificar que la tabla no haya sido borrada.

#### Ejemplo 

El siguiente ejemplo inicializa los elementos del array *asTablas,* con los nombres de las tablas definidos en la base. Este array puede utilizarse como lista desplegable (o pestañas, área de desplazamiento, etc.), para mostrar en un formulario la lista de tablas de la base: 

```4d
 ARRAY TEXT(asTablas;Last table number)
 If(Last table number>0) //Si la Base de datos no tiene tablas
    For($vlTablas;Size of array(asTablas);1;-1)
       If(Is table number valid($vlTablas))
          asTablas{$vlTablas}:=Table name($vlTablas)
       Else
          DELETE FROM ARRAY(asTablas;$vlTablas)
       End if
    End for
 End if
```

#### Ver también 

[Last field number](last-field-number.md)  
[Is table number valid](is-table-number-valid.md)  
[Table name](table-name.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 254 |
| Hilo seguro | &check; |


