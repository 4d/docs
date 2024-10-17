---
id: set-query-limit
title: SET QUERY LIMIT
slug: /commands/set-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY LIMIT.Syntax-->**SET QUERY LIMIT** ( *limite* )<!-- END REF-->
<!--REF #_command_.SET QUERY LIMIT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| limite | Integer | &#8594;  | Número límite de registros ó 0 para ilimitado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET QUERY LIMIT.Summary-->SET QUERY LIMIT permite pedirle a 4D detener todas la búsquedas posteriores en el proceso actual tan pronto encuentre el número de registros definido en *limite*.<!-- END REF--> 

Si por ejemplo, *limite* es igual a 1, las búsquedas se detendrán tan pronto como un registro coincida con la condiciones de la búsqueda. 

Para que las búsquedas sean ilimitadas de nuevo, llame SET QUERY LIMIT nuevamente con *limite* igual a 0.

**Advertencia:** SET QUERY LIMIT afecta todas las búsquedas posteriores en el proceso actual. RECUERDE siempre asociar una llamada a SET QUERY LIMIT(limite) (donde *limite>0*) con una llamada a SET QUERY LIMIT(0) para restablecer las búsquedas ilimitadas.

SET QUERY LIMIT cambia el comportamiento de los comandos de búsqueda:

* [QUERY](query.md "QUERY")
* [QUERY SELECTION](query-selection.md "QUERY SELECTION")
* [QUERY BY EXAMPLE](query-by-example.md "QUERY BY EXAMPLE")
* [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA")
* [QUERY BY SQL](query-by-sql.md "QUERY BY SQL")
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md "QUERY SELECTION BY FORMULA")
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md "QUERY SELECTION WITH ARRAY")
* [QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY")
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

Por otra parte, SET QUERY LIMIT no afecta los otros comandos que puedan modificar la selección actual de una tabla como [ALL RECORDS](all-records.md "ALL RECORDS"), [RELATE MANY](relate-many.md "RELATE MANY"), etc.

#### Ejemplo 1 

Para efectuar una búsqueda que corresponda a la fórmula “...encontrar diez clientes cuyas ventas sean superiores a $1 M...”, escriba el siguiente código:

```4d
 SET QUERY LIMIT(10)
 QUERY([Clientes];[Clientes]Ventas>1000000)
 SET QUERY LIMIT(0)
```

#### Ejemplo 2 

Ver el segundo ejemplo del comando [SET QUERY DESTINATION](set-query-destination.md "SET QUERY DESTINATION").

#### Ver también 

[Get query limit](get-query-limit.md)  
[QUERY](query.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[QUERY WITH ARRAY](query-with-array.md)  
[SET QUERY DESTINATION](set-query-destination.md)  