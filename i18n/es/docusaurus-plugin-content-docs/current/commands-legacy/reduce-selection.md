---
id: reduce-selection
title: REDUCE SELECTION
slug: /commands/reduce-selection
displayed_sidebar: docs
---

<!--REF #_command_.REDUCE SELECTION.Syntax-->**REDUCE SELECTION** ( {*tabla* ;} *Numero* )<!-- END REF-->
<!--REF #_command_.REDUCE SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual reducir la selección, o Tabla por defecto, si se omite |
| Numero | Integer | &#8594;  | Número de registros a conservar seleccionados |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.REDUCE SELECTION.Summary-->REDUCE SELECTION crea una nueva selección de registros para *tabla*.<!-- END REF--> El comando devuelve el primer número de registros de la selección actual de *tabla*. REDUCE SELECTION se aplica a la selección actual de *tabla* en el proceso actual. El primer registro de la nueva selección actual es el registro actual. 

**Nota:** si se ejecuta la instrucción REDUCE SELECTION(tabla;0), no hay más selección ni registro actual en *tabla*. 

#### Ejemplo 

El siguiente ejemplo busca las estadísticas correctas para una competencia mundial entre los distribuidores de más de 20 países. Por cada país, los 3 mejores distribuidores que han vendido más de $50 000 de productos están entre los 100 mejores distribuidores en el mundo y reciben un premio. Con unas pocas líneas de código, esta petición compleja se puede ejecutar utilizando búsquedas indexadas:

```4d
 CREATE EMPTY SET([Distribuidores];"Ganadores") // Crear un conjunto vacío
 SCAN INDEX([Distribuidores]Cantidad ventas;100;<) // Buscar desde el final del índice
 CREATE SET([Distribuidores];"100 mejores distribuidores") // Colocar los registros seleccionados en un conjunto
 For($Pais;1;Records in table([Paises])) // Por cada país
  // Buscar los distribuidores en este país
    QUERY([Distribuidores];[Distribuidores]País=[Países]Nombre;*) // ...que vendieron más de $50 000
    QUERY([Distribuidores];&;[Distribuidores]Cantidad ventas>=50000)
    CREATE SET([Distribuidores];"DistribuidoresGanadores") // Colocarlos en un conjunto
  // Deben estar en el gurpo de los 100 mejores distribuidores
    INTERSECTION("DistribuidoresGanadores";"100 mejores distribuidores";"DistribuidoresGanadores")
    USE SET("DistribuidoresGanadores") // Ganadores potenciales por país
  // Ordenarlos por los resultados en orden descendente
    ORDER BY([Distribuidores];[Distribuidores]Cantidad ventas;<)
    REDUCE SELECTION([Distribuidores];3) // Tomar los tres mejores distribuidores
    CREATE SET([Distribuidores];"DistribuidoresGanadores") // Ganadores por país
  // Colocarlos en la lista de ganadores por país
    UNION("DistribuidoresGanadores";"Ganadores";"Ganadores")
 End for
 CLEAR SET("100 mejores distribuidores") //No necesitamos más este conjunto
 CLEAR SET("DistribuidoresGanadores") // No necesitamos más este conjunto
 USE SET("Ganadores") // Acá tiene los ganadores
 CLEAR SET("Ganadores") // No necesitamos más este conjunto
 OUTPUT FORM([Distribuidores];"Carta de ganadores") // Seleccionar la carta
 PRINT SELECTION([Distribuidores]) // Imprimir las cartas
```

#### Ver también 

*Conjuntos*  
[ORDER BY](order-by.md)  
[QUERY](query.md)  
[SCAN INDEX](scan-index.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 351 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Modifica la selección actual ||
| Prohibido en el servidor ||


