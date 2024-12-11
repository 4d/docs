---
id: read-only-state
title: Read only state
slug: /commands/read-only-state
displayed_sidebar: docs
---

<!--REF #_command_.Read only state.Syntax-->**Read only state** {( *tabla* )} : Boolean<!-- END REF-->
<!--REF #_command_.Read only state.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual probar el estado sólo lectura o Tabla por defecto, si se omite |
| Resultado | Boolean | &#8592; | El acceso a la tabla es sólo lectura (TRUE), o El acceso a la tabla es lectura/escritura (FALSE) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Read only state.Summary-->Esta función se utiliza para probar si *tabla* está en modo sólo lectura en el proceso en el que se llamó a la función.<!-- END REF--> Read only state devuelve TRUE si el estado de *tabla* es sólo lectura y FALSE si el estado de *tabla* es lectura/ escritura.

#### Ejemplo 

El siguiente ejemplo prueba el estado de la tabla \[Facturas\]. Si el estado de la tabla \[Facturas\] es sólo lectura, se aplica el modo lectura/escritura y se carga nuevamente el registro actual. 

```4d
 If(Read only state([Facturas]))
    READ WRITE([Facturas])
    LOAD RECORD([Facturas])
 End if
```

**Nota:** el registro actual se carga nuevamente para permitirle al usuario modificarlo. Un registro cargado anteriormente en modo sólo lectura permanecerá bloqueado hasta que se recargue en modo lectura/escritura.

#### Ver también 

[READ ONLY](read-only.md)  
[READ WRITE](read-write.md)  
*Record Locking*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 362 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


