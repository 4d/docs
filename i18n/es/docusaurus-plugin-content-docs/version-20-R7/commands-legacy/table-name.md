---
id: table-name
title: Table name
slug: /commands/table-name
displayed_sidebar: docs
---

<!--REF #_command_.Table name.Syntax-->**Table name** ( numTabla | ptrTabla ) : Text<!-- END REF-->
<!--REF #_command_.Table name.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| numTabla &#124; ptrTabla | Entero largo, Puntero | &#8594;  | Número de tabla o puntero de tabla |
| Resultado | Text | &#8592; | Nombre de la tabla |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Table name.Summary-->El comando Table name devuelve el nombre de la tabla cuyo número o puntero se pasa en *numTabla* o *ptrTabla*.<!-- END REF-->

#### Ejemplo 

El siguiente es un ejemplo de un método genérico que muestra los registros de una tabla. La referencia a la tabla se pasa como un puntero para la tabla. El comando Table name se utiliza para incluir el nombre de la tabla en la barra de títulos de la ventana:

```4d
  // Método de proyecto SHOW CURRENT SELECTION
  // SHOW CURRENT SELECTION ( Puntero )
  // SHOW CURRENT SELECTION (->[Tabla])
 
 SET WINDOW TITLE("Registros para "+Table name($1)) // Fijar el título de la ventana
 DISPLAY SELECTION($1->) // Mostrar la selección
```

#### Ver también 

[Field name](field-name.md)  
[Last table number](last-table-number.md)  
[SET FIELD TITLES](set-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  
[Table](table.md)  