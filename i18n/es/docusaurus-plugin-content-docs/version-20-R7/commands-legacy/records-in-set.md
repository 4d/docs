---
id: records-in-set
title: Records in set
slug: /commands/records-in-set
displayed_sidebar: docs
---

<!--REF #_command_.Records in set.Syntax-->**Records in set** ( *conjunto* ) : Integer<!-- END REF-->
<!--REF #_command_.Records in set.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| conjunto | Text | &#8594;  | Nombre del conjunto a probar |
| Resultado | Integer | &#8592; | Número de registros en prueba |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Records in set.Summary-->Records in set devuelve el número de registros en *conjunto*.<!-- END REF--> Si *conjunto* no existe, o si no hay registros en *conjunto*, Records in set devuelve 0.

#### Ejemplo 

El siguiente ejemplo muestra una alerta indicando el porcentaje de clientes que se consideran como los mejores:

```4d
  // Calcular primero el porcentaje
 $Porcentaje :=(Records in set("Mejores")/Records in table([Clientes]))*100
  // Mostrar una alerta con el porcentaje
 ALERT(String($Porcentaje ;"##0%")+" de nuestros clientes son los mejores.")
```

#### Ver también 

[Records in selection](records-in-selection.md)  
[Records in table](records-in-table.md)  