---
id: is-in-set
title: Is in set
slug: /commands/is-in-set
displayed_sidebar: docs
---

<!--REF #_command_.Is in set.Syntax-->**Is in set** ( *conjunto* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is in set.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| conjunto | Text | &#8594;  | Nombre del conjunto a borrar |
| Resultado | Boolean | &#8592; | El registro actual está en el conjunto (True) o El registro actual no está en el conjunto (False) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is in set.Summary-->Is in set prueba si el registro actual de la tabla está en *conjunto*.<!-- END REF--> La función Is in set devuelve TRUE si el registro actual de la tabla está en *conjunto*, y FALSE si el registro actual de la tabla no está en *conjunto*.

#### Ejemplo 

El siguiente ejemplo es un método de objeto de un botón que prueba si el registro actual está en el conjunto de los mejores clientes:

```4d
 If(Is in set("Mejores")) // Probar si es un buen cliente
    ALERT("Es uno de los mejores clientes.")
 Else
    ALERT("No es uno de los mejores clientes.")
 End if
```

#### Ver también 

[ADD TO SET](add-to-set.md)  
[REMOVE FROM SET](remove-from-set.md)  